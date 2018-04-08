//import * as ons from "onsenui";
//import { OnsPullHookElement } from "onsenui";

import ons from 'onsenui/esm';
import * as OnsPullHookElement from 'onsenui/esm/elements/ons-pull-hook';

export class ListPage {    
  message: string;
  pullHook: OnsPullHookElement;

  constructor() {
    this.message = 'Hello world';
  }

  attached() {
    var self = this;
    ons.ready(function () {

      //self.pullHook.addEventListener('changestate', function (event: any) {
      //  var message = '';

      //  switch (event.state) {
      //    case 'initial':
      //      message = 'Pull to refresh';
      //      break;
      //    case 'preaction':
      //      message = 'Release';
      //      break;
      //    case 'action':
      //      message = 'Loading...';
      //      break;
      //  }

      //  self.pullHook.innerHTML = message;
      //});

      //self.pullHook.onAction = function (done) {
      //  setTimeout(done, 1000);
      //};
    });
  }

}
