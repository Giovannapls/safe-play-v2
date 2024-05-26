
import Features from "@/components/Features";

import { Metadata } from "next";
import Event from "@/components/Events";

export const metadata: Metadata = {
  title: "Events Page",
  description: "This is Events Page",
  // other metadata
};

const EventsPage = () => {
  return (
    <>
      <Event />
    </>
  );
};

export default EventsPage;
