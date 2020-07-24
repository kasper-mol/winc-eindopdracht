import React from 'react';
import StudentGraph from './StudentGraph'
import StudentInfo from './StudentInfo'
import StudentData from './StudentData'

function StudentListItem(props) {

    return (
        <div>
            <StudentInfo studentName={props.person} />
            <div className='studentcontainer'>
                <StudentGraph studentName={props.person} studentData={props.studentData} />
                <StudentData studentName={props.person} />
            </div>
        </div >
    );
}

export default StudentListItem;
