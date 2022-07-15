import axios from "axios";
import {privateEnv} from '../../private';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + privateEnv["unsplash_key"]
  }
});