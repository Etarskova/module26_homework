import { repeatWord } from "../../utils/countWords";


describe("tests for countWords function", () => {

  
    it("should operate correctly if number of repeats = 0", () => {
      expect(repeatWord('chicken' , 0)).toBe('');
    }),
      it("should operate correctly if number of repeats < 0", () => {
        expect(repeatWord('chicken' , -6)).toBe('');
      }),
      it("should operate correctly if the word if empty", () => {
        expect(repeatWord('' , 5)).toBe('1, 2, 3, 4, 5, ');
      });
      it("corner_case should operate correctly if the word is a number", () => {
        expect(repeatWord(5 , 5)).toBe('6, 7, 8, 9, 10, ');
      });
      it("corner_case should operate correctly if the word is a 'number'", () => {
        expect(repeatWord('5' , 5)).toBe('51, 52, 53, 54, 55, ');
      });
  });