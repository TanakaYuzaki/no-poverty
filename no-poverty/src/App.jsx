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
  let Component
    switch(window.location.pathname){
      case "/":
        Component=<Home></Home>
        break;
      case "/video":
        Component=<Video></Video>
        break;
      case "/about":
        Component=<About></About>
        break;
      case "/contract":
        Component= <Contract></Contract>
        break;
      case "/quynh":
        Component=<AboutQuynh></AboutQuynh>
        break;
      case "/anh":
        Component=<AboutAnh></AboutAnh>
        break;
      case "/loi":
        Component=<AboutLoi></AboutLoi>
        break;
      case "/nghia":
        Component=<AboutNghia></AboutNghia>
        break;
      case "/khang":
        Component=<AboutKhang></AboutKhang>
        break;
      case "/khoa":
        Component=<AboutKhoa></AboutKhoa>
        break;
    }

  return(
    

    <>
    <Navbar></Navbar>
    {Component}
    <Footer></Footer>
    
    
    </>

  );
}
export default App