import React from 'react';
import Planeteer from './Planeteer'
import SearchBar from './SearchBar'

class PlaneteersContainer extends React.Component {

  state = {
    searchValue: ""
  }
  renderPlaneteers = () => {
    return this.props.planeteers.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase())).map(planeteerObj => <Planeteer key={planeteerObj.id} planeteer={planeteerObj}/>)
}
  
  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value})
  }

  render() {
    return (
      <>
      <SearchBar searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
      <ul className="cards">
        {this.renderPlaneteers()}
      </ul>
      </>
    )

  }


};

export default PlaneteersContainer;
