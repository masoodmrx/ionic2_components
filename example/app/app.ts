import {App, Platform} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';

// import {SnackbarManager} from './components/snackbar/snackbar';
import {Snackbar} from './components/snackbar/snackbar.1';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Snackbar],
  config: {}
})
export class MyApp {
  rootPage: Type = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
