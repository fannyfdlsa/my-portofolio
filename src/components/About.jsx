function About({ profile }) {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-heading">
                    <span>01.</span>
                    <h2>About Me</h2>
                </div>

                <div className="about-grid">
                    <div>
                        <p>
                            I am an Informatics Engineering graduate with
                            experience in software development and data
                            analysis projects.
                        </p>

                        <p>
                            My main interests are backend development, RESTful
                            API development, database management, and web
                            application development.
                        </p>

                        <p>
                            I enjoy building reliable applications and
                            continuously improving my technical skills through
                            real-world projects.
                        </p>
                    </div>

                    <div className="about-info">
                        <div>
                            <span>Location</span>
                            <strong>{profile.location}</strong>
                        </div>

                        <div>
                            <span>Role</span>
                            <strong>{profile.role}</strong>
                        </div>

                        <div>
                            <span>Email</span>
                            <strong>{profile.email}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;