import { PLATFORM } from 'aurelia-pal';

import 'app.css';

//OnsenUI Styles (required)
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

//All OnsenUI components package
import * as ons from 'onsenui';

////Individual componentns package
//import ons from 'onsenui/esm';

//import 'onsenui/esm/elements/ons-page';
//import 'onsenui/esm/elements/ons-toolbar';

//import 'onsenui/esm/elements/ons-splitter';
//import 'onsenui/esm/elements/ons-splitter-side';
//import 'onsenui/esm/elements/ons-splitter-content';
//import 'onsenui/esm/elements/ons-splitter-mask';

//import 'onsenui/esm/elements/ons-button';
//import 'onsenui/esm/elements/ons-icon';

//import 'onsenui/esm/elements/ons-list';
//import 'onsenui/esm/elements/ons-list-item';

//import 'onsenui/esm/elements/ons-card';

console.log({ 'ons': ons });

//https://onsen.io/v2/guide/esm.html
export class App {
  menu: any;
  router: any;
  btnClick: any;
  message = 'Hello World!';

  constructor() {
    ons.ready(() => {
      console.log({ 'ready': ons, 'this': this });
    });
  }

  attached() {
    console.log({ 'btnClick': this.btnClick });
    this.registerServiceWorker();
  }

  clicked() {
    console.log("Clicked!");
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      //NOTE: files served from StaticFileController.cs
      //navigator.serviceWorker.register('/firebase-messaging-sw.js')
      //  .then((registration) => {
      //    console.log({ 'app.sw.js registered': registration });
      //  });

      //navigator.serviceWorker.register(location.protocol === 'https:' && '/app.sw.js')//, {scope:'/App/'})
      //  .then((registration) => {
      //    console.log({ 'app.sw.js registered': registration });
      //  });
    } else {
      console.log('Service workers are not supported.');
    }
  }

  openMenu() {
    console.log("openMenu");
    this.menu.open();
  }

  loadPage(row) {
    this.router.navigateToRoute(row.config.name);//, { id: 10 });
    this.menu.close();
  }

  //http://aurelia.io/docs/routing/configuration
  configureRouter(config, router) {
    config.title = 'Aurelia';
    //We meed to use PLATFORM.moduleName() with weback aurelia builds
    config.map([
      //{ route: ['', 'page1'], name: 'page1', moduleId: './pages/page1' },
      { route: ['', 'page1'], name: 'page1', moduleId: PLATFORM.moduleName('./pages/page1') },
      { route: 'page1', name: 'page1', moduleId: PLATFORM.moduleName('./pages/page1'), nav: 0, title: 'Page One', href: '#page1' },
      { route: 'page2', name: 'page2', moduleId: PLATFORM.moduleName('./pages/page2'), nav: 1, title: 'Page Two', href: '#page2' },
      { route: 'page3', name: 'page3', moduleId: PLATFORM.moduleName('./pages/page3'), nav: 2, title: 'Page Three', href: '#page3' },
      { route: 'page4', name: 'page4', moduleId: PLATFORM.moduleName('./pages/page4'), nav: 3, title: 'Page Four', href: '#page4' },
      { route: 'listpage', name: 'listpage', moduleId: PLATFORM.moduleName('./pages/list-page'), nav: 3, title: 'List Tests', href: '#list-page' },
      { route: 'tabspage', name: 'tabspage', moduleId: PLATFORM.moduleName('./pages/tabs-page'), nav: 3, title: 'Tabs Tests', href: '#tabs-page' },
      { route: 'pagedetail/:param1?/detail', name: 'pagedetail', moduleId: PLATFORM.moduleName('./pages/page-detail'), nav: 3, title: 'Page Detail', href: '#page-detail' },
    ]);
    this.router = router;
    console.log(router);
  }
}
