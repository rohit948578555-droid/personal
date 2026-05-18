/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  PieChart, 
  TrendingUp, 
  Wallet, 
  Bot, 
  Layers, 
  Smartphone, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  Menu,
  X,
  Plus
} from "lucide-react";
import { useState, useRef } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card bg-[#05070A]/80 w-full max-w-6xl rounded-full px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 border border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] flex items-center justify-center">
            <Sparkles size={18} className="text-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">AURA AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#ai" className="hover:text-white transition-colors">AI Insights</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:text-emerald-400 transition-colors">Login</button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all active:scale-95">
            Start Free Trial
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0,transparent_70%)] blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-emerald-500/10 text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-[0.2em]">
            Financial Intelligence 2.0
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.05] text-headline">
            Control Your Money With AI-Powered Intelligence.
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Track expenses, automate budgets, and get real-time AI insights that help you build wealth 12x faster than traditional apps.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Start Free Trial <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="w-full sm:w-auto border border-white/10 px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-20 relative w-full max-w-6xl rounded-2xl border border-white/10 glass-card overflow-hidden glow-blue"
      >
        <img 
          src="/src/assets/images/aura_dashboard_hero_1779093289798.png" 
          alt="Aura Dashboard Hero" 
          className="w-full h-auto"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </motion.div>
    </section>
  );
};

const TrustSection = () => {
  const logos = [
    { name: "Global Finance", icon: Globe },
    { name: "SecurePay", icon: ShieldCheck },
    { name: "NeoBank", icon: Zap },
    { name: "WealthFlow", icon: TrendingUp },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-mono text-white/30 mb-8 uppercase tracking-[0.2em]">Trusted by over 100,000+ wealth builders</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center gap-2 group-hover:opacity-100 transition-opacity">
              <logo.icon size={24} />
              <span className="font-display font-semibold text-lg">{logo.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold font-display mb-2">$4.2B+</h3>
            <p className="text-sm text-white/40">Total assets tracked</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold font-display mb-2">99.9%</h3>
            <p className="text-sm text-white/40">Uptime availability</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold font-display mb-2">256-bit</h3>
            <p className="text-sm text-white/40">Bank-level encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 rounded-3xl group cursor-default"
  >
    <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Designed for Financial <span className="text-emerald-400">Excellence</span>.</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Modern tools for the modern investor. Manage every aspect of your financial world from one ultra-refined interface.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={BarChart3}
            title="Smart Tracking"
            description="Real-time expense categorization and transaction monitoring with surgical precision."
            colorClass="bg-blue-600/20 border border-blue-500/30"
          />
          <FeatureCard 
            icon={Bot}
            title="AI Recommendations"
            description="Predictive insights that find hidden savings and optimize your monthly cash flow automatically."
            colorClass="bg-emerald-600/20 border border-emerald-500/30"
          />
          <FeatureCard 
            icon={ShieldCheck}
            title="Bank-Level Security"
            description="AES-256 encryption and SOC2 compliance to ensure your data is always private and protected."
            colorClass="bg-purple-600/20 border border-purple-500/30"
          />
          <FeatureCard 
            icon={Layers}
            title="Portfolio Overview"
            description="A comprehensive view of all your assets, from stocks and crypto to real estate and cash."
            colorClass="bg-amber-600/20 border border-amber-500/30"
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Automation"
            description="Set recurring budgets and money-moving rules that execute without you ever lifting a finger."
            colorClass="bg-red-600/20 border border-red-500/30"
          />
          <FeatureCard 
            icon={Globe}
            title="Global Multi-Currency"
            description="Support for over 160 currencies and live exchange rates for international wealth management."
            colorClass="bg-indigo-600/20 border border-indigo-500/30"
          />
        </div>
      </div>
    </section>
  );
};

const AIInsightsSection = () => {
  return (
    <section id="ai" className="py-24 px-6 bg-gradient-to-b from-transparent to-emerald-950/20 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-4 block underline underline-offset-8 decoration-emerald-500/30">AI Analysis Engine v2.0</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">Your Money, <br/>Analyzed <span className="italic">Emotionlessly</span>.</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
               <div className="mt-1"><CheckCircle2 className="text-emerald-400" size={20} /></div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Overspending Habit Alerts</h4>
                  <p className="text-white/50">Our AI identifies anomalies in your spending patterns before they become problems.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="mt-1"><CheckCircle2 className="text-emerald-400" size={20} /></div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Personalized Wealth Strategy</h4>
                  <p className="text-white/50">Custom-tailored investment tips based on your risk profile and saving goals.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="mt-1"><CheckCircle2 className="text-emerald-400" size={20} /></div>
               <div>
                  <h4 className="font-bold text-lg mb-1">Automatic Subscription Audit</h4>
                  <p className="text-white/50">Aura finds unused subscriptions and cancels them with a single tap.</p>
               </div>
            </div>
          </div>
          
          <button className="mt-10 group flex items-center gap-3 font-bold text-emerald-400 transition-all hover:gap-5">
            Learn how our AI works <ArrowRight size={20} />
          </button>
        </motion.div>

        <div className="relative">
           <motion.div 
             animate={{ 
               y: [0, -10, 0],
             }}
             transition={{ 
               duration: 4, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
             className="glass-card rounded-[2rem] p-1 overflow-hidden glow-emerald"
           >
              <div className="bg-black/40 rounded-[1.8rem] h-[500px] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                 {/* Holographic effect */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
                 
                 <div className="w-48 h-48 border-2 border-emerald-500/20 rounded-full flex items-center justify-center p-4 relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-2 border-emerald-400 rounded-full"
                    />
                    <Bot size={80} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                 </div>
                 
                 <div className="mt-12 space-y-4 w-full">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "78%" }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-emerald-500"
                        />
                    </div>
                    <p className="text-emerald-400 animate-pulse font-mono text-xs uppercase">Analyzing spending habits...</p>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <p className="text-[10px] text-white/30 uppercase">Savings Potential</p>
                          <p className="text-xl font-bold">+$1,240</p>
                       </div>
                       <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <p className="text-[10px] text-white/30 uppercase">Waste Reduction</p>
                          <p className="text-xl font-bold">14.2%</p>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

const AppShowcase = () => {
   return (
      <section className="py-24 px-6">
         <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-center mb-16 tracking-tight">Sync Seamlessly <br/>Across <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent underline underline-offset-[12px] decoration-white/10">Every Device</span>.</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-5 relative">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="relative z-10 rounded-[3rem] border-[8px] border-white/10 overflow-hidden glow-emerald"
                  >
                     <img 
                       src="/src/assets/images/aura_mobile_mockup_1779093305831.png" 
                       alt="Aura Mobile App" 
                       className="w-full"
                       referrerPolicy="no-referrer"
                     />
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
               </div>
               
               <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                  <div className="glass-card p-10 rounded-[2.5rem] flex items-center gap-8">
                     <div className="hidden sm:flex w-20 h-20 bg-blue-500/20 border border-blue-500/30 rounded-3xl items-center justify-center shrink-0">
                         <Smartphone size={32} className="text-blue-400" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-bold mb-2">Native Mobile Apps</h4>
                        <p className="text-white/50 leading-relaxed">Beautiful, fast, and feature-rich iOS and Android apps that keep you in control on the go.</p>
                     </div>
                  </div>
                  <div className="glass-card p-10 rounded-[2.5rem] flex items-center gap-8 translate-x-0 md:translate-x-12">
                     <div className="hidden sm:flex w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-3xl items-center justify-center shrink-0">
                         <Globe size={32} className="text-emerald-400" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-bold mb-2">Web Experience</h4>
                        <p className="text-white/50 leading-relaxed">Powerful desktop dashboard for deep dives into your financial history and reporting.</p>
                     </div>
                  </div>
                  <div className="glass-card p-10 rounded-[2.5rem] flex items-center gap-8">
                     <div className="hidden sm:flex w-20 h-20 bg-purple-500/20 border border-purple-500/30 rounded-3xl items-center justify-center shrink-0">
                         <Wallet size={32} className="text-purple-400" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-bold mb-2">Real-time Cloud Sync</h4>
                        <p className="text-white/50 leading-relaxed">Transactions are encrypted and synced across all devices instantly. Your data, everywhere.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const Pricing = () => {
   return (
      <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Master Your <span className="text-emerald-500">Economy</span>.</h2>
               <p className="text-white/50">Zero strings, cancel anytime. Choose the plan that fits your growth.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-colors flex flex-col">
                  <h4 className="text-xl font-bold mb-2">Free</h4>
                  <p className="text-white/40 text-sm mb-8 italic">Basic tracking for starters</p>
                  <div className="flex items-baseline gap-1 mb-8">
                     <span className="text-5xl font-bold font-display">$0</span>
                     <span className="text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Manual expense tracking</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Basic budget planning</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> 1 linked bank account</li>
                     <li className="flex items-center gap-2 text-sm text-white/30 italic strike-through">AI wealth insights</li>
                  </ul>
                  <button className="w-full py-4 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-colors">Choose Free</button>
               </div>

               <div className="glass-card p-10 rounded-[2.5rem] border-emerald-500/30 glow-emerald relative flex flex-col scale-105 z-10">
                  <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-emerald-500 text-black text-[10px] font-bold uppercase rounded-full tracking-widest leading-relaxed">Most Popular</div>
                  <h4 className="text-xl font-bold mb-2">Pro</h4>
                  <p className="text-white/40 text-sm mb-8 italic">Full automation and insights</p>
                  <div className="flex items-baseline gap-1 mb-8">
                     <span className="text-5xl font-bold font-display">$19</span>
                     <span className="text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Unlimited bank sync</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Automatic AI categorization</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Smart subscription audit</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Cross-device sync</li>
                  </ul>
                  <button className="w-full py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_20px_-5px_rgba(16,185,129,0.6)]">Start 7-Day Free Trial</button>
               </div>

               <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-colors flex flex-col">
                  <h4 className="text-xl font-bold mb-2">AI Wealth</h4>
                  <p className="text-white/40 text-sm mb-8 italic">The ultimate wealth co-pilot</p>
                  <div className="flex items-baseline gap-1 mb-8">
                     <span className="text-5xl font-bold font-display">$49</span>
                     <span className="text-white/40">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Everything in Pro</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Predictive tax preparation</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> Investment portfolio audit</li>
                     <li className="flex items-center gap-2 text-sm text-white/70"><CheckCircle2 size={16} className="text-emerald-400" /> 24/7 AI Finance concierge</li>
                  </ul>
                  <button className="w-full py-4 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-colors">Choose Ultimate</button>
               </div>
            </div>
         </div>
      </section>
   );
};

const Testimonials = () => {
   const reviews = [
      { name: "Julianne Moore", role: "Product Designer", text: "Aura completely changed how I look at my cash flow. The AI analysis is spot on and actually helpful, not just fluff." },
      { name: "Marcus Chen", role: "Tech Founder", text: "This app helped me save $12,000 in one year by identifying leaks I never knew existed. Worth every penny of the Pro sub." },
      { name: "Sarah Jenkins", role: "Financial Advisor", text: "I recommend Aura to all my clients who need a real-time view of their spending. It's the cleanest UI in the industry." },
   ];
   
   return (
      <section className="py-24 px-6 overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-center text-white/50 mb-16 uppercase tracking-widest">Loved by high-performers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {reviews.map((review, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10 }}
                     className="glass-card p-10 rounded-[2rem] border-white/5 hover:border-emerald-500/20 transition-all cursor-default"
                  >
                     <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, j) => <Sparkles key={j} size={14} className="text-emerald-400" />)}
                     </div>
                     <p className="text-lg leading-relaxed mb-8 font-light italic">“{review.text}”</p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
                           {review.name[0]}
                        </div>
                        <div>
                           <p className="font-bold text-sm">{review.name}</p>
                           <p className="text-white/30 text-[10px] uppercase tracking-wider">{review.role}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

const FinalCTA = () => {
   return (
      <section className="py-32 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0,transparent_70%)]" />
         <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] text-center relative z-10 border border-white/10 glow-blue">
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight text-headline">Your Financial Freedom <br/>Starts Today.</h2>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto">Join 100,000+ elite investors who are already building wealth with AURA AI.</p>
            
            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-emerald-500 text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
               Get Started For Free <ArrowRight size={24} />
            </motion.button>
            <p className="mt-6 text-sm text-white/30">No credit card required. 7-day free trial on Pro.</p>
         </div>
      </section>
   );
};

const Footer = () => {
   return (
      <footer className="py-20 px-6 border-t border-white/10 bg-[#05070A]">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Sparkles size={18} className="text-emerald-400" />
                  </div>
                  <span className="font-display font-bold text-xl tracking-tight">Aura</span>
               </div>
               <p className="text-sm text-white/40 leading-relaxed max-w-xs">The ultra-premium AI-powered personal finance tracker for the next generation of wealth builders.</p>
            </div>
            
            <div>
               <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-white/40">Product</h5>
               <ul className="space-y-4 text-sm text-white/60">
                  <li><a href="#" className="hover:text-emerald-400">Features</a></li>
                  <li><a href="#" className="hover:text-emerald-400">AI Analysis</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Mobile Apps</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Security</a></li>
               </ul>
            </div>
            
            <div>
               <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-white/40">Company</h5>
               <ul className="space-y-4 text-sm text-white/60">
                  <li><a href="#" className="hover:text-emerald-400">About Us</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Sustainability</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
               </ul>
            </div>
            
            <div>
               <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-white/40">Legal</h5>
               <ul className="space-y-4 text-sm text-white/60">
                  <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Data Sharing</a></li>
               </ul>
            </div>
         </div>
         
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-xs text-white/20 font-mono tracking-widest uppercase">
            <p>&copy; 2026 Aura Finance Intelligence. All Rights Reserved.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-white">Twitter</a>
               <a href="#" className="hover:text-white">LinkedIn</a>
               <a href="#" className="hover:text-white">Instagram</a>
               <a href="#" className="hover:text-white">GitHub</a>
            </div>
         </div>
      </footer>
   );
};

export default function App() {
  return (
    <div className="relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <Hero />
      <TrustSection />
      <Features />
      <AIInsightsSection />
      <AppShowcase />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}

