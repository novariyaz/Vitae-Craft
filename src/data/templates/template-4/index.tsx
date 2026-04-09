import React from 'react'

import styles from '../../../styles/templates/template-4/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {

    const {name, profession, about, avatar} = useSelector((state: Tstore) => state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state: Tstore) => state.contactSlice)
    const education = useSelector((state: Tstore) => state.educationalSlice)
    const experience = useSelector((state: Tstore) => state.experienceSlice)
    const skills = useSelector((state: Tstore) => state.skillSlice)


    return (
        <div className={styles.root}>

            <div className={styles.left}>
                 <div className={styles.avatar_cont}>
                  <img className={styles.avatar} src={avatar} alt={name}></img>
                </div> 
               
                {(phone || address || email || website || optional1 || optional2) && (
                    <div className={styles.contact_cont}>
                        <h3 className={styles.title}>Contact</h3>
                        {phone && <p>{phone}</p>}
                        {address && <p>{address}</p>}
                        {email && <p>{email}</p>}
                        {website && <p>{website}</p>}
                        {optional1 && <p>{optional1}</p>}
                        {optional2 && <p>{optional2}</p>}
                    </div>
                )}
                
                {skills.fields.length > 0 && (
                    <div className={styles.container}>
                        <h3 className={styles.title}>Skills</h3>
                        {skills.fields.map((skillObj: any, index: number) => (
                            <div key={index}>
                                <p>{skillObj.skill}</p>
                                <div className={styles.bar_out}>
                                    <div className={styles.bar} style={{ width: skillObj.percentage.length > 0 ? skillObj.percentage + '%' : '0%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>

            <div className={styles.right}>

                <div className={styles.header}> 
                  <h1 className={styles.name}>{name}</h1>
                  <hr className={styles.border} />
                  <h4>{profession}</h4>
                </div>

                {about && (
                    <div className={styles.container}>
                        <h3 className={styles.title}>Profile</h3>
                        <p>{about}</p>
                    </div>
                )}

                {education.fields.length > 0 && (
                    <div className={styles.container}>
                        <h3 className={styles.title}>{education.customTitle || "Education"}</h3>
                        {education.fields.map((edu: any, index: number) => (
                            <div key={index}>
                                <h4>{edu.institute}</h4>
                                <p>{edu.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {experience.fields.length > 0 && (
                    <div className={styles.container}>
                        <h3 className={styles.title}>{experience.customTitle || "Experience"}</h3>
                        {experience.fields.map((exp: any, index: number) => (
                            <div key={index}>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <h6 className={styles.role}>{exp.role}</h6>
                                <p>{exp.experience}</p>
                            </div>
                        ))}
                    </div>
                )}

                
                 
            </div>
        </div>
    )
}

export default Index
