
import React from 'react';
import { PROFILE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="gradient-text">Journey</span></h2>
          <p className="text-slate-400">My evolution through the tech landscape.</p>
        </div>

        <div className="space-y-12">
          {PROFILE.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-300 mb-4">{exp.company}</h4>
              <ul className="space-y-3">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-blue-500 mt-1.5 shrink-0">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
