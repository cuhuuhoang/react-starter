import axios from "axios";
import {privateEnv} from '../../private';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: privateEnv["youtube_key"]
  }
});