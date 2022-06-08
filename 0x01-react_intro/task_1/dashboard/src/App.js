import Holberton_Logo from './Holberton_Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy} from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Holberton_Logo} className="" alt="logo" />
      <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>{getFullYear()} {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
