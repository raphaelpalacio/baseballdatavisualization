import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadExcelData from '../data/dataLoader';
import './DetailPage.css';

const DetailPage = ({ isBatter }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const title = isBatter ? `Detail Page for BATTER_ID ${id}` : `Detail Page for PITCHER_ID ${id}`;

  // Function to convert Excel serial date to JavaScript date format
  const convertExcelDate = (serial) => {
    const utc_days = Math.floor(serial - 25569);
    const date_info = new Date(utc_days * 86400 * 1000);
    const month = date_info.getMonth() + 1;
    const day = date_info.getDate();
    const year = date_info.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await loadExcelData('/BattedBallData.xlsx');
      const filteredData = jsonData.map((row) => ({
        ...row,
        'Game Date': convertExcelDate(row['GAME_DATE'] || row['Game Date']),
      })).filter((row) =>
        isBatter ? row.BATTER_ID.toString() === id : row.PITCHER_ID.toString() === id
      );
      setData(filteredData);
    };

    fetchData();
  }, [id, isBatter]);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{title}</h2>
      <table className="detail-table">
        <thead>
          <tr>
            <th className="headerStyle">BATTER_ID</th>
            <th className="headerStyle">Batter Name</th>
            <th className="headerStyle">PITCHER_ID</th>
            <th className="headerStyle">Pitcher Name</th>
            <th className="headerStyle">Game Date</th>
            <th className="headerStyle">Exit Velocity</th>
            <th className="headerStyle">Launch Angle</th>
            <th className="headerStyle">Exit Direction</th>
            <th className="headerStyle">Hit Distance</th>
            <th className="headerStyle">Hang Time</th>
            <th className="headerStyle">Spin Rate</th>
            <th className="headerStyle">Play Outcome</th>
            <th className="headerStyle">Video Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="cellStyle">{row.BATTER_ID}</td>
              <td className="cellStyle">{row.Batter || row['Batter Name']}</td>
              <td className="cellStyle">{row.PITCHER_ID}</td>
              <td className="cellStyle">{row.Pitcher || row['Pitcher Name']}</td>
              <td className="cellStyle">{row['Game Date']}</td>
              <td className="cellStyle">{row.EXIT_VELOCITY || row['Exit Velocity']}</td>
              <td className="cellStyle">{row.LAUNCH_ANGLE || row['Launch Angle']}</td>
              <td className="cellStyle">{row.EXIT_DIRECTION || row['Exit Direction']}</td>
              <td className="cellStyle">{row.HIT_DISTANCE || row['Hit Distance']}</td>
              <td className="cellStyle">{row.HANG_TIME || row['Hang Time']}</td>
              <td className="cellStyle">{row.SPIN_RATE || row['Spin Rate']}</td>
              <td className="cellStyle">{row.PLAY_OUTCOME || row['Play Outcome']}</td>
              <td className="cellStyle">
                <a href={row.VIDEO_LINK || row['Video Link']} target="_blank" rel="noopener noreferrer">
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
