import { AngularMaterialAppPage } from './app.po';

describe('angular-material-app App', function() {
  let page: AngularMaterialAppPage;

  beforeEach(() => {
    page = new AngularMaterialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
