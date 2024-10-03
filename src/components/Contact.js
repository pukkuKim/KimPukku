import "../css/Contact.css";
import { Form } from "semantic-ui-react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";

function Contact() {
	const [graphicSize, setGraphicSize] = useState(false);

	const handleResize = () => {
		setGraphicSize(window.innerWidth <= 768 ? "200px" : "300px");
	};

	useEffect(() => {
		setGraphicSize(window.innerWidth <= 768 ? "200px" : "300px");
		window.addEventListener("resize", handleResize);
	}, []);

	const animation_src = require("../assets/2-about.json");
	return (
		<div className="contact">
			<div className="column1">
				<div className="column1-text">
					<h1>Interested in working together? 👩🏻‍💻</h1>
				</div>
				<div className="column1-graphic">
					<Player
						autoplay
						loop
						src={animation_src}
						style={{ height: graphicSize, width: graphicSize }}
					></Player>
				</div>
			</div>
			<div className="column2">
				<Form
					className="contact-form"
					size="large"
					action="https://formsubmit.co/el/pepaza"
					method="POST"
				>
					<Form.Group widths="equal">
						<Form.Input
							id="form-name"
							name="name"
							fluid
							placeholder="Name"
						/>
						<Form.Input
							id="form-email"
							name="email"
							fluid
							placeholder="Email"
						/>
					</Form.Group>
					<Form.Input
						id="form-subject"
						name="_subject"
						fluid
						placeholder="Subject"
					/>
					<Form.TextArea
						id="form-message"
						name="message"
						placeholder="Type your message here"
					/>
					<Form.Button className="formSubmitButton">
						Submit
					</Form.Button>
				</Form>
			</div>
		</div>
	);
}

export default Contact;
