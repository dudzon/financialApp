import { createRouter } from 'routerjs';
import { View } from './view';
import { RoutesNames } from './model';


export const router = createRouter()
    .get('/login', (req:any, context:any) => {
        const v = new View(RoutesNames.login)
        v.show();
        v.init();
    })
    .get('/calc', (req:any, context:any) => {
        const v = new View(RoutesNames.calc);
        v.show();
        v.init();
    })
    .get('/step1', (req:any, context:any) => {
        const v = new View(RoutesNames.step1);
        v.show();
        v.init();
    })
    .get('/step2', (req:any, context:any) => {
        const v = new View(RoutesNames.step2);
        v.show();
        v.init();
    })
    .get('/step3', (req:any, context:any) => {
        const v = new View(RoutesNames.step3);
        v.show();
        v.init();
    })
    .get('/step4', (req:any, context:any) => {
        const v = new View(RoutesNames.step4);
        v.show();
        v.init();
    })

