import "../css/Contact.css";
import { Form } from "semantic-ui-react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from "react";

function Contact() {
	const [graphicSize, setGraphicSize] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleResize = () => {
		setGraphicSize(window.innerWidth <= 768 ? "200px" : "300px");
	};

	useEffect(() => {
		setGraphicSize(window.innerWidth <= 768 ? "200px" : "300px");
		window.addEventListener("resize", handleResize);
	}, []);

	const animation_src = require("../assets/2-about.json");

	const handleInputChange = (e, { name, value }) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async () => {
		const response = await fetch(
			process.env.REACT_APP_DISCORD_WEBHOOK_URL,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					content: `
성함: ${formData.name}
이메일: ${formData.email}
제목: ${formData.subject}
내용: ${formData.message}
======================================
				    `,
				}),
			}
		);

		if (response.ok) {
			alert("Form submitted successfully!");
		} else {
			const errorData = await response.json();
			console.error("Submission error:", errorData);
			alert("Form submission failed. Check console for details.");
		}
	};

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
					method="POST"
					onSubmit={handleSubmit}
				>
					<Form.Group widths="equal">
						<Form.Input
							id="form-name"
							name="name"
							fluid
							placeholder="Name"
							value={formData.name}
							onChange={handleInputChange}
						/>
						<Form.Input
							id="form-email"
							name="email"
							fluid
							placeholder="Email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</Form.Group>
					<Form.Input
						id="form-subject"
						name="subject"
						fluid
						placeholder="Subject"
						value={formData.subject}
						onChange={handleInputChange}
					/>
					<Form.TextArea
						id="form-message"
						name="message"
						placeholder="Type your message here"
						value={formData.message}
						onChange={handleInputChange}
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
