import axios from 'axios';

export const loginMixin = {
    methods: {
        loginRequest(username, password) {
            return axios
                .post("http://localhost:3000/api/login", {
                    username: username,
                    password: password
                })
        }
    }
}