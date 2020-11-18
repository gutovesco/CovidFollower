import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users';
const PREVENTIONS_REST_API_URL = 'http://localhost:8080/api/preventions';
const NEWS_REST_API_URL = 'http://localhost:8080/api/news';
const CASES_REST_API_URL = 'http://localhost:8080/api/cases';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    getPreventions(){
        return axios.get(PREVENTIONS_REST_API_URL);
    }

    getNews(){
        return axios.get(NEWS_REST_API_URL);
    }

    getCases(){
        return axios.get(CASES_REST_API_URL);
    }
}

export default new UserService();