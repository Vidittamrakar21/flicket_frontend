import './movieban.css'
import Bottom from '../bottom/bottom';
import { useNavigate } from 'react-router-dom';

function Movieban(){
    const navigation = useNavigate();

    const handleclick = () =>{
        navigation('/cine')
    }
    return(
        <div id="ban" >
            <div id="bigimg">
                <img src="https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/tiger_3_1693633096774_1693633097167.jpg" alt="" />
            </div>
            <div id='smallimg'>
                <img src="https://m.media-amazon.com/images/M/MV5BNTk4ZjM1OWMtYjc3Ni00NzFhLTkwZGEtZWZiYjFhZTk0YjZhXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_.jpg" alt="" />

            </div>

            <h1 id='mname'>Tiger 3</h1>
            <h2 id='mrate'>8.2/10</h2> 
            <h3 id='mvote'>304k votes</h3>

            <div id="rnow">
                <div id="mat">
                <h2>Add your rating and review</h2>
                <h3>Your Ratings matter</h3>
                </div>
                <button>Rate Now</button>
            </div>

            <h3 id="line"><span>3h 21m</span> . Action</h3>
            <button id='btt' onClick={handleclick}>Book Tickets</button>
            <h2 id="abt">About The Movie</h2>
            <p id='bbt'>Tiger and Zoya are back - to save the country and their family. This time it`s personal!</p>
             <div id="cst">
                <h2>Cast</h2>
                <h3>Salman Khan</h3>
                <h3>Katrina Kaif</h3>
                <h3>Emraan Hashmi</h3>
                <h3>Revathi</h3>
             </div>

             <h2 id="rev">Top Reviews</h2>

             <div id="revbox">
                <div id="ee">
                    <div id="uu">
                        <img src="/images/user.png" alt="" />
                    </div>
                    <h3>User</h3>
                    <h3>8/10</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed quidem ut vel labore earum cupiditate eum facere suscipit ipsa? Repellendus aliquam animi nisi vitae! Nisi deleniti dolorem cupiditate provident!</p>
             </div>
             <div id="revbox1">
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
             </div>

             <Bottom></Bottom>
        </div>
    )
}

export default Movieban;