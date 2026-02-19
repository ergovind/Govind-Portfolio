
import React from 'react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[40px] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Let's Create Something <span className="gradient-text">Exceptional</span></h2>
              <p className="text-slate-400 text-lg mb-12">
                Whether you have a specific project in mind or just want to chat about technology, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${PROFILE.contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-lg font-medium">{PROFILE.contact.email}</span>
                </a>
                <a href={PROFILE.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <span className="text-lg font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
                <input type="email" placeholder="Email" className="bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
              <textarea placeholder="Message" rows={5} className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
