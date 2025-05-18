import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TBadge from '~/components/TBadge.vue'

// Base component tests
describe('TBadge Component', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(TBadge, {
      slots: {
        default: 'Test Badge',
      },
    })
  })

  it('exists', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('is visible', () => {
    expect(component.isVisible()).toBeTruthy()
  })

  it('renders the default slot', () => {
    expect(component.text()).toContain('Test Badge')
  })

  // Variant tests
  describe('variants', () => {
    it('renders primary variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'primary',
        },
        slots: {
          default: 'Primary Badge',
        },
      })

      expect(wrapper.text()).toContain('Primary Badge')
      expect(wrapper.classes()).toContain('bg-blue-500')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders success variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'success',
        },
        slots: {
          default: 'Success Badge',
        },
      })

      expect(wrapper.text()).toContain('Success Badge')
      expect(wrapper.classes()).toContain('bg-green-500')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders warning variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'warning',
        },
        slots: {
          default: 'Warning Badge',
        },
      })

      expect(wrapper.text()).toContain('Warning Badge')
      expect(wrapper.classes()).toContain('bg-yellow-500')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders error variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'error',
        },
        slots: {
          default: 'Error Badge',
        },
      })

      expect(wrapper.text()).toContain('Error Badge')
      expect(wrapper.classes()).toContain('bg-red-500')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders info variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'info',
        },
        slots: {
          default: 'Info Badge',
        },
      })

      expect(wrapper.text()).toContain('Info Badge')
      expect(wrapper.classes()).toContain('bg-indigo-500')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders secondary variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'secondary',
        },
        slots: {
          default: 'Secondary Badge',
        },
      })

      expect(wrapper.text()).toContain('Secondary Badge')
      expect(wrapper.classes()).toContain('bg-gray-500')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders ghost variant with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'ghost',
        },
        slots: {
          default: 'Ghost Badge',
        },
      })

      expect(wrapper.text()).toContain('Ghost Badge')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-gray-700')
    })
  })

  // Outline tests
  describe('outline style', () => {
    it('renders outline primary with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'primary',
          outline: true,
        },
        slots: {
          default: 'Outline Primary',
        },
      })

      expect(wrapper.text()).toContain('Outline Primary')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-blue-600')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-blue-600')
    })

    it('renders outline success with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'success',
          outline: true,
        },
        slots: {
          default: 'Outline Success',
        },
      })

      expect(wrapper.text()).toContain('Outline Success')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-green-600')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-green-600')
    })
  })

  // Tonal tests
  describe('tonal style', () => {
    it('renders tonal primary with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'primary',
          tonal: true,
        },
        slots: {
          default: 'Tonal Primary',
        },
      })

      expect(wrapper.text()).toContain('Tonal Primary')
      expect(wrapper.classes()).toContain('bg-blue-100')
      expect(wrapper.classes()).toContain('text-blue-800')
    })

    it('renders tonal success with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          variant: 'success',
          tonal: true,
        },
        slots: {
          default: 'Tonal Success',
        },
      })

      expect(wrapper.text()).toContain('Tonal Success')
      expect(wrapper.classes()).toContain('bg-green-100')
      expect(wrapper.classes()).toContain('text-green-800')
    })
  })

  // Size tests
  describe('sizes', () => {
    it('renders xs size with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          size: 'xs',
        },
        slots: {
          default: 'XS Badge',
        },
      })

      expect(wrapper.text()).toContain('XS Badge')
      expect(wrapper.classes()).toContain('px-1.5')
      expect(wrapper.classes()).toContain('py-0.5')
      expect(wrapper.classes()).toContain('text-xs')
    })

    it('renders sm size with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          size: 'sm',
        },
        slots: {
          default: 'SM Badge',
        },
      })

      expect(wrapper.text()).toContain('SM Badge')
      expect(wrapper.classes()).toContain('px-2')
      expect(wrapper.classes()).toContain('py-0.5')
      expect(wrapper.classes()).toContain('text-xs')
    })

    it('renders lg size with correct classes', () => {
      const wrapper = mount(TBadge, {
        props: {
          size: 'lg',
        },
        slots: {
          default: 'LG Badge',
        },
      })

      expect(wrapper.text()).toContain('LG Badge')
      expect(wrapper.classes()).toContain('px-3')
      expect(wrapper.classes()).toContain('py-1')
      expect(wrapper.classes()).toContain('text-base')
    })
  })

  // Rounding tests
  describe('rounding', () => {
    it('applies rounded class to medium sized badges by default', () => {
      const wrapper = mount(TBadge, {
        props: {
          size: 'md',
        },
        slots: {
          default: 'Default Rounded Badge',
        },
      })

      expect(wrapper.classes()).toContain('rounded')
      expect(wrapper.classes()).not.toContain('rounded-full')
      expect(wrapper.classes()).not.toContain('rounded-md')
    })

    it('applies rounded-md class to large sized badges by default', () => {
      const wrapper = mount(TBadge, {
        props: {
          size: 'lg',
        },
        slots: {
          default: 'Large Rounded Badge',
        },
      })

      expect(wrapper.classes()).toContain('rounded-md')
      expect(wrapper.classes()).not.toContain('rounded-full')
      expect(wrapper.classes()).not.toContain('rounded')
    })

    it('applies rounded-full class when rounding prop is set to "full"', () => {
      const wrapper = mount(TBadge, {
        props: {
          rounding: 'full',
        },
        slots: {
          default: 'Pill Badge',
        },
      })

      expect(wrapper.classes()).toContain('rounded-full')
      expect(wrapper.classes()).not.toContain('rounded-md')
      expect(wrapper.classes()).not.toContain('rounded')
    })

    it('applies rounded-lg class when rounding prop is set to "lg"', () => {
      const wrapper = mount(TBadge, {
        props: {
          rounding: 'lg',
        },
        slots: {
          default: 'Large Rounded Badge',
        },
      })

      expect(wrapper.classes()).toContain('rounded-lg')
      expect(wrapper.classes()).not.toContain('rounded-md')
      expect(wrapper.classes()).not.toContain('rounded-full')
    })

    it('applies rounded-sm class when rounding prop is set to "sm"', () => {
      const wrapper = mount(TBadge, {
        props: {
          rounding: 'sm',
        },
        slots: {
          default: 'Small Rounded Badge',
        },
      })

      expect(wrapper.classes()).toContain('rounded-sm')
      expect(wrapper.classes()).not.toContain('rounded')
      expect(wrapper.classes()).not.toContain('rounded-full')
    })

    it('applies no rounding class when rounding prop is set to "none"', () => {
      const wrapper = mount(TBadge, {
        props: {
          rounding: 'none',
        },
        slots: {
          default: 'No Rounded Badge',
        },
      })

      expect(wrapper.classes()).not.toContain('rounded')
      expect(wrapper.classes()).not.toContain('rounded-md')
      expect(wrapper.classes()).not.toContain('rounded-lg')
      expect(wrapper.classes()).not.toContain('rounded-sm')
      expect(wrapper.classes()).not.toContain('rounded-full')
    })
  })

  // Dismissible tests
  describe('dismissible functionality', () => {
    it('does not show dismiss button by default', () => {
      const wrapper = mount(TBadge, {
        slots: {
          default: 'Non-dismissible Badge',
        },
      })

      expect(wrapper.find('button').exists()).toBe(false)
    })

    it('shows dismiss button when dismissible is true', () => {
      const wrapper = mount(TBadge, {
        props: {
          dismissible: true,
        },
        slots: {
          default: 'Dismissible Badge',
        },
      })

      expect(wrapper.find('button').exists()).toBe(true)
      expect(wrapper.find('button').attributes('aria-label')).toBe('Dismiss')
    })

    it('emits dismiss event when dismiss button is clicked', async () => {
      const wrapper = mount(TBadge, {
        props: {
          dismissible: true,
        },
        slots: {
          default: 'Dismissible Badge',
        },
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted('dismiss')).toBeTruthy()
      expect(wrapper.emitted('dismiss')?.length).toBe(1)
    })
  })

  // Slot tests
  describe('slots', () => {
    it('renders prefix slot when provided', () => {
      const wrapper = mount(TBadge, {
        slots: {
          default: 'Badge with Prefix',
          prefix: '<span data-testid="prefix">P</span>',
        },
      })

      expect(wrapper.find('[data-testid="prefix"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="prefix"]').text()).toBe('P')
    })

    it('renders suffix slot when provided', () => {
      const wrapper = mount(TBadge, {
        slots: {
          default: 'Badge with Suffix',
          suffix: '<span data-testid="suffix">S</span>',
        },
      })

      expect(wrapper.find('[data-testid="suffix"]').exists()).toBe(true)
      expect(wrapper.find('[data-testid="suffix"]').text()).toBe('S')
    })
  })

  // Accessibility tests
  describe('accessibility', () => {
    it('sets aria-label attribute correctly', () => {
      const wrapper = mount(TBadge, {
        props: {
          ariaLabel: 'Accessible Badge',
        },
        slots: {
          default: 'Badge Content',
        },
      })

      expect(wrapper.attributes('aria-label')).toBe('Accessible Badge')
    })
  })
})
