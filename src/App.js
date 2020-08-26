import React from 'react';
import './App.css';
import Home from './containers/Home';
import NavDos from './components/Navbar/NavVerDos';


function App() {
  const link = "https://reactjs.org";
  const title ='Some content';
  const subtitle ='Another content';

  return (
    <div className="App">
      <header className="App-header">
        <NavDos />
      </header>



        <Home link={link} title={title} subtitle={subtitle}/>


    </div>
  );
}

export default App;
