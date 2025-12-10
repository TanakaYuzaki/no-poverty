import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Video from './Pages/Video.jsx';
import About from './Pages/About.jsx';
import Footer from './Components/Footer/Footer.jsx';

import AboutQuynh from './Pages/AboutQuynh.jsx';
import AboutAnh from './Pages/AboutAnh.jsx';
import AboutLoi from './Pages/AboutLoi.jsx';
import AboutNghia from './Pages/AboutNghia.jsx';
import AboutKhang from './Pages/AboutKhang.jsx';
import AboutKhoa from './Pages/AboutKhoa.jsx';

import Contract from './Pages/Contract.jsx';

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/no-poverty/":
      Component = <Home />;
      break;

    case "/no-poverty/video":
      Component = <Video />;
      break;

    case "/no-poverty/about":
      Component = <About />;
      break;

    case "/no-poverty/contract":
      Component = <Contract />;
      break;

    case "/no-poverty/quynh":
      Component = <AboutQuynh />;
      break;

    case "/no-poverty/anh":
      Component = <AboutAnh />;
      break;

    case "/no-poverty/loi":
      Component = <AboutLoi />;
      break;

    case "/no-poverty/nghia":
      Component = <AboutNghia />;
      break;

    case "/no-poverty/khang":
      Component = <AboutKhang />;
      break;

    case "/no-poverty/khoa":
      Component = <AboutKhoa />;
      break;

    default:
      Component = <Home />;
      break;
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