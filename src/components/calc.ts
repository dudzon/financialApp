import { myFramework } from './../../framework/framework';

export class Calc {

    constructor() {
        this.init();
    }
    
    init() {
        const calc = new myFramework({
            el: 'calc',
            data() {
                return {}
            },
            methods: {}
        })

        return calc;  
    }
}