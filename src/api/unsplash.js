/**
 => The goal of this file is to put together some amount of code that's going to contain the code related to configuration of Axios or related to somehow getting Unsplash to accept the requests
 NOTE: the nice thing about Axios is that you can set up a pre configured instance of the Axios client(the axios that we imported to our project) that has default properties set for where it's going to make a request to or headers or even params
 */

import axios from 'axios';

/*
=> axios.create() is going create an instance of Axios client with a couple of defaulted properties.So it allows us to a customized copy of Axios client towards request to some specific URL with the headers. It 's a copy of Axios with pre customized. 
*/
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Mn9AwdMNx50fXK1h5XOVOYXr4gAKtph5P1GhEjHTpZ4',
  },
});
