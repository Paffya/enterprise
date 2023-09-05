
import './App.css';
import Navbar from './Components/Navbar';
import Mainroute from './Pages/Mainroute';
import Homepage from './Pages/Homepage';

// import Footer from "./Components/Footer";
// import Newsletter from './Components/Newsletter';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainroute />
      <Homepage />
   
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
