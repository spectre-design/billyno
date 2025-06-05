import React from "react";
import { Bell, Home, User, BarChart2, CreditCard, Send, ArrowRightLeft, DollarSign, MoreHorizontal, Plus } from "lucide-react";
import MobileStatusBar from "./MobileStatusBar";
import { useEffect, useRef, useState } from "react";

export default function SaasFinanceMobileUI() {
  const [activeTab, setActiveTab] = useState<'home' | 'accounts' | 'reports' | 'profile'>('home');

  function renderScreen() {
    switch (activeTab) {
      case 'home':
        return (
          <>
            {/* Existing Home/Dashboard content (from Greeting to Q2 Revenue Goal) */}
            {/* Greeting */}
            <div className="w-full flex items-center justify-between px-6 pt-2 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="/billy-headshot-new.jpeg" alt="CFO" className="w-8 h-8 rounded-full object-cover border-2 border-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white/70 text-xs">Welcome Back!</span>
                  <span className="font-bold text-base text-white block">CFO, William Bell</span>
                </div>
              </div>
            </div>
            {/* Balance Card */}
            <div className="w-[370px] bg-[#232B39] rounded-2xl shadow p-6 mb-6 border border-[#232B39]/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 font-semibold">Total Balance</span>
                <MoreHorizontal className="w-5 h-5 text-white/40" />
              </div>
              {/* Animated balance */}
              <AnimatedBalance amount={90999.17} />
              <div className="flex items-center gap-2 mb-4 mt-2">
                <span className="text-green-400 text-sm font-bold">+24.5%</span>
                <span className="text-white/50 text-xs">+$12,450.25 this month</span>
              </div>
              <div className="flex gap-4 mb-4">
                <ActionButton color="bg-[#E95B2F]" hoverColor="hover:bg-[#d14e28]" icon={Send} label="Send" />
                <ActionButton color="bg-[#E95B2F]" hoverColor="hover:bg-[#d14e28]" icon={ArrowRightLeft} label="Transfer" />
                <ActionButton color="bg-[#E95B2F]" hoverColor="hover:bg-[#d14e28]" icon={DollarSign} label="Pay" />
                <ActionButton color="bg-[#E95B2F]" hoverColor="hover:bg-[#d14e28]" icon={MoreHorizontal} label="More" />
              </div>
              <button className="w-full bg-[#E95B2F] hover:bg-[#d14e28] text-white font-bold rounded-xl py-2.5 mt-2 text-base flex items-center justify-center gap-2 shadow transition-all duration-150" style={{ fontSize: '1rem' }}>
                <Plus className="w-5 h-5" /> Add new Report
              </button>
            </div>
            {/* Financial Performance */}
            <div className="w-[370px] mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-bold">Financial Performance</span>
                <span className="text-white/60 text-xs">Q1 2025 &gt;</span>
              </div>
              <div className="text-white/70 text-xs mb-1">Revenue by Month</div>
              {/* Chart Placeholder */}
              <div className="bg-[#232B39] rounded-xl h-32 flex flex-col justify-end px-4 py-3 border border-[#232B39]/40 relative group">
                <div className="flex items-end gap-3 w-full h-full">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-16 bg-yellow-400/80 rounded transition-all duration-150 group-hover:scale-105" title="January: $8k" />
                    <span className="text-xs text-white/60 mt-2">Jan</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-10 bg-yellow-400/60 rounded transition-all duration-150 group-hover:scale-105" title="February: $5k" />
                    <span className="text-xs text-white/60 mt-2">Feb</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-20 bg-yellow-400/90 rounded transition-all duration-150 group-hover:scale-105" title="March: $10k" />
                    <span className="text-xs text-white/60 mt-2">Mar</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-8 bg-yellow-400/50 rounded transition-all duration-150 group-hover:scale-105" title="April: $4k" />
                    <span className="text-xs text-white/60 mt-2">Apr</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-14 bg-yellow-400/70 rounded transition-all duration-150 group-hover:scale-105" title="May: $7k" />
                    <span className="text-xs text-white/60 mt-2">May</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-6 h-12 bg-yellow-400/80 rounded transition-all duration-150 group-hover:scale-105" title="June: $6k" />
                    <span className="text-xs text-white/60 mt-2">Jun</span>
                  </div>
                </div>
                {/* Tooltip hint */}
                <span className="absolute bottom-2 right-4 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Tap a bar for details</span>
              </div>
            </div>
            {/* Recent Activity Section */}
            <div className="w-[370px] mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-bold">Recent Activity</span>
                <button className="text-xs text-yellow-400 font-semibold hover:underline">View All</button>
              </div>
              <div className="bg-[#232B39] rounded-xl p-4 flex flex-col gap-3 border border-[#232B39]/40">
                <TransactionRow icon="💸" desc="Stripe Payout" amount={1200} positive date="Today, 18:32" />
                <TransactionRow icon="🍔" desc="Team Lunch" amount={-45} date="Yesterday, 12:10" />
                <TransactionRow icon="↩️" desc="Refund" amount={200} positive date="Mon, 09:20" />
              </div>
            </div>
            {/* Quick Insights Section */}
            <div className="w-[370px] mb-6 flex gap-4">
              <div className="flex-1 bg-[#232B39] rounded-xl p-4 flex flex-col items-center border border-[#232B39]/40">
                <span className="text-yellow-400 text-2xl font-bold mb-1">3</span>
                <span className="text-xs text-white/70 font-semibold">Invoices Due</span>
              </div>
              <div className="flex-1 bg-[#232B39] rounded-xl p-4 flex flex-col items-center border border-[#232B39]/40">
                <span className="text-orange-400 text-2xl font-bold mb-1">$1,200</span>
                <span className="text-xs text-white/70 font-semibold">Upcoming Bills</span>
              </div>
            </div>
            {/* Q2 Revenue Goal Section */}
            <div className="w-[370px] mb-6 bg-[#232B39] rounded-xl p-4 border border-[#232B39]/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-bold">Q2 Revenue Goal</span>
                <span className="text-xs text-white/60">$120,000</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white text-lg font-bold">$90,999</span>
                <span className="text-xs text-white/40">/ $120,000</span>
              </div>
              <div className="w-full h-2 bg-[#181F2A] rounded-full overflow-hidden">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '76%' }} />
              </div>
            </div>
            {/* Spacer for bottom nav */}
            <div className="pb-20" />
          </>
        );
      case 'accounts':
        return (
          <div className="w-[370px] flex flex-col gap-6 mt-6">
            <h2 className="text-white font-bold text-xl mb-2">Accounts</h2>
            <div className="bg-[#232B39] rounded-2xl p-5 flex flex-col gap-4 border border-[#232B39]/40">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Operating Account</span>
                <span className="text-green-400 font-bold text-lg">$54,200.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Savings Account</span>
                <span className="text-blue-400 font-bold text-lg">$36,799.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Payroll Account</span>
                <span className="text-orange-400 font-bold text-lg">$12,500.00</span>
              </div>
            </div>
            <button className="bg-[#E95B2F] hover:bg-[#d14e28] text-white font-bold rounded-xl py-3 mt-2 text-base flex items-center justify-center gap-2 shadow transition-all duration-150">
              + Add Account
            </button>
          </div>
        );
      case 'reports':
        return (
          <div className="w-[370px] flex flex-col gap-6 mt-6">
            <h2 className="text-white font-bold text-xl mb-2">Reports</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#232B39] rounded-2xl p-5 flex flex-col gap-2 border border-[#232B39]/40">
                <span className="text-white font-semibold">Monthly Report</span>
                <span className="text-xs text-white/60">May 2024</span>
                <span className="text-green-400 font-bold">+$12,450.25</span>
              </div>
              <div className="bg-[#232B39] rounded-2xl p-5 flex flex-col gap-2 border border-[#232B39]/40">
                <span className="text-white font-semibold">Quarterly Report</span>
                <span className="text-xs text-white/60">Q2 2024</span>
                <span className="text-blue-400 font-bold">+$32,000.00</span>
              </div>
              <div className="bg-[#232B39] rounded-2xl p-5 flex flex-col gap-2 border border-[#232B39]/40">
                <span className="text-white font-semibold">Expense Report</span>
                <span className="text-xs text-white/60">May 2024</span>
                <span className="text-red-400 font-bold">-$4,800.00</span>
              </div>
              <div className="bg-[#232B39] rounded-2xl p-5 flex flex-col gap-2 border border-[#232B39]/40">
                <span className="text-white font-semibold">Payroll Report</span>
                <span className="text-xs text-white/60">May 2024</span>
                <span className="text-orange-400 font-bold">-$8,200.00</span>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="w-[370px] flex flex-col gap-6 mt-6 items-center">
            <img src="/billy-headshot-new.jpeg" alt="CFO" className="w-20 h-20 rounded-full object-cover border-2 border-white mb-2" />
            <h2 className="text-white font-bold text-xl mb-1">William Bell</h2>
            <span className="text-white/60 text-base mb-2">CFO, SaaS Corp</span>
            <div className="bg-[#232B39] rounded-2xl p-5 flex flex-col gap-2 border border-[#232B39]/40 w-full">
              <span className="text-white font-semibold">Email</span>
              <span className="text-white/80">william.bell@saascorp.com</span>
              <span className="text-white font-semibold mt-3">Phone</span>
              <span className="text-white/80">(555) 123-4567</span>
            </div>
            <button className="bg-[#E95B2F] hover:bg-[#d14e28] text-white font-bold rounded-xl py-3 mt-2 text-base flex items-center justify-center gap-2 shadow transition-all duration-150 w-full">
              Edit Profile
            </button>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-[#181F2A] to-[#232B39] flex flex-col items-center justify-start overflow-hidden" style={{ width: 430, height: 932, borderRadius: 40, boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1.5px solid #222' }}>
      <MobileStatusBar theme="dark" />
      <div className="flex-1 w-full overflow-y-auto pb-28 pt-2 flex flex-col items-center">
        {renderScreen()}
      </div>
      {/* Fixed Bottom Nav */}
      <nav className="absolute left-0 right-0 bottom-0 flex justify-center items-end pb-6 pt-2 z-20 bg-[#232B39]" style={{ pointerEvents: 'auto' }}>
        <div className="flex w-[92%] max-w-[400px] h-[56px] bg-[#232B39] rounded-xl shadow-lg backdrop-blur-md justify-between items-center px-8 py-2" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => setActiveTab('home')}>
            <span className="w-10 h-8 flex flex-col items-center justify-center mb-1.5">
              <Home className={`w-6 h-6 ${activeTab === 'home' ? 'text-yellow-400' : 'text-white/60'}`} />
            </span>
            <span className={`text-xs font-bold mt-0.5 ${activeTab === 'home' ? 'text-yellow-400' : 'text-white/60'}`}>Home</span>
          </div>
          <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => setActiveTab('accounts')}>
            <span className="w-10 h-8 flex flex-col items-center justify-center mb-1.5">
              <CreditCard className={`w-6 h-6 ${activeTab === 'accounts' ? 'text-yellow-400' : 'text-white/60'}`} />
            </span>
            <span className={`text-xs font-bold mt-0.5 ${activeTab === 'accounts' ? 'text-yellow-400' : 'text-white/60'}`}>Accounts</span>
          </div>
          <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => setActiveTab('reports')}>
            <span className="w-10 h-8 flex flex-col items-center justify-center mb-1.5">
              <BarChart2 className={`w-6 h-6 ${activeTab === 'reports' ? 'text-yellow-400' : 'text-white/60'}`} />
            </span>
            <span className={`text-xs font-bold mt-0.5 ${activeTab === 'reports' ? 'text-yellow-400' : 'text-white/60'}`}>Reports</span>
          </div>
          <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => setActiveTab('profile')}>
            <span className="w-10 h-8 flex flex-col items-center justify-center mb-1.5">
              <User className={`w-6 h-6 ${activeTab === 'profile' ? 'text-yellow-400' : 'text-white/60'}`} />
            </span>
            <span className={`text-xs font-bold mt-0.5 ${activeTab === 'profile' ? 'text-yellow-400' : 'text-white/60'}`}>Profile</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

function AnimatedBalance({ amount }: { amount: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!ref.current) ref.current = timestamp;
      const progress = Math.min((timestamp - ref.current) / duration, 1);
      setDisplay(Math.floor(progress * amount));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(amount);
      }
    };
    requestAnimationFrame(step);
    return () => { ref.current = null; };
  }, [amount]);
  return (
    <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-wide" style={{ letterSpacing: '0.02em' }}>
      ${display.toLocaleString()}<span className="text-2xl align-top">.17</span>
    </div>
  );
}

function ActionButton({ color, hoverColor, icon: Icon, label }: { color: string, hoverColor: string, icon: any, label: string }) {
  return (
    <button className={`flex flex-col items-center justify-center ${color} ${hoverColor} text-white font-bold rounded-xl px-4 py-2 text-xs shadow w-16 transition-all duration-150 active:scale-95 focus:ring-2 focus:ring-yellow-400/40`}>
      <Icon className="w-5 h-5 mb-1" />{label}
    </button>
  );
}

function TransactionRow({ icon, desc, amount, positive, date }: { icon: string, desc: string, amount: number, positive?: boolean, date: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xl" aria-hidden>{icon}</span>
        <div className="flex flex-col">
          <span className="text-white font-medium text-sm">{desc}</span>
          <span className="text-xs text-white/40">{date}</span>
        </div>
      </div>
      <span className={`text-sm font-bold ${amount >= 0 ? 'text-green-400' : 'text-red-400'}`}>{amount >= 0 ? '+' : '-'}${Math.abs(amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
    </div>
  );
} 