import { NgttotoDickHPage } from './app.po';

describe('ngttoto-dick-h App', () => {
  let page: NgttotoDickHPage;

  beforeEach(() => {
    page = new NgttotoDickHPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
