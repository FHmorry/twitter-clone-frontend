"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react"); // React、useStateフック、FCをインポート
var axios_1 = __importDefault(require("axios")); // axiosライブラリをインポート
// LoginFormコンポーネントの定義、onLoginプロップを受け取る
var LoginForm = function (_a) {
    var onLogin = _a.onLogin;
    var _b = (0, react_1.useState)(''), username = _b[0], setUsername = _b[1]; // ユーザー名の状態を管理
    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1]; // パスワードの状態を管理
    // ログイン処理を行う非同期関数
    var handleLogin = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault(); // フォームのデフォルトの送信を防止
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post('/login', { username: username, password: password }, { withCredentials: true })];
                case 2:
                    response = _a.sent();
                    if (response.data) {
                        onLogin(response.data); // レスポンスデータがあれば親コンポーネントのコールバック関数を呼び出す
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (axios_1.default.isAxiosError(error_1)) { // axiosエラーかどうかをチェック
                        if (error_1.response) {
                            console.log('Error response:', error_1.response); // エラーレスポンスを出力
                        }
                        else if (error_1.request) {
                            console.log('Error request:', error_1.request); // エラーレクエストを出力
                        }
                        else {
                            console.log('Error message:', error_1.message); // エラーメッセージを出力
                        }
                    }
                    else {
                        console.log('Unexpected error:', error_1); // 予期しないエラーを出力
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // フォームのUIを返す
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleLogin, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: username, onChange: function (e) { return setUsername(e.target.value); }, placeholder: "\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B" }), (0, jsx_runtime_1.jsx)("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "\u30ED\u30B0\u30A4\u30F3" })] }));
};
exports.default = LoginForm; // LoginFormコンポーネントをエクスポート
