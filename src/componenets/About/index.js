import React from 'react';

function About() {
    return (
        <section className="my-5">
            <h2 id="about">About me!</h2>
            <div className="center">
                <img
                    src={require('../../assets/images/profilePicture.jpg')}
                    alt="about-me"
                    className="photo"
                />
            </div>
        </section>
    );
}

export default About;