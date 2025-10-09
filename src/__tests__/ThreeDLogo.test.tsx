/// <reference types="vitest/globals" />

import { render, screen } from '@testing-library/react';
import { ThreeDLogo } from '@/components/ThreeDLogo';

describe('ThreeDLogo Component', () => {
  test('renders without crashing', () => {
    render(<ThreeDLogo />);
    // Since it's a 3D component, we just check that it renders
    // The Canvas component might not be easily testable in jsdom
    expect(document.querySelector('canvas')).toBeInTheDocument();
  });

  test('has correct dimensions', () => {
    render(<ThreeDLogo />);
    const container = document.querySelector('.w-full.h-96');
    expect(container).toBeInTheDocument();
  });
});
