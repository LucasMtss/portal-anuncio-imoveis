import Footer from "@/components/common/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  it("renders the company logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders copyright information", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      "© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados."
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders privacy policy, terms of use, LGPD, and version information", () => {
    render(<Footer />);
    const privacyPolicy = screen.getByText("Polítcia de privacidade");
    const termsOfUse = screen.getByText("Termos de uso");
    const lgpd = screen.getByText("LGPD");
    const version = screen.getByText("Versão: 25/10/2021");

    expect(privacyPolicy).toBeInTheDocument();
    expect(termsOfUse).toBeInTheDocument();
    expect(lgpd).toBeInTheDocument();
    expect(version).toBeInTheDocument();
  });

  it("renders social media icons", () => {
    render(<Footer />);
    const instagramIcon = screen.getByAltText("Instagram");
    const facebookIcon = screen.getByAltText("Facebook");
    const linkedInIcon = screen.getByAltText("LinkedIn");
    const youtubeIcon = screen.getByAltText("YouTube");

    expect(instagramIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
  });

});
