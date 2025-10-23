module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/blog/**/*.png", {
    mode: "html-relative",
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
