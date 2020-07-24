import React from 'react';


function StudentInfo(props) {



    return (
        <div id='overviewcontainer'>
            <div id='textcontainer'>
                <h3>Welkom bij het Winc feedback overzicht van {props.studentName}</h3>
            </div>
        </div>
    );
}

export default StudentInfo
