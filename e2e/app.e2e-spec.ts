import { AngularMaterialStarterPage } from './app.po';

describe('angular-material-starter App', () => {
  let page: AngularMaterialStarterPage;

  beforeEach(() => {
    page = new AngularMaterialStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
