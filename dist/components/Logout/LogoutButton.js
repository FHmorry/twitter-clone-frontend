"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// LogoutButtonコンポーネントの定義、onLogoutプロップを受け取る
var LogoutButton = function (_a) {
    var onLogout = _a.onLogout;
    // ボタンがクリックされたときにonLogout関数を呼び出す
    var handleClick = function () {
        onLogout();
    };
    // ボタンのUIを返す
    return ((0, jsx_runtime_1.jsx)("button", { onClick: handleClick, children: "\u30ED\u30B0\u30A2\u30A6\u30C8" }));
};
exports.default = LogoutButton; // LogoutButtonコンポーネントをエクスポート
