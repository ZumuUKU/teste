//import logo from './logo.svg';
import './App.css';
import Name from './components/Name';

import Header  from "./components/header";

function App() {

  const listName = [
    'Jessica',
    'Davi',
    'Fabiççççço',
    'Leo',
    'Erick',
    'Sandra',
    'Jorge',
    'Jessica',
    'Davi',
    'Fab/////io',
    'Leo',
    
  ]

  return (
    <div className="App">
    <Name fullname={'amogus'} age={'Fabio'}/>
      {
        listName.map((items) => <Header name={items} age={25} status={0} obj={[]} />)
      }      

    </div>
  );
}

export default App;
