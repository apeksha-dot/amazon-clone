import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51HT9U2HKJucAc98OKYI5AWbZyWLaZiIZO7rkVjvlcK3H8xUIRWz4xQmAA8wGG9QVUMyY7B3XQW9PEMJcuoHPMHfY00I57L9Jsk"
);

function App() {

  const[{}, dispatch] = useStateValue();
   
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

 
  return (
    <Router>
      <div className="app">
        <Switch>

          {/* this is orders route */}
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>

          {/* this is login route */}
          <Route path="/login">
            <Login />
          </Route>

          {/* !-- this is second route --! */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* this is payment route */}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* !-- this is first route --! */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }

export default App;
