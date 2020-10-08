import fs = require('fs-extra');
import { PaletteCfg, UnityEngine } from '../typings';
import * as d3 from 'd3-color';
import * as diff from 'color-diff';
import { StringUtil } from "./utils/StringUtil";

export interface DiffRGBExtra extends diff.RGBColor {
    setName: string;
    name: string;
    cssColor: string;
    d3Color: d3.RGBColor;
}

export interface ColorSet {
    name: string;
    colors: DiffRGBExtra[];
}

export class ColorPalette {
    colorSets: ColorSet[] = [];
    private colorSetMap: {[name: string]: ColorSet} = {};

    setup(cfgFile: string) {
        let cfg = fs.readJSONSync(cfgFile) as PaletteCfg;
        for(let oneCfg of cfg.sets) {
            let oneSet = {} as ColorSet;
            oneSet.name = oneCfg.name;
            oneSet.colors = [];
            for(let oneColor of oneCfg.colors) {
                oneColor.color = ColorPalette.ensureAlpha(oneColor.color);
                let colorInfo = {} as DiffRGBExtra;
                let d3Color = d3.rgb(oneColor.color);
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
    }

    getColorSet(name: string): ColorSet {
        return this.colorSetMap[name];
    }

    getClosestColor(color: diff.RGBColor): DiffRGBExtra {
        let colorArr: diff.RGBColor[] = [];
        for(let oneSet of this.colorSets) {
            for(let oneColor of oneSet.colors) {
                colorArr.push(oneColor);
            }
        }
        return diff.closest(color, colorArr) as DiffRGBExtra;
    }

    static unityRGB2diffRGB(uRGB: UnityEngine.Color): diff.RGBColor {
        return {R: this.RGBfloat2int(uRGB.r), G: this.RGBfloat2int(uRGB.g), B: this.RGBfloat2int(uRGB.b), A: uRGB.a}
    }
    
    static diffRGB2CSSColor(diffRGB: diff.RGBColor): string {
        return '#' + this.RGBfloat2css(diffRGB.R) + this.RGBfloat2css(diffRGB.G) + this.RGBfloat2css(diffRGB.B) + this.RGBfloat2css(this.RGBfloat2int(diffRGB.A));
    }

    static RGBfloat2int(f: number): number {
        return Math.round(f * 255);
    }

    static RGBfloat2css(f: number): string {
        return this.ensureDigit(f.toString(16), 2);
    }

    static ensureDigit(s: string, d: number): string {
        let delta = d - s.length;
        if(delta > 0) {
            for(let i = 0; i < delta; i++) {
                s = '0' + s;
            }
        }
        return s;
    }

    static ensureAlpha(cssColor: string): string {
        if(cssColor.length == 7) {
            cssColor += 'ff';
        }
        return cssColor;
    }

    dumpColors() {
        let content = StringUtil.ensureStrLength('color', 11);
        for(let colorSet of this.colorSets) {
            content += StringUtil.ensureStrLength(colorSet.name, 11);
        }
        content += '\n';
        for(let r = 0; r <= 255; r++) {
            for(let g = 0; g <= 255; g++) {
                for(let b = 0; b <= 255; b++) {
                    let rgb = {R: r, G: g, B: b, A: 255} as diff.RGBColor;
                    let css = ColorPalette.diffRGB2CSSColor(rgb);
                    content += css;
                    for(let colorSet of this.colorSets) {
                        let closestColor = diff.closest(rgb, colorSet.colors) as DiffRGBExtra;
                        content += '  ' + closestColor.cssColor;
                    }
                    content += '\n';
                }
            }
        }
        fs.writeFileSync('out/closest.txt', content, 'utf-8');
    }
}