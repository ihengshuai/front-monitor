const path = require("path");
const { defineConfig, build } = require("vite");

const cwdPath = process.cwd();
const outputDir = path.join(cwdPath, "dist"); // 构建出口

const rollupOptions = {
  external: ["@hengshuai/monitor-types"],
  output: {
    globals: {
      "@hengshuai/monitor-types": "@hengshuai/monitor-types",
    },
  },
};

async function start() {
  await build(
    defineConfig({
      configFile: false,
      publicDir: false,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
      build: {
        rollupOptions,
        lib: {
          entry: path.join(cwdPath, "src/index.ts"),
          name: "monitor-core",
          fileName: "monitor-core",
          formats: ["es", "umd"],
        },
        outDir: outputDir,
      },
    })
  );
}

start();
