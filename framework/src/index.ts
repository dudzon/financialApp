import './styles/main.scss';

import { myFramework } from './base/myFramework';

const framework = new myFramework({
	el: document.getElementById('root'),
	// data() {
	// 	return {
	// 		value1: 7,
	// 		value2: 10
	// 	};
    // },
    data: {
		value1: 7,
		value2: 10
	},
	values: {
		something: 'not-whatever',
	},
	methods: {
		someMethod: function(ev: Event) {
			console.log(ev.target);
		},
		anotherMethod:function (ev:Event){
            // console.log((framework as any).value1++);
            const newValue = ++(framework as any).data.value1;
            //  ++(framework as any).data.value1;
            // console.log(newValue, 'newValue');
            (ev.target as HTMLInputElement).value = String(newValue);
            // console.log(ev);
            // console.log(framework);
        },
        thirdMethod: function(ev: Event) {
            (ev.target as HTMLInputElement).value = (framework as any).data.value1;
			console.dir(ev.target);
		},
    },
    watchers: {
        value1(oldValue:number){  
            console.log(this.data.value1, 'watchers -value1', oldValue)

        }
    }
});
