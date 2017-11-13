import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';

import Home from './Components/Home'
import Cursos from './Components/pages/Cursos'
import Promociones from './Components/pages/Promociones'
import Ayuda from './Components/pages/Ayuda'
import Otros1 from './Components/pages/Otros1'


class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/Cursos' exact component={Cursos} />
        <Route path='/Promociones' exact component={Promociones} />
        <Route path='/Ayuda' exact component={Ayuda} />
        <Route path='/Otros1' exact component={Otros1} />
      </div>
    );
  }
}

export default App;
