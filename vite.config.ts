import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
    vanillaExtractPlugin({
      esbuildOptions: {
        loader: {
          ".svg": "dataurl",
          ".png": "dataurl",
          ".ico": "dataurl",
        },
      },
    }),
  ],
  build: {
    outDir: "build",
    sourcemap: true,

    rollupOptions: {
      output: {
        entryFileNames: "entry-[hash].js",
        chunkFileNames: "chunk/[hash].js",
        assetFileNames: "asset/[hash].[ext]",
      },
    },
  },
});
