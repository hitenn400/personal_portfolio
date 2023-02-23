import Header from './portfolio/components/header/Header';
import Navbar from './portfolio/components/nav/Navbar';
import Experience from './portfolio/components/experience/Experience';
import Services from './portfolio/components/services/Services';
import Testimonial from './portfolio/components/testimonials/Testimonial';
import Contact from './portfolio/components/contact/Contact';
import Footer from './portfolio/components/footer/Footer';

import About from './portfolio/components/about/About';
import './index.css';
import'./App.css';

function App() {
  return (
   
    <>
    
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer> 
    </>
  );
}

export default App;
