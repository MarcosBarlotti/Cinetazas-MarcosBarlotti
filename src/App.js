import { div } from 'prelude-ls';
import React from 'react';
//COMPONENTS
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {Card} from './components/card/Card';



class App extends React.Component{
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Card/>
      </div>
    )
  }
}

export default App;
