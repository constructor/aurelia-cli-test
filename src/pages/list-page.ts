import * as ons from "onsenui";
import { OnsPullHookElement } from "onsenui";

export class ListPage {    
  message: string;
  pullHook: OnsPullHookElement;

  constructor() {
    this.message = 'Hello world';
  }

  attached() {
    var self = this;
    ons.ready(function () {

      self.pullHook.addEventListener('changestate', function (event: any) {
        var message = '';

        switch (event.state) {
          case 'initial':
            message = 'Pull to refresh';
            break;
          case 'preaction':
            message = 'Release';
            break;
          case 'action':
            message = 'Loading...';
            break;
        }

        self.pullHook.innerHTML = message;
      });

      self.pullHook.onAction = function (done) {
        setTimeout(self.refreshed(done), 1000);
      };
    });
  }

  refreshed(done) {
    this.refreshList().then((result:any) => {
      alert(result.message);
      done();
    },
      (err) => {
        alert(err);
        done();
    });
  }

  refreshList() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        var i = Math.random() * Math.floor(10);
        if (i < 9)
          resolve({ message: "90% chance it worked :)" });
        else
          reject(Error("10% chance it broke :("));

      }, 3000);
    });
  }

}
