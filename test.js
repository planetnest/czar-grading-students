describe('Grading system test', () => {
  const grade = require('./');

  it('leaves < 38 numbers unchanged', () => {
    expect(grade(38)).toBe(38);
    expect(grade(29)).toBe(29);
  });

  it('rounds to nearest multiple of 5', () => {
    expect(grade(84)).toBe(85);
  });

  it('returns array for array input', () => {
    expect(grade([])).toBeInstanceOf(Array);
  });

  it('perfectly processes array of grades', () => {
    expect(grade([73,67,38,33])).toEqual([75,67,40,33]);
  });
});