import React from 'react'
import { VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryLine } from 'victory';



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
        <div className="graph" id='linegraph'>
            <h3>Average score for each assignment</h3>
            <VictoryChart
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
                    style={{ tickLabels: { fontSize: 3, padding: 5, } }}

                    tickFormat={[1, 2, 3, 4, 5]} />
                <VictoryLine
                    style={{
                        data: { stroke: "#bbf0c9" },

                    }}
                    data={graphDataFun}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "#f2c4a2" },

                    }}
                    data={graphDataDifficult}
                />
            </VictoryChart>
            <div className="legendacontainer">
                <div className="legendaboxleuk"></div>
                <p>Leuk</p>
                <div className="legendaboxmoeilijk"></div>
                <p>Moeilijk</p>
            </div>
        </div>
    )
}
export default LineGraph