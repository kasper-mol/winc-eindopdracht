import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLegend } from 'victory';

function StudentGraph(props) {
    const studentData = props.studentData

    // Get array of all assignments made by student
    function getUniqueListBy(array, key) {
        const allAssignments = [...new Map(array.map(item => [item[key], item])).values()]
        return allAssignments.map(a => a.assignment)
    }
    const assignmentNames = getUniqueListBy(studentData, 'assignment')

    return (
        <div>
            <h3>Graph placeholder</h3>
            <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={20}
            >
                <VictoryAxis
                    style={{ tickLabels: { fontSize: 5, paddingLeft: 15, writingMode: 'vertical-rl' } }}
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={assignmentNames}

                    tickFormat={assignmentNames}
                />
                <VictoryAxis
                    dependentAxis
                    style={{ tickLabels: { fontSize: 5, padding: 5, } }}
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={[1, 2, 3, 4, 5]}
                />
                <VictoryGroup offset={3} >
                    <VictoryBar color={'red'}
                        data={studentData}
                        x="assignment"
                        y="fun"
                    />

                    <VictoryBar color={'green'}
                        data={studentData}
                        x="assignment"
                        y="difficult"
                    />

                </VictoryGroup>
                <VictoryLegend x={125} y={100}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" } }}
                    colorScale={["red", "green"]}
                    data={[
                        { name: "Moeilijk" }, { name: "Leuk" }
                    ]}
                />
            </VictoryChart>

        </div>
    );
}

export default StudentGraph
