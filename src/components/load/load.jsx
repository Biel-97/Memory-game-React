import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../load/load.css'


class Load extends React.Component {

    render() {

        return (
            <div id="load-cont"className="progress bg-dark">
                <div id="load" className={`load progress-bar progress-bar-striped progress-bar-animated bg-danger`} role="progressbar" style={{width: this.props.porcentagem + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        )
    }
}

export default Load