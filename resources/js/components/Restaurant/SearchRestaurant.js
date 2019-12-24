 SearchRestaurant
 
     // resources/assets/js/components/SearchRestaurant.js

    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    import Nav from '../Nav';

    class SearchRestaurant extends Component {
      constructor () {
        super()
        this.state = {
          restaurants: []
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
      componentDidMount () {
        axios.get('/api/restaurants').then(response => {
          this.setState({
            restaurants: response.data
          })
        })
      }

      render () {
        const { restaurants } = this.state
        return (
          <div>
          <Nav userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />  
         <header className="masthead text-white text-center mb-3">
		 <div className="overlay"></div>
		 <div className="container">
		 <div className="col-xl-9 mx-auto">
					<h3 className="mb-5">Your Favourites food, delivered by us!</h3>
		 </div>
		 <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
					<form>
					<div className="form-row">
							<div className="col-12 col-md-9 mb-2 mb-md-0">
								<input type="text" className="form-control form-control"
									placeholder=" Enter Delivery Address..." /> 
							</div>
							<div className="col-12 col-md-3">
								<button type="submit" className="btn btn-block btn-primary">Find
									Restaurants</button>
							</div>
						</div>
					
					</form>
				</div>
		</div>
		
		 </header>
     </div>
        )
      }
    }

    export default SearchRestaurant