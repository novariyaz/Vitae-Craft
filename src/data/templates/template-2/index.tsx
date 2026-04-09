import React from 'react'

import styles from '../../../styles/templates/template-2/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {

    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    const education = useSelector((state : Tstore)=> state.educationalSlice)
    const experience = useSelector((state : Tstore)=> state.experienceSlice)
    const skills = useSelector((state : Tstore)=> state.skillSlice)

    return (
       <div>
        <div className={styles.root}>
            <div className={styles.left}>
                 <div className={styles.name_cont}>
                 <p className={`${styles.heading} ${styles.name}`}>{name}</p>
                 <hr className={styles.border} />
                 <p className={styles.profession}>{profession}</p>
                </div>

                <div className={styles.content}>
                    <div>
                        <p className={styles.heading}>Personal Profile</p>
                        <hr className={styles.border} />
                        <p className={styles.desc}>{about}</p>
                    </div>
                    <br />
                    <div>
                        <p className={styles.heading}>{experience.customTitle.length > 0 ? experience.customTitle : "Experience"}</p>
                        <hr className={styles.border} />
                        {
                            experience.fields.map((experience : any, index : number)=>{
                                return(
                                    <div key={index}>
                                        <h4 className={styles.company}>{experience.company}</h4>
                                        <h6 className={styles.role}>{experience.role}</h6>
                                        <p className={styles.desc}>{experience.experience}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br />  

                    <div>
                        <p className={styles.heading}>{education.customTitle || "Educational Background"}</p>
                        <hr className={styles.border} />

                        {
                            education.fields.map((edu : any, index : number)=>{
                                return(
                                    <div key={index}>
                                        <h4>{edu.institute}</h4>
                                        <p className={styles.desc}>{edu.description}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className={styles.right}>
                 <div className={styles.avatar_cont}>
                     {avatar && <img className={styles.avatar} src={avatar} alt={name}></img>}
                 </div>

                 <div className={styles.content}>
                     <div>

                       <p className={styles.heading}>Skills</p>
                       <hr className={styles.border} />
                       
                       {
                           skills.fields.map((skill : any, index : number)=>{
                               if(skill.skill)
                               return(
                                <div key={index} className={styles.skill_cont}>
                                  <p>{skill.skill}</p>
                                  <div className={styles.bar_out}>
                                     <div className={styles.bar} style={{width : skill.percentage ? `${parseInt(skill.percentage)}%` : '0%'}}></div>
                                  </div>
                                </div>
                               )
                               return null
                           })
                       }
                     </div>
                 </div>
            </div>
        </div>
       
        <div className={styles.contact_cont}>
          {email && <p>{email}</p>}
          {website && <p>{website}</p>}
          {address && <p>{address}</p>}
          {phone && <p>{phone}</p>}
          {optional1 && <p>{optional1}</p>}
          {optional2 && <p>{optional2}</p>}          
        </div>
       
    </div> 
    )
}

export default Index
