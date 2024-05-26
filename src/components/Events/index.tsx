import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";
import eventsData from "./eventsData";


const Event = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Eventos"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {eventsData.map((event) => (
            <div key={event.id} className="w-full">
              <SingleEvent event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
