import './search.css'
import Card from '../card/card';
import Bottom from '../bottom/bottom';
import { useState, useContext,useEffect, useRef } from 'react';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';

function Search (){

    const a = useContext(checkcontext);
    const [data, setdata] = useState([]);
    const [result, setresult] = useState(true)
    const srinp = useRef();


    const searchmovie = async () =>{
        const movie = await (await axios.post('http://localhost:8080/api/movie/search',{searchval: srinp.current?.value})).data;
        if(movie){
            if(movie.message){
                if(movie.message === "empty"){
                    await a.saveval(null);
                }
                else{

                    alert(movie.message);
                }
            }
            else{
               
               await a.saveval(movie);
            }
        }

    }

    // useEffect(()=>{
    //     document.addEventListener('keydown',detectkeydown,true);
    // },[])

    // const detectkeydown = async (e)=>{

    //     if(e.key === "Enter" &&  srinp.current?.value !== ""){
    //        await searchmovie()
            
    //     }

    // }

    const fillmovie = ()=>{
        
        

            if(a.mvalue === null){
                setresult(false)
                setdata([])

            }
            else if(a.mvalue){
                setdata([a.mvalue]);
           
                setresult(false)
            }
          
          else{
            setdata([])
            
            
          }
        
     
    }

    useEffect(()=>{
      fillmovie()
    },[a.mvalue])

    return(
        <div id="sch">
                {result=== true? <h3>Your search results will appear here.</h3>:""}
                {data.length>0?data.map((item)=>{
                    return(
                        <Card name = {item.name} type = {item.type} image = {item.image} id={item._id}></Card>
                    )
                }):<></>}
                <input type="search" id='sinp' placeholder='&nbsp;Search for movies.' ref={srinp}/>
                <div id='isearch' onClick={searchmovie}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                 </svg>
                </div>
                { a.mvalue=== null?<h3>No records found related to your search !</h3>:""}
                <Bottom/>
        </div>
    )
}

export default Search;