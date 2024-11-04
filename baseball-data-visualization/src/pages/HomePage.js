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

  // Filter the data to keep unique BATTER_ID and PITCHER_ID combinations
  const uniqueData = data.filter((value, index, self) => 
    index === self.findIndex((t) => (
      t.BATTER_ID === value.BATTER_ID && t.PITCHER_ID === value.PITCHER_ID
    ))
  );

  return (
    <div className="table-container">
      <Toolbar className="header">
        <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
          BattedBallData List
        </Typography>
      </Toolbar>
      <TableContainer component={Paper} className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="headerCell table th">BATTER_ID</TableCell>
              <TableCell className="headerCell table th">PITCHER_ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueData.map((row, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => handleRowClick(row.BATTER_ID, true)}
                style={{ cursor: 'pointer' }}
                className="table-row"
              >
                <TableCell className="table td">{row.BATTER_ID}</TableCell>
                <TableCell
                  className="table td"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRowClick(row.PITCHER_ID, false);
                  }}
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
