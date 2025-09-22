import '../css/Project_card.css'
import { BsGithub } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

function Project_card (props) {
    return (
        <div className="project-card">
            <div className="project-card-top">
                <img src={props.data.project_image} />
            </div>
            <div className="project-card-bottom">
                <h3>
                    {props.data.project_title}
                </h3>
                <p>
                    {props.data.project_description}
                </p>
                <p className='project-card-skills'>
                    <strong>Skills - {props.data.project_skills}</strong>
                </p>
                <div className='project-links'>
                    <ul>
                        {props.data.project_link && (<li className='link_gh'><a target="_blank" href={props.data.project_link}> <FaHome /> </a></li>)}
                        {props.data.project_github && (<li className='link_gh'><a target="_blank" href={props.data.project_github}> <BsGithub /> </a></li>)}
                    </ul>
                </div>                
            </div>
        </div>
    );
}

export default Project_card
