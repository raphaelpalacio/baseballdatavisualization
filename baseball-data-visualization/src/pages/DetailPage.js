import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loadExcelData from '../data/dataLoader';


const DetailPage = () => {
  const { id, type } = useParams(); // type should be either 'batter' or 'pitcher'
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const excelData = await loadExcelData('/path/to/BattedBallData.xlsx');
      setData(excelData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (type && data.length > 0) {
      setFilteredData(data.filter(row => {
        return type === 'batter' ? row.BATTER_ID === id : row.PITCHER_ID === id;
      }));
    }
  }, [data, id, type]);

  return (
    <div>
      <h2>
        Detail Page for {type === 'batter' ? `BATTER_ID ${id}` : `PITCHER_ID ${id}`}
      </h2>
      <table>
        <thead>
          <tr>
            {type === 'batter' ? (
              <>
                <th>BATTER_ID</th>
                <th>Batter Name</th>
              </>
            ) : (
              <>
                <th>PITCHER_ID</th>
                <th>Pitcher Name</th>
              </>
            )}
            <th>Game Date</th>
            <th>Exit Velocity</th>
            <th>Launch Angle</th>
            <th>Exit Direction</th>
            <th>Hit Distance</th>
            <th>Hang Time</th>
            <th>Spin Rate</th>
            <th>Play Outcome</th>
            <th>Video Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {type === 'batter' ? (
                <>
                  <td>{row.BATTER_ID}</td>
                  <td>{row.BATTER}</td>
                </>
              ) : (
                <>
                  <td>{row.PITCHER_ID}</td>
                  <td>{row.PITCHER}</td>
                </>
              )}
              <td>{row.GAME_DATE}</td>
              <td>{row.EXIT_VELO}</td>
              <td>{row.LAUNCH_ANGLE}</td>
              <td>{row.EXIT_DIRECTION}</td>
              <td>{row.HIT_DISTANCE}</td>
              <td>{row.HANG_TIME}</td>
              <td>{row.HIT_SPIN_RATE}</td>
              <td>{row.PLAY_OUTCOME}</td>
              <td>
                <a href={row.VIDEO_LINK} target="_blank" rel="noopener noreferrer">
                  Watch
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailPage;
