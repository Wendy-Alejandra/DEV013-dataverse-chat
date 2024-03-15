import { Header } from "./../src/components/Header.js";

describe("Header component", () => {
  it("Should create the header element", () => {
    const header = Header();
    expect(header).toBeTruthy();
  });

  it("Should not show empty content", () => {
    const header = Header();
    const h1 = header.querySelector("h1");
    // expect(h1.textContent).toEqual("CRUISE LINES");
    expect(h1.textContent).not.toEqual("");
  })

  it("Should display the correct content", () => {
    const header = Header();
    const h1 = header.querySelector("h1");
    expect(h1.innerHTML).toBe("CRUISE LINES");
  })
});
