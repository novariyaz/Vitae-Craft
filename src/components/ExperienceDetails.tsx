import React from 'react'
import Fab from '@material-ui/core/Fab';
import fieldStyles from '../styles/components/TextField.module.css'
import styles from '../styles/components/ExperienceDetails.module.css'
import { Add, Delete } from '@material-ui/icons';
import Input from '@material-ui/core/FilledInput';

import { useDispatch, useSelector } from 'react-redux';
import {setCompanySlice, setExperienceSlice, setNewField, setUpdateFields, setRoleSlice, setCustomTitle} from '../redux/ExperienceDetails/ExperienceDetails'
import { Tstore } from '../store';
import { IconButton, Tooltip } from '@material-ui/core';


interface Ifeields {
    company : string,
    role: string,
    experience : string,
}

function ExperienceDetails() {
    
    const dispatch = useDispatch()
   
    const {customTitle, fields} = useSelector((state : Tstore)=> state.experienceSlice)

  
    const addFieldHandller = ()=>{
        dispatch(setNewField({data: {company: "", role: "", experience:""}}))
    }

    const companyStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setCompanySlice({index : index , data: e.target.value}))
    }

    const experienceStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setExperienceSlice({index : index , data: e.target.value}))
    }

    const roleStateUpdateHandller = (e : any, index: number)=>{
        dispatch(setRoleSlice({index: index ,data: e.target.value}))
    }

    const deleteFieldHandller = (index : number)=>{
        const prevState = [...fields]
        prevState.splice(index, 1)
        dispatch(setUpdateFields({data : prevState }))
    }


    return (
        <div className={styles.root}>
            <div className={styles.sectionHeader}>
                <Input 
                    className={fieldStyles.textfield}  
                    value={customTitle} 
                    color="secondary" 
                    onChange={(e)=> dispatch(setCustomTitle({data : e.target.value, index : 1}))}
                    placeholder="Section Title (e.g., Professional Experience)"  
                    fullWidth
                    disableUnderline
                />
            </div>

            <div className={styles.inputGroup}>
                {
                    fields.map((field : Ifeields, index : number)=>{
                        return(
                            <div key={index} className={styles.experienceCard}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardTitle}>Position {index + 1}</span>
                                    <Tooltip title="Remove Experience">
                                        <IconButton size="small" onClick={()=>deleteFieldHandller(index)}>
                                            <Delete fontSize="small" style={{ color: 'var(--error)' }}/>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.company} 
                                        onChange={(e)=> companyStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Company Name"  
                                        fullWidth
                                    />

                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.role} 
                                        onChange={(e)=> roleStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Role / Title"  
                                        fullWidth
                                    />

                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.experience} 
                                        onChange={(e)=> experienceStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Description of responsibilities and achievements"  
                                        multiline  
                                        rows={4}
                                        fullWidth
                                    />
                                </div>
                            </div>    
                        )
                    })
                }
            </div>
            
            <div className={styles.fabContainer}>
                <Tooltip title="Add Experience" placement="left">
                    <Fab color="primary" onClick={addFieldHandller}>
                        <Add />
                    </Fab>
                </Tooltip>
            </div>
        </div>
    )
}

export default ExperienceDetails

