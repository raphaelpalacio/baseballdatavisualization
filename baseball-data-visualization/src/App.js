import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:type/:id" element={<DetailPage />} /> {/* Pass 'type' and 'id' */}
      </Routes>
    </Router>
  );
}

export default App;
