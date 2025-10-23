module.exports = function (eleventyConfig) {
  // copy blog images directly for multiple formats
  // https://www.11ty.dev/docs/copy/#copy-a-file-alongside-a-template
  eleventyConfig.addPassthroughCopy("./src/blog/**/*.jpg", {
    mode: "html-relative",
  });
  eleventyConfig.addPassthroughCopy("./src/blog/**/*.png", {
    mode: "html-relative",
  });

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
