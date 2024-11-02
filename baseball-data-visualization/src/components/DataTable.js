import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const DataTable = ({ data }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>BATTER_ID</TableCell>
          <TableCell>PITCHER_ID</TableCell>
          <TableCell>Exit Velocity</TableCell>
          <TableCell>Launch Angle</TableCell>
          <TableCell>Distance</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.BATTER_ID}</TableCell>
            <TableCell>{row.PITCHER_ID}</TableCell>
            <TableCell>{row.ExitVelocity}</TableCell>
            <TableCell>{row.LaunchAngle}</TableCell>
            <TableCell>{row.Distance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default DataTable;
