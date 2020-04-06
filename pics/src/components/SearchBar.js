import React from "react";

class SearchBar extends React.Component{
  state = {term: ""};

  constructor(props) {
    super(props);
  }

  onFormSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.term);
  };

  render(){
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input className="field" value={this.state.term} type="text" onChange={(e)=>this.setState({term:e.target.value})}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;