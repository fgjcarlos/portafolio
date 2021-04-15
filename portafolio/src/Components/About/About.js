import './about.css';
import {useDispatch} from 'react-redux';
import {
    iconJS,
    iconNode,
    iconHtml5,
    iconReact,
    iconMysql,
    iconCss3,
    iconNpm
} from '../../Utils/iconsExport';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; //
import { useState } from 'react';

const About = () => {

    const dispatch = useDispatch();
    dispatch({type: 'common'});

    const listIconsSkills = [
        {
            icon: iconJS,
            alt: 'JavaScript'
        },
        {
            icon: iconNode,
            alt: 'Node Js'
        },
        {
            icon: iconHtml5,
            alt: 'HTML5'
        },
        {
            icon: iconReact,
            alt: 'React'
        }, {
            icon: iconMysql,
            alt: 'Mysql'
        }, {
            icon: iconCss3,
            alt: 'Css3'
        }, {
            icon: iconNpm,
            alt: 'Npm'
        },
    ];


    const [visible, setVisible] = useState(false);
    const [activeToolTip, setActiveToolTip] = useState('');

    const show = (skill) => {
        setVisible(true);
        setActiveToolTip(skill);
    }
    const hide = () => {
        setVisible(false);
        setActiveToolTip('');
    }

    return (
        <div className="ab-container">

            <div className="ab-jumbotron">

                <div className="ab-aboutMe">
                    <div className="ab-avatar"/>
                    <div className="ab-description">
                        <h2>Sobre mí</h2>
                        <p>Where can I get some?
                                                                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                                                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                 <br/>
                                                                                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </div>

                </div>

                <hr className="ab-lineaSeccion"/>

                <div className="ab-skills">
                    <h2>Skills</h2>

                    <div className="ab-listSkils">


                        {
                        listIconsSkills.map(skill => <div className="ab-iconSkill">

                            <Tippy  key={skill.alt} animation={true} content={skill.alt} visible={visible && (activeToolTip === skill.alt)}>
                                <img src={skill.icon}
                                    alt={skill.alt}
                                    key={skill.alt}
                                    onMouseEnter={() => show(skill.alt)}
                                    onMouseLeave={() => hide(skill.alt)}
                                    />
                            </Tippy>

                        </div>)
                    } </div>


                </div>


            </div>

        </div>
    );
}


export default About;
