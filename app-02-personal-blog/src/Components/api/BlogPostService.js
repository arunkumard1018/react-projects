import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://blog-app-rest-service-env.eba-thc2nbra.us-east-1.elasticbeanstalk.com'
    }
);



export const executeJwtAuthenticationService
    = (username, password) =>
        apiClient.post(`/authenticate`, { username, password })