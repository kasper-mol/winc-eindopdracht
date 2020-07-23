import React from 'react';
import StudentGraph from './StudentGraph'

function StudentListItem(props) {

    return (
        <div className="studentlist">
            <p>Ik ben een pagina over {props.person}</p>
            <StudentGraph studentData={props.studentData} />
        </div >
    );
}

export default StudentListItem;
