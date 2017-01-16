import { PrototypesPage } from './app.po';

describe('prototypes App', function() {
  let page: PrototypesPage;

  beforeEach(() => {
    page = new PrototypesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
