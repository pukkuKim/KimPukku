import "../css/About.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function About() {
    const image_src = require("../assets/photo.jpeg");
    return (
        <div className="about">
            <div className="column">
                <div className="avatar">
                    <img
                        src={image_src}
                        className="avatar_image"
                        alt="Avatar"
                    />
                </div>
                <div className="socials">
                    <ul>
                        <li>
                            <a
                                target="_blank"
                                href="https://github.com/pukkuKim"
                            >
                                {" "}
                                <BsGithub />{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://linkedin.com/in/jykim222"
                            >
                                {" "}
                                <BsLinkedin />{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://leetcode.com/kjy8947"
                            >
                                {" "}
                                <SiLeetcode />{" "}
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="mailto:goldie.kim89@gmail.com"
                            >
                                {" "}
                                <MdEmail size={21} />{" "}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="intro">
                    <p>👋🏻 Hi, I'm</p>
                    <h1>Ji Young Kim</h1>
                    <p>Software Developer</p>
                    <p>and a BCS Grad from UBC</p>
                </div>
            </div>
        </div>
    );
}

export default About;
