import '../css/Skill_tile.css'

function Skill_tile (props) {
    return (
        <div className="skill_tile">
            <img src={props.data.src} title={props.data.title}/>
        </div>
    )
}

export default Skill_tile