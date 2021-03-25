import axios from 'axios';

const instance = axios.create({baseURL : "https://api.themoviedb.org/3"});

// with this , any time we want to make a request like instance.get('/foo-bar'); , we obtain a request like 

//https://api.themoviedb.org/3/foo-bar

export default instance;