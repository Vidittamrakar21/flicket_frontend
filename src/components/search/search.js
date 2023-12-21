import './search.css'
import Card from '../card/card';
import Bottom from '../bottom/bottom';

function Search (){
    return(
        <div id="sch">
                <h3>Your search results will appear here.</h3>
                {/* <Card></Card> */}
                <input type="search" id='sinp' placeholder='&nbsp;Search for movies.'/>
                {/* <h3>No records found related to your search !</h3> */}
                <Bottom/>
        </div>
    )
}

export default Search;