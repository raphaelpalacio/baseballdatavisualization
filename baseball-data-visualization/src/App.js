import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailPage from './components/DetailPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/batter/:id" element={<DetailPage />} />
        <Route path="/pitcher/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
