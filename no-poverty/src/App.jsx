import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Video from './Pages/Video.jsx'
import About from './Pages/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import AboutQuynh from './Pages/AboutQuynh.jsx'
import AboutAnh from './Pages/AboutAnh.jsx'
import AboutLoi from './Pages/AboutLoi.jsx'
import AboutNghia from "./Pages/AboutNghia.jsx"
import AboutKhang from './Pages/AboutKhang.jsx'
import AboutKhoa from './Pages/AboutKhoa.jsx'
import Contract from './Pages/Contract.jsx'

function App(){
  const [route, setRoute] = useState(() => window.location.hash.replace('#','') || '/');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#','') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let Component = null;
  switch(route){
    case "/": Component = <Home />; break;
    case "/video": Component = <Video />; break;
    case "/about": Component = <About />; break;
    case "/contract": Component = <Contract />; break;
    case "/quynh": Component = <AboutQuynh />; break;
    case "/anh": Component = <AboutAnh />; break;
    case "/loi": Component = <AboutLoi />; break;
    case "/nghia": Component = <AboutNghia />; break;
    case "/khang": Component = <AboutKhang />; break;
    case "/khoa": Component = <AboutKhoa />; break;
    default: Component = <Home />; break;
  }

  return (
    <>
      <Navbar />
      {Component}
      <Footer />
    </>
  );
}
export default App;