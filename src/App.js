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
import Gallery from "./Components/Pages/Gallery";
import Brows from "./Components/Pages/Brows";
import "react-image-gallery/styles/css/image-gallery.css";
import 'react-slideshow-image/dist/styles.css'
import Footer from "./Components/Pages/Footer/Footer";


function App() {
  return (
      <ChakraProvider>
          <Router>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/home" component={Home}/>
              <Route path="/services" component={Services}/>
              <Route path="/haircuts" component={Haircuts}/>
              <Route path="/brows" component={Brows}/>
              <Route path='/gallery' component={Gallery} />
          </Switch>
              <Footer />
          </Router>
      </ChakraProvider>

  );
}

export default App;
