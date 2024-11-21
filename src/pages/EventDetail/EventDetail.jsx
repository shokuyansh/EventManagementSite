import React from 'react';
import { useParams } from 'react-router-dom';
import { eventList } from '../../utils/EventDatabase';
import Navigation from '../../components/Navigation/Navigation';
import './EventDetail.css'; // Add a CSS file for custom styling

const EventDetail = () => {
    const { id } = useParams();
    const numID = Number(id);
    const event = eventList.find((eventDetail) => eventDetail.id === numID);

    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <>
            <Navigation />
            <div className="event-detail-container">
                <img className="event-image" src={event.img} alt={event.heading} />
                <div className="event-content">
                    <h1 className="event-heading">{event.heading}</h1>
                    <p className="event-date">
                        {event.date.month} {event.date.year}
                    </p>
                    <p className="event-location">{event.location}</p>
                    <p className="event-description">{event.description}</p>
                </div>
            </div>
        </>
    );
};

export default EventDetail;
