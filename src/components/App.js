import "../css/App.css";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Resume from "./Resume";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="App">
            <div>
                <Particles
                    id="tsparticles"
                    url="particlesjs-config.json"
                    init={particlesInit}
                    loaded={particlesLoaded}
                />
            </div>

            <header id="navbar">
                <Nav />
            </header>
            <section id="about_section">
                <About />
            </section>
            <section id="skills_section">
                <Skills />
            </section>
            <section id="experience_section">
                <Experience />
            </section>
            <section id="projects_section">
                <Projects />
            </section>
            <section id="resume_section">
                <Resume />
            </section>
            <section id="contact_section">
                <Contact />
            </section>
            <section id="footer_section">
                <Footer />
            </section>
        </div>
    );
}

export default App;
