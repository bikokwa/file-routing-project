import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function filteredEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={filteredEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export default AllEventsPage;
