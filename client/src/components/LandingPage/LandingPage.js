/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './LandingPage.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAudioPlaying: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState(prevState => ({
            isAudioPlaying: !prevState.isAudioPlaying
        }))
    }

    render() {

        /*::::::::::::::::::::::::::::::::::::::::
        :::  Storing Play/Pause SVGs to render  ::
        ::::::::::::::::::::::::::::::::::::::::*/

        const audioButton = {
            play: (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.25"
                viewBox="0 0 24 24"
                className="svg__play"
                onClick={this.handleChange}
                >
        
                    <circle class="svg__play-circle" cx="50%" cy="50%" r="11.5"></circle>
                    <path class="svg__play-button" d="M10 8L16 12 10 16 10 8z"></path>
        
                </svg>
            ),
            pause: (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.25"
                viewBox="0 0 24 24"
                className="svg__play"
                onClick={this.handleChange}
                >
                    <circle class="svg__play-circle" cx="50%" cy="50%" r="11.5"></circle>
                    <path class="svg__play-button" d="M10 15L10 9"></path>
                    <path class="svg__play-button" d="M14 15L14 9"></path>
                </svg>
            )
        }

        return(

            <>

            <div className="landing-page-container">

                <h1 className="landing-page__heading">
                    IHYA502
                </h1>

                <h1 className="landing-page__heading">
                    PODCAST FOR LOUISVILLE MUSLIMS
                </h1>

                <section className="landing-page__animated-button">

                    {this.state.isAudioPlaying ? audioButton.pause : audioButton.play}

                </section>

                <section className="landing-page__podcast-label">

                    <p>
                        Latest Podcast
                    </p>

                    <ul className="landing-page__podcast-label">

                        <li>
                            <strong>Date:</strong> 08-13-2021
                        </li>

                        <li>
                            <strong>Topic:</strong> 'Reading between the Lines':
                        </li>

                        <li>
                            Review of 'What Tech Calls Thinking'
                        </li>

                    </ul>

                </section>

            </div>

            <NavBar/>

            </>
        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default LandingPage;