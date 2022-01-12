import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/App.css';
import Navbar from "./components/compartidos/Navbar";
import Footer from "./components/compartidos/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Route>
        <div> 
          <Navbar />
        </div>
        <div>
          <Footer />
        </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
