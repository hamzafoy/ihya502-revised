/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './Contact.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Contact extends React.Component {

    render() {

        return(

            <>

                <div className="contact-container">

                    <h1 className="contact__heading">
                        Leave Feedback
                    </h1>

                    <form noValidate className="contact-form">

                        <section className="contact-form__group">
                            
                            <h1 className="input__label">
                                Name:
                            </h1>

                            <input
                            type="text"
                            placeholder="Type your name here. . ."
                            name="commenter_name"
                            className="contact-form__input"
                            />

                            <h1 className="input__label">
                                Email:
                            </h1>

                            <input
                            type="text"
                            placeholder="Type your email here. . ."
                            name="commenter_email"
                            className="contact-form__input"
                            />

                        </section>

                        <section className="contact-form__group">

                            <h1 className="input__label">
                                Feedback:
                            </h1>

                            <textarea
                            type="text"
                            placeholder="Type your feedback here. . ."
                            name="comment"
                            className="contact-form__textarea"
                            />

                        </section>

                    </form>

                    <p className="contact__text">
                        Would you like to hop on the mic?<br/>
                        Contact the host on one of the social media platforms below!
                    </p>

                </div>

                <NavBar/>

            </>

        )

    }

}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Contact;