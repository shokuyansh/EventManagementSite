import EventCard from "../../components/EventCard/EventCard"
import { eventList } from "../../utils/EventDatabase"
import Navigation from "../../components/Navigation/Navigation"
import './EventList.css';
const EventList = ()=>{
    const event = () =>{
        return  eventList.map(({id,heading,date,location,img})=>{
            return(
                <EventCard 
                key={id}
                id={id}
                heading = {heading}
                date = {date}
                location = {location}
                img = {img}
                ></EventCard>
            )
        })
    }
    return (
        <> 
        
        <div className="event-list-wrapper">
            <Navigation></Navigation>
                <div className="event-list">
                {eventList.length>0?(event()):<p>No events available</p>}
                </div>
            </div>
        </>
    )
}
export default EventList