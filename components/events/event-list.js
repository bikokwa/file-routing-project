import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  return (
    <ul className={classes.list}>
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
