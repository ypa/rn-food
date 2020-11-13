import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer tRjQ3JBjri-W4N8LoclIn0uhbMaSOmALt0vNQS4_8-XMXZUZOse28wIb1tGheqH2AYPqHWf9y8oLxIrJeknMe47FZHpUfW7pYXxKxY3_3uRgWXK7KzhFzh77h16rX3Yx'
  }
});
