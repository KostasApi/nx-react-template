import { exampleProducts } from './products';

describe('products', () => {
  it('should work', () => {
    expect(exampleProducts[0].id).toEqual('1');
  });
});
