import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// Replit-only plugins (skipped on Vercel so build uses only react())
const replitOverlay =
  process.env.REPL_ID !== undefined
    ? [(await import("@replit/vite-plugin-runtime-error-modal")).default()]
    : [];
const replitDev =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? await Promise.all([
        import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
        import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
      ])
    : [];

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [react(), ...replitOverlay, ...replitDev],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/")) return "react-vendor";
            if (id.includes("recharts")) return "recharts";
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("tsparticles") || id.includes("@tsparticles")) return "tsparticles";
            if (id.includes("@radix-ui")) return "radix-ui";
            if (id.includes("embla-carousel")) return "embla-carousel";
            if (id.includes("lucide-react") || id.includes("react-icons")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
