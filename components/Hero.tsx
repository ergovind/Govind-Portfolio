
import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Software Engineer & Architect
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Building the <span className="gradient-text">Future</span> of Web Experiences
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">{PROFILE.name}</span>. 
            I craft high-performance, scalable, and beautiful digital products that solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all shadow-xl">
              View Projects
            </a>
            <button className="px-8 py-4 rounded-xl glass text-white font-bold hover:bg-white/5 transition-all">
              Download CV
            </button>
          </div>
        </div>

        <div className="relative group flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src="https://picsum.photos/seed/govind-face/600/600" 
            alt="Govind" 
            className="w-full max-w-md aspect-square object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
