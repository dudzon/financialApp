import { CustomAttributes, ParamsObject } from "../models/custom-attrs";

export class myFramework {
  constructor(params: ParamsObject) {
    this.el = document.getElementById(params.el);
    this.methods = params.methods;
    this.init(params);
  }

  el: HTMLElement;
  methods: Object;
  watchers: any;

  init(params: ParamsObject) {
    this.setWatchers(params);
    this.render();
  };

  render(nodes: HTMLCollection = null): boolean {
    const elems = nodes || this.el.children;

    for (let i = 0; i < elems.length; i++) {
      const element: Element = elems[i];
      const attrs = Array.from(element.attributes);

      attrs.map((attribute: Attr) => {
        const attrName: string = attribute.name;
        if (element.attributes.hasOwnProperty(attrName)) {

          switch (attrName) {
            case CustomAttributes.vhtml:
              // TODO: take out in to separate functions will be cleaner
              const customHtml = element.getAttribute(attrName);
              element.textContent = this.watchers[customHtml]
              break;

            case CustomAttributes.vif:
              const customAttr = element.getAttribute(attrName);
              const split = customAttr.split(' ');
              const key = split[0];
              const value = split[2];

              if (this.watchers[key] === value) {
                if (element instanceof HTMLElement) {
                  element.style.display = 'none'
                }
              }
              break;

            case CustomAttributes.vclick:
            case CustomAttributes.vchange:

              const attr = element.getAttribute(attrName);
              let customEventName: string = element.getAttributeNode(attrName).name;
              let eventCallbackName: string = element.getAttributeNode(attrName).value;

              // TODO: parse logic also will be good to separate
              const prefix: string = 'v-';
              const leftBracket: string = '(';
              const bracketIndex = eventCallbackName.indexOf(leftBracket);
              eventCallbackName = eventCallbackName.slice(0, bracketIndex);

              if (customEventName.startsWith(prefix)) {
                customEventName = customEventName.slice(2);
              }

              if (typeof (this as any).methods[eventCallbackName] === 'function') {
                element.removeEventListener(customEventName, (args) => (this as any).methods[eventCallbackName].call((this as any).methods[eventCallbackName], args));
                element.addEventListener(customEventName, (args) => (this as any).methods[eventCallbackName].call((this as any).methods[eventCallbackName], args));
              }
              break;
            case CustomAttributes.vvalue:
              let customValueTag: string = element.getAttributeNode(attrName).value;
              if (element instanceof HTMLInputElement) {
                element.value = this.watchers[customValueTag];
                element.placeholder = this.watchers[customValueTag];
              }
          }
        }
      });

      if (elems[i].children) {
        this.render(elems[i].children);
      }

    }
    return true;
  };
  setWatchers(params: ParamsObject) {
    const self = this;
    this.watchers = new Proxy({ ...params.data(), ...params.methods }, {

      get(target, prop) {
        return (target as any)[prop]
      },

      set(target, prop, value) {
        (target as any)[prop] = value;
        return self.render();
      }
    })
  }
}

