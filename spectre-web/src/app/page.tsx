"use client";
import React, { useState } from "react";
import { caseStudies } from "@/data/case-studies";
import { Figma, PenTool, Image as ImageIcon, Brush, Camera, Monitor, Layers, Zap, Video, Palette, Ruler, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheqHomeScreen from "@/components/CheqHomeScreen";
import FleetMonitorMobileUI from "@/components/FleetMonitorMobileUI";
import HealthcareMobileUI from "@/components/HealthcareMobileUI";
import SaasFinanceMobileUI from "@/components/SaasFinanceMobileUI";

// Placeholder profile image
const profileImg = "/billy-headshot-new.jpeg";

const specialties = [
  {
    icon: Smartphone,
    title: "Mobile Design",
    desc: "Creating intuitive mobile experiences that delight users.",
  },
  {
    icon: Monitor,
    title: "Web Applications",
    desc: "Designing complex web applications with clarity and purpose.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    desc: "Creating visually stunning interfaces with attention to detail and brand consistency.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Building scalable design systems for consistent user experiences.",
  },
];

const designTools = [
  { name: "Figma", icon: Figma },
  { name: "Sketch", icon: PenTool },
  { name: "Adobe XD", icon: ImageIcon },
  { name: "Illustrator", icon: Brush },
  { name: "Photoshop", icon: Camera },
  { name: "Framer", icon: Monitor },
  { name: "Zeplin", icon: Layers },
  { name: "Principle", icon: Zap },
  { name: "After Effects", icon: Video },
  { name: "InVision", icon: Palette },
];

export default function Home() {
  return (
    <div className="bg-[#f4f1ec] min-h-screen w-full">
      {/* Polished Header */}
      <header className="w-full bg-[#f4f1ec]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <span className="font-extrabold text-2xl text-seaDeep tracking-tight">Billy No</span>
          <nav className="flex-1 flex justify-center gap-8 items-center">
            <a href="#" className="text-lg font-semibold text-seaDeep underline underline-offset-4 decoration-2 decoration-seaDeep">About</a>
            <a href="#" className="text-lg font-normal text-seaDeep hover:underline hover:underline-offset-4">Case Studies</a>
            <a href="#" className="text-lg font-normal text-seaDeep hover:underline hover:underline-offset-4">Design Tools</a>
        </nav>
          <Button variant="default" className="ml-8">Book a Consultation</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white rounded-2xl max-w-6xl mx-auto mt-10 md:mt-16 p-8 md:p-12 shadow-xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <div className="flex-1 w-full">
            <h1 className="font-display text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-seaDeep mb-2">Hey, I'm Billy No.</h1>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-seaDeep mb-6">Cat Rescuer & Designer</h2>
            {/* Hero Paragraph */}
            <p className="font-sans mb-10 max-w-2xl text-lg md:text-2xl text-[#2D3C44] leading-relaxed font-medium">
              I transform complex problems into intuitive digital experiences that delight users and drive business results. With over 15 years of experience across web, mobile, and enterprise platforms, I blend strategic thinking with meticulous execution to create designs that are both beautiful and functional.
            </p>
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 border border-[#ece7df] min-w-[220px]">
                <span className="font-bold text-lg text-seaDeep">Availability</span>
                <span className="flex items-center gap-2 text-green-700 font-semibold text-base"><span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>Open to new clients</span>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 border border-[#ece7df] min-w-[220px]">
                <span className="font-bold text-lg text-seaDeep">Location</span>
                <span className="text-base text-seaDeep font-normal">USA</span>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 border border-[#ece7df] min-w-[220px]">
                <span className="font-bold text-lg text-seaDeep">Experience</span>
                <span className="text-base text-seaDeep font-normal">15+ Years in Product Design</span>
              </div>
          </div>
          </div>
          <img src={profileImg} alt="Billy No" className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover border-4 border-seaDeep grayscale shadow-lg self-center md:self-start md:mt-0 mt-4" />
        </div>
      </section>

      {/* Specialties */}
      <section className="w-full bg-[#ede8e2] py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-10 tracking-tight leading-tight text-seaDeep text-left">Design Specialties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {specialties.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow border border-[#e5e1db] p-8 flex flex-col items-start min-h-[220px]"
              >
                <div className="bg-[#f4f1ec] rounded-xl p-3 mb-6">
                  <s.icon size={32} className="text-[#2D3C44]" />
                </div>
                <div className="font-extrabold text-lg text-[#222] mb-2">{s.title}</div>
                <div className="text-[17px] text-[#6b7280] font-medium">{s.desc}</div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-20">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight text-seaDeep text-left">Case Studies</h3>
        <div className="flex flex-col gap-20">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden border border-[#ece7df] min-h-[1100px]">
              <div className="flex-1 p-12 md:p-16 flex flex-col justify-start h-full">
                {/* New content for the first, second, third, and fourth case studies */}
                {i === 0 ? (
                  <>
                    {/* Title */}
                    <h4 className="font-display text-3xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight text-seaDeep">
                      CHEQ Restaurant Payment Platform Redesign
                    </h4>
                    {/* Subtitle */}
                    <div className="font-sans text-lg text-[#2D3C44] font-semibold mb-6">
                      Led the UX redesign for CHEQ, a restaurant payment platform struggling with critical user experience issues. The project focused on improving mobile transactions and bill-splitting processes to increase user retention and restaurant partner satisfaction.
                    </div>
                    {/* Tags */}
                    <div className="flex gap-3 mb-8 flex-wrap">
                      {["User Research", "Figma", "Framer", "Mobile", "Desktop"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#ede8e2] text-seaDeep px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Challenge */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Challenge</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Frequent mobile transaction failures","Complex and confusing bill-splitting processes","Declining user retention rates","Restaurant partner dissatisfaction"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Research */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Research</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Comprehensive user testing with diverse demographics (ages 21-61)","Stakeholder interviews with restaurant owners and staff","Competitive analysis of payment platforms"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Solution */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Solution</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Streamlined QR code scanning process","Intuitive ordering flows","Intelligent bill-splitting functionality"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : i === 1 ? (
                  <>
                    {/* Title */}
                    <h4 className="font-display text-3xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight text-seaDeep">
                      IoT Fleet Monitoring Dashboard for PTC
                    </h4>
                    {/* Subtitle */}
                    <div className="font-sans text-lg text-[#2D3C44] font-semibold mb-6">
                      Led the design of an advanced IoT Fleet Monitoring Dashboard for PTC's Systems Management Gateway platform, transforming complex industrial IoT data into actionable insights for rail operators.
                    </div>
                    {/* Tags */}
                    <div className="flex gap-3 mb-8 flex-wrap">
                      {["Dashboard", "IoT", "UI", "Data Visualization", "Enterprise"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#ede8e2] text-seaDeep px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Challenge */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Challenge</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Complex industrial IoT data difficult to interpret","Thousands of connected devices generating overwhelming data streams","Critical issues often identified too late to prevent failures"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Research */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Research</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Interviews with rail operators and maintenance staff","Analysis of device telemetry and alert logs","Competitive review of fleet management platforms"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Solution */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Solution</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Customizable KPI cards for personalized monitoring","Predictive maintenance algorithms to anticipate failures","Interactive geospatial mapping of fleet assets"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : i === 2 ? (
                  <>
                    {/* Title */}
                    <h4 className="font-display text-3xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight text-seaDeep">
                      Accessible Healthcare Portal Design
                    </h4>
                    {/* Subtitle */}
                    <div className="font-sans text-lg text-[#2D3C44] font-semibold mb-6">
                      Designed an accessible healthcare portal that serves patients of all age groups and abilities. The project focused on creating an inclusive platform that follows WCAG guidelines.
                    </div>
                    {/* Tags */}
                    <div className="flex gap-3 mb-8 flex-wrap">
                      {["Healthcare", "Accessibility", "WCAG", "UI", "Web"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#ede8e2] text-seaDeep px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Challenge */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Challenge</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Existing portal inaccessible to users with disabilities","Complex navigation causing high abandonment rates","Frequent support calls for basic tasks"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Research */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Research</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Accessibility audits with screen reader users","Surveys of patients and caregivers","Review of WCAG 2.1 guidelines and best practices"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Solution */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Solution</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["WCAG 2.1 AA compliant interface design","Simplified navigation and task flows","Enhanced appointment scheduling system"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : i === 3 ? (
                  <>
                    {/* Title */}
                    <h4 className="font-display text-3xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight text-seaDeep">
                      SaaS Finance Accounting Portal Redesign
                    </h4>
                    {/* Subtitle */}
                    <div className="font-sans text-lg text-[#2D3C44] font-semibold mb-6">
                      Redesigned a SaaS company's finance accounting portal to streamline financial workflows and improve efficiency for finance teams.
                    </div>
                    {/* Tags */}
                    <div className="flex gap-3 mb-8 flex-wrap">
                      {["SaaS", "Finance", "Dashboard", "UI", "Web"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#ede8e2] text-seaDeep px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Challenge */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Challenge</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Complex financial workflows causing processing delays","High error rates in financial data entry and reporting","Poor user satisfaction among finance team members"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Research */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Research</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Workshops with finance team stakeholders","Analysis of error logs and workflow bottlenecks","Benchmarking against leading SaaS finance tools"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Solution */}
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Solution</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Streamlined approval workflows and batch processing","Intelligent data validation to prevent common errors","Customizable dashboards for different finance roles"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Placeholder for other case studies */}
                    <h4 className="font-display text-3xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight text-seaDeep">
                      case study name here
                    </h4>
                    <div className="font-sans text-lg text-[#2D3C44] font-semibold mb-6">
                      subtitle text here
                    </div>
                    <div className="flex gap-3 mb-8 flex-wrap">
                      {["User Research", "Figma", "Framer", "Mobile", "Desktop"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#ede8e2] text-seaDeep px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-sm"
                        >
                          {tag}
                        </span>
                  ))}
                </div>
                    <p className="font-sans mb-8 text-lg text-[#2D3C44] leading-relaxed font-medium max-w-2xl">
                      Lorem ipsum will be fine for now
                    </p>
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Challenge</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Frequent mobile transaction failures","Complex and confusing bill-splitting processes","Declining user retention rates","Restaurant partner dissatisfaction"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Research</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Comprehensive user testing with diverse demographics (ages 21–61)","Stakeholder interviews with restaurant owners and staff","Competitive analysis of payment platforms"].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <div className="font-display text-base font-bold text-seaDeep mb-2">Solution</div>
                      <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed font-sans font-normal pl-4 space-y-2 max-w-2xl">
                        {["Streamlined QR code scanning process","Intuitive ordering flows","Intelligent bill-splitting functionality"].map((item) => (
                          <li key={item}>{item}</li>
                  ))}
                </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-center items-center bg-[#f8f6f2] p-0 h-full w-full max-w-[500px] mx-auto h-full min-h-[1100px]">
                {i === 0 ? (
                  <div className="flex flex-1 items-center justify-center h-full mb-8">
                    <CheqHomeScreen />
                  </div>
                ) : i === 1 ? (
                  <div className="flex flex-1 items-center justify-center h-full mb-8">
                    <FleetMonitorMobileUI />
                  </div>
                ) : i === 2 ? (
                  <div className="flex flex-1 items-center justify-center h-full mb-8">
                    <HealthcareMobileUI />
                  </div>
                ) : i === 3 ? (
                  <div className="flex flex-1 items-center justify-center h-full mb-8">
                    <SaasFinanceMobileUI />
                  </div>
                ) : (
                  <img src={cs.img} alt="Mobile UI" className="rounded-3xl shadow-lg max-w-full h-auto md:w-[300px] md:h-[600px] object-cover" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Tools */}
      <section className="max-w-6xl mx-auto py-20">
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight text-seaDeep text-left">Design Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {designTools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-xl p-8 shadow text-center font-semibold border border-[#ece7df] flex flex-col items-center justify-center min-h-[90px] text-seaDeep text-lg gap-3">
              <tool.icon size={36} strokeWidth={1.5} />
              <span className="text-base mt-2">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-6xl mx-auto py-20">
        <div className="bg-white rounded-2xl shadow-lg p-12 md:p-16 border border-[#ece7df] relative overflow-hidden">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight text-seaDeep text-left">Let's Work Together</h3>
          <form className="flex flex-col gap-6">
            <div className="flex gap-4 flex-col sm:flex-row">
              <input className="flex-1 border border-[#ece7df] rounded-lg px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-seaDeep/30" placeholder="Your name" />
              <input className="flex-1 border border-[#ece7df] rounded-lg px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-seaDeep/30" placeholder="Your email" />
          </div>
            <input className="border border-[#ece7df] rounded-lg px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-seaDeep/30" placeholder="Subject / project type" />
            <textarea className="border border-[#ece7df] rounded-lg px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-seaDeep/30" placeholder="Your message" rows={4} />
            <Button type="submit" variant="default" className="mt-2">Send message</Button>
        </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6">© 2024 Billy No. All rights reserved.</footer>
    </div>
  );
}
