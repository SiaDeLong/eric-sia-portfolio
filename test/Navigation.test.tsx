import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Navigation from '../src/components/ui/Navigation';
import type { NavItem } from '@/lib/types';

describe('Navigation Component', () => {
  const mockNavItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  beforeEach(() => {
    // Mock IntersectionObserver as a class
    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    global.IntersectionObserver = MockIntersectionObserver as any;

    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders navigation component', () => {
    render(<Navigation items={mockNavItems} />);

    // Should render the header
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<Navigation items={mockNavItems} />);

    mockNavItems.forEach((item) => {
      const items = screen.getAllByText(item.label);
      expect(items.length).toBeGreaterThan(0);
    });
  });

  it('renders mobile menu button', () => {
    render(<Navigation items={mockNavItems} />);

    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('has proper header structure', () => {
    const { container } = render(<Navigation items={mockNavItems} />);

    const header = container.querySelector('header');
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
  });
});
