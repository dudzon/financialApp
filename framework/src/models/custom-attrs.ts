export enum CustomAttributes {
    vhtml = 'v-html',
    vclick = 'v-click',
    vchange = 'v-change',
    vif = 'v-if',
    vvalue = 'v-value'
}

export interface ParamsObject {
    el : string;
    data : () => {};
    methods : Object;
}