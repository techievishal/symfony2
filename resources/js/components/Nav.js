import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user: props.userData,
             isLoggedIn : props.userIsLoggedIn
        }
        
    }

    logOut() {
        let appState = {
          isLoggedIn: false,
          user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push('/login');
      }
    
    render() {
        return (
        
            <nav className="navbar navbar-light sticky-top" style={{background: "#fff"}}>
    			<div className="container">
    				<h2>    					
                        <Link className='navbar-brand' to='/'>
                        Flavaste
                      </Link>
    				</h2>  				
    				
    				<div className="dropdown-divider"></div>
    				<div className="col-md-8">
    				<div className="float-right">
    				{this.state.isLoggedIn ? 
		            <span>Hello {this.state.user.name}, {this.state.user.role_id == 3 ? <Link to="/questionarie/2"> | Manage Questionarie | </Link> :""}<Link to="/logout">Logout</Link></span> : ""}
    				{!this.state.isLoggedIn ?		            
    				<span><Link to="/login" className="">SignIn </Link><Link to="/register"  className="btn btn-primary"> Sign Up </Link> </span> : ""}
    		        </div>
    				</div>   					
    				

    			</div>
    		</nav>
            
        )
    }
}

export default Nav
