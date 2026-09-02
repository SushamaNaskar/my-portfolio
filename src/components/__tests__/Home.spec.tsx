import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

// Mock child components to keep Home a fast, isolated integration/layout test
vi.mock('../Nav', () => ({
  default: () => <nav aria-label="Main Navigation">Mock Nav</nav>,
}));

vi.mock('../Introduction', () => ({
  default: () => <section aria-label="Introduction">Mock Introduction</section>,
}));

vi.mock('../Projects', () => ({
  default: () => <section aria-label="Projects">Mock Projects</section>,
}));

vi.mock('../Experience', () => ({
  default: () => <section aria-label="Experience">Mock Experience</section>,
}));

vi.mock('../Certifications', () => ({
  default: () => <section aria-label="Certifications">Mock Certifications</section>,
}));

vi.mock('../Skills', () => ({
  default: () => <section aria-label="Skills">Mock Skills</section>,
}));

vi.mock('../Contact', () => ({
  default: () => <section aria-label="Contact">Mock Contact</section>,
}));

describe('Home Component', () => {
  it('renders main layout landmark and navigation', () => {
    render(<Home />);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders all page sections in proper order inside main', () => {
    render(<Home />);

    const main = screen.getByRole('main');

    // Verify each section exists within <main>
    expect(screen.getByRole('region', { name: /introduction/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /certifications/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument();

    // Verify ordering inside the main container
    const sectionNames = Array.from(main.children).map((el) =>
      el.getAttribute('aria-label')
    );
    expect(sectionNames).toEqual([
      'Introduction',
      'Projects',
      'Experience',
      'Certifications',
      'Skills',
      'Contact',
    ]);
  });

  it('renders footer with copyright text', () => {
    render(<Home />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(
      screen.getByText(/© 2026 Sushama Naskar\. Software Developer\./i)
    ).toBeInTheDocument();
  });
});