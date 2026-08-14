function Education({ education }) {
    return (
        <section id="education" className="section">
            <div className="container">
                <div className="section-heading">
                    <span>05.</span>
                    <h2>Education</h2>
                </div>

                {education.map((item, index) => (
                    <div className="education-card" key={index}>
                        <div>
                            <span className="period">{item.period}</span>

                            <h3>{item.degree}</h3>

                            <h4>{item.institution}</h4>
                        </div>

                        <div className="gpa">
                            <span>GPA</span>
                            <strong>{item.gpa}</strong>
                        </div>

                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;