import Header from './components/Header';
import Hero from './components/Hero';
import Runs from './components/Runs';
import Log from './components/Log';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#runs">
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <Runs />
        <Log />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
