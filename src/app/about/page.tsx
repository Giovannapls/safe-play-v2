
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Features />
    </>
  );
};

export default AboutPage;
