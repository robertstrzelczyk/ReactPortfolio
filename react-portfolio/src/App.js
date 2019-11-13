import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'

class App extends Component {
  render() {
    return (
    <div>
         	<Sidebar></Sidebar>
           <div id="colorlib-main">
             <Home></Home>
           </div>
        </div>  
    );
  }
}
export default App;
