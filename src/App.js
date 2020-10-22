import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'

const planeteerAPI = "http://localhost:4000/planeteers"
class App extends React.Component {

  state = {
    api: [],
  }

  componentDidMount(){
    fetch(planeteerAPI)
    .then(resp => resp.json())
    .then(data => {
      this.setState({ api: data })
    })
  }

  
  render(){
    return (
      <div>
        <Header />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.api}/>
      </div>
    );
  }

}

export default App;

// return this.state.api.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase())).map(planeteer => <Planeteer key/>)
