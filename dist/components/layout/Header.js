"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Header = function (_a) {
    var username = _a.username;
    return ((0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Twitter Clone" }), (0, jsx_runtime_1.jsx)("div", { children: username ? "\u3088\u3046\u3053\u305D\u3001".concat(username, "\u3055\u3093") : 'ようこそ、ゲストさん' })] }));
};
exports.default = Header;
