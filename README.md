Frontend
========

Environment variables
---------------------

You can set a custom verification origin for QR codes (so generated QR links use your production domain instead of localhost).

Create a `.env` file in the Frontend folder (or use environment variables in your CI), and set:

```env
VITE_VERIFY_ORIGIN=https://sofixs.com
```

If this variable is not set and you run the dev server, the generator will use the current origin (e.g., http://localhost:5173). When building for production, the default is `https://sofixs.com`.

