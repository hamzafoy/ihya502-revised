/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './Calendar.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';
import calendar from '../../assets/calendar_horizontal.png';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Calendar extends React.Component {

    render() {

        return(

            <>

                <div className="calendar-container">

                    <img
                    className="calendar__img"
                    alt="Calendar for the Ihya502 Podcast releases"
                    src={calendar}
                    />

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