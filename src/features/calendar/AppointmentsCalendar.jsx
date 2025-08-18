import { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import styled from "styled-components";

// temporary for student appointments (as not implemented)
const testEvents = [
  // "2025-06-10T10:00:00"
  {
    title: "Event #1",
    start: new Date(2025, 5, 11, 9, 0),
    end: new Date(2025, 5, 11, 10, 0),
    status: "pending",
  },
  {
    title: "Event #2",
    start: new Date(2025, 5, 11, 11, 0),
    end: new Date(2025, 5, 11, 12, 0),
    status: "rejected",
  },
  {
    title: "Event #3",
    start: new Date(2025, 5, 11, 6, 0),
    end: new Date(2025, 5, 11, 8, 0),
    status: "approved",
  },
];

const localizer = momentLocalizer(moment);

const Container = styled.div`
  overflow: auto;
`;

export default function AppointmentsCalendar({
  isSelectable = false,
  events = testEvents,
  onSlotSelect,
  onAppointmentClick,
}) {
  const myEvents = events ? events : testEvents;
  const handleSelectSlot = useCallback((event) => {
    onSlotSelect(event);
  }, []);

  const handleSelectEvent = useCallback((event) => {
    onAppointmentClick(event);
  }, []);

  // Used to style individual appointment based on it's status
  function eventStyleGetter(event) {
    let backgroundColor;
    let color;

    switch (event.status) {
      case "pending":
        backgroundColor = "yellow";
        color = "black";
        break;
      case "rejected":
        backgroundColor = "red";
        color = "black";
        break;
      case "approved":
        backgroundColor = "green";
        color = "white";
        break;
      default:
        backgroundColor = "blue";
        color = "white";
    }
    var style = {
      backgroundColor,
      color,
      borderRadius: "0px",
      opacity: 0.8,
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  }

  return (
    <>
      <div>
        <strong>
          {!isSelectable && "Click an event to see more info"}
          {isSelectable &&
            "Click an event to see more info, or drag the mouse over the calendar to select a date/time range."}
        </strong>
      </div>

      <Container>
        <Calendar
          defaultView={Views.WEEK}
          views={["week", "day"]}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          eventPropGetter={eventStyleGetter}
          selectable={isSelectable}
        />
      </Container>
    </>
  );
}

AppointmentsCalendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
};
