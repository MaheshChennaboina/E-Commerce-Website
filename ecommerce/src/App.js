import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import CartItem from"./cart/CartItem";

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Container>
      <Route path='/login' component={LoginScreen} />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/signup' component={SignUp}/>
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart' component={CartItem}></Route>
        
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
