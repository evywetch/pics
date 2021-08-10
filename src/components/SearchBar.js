import React from 'react';
/*
####### This class responsible for letting user type the search and submit the value ########
=> Hier we make a class-based component coz we have to use state, to handle the user input (the user typing into the search bar)
=> onChange={this.onInputChange}: we dont call this.onInputChange() OR we leave the () off; coz onInputChange() is a callback function. If u put (), onInputChange() is going to be automatically called whenever your component is rendered
=> Any time that user types in to the input, our callback is going to be invoked.
=> The callback  onInputChange(event) will be ran with one argument being passed to it AUtomatically. And the passed in argument is the "event object"


*/

class SearchBar extends React.Component {
  /*
    #### Uncontrolled elements
    => We used to call this method whenever user types inputs 
                        -----------
  onInputChange(event) {
    console.log(event.target.value);
  }
  */
  // Controlled elements using "state"
  state = { term: '' };
  /*
We assign an arrow function to onFormSubmit to solve the "this" problem when we call this function as a callback

*/
  onFormSubmit = (event) => {
    // Prevent page load on form submit
    event.preventDefault();
    // NOTE: When we are in a class-based component, we reference the "props" object with "this"
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );

    /* 
    NOTE: Alternate Event Handler Syntax  <input type="text" onChange={(e) => console.log(e.target.value)}/>
        <input type="text" onChange={this.onInputChange} />

     */
  }
}

export default SearchBar;
