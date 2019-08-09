import axios from 'axios';

const KEY = 'AIzaSyBb6R5-5mQYtKKosNF-gOKOAlyKGFr57DM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
