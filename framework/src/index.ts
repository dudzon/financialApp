import './styles/main.scss'

import { myFramework } from './base/myFramework';

const framework = new myFramework(
    document.getElementById("example")
);
framework.render();
