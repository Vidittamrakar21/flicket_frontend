import './sign.css'
import { useState,useContext } from 'react';
import checkcontext from '../../context/checkcontext';

function Sign (){
    const [but , show] = useState(false)
    const [sign , showsign] = useState(true)
    const a = useContext(checkcontext)

    const handleclick = () =>{
        show(true);
    }

    const openemail = ()=>{
        showsign(false)
    }

    const closemail = ()=>{
        showsign(true)
    }

    const closesign = ()=>{
        a.closelog()
    }

    return(
        <div className={a.log?"outer ":"gayab"}>
            <div className={sign?"sign": "gayab"}>
                <div id="cross" onClick={closesign}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="grey" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                </div>
                <h3>Get Started</h3>
                
                <div className="coon">
                    <div id='gog'>
                        <img src="/images/Google Icon.png" alt="" />
                    </div>
                    <h4>Continue with Google</h4>
                </div>
                <div className="coon" onClick={openemail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey" class="bi bi-envelope" viewBox="0 0 16 16">
                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                 </svg>

                 <h4>Continue with Email</h4>
                </div>
                <h4 id='orr'>OR</h4>

                <div id="phono">
                    <h4>+91</h4>
                    <input type="number" placeholder='&nbsp; Continue with mobile number ' onClick={handleclick}/>
                </div>
                <button className={but? "cont": "gayab"}>Continue</button>
            </div>

            <div className={!sign?"signmail":"gayab"}>
                <div id="caret" onClick={closemail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                 </svg>
                </div>
                    <h2>Login with Email</h2>
                    <h5>Email</h5>
                    <input type="email"  />
                    <button className='cont'>Continue</button>
            </div>
        </div>
    )
}

export default Sign;