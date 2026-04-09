import {PayloadAction, createSlice} from '@reduxjs/toolkit'


interface Ifields {
    institute : string,
    description : string,
}

interface iInitialState {
    customTitle : string,
    fields : Ifields[]
}

type TPayload =  {
    index : number,
    data : string
}

type TNewPayload = {
    data : Ifields
}

type TUpdate = {
    data : Ifields[]
}


const initialState : iInitialState = {
    customTitle : "",
    fields : [{
        institute : 'University of Beechtown, AB Communications, Graduated in 2018',
        description : 'Graduated with Latin Honors, Cum Laude Top 10 Best Senior Thesis Secretary, 2018, Students Marketing Association. Writer, 2016-2018, Comm-Arts Weekly',
    },{
        institute: "East Beechtown High, Completed High School, Graduated in 2015",
        description : "- Graduated with Honors Consistently in the Honor's List Secretary, 2015, Communication Arts Club Writer, 2012-2015, East Beechtown High Paper"
    }]
}

export const EducationSlice = createSlice({
    name: "EducationalDetails",
    initialState : initialState,
    reducers : {
        setCustomTitle: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.customTitle = payload.data
        },
        setInstituteSlice: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
             state.fields[payload.index].institute = payload.data
        },
        setDescriptionSlice : (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.fields[payload.index].description = payload.data
       },
       setNewField : (state : iInitialState, {payload} : PayloadAction<TNewPayload>)=>{
        state.fields = [...state.fields , payload.data]
       },
       setUpdateFields : (state : iInitialState, {payload} : PayloadAction<TUpdate>)=>{
        state.fields = payload.data
      }
       
       
    }
})



export default EducationSlice.reducer;
export const {setCustomTitle, setInstituteSlice, setDescriptionSlice, setNewField, setUpdateFields} = EducationSlice.actions;


