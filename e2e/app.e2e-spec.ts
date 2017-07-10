import { ParkingAppPage } from './app.po';

describe('parking-app App', () => {
  let page: ParkingAppPage;

  beforeEach(() => {
    page = new ParkingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
