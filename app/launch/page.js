"use client";

import { Header, Footer, MiniHeader } from "@/components/navigations";
import { Hero } from "@/components/hero";
import { Functions, Features } from "@/components/details";
import Tag from "@/components/tag";

function LaunchApp() {
  return (
    <div className="app">
      <Header />
      <MiniHeader />
      <Hero />
      <Functions />
      <Features />
      <Tag />
      <Footer />
    </div>
  );
}

export default LaunchApp;
