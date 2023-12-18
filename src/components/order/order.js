import './order.css'
import checkcontext from '../../context/checkcontext';
import Bottom from '../bottom/bottom';
import { useContext, useEffect } from 'react';

function Order (){
    const a = useContext(checkcontext);
    useEffect(()=>{
        console.log(a.bdata)
    })
    return(
        <div id="order">
            <div id="cdetail">
                <div id="t1">
                    <h3>Share your Contact Details</h3>
                </div>
                <div id="t2">
                    <input type="text" placeholder='&nbsp; Enter Email' />
                    <input type="number" placeholder='&nbsp;+91 Enter Mobile No.' />
                    <button id='submit'>Submit</button>
                </div>
            </div>

            <div id="summary">
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
            <button id="proceed">Proceed To Pay</button>
            <Bottom></Bottom>
        </div>
    )
}


export default Order;