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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefabParser = void 0;
var fs = __importStar(require("fs"));
var yaml_1 = __importDefault(require("yaml"));
var PrefabParser = /** @class */ (function () {
    function PrefabParser() {
        this.unityStruct = {};
    }
    PrefabParser.prototype.parse = function (filePath) {
        var prefab = [];
        var elemMap = {};
        var fileContent = fs.readFileSync(filePath, 'utf-8');
        var fileLines = fileContent.split(/[\r\n]+/);
        // 前两行为tag跳过
        var elemContent = '';
        var yamlID = 0;
        var fileID = 0;
        for (var i = 2, len = fileLines.length; i < len; i++) {
            var line = fileLines[i];
            var docMatchRst = line.match(/--- !u!(\d+) &(\d+)/);
            if (docMatchRst) {
                // 匹配到新元素
                if (elemContent) {
                    var elem = this.toUnityElement(yamlID, fileID, elemContent);
                    elemMap[elem.fileID] = elem;
                    prefab.push(elem);
                }
                yamlID = Number(docMatchRst[1]);
                fileID = Number(docMatchRst[2]);
                elemContent = '';
            }
            else {
                elemContent += line + '\n';
            }
        }
        if (yamlID > 0 && fileID > 0 && elemContent) {
            var elem = this.toUnityElement(yamlID, fileID, elemContent);
            elemMap[elem.fileID] = elem;
            prefab.push(elem);
        }
        // // 更新unity结构描述
        // for(let i = 0, len = prefab.length; i < len; i++) {
        //     let elem = prefab[i];
        //     let structMap = this.unityStruct[elem.type];
        //     if(!structMap) {
        //         this.unityStruct[elem.type] = structMap = {};
        //     }
        //     this.getDesciption(elem.object, structMap);
        // }
        return prefab;
    };
    PrefabParser.prototype.toUnityElement = function (yamlID, fileID, elemContent) {
        var elem = {};
        elem.yamlID = yamlID;
        elem.fileID = fileID;
        var obj = yaml_1.default.parse(elemContent);
        for (var key in obj) {
            elem.type = key;
            elem.object = obj[key];
            break;
        }
        if (!elem.type) {
            throw new Error('Prefab parse error!');
        }
        return elem;
    };
    PrefabParser.prototype.getDesciption = function (obj, structMap) {
        for (var key in obj) {
            var node = obj[key];
            var nodeType = typeof (node);
            if (!structMap[key]) {
                if (nodeType == 'object') {
                    if (!structMap[key]) {
                        structMap[key] = {};
                    }
                }
                else {
                    structMap[key] = nodeType;
                }
            }
            if (nodeType == 'object') {
                this.getDesciption(node, structMap[key]);
            }
        }
    };
    PrefabParser.prototype.dumpDescribor = function () {
        for (var type in this.unityStruct) {
            var lines = this.getDescriptionStr(this.unityStruct[type], '');
            fs.writeFileSync('describor/' + type + '.txt', lines.join('\n'), 'utf-8');
        }
    };
    PrefabParser.prototype.getDescriptionStr = function (structMap, indent) {
        var lines = [];
        lines.push('{');
        for (var key in structMap) {
            var structValue = structMap[key];
            if (typeof (structValue) == 'object') {
                var subLines = this.getDescriptionStr(structValue, indent + '    ');
                lines.push(key + '?: {');
                for (var i = 1, len = subLines.length; i < len - 1; i++) {
                    lines.push(subLines[i]);
                }
                lines.push('}, ');
            }
            else {
                lines.push(key + '?: ' + structValue + ', ');
            }
        }
        lines.push('}, ');
        for (var i = 1, len = lines.length; i < len - 1; i++) {
            lines[i] = '    ' + lines[i];
        }
        return lines;
    };
    return PrefabParser;
}());
exports.PrefabParser = PrefabParser;
