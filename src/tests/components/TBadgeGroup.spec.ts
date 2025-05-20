import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { h, nextTick, type ComponentPublicInstance } from 'vue'
import TBadgeGroup from '~/components/TBadgeGroup.vue'
import TBadge from '~/components/TBadge.vue'

interface BadgeGroupConsumer {
  badgeGroup: {
    isBadgeGroup: { value: boolean }
    rounded: { value: boolean }
    orientation: { value: string }
    hasGap: { value: boolean }
    registerBadge: () => string
    handleBadgeDismiss: (id: string) => void
    visibleBadges: { [key: string]: boolean }
    showBadge: (id: string) => void
  }
}

// Define type for our BadgeGroup component instance
interface BadgeGroupInstance extends ComponentPublicInstance {
  visibleBadges: Record<string, boolean>
  hideAllBadges: () => void
  showAllBadges: () => void
  getVisibleBadgeCount: () => number
  getTotalBadgeCount: () => number
}

describe('TBadgeGroup', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(TBadgeGroup, {
      slots: {
        default: '<div>Badge group content</div>',
      },
    })
  })

  it('renders correctly with default props', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('div[role="group"]').exists()).toBe(true)
    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('flex-row')
    expect(wrapper.classes()).toContain('relative')
  })

  it('applies vertical orientation correctly', () => {
    const wrapper = mount(TBadgeGroup, {
      props: {
        orientation: 'vertical',
      },
      slots: {
        default: '<div>Badge group content</div>',
      },
    })

    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).not.toContain('flex-row')
  })

  it('applies gap when specified', () => {
    const wrapper = mount(TBadgeGroup, {
      props: {
        gap: '4',
      },
      slots: {
        default: '<div>Badge group content</div>',
      },
    })

    expect(wrapper.classes()).toContain('gap-4')
  })

  it('applies additional classes when provided', () => {
    const wrapper = mount(TBadgeGroup, {
      props: {
        class: 'custom-class another-class',
      },
      slots: {
        default: '<div>Badge group content</div>',
      },
    })

    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.classes()).toContain('another-class')
  })

  it('correctly provides badgeGroup context to child components', async () => {
    // Create a test component that will consume the provided values
    const TestConsumer = {
      template: '<div>{{ badgeGroupIsActive }} {{ badgeGroupRounded }}</div>',
      inject: ['badgeGroup'],
      computed: {
        badgeGroupIsActive(): boolean {
          return (this as unknown as BadgeGroupConsumer).badgeGroup.isBadgeGroup.value
        },
        badgeGroupRounded(): boolean {
          return (this as unknown as BadgeGroupConsumer).badgeGroup.rounded.value
        },
      },
    }

    const wrapper = mount(TBadgeGroup, {
      props: {
        rounded: true,
        gap: '2',
      },
      slots: {
        default: h(TestConsumer),
      },
      global: {
        components: {
          TestConsumer,
        },
      },
    })

    const consumerEl = wrapper.findComponent(TestConsumer)
    expect(consumerEl.text()).toContain('true') // Contains isBadgeGroup: true
  })

  it('provides hasGap as false when gap is "0"', async () => {
    // Create a test component that will consume the provided values
    const TestConsumer = {
      template: '<div>{{ badgeGroupHasGap }}</div>',
      inject: ['badgeGroup'],
      computed: {
        badgeGroupHasGap(): boolean {
          return (this as unknown as BadgeGroupConsumer).badgeGroup.hasGap.value
        },
      },
    }

    const wrapper = mount(TBadgeGroup, {
      props: {
        gap: '0',
      },
      slots: {
        default: h(TestConsumer),
      },
      global: {
        components: {
          TestConsumer,
        },
      },
    })

    const consumerEl = wrapper.findComponent(TestConsumer)
    expect(consumerEl.text()).toBe('false') // Contains hasGap: false for gap="0"
  })

  it('properly tracks badge visibility', async () => {
    const wrapper = mount({
      components: { TBadgeGroup, TBadge },
      template: `
        <TBadgeGroup ref="badgeGroup">
          <TBadge id="first" dismissible>First</TBadge>
          <TBadge id="second" dismissible>Second</TBadge>
          <TBadge id="third" dismissible>Third</TBadge>
        </TBadgeGroup>
      `,
    })

    // Check that there are three badges
    const badges = wrapper.findAllComponents(TBadge)
    expect(badges.length).toBe(3)

    // Find the dismiss button of the first badge and click it
    const firstBadge = badges[0]
    const dismissButton = firstBadge.find('button[aria-label="Dismiss"]')
    await dismissButton.trigger('click')

    // After dismissing, the badge should not be visible
    await wrapper.vm.$nextTick()
    const visibleBadges = wrapper.findAllComponents(TBadge).filter((b) => b.isVisible())
    expect(visibleBadges.length).toBe(2)
  })

  it('exposes methods to show and hide all badges', async () => {
    const wrapper = mount({
      components: { TBadgeGroup, TBadge },
      template: `
        <div>
          <TBadgeGroup ref="badgeGroup">
            <TBadge dismissible>First</TBadge>
            <TBadge dismissible>Second</TBadge>
            <TBadge dismissible>Third</TBadge>
          </TBadgeGroup>
          <button id="hideAll" @click="$refs.badgeGroup.hideAllBadges()">Hide All</button>
          <button id="showAll" @click="$refs.badgeGroup.showAllBadges()">Show All</button>
        </div>
      `,
    })

    // Initially all badges should be visible
    let visibleBadges = wrapper.findAllComponents(TBadge).filter((b) => b.isVisible())
    expect(visibleBadges.length).toBe(3)

    // Click hide all button
    await wrapper.find('#hideAll').trigger('click')
    await wrapper.vm.$nextTick()

    // Now no badges should be visible
    visibleBadges = wrapper.findAllComponents(TBadge).filter((b) => b.isVisible())
    expect(visibleBadges.length).toBe(0)

    // Click show all button
    await wrapper.find('#showAll').trigger('click')
    await wrapper.vm.$nextTick()

    // All badges should be visible again
    visibleBadges = wrapper.findAllComponents(TBadge).filter((b) => b.isVisible())
    expect(visibleBadges.length).toBe(3)
  })

  it('correctly reports badge counts', async () => {
    // Create a direct test of the component's methods instead of trying to use refs
    const wrapper = mount(TBadgeGroup, {
      slots: {
        default: `
          <TBadge dismissible>First</TBadge>
          <TBadge dismissible>Second</TBadge>
          <TBadge dismissible>Third</TBadge>
        `,
      },
      global: {
        components: { TBadge },
      },
    })

    // Cast to our interface to access the internal properties
    const vm = wrapper.vm as unknown as BadgeGroupInstance

    // Wait for the badges to be registered
    await nextTick()

    // Initially 3 total, 3 visible
    expect(vm.getTotalBadgeCount()).toBe(3)
    expect(vm.getVisibleBadgeCount()).toBe(3)

    // Hide all badges
    vm.hideAllBadges()
    await nextTick()

    // Now 3 total, 0 visible
    expect(vm.getTotalBadgeCount()).toBe(3)
    expect(vm.getVisibleBadgeCount()).toBe(0)

    // Show first badge
    const badgeIds = Object.keys(vm.visibleBadges)
    if (badgeIds.length > 0) {
      vm.visibleBadges[badgeIds[0]] = true
      await nextTick()

      // Now 3 total, 1 visible
      expect(vm.getTotalBadgeCount()).toBe(3)
      expect(vm.getVisibleBadgeCount()).toBe(1)
    }
  })
})
