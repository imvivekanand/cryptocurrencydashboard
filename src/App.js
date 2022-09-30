import './App.css';
import Dashboard from './Components/Dashboard';
// import BarChartHorizontal from './Components/Charts/BarChartHorizontal';
// import PieChart from './Components/Charts/PieChart';
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
// import Tabs from './Components/Tabs';
// import LineChart from './Components/Charts/LineChart';

function App() {
  return (
    <div className="App bg-red-900 p-2">
      <Navbar/>
      <Dashboard/>

      {/* <Header/>
      <Tabs/> */}
      {/* <LineChart/> */}
      {/* <BarChartHorizontal/> */}
      {/* <div className="container w-1/6">
        <PieChart/>
      </div> */}
      
    </div>
  );
}

export default App;
