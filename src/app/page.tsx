
import Event from "@/components/Events";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
      <Hero />
    </>
  );
}
