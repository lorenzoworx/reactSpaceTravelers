import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Missions from './components/Missions';
import Dragons from './components/Dragons';
import Profile from './components/Profile';
import RocketList from './components/RocketList';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  </Router>
);

export default App;
