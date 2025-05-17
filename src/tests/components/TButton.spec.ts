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
          style: 'light',
        },
        slots: {
          default: 'Primary Button',
        },
      })

      expect(wrapper.text()).toContain('Primary Button')
      expect(wrapper.classes()).toContain('bg-blue-200')
      expect(wrapper.classes()).toContain('text-blue-800')
    })

    it('renders success variant with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'success',
          style: 'light',
        },
        slots: {
          default: 'Success Button',
        },
      })

      expect(wrapper.text()).toContain('Success Button')
      expect(wrapper.classes()).toContain('bg-green-200')
      expect(wrapper.classes()).toContain('text-green-800')
    })

    it('renders primary variant in solid style with correct classes', () => {
      const wrapper = mount(TButton, {
        props: {
          variant: 'primary',
          style: 'solid',
        },
        slots: {
          default: 'Primary Button',
        },
      })

      expect(wrapper.classes()).toContain('bg-blue-600')
      expect(wrapper.classes()).toContain('text-white')
    })
  })
})

// Storybook integration tests
describe('TButton Storybook', () => {
  // Test that the story args match expected values
  test('story args match expected values', async () => {
    // Import story data
    const { Primary, Success, LightPrimary, LightSuccess } = await import(
      '~/stories/TButton.stories'
    )

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

    // Check light primary args
    expect(LightPrimary.args).toEqual({
      variant: 'primary',
      style: 'light',
      default: 'Light Primary Button',
    })

    // Check light success args
    expect(LightSuccess.args).toEqual({
      variant: 'success',
      style: 'light',
      default: 'Light Success Button',
    })
  })

  // Test that story component matches the actual component
  test('story component reference is correct', async () => {
    const { default: story } = await import('~/stories/TButton.stories')
    expect(story.component).toBe(TButton)
  })
})
