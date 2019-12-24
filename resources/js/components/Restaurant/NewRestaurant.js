 
     // resources/assets/js/components/NewRestaurant.js

    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class NewRestaurant extends Component {
      constructor (props) {
        super(props)
        this.state = {
          name: '',
          description: '',
          errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }

      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleCreateNewProject (event) {
        event.preventDefault()

        const { history } = this.props

        const project = {
          name: this.state.name,
          description: this.state.description
        }

        axios.post('/api/projects', project)
          .then(response => {
            // redirect to the homepage
            history.push('/')
          })
          .catch(error => {
            this.setState({
              errors: error.response.data.errors
            })
          })
      }

      hasErrorFor (field) {
        return !!this.state.errors[field]
      }

      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }

      render () {
        const { restaurants } = this.state
        return (
          <header className="masthead">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center">
      
		 <div className="overlay"></div>
		
		 <div className="col-xl-9 mx-auto float-left">
					<h3 className="mb-2">Reach to your customers faster</h3>
		 </div>
		 <div className="col-md-10 col-lg-8 col-xl-7 mx-auto float-right">
					<form onSubmit={this.handleCreateNewProject}>
                      <div className='form-group col-md-6'>                        
                        <input
                          id='name'
                          type='text'
                          className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                          name='name'
                          value={this.state.name}
                          onChange={this.handleFieldChange}
						  placeholder="Restaurant Name"
                        />
                        {this.renderErrorFor('name')}
                      </div>
					  <div className='form-group col-md-6'>                        
                        <input
                          id='address'
                          type='text'
                          className={`form-control ${this.hasErrorFor('address') ? 'is-invalid' : ''}`}
                          name='address'
                          value={this.state.address}
                          onChange={this.handleFieldChange}
						  placeholder="Restaurant Address"
                        />
                        {this.renderErrorFor('address')}
                      </div>
                      <div className='form-group col-md-6'>
                        <input
                          id='zipcode'
                          type='text'
                          className={`form-control ${this.hasErrorFor('zipcode') ? 'is-invalid' : ''}`}
                          name='zipcode'
                          value={this.state.zipcode}
                          onChange={this.handleFieldChange}
						  placeholder="Zipcode"
                        />
                        {this.renderErrorFor('zipcode')}
                      </div>

                      <div className='form-group col-md-6'>
                        <input
                          id='email'
                          type='text'
                          className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                          name='email'
                          value={this.state.email}
                          onChange={this.handleFieldChange}
						  placeholder="Email"
                        />
                        {this.renderErrorFor('email')}
                      </div>
                      <button className='btn btn-primary'>Create</button>
                    </form>
				</div>
		
		
		 
      </div>
    </div>
  </div>
</header>
         
        )
      }
    }

    export default NewRestaurant