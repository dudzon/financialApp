import { myFramework } from './../../framework/framework';

export class Step2 {

    constructor() {
        this.init();
    }
    
    init() {
        const step2 = new myFramework({
            el: 'two',
            data() {
                return {}
            },
            methods: {}
        })

        return step2;
    }
}