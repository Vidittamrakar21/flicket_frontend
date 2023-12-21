import './card.css'
import { useNavigate} from 'react-router-dom';


function Card (props){
    const navigate = useNavigate();

    const handleclick = () =>{
        navigate(`/moviedetail/${props.id}`)
    }
    return(
        <div id='card' onClick={handleclick}>
            <div id="cardimg">
                <img src={props.image} alt="" />
            </div>
            <h4>{props.name}</h4>
            <h5>{props.title}</h5>
        </div>
    )
}

export default Card;