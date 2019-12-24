    // resources/assets/js/components/RestaurantList.js

    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    import Nav from '../Nav';
    
    class RestaurantList extends Component {
      constructor () {
        super()
        this.state = {
          restaurants: []
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
        		<div className="container">
        		<div className="row">
        		 <h4>Populars Restaurants near you</h4>
        		</div>

        		<div className="row">
            {restaurants.map(restaurant => (
        		<div className="col-md-4">
        		<div className="card mb-4 shadow-sm">
        		
        		                    <div className="card-body">
        		                    <h5 className="card-title">
                                  
                                  <Link
                          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                          to={`restaurant/${restaurant.id}`}
                          key={restaurant.id} 
                        >
                          {restaurant.name}
                          <span className='badge badge-primary badge-pill'>
                            
                          </span>
                        </Link></h5>
        		                    <p className="card-text">.</p>
        		                    <div className="d-flex justify-content-between align-items-center">
        		                    <button type="button" className="btn btn-secondary">
        		                    15-20 mins
        		                    </button>
        		                    <button type="button" className="btn">
        		                    <span className="badge badge-pill badge-light">4.1</span> <span
        		                    className="fa fa-star checked"></span>
        		                    </button>
        		                    </div>
        		                    </div>
                                
        		                    </div>
        		</div>
            ))}
        </div>
        
				</div>
        )
      }
    }

    export default RestaurantList