import './App.css';
import Header from './components/header';
import Profile from './components/profile';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div className="bg-[#232732] w-[100%] overflow-y-auto flex flex-col items-center justify-around text-white">
      <Header />
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
