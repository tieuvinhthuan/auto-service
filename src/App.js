import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import M from  'materialize-css/dist/js/materialize.min.js';
import 'startbootstrap-creative/dist/css/styles.css';

import page1 from './component/page1'
import page2 from './component/page2'
import page3 from './component/page3'
import page4 from './component/page4'

export default class App extends Component {
  componentDidMount () {
    let sidenav = document.querySelector('#mobile');
    M.Sidenav.init(sidenav, {edge:'right'});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={page1}/>
          
          <Route path='/Palvelut' component={page2} />
          <Route path='/Kuvagalleria' component={page3} />
          <Route path='/Ottaa' component={page4} />

          
        </div>
      </BrowserRouter>
    )
  }
}
