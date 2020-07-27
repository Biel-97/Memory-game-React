import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'



function Lista(num) {

    let body = document.querySelector('body')


    let divs = ["container-fluid frontal far fa-question-circle fa-2x",
        "fa-html5 verso fab " ,
        "fa-html5 verso fab " ,
        "fa-js-square verso fab " ,
        "fa-js-square verso fab " ,
        "fa-python verso fab " ,
        "fa-python verso fab " ,
        "fa-react verso fab " ,
        "fa-react verso fab " ,
        "fa-windows verso fab " ,
        "fa-windows verso fab " ,
        "fa-github verso fab " ,
        "fa-github verso fab " ,
        "fa-node verso fab " ,
        "fa-node verso fab " ,
        "fa-php verso fab " ,
        "fa-php verso fab " ,
        "fa-angular verso fab " ,
        "fa-angular verso fab " ,
        "fa-java verso fab " ,
        "fa-java verso fab " ,
        "fa-apple verso fab " ,
        "fa-apple verso fab " ,
        "fa-linux verso fab " ,
        "fa-linux verso fab " ,
        "fa-chrome verso fab " ,
        "fa-chrome verso fab " ,
        "fa-internet-explorer verso fab " ,
        "fa-internet-explorer verso fab " ,
        "fa-vuejs verso fab " ,
        "fa-vuejs verso fab " ,
        "fa-wordpress verso fab " ,
        "fa-wordpress verso fab "
    ]


let retorno = divs.map((e, a)=> <div id={a+' '+ e} className={e}></div>)

    return retorno[num]

}


export default Lista