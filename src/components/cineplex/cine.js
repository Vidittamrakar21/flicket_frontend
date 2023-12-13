import './cine.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bottom from '../bottom/bottom';

function Cine(){

    const navigate = useNavigate()

    const handleclick = ()=>{
        navigate('/seat')
    }

    const [date1 ,setdate1] = useState(true);
    const [date2 ,setdate2] = useState(false);
    const [date3 ,setdate3] = useState(false);
    const [box1 ,openb1] = useState(false);
    const [box2 ,openb2] = useState(false);

    const select1 = () =>{
        setdate1(true)
        setdate2(false)
        setdate3(false)
    }
    const select2 = () =>{
        setdate1(false)
        setdate2(true)
        setdate3(false)
    }
    const select3 = () =>{
        setdate1(false)
        setdate2(false)
        setdate3(true)
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

    return(
        <div id="cine" onClick={closebox}>
            <div id="mbar">
                <h1>Tiger 3</h1>
            </div>

            <div id="pfill">
                <div id="dater">
                    <div className={date1?"date changec": "date"} onClick={select1}>
                        <h5>Tue</h5>
                        <h5 className='po'>12</h5>
                        <h5>Dec</h5>
                    </div>
                    <div className={date2?"date changec": "date"} onClick={select2}>
                    <h5>Wed</h5>
                        <h5 className='po'>13</h5>
                        <h5>Dec</h5>
                    </div>
                    <div className={date3?"date changec": "date"} onClick={select3}>
                    <h5>Thu</h5>
                        <h5 className='po'>14</h5>
                        <h5>Dec</h5>
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
               <div id="googa">
               <h4>Movie Magic (SAM): Jabalpur</h4>
                <div id="timer">
                    <div className="am" onClick={handleclick}>9 am</div>
                    <div className="am" onClick={handleclick}>12 pm</div>
                    <div className="am" onClick={handleclick}>3 pm</div>
                    <div className="am" onClick={handleclick}>6 pm</div>
                    <div className="am" onClick={handleclick}>9 pm</div>
                    <div className="am" onClick={handleclick}>11 pm</div>
                </div>
               </div>

               
            </div>

            <Bottom></Bottom>
        </div>
    )
}

export default Cine;