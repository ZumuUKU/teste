import Name from "../Name";
import Undername from "../Undername";
function Header(props) {

  return (
   <div style={{padding: 5, backgroundColor: 'red', margin: 10, width: 260, borderRadius: 20}}>
        
        <Undername undername={'sousa'}/>
        
        <Name  fullname={'amogus'} age={'Fabio'} status={'sung jin woo'}/> 

        <div style={{color: 'white'}} onClick={() => alert(props.name)}>
            <img src={props.img} width={150} height={70} alt="imagem refe" title="imagem refe" />
            
            <div style={{fontSize: 20}}>
                {`${props.name} ${props.undername === undefined ? '': props.undername} ${props.age}`}
            </div>
            
            <div style={{fontSize: 16, color: 'white', backgroundColor: "black"}}>
                {props.subtitle}
            </div>
 
            {/* se for igual a undefined não faça nada (''), todavia se for diferente de undefined a props.undername. */}
        </div>
        
   </div>
  );
}

export default Header;