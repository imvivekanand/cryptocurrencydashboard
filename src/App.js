import './App.css';
import BarChartHorizontal from './Components/Charts/BarChartHorizontal';
import PieChart from './Components/Charts/PieChart';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Tabs from './Components/Tabs';


function App() {
  return (
    <div className="App bg-slate-100 p-2">
      <Navbar/>
      <Header/>
      <Tabs/>

      {/* <BarChartHorizontal/> */}
      <div className="container w-1/6">
        <PieChart/>
      </div>
      
    </div>
  );
}

export default App;
