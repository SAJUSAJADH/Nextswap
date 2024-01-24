"use client";

import { LandingNav, LaunchFooter } from "@/components/navigations";
import { LaunchHero } from "@/components/hero";
import {
  LaunchTag,
  LaunchingTagThree,
  LaunchingTagTwo,
} from "@/components/tag";

export default function Home() {
  return (
    <div className="landing-page">
      <LandingNav />
      <LaunchHero />
      <LaunchTag />
      <LaunchingTagTwo />
      <LaunchingTagThree />
      <LaunchFooter />
    </div>
  );
}
