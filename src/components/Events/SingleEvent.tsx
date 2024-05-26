import { Blog } from "@/types/blog";
import { EventSafe } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

const SingleEvent = ({ event }: { event: EventSafe }) => {
  const {image} = event;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
      </div>
    </>
  );
};

export default SingleEvent;
