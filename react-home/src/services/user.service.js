import axios from 'axios';
import authHeader from './auth-header';

var url = window.location.href
var arr = url.split("/");
arr[2] = arr[2] === 'localhost:3000' ? 'localhost:8080' : arr[2];
var result = arr[0] + "//" + arr[2];

const API_URL = `${result}/api/test/`;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();