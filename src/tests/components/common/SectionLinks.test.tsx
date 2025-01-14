import SectionLinks from "@/components/common/SectionLinks";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SectionLinks Component", () => {
  it("renders the section links with correct default selection", () => {
    render(<SectionLinks />);
    const defaultSection = screen.getByText("Tipos de propriedades");

    expect(defaultSection).toHaveClass("border-b-[3px] border-orange text-orange");
    expect(screen.getByText("Populares para venda")).toHaveClass("text-grey-light");
    expect(screen.getByText("Populares para locação")).toHaveClass("text-grey-light");
  });

  it("switches to 'Populares para venda' when clicked", () => {
    render(<SectionLinks />);
    const popularForSale = screen.getByText("Populares para venda");

    fireEvent.click(popularForSale);

    expect(popularForSale).toHaveClass("border-b-[3px] border-orange text-orange");
    expect(screen.getByText("Tipos de propriedades")).toHaveClass("text-grey-light");
    expect(screen.getByText("Populares para locação")).toHaveClass("text-grey-light");
  });

  it("switches to 'Populares para locação' when clicked", () => {
    render(<SectionLinks />);
    const popularForHire = screen.getByText("Populares para locação");

    fireEvent.click(popularForHire);

    expect(popularForHire).toHaveClass("border-b-[3px] border-orange text-orange");
    expect(screen.getByText("Tipos de propriedades")).toHaveClass("text-grey-light");
    expect(screen.getByText("Populares para venda")).toHaveClass("text-grey-light");
  });

  it("renders the correct sections under 'Tipos de propriedades'", () => {
    render(<SectionLinks />);
    const sections = [
      { title: "Alugar", items: ["Apartamentos", "Casas", "Terrenos", "Lojas"] },
      { title: "Comprar", items: ["Casas à venda", "Imóv. em Comdomínios", "Comprar terrenos", "Lançamentos"] },
      { title: "Comercial", items: ["Fale Conosco", "Perguntas Frequentes", "Suporte"] },
    ];

    sections.forEach((section) => {
      const sectionTitle = screen.getByText(section.title);
      expect(sectionTitle).toBeInTheDocument();

      section.items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  it("maintains the selected section state when navigating", () => {
    render(<SectionLinks />);
    const popularForSale = screen.getByText("Populares para venda");
    const popularForHire = screen.getByText("Populares para locação");

    fireEvent.click(popularForSale);
    expect(popularForSale).toHaveClass("border-b-[3px] border-orange text-orange");

    fireEvent.click(popularForHire);
    expect(popularForHire).toHaveClass("border-b-[3px] border-orange text-orange");
  });
});
