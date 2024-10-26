import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Footer from './components/Navbar/Footer/Footer';
import About from './components/Pages/About';

// Dummy Components for Different Pages
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
const Services = () => <h2>Services Page</h2>;
const WebDevelopment = () => <h2>Web Development Services</h2>;
const AppDevelopment = () => <h2>App Development Services</h2>;
const SEO = () => <h2>SEO Services</h2>;
const Projects = () => <h2>Projects Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
