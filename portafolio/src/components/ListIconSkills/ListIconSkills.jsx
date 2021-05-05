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
} from 'container/iconsExport';

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
        listIconsSkills.map(({icon, alt}) => <div className="ab-iconSkill"  key={alt}>
            <img src={
                    icon
                }
                alt={
                    alt
                }

                title={alt}

            />  </div>)
    } </div>);

}

export default ListIconSkills;