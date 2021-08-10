import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  // Turn into arrow function, coz this function will be called as a callback function, no "this" problem later
  onSearchSubmit = async (term) => {
    /*
       =>  axios.get(); takes 2 arguments: 
       1 = the  address that we want to make a request to
       2 = an object that will have a bunch of options that will customize the request
       => The API address consists of 2 parts:
       1 = the root URL https://api.unsplash.com/ (Find it in Documentation -> Schema -> Location)
       2 = the rest of the address up to what u want to make a request. In our case, we want to request foto's.
       => To get access to the API, we have to indentify ourselves to tell it who is trying to access the Splash API. TO get instructions how to do that, Go to Documentation-> Autorization-> Public authentication. In our case we will pass our application’s access key via the HTTP Authorization header:
       => Get access key at : Your apps -> open up the project u just created -> get the key
       => "params" specifies the fifferent query string parameters
       => We can do unsplash.get() instead of axios.get() coz unsplash object is a cpied version of axios, so it can do anything like axios.
       => in unsplash.get(), we don't set the base-url of Unsplash and the headers info, coz we already customized it when we create the unsplash object.
       => <ImageList images={this.state.images}/> we do images={this.state.images} is how we pass data down from parent component to the child component
       */
    // Make a reuest to Unsplash API
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    /*
      => <SearchBar onSubmit={this.onSearchSubmit} /> ; We can name the attributes in the component whatever we want, in this case we name it "onSubmit" which is same as as the attribute for the form. But we can also name it like : whenUserSubmit
      */
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
