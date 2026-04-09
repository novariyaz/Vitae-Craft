import React from 'react'

import styles from '../../../styles/templates/template-6/index.module.css'

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
            
            <div className={styles.header}>
                <div className={styles.avatar_cont}>
                    <img className={styles.avatar} src={avatar} alt={name}></img>
                </div>

                <div className={styles.intro_cont}>
                    <h1 className={styles.title}>{name}</h1>
                    <h4 className={styles.title}>{profession}</h4>
                </div>
            </div>

            <div className={styles.content}>

                <div className={styles.left}>

                    {about && (
                        <div className={styles.container}>
                            <h3 className={styles.title}>Profile</h3>
                            <p>{about}</p>
                        </div>
                    )}
                    
                    {experience.fields.length > 0 && (
                        <div className={styles.container}>
                            <h3 className={styles.title}>{experience.customTitle || "Experience"}</h3>
                            {experience.fields.map((exp: any, index: number) => (
                                <div key={index}>
                                    <h3 className={styles.company}>{exp.company}</h3>
                                    <h5 className={styles.role}>{exp.role}</h5>
                                    <p className={styles.desc}>{exp.experience}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {(email || address || phone || website || optional1 || optional2) && (
                        <div className={styles.coontainer}>
                            <h3 className={styles.title}>Contact</h3>
                            {email && <p>{email}</p>}
                            {address && <p>{address}</p>}
                            {phone && <p>{phone}</p>}
                            {website && <p>{website}</p>}
                            {optional1 && <p>{optional1}</p>}
                            {optional2 && <p>{optional2}</p>}
                        </div>
                    )}

                </div>

                <div className={styles.right}>
                    
                    {education.fields.length > 0 && (
                        <div className={styles.container}>
                            <h3 className={styles.title}>{education.customTitle || "Education"}</h3>
                            {education.fields.map((edu: any, index: number) => (
                                <div key={index}>
                                    <h4 className={styles.company}>{edu.institute}</h4>
                                    <p className={styles.desc}>{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {skills.fields.length > 0 && (
                        <div className={styles.container}>
                            <h3 className={styles.title}>Skills</h3>
                            {skills.fields.map((skillObj: any, index: number) => (
                                <p key={index}>{skillObj.skill}</p>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <div className={styles.footer}></div>
        </div>
    )
}

export default Index
