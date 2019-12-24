import React, {Component} from 'react'
import RestaurantList from '../../../Restaurant/RestaurantList' 
import Nav from '../../../Nav';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
// check if user is authenticated and storing authentication data as states if true
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
// 4
render() {
    return (
      <div>
        <Nav userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />   
      <RestaurantList />
      </div> 
      )
    }
  }
export default Home