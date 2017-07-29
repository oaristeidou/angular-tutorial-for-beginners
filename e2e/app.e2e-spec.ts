import { AngularUniTutorialPage } from './app.po';

describe('angular-uni-tutorial App', () => {
  let page: AngularUniTutorialPage;

  beforeEach(() => {
    page = new AngularUniTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
