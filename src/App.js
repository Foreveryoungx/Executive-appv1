import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Navbar from './Components/Navbar';
import './App.css';
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Haircuts from "./Components/Pages/Haircuts";


function App() {
  return (

      <Router>
      <ChakraProvider>
          <Navbar/>
          <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route path="/services" component={Services}/>
              <Route path="/haircuts" component={Haircuts}/>
          </Switch>
      </ChakraProvider>
      </Router>
  );
}

export default App;
