import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import loadExcelData from '../data/dataLoader';

function DetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const isBatter = location.pathname.includes("/batter");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const excelData = await loadExcelData('/BattedBallData.xlsx');
        
        // Filter the data based on BATTER_ID or PITCHER_ID
        const filteredData = excelData.filter(row => 
          isBatter ? row.BATTER_ID === parseInt(id) : row.PITCHER_ID === parseInt(id)
        );
        
        setData(filteredData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData(); // Only run this function when `id` or `isBatter` changes
  }, [id, isBatter]);

  return (
    <div>
      <h1>Detail Page for {isBatter ? "BATTER_ID" : "PITCHER_ID"} {id}</h1>
      <table>
        <thead>
          <tr>
            {isBatter ? (
              <>
                <th>BATTER_ID</th>
                <th>Batter Name</th>
                <th>PITCHER_ID</th>
                <th>Pitcher Name</th>
              </>
            ) : (
              <>
                <th>PITCHER_ID</th>
                <th>Pitcher Name</th>
                <th>BATTER_ID</th>
                <th>Batter Name</th>
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
          {data.map((row, index) => (
            <tr key={index}>
              {isBatter ? (
                <>
                  <td>{row.BATTER_ID}</td>
                  <td>{row.BATTER}</td>
                  <td>{row.PITCHER_ID}</td>
                  <td>{row.PITCHER}</td>
                </>
              ) : (
                <>
                  <td>{row.PITCHER_ID}</td>
                  <td>{row.PITCHER}</td>
                  <td>{row.BATTER_ID}</td>
                  <td>{row.BATTER}</td>
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
              <td><a href={row.VIDEO_LINK} target="_blank" rel="noopener noreferrer">Watch</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailPage;
