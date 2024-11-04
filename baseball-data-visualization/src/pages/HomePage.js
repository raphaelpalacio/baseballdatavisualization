// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import loadExcelData from '../data/dataLoader';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Toolbar,
//   Typography,
// } from '@mui/material';
// import '../styles/theme.css';

// const HomePage = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const jsonData = await loadExcelData('/BattedBallData.xlsx');
//       setData(jsonData);
//     };
//     fetchData();
//   }, []);

//   const handleRowClick = (id, isBatter) => {
//     navigate(isBatter ? `/batter/${id}` : `/pitcher/${id}`);
//   };

//   // Filter the data to keep unique BATTER_ID and PITCHER_ID combinations
//   const uniqueData = data.filter((value, index, self) => 
//     index === self.findIndex((t) => (
//       t.BATTER_ID === value.BATTER_ID && t.PITCHER_ID === value.PITCHER_ID
//     ))
//   );

//   return (
//     <div className="table-container">
//       <Toolbar className="header">
//         <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
//           BattedBallData List
//         </Typography>
//       </Toolbar>
//       <TableContainer component={Paper} className="table">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell className="headerCell table th">BATTER_ID</TableCell>
//               <TableCell className="headerCell table th">PITCHER_ID</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {uniqueData.map((row, index) => (
//               <TableRow
//                 key={index}
//                 hover
//                 onClick={() => handleRowClick(row.BATTER_ID, true)}
//                 style={{ cursor: 'pointer' }}
//                 className="table-row"
//               >
//                 <TableCell className="table td">{row.BATTER_ID}</TableCell>
//                 <TableCell
//                   className="table td"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleRowClick(row.PITCHER_ID, false);
//                   }}
//                 >
//                   {row.PITCHER_ID}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default HomePage;



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
  const uniqueData = data.reduce((acc, current) => {
    const isDuplicate = acc.some(
      item => item.BATTER_ID === current.BATTER_ID && item.PITCHER_ID === current.PITCHER_ID
    );
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);

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
                  {row.PITCHER_ID} ({row['Pitcher Name']})
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

