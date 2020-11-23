import axios from "axios";

var url = window.location.href
var arr = url.split("/");
arr[2] = arr[2] === 'localhost:3000' ? 'localhost:8080' : arr[2];
var result = arr[0] + "//" + arr[2];

const API_URL = `${result}/api/auth/`;

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();