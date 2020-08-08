import React from 'react';
import './App.css';
import Home from './containers/Home';
import Nav from './components/navbar/navbar';


function App() {
  const link = "https://reactjs.org";
  const title ='Prometo cambiar el carrito...';
  const subtitle ='Me quedo mal';

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <body>
        <Home link={link} title={title} subtitle={subtitle}/>
      </body>
    </div>
  );
}

export default App;
