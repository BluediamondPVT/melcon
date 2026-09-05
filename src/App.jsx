import {BrowserRouter, Routes, Route} from "react-router-dom";


import './styles/global.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/services" element={<Services/>}/>

        <Route path="/projects" element={<Projects/>}/>

        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>

      </>
  )
}

export default App
