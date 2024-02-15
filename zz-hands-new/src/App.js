import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Why/>
      <Process/>
      <Testimonials/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;