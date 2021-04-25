import fs = require('fs');
import path = require('path');
import program = require('commander');
import {PrefabParser} from './parser/PrefabParser';
import { ColorPalette } from './ColorPalette';
import { TextColorEditor } from './TextColorEditor';

const myPackage = require(path.join(__dirname, '../package.json'));

interface CmdParams {
    src: string;
    output: string;
    logFormat: string;
}

const getPath = (val: string): string => {
    let rst = val.match(/(['"])(.+)\1/);
    if(rst) return rst[2];

    return val;
}

program
	.version(myPackage.version, "-v, --version")
	.option("-s, --src <path>", "[MUST] Input project path. Direction only.", getPath)
	.option("-o, --output [path]", "Outout path. Direction only. Like -o 'out'", getPath)
	.option("-f, --logFormat", "Log format, etc: processing: %s", getPath)
    .parse(process.argv);

let projPath = (<any>program as CmdParams).src;
if(!projPath) {
    console.warn("The --src option is MUST. Like -s 'G:\\ycxszjb\\trunk\\'");
    program.help();
}
let outputPath = (<any>program as CmdParams).output;
let logFormat = (<any>program as CmdParams).logFormat;
let themePath = path.join(projPath, 'Assets/Editor/theme/');
if(!outputPath) {
    outputPath = themePath;
}

let palette = new ColorPalette();
palette.setup(path.join(themePath, 'palette.json'));

let parser = new PrefabParser();
// palette.dumpColors();
let textColorEditor = new TextColorEditor();

let prefabDirs = ['Assets/AssetSources/ui/system/', 'Assets/AssetSources/ui/delaySystem/'];
for(let pd of prefabDirs) {
    parsePrefabInDir(path.join(projPath, pd));
}
// parser.dumpDescribor();
textColorEditor.dumpColors(palette, path.join(outputPath, 'closest.txt'));
process.exit(0);

function parsePrefabInDir(dir: string) {
    let files = fs.readdirSync(dir)
    for(let file of files) {
        let filePath = path.join(dir, file);
        let fileStat = fs.statSync(filePath);
        if(fileStat.isFile()) {
            if(path.extname(file) == '.prefab') {
                if(logFormat) {
                    console.log(logFormat, filePath);
                } else {
                    console.log('\x1B[1A\x1B[Kprocessing: %s', filePath);
                }
                let prefab = parser.parse(filePath);
                textColorEditor.edit(prefab, palette);
            }
        } else {
            parsePrefabInDir(filePath);
        }
    }
}