import { useState, useEffect } from "react";
import {
  ALLOWED_EMAIL,
  ALLOWED_PASSWORD,
  ALLOWED_SIGNIN_KEY,
} from "@/config/auth";
import { VERIFY_ORIGIN, API_BASE } from "@/config/appConfig";

const QRGenerator = () => {
  const [internData, setInternData] = useState({
    name: "",
    uid: "",
    domain: "",
    coordinator: "ER Ajay Kumar Yadav",
    status: "Verified intern at Sofixs",
    website: "www.sofixs.com",
    photoUrl: "",
    signatureUrl: "",
  });
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedCodes, setGeneratedCodes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [lastGenerated, setLastGenerated] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [signInPassword, setSignInPassword] = useState("");
  const [showSignInButton, setShowSignInButton] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [signaturePreview, setSignaturePreview] = useState("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadingSignature, setUploadingSignature] = useState(false);

  // helper to determine API base (removes trailing slash)
  // Uses API_BASE from appConfig which automatically switches based on VITE_ENV
  const getApiBase = () => {
    // Use the configured API_BASE which respects VITE_ENV setting
    return String(API_BASE || "http://localhost:5000").replace(/\/$/, "");
  };

  // Check if sign-in button should be visible based on referrer and email
  useEffect(() => {
    const checkSignInAccess = () => {
      // Check if the referrer is from sofixs.com
      const referrer = document.referrer;
      const isSofixsDomain =
        referrer &&
        (referrer.includes("sofixs.com") || referrer.includes("localhost")); // Allow localhost for testing

      // Check if the user email is stored in localStorage
      const userEmail = localStorage.getItem("userEmail");
      const isAuthorizedEmail = userEmail === ALLOWED_EMAIL;

      // Show sign-in button only if both conditions are met
      setShowSignInButton(isSofixsDomain && isAuthorizedEmail);
    };

    checkSignInAccess();

    // Re-check when the component mounts or when the referrer changes
    window.addEventListener("load", checkSignInAccess);
    return () => window.removeEventListener("load", checkSignInAccess);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInternData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Upload image to Cloudinary via backend
  const uploadImageToCloudinary = async (file, type) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const apiBase = getApiBase();

      // Quick health-check: if backend is unreachable we fail fast with a clearer message
      try {
        const h = await fetch(`${apiBase}/_health`, {
          method: "GET",
          mode: "cors",
        });
        if (!h.ok) {
          throw new Error(`health check failed (status ${h.status})`);
        }
      } catch (err) {
        throw new Error(`Backend unreachable: ${err.message}`);
      }

      const response = await fetch(`${apiBase}/upload-image`, {
        method: "POST",
        body: formData,
      });

      // If server returned non-OK, try to extract JSON or text error safely
      if (!response.ok) {
        let errorText = `Upload failed (status ${response.status})`;
        try {
          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const errJson = await response.json();
            errorText =
              errJson.error || errJson.message || JSON.stringify(errJson);
          } else {
            const txt = await response.text();
            if (txt) errorText = txt;
          }
        } catch (e) {
          // ignore parse errors
        }
        throw new Error(errorText);
      }

      // Parse JSON response robustly (handle empty or non-json bodies)
      let data;
      try {
        data = await response.json();
      } catch (e) {
        const txt = await response.text();
        if (txt) {
          try {
            data = JSON.parse(txt);
          } catch (err) {
            data = { url: txt };
          }
        } else {
          throw new Error("Empty response from upload server");
        }
      }

      return data.url;
    } catch (error) {
      console.error("Upload error:", error);
      alert(`Failed to upload ${type}: ${error.message}`);
      return null;
    }
  };

  // Handle photo file selection
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }

    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));

    // Upload immediately
    setUploadingPhoto(true);
    const cloudinaryUrl = await uploadImageToCloudinary(file, "photo");
    setUploadingPhoto(false);

    if (cloudinaryUrl) {
      setInternData((prev) => ({ ...prev, photoUrl: cloudinaryUrl }));
    }
  };

  // Handle signature file selection
  const handleSignatureChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }

    setSignatureFile(file);
    setSignaturePreview(URL.createObjectURL(file));

    // Upload immediately
    setUploadingSignature(true);
    const cloudinaryUrl = await uploadImageToCloudinary(file, "signature");
    setUploadingSignature(false);

    if (cloudinaryUrl) {
      setInternData((prev) => ({ ...prev, signatureUrl: cloudinaryUrl }));
    }
  };

  // Load generated codes from localStorage on component mount
  useEffect(() => {
    const savedCodes = localStorage.getItem("generatedQRCodes");
    if (savedCodes) {
      setGeneratedCodes(JSON.parse(savedCodes));
    }
    const allowed = localStorage.getItem(ALLOWED_SIGNIN_KEY);
    if (allowed === "true") setIsSignedIn(true);
  }, []);

  // helper to build a canonical payload and encoded verify URL from intern data
  const buildEncodedPayload = (data) => {
    const payloadBase = {
      name: data.name,
      uid: data.uid,
      domain: data.domain,
      coordinator: data.coordinator,
      status: data.status,
      website: data.website,
      generatedAt: new Date().toISOString(),
    };

    // First encode the base payload to derive a short verification code
    const baseJson = JSON.stringify(payloadBase);
    const encodedBase =
      typeof window !== "undefined"
        ? btoa(unescape(encodeURIComponent(baseJson)))
        : Buffer.from(baseJson).toString("base64");

    // create a human-friendly verification code: sofixsintern<YYYYMMDD>/<HHMMSS>/<nnn>
    const now = new Date();
    const ymd = now.toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
    const hms = now.toTimeString().slice(0, 8).replace(/:/g, ""); // HHMMSS
    const counter = ("" + (now.getTime() % 1000)).padStart(3, "0");
    const shortCode = `sofixsintern${ymd}/${hms}/${counter}`;

    // now create final payload that includes the verifyCode and re-encode it
    const payload = {
      ...payloadBase,
      verifyCode: shortCode,
      photoUrl: data.photoUrl,
      signatureUrl: data.signatureUrl,
    };
    const json = JSON.stringify(payload);
    const encoded =
      typeof window !== "undefined"
        ? btoa(unescape(encodeURIComponent(json)))
        : Buffer.from(json).toString("base64");

    const verifyUrlSPA = `${VERIFY_ORIGIN}/verify?d=${encoded}`;
    // backend origin used in QR payloads (strip trailing slash)
    const backendOriginForQR = getApiBase();
    const verifyUrlForQR = `${backendOriginForQR}/verify?d=${encoded}`;

    return { payload, encoded, verifyUrlSPA, verifyUrlForQR, shortCode };
  };

  // Fill the form with the sample data you asked for
  const handleFillSample = () => {
    setInternData({
      name: "bibek",
      uid: "567",
      domain: "asdfg",
      coordinator: "ER Ajay Kumar Yadav",
      status: "Verified intern at Sofixs",
      website: "www.sofixs.com",
      photoUrl: "",
      signatureUrl: "",
    });
    // Clear file uploads
    setPhotoFile(null);
    setSignatureFile(null);
    setPhotoPreview("");
    setSignaturePreview("");
    alert("Sample data filled. Please upload photo and signature images.");
  };

  // Open the verification page in a new tab using the current form data (no backend call)
  const handlePreview = () => {
    if (!internData.name || !internData.uid) {
      alert("Please fill in at least the name and UID!");
      return;
    }

    const { payload, verifyUrlSPA } = buildEncodedPayload(internData);

    // store last generated for preview and quick access (SPA link)
    const newCode = {
      id: Date.now(),
      ...internData,
      verifyUrlSPA,
      payload,
      generatedAt: new Date().toLocaleString(),
    };

    setLastGenerated(newCode);
    // open verification page so it "appears in browser" for search/address bar validation
    window.open(verifyUrlSPA, "_blank");
  };

  const handleGenerate = async () => {
    if (showSignInButton && !isSignedIn) {
      setShowSignInModal(true);
      return;
    }

    if (!internData.name || !internData.uid) {
      alert("Please fill in at least the name and UID!");
      return;
    }

    setLoading(true);
    setQrUrl("");

    const apiBase = getApiBase();

    const { payload, verifyUrlForQR, verifyUrlSPA, shortCode } =
      buildEncodedPayload(internData);
    // Attractive multi-column table format for scanned QR text
    // Displays credential details in a professional certificate-style layout
    const colWidth = 54;
    const padRight = (str, len) => String(str || "").padEnd(len, " ");
    const center = (str, len) => {
      str = String(str || "");
      const pad = Math.max(0, len - str.length);
      const left = Math.floor(pad / 2);
      const right = pad - left;
      return " ".repeat(left) + str + " ".repeat(right);
    };

    const header = `🎓 SOFIXS PRIVATE LIMITED — INTERNSHIP VERIFICATION`;
    const separator = "═".repeat(colWidth);
    const smallSep = "─".repeat(colWidth);

    const qrText =
      `\n${center(
        header,
        colWidth,
      )}\n${separator}\n\nVERIFY: ${verifyUrlForQR}\n\n🔐 CODE: ${shortCode}\n\n${smallSep}\n\n` +
      `NAME       : ${padRight(internData.name, colWidth - 14)}\n` +
      `UID        : ${padRight(internData.uid, colWidth - 14)}\n` +
      `DOMAIN     : ${padRight(internData.domain, colWidth - 14)}\n` +
      `COORDINATOR: ${padRight(internData.coordinator, colWidth - 14)}\n` +
      `STATUS     : ${padRight(internData.status, colWidth - 14)}\n` +
      `WEBSITE    : ${padRight(internData.website, colWidth - 14)}\n\n` +
      `${smallSep}\nGenerated: ${new Date().toLocaleString()}\nContact: info@sofixs.com | www.sofixs.com\n${separator}\n`;

    try {
      // send only the short verify URL as QR payload (keeps scanner output clean)
      const response = await fetch(`${apiBase}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: verifyUrlForQR,
          preferPretty: true,
          meta: {
            name: internData.name,
            uid: internData.uid,
            payload: payload,
          },
        }),
      });

      // Handle error responses safely
      if (!response.ok) {
        let msg = `Generate request failed (status ${response.status})`;
        try {
          const contentType = response.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            const errJson = await response.json();
            msg = errJson.error || errJson.message || JSON.stringify(errJson);
          } else {
            const txt = await response.text();
            if (txt) msg = txt;
          }
        } catch (e) {
          // ignore parse errors
        }
        throw new Error(msg);
      }

      let data;
      try {
        data = await response.json();
      } catch (e) {
        const txt = await response.text();
        try {
          data = txt ? JSON.parse(txt) : null;
        } catch (err) {
          data = { imageUrl: txt };
        }
        if (!data)
          throw new Error("Invalid or empty response from generate endpoint");
      }

      setQrUrl(data.imageUrl);

      // prefer short/pretty URL returned by the backend; fall back to the verify URL we generated
      const finalServerUrl =
        data.displayUrl || data.prettyUrl || data.shortUrl || verifyUrlForQR;

      // Add or update generated codes list (payload already contains verifyCode)
      const newCode = {
        id: editingId || Date.now(),
        ...internData,
        photoUrl: internData.photoUrl,
        signatureUrl: internData.signatureUrl,
        qrUrl: data.imageUrl,
        verifyUrl: finalServerUrl,
        shortUrl: data.shortUrl || null,
        prettyUrl: data.prettyUrl || null,
        displayUrl: data.displayUrl || null,
        verifyUrlSPA,
        payload,
        generatedAt: new Date().toLocaleString(),
      };

      let updatedCodes;
      if (editingId) {
        updatedCodes = generatedCodes.map((c) =>
          c.id === editingId ? newCode : c,
        );
        setEditingId(null);
      } else {
        updatedCodes = [newCode, ...generatedCodes];
      }

      setGeneratedCodes(updatedCodes);
      localStorage.setItem("generatedQRCodes", JSON.stringify(updatedCodes));

      // Clear form but keep default values
      setInternData({
        name: "",
        uid: "",
        domain: "",
        coordinator: "ER Ajay Kumar Yadav",
        status: "Verified intern at Sofixs",
        website: "www.sofixs.com",
        photoUrl: "",
        signatureUrl: "",
      });
      // Clear uploaded files and previews
      setPhotoFile(null);
      setSignatureFile(null);
      setPhotoPreview("");
      setSignaturePreview("");
      // store last generated for preview
      setLastGenerated(newCode);
    } catch (error) {
      alert("Failed to generate QR. Please check backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    const updatedCodes = generatedCodes.filter((code) => code.id !== id);
    setGeneratedCodes(updatedCodes);
    localStorage.setItem("generatedQRCodes", JSON.stringify(updatedCodes));
  };

  const handleEdit = (id) => {
    const codeToEdit = generatedCodes.find((code) => code.id === id);
    if (codeToEdit) {
      setInternData({
        name: codeToEdit.name,
        uid: codeToEdit.uid,
        domain: codeToEdit.domain,
        coordinator: codeToEdit.coordinator || "ER Ajay Kumar Yadav",
        status: codeToEdit.status || "Verified intern at Sofixs",
        website: codeToEdit.website || "www.sofixs.com",
        photoUrl: codeToEdit.photoUrl || "",
        signatureUrl: codeToEdit.signatureUrl || "",
      });
      setEditingId(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const copyToClipboard = async (text) => {
    if (!text) {
      alert("No URL available to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied URL to clipboard");
    } catch (err) {
      // fallback prompt
      window.prompt("Copy the URL below:", text);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-teal-900 px-4 py-8">
      {/* Sign-in modal */}
      {showSignInButton && showSignInModal && !isSignedIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">
              Sign in to generate QR codes
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Email: <span className="font-medium">{ALLOWED_EMAIL}</span>
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="Enter password"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowSignInModal(false)}
                className="px-3 py-2 rounded-md border"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (signInPassword === ALLOWED_PASSWORD) {
                    localStorage.setItem(ALLOWED_SIGNIN_KEY, "true");
                    setIsSignedIn(true);
                    setShowSignInModal(false);
                    setSignInPassword("");
                  } else {
                    alert("Invalid password");
                  }
                }}
                className="px-4 py-2 bg-teal-600 text-white rounded-md"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        <div className="relative">
          {/* Top decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500"></div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src="/logosofixs.png"
                  alt="Sofixs Logo"
                  className="h-16 w-auto"
                />
                <div className="border-l-2 border-teal-200 pl-4">
                  <h2 className="text-2xl font-bold text-teal-800">
                    Sofixs Private Limited
                  </h2>
                  <p className="text-sm text-teal-600">
                    Innovate • Create • Transform
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">
                  Contact Information:
                </p>
                <p className="text-sm text-gray-600">📞 +977-9829911255</p>
                <p className="text-sm text-gray-600">📧 info@sofixs.com</p>
                <p className="text-sm text-gray-600">🌐 www.sofixs.com</p>
                {showSignInButton && isSignedIn && (
                  <div className="mt-2">
                    <button
                      onClick={() => {
                        localStorage.removeItem(ALLOWED_SIGNIN_KEY);
                        localStorage.removeItem("userEmail");
                        setIsSignedIn(false);
                      }}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="relative mb-8">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Internship Verification Portal
              </h1>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={internData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-all duration-200"
                      placeholder="Enter intern name (e.g., Bibek Kumar Thakur)"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      UID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="uid"
                      value={internData.uid}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-all duration-200"
                      placeholder="Enter UID (e.g., Sofixsintern001)"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Domain <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="domain"
                      value={internData.domain}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-all duration-200"
                      placeholder="Enter domain (e.g., React.js & Node.js)"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Internship Coordinator{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="coordinator"
                      value={internData.coordinator}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50 transition-all duration-200"
                      placeholder="Enter coordinator name (e.g., ER Ajay Kumar Yadav)"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Intern Photo
                    </label>
                    <div className="mt-1">
                      <input
                        type="file"
                        id="photoFile"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-4">
                        <label
                          htmlFor="photoFile"
                          className="cursor-pointer inline-flex items-center px-4 py-3 border-2 border-teal-300 rounded-lg shadow-sm text-sm font-medium text-teal-700 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {uploadingPhoto
                            ? "Uploading..."
                            : photoFile
                              ? "Change Photo"
                              : "Choose Photo"}
                        </label>
                        {photoPreview && (
                          <div className="relative">
                            <img
                              src={photoPreview}
                              alt="Photo preview"
                              className="w-20 h-20 object-cover rounded-full border-4 border-teal-400 shadow-lg"
                            />
                            {uploadingPhoto && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                                <svg
                                  className="animate-spin h-6 w-6 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {internData.photoUrl && !uploadingPhoto && (
                        <p className="mt-2 text-xs text-green-600 font-semibold flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Uploaded to Cloudinary
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Coordinator Signature
                    </label>
                    <div className="mt-1">
                      <input
                        type="file"
                        id="signatureFile"
                        accept="image/*"
                        onChange={handleSignatureChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="signatureFile"
                        className="cursor-pointer inline-flex items-center px-4 py-3 border-2 border-teal-300 rounded-lg shadow-sm text-sm font-medium text-teal-700 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        {uploadingSignature
                          ? "Uploading..."
                          : signatureFile
                            ? "Change Signature"
                            : "Choose Signature"}
                      </label>
                      {signaturePreview && (
                        <div className="mt-3 relative inline-block">
                          <div className="bg-gradient-to-br from-gray-50 to-white p-2 rounded-lg border-2 border-teal-300 shadow-md">
                            <img
                              src={signaturePreview}
                              alt="Signature preview"
                              className="w-32 h-16 object-contain"
                            />
                          </div>
                          {uploadingSignature && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                              <svg
                                className="animate-spin h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            </div>
                          )}
                        </div>
                      )}
                      {internData.signatureUrl && !uploadingSignature && (
                        <p className="mt-2 text-xs text-green-600 font-semibold flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Uploaded to Cloudinary
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="mt-8 w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold px-6 py-4 rounded-lg 
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 
                    focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-60 disabled:cursor-not-allowed
                    relative overflow-hidden group"
                >
                  <span
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
                  ></span>
                  <span className="relative flex items-center justify-center">
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Generating...
                      </span>
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          ></path>
                        </svg>
                        Generate Secure QR Code
                      </>
                    )}
                  </span>
                </button>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleFillSample}
                    className="px-4 py-3 rounded-md border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50"
                  >
                    Fill sample
                  </button>

                  <button
                    type="button"
                    onClick={handlePreview}
                    className="px-4 py-3 rounded-md border border-teal-500 text-sm font-medium text-teal-700 hover:bg-teal-50"
                  >
                    Preview in Browser
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md">
                {qrUrl ? (
                  <div className="text-center">
                    <div className="relative inline-block">
                      <img
                        src={qrUrl}
                        alt="Verification QR Code"
                        className="w-72 h-72 rounded-lg shadow-2xl mb-4 border-4 border-white"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-col items-center gap-2">
                      <p className="text-sm font-medium text-gray-700">
                        Scan QR code to verify intern credentials
                      </p>
                      <a
                        href={
                          (lastGenerated &&
                            (lastGenerated.displayUrl ||
                              lastGenerated.verifyUrl)) ||
                          "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-white border rounded-md text-sm font-medium text-teal-700 hover:bg-gray-50"
                      >
                        Open verification page (server)
                      </a>

                      <div className="mt-2 w-full text-left text-xs text-gray-600">
                        <div className="flex items-center justify-between mb-1">
                          <div className="truncate mr-2">
                            SPA:{" "}
                            {(lastGenerated && lastGenerated.verifyUrlSPA) ||
                              "—"}
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                (lastGenerated && lastGenerated.verifyUrlSPA) ||
                                  "",
                              )
                            }
                            className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs"
                          >
                            Copy
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="truncate mr-2">
                            Server:{" "}
                            {(lastGenerated &&
                              (lastGenerated.displayUrl ||
                                lastGenerated.prettyUrl ||
                                lastGenerated.shortUrl ||
                                lastGenerated.verifyUrl)) ||
                              "—"}
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                (lastGenerated &&
                                  (lastGenerated.verifyUrl ||
                                    lastGenerated.verifyUrlForQR)) ||
                                  "",
                              )
                            }
                            className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs"
                          >
                            Copy
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center mt-1 text-sm text-green-600">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Saved to Cloudinary</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-400 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                    <p className="text-lg font-medium text-gray-700">
                      QR Code Preview
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Complete the form to generate a secure QR code
                    </p>
                  </div>
                )}
              </div>
            </div>

            {qrUrl && (
              <div className="mt-8">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-2 border-teal-200 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <svg
                        className="w-7 h-7 mr-3 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      Verified Intern Details
                    </h2>
                    <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold flex items-center shadow-md">
                      <span className="w-2.5 h-2.5 bg-white rounded-full mr-2 animate-pulse"></span>
                      Verified
                    </span>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-300 shadow-md">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b-2 border-gray-200">
                          <td className="py-4 px-5 bg-gray-100 font-bold text-gray-800 w-1/4 text-sm">
                            Name
                          </td>
                          <td className="py-4 px-5 text-gray-900 font-semibold text-base">
                            {(lastGenerated && lastGenerated.name) ||
                              internData.name}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-gray-200">
                          <td className="py-4 px-5 bg-gray-100 font-bold text-gray-800 text-sm">
                            UID
                          </td>
                          <td className="py-4 px-5 text-gray-900 font-semibold text-base">
                            <div className="flex items-center gap-3">
                              <span>
                                {(lastGenerated && lastGenerated.uid) ||
                                  internData.uid}
                              </span>
                              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold shadow-sm">
                                Verified ✓
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b-2 border-gray-200">
                          <td className="py-4 px-5 bg-gray-100 font-bold text-gray-800 text-sm">
                            Domain
                          </td>
                          <td className="py-4 px-5 text-gray-900 font-semibold text-base">
                            {(lastGenerated && lastGenerated.domain) ||
                              internData.domain}
                          </td>
                        </tr>
                        <tr className="border-b-2 border-gray-200">
                          <td className="py-4 px-5 bg-gray-100 font-bold text-gray-800 text-sm">
                            Coordinator
                          </td>
                          <td className="py-4 px-5 text-gray-900 font-semibold text-base">
                            {(lastGenerated && lastGenerated.coordinator) ||
                              internData.coordinator}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 px-5 bg-gray-100 font-bold text-gray-800 text-sm">
                            Website
                          </td>
                          <td className="py-4 px-5 text-gray-900 font-semibold text-base">
                            <a
                              href="https://www.sofixs.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 font-bold underline"
                            >
                              {internData.website}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Generated QR Codes List */}
            <div className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600">
                  <h3 className="text-xl font-bold text-white">
                    Generated QR Codes
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {generatedCodes.map((code) => (
                    <div
                      key={code.id}
                      className="p-6 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-gray-800">
                            {code.name}
                          </h4>
                          <div className="mt-1 space-y-1">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">UID:</span>{" "}
                              {code.uid}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Domain:</span>{" "}
                              {code.domain}
                            </p>
                            <p className="text-sm text-gray-500">
                              Generated: {code.generatedAt}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleEdit(code.id)}
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-150"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this QR code?",
                                )
                              ) {
                                handleDelete(code.id);
                              }
                            }}
                            className="text-red-600 hover:text-red-800 transition-colors duration-150"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                          {/* QR Code Section */}
                          <div className="flex-shrink-0">
                            <div className="bg-white p-3 rounded-xl shadow-md border-2 border-teal-200">
                              <img
                                src={code.qrUrl}
                                alt={`QR Code for ${code.name}`}
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg"
                              />
                            </div>
                            <p className="text-xs text-center text-gray-500 mt-2 font-medium">
                              Scan to verify
                            </p>
                          </div>

                          {/* Details Section */}
                          <div className="flex-grow w-full space-y-4">
                            {/* Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                                  STATUS
                                </p>
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-green-600 text-white border-2 border-green-700 shadow-md">
                                  <svg
                                    className="w-4 h-4 mr-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  Verified Intern
                                </span>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                                  COORDINATOR
                                </p>
                                <p className="text-sm text-gray-900 font-bold">
                                  {code.coordinator || "ER Ajay Kumar Yadav"}
                                </p>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                              <a
                                href={code.verifyUrl || code.displayUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-800"
                                style={{
                                  backgroundColor: "#0ea5a4",
                                  borderColor: "#0c8c8c",
                                }}
                              >
                                <svg
                                  className="w-6 h-10"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2.5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                                <span className="text-white">
                                  View Certificate
                                </span>
                              </a>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    code.verifyUrl || code.displayUrl || "",
                                  )
                                }
                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-white border-2 border-gray-400 text-gray-900 text-sm font-bold rounded-lg hover:bg-gray-100 hover:border-teal-600 hover:text-teal-700 shadow-lg hover:shadow-xl transition-all duration-200"
                              >
                                <svg
                                  className="w-5 h-5 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                                Copy Link
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {generatedCodes.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                      No QR codes generated yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
