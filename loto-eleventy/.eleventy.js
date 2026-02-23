module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/loto.js");
  eleventyConfig.addPassthroughCopy("src/assets/style.css");

  return {
    dir: {
      input: "src",      
      output: "_site",   
      includes: "_includes",  
    },
  };
};
