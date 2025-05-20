import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TCard from '~/components/TCard.vue'

// Base component tests
describe('TCard Component', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(TCard, {
      slots: {
        default: 'Card Content',
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
    expect(component.text()).toContain('Card Content')
  })

  // Elevation tests
  describe('elevation levels', () => {
    it('renders with xs elevation', () => {
      const wrapper = mount(TCard, {
        props: {
          elevation: 'xs',
        },
        slots: {
          default: 'XS Elevation',
        },
      })

      expect(wrapper.text()).toContain('XS Elevation')
      expect(wrapper.classes()).toContain('shadow-sm')
    })

    it('renders with sm elevation', () => {
      const wrapper = mount(TCard, {
        props: {
          elevation: 'sm',
        },
        slots: {
          default: 'SM Elevation',
        },
      })

      expect(wrapper.text()).toContain('SM Elevation')
      expect(wrapper.classes()).toContain('shadow')
    })

    it('renders with md elevation (default)', () => {
      const wrapper = mount(TCard, {
        props: {
          elevation: 'md',
        },
        slots: {
          default: 'MD Elevation',
        },
      })

      expect(wrapper.text()).toContain('MD Elevation')
      expect(wrapper.classes()).toContain('shadow-md')
    })

    it('renders with lg elevation', () => {
      const wrapper = mount(TCard, {
        props: {
          elevation: 'lg',
        },
        slots: {
          default: 'LG Elevation',
        },
      })

      expect(wrapper.text()).toContain('LG Elevation')
      expect(wrapper.classes()).toContain('shadow-lg')
    })

    it('renders with xl elevation', () => {
      const wrapper = mount(TCard, {
        props: {
          elevation: 'xl',
        },
        slots: {
          default: 'XL Elevation',
        },
      })

      expect(wrapper.text()).toContain('XL Elevation')
      expect(wrapper.classes()).toContain('shadow-xl')
    })

    it('renders with no elevation', () => {
      const wrapper = mount(TCard, {
        props: {
          elevation: 'none',
        },
        slots: {
          default: 'No Elevation',
        },
      })

      expect(wrapper.text()).toContain('No Elevation')
      expect(wrapper.classes()).not.toContain('shadow-sm')
      expect(wrapper.classes()).not.toContain('shadow')
      expect(wrapper.classes()).not.toContain('shadow-md')
      expect(wrapper.classes()).not.toContain('shadow-lg')
      expect(wrapper.classes()).not.toContain('shadow-xl')
    })
  })

  // Well style tests
  describe('well style', () => {
    it('renders with well style', () => {
      const wrapper = mount(TCard, {
        props: {
          well: true,
        },
        slots: {
          default: 'Well Card',
        },
      })

      expect(wrapper.text()).toContain('Well Card')
      expect(wrapper.classes()).toContain('border-0')
      expect(wrapper.classes()).toContain('ring-1')
      expect(wrapper.classes()).toContain('ring-inset')
      expect(wrapper.classes()).toContain('ring-gray-200')
    })

    it('well style removes shadow', () => {
      const wrapper = mount(TCard, {
        props: {
          well: true,
          elevation: 'lg', // Should be ignored when well=true
        },
        slots: {
          default: 'Well Card',
        },
      })

      expect(wrapper.classes()).not.toContain('shadow-lg')
    })
  })

  // Border radius tests
  describe('border radius options', () => {
    it('renders with default border radius (rounded-lg) when rounded=true', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: true,
        },
        slots: {
          default: 'Default Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('Default Rounded Card')
      expect(wrapper.classes()).toContain('rounded-lg')
    })

    it('renders with no border radius when rounded=false', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: false,
        },
        slots: {
          default: 'No Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('No Rounded Card')
      expect(wrapper.classes()).toContain('rounded-none')
    })

    it('renders with no border radius when rounded="none"', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: 'none',
        },
        slots: {
          default: 'No Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('No Rounded Card')
      expect(wrapper.classes()).toContain('rounded-none')
    })

    it('renders with small border radius when rounded="sm"', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: 'sm',
        },
        slots: {
          default: 'Small Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('Small Rounded Card')
      expect(wrapper.classes()).toContain('rounded-sm')
    })

    it('renders with medium border radius when rounded="md"', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: 'md',
        },
        slots: {
          default: 'Medium Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('Medium Rounded Card')
      expect(wrapper.classes()).toContain('rounded-md')
    })

    it('renders with large border radius when rounded="lg"', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: 'lg',
        },
        slots: {
          default: 'Large Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('Large Rounded Card')
      expect(wrapper.classes()).toContain('rounded-lg')
    })

    it('renders with extra large border radius when rounded="xl"', () => {
      const wrapper = mount(TCard, {
        props: {
          rounded: 'xl',
        },
        slots: {
          default: 'XL Rounded Card',
        },
      })

      expect(wrapper.text()).toContain('XL Rounded Card')
      expect(wrapper.classes()).toContain('rounded-xl')
    })
  })

  // Slot tests
  describe('slots', () => {
    it('renders header slot when provided', () => {
      const wrapper = mount(TCard, {
        slots: {
          header: 'Header Content',
          default: 'Main Content',
        },
      })

      expect(wrapper.text()).toContain('Header Content')
      expect(wrapper.text()).toContain('Main Content')
      // Check if header div is created - use next() to get the first child div
      const headerDiv = wrapper.find('div').findAll('div').at(0)!
      expect(headerDiv.exists()).toBeTruthy()
      expect(headerDiv.text()).toContain('Header Content')
      expect(headerDiv.classes()).toContain('border-b')
    })

    it('renders footer slot when provided', () => {
      const wrapper = mount(TCard, {
        slots: {
          default: 'Main Content',
          footer: 'Footer Content',
        },
      })

      expect(wrapper.text()).toContain('Main Content')
      expect(wrapper.text()).toContain('Footer Content')
      // Check if footer div is created - getLastChild()
      const footerDiv = wrapper.find('div').findAll('div').at(-1)!
      expect(footerDiv.exists()).toBeTruthy()
      expect(footerDiv.text()).toContain('Footer Content')
      expect(footerDiv.classes()).toContain('border-t')
    })

    it('renders both header and footer slots when provided', () => {
      const wrapper = mount(TCard, {
        slots: {
          header: 'Header Content',
          default: 'Main Content',
          footer: 'Footer Content',
        },
      })

      expect(wrapper.text()).toContain('Header Content')
      expect(wrapper.text()).toContain('Main Content')
      expect(wrapper.text()).toContain('Footer Content')
    })
  })

  // Style options tests
  describe('style options', () => {
    it('applies gray footer background', () => {
      const wrapper = mount(TCard, {
        props: {
          grayFooter: true,
        },
        slots: {
          default: 'Main Content',
          footer: 'Gray Footer',
        },
      })

      const footerDiv = wrapper.find('div').findAll('div').at(-1)!
      expect(footerDiv.exists()).toBeTruthy()
      expect(footerDiv.classes()).toContain('bg-gray-50')
    })

    it('applies gray body background', () => {
      const wrapper = mount(TCard, {
        props: {
          grayBody: true,
        },
        slots: {
          default: 'Gray Body',
        },
      })

      // When there's just default slot, it will be the first child
      const bodyDivs = wrapper.find('div').findAll('div')
      const bodyDiv = bodyDivs.length === 1 ? bodyDivs.at(0)! : bodyDivs.at(1)!
      expect(bodyDiv.exists()).toBeTruthy()
      expect(bodyDiv.classes()).toContain('bg-gray-50')
    })

    it('applies edge-to-edge on mobile', () => {
      const wrapper = mount(TCard, {
        props: {
          edgeToEdgeOnMobile: true,
        },
        slots: {
          default: 'Edge to Edge Content',
        },
      })

      // When there's just default slot, it will be the first child
      const bodyDivs = wrapper.find('div').findAll('div')
      const bodyDiv = bodyDivs.length === 1 ? bodyDivs.at(0)! : bodyDivs.at(1)!
      expect(bodyDiv.exists()).toBeTruthy()
      expect(bodyDiv.classes()).toContain('sm:p-6')
      expect(bodyDiv.classes()).toContain('px-0')
      expect(bodyDiv.classes()).toContain('py-0')
    })
  })

  // Custom class tests
  describe('custom classes', () => {
    it('applies custom classes', () => {
      const wrapper = mount(TCard, {
        props: {
          class: 'max-w-md mx-auto my-8',
        },
        slots: {
          default: 'Custom Class Card',
        },
      })

      expect(wrapper.classes()).toContain('max-w-md')
      expect(wrapper.classes()).toContain('mx-auto')
      expect(wrapper.classes()).toContain('my-8')
    })
  })
})
