import React from 'react';

function About() {
    return (
        <section>

            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>

            <div className="center">
                <img
                    src={require('../../assets/images/profilePicture.jpg')}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div>

                <p>
                    I am a full stack web developer looking to build a more
                    intuitive user experience on the web. I recently earned
                    a certificate in full stack development from the
                    University of Toronto bootcamp, with newly developed
                    skills in JavaScript, CSS, React.js, Nodejs, MERN and responsive web
                    design.
                </p>
                <p>
                    I am very enthusiastic and hard working person. I am always ready to give my
                    full effort ot achieve the desired result. The coding bootcamp is all new field to explore
                    and I am hoping to have spectular future in the software industry.
                </p>

            </div>
        </section >
    );
}

export default About;