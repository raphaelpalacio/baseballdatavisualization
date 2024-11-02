// dataLoader.js
// import * as XLSX from 'xlsx';

// export const loadExcelData = async (filePath) => {
//   try {
//     const response = await fetch(filePath);
//     if (!response.ok) throw new Error(`Network response was not ok ${response.statusText}`);
    
//     const arrayBuffer = await response.arrayBuffer();
//     const workbook = XLSX.read(arrayBuffer, { type: 'array' });
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet);

//     return jsonData;
//   } catch (error) {
//     console.error('Error loading or parsing Excel data:', error);
//     return [];
//   }
// };

import * as XLSX from 'xlsx';

const loadExcelData = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Network response was not ok ${response.statusText}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return jsonData;
  } catch (error) {
    console.error('Error loading or parsing Excel data:', error);
    return [];
  }
};

export default loadExcelData;


