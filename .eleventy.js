module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./favicon/*');

  return {
    dir: {
      input: 'src',
    },
  };
};
