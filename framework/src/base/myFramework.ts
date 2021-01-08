import { CustomAttributes } from "../models/custom-attrs";
 let target:any = null;
//  const data = {
//    value1: 7,
//    value2: 10
//  }
export class myFramework {

  constructor(obj: { [key: string]: any }) {
    this.el = obj.el;
    this.data = obj?.data;
    this.methods = obj?.methods;
    this.values = obj?.values;
    this.watchers = obj?.watchers;
    this.init();
  }

  el: HTMLElement;
  data: {};
  methods: {};
  values: {};
  watchers: {};
  init() {
    this.render();
    this.setWatchers();
  };
  render(nodes: HTMLCollection = null) {
    const elems = nodes || this.el.children;

    for (let i = 0; i < elems.length; i++) {
      const element: Element = elems[i];
      const attrs = Array.from(element.attributes);

      attrs.map((attribute: Attr) => {
        const attrName: string = attribute.name;
        if (element.attributes.hasOwnProperty(attrName)) {

          switch (attrName) {
            case CustomAttributes.vhtml:
              const customHtml = element.getAttribute(attrName);
              element.textContent = customHtml;
              break;

            case CustomAttributes.vif:
              const customAttr = element.getAttribute(attrName);
              const splitted = customAttr.split(' ');
              if (this.values) {
                Object.values(this.values).forEach((value) => {
                  if (value === splitted[2]) {
                    if (element instanceof HTMLElement) {
                      element.style.display = 'none'
                    }
                  }
                })
              }
              break;

            case CustomAttributes.vclick:
            case CustomAttributes.vchange:
              let customEventName: string = element.getAttributeNode(attrName).name;
              let eventCallbackName: string = element.getAttributeNode(attrName).value;
              const prefix: string = 'v-';
              const leftBracket: string = '(';
              const bracketIndex = eventCallbackName.indexOf(leftBracket);
              eventCallbackName = eventCallbackName.slice(0, bracketIndex);

              if (customEventName.startsWith(prefix)) {
                customEventName = customEventName.slice(2);
              }
              if (typeof (this as any).methods[eventCallbackName] === 'function') {
                element.addEventListener(customEventName, (this as any).methods[eventCallbackName])
              }
              break;
            case CustomAttributes.vvalue:
              let customValueTag: string = element.getAttributeNode(attrName).value;
              const data = this.data;
             
              if (data) {
                 console.dir(element,'element')
                Object.entries(data).forEach(([key, value]) => {
                  if (customValueTag === key) {
                    if (element instanceof HTMLInputElement) {
                      element.value = value as string
                      element.placeholder = value as string;
                    }
                  }
                });
              }
          }
        }
      });
      if (elems[i].children) {
        this.render(elems[i].children);
      }
    }
  };
  setWatchers() {
  
    let data = this.data;

    let deps = new Map();
   
    Object.keys(data).forEach(key => {
      deps.set(key,new Dependency()); 
    
    })
  console.log(deps,'deps')
    let data_without_proxy = data;
    data = new Proxy(data_without_proxy, {
      get(obj,key) {
        console.log(obj,'obj')
        console.log(key, 'key')
        deps.get(key).depend();
  
        return (obj as any)[key];
      },
      set (obj,key,newVal) {
        console.log(obj,'obj');
        (obj as any)[key] = newVal;
        deps.get(key).notify();
        return true;
      }
    });
    console.log(data);
  
 
  // function watcher(myFunc:any) {
  //     target = myFunc;
  //     console.log(target,'target')
  //     target();
  //     target = null;
    
  //   }
  // let total = 0;
  // // Object.keys(this.watchers).forEach(key => {
  // //   watcher(() => {
  // //     (this.watchers as any)[key].call(this);
  // //   })
  // //   })
  // watcher(() => {
  //   total = (this.data as any).value1;
  //   console.log(total);
  // })
  }
}


class Dependency {
  subscribers:any[];
  // target:any;
  

  constructor(){
    this.subscribers =[];
    // this.target = target;
  }

  depend() {
      console.log(this.subscribers,'subscribers-depend')
      console.log(target, 'target from deps')
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    
    }
  }
  notify() {
    this.subscribers.forEach(sub => sub());
    console.log(this.subscribers,'subscribers-notify')
  }
}

  // function watcher(myFunc:any) {
  //     target = myFunc;
  //     console.log(target,'target')
  //     target();
  //     target = null;
    
  //   }
  // let total = 0;
  // // Object.keys(this.watchers).forEach(key => {
  // //   watcher(() => {
  // //     (this.watchers as any)[key].call(this);
  // //   })
  // //   })
  // watcher(() => {
  //   total = (this.data as any).value1;
  //   console.log(total);
  // })



