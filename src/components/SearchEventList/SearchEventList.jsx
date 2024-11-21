import EventCard from "../EventCard/EventCard"
import {eventList} from "../../utils/EventDatabase"
const SearchEventList = ({monthYear}) =>{
    const {selectedMonth,selectedYear} = monthYear;
    const filteredEvent = eventList.filter((eventDetail)=>{
        return(
            eventDetail.date.year===selectedYear &&
            eventDetail.date.month===selectedMonth
        )
    })
    const eventHappening = () =>{
        return filteredEvent.map(({id,heading,date,location,img})=>{
            return (
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
    return(
        <>
            {filteredEvent.length>0?eventHappening():<p>No event at this time</p>}
        </>
    )
}
export default SearchEventList;