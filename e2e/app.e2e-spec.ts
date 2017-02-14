import { EventSchedulerNgPage } from './app.po';

describe('event-scheduler-ng App', function() {
  let page: EventSchedulerNgPage;

  beforeEach(() => {
    page = new EventSchedulerNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
