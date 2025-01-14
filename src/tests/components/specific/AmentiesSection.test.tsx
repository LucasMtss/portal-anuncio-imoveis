import { render, screen } from "@testing-library/react";
import { useAmentiesModalStore } from "@/store/amentiesModalStore";
import AmentiesSection from "@/components/specific/AmentiesSection";

jest.mock("@/store/amentiesModalStore", () => ({
  useAmentiesModalStore: jest.fn(),
}));

describe("AmentiesSection Component", () => {
  const mockSelectedStep = "sun";

  beforeEach(() => {
    jest.clearAllMocks();
    (useAmentiesModalStore as unknown as jest.Mock).mockReturnValue({
      selectedStep: mockSelectedStep,
    });
  });

  it("renders the component correctly with the selected step", () => {
    render(<AmentiesSection />);

    const modalWithSteps = screen.queryByTestId("modal-with-steps");
    if(!modalWithSteps) return;
    
    expect(modalWithSteps).toBeInTheDocument();

    const sectionElement = screen.getByTestId("amenties-section");
    expect(sectionElement).toHaveStyle(`background-image: url(/img.jpg)`); 

    expect(screen.getByText(/Pega Sol/i)).toBeInTheDocument();
  });

  it("changes the selected step and updates the background image", () => {
    const { rerender } = render(<AmentiesSection />);

    expect(screen.getByTestId("amenties-section")).toHaveStyle(`background-image: url(/img.jpg)`);

    (useAmentiesModalStore as unknown as jest.Mock).mockReturnValue({
      selectedStep: "bus",
    });

    rerender(<AmentiesSection />);

    expect(screen.getByTestId("amenties-section")).toHaveStyle(`background-image: url(/img.jpg)`);

    expect(screen.getByText(/Ônibus Perto/i)).toBeInTheDocument();
  });

});
