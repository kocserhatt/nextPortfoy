import "./pageModule.css";
import Navbar from "../components/navbar";
import HomePage from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className='container'>
     <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Projects/>
     <Footer/>
     </div>
  );
}
