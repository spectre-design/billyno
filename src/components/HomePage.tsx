"use client";
import React from "react";
import CaseStudySplitScreen from "@/components/CaseStudySplitScreen";
import SampleMobilePrototype from "@/components/SampleMobilePrototype";
import SampleCaseStudy from "@/content/sample-case-study.mdx";

export default function Home() {
  return (
    <CaseStudySplitScreen prototype={<SampleMobilePrototype />}>
      <div className="prose max-w-none">
        <SampleCaseStudy />
      </div>
    </CaseStudySplitScreen>
  );
} 