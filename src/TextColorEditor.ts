import fs = require('fs');
import { UnityElement, Prefab } from "./parser/PrefabParser";
import { YamlClassID } from "./parser/YamlClassID";
import { UnityEngine, UnityObject, MonoTypeNames } from "../typings";
import { ColorPalette, DiffRGBExtra } from "./ColorPalette";
import { StringUtil } from "./utils/StringUtil";
import * as diff from 'color-diff';

export class TextColorEditor {
    private elemMap: {[fileID: number]: UnityElement};
    private closestColorMap: {[color: string]: string[]} = {};

    edit(prefab: Prefab, palette: ColorPalette) {
        this.elemMap = {};
        for(let elem of prefab) {
            this.elemMap[elem.fileID] = elem;
        }
        for(let elem of prefab) {
            if(elem.yamlID == YamlClassID.MonoBehaviour) {
                elem.monoType = this.identifyScriptType(elem.object);
                if(elem.monoType == 'UnityEngine.UI.Text') {
                    this.handleText(elem.object as UnityEngine.UI.Text, palette);
                }
            }
        }
    }

    private handleText(text: UnityEngine.UI.Text, palette: ColorPalette) {
        let textDiffRGB = ColorPalette.unityRGB2diffRGB(text.m_Color);
        let textCssColor = ColorPalette.diffRGB2CSSColor(textDiffRGB);
        // 检查哪个颜色匹配
        if(!this.closestColorMap[textCssColor]) {
            let colors: string[] = []
            for(let colorSet of palette.colorSets) {
                let closestColor = diff.closest(textDiffRGB, colorSet.colors) as DiffRGBExtra;
                colors.push(closestColor.cssColor);
            }
            this.closestColorMap[textCssColor] = colors;
        }
        // let gameobject = this.elemMap[text.m_GameObject.fileID].object as UnityEngine.GameObject;
        // console.log('text: %s, color: %s, closest color: %s~%s(%s)', gameobject.m_Name, textCssColor, closestColor.cssColor, closestColor.name, closestColor.setName);
    }

    private identifyScriptType(obj: UnityObject): MonoTypeNames {
        let textAlias = obj as UnityEngine.UI.Text;
        if(textAlias.m_Color !== undefined && textAlias.m_Text !== undefined && textAlias.m_FontData !== undefined) {
            return 'UnityEngine.UI.Text';
        }
        return 'UnityEngine.MonoBehaviour';
    }

    dumpColors(palette: ColorPalette, outputPath: string) {
        let content = StringUtil.ensureStrLength('color', 11);
        for(let colorSet of palette.colorSets) {
            content += StringUtil.ensureStrLength(colorSet.name, 11);
        }
        content += '\n';
        for(let colorKey in this.closestColorMap) {
            content += colorKey + '  ' + this.closestColorMap[colorKey].join('  ') + '\n';
        }
        fs.writeFileSync(outputPath, content, 'utf-8');
    }
}