import { myFramework } from './../../framework/framework';

export class Step1 {

    constructor() {
        this.init();
    }
    
    init() {
        const step1 = new myFramework({
            el: 'one',
            data() {
                return {}
            },
            methods: {}
        })

        return step1;
    }
}