import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Header from './Header'
import Nav from './Nav';
import Footer from './Footer'
import SearchRestaurant from './Restaurant/SearchRestaurant'
import RestaurantList from './Restaurant/RestaurantList' 
import NewRestaurant from './Restaurant/NewRestaurant' 
import ShowRestaurant from './Restaurant/ShowRestaurant'
import SetQuestionarie from './Restaurant/SetQuestionarie'

import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import NotFound from './Auth/NotFound/NotFound'
// User is LoggedIn
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Auth/user/Dashboard/Dashboard"; 

const Main = () => (		
        
        <div className="">            
                    
          <Switch>              
          <Route exact path='/' component={SearchRestaurant} />
          </Switch>
          <Switch>              
          <Route exact path='/' component={RestaurantList} />
          <Route path='/restaurant/create' component={NewRestaurant} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/restaurant/:id' component={ShowRestaurant} />
          <PrivateRoute path='/questionarie/:id' component={SetQuestionarie} />
          </Switch>
          <hr />
          <Footer />
        </div>
      

);
export default Main;
