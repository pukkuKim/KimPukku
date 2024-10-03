import exp from "../assets/exp.json";

function Job_banner(props) {
	var bgColor = exp.find((xp) => xp.name === props.name).color;
	var logoLink = exp.find((xp) => xp.name === props.name).logo;

	return (
		<div style={{ backgroundColor: bgColor }} className="job_header">
			<img className="job_logo" src={logoLink} alt="exp" />
		</div>
	);
}

export default Job_banner;
