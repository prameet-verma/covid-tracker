import logo from './logo.svg';
import './App.css';
import FetchCovidData from './api/fetchCovidData';

function App() {
  return (
    <div className="App">
     <h1>Covid Tracker</h1>
     <FetchCovidData/>
    </div>
  );
}

export default App;
