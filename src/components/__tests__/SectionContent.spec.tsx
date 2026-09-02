import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import SectionContent from '../SectionContent';

describe('SectionContent Component', () => {
  const mockProps = {
    id: 'test-section',
    heading: 'Test Heading',
    children: <div data-testid="test-child">Child Content Here</div>,
  };

  it('renders section container with the correct id', () => {
    const { container } = render(<SectionContent {...mockProps} />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute('id', 'test-section');
  });

  it('renders heading text with trailing period', () => {
    render(<SectionContent {...mockProps} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading.');
  });

  it('renders children passed into the component', () => {
    render(<SectionContent {...mockProps} />);

    const childElement = screen.getByTestId('test-child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child Content Here');
  });

  it('applies styling and border classes to the section', () => {
    const { container } = render(<SectionContent {...mockProps} />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toHaveClass('py-20', 'border-t', 'border-white/10');
  });
});