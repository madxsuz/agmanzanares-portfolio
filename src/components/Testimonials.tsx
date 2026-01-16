
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative overflow-hidden py-16 bg-forest text-cream rounded-[3rem] border border-forest dark:border-white/5 shadow-2xl">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto mb-6 text-gold opacity-50" size={40} />
          <div className="relative h-56 md:h-44 flex items-center justify-center overflow-hidden">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${
                  idx === active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <p className="text-lg md:text-xl font-serif italic mb-8 leading-relaxed px-4">
                  "{t.content}"
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-xs tracking-[0.2em] uppercase text-gold">{t.name}</h4>
                  <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 space-x-6">
            <button onClick={prev} className="p-2 text-cream/40 hover:text-gold transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
               {TESTIMONIALS.map((_, idx) => (
                 <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === active ? 'w-8 bg-gold' : 'w-2 bg-cream/20'}`}></div>
               ))}
            </div>
            <button onClick={next} className="p-2 text-cream/40 hover:text-gold transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
