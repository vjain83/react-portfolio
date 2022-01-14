import React from "react";

function Nav() {
    const categories = [

        {
            name: "Portfolio",
            description: "My previous projetcs"
        },
        {
            name: "Resume",
            description: "My resume",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }
    return (
        <header className="flex-row mx-1">
            <h2>
                <a href="/">
                    Varsha Jain
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-2" key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>

        </header >
    )
}
export default Nav