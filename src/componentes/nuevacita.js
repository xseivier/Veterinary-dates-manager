import React, {Component} from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    date: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom:''
      },

      error: false
}

class NuevaCita extends Component {
  state = {
     ...initialState
  }

  handleChange = (e) => {
      this.setState({
          date: {
              ...this.state.date,
               [e.target.name]: e.target.value
          }
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()

      const {pet, owner, date, time, symptom} = this.state.date 

     if(pet === '' || owner === '' || date === '' || time === '' || symptom === '' ){
        this.setState({error:true})
        return;
     }

     const newDate = this.state.date
     newDate.id = uuid()
     this.props.createNewDate(newDate)

    this.setState({...initialState})

  }
    render() {

        const { error } = this.state;
        return(
         <div className="card mt-5 py-5">
            <div className="card-body">
              <h2 className="card-title text-center mb-5">
                  Create a new date
              </h2>

              <form
              onSubmit={this.handleSubmit}>
              <div className="form-group row">
                           <label className="col-sm-4 col-lg-2 col-form-label">Pet name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="pet"
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet name"
                                    name="pet"  
                                    onChange={this.handleChange}
                                    value={this.state.date.pet}                          
                                />
                            </div>
              </div> {/* form-group */}

              <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="owner"
                                    type="text"
                                    className="form-control"
                                    placeholder="owner"
                                    name="owner"      
                                    onChange={this.handleChange}
                                    value={this.state.date.owner}                      
                                />
                            </div>
              </div> {/* form-group */}

              <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="date"
                                    type="date"
                                    className="form-control"
                                    name="date"  
                                    onChange={this.handleChange}  
                                    value={this.state.date.date}                        
                                />
                            </div>
              </div> {/* form-group */}

              <div className="form-group row">
                         <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="time"
                                    type="time"
                                    className="form-control"
                                    name="time"     
                                    onChange={this.handleChange}  
                                    value={this.state.date.time}                     
                                />
                            </div>
              </div> {/* form-group */}

              <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    name="symptom"
                                    placeholder="Describe the symptoms"
                                    onChange={this.handleChange}
                                    value={this.state.date.symptom}
                                ></textarea>
                            </div>
                        </div> {/* form-group */}

                        { error ? <div className="alert alert-danger mt-2 mb-5 text-center">You must enter all the requested fields</div>  : null  }

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Add a new date" />
              </form>
            </div>
        </div>
        )
    }
}

export default NuevaCita