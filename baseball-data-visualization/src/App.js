// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // Adjusted to import HomePage

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage as the main page */}
        <Route path="/batter/:id" element={<DetailPage isBatter={true} />} /> {/* Pass isBatter prop for batter details */}
        <Route path="/pitcher/:id" element={<DetailPage isBatter={false} />} /> {/* Pass isBatter prop for pitcher details */}
      </Routes>
    </Router>
  );
}

export default App;

