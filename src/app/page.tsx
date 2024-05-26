import Hero from "@/components/Hero";
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
