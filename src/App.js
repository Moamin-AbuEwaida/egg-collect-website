import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';


function App() {
  const [open , setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && open){
        setOpen(false);
        // console.log('resized')
      }
    }
    window.addEventListener('resize', hideMenu)
    return ()=>{
      window.removeEventListener('resize', hideMenu)

    }
  },[open])


  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown open={open} toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
