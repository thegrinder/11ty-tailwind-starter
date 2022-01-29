module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./favicon/*');
  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/*'],
    open: true,
  });
  return {
    dir: {
      input: 'src',
    },
  };
};
