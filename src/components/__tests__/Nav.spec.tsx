import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import Nav from '../Nav';
import { SECTION_IDS } from '../../Constants/sections';

describe('Nav Component', () => {
  it('renders the header landmark', () => {
    render(<Nav />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders the logo linking to the intro section with accessible label', () => {
    render(<Nav />);

    const logoLink = screen.getByRole('link', { name: /back to top/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', `#${SECTION_IDS.INTRO}`);
    expect(logoLink).toHaveTextContent('SN.');
  });

  it('renders the main navigation landmark', () => {
    render(<Nav />);

    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  it('renders all section navigation links with correct hrefs', () => {
    render(<Nav />);

    const nav = screen.getByRole('navigation', { name: /main navigation/i });

    const expectedLinks = [
      { label: 'Projects', href: `#${SECTION_IDS.PROJECTS}` },
      { label: 'Experience', href: `#${SECTION_IDS.EXPERIENCE}` },
      { label: 'Certifications', href: `#${SECTION_IDS.CERTIFICATIONS}` },
      { label: 'Skills', href: `#${SECTION_IDS.SKILLS}` },
      { label: 'Contact', href: `#${SECTION_IDS.CONTACT}` },
    ];

    const links = within(nav).getAllByRole('link');
    expect(links).toHaveLength(expectedLinks.length);

    expectedLinks.forEach(({ label, href }) => {
      const link = within(nav).getByRole('link', { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });
});