module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/index.css");
  eleventyConfig.addPassthroughCopy("./assets/*");
  return {
    dir: {
      input: "src",
    },
  };
};
