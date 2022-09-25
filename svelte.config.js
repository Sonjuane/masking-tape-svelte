// svelte.config.js
const preprocess = require('svelte-preprocess');

module.exports = {
    preprocess: preprocess({ typescript: false }),
    // ...other svelte options could go here
};