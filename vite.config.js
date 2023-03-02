import { defineConfig } from "vite";
import { readdirSync } from "fs";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

const samplesFolder = resolve("src/samples");
const input = {
  "presentation": resolve("index.html"),
};

for (const item of readdirSync(samplesFolder, { withFileTypes: true })) {
  if (item.isDirectory()) {
    input[item.name] = resolve(samplesFolder, item.name, "index.html");
  } else if (item.name.endsWith(".html")) {
    input[item.name] = resolve(samplesFolder, item.name);
  }
}

module.exports = defineConfig(({ command }) => ({
  base: "./",
  build: {
    rollupOptions: { input },
    minify: "esbuild"
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "./src/samples/symbology-2d-3d/*.{png,gltf,bin}",
          dest: "./src/samples/symbology-2d-3d/"
        }, {
          src: "./reveal.js",
          dest: "./"
        }
      ]
    })
  ]
}));
