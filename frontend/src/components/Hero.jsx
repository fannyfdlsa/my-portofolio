function Hero({ profile }) {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="eyebrow">HELLO, I'M</p>

                    <h1>
                        {profile.name.split(" ")[0]}
                        <br />
                        <span>
                            {profile.name.split(" ").slice(1).join(" ")}
                        </span>
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
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-photo">
                        <img
                            src="/images/images.png"
                            alt="Fanny Fadlilatunnisa"
                        />
                </div>
            </div>
        </section>
    );
}

export default Hero;