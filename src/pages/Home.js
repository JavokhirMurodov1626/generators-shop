import React from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Projects/>
      <FAQ />
      <Contact />
    </>
  );
}
