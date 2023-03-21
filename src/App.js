import './input.css';
import BarChart from './BarChart';
import LineChart from './LineChart';
import MultipleLine from './MultipleLine';
import CompetitionLine from './CompetitionLine';
import DifferentCharts from './DifferentCharts';
import Modals from './Modals';


function App() {


  return (

    
    <div className="App">
      <h1 className='text-blue-600 text-6xl'>Charts</h1>

      <div className='grid grid-cols-2 gap-10 m-10'>
        <BarChart/>
        <LineChart/>
        <MultipleLine/>
        <CompetitionLine/>
        <DifferentCharts/>
        <Modals/>
      </div>
      
      
    </div>
  );
}

export default App;
