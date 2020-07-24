import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryZoomContainer } from 'victory';

function Graph(props) {
    const dataAverageFun = props.averageFun
    const dataAverageDifficult = props.averageDifficult

    return (
        <div className="graph" id="overviewgraph">
            <h3>Average score for each assignment</h3>
            <VictoryChart
                domainPadding={10}
                padding={{ top: 10, bottom: 50, left: 20, right: 20 }}
                containerComponent={
                    <VictoryZoomContainer
                        allowPan={true}
                    />
                }
            >

                <VictoryAxis
                    style={{ tickLabels: { fontSize: 5, paddingLeft: 15, writingMode: 'vertical-rl' } }}
                    tickValues={props.assignments}
                />
                <VictoryAxis
                    dependentAxis
                    style={{ tickLabels: { fontSize: 5, padding: 5, } }}
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={[1, 2, 3, 4, 5]}
                />
                <VictoryGroup offset={3} >
                    <VictoryBar color={'#bbf0c9'}
                        data={dataAverageFun}
                        x="name"
                        y="score"
                    />

                    <VictoryBar color={'#f2c4a2'}
                        data={dataAverageDifficult}
                        x="name"
                        y="score"
                    />

                </VictoryGroup>

            </VictoryChart>
            <div className="legendacontainer">
                <div className="legendaboxleuk"></div>
                <p>Leuk</p>
                <div className="legendaboxmoeilijk"></div>
                <p>Moeilijk</p>
            </div>
        </div>
    );
}

export default Graph
