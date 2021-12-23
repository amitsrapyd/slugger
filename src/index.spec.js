import { slugger } from "./index.js";

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe("testing slugger basic functionality", () => {
  /**
   * @test - unit test can use the 'test' syntax
   */
  test("slugger can slug any number of spacy strings", () => {
    expect(slugger("hi", "my", "name", "is", "amit")).toEqual(
      "hi-my-name-is-amit"
    );
  });
});
