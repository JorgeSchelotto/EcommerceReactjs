import React from 'react';
import './App.css';
import Home from './containers/Home';
import NavDos from './components/Navbar/NavVerDos';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from "./components/ItemDetail/ItemDetail"


function App() {
  const link = "https://reactjs.org";
  const title ='Some content';
  const subtitle ='Another content';

  return (
    <div className="App">


      <BrowserRouter>
        <header className="App-header">
          <NavDos />
        </header>
        <Switch>
          <Route exact path="/">
            <Home link={link} title={title} subtitle={subtitle}/>
          </Route>
          <Route path="/item/:id">
            <ItemDetail />
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
