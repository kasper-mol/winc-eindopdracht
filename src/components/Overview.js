import React, { useState } from 'react';
import OverviewGraph from './OverviewGraph'
import * as FormData from '../data/StudentRatings'
import LineGraph from './LineGraph'
import OverviewInfo from './OverviewInfo'


function Overview(props) {
    // filter for  array of assignment names
    function getUniqueListBy(array, key) {
        const allAssignments = [...new Map(array.map(item => [item[key], item])).values()]
        return allAssignments.map(a => a.assignment)
    }
    const assignmentNames = getUniqueListBy(FormData.feedbackForms, 'assignment')
    const [assignments, setAssignments] = useState(assignmentNames)

    // Filters to get array of average fun per assignment
    const filter = (assignmentName, array) => {
        let filterArray = array.filter(function (form) {
            return form.assignment === assignmentName;
        });
        return filterArray
    }

    const assignmentAverage = (array, key) => {
        const arrayAverage = array.reduce((a, b) => {
            return a + b[key]
        }, 0)
        return arrayAverage
    };

    const completeFilter = (assignmentName, dataArray, key) => {
        const assignmentArray = filter(assignmentName, dataArray);
        const totalScore = assignmentAverage(assignmentArray, key);
        const averageScore = totalScore / assignmentArray.length
        return averageScore;
    }

    const assignmentAverageFun = (array, funOrChallenge) => {
        return array.map(element => {
            const averageScore = completeFilter(element, FormData.feedbackForms, funOrChallenge)
            const newItem = {
                name: element,
                score: averageScore
            }
            return newItem
        });
    }

    const difficultArray = assignmentAverageFun(assignments, 'difficult')
    const funArray = assignmentAverageFun(assignments, 'fun')

    const [averageFun, setAverageFun] = useState(funArray)
    const [averageDifficult, setAverageDifficult] = useState(difficultArray)


    return (
        <div>
            <div id='overview'>
                <OverviewInfo assignments={assignments} reviews={FormData.feedbackForms} />
            </div>
            <div id="graphcontainer">

                <OverviewGraph assignments={assignments} averageDifficult={averageDifficult} averageFun={averageFun} />

                <LineGraph assignments={assignments} averageDifficult={averageDifficult} averageFun={averageFun} />
            </div>
        </div>
    );
}

export default Overview
