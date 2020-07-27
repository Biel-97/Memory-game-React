import React, { Fragment } from 'react'
import '../card/card.css'
import Lista from '../img/lista'

class Card extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="conteiner-card">
                    <div onClick={(e) => this.props.click(e)} className="carta">
                        {Lista(0)}
                        {Lista(this.props.imagem)}
                    </div>
                </div>

            </Fragment>
        )
    }
}




export default Card