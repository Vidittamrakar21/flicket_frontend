import './home.css'
import Slider from '../corousel/corousel';
import Card from '../card/card';
import Bottom from '../bottom/bottom';
import axios from 'axios';
import { useState ,useEffect,useRef,useContext } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import checkcontext from '../../context/checkcontext';



function Home (){
    const [idata, setdata] = useState([]);
    const [loading, setload] = useState(true);

    const a = useContext(checkcontext);
    const initiate = async ()=>{
        const data = await (await axios.get('http://localhost:8080/api/movie/specific')).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
    }

    useEffect(()=>{
        initiate()
    },[])

    const loc = useRef();

    const searchlocation = async () =>{
        const data = await (await axios.get('http://localhost:8080/check')).data;
        if(data.message=== "declined"){
            a.openlog()
        }
        
        else if (data.message === "jwt expired"){
            a.openlog()
        }
        else{
            const str = loc.current.value;
            const nstr = str.charAt(0).toUpperCase() + str.slice(1);
            console.log(nstr)
            if(nstr === "Indore" || nstr === "Bhopal" || nstr === "Jabalpur" || nstr === "Gwalior"){
                const local = await (await axios.patch('http://localhost:8080/api/user/updatecity',{city: nstr, uid: data.id })).data;
                if(local){
                  
                    a.setcity(nstr)
                }
            }
            else{
                alert('Sorry, we are currently unavailable at this location !')
            }
        }

    }



    useEffect(()=>{
        document.addEventListener('keydown',detectkeydown,true);
    },[])

    const detectkeydown = async (e)=>{

        if(e.key === "Enter" && loc.current?.value !== "" ){
           await searchlocation()
            
        }

       

    }

    const detectlocation = async() =>{
        const data = await (await axios.get('https://ipapi.co/json')).data;
        if(data){
            console.log(data);
            if(data.city === "Indore" || data.city === "Bhopal" || data.city === "Jabalpur" || data.city === "Gwalior"){
                const local = await (await axios.patch('http://localhost:8080/api/user/updatecity',{city: data.city, uid: data.id })).data;
                if(local){
                   
                    a.setcity(data.city)
                }
            }
            else{
                alert('Sorry, we are currently unavailable at this location !')
            }

        }
    }
   

    return(
        <div id='home'>
            <Slider></Slider>
            <h2>Recommended Movies</h2>
            <div id='main'>
                {idata.map((item)=>{
                    return(
                        <Card name = {item.name} type = {item.type} image = {item.image} id={item._id}></Card>
                    )
                })}

            <ClipLoader
              color="#F84464"
              loading= {loading}
              cssOverride={{marginTop:"130px", marginLeft:"-520px"}}
  
            />
            </div>
            <hr />
            <h3 id="place">{(a.city )? a.city:"Indore"} &#9660;</h3>
            <div id="moye">
            <div id='location'>
                <input type="search" placeholder='&nbsp;Search for your city' ref={loc} />
                <div id="detect" onClick={detectlocation}>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="red" class="bi bi-geo-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                    </svg>
                    </div>
                    <h4>Detect my location</h4>
                </div>
            </div>

            <div id="cit">
                <img src="/images/location.png" alt="" />
            </div>
            </div>
            <div id="reel">
                <h1>Flicket - Book a movie show easily</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SfUeMIBRMeICUzXSQ389CZACyN6h_7YBIA&usqp=CAU" alt="" />
            </div>

            <Bottom></Bottom>
        </div>
    )
}

export default Home;