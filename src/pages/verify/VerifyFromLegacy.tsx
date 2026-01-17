import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { VERIFY_ORIGIN } from "@/config/appConfig";

const VerifyFromLegacy: React.FC = () => {
  const { time, id } = useParams();
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!time || !id) {
      setStatus("Invalid link");
      setLoading(false);
      return;
    }

    const API_BASE = VERIFY_ORIGIN || window.location.origin;
    const url = `${API_BASE}/sofixsintern20260111/${time}/${id}`;

    (async () => {
      try {
        const res = await fetch(url, { credentials: "include" });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const text = await res.text();
        setStatus(text || "Verification completed");
      } catch (err) {
        console.error("Verification fetch failed:", err);
        setStatus("Verification failed — please try again or contact support");
      } finally {
        setLoading(false);
      }
    })();
  }, [time, id]);

  return (
    <div className="mx-auto max-w-lg py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Verification</h1>

      {loading ? (
        <p>Verifying…</p>
      ) : (
        <>
          <p className="mb-4">{status}</p>

          <div className="flex gap-3">
            <Link to="/" className="text-primary underline">
              Return to Home
            </Link>
            <Link to="/verify" className="text-primary underline">
              Open verification page
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default VerifyFromLegacy;
