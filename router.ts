import { createRouter } from 'routerjs';
import { View } from './view';
import { RoutesNames } from './model';


export const router = createRouter()
    .get('/login', (req:any, context:any) => {
        console.log('login working');

        const v = new View(RoutesNames.login)
        v.init();
        console.log(window,'window')
    })
    .get('/calc', (req:any, context:any) => {
        console.log('calc working')
        const v = new View(RoutesNames.calc);
        v.init();
        console.log(window,'window');
    })
    .get('/step1', (req:any, context:any) => {
        console.log('step1 working');
        const v = new View(RoutesNames.step1);
        v.init();
        console.log(window,'window');
    })
    .get('/step2', (req:any, context:any) => {
        console.log('step2 working');
        const v = new View(RoutesNames.step2);
        v.init();
        console.log(window,'window');
    })
    .get('/step3', (req:any, context:any) => {
        console.log('step3 working');
        const v = new View(RoutesNames.step3);
        v.init();
        console.log(window,'window');
    })
    .get('/step4', (req:any, context:any) => {
        console.log('step4 working');
        const v = new View(RoutesNames.step4);
        v.init();
        console.log(window,'window');
    })

