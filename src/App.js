import React from 'react';
import './App.css';
import Nav from './Nav'
import * as FormData from './data/StudentRatings'
import Overview from './components/Overview'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import StudentListItem from './components/StudentListItem';

function App() {

  // Create array of unnique student names
  function getUniqueListBy(array, key) {
    return [...new Map(array.map(item => [item[key], item])).values()]
  }
  const uniqueNames = getUniqueListBy(FormData.feedbackForms, 'name')

  // Create list with al students with links
  const studentLinks = uniqueNames.map((person) => {
    return (<li key={person.name}>
      <Link to={`/${person.name}`}>{person.name}</Link>
    </li>)
  })

  // Filter for student specific data
  const studentFilter = (studentName, array) => {
    let filterArray = array.filter(function (form) {
      return form.name === studentName;
    });
    return filterArray
  }

  // Create all student pages
  const studentsRoute = uniqueNames.map((person) => {
    return (<Route path={`/${person.name}`} key={person.name}>
      <StudentListItem studentData={studentFilter(person.name, FormData.feedbackForms)} person={person.name} />
    </Route>)
  })

  return (
    <Router>
      <div className="App">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link to="/" > HOME</Link>
            <h3>Students</h3>
            <ul id='studentlinks'>
              {studentLinks}
            </ul>
          </ul>
        </div>
        <Switch>
          <Route path='/' exact component={Overview} />
          {studentsRoute}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
