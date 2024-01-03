import './order.css'
import checkcontext from '../../context/checkcontext';
import Bottom from '../bottom/bottom';
import { useContext, useEffect,useState , useRef} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setdate, setlocation, setshowtime, setseat,setmid, setdetail, setcity, setuid, setvalidity, setmail,setnumber} from '../../redux/ticketslice';


function Order (){

  const ticket = useSelector((state)=> state.ticket)
  const dispatch = useDispatch()
  console.log("ticket", ticket)

    const a = useContext(checkcontext);
    useEffect(()=>{
        console.log(a.bdata)
    })
    

    const [show, setshow] = useState(false)
    const [chk, setchk] = useState(false)


    const personal = ()=>{
      if(!(mail.current.value && num.current.value)){
        alert("Input fields are required!")
      }
      else{
        dispatch(setmail(mail.current.value))
        dispatch(setnumber(num.current.value))
        setchk(true)
        butt.current.style.backgroundColor = "#a30f2a";
      }
    }

    const handlepay =  async () =>{
      if(chk){
          setshow(true);
      }

      else{
        alert("Kindly, Share your contact details to proceed.")
      }
        
    }

    const mail = useRef()
    const num = useRef()
    const butt = useRef()

    const getpay = async () =>{
      const data = await (await axios.post('http://localhost:8080/api/payment/checkout')).data;
      const {order, key} = data;
      
      const options = {
        key: key, 
        amount: order.amount, 
        currency: "INR",
        name: "Flicket",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, 
        callback_url: "http://localhost:8080/api/payment/verify",
        prefill: {
            name: "Vidit tamrakar",
            email: "vidit.tamrakar@example.com",
            contact: "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#F84464"
        }
    };
    var rzp1 = new window.Razorpay(options);
   
        rzp1.open();

        console.log("rzp1",rzp1);
    
    
    }

    return(
        <div id="order">
            <div className={!show?"cdetail": "gayab"}>
                <div id="t1">
                    <h3>Share your Contact Details</h3>
                </div>
                <div id="t2">
                    <input type="text" placeholder='&nbsp; Enter Email' ref={mail}/>
                    <input type="number" placeholder='&nbsp;+91 Enter Mobile No.' ref={num} />
                    <button id='submit' onClick={personal} ref={butt}>{chk? "Submitted": "Submit"}</button>
                </div>
            </div>

            <div className={!show?"summary": "gayab"}>
                <h2 className='ed'>Order Summary</h2>
                <h3 className='ed'>{ticket.moviename}</h3>
                <h4 className='ed'>{ticket.showlocation}</h4>
                <h1 className='ed'>{(a.bdata).length}</h1>
                <h3 className='ed'>Tickets</h3>
                <div id="t3" className='ed'>
                {(ticket.seatno).map((item)=>{
                    return(
                        <h4 className='ed'>{item}</h4>
                    )
                })}
                </div>
                <h3 className='ed'>{ticket.date}</h3>
                <h3 className='ed'>{ticket.showtime}</h3>
                <div id="payable">
                    <h5 className='ed'>Amount Payable</h5>
                    <h2 className='ed'>Rs 11</h2>
                </div>
            </div>

            <div className={show?"gpay": "gayab"}>

            <div className="cdetail">
                <div id="t1">
                    <h3>Pay with Razor Pay</h3>
                </div>
                <div id="t2">
                  <button id='razor' onClick={getpay}>Pay Rs 11</button>
                </div>
            </div>

            </div>
            <button className={!show?"proceed": "gayab"} onClick={handlepay}>Proceed To Pay</button>
            <Bottom></Bottom>
        </div>
    )
}


export default Order;