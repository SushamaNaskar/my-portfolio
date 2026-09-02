import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import Skills from '../Skills';
import { SECTION_IDS } from '../../Constants/sections';

// Mock SectionContent to keep the test isolated
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

describe('Skills Component', () => {
  it('renders section container with the correct id and heading', () => {
    const { container } = render(<Skills />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute('id', SECTION_IDS.SKILLS);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /skills & technologies/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all four skill category headings', () => {
    render(<Skills />);

    const expectedCategories = [
      'Frontend',
      'Backend & DB',
      'DevOps & Testing',
      'AI & Tools',
    ];

    expectedCategories.forEach((category) => {
      expect(
        screen.getByRole('heading', { level: 3, name: category })
      ).toBeInTheDocument();
    });
  });

  it('renders expected skill items inside each category', () => {
    render(<Skills />);

    // Frontend checks
    const frontendHeading = screen.getByRole('heading', {
      level: 3,
      name: 'Frontend',
    });
    const frontendCard = frontendHeading.closest('div')?.parentElement;
    expect(frontendCard).toBeInTheDocument();

    const frontendSkills = [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ];
    frontendSkills.forEach((item) => {
      expect(within(frontendCard!).getByText(item)).toBeInTheDocument();
    });

    // Backend checks
    const backendHeading = screen.getByRole('heading', {
      level: 3,
      name: 'Backend & DB',
    });
    const backendCard = backendHeading.closest('div')?.parentElement;
    expect(backendCard).toBeInTheDocument();

    const backendSkills = [
      'Java 8 / Core Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'MySQL',
    ];
    backendSkills.forEach((item) => {
      expect(within(backendCard!).getByText(item)).toBeInTheDocument();
    });

    // DevOps & Testing checks
    const devopsHeading = screen.getByRole('heading', {
      level: 3,
      name: 'DevOps & Testing',
    });
    const devopsCard = devopsHeading.closest('div')?.parentElement;
    expect(devopsCard).toBeInTheDocument();

    const devopsSkills = [
      'Git / GitHub',
      'Jest',
      'React Testing Library',
      'Playwright',
    ];
    devopsSkills.forEach((item) => {
      expect(within(devopsCard!).getByText(item)).toBeInTheDocument();
    });

    // AI & Tools checks
    const aiHeading = screen.getByRole('heading', {
      level: 3,
      name: 'AI & Tools',
    });
    const aiCard = aiHeading.closest('div')?.parentElement;
    expect(aiCard).toBeInTheDocument();

    const aiSkills = ['GitHub Copilot', 'ChatGPT API', 'Agile / Scrum'];
    aiSkills.forEach((item) => {
      expect(within(aiCard!).getByText(item)).toBeInTheDocument();
    });
  });

  it('renders lucide category icons within each card header', () => {
    const { container } = render(<Skills />);

    // SVG icons from lucide-react render with 'lucide' base class
    const icons = container.querySelectorAll('svg.lucide');
    expect(icons).toHaveLength(4);
  });
});