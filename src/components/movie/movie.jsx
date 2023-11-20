import './movie.css'
import Slider from '../corousel/corousel';
import Bottom from '../bottom/bottom';
import Card from '../card/card';
import Fill from './fill';
import { useState } from 'react';

function Movie (){

    const [visible , makevisible] = useState(false);

    const showbox = () =>{
        makevisible(true)
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

            <div id="play">
                <h2>Movies In Indore</h2>
                <div id="display">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>

            <div  className={!visible? "gayab": "sho"}>
                <Fill></Fill>
            </div>
            <Bottom></Bottom>
        </div>
    )
}

export default Movie;