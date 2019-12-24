import axios from 'axios'
import React, { Component } from 'react'
import Nav from '../Nav';

class SetQuestionarie extends Component {

    constructor (props) {
        super(props)
        this.state = {
            days_of_week:['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'],
            days_of_week_set: [] 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        

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
    const restaurantId = this.props.match.params.id
    axios.get(`/api/questionarie/${restaurantId}`).then(response => {  debugger;   
     this.setState({
      days_of_week_set: response.data[0]
     })
   })
  }

  handleCheck(e){
    this.setState({
     checked: e.target.checked
    })
  }

  handleSubmit(e) { 
    e.preventDefault();

    const formData = new FormData(e.target)
    const scheduledTasks = {}
 
    e.preventDefault()
    const restaurantId = this.props.match.params.id
    for (let entry of formData.entries()) {
      scheduledTasks[entry[0]] = entry[1]
    } 
    
    scheduledTasks['restaurant_id'] = restaurantId
    
    
    axios.post("/api/setquestionarie", scheduledTasks)
      .then(response => { 
        return response;
    }).then(json => {   
        if (json.data.success) {
          this.setState({
            formSubmitting: false,
            showForm:false          
          });
        } else {
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

    render(){
        const { restaurant, days_of_week,days_of_week_set} = this.state;

return (

    <div>
    <Nav userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />  
        <div className="container">
    <div><h3> Questionarie </h3></div>
    
        <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="questionSetID" id="questionSetID" value={days_of_week_set.id} />
        <h6 class="card-subtitle mb-2 text-muted">What days?</h6>
        <p class="card-text">
        <div className="col-md-8">
        {days_of_week.map((days, j) => (
        <label class="checkbox-inline mr-2">
        <input type="checkbox" name={days} value={days} id={days} checked={days_of_week_set[days]} onClick={this.handleCheck}  />{days}
        </label>
        ))}
        </div>
<div className="col-md-6">
<button type="button" className="btn btn-secondary  float-right" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary mr-3 float-right"  disabled={this.state.formSubmitting ? "disabled" : ""}>Save changes</button> 
        <br />
        </div>


        </p>


    </form>
        </div>
    </div>
    )

    }

}


export default SetQuestionarie