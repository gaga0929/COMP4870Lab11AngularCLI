import { COMP4870Lab11AngularCLIPage } from './app.po';

describe('comp4870-lab11-angular-cli App', function() {
  let page: COMP4870Lab11AngularCLIPage;

  beforeEach(() => {
    page = new COMP4870Lab11AngularCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
