import React from "react";

function Footer() {
    return (
        <footer className="footer">

            <div>
                <a
                    href="https://github.com/vjain83"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/images/github.png")}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://csvarshajain@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/images/gmail.png")}
                        alt="gmail"
                        className="logo"
                    ></img>
                </a>
            </div>

        </footer>
    );
}

export default Footer;