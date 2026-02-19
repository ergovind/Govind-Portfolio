
import React from 'react';
import { PROFILE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">The Road to Success</span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Professional <span className="gradient-text">Journey</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A decade of evolution across mechanical engineering, industrial automation, and IT management.</p>
        </div>

        <div className="space-y-16">
          {PROFILE.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line */}
              {idx !== PROFILE.experience.length - 1 && (
                <div className="absolute left-[1.5rem] md:left-[2.25rem] top-12 bottom-[-4rem] w-px bg-slate-800 group-hover:bg-blue-500/30 transition-colors"></div>
              )}
              
              <div className="flex gap-8 md:gap-12">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-slate-900 z-10">
                    <span className="text-lg md:text-xl font-black gradient-text">{exp.company[0]}</span>
                  </div>
                </div>

                <div className="flex-grow pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                      <h4 className="text-md font-semibold text-slate-400">{exp.company}</h4>
                    </div>
                    <span className="text-xs font-bold text-blue-400 bg-blue-400/5 px-4 py-2 rounded-xl border border-blue-400/20 whitespace-nowrap self-start md:self-center">
                      {exp.period}
                    </span>
                  </div>

                  <div className="glass p-6 md:p-8 rounded-3xl border border-white/5 group-hover:border-white/10 transition-all bg-slate-900/40">
                    <ul className="space-y-4">
                      {exp.description.map((point, pIdx) => (
                        <li key={pIdx} className="text-slate-400 text-sm md:text-base leading-relaxed flex gap-4">
                          <span className="shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
