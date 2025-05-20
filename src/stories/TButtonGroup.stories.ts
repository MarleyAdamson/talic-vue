import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within } from '@storybook/test'
import { TButton, TButtonGroup } from '../components'

const meta = {
  title: 'Components/TButtonGroup',
  component: TButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Controls the orientation of the button group',
    },
    rounded: {
      control: 'boolean',
      description: 'Controls whether the first and last buttons have rounded edges',
    },
    gap: {
      control: 'text',
      description: 'Sets the gap between buttons using Tailwind spacing scale',
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
        component: 'A component for grouping related buttons together with consistent styling',
      },
    },
  },
} satisfies Meta<typeof TButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// Horizontal Button Group (Default)
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => ({
    components: { TButton, TButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <TButtonGroup v-bind="args">
        <TButton>Left</TButton>
        <TButton>Middle</TButton>
        <TButton>Right</TButton>
      </TButtonGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find buttons
    const leftButton = canvas.getByText('Left')

    // Interact with buttons
    await userEvent.click(leftButton)
  },
}

// Vertical Button Group
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    components: { TButton, TButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <TButtonGroup v-bind="args">
        <TButton>Top</TButton>
        <TButton>Middle</TButton>
        <TButton>Bottom</TButton>
      </TButtonGroup>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find and interact with top button
    const topButton = canvas.getByText('Top')
    await userEvent.click(topButton)
  },
}

// Button Group with Different Variants
export const DifferentVariants: Story = {
  render: (args) => ({
    components: { TButton, TButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <TButtonGroup v-bind="args">
        <TButton variant="primary">Primary</TButton>
        <TButton variant="secondary">Secondary</TButton>
        <TButton variant="success">Success</TButton>
      </TButtonGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with different button variants',
      },
    },
  },
}

// Outline Button Group
export const Outline: Story = {
  render: (args) => ({
    components: { TButton, TButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <TButtonGroup v-bind="args">
        <TButton outline>Left</TButton>
        <TButton outline>Middle</TButton>
        <TButton outline>Right</TButton>
      </TButtonGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with outline button style',
      },
    },
  },
}

// Button Group with Gap
export const WithGap: Story = {
  args: {
    gap: '2',
  },
  render: (args) => ({
    components: { TButton, TButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <TButtonGroup v-bind="args">
        <TButton>First</TButton>
        <TButton>Second</TButton>
        <TButton>Third</TButton>
      </TButtonGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with gap between buttons',
      },
    },
  },
}

// Button Group with No Rounding
export const NoRounding: Story = {
  args: {
    rounded: false,
  },
  render: (args) => ({
    components: { TButton, TButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <TButtonGroup v-bind="args">
        <TButton>Left</TButton>
        <TButton>Middle</TButton>
        <TButton>Right</TButton>
      </TButtonGroup>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with no rounded corners on first and last buttons',
      },
    },
  },
}

// All Button Group Variants
export const AllVariants: Story = {
  render: () => ({
    components: { TButton, TButtonGroup },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-lg font-medium">Horizontal (Default)</h3>
          <TButtonGroup>
            <TButton>Left</TButton>
            <TButton>Middle</TButton>
            <TButton>Right</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Vertical</h3>
          <TButtonGroup orientation="vertical">
            <TButton>Top</TButton>
            <TButton>Middle</TButton>
            <TButton>Bottom</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Variants</h3>
          <TButtonGroup>
            <TButton variant="primary">Primary</TButton>
            <TButton variant="secondary">Secondary</TButton>
            <TButton variant="success">Success</TButton>
            <TButton variant="warning">Warning</TButton>
            <TButton variant="error">Error</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Outline Style</h3>
          <TButtonGroup>
            <TButton outline>Left</TButton>
            <TButton outline>Middle</TButton>
            <TButton outline>Right</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Gap</h3>
          <TButtonGroup gap="2">
            <TButton>First</TButton>
            <TButton>Second</TButton>
            <TButton>Third</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">No Rounding</h3>
          <TButtonGroup :rounded="false">
            <TButton>Left</TButton>
            <TButton>Middle</TButton>
            <TButton>Right</TButton>
          </TButtonGroup>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All variations of the button group component',
      },
    },
  },
}
