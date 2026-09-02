import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarouselWrapper from "../CarouselWrapper";

describe("CarouselWrapper Component", () => {
  const singleSlide = [<div key="item-1">Solo Content Slide</div>];

  const multipleSlides = [
    <div key="item-1">First Slide</div>,
    <div key="item-2">Second Slide</div>,
    <div key="item-3">Third Slide</div>,
  ];

  it("renders child elements properly", () => {
    render(<CarouselWrapper>{singleSlide}</CarouselWrapper>);
    expect(screen.getByText("Solo Content Slide")).toBeInTheDocument();
  });

  it("hides previous and next buttons when only 1 item is passed", () => {
    render(<CarouselWrapper>{singleSlide}</CarouselWrapper>);

    expect(
      screen.queryByRole("button", { name: /previous/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /next/i }),
    ).not.toBeInTheDocument();
  });

  it("renders both navigation buttons when multiple items are passed", () => {
    render(<CarouselWrapper>{multipleSlides}</CarouselWrapper>);

    expect(
      screen.getByRole("button", { name: /previous/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("disables the Previous button on initial render (first item)", () => {
    render(<CarouselWrapper>{multipleSlides}</CarouselWrapper>);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
  });

  it("shifts track to -100% and enables Previous button on Next click", async () => {
    const user = userEvent.setup();
    render(<CarouselWrapper>{multipleSlides}</CarouselWrapper>);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    await user.click(nextButton);

    expect(prevButton).toBeEnabled();
    expect(nextButton).toBeEnabled();

    const trackElement = screen.getByTestId("carousel-track");
    expect(trackElement).toHaveStyle({ transform: "translateX(-100%)" });
  });

  it("disables the Next button when navigating to the last slide", async () => {
    const user = userEvent.setup();
    render(<CarouselWrapper>{multipleSlides}</CarouselWrapper>);

    const nextButton = screen.getByRole("button", { name: /next/i });

    // Navigate to slide 2
    await user.click(nextButton);
    // Navigate to slide 3 (last item)
    await user.click(nextButton);

    expect(nextButton).toBeDisabled();

    const trackElement = screen
      .getByText("First Slide")
      .closest(".transition-transform");
    expect(trackElement).toHaveStyle({ transform: "translateX(-200%)" });
  });

  it("navigates back to previous slide and re-disables Previous button at index 0", async () => {
    const user = userEvent.setup();
    render(<CarouselWrapper>{multipleSlides}</CarouselWrapper>);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    // Forward to second item
    await user.click(nextButton);
    expect(prevButton).toBeEnabled();

    // Backward to first item
    await user.click(prevButton);
    expect(prevButton).toBeDisabled();

    const trackElement = screen
      .getByText("First Slide")
      .closest(".transition-transform");
    expect(trackElement).toHaveStyle({ transform: "translateX(-0%)" });
  });
});
