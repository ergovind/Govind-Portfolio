
import React, { useEffect, useRef, useState } from 'react';
import { PROFILE } from '../constants';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-slate-900/30 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="gradient-text">Mastery</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE.skills.map((skillGroup, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-700 group transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
              }`}
            >
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
