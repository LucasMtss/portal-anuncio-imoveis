import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/common/Button';


describe('Button Component', () => {
  it('renders the button with the correct text', () => {
    render(<Button text="Click Me" />);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('applies the default color when no color is provided', () => {
    render(<Button text="Click Me" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('border-purple');
    expect(button).toHaveClass('text-purple');
    expect(button).toHaveClass('hover:bg-purple');
    expect(button).toHaveClass('hover:text-white');
  });

  it('applies the custom color when color prop is provided', () => {
    render(<Button text="Click Me" color="orange" />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('border-orange');
    expect(button).toHaveClass('text-orange');
    expect(button).toHaveClass('hover:bg-orange');
    expect(button).toHaveClass('hover:text-white');
  });

  it('calls the action function when clicked', () => {
    const mockAction = jest.fn();
    render(<Button text="Click Me" action={mockAction} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  it('does not throw an error when action is not provided and clicked', () => {
    render(<Button text="Click Me" />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
  });
});
