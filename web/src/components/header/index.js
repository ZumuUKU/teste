
function Header(props) {

  return (
   <div style={{padding: 2, backgroundColor: 'red', margin: 10}}>

    {props.age}

    <div style={{color: 'white'}} onClick={() => alert(props.name)}>{props.name}</div>
   </div>
  );
}

export default Header;