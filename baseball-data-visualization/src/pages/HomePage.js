import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Assuming data is already loaded in this component
  const data = [ /* your data source here */ ];

  return (
    <div>
      <h2>BattedBallData List</h2>
      <table>
        <thead>
          <tr>
            <th>BATTER_ID</th>
            <th>PITCHER_ID</th>
            <th>Exit Velocity</th>
            <th>Launch Angle</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <Link to={`/detail/batter/${row.BATTER_ID}`}>{row.BATTER_ID}</Link>
              </td>
              <td>
                <Link to={`/detail/pitcher/${row.PITCHER_ID}`}>{row.PITCHER_ID}</Link>
              </td>
              <td>{row.EXIT_VELO}</td>
              <td>{row.LAUNCH_ANGLE}</td>
              <td>{row.HIT_DISTANCE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
