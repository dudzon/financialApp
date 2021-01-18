import { myFramework } from './../../framework/framework';

export class Step4 {

    constructor() {
        this.init();
    }
    
    init() {
        const step4 = new myFramework({
            el: 'four',
            data() {
                return {}
            },
            methods: {}
        })

        return step4;
    }
}