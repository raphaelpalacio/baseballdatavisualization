import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loadExcelData from '../data/dataLoader';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import '../styles/theme.css';

const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await loadExcelData('/BattedBallData.xlsx');
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleRowClick = (id, isBatter) => {
    navigate(isBatter ? `/batter/${id}` : `/pitcher/${id}`);
  };

  // Filter data to keep only unique BATTER_ID and PITCHER_ID combinations
  const uniqueDataMap = new Map();
  
  data.forEach(row => {
    const key = `${row.BATTER_ID}-${row.PITCHER_ID}`;
    if (!uniqueDataMap.has(key)) {
      uniqueDataMap.set(key, row);
    }
  });

  // Convert the Map values to an array to use for rendering
  const uniqueData = Array.from(uniqueDataMap.values());

  return (
    <div className="homePage">
      <Toolbar className="toolbar">
        <Typography variant="h5" component="div" className="pageTitle">
          BattedBallData List
        </Typography>
      </Toolbar>
      <TableContainer component={Paper} className="tableContainer">
        <Table className="dataTable">
          <TableHead>
            <TableRow>
              <TableCell className="headerCell">BATTER_ID</TableCell>
              <TableCell className="headerCell">PITCHER_ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueData.map((row, index) => (
              <TableRow
                key={index}
                hover
                style={{ cursor: 'pointer' }}
              >
                <TableCell
                  className="dataCell"
                  onClick={() => handleRowClick(row.BATTER_ID, true)}
                >
                  {row.BATTER_ID} ({row['Batter Name']})
                </TableCell>
                <TableCell
                  className="dataCell"
                  onClick={(e) => { e.stopPropagation(); handleRowClick(row.PITCHER_ID, false); }}
                >
                  {row.PITCHER_ID} ({row['Pitcher Name'] || 'Unknown'})
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
