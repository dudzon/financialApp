import { CustomAttributes } from "../models/custom-attrs";

export class myFramework {

  constructor(obj: { [key: string]: any }) {
    this.el = obj.el,
      this.data = obj?.data,
      this.methods = obj?.methods,
      this.values = obj?.values
  }

  el: HTMLElement;
  data: () => {};
  methods: {};
  values: {};
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
          }
        }
      });
      if (elems[i].children) {
        this.render(elems[i].children);
      }
    }
  }
}