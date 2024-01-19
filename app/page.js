"use client";

import { Header, Footer } from "@/components/navigations";
import { Hero } from "@/components/hero";
import { Functions, Features } from "@/components/details";
import Tag from "@/components/tag";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Functions />
      <Features />
      <Tag />
      <Footer />
    </div>
  );
}
