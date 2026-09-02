import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Introduction from '../Introduction';
import { SECTION_IDS } from '../../Constants/sections';
import { EMAIL } from '../../Constants/personalInfo';

describe('Introduction Component', () => {
  it('renders section container with the correct id', () => {
    const { container } = render(<Introduction />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute('id', SECTION_IDS.INTRO);
  });

  it('renders availability status badge', () => {
    render(<Introduction />);

    expect(
      screen.getByText(/available for full-time opportunities/i)
    ).toBeInTheDocument();
  });

  it('renders the main heading and name', () => {
    render(<Introduction />);

    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent(/hi, i'm sushama naskar/i);
    expect(mainHeading).toHaveTextContent(/software developer\./i);
  });

  it('renders the summary description paragraph', () => {
    render(<Introduction />);

    expect(
      screen.getByText(
        /software developer with 3\+ years of experience building responsive/i
      )
    ).toBeInTheDocument();
  });

  it('renders navigation link to the Projects section', () => {
    render(<Introduction />);

    const projectsLink = screen.getByRole('link', {
      name: /explore my work/i,
    });

    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute('href', `#${SECTION_IDS.PROJECTS}`);
  });

  it('renders contact link with the correct mailto href', () => {
    render(<Introduction />);

    const mailLink = screen.getByRole('link', {
      name: /get in touch/i,
    });

    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute('href', `mailto:${EMAIL}`);
  });
});