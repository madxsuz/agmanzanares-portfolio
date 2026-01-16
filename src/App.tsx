import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Workflow,
  Bug,
  Layout,
  Terminal,
  Server,
  ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import { SERVICES, EXPERIENCE, SKILLS } from './constants';

const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('active'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="reveal">{children}</div>;
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
        <div className="min-h-screen selection:bg-gold selection:text-forest transition-colors duration-500 overflow-x-hidden">
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    
          <main>
            {/* Hero Section */}
            <section id="hero" className="relative min-h-[95vh] flex items-center pt-24 px-6 overflow-hidden">
              <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.7em] text-gold animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    Creative Pipeline Automation Engineer
                  </span>
                  <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight leading-[1] max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                    Angelo <span className="text-gold italic font-normal">Manzanares</span>
                  </h1>
                  <p className="text-base md:text-lg text-forest/70 dark:text-cream/70 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                    Engineering high-volume asset generation systems that bulk-manipulate properties within structured After Effects & Photoshop templates.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <a
                      href="#experience"
                      onClick={(e) => scrollToSection(e, '#experience')}
                      className="px-10 py-5 bg-forest dark:bg-gold text-white dark:text-forest-900 rounded-full font-bold uppercase tracking-widest text-[10px] hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
                    >
                      View Automation Work
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => scrollToSection(e, '#contact')}
                      className="flex items-center space-x-3 text-forest dark:text-cream font-bold uppercase tracking-widest text-[10px] hover:text-gold group"
                    >
                      <span>Build Together</span>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-forest/5 dark:border-white/5 rounded-full pointer-events-none"></div>
            </section>
    
            {/* About Section */}
            <section id="about" className="py-24 bg-cream/30 dark:bg-forest/20 relative z-10">
              <div className="container mx-auto px-6">
                <RevealOnScroll>
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                      <div className="aspect-[4/5] bg-forest rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <img
                          src="https://picsum.photos/seed/angelo-auto/1000/1250"
                          alt="Angelo Manzanares Portrait"
                          className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border border-forest/10 dark:border-white/10 shadow-2xl">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gold rounded-xl text-white">
                            <Workflow size={24} />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold dark:text-cream">Efficiency</h4>
                            <p className="text-[9px] uppercase font-bold tracking-widest text-forest/60 dark:text-cream/60">Bulk Asset Specialist</p>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div className="space-y-10">
                      <div className="space-y-3">
                        <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">The Technical Niche</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold dark:text-cream">Templates <br />as Code.</h2>
                      </div>
                      <p className="text-base md:text-lg text-forest/70 dark:text-cream/80 leading-relaxed font-light">
                        My background in Information Systems combined with deep Creative Cloud scripting (ExtendScript/UXP) allows me to treat visual templates as data-driven components.
                      </p>
                      <p className="text-forest/70 dark:text-cream/80 leading-relaxed text-sm">
                        I specialize in automizing the visual production process. By programmatically setting properties on structured After Effects and Photoshop templates—from text and colors to keyframe timing—I build systems that transform raw data into broadcast-ready content at scale.
                      </p>
    
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="p-6 bg-white dark:bg-forest shadow-sm dark:shadow-none rounded-2xl border border-forest/5 dark:border-white/10 group hover:border-gold transition-colors">
                          <h5 className="font-bold text-gold uppercase text-[9px] tracking-widest mb-2.5">Template Logic</h5>
                          <p className="text-xs font-semibold dark:text-cream">Bulk Property Mapping</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-forest shadow-sm dark:shadow-none rounded-2xl border border-forest/5 dark:border-white/10 group hover:border-gold transition-colors">
                          <h5 className="font-bold text-gold uppercase text-[9px] tracking-widest mb-2.5">Backend Bridge</h5>
                          <p className="text-xs font-semibold dark:text-cream">Laravel Composition Engines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </section>
    
            {/* Services Section */}
            <section id="services" className="py-24 px-6 relative z-10">
              <div className="container mx-auto">
                <RevealOnScroll>
                  <div className="text-center mb-20 space-y-4">
                    <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">What I Provide</span>
                    <h2 className="text-4xl font-serif font-bold dark:text-cream">Creative Pipeline Engineering</h2>
                    <div className="w-12 h-1 bg-gold mx-auto rounded-full"></div>
                  </div>
                </RevealOnScroll>
                <div className="grid md:grid-cols-3 gap-8">
                  {SERVICES.map((s) => (
                    <RevealOnScroll key={s.id}>
                      <div className="p-10 bg-white dark:bg-forest shadow-sm dark:shadow-none rounded-[2.5rem] border border-forest/5 dark:border-white/5 hover:border-gold transition-all duration-500 group h-full">
                        <div className="mb-8 p-5 bg-cream dark:bg-forest-900 w-fit rounded-2xl text-forest dark:text-gold group-hover:bg-gold group-hover:text-forest transition-all">
                        <s.icon size={30} />
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-4 dark:text-cream">{s.title}</h3>
                        <p className="text-forest/60 dark:text-cream/60 text-sm leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Experience Section */}
            <section id="experience" className="py-24 bg-cream/20 dark:bg-forest-900/40 relative z-10">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <RevealOnScroll>
                    <div className="text-center mb-20 space-y-3">
                      <h2 className="text-3xl font-serif font-bold dark:text-cream">Project History</h2>
                      <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em]">Scaling Production</p>
                    </div>
                  </RevealOnScroll>
    
                  <div className="relative space-y-16">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-forest/10 dark:bg-white/10 -translate-x-1/2 hidden md:block"></div>
    
                    {EXPERIENCE.map((exp, idx) => (
                      <RevealOnScroll key={exp.id}>
                        <div className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className="flex-1 md:p-6">
                            <div className="p-8 bg-white dark:bg-forest rounded-[2rem] border border-forest/5 dark:border-white/5 shadow-md hover:shadow-xl transition-all">
                              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-3 block">{exp.period}</span>
                              <h3 className="text-2xl font-serif font-bold mb-1 dark:text-cream">{exp.company}</h3>
                              <p className="text-forest/40 dark:text-cream/40 font-bold text-[10px] uppercase tracking-widest mb-6">{exp.position}</p>
                              <ul className="space-y-3 mb-8">
                                {exp.description.map((d, i) => (
                                  <li key={i} className="flex items-start space-x-3 text-xs md:text-sm text-forest/70 dark:text-cream/70">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2.5">
                                {exp.milestones.map((m, i) => (
                                  <span key={i} className="px-3 py-1.5 bg-cream dark:bg-forest-900 rounded-lg text-[9px] font-bold text-forest/50 dark:text-cream/50 uppercase tracking-widest border border-forest/5 dark:border-white/5">
                                    {m}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:block w-4 h-4 rounded-full bg-gold absolute left-1/2 -translate-x-1/2 mt-16 border-4 border-cream-50 dark:border-forest-900 shadow-lg"></div>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </section>
    
            {/* Skills Section */}
            <section id="skills" className="py-24 bg-forest/5 dark:bg-forest/30 relative z-10">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-5 space-y-8">
                    <RevealOnScroll>
                      <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">The Automation Toolset</span>
                      <h2 className="text-4xl font-serif font-bold dark:text-cream">Specialized Stack</h2>
                      <p className="text-forest/60 dark:text-cream/60 text-base leading-relaxed max-w-md">
                        Bridging the gap between enterprise backend stability and creative frontend expression through specialized scripting and robust middleware.
                      </p>
                      <div className="flex items-center space-x-5 pt-4">
                        <div className="p-5 bg-forest dark:bg-gold rounded-2xl text-white dark:text-forest shadow-xl">
                          <Terminal size={28} />
                        </div>
                        <div className="p-5 bg-white dark:bg-forest rounded-2xl text-forest dark:text-cream border border-forest/10 dark:border-white/10 shadow-lg">
                          <Server size={28} />
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>
    
                  <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
                    {SKILLS.map((cat) => (
                      <RevealOnScroll key={cat.category}>
                        <div className="p-8 bg-white dark:bg-forest rounded-3xl border border-forest/5 dark:border-white/5 shadow-sm hover:shadow-lg transition-all h-full">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold mb-6 flex items-center">
                            <div className="w-10 h-px bg-gold mr-4"></div>
                            {cat.category}
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {cat.skills.map((skill) => (
                              <span key={skill} className="px-4 py-2.5 bg-cream/50 dark:bg-forest-900/50 text-forest/70 dark:text-cream/80 rounded-xl text-[10px] font-bold uppercase tracking-wider border border-forest/10 dark:border-white/10 hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-forest transition-colors cursor-default">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </section>
    
            <section className="py-24 container mx-auto px-6 relative z-10">
              <RevealOnScroll>
                <Testimonials />
              </RevealOnScroll>
            </section>
    
            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 relative z-10">
              <div className="container mx-auto">
                <RevealOnScroll>
                  <div className="max-w-5xl mx-auto bg-white dark:bg-forest rounded-[3rem] overflow-hidden border border-forest/5 dark:border-white/5 shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 p-10 md:p-14 bg-forest text-cream flex flex-col justify-between space-y-12">
                      <div className="space-y-6">
                        <h2 className="text-4xl font-serif font-bold leading-tight">Scale Your <br />Production.</h2>
                        <p className="text-cream/50 text-sm font-light leading-relaxed">Let's build a custom automation bridge between your data and your creative output.</p>
                      </div>
    
                      <div className="space-y-8">
                        <div className="flex items-center space-x-5 group">
                          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-gold transition-colors">
                            <Mail size={22} className="text-gold group-hover:text-forest" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-cream/40 mb-1">Inquiries</p>
                            <a href="mailto:agmanzanares.chmsu@gmail.com" className="text-sm font-medium hover:text-gold transition-colors break-all">agmanzanares.chmsu@gmail.com</a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-5 group">
                          <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-gold transition-colors">
                            <MapPin size={22} className="text-gold group-hover:text-forest" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-cream/40 mb-1">Base</p>
                            <p className="text-sm font-medium">Silay City, Negros Occidental</p>
                          </div>
                        </div>
                      </div>
    
                      <div className="flex space-x-5">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-gold hover:text-forest transition-all duration-300"><Github size={20}/></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-gold hover:text-forest transition-all duration-300"><Linkedin size={20}/></a>
                      </div>
                    </div>
    
                    <div className="lg:w-3/5 p-8 md:p-14">
                      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-forest/40 dark:text-cream/40">Full Identity</label>
                            <input type="text" className="w-full bg-cream/10 dark:bg-forest-900 rounded-xl px-6 py-4 focus:outline-none border border-forest/20 dark:border-white/10 focus:border-gold transition-all text-sm dark:text-cream" placeholder="Your Name" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-forest/40 dark:text-cream/40">Digital Contact</label>
                            <input type="email" className="w-full bg-cream/10 dark:bg-forest-900 rounded-xl px-6 py-4 focus:outline-none border border-forest/20 dark:border-white/10 focus:border-gold transition-all text-sm dark:text-cream" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-forest/40 dark:text-cream/40">Automation Goals</label>
                          <textarea rows={4} className="w-full bg-cream/10 dark:bg-forest-900 rounded-xl px-6 py-4 focus:outline-none border border-forest/20 dark:border-white/10 focus:border-gold transition-all text-sm dark:text-cream resize-none" placeholder="Describe the creative friction you want to eliminate through bulk processing or template scripting."></textarea>
                        </div>
                        <button className="w-full py-5 bg-forest dark:bg-gold text-white dark:text-forest font-bold uppercase tracking-[0.4em] text-[10px] hover:opacity-90 shadow-xl transition-all active:scale-[0.98]">
                          Consult for Solutions
                        </button>
                      </form>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </section>
          </main>
    
          <footer className="py-16 bg-cream/10 dark:bg-forest-900 border-t border-forest/10 dark:border-white/5 relative z-10">
            <div className="container mx-auto px-6 flex flex-col items-center space-y-8">
              <div className="text-2xl font-serif font-bold text-forest dark:text-gold tracking-tighter">AM.</div>
              <nav className="flex flex-wrap justify-center gap-10">
                {['Github', 'LinkedIn', 'Resume', 'Contact'].map(item => (
                  <a
                    key={item}
                    href={item === 'Github' ? 'https://github.com' : item === 'LinkedIn' ? 'https://linkedin.com' : `#${item.toLowerCase() === 'resume' ? 'about' : item.toLowerCase()}`}
                    target={item === 'Github' || item === 'LinkedIn' ? "_blank" : "_self"}
                    rel={item === 'Github' || item === 'LinkedIn' ? "noopener noreferrer" : ""}
                    onClick={item === 'Github' || item === 'LinkedIn' ? undefined : (e) => scrollToSection(e, `#${item.toLowerCase() === 'resume' ? 'about' : item.toLowerCase()}`)}
                    className="text-forest/40 dark:text-cream/40 hover:text-gold transition-colors uppercase text-[9px] font-bold tracking-[0.4em]"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <div className="w-12 h-px bg-forest/10 dark:bg-white/10"></div>
              <p className="text-forest/40 dark:text-cream/40 text-[9px] font-bold uppercase tracking-[0.5em] text-center">
                © {new Date().getFullYear()} Angelo Manzanares. <br className="md:hidden" /> <span className="text-gold">Creative Systems Architecture.</span>
              </p>
            </div>
          </footer>
        </div>  );
};

export default App;