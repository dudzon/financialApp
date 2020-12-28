import './styles/main.scss';

import { myFramework } from './base/myFramework';

const framework = new myFramework({
	el: document.getElementById('root'),
	data() {
		return {
			value1: 7,
			value2: 10
		};
	},
	values: {
		something: 'not-whatever',
	},
	methods: {
		someMethod: function(ev: Event) {
			console.log(ev.target);
		},
		anotherMethod:function (ev:Event){
            console.log((framework as any).value1++);
            console.log(ev);
            console.log(framework);
		}
    },
});
