import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";

export default defineConfig({
  // this line is for adding remix
  plugins: [
    remix({
      serverModuleFormat: "esm",
      // sets up flatRoutes
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes);
      },
    }),
  ],
});
