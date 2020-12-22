import { CustomAttributes } from "../models/custom-attrs";

export class myFramework {
 
  constructor(obj:{[key:string]: any}){
      this.el = obj.el,
      this.data = obj?.data,
      this.methods = obj?.methods,
      this.values = obj?.values
    }

    el:HTMLElement;
    data: () => {};
    methods:{};
    values: {
        // something:'custom-string'
    };
    render(nodes: HTMLCollection = null) {
        const elems = nodes || this.el.children;

        console.log(elems, 'elems');
        for (let i = 0; i < elems.length; i++) {
            const element = elems[i];
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
                               console.log(element.attributes, 'element');
                               const customAttr = element.getAttribute(attrName);
                               const splitted = customAttr.split(' ');
                               if(this.values) {
                               Object.keys(this.values).forEach(key => console.log(key,'key'))
                               }
                               console.log(splitted, 'customAttr')

                    }
                }
            });
            if (elems[i].children) {
                this.render(elems[i].children);
            }
        }

    }
}