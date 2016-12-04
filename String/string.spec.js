require('./repeat');
require('./includes');

describe('String.repeat', () => {

  it('repeats', () => {
    expect('hi'.repeat(3)).toBe('hihihi');
  })

});

describe('String.includes', () => {

  it('matches corectly', () => {
    expect('hi there!'.includes('hi')).toBe(true);
    expect('hi there!'.includes('hias')).toBe(false);
  })

});
