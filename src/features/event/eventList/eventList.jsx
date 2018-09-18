import React, { Component } from "react";
import EventListItem from "./eventListItem";

class EventList extends Component {
  render() {
    const { events, eventToOpen, deleteEvent } = this.props;

    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            eventToOpen={eventToOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
