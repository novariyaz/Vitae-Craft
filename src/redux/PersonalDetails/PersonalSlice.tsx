import {PayloadAction, createSlice} from '@reduxjs/toolkit'


interface iInitialState {
    name : string,
    profession : string,
    about : string,
    avatar : string,
}

type TPayload =  {
    data : string
}


const initialState : iInitialState = {
        name:  "Alexander Brooks",
        profession: "Senior Product Designer",
        about: "Strategic Product Designer with over 8 years of experience in creating user-centric digital experiences. Expert in design systems, interaction design, and product strategy. Passionate about solving complex problems through elegant and functional design solutions.",
        avatar : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
}

export const PersonalSlice = createSlice({
    name: "PersonalDetails",
    initialState : initialState,
    reducers : {
        setName: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.name = payload.data
        },
        setProfession : (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
             state.profession = payload.data
        },
        setAbout : (state: iInitialState,  {payload} : PayloadAction<TPayload>)=>{
            state.about = payload.data
        },
        setAvatar : (state :iInitialState,  {payload} : PayloadAction<TPayload>)=>{
            state.avatar = payload.data
        }
    }
})



export default PersonalSlice.reducer;
export const {setName} = PersonalSlice.actions;
export const {setProfession} = PersonalSlice.actions;
export const {setAbout} = PersonalSlice.actions;
export const {setAvatar} = PersonalSlice.actions;