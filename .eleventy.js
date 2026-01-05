const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

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
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/img");

  // stops default behavior of foo.html turning into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  // add rss feed
  // https://www.11ty.dev/docs/plugins/rss/
  eleventyConfig.setTemplateFormats("html,njk,md");
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feed.xml",
    collection: {
      name: "blog",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "sabi's stuff",
      subtitle: "a place for sabi's things and thoughts",
      base: "https://sabi.pink",
      author: {
        name: "sabi",
        email: "",
      },
    },
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
  };
};
