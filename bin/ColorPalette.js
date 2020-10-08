"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPalette = void 0;
var fs = require("fs-extra");
var d3 = __importStar(require("d3-color"));
var diff = __importStar(require("color-diff"));
var StringUtil_1 = require("./utils/StringUtil");
var ColorPalette = /** @class */ (function () {
    function ColorPalette() {
        this.colorSets = [];
        this.colorSetMap = {};
    }
    ColorPalette.prototype.setup = function (cfgFile) {
        var cfg = fs.readJSONSync(cfgFile);
        for (var _i = 0, _a = cfg.sets; _i < _a.length; _i++) {
            var oneCfg = _a[_i];
            var oneSet = {};
            oneSet.name = oneCfg.name;
            oneSet.colors = [];
            for (var _b = 0, _c = oneCfg.colors; _b < _c.length; _b++) {
                var oneColor = _c[_b];
                oneColor.color = ColorPalette.ensureAlpha(oneColor.color);
                var colorInfo = {};
                var d3Color = d3.rgb(oneColor.color);
                colorInfo.R = d3Color.r;
                colorInfo.G = d3Color.g;
                colorInfo.B = d3Color.b;
                colorInfo.A = d3Color.opacity;
                colorInfo.setName = oneSet.name;
                colorInfo.name = oneColor.name;
                colorInfo.cssColor = oneColor.color;
                colorInfo.d3Color = d3Color;
                oneSet.colors.push(colorInfo);
            }
            this.colorSets.push(oneSet);
            this.colorSetMap[oneSet.name] = oneSet;
        }
    };
    ColorPalette.prototype.getColorSet = function (name) {
        return this.colorSetMap[name];
    };
    ColorPalette.prototype.getClosestColor = function (color) {
        var colorArr = [];
        for (var _i = 0, _a = this.colorSets; _i < _a.length; _i++) {
            var oneSet = _a[_i];
            for (var _b = 0, _c = oneSet.colors; _b < _c.length; _b++) {
                var oneColor = _c[_b];
                colorArr.push(oneColor);
            }
        }
        return diff.closest(color, colorArr);
    };
    ColorPalette.unityRGB2diffRGB = function (uRGB) {
        return { R: this.RGBfloat2int(uRGB.r), G: this.RGBfloat2int(uRGB.g), B: this.RGBfloat2int(uRGB.b), A: uRGB.a };
    };
    ColorPalette.diffRGB2CSSColor = function (diffRGB) {
        return '#' + this.RGBfloat2css(diffRGB.R) + this.RGBfloat2css(diffRGB.G) + this.RGBfloat2css(diffRGB.B) + this.RGBfloat2css(this.RGBfloat2int(diffRGB.A));
    };
    ColorPalette.RGBfloat2int = function (f) {
        return Math.round(f * 255);
    };
    ColorPalette.RGBfloat2css = function (f) {
        return this.ensureDigit(f.toString(16), 2);
    };
    ColorPalette.ensureDigit = function (s, d) {
        var delta = d - s.length;
        if (delta > 0) {
            for (var i = 0; i < delta; i++) {
                s = '0' + s;
            }
        }
        return s;
    };
    ColorPalette.ensureAlpha = function (cssColor) {
        if (cssColor.length == 7) {
            cssColor += 'ff';
        }
        return cssColor;
    };
    ColorPalette.prototype.dumpColors = function () {
        var content = StringUtil_1.StringUtil.ensureStrLength('color', 11);
        for (var _i = 0, _a = this.colorSets; _i < _a.length; _i++) {
            var colorSet = _a[_i];
            content += StringUtil_1.StringUtil.ensureStrLength(colorSet.name, 11);
        }
        content += '\n';
        for (var r = 0; r <= 255; r++) {
            for (var g = 0; g <= 255; g++) {
                for (var b = 0; b <= 255; b++) {
                    var rgb = { R: r, G: g, B: b, A: 255 };
                    var css = ColorPalette.diffRGB2CSSColor(rgb);
                    content += css;
                    for (var _b = 0, _c = this.colorSets; _b < _c.length; _b++) {
                        var colorSet = _c[_b];
                        var closestColor = diff.closest(rgb, colorSet.colors);
                        content += '  ' + closestColor.cssColor;
                    }
                    content += '\n';
                }
            }
        }
        fs.writeFileSync('out/closest.txt', content, 'utf-8');
    };
    return ColorPalette;
}());
exports.ColorPalette = ColorPalette;
