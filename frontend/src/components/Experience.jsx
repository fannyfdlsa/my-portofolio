function Experience({ experiences }) {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-heading">
                    <span>03.</span>
                    <h2>Experience</h2>
                </div>

                <div className="timeline">
                    {experiences.map((experience, index) => (
                        <article className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>

                            <div className="experience-content">
                                <span className="period">
                                    {experience.period}
                                </span>

                                <h3>{experience.position}</h3>

                                <h4>{experience.company}</h4>

                                <ul>
                                    {experience.description.map(
                                        (item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;