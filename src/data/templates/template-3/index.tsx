import React from 'react'
import styles from '../../../styles/templates/template-3/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'


function Index() {
    
    // eslint-disable-next-line
    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    const education = useSelector((state : Tstore)=> state.educationalSlice)
    const experience = useSelector((state : Tstore)=> state.experienceSlice)
    const skills = useSelector((state : Tstore)=> state.skillSlice)

    return (
        <div className={styles.root}>

            <div className={styles.name}>
                <h1 >{name}</h1>
                <h4>{profession}</h4>
            </div>

            <div className={styles.contact_cont}>
                  {address && <p>{address}</p>}
                  {address && phone && <p className={styles.separator}>⋅</p>}
                  {phone && <p>{phone}</p>}
                  {phone && email && <p className={styles.separator}>⋅</p>}
                  {email && <p>{email}</p>}
                  {email && website && <p className={styles.separator}>⋅</p>}
                  {website && <p>{website}</p>}
                  {website && optional1 && <p className={styles.separator}>⋅</p>}
                  {optional1 && <p>{optional1}</p>}
                  {optional1 && optional2 && <p className={styles.separator}>⋅</p>}
                  {optional2 && <p>{optional2}</p>}
            </div>

            <div className={styles.about_container}>
                <p>{about}</p>
            </div>
            <hr />

            <div>
                <h3 className={styles.title}>{experience.customTitle || "Experience"}</h3>
                {
                    experience.fields.map((exp : any, index : number)=>{
                        return(
                            <div key={index}>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <h6 className={styles.role}>{exp.role}</h6>
                                <p>{exp.experience}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
               <h3 className={styles.title}>{education.customTitle || "Education"}</h3>

               {
                    education.fields.map((edu : any, index : number)=>{
                        return(
                            <div key={index}>
                                <h4 className={styles.company}>{edu.institute}</h4>
                                <p>{edu.description}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
               <h3 className={styles.title}>Skills</h3>
               <ul className={styles.skills_list}>
               {
                   skills.fields.map((skill, index)=>{
                       return  <li key={index}>{skill.skill}</li>
                   })
               }
               </ul>
            </div>
        </div>
    )
}

export default Index
