// __tests__/smoke.test.js
describe('smoke', () => {
  test('basic math works', () => {
    expect(1 + 1).toBe(2);
  });

  test('truthiness works', () => {
    expect(Boolean('ok')).toBe(true);
  });
});
