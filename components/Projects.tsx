
import React from 'react';
import { PROFILE } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Public Sector Impact</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">Digital <span className="gradient-text">Transformation</span></h2>
            <p className="text-slate-400 text-lg">Leading the development of critical infrastructure for major government departments in Uttar Pradesh.</p>
          </div>
          <div className="flex gap-4">
            <div className="glass px-6 py-4 rounded-3xl border border-white/5 text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Departments</div>
            </div>
            <div className="glass px-6 py-4 rounded-3xl border border-white/5 text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Live Portals</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {PROFILE.projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-slate-900/50 rounded-[40px] border border-white/5 hover:border-blue-500/40 transition-all duration-500 overflow-hidden hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                {/* Darkening overlay */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-6 right-6 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-lg border border-blue-400/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors duration-300">{project.description}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-blue-500/70 transition-colors duration-300">Deployment Ready</span>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-400 group-hover:border-blue-900 transition-colors duration-300">
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[40px] border border-white/5 bg-slate-900/30 text-center">
          <h4 className="text-xl font-bold text-white mb-4">Other Notable Collaborations</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {["UP PCF", "NHRM", "NABFINS", "PCDF", "UP Khadi", "UP Fisheries"].map(dept => (
              <span key={dept} className="px-6 py-3 rounded-2xl glass border border-white/5 text-slate-400 font-bold text-sm hover:text-white hover:border-blue-500/20 hover:scale-105 transition-all cursor-default">
                {dept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
