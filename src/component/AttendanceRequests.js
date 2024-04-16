import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

const AttendanceRequests = () => {
  const tableStyle = {
    width: '100%',
    border: '1px solid white', // White border for the entire table
    marginTop: '20px', // Add some spacing at the top
  };

  const attendanceVisualStyle = {
    height: '10px', // Set the height of the sky blue line
    width: '100%', // Set the width to 100% of the cell
    backgroundColor: 'skyblue',
  };

  const rowStyle = {
    borderBottom: '1px solid white', // White border after every row
  };

  const cellStyle = {
    textAlign: 'initial', // Set text alignment to initial
    padding: '8px', // Add padding for better spacing
    borderRight: '1px solid white', // White border between columns
  };

  // Additional style for the header row
  const headerRowStyle = {
    borderBottom: '1px solid white', // White border after the header row
  };

  const iconStyle = {
    color: 'green',
    marginRight: '5px',
  };

  const redIconStyle = {
    color: 'red',
    marginRight: '5px',
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>Arrival</th>
            <th style={cellStyle}>Attendance Visual</th>
            <th style={cellStyle}>Effective Hours</th>
            <th style={cellStyle}>Gross Hours</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty row for demonstration */}
          <tr style={rowStyle}>
            <td style={cellStyle}>10 March, 2023</td>
            <td style={cellStyle}>
              <FontAwesomeIcon icon={faCheck} style={iconStyle} />
              8 AM
            </td>
            <td style={cellStyle}>
              <div style={attendanceVisualStyle}></div>
            </td>
            <td style={cellStyle}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'skyblue' }} />
              &nbsp;4 Hours
            </td>
            <td style={cellStyle}>2 Hours</td>
          </tr>
          {/* Add more rows for additional records as needed */}
          <tr style={rowStyle}>
            <td style={cellStyle}>Another Date</td>
            <td style={cellStyle}>
              <FontAwesomeIcon icon={faTimes} style={redIconStyle} />
              Not Arrived
            </td>
            <td style={cellStyle}>
              <div style={attendanceVisualStyle}></div>
            </td>
            <td style={cellStyle}>
              <FontAwesomeIcon icon={faClock} style={{ color: 'skyblue' }} />
              &nbsp;Another Effective Hours
            </td>
            <td style={cellStyle}>Another Gross Hours</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceRequests;
