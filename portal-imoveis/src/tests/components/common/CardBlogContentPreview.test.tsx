import { render, screen } from "@testing-library/react";
import sampleImage from "@/../public/sample-image.png"; // Substitua pelo caminho de sua imagem de exemplo
import CardBlogContentPreview, { IBlogData } from "@/components/common/CardBlogContentPreview";

describe("CardBlogContentPreview Component", () => {
  const blogData: IBlogData = {
    image: sampleImage,
    title: "Como melhorar seu blog",
    tag: "Dicas",
    readingTime: 5,
  };

  it("renders the blog image with correct attributes", () => {
    render(<CardBlogContentPreview blogData={blogData} />);
    
    const image = screen.getByAltText("Blog Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src"); // Verifica se a imagem tem um src
  });

  it("displays the correct reading time", () => {
    render(<CardBlogContentPreview blogData={blogData} />);
    
    const readingTime = screen.getByText(/5 Min de Leitura/i);
    expect(readingTime).toBeInTheDocument();
  });

  it("displays the correct blog tag", () => {
    render(<CardBlogContentPreview blogData={blogData} />);
    
    const tag = screen.getByText(/Dicas/i);
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("text-orange");
  });

  it("displays the correct blog title", () => {
    render(<CardBlogContentPreview blogData={blogData} />);
    
    const title = screen.getByText(/Como melhorar seu blog/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-black");
  });
});
