import EventItem from "./event-item";

function EventList(props) {
  return (
    <ul>
      {props.events.map((event) => (
        <EventItem
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
          key={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
