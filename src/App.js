import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './Main';
import Introduce from './Introduce';
import Stack from './Stack';
import Works from './Works';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/works" element={<Works />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
