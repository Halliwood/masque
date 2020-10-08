"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = void 0;
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.ensureStrLength = function (s, len) {
        var delta = len - s.length;
        if (delta > 0) {
            for (var i = 0; i < delta; i++) {
                s += ' ';
            }
        }
        return s;
    };
    return StringUtil;
}());
exports.StringUtil = StringUtil;
