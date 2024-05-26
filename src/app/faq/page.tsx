
import Faq from "@/components/Faq";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq Page",
  description: "This is Faq Page",
  // other metadata
};

const FaqPage = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default FaqPage;
