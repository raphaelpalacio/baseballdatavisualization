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
  Paper
//   Typography,
//   Toolbar,
} from '@mui/material';
import '../styles/theme.css'; // Ensure this path is correct based on your file structure

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

  return (
    <div className="table-container">
      {/* <Toolbar>
        <Typography variant="h5" component="div" className="header" style={{ textAlign: 'center', marginBottom: '20px' }}>
          BattedBallData List
        </Typography>
      </Toolbar> */}

      <TableContainer component={Paper} className="table-container">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell className="header" style={{ backgroundColor: '#CE1141', fontWeight: 'bold' }}>BATTER_ID</TableCell>
              <TableCell className="header" style={{ backgroundColor: '#CE1141', fontWeight: 'bold' }}>PITCHER_ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} hover className="table-row">
                <TableCell
                  onClick={() => handleRowClick(row.BATTER_ID, true)}
                  className="cellStyle"
                  style={{ cursor: 'pointer' }}
                >
                  {row.BATTER_ID}
                </TableCell>
                <TableCell
                  onClick={() => handleRowClick(row.PITCHER_ID, false)}
                  className="cellStyle"
                  style={{ cursor: 'pointer' }}
                >
                  {row.PITCHER_ID}
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
