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
      
      // Filter data to keep only unique BATTER_ID and PITCHER_ID separately
      const uniqueBatters = new Set();
      const uniquePitchers = new Set();
      const uniqueData = [];

      jsonData.forEach(row => {
        // Check if BATTER_ID or PITCHER_ID has already been added
        if (!uniqueBatters.has(row.BATTER_ID) && !uniquePitchers.has(row.PITCHER_ID)) {
          uniqueBatters.add(row.BATTER_ID);
          uniquePitchers.add(row.PITCHER_ID);
          uniqueData.push(row);
        }
      });

      setData(uniqueData);
    };

    fetchData();
  }, []);

  const handleRowClick = (id, isBatter) => {
    navigate(isBatter ? `/batter/${id}` : `/pitcher/${id}`);
  };

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
            {data.map((row, index) => (
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




