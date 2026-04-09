import React from 'react'
import Fab from '@material-ui/core/Fab';
import fieldStyles from '../styles/components/TextField.module.css'
import styles from '../styles/components/SkillsDetails.module.css'
import { Add, Delete } from '@material-ui/icons';
import Input from '@material-ui/core/FilledInput';

import { useDispatch, useSelector } from 'react-redux';
import {setNewField, setSkillSlice, setPercentageSlice, setUpdateFields} from '../redux/SkillsDetails/SkillDetails'
import { IconButton, Tooltip } from '@material-ui/core';
import { Tstore } from '../store';

interface Ifeields {
    skill : string,
    percentage : string,
}

function SkillsDetails() {
    
    const dispatch = useDispatch()
    const {fields} = useSelector((state : Tstore)=> state.skillSlice)

    const addFieldHandller = ()=>{
        dispatch(setNewField({data: {skill: "", percentage:""}}))
    }

    const skillStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setSkillSlice({index: index, data : e.target.value }))
    }

    const percentageStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setPercentageSlice({index: index, data : e.target.value }))
    }

    const deleteFieldHandller = (index : number)=>{
        const prevState = [...fields]
        prevState.splice(index, 1)
        dispatch(setUpdateFields({data : prevState }))
    }


    return (
        <div className={styles.root}>
            {
                fields.map((field : Ifeields, index : number)=>{
                      return(
                          <div key={index} className={styles.skillCard}>
                               <div className={styles.cardHeader}>
                                    <span className={styles.cardTitle}>Skill {index + 1}</span>
                                    <Tooltip title="Remove Skill">
                                        <IconButton size="small" onClick={()=> deleteFieldHandller(index)}>
                                            <Delete fontSize="small" style={{ color: 'var(--error)' }} />
                                        </IconButton>
                                    </Tooltip>
                               </div>

                               <div className={styles.grid}>
                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.skill} 
                                        onChange={(e)=> skillStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Skill Name (e.g. React.js)"  
                                        fullWidth
                                        disableUnderline
                                    />

                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.percentage} 
                                        onChange={(e)=> percentageStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Proficiency %"  
                                        fullWidth
                                        disableUnderline
                                    />
                               </div>
                          </div>    
                      )
                })
            }
            
            <div className={styles.fabContainer}>
                <Tooltip title="Add Skill" placement="left">
                    <Fab color="primary" onClick={addFieldHandller}>
                        <Add />
                    </Fab>
                </Tooltip>
            </div>
        </div>
    )
}

export default SkillsDetails
