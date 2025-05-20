import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, fn, expect } from '@storybook/test'
import TBadge from '../components/TBadge.vue'

const meta = {
  title: 'Components/TBadge',
  component: TBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'secondary', 'warning', 'error', 'info', 'ghost'],
      description: 'Controls the visual style of the badge',
    },
    outline: {
      control: 'boolean',
      description: 'Whether to use the outline style for the badge',
    },
    tonal: {
      control: 'boolean',
      description: 'Whether to use a tonal (reduced opacity) background',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the size of the badge',
    },
    rounding: {
      control: 'select',
      options: ['full', 'lg', 'md', 'sm', 'none', 'default'],
      description: 'Controls the border radius of the badge',
    },
    ariaLabel: {
      control: 'text',
      description: 'Provides an accessible label for the badge',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the badge can be dismissed with an X button',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Event emitted when the dismiss button is clicked',
    },
    prefix: {
      description: 'Content to display before the main badge text',
      control: 'text',
    },
    suffix: {
      description: 'Content to display after the main badge text',
      control: 'text',
    },
  },
  args: {
    default: 'Badge Text',
    dismissible: false,
    size: 'md',
    outline: false,
    tonal: false,
    rounding: 'default',
  },
  parameters: {
    // Accessibility parameters
    a11y: {
      // Override any rules that might need adjustment
      config: {
        rules: [
          {
            // This ensures color contrast checking is enabled
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    // Enable interactions
    interactions: {
      disable: false,
    },
    // Control the documentation display
    docs: {
      description: {
        component:
          'A badge component used to display small pieces of information like status, counts, or tags. Supports various visual styles and can be dismissible.',
      },
    },
  },
  render: (args) => ({
    components: { TBadge },
    setup() {
      const onDismiss = fn()
      return { args, onDismiss }
    },
    template: '<TBadge v-bind="args" @dismiss="onDismiss">{{ args.default }}</TBadge>',
  }),
} satisfies Meta<typeof TBadge>

export default meta
type Story = StoryObj<typeof meta>

// Primary variant
export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary Badge',
  },
}

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Badge',
  },
}

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    default: 'Success Badge',
  },
}

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    default: 'Warning Badge',
  },
}

// Error variant
export const Error: Story = {
  args: {
    variant: 'error',
    default: 'Error Badge',
  },
}

// Info variant
export const Info: Story = {
  args: {
    variant: 'info',
    default: 'Info Badge',
  },
}

// Ghost variant
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost Badge',
  },
}

// Outline variants
export const OutlinePrimary: Story = {
  args: {
    variant: 'primary',
    outline: true,
    default: 'Outline Primary',
  },
}

export const OutlineSuccess: Story = {
  args: {
    variant: 'success',
    outline: true,
    default: 'Outline Success',
  },
}

// Tonal variants
export const TonalPrimary: Story = {
  args: {
    variant: 'primary',
    tonal: true,
    default: 'Tonal Primary',
  },
}

export const TonalSuccess: Story = {
  args: {
    variant: 'success',
    tonal: true,
    default: 'Tonal Success',
  },
}

// Size variants
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    default: 'XS Badge',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small Badge',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    default: 'Medium Badge',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large Badge',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    default: 'XL Badge',
  },
}

// Rounding variants
export const RoundingFull: Story = {
  args: {
    rounding: 'full',
    default: 'Pill Badge',
  },
}

export const RoundingLarge: Story = {
  args: {
    rounding: 'lg',
    default: 'Large Rounding',
  },
}

export const RoundingMedium: Story = {
  args: {
    rounding: 'md',
    default: 'Medium Rounding',
  },
}

export const RoundingSmall: Story = {
  args: {
    rounding: 'sm',
    default: 'Small Rounding',
  },
}

export const RoundingNone: Story = {
  args: {
    rounding: 'none',
    default: 'No Rounding',
  },
}

export const RoundingDefault: Story = {
  args: {
    rounding: 'default',
    default: 'Default Rounding',
  },
}

// Dismissible badge
export const Dismissible: Story = {
  args: {
    dismissible: true,
    default: 'Dismissible Badge',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dismissButton = canvas.getByRole('button', { name: 'Dismiss' })

    // Verify button is present
    await expect(dismissButton).toBeInTheDocument()

    // Click the dismiss button
    await userEvent.click(dismissButton)
  },
}

// Badges with icons/content in prefix/suffix slots
export const WithPrefix: Story = {
  args: {
    default: 'Badge with Prefix',
  },
  render: (args) => ({
    components: { TBadge },
    setup() {
      return { args }
    },
    template: `
      <TBadge v-bind="args">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TBadge>
    `,
  }),
}

export const WithSuffix: Story = {
  args: {
    default: 'Badge with Suffix',
  },
  render: (args) => ({
    components: { TBadge },
    setup() {
      return { args }
    },
    template: `
      <TBadge v-bind="args">
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </template>
      </TBadge>
    `,
  }),
}

// Usage examples
export const Examples: Story = {
  render: () => ({
    components: { TBadge },
    template: `
      <div class="space-y-8">
        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Basic Badges</h3>
          <TBadge variant="primary">New</TBadge>
          <TBadge variant="success">Completed</TBadge>
          <TBadge variant="warning">Pending</TBadge>
          <TBadge variant="error">Failed</TBadge>
          <TBadge variant="info">Info</TBadge>
          <TBadge variant="secondary">Default</TBadge>
          <TBadge variant="ghost">Ghost</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Outline Badges</h3>
          <TBadge variant="primary" outline>Primary</TBadge>
          <TBadge variant="success" outline>Success</TBadge>
          <TBadge variant="warning" outline>Warning</TBadge>
          <TBadge variant="error" outline>Error</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Tonal Badges</h3>
          <TBadge variant="primary" tonal>Primary</TBadge>
          <TBadge variant="success" tonal>Success</TBadge>
          <TBadge variant="warning" tonal>Warning</TBadge>
          <TBadge variant="error" tonal>Error</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Sizes</h3>
          <TBadge size="xs">XS</TBadge>
          <TBadge size="sm">Small</TBadge>
          <TBadge size="md">Medium</TBadge>
          <TBadge size="lg">Large</TBadge>
          <TBadge size="xl">X-Large</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Rounding Options</h3>
          <TBadge rounding="full">Pill</TBadge>
          <TBadge rounding="lg">Large</TBadge>
          <TBadge rounding="md">Medium</TBadge>
          <TBadge rounding="sm">Small</TBadge>
          <TBadge rounding="none">None</TBadge>
          <TBadge rounding="default">Default</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Dismissible Badges</h3>
          <TBadge dismissible>Dismissible</TBadge>
          <TBadge variant="success" dismissible>Dismiss Me</TBadge>
          <TBadge variant="warning" outline dismissible>Close</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">With Icons</h3>
          <TBadge>
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </template>
            Verified
          </TBadge>
          <TBadge variant="error">
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </template>
            Alert
          </TBadge>
          <TBadge variant="info">
            42
            <template #suffix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
            </template>
          </TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Combined Options</h3>
          <TBadge variant="primary" outline rounding="full">Pill Outline</TBadge>
          <TBadge variant="success" tonal rounding="none">Tonal Square</TBadge>
          <TBadge variant="warning" rounding="lg" dismissible>Large Radius</TBadge>
        </div>
      </div>
    `,
  }),
}
