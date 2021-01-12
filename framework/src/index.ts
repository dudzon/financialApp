import './styles/main.scss';

import { myFramework } from './base/myFramework';

const framework = new myFramework({
	el: 'root',
    data() {
        return {
		    value1: 'A random string',
            value2: 10,
            something: 'not-whatever',
            elem:'John',
        }
	},
	methods: {
		someMethod: function (ev: Event) {    
			console.log(ev.target);
		},
		anotherMethod:function (ev:Event){
            const oldString = (ev.target as HTMLInputElement).value;
            (ev.target as HTMLInputElement).value = oldString.toLowerCase();
        },
        thirdMethod: function(ev:Event) {
            const oldValue = +(ev.target as HTMLInputElement).value;
            const newValue = oldValue + 5;
            (ev.target as HTMLInputElement).value = newValue.toString();
        },
        whatever: function(){
            console.log(this,'this')
            return true;
        }
    },
});
