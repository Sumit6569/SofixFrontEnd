// App-wide configuration helpers for runtime environment
// Automatically switches between local and production based on VITE_ENV
const getConfig = () => {
  const env = import.meta.env.VITE_ENV || "local";

  if (env === "production") {
    return {
      API_BASE:
        import.meta.env.VITE_PRODUCTION_API_BASE ||
        "https://sofixbackend.onrender.com",
      VERIFY_ORIGIN:
        import.meta.env.VITE_PRODUCTION_VERIFY_ORIGIN || "https://sofixs.com",
    };
  }

  // Default to local
  return {
    API_BASE: import.meta.env.VITE_LOCAL_API_BASE || "http://localhost:5000",
    VERIFY_ORIGIN:
      import.meta.env.VITE_LOCAL_VERIFY_ORIGIN || "http://localhost:5173",
  };
};

const config = getConfig();

export const VERIFY_ORIGIN = config.VERIFY_ORIGIN;
export const API_BASE = config.API_BASE;

export default {
  VERIFY_ORIGIN,
  API_BASE,
};
