import './fill.css';
import { useState } from 'react';

function Fill (){

    const [visible , makevisible] = useState(true);

    const removebox = () =>{
        makevisible(false)
    }


    return(
        <>
        <div   className={!visible? "gayab": "out"}  onClick={removebox}>
        </div>
            <div className={!visible? "gayab": "gilter"}>
            <h2>Filters</h2>
                <div id="lang">
                    <h4>Languages</h4>
                    <div id="langbut">
                        <button className='doo'>Hindi</button>
                        <button className='doo'>English</button>
                    </div>
                </div>

                <div id="genre">
                    <h4>Genres</h4>
                    <div id="genbut">
                        <button className="boo">Action</button>
                        <button className="boo">Adventure</button>
                        <button className="boo">Comedy</button>
                        <button className="boo">Drama</button>
                        <button className="boo">Fantasy</button>
                        <button className="boo">Sci-Fi</button>
                        <button className="boo">Thriller</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Fill;