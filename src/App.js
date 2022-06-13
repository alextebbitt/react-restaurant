import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Data from './Data/Dishes/Dishes';
function App() {
  


  return (
    <div className="App">
      <Header/>
      <Home Data ={Data}/>
    </div>
  );
}

export default App;
