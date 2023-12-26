import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect,useRef } from 'react';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';
function Navbar () {

    const navigate = useNavigate();
    const a = useContext(checkcontext)

    const gohome = () =>{
        navigate('/')
    }

    const gosearch = () =>{
        navigate('/search')
    }

    const gomovie = () =>{
        navigate('/movie')
    }
    const goprofile = () =>{
        navigate('/profile')
    }

    const opensign = () =>{
        a.openlog()
    }

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
                console.log(movie);
               await a.saveval(movie);
            }
        }

    }

    useEffect(()=>{
        document.addEventListener('keydown',detectkeydown,true);
    },[])

    const detectkeydown = async (e)=>{

        if(e.key === "Enter" && srinp.current?.value !== "" ){
           await searchmovie()
            console.log("enter")
        }

       

    }

    return(
        <nav>

            <nav id="light">
                <div id= 'logo'>
                    <h1 onClick={gohome}>FLICKET</h1>
                </div>

                <input type="search" placeholder = "&nbsp;Search for Movies" onClick={gosearch} ref={srinp}/>
                <div id='search' onClick={gosearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                 </svg>
                </div>
                <div id='local'>
                    <h4>Location</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-geo-alt" viewBox="0 0 16 16">
                 <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                </div>

                <button id="but" onClick={opensign}>Sign in</button>
            </nav>
            <nav id="dark">
                <h4 onClick={gohome}>Home</h4>
                <h4 onClick={gomovie}>Movies</h4>
                <h4 onClick={goprofile}>Profile</h4>
            </nav>
        </nav>
    )
}

export default Navbar;