import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showlocation: "",
    city: "",
    name: "",
    mobileno: "",
    showtime: "",
    showdate: "",
    seatno: [],
    movieid: "",
    moviename: "",
    validity: "",
    date : "",
    email: "",
    uid: "",

}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setdate: (state,action)=>{
            state.date = action.payload;
        },

        setshowdate: (state,action)=>{
            state.showdate = action.payload;
        },

        setshowtime: (state, action)=>{
            state.showtime = action.payload;
        },

        setlocation: (state, action)=>{
            state.showlocation = action.payload;
        },

        setseat: (state, action)=>{
            state.seatno = action.payload;
        },
        setmid: (state, action)=>{
            state.movieid = action.payload
        },

        setmname: (state, action)=>{
            state.moviename = action.payload
        },

        setdetail: (state, action)=>{
            state.email = action.payload
            state.name = action.payload
            state.number = action.payload
        },
        setmail: (state, action)=>{
            state.email = action.payload
           
        },
        setname: (state, action)=>{
           
            state.name = action.payload
     
        },
        setnumber: (state, action)=>{
          
            state.mobileno = action.payload
        },

        setcity: (state, action) => {
            state.city = action.payload
        },

        setuid: (state,action)=>{
            state.uid = action.payload
        },

        setvalidity: (state, action)=>{
            state.validity = action.payload
        }



    }
})


export const {setdate, setlocation, setshowtime, setseat,setmid, setdetail, setcity,setshowdate, setuid, setvalidity, setmname, setmail,setname,setnumber} = ticketSlice.actions;

export default ticketSlice.reducer;