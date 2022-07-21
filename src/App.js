import Moralis from "moralis";
import "./App.css";
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  const connectMoralis = async () => {
    await Moralis.start({
      serverUrl: process.env.REACT_APP_SERVER_URL,
      appId: process.env.REACT_APP_APP_ID,
    });
  };

  connectMoralis();

  return (
    <>
      <Navbar/>
      <br/>
    <div className="App">
    <Home/>
  </div>
    </>)
  
}

export default App;
