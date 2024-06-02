import { useState } from "react";

function Name(props) {
    const [color, setColor] = useState(false) //boolean. Ctrl + K + C Para comentar, Ctrl + K + U para descomentar.
    //color é o estado que começa falso.
    return (
        <div style={color ? {backgroundColor: 'blue'} : {backgroundColor: 'yellow'}}>
            {/* color da forma como está acima é o mesmo que 'color === true ? 'faz isso' : 'faz aquilo' */}
            <div onClick={() => setColor(!color)}>{props.fullname}</div>
            {/* Já este color está negando o color, ou seja, se o valor de color for true ele mudurá para false e visse versa, após o clique,
             que no caso é a interação do set color */}
            <div>{props.age}</div>
            <div>{props.status}</div>
        </div>        
    );
  }
  
  export default Name;