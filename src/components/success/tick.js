import './success.css'
import Bottom from '../bottom/bottom';
import QRCode from "react-qr-code";
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Ticket (){

   
    const [tdata, setdata] = useState('');
    const [tid, setid] = useState('');
    const [arr, setarr] = useState([]);
    const { id }= useParams()

    const getticket = async () =>{
        const data = await (await axios.post('/api/ticket/getoneticket',{id: id})).data;
        if (data){
            setdata(data);
            setarr(data.seatno)
            setid(data._id)
            console.log(data);
        }

        else{
            console.log("cannot find data")
        }
    }

    useEffect(()=>{
        getticket();
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
            <h1 className='ed'>{ arr.length}</h1>
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

export default Ticket;