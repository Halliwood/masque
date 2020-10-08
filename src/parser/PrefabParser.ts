import * as fs from 'fs';
import yaml from 'yaml'
import { YamlClassID } from './YamlClassID'
import { UnityObject, MonoTypeNames } from '../../typings';

export interface UnityElement {
    yamlID: YamlClassID;
    fileID: number;
    type: string;
    monoType?: MonoTypeNames;
    object: UnityObject;
}

export type Prefab = UnityElement[];

export class PrefabParser {
    private unityStruct: any = {};
    parse(filePath: string): Prefab {
        let prefab: Prefab = [];
        let elemMap: {[fileID: number]: UnityElement} = {};

        let fileContent = fs.readFileSync(filePath, 'utf-8');
        let fileLines = fileContent.split(/[\r\n]+/);
        // 前两行为tag跳过
        let elemContent = '';
        let yamlID = 0;
        let fileID = 0;
        for(let i = 2, len = fileLines.length; i < len; i++) {
            let line = fileLines[i];
            let docMatchRst = line.match(/--- !u!(\d+) &(\d+)/);
            if(docMatchRst) {
                // 匹配到新元素
                if(elemContent) {
                    let elem = this.toUnityElement(yamlID, fileID, elemContent);
                    elemMap[elem.fileID] = elem;
                    prefab.push(elem);
                }
                yamlID = Number(docMatchRst[1]);
                fileID = Number(docMatchRst[2]);
                elemContent = '';
            } else {
                elemContent += line + '\n';
            }
        }
        if(yamlID > 0 && fileID > 0 && elemContent) {
            let elem = this.toUnityElement(yamlID, fileID, elemContent);
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
    }

    private toUnityElement(yamlID: number, fileID: number, elemContent: string): UnityElement {
        let elem = {} as UnityElement;
        elem.yamlID = yamlID;
        elem.fileID = fileID;
        let obj = yaml.parse(elemContent);
        for(let key in obj) {
            elem.type = key;
            elem.object = obj[key];
            break;
        }
        if(!elem.type) {
            throw new Error('Prefab parse error!');
        }
        return elem;
    }

    private getDesciption(obj: any, structMap: any) {
        for(let key in obj) {
            let node = obj[key];
            let nodeType = typeof(node);
            if(!structMap[key]) {
                if(nodeType == 'object') {
                    if(!structMap[key]) {
                        structMap[key] = {};
                    }
                } else {
                    structMap[key] = nodeType;
                }
            } 
            if(nodeType == 'object') {
                this.getDesciption(node, structMap[key]);
            } 
        }
    }

    dumpDescribor() {
        for(let type in this.unityStruct) {
            let lines = this.getDescriptionStr(this.unityStruct[type], '');
            fs.writeFileSync('describor/' + type + '.txt', lines.join('\n'), 'utf-8');
        }
    }

    private getDescriptionStr(structMap: any, indent: string): string[] {
        let lines: string[] = [];
        lines.push('{');
        for(let key in structMap) {
            let structValue = structMap[key];
            if(typeof(structValue) == 'object') {
                let subLines = this.getDescriptionStr(structValue, indent + '    ');
                lines.push(key + '?: {');
                for(let i = 1, len = subLines.length; i < len - 1; i++) {
                    lines.push(subLines[i]);
                }
                lines.push('}, ');
            } else {
                lines.push(key + '?: ' + structValue + ', ');
            }
        }
        lines.push('}, ');
        for(let i = 1, len = lines.length; i < len - 1; i++) {
            lines[i] = '    ' + lines[i];
        }
        return lines;
    }
}