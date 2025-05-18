import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, fn, expect } from '@storybook/test'
import { TBadge, TBadgeGroup, TButton } from '../components'

const meta = {
  title: 'Components/TBadgeGroup',
  component: TBadgeGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Controls the orientation of the badge group',
    },
    rounded: {
      control: 'boolean',
      description: 'Controls whether the first and last badges have rounded edges',
    },
    gap: {
      control: 'text',
      description: 'Sets the gap between badges using Tailwind spacing scale',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
  args: {
    orientation: 'horizontal',
    rounded: true,
    gap: '0',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component for grouping related badges together with consistent styling and visibility management',
      },
    },
  },
} satisfies Meta<typeof TBadgeGroup>

export default meta
type Story = StoryObj<typeof meta>

// Horizontal Badge Group (Default)
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => ({
    components: { TBadge, TBadgeGroup },
    setup() {
      return { args }
    },
    template: `
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Primary</TBadge>
        <TBadge variant="secondary">Secondary</TBadge>
        <TBadge variant="success">Success</TBadge>
      </TBadgeGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Verify badges are rendered
    const primaryBadge = canvas.getByText('Primary')
    expect(primaryBadge).toBeDefined()
  },
}

// Vertical Badge Group
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    components: { TBadge, TBadgeGroup },
    setup() {
      return { args }
    },
    template: `
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Top</TBadge>
        <TBadge variant="secondary">Middle</TBadge>
        <TBadge variant="success">Bottom</TBadge>
      </TBadgeGroup>
    `,
  }),
}

// Badge Group with Different Variants
export const DifferentVariants: Story = {
  render: (args) => ({
    components: { TBadge, TBadgeGroup },
    setup() {
      return { args }
    },
    template: `
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Primary</TBadge>
        <TBadge variant="secondary">Secondary</TBadge>
        <TBadge variant="success">Success</TBadge>
        <TBadge variant="warning">Warning</TBadge>
        <TBadge variant="error">Error</TBadge>
        <TBadge variant="info">Info</TBadge>
      </TBadgeGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge group with different badge variants',
      },
    },
  },
}

// Outline Badge Group
export const Outline: Story = {
  render: (args) => ({
    components: { TBadge, TBadgeGroup },
    setup() {
      return { args }
    },
    template: `
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary" outline>Primary</TBadge>
        <TBadge variant="secondary" outline>Secondary</TBadge>
        <TBadge variant="success" outline>Success</TBadge>
      </TBadgeGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge group with outline badge style',
      },
    },
  },
}

// Badge Group with Gap
export const WithGap: Story = {
  args: {
    gap: '2',
  },
  render: (args) => ({
    components: { TBadge, TBadgeGroup },
    setup() {
      return { args }
    },
    template: `
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">First</TBadge>
        <TBadge variant="secondary">Second</TBadge>
        <TBadge variant="success">Third</TBadge>
      </TBadgeGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge group with gap between badges',
      },
    },
  },
}

// Badge Group with Dismissible Badges
export const Dismissible: Story = {
  render: (args) => ({
    components: { TBadge, TBadgeGroup },
    setup() {
      const onDismiss = fn()
      return { args, onDismiss }
    },
    template: `
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary" dismissible @dismiss="onDismiss">First</TBadge>
        <TBadge variant="secondary" dismissible @dismiss="onDismiss">Second</TBadge>
        <TBadge variant="success" dismissible @dismiss="onDismiss">Third</TBadge>
      </TBadgeGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find dismiss button and click it
    const dismissButtons = canvas.getAllByRole('button', { name: 'Dismiss' })
    if (dismissButtons.length > 0) {
      await userEvent.click(dismissButtons[0])
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge group with dismissible badges',
      },
    },
  },
}

// Badge Group with Control Methods
export const WithControlMethods: Story = {
  render: (args) => ({
    components: { TBadge, TBadgeGroup, TButton },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <TBadgeGroup v-bind="args" ref="badgeGroup">
          <TBadge variant="primary" dismissible>First</TBadge>
          <TBadge variant="secondary" dismissible>Second</TBadge>
          <TBadge variant="success" dismissible>Third</TBadge>
          <TBadge variant="warning" dismissible>Fourth</TBadge>
          <TBadge variant="error" dismissible>Fifth</TBadge>
        </TBadgeGroup>

        <div class="flex gap-2 mt-4">
          <TButton
            variant="primary"
            size="sm"
            @click="$refs.badgeGroup.showAllBadges()"
          >
            Show All
          </TButton>
          <TButton
            variant="secondary"
            size="sm"
            @click="$refs.badgeGroup.hideAllBadges()"
          >
            Hide All
          </TButton>
          <TButton
            variant="info"
            size="sm"
            @click="alert(\`Visible: \${$refs.badgeGroup?.getVisibleBadgeCount()} / Total: \${$refs.badgeGroup?.getTotalBadgeCount()}\`)"
          >
            Badge Info
          </TButton>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrating badge group visibility control methods',
      },
    },
  },
}

// All Badge Group Variants
export const AllVariants: Story = {
  render: () => ({
    components: { TBadge, TBadgeGroup, TButton },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-lg font-medium">Horizontal (Default)</h3>
          <TBadgeGroup>
            <TBadge variant="primary">First</TBadge>
            <TBadge variant="secondary">Second</TBadge>
            <TBadge variant="success">Third</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Vertical</h3>
          <TBadgeGroup orientation="vertical">
            <TBadge variant="primary">Top</TBadge>
            <TBadge variant="secondary">Middle</TBadge>
            <TBadge variant="success">Bottom</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Variants</h3>
          <TBadgeGroup>
            <TBadge variant="primary">Primary</TBadge>
            <TBadge variant="secondary">Secondary</TBadge>
            <TBadge variant="success">Success</TBadge>
            <TBadge variant="warning">Warning</TBadge>
            <TBadge variant="error">Error</TBadge>
            <TBadge variant="info">Info</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Gap</h3>
          <TBadgeGroup gap="2">
            <TBadge variant="primary">First</TBadge>
            <TBadge variant="secondary">Second</TBadge>
            <TBadge variant="success">Third</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Styles</h3>
          <TBadgeGroup gap="2">
            <TBadge variant="primary" tonal>Tonal</TBadge>
            <TBadge variant="success" outline>Outline</TBadge>
            <TBadge variant="warning" size="lg">Large</TBadge>
            <TBadge variant="error" size="sm">Small</TBadge>
            <TBadge variant="info" rounding="full">Rounded</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Dismissible Badges</h3>
          <TBadgeGroup ref="dismissibleGroup" gap="2">
            <TBadge variant="primary" dismissible>First</TBadge>
            <TBadge variant="secondary" dismissible>Second</TBadge>
            <TBadge variant="success" dismissible>Third</TBadge>
          </TBadgeGroup>

          <div class="flex gap-2 mt-2">
            <TButton
              variant="primary"
              size="sm"
              @click="$refs.dismissibleGroup.showAllBadges()"
            >
              Show All
            </TButton>
            <TButton
              variant="secondary"
              size="sm"
              @click="$refs.dismissibleGroup.hideAllBadges()"
            >
              Hide All
            </TButton>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different badge group configurations',
      },
    },
  },
}
