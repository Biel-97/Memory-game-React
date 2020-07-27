import React from 'react'
import '../dificuldade/dificuldade.css'


class Dificuldade extends React.Component{


    render(){
        return(
            <div onClick={this.props.chamar_jogo} className="dificuldade">
                <div  value="22" className="facil">Fácil</div>
                <div  value="26" className="medio"> Médio</div>
                <div  value="32" className="dificil">Dificil</div>
            </div>
            
        )
    }
}
export default Dificuldade
