import React, { useState, useRef, useEffect } from "react";
import { Bell, Home, Heart, Calendar, User, Pill, ChevronRight, CheckCircle, AlertCircle, Phone as PhoneIcon, Moon as MoonIcon, LogOut as LogOutIcon, Settings, Droplet, HeartPulse } from "lucide-react";
import MobileStatusBar from "./MobileStatusBar";
import { Checkbox } from "@/components/ui/Checkbox";

const medications = [
  {
    name: "Lisinopril",
    dose: "10mg · Once daily",
    status: "Missed",
    time: null,
    color: "bg-blue-100 text-blue-600",
    icon: <Pill className="w-5 h-5 text-blue-500" />,
  },
  {
    name: "Metformin",
    dose: "500mg · Twice daily",
    status: null,
    time: "07:00 PM",
    color: "bg-purple-100 text-purple-600",
    icon: <Pill className="w-5 h-5 text-purple-500" />,
  },
  {
    name: "Atorvastatin",
    dose: "20mg · Once daily",
    status: null,
    time: "08:00 PM",
    color: "bg-green-100 text-green-600",
    icon: <Pill className="w-5 h-5 text-green-500" />,
  },
];

const services = [
  { name: "Cardiologist", color: "bg-blue-500", icon: <Heart className="w-7 h-7 text-white" /> },
  { name: "Immunologist", color: "bg-purple-500", icon: <User className="w-7 h-7 text-white" /> },
  { name: "Pediatrician", color: "bg-cyan-500", icon: <User className="w-7 h-7 text-white" /> },
  { name: "More", color: "bg-fuchsia-500", icon: <ChevronRight className="w-7 h-7 text-white" /> },
];

const appointments = [
  {
    name: "Dr. Kelly Langley",
    specialty: "Cardiologist",
    time: "Nov 19, Thu · 10:00 AM",
    img: "/doctor photo.jpg",
  },
  {
    name: "Dr. Jake Emerson",
    specialty: "Neurologist",
    time: "Nov 19, Thu · 10:00 AM",
    img: "/doctor-male.png",
  },
  {
    name: "Dr. Maya Patel",
    specialty: "Pediatrician",
    time: "Nov 20, Fri · 11:30 AM",
    img: "/doctor-female.png",
  },
  {
    name: "Dr. Alicia Brown",
    specialty: "Immunologist",
    time: "Nov 21, Sat · 09:00 AM",
    img: "/doctor-female 2.jpg",
  },
];

const profileImg = "/samantha photo.jpg"; // Samantha's avatar

const healthTips = [
  "Stay hydrated! Remember to drink water today.",
  "A short walk can boost your mood and health.",
  "Take a deep breath and relax your mind.",
  "Consistency is key to healthy habits.",
  "Remember to take your medications on time.",
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function HealthcareMobileUI() {
  const [activeTab, setActiveTab] = useState("home");
  const [showLogModal, setShowLogModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [profileName, setProfileName] = useState("Samantha Bell");
  const [profileEmail, setProfileEmail] = useState("samantha@email.com");
  const [profilePhone, setProfilePhone] = useState("(555) 123-4567");
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [editProfileName, setEditProfileName] = useState("");
  const [editProfileEmail, setEditProfileEmail] = useState("");
  const [editProfilePhone, setEditProfilePhone] = useState("");

  // Accessibility: focus trap and ESC close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setShowLogModal(false);
    }
    if (showLogModal) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus the first input in the modal
      setTimeout(() => {
        if (modalRef.current) {
          const input = modalRef.current.querySelector("input,select,button");
          if (input && 'focus' in input && typeof input.focus === 'function') (input as HTMLElement).focus();
        }
      }, 0);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showLogModal]);

  // Add useEffect to initialize edit fields when showEditProfileModal opens
  useEffect(() => {
    if (showEditProfileModal) {
      setEditProfileName(profileName);
      setEditProfileEmail(profileEmail);
      setEditProfilePhone(profilePhone);
    }
  }, [showEditProfileModal]);

  function LogReadingModal({ onClose }: { onClose: () => void }) {
    const [type, setType] = useState("Heart Rate");
    const [value, setValue] = useState("");
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
        <div
          className="bg-white rounded-2xl shadow-2xl p-6 w-[90vw] max-w-sm flex flex-col gap-4 relative"
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
          ref={modalRef}
          role="dialog"
          aria-modal="true"
        >
          <h2 className="text-xl font-bold mb-2 text-black">Log New Reading</h2>
          <label className="text-sm font-semibold text-black">Type</label>
          <select
            className="border rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
            value={type}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
          >
            <option>Heart Rate</option>
            <option>Blood Pressure</option>
            <option>Glucose</option>
          </select>
          <label className="text-sm font-semibold text-black">Value</label>
          <input
            className="border rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <div className="flex gap-2 mt-4">
            <button
              className="flex-1 bg-black text-white font-bold rounded-full px-4 py-2 hover:bg-neutral-800 transition"
              onClick={() => { onClose(); }}
            >
              Save
            </button>
            <button
              className="flex-1 bg-gray-200 text-black font-bold rounded-full px-4 py-2 hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  function renderScreen() {
    switch (activeTab) {
      case "home":
        return (
          <>
            {/* Greeting/Header Card (Not Sticky, Minimal) */}
            <div className="w-full px-6 pt-6 pb-2">
              {/* Row 1: Avatar, greeting, emoji */}
              <div className="flex items-start w-full">
                {/* Avatar */}
                <button
                  className="w-20 h-20 rounded-full border-2 border-beachfoam shadow focus:outline-none focus:ring-2 focus:ring-black flex-shrink-0"
                  aria-label="Go to profile"
                  onClick={() => setActiveTab('profile')}
                  tabIndex={0}
                  style={{ overflow: 'hidden' }}
                >
                  <img src={profileImg} alt="Samantha" className="w-20 h-20 rounded-full object-cover" />
                </button>
                {/* Greeting and emoji */}
                <div className="flex flex-col justify-center ml-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-2xl text-black leading-tight">{getGreeting()}, {profileName.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
              {/* Row 2: Health tip */}
              <div className="w-full ml-[88px] mt-0.5">
                <span className="text-base text-black/80 block leading-snug truncate">
                  {healthTips[new Date().getDate() % healthTips.length]}
                </span>
              </div>
              {/* Search Card below greeting */}
              <div className="w-full flex justify-center mt-4">
                <button
                  className="w-full max-w-md bg-white rounded-2xl shadow border border-gray-200 flex items-center px-5 py-3 gap-3 text-left focus:outline-none focus:ring-2 focus:ring-black transition hover:bg-gray-50"
                  aria-label="Search for doctors, medications, or info"
                  onClick={() => {/* open search modal here */}}
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
                  <span className="text-gray-500 text-base">Search for doctors, medications, or info…</span>
                </button>
              </div>
            </div>
            {/* Floating Notification FAB */}
            <button
              className="fixed z-40 right-8 bottom-24 w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              aria-label="View notifications"
              onClick={() => {/* open notifications modal here */}}
            >
              <Bell className="w-7 h-7 text-black" />
              <span className="absolute top-3 right-3 w-3 h-3 bg-irresistible rounded-full border-2 border-white"></span>
            </button>
            {/* Featured Doctor Card */}
            <div className="w-full px-6 pb-2 mt-4">
              <div className="relative bg-white border border-[#E2DFDA] rounded-3xl flex items-start p-3 gap-3 overflow-hidden py-4 h-[165px]">
                <img src="/doctor-male.png" alt="Dr. Johan Smit" className="w-20 h-20 rounded-2xl object-cover border-2 border-beachfoam shadow" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg text-persianindigo truncate">Dr. Johan Smit</span>
                  </div>
                  <div className="text-beachfoam text-sm mb-1">5 years experienced</div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_,i) => (<svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>))}
                    <span className="font-bold text-persianindigo ml-1">5.0</span>
                    <span className="text-beachfoam text-xs">(3,964)</span>
                  </div>
                  <div className="flex flex-col items-start mt-1">
                    <div className="flex items-center text-black font-semibold text-lg">
                      Dental Surgery
                    </div>
                    <span className="text-gray-500 text-xs mt-0">Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="ml-2 bg-islandlush text-white rounded-full p-3" aria-label="Call doctor"><PhoneIcon className="w-5 h-5" /></button>
                  </div>
                </div>
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow text-red-500" aria-label="Favorite"><svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg></button>
              </div>
            </div>
            {/* Section Title */}
            <div className="w-full px-6 mt-6">
              <h2 className="text-2xl font-bold text-black mb-4">Today's Tasks</h2>
            </div>
            {/* Home Stat Cards Masonry */}
            <div className="w-full px-6 mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Medications Card */}
              <div className="relative rounded-2xl bg-white p-6 flex flex-col items-center w-full overflow-hidden shadow-sm border border-gray-100">
                <Pill className="absolute right-4 top-4 w-12 h-12 text-gray-100" />
                <span className="text-base font-medium text-gray-500 mb-1 z-10">Medications</span>
                <span className="text-4xl font-semibold text-black mb-0.5 z-10">3</span>
                <span className="text-sm text-gray-500 mb-4 z-10">Active</span>
                <span className="text-xs text-gray-400 mt-2 z-10">Today</span>
              </div>
              {/* Appointments Card */}
              <div className="relative rounded-2xl bg-white p-6 flex flex-col items-center w-full overflow-hidden shadow-sm border border-gray-100">
                <Calendar className="absolute right-4 top-4 w-12 h-12 text-gray-100" />
                <span className="text-base font-medium text-gray-500 mb-1 z-10">Appointments</span>
                <span className="text-4xl font-semibold text-black mb-0.5 z-10">2</span>
                <span className="text-sm text-gray-500 mb-4 z-10">Upcoming</span>
                <span className="text-xs text-gray-400 mt-2 z-10">This Week</span>
              </div>
              {/* Services Card */}
              <div className="relative rounded-2xl bg-white p-6 flex flex-col items-center w-full overflow-hidden shadow-sm border border-gray-100">
                <Heart className="absolute right-4 top-4 w-12 h-12 text-gray-100" />
                <span className="text-base font-medium text-gray-500 mb-1 z-10">Services</span>
                <span className="text-4xl font-semibold text-black mb-0.5 z-10">4</span>
                <span className="text-sm text-gray-500 mb-4 z-10">Available</span>
                <span className="text-xs text-gray-400 mt-2 z-10">Explore</span>
              </div>
              {/* Doctors Card */}
              <div className="relative rounded-2xl bg-white p-6 flex flex-col items-center w-full overflow-hidden shadow-sm border border-gray-100">
                <User className="absolute right-4 top-4 w-12 h-12 text-gray-100" />
                <span className="text-base font-medium text-gray-500 mb-1 z-10">Doctors</span>
                <span className="text-4xl font-semibold text-black mb-0.5 z-10">4</span>
                <span className="text-sm text-gray-500 mb-4 z-10">Specialists</span>
                <span className="text-xs text-gray-400 mt-2 z-10">Meet Team</span>
              </div>
            </div>
            {/* Medications */}
            <div className="w-full px-6 mt-10 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-black mb-4">Medications</h2>
                <a href="#" className="text-black text-sm font-semibold">All Meds</a>
              </div>
              <div className="flex flex-col gap-3">
                {medications.map((m, i) => (
                  <div key={i} className="relative flex items-center rounded-2xl bg-white px-5 py-4 gap-4 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
                      <Pill className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-base text-black">{m.name}</div>
                      <div className="text-sm text-gray-500">{m.dose}</div>
                    </div>
                    {m.status === "Missed" && (
                      <span className="text-red-500 text-xs font-medium mr-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" aria-label="Missed" /> Missed</span>
                    )}
                    {m.time && (
                      <span className="text-xs text-gray-400 font-medium mr-2">{m.time}</span>
                    )}
                    <button className="bg-gray-100 text-black font-medium rounded-xl px-4 py-2 text-sm active:bg-gray-200 transition-colors" aria-label="Take medication">Take</button>
                  </div>
                ))}
              </div>
            </div>
            {/* Appointments */}
            <div className="w-full px-6 mt-10 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-black mb-4">Next appointments</h2>
                <a href="#" className="text-black text-sm font-semibold">See all</a>
              </div>
              <div className="flex flex-col gap-3">
                {appointments.map((a) => (
                  <div key={a.name} className="relative flex items-center rounded-2xl bg-white px-5 py-4 gap-4 shadow-sm border border-gray-100 active:bg-gray-50 transition-colors">
                    <img src={a.img} alt={a.name} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                    <div className="flex-1">
                      <div className="font-medium text-base text-black">{a.name}</div>
                      <div className="text-sm text-gray-500">{a.specialty}</div>
                      <div className="text-xs text-gray-400">{a.time}</div>
                    </div>
                    <button className="bg-gray-100 text-gray-600 rounded-xl p-2 active:bg-gray-200 transition-colors" aria-label="See details">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* All Doctors */}
            <div className="w-full px-6 mt-10 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-black mb-4">All Doctors</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {/* Doctor 1 */}
                <div className="relative flex items-center rounded-3xl shadow-2xl bg-white px-7 py-6 gap-4 border border-[#E2DFDA] overflow-hidden">
                  <img src="/doctor photo.jpg" alt="Dr. Alicia Brown" className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow z-10" />
                  <div className="flex-1 z-10">
                    <div className="font-bold text-lg text-black">Dr. Alicia Brown</div>
                    <div className="text-xs text-black font-semibold">Immunologist</div>
                  </div>
                  <button className="bg-gray-100 text-black rounded-full p-3 z-10" aria-label="See details">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                {/* Doctor 2 */}
                <div className="relative flex items-center rounded-3xl shadow-2xl bg-white px-7 py-6 gap-4 border border-[#E2DFDA] overflow-hidden">
                  <img src="/doctor-female 2.jpg" alt="Dr. Haley Grant" className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow z-10" />
                  <div className="flex-1 z-10">
                    <div className="font-bold text-lg text-black">Dr. Haley Grant</div>
                    <div className="text-xs text-black font-semibold">Cardiologist</div>
                  </div>
                  <button className="bg-gray-100 text-black rounded-full p-3 z-10" aria-label="See details">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                {/* Doctor 3 */}
                <div className="relative flex items-center rounded-3xl shadow-2xl bg-white px-7 py-6 gap-4 border border-[#E2DFDA] overflow-hidden">
                  <img src="/doctor-female.png" alt="Dr. Maya Patel" className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow z-10" />
                  <div className="flex-1 z-10">
                    <div className="font-bold text-lg text-black">Dr. Maya Patel</div>
                    <div className="text-xs text-black font-semibold">Pediatrician</div>
                  </div>
                  <button className="bg-gray-100 text-black rounded-full p-3 z-10" aria-label="See details">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                {/* Doctor 4 */}
                <div className="relative flex items-center rounded-3xl shadow-2xl bg-white px-7 py-6 gap-4 border border-[#E2DFDA] overflow-hidden">
                  <img src="/doctor-male.png" alt="Dr. Jake Emerson" className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow z-10" />
                  <div className="flex-1 z-10">
                    <div className="font-bold text-lg text-black">Dr. Jake Emerson</div>
                    <div className="text-xs text-black font-semibold">Neurologist</div>
                  </div>
                  <button className="bg-gray-100 text-black rounded-full p-3 z-10" aria-label="See details">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case "health":
        return (
          <div className="flex flex-col items-center w-full px-6 pt-[32px] pb-24">
            <h2 className="text-2xl font-bold text-black mb-4 w-full text-left">Health Overview</h2>
            <div className="grid grid-cols-2 gap-4 w-full mb-6">
              {/* Heart Rate */}
              <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden" tabIndex={0} aria-label="Heart Rate card">
                <Heart className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                <span className="text-base font-semibold text-black mb-1 z-10">Heart Rate</span>
                <span className="text-5xl font-extrabold text-black mb-0.5 z-10">76</span>
                <span className="text-xs text-black mb-6 z-10">BPM</span>
                <span className="text-xs text-black">Improving</span>
              </div>
              {/* Blood Pressure */}
              <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden" tabIndex={0} aria-label="Blood Pressure card">
                <HeartPulse className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                <span className="text-base font-semibold text-black mb-1 z-10">Blood Pressure</span>
                <span className="text-5xl font-extrabold text-black mb-0.5 z-10">120/78</span>
                <span className="text-xs text-black mb-6 z-10">mmHg</span>
                <span className="text-black">Rising</span>
              </div>
              {/* Glucose */}
              <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden" tabIndex={0} aria-label="Glucose card">
                <Droplet className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                <span className="text-base font-semibold text-black mb-1 z-10">Glucose</span>
                <span className="text-5xl font-extrabold text-black mb-0.5 z-10">98</span>
                <span className="text-xs text-black mb-6 z-10">mg/dL</span>
                <span className="text-black">Improving</span>
              </div>
              {/* Weight */}
              <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden" tabIndex={0} aria-label="Weight card">
                <User className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                <span className="text-base font-semibold text-black mb-1 z-10">Weight</span>
                <span className="text-5xl font-extrabold text-black mb-0.5 z-10">72</span>
                <span className="text-xs text-black mb-6 z-10">kg</span>
              </div>
            </div>
            {/* Trends Section */}
            <div className="w-full flex flex-col gap-4 mb-2">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">Trends <a href="#" className="ml-2 text-xs text-black underline">See all history</a></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Heart Rate Card */}
                <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden">
                  <Heart className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                  <span className="text-base font-semibold text-black mb-1 z-10">Heart Rate</span>
                  <span className="text-5xl font-extrabold text-black mb-0.5 z-10">76</span>
                  <span className="text-xs text-black mb-6 z-10">BPM</span>
                  <span className="text-xs text-black">Last Measurement</span>
                </div>
                {/* Blood Pressure Card */}
                <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden">
                  <HeartPulse className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                  <span className="text-base font-semibold text-black mb-1 z-10">Blood Pressure</span>
                  <span className="text-5xl font-extrabold text-black mb-0.5 z-10">120/78</span>
                  <span className="text-xs text-black mb-6 z-10">mmHg</span>
                  <span className="text-xs text-black">Last Measurement</span>
                </div>
                {/* Glucose Card */}
                <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden">
                  <Droplet className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                  <span className="text-base font-semibold text-black mb-1 z-10">Glucose</span>
                  <span className="text-5xl font-extrabold text-black mb-0.5 z-10">98</span>
                  <span className="text-xs text-black mb-6 z-10">mg/dL</span>
                  <span className="text-xs text-black">Last Measurement</span>
                </div>
                {/* Weight Card */}
                <div className="relative rounded-3xl shadow-2xl bg-white border border-[#E2DFDA] backdrop-blur-md p-8 flex flex-col items-center w-full overflow-hidden">
                  <User className="absolute right-4 top-4 w-16 h-16 text-gray-200" />
                  <span className="text-base font-semibold text-black mb-1 z-10">Weight</span>
                  <span className="text-5xl font-extrabold text-black mb-0.5 z-10">72</span>
                  <span className="text-xs text-black mb-6 z-10">kg</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "calendar":
        // Example events data
        const calendarEvents = [
          {
            date: "2024-06-10",
            events: [
              { type: "appointment", time: "10:00 AM", title: "Dr. Kelly Langley", desc: "Cardiologist", icon: <User className='w-5 h-5 text-blue-500' /> },
              { type: "medication", time: "08:00 PM", title: "Atorvastatin", desc: "Take medication", icon: <Pill className='w-5 h-5 text-green-500' /> },
            ],
          },
          {
            date: "2024-06-11",
            events: [
              { type: "appointment", time: "02:00 PM", title: "Dr. Maya Patel", desc: "Pediatrician", icon: <User className='w-5 h-5 text-cyan-500' /> },
            ],
          },
        ];
        const today = "2024-06-10";
        return (
          <div className="relative flex flex-col items-center w-full px-0 pt-[24px] h-full min-h-full">
            {/* Soft gradient/shadow behind calendar */}
            <div className="absolute top-0 left-0 w-full h-[260px] z-0 pointer-events-none" style={{background: 'linear-gradient(180deg, #f7f7fa 60%, #e3e6ee 100%)', boxShadow: '0 8px 32px rgba(0,0,0,0.07)'}} />
            {/* Mini Calendar */}
            <div className="w-full px-6 mb-4 relative z-10">
              <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-4 flex flex-col items-center transition-all duration-300 scale-100">
                <span className="font-bold text-black text-lg mb-2">June 2024</span>
                <div className="grid grid-cols-7 gap-1 w-full">
                  {["S","M","T","W","T","F","S"].map((d, i) => (
                    <span key={d + i} className="text-xs text-black text-center font-semibold">{d}</span>
                  ))}
                  {Array.from({length: 30}, (_,i) => i+1).map((d) => {
                    // Check if this day has events
                    const hasEvents = calendarEvents.some(evDay => new Date(evDay.date).getDate() === d);
                    const isToday = d === 10;
                    return (
                      <span
                        key={d}
                        className={`flex flex-col items-center justify-center ${isToday ? 'w-9 h-9 rounded-full bg-black text-white ring-2 ring-black shadow-md font-bold text-lg' : 'w-7 h-7 rounded-full text-black font-bold text-sm'} transition-all duration-200 relative`}
                        style={{lineHeight: isToday ? '2.25rem' : '1.75rem'}}
                      >
                        <span className="flex items-center justify-center w-full h-full">{d}</span>
                        {!isToday && hasEvents && <span className="w-1.5 h-1.5 rounded-full bg-black mt-0.5" />}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Events List */}
            <div className="w-full px-6 mt-2 mb-20 relative z-10">
              {calendarEvents.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-black">
                  <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mb-4"><rect width="64" height="64" rx="16" fill="#F7F7FA"/><rect x="16" y="24" width="32" height="24" rx="4" fill="#E3E6EE"/><rect x="24" y="32" width="16" height="8" rx="2" fill="#CDE0E1"/></svg>
                  <span className="font-bold text-lg mb-2">No events scheduled</span>
                  <span className="text-sm mb-4">You have no upcoming appointments or reminders.</span>
                </div>
              ) : (
                calendarEvents.map((day) => (
                  <div key={day.date} className="mb-6">
                    <div className="text-xs text-black font-semibold mb-2">{day.date === today ? "Today" : new Date(day.date).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</div>
                    <div className="flex flex-col gap-3">
                      {day.events.map((ev, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-white rounded-3xl shadow-2xl px-7 py-6 gap-3 border border-[#E2DFDA] overflow-hidden cursor-pointer transition-all duration-200"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
                            {React.cloneElement(ev.icon, { className: 'w-5 h-5 text-white' })}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-black text-base">{ev.title}</div>
                            <div className="text-xs text-black">{ev.desc}</div>
                          </div>
                          <div className="text-xs text-black font-semibold ml-2">{ev.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="flex flex-col items-center w-full px-6 pt-[32px] pb-24">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center w-full mb-8">
              <div className="relative mb-3">
                <img src={profileImg} alt="Samantha" className="w-24 h-24 rounded-full object-cover border-2 border-blue-200 shadow mb-2" />
                <button className="absolute bottom-2 right-2 bg-black text-white rounded-full p-2 shadow flex items-center justify-center border-2 border-white" aria-label="Change profile photo">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15.232 5.232l3.536 3.536M9 13l6-6M7 7h.01M21 21H3V3h18v18z" /></svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold text-black mb-1 text-center">Samantha Bell</h2>
              <div className="flex flex-col items-center gap-1 mb-4">
                <span className="text-black text-sm flex items-center gap-1"><User className="w-4 h-4" /> samantha@email.com</span>
                <span className="text-black text-sm flex items-center gap-1"><PhoneIcon className="w-4 h-4" /> (555) 123-4567</span>
              </div>
              <button className="bg-black text-white font-bold rounded-full px-6 py-2 text-sm shadow transition hover:bg-neutral-800" onClick={() => setShowEditProfileModal(true)}>Edit Profile</button>
            </div>
            {/* Edit Profile Modal */}
            {showEditProfileModal && (
              <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 animate-in fade-in duration-200" onClick={() => setShowEditProfileModal(false)}>
                <div
                  className="bg-white rounded-t-3xl shadow-2xl w-full max-w-md flex flex-col gap-4 relative animate-in slide-in-from-bottom duration-300"
                  onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
                  ref={modalRef}
                  role="dialog"
                  aria-modal="true"
                >
                  {/* Drag Handle */}
                  <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-2" />
                  
                  <div className="px-6 pb-6">
                    <h2 className="text-xl font-semibold mb-4 text-black">Edit Profile</h2>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500 mb-1.5 block">Name</label>
                        <input
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black/10"
                          type="text"
                          value={editProfileName}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditProfileName(e.target.value)}
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 mb-1.5 block">Email</label>
                        <input
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black/10"
                          type="email"
                          value={editProfileEmail}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditProfileEmail(e.target.value)}
                          placeholder="Enter email"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500 mb-1.5 block">Phone</label>
                        <input
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black/10"
                          type="tel"
                          value={editProfilePhone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditProfilePhone(e.target.value)}
                          placeholder="Enter phone"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button
                        className="flex-1 bg-gray-100 text-black font-semibold rounded-xl px-4 py-3 hover:bg-gray-200 transition"
                        onClick={() => setShowEditProfileModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="flex-1 bg-black text-white font-semibold rounded-xl px-4 py-3 hover:bg-neutral-800 transition"
                        onClick={() => {
                          setProfileName(editProfileName);
                          setProfileEmail(editProfileEmail);
                          setProfilePhone(editProfilePhone);
                          setShowEditProfileModal(false);
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section Title: Medical Info */}
            <h3 className="text-xl font-bold text-black mb-3 w-full text-left">Medical Info</h3>
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-6 w-full mb-8">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-black" /> Medical Info</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm"><span className="font-semibold text-black">Allergies:</span> <span className="text-neutral-800">Penicillin</span></div>
                <div className="flex items-center gap-2 text-sm"><span className="font-semibold text-black">Conditions:</span> <span className="text-neutral-800">Hypertension</span></div>
                <div className="text-sm"><span className="font-semibold text-black">Emergency Contact:</span> <span className="text-neutral-800">William Bell (555) 987-6543</span></div>
              </div>
            </div>
            {/* Section Title: Settings */}
            <h3 className="text-xl font-bold text-black mb-3 w-full text-left">Settings</h3>
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-6 w-full mb-8">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2"><Settings className="w-5 h-5 text-black" /> Settings</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-black font-semibold flex items-center gap-2"><Bell className="w-4 h-4" /> Notifications</span>
                  <Checkbox checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black font-semibold flex items-center gap-2"><MoonIcon className="w-4 h-4" /> Dark Mode</span>
                  <Checkbox checked={false} />
                </div>
                <button
                  className="mt-2 bg-black text-white font-bold rounded-full px-6 py-2 text-sm shadow transition hover:bg-neutral-800 flex items-center gap-2"
                  onClick={() => setShowLogoutModal(true)}
                >
                  <LogOutIcon className="w-4 h-4 text-white" /> Logout
                </button>
              </div>
            </div>
            {/* Logout Modal (Bottom Sheet) */}
            {showLogoutModal && (
              <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 animate-in fade-in duration-200" onClick={() => setShowLogoutModal(false)}>
                <div
                  className="bg-white rounded-t-3xl shadow-2xl w-full max-w-md flex flex-col gap-4 relative animate-in slide-in-from-bottom duration-300"
                  onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                >
                  {/* Drag Handle */}
                  <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-2" />
                  
                  <div className="px-6 pb-6">
                    <h2 className="text-xl font-semibold mb-4 text-black">Log Out</h2>
                    <p className="text-gray-500 mb-6">Are you sure you want to log out of your account?</p>
                    
                    <div className="flex flex-col gap-3">
                      <button
                        className="w-full bg-red-500 text-white font-semibold rounded-xl px-4 py-3 hover:bg-red-600 transition"
                        onClick={() => {
                          setIsLoggingOut(true);
                          setTimeout(() => {
                            setIsLoggingOut(false);
                            setShowLogoutModal(false);
                          }, 1500);
                        }}
                      >
                        {isLoggingOut ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Logging out...</span>
                          </div>
                        ) : (
                          "Log Out"
                        )}
                      </button>
                      <button
                        className="w-full bg-gray-100 text-black font-semibold rounded-xl px-4 py-3 hover:bg-gray-200 transition"
                        onClick={() => setShowLogoutModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="relative bg-[#EDF1F5] flex flex-col justify-start overflow-hidden" style={{ width: 430, height: 932, borderRadius: 40, boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1.5px solid black' }}>
      <MobileStatusBar theme="light" />
      <div className="flex-1 overflow-y-auto pb-28">
        {renderScreen()}
      </div>
      {/* iOS-style Bottom Nav */}
      <nav className="absolute bottom-0 left-0 right-0 h-[72px] bg-white rounded-b-[40px] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] border-t border-gray-200 flex justify-between items-center overflow-hidden pt-2 pb-4" style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.04)' }}>
        {[
          { key: 'home', icon: Home, label: 'Home' },
          { key: 'health', icon: Heart, label: 'Health' },
          { key: 'calendar', icon: Calendar, label: 'Calendar' },
          { key: 'profile', icon: User, label: 'Profile' },
        ].map(tab => (
          <div
            key={tab.key}
            className={`flex-1 flex flex-col items-center justify-center cursor-pointer h-full relative select-none`}
            onClick={() => setActiveTab(tab.key)}
          >
            {/* Active dot indicator */}
            {activeTab === tab.key && (
              <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
            )}
            <tab.icon className={`w-7 h-7 mb-0.5 ${activeTab === tab.key ? 'text-black' : 'text-gray-400'}`} aria-label={tab.label} />
            <span className={`text-xs font-bold ${activeTab === tab.key ? 'text-black' : 'text-gray-400'}`}>{tab.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
} 