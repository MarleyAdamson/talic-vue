import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { TAlert } from '../../components'

// Define the types to match TAlert component props
type AlertVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
type AlertSize = 'sm' | 'md' | 'lg'

describe('TAlert', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(TAlert, {
      slots: {
        default: 'Alert content',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Alert content')
    expect(wrapper.classes()).toContain('bg-blue-50')
    expect(wrapper.classes()).toContain('border-blue-300')
    expect(wrapper.classes()).toContain('rounded-lg')
    expect(wrapper.classes()).toContain('p-4')
  })

  it('applies different variants correctly', () => {
    const variants: AlertVariant[] = ['primary', 'secondary', 'success', 'warning', 'error', 'info']

    variants.forEach((variant) => {
      const wrapper = mount(TAlert, {
        props: {
          variant,
        },
        slots: {
          default: `${variant} alert`,
        },
      })

      if (variant === 'primary') expect(wrapper.classes()).toContain('bg-blue-50')
      if (variant === 'secondary') expect(wrapper.classes()).toContain('bg-gray-50')
      if (variant === 'success') expect(wrapper.classes()).toContain('bg-green-50')
      if (variant === 'warning') expect(wrapper.classes()).toContain('bg-yellow-50')
      if (variant === 'error') expect(wrapper.classes()).toContain('bg-red-50')
      if (variant === 'info') expect(wrapper.classes()).toContain('bg-indigo-50')
    })
  })

  it('renders a title when provided', () => {
    const wrapper = mount(TAlert, {
      props: {
        title: 'Alert Title',
      },
      slots: {
        default: 'Alert content',
      },
    })

    const title = wrapper.find('h3')
    expect(title.exists()).toBe(true)
    expect(title.text()).toContain('Alert Title')
  })

  it('applies different sizes correctly', () => {
    const sizes: AlertSize[] = ['sm', 'md', 'lg']

    sizes.forEach((size) => {
      const wrapper = mount(TAlert, {
        props: {
          size,
        },
        slots: {
          default: `${size} alert`,
        },
      })

      if (size === 'sm') expect(wrapper.classes()).toContain('p-3')
      if (size === 'md') expect(wrapper.classes()).toContain('p-4')
      if (size === 'lg') expect(wrapper.classes()).toContain('p-5')
    })
  })

  it('respects the rounded prop', () => {
    const wrapper = mount(TAlert, {
      props: {
        rounded: false,
      },
      slots: {
        default: 'Alert with no rounded corners',
      },
    })

    expect(wrapper.classes()).toContain('rounded-none')
    expect(wrapper.classes()).not.toContain('rounded-lg')
  })

  it('renders an icon by default for most variants', () => {
    const variants: AlertVariant[] = ['primary', 'success', 'warning', 'error', 'info']

    variants.forEach((variant) => {
      const wrapper = mount(TAlert, {
        props: {
          variant,
        },
        slots: {
          default: `${variant} alert`,
        },
      })

      const icon = wrapper.find('svg')
      expect(icon.exists()).toBe(true)
    })
  })

  it('does not render an icon for secondary variant by default', () => {
    const wrapper = mount(TAlert, {
      props: {
        variant: 'secondary',
      },
      slots: {
        default: 'Secondary alert',
      },
    })

    const icon = wrapper.find('svg')
    expect(icon.exists()).toBe(false)
  })

  it('allows overriding the icon display with hasIcon prop', () => {
    // Force icon on secondary
    const wrapper1 = mount(TAlert, {
      props: {
        variant: 'secondary',
        hasIcon: true,
      },
      slots: {
        default: 'Secondary alert with icon',
      },
    })

    const icon1 = wrapper1.find('svg')
    expect(icon1.exists()).toBe(true)

    // Hide icon on primary
    const wrapper2 = mount(TAlert, {
      props: {
        variant: 'primary',
        hasIcon: false,
      },
      slots: {
        default: 'Primary alert without icon',
      },
    })

    const icon2 = wrapper2.find('svg')
    expect(icon2.exists()).toBe(false)
  })

  it('renders a dismiss button when dismissible is true', () => {
    const wrapper = mount(TAlert, {
      props: {
        dismissible: true,
      },
      slots: {
        default: 'Dismissible alert',
      },
    })

    const dismissButton = wrapper.find('button[aria-label="Dismiss alert"]')
    expect(dismissButton.exists()).toBe(true)
  })

  it('emits dismiss event when dismiss button is clicked', async () => {
    const wrapper = mount(TAlert, {
      props: {
        dismissible: true,
      },
      slots: {
        default: 'Dismissible alert',
      },
    })

    const dismissButton = wrapper.find('button')
    await dismissButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('dismiss')
    expect(wrapper.find('div[role]').exists()).toBe(false) // Alert should be hidden
  })

  it('renders footer content when provided', () => {
    const wrapper = mount(TAlert, {
      slots: {
        default: 'Alert content',
        footer: 'Footer content',
      },
    })

    expect(wrapper.text()).toContain('Footer content')
  })

  // Accessibility tests
  it('has correct ARIA attributes', () => {
    const wrapper = mount(TAlert, {
      props: {
        title: 'Alert Title',
      },
      slots: {
        default: 'Alert content',
      },
    })

    const alert = wrapper.find('div[role]')

    // Should have role="status" for non-critical alerts
    expect(alert.attributes('role')).toBe('status')

    // Should have aria-live="polite" by default
    expect(alert.attributes('aria-live')).toBe('polite')

    // Should have proper ID references for title and content
    expect(alert.attributes('aria-labelledby')).toBeDefined()
    expect(alert.attributes('aria-describedby')).toBeDefined()
  })

  it('uses correct role for warning and error variants', () => {
    const wrapper1 = mount(TAlert, {
      props: {
        variant: 'warning',
      },
      slots: {
        default: 'Warning alert',
      },
    })

    expect(wrapper1.attributes('role')).toBe('alert')

    const wrapper2 = mount(TAlert, {
      props: {
        variant: 'error',
      },
      slots: {
        default: 'Error alert',
      },
    })

    expect(wrapper2.attributes('role')).toBe('alert')
  })

  it('respects the aria-live setting', () => {
    const wrapper = mount(TAlert, {
      props: {
        live: 'assertive',
        variant: 'error',
      },
      slots: {
        default: 'Critical error',
      },
    })

    expect(wrapper.attributes('aria-live')).toBe('assertive')
  })

  it('uses aria-label when title is not provided', () => {
    const wrapper = mount(TAlert, {
      props: {
        ariaLabel: 'Important notification',
      },
      slots: {
        default: 'Alert with no visible title',
      },
    })

    expect(wrapper.attributes('aria-label')).toBe('Important notification')
  })

  it('has screen reader text for icon context', () => {
    const wrapper = mount(TAlert, {
      props: {
        variant: 'error',
        title: 'Error occurred',
      },
      slots: {
        default: 'Something went wrong',
      },
    })

    const srText = wrapper.find('.sr-only')
    expect(srText.exists()).toBe(true)
    expect(srText.text()).toBe('Error:')
  })
})
