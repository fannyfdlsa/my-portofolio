function Projects({ projects }) {
    return (
        <section id="projects" className="section section-dark">
            <div className="container">
                <div className="section-heading">
                    <span>04.</span>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>
                            <div className="project-top">
                                <span className="project-number">
                                    0{project.id}
                                </span>

                                <span className="project-category">
                                    {project.category}
                                </span>
                            </div>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech-list">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub ↗
                                </a>

                                {project.demo !== "#" && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo ↗
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;