import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryZoomContainer } from 'victory';

function StudentGraph(props) {
    const studentData = props.studentData

    // Get array of all assignments made by student
    function getUniqueListBy(array, key) {
        const allAssignments = [...new Map(array.map(item => [item[key], item])).values()]
        return allAssignments.map(a => a.assignment)
    }
    const assignmentNames = getUniqueListBy(studentData, 'assignment')
    return (
        <div className="studentgraph" >

            <VictoryChart
                domainPadding={20}
                containerComponent={
                    <VictoryZoomContainer
                        allowPan={true}
                    />
                }
            >

                <VictoryAxis
                    style={{ tickLabels: { fontSize: 5, paddingLeft: 15, writingMode: 'vertical-rl' } }}
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={assignmentNames}


                />
                <VictoryAxis
                    dependentAxis
                    style={{ tickLabels: { fontSize: 5, padding: 5, } }}
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={[1, 2, 3, 4, 5]}
                />
                <VictoryGroup offset={3} >
                    <VictoryBar color={"#bbf0c9"}
                        data={studentData}
                        x="assignment"
                        y="fun"
                    />

                    <VictoryBar color={'#f2c4a2'}
                        data={studentData}
                        x="assignment"
                        y="difficult"
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

export default StudentGraph
