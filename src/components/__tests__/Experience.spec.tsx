import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import Experience from '../Experience';
import { SECTION_IDS } from '../../Constants/sections';

// Mock SectionContent to isolate the unit test
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

describe('Experience Component', () => {
  it('renders section container with the correct id and heading', () => {
    const { container } = render(<Experience />);
    const sectionElement = container.querySelector('section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute('id', SECTION_IDS.EXPERIENCE);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /work experience/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all companies and their respective job roles', () => {
    render(<Experience />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Software Development Engineer 2',
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Zopsmart')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Software Development Engineer',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Mountblue Technologies Pvt Ltd')
    ).toBeInTheDocument();
  });

  it('renders the correct duration badges for each role', () => {
    render(<Experience />);

    expect(
      screen.getByText('02/2022 – 05/2025 | Bengaluru')
    ).toBeInTheDocument();
    expect(
      screen.getByText('10/2021 – 02/2022 | Bengaluru')
    ).toBeInTheDocument();
  });

  it('renders the award badge only when present on the role', () => {
    render(<Experience />);

    // Zopsmart has an award badge
    expect(screen.getByText('Pivot Polaris')).toBeInTheDocument();
    expect(
      screen.getByText(/best performance certificate - oct 2022/i)
    ).toBeInTheDocument();

    // Verify exactly one award badge container is rendered across all experience cards
    const awardBadge = screen.getByText('Pivot Polaris').closest('div');
    expect(awardBadge).toHaveClass('text-amber-300');
  });

  it('renders all achievement bullet points for both positions', () => {
    render(<Experience />);

    // Spot-check key bullet points
    expect(
      screen.getByText(
        /led a 10\+ member development team, driving task planning/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /built frontend web applications using react\.js, javascript/i
      )
    ).toBeInTheDocument();

    // Verify bullet point count per list
    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(2);

    const zopsmartItems = within(lists[0]).getAllByRole('listitem');
    const mountblueItems = within(lists[1]).getAllByRole('listitem');

    expect(zopsmartItems).toHaveLength(7);
    expect(mountblueItems).toHaveLength(4);
  });
});