import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Global Styles - Task 14.2', () => {
  const getCSSContent = () => {
    const cssPath = path.join(process.cwd(), 'src/app/globals.css');
    return fs.readFileSync(cssPath, 'utf-8');
  };

  it('should configure smooth scroll behavior on html element', () => {
    const cssContent = getCSSContent();
    
    // Verify smooth scroll is configured
    expect(cssContent).toContain('scroll-behavior: smooth');
    expect(cssContent).toMatch(/html\s*{[^}]*scroll-behavior:\s*smooth/);
  });

  it('should set default dark theme on body', () => {
    const cssContent = getCSSContent();
    
    // Verify dark theme background and text colors are applied to body
    expect(cssContent).toMatch(/body\s*{[^}]*background:\s*var\(--dark-bg\)/);
    expect(cssContent).toMatch(/body\s*{[^}]*color:\s*var\(--dark-text-primary\)/);
  });

  it('should define base styles with box-sizing', () => {
    const cssContent = getCSSContent();
    
    // Verify box-sizing is set globally
    expect(cssContent).toContain('box-sizing: border-box');
  });

  it('should include font smoothing for better text rendering', () => {
    const cssContent = getCSSContent();
    
    // Verify font smoothing is configured
    expect(cssContent).toContain('-webkit-font-smoothing: antialiased');
    expect(cssContent).toContain('-moz-osx-font-smoothing: grayscale');
  });

  it('should respect reduced motion preferences', () => {
    const cssContent = getCSSContent();
    
    // Verify reduced motion media query exists
    expect(cssContent).toContain('@media (prefers-reduced-motion: reduce)');
    expect(cssContent).toMatch(/prefers-reduced-motion:\s*reduce[^}]*scroll-behavior:\s*auto/);
  });

  it('should set body min-height to 100vh', () => {
    const cssContent = getCSSContent();
    
    // Verify body has min-height for full viewport coverage
    expect(cssContent).toMatch(/body\s*{[^}]*min-height:\s*100vh/);
  });

  it('should reset default margins and padding on body', () => {
    const cssContent = getCSSContent();
    
    // Verify body has no default margins/padding
    expect(cssContent).toMatch(/body\s*{[^}]*margin:\s*0/);
    expect(cssContent).toMatch(/body\s*{[^}]*padding:\s*0/);
  });

  it('should use CSS custom properties for dark theme colors', () => {
    const cssContent = getCSSContent();
    
    // Verify CSS variables are defined in :root
    expect(cssContent).toContain('--dark-bg:');
    expect(cssContent).toContain('--dark-surface:');
    expect(cssContent).toContain('--dark-text-primary:');
    expect(cssContent).toContain('--dark-accent-primary:');
  });

  it('should configure font family with fallbacks', () => {
    const cssContent = getCSSContent();
    
    // Verify font family includes system font fallbacks
    expect(cssContent).toMatch(/font-family:[^;]*system-ui/);
  });
});
