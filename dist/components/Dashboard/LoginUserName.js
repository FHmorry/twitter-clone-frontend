"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var LogoutButton_1 = __importDefault(require("../Logout/LogoutButton")); // LogoutButtonコンポーネントをインポート
var Dashboard = function (_a) {
    var user = _a.user, onLogout = _a.onLogout;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: user ? "".concat(user.username, "\u3067\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3044\u307E\u3059") : 'ログイン情報がありません。' }), user && (0, jsx_runtime_1.jsx)(LogoutButton_1.default, { onLogout: onLogout }), " "] }));
};
exports.default = Dashboard;
