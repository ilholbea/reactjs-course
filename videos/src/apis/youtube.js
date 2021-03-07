import axios from 'axios';

const KEY = 'AIzaSyDOB1kUMmm-N9q5A8vMllaHrpMRZitGyYo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
