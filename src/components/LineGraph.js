import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLegend, VictoryTheme, VictoryLine } from 'victory';



function LineGraph(props) {
    const dataAverageFun = props.averageFun
    const dataAverageDifficult = props.averageDifficult

    // Make graph data
    const createGraphData = (array) => {
        return array.map(element => {
            const newItem = {
                x: element.name,
                y: element.score
            }
            return newItem
        });
    }

    const graphDataFun = createGraphData(dataAverageFun)
    const graphDataDifficult = createGraphData(dataAverageDifficult)

    return (
        <div id='linegraph'>
            <VictoryChart
            >
                <VictoryAxis
                    style={{ tickLabels: { fontSize: 5, paddingLeft: 15, writingMode: 'vertical-rl' } }}
                    tickValues={props.assignments}

                    tickFormat={props.assignments}
                />
                <VictoryAxis
                    dependentAxis
                    style={{ tickLabels: { fontSize: 3, padding: 5, } }}

                    tickFormat={[1, 2, 3, 4, 5]} />
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },

                    }}
                    data={graphDataFun}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "green" },

                    }}
                    data={graphDataDifficult}
                />
            </VictoryChart>
        </div>
    )
}
export default LineGraph