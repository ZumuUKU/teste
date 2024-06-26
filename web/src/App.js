//import logo from './logo.svg';
import './App.css';
import Name from './components/Name';

import Header  from "./components/header";

function App() {
  // listName =  array de objetos
  const listName = [
    { name:  'Jessica', img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/09/solo_leveling_o_que_e__w24vo9.jpg', undername: 'anastacio', age: 35},
    { name:  'Davi', img: 'https://sgimage.netmarble.com/images/netmarble/sololv/20240318/fxbt1710761341766.jpg', age: 15},
    { name:  'Fabio', img: 'https://tm.ibxk.com.br/2024/01/09/09113345060123.jpg?ims=1200x675', age: 46},
    { name:  'Leo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlEt8eqGTapQZ1DauAYpozboLgqwkab45-g&s', age: 73},
    { name:  'Erick', img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/09/solo_leveling_o_que_e__w24vo9.jpg', subtitle: 'sung jin woo', age: 26},
    { name:  'Sandra', img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/09/solo_leveling_o_que_e__w24vo9.jpg', age: 37},
    { name:  'Jorge', img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/09/solo_leveling_o_que_e__w24vo9.jpg', age: 52}, 
  ]

  return (
    <div className="App">
      <Name fullname={'amogus'} age={'Fabio'}/>
      
      <div style={{display: "flex"}}>
        {
          listName.map((items) => <Header 
            name={items.name} 
            undername={items.undername} 
            img={items.img}
            subtitle={items.subtitle}
            age={items.age} 
            status={0} 
            obj={[]} />)
        } 
      </div>     

    </div>
  );
}

export default App;
