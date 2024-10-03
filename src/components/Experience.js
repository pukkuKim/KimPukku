import { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import Job_exp from "./Job_exp";
import Job_banner from "./Job_banner";
import "../css/Experience.css";

function Experience() {
    const [activeItem, setActiveItem] = useState("BGC Engineering");
    const [isMobileView, setIsMobileView] = useState(false);

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768 ? true : false);
    };

    useEffect(() => {
        setIsMobileView(window.innerWidth <= 768 ? true : false);
        window.addEventListener("resize", handleResize);
    }, []);

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (
        <div className="experience">
            <div className="title_row">
                <h1>
                    <hr className="left_line" />
                    Experience & Education
                    <hr className="right_line" />
                </h1>
                <p>Things I've Done</p>
            </div>
            <div className="experienceWrapper">
                <div className="column_25">
                    <Job_banner name={activeItem} />

                    <div className="column_25_menu">
                        <Menu
                            className={
                                isMobileView
                                    ? "large pointing secondary temp"
                                    : "vertical large pointing secondary"
                            }
                        >
                            <Menu.Item
                                id="exp4"
                                name="BGC Engineering"
                                active={activeItem === "BGC Engineering"}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                id="exp3"
                                name="Calabrio"
                                active={activeItem === "Calabrio"}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                id="edu2"
                                name="University of British Columbia"
                                active={
                                    activeItem ===
                                    "University of British Columbia"
                                }
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                id="exp2"
                                name="Canadian Armed Forces"
                                active={activeItem === "Canadian Armed Forces"}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                id="exp1"
                                name="Piano Instructor"
                                active={activeItem === "Piano Instructor"}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                id="edu1"
                                name="McGill University"
                                active={activeItem === "McGill University"}
                                onClick={handleItemClick}
                            />
                        </Menu>
                    </div>
                </div>
                <div className="column_75">
                    <div className="column_75_exp">
                        <Job_exp name={activeItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
