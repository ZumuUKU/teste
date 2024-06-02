import Name from "../Name";
import Undername from "../Undername";
function Header(props) {
  console.log(props)
  return (
   <div style={{padding: 2, backgroundColor: 'red', margin: 10}}>

    <Undername undername={'sousa'}/>
    <Name  fullname={'amogus'} age={'Fabio'} status={'sung jin woo'}/> 

    <div style={{color: 'white'}} onClick={() => alert(props.name)}>{props.name}</div>
   </div>
  );
}

export default Header;