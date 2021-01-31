import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { book } from '../../constants/book';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Products from '../pages/Products';
import ContactUs from '../pages/ContactUs';
import SignUp from '../pages/SignUp';
import Marketing from '../pages/Marketing';
import Consulting from '../pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={book.home} exact component={Home} />
        <Route path={book.services} component={Services} />
        <Route path={book.products} component={Products} />
        <Route path={book.contactUs} component={ContactUs} />
        <Route path={book.signUp} component={SignUp} />
        <Route path={book.marketing} component={Marketing} />
        <Route path={book.consulting} component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
