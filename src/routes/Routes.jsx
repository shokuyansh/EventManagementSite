import EventList from '../pages/EventList/EventList'
import EventDetail from '../pages/EventDetail/EventDetail'
import FilterEvent from '../pages/FilterEvent/FilterEvent'


export const routes = [
        {path:`/`,element:<EventList></EventList>},
        {path:`/find-events`,element:<FilterEvent></FilterEvent>},
        {path:`/events/:id`,element:<EventDetail></EventDetail>}
    
      ]

     
