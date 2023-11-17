import './home.css'
import Slider from '../corousel/corousel';
import Card from '../card/card';


function Home (){
    return(
        <div id='home'>
            <Slider></Slider>
            <h2>Recommended Movies</h2>
            <div id='main'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}

export default Home;