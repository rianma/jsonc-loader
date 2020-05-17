/**
 * @jest-environment node
 */
import compiler from './compiler'

describe('loader', () => {
  it('Inserts name and outputs Javascript', async () => {
    const stats = await compiler('example.jsonc');
    const output = stats.toJson().modules[0].source;

    expect(
      output
    ).toBe(`
/**
 * Loader API Version: 2
 * Is this in "webpack mode": true
 */
export default {"name":"jsonc-loader","author":"rianma"}`);
  });
});
