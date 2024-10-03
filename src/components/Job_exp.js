import exp from "../assets/exp.json";

function Job_exp(props) {
	return (
		<>
			{exp.map((xp, index) => {
				if (props.name === xp.name) {
					return (
						<div>
							<span className="exp_title">{xp.title}</span>
							<span className="exp_company">{xp.company}</span>
							<br></br>
							<br></br>
							<span>
								{xp.from} - {xp.to}
							</span>
							<br></br>
							<br></br>
							<div className="points">
								{xp.work.map((point, i) => {
									return <p>{point}</p>;
								})}
							</div>
						</div>
					);
				}
			})}
		</>
	);
}

export default Job_exp;
