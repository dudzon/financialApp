import { BrowserHistoryEngine, createRouter } from "routerjs";
import { View } from "./view";
import { RoutesNames } from "./model";


export const router = createRouter({
  engine: BrowserHistoryEngine({ bindClick: true }),
})
  .get("/", (req:any,context:any) => {
    router.navigate(`${RoutesNames.default}${RoutesNames.login}`);
  })
  .get("/login", (req: any, context: any) => {
    const v = new View(RoutesNames.login);
    v.init();
    v.show();
  })
  .get("/calc", (req: any, context: any) => {
    const v = new View(RoutesNames.calc);
    v.init();
    v.show();
  })
  .get("/step1", (req: any, context: any) => {
    const v = new View(RoutesNames.step1);
    v.init();
    v.show();
  })
  .get("/step2", (req: any, context: any) => {
    const v = new View(RoutesNames.step2);
    v.init();
    v.show();
  })
  .get("/step3", (req: any, context: any) => {
    const v = new View(RoutesNames.step3);
    v.init();
    v.show();
  })
  .get("/step4", (req: any, context: any) => {
    const v = new View(RoutesNames.step4);
    v.init();
    v.show();
  });
