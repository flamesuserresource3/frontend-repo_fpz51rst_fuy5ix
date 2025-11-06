import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Abiizar Hakim — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
