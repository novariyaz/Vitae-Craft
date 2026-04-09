import React from 'react'
import Input from '@material-ui/core/FilledInput';
import { useDispatch, useSelector} from "react-redux";
import {setAbout, setAvatar, setName, setProfession} from '../redux/PersonalDetails/PersonalSlice'
import fieldStyles from '../styles/components/TextField.module.css'
import styles from '../styles/components/PersonalDetails.module.css'
import { Tstore } from '../store';

function PersonalDetails() {
    
    const dispatch = useDispatch()
    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)

    return (
        <div className={styles.root}>
            <div className={styles.personalCard}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardTitle}>Basic Information</span>
                </div>
                
                <div className={styles.inputGroup}>
                    <Input 
                        className={fieldStyles.textfield}  
                        value={name} 
                        onChange={(e) =>  dispatch(setName({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Full Name"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={fieldStyles.textfield}  
                        value={profession} 
                        onChange={(e) => dispatch(setProfession({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Professional Title"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={fieldStyles.textfield}  
                        value={avatar} 
                        onChange={(e) =>  dispatch(setAvatar({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Avatar URL (Optional)"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={fieldStyles.textfield}  
                        value={about} 
                        onChange={(e) => dispatch(setAbout({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Professional Summary"  
                        multiline
                        rows={6}
                        fullWidth
                        disableUnderline
                    />
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
