import './styles/main.scss'

import { myFramework } from './base/myFramework';

const framework = new myFramework({
    el: document.getElementById("root"),
    values:{
        something:'not-whatever'
        },
    methods:{
        someMethod(ev:Event) {
        console.log(ev.target);
        }
    }
  },
);



