import React from 'react'
import styles from '../../../styles/templates/template-1/index.module.css'


import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {


      const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
      const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
      const education = useSelector((state : Tstore)=> state.educationalSlice)
      const experience = useSelector((state : Tstore)=> state.experienceSlice)
      const skills = useSelector((state : Tstore)=> state.skillSlice)


      const generateStar = (percentage : string)=>{
        let star =''
        const num = parseInt(percentage);
        const round = Math.round(num/20)
        for(let i = 0; i < round; i++){
            star += ' ✩'
        }
        return star;  
      }


    return (
        <div className={styles.root}>

            <div className={styles.left}>

                <div className={styles.name_cont}>
                  <h1 className={styles.name}>{name}</h1>
                  <h4 className={styles.profession}>{profession}</h4>
                </div>

                <div className={styles.avatar_cont}>
                    <img className={styles.avatar} src={avatar} alt="avatar"></img>
                </div>

                <div className={styles.contact_cont}>
                   <h2 className={styles.contact_text}>Contact</h2>
                   {email && <p className={styles.contact_text}>{email}</p>}
                   {website && <p className={styles.contact_text}>{website}</p>}
                   {address && <p className={styles.contact_text}>{address}</p>}
                   {phone && <p className={styles.contact_text}>{phone}</p>}
                   {optional1 && <p className={styles.contact_text}>{optional1}</p>}
                   {optional2 && <p className={styles.contact_text}>{optional2}</p>}
                </div>
                
            </div>

            <div className={styles.right}>

                 {about && (
                    <div className={styles.about_cont}>
                        <h1>About Me</h1>
                        <p className={styles.about}>{about}</p>
                    </div>
                 )}

                 <div className={styles.education_cont}>
                     <h1>{education.customTitle || "Education"}</h1>

                     {
                         education.fields.map((edu : any, index: number)=>{
                             return(
                                 <div key={index}>
                                     <h4>{edu.institute}</h4>
                                     <p>{edu.description}</p>
                                </div>

                             )
                         })
                     }

                 </div>

                 <div>
                     <h1>{experience.customTitle || "Experience"}</h1>

                     {
                         experience.fields.map((exp : any, index: number)=>{
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
                     <h1>Skills</h1>
                     <div className={styles.skills_inner_cont}>
                           <div>
                              <ul>
                                {
                                  skills.fields.map((skill : any, index: number)=>{
                                    return <li className={styles.skill} key={index}>
                                      <div className={styles.skill_name}>
                                       {skill.skill}
                                      </div>
                                      <div className={styles.star}>
                                         {generateStar(skill.percentage)}
                                      </div>
                                     </li>
                                  })
                                }
                              </ul>
                           </div>
                     </div>
                 </div>
            </div>

        </div>
    )
}

export default Index
