
    import React, {Component} from 'react'
    import {Link, withRouter} from 'react-router-dom';
    
    class Header extends Component {
    constructor(props) {
        super(props);
          this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
          };
          this.logOut = this.logOut.bind(this);
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
        const aStyle = {
          cursor: 'pointer'
        };
        
        return (
<div>
Hello
</div>

        )
      }
    }



    export default withRouter(Header)