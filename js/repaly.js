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
        while (_) try {
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
function fetchApp() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./data.json")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    _loop_1 = function (i) {
                        var replies = data.comments[i].replies;
                        var commentIdReplay = data.comments[i].id;
                        var commentDiv = document.querySelector(".comment-".concat(commentIdReplay));
                        var replayDiv = document.createElement("div");
                        commentDiv === null || commentDiv === void 0 ? void 0 : commentDiv.insertAdjacentElement("afterend", replayDiv);
                        if (replies.length !== 0) {
                            replies.forEach(function (repl) {
                                var score = repl.score < 10 ? "0".concat(repl.score) : "".concat(repl.score);
                                replayDiv.classList.add("replay-div");
                                if (repl.user.username === data.currentUser.username) {
                                    replayDiv.innerHTML += "\n        <div id=\"replay\" class=\"replay-".concat(repl.id, " rep-").concat(repl.id, "\">\n            <div class=\"like\">\n              <i id=\"").concat(repl.id, "\" class=\"fa-solid fa-plus plus\"></i>\n              <span class=\"num").concat(repl.id, "\">").concat(score, "</span>\n              <i id=\"").concat(repl.id, "\" class=\"fa-solid fa-minus minus\"></i>\n            </div>\n             <div class=\"content\">\n                <div class=\"info\">\n                  <img src=\"").concat(repl.user.image.png, "\"/>\n                  <span class=\"name\">").concat(repl.user.username, "</span>\n                  <span class=\"you\">you</span>\n                  <span class=\"last\">").concat(repl.createdAt, "</span>\n                </div>\n                <p><span class=\"rep-to\">@").concat(repl.replyingTo, "</span> ").concat(repl.content, "</p>\n              </div>\n              <div class=\"del-ed\">\n                <span id=\"").concat(repl.id, "\" class=\"delete\"> <i class=\"fa-solid fa-trash\"></i>  delete</span>\n                <span id=\"").concat(repl.id, "\" class=\"edit\"><i class=\"fa-sharp fa-solid fa-pen\"></i>  edit</span>\n              </div>\n              </div>\n          ");
                                }
                                else {
                                    replayDiv.innerHTML = "\n        <div id=\"replay\" class=\"replay-".concat(repl.id, " rep-").concat(repl.id, "\">\n          <div class=\"like\">\n            <i id=\"").concat(repl.id, "\" class=\"fa-solid fa-plus plus\"></i>\n            <span class=\"num").concat(repl.id, "\">").concat(score, "</span>\n            <i id=\"").concat(repl.id, "\" class=\"fa-solid fa-minus minus\"></i>\n          </div>\n          <div class=\"content\">\n            <div class=\"info\">\n              <img src=\"").concat(repl.user.image.png, "\" />\n              <span class=\"name\">").concat(repl.user.username, "</span>\n              <span class=\"last\">").concat(repl.createdAt, "</span>\n            </div>\n            <p>\n              <span class=\"rep-to\">@").concat(repl.replyingTo, "</span> ").concat(repl.content, "\n            </p>\n          </div>\n          <div id=\"").concat(repl.id, "\" class=\"reply\">\n            <i class=\"fa-solid fa-reply\"></i>\n            <span>reply</span>\n          </div>\n        </div>\n        ");
                                }
                            });
                        }
                    };
                    // console.log(data.currentUser.username);
                    for (i = 0; i < data.comments.length; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
fetchApp();
