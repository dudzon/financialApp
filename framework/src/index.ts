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
		someMethod(ev: Event) {
			console.log(ev.target);
		},
		anotherMethod(ev:Event) {
            console.log((<HTMLInputElement>ev.target).value);
            console.dir(ev.target)
		}
	}
});
