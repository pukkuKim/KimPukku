import { Link } from "react-scroll";
import "../css/Nav.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

function Nav() {
    const logo = require("../assets/kimpukku.png");

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const hideLinks = () => {
        setShowLinks(false);
    };

    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="nav__container__actions">
            <a className="logoContainer" href="/">
                <img className="logo_image" src={logo} />
            </a>

            <ul className={showLinks ? "links" : "links hide"}>
                <li>
                    <Link
                        activeClass="active"
                        smooth
                        spy
                        to="about_section"
                        onClick={hideLinks}
                    >
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        smooth
                        spy
                        to="skills_section"
                        onClick={hideLinks}
                    >
                        SKILLS
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        smooth
                        spy
                        to="experience_section"
                        onClick={hideLinks}
                    >
                        EXPERIENCE
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        smooth
                        spy
                        to="projects_section"
                        onClick={hideLinks}
                    >
                        PROJECTS
                    </Link>
                </li>
                {/* <li>
                    <Link
                        activeClass="active"
                        smooth
                        spy
                        to="resume_section"
                        onClick={hideLinks}
                    >
                        RESUME
                    </Link>
                </li> */}
                <li>
                    <Link
                        activeClass="active"
                        smooth
                        spy
                        to="contact_section"
                        onClick={hideLinks}
                    >
                        CONTACT ME
                    </Link>
                </li>
            </ul>

            <div className="sideBarIcon" onClick={toggleLinks}>
                <IoMenu size={25} />
            </div>
        </nav>
    );
}

export default Nav;
