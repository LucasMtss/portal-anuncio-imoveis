import FooterInfos from "@/components/common/FooterInfos";
import { render, screen } from "@testing-library/react";

describe("FooterInfos Component", () => {
  it("renders the 'A Netimóveis' section with correct items", () => {
    render(<FooterInfos />);
    const sectionTitle = screen.getByText("A Netimóveis");
    expect(sectionTitle).toBeInTheDocument();

    const items = [
      "Quem somos",
      "Como funciona",
      "Seja um parceiro",
      "Quero me associar",
      "Acessoria de imprensa",
      "Soluções corporativas",
      "Covide-19",
    ];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders the 'Recursos' section with correct items", () => {
    render(<FooterInfos />);
    const sectionTitle = screen.getByText("Recursos");
    expect(sectionTitle).toBeInTheDocument();

    const items = [
      "Comprar",
      "Alugar",
      "Lançamentos",
      "Anunciar Imóvel",
      "Simular Financiamento",
      "Imobiliárias",
      "Blog",
    ];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders the 'Contato' section with correct items", () => {
    render(<FooterInfos />);
    const sectionTitle = screen.getByText("Contato");
    expect(sectionTitle).toBeInTheDocument();

    const items = ["Fale Conosco", "Perguntas Frequentes", "Suporte"];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders the 'Nossos Aplicativos' section with correct items", () => {
    render(<FooterInfos />);
    const sectionTitle = screen.getByText("Nossos Aplicativos");
    expect(sectionTitle).toBeInTheDocument();

    const items = ["Loc Fácil Netimóveis", "Pro Imob Netimóveis"];
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    const appStoreImage = screen.getByAltText("App Store");
    const playStoreImage = screen.getByAltText("Play Store");

    expect(appStoreImage).toBeInTheDocument();
    expect(playStoreImage).toBeInTheDocument();
  });
});
