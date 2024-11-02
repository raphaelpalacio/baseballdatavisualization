import * as XLSX from 'xlsx';

const loadExcelData = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return jsonData;
  } catch (error) {
    console.error('Error loading Excel data:', error);
    return [];
  }
};

export default loadExcelData;
