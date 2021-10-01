/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './AboutUs.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';
import podcastArt from '../../assets/podcast.svg';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class AboutUs extends React.Component {

    render() {

        return(

            <>

                <div className="about-us-container">

                    <section className="about-us__content">

                        <h1 className="content__heading">
                            What is Ihya502?
                        </h1>

                        <p className="content__text">
                            Ihya502 is a podcast produced for the Louisville
                            Muslim Community. The podcast's host is Br. Hamza
                            Foy &amp; some episodes are co-hosted with Mishkat
                            Suleiman. This podcast is intended to bring together
                            local news, intelligent conversations, &amp; a revival
                            in interest in a well-rounded Islamic understanding.
                        </p>

                        <p className="content__text">
                            Episodes of Ihya502 will typically contain news 
                            announcements and topics range between community 
                            interviews, discussion of the Islamic sciences or local
                            issues, &amp; reviews of literature or media. Guests are 
                            always welcome to join and get behind the mic!
                        </p>

                    </section>

                    <img 
                    src={podcastArt}
                    alt="Art of podcast being recorded."
                    className="about-us__art"
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

export default AboutUs;