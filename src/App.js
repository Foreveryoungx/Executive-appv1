import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Navbar from './Components/Navbar';
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import './App.css'
import About from './Components/Pages/About';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Footer/>
            </Router>
        </ChakraProvider>

    );
}

export default App;
