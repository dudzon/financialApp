import axios from 'axios';
import * as store from '../store/index'

export const loginMixin = {
    methods: {
        loginRequest(username, password) {
            console.log(username, 'in logreq')
            this.$store.dispatch('getLoginData', {
                password: password,
                username: username
            })
            return axios
                .post("http://localhost:3000/api/login", {
                    username: username,
                    password: password
                })
        }
    },
    store
}