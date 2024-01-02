import './cine.css'
import { useState,useEffect,useContext } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import Bottom from '../bottom/bottom';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {setdate, setlocation, setshowtime, setshowdate,setmid,  setcity, setuid, setvalidity,setmname} from '../../redux/ticketslice'

function Cine(){

    const navigate = useNavigate()
    const a = useContext(checkcontext)
    const [mnt, setmnt] = useState(0)

    const handleclick = async (x,y,z,w)=>{
        dispatch(setshowtime(x))
        dispatch(setlocation(y))
        if(date1){
            const divas = ((din1).toString())+ ", " + ((tareek1).toString())+ ", " + (month)+ ", " + ((year).toString())
            const shd =  ((tareek1).toString())+ "/" + (mnt)+ "/" + ((year).toString())
            dispatch(setdate(divas))
            dispatch(setshowdate(shd))
        }

        dispatch(setmid(z))
        dispatch(setmname(name))
        dispatch(setvalidity(w))
        navigate('/seat')
    }

    const ticket = useSelector((state)=> state.ticket)
    const dispatch = useDispatch()
    console.log("ticket", ticket)

    const {name} = useParams();
    const [movie,setmovie] = useState([]);
    const [date1 ,setdate1] = useState(true);
    const [date2 ,setdate2] = useState(false);
    const [date3 ,setdate3] = useState(false);
    const [box1 ,openb1] = useState(false);
    const [box2 ,openb2] = useState(false);

    const select1 = async () =>{
        setdate1(true)
        setdate2(false)
        setdate3(false)
        const divas = ((din1).toString())+ ", " + ((tareek1).toString())+ ", " + (month)+ ", " + ((year).toString())
        const shd =  ((tareek1).toString())+ "/" + (mnt)+ "/" + ((year).toString())
        dispatch(setdate(divas))
        dispatch(setshowdate(shd))


    }
    const select2 = () =>{
        setdate1(false)
        setdate2(true)
        setdate3(false)
        const divas = ((din2).toString())+ ", " + ((tareek2).toString())+ ", " + (month)+ ", " + ((year).toString())
        const shd =  ((tareek1).toString())+ "/" + (mnt)+ "/" + ((year).toString())
        dispatch(setdate(divas))
        dispatch(setshowdate(shd))
    }
    const select3 = () =>{
        setdate1(false)
        setdate2(false)
        setdate3(true)
        const divas = ((din3).toString())+ ", " + ((tareek3).toString())+ ", " + (month)+ ", " + ((year).toString())
        const shd =  ((tareek1).toString())+ "/" + (mnt)+ "/" + ((year).toString())
        dispatch(setdate(divas))
        dispatch(setshowdate(shd))
        
    }
    
    const openbox1 =()=>{
        openb1(true)
        openb2(false)
    }

    const openbox2 =()=>{
        openb1(false)
        openb2(true)
    }

    const closebox =()=>{
       if((box1 || box2) || (box1 & box2)){
        openb1(false)
        openb2(false)
       }
    }

    const [din1, setdin1] = useState("")
    const [din2, setdin2] = useState("")
    const [din3, setdin3] = useState("")
    const [tareek1, settar1] = useState("")
    const [tareek2, settar2] = useState("")
    const [tareek3, settar3] = useState("")
    const [month, setmonth] = useState("")
   
    const [tm, settm] = useState("")
    const [year, setyear] = useState("")

    const settingmonth = (x)=>{
        if(x === 0){
            setmonth("Jan")
        }
        else if(x === 1){
            setmonth("Feb")

        }
        else if(x === 2){
            setmonth("Mar")

        }
        else if(x === 3){
            setmonth("Apr")

        }
        else if(x ===4){
            setmonth("May")
        }
        else if(x ===5){
            setmonth("Jun")
        }
        else if(x ===6){
            setmonth("July")
        }
        else if(x ===7){
            setmonth("Aug")
        }
        else if(x === 8){
            setmonth("Sep")
        }
        else if(x === 9){
            setmonth("Oct")
        }
        else if(x === 10){
            setmonth("Nov")
        }
        else if(x === 11){
            setmonth("Dec")
        }
        
        
    }

    


    const setnewdate = async () =>{
        let date = new Date();
        let day = date.getDay()
        let dt = date.getDate()
        let mn = date.getMonth();
        let tm = date.getHours()
        let yr = date.getFullYear()
        console.log("yr", yr)
        setmnt(mn+1)
        
        
        
        if(day === 0){
            setdin1("Sun")
            setdin2("Mon")
            setdin3("Tue")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)

        }

        else if(day === 1){
            setdin1("Mon")
            setdin2("Tue")
            setdin3("Wed")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)
        }

        else if(day === 2){
            setdin1("Tue")
            setdin2("Wed")
            setdin3("Thu")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)
        }

        else if(day === 3){
            setdin1("Wed")
            setdin2("Thu")
            setdin3("Fri")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)
        }

        else if(day === 4){
            setdin1("Thu")
            setdin2("Fri")
            setdin3("Sat")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)
        }

        else if (day === 5){
            setdin1("Fri")
            setdin2("Sat")
            setdin3("Sun")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)
        }

        else if (day === 6){
            setdin1("Sat")
            setdin2("Sun")
            setdin3("Mon")
            settar1(dt)
            settar2(dt +1)
            settar3(dt +2)
            settm(tm)
            setyear(yr)
            settingmonth(mn)
        }

        console.log("mon",month)
    }

    const setdata = async () =>{
        const data = await (await axios.get(`http://localhost:8080/check`)).data;
        
        if(data.message=== "declined"){
            a.openlog()
        }

        else if (data.message === "jwt expired"){
            a.openlog()
        }

        else{
            console.log(data)
            if(data.city){
                dispatch(setcity(data.city))
                dispatch(setuid(data.id))
                const movie = await (await axios.post(`http://localhost:8080/api/movie/theat`,{city: data.city, name: name})).data;
                if(movie){
                setmovie(movie)
                  
                }
            }

            else{

                const movie = await (await axios.post(`http://localhost:8080/api/movie/theat`,{city: "Indore", name: name})).data;
                if(movie){
                    setmovie(movie)

                }

            }



        }
    }
    useEffect(()=>{
        setdata()
        setnewdate()
        
    },[])

    return(
        <div id="cine" onClick={closebox}>
            <div id="mbar">
                <h1>{name}</h1>
            </div>

            <div id="pfill">
                <div id="dater">
                    <div className={date1?"date changec": "date"} onClick={select1}>
                        <h5>{din1}</h5>
                        <h5 className='po'>{tareek1}</h5>
                        <h5>{month}</h5>
                    </div>
                    <div className={date2?"date changec": "date"} onClick={select2}>
                    <h5>{din2}</h5>
                        <h5 className='po'>{tareek2}</h5>
                        <h5>{month}</h5>
                    </div>
                    <div className={date3?"date changec": "date"} onClick={select3}>
                    <h5>{din3}</h5>
                        <h5 className='po'>{tareek3}</h5>
                        <h5>{month}</h5>
                    </div>
                </div>
                <div id="tfill">
                    <div className="loop" onClick={openbox1}>
                        <h5>Filter Price Range</h5>
                    </div>
                    <div className="loop" onClick={openbox2}>
                        <h5>Filter show timings</h5>
                    </div>
                </div>

            </div>
            <div className={box1? "fbox":"gayab"} id='fbox1'>
                <h5>Rs 0-100</h5>
                <h5>Rs 101-200</h5>
                <h5>Rs 201-400</h5>
            </div>
            <div className={box2? "fbox":"gayab"} id='fbox2'>
                <h5>Morning</h5>
                <h5>Afternoon</h5>
                <h5>Evening</h5>
                <h5>Night</h5>
            </div>

            <div id="motabox">
               {movie.map((item)=>{
                return(
                    <div id="googa">
                       <h4>{item.showlocation}</h4>
                       
                       <div id="timer">
                       <div className={date1 &&  tm < 9?"am": "gayab"} onClick={()=>{handleclick("9 am",item.showlocation, item._id, "12 pm")}}>9 am</div>
                       <div className={date1 &&  tm < 12?"am": "gayab"} onClick={()=>{handleclick("12 pm",item.showlocation, item._id, "3 pm")}}>12 pm</div>
                       <div className={date1 &&  tm < 15?"am": "gayab"} onClick={()=>{handleclick("3 pm",item.showlocation, item._id, "6 pm")}}>3 pm</div>
                       <div className={date1 &&  tm < 18?"am": "gayab"} onClick={()=>{handleclick("6 pm",item.showlocation, item._id, "9 pm")}}>6 pm</div>
                       <div className={date1 &&  tm < 21?"am": "gayab"} onClick={()=>{handleclick("9 pm",item.showlocation, item._id, "12 am")}}>9 pm</div>
                       <div className={date1 &&  tm < 23?"am": "gayab"} onClick={()=>{handleclick("11 pm",item.showlocation, item._id, "2 am")}}>11 pm</div>

                       <div className={!date1?"am": "gayab"} onClick={()=>{handleclick("9 am",item.showlocation, item._id, "12 pm")}}>9 am</div>
                       <div className={!date1?"am": "gayab"} onClick={()=>{handleclick("12 pm",item.showlocation, item._id, "3 pm")}}>12 pm</div>
                       <div className={!date1?"am": "gayab"} onClick={()=>{handleclick("3 pm",item.showlocation, item._id, "6 pm")}}>3 pm</div>
                       <div className={!date1?"am": "gayab"} onClick={()=>{handleclick("6 pm",item.showlocation, item._id, "9 pm")}}>6 pm</div>
                       <div className={!date1?"am": "gayab"} onClick={()=>{handleclick("9 pm",item.showlocation, item._id, "12 am")}}>9 pm</div>
                       <div className={!date1?"am": "gayab"} onClick={()=>{handleclick("11 pm",item.showlocation, item._id, "2 am")}}>11 pm</div>

                      
                </div>
               </div>
                )
               })}

               
            </div>

            <Bottom></Bottom>
        </div>
    )
}

export default Cine;