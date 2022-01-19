import React from 'react';


function Projects() {

    return (
        <div className="flex-row" >
            <div >
                <img
                    src={require(`../../assets/images/horiseon.jpg`)}
                    alt="Horiseon"
                    className="img-thumbnail mx-1"
                />
                <p> <a href="https://github.com/vjain83/horiseon" target="_blank" rel="noreferrer"> Horiseon</a></p>
            </div>
            <div>
                <img
                    src={require(`../../assets/images/weather-dashboard.png`)}
                    alt="Weather Dashboard"
                    className="img-thumbnail mx-1"
                />
                <p><a href="https://github.com/vjain83/weather-dashboard" target="_blank" rel="noreferrer">Weather-dashboard</a></p>
            </div>
            <div>
                <img
                    src={require(`../../assets/images/DragonsDen.png`)}
                    alt="Dragon Den"
                    className="img-thumbnail mx-1"
                />
                <p> <a href="https://github.com/vjain83/dragons-den" target="_blank" rel="noreferrer">DragonsDen</a></p>
            </div>
            <div>
                <img
                    src={require(`../../assets/images/lotr-quotes.png`)}
                    alt="lotr"
                    className="img-thumbnail mx-1"
                />
                <p><a href="https://github.com/flovelace/lord-of-the-rings-quote-generator" target="_blank" rel="noreferrer">lotr</a></p>
            </div>
        </div>
    )
}

export default Projects;