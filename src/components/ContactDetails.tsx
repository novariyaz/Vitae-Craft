import React from 'react'
import Input from '@material-ui/core/FilledInput';
import fieldStyles from '../styles/components/TextField.module.css'
import styles from '../styles/components/ContactDetails.module.css'
import { useDispatch, useSelector} from "react-redux";
import { setAddressSlice, setEmailSlice, setOptional1Slice, setOptional2Slice, setPhoneSlice, setWebsiteSlice } from '../redux/ContactDetails/ContactDetails';
import { Tstore } from '../store';

function ContactDetails() {
    
    const dispatch = useDispatch();
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)

    return (
        <div className={styles.root}>
            <div className={styles.contactCard}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardTitle}>Contact Information</span>
                </div>
                
                <div className={styles.grid}>
                    <Input 
                        className={fieldStyles.textfield}  
                        value={email} 
                        onChange={(e) => dispatch(setEmailSlice({data: e.target.value}))} 
                        color="secondary" 
                        type="email"
                        placeholder="Email Address"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={fieldStyles.textfield}  
                        value={phone} 
                        onChange={(e) =>  dispatch(setPhoneSlice({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Phone Number"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={fieldStyles.textfield}  
                        value={website} 
                        onChange={(e) => dispatch(setWebsiteSlice({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Portfolio / Website"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={fieldStyles.textfield}  
                        value={optional1} 
                        onChange={(e) =>  dispatch(setOptional1Slice({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="LinkedIn URL"  
                        fullWidth
                        disableUnderline
                    />

                    <Input 
                        className={`${fieldStyles.textfield} ${styles.fullWidth}`}
                        value={address} 
                        onChange={(e) =>  dispatch(setAddressSlice({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Mailing Address"  
                        fullWidth
                        multiline
                        rows={2}
                        disableUnderline
                    />

                    <Input 
                        className={`${fieldStyles.textfield} ${styles.fullWidth}`}
                        value={optional2} 
                        onChange={(e) => dispatch(setOptional2Slice({data: e.target.value}))} 
                        color="secondary" 
                        placeholder="Other (e.g., GitHub, Twitter)"  
                        fullWidth
                        disableUnderline
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
