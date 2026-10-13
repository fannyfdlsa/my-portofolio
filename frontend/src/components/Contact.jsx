function Contact({ profile }) {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <span className="eyebrow">06. WHAT'S NEXT?</span>

                <h2>Let's Work Together</h2>

                <p>
                    I'm currently open to opportunities where I can contribute
                    to software development projects and continue growing as a
                    developer.
                </p>

                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        profile.email
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
}

export default Contact;