import React from 'react'
import Fab from '@material-ui/core/Fab';
import fieldStyles from '../styles/components/TextField.module.css'
import styles from '../styles/components/ExperienceDetails.module.css' // Reusing structural styles
import { Add, Delete } from '@material-ui/icons';
import Input from '@material-ui/core/FilledInput';
import { useDispatch, useSelector } from 'react-redux';
import { setDescriptionSlice, setInstituteSlice, setNewField, setUpdateFields, setCustomTitle } from '../redux/EducationalDetails/EducationalDetails';
import { Tstore } from '../store';
import { IconButton, Tooltip } from '@material-ui/core';

interface Ifeields {
    institute : string,
    description : string,
}

function EducationDetails() {
    
    const dispatch = useDispatch()

    const {customTitle, fields} = useSelector((state : Tstore)=> state.educationalSlice)

    const addFieldHandller = ()=>{
        dispatch(setNewField({data: {institute: "", description:""}}))
    }

    const instituteStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setInstituteSlice({index: index, data : e.target.value }))
    }

    const descriptionStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setDescriptionSlice({index : index, data: e.target.value}))
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
                    placeholder="Section Title (e.g., Education)"  
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
                                    <span className={styles.cardTitle}>Education {index + 1}</span>
                                    <Tooltip title="Remove Education">
                                        <IconButton size="small" onClick={() => deleteFieldHandller(index)}>
                                            <Delete fontSize="small" style={{ color: 'var(--error)' }} />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                
                                <div className={styles.inputGroup}>
                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.institute} 
                                        onChange={(e)=> instituteStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Institute / School Name"  
                                        fullWidth
                                    />

                                    <Input 
                                        className={fieldStyles.textfield}  
                                        value={field.description} 
                                        onChange={(e)=> descriptionStateUpdateHandller(e , index)} 
                                        color="secondary" 
                                        placeholder="Degree / Course Details"  
                                        multiline  
                                        rows={3}
                                        fullWidth
                                    />
                                </div>
                            </div>    
                        )
                    })
                }
            </div>
            
            <div className={styles.fabContainer}>
                <Tooltip title="Add Education" placement="left">
                    <Fab color="primary" onClick={addFieldHandller}>
                        <Add />
                    </Fab>
                </Tooltip>
            </div>
        </div>
    )
}

export default EducationDetails
