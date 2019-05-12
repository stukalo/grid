export const getLines = settings => ({
    verticalLines: getVerticalLines(settings),
    horizontalLines: getHorizontalLines(settings),
});

export const getVerticalLines = settings => {
    const verticalLines = [];
    const {
        dx,
        dy,
        stepX,
        stepY,
        width,
        height,
        stroke,
        strokeWidth,
    } = settings;

    const nv = Math.ceil(width / (stepX - dx));
    const half = (nv + 1) / 2;
    const startX = width / 2 - half * stepX;

    for(let i = 0; i < nv; i++) {
        const points = [
            startX + (i + 1) * stepX - dx * (half - i), height,
            startX + (i + 1) * stepX, 0
        ];
        verticalLines.push({
            points,
            stroke,
            strokeWidth,
        })
    }

    return verticalLines;
};

export const getHorizontalLines = (settings) => {
    const horizontalLines = [];
    const {
        dx,
        dy,
        stepX,
        stepY,
        width,
        height,
        stroke,
        strokeWidth,
    } = settings;

    const nh = Math.ceil(height / (stepY - dy));

    for(let i = 0; i < nh; i++) {
        const y = height - (stepY - dy) * i;
        console.log(nh, i, y);
        const points = [
            0, y,
            width, y
        ];
        horizontalLines.push({
            points,
            stroke,
            strokeWidth,
        })
    }

    return horizontalLines;
};

export const getGradient = (width, height, rgb, alphaStops) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, height);

    alphaStops.forEach(alphaStop => {
        const {stop, alpha} = alphaStop;
        gradient.addColorStop(stop, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`);
    });

    return gradient;
};