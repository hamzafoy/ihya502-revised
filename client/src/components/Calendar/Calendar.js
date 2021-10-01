/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './Calendar.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Calendar extends React.Component {

    render() {

        return(

            <>

                <div className="calendar-container">

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