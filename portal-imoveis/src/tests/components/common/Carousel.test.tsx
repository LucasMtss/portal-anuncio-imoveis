import Carousel from "@/components/common/Carousel";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Carousel Component", () => {
  const renderCarousel = () => {
    return render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    );
  };

  it("renders the correct number of items per page", () => {
    renderCarousel();
    const visibleItems = screen.getAllByText(/Item/i);
    expect(visibleItems).toHaveLength(4);
  });

  it("renders navigation buttons", () => {
    renderCarousel();
    const prevButton = screen.getByRole("button", { name: /prev/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("navigates to the next page", () => {
    renderCarousel();
    const nextButton = screen.getByRole("button", { name: /next/i });

    fireEvent.click(nextButton);

    const visibleItems = screen.getAllByText(/Item/i);
    expect(visibleItems).toHaveLength(4);
  });

  it("disables the 'prev' button on the first page", () => {
    renderCarousel();
    const prevButton = screen.getByRole("button", { name: /prev/i });

    expect(prevButton).toHaveClass("opacity-50 cursor-default");
    expect(prevButton).not.toHaveClass("cursor-pointer");
  });

  it("disables the 'next' button on the last page", () => {
    renderCarousel();
    const nextButton = screen.getByRole("button", { name: /next/i });

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(nextButton).toHaveClass("opacity-50 cursor-default");
    expect(nextButton).not.toHaveClass("cursor-pointer");
  });

  it("navigates to the previous page", () => {
    renderCarousel();
    const nextButton = screen.getByRole("button", { name: /next/i });
    const prevButton = screen.getByRole("button", { name: /prev/i });

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    const visibleItems = screen.getAllByText(/Item/i);
    expect(visibleItems).toHaveLength(4);
  });
});
