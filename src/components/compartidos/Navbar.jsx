import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "../Home";
  import Comunidad from "../Comunidad";
  import Productos from "../Productos";
  import Notes from "../Notes";
  import Header from "../compartidos/Header";
  
function Navbar () {
    return (
      <Router>
          <div> 
            <Header />
          </div>
          <div>
            <div className="container content-left margin-b-50">
              <h4>
                  <Link to="/" className="link">Home</Link>
              </h4>
              <h4>
                  <Link to="/comunidad" className="link">Comunidad</Link>
              </h4>
              <h4>
                  <Link to="/productos" className="link">Productos</Link>
              </h4>
              <h4>
                  <Link to="/comentarios" className="link">Comentarios</Link>
              </h4>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/comunidad">
              <Comunidad />
            </Route>
            <Route path="/productos">
              <Productos />
            </Route>
            <Route path="/comentarios">
              <Notes />
            </Route>
          </Switch>
      </Router>


      );
};

export default Navbar;