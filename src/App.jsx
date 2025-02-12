import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // ✅ Use HashRouter
>>>>>>> 27af640 (Reinitialize Repository)
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
<<<<<<< HEAD
=======

>>>>>>> 27af640 (Reinitialize Repository)
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
