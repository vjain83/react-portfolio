import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');

            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
                console.log(`${e.target.name}`)
            } else {
                setErrorMessage('');
            }
        }
        // console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    }
    // console.log(formState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </section>

    )
}

export default ContactForm