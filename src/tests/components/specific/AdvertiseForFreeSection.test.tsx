import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdvertiseForFreeSection from '@/components/specific/AdvertiseForFreeSection';

interface IImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
}

jest.mock('next/image', () => ({ src, alt, width, height, className }: IImageProps) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
));

describe('AdvertiseForFreeSection Component', () => {
  
  it('renders the section correctly', () => {
    render(<AdvertiseForFreeSection />);
    
    const image = screen.getByAltText('Property');
    expect(image).toBeInTheDocument();

    const heading = screen.getByText('Anuncie grátis para mais de 100 mil pessoas todos os dias.');
    expect(heading).toBeInTheDocument();

    const subheading = screen.getByText('Quer Vender ou Alugar?');
    expect(subheading).toBeInTheDocument();
  });

  it('renders the button "Anunciar Imóvel"', () => {
    render(<AdvertiseForFreeSection />);

    const button = screen.getByRole('button', { name: /anunciar imóvel/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the link "Saiba quanto vale seu imóvel" with icon', () => {
    render(<AdvertiseForFreeSection />);

    const linkText = screen.getByText('Saiba quanto vale seu imóvel');
    expect(linkText).toBeInTheDocument();

    const arrowIcon = screen.getByTestId('arrow right long');
    expect(arrowIcon).toBeInTheDocument();
  });

  it('clicking on the link "Saiba quanto vale seu imóvel" does not cause errors', () => {
    render(<AdvertiseForFreeSection />);

    const link = screen.getByText('Saiba quanto vale seu imóvel');
    fireEvent.click(link);

    expect(link).toBeInTheDocument();
  });
});
