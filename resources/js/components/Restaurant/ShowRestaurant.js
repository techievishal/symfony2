 // resources/assets/js/components/ShowRestaurant.js

 import axios from 'axios'
 import React, { Component } from 'react'
 import useState from 'usestate';
 import Accordion from 'react-bootstrap/Accordion'
 import Card from 'react-bootstrap/Card'
 import Button from 'react-bootstrap/Button'
 import Questionarie from './QuestionariePopup'
 import Nav from '../Nav';

 class ShowRestaurant extends Component {
   constructor (props) {
     super(props)
     this.state = {
      isLoggedIn: false,
      user: {},
      formSubmitting: false,
      showForm: true,
       restaurant: {},
       show:[],
       setShow:[],
       menus:[],
       time_options:[],
       how_long_options:[],
       days_of_week:[],
       how_long: '',
       scheduledTasks: {
        foodItem: '',
        restaurantName: '',
        restID: '',
        day_scheduled: '',
        time_scheduled: '',
        how_long: '',
        days_week_month: '',
    },
     }
     this.handleFieldChange = this.handleFieldChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleItemChange = this.handleItemChange.bind(this)
     this.handleEditItem = this.handleEditItem.bind(this)
   }

   handleFieldChange (e) {  
  }


  
  handleEditItem(selectedItem) {
debugger;
  }

  handleModalHide() {

  }

  handleItemChange(itemId) {

  }
  


   handleSubmit(e) { 
    e.preventDefault();

    const formData = new FormData(e.target)
    const scheduledTasks = {}
 
    e.preventDefault()
 
    for (let entry of formData.entries()) {
      debugger;
      scheduledTasks[entry[0]] = entry[1]
    }
    
    
    
    //let scheduledTasks = this.state.how_long;
    
    axios.post("/api/menu/schedule", scheduledTasks)
      .then(response => { 
        return response;
    }).then(json => {      
      
        if (json.data.success) {
          debugger;
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

     axios.get(`/api/restaurant/${restaurantId}`).then(response => {
       this.setState({
        restaurant: response.data[0]
       })
     })

     axios.get(`/api/menu/${restaurantId}`).then(response => {debugger;
      
      this.setState({
       menus: Object.values(response.data.menu),
       time_options: [0,1,2,3,4,5,6,7,8,9],
       how_long_options: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
       days_of_week: Object.values(response.data.weekdays_options)
      })
    })
   }

   render () {
     const { restaurant, tasks,menus,time_options,how_long_options,days_of_week,formSubmitting,showForm } = this.state;
     return (
<div> 
<Nav userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />  
<div className="container p-3">  
<div className="p-3">
<div className="row border p-2">
     <div className="col-md-8"><h3>{restaurant.name}</h3></div>
<div className="col-md-4">
   <div className="badge badge-info rounded"><h3>3.8/5</h3><br />   
   <span>588 reviews</span></div>
</div>

<div className="col-md-12 border-top p-2">
Rate | Add Review | <a href="javascript:void(0)" onClick="javascript:alert('Hello')" >Hello</a>
</div>
</div> 


</div>
</div>
<div className="container p-3"> 
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Menu</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</a>
  </div>
</nav>
<div class="tab-content border" id="nav-tabContent">
  <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  
  <div class="row p-3">
    <div class="col-sm">
      Phone Number:
    </div>
    <div class="col-sm">
      Address:
    </div>
    <div class="col-sm">
      More Info:
    </div>
  </div>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  <Accordion defaultActiveKey="0">    
        {Object.keys(menus).map((company, i) => (
            <Card>
          <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={i}>
              {menus[i]['menu']}
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey={i}>
                
          <Card.Body> 
            <div>
            
            {menus[i]['menu_items'].map((product, j) => (
<div>
<li  class="" data-toggle="modal" data-target={'#'+product.bootstrap_name+''+j}>
. {product.name} 
</li> 

<div class="modal fade" id={product.bootstrap_name+''+j} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content"> 
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">{product.name} </h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    {!this.state.showForm ? <div duration={60000} persistOnHover={true}>
          <div className={"alert alert-success"}>
            Schedule added successfully, <br />
            Add another date? ....
          <br />
          <button type="button" className="btn btn-secondary mr-1" onClick={() => this.setState({showForm: true})}>Yes</button> 
          <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>           
          </div>          
          </div> : 

    <form onSubmit={this.handleSubmit}>
<input type="hidden" value={product.item_id} name="menu_item_id" />
<input type="hidden" value={this.props.match.params.id} name="restaurant_id" /> 
<h6 class="card-subtitle mb-2 text-muted">What days?</h6>
<p class="card-text">


{Object.keys(days_of_week[0]).map((p, c) => (   
<label class="checkbox-inline mr-2">
<input type="checkbox" name="day_scheduled[]" value={p} disabled={!days_of_week[0][p] ? "disabled" : ""} />{p}
</label>
))}

</p>

<h6 class="card-subtitle mb-2 text-muted">What time?</h6>
<p class="card-text">
<label class="checkbox-inline  mr-1">
<select class="form-control" name="hours_01" id="exampleFormControlSelect1" >
<option value="">H</option>
{time_options.map((hrs) => (
 <option value={hrs}>{hrs}</option>
))}

</select>
</label>
<label class="checkbox-inline  mr-5">
<select class="form-control" name="hours_02" id="exampleFormControlSelect1" >
<option value="">H</option>  
{time_options.map((hrs) => (
 <option value={hrs}>{hrs}</option>
))}

</select>    </label>
<label class="checkbox-inline  mr-1">
<select class="form-control" name="mins_01" id="exampleFormControlSelect1" >
<option value="">M</option>
{time_options.map((mins) => (
 <option value={mins}>{mins}</option>
))}
</select>
</label>
<label class="checkbox-inline  mr-3">
<select class="form-control" name="mins_02" id="exampleFormControlSelect1" >
<option value="">M</option>
{time_options.map((mins) => (
 <option value={mins}>{mins}</option>
))}

</select>
</label>
<label class="checkbox-inline">
<select class="form-control" name="time_format" id="exampleFormControlSelect1">
<option value="AM">AM</option>
  <option value="PM">PM</option>

</select>
</label>
</p>

<h6 class="card-subtitle mb-2 text-muted">How long?</h6>
<p class="card-text">

<label class="checkbox-inline mr-5">
<select class="form-control" name="how_long" id="exampleFormControlSelect1" >
  <option></option>
  {how_long_options.map((hl) => (
 <option value={hl}>{hl}</option>
))}
</select>
</label>
<label class="checkbox-inline">
<select class="form-control" name="frequency" id="exampleFormControlSelect1">
<option value="D">Days</option>
  <option value="W">Weeks</option>
  <option value="M">Months</option>

</select>
</label>
</p>  
<button type="button" className="btn btn-secondary  float-right" data-dismiss="modal">Close</button>
      <button type="submit" className="btn btn-primary mr-3 float-right"  disabled={this.state.formSubmitting ? "disabled" : ""}>Save changes</button> 
</form>
   }
    </div>
    <div class="modal-footer">
      
    </div>
  </div>
</div>
</div> 
</div>
))}
                  </div>
                  </Card.Body>
            </Accordion.Collapse>   

            </Card>

            
        ))}
        
    </Accordion>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    Feature in making ....
    

  </div>
</div>
</div>
</div>
     )
   }
 }

 export default ShowRestaurant