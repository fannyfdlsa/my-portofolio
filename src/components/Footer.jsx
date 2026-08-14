function Footer({ profile }) {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>
                    © {new Date().getFullYear()} {profile.name}
                </p>

                <div>
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
        </footer>
    );
}

export default Footer;