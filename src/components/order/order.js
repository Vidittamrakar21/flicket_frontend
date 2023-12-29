import './order.css'
import checkcontext from '../../context/checkcontext';
import Bottom from '../bottom/bottom';
import { useContext, useEffect,useState , useRef} from 'react';
import GooglePayButton from '@google-pay/button-react';
import {useSelector, useDispatch} from 'react-redux';
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

    const handlepay = () =>{
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
                {(ticket.seat).map((item)=>{
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
                    <h3>Pay with Google Pay</h3>
                </div>
                <div id="t2">
                  

                     <GooglePayButton
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: 'CARD',
                            parameters: {
                              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                              allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                              type: 'PAYMENT_GATEWAY',
                              parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                          totalPriceStatus: 'FINAL',
                          totalPriceLabel: 'Total',
                          totalPrice: '11.00',
                          currencyCode: 'USD',
                          countryCode: 'US',
                        },
                      }}
                      onLoadPaymentData={paymentRequest => {
                        console.log('load payment data', paymentRequest);
                      }}
                    />
                </div>
            </div>

            </div>
            <button className={!show?"proceed": "gayab"} onClick={handlepay}>Proceed To Pay</button>
            <Bottom></Bottom>
        </div>
    )
}


export default Order;