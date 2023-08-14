import EventItem from "./event-item";

function EventList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <EventItem />
      ))}
    </ul>
  );
}

export default EventList;
