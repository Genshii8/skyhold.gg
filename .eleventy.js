module.exports = function(config) {

    config.addPassthroughCopy("css");
    config.addPassthroughCopy("images");

    return {
        passthroughFileCopy: true
    };
}