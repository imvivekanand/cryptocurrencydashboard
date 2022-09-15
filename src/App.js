import './App.css';
import LineChart from './Components/Charts/LineChart';
import Header from './Components/Header';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <LineChart/>
    </div>
  );
}

export default App;
