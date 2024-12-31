import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/views/Home';
import Features from './components/views/Features';
import About from './components/views/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
