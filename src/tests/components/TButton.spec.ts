import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TButton from '~/components/TButton.vue'

// Base component tests
describe('TButton Component', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(TButton, {
      slots: {
        default: 'Test Button',
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
    expect(component.text()).toContain('Test Button')
  })

  it('emits click event when clicked', async () => {
    await component.trigger('click')
    expect(component.emitted('click')).toBeTruthy()
    expect(component.emitted('click')?.length).toBe(1)
  })

  // Variant tests
  describe('variants', () => {
    it('renders primary variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'primary',
        },
        slots: {
          default: 'Primary Button',
        },
      })

      expect(wrapper.text()).toContain('Primary Button')
      expect(wrapper.classes()).toContain('bg-blue-600')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders success variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'success',
        },
        slots: {
          default: 'Success Button',
        },
      })

      expect(wrapper.text()).toContain('Success Button')
      expect(wrapper.classes()).toContain('bg-green-600')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders warning variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'warning',
        },
        slots: {
          default: 'Warning Button',
        },
      })

      expect(wrapper.text()).toContain('Warning Button')
      expect(wrapper.classes()).toContain('bg-yellow-600')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders error variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'error',
        },
        slots: {
          default: 'Error Button',
        },
      })

      expect(wrapper.text()).toContain('Error Button')
      expect(wrapper.classes()).toContain('bg-red-600')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders info variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'info',
        },
        slots: {
          default: 'Info Button',
        },
      })

      expect(wrapper.text()).toContain('Info Button')
      expect(wrapper.classes()).toContain('bg-indigo-600')
      expect(wrapper.classes()).toContain('text-white')
    })

    it('renders secondary variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'secondary',
        },
        slots: {
          default: 'Secondary Button',
        },
      })

      expect(wrapper.text()).toContain('Secondary Button')
      expect(wrapper.classes()).toContain('bg-gray-200')
      expect(wrapper.classes()).toContain('text-gray-800')
    })

    it('renders ghost variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'ghost',
        },
        slots: {
          default: 'Ghost Button',
        },
      })

      expect(wrapper.text()).toContain('Ghost Button')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-gray-700')
    })
  })

  // Outline tests
  describe('outline style', () => {
    it('renders outline primary with correct classes', () => {
      const wrapper = mount(TButton, {
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
      const wrapper = mount(TButton, {
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

    it('renders outline warning with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'warning',
          outline: true,
        },
        slots: {
          default: 'Outline Warning',
        },
      })

      expect(wrapper.text()).toContain('Outline Warning')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-yellow-600')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-yellow-600')
    })

    it('renders outline error with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'error',
          outline: true,
        },
        slots: {
          default: 'Outline Error',
        },
      })

      expect(wrapper.text()).toContain('Outline Error')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-red-600')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-red-600')
    })

    it('renders outline info with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'info',
          outline: true,
        },
        slots: {
          default: 'Outline Info',
        },
      })

      expect(wrapper.text()).toContain('Outline Info')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-indigo-600')
      expect(wrapper.classes()).toContain('border')
      expect(wrapper.classes()).toContain('border-indigo-600')
    })

    it('ignores outline prop on ghost variant', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'ghost',
          outline: true,
        },
        slots: {
          default: 'Ghost Button',
        },
      })

      expect(wrapper.text()).toContain('Ghost Button')
      expect(wrapper.classes()).toContain('bg-transparent')
      expect(wrapper.classes()).toContain('text-gray-700')
      expect(wrapper.classes()).not.toContain('border')
    })
  })

  // Slots tests
  describe('slots', () => {
    it('renders the default slot', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Button Text',
        },
      })

      expect(wrapper.text()).toContain('Button Text')
    })

    it('renders the prefix slot when provided', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Button Text',
          prefix: '<span data-test="prefix-content">Prefix</span>',
        },
      })

      expect(wrapper.find('[data-test="prefix-content"]').exists()).toBeTruthy()
      expect(wrapper.text()).toContain('Prefix')
      expect(wrapper.text()).toContain('Button Text')
    })

    it('renders the suffix slot when provided', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Button Text',
          suffix: '<span data-test="suffix-content">Suffix</span>',
        },
      })

      expect(wrapper.find('[data-test="suffix-content"]').exists()).toBeTruthy()
      expect(wrapper.text()).toContain('Suffix')
      expect(wrapper.text()).toContain('Button Text')
    })

    it('renders both prefix and suffix slots when provided', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Button Text',
          prefix: '<span data-test="prefix-content">Prefix</span>',
          suffix: '<span data-test="suffix-content">Suffix</span>',
        },
      })

      expect(wrapper.find('[data-test="prefix-content"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="suffix-content"]').exists()).toBeTruthy()
      expect(wrapper.text()).toContain('Prefix')
      expect(wrapper.text()).toContain('Button Text')
      expect(wrapper.text()).toContain('Suffix')
    })

    it('does not render prefix slot when not provided', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Button Text',
        },
      })

      // Check that the prefix slot isn't rendered
      const prefixSlot = wrapper.find('[name="prefix"]')
      expect(prefixSlot.exists()).toBeFalsy()
    })

    it('does not render suffix slot when not provided', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Button Text',
        },
      })

      // Check that the suffix slot isn't rendered
      const suffixSlot = wrapper.find('[name="suffix"]')
      expect(suffixSlot.exists()).toBeFalsy()
    })

    it('shows the loading spinner when in loading state', () => {
      const wrapper = mount(TButton, {
        props: {
          loading: true,
        },
        slots: {
          default: 'Loading Button',
        },
      })

      const spinner = wrapper.find('.animate-spin')
      expect(spinner.exists()).toBeTruthy()
    })

    it('hides the loading spinner when not in loading state', () => {
      const wrapper = mount(TButton, {
        props: {
          loading: false,
        },
        slots: {
          default: 'Normal Button',
        },
      })

      const spinner = wrapper.find('.animate-spin')
      expect(spinner.exists()).toBeFalsy()
    })
  })

  // Size tests
  describe('sizes', () => {
    it('renders extra small size with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          size: 'xs',
        },
        slots: {
          default: 'XS Button',
        },
      })

      expect(wrapper.text()).toContain('XS Button')
      expect(wrapper.classes()).toContain('px-2')
      expect(wrapper.classes()).toContain('py-1')
      expect(wrapper.classes()).toContain('text-xs')
    })

    it('renders small size with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          size: 'sm',
        },
        slots: {
          default: 'Small Button',
        },
      })

      expect(wrapper.text()).toContain('Small Button')
      expect(wrapper.classes()).toContain('px-3')
      expect(wrapper.classes()).toContain('py-1.5')
      expect(wrapper.classes()).toContain('text-sm')
    })

    it('renders medium size with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          size: 'md',
        },
        slots: {
          default: 'Medium Button',
        },
      })

      expect(wrapper.text()).toContain('Medium Button')
      expect(wrapper.classes()).toContain('px-4')
      expect(wrapper.classes()).toContain('py-2')
      expect(wrapper.classes()).toContain('text-base')
    })

    it('renders large size with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          size: 'lg',
        },
        slots: {
          default: 'Large Button',
        },
      })

      expect(wrapper.text()).toContain('Large Button')
      expect(wrapper.classes()).toContain('px-5')
      expect(wrapper.classes()).toContain('py-2.5')
      expect(wrapper.classes()).toContain('text-lg')
      expect(wrapper.classes()).toContain('rounded-md')
    })

    it('renders extra large size with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          size: 'xl',
        },
        slots: {
          default: 'XL Button',
        },
      })

      expect(wrapper.text()).toContain('XL Button')
      expect(wrapper.classes()).toContain('px-6')
      expect(wrapper.classes()).toContain('py-3')
      expect(wrapper.classes()).toContain('text-xl')
      expect(wrapper.classes()).toContain('rounded-md')
    })

    it('uses medium size by default when not specified', () => {
      const wrapper = mount(TButton, {
        slots: {
          default: 'Default Size Button',
        },
      })

      expect(wrapper.classes()).toContain('px-4')
      expect(wrapper.classes()).toContain('py-2')
      expect(wrapper.classes()).toContain('text-base')
    })

    it('scales loading spinner size based on button size', async () => {
      // Test with XS size
      const xsWrapper = mount(TButton, {
        props: {
          size: 'xs',
          loading: true,
        },
      })
      const xsSpinner = xsWrapper.find('.animate-spin')
      expect(xsSpinner.classes()).toContain('h-3')
      expect(xsSpinner.classes()).toContain('w-3')

      // Test with XL size
      const xlWrapper = mount(TButton, {
        props: {
          size: 'xl',
          loading: true,
        },
      })
      const xlSpinner = xlWrapper.find('.animate-spin')
      expect(xlSpinner.classes()).toContain('h-6')
      expect(xlSpinner.classes()).toContain('w-6')
    })
  })
})

// Storybook integration tests
describe('TButton Storybook', () => {
  // Test that the story args match expected values
  test('story args match expected values', async () => {
    // Import story data
    const {
      Primary,
      Success,
      Warning,
      Error,
      Info,
      ExtraSmall,
      Small,
      Medium,
      Large,
      ExtraLarge,
      Ghost,
      OutlinePrimary,
      OutlineSuccess,
      OutlineWarning,
      OutlineError,
      OutlineInfo,
    } = await import('~/stories/TButton.stories')

    // Check primary args
    expect(Primary.args).toEqual({
      variant: 'primary',
      default: 'Primary Button',
    })

    // Check success args
    expect(Success.args).toEqual({
      variant: 'success',
      default: 'Success Button',
    })

    // Check warning args
    expect(Warning.args).toEqual({
      variant: 'warning',
      default: 'Warning Button',
    })

    // Check error args
    expect(Error.args).toEqual({
      variant: 'error',
      default: 'Error Button',
    })

    // Check info args
    expect(Info.args).toEqual({
      variant: 'info',
      default: 'Info Button',
    })

    // Check size args
    expect(ExtraSmall.args).toEqual({
      variant: 'primary',
      size: 'xs',
      default: 'Extra Small Button',
    })

    expect(Small.args).toEqual({
      variant: 'primary',
      size: 'sm',
      default: 'Small Button',
    })

    expect(Medium.args).toEqual({
      variant: 'primary',
      size: 'md',
      default: 'Medium Button',
    })

    expect(Large.args).toEqual({
      variant: 'primary',
      size: 'lg',
      default: 'Large Button',
    })

    expect(ExtraLarge.args).toEqual({
      variant: 'primary',
      size: 'xl',
      default: 'Extra Large Button',
    })

    // Check ghost variant
    expect(Ghost.args).toEqual({
      variant: 'ghost',
      default: 'Ghost Button',
    })

    // Check outline variants
    expect(OutlinePrimary.args).toEqual({
      variant: 'primary',
      outline: true,
      default: 'Outline Primary',
    })

    expect(OutlineSuccess.args).toEqual({
      variant: 'success',
      outline: true,
      default: 'Outline Success',
    })

    expect(OutlineWarning.args).toEqual({
      variant: 'warning',
      outline: true,
      default: 'Outline Warning',
    })

    expect(OutlineError.args).toEqual({
      variant: 'error',
      outline: true,
      default: 'Outline Error',
    })

    expect(OutlineInfo.args).toEqual({
      variant: 'info',
      outline: true,
      default: 'Outline Info',
    })
  })

  // Test that story component matches the actual component
  test('story component reference is correct', async () => {
    const { default: story } = await import('~/stories/TButton.stories')
    expect(story.component).toBe(TButton)
  })
})
