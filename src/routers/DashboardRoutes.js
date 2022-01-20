import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchForm from '../components/search/SearchForm';
import Navbar from '../ui/Navbar';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} />
          {/* <Navigate to="/marvel" /> */}
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
