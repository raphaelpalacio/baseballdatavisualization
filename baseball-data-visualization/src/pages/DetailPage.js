import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadExcelData } from '../data/dataLoader';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const DetailPage = () => {
  const { id } = useParams();
  const [consolidatedData, setConsolidatedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await loadExcelData('/BattedBallData.xlsx');

      // Filter data by the selected ID (either BATTER_ID or PITCHER_ID)
      const filteredData = jsonData.filter(
        (d) => String(d.BATTER_ID) === id || String(d.PITCHER_ID) === id
      );

      // Consolidate entries by unique BATTER_ID and PITCHER_ID combinations
      const consolidated = [];
      const uniqueEntries = {};

      filteredData.forEach((entry) => {
        const key = `${entry.BATTER_ID}-${entry.PITCHER_ID}`;
        if (!uniqueEntries[key]) {
          uniqueEntries[key] = {
            ...entry,
          };
          consolidated.push(uniqueEntries[key]);
        }
      });

      setConsolidatedData(consolidated);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Typography variant="h5" component="div" style={{ margin: '16px 0' }}>
        Detail Page for {id.includes('B') ? 'BATTER_ID' : 'PITCHER_ID'} {id}
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: '16px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>BATTER_ID</TableCell>
              <TableCell>Batter Name</TableCell>
              <TableCell>PITCHER_ID</TableCell>
              <TableCell>Pitcher Name</TableCell>
              <TableCell>Game Date</TableCell>
              <TableCell>Exit Velocity</TableCell>
              <TableCell>Launch Angle</TableCell>
              <TableCell>Exit Direction</TableCell>
              <TableCell>Hit Distance</TableCell>
              <TableCell>Hang Time</TableCell>
              <TableCell>Spin Rate</TableCell>
              <TableCell>Play Outcome</TableCell>
              <TableCell>Video Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consolidatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.BATTER_ID}</TableCell>
                <TableCell>{row.BATTER}</TableCell>
                <TableCell>{row.PITCHER_ID}</TableCell>
                <TableCell>{row.PITCHER}</TableCell>
                <TableCell>{row.GAME_DATE}</TableCell>
                <TableCell>{row.EXIT_VELO}</TableCell>
                <TableCell>{row.LAUNCH_ANGLE}</TableCell>
                <TableCell>{row.EXIT_DIRECTION}</TableCell>
                <TableCell>{row.HIT_DISTANCE}</TableCell>
                <TableCell>{row.HANG_TIME}</TableCell>
                <TableCell>{row.HIT_SPIN_RATE}</TableCell>
                <TableCell>{row.PLAY_OUTCOME}</TableCell>
                <TableCell>
                  {row.VIDEO_LINK ? (
                    <a href={row.VIDEO_LINK} target="_blank" rel="noopener noreferrer">
                      Watch
                    </a>
                  ) : (
                    "N/A"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DetailPage;
