import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.scss';
import Portfolio2 from './components/Portfolio2';

function App() {
  return (
    <>
      
    <Routes >
    
    <Route path="/" element={<Layout />}>
       {/* <Route index exact element={<Home />} /> */}
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="*" element={<Home />} />
       <Route path="/portfolio2" element={<Portfolio2 />} />
       <Route path="/home" element={<Home />} />
       <Route path="/" element={<Home />} />
    </Route>
    </Routes>

    </>
  );
}

export default App;
