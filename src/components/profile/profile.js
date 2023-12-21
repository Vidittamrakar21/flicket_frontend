import './profile.css';
import Bottom from '../bottom/bottom';
import { useState,useRef } from 'react';
import axios from 'axios'

function Profile(){

    const [pro, openpro] = useState(true)
    const [edit ,openedit ] = useState(false);
    const [notif ,openotify ] = useState(false);
    const [tick ,opentick ] = useState(false);
    const [setting ,openset ] = useState(false);
    const [buton ,seton ] = useState(true);
    const [butoff ,setoff ] = useState(false);

    const name = useRef()
    const mail = useRef()
    const num = useRef()
    const city = useRef() 


    const openeditor = () =>{
        openedit(true);
        openpro(false);
        openotify(false);
    }
    const opennoti = () =>{
        openedit(false);
        openpro(false);
        openotify(true);
    }

    const openticket = () =>{
        openedit(false);
        openpro(false);
        openotify(false);
        opentick(true);
    }

    const openhelp = () =>{
        alert("This feature is currently under poduction. We are sorry for the inconvinience. For more information kindly contact with us. ")
    }

    const openacc = () =>{
        openedit(false);
        openpro(false);
        openotify(false);
        opentick(false);
        openset(true)
    }

    const toggleon = ()=>{
            setoff(true)
            seton(false)
    }

    const toggleoff = ()=>{
            setoff(false)
            seton(true)
    }
    const reset = async ()=>{

         if(name.current?.value !== "" && mail.current?.value !== "" && num.current?.value !== "" && city.current?.value !== "" ){
            const namedata = await (await axios.patch('http://localhost:8080/api/user/updatename',{name: name.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            const maildata = await (await axios.patch('http://localhost:8080/api/user/updatemail',{email: mail.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            const numdata = await (await axios.patch('http://localhost:8080/api/user/updatemobile',{mobileno: num.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            const data = await (await axios.patch('http://localhost:8080/api/user/updatecity',{city: city.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            if(data && maildata && numdata && namedata){
                alert(data.message);
                openpro(true)
                openedit(false)

            }

        }

         else if(city.current?.value !== "" && name.current?.value !== ""){
            const namedata = await (await axios.patch('http://localhost:8080/api/user/updatename',{name: name.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            const data = await (await axios.patch('http://localhost:8080/api/user/updatecity',{city: city.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            if(data && namedata){
                alert(data.message);
                openpro(true)
                openedit(false)

            }

        }

        else if(name.current?.value !== ""){
            const data = await (await axios.patch('http://localhost:8080/api/user/updatename',{name: name.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            if(data){
                alert(data.message);
                openpro(true)
                openedit(false)

            }
        }
        else if(mail.current?.value !== ""){
            const data = await (await axios.patch('http://localhost:8080/api/user/updatemail',{email: mail.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            if(data){
                alert(data.message);
                openpro(true)
                openedit(false)

            }

        }
        else if(num.current?.value !== ""){
            const data = await (await axios.patch('http://localhost:8080/api/user/updatemobile',{mobileno: num.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            if(data){
                alert(data.message);
                openpro(true)
                openedit(false)

            }

        }
        else if(city.current?.value !== ""){
            const data = await (await axios.patch('http://localhost:8080/api/user/updatecity',{city: city.current?.value , uid: "6581d8c091ec4dc08015152a"})).data
            if(data){
                alert(data.message);
                openpro(true)
                openedit(false)

            }

        }

       

       
        else if(name.current?.value === "" && mail.current?.value === "" && num.current?.value === "" && city.current?.value === "" ){
            alert("Input fileds are required !")
        }
        
    }

    const deleteaccount = async ()=>{
        if(window.confirm("On deleting your account, all the booking history will also be deleted. Are you sure ,you want to continue !")){
            const data = await (await axios.delete('http://localhost:8080/api/user/delete',{uid: "6581d8c091ec4dc08015152a"})).data
            if(data.message){
                alert(data.message)
            }
        }
    }
    


    return(
        <div id='profile'>
           
           <div id="grad">
                <h2>Hi, Guest</h2>
            </div>
            <div className={!pro?"gayab": "comp"}>
                <div className="item" onClick={openeditor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-person" viewBox="0 0 16 16">
                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                 </svg>

                 <h3>Edit Profile</h3>
                </div>

                <div className="item" onClick={opennoti}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gray" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>

                <h3>Notificatons</h3>
                </div>

                <div className="item" onClick={openticket}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-ticket-perforated" viewBox="0 0 16 16">
                    <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                  <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"/>
                  </svg>

                  <h3> Your Bookings</h3>
                </div>

                <div className="item" onClick={openhelp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>

                <h3>Help and Support</h3>
                </div>

                <div className="item" onClick={openacc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>

                <h3>Accounts and Settings</h3>
                </div>

                
            </div>

            <div className={edit?"edit": "gayab"}>
                    <h3>Account Details</h3>
                    <div className="kan">
                        <h4>Email Address</h4>
                        <h4 className='green'>vidi.tamrakar16@gmail.com</h4>
                    
                    </div>
                    <div className="kan">
                        <input type="email" placeholder='&nbsp;Edit Email' ref={mail} />
                    </div>
                    <div className="kan">
                        <h4>Mobile Number</h4>
                        <h4 className='green'>+91 9365448902</h4>
                    </div>
                    <div className="kan">
                        <input type="number" placeholder='&nbsp;Edit Mo. Number' ref={num}/>
                    </div>
                    <h3>Personal Details</h3>
                    <div className="kan">
                        <h4>Name</h4>
                        <input type="text" placeholder='&nbsp;Enter Name' ref={name} />
                    </div>
                    <div className="kan">
                        <h4>City</h4>
                        <input type="text" placeholder='&nbsp;Enter Your City' ref={city} />
                    </div>
                    <button id='save' onClick={reset}>Save Changes</button>
            </div>

            <div className={notif?"notify": "gayab"}>
                {/* <h3>No Notifications.</h3> */}

                <div id="noter">
                    hi vidit , welcome to Flicket !
                </div>
            </div>

            <div className={tick?"bk": "gayab"}>
                {/* <h3>No Bookings Yet.</h3> */}

                <div id="book">
                   <h4 id="bid">Booking Id - 88g5kedi48781</h4>
                   <h4>Date - 23-11-2023</h4>
                </div>
            </div>

            <div className={setting?"acc": "gayab"}>
               <div id="troll">
               <h4>Allow Notifications </h4>
               <div id="on" onClick={toggleon}className={buton?"": "gayab"}>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" class="bi bi-toggle-on" viewBox="0 0 16 16">
               <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
              </svg>
               </div>
               <div id="off" onClick={toggleoff}className={butoff?"": "gayab"}>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="lightgreen" class="bi bi-toggle-off" viewBox="0 0 16 16">
               <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
                </svg> 
               </div>
               </div>

               <div className="item" onClick={deleteaccount}>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-person-x" viewBox="0 0 16 16">
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
                </svg>

                   <h3 id='della'>Delete Account</h3>
                </div>
               
            <div className="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-person-lock" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                   </svg>

                   <h3>Sign Out</h3>
                </div>
            </div>
           
            <Bottom></Bottom>
        </div>
    )
}

export default Profile;