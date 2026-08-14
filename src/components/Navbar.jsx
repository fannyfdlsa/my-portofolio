import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        ["About", "#about"],
        ["Skills", "#skills"],
        ["Experience", "#experience"],
        ["Projects", "#projects"],
        ["Education", "#education"],
        ["Contact", "#contact"],
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    F<span>.</span>
                </a>

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {links.map(([name, href]) => (
                        <a
                            key={name}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;