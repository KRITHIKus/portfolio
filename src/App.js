import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';

import './App.css';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
   <div>
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
