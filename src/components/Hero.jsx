function Hero({ profile }) {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="eyebrow">HELLO, I'M</p>

                    <h1>
                        {profile.name.split(" ")[0]}
                        <br />
                        <span>{profile.name.split(" ").slice(1).join(" ")}</span>
                    </h1>

                    <h2>{profile.role}</h2>

                    <p className="hero-description">
                        {profile.description}
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>

                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hero-card">
                    <div className="code-window">
                        <div className="window-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="code-content">
                            <p>
                                <span className="purple">const</span>{" "}
                                developer = {"{"}
                            </p>
                            <p className="indent">
                                name: <span className="green">"{profile.name}"</span>,
                            </p>
                            <p className="indent">
                                role: <span className="green">"{profile.role}"</span>,
                            </p>
                            <p className="indent">
                                passion: <span className="green">"Building"</span>
                            </p>
                            <p>{"};"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;