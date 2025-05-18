import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TInput from '~/components/TInput.vue'

// Base component tests
describe('TInput Component', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(TInput, {
      props: {
        label: 'Test Input',
        modelValue: '',
      },
    })
  })

  it('exists', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('is visible', () => {
    expect(component.isVisible()).toBeTruthy()
  })

  it('renders the label', () => {
    expect(component.text()).toContain('Test Input')
  })

  it('updates the value when typing', async () => {
    const inputElement = component.find('input')
    await inputElement.setValue('Hello, World!')

    expect(component.emitted('update:modelValue')).toBeTruthy()
    expect(component.emitted('update:modelValue')?.[0]).toEqual(['Hello, World!'])
  })

  it('emits input event when typing', async () => {
    const inputElement = component.find('input')
    await inputElement.trigger('input')

    expect(component.emitted('input')).toBeTruthy()
    expect(component.emitted('input')?.length).toBe(1)
  })

  it('emits change event on change', async () => {
    const inputElement = component.find('input')
    await inputElement.trigger('change')

    expect(component.emitted('change')).toBeTruthy()
    expect(component.emitted('change')?.length).toBe(1)
  })

  it('emits focus and blur events', async () => {
    const inputElement = component.find('input')
    await inputElement.trigger('focus')
    expect(component.emitted('focus')).toBeTruthy()

    await inputElement.trigger('blur')
    expect(component.emitted('blur')).toBeTruthy()
  })

  // Variant tests
  describe('variants', () => {
    it('renders primary variant with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          variant: 'primary',
          label: 'Primary Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('focus:border-blue-500')
      expect(input.classes()).toContain('focus:ring-blue-200')
    })

    it('renders success variant with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          variant: 'success',
          label: 'Success Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('border-green-300')
      expect(input.classes()).toContain('focus:border-green-500')
      expect(input.classes()).toContain('focus:ring-green-200')
    })

    it('renders warning variant with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          variant: 'warning',
          label: 'Warning Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('border-yellow-300')
      expect(input.classes()).toContain('focus:border-yellow-500')
      expect(input.classes()).toContain('focus:ring-yellow-200')
    })

    it('renders error variant with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          variant: 'error',
          label: 'Error Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('border-red-300')
      expect(input.classes()).toContain('focus:border-red-500')
      expect(input.classes()).toContain('focus:ring-red-200')
    })

    it('renders info variant with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          variant: 'info',
          label: 'Info Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('border-indigo-300')
      expect(input.classes()).toContain('focus:border-indigo-500')
      expect(input.classes()).toContain('focus:ring-indigo-200')
    })

    it('renders secondary variant with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          variant: 'secondary',
          label: 'Secondary Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('border-gray-300')
      expect(input.classes()).toContain('focus:border-gray-500')
      expect(input.classes()).toContain('focus:ring-gray-200')
    })
  })

  // Size tests
  describe('sizes', () => {
    it('renders small size with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          size: 'sm',
          label: 'Small Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('px-3')
      expect(input.classes()).toContain('py-2')
      expect(input.classes()).toContain('text-xs')
    })

    it('renders medium size with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          size: 'md',
          label: 'Medium Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('px-4')
      expect(input.classes()).toContain('py-2.5')
      expect(input.classes()).toContain('text-sm')
    })

    it('renders large size with correct classes', () => {
      const wrapper = mount(TInput, {
        props: {
          size: 'lg',
          label: 'Large Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('px-5')
      expect(input.classes()).toContain('py-3.5')
      expect(input.classes()).toContain('text-base')
    })
  })

  // State tests
  describe('states', () => {
    it('applies disabled state correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          disabled: true,
          label: 'Disabled Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('disabled')).toBeDefined()
      expect(input.classes()).toContain('cursor-not-allowed')
      expect(input.classes()).toContain('opacity-50')
      expect(input.classes()).toContain('bg-gray-100')
    })

    it('applies readonly state correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          readonly: true,
          label: 'Readonly Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('readonly')).toBeDefined()
      expect(input.classes()).toContain('bg-gray-50')
    })

    it('applies required state correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          required: true,
          label: 'Required Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('required')).toBeDefined()
      expect(input.attributes('aria-required')).toBe('true')

      // Check if the required indicator (*) is displayed
      const label = wrapper.find('label')
      expect(label.find('.text-red-500').exists()).toBe(true)
    })

    it('applies error state correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          errorMessage: 'This is an error message',
          label: 'Input with Error',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('aria-invalid')).toBe('true')
      expect(input.classes()).toContain('border-red-300')

      // Check if the error message is displayed
      expect(wrapper.text()).toContain('This is an error message')
    })

    it('applies full width correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          fullWidth: true,
          label: 'Full Width Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.classes()).toContain('w-full')
    })
  })

  // Input type tests
  describe('input types', () => {
    it('renders text type correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          type: 'text',
          label: 'Text Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('text')
    })

    it('renders email type correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          type: 'email',
          label: 'Email Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('email')
    })

    it('renders password type correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          type: 'password',
          label: 'Password Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('password')
    })

    it('renders number type correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          type: 'number',
          label: 'Number Input',
          min: 0,
          max: 100,
          step: 5,
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('number')
      expect(input.attributes('min')).toBe('0')
      expect(input.attributes('max')).toBe('100')
      expect(input.attributes('step')).toBe('5')
    })

    it('renders date type correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          type: 'date',
          label: 'Date Input',
        },
      })

      const input = wrapper.find('input')
      expect(input.attributes('type')).toBe('date')
    })
  })

  // Slot tests
  describe('slots', () => {
    it('renders custom label slot correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Default Label',
        },
        slots: {
          label: '<span class="custom-label">Custom Label</span>',
        },
      })

      expect(wrapper.find('.custom-label').exists()).toBe(true)
      expect(wrapper.find('.custom-label').text()).toBe('Custom Label')
    })

    it('renders prefix slot correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Input with Prefix',
        },
        slots: {
          prefix: '<span class="prefix-icon">🔍</span>',
        },
      })

      expect(wrapper.find('.prefix-icon').exists()).toBe(true)
      expect(wrapper.find('input').classes()).toContain('pl-9')
    })

    it('renders suffix slot correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Input with Suffix',
        },
        slots: {
          suffix: '<span class="suffix-icon">✓</span>',
        },
      })

      expect(wrapper.find('.suffix-icon').exists()).toBe(true)
      expect(wrapper.find('input').classes()).toContain('pr-9')
    })
  })

  // Helper and accessibility tests
  describe('a11y and helpers', () => {
    it('renders help text correctly', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Input with Help',
          helpText: 'This is helpful information',
        },
      })

      expect(wrapper.text()).toContain('This is helpful information')

      const helpElement = wrapper.find('p')
      const input = wrapper.find('input')

      // Check ARIA connection
      expect(helpElement.attributes('id')).toBe(input.attributes('aria-describedby'))
    })

    it('hides label when showLabel is false', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Hidden Label',
          showLabel: false,
          ariaLabel: 'Accessible Label',
        },
      })

      expect(wrapper.find('label').exists()).toBe(false)

      const input = wrapper.find('input')
      expect(input.attributes('aria-label')).toBe('Accessible Label')
    })

    it('generates unique IDs when not provided', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Input with Generated ID',
        },
      })

      const label = wrapper.find('label')
      const input = wrapper.find('input')

      expect(label.attributes('for')).toBeDefined()
      expect(input.attributes('id')).toBeDefined()
      expect(label.attributes('for')).toBe(input.attributes('id'))
    })

    it('uses provided ID when specified', () => {
      const wrapper = mount(TInput, {
        props: {
          label: 'Input with Custom ID',
          id: 'custom-input-id',
        },
      })

      const label = wrapper.find('label')
      const input = wrapper.find('input')

      expect(input.attributes('id')).toBe('custom-input-id')
      expect(label.attributes('for')).toBe('custom-input-id')
    })
  })
})
