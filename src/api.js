import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users';
const PREVENTIONS_REST_API_URL = 'http://localhost:8080/api/preventions';


class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    getPreventions(){
        return axios.get(PREVENTIONS_REST_API_URL);
    }
}

export default new UserService();