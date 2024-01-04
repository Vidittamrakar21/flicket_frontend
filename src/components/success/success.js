import './success.css'
import Bottom from '../bottom/bottom';
import QRCode from "react-qr-code";
import { useContext,useEffect,useState } from 'react';
import checkcontext from '../../context/checkcontext';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Success (){

    const a = useContext(checkcontext)
    const ticket = useSelector((state)=> state.ticket)
  const dispatch = useDispatch()
  console.log("ticket", ticket)
  const navigate = useNavigate()

  const [tdata, setdata] = useState("");
  const [arr, setarr] = useState([]);
  const [tid, setid] = useState('');

  const maketicket = async ()=>{
    const data  = await (await axios.post('/api/ticket/maketicket',{showlocation: ticket.showlocation,
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
            setarr(data.seatno)
            setid(data._id)
            console.log("data",data)
        }
        else{
            alert("An unexpected error occured while booking your ticket !,Kindly try again. NOTE: Any amount deducted from your account will be refunded within 3-4 business days.  ")
            navigate('/')
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
            value={tid}
             viewBox={`0 0 256 256`}
            />
        </div>

        <div className="summary">
                <h2 className='ed'>Movie Ticket</h2>
                <h3 className='ed'>{tdata.moviename}</h3>
                <h4 className='ed'>{tdata.showlocation}</h4>
                <h1 className='ed'>{arr.length}</h1>
                <h3 className='ed'>Tickets</h3>
                <div id="t3" className='ed'>
                {arr.map((item)=>{
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