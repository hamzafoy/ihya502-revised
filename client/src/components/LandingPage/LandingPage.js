/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies ::::::
::::::::::::::::::::::::::::::::::::::::*/

import './LandingPage.css';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class LandingPage extends React.Component {

    render() {

        return(
            <div className="landing-page-container">

                <h1 className="landing-page__heading">
                    IHYA502
                </h1>

                <h1 className="landing-page__heading">
                    PODCAST FOR LOUISVILLE MUSLIMS
                </h1>

                <section className="landing-page__animated-button">

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.25"
                viewBox="0 0 24 24"
                className="svg__play"
                >
                    <circle class="svg__play-circle" cx="50%" cy="50%" r="11.5"></circle>
                    <path class="svg__play-button" d="M10 8L16 12 10 16 10 8z"></path>
                </svg>

                </section>

            </div>
        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default LandingPage;