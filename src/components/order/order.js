import './order.css'
import checkcontext from '../../context/checkcontext';
import Bottom from '../bottom/bottom';
import { useContext, useEffect,useState } from 'react';
import GooglePayButton from '@google-pay/button-react';

function Order (){
    const a = useContext(checkcontext);
    useEffect(()=>{
        console.log(a.bdata)
    })
    

    const [show, setshow] = useState(false)

    const handlepay = () =>{
        setshow(true);
    }

    return(
        <div id="order">
            <div className={!show?"cdetail": "gayab"}>
                <div id="t1">
                    <h3>Share your Contact Details</h3>
                </div>
                <div id="t2">
                    <input type="text" placeholder='&nbsp; Enter Email' />
                    <input type="number" placeholder='&nbsp;+91 Enter Mobile No.' />
                    <button id='submit'>Submit</button>
                </div>
            </div>

            <div className={!show?"summary": "gayab"}>
                <h2 className='ed'>Order Summary</h2>
                <h3 className='ed'>Tiger 3</h3>
                <h4 className='ed'>Movie Magic (SAM): Jabalpur (SCREEN 3)</h4>
                <h1 className='ed'>{(a.bdata).length}</h1>
                <h3 className='ed'>Tickets</h3>
                <div id="t3" className='ed'>
                {(a.bdata).map((item)=>{
                    return(
                        <h4 className='ed'>{item}</h4>
                    )
                })}
                </div>
                <h3 className='ed'>Mon,18 Dec,2023</h3>
                <h3 className='ed'>9:00 pm</h3>
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