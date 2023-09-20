import { getPercents } from "../../utils/getPercents";
describe("test gettin percentage", () => {
    it("should return percents", () => expect(getPercents(30, 200)).toBe(60));
  });