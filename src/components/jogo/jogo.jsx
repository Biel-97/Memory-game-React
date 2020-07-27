import React from 'react'
import Card from '../card/card'
import Dificuldade from '../dificuldade/dificuldade'
import '../jogo/jogo.css'

let key = 0
var sorteados = [];
let tentativa = ''
let cont = 0

function retornar_Carta(card1, card2) {
    setTimeout(function () {
        card1.style.transform = "rotateY(360deg)"
        card1.style.transition = "all 0.2s ease";
        card2.style.transform = "rotateY(360deg)"
        card2.style.transition = "all 0.2s ease";
    }, 500)
}

class Jogo extends React.Component {
    constructor() {
        super()
        this.state = {
            jogo: <Dificuldade chamar_jogo={(e) => this.chamar_jogo(e)} />,
            derrota: 0,
            vitoria: 0,
            porcento: 0
        }
    }

    criar_numero_Unico() {
        let sugestao = Math.ceil(Math.random() * this.state.valorMaximo);
        while (sorteados.indexOf(sugestao) >= 0) {
            sugestao = Math.ceil(Math.random() * this.state.valorMaximo);
        }
        sorteados.push(sugestao);
        return sugestao;
    }

    criar_cartas(num) {
        let cartas = []
        let teste = num
        while (teste > 0) {
            teste = teste - 1
            cartas.push(<Card key={key++} imagem={this.criar_numero_Unico()} click={(e) => this.click(e)} />)
        }
        return cartas
    }

    chamar_jogo = (e) => {
        if (e.target.getAttribute('value')) {
            this.state = {
                valorMaximo: e.target.getAttribute('value'),
            }
            this.setState({
                jogo: this.criar_cartas(e.target.getAttribute('value'))
            })
            this.load_start()
        }
    }

    load_finish(parametro) {
        clearInterval(parametro)
        document.querySelector('.load').style.width = "0%"
    }
    load_start() {
        let load = document.querySelector('.load')
        let porcento = 0
        this.setState({ fim: setInterval(contador.bind(this), 400) })  
        function contador() {
            porcento++
            load.style.width = porcento + "%"
            this.setState({ porcento: porcento })
            if (this.state.porcento >= 101) {
                this.load_finish(this.state.fim)
                this.derrota()
            }
        }
    }

    click = (e) => {
        let carta = e.target.parentNode
        if (e.target.classList.contains("frontal")) {
            carta.style.transform = "rotateY(180deg)"
            if (tentativa === '') {
                tentativa = carta.lastElementChild
            } else if (tentativa.className === carta.lastElementChild.className) {
                document.querySelectorAll('.' + tentativa.className.split(' ')[0]).forEach((e) => {
                    setTimeout(() => {
                        e.style.background = "rgb(26, 26, 26)";
                        e.style.border = "2px solid rgb(155, 140, 73)";
                        e.style.transition = "all 0.4s ease";
                        cont++
                        if (cont === document.querySelector('#jogo').children.length -1) {
                            this.vitoria()
                        }
                    }, 500)
                })
                tentativa = ''
            } else {
                retornar_Carta(tentativa.parentNode, carta)
                tentativa = ''
            }
        }
    }

    vitoria() {
        setTimeout(() => {
            this.setState({
                jogo: <Dificuldade chamar_jogo={(e) => this.chamar_jogo(e)} />,
                vitoria: this.state.vitoria + 1
            })
            document.querySelector('.vitoria').innerHTML = this.state.vitoria
            cont = 0
            sorteados = []
            this.load_finish(this.state.fim)
        }, 1000)
    }

    derrota() {
        setTimeout(() => {
            this.setState({
                jogo: <Dificuldade chamar_jogo={(e) => this.chamar_jogo(e)} />,
                derrota: this.state.derrota + 1
            })
            document.querySelector('.derrota').innerHTML = this.state.derrota
            cont = 0
            sorteados = []
        }, 100)
    }

    render() {
        return (
            <div id="jogo" className="container-fluid " >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
                {this.state.jogo}
            </div>
        )
    }
}

export default Jogo
