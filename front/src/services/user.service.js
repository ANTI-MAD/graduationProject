import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'bucket', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getCatalogBoard() {
    return axios.get('http://localhost:8080/api/catalog', { headers: authHeader() });
  }

  addToBucket(productId) {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    return axios.post('http://localhost:8080/api/addToBucket', {productId, userId}, { headers: authHeader() });
  }

  addProduct(product){
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    return axios.post('http://localhost:8080/api/addProduct', {product, userId}, { headers: authHeader() });
  }

  getBucket() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    return axios.post('http://localhost:8080/api/getBucket', {userId}, { headers: authHeader() });
  }

  deleteFromBucket(bucketId) {
    return axios.post('http://localhost:8080/api/deleteFromBucket', {bucketId}, { headers: authHeader() });
  }

  createOrder(buckets) {
    return axios.post('http://localhost:8080/api/createOrder', {buckets}, { headers: authHeader() });
  }

  getOrders() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    console.log(userId);
    return axios.post('http://localhost:8080/api/getOrders', {userId}, { headers: authHeader() });
  }
}

export default new UserService();
