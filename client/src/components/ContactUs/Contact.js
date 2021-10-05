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
    constructor() {
        super();
        this.state = {
            commenter_name: '',
            commenter_email: '',
            comment: ''
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        const data = {
            name: this.state.commenter_name,
            email: this.state.commenter_email,
            feedback: this.state.comment
        }
        console.log(data);
        this.setState({
            commenter_name: '',
            commenter_email: '',
            comment: ''
        })
    }

    render() {

        return(

            <>

                <div className="contact-container">

                    <h1 className="contact__heading">
                        Leave Feedback
                    </h1>

                    <form 
                    noValidate 
                    className="contact-form"
                    onSubmit={this.onSubmit}
                    >

                        <section className="contact-form__group">
                            
                            <h1 className="input__label">
                                Name:
                            </h1>

                            <input
                            type="text"
                            placeholder="Type your name here. . ."
                            name="commenter_name"
                            className="contact-form__input"
                            value={this.state.commenter_name}
                            onChange={this.onChange}
                            />

                            <h1 className="input__label">
                                Email:
                            </h1>

                            <input
                            type="text"
                            placeholder="Type your email here. . ."
                            name="commenter_email"
                            className="contact-form__input"
                            value={this.state.commenter_email}
                            onChange={this.onChange}
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
                            value={this.state.comment}
                            onChange={this.onChange}
                            />

                            <input
                            type="submit"
                            className="contact-form__submit"
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