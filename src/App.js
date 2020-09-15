import React from 'react';
import './App.css';
import Home from './containers/Home';
import NavDos from './components/navbar/NavVerDos';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import ItemDetail from "./components/ItemDetail/ItemDetail"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/ShoppingCart/Cart'
import { CacheProvider } from "./Context/cartContext";


function App() {
  const categories =[{categoryid: "Remeras"}, {categoryid: "Gorras"}, {categoryid: "Busos" }]

  return (
    <div className="App">


      <BrowserRouter>
      <CacheProvider>
        <header className="App-header">
          <NavDos categories={categories} />
        </header>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/categorie/:categoryid">
            <Home/>
          </Route>

          <Route path="/item/:id/detail">
            <ItemDetailContainer />
          </Route>
          <Route path="/shoppingCart">
            <Cart />
          </Route>
        </Switch>
      </CacheProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
