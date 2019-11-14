import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Carriers from './components/carriers'



class App extends Component {
  
  render() {
    
    return (
      
    <div>
         	<Sidebar></Sidebar>
           <div id="colorlib-main">
             <Home></Home>
             <About></About>
             <Carriers></Carriers>
           </div>
        </div>  
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
