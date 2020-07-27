import React from 'react'
import '../placar/placar.css'


class Placar extends React.Component {



    render() {
        let vitoria = 20
        return (

            <div id="placar">
                <span>Vitorias: <i className="vitoria">0</i></span>
                <span>Derrotas: <i className="derrota">0</i></span>
            </div>
        )
    }
}

export default Placar
