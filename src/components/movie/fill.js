import './fill.css';
import { useState,useContext } from 'react';
import checkcontext from '../../context/checkcontext';

function Fill (){
    const a = useContext(checkcontext)
    
    const removebox = () =>{
        
        a.closecom()
    }

    const [but1 ,color1] = useState(false);
    const [but2 ,color2] = useState(false);
    const [but3 ,color3] = useState(false);
    const [but4 ,color4] = useState(false);
    const [but5 ,color5] = useState(false);
    const [but6 ,color6] = useState(false);
    const [but7 ,color7] = useState(false);
    const [but8 ,color8] = useState(false);
    const [but9 ,color9] = useState(false);

    const showbox = () =>{
        a.opencom();
    }

    const hindi = () =>{
        color1(true)
        color2(false)
    }
    const english = () =>{
        color1(false)
        color2(true)
    }
    const action = () =>{
        color3(true)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
    }
    const adventure = () =>{
        color3(false)
        color4(true)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
    }
    const comedy = () =>{
        color3(false)
        color4(false)
        color5(true)
        color6(false)
        color7(false)
        color8(false)
        color9(false)
    }
    const drama = () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(true)
        color7(false)
        color8(false)
        color9(false)
    }
    const fantasy = () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(true)
        color8(false)
        color9(false)
    }
    const scifi = () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(true)
        color9(false)
    }
    const thriller = () =>{
        color3(false)
        color4(false)
        color5(false)
        color6(false)
        color7(false)
        color8(false)
        color9(true)
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
    }

    return(
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
    )
}

export default Fill;

