import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import FlashMessage from 'react-flash-message';
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: '',
      formSubmitting: false,
      user: {
        name: '',
        email: '',
        password: '',
        role_id: ''
      },
      redirect: props.redirect,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
    }
  }
  componentDidMount() {
    const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: '/dashboard' } };
    if (prevLocation && this.state.isLoggedIn) {
      return this.props.history.push(prevLocation);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({formSubmitting: true});
    let userData = this.state.user;
    axios.post("/api/auth/login", userData).then(response => {
      
      return response;
    }).then(json => {
         if (json.data.success) {
           let userData = {
             id: json.data.id,
             name: json.data.name,
             email: json.data.email,
             access_token: json.data.access_token,
             role_id: json.data.role_id,
           };
           let appState = {
             isLoggedIn: true,
             user: userData
           };
           localStorage["appState"] = JSON.stringify(appState);
           this.setState({
              isLoggedIn: appState.isLoggedIn,
              user: appState.user,
              error: ''
           });
           location.reload()
         }
         else {
            alert(`Our System Failed To Register Your Account!`);
         }
    }).catch(error => {if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        let err = error.response.data;
        this.setState({
          error: err.message,
          errorMessage: err.errors,
          formSubmitting: false
        })
      }
      else if (error.request) {
        // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        let err = error.request;
        this.setState({
          error: err,
          formSubmitting: false
        })
     } else {
       // Something happened in setting up the request that triggered an Error
       let err = error.message;
       this.setState({
         error: err,
         formSubmitting: false
       })
   }
 }).finally(this.setState({error: ''}));
}
handleEmail(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, email: value
    }
  }));
}
handlePassword(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, password: value
    }
  }));
}
render() {
  const { state = {} } = this.state.redirect;
  const { error } = state;
  return (
    
    <div className="container">
      <div class="card  mt-3 mx-auto" style={{maxWidth:'28rem' }}>
  <div class="card-header text-center" ><h3>Sign In</h3></div>
  <div class="card-body">
  <div className="row">
        <div className="col-md-8 col-sm-12 col-12 mx-auto">          
          {this.state.isLoggedIn ? <FlashMessage duration={60000} persistOnHover={true}>
          <h5 className={"alert alert-success"}>Login successful, redirecting...</h5></FlashMessage> : ''}
          {this.state.error ? <FlashMessage duration={100000} persistOnHover={true}>
          <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5></FlashMessage> : ''}
          {error && !this.state.isLoggedIn ? <FlashMessage duration={100000} persistOnHover={true}>
          <h5 className={"alert alert-danger"}>Error: {error}</h5></FlashMessage> : ''}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input id="email" type="email" name="email" placeholder="E-mail" className="form-control" required onChange={this.handleEmail}/>
            </div>
            <div className="form-group">
              <input id="password" type="password" name="password" placeholder="Password" className="form-control" required onChange={this.handlePassword}/>
            </div>
           <button disabled={this.state.formSubmitting} type="submit" name="singlebutton" className="btn btn-primary btn-lg  btn-block mb10"> {this.state.formSubmitting ? "Logging You In..." : "Log In"} </button>
           </form>
           <p className="text-white text-center mt-3">Don't have an account? <Link to="/register" className="text-yellow"> Register</Link> | 
          <span className="pull-right">
            <Link to="/" className="text-white">Home</Link>
          </span>
        </p>
        </div>

      </div>
  </div>
</div>
      
    </div>
    )
  }
}
export default withRouter(LoginContainer);