import './listIconSkills.css';
import {
    iconJS,
    iconNode,
    iconHtml5,
    iconReact,
    iconMysql,
    iconCss3,
    iconNpm,
    iconGit
} from '../../services/iconsExport';


const ListIconSkills = () => {


    const listIconsSkills = [
        iconJS,
        iconNode,
        iconHtml5,
        iconReact,
        iconMysql,
        iconCss3,
        iconNpm,
        iconGit
    ];


    return (<div className="ab-listSkils"> {
        listIconsSkills.map(skill => <div className="ab-iconSkill"> {/* <Tippy  key={skill.alt} animation={true} content={skill.alt} visible={visible && (activeToolTip === skill.alt)}> */}
            <img src={
                    skill.icon
                }
                alt={
                    skill.alt
                }
                key={
                    skill.alt
                }
                // onMouseEnter={() => show(skill.alt)}
                // onMouseLeave={() => hide(skill.alt)}
            /> {/* </Tippy> */} </div>)
    } </div>);

}

export default ListIconSkills;
