import getStyles from '../getStyles';

describe('getStyles', () => {
    const width = 100;
    const height = 200;

    const settings = {
        width,
        height,
    };

    const expectedStyles = {
        stageStyles: {
            width,
            height,
        }
    };

    it('should return correct styles for Stage', () => {
        const { stageStyles } = getStyles(settings);
        assert.deepEqual(stageStyles, expectedStyles.stageStyles);
    })
});