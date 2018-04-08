import { bindable, inject } from 'aurelia-framework';

export class PageDetail {
  message = 'Hello World! Page Detail';
  params: any;
  constructor() {
  }

  activate(params, routeConfig) {
    console.log(params);
    this.params = params;
  }

}
