import React from 'react';


function OverviewInfo(props) {
    const numberOfForms = props.reviews.length
    const numberOfAssignments = props.assignments.length


    return (
        <div id='overviewcontainer'>
            <div id='textcontainer'>
                Welkom bij het Winc feedbackformulieren overzicht. Heir vind je een overzicht van de feedback van de studenten op de verschillende opdrachten. Op dit moment wordt er data weergeven van {numberOfForms} formulieren verspreid over {numberOfAssignments} opdrachten. Voor de feedback van specifieke student kan er via het menu naar de pagina van de studenten genavigeerd worden.
            </div>
        </div>
    );
}

export default OverviewInfo
