import React,{useEffect, useState} from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/heroSection/hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About/about';
import Services from './components/services/Services';
import CarList from './components/carList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {

  // dark mode feature 
  const [theme,setTheme]=React.useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
  const element=document.documentElement;
  useEffect(()=>{
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme]);

  // AOS Initialization
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App