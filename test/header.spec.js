import { Header } from "./../src/components/Header.js";

describe("Header component", () => {
  const header = Header();
  it("Should create the header element", () => {
    expect(header).toBeTruthy();
  });

  it("Should not show empty content", () => {
    const h1 = header.querySelector("h1");
    expect(h1.textContent).not.toEqual("");
  })

  it("Should display the correct content", () => {
    const h1 = header.querySelector("h1");
    expect(h1.innerHTML).toBe("CRUISE LINES");
  })
});
