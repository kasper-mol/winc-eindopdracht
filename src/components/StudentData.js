import React from 'react';
import * as PersonalData from '../data/PersonalData'

function StudentListItem(props) {
    const allPersonalData = PersonalData.personalData


    const filterFunction = (object) => {
        if (object.firstname === props.studentName) {
            return object
        }
    }

    const StudentInfo = allPersonalData.filter(filterFunction)
    console.log(StudentInfo)


    return (
        <div className='studentinfo'>
            <img src={StudentInfo[0].picture}></img>
            <div className='personalinfo'>
                <h2> {StudentInfo[0].firstname} {StudentInfo[0].lastname}</h2>
                <p><b>Leeftijd</b>: {StudentInfo[0].age}</p>
                <p><b>Tel</b>: {StudentInfo[0].phone} </p>
                <p><b>Email</b>: {StudentInfo[0].email}</p>
            </div>
        </div >
    );
}

export default StudentListItem;
