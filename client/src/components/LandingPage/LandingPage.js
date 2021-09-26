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
                    TEST HEADING HERE.
                </h1>

                <p className="landing-page__text">
                    Test your regular text fonts here.
                </p>

            </div>
        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default LandingPage;