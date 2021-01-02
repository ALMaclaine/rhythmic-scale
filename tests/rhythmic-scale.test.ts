import * as rhythmicScale from '../src';

describe('rhythmic-scale', () => {
    it('Has Correct API', () => {
        const keys = Object.keys(rhythmicScale);
        expect(keys.length).toBe(1);
        expect(keys).toMatchSnapshot();
    });
});
