import Hero from "@/components/layout/sections/hero";
import NudgesSection from "@/components/layout/sections/nudges-section";
import StorySection from "@/components/layout/sections/story";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <NudgesSection />
      <StorySection />
    </>
  );
};

export default page;
