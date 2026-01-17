import React, { useMemo, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Mobile-first attractive verification page. Expects `d` query param containing base64(JSON(payload)).
const decodeParam = (d: string | null) => {
  if (!d) return null;
  try {
    // atob -> decode base64, then decodeURIComponent to restore unicode
    const decoded = decodeURIComponent(escape(atob(d)));
    return JSON.parse(decoded);
  } catch (e) {
    try {
      // fallback for URI encoded base64
      const jsonStr = atob(d);
      return JSON.parse(jsonStr);
    } catch (err) {
      return null;
    }
  }
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Verify: React.FC = () => {
  const query = useQuery();
  const d = query.get("d");
  const payload = useMemo(() => decodeParam(d), [d]);

  // short verification code for human cross-check (if payload already provides one use it)
  const verifyCode =
    payload &&
    (payload.verifyCode ||
      (() => {
        try {
          const clone = { ...payload };
          delete clone.verifyCode;
          return typeof window !== "undefined"
            ? btoa(unescape(encodeURIComponent(JSON.stringify(clone)))).slice(
                0,
                10
              )
            : Buffer.from(JSON.stringify(clone))
                .toString("base64")
                .slice(0, 10);
        } catch {
          return null;
        }
      })());

  // expected code recomputed from the stored timestamp (matches generator format)
  const expectedVerifyCode = useMemo(() => {
    if (!payload) return null;
    try {
      const dt = new Date(payload.generatedAt || "");
      if (isNaN(dt.getTime())) return null;
      const ymd = dt.toISOString().slice(0, 10).replace(/-/g, "");
      const hms = dt.toTimeString().slice(0, 8).replace(/:/g, "");
      const counter = ("" + (dt.getTime() % 1000)).padStart(3, "0");
      return `sofixsintern${ymd}/${hms}/${counter}`;
    } catch {
      return null;
    }
  }, [payload]);

  // compute the old-style expected code (legacy QR format) — first 10 chars of base64(payload without verifyCode)
  const expectedOldCode = useMemo(() => {
    if (!payload) return null;
    try {
      const clone = { ...payload };
      delete clone.verifyCode;
      const baseJson = JSON.stringify(clone);
      const encodedBase =
        typeof window !== "undefined"
          ? btoa(unescape(encodeURIComponent(baseJson)))
          : Buffer.from(baseJson).toString("base64");
      return encodedBase.slice(0, 10);
    } catch {
      return null;
    }
  }, [payload]);

  // final authenticity check: accept either the new timestamp-based code or the legacy code
  const isVerified = !!(
    payload &&
    payload.verifyCode &&
    (payload.verifyCode === expectedVerifyCode ||
      payload.verifyCode === expectedOldCode)
  );

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [busy, setBusy] = useState(false);
  const [savedState, setSavedState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");

  // Save verified payload to server for future use (backend will persist to verifications.json).
  useEffect(() => {
    if (!payload || !isVerified) return;
    let mounted = true;
    const API_BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_VERIFY_ORIGIN)
      ? import.meta.env.VITE_VERIFY_ORIGIN
      : (typeof window !== 'undefined' ? window.location.origin : '');
    const save = async () => {
      setSavedState("saving");
      try {
        const res = await fetch(`${API_BASE}/store-verification`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!mounted) return;
        if (res.ok) setSavedState("saved");
        else setSavedState("error");
      } catch (err) {
        if (mounted) setSavedState("error");
      }
    };
    save();
    return () => {
      mounted = false;
    };
  }, [payload, isVerified]);

  const handleDownload = async (mode: "download" | "print") => {
    if (!cardRef.current || !payload) return;
    setBusy(true);
    try {
      // dynamic import to avoid adding bundle if not installed
      const lib = await import("html-to-image");
      const toPng = lib.toPng || lib.default?.toPng;
      if (!toPng) throw new Error("html-to-image missing");
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: "#ffffff",
      });

      if (mode === "download") {
        const a = document.createElement("a");
        a.href = dataUrl;
        const safeName = (payload.name || "sofixs_certificate").replace(
          /\s+/g,
          "_"
        );
        a.download = `${safeName}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        // open printable window
        const w = window.open("about:blank");
        if (w) {
          w.document.write(
            `<html><head><title>Print</title></head><body style="margin:0;padding:20px"><img src="${dataUrl}" style="width:100%;max-width:800px;display:block;margin:0 auto"/></body></html>`
          );
          w.document.close();
          w.focus();
          // Small delay to ensure image loads
          setTimeout(() => {
            w.print();
            w.close();
          }, 500);
        } else {
          alert("Unable to open print window. Please allow popups.");
        }
      }
    } catch (err) {
      // instruct user how to enable this feature
      alert(
        `Download/Print requires the \`html-to-image\` package.\n\nInstall it in the frontend folder and restart dev server:\n\nnpm install html-to-image\n\nIf you prefer, I can add a lightweight client-side QR/image generator to avoid the backend dependency.`
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-3xl">
        <div
          ref={cardRef}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        >
          <div className="p-8 bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Sofixs — Internship Verification
                </h1>
                <div className="mt-0 inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full">
                  {isVerified ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-bold">Verified ✓</span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold">Unverified</span>
                  )}
                </div>
              </div>
              <img
                src="/logosofixs.png"
                alt="Sofixs"
                className="h-16 w-auto object-contain drop-shadow-lg"
              />
            </div>
            {payload && payload.generatedAt && (
              <p className="text-sm mt-4 text-white text-opacity-90">
                Generated: {new Date(payload.generatedAt).toLocaleString()}
              </p>
            )}
          </div>

          <div className="p-8">
            {payload ? (
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 flex items-center">
                    {payload.photoUrl ? (
                      <img
                        src={payload.photoUrl}
                        alt={`${payload.name} photo`}
                        className="w-32 h-32 object-cover rounded-lg border-4 border-teal-400 shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-teal-700 text-3xl font-bold border-4 border-teal-400 shadow-lg">
                        {(payload.name || "")
                          .split(" ")
                          .map((n) => n && n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase() || "I"}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border-2 border-gray-200 shadow-sm">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-500 font-medium">
                            Name:
                          </span>
                          <p className="font-bold text-gray-900 mt-1">
                            {payload.name}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">
                            UID:
                          </span>
                          <p className="font-bold text-gray-900 mt-1">
                            {payload.uid}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">
                            Domain:
                          </span>
                          <p className="font-semibold text-gray-900 mt-1">
                            {payload.domain}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium">
                            Status:
                          </span>
                          <p className="font-semibold text-gray-900 mt-1">
                            {payload.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <span className="text-gray-500 font-medium text-sm">
                          Coordinator:
                        </span>
                        <p className="font-semibold text-gray-900 mt-1">
                          {payload.coordinator}
                        </p>
                      </div>
                      <div className="mt-2">
                        <span className="text-gray-500 font-medium text-sm">
                          Website:
                        </span>
                        <p className="font-semibold text-teal-600 mt-1">
                          {payload.website}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {payload.signatureUrl && (
                  <div className="border-t-2 border-gray-100 pt-4">
                    <div className="flex justify-end items-center gap-3">
                      <div className="text-right">
                        <p className="text-xs text-gray-500 font-medium">
                          Coordinator Signature
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
                        <img
                          src={payload.signatureUrl}
                          alt="Coordinator signature"
                          className="h-12 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-teal-700 font-semibold">
                        Verification Code
                      </p>
                      <p className="text-sm font-mono text-teal-900 mt-1">
                        {payload.verifyCode || verifyCode}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-teal-700 font-semibold">
                        Status
                      </p>
                      <p className="text-sm text-teal-900 mt-1">
                        {savedState === "saved"
                          ? "Saved ✓"
                          : savedState === "saving"
                          ? "Saving..."
                          : savedState === "error"
                          ? "Error"
                          : "Processing"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-gray-700 font-semibold text-lg">
                  Invalid or missing verification data
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  If you scanned a QR code, please try again or contact support.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-teal-300 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-all"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Sofixs
          </a>
          <a
            href="https://sofixs.com/verify"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Official Verify Page
          </a>
          <div className="flex-1" />
          <button
            disabled={!payload || busy}
            onClick={() => handleDownload("download")}
            className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:from-teal-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {busy ? "Processing..." : "Download PNG"}
          </button>
          <button
            disabled={!payload || busy}
            onClick={() => handleDownload("print")}
            className="inline-flex items-center px-5 py-3 rounded-lg border-2 border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
