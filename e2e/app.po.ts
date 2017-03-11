import { browser, element, by } from 'protractor';

export class COMP4870Lab11AngularCLIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
