
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { PROFILE } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href')?.slice(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
          <div className="glass p-12 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="grid md:grid-cols-3 gap-16 items-center relative z-10">
              <div className="md:col-span-1">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Introduction</span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                  Versatile <span className="gradient-text">Problem Solver</span>
                </h2>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">11+</span>
                    <span className="text-xs text-slate-500 uppercase tracking-tighter">Years Exp</span>
                  </div>
                  <div className="w-[1px] h-10 bg-slate-800 self-center"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">20+</span>
                    <span className="text-xs text-slate-500 uppercase tracking-tighter">Projects</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed space-y-6">
                <p>
                  {PROFILE.about}
                </p>
                <p>
                  My professional path is a testament to adaptability and continuous learning. Starting as a Mechanical Engineer at <span className="text-white font-medium">Eco Cements</span>, I progressed into Automation and eventually found my true calling in IT Management at <span className="text-white font-medium">MARGSOFT Technologies</span>.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Education</h4>
                    <p className="text-sm text-slate-500">MBA in Operations Management, IGNOU</p>
                    <p className="text-sm text-slate-500">B.Tech in Mech. Engineering, GBTU</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Key Projects</h4>
                    <p className="text-sm text-slate-500">UP Mine Mitra, Mineral Mart, DBT Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-16 border-t border-white/5 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-left">
              <a href="#" className="text-2xl md:text-3xl font-black gradient-text tracking-tighter mb-2 block">GOVIND KUMAR SINGH.</a>
              <p className="text-slate-500 text-sm max-w-xs">Bridging engineering excellence and IT project success with over a decade of dedicated experience.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center md:text-left">
                <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Connect</h5>
                <ul className="space-y-3 text-slate-500 text-sm">
                  <li>
                    <a href={PROFILE.contact.linkedin} className="inline-block hover:text-white hover:scale-105 transition-all duration-300 ease-out origin-left">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${PROFILE.contact.email}`} className="inline-block hover:text-white hover:scale-105 transition-all duration-300 ease-out origin-left">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Sitemap</h5>
                <ul className="space-y-3 text-slate-500 text-sm">
                  <li>
                    <a href="#about" className="inline-block hover:text-white hover:scale-105 transition-all duration-300 ease-out origin-left">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="inline-block hover:text-white hover:scale-105 transition-all duration-300 ease-out origin-left">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="inline-block hover:text-white hover:scale-105 transition-all duration-300 ease-out origin-left">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Govind Kumar Singh. All rights reserved.</p>
            <p>Designed for Impact & Clarity</p>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
