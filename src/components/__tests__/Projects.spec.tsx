import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import Projects from '../Projects';
import { SECTION_IDS } from '../../Constants/sections';

vi.mock('./SectionContent', () => ({
  default: ({
    id,
    heading,
    children,
  }: {
    id: string;
    heading: string;
    children: React.ReactNode;
  }) => (
    <section id={id} aria-label={heading}>
      <h2>{heading}</h2>
      {children}
    </section>
  ),
}));

// Use a lightweight mock for CarouselWrapper to focus on Projects unit test logic
vi.mock('./CarouselWrapper', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-carousel-wrapper">{children}</div>
  ),
}));

describe('Projects Component', () => {
  it('renders section container with the correct id and heading', () => {
    const { container } = render(<Projects />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute('id', SECTION_IDS.PROJECTS);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /featured projects/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the project title and overview description', () => {
    render(<Projects />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Resume Analysis Application',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /full-stack ats resume analysis platform using mvc architecture and secure jwt authentication\./i
      )
    ).toBeInTheDocument();
  });

  it('renders all technology tags for the project', () => {
    render(<Projects />);

    const expectedTags = [
      'React.js',
      'Spring Boot',
      'JWT',
      'MySQL',
      'ChatGPT API',
    ];

    expectedTags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('renders all achievement bullet points', () => {
    render(<Projects />);

    const expectedPoints = [
      'Built an end-to-end ATS Resume Analysis platform using clean MVC architecture.',
      'Implemented secure authentication and authorization using Spring Security and JWT.',
      'Integrated ChatGPT API to analyze resumes and generate actionable ATS score insights.',
      'Developed REST APIs and responsive frontend interfaces for resume analysis workflows.',
    ];

    const bulletList = screen.getByRole('list');
    expect(bulletList).toBeInTheDocument();

    const listItems = within(bulletList).getAllByRole('listitem');
    expect(listItems).toHaveLength(expectedPoints.length);

    expectedPoints.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  it('does not render an external link icon when the link is empty', () => {
    const { container } = render(<Projects />);

    // ArrowUpRight renders an SVG with the lucide-arrow-up-right class
    const externalLinkIcon = container.querySelector('.lucide-arrow-up-right');
    expect(externalLinkIcon).not.toBeInTheDocument();
  });
});