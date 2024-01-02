import './success.css'
import Bottom from '../bottom/bottom';
import QRCode from "react-qr-code";
import { useContext } from 'react';
import checkcontext from '../../context/checkcontext';

function Success (){

    const a = useContext(checkcontext)

    return(
        <div id="succ">
            <div id='brcode'>
            <QRCode
            size={256}
            style={{ height: 250, maxWidth: 150, width: 150 }}
            value={"xyx"}
             viewBox={`0 0 256 256`}
            />
        </div>

        <div className="summary">
                <h2 className='ed'>Movie Ticket</h2>
                <h3 className='ed'>{}</h3>
                <h4 className='ed'>{}</h4>
                <h1 className='ed'>{(a.bdata).length}</h1>
                <h3 className='ed'>Tickets</h3>
                <div id="t3" className='ed'>
                {/* {(ticket.seat).map((item)=>{
                    return(
                        <h4 className='ed'>{item}</h4>
                    )
                })} */}
                </div>
                <h3 className='ed'>{}</h3>
                <h3 className='ed'>{}</h3>
                
            </div>

        <Bottom></Bottom>
        </div>
    )
}

export default Success;