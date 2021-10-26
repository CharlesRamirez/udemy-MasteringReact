import react from "react";
import reactDom from "react-dom";
const name = 'Charles Ramirez'
//const App = <h1>Hola Mundo {name}</h1>;
const TarjetaFruta = (props) => {
    return (<div>
        <h3>
            {props.name}
        </h3>
        <hr/>
        <p>Descripcion ....</p>
        Hey
        </div>)
  }
  
  const App = () => {
    return (<div>
      <TarjetaFruta name = 'Sandia'/>
  
      <TarjetaFruta name = 'Naranja'/>
  
    </div>)
  }
const root = document.getElementById('root');
reactDom.render( <App/> ,root);