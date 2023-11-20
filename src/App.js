import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Movie from './components/movie/movie';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Movie></Movie>
      <Footer></Footer>
    </div>
  );
}

export default App;
