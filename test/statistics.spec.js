import { Statistics } from "../src/components/Statistics.js";
import { computeStats } from "../src/lib/dataFunctions.js";

import { data } from "../test/data.js";

describe("Statistics component", () => {
  const statistics = Statistics();
  it("Should create the div statistics element", () => {
    expect(statistics).toBeTruthy();
  });
  it("Should show empty content", () => {
    const p = statistics.querySelector("p");
    expect(p.textContent).toEqual("");
  });
  it("Should show content when clicked button", () => {
    const expectedContent = computeStats(data);
    expect(expectedContent).toBe("The average price per person per cruise is 1633");
  });
});
