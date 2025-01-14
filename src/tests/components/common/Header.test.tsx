import Header from "@/components/common/Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<Header />);
    const links = ["Imobiliárias", "Quero me associar", "Sobre", "Blog"];

    links.forEach((link) => {
      const navLink = screen.getByText(link);
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveClass("cursor-pointer hover:text-orange");
    });
  });
});
