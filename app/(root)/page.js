import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Hero from "@/components/layout/sections/hero";
import NudgesSection from "@/components/layout/sections/nudges-section";
import StorySection from "@/components/layout/sections/story";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <NudgesSection />
      <StorySection />
      <Footer />
    </>
  );
};

export default page;
