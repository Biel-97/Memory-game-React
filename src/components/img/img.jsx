import React, { Fragment } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Lista from './lista'



class Verso extends React.Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
                {Lista(3)}
                
            </div>
        )
    }
}

// export default Verso

