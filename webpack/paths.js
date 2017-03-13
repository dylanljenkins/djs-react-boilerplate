const path = require('path');

exports.src = path.resolve(__dirname, "..", "src");
exports.app = path.resolve(__dirname, "..", "src", "main.tsx");
exports.html = path.resolve(__dirname, "..", "src", "index.html");
exports.build = path.resolve(__dirname, "..", "build");
exports.node_modules = path.resolve(__dirname, "..", "node_modules");