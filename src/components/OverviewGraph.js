import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLegend } from 'victory';

function Graph(props) {
    const dataAverageFun = props.averageFun
    const dataAverageDifficult = props.averageDifficult

    return (
        <div id="overviewgraph">
            <VictoryChart
                domainPadding={10}
            >
                <VictoryAxis
                    style={{ tickLabels: { fontSize: 5, paddingLeft: 15, writingMode: 'vertical-rl' } }}
                    tickValues={props.assignments}

                    tickFormat={props.assignments}
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
                <VictoryLegend x={50} y={25}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" } }}
                    colorScale={["#bbf0c9", "#f2c4a2"]}
                    data={[
                        { name: "Leuk" }, { name: "Moeilijk" }
                    ]}
                />
            </VictoryChart>

        </div>
    );
}

export default Graph
