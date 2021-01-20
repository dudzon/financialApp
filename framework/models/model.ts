export enum CustomAttributes {
  vhtml = "v-html",
  vclick = "v-click",
  vchange = "v-change",
  vif = "v-if",
  vmodel = "v-model",
}

export interface ParamsObject {
  el: string;
  data: () => {};
  methods: Object;
}
