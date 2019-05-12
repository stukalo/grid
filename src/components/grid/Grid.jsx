import React, {PureComponent} from 'react';
import {
    Stage,
    Layer,
    Line,
    Rect,
} from 'react-konva';
import Konva from 'konva';
import PropTypes from 'prop-types';
import getStyles from './getStyles';
import * as logic from './logic';

class Grid extends PureComponent {
    static propTypes = {
        settings: PropTypes.shape({
            dx: PropTypes.number.require,
            dy: PropTypes.number.require,
            stepX: PropTypes.number.require,
            stepY: PropTypes.number.require,
            width: PropTypes.number.require,
            height: PropTypes.number.require,
            stroke: PropTypes.any.require,
            strokeWidth: PropTypes.number.require,
            backgroundColor: PropTypes.any.require,
        }),
    };

    layerRef = React.createRef();
    horizontalLineRefs = [];
    animation = null;

    componentDidMount() {
        const {
            dy,
            height,
            stepY,
            horizontalSpeed
        } = this.props.settings;

        if(!horizontalSpeed || !this.horizontalLineRefs.length) {
            return;
        }

        const firstLinePoints = [...this.horizontalLineRefs[0].current.attrs.points];
        let currentIndex = 0;

        this.animation = new Konva.Animation(frame => {
            if (this.horizontalLineRefs[currentIndex].current.attrs.points[1] <= height - (stepY - dy)) {
                currentIndex = currentIndex ? currentIndex - 1 : this.horizontalLineRefs.length - 1;
                this.horizontalLineRefs[currentIndex].current.attrs.points = [...firstLinePoints];
            }

            this.horizontalLineRefs.forEach(line => {
                const {points} = line.current.attrs;
                const y = points[1] - horizontalSpeed;
                line.current.attrs.points = [points[0], y, points[2], y];
            });

        }, this.layerRef.current);

        this.animation.start();
    }

    componentWillUnmount() {
        this.animation && this.animation.stop();
    }

    render() {
        const {settings} = this.props;
        const {
            verticalLines,
            horizontalLines,
        } = logic.getLines(settings);
        const styles = getStyles(settings);
        const {
            stageStyles,
            backgroundStyles,
        } = styles;

        return (
            <Stage {...stageStyles}>
                <Layer ref={this.layerRef}>
                    <Rect {...backgroundStyles}/>
                    {verticalLines.map((lineProps, index) => (
                        <Line
                            key={index}
                            {...lineProps}
                        />
                    ))}
                    {horizontalLines.map((lineProps, index) => {
                        const lineRef = React.createRef();
                        this.horizontalLineRefs.push(lineRef);

                        return (
                            <Line
                                key={index}
                                ref={lineRef}
                                {...lineProps}
                            />
                        );
                    })}
                </Layer>
            </Stage>
        );
    }
}

export default Grid;