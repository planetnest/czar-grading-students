describe('Grading system test', () => {
  const grade = require('./');

  it('leaves < 38 numbers unchanged', () => {
    expect(grade(37)).toBe(37);
    expect(grade(29)).toBe(29);
  });

  it('leaves number unchanged if further than 2 away from next nultiple of 5', () => {
    expect(grade(72)).toBe(72);
    expect(grade(61)).toBetoBe(61);
  });

  it("leaves number unchanged if it's a nultiple of 5", () => {
    expect(grade(50)).toBe(50);
  });

  it('rounds to nearest multiple of 5', () => {
    expect(grade(84)).toBe(85);
    expect(grade(43)).toBe(45);
  });

  it('returns array for array input', () => {
    expect(grade([])).toBeInstanceOf(Array);
  });

  it('perfectly processes array of grades', () => {
    expect(grade([73,67,38,33])).toEqual([75,67,40,33]);
  });
});