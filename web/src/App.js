//import logo from './logo.svg';
import './App.css';
import Header  from "./components/header";

function App() {

  const listName = [
    'Jessica',
    'Davi',
    'Fabio',
    'Leo',
    'Erick',
    'Sandra',
    'Jorge',
    'Jessica',
    'Davi',
    'Fabio',
    'Leo',
    'Erick',
    'Sandra',
    'Jorge'
  ]

  return (
    <div className="App">
      
      {
        listName.map((items) => <Header name={items} age={25} />)
      }      

    </div>
  );
}

export default App;
