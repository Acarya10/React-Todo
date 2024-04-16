// App.js
import React, { useState ,useEffect
} from 'react';
import AttendanceLog from './component/AttendanceLog';
import ShiftSchedule from './component/ShiftSchedule';
import AttendanceRequests from './component/AttendanceRequests';
import { Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import { Todo } from './Todo';


function App() {
  const [attendanceLog, setAttendanceLog] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    debugger
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    debugger
    setIsAuthenticated(storedAuthStatus);
    console.log("val",storedAuthStatus)
  }, []);


  


  return (
    <div>

<Switch>
        <Route path="/" exact component={Login} />
        <Route path="/todo" component={Todo} />
        


        <Route path="/shift" component={ShiftSchedule} />
        <Route path="/request" component={AttendanceRequests} />
      </Switch>
      {/* <h1>Attendance Management System</h1>
      <AttendanceLog attendanceLog={attendanceLog} />
      <ShiftSchedule />
      <AttendanceRequests addAttendanceRecord={addAttendanceRecord} /> */}
    </div>
  );
}

export default App;
