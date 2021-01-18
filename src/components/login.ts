import { myFramework } from './../../framework/framework';

export class Login {

    constructor() {
        this.init();
    }
    
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