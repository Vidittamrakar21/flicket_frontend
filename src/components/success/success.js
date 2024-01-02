import './success.css'
import Bottom from '../bottom/bottom';
import QRCode from "react-qr-code";
import { useContext,useEffect,useState } from 'react';
import checkcontext from '../../context/checkcontext';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';


function Success (){

    const a = useContext(checkcontext)
    const ticket = useSelector((state)=> state.ticket)
  const dispatch = useDispatch()
  console.log("ticket", ticket)

  const [tdata, setdata] = useState('');

  const maketicket = async ()=>{
    const data  = await (await axios.post('http://localhost:8080/api/ticket/maketicket',{showlocation: ticket.showlocation,
        city: ticket.city,
        name: ticket.name,
        mobileno: ticket.mobileno,
        showtime: ticket.showtime,
        showdate: ticket.showdate,
        seatno: ticket.seatno,
        movieid: ticket.movieid,
        moviename : ticket.moviename,
        validity: ticket.validity,
        date: ticket.date ,
        email: ticket.email,
        uid: ticket.uid})).data;

        if(data){
            setdata(data);
            console.log("data",data)
        }


  }

  useEffect(()=>{
    maketicket()
  },[])


    return(
        <div id="succ">
            <div id='brcode'>
            <QRCode
            size={256}
            style={{ height: 250, maxWidth: 150, width: 150 }}
            value={tdata}
             viewBox={`0 0 256 256`}
            />
        </div>

        <div className="summary">
                <h2 className='ed'>Movie Ticket</h2>
                <h3 className='ed'>{tdata.moviename}</h3>
                <h4 className='ed'>{tdata.showlocation}</h4>
                <h1 className='ed'>{(tdata.seatno).length}</h1>
                <h3 className='ed'>Tickets</h3>
                <div id="t3" className='ed'>
                {(tdata.seatno).map((item)=>{
                    return(
                        <h4 className='ed'>{item}</h4>
                    )
                })}
                </div>
                <h3 className='ed'>{tdata.date}</h3>
                <h3 className='ed'>{tdata.showtime}</h3>
                
            </div>

        <Bottom></Bottom>
        </div>
    )
}

export default Success;