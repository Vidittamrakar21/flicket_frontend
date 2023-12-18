import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Movie from './components/movie/movie';
import Profile from './components/profile/profile';
import Movieban from './components/movieban/movieban';
import Cine from './components/cineplex/cine';
import Seat from './components/seat/seat';
import Order from './components/order/order';
import Checkstate from './context/checkstate';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';


function App() {
  return (
   
  <Router>

    <Checkstate>

    <div className="App">
      <Navbar></Navbar>
      <Routes>
         <Route exact path='/' element={<><Home/> </>}></Route> 
         <Route exact path='/movie' element={<> <Movie/> </>}></Route> 
         <Route exact path='/profile' element={<> <Profile/> </>}></Route> 
         <Route exact path='/moviedetail' element={<> <Movieban/> </>}></Route> 
         <Route exact path='/cine' element={<> <Cine/> </>}></Route> 
         <Route exact path='/seat' element={<> <Seat/> </>}></Route> 
         <Route exact path='/order' element={<> <Order/> </>}></Route> 
      
  
      </Routes>
      <Footer></Footer>
    </div>
    </Checkstate>
  </Router>  
  );
}

export default App;
