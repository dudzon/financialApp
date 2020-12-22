import './styles/main.scss'

import { myFramework } from './base/myFramework';

const framework = new myFramework({
    el: document.getElementById("root"),
    values:{
        something:'not-whatever'
        }
    }
);



