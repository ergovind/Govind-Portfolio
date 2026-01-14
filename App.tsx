
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-extrabold mb-4">A Few Words <span className="gradient-text">About Me</span></h2>
            </div>
            <div className="md:col-span-2 text-slate-400 text-lg leading-relaxed">
              <p className="mb-6">
                I'm a problem-solver at heart. My journey in technology began with a curiosity for how complex systems work, which eventually led me to a career in full-stack engineering.
              </p>
              <p>
                Today, I focus on building distributed architectures that can handle high throughput without compromising on user experience. I'm particularly interested in the intersection of AI and web applications, exploring how generative models can enhance developer productivity and user interaction.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Govind. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
