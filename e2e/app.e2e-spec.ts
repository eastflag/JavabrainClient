import { JavabrainClientPage } from './app.po';

describe('javabrain-client App', () => {
  let page: JavabrainClientPage;

  beforeEach(() => {
    page = new JavabrainClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
