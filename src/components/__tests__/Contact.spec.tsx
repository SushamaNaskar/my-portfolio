import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import { SECTION_IDS } from '../../Constants/sections';
import { EMAIL, LINKEDIN, GITHUB } from '../../Constants/personalInfos';

describe('Contact Component', () => {
  it('renders section container with the correct id', () => {
    const { container } = render(<Contact />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute('id', SECTION_IDS.CONTACT);
  });

  it('renders the call-to-action heading and description', () => {
    render(<Contact />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /let's build something great together\./i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/whether you have an open engineering role/i)
    ).toBeInTheDocument();
  });

  it('renders the email link with correct mailto href', () => {
    render(<Contact />);

    const emailLink = screen.getByRole('link', {
      name: new RegExp(EMAIL, 'i'),
    });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', `mailto:${EMAIL}`);
  });

  it('renders external links with target="_blank" and rel="noreferrer"', () => {
    render(<Contact />);

    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', LINKEDIN);
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noreferrer');

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', GITHUB);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
  });
});