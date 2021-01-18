import { myFramework } from './../../framework/framework';

export class Login {

    init() {
        const login = new myFramework({
            el: 'login',
            data() {
                return {}
            },
            methods: {}
        })

        return login
    }
}