module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./public/**/*');
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
