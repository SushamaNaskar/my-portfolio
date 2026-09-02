import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Certifications from '../Certifications';

vi.mock('../Constants/sections', () => ({
  SECTION_IDS: { CERTIFICATIONS: 'certifications' },
}));

vi.mock('./SectionContent', () => ({
  default: ({ id, heading, children }: { id: string; heading: string; children: React.ReactNode }) => (
    <section id={id} aria-label={heading}>
      <h2>{heading}</h2>
      {children}
    </section>
  ),
}));

describe('Certifications Component', () => {
  it('renders section title and certificate list items', () => {
    render(<Certifications />);

    expect(screen.getByRole('heading', { level: 2, name: /certifications/i })).toBeInTheDocument();
    expect(screen.getByText('Namaste React')).toBeInTheDocument();
    expect(screen.getByText('Namaste JavaScript')).toBeInTheDocument();
    expect(screen.getByText('A Foundation Program in Full Stack')).toBeInTheDocument();
  });

  it('modal is not present on initial render', () => {
    render(<Certifications />);

    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
  });

  it('opens modal with correct details when clicking "View Certificate"', async () => {
    const user = userEvent.setup();
    render(<Certifications />);

    const viewButtons = screen.getAllByRole('button', { name: /view certificate/i });
    await user.click(viewButtons[0]);

    // Check that modal image is displayed with correct attributes
    const image = screen.getByRole('img', { name: 'Namaste React' });
    expect(image).toBeInTheDocument();
   expect(image.getAttribute('src')).toContain('namaste-react.png');
    expect(image).toHaveAttribute('draggable', 'false');

    // Check close button presence to confirm modal opened
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('closes modal when the close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Certifications />);

    const viewButtons = screen.getAllByRole('button', { name: /view certificate/i });
    await user.click(viewButtons[0]);

    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    // The modal's close button and image should be unmounted
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Namaste React' })).not.toBeInTheDocument();
  });

  it('closes modal when clicking the backdrop overlay', async () => {
    const user = userEvent.setup();
    render(<Certifications />);

    const viewButtons = screen.getAllByRole('button', { name: /view certificate/i });
    await user.click(viewButtons[0]);

    // Click outside on the fixed backdrop container
    const backdrop = screen.getByText(/✕ Close/i).closest('.fixed');
    if (backdrop) {
      await user.click(backdrop);
    }

    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Namaste React' })).not.toBeInTheDocument();
  });

  it('prevents default context menu (right click) on the protected image container', async () => {
    const user = userEvent.setup();
    render(<Certifications />);

    const viewButtons = screen.getAllByRole('button', { name: /view certificate/i });
    await user.click(viewButtons[0]);

    const image = screen.getByRole('img', { name: 'Namaste React' });
    const imageContainer = image.parentElement!;

    const contextMenuEvent = fireEvent.contextMenu(imageContainer);
    expect(contextMenuEvent).toBe(false);
  });
});