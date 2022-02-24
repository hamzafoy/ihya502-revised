/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './LandingPage.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';
import podcast from '../../assets/full_20220220.mp3';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isAudioPlaying: true
        }
        this.audio = new Audio(podcast)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.state.isAudioPlaying ? this.audio.play() : this.audio.pause();
        this.setState(prevState => ({
            isAudioPlaying: !prevState.isAudioPlaying
        }))
        console.log(this.state.isAudioPlaying);
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
        
                    <circle className="svg__play-circle" cx="50%" cy="50%" r="11.5"></circle>
                    <path className="svg__play-button" d="M10 8L16 12 10 16 10 8z"></path>
        
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
                    <circle className="svg__play-circle" cx="50%" cy="50%" r="11.5"></circle>
                    <path className="svg__play-button" d="M10 15L10 9"></path>
                    <path className="svg__play-button" d="M14 15L14 9"></path>
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

                    {this.state.isAudioPlaying ? audioButton.play : audioButton.pause}

                </section>

                <section className="landing-page__podcast-label">

                    <p>
                        Latest Podcast
                    </p>

                    <ul className="landing-page__podcast-label">

                        <li>
                            <strong>Date:</strong> 02-24-2022
                        </li>

                        <li>
                            <strong>Topic:</strong> Interview with Mishkat Suleiman <br/>
                        </li>

                        <li>
                            <em>CyberSecurity in our Daily Lives</em>
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