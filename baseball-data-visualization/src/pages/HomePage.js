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
//   TextField,
//   Typography,
//   Toolbar,
// } from '@mui/material';

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const jsonData = await loadExcelData('/BattedBallData.xlsx');
//       setData(jsonData);
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const handleRowClick = (batterId) => {
//     navigate(`/batter/${batterId}`);
//   };

//   const filteredData = data.filter(
//     (row) =>
//       row.BATTER_ID.toString().includes(searchQuery) ||
//       row.PITCHER_ID.toString().includes(searchQuery)
//   );

//   return (
//     <div>
//       <Toolbar>
//         <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
//           BattedBallData List
//         </Typography>
//         <TextField
//           variant="outlined"
//           placeholder="Find players"
//           size="small"
//           onChange={handleSearch}
//         />
//       </Toolbar>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>BATTER_ID</TableCell>
//               <TableCell>PITCHER_ID</TableCell>
//               <TableCell>Exit Velocity</TableCell>
//               <TableCell>Launch Angle</TableCell>
//               <TableCell>Distance</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.map((row) => (
//               <TableRow
//                 key={row.BATTER_ID + row.PITCHER_ID}
//                 hover
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => handleRowClick(row.BATTER_ID)}
//               >
//                 <TableCell>{row.BATTER_ID}</TableCell>
//                 <TableCell>{row.PITCHER_ID}</TableCell>
//                 <TableCell>{row.ExitVelocity}</TableCell>
//                 <TableCell>{row.LaunchAngle}</TableCell>
//                 <TableCell>{row.Distance}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Dashboard;



// HomePage.js
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
  TextField,
  Typography,
  Toolbar,
} from '@mui/material';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await loadExcelData('/BattedBallData.xlsx');
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleRowClick = (batterId) => {
    navigate(`/batter/${batterId}`);
  };

  const filteredData = data.filter(
    (row) =>
      row.BATTER_ID.toString().includes(searchQuery) ||
      row.PITCHER_ID.toString().includes(searchQuery)
  );

  return (
    <div>
      <Toolbar>
        <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
          BattedBallData List
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Find players"
          size="small"
          onChange={handleSearch}
        />
      </Toolbar>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>BATTER_ID</TableCell>
              <TableCell>PITCHER_ID</TableCell>
              {/* Removed Exit Velocity, Launch Angle, and Distance */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow
                key={row.BATTER_ID + row.PITCHER_ID}
                hover
                style={{ cursor: 'pointer' }}
                onClick={() => handleRowClick(row.BATTER_ID)}
              >
                <TableCell>{row.BATTER_ID}</TableCell>
                <TableCell>{row.PITCHER_ID}</TableCell>
                {/* Removed Exit Velocity, Launch Angle, and Distance cells */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
