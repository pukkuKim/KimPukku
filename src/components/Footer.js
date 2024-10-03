import '../css/Footer.css';
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Footer () {
    return (
        <div className="footer">
            <div className='designed'>
                Designed & Built by Ji Young Kim
            </div>
            <div className='socials'>
                    <ul>
                        <li><a target="_blank" href='https://github.com/pukkuKim'> <BsGithub />   </a></li>
                        <li><a target="_blank" href="https://linkedin.com/in/jykim222"> <BsLinkedin /> </a></li>
                        <li><a target="_blank" href="https://leetcode.com/kjy8947"> <SiLeetcode /> </a></li>
                        <li><a target="_blank" href="mailto:goldie.kim89@gmail.com"> <MdEmail size={21}/>    </a></li>
                    </ul>
                </div> 
        </div>
    );
}

export default Footer