import { div } from 'prelude-ls';
import React from 'react';
//COMPONENTS
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';



class App extends React.Component{
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
      </div>
    )
  }
}

export default App;
