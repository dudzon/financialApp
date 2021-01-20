import { CustomAttributes, ParamsObject } from "./models/model";

export class myFramework {
  constructor(params: ParamsObject) {
    this.el = document.getElementById(params.el);
    this.methods = params.methods;
    this.init(params);
  }

  el: HTMLElement;
  methods: Object;
  watchers: any;

  init(params: ParamsObject): void {
    this.setWatchers(params);
    this.render();
  }

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
              this.getHtmlAttr(element, attrName);
              break;

            case CustomAttributes.vif:
              this.getIfAttr(element, attrName);
              break;

            case CustomAttributes.vclick:
            case CustomAttributes.vchange:
              const attr = element.getAttribute(attrName);
              let customEventName: string = element.getAttributeNode(attrName)
                .name;
              let eventCallbackName: string = element.getAttributeNode(attrName)
                .value;

              const [bracketIndex, prefix] = this.parseCallbackName(
                "v-",
                "(",
                eventCallbackName
              );
              eventCallbackName = eventCallbackName.slice(
                0,
                bracketIndex as number
              );

              if (customEventName.startsWith(prefix as string)) {
                customEventName = customEventName.slice(2);
              }

              if (
                typeof (this as any).methods[eventCallbackName] === "function"
              ) {
                element.removeEventListener(customEventName, (args) =>
                  (this as any).methods[eventCallbackName].call(
                    (this as any).methods[eventCallbackName],
                    args
                  )
                );
                element.addEventListener(customEventName, (args) =>
                  (this as any).methods[eventCallbackName].call(
                    (this as any).methods[eventCallbackName],
                    args
                  )
                );
              }
              break;

            case CustomAttributes.vmodel:
              const el = element.getAttributeNode(attrName).ownerElement;

              if (el instanceof HTMLInputElement) {
                const [char] = this.parseAttributeName(el, attrName);

                Object.keys(this.watchers).forEach((key: string) => {
                  if (key === char) {
                    el.removeEventListener("change", () => {});
                    el.addEventListener("change", (ev: Event) => {
                      this.watchers[key] = (ev.target as any).value;
                    });
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
    return true;
  }
  setWatchers(params: ParamsObject): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this.watchers = new Proxy(
      { ...params.data(), ...params.methods },
      {
        get(target, prop) {
          return (target as any)[prop];
        },

        set(target, prop, value) {
          (target as any)[prop] = value;
          return self.render();
        },
      }
    );
  }
  getHtmlAttr(el: Element, attributeName: string): void {
    const customHtml = el.getAttribute(attributeName);
    el.textContent = this.watchers[customHtml];
  }
  getIfAttr(el: Element, attributeName: string): void {
    const [key, value]: string[] = this.parseAttributeName(el, attributeName);
    (el as HTMLElement).style.display = "none";
    if (this.watchers[key] === value) {
      if (el instanceof HTMLElement) {
        el.style.display = "block";
      }
    }
  }
  parseCallbackName(
    prefix: string,
    bracket: string,
    callbackName: string
  ): (string | number)[] {
    const bracketIndex = callbackName.indexOf(bracket);
    return [bracketIndex, prefix];
  }
  parseAttributeName(el: Element, attributeName: string): string[] {
    const customAttr: string = el.getAttribute(attributeName);
    const split: string[] = customAttr.split(" ");
    const key: string = split[0];
    const value: string = split[2];

    return [key, value];
  }
}
