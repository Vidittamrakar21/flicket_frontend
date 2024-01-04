import './movie.css'
import Slider from '../corousel/corousel';
import Bottom from '../bottom/bottom';
import Card from '../card/card';
import Fill from './fill';
import { useState,useContext,useEffect } from 'react';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";



function Movie (){
    const [loading, setload] = useState(true);
    const a = useContext(checkcontext);
    const [but1 ,color1] = useState(false);
    const [but2 ,color2] = useState(false);
    const [but3 ,color3] = useState(false);
    const [but4 ,color4] = useState(false);
    const [but5 ,color5] = useState(false);
    const [but6 ,color6] = useState(false);
    const [but7 ,color7] = useState(false);
    const [but8 ,color8] = useState(false);
    const [but9 ,color9] = useState(false);
    const [check ,checkit] = useState(false);

    const showbox = () =>{
        a.opencom();
    }

    const hindi = () =>{
        color1(true)
        color2(false)
        initiate()
        checkit(true);
    }
    const english = async () =>{
        color1(false)
        color2(true)
        const data = await (await axios.get(`/api/movie/filter/${"english"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);

    }
    const action = async () =>{
        color3(true)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
        const data = await (await axios.get(`/api/movie/filter/${"action"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }
    const adventure = async () =>{
        color3(false)
        color4(true)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
        const data = await (await axios.get(`/api/movie/filter/${"adventure"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }
    const comedy = async () =>{
        color3(false)
        color4(false)
        color5(true)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
        const data = await (await axios.get(`/api/movie/filter/${"comedy"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }
    const drama = async () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(true)
        color7(false)
        color8(false)
        color9(false)
        const data = await (await axios.get(`/api/movie/filter/${"drama"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }
    const fantasy = async () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(true)
        color8(false)
        color9(false)
        const data = await (await axios.get(`/api/movie/filter/${"fantasy"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }
    const scifi = async () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(true)
        color9(false)
        const data = await (await axios.get(`/api/movie/filter/${"scifi"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }
    const thriller = async () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(true)
        const data = await (await axios.get(`/api/movie/filter/${"thriller"}`)).data;
        if(data){
            setdata(data);
            console.log(data)
            setload(false)
        }
        else{
            console.log("error")
        }
        checkit(true);
    }

    const clearall = () =>{
        color1(false)
        color2(false)
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
        initiate()
        checkit(false);
    }

    const [idata, setdata] = useState([]);
    const initiate = async ()=>{
        const data = await (await axios.get('/api/movie/specific')).data;
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

    const removebox = () =>{
        
        a.closecom()
    }

    return(
        <div id="mov">
            <Slider></Slider>
            <button id="addfil" onClick={showbox}>Add Filters</button>
            <div id="filter">
                <h2>Filters</h2>
                <div id="lang">
                    <h4>Languages</h4>
                    <div id="langbut">
                        <button className={but1?"doo add": "doo"} onClick={hindi}>Hindi</button>
                        <button className={but2?"doo add": "doo"} onClick={english}>English</button>
                    </div>
                </div>

                <div id="genre">
                    <h4>Genres</h4>
                    <div id="genbut">
                        <button className={but3?"boo add": "boo"} onClick={action}>Action</button>
                        <button className={but4?"boo add": "boo"} onClick={adventure}>Adventure</button>
                        <button className={but5?"boo add": "boo"} onClick={comedy}>Comedy</button>
                        <button className={but6?"boo add": "boo"} onClick={drama}>Drama</button>
                        <button className={but7?"boo add": "boo"} onClick={fantasy}>Fantasy</button>
                        <button className={but8?"boo add": "boo"} onClick={scifi}>Sci-Fi</button>
                        <button className={but9?"boo add": "boo"} onClick={thriller}>Thriller</button>
                    </div>
                </div>
                <button id='clear' onClick={clearall}>Clear All</button>
            </div>

            <div id="play">
                <h2>Movies In {a.city}</h2>
                <div id="display">
                    {idata.length === 0 && check=== true? <h3 id='find'>Not able to find any movie with this filter.</h3>:""}
                {idata.map((item)=>{
                    return(
                        <Card name = {item.name} type = {item.type} image = {item.image} id={item._id}></Card>
                    )
                })}

               <ClipLoader
                 color="#F84464"
                 loading= {loading}
                 cssOverride={{marginTop:"-560px", marginLeft:"160px"}}
  
                />
                </div>
            </div>

            <div  className={!a.com? "gayab": "sho"}>
                {/* <Fill></Fill> */}
                <>
        <div   className={!a.com? "gayab": "out"}  onClick={removebox}>
        </div>
            <div className={!a.com? "gayab": "gilter"}>
            <h2>Filters</h2>
                <div id="lang">
                    <h4>Languages</h4>
                    <div id="langbut">
                        <button className={but1?"doo add": "doo"} onClick={hindi}>Hindi</button>
                        <button className={but2?"doo add": "doo"} onClick={english}>English</button>
                    </div>
                </div>

                <div id="genre">
                    <h4>Genres</h4>
                    <div id="genbut">
                        <button className={but3?"boo add": "boo"} onClick={action}>Action</button>
                        <button className={but4?"boo add": "boo"} onClick={adventure}>Adventure</button>
                        <button className={but5?"boo add": "boo"} onClick={comedy}>Comedy</button>
                        <button className={but6?"boo add": "boo"} onClick={drama}>Drama</button>
                        <button className={but7?"boo add": "boo"} onClick={fantasy}>Fantasy</button>
                        <button className={but8?"boo add": "boo"} onClick={scifi}>Sci-Fi</button>
                        <button className={but9?"boo add": "boo"} onClick={thriller}>Thriller</button>
                    </div>
                </div>
                <button id='clear' onClick={clearall}>Clear All</button>
            </div>

        </>
            </div>
            <Bottom></Bottom>
        </div>
    )
}

export default Movie;