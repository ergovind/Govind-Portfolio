
import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background blobs with refined colors and movement */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>
      
      {/* Decorative spinning ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-slow-spin -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto w-full text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full glass text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20 animate-fade-in-up">
            {PROFILE.title}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white animate-fade-in-up delay-100">
            Delivering <span className="gradient-text">Complex IT</span> Solutions with Precision
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
            I'm <span className="text-white font-semibold">{PROFILE.name}</span>. 
            I bridge the gap between business vision and technical execution through expert project coordination and management.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up delay-300">
            <a href="#projects" className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-4 rounded-2xl glass text-white font-bold hover:bg-white/5 transition-all border border-white/10 hover:border-white/20">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative group flex justify-center animate-fade-in-right delay-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[40px] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative z-10 p-2 glass rounded-[40px] border border-white/10 shadow-2xl animate-float">
            <img 
              src="https://media.licdn.com/dms/image/v2/C5103AQHVXzH6R-I7zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517523992095?e=1746057600&v=beta&t=H3Hl3Yh6-J_OInw9K7X8m-T0D6G_H9N-Y-P-J-Y-K-I" 
              alt={PROFILE.name} 
              className="w-full max-w-md aspect-square object-cover rounded-[32px] transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Status Indicator */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 glass px-4 py-2 rounded-2xl border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-white tracking-wider uppercase">Available for Hire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
