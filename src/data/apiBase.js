// Single place that decides where the backend API lives.
//
// - Local dev:           Vite proxies "/api" to http://localhost:4000 (see vite.config.js)
// - Railway (one service serving site + API): same origin, so "/api" just works
// - Vercel / Netlify (frontend only): set VITE_API_URL to your Railway API,
//   e.g. https://your-app.up.railway.app/api
export const API_BASE = (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, "");
