const getStyles = settings => {
    const {
        width,
        height,
        backgroundColor,
    } = settings;

    return ({
        stageStyles: {
            width,
            height,
        },
        backgroundStyles: {
            x: 0,
            y: 0,
            width: width,
            height: height,
            fill: backgroundColor,
        }
    });
};


export default getStyles;