import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { motion } from 'framer-motion'

describe('Framer Motion Setup Verification', () => {
  it('should render motion components', () => {
    const TestComponent = () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Animated Content
      </motion.div>
    )

    const { getByText } = render(<TestComponent />)
    expect(getByText('Animated Content')).toBeDefined()
  })

  it('should support whileInView animations', () => {
    const TestComponent = () => (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Scroll Animation
      </motion.div>
    )

    const { getByText } = render(<TestComponent />)
    expect(getByText('Scroll Animation')).toBeDefined()
  })
})
