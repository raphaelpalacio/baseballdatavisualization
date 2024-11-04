import * as XLSX from 'xlsx';

export const loadExcelData = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Network response was not ok ${response.statusText}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: [
        'BATTER_ID', 
        'Batter Name', 
        'PITCHER_ID', 
        'Pitcher Name', 
        'Game Date', 
        'Exit Velocity', 
        'Launch Angle', 
        'Exit Direction', 
        'Hit Distance', 
        'Hang Time', 
        'Spin Rate', 
        'Play Outcome', 
        'Video Link'
      ]
    });

    return jsonData;
  } catch (error) {
    console.error('Error loading or parsing Excel data:', error);
    return [];
  }
};

export default loadExcelData;





// import * as XLSX from 'xlsx';

// export const loadExcelData = async (filePath, uniqueOnly = false) => {
//   try {
//     const response = await fetch(filePath);
//     if (!response.ok) throw new Error(`Network response was not ok ${response.statusText}`);
    
//     const arrayBuffer = await response.arrayBuffer();
//     const workbook = XLSX.read(arrayBuffer, { type: 'array' });
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, {
//       header: [
//         'BATTER_ID', 
//         'Batter Name', 
//         'PITCHER_ID', 
//         'Pitcher Name', 
//         'Game Date', 
//         'Exit Velocity', 
//         'Launch Angle', 
//         'Exit Direction', 
//         'Hit Distance', 
//         'Hang Time', 
//         'Spin Rate', 
//         'Play Outcome', 
//         'Video Link'
//       ]
//     });

//     if (uniqueOnly) {
//       // Filter to keep only unique BATTER_ID and PITCHER_ID combinations
//       const uniqueDataMap = new Map();

//       jsonData.forEach(row => {
//         const key = `${row.BATTER_ID}-${row.PITCHER_ID}`;
//         if (!uniqueDataMap.has(key)) {
//           uniqueDataMap.set(key, row);
//         }
//       });

//       // Return only unique entries
//       return Array.from(uniqueDataMap.values());
//     }

//     // Return all data if uniqueOnly is false
//     return jsonData;

//   } catch (error) {
//     console.error('Error loading or parsing Excel data:', error);
//     return [];
//   }
// };

// export default loadExcelData;
