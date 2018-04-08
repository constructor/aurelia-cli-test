import { bindable, inject } from 'aurelia-framework';

export class PageDetail {
  message = 'Hello World! Page Detail';

  constructor() {
  }

  activate(params, routeConfig) {
    console.log(params);
  }

}
