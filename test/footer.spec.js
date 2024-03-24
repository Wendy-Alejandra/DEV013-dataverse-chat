import { Footer } from "./../src/components/Footer.js";

describe("Footer component", () => {
  const footer = Footer();
  it("Should create the footer element", () => {
    expect(footer).toBeTruthy();
  });

  it("Should not show empty content", () => {
    const p = footer.querySelector("p");
    expect(p.textContent).not.toEqual("");
  });

  it("Should display the correct content", () => {
    const p = footer.querySelector("p");
    expect(p.innerHTML).toContain("By: Camila Arrobo &amp; Wendy Chirinos DEV013 Laboratoria 2024");
  });
});
