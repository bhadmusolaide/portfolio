import React, { useState, useEffect, useCallback } from 'react';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

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

      // Active section highlighting
      const sectionIds = ["hero", "skills", "wins", "case-study", "testimonials", "contact"];
      const currentSection = sectionIds.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // A section is "active" if its top is within the top 50% of the viewport
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const wins = [
    {
      title: "Turned a 7-Day Support Backlog Into a Clean Inbox",
      company: "VideoRemix | 2017–2024",
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
      company: "VideoRemix & LTV SaaS Growth Fund",
      points: [
        "Replaced costly Asana setup with ClickUp",
        "Built structured spaces, created templates, onboarded team",
        "At LTV SaaS Growth Fund, moved 6–7 product teams under a single PM system",
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
    },
    {
      title: "Built and Grew a Fast Food Concept from Scratch",
      company: "Bite & Sips Food and Drinks | Nov 2023 – Present",
      points: [
        "Built a fast food concept from scratch, including menu, branding, and operations",
        "Managed a team of 10+ employees, including chefs, servers, and managers",
        "Created order fulfillment workflows that reduced wait times by 25%",
        "Used real-time feedback and sales data to improve product offerings",
        "Increased customer retention by 20% and boosted overall sales by 30% in the first year"
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

  // Case studies data
  const caseStudies = [
    {
      title: 'From Support Specialist to Ops Lead — How I Took Control at VideoRemix',
      company: 'VideoRemix',
      role: 'Operations Manager',
      timeline: '2017–2024',
      context: 'Joined VideoRemix in 2017 right after launch. Support inbox was chaos — 7-day-old tickets, frustrated customers, and a team that was barely keeping up.',
      problem: [
        'Thousands of backlogged tickets. No clear system. Inconsistent performance across the support team. Lack of internal knowledge sharing.'
      ],
      actions: [
        'Personally cleared 100+ tickets/day, brought backlog down in under a week',
        'Proposed and implemented a daily quota system (min. 40 tickets per rep)',
        'Introduced priority-based tagging, saved replies, and support articles to speed things up',
        'Coordinated directly with PMs to chase down internal answers, even earned a reputation as "the dog with the bone" for never letting blockers linger',
        'Helped create a new standard of speed and quality for customer support'
      ],
      results: [
        'Cleared thousands of tickets in the first week',
        'Improved support SLAs drastically',
        'Got promoted to Customer Support Lead in under 1 year, and later to Operations Manager, leading both support and internal systems for 3+ years'
      ],
      quote: {
        text: 'If Bhadmus is on something, he won\'t let you rest.',
        author: '— Tomer Sagi, PM'
      }
    },
    {
      title: 'How I Got 7 Dev Teams on the Same Page at LTV Funds',
      company: 'LTV SaaS Growth Fund',
      role: 'Development Teams Manager',
      timeline: '2021–2022',
      context: 'At LTV SaaS Growth Fund, each product had its own dev team — about 6–7 in total. They all used different tools, tracked issues their own way, and had no unified update process. It was messy and slow.',
      problem: [
        'No visibility across teams',
        'Blockers weren\'t flagged early',
        'Updates got lost',
        'Timelines slipped because coordination was weak'
      ],
      actions: [
        'Migrated all teams to ClickUp, created structured workspaces under one account',
        'Set up task management, role-based access, and centralized documentation',
        'Introduced a blocker-tracking system that let devs surface issues in real time',
        'Drove a culture of open communication and faster feedback loops',
        'Worked closely with each lead to align sprints and remove friction'
      ],
      results: [
        'Dev updates became consistent across teams',
        'PMs got visibility into progress without chasing',
        'Blockers were resolved faster',
        'Teams worked with clear timelines and accountability'
      ]
    },
    {
      title: 'Digitizing Restaurant Ops Before It Was Cool — 2015, Nigeria',
      company: 'Skippers Fast Food LTD',
      role: 'Head of IT & Customer Service',
      timeline: '2015–2017',
      context: 'In 2015, I joined a large fast-food restaurant, Skippers as Head of IT & Customer Service. Waiters were handwriting orders, running back and forth to the kitchen, and manually tracking everything. The stress was high. The delays were worse.',
      problem: [
        'Orders were taken manually',
        'Kitchen had no real-time view of what was coming',
        'Waiters were overwhelmed',
        'Customers waited longer than necessary'
      ],
      actions: [
        'Deployed a full smart order management system using FoodZaps',
        'Equipped lobby waiters with smartphones to take and send orders instantly',
        'Set up kitchen displays (TVs) to show real-time orders to chefs',
        'Gave chefs tablets to update order status when ready',
        'Integrated a flow for cashiers + waiters to sync before delivery'
      ],
      results: [
        'Killed manual order-taking',
        'Reduced wait time significantly',
        'Improved staff coordination',
        'Delivered one of the first smart restaurant ops systems in Nigeria at the time'
      ]
    },
    {
      title: 'Wore Multiple Hats to Scale a Lean SaaS Team',
      company: 'VideoRemix',
      role: 'Operations Manager',
      timeline: '2017–2024',
      context: 'VideoRemix was an early-stage SaaS company with a lean team and no clear internal systems. The pace was fast, the structure was missing, and execution had to happen without typical product management layers.',
      problem: [
        'There was no one point of contact tying product, support, and team operations together.',
        'Tasks were scattered, project management tools were inefficient, and the cost of disorganization—tool overlap, delayed timelines, support inconsistencies—kept growing.'
      ],
      actions: [
        'Collaborated directly with developers to build and launch SaaS products—no wireframes, no fluff',
        'Handled idea breakdown, task management, and delivery timelines',
        'Migrated the entire team from Asana to ClickUp, reducing tool cost and aligning project tracking',
        'Led onboarding and internal training to ease the transition',
        'Recruited and trained remote teams across customer success and support',
        'Anchored live webinars, created onboarding flows, and ran Facebook community engagement',
        'Managed affiliate marketing workflows—wrote email sequences, supported partners, and handled setup',
        'Resolved billing and usage issues on AWS, negotiated lower rates',
        'Maintained infrastructure tools like WordPress, CPanel, TimeDoctor, and LastPass',
        'Built automation using Zapier and Intercom, reducing repetitive manual work',
        'Created 100+ internal articles, guides, and process documents'
      ],
      results: [
        'Delivered multiple SaaS launches on time with limited resources',
        'Reduced overhead costs (tooling and cloud services)',
        'Increased internal clarity, team accountability, and execution speed',
        'Became the point person for operational strategy and internal tooling decisions'
      ]
    }
  ];

  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = useCallback(() => {
    if (activeCaseStudy > 0) {
      setDirection(-1);
      setTransitioning(true);
      setTimeout(() => {
        setActiveCaseStudy((prev) => prev - 1);
        setTransitioning(false);
      }, 350);
    }
  }, [activeCaseStudy]);

  const handleNext = useCallback(() => {
    if (activeCaseStudy < caseStudies.length - 1) {
      setDirection(1);
      setTransitioning(true);
      setTimeout(() => {
        setActiveCaseStudy((prev) => prev + 1);
        setTransitioning(false);
      }, 350);
    }
  }, [activeCaseStudy, caseStudies.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  }, [handlePrev, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-800 dark:bg-gray-900 bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2 md:mb-0">Olaide Bhadmus</h1>
          
          {/* Desktop Menu - move to right */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 ml-auto">
            <button onClick={() => scrollToSection("hero")} className={`transition-colors px-2 py-1 ${activeSection === 'hero' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Home</button>
            <button onClick={() => scrollToSection("skills")} className={`transition-colors px-2 py-1 ${activeSection === 'skills' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Skills</button>
            <button onClick={() => scrollToSection("wins")} className={`transition-colors px-2 py-1 ${activeSection === 'wins' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Wins</button>
            <button onClick={() => scrollToSection("case-study")} className={`transition-colors px-2 py-1 ${activeSection === 'case-study' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Case Study</button>
            <button onClick={() => scrollToSection("testimonials")} className={`transition-colors px-2 py-1 ${activeSection === 'testimonials' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className={`transition-colors px-2 py-1 ${activeSection === 'contact' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Contact</button>
          </nav>

          <div className="flex items-center space-x-4 md:hidden w-full justify-end">
            {/* Mobile Menu Button */}
            <button 
              className="p-2 focus:outline-none"
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
          <nav className="md:hidden px-2 pb-4 space-y-2 bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm w-full">
            <button onClick={() => scrollToSection("hero")} className={`block w-full text-left transition-colors py-2 ${activeSection === 'hero' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Home</button>
            <button onClick={() => scrollToSection("skills")} className={`block w-full text-left transition-colors py-2 ${activeSection === 'skills' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Skills</button>
            <button onClick={() => scrollToSection("wins")} className={`block w-full text-left transition-colors py-2 ${activeSection === 'wins' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Wins</button>
            <button onClick={() => scrollToSection("case-study")} className={`block w-full text-left transition-colors py-2 ${activeSection === 'case-study' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Case Study</button>
            <button onClick={() => scrollToSection("testimonials")} className={`block w-full text-left transition-colors py-2 ${activeSection === 'testimonials' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className={`block w-full text-left transition-colors py-2 ${activeSection === 'contact' ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}`}>Contact</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-8 pt-20 pb-10 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0 transition-transform duration-1000 ease-out transform-gpu"
          style={{
            backgroundImage: `url("https://picsum.photos/seed/opsmanager/1920/1080")`, 
            transform: `scale(${1 + scrollY * 0.0005})`
          }}
        ></div>

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 backdrop-blur-sm p-4 sm:p-6 rounded-xl bg-black/40 dark:bg-white/10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Olaide Bhadmus
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-6">Operations Manager | Systems Thinker | Team Builder</p>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 dark:text-gray-500 mb-8">Lagos, Nigeria (Remote) | <span className="text-blue-400 hover:underline cursor-pointer"><a href='mailto:bhadmusolaide@gmail.com'>Email</a></span> | <span className="text-blue-400 hover:underline cursor-pointer"><a href='https://www.linkedin.com/in/olaide-bhadmus/' target='_blank' rel="noopener noreferrer">LinkedIn</a></span> | <span className="text-blue-400 hover:underline cursor-pointer"><a href='https://olaide-resume.vercel.app/' target='_blank' rel="noopener noreferrer">Website</a></span> | <span className="text-blue-400 hover:underline cursor-pointer"><a href='https://github.com/bhadmusolaide' target='_blank' rel="noopener noreferrer">Github</a></span></p>
          
          <p className="text-base sm:text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            I fix messy systems, lead distributed teams, and help early-stage SaaS companies scale without burning out their resources. My experience spans customer support, product ops, process design, and internal tooling. No fluff, just structure, clarity, and follow-through.
          </p>

          <a href='/OLAIDE BHADMUS-Operations Manager.pdf' target='_blank' rel="noopener noreferrer" className="mt-8 inline-block px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium hover:from-blue-500 hover:to-purple-600 transform transition hover:scale-105 shadow-lg hover:shadow-xl">
            View My Resume
          </a>
        </div>
      </section>

      {/* What I Bring Section (moved below Hero, expanded skills, now two columns) */}
      <section id="skills" className="py-16 sm:py-20 px-2 sm:px-4 md:px-8 bg-gray-800 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">🔎 WHAT I BRING</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 sm:gap-y-6 text-base sm:text-lg text-gray-300 dark:text-gray-300">
            {[
              "Process design and remote team leadership",
              "SaaS product coordination without bottlenecks",
              "Tool consolidation and cost-cutting",
              "Zero-handholding, detail-aware execution",
              "Customer support operations and SLA improvement",
              "Internal documentation and SOP creation",
              "Workflow automation (Zapier, N8N, Make, etc.)",
              "Project management",
              "Team onboarding and training",
              "Affiliate and email marketing workflows",
              "Cloud hosting cost optimization (AWS, hosting)",
              "Cross-functional team collaboration",
              "Live webinars and community engagement",
              "Technical troubleshooting and QA)",
              "Smart restaurant ops and order management systems"
            ].map((item, i) => (
              <li key={i} className="flex items-center group justify-start sm:justify-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 transition-transform group-hover:scale-125"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wins Section */}
      <section id="wins" className="py-16 sm:py-20 px-2 sm:px-4 md:px-8 bg-gray-900 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">🏆 WINS THAT MATTER</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {wins.map((win, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveTab(index)}
                className={`transition-all duration-500 rounded-xl p-4 sm:p-6 shadow-lg border ${
                  activeTab === index ? 'bg-gray-800 border-blue-500 scale-105' : 'bg-gray-900 dark:bg-gray-800 border-gray-800'
                } hover:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-blue-500/20`}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{win.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4">{win.company}</p>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300 dark:text-gray-300">
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

      {/* Case Study Section (hover effect, slide-in transition) */}
      <section id="case-study" className="py-16 sm:py-20 px-2 sm:px-4 md:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center relative">
          {/* Left Arrow */}
          <button
            className={`absolute left-2 sm:-left-8 md:-left-16 top-1/2 -translate-y-1/2 p-2 sm:p-3 md:p-4 rounded-full bg-gray-700 hover:bg-blue-500 text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed z-10`}
            onClick={handlePrev}
            disabled={activeCaseStudy === 0 || transitioning}
            aria-label="Previous Case Study"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Case Study Card with hover and slide-in effect */}
          <div
            className={`w-full max-w-4xl rounded-xl shadow-lg border border-gray-700 bg-gray-900 dark:bg-gray-800 p-4 sm:p-8 mx-2 sm:mx-4 md:mx-12 transition-all duration-500 ease-in-out
              ${transitioning ? (direction === 1 ? 'slide-in-left' : 'slide-in-right') : 'opacity-100'}
              hover:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-blue-500/20`}
            style={{ minHeight: 380 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text text-center flex items-center justify-center gap-2">
              📌 CASE STUDY {activeCaseStudy + 1} of {caseStudies.length}
            </h2>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4 text-blue-400 text-center">{caseStudies[activeCaseStudy].title}</h3>
            <div className="mb-2 text-xs sm:text-gray-400 text-center">
              Company: <span className="font-semibold text-pink-400">{caseStudies[activeCaseStudy].company}</span> &nbsp;|&nbsp; Role: <span className="font-semibold text-blue-400">{caseStudies[activeCaseStudy].role}</span> &nbsp;|&nbsp; Timeline: <span className="font-semibold text-green-400">{caseStudies[activeCaseStudy].timeline}</span>
            </div>
            <div className="mb-4 sm:mb-6 text-gray-300 text-center italic text-xs sm:text-base">{caseStudies[activeCaseStudy].context}</div>
            <div className="mb-2 sm:mb-4">
              <span className="font-bold text-pink-400">Problem:</span>
              <ul className="list-disc list-inside text-gray-300 mt-1 sm:mt-2 space-y-1 text-xs sm:text-base">
                {caseStudies[activeCaseStudy].problem.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2 sm:mb-4">
              <span className="font-bold text-blue-400">What I Did:</span>
              <ul className="list-disc list-inside text-gray-300 mt-1 sm:mt-2 space-y-1 text-xs sm:text-base">
                {caseStudies[activeCaseStudy].actions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2 sm:mb-4">
              <span className="font-bold text-green-400">Results:</span>
              <ul className="list-disc list-inside text-gray-300 mt-1 sm:mt-2 space-y-1 text-xs sm:text-base">
                {caseStudies[activeCaseStudy].results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {caseStudies[activeCaseStudy].quote && (
              <div className="mt-4 sm:mt-8 text-center">
                <blockquote className="italic text-base sm:text-lg text-gray-400 border-l-4 border-blue-400 pl-2 sm:pl-4 mx-auto max-w-2xl">
                  "{caseStudies[activeCaseStudy].quote.text}"<br/>
                  <span className="block mt-2 font-semibold text-blue-400">{caseStudies[activeCaseStudy].quote.author}</span>
                </blockquote>
              </div>
            )}
          </div>

          {/* Right Arrow */}
          <button
            className={`absolute right-2 sm:-right-8 md:-right-16 top-1/2 -translate-y-1/2 p-2 sm:p-3 md:p-4 rounded-full bg-gray-700 hover:bg-blue-500 text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed z-10`}
            onClick={handleNext}
            disabled={activeCaseStudy === caseStudies.length - 1 || transitioning}
            aria-label="Next Case Study"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </section>

      {/* Testimonials Section (alternate bg color) */}
      <section id="testimonials" className="py-16 sm:py-20 px-2 sm:px-4 md:px-8 bg-gray-900 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">💬 TESTIMONIALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Example testimonials, replace with real ones as needed */}
            <div className="rounded-xl p-4 sm:p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial1.jpg" alt="Testimonial 1" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 border-4 border-blue-500 object-cover" />
              <p className="text-base sm:text-lg text-gray-300 mb-4 italic">“We had an underperforming team member Bhadmus was managing. Bhadmus oversaw our success team while he was running operations. This team member had a bad attitude and accused Bhadmus of dishonesty in reporting their activity. This came to me as CEO, and I spent time investigating. Bhadmus was upfront and clear about what he observed, while also giving me space to explore and determine the situation myself. He was clear on his recommendations for handling the team member. Eventually, that person was let go. Bhadmus put together a solid plan to minimize the team impact and get us back on track quickly.”</p>
              <span className="font-semibold text-blue-400 text-xs sm:text-base">— Dan Cumberland, CEO, VideoRemix</span>
            </div>
            <div className="rounded-xl p-4 sm:p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial2.jpg" alt="Testimonial 2" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 border-4 border-pink-400 object-cover" />
              <p className="text-base sm:text-lg text-gray-300 mb-4 italic">“He's really a smart and hardworking manager. Open to help you when needed. Very good communication skills and can talk through complex situations with clarity. His leadership has been instrumental in our team's success.”</p>
              <span className="font-semibold text-pink-400 text-xs sm:text-base">— Anne Audette, Junior Product Manager, VideoRemix</span>
            </div>
            <div className="rounded-xl p-4 sm:p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial3.jpeg" alt="Testimonial 3" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 border-4 border-pink-400 object-cover" />
              <p className="text-base sm:text-lg text-gray-300 mb-4 italic">“He's a systems thinker who gets things done. Our migration to new tools was seamless, and his documentation made onboarding a breeze.”</p>
              <span className="font-semibold text-pink-400 text-xs sm:text-base">— Tanveer Kour, Director of Operations, LTV SaaS Growth Fund</span>
            </div>
            <div className="rounded-xl p-4 sm:p-6 shadow-lg border bg-gray-800 border-gray-700 flex flex-col items-center text-center">
              <img src="/testimonial4.jpeg" alt="Testimonial 4" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 border-4 border-pink-400 object-cover" />
              <p className="text-base sm:text-lg text-gray-300 mb-4 italic">“Working with Olaide was a game-changing experience for our team. His collaboration and technical insights helped us streamline our processes and deliver better results.”</p>
              <span className="font-semibold text-pink-400 text-xs sm:text-base">— Gary Armstrong, Operations Manager, LTV SaaS Growth Fund</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-2 sm:px-4 md:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">📩 LET'S TALK</h2>
          <p className="text-gray-300 dark:text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">I'm open to full-time or contract roles focused on:</p>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 dark:text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">Ops Leadership</li>
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">SaaS Product/Support Management</li>
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">Remote Team Structure & Execution</li>
            <li className="font-medium hover:text-blue-400 transition-colors cursor-default">Workflow Automation & Process Optimization</li>
          </ul>
          <div className="space-y-1 sm:space-y-2 text-gray-400 dark:text-gray-500 text-xs sm:text-base">
            <p>Email: <span className="text-blue-400 hover:underline cursor-pointer"><a href='mailto:bhadmusolaide@gmail.com'>bhadmusolaide@gmail.com</a></span></p>
            <p>LinkedIn: <span className="text-blue-400 hover:underline cursor-pointer"><a href='https://www.linkedin.com/in/olaide-bhadmus/' target='_blank' rel="noopener noreferrer">https://www.linkedin.com/in/olaide-bhadmus/</a></span></p>
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
