import axios from 'axios';

export const getVisitorInfo = () => {
  return axios.get('http://api.uomg.com/api/visitor.info?skey=774740085');
};
