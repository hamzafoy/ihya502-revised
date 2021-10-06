/*::::::::::::::::::::::::::::::::::::::::
::::::  Importing CSS, Dependencies  :::::
::::::::::::::::::::::::::::::::::::::::*/

import './Contact.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';
import axios from 'axios';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
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
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment
        }
        console.log(data);
        this.setState({
            name: '',
            email: '',
            comment: ''
        })
        axios.post('https://ihya502.herokuapp.com/api', data)
            .then(res => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(`Error in creating your feedback!`)
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
                            name="name"
                            className="contact-form__input"
                            value={this.state.name}
                            onChange={this.onChange}
                            />

                            <h1 className="input__label">
                                Email:
                            </h1>

                            <input
                            type="text"
                            placeholder="Type your email here. . ."
                            name="email"
                            className="contact-form__input"
                            value={this.state.email}
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