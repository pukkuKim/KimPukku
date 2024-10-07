import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Resume.css";
import { Button, Icon } from "semantic-ui-react";

function Resume() {
	const [triggerFetch, setTriggerFetch] = useState(false);
	const img_src = require("../assets/resume_graphic1.png");
	const resume_src = require("../assets/Resume.pdf");

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (triggerFetch) {
					const response = await axios.get(
						process.env.REACT_APP_GOOGLE_CLOUD_FUNCTION_2_URL
					);
					console.log(response.data);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [triggerFetch]);

	const handleButtonClick = () => {
		setTriggerFetch(true);
	};

	return (
		<div className="resume">
			<div className="column_65">
				<div className="column_65_text">
					<h1>Have a look at my resume 📄</h1>
				</div>
				<div className="resume_btn">
					<Button
						icon
						labelPosition="right"
						size="huge"
						onClick={handleButtonClick}
					>
						<Icon name="down arrow" />
						<a href={resume_src} download="JiYoung_Kim_Resume">
							Resume.pdf
						</a>
					</Button>
				</div>
			</div>
			<div className="column_35">
				<img src={img_src} className="resume_graphic" />
			</div>
		</div>
	);
}

export default Resume;
