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
exports.TextColorEditor = void 0;
var fs = require("fs");
var YamlClassID_1 = require("./parser/YamlClassID");
var ColorPalette_1 = require("./ColorPalette");
var StringUtil_1 = require("./utils/StringUtil");
var diff = __importStar(require("color-diff"));
var TextColorEditor = /** @class */ (function () {
    function TextColorEditor() {
        this.closestColorMap = {};
    }
    TextColorEditor.prototype.edit = function (prefab, palette) {
        this.elemMap = {};
        for (var _i = 0, prefab_1 = prefab; _i < prefab_1.length; _i++) {
            var elem = prefab_1[_i];
            this.elemMap[elem.fileID] = elem;
        }
        for (var _a = 0, prefab_2 = prefab; _a < prefab_2.length; _a++) {
            var elem = prefab_2[_a];
            if (elem.yamlID == YamlClassID_1.YamlClassID.MonoBehaviour) {
                elem.monoType = this.identifyScriptType(elem.object);
                if (elem.monoType == 'UnityEngine.UI.Text') {
                    this.handleText(elem.object, palette);
                }
            }
        }
    };
    TextColorEditor.prototype.handleText = function (text, palette) {
        var textDiffRGB = ColorPalette_1.ColorPalette.unityRGB2diffRGB(text.m_Color);
        var textCssColor = ColorPalette_1.ColorPalette.diffRGB2CSSColor(textDiffRGB);
        // 检查哪个颜色匹配
        if (!this.closestColorMap[textCssColor]) {
            var colors = [];
            for (var _i = 0, _a = palette.colorSets; _i < _a.length; _i++) {
                var colorSet = _a[_i];
                var closestColor = diff.closest(textDiffRGB, colorSet.colors);
                colors.push(closestColor.cssColor);
            }
            this.closestColorMap[textCssColor] = colors;
        }
        // let gameobject = this.elemMap[text.m_GameObject.fileID].object as UnityEngine.GameObject;
        // console.log('text: %s, color: %s, closest color: %s~%s(%s)', gameobject.m_Name, textCssColor, closestColor.cssColor, closestColor.name, closestColor.setName);
    };
    TextColorEditor.prototype.identifyScriptType = function (obj) {
        var textAlias = obj;
        if (textAlias.m_Color !== undefined && textAlias.m_Text !== undefined && textAlias.m_FontData !== undefined) {
            return 'UnityEngine.UI.Text';
        }
        return 'UnityEngine.MonoBehaviour';
    };
    TextColorEditor.prototype.dumpColors = function (palette, outputPath) {
        var content = StringUtil_1.StringUtil.ensureStrLength('color', 11);
        for (var _i = 0, _a = palette.colorSets; _i < _a.length; _i++) {
            var colorSet = _a[_i];
            content += StringUtil_1.StringUtil.ensureStrLength(colorSet.name, 11);
        }
        content += '\n';
        for (var colorKey in this.closestColorMap) {
            content += colorKey + '  ' + this.closestColorMap[colorKey].join('  ') + '\n';
        }
        fs.writeFileSync(outputPath, content, 'utf-8');
    };
    return TextColorEditor;
}());
exports.TextColorEditor = TextColorEditor;
