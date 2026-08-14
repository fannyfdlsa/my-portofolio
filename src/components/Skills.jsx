function Skills({ skills }) {
    return (
        <section id="skills" className="section section-dark">
            <div className="container">
                <div className="section-heading">
                    <span>02.</span>
                    <h2>Technical Skills</h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skillGroup) => (
                        <div className="skill-card" key={skillGroup.category}>
                            <h3>{skillGroup.category}</h3>

                            <div className="skill-list">
                                {skillGroup.items.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;