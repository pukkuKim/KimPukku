import { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import { VscBracketDot } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import Skill_tile from "./Skill_tile";
import languages from "../assets/languages.json";
import web_dev from "../assets/web_dev.json";
import misc from "../assets/miscellaneous.json";

import "../css/Skills.css";

class Skills extends Component {
	state = { activeIndex: 0 };

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	render() {
		const { activeIndex } = this.state;

		return (
			<div className="skills">
				<div className="title_row">
					<h1>
						<hr className="left_line" />
						Skills
						<hr className="right_line" />
					</h1>
					<p>My Tech Stack</p>
				</div>
				<Accordion>
					<Accordion.Title
						active={activeIndex === 0}
						index={0}
						onClick={this.handleClick}
					>
						<a>
							<VscBracketDot />
						</a>
						<div className="title_text">
							<p>Languages</p>
							<span>4 years</span>
						</div>
						<a className="drop_icon">
							<Icon name="dropdown" />
						</a>
					</Accordion.Title>

					<Accordion.Content active={activeIndex === 0}>
						<div className="skill_logos">
							{languages.map((lang) => {
								return <Skill_tile data={lang} />;
							})}
						</div>
					</Accordion.Content>

					<Accordion.Title
						active={activeIndex === 1}
						index={1}
						onClick={this.handleClick}
					>
						<a>
							<FaLaptopCode />
						</a>
						<div className="title_text">
							<p>Web Development</p>
							<span>3 years</span>
						</div>
						<a className="drop_icon">
							<Icon name="dropdown" />
						</a>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 1}>
						<div className="skill_logos">
							{web_dev.map((lang) => {
								return <Skill_tile data={lang} />;
							})}
						</div>
					</Accordion.Content>

					<Accordion.Title
						active={activeIndex === 2}
						index={2}
						onClick={this.handleClick}
					>
						<a>
							<FaTools />
						</a>
						<div className="title_text">
							<p>Miscellaneous</p>
							<span>3 years</span>
						</div>
						<a className="drop_icon">
							<Icon name="dropdown" />
						</a>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 2}>
						<div className="skill_logos">
							{misc.map((lang) => {
								return <Skill_tile data={lang} />;
							})}
						</div>
					</Accordion.Content>
				</Accordion>
			</div>
		);
	}
}

export default Skills;
