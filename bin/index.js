"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var program = require("commander");
var PrefabParser_1 = require("./parser/PrefabParser");
var ColorPalette_1 = require("./ColorPalette");
var TextColorEditor_1 = require("./TextColorEditor");
var myPackage = require(path.join(__dirname, '../package.json'));
var getPath = function (val) {
    var rst = val.match(/(['"])(.+)\1/);
    if (rst)
        return rst[2];
    return val;
};
program
    .version(myPackage.version, "-v, --version")
    .option("-s, --src <path>", "[MUST] Input project path. Direction only.", getPath)
    .option("-o, --output [path]", "Outout path. Direction only. Like -o 'out'", getPath)
    .option("-f, --logFormat", "Log format, etc: processing: %s", getPath)
    .parse(process.argv);
var projPath = program.src;
if (!projPath) {
    console.warn("The --src option is MUST. Like -s 'G:\\ycxszjb\\trunk\\'");
    program.help();
}
var outputPath = program.output;
var logFormat = program.logFormat;
var themePath = path.join(projPath, 'Assets/Editor/theme/');
if (!outputPath) {
    outputPath = themePath;
}
var palette = new ColorPalette_1.ColorPalette();
palette.setup(path.join(themePath, 'palette.json'));
var parser = new PrefabParser_1.PrefabParser();
// palette.dumpColors();
var textColorEditor = new TextColorEditor_1.TextColorEditor();
var prefabDirs = ['Assets/AssetSources/ui/system/', 'Assets/AssetSources/ui/delaySystem/'];
for (var _i = 0, prefabDirs_1 = prefabDirs; _i < prefabDirs_1.length; _i++) {
    var pd = prefabDirs_1[_i];
    parsePrefabInDir(path.join(projPath, pd));
}
// parser.dumpDescribor();
textColorEditor.dumpColors(palette, path.join(outputPath, 'closest.txt'));
process.exit(0);
function parsePrefabInDir(dir) {
    var files = fs.readdirSync(dir);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var filePath = path.join(dir, file);
        var fileStat = fs.statSync(filePath);
        if (fileStat.isFile()) {
            if (path.extname(file) == '.prefab') {
                if (logFormat) {
                    console.log(logFormat, filePath);
                }
                else {
                    console.log('\x1B[1A\x1B[Kprocessing: %s', filePath);
                }
                var prefab = parser.parse(filePath);
                textColorEditor.edit(prefab, palette);
            }
        }
        else {
            parsePrefabInDir(filePath);
        }
    }
}
