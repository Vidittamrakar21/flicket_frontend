import './movieban.css'
import Bottom from '../bottom/bottom';
import { useNavigate,useParams } from 'react-router-dom';
import { useState, useEffect,useContext} from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import checkcontext from '../../context/checkcontext';

function Movieban(){
    const navigation = useNavigate();
    const [loading, setload] = useState(true);
    const [st1 , show1] = useState(false)
    const [st2 , show2] = useState(false)
    const [st3 , show3] = useState(false)
    const [st4 , show4] = useState(false)
    const [st5 , show5] = useState(false)
    const [rating, showrating] = useState(false)
    const [idata, setdata] = useState([])
    const [cast, setcast] = useState([])
    const [rate, setrate] = useState([])

    const a = useContext(checkcontext);

    const {id} = useParams();

    const getdata = async()=>{
        const data = await (await axios.get(`/api/movie/getone/${id}`)).data;
       if(data){
        setdata(data);
        setcast(data.cast);
        setrate(data.review);
        setload(false)
       }
    }

    useEffect(()=>{
        console.log(id)
        getdata()
    },[])

    const handleclick = async () =>{
        const data = await (await axios.get(`/check`)).data;
        
        if(data.message=== "declined"){
            a.openlog()
        }

        else if (data.message === "jwt expired"){
            a.openlog()
        }

        else{
          
            navigation(`/cine/${idata.name}`)

        }
    }

    const handlerating = () =>{
       if(rating){
        showrating(false)
       }
       else{
        showrating(true)
       }
    }
    const showstar1 = () =>{
        if(st1){
            show1(false)
            show2(false)
            show3(false)
            show4(false)
            show5(false)

        }
        else{
            show1(true)
        }
    }
    const showstar2 = () =>{
        if(st2){
            show2(false)
            show3(false)
            show4(false)
            show5(false)
        }
        else{
            show2(true)
            show1(true)
        }
    }
    const showstar3 = () =>{
        if(st3){
            show3(false)
            show4(false)
            show5(false)
        }
        else{
            show3(true)
            show2(true)
            show1(true)
        }
    }
    const showstar4 = () =>{
        if(st4){
            show4(false)
            show5(false)
        }
        else{
            show4(true)
            show3(true)
            show2(true)
            show1(true)
        }
    }

    const showstar5 = () =>{
        if(st5){
            show5(false)
        }
        else{
            show5(true)
            show4(true)
            show3(true)
            show2(true)
            show1(true)
        }
    }

    

    return(
        <div id="ban" >
            <div id="bigimg">
                <img src={idata.bannerimg} alt="" />
            </div>
            <div id='smallimg'>
                <img src={idata.image} alt="" />

            </div>

            <h1 id='mname'>{idata.name}</h1>
            <h2 id='mrate'>8.2/10</h2> 
            <h3 id='mvote'>304k votes</h3>

            <div id="rnow">
                <div id="mat">
                <h2>Add your rating and review</h2>
                <h3>Your Ratings matter</h3>
                </div>
                <button onClick={handlerating}>Rate Now</button>
            </div>

            <h3 id="line"><span>{idata.duration}</span> . {idata.type}</h3>
            <button id='btt' onClick={handleclick}>Book Tickets</button>
            <h2 id="abt">About The Movie</h2>
            <ClipLoader
                 color="#F84464"
                 loading= {loading}
                 cssOverride={{marginTop:"10px", marginLeft:"30px"}}
  
                />
           <div id="ppp">
          <div id="bbt">
            {idata.description}
          </div>
           </div>
           
             <div id="cst">
                <h2>Cast</h2>
               {cast.map((item)=>{
                return(
                    <h3>{item}</h3>
                )
               })}
             </div>

             {rate.length>0?<h2 id="rev">Top Reviews</h2>:""}
            <div id="rrr">
            {rate.map((item)=>{
                return(
                    <div id="revbox">
                <div id="ee">
                    <div id="uu">
                        <img src="/images/user.png" alt="" />
                    </div>
                    <h3>User</h3>
                    <h3>{item.rate}/5</h3>
                </div>
                <p>{item.txt}</p>
             </div>
                )
             })}
            </div>


             {/* <div id="revbox1">
                <div id="ee">
                    <div id="uu">
                        <img src="/images/user.png" alt="" />
                    </div>
                    <h3>User</h3>
                    <h3>8/10</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed quidem ut vel labore earum cupiditate eum facere suscipit ipsa? Repellendus aliquam animi nisi vitae! Nisi deleniti dolorem cupiditate provident!</p>
             </div>
             <div id="revbox2">
                <div id="ee">
                    <div id="uu">
                        <img src="/images/user.png" alt="" />
                    </div>
                    <h3>User</h3>
                    <h3>8/10</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed quidem ut vel labore earum cupiditate eum facere suscipit ipsa? Repellendus aliquam animi nisi vitae! Nisi deleniti dolorem cupiditate provident!</p>
             </div>
             <div id="revbox3">
                <div id="ee">
                    <div id="uu">
                        <img src="/images/user.png" alt="" />
                    </div>
                    <h3>User</h3>
                    <h3>8/10</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed quidem ut vel labore earum cupiditate eum facere suscipit ipsa? Repellendus aliquam animi nisi vitae! Nisi deleniti dolorem cupiditate provident!</p>
             </div> */}

             <div className={rating?"outer":"gayab"}>
                <div id="rt">
                    <div id="crss" onClick={handlerating}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                     </svg>
                    </div>
                    <h4>How was the movie ?</h4>
                    <div id="star">
                        <div className={!st1? "st": "gayab"} onClick={showstar1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star" viewBox="0 0 16 16">
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        </div>

                        <div className={st1?"st": "gayab"} onClick={showstar1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star-fill" viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </div>

                        <div className={!st2? "st": "gayab"} onClick={showstar2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star" viewBox="0 0 16 16">
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        </div>

                        <div className={st2?"st": "gayab"} onClick={showstar2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star-fill" viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </div>


                        <div className={!st3? "st": "gayab"} onClick={showstar3}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star" viewBox="0 0 16 16">
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        </div>

                        <div className={st3?"st": "gayab"} onClick={showstar3}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star-fill" viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </div>

                        <div className={!st4? "st": "gayab"} onClick={showstar4}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star" viewBox="0 0 16 16">
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        </div>

                        <div className={st4?"st": "gayab"} onClick={showstar4}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star-fill" viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </div>


                        <div className={!st5? "st": "gayab"} onClick={showstar5}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star" viewBox="0 0 16 16">
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                        </div>

                        <div className={st5?"st": "gayab"} onClick={showstar5}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F84464" class="bi bi-star-fill" viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </div>
                    </div>
                    <h4>Express more, write a review (Optional)</h4>
                    <textarea name="" id="txt" cols="30" rows="10" placeholder='&nbsp; Your opinion matters'></textarea>
                    <button id='bttt'>Submit Rating</button>
                </div>
             </div>

             <Bottom></Bottom>
        </div>
    )
}

export default Movieban;