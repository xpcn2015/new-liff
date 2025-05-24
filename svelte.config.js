import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      // fallback: "404.html",
      // precompress: false,
      // strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};
