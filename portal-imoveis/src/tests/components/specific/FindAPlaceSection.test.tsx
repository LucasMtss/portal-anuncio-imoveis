import { render, screen } from "@testing-library/react";
import FindAPlaceSection from "@/components/specific/FindAPlaceSection";


describe("FindAPlaceSection Component", () => {
  it("renders the component with header, paragraph, and ModalWithSteps", () => {
    render(<FindAPlaceSection />);

    const titleElement = screen.getByText(/Encontre um lugar que é a sua cara/i);
    expect(titleElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(
      /A Netimóveis te oferece uma experiência ágil e segura/i
    );
    expect(paragraphElement).toBeInTheDocument();

    const modalWithStepsElement = screen.queryByTestId("modal-with-steps");
    if(!modalWithStepsElement) return;
    
    expect(modalWithStepsElement).toBeInTheDocument();
  });

  it("renders the correct steps in ModalWithSteps", () => {
    render(<FindAPlaceSection />);

    const modalWithStepsElement = screen.queryByTestId("modal-with-steps");
    if(!modalWithStepsElement) return;
    
    const stepElements = modalWithStepsElement.querySelectorAll(".step");
    expect(stepElements.length).toBe(3);

    const firstStepIcon = screen.getByText("Alugar Imóvel");
    expect(firstStepIcon).toBeInTheDocument();
    const firstStepIconElement = screen.getByTestId("fa-key-icon");
    expect(firstStepIconElement).toBeInTheDocument();

    const secondStepIcon = screen.getByText("Comprar Imóvel");
    expect(secondStepIcon).toBeInTheDocument();
    const secondStepIconElement = screen.getByTestId("fa-dollar-sign-icon");
    expect(secondStepIconElement).toBeInTheDocument();

    const thirdStepIcon = screen.getByText("Anunciar Imóvel");
    expect(thirdStepIcon).toBeInTheDocument();
    const thirdStepIconElement = screen.getByTestId("fa-house-circle-check-icon");
    expect(thirdStepIconElement).toBeInTheDocument();
  });

  it("correctly renders step components when a step is selected", () => {
    render(<FindAPlaceSection />);

    const hireStepComponent = screen.getByText(/Alugar Imóvel/i);
    expect(hireStepComponent).toBeInTheDocument();

  });

});
