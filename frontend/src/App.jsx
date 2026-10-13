import { useEffect, useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [profile, setProfile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [projects, setProjects] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const [
                    profileResponse,
                    skillsResponse,
                    experiencesResponse,
                    projectsResponse,
                    educationResponse,
                ] = await Promise.all([
                    api.get("/portfolio/profile"),
                    api.get("/portfolio/skills"),
                    api.get("/portfolio/experiences"),
                    api.get("/portfolio/projects"),
                    api.get("/portfolio/education"),
                ]);

                setProfile(profileResponse.data.data);
                setSkills(skillsResponse.data.data);
                setExperiences(experiencesResponse.data.data);
                setProjects(projectsResponse.data.data);
                setEducation(educationResponse.data.data);
            } catch (error) {
                console.error("Failed to fetch portfolio data:", error);
            }
        };

        fetchPortfolio();
    }, []);

    if (!profile) {
        return (
            <div className="loading">
                <div className="loader"></div>
                <p>Loading portfolio...</p>
            </div>
        );
    }

    return (
        <>
            <Navbar />

            <main>
                <Hero profile={profile} />
                <About profile={profile} />
                <Skills skills={skills} />
                <Experience experiences={experiences} />
                <Projects projects={projects} />
                <Education education={education} />
                <Contact profile={profile} />
            </main>

            <Footer profile={profile} />
        </>
    );
}

export default App;