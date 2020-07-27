import React from 'react';
import Jogo from './components/jogo/jogo'
import Load from './components/load/load'
import Placar from './components/placar/placar'
class App extends React.Component {


  render() {
    return (
      <React.Fragment>
        <Load />
        <Jogo />
        <Placar />
      </React.Fragment>
    );
  }

}

export default App;

