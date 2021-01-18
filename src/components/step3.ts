import { myFramework } from './../../framework/framework';

export class Step3 {

    constructor() {
        this.init();
    }
    
    init() {
        const step3 = new myFramework({
            el: 'three',
            data() {
                return {}
            },
            methods: {}
        })

        return step3;
    }
}