import './card.css'
import { useNavigate} from 'react-router-dom';


function Card (){
    const navigate = useNavigate();

    const handleclick = () =>{
        navigate('/moviedetail')
    }
    return(
        <div id='card' onClick={handleclick}>
            <div id="cardimg">
                <img src="https://m.media-amazon.com/images/M/MV5BNTk4ZjM1OWMtYjc3Ni00NzFhLTkwZGEtZWZiYjFhZTk0YjZhXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_.jpg" alt="" />
            </div>
            <h4>Tiger 3</h4>
            <h5>Action , Thriller</h5>
        </div>
    )
}

export default Card;