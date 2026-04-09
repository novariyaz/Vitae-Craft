import React from 'react'
import styles from '../../../styles/templates/template-5/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {

    // eslint-disable-next-line
    const {name, profession, about, avatar} = useSelector((state: Tstore) => state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state: Tstore) => state.contactSlice)
    const education = useSelector((state: Tstore) => state.educationalSlice)
    const experience = useSelector((state: Tstore) => state.experienceSlice)
    const skills = useSelector((state: Tstore) => state.skillSlice)

    const generateStar = (percentage : string)=>{
        let star =''
        const num = parseInt(percentage);
        const round = Math.round(num/20)
        for(let i = 0; i < round; i++){
            star += ' ★'
        }
        for(let i=0; i< 5-round;i++){
            star += ' ☆'
        }
        return star;  
      }



    return (
        <div className={styles.root}>

            <div className={styles.left}>
                
                 <div className={`${styles.container} ${styles.left_cont}`}>
                     <div>
                         <h1 className={`${styles.title} ${styles.name}`}>{name}</h1>
                         <p>{profession}</p>
                     </div>
                     {about && (
                         <div className={styles.inner_container}>
                             <h3 className={styles.title}>Profile Summary</h3>
                             <p>{about}</p>
                         </div>
                     )}

                     {(address || phone || email || website || optional1 || optional2) && (
                         <div className={styles.inner_container}>
                             <h3 className={styles.title}>Contact Details</h3>
                             {address && <p>{address}</p>}
                             {phone && <p>{phone}</p>}
                             {email && <p>{email}</p>}
                             {website && <p>{website}</p>}
                             {optional1 && <p>{optional1}</p>}
                             {optional2 && <p>{optional2}</p>}
                         </div>
                     )}
                 </div>
            </div>

            <div className={styles.right}>
                  
                    {skills.fields.length > 0 && (
                        <div className={styles.container}>
                            <h3 className={styles.title}>Skills</h3>
                            <ul className={styles.skill_list}>
                                {skills.fields.map((skillObj: any, index: number) => (
                                    <li key={index} className={styles.skill_row}>
                                        <div>
                                            <p>{skillObj.skill}</p>
                                        </div>
                                        <div className={styles.star}>
                                            {generateStar(skillObj.percentage)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                   {experience.fields.length > 0 && (
                       <div className={`${styles.container} ${styles.container_space}`}>
                            <h3 className={styles.title}>{experience.customTitle || "Experience"}</h3>
                            {experience.fields.map((exp: any, index: number) => (
                                <div key={index}>
                                    <h4 className={styles.company}>{exp.company}</h4>
                                    <h6 className={styles.role}>{exp.role}</h6>
                                    <p className={styles.desc}>{exp.experience}</p>
                                </div>
                            ))}
                       </div>
                   )}

                   {education.fields.length > 0 && (
                       <div className={`${styles.container} ${styles.container_space}`}>
                            <h3 className={styles.title}>{education.customTitle || "Education"}</h3>
                            {education.fields.map((edu: any, index: number) => (
                                <div key={index}>
                                    <h4 className={styles.company}>{edu.institute}</h4>
                                    <p className={styles.desc}>{edu.description}</p>
                                </div>
                            ))}
                       </div>
                   )}
            </div>
        </div>
    )
}

export default Index
