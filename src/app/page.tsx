import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Event from "@/components/Events";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Streams from "@/components/Streams";
import Reasons from "@/components/Reasons";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Safe play",
  description: "This is Home Safe play",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Reasons />
      <Streams />
      <Event />
      <Faq/>
    </>
  );
}
