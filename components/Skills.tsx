
import React from 'react';
import { PROFILE } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="gradient-text">Mastery</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE.skills.map((skillGroup, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 hover:text-white hover:border-blue-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
