import { parseMDX } from '../../src/utils/utils';

// filepath: src/utils/utils.test.ts

describe('parseMDX', () => {
  it('should remove align properties from image markdown', () => {
    const markdown = `![Alt text](image-url.jpg align="center")`;
    const expected = `![Alt text](image-url.jpg)`;
    expect(parseMDX({ markdown })).toBe(expected);
  });

  it('should handle markdown without MDX acorns or align properties', () => {
    const markdown = `This is a simple markdown without special properties.`;
    expect(parseMDX({ markdown })).toBe(markdown);
  });

  it('should handle empty markdown input', () => {
    const markdown = ``;
    expect(parseMDX({ markdown })).toBe(``);
  });
});
