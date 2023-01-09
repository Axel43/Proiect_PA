import React from 'react';
import TopHeader from './components/TopHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Universitate from './pages/Universitate';
import Portofoliu from './pages/Portofoliu';
import Acasa from './pages/Acasa';
import Contact from './pages/Contact';
const App = () => {
  return (
    <div>
      <Router>
        <TopHeader />
        <Routes>
          <Route path='/' element={<Acasa />} />
          <Route path ='/portofoliu' element = {<Portofoliu />}/>
          <Route path='/universitate' element={<Universitate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
