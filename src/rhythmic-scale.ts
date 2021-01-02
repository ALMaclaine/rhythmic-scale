import {RhythmicScaleParams} from "./types";
import {MusicalRatios, ratioToPower} from "musical-ratios";
import {ensureNotPxRem} from "empxrem";

const rhythmicScaleDefaultParams: RhythmicScaleParams = {
    baseFont: 10,
    baseBrowserFontSize: 16,
    lineHeightFactor: 1.2
}

function scaledSize(ratio: MusicalRatios | number, level: number, size: number = 1) {
    return size * ratioToPower(ratio, level);
}

export class RhythmicScale {
     public baseFont: number;
     public baseBrowserFontSize: number;
     public lineHeightFactor: number;

    constructor(params: RhythmicScaleParams = {}) {
        const {baseFont, baseBrowserFontSize, lineHeightFactor} = {...rhythmicScaleDefaultParams, ...params};
        this.baseFont = baseFont;
        this.baseBrowserFontSize = baseBrowserFontSize;
        this.lineHeightFactor = lineHeightFactor;
    }

    scaledStyles(ratio: MusicalRatios | number, level: number, min?: number): {lineHeight: string, size: string} {
        const scaled = scaledSize(ratio, level, this.baseFont);
        return {
            size: ensureNotPxRem(scaled, this.baseBrowserFontSize),
            lineHeight: ensureNotPxRem(scaled * this.lineHeightFactor, this.baseBrowserFontSize, min)
        }
    }
}
