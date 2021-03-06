/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './Calendar.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';
import calendarHorizontal from '../../assets/calendar_horizontal.png';
import calendarVertical from '../../assets/calendar_vertical.png';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Calendar extends React.Component {

    render() {

        const calendars = {
            horizontal: (
                <img
                className="calendar__img"
                alt="Calendar for the Ihya502 Podcast releases"
                src={calendarHorizontal}
                />
            ),
            vertical: (
                <img
                className="calendar__img-vertical"
                alt="Calendar for the Ihya502 Podcast releases"
                src={calendarVertical}
                />
            )
        }

        return(

            <>

                <div className="calendar-container">

                    {window.innerWidth > 1125 ? calendars.horizontal : calendars.vertical}

                </div>

                <NavBar/>

            </>

        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Calendar;