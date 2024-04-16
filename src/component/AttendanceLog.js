// components/AttendanceLog.js
import React from 'react';

const AttendanceLog = ({ attendanceLog }) => {
  return (
    <div>
      <h2>Attendance Log</h2>
      <h2>Shift Schedule</h2>
      <h2>Attendance Requests</h2>
      
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {attendanceLog?.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.Arrival}</td>
              <td>{record.attendanceVisual}</td>
              <td>{record.effectiveHours}</td>
              <td>{record.grossHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceLog;
