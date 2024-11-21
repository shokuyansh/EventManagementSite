// EventCard.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import './EventCard.css';

const EventCard = ({ id, heading, location, date, img }) => {
  const { year, month } = date;
  return (
    <Link to={`/events/${id}`}>
    <div className="event-card">
      <div className="event-img">
        <img src={img} alt="event" />
      </div>
      <div className="event-text">
        <h3>{heading}</h3>
        <div className="event-date">
          <span>Year: {year}</span>
          <span>Month: {month}</span>
        </div>
        <p>{location}</p>
      </div>
    </div>
    </Link>
  );
};

export default EventCard;
