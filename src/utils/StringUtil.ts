export class StringUtil
{
    static ensureStrLength(s: string, len: number): string {
        let delta = len - s.length;
        if(delta > 0) {
            for(let i = 0; i < delta; i++) {
                s += ' ';
            }
        }
        return s;
    }
}