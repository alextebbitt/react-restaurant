import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Data from './Data/Dishes/Dishes';
import Reserve from './Components/Reserve/Reserve';
function App() {
  


  return (
    <div className="App">
      <Header/>
      <Home Data ={Data}/>
      <Reserve/>
    </div>
  );
}

export default App;
