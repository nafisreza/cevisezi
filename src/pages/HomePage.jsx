import React from "react";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { MostFrequentDreams } from "../components/MostFrequentDreams";
import { UserReview } from "../components/UserReview";
import { FAQ } from "../components/FAQ";
import { useSelector } from "react-redux";


export const HomePage = () => {
  const authStatus = useSelector(state=>state.auth.status)
  console.log(authStatus)
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-6 lg:px-24 py-16">
        <About />
        <MostFrequentDreams />
        <UserReview />
        <FAQ />
      </div>
    </>
  );
};
