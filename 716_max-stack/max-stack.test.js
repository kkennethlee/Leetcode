const {MaxStack} = require('./max-stack');

const stack = new MaxStack();

describe('initial test', () => {
  beforeAll(() => {
    stack.push(5);
  });
  test("check max after 1st push", () => {
    expect(stack.getMax()).toEqual(5);
  });
});

describe('follow-up test', () => {
  beforeAll(() => {
    stack.push(5);
    stack.push(4);
    stack.push(7);
    stack.push(7);
    stack.push(8);
  });

  test("check before 1st pop", () => {
    expect(stack.getMax()).toEqual(8);
  });

  test("check pop #1", () => {
    expect(stack.pop()).toEqual(8);
  });

  test("check max after 1st pop", () => {
    expect(stack.getMax()).toEqual(7);
  });
  
  test("check pop #2", () => {
    expect(stack.pop()).toEqual(7);
  });
  
  test("check max after 2nd pop", () => {
    expect(stack.getMax()).toEqual(7);
  });
  
  test("check pop #3", () => {
    expect(stack.pop()).toEqual(7);
  });
  
  test("check max after 3rd pop", () => {
    expect(stack.getMax()).toEqual(5);
  });
  
  test("check pop #4", () => {
    expect(stack.pop()).toEqual(4);
  });
  
  test("check max after 4th pop", () => {
    expect(stack.getMax()).toEqual(5);
  });
});