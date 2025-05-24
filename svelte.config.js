import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : "/new-liff",
    },
  },
};
