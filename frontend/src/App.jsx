// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Route and Routes from 'react-router-dom'
import GymIntro from './components/GymIntro';
import Login from './components/Login';
import Schedule from './components/Schedule';

const App = () => {
  return (
    <Router>
      <div>
        {/* ナビゲーションバー */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">ジムの紹介</Link>
            </li>
            <li>
              <Link to="/login">予約</Link>
            </li>
          </ul>
        </nav> */}

        {/* ルーティング */}
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<GymIntro />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/login" element={<Login />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/schedule" element={<Schedule />} /> {/* Use 'element' prop instead of 'component' */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
