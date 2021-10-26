import logo from './logo.svg';
import './App.css';
//import reactDom from "react-dom";

const TarjetaFruta = () => {
  return (<div>
      <h3>
          Titulo
      </h3>
      <hr/>
      <p>Descripcion ....</p>
      Hey
      </div>)
}

const App = () => {
  <div>
    <TarjetaFruta/>

    <TarjetaFruta></TarjetaFruta>

  </div>
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
//ReactDOM.render(<App/>,document.getElementById('root'));