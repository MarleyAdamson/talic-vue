import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within } from '@storybook/test'
import { TAlert } from '../components'

const meta = {
  title: 'Components/TAlert',
  component: TAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'The visual style of the alert',
    },
    title: {
      control: 'text',
      description: 'The title displayed at the top of the alert',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the alert',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the alert has rounded corners',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    hasIcon: {
      control: 'boolean',
      description:
        'Whether to show the variant icon (default is true for all variants except secondary)',
    },
    live: {
      control: 'select',
      options: ['assertive', 'polite', 'off'],
      description: 'ARIA live region setting for screen readers',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the alert (when title is not provided)',
    },
    elevation: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the shadow depth of the alert',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    rounded: true,
    dismissible: false,
    elevation: 'none',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A versatile alert component used to display messages with various severity levels',
      },
    },
  },
} satisfies Meta<typeof TAlert>

export default meta
type Story = StoryObj<typeof meta>

// Basic Alert
export const Basic: Story = {
  args: {
    title: 'Alert Title',
  },
  render: (args) => ({
    components: { TAlert },
    setup() {
      return { args }
    },
    template: `
      <TAlert v-bind="args">
        This is a basic alert message. It provides important information.
      </TAlert>
    `,
  }),
}

// All Alert Variants
export const AllVariants: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert variant="primary" title="Primary Alert">
          This is a primary alert — check it out!
        </TAlert>

        <TAlert variant="secondary" title="Secondary Alert">
          This is a secondary alert — check it out!
        </TAlert>

        <TAlert variant="success" title="Success Alert">
          This is a success alert — check it out!
        </TAlert>

        <TAlert variant="warning" title="Warning Alert">
          This is a warning alert — check it out!
        </TAlert>

        <TAlert variant="error" title="Error Alert">
          This is an error alert — check it out!
        </TAlert>

        <TAlert variant="info" title="Info Alert">
          This is an info alert — check it out!
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available alert variants to indicate different states',
      },
    },
  },
}

// Different Sizes
export const Sizes: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert title="Small Alert" size="sm">
          This is a small-sized alert message with slightly larger icon.
        </TAlert>

        <TAlert title="Medium Alert" size="md">
          This is a medium-sized alert message (default) with slightly larger icon.
        </TAlert>

        <TAlert title="Large Alert" size="lg">
          This is a large-sized alert message with slightly larger icon.
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be displayed in different sizes with proportionally sized icons',
      },
    },
  },
}

// Elevation Variants
export const Elevation: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert title="No Elevation (Default)" elevation="none" variant="primary">
          This alert has no shadow (flat design).
        </TAlert>

        <TAlert title="Extra Small Elevation" elevation="xs" variant="primary">
          This alert has an extra small shadow (shadow-sm).
        </TAlert>

        <TAlert title="Small Elevation" elevation="sm" variant="primary">
          This alert has a small shadow.
        </TAlert>

        <TAlert title="Medium Elevation" elevation="md" variant="primary">
          This alert has a medium shadow.
        </TAlert>

        <TAlert title="Large Elevation" elevation="lg" variant="primary">
          This alert has a large shadow.
        </TAlert>

        <TAlert title="Extra Large Elevation" elevation="xl" variant="primary">
          This alert has an extra large shadow.
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can have different elevation levels, from none to extra large',
      },
    },
  },
}

// With and Without Icons
export const IconOptions: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert title="With Default Icon" variant="success">
          This alert uses the default icon for its variant.
        </TAlert>

        <TAlert title="Without Icon" variant="success" :hasIcon="false">
          This alert has no icon.
        </TAlert>

        <TAlert title="Secondary With Icon" variant="secondary" :hasIcon="true">
          Secondary alerts don't show icons by default, but you can enable them.
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be shown or hidden regardless of variant',
      },
    },
  },
}

// With Footer
export const WithFooter: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert variant="info" title="Alert with Footer">
          This alert has additional information in a footer section.
          <template #footer>
            <div class="flex items-center justify-between">
              <span>Last updated: 2 hours ago</span>
              <a href="#" class="font-medium underline">Learn more</a>
            </div>
          </template>
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can include a footer section for additional information or actions',
      },
    },
  },
}

// Combined Features
export const CombinedFeatures: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert
          variant="success"
          title="Elevated Alert with Footer"
          elevation="lg"
          dismissible
        >
          This alert combines multiple features: success variant, large elevation, dismissible button, and a footer.
          <template #footer>
            <div class="flex items-center">
              <span class="font-medium">Action completed successfully!</span>
            </div>
          </template>
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can combine multiple features for advanced use cases',
      },
    },
  },
}

// Dismissible Alerts
export const Dismissible: Story = {
  args: {
    title: 'Dismissible Alert',
    dismissible: true,
  },
  render: (args) => ({
    components: { TAlert },
    setup() {
      return { args }
    },
    template: `
      <TAlert v-bind="args">
        This alert can be dismissed by clicking the X button in the corner.
      </TAlert>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find the dismiss button
    const dismissButton = canvas.getByLabelText('Dismiss alert')

    // Click the dismiss button
    await userEvent.click(dismissButton)
  },
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be dismissible, allowing users to close them',
      },
    },
  },
}

// No Rounding
export const NoRounding: Story = {
  args: {
    title: 'Alert Without Rounded Corners',
    rounded: false,
  },
  render: (args) => ({
    components: { TAlert },
    setup() {
      return { args }
    },
    template: `
      <TAlert v-bind="args">
        This alert has square corners instead of rounded ones.
      </TAlert>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can have squared corners instead of rounded ones',
      },
    },
  },
}

// Content Only (No Title)
export const ContentOnly: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <TAlert variant="warning">
        This alert contains only content without a title.
      </TAlert>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be displayed without a title, showing only content',
      },
    },
  },
}

// Accessible Examples
export const Accessibility: Story = {
  render: () => ({
    components: { TAlert },
    template: `
      <div class="space-y-4">
        <TAlert
          variant="error"
          title="Critical Error"
          live="assertive"
          ariaLabel="Critical system error"
        >
          This error alert will be announced immediately to screen readers.
        </TAlert>

        <TAlert
          variant="info"
          live="polite"
          ariaLabel="Information notification"
        >
          This info alert without a visible title has an aria-label and will be announced when the user is idle.
        </TAlert>

        <TAlert
          variant="success"
          title="Success Message"
          live="off"
        >
          This success alert won't be announced by screen readers (aria-live="off").
        </TAlert>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing different accessibility configurations for screen readers',
      },
    },
  },
}
