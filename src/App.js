import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Load user preference or default to dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  // Save preference on change
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const wins = [
    {
      title: "Turned a 7-Day Support Backlog Into a Clean Inbox",
      company: "VideoRemix | 2017–2023",
      points: [
        "Cleared 2,000+ backlogged tickets in under 7 days",
        "Set clear quotas, created tagging workflows, and saved replies",
        "Led internal training and documentation",
        "Promoted from Specialist to Manager in less than a year"
      ]
    },
    {
      title: "Launched SaaS Products Without Wireframes or Red Tape",
      company: "VideoRemix",
      points: [
        "Worked directly with developers to deliver usable products",
        "Handled end-to-end task and feedback tracking",
        "Coordinated timelines, testing, and launch support",
        "Skip-the-fluff execution that delivered on time"
      ]
    },
    {
      title: "Built and Managed Remote Teams That Didn't Need Babysitting",
      company: "VideoRemix",
      points: [
        "Hired and trained support, CS, and dev team members",
        "Ran affiliate onboarding, webinars, and engagement workflows",
        "Created onboarding sequences, email campaigns, and knowledge articles"
      ]
    },
    {
      title: "Migrated Tools Without Breaking Teams",
      company: "VideoRemix & LTV Funds",
      points: [
        "Replaced costly Asana setup with ClickUp",
        "Built structured spaces, created templates, onboarded team",
        "At LTV Funds, moved 6–7 product teams under a single PM system",
        "Introduced blocker-reporting workflows and feedback loops"
      ]
    },
    {
      title: "Solved Problems Others Ignored",
      company: "Across Companies",
      points: [
        "Fixed recurring AWS billing issues, negotiated better pricing",
        "Managed WordPress, hosting, cPanel, TimeDoctor, LastPass",
        "Automated repetitive workflows with Zapier and Intercom",
        "Wrote 100+ internal SOPs and onboarding articles"
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-800 dark:bg-gray-900 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Olaide Bhadmus</h1>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("hero")} className="hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection("wins")} className="hover:text-blue-500 transition-colors">Wins</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-blue-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-blue-500 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 transition-colors">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4 space-y-3 bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm">
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection("wins")} className="block w-full text-left hover:text-blue-500 transition-colors">Wins</button>
            <button onClick={() => scrollToSection("skills")} className="block w-full text-left hover:text-blue-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left hover:text-blue-500 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-blue-500 transition-colors">Contact</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-10 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0 transition-transform duration-1000 ease-out transform-gpu"
          style={{
            backgroundImage: `url("https://picsum.photos/seed/opsmanager/1920/1080")`, 
            transform: `scale(${1 + scrollY * 0.0005})`
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 backdrop-blur-sm p-6 rounded-xl bg-black/40 dark:bg-white/10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Olaide Bhadmus
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-6">Operations Manager | Systems Thinker | Team Builder</p>
          <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 mb-8">Lagos, Nigeria (Remote) | <span className="text-blue-400 hover:underline cursor-pointer"><a href='mailto:bhadmusolaide@gmail.com'>Email</a></span> | <span className="text-blue-400 hover:underline cursor-pointer"><a href='https://www.linkedin.com/in/olaide-bhadmus/' target='_blank'>LinkedIn</a></span></p>
          
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            I fix messy systems, lead distributed teams, and help early-stage SaaS companies scale without burning out their resources. My experience spans customer support, product ops, process design, and internal tooling. No fluff, just structure, clarity, and follow-through.
          </p>

          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium hover:from-blue-500 hover:to-purple-600 transform transition hover:scale-105 shadow-lg hover:shadow-xl">
            Download Resume
          </button>
        </div>
      </section>

      {/* Wins Section */}
      <section id="wins" className="py-20 px-4 md:px-8 bg-gray-900 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">🏆 WINS THAT MATTER</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wins.map((win, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveTab(index)}
                className={`transition-all duration-500 rounded-xl p-6 shadow-lg border ${
                  activeTab === index ? 'bg-gray-800 border-blue-500 scale-105' : 'bg-gray-900 dark:bg-gray-800 border-gray-800'
                } hover:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-blue-500/20`}
              >
                <h3 className="text-xl font-semibold mb-2">{win.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{win.company}</p>
                <ul className="space-y-2 text-sm md:text-base text-gray-300 dark:text-gray-300">
                  {win.points.map((point, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="mr-2 mt-1 text-green-400 group-hover:text-blue-400 transition-colors">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">🔎 WHAT I BRING</h2>
          <ul className="space-y-6 text-lg text-gray-300 dark:text-gray-300">
            {[
              "Process design and remote team leadership",
              "SaaS product coordination without bottlenecks",
              "Tool consolidation and cost-cutting",
              "Zero-handholding, detail-aware execution"
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-center group">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 transition-transform group-hover:scale-125"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8 bg-gray-900 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">💬 TESTIMONIALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example testimonials, replace with real ones as needed */}
            <div className="rounded-xl p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial1.jpg" alt="Testimonial 1" className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500 object-cover" />
              <p className="text-lg text-gray-300 mb-4 italic">“We had an underperforming team member Bhadmus was managing. Bhadmus oversaw our success team while he was running operations. This team member had a bad attitude and accused Bhadmus of dishonesty in reporting their activity. This came to me as CEO, and I spent time investigating. Bhadmus was upfront and clear about what he observed, while also giving me space to explore and determine the situation myself. He was clear on his recommendations for handling the team member. Eventually, that person was let go. Bhadmus put together a solid plan to minimize the team impact and get us back on track quickly.”</p>
              <span className="font-semibold text-blue-400">— Dan Cumberland, CEO, VideoRemix</span>
            </div>
            <div className="rounded-xl p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial2.jpg" alt="Testimonial 2" className="w-20 h-20 rounded-full mb-4 border-4 border-pink-400 object-cover" />
              <p className="text-lg text-gray-300 mb-4 italic">“He's really a smart and hardworking manager. Open to help you when needed. Very good communication skills and can talk through complex situations with clarity. His leadership has been instrumental in our team's success.”</p>
              <span className="font-semibold text-pink-400">— Anne Audette, Junior Product Manager, VideoRemix</span>
            </div>
            <div className="rounded-xl p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial3.jpeg" alt="Testimonial 3" className="w-20 h-20 rounded-full mb-4 border-4 border-pink-400 object-cover" />
              <p className="text-lg text-gray-300 mb-4 italic">“He's a systems thinker who gets things done. Our migration to new tools was seamless, and his documentation made onboarding a breeze.”</p>
              <span className="font-semibold text-pink-400">— Tanveer Kour, Director of Operations, LTV Funds</span>
            </div>
            <div className="rounded-xl p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial4.jpeg" alt="Testimonial 4" className="w-20 h-20 rounded-full mb-4 border-4 border-pink-400 object-cover" />
              <p className="text-lg text-gray-300 mb-4 italic">“Working with Olaide was a game-changing experience for our team. His collaboration and technical insights helped us streamline our processes and deliver better results.”</p>
              <span className="font-semibold text-pink-400">— Gary Armstrong, Operations Manager, LTV Funds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">📩 LET'S TALK</h2>
          <p className="text-gray-300 dark:text-gray-400 mb-6">I'm open to full-time or contract roles focused on:</p>
          <ul className="space-y-3 text-gray-300 dark:text-gray-400 mb-8">
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">Ops Leadership</li>
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">SaaS Product/Support Management</li>
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">Remote Team Structure & Execution</li>
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">Workflow Automation & Process Optimization</li>
          </ul>
          <div className="space-y-2 text-gray-400 dark:text-gray-500">
            <p>Email: <span className="text-blue-400 hover:underline cursor-pointer"><a href='mailto:bhadmusolaide@gmail.com'>bhadmusolaide@gmail.com</a></span></p>
            <p>LinkedIn: <span className="text-blue-400 hover:underline cursor-pointer"><a href='https://www.linkedin.com/in/olaide-bhadmus/' target='_blank'>https://www.linkedin.com/in/olaide-bhadmus/</a></span></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-800 dark:border-gray-700">
        Built with ❤️ by Olaide Bhadmus — Designed for impact and clarity
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
