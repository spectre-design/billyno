import React, { useState } from "react";
import { Bell, Home, AlertTriangle, MoreHorizontal, Settings, Thermometer, Droplet, Activity, AlertCircle, Fuel, BarChart2, FileText, PieChart, LineChart, Users, Shield, HelpCircle } from "lucide-react";
import MobileStatusBar from "./MobileStatusBar";

const alerts = [
  {
    type: "Engine Temperature",
    status: "High",
    icon: <Thermometer className="w-5 h-5 text-red-500" aria-label="Engine Temperature" />,
    iconColor: "bg-red-500",
    time: "10 min ago",
    details: {
      value: "128°C",
      threshold: "95°C",
      location: "Track 7, North Terminal",
      priority: "High",
      restricted: true,
    },
    isNew: true,
  },
  {
    type: "Brake Pressure",
    status: null,
    icon: <Droplet className="w-5 h-5 text-purple-500" aria-label="Brake Pressure" />,
    iconColor: "bg-purple-500",
    time: "25 min ago",
    details: null,
    isNew: false,
  },
  {
    type: "Fuel Level",
    status: null,
    icon: <Fuel className="w-5 h-5 text-yellow-400" aria-label="Fuel Level" />,
    iconColor: "bg-yellow-400",
    time: "1 hr ago",
    details: null,
    isNew: false,
  },
  {
    type: "Axle Vibration",
    status: null,
    icon: <Activity className="w-5 h-5 text-green-400" aria-label="Axle Vibration" />,
    iconColor: "bg-green-400",
    time: "2 hrs ago",
    details: null,
    isNew: false,
  },
  {
    type: "Signal Malfunction",
    status: "Critical",
    icon: <AlertCircle className="w-5 h-5 text-red-700" aria-label="Signal Malfunction" />,
    iconColor: "bg-red-700",
    time: "15 min ago",
    details: null,
    isNew: true,
  },
];

const reports = [
  { title: "Monthly Performance", icon: <PieChart className="w-6 h-6 text-cyan-400" aria-label="Monthly Performance" /> },
  { title: "Fleet Analytics", icon: <LineChart className="w-6 h-6 text-cyan-400" aria-label="Fleet Analytics" /> },
  { title: "Maintenance Log", icon: <FileText className="w-6 h-6 text-cyan-400" aria-label="Maintenance Log" /> },
];

const settings = [
  { title: "Account", icon: <Users className="w-6 h-6 text-cyan-400" aria-label="Account" /> },
  { title: "Security", icon: <Shield className="w-6 h-6 text-cyan-400" aria-label="Security" /> },
  { title: "Help & Support", icon: <HelpCircle className="w-6 h-6 text-cyan-400" aria-label="Help & Support" /> },
];

export default function FleetMonitorMobileUI() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <div className="w-full flex items-center bg-[#232B39] px-2 relative">
              <button className="flex-1 py-3 text-white font-semibold relative focus:outline-none">
                Dashboard
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-cyan-400 rounded-full animate-pulse" />
              </button>
              <button className="flex-1 py-3 text-white/60 font-semibold">Alerts</button>
              <button className="flex-1 py-3 text-white/60 font-semibold">Assets</button>
            </div>
            <div className="w-full flex-1 overflow-y-auto px-4 py-6">
              <div className="text-white font-bold text-lg mb-4">Active Alerts <span className="text-white/60 font-normal">(10)</span></div>
              {alerts.map((a, i) => (
                <div key={i} className="bg-[#232B39] rounded-2xl p-5 mb-6 shadow-lg border border-[#232B39]/40 flex flex-col gap-2 relative transition-transform hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-full flex items-center justify-center ${a.iconColor} bg-opacity-20`}>{a.icon}</span>
                      <span className="text-white font-semibold text-base flex items-center gap-2">
                        {a.type}
                        {a.isNew && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-label="New Alert" />
                        )}
                      </span>
                      {a.status && (
                        <span className={`ml-2 ${a.status === 'Critical' ? 'bg-red-700' : 'bg-orange-500'} text-white text-xs font-bold rounded px-2 py-0.5`}>{a.status}</span>
                      )}
                    </div>
                    <span className="text-xs text-white/50">{a.time}</span>
                  </div>
                  {a.details && (
                    <div className="bg-[#232B39] rounded-lg p-4 border border-[#2D3748] mb-2 flex flex-col gap-1">
                      <div className="flex justify-between text-sm text-white/80">
                        <span>Current Value:</span>
                        <span className="font-bold text-orange-400">{a.details.value}</span>
                      </div>
                      <div className="flex justify-between text-sm text-white/80">
                        <span>Threshold:</span>
                        <span className="font-bold text-orange-200">{a.details.threshold}</span>
                      </div>
                      <div className="flex justify-between text-sm text-white/80">
                        <span>Location:</span>
                        <span className="font-bold text-cyan-300">{a.details.location}</span>
                      </div>
                      <div className="flex justify-between text-sm text-white/80">
                        <span>Priority:</span>
                        <span className="font-bold text-orange-400">{a.details.priority}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-red-400 text-xs font-semibold">Restricted</span>
                        <button className="bg-gray-700 text-white text-xs rounded px-3 py-1 font-semibold" aria-label="Assign">Assign</button>
                        <button className="bg-cyan-500 text-white text-xs rounded px-3 py-1 font-semibold" aria-label="Respond">Respond</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        );
      case "alerts":
        return (
          <div className="w-full flex-1 overflow-y-auto px-4 py-6">
            <div className="text-white font-bold text-lg mb-4">Alerts</div>
            {alerts.map((a, i) => (
              <div key={i} className="bg-[#232B39] rounded-2xl p-5 mb-6 shadow-lg border border-[#232B39]/40 flex flex-col gap-2 relative transition-transform hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center ${a.iconColor} bg-opacity-20`}>{a.icon}</span>
                    <span className="text-white font-semibold text-base flex items-center gap-2">
                      {a.type}
                      {a.isNew && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-label="New Alert" />
                      )}
                    </span>
                    {a.status && (
                      <span className={`ml-2 ${a.status === 'Critical' ? 'bg-red-700' : 'bg-orange-500'} text-white text-xs font-bold rounded px-2 py-0.5`}>{a.status}</span>
                    )}
                  </div>
                  <span className="text-xs text-white/50">{a.time}</span>
                </div>
                {a.details && (
                  <div className="bg-[#232B39] rounded-lg p-4 border border-[#2D3748] mb-2 flex flex-col gap-1">
                    <div className="flex justify-between text-sm text-white/80">
                      <span>Current Value:</span>
                      <span className="font-bold text-orange-400">{a.details.value}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/80">
                      <span>Threshold:</span>
                      <span className="font-bold text-orange-200">{a.details.threshold}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/80">
                      <span>Location:</span>
                      <span className="font-bold text-cyan-300">{a.details.location}</span>
                    </div>
                    <div className="flex justify-between text-sm text-white/80">
                      <span>Priority:</span>
                      <span className="font-bold text-orange-400">{a.details.priority}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-red-400 text-xs font-semibold">Restricted</span>
                      <button className="bg-gray-700 text-white text-xs rounded px-3 py-1 font-semibold" aria-label="Assign">Assign</button>
                      <button className="bg-cyan-500 text-white text-xs rounded px-3 py-1 font-semibold" aria-label="Respond">Respond</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      case "reports":
        return (
          <div className="w-full flex-1 overflow-y-auto px-4 py-6">
            <div className="text-white font-bold text-lg mb-4">Reports</div>
            {reports.map((r, i) => (
              <div key={i} className="bg-[#232B39] rounded-2xl p-5 mb-6 shadow-lg border border-[#232B39]/40 flex items-center gap-3">
                {r.icon}
                <span className="text-white font-semibold text-base">{r.title}</span>
              </div>
            ))}
          </div>
        );
      case "settings":
        return (
          <div className="w-full flex-1 overflow-y-auto px-4 py-6">
            <div className="text-white font-bold text-lg mb-4">Settings</div>
            {settings.map((s, i) => (
              <div key={i} className="bg-[#232B39] rounded-2xl p-5 mb-6 shadow-lg border border-[#232B39]/40 flex items-center gap-3">
                {s.icon}
                <span className="text-white font-semibold text-base">{s.title}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#20293a] to-[#181F2A] flex flex-col items-center justify-start" style={{ width: 430, height: 932, borderRadius: 40, boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1.5px solid #222' }}>
      <MobileStatusBar theme="dark" />
      {/* App Bar with gradient */}
      <div className="w-full flex items-center justify-between px-6 pt-2 pb-3 bg-gradient-to-r from-[#232B39] to-[#20293a] rounded-t-2xl shadow-md border-b border-white/10">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-medium">Depot</span>
          <span className="font-bold text-lg text-white tracking-tight">FleetMonitor</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-white/80" aria-label="Notifications" />
            {/* Example alert badge */}
            <span className="absolute -top-1 -right-1 bg-cyan-400 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border-2 border-[#232B39]">3</span>
          </button>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            <img src="/iot fleet manager.jpg" alt="Profile avatar" className="w-full h-full object-cover rounded-full" />
          </span>
        </div>
      </div>
      {renderContent()}
      {/* Bottom Nav with enhanced active tab */}
      <nav className="w-full flex justify-center items-end pb-8 pt-4" style={{ pointerEvents: 'auto' }}>
        <div className="flex w-[92%] max-w-[400px] h-[64px] bg-[#181F2A]/80 rounded-xl backdrop-blur-md justify-between items-center px-8 py-2" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div className="flex flex-col items-center gap-0.5 flex-1" onClick={() => setActiveTab("home")}> 
            <span className="w-12 h-10 flex flex-col items-center justify-center mb-0.5">
              <Home className={`w-7 h-7 ${activeTab === "home" ? "text-cyan-400" : "text-white/60"}`} aria-label="Home" />
              {activeTab === "home" && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1" />}
            </span>
            <span className={`text-xs font-bold ${activeTab === "home" ? "text-cyan-400" : "text-white/60"}`}>Home</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 flex-1" onClick={() => setActiveTab("alerts")}> 
            <span className="w-12 h-10 flex flex-col items-center justify-center mb-0.5">
              <AlertTriangle className={`w-7 h-7 ${activeTab === "alerts" ? "text-cyan-400" : "text-white/60"}`} aria-label="Alerts" />
              {activeTab === "alerts" && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1" />}
            </span>
            <span className={`text-xs font-bold ${activeTab === "alerts" ? "text-cyan-400" : "text-white/60"}`}>Alerts</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 flex-1" onClick={() => setActiveTab("reports")}> 
            <span className="w-12 h-10 flex flex-col items-center justify-center mb-0.5">
              <BarChart2 className={`w-7 h-7 ${activeTab === "reports" ? "text-cyan-400" : "text-white/60"}`} aria-label="Reports" />
              {activeTab === "reports" && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1" />}
            </span>
            <span className={`text-xs font-bold ${activeTab === "reports" ? "text-cyan-400" : "text-white/60"}`}>Reports</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 flex-1" onClick={() => setActiveTab("settings")}> 
            <span className="w-12 h-10 flex flex-col items-center justify-center mb-0.5">
              <Settings className={`w-7 h-7 ${activeTab === "settings" ? "text-cyan-400" : "text-white/60"}`} aria-label="Settings" />
              {activeTab === "settings" && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1" />}
            </span>
            <span className={`text-xs font-bold ${activeTab === "settings" ? "text-cyan-400" : "text-white/60"}`}>Settings</span>
          </div>
        </div>
      </nav>
    </div>
  );
} 