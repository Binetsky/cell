import { testUtil } from './testUtil';

describe('testUtil test', () => {
  test('should return 1', () => {
    const returnValue = testUtil();
    expect(returnValue).toBe(1);
  });

  test('should not return 0', () => {
    const returnValue = testUtil();
    expect(returnValue).not.toBe(0);
  });
});
