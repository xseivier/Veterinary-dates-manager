import React, {Component} from 'react';
import './App.css';
import './bootstrap.min.css'
import Header from './componentes/header'
import NuevaCita from './componentes/nuevacita'
import ListaCitas from './componentes/listacitas.js'

class App extends Component {
  state = {
    dates: []
  }

  componentDidMount(){
    const datesLS = localStorage.getItem('dates')
    if(datesLS){
      this.setState({dates: JSON.parse(datesLS)})
    }

  }

  componentDidUpdate(){
    localStorage.setItem('dates', JSON.stringify(this.state.dates))
  }

  eraseDate = id => {
    const actualDates = [...this.state.dates]

    const dates = actualDates.filter(date => date.id !== id )

    this.setState({dates})
  }
   
  createNewDate = data =>{
    const dates = [...this.state.dates, data ]
    this.setState({dates})
  }

  render() {
    return(
      <div className='container'>
        <Header titulo='Veterinarian patient Manager' />

        <div className='row'>
          <div className="col-md-10 mx-auto">
            <NuevaCita 
            createNewDate={this.createNewDate}/>
          </div>

          <div className="mt-5 col-md-10 mx-auto">
                  <ListaCitas 
                      dates={this.state.dates}
                      eraseDate={this.eraseDate}

                  />
                </div>

        </div>
      </div>
    )
  }
}

export default App;
