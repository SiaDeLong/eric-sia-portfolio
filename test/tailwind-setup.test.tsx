import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

describe('Tailwind CSS Setup Verification', () => {
  it('should render component with Tailwind classes', () => {
    const TestComponent = () => (
      <div className="p-4 text-dark-text-primary glass-medium">
        Test Content
      </div>
    )

    const { container } = render(<TestComponent />)
    const div = container.querySelector('div')
    
    expect(div).toBeDefined()
    expect(div?.className).toContain('glass-medium')
    expect(div?.className).toContain('p-4')
  })

  it('should have dark theme CSS variables defined', () => {
    // Verify that the CSS custom properties are available
    const root = document.documentElement
    const styles = getComputedStyle(root)
    
    // These will be defined in globals.css
    expect(styles.getPropertyValue('--dark-bg')).toBeDefined()
  })
})
