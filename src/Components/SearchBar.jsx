import React from 'react';

class SearchBar extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div className="search">
        <input type="text" value={this.props.searchValue} onChange={this.props.searchHandler}></input>
      </div>
    );
  }

}

export default SearchBar;
