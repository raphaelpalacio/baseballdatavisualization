import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadExcelData from '../data/dataLoader';
import '../styles/DetailPage.css';

const DetailPage = ({ isBatter }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const title = isBatter ? `Detail Page for BATTER_ID ${id}` : `Detail Page for PITCHER_ID ${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await loadExcelData('/BattedBallData.xlsx');
      const filteredData = jsonData.filter((row) =>
        isBatter ? row.BATTER_ID.toString() === id : row.PITCHER_ID.toString() === id
      );
      setData(filteredData);
    };

    fetchData();
  }, [id, isBatter]);

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>{title}</h2>
      <div className="table-container">
        <table className="detail-table">
          <thead>
            <tr>
              {isBatter ? (
                <>
                  <th className="headerStyle">BATTER_ID</th>
                  <th className="headerStyle">Batter Name</th>
                  <th className="headerStyle">PITCHER_ID</th>
                  <th className="headerStyle">Pitcher Name</th>
                </>
              ) : (
                <>
                  <th className="headerStyle">PITCHER_ID</th>
                  <th className="headerStyle">Pitcher Name</th>
                  <th className="headerStyle">BATTER_ID</th>
                  <th className="headerStyle">Batter Name</th>
                </>
              )}
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
                {isBatter ? (
                  <>
                    <td className="cellStyle">{row.BATTER_ID}</td>
                    <td className="cellStyle">{row['Batter Name']}</td>
                    <td className="cellStyle">{row.PITCHER_ID}</td>
                    <td className="cellStyle">{row['Pitcher Name']}</td>
                  </>
                ) : (
                  <>
                    <td className="cellStyle">{row.PITCHER_ID}</td>
                    <td className="cellStyle">{row['Pitcher Name']}</td>
                    <td className="cellStyle">{row.BATTER_ID}</td>
                    <td className="cellStyle">{row['Batter Name']}</td>
                  </>
                )}
                <td className="cellStyle">{row['Game Date']}</td>
                <td className="cellStyle">{row['Exit Velocity']}</td>
                <td className="cellStyle">{row['Launch Angle']}</td>
                <td className="cellStyle">{row['Exit Direction']}</td>
                <td className="cellStyle">{row['Hit Distance']}</td>
                <td className="cellStyle">{row['Hang Time']}</td>
                <td className="cellStyle">{row['Spin Rate']}</td>
                <td className="cellStyle">{row['Play Outcome']}</td>
                <td className="cellStyle">
                  <a href={row['Video Link']} target="_blank" rel="noopener noreferrer">
                    Watch
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DetailPage;


