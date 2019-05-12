import React, {Component} from 'react';
import {Wrapper, GlobalStyle} from './styledComponents';
import Grid from './grid/Grid.jsx';
import * as logic from './grid/logic';

class App extends Component {
    render() {
        const width = 360;
        const height = 100;
        const alphaStops = [{
            stop: 0,
            alpha: 0,
        }, {
            stop: 0.2,
            alpha: 0.05,
        }, {
            stop: 0.5,
            alpha: 0.3,
        }, {
            stop: 1.0,
            alpha: 1.0,
        }];
        const linesColor = logic.getGradient(width, height, [33,105,80], alphaStops);
        const backgroundColor = logic.getGradient(width, height, [0,49,53], alphaStops);
        const gridProps = {
            settings: {
                dx: 10,
                dy: 2,
                stepX: 30,
                stepY: 25,
                width: 360,
                height: 130,
                stroke: linesColor,
                strokeWidth: 1,
                backgroundColor: backgroundColor,
                horizontalSpeed: 0.2,
                verticalSpeed: 0,
            }
        };

        return (
            <>
                <Wrapper>
                    <Grid
                        {...gridProps}
                    />
                </Wrapper>
                <GlobalStyle/>
            </>
        );
    }
}

export default App;