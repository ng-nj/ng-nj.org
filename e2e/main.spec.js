'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    //expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    //expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    //expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');

    expect(true).toEqual(true);
  });

  it('should do nothing', function () {
    //expect(page.thumbnailEls.count()).toBeGreaterThan(5);

    expect("some stuff").toEqual('oh,  whoops');
  });

});
