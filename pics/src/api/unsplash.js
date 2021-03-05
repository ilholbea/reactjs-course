import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FcGLMe1AcAGdwcVpLWOo5wU3sPKAy4NYbzxDucBoSzo',
  },
});
