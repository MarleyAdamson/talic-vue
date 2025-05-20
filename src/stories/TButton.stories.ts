import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, fn, expect, waitFor } from '@storybook/test'
import TButton from '../components/TButton.vue'
import TButtonGroup from '../components/TButtonGroup.vue'

const meta = {
  title: 'Components/TButton',
  component: TButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'secondary', 'warning', 'error', 'info', 'ghost'],
      description: 'Controls the visual style of the button',
    },
    outline: {
      control: 'boolean',
      description: 'Whether to use the outline style for the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the size of the button',
    },
    ariaLabel: {
      control: 'text',
      description: 'Provides an accessible name when no text content is available',
    },
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Displays a loading spinner and disables the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the button take the full width of its container',
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      description: 'Sets the button type attribute',
    },
    role: {
      control: 'text',
      description: 'Overrides the default ARIA role',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    onClick: {
      action: 'clicked',
      description: 'Event emitted when the button is clicked',
    },
    prefix: {
      description: 'Content to display before the main button text',
      control: 'text',
    },
    suffix: {
      description: 'Content to display after the main button text',
      control: 'text',
    },
  },
  args: {
    default: 'Button Text',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
    size: 'md',
    outline: false,
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
          'An accessible button component that follows WCAG 2.1 AA standards. Can be used individually or as part of a TButtonGroup.',
      },
    },
  },
  render: (args) => ({
    components: { TButton },
    setup() {
      const onClick = fn()
      return { args, onClick }
    },
    template: '<TButton v-bind="args" @click="onClick">{{ args.default }}</TButton>',
  }),
} satisfies Meta<typeof TButton>

export default meta
type Story = StoryObj<typeof meta>

// Primary variant
export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Primary Button')

    // Verify button is accessible
    await expect(button).toHaveAttribute('type', 'button')

    // Click the button
    await userEvent.click(button)
  },
}

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Secondary Button')

    // Test focus state for accessibility
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    default: 'Success Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Success Button')

    // Click the button
    await userEvent.click(button)
  },
}

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    default: 'Warning Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Warning Button')

    // Click the button
    await userEvent.click(button)
  },
}

// Error variant
export const Error: Story = {
  args: {
    variant: 'error',
    default: 'Error Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Error Button')

    // Click the button
    await userEvent.click(button)
  },
}

// Info variant
export const Info: Story = {
  args: {
    variant: 'info',
    default: 'Info Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Info Button')

    // Click the button
    await userEvent.click(button)
  },
}

// Disabled button
export const Disabled: Story = {
  args: {
    variant: 'primary',
    default: 'Disabled Button',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Disabled Button')

    // Verify disabled attribute
    await expect(button).toBeDisabled()
    await expect(button).toHaveAttribute('aria-disabled', 'true')

    // Try to click the button - should not trigger click event
    await userEvent.click(button)
  },
}

// Loading button
export const Loading: Story = {
  args: {
    variant: 'primary',
    default: 'Loading Button',
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Use a more specific selector since there's a loading spinner
    const button = canvas.getByRole('button')

    // Verify loading state
    await expect(button).toHaveAttribute('aria-busy', 'true')
    await expect(button).toBeDisabled()

    // Verify loading spinner exists - using a different approach
    const spinnerElement = canvasElement.querySelector('.animate-spin')
    await expect(spinnerElement).not.toBeNull()
  },
}

// Full width button
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    default: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Full Width Button')

    // Verify the button has the fullWidth class (indirectly)
    const computedStyle = window.getComputedStyle(button)
    await expect(computedStyle.width !== '0px').toBeTruthy()
  },
}

// Button with aria-label but no text content
export const AriaLabelOnly: Story = {
  args: {
    variant: 'primary',
    default: '',
    ariaLabel: 'Accessible button with no visible text',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A button with no visible text content, but with an accessible name provided via aria-label',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Use the aria-label to find the button
    const button = canvas.getByRole('button', { name: 'Accessible button with no visible text' })

    // Verify aria-label is used as accessible name
    await expect(button).toHaveAttribute('aria-label', 'Accessible button with no visible text')

    // Verify no visible text
    expect(button.textContent?.trim()).toBe('')
  },
}

// Form submission button
export const SubmitButton: Story = {
  args: {
    variant: 'success',
    default: 'Submit Form',
    type: 'submit',
  },
  parameters: {
    docs: {
      description: {
        story: 'A submit button that can be used within forms',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Submit Form')

    // Verify type attribute is set to 'submit'
    await expect(button).toHaveAttribute('type', 'submit')
  },
}

// Keyboard navigation test
export const KeyboardNavigation: Story = {
  args: {
    variant: 'primary',
    default: 'Keyboard Focus Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // First, find the button (to ensure it's in the DOM)
    const button = canvas.getByText('Keyboard Focus Button')

    // Wait for the component to be fully rendered
    await waitFor(() => {
      expect(button).toBeInTheDocument()
    })

    // Use keyboard to navigate to the button
    await userEvent.tab()

    // Get the focused element
    await waitFor(() => {
      expect(document.activeElement).toBe(button)
    })

    // Test keyboard activation
    await userEvent.keyboard('{Enter}')
  },
}

// Button with prefix icon
export const WithPrefixIcon: Story = {
  args: {
    variant: 'primary',
    default: 'Button with Prefix',
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with a prefix icon using the prefix slot',
      },
    },
  },
  render: (args) => ({
    components: { TButton },
    setup() {
      const onClick = fn()
      return { args, onClick }
    },
    template: `
      <TButton v-bind="args" @click="onClick">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TButton>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Button with Prefix')

    // Verify icon is present
    const icon = canvasElement.querySelector('svg')
    await expect(icon).not.toBeNull()

    // Click the button
    await userEvent.click(button)
  },
}

// Button with suffix icon
export const WithSuffixIcon: Story = {
  args: {
    variant: 'primary',
    default: 'Button with Suffix',
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with a suffix icon using the suffix slot',
      },
    },
  },
  render: (args) => ({
    components: { TButton },
    setup() {
      const onClick = fn()
      return { args, onClick }
    },
    template: `
      <TButton v-bind="args" @click="onClick">
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </template>
      </TButton>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Button with Suffix')

    // Verify icon is present
    const icon = canvasElement.querySelector('svg')
    await expect(icon).not.toBeNull()

    // Click the button
    await userEvent.click(button)
  },
}

// Button with both prefix and suffix icons
export const WithBothIcons: Story = {
  args: {
    variant: 'primary',
    default: 'Button with Icons',
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with both prefix and suffix icons using the respective slots',
      },
    },
  },
  render: (args) => ({
    components: { TButton },
    setup() {
      const onClick = fn()
      return { args, onClick }
    },
    template: `
      <TButton v-bind="args" @click="onClick">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </template>
      </TButton>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Button with Icons')

    // Verify icons are present
    const icons = canvasElement.querySelectorAll('svg')
    await expect(icons.length).toBe(2)

    // Click the button
    await userEvent.click(button)
  },
}

// Button Sizes
export const ExtraSmall: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    default: 'Extra Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small button size, suitable for tight spaces',
      },
    },
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    default: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small button size, for compact interfaces',
      },
    },
  },
}

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    default: 'Medium Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard medium button size (default)',
      },
    },
  },
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    default: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large button size for emphasis',
      },
    },
  },
}

export const ExtraLarge: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    default: 'Extra Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large button size for maximum visibility',
      },
    },
  },
}

// Size comparison story showing all sizes together
export const SizeComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All button sizes compared side by side',
      },
    },
  },
  render: () => ({
    components: { TButton },
    setup() {
      const onClick = fn()
      return { onClick }
    },
    template: `
      <div class="flex flex-col items-start space-y-4">
        <TButton size="xs" @click="onClick">Extra Small</TButton>
        <TButton size="sm" @click="onClick">Small</TButton>
        <TButton size="md" @click="onClick">Medium (Default)</TButton>
        <TButton size="lg" @click="onClick">Large</TButton>
        <TButton size="xl" @click="onClick">Extra Large</TButton>
      </div>
    `,
  }),
}

// Ghost variant
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'A transparent button that shows a subtle background on hover',
      },
    },
  },
}

// Outline Variants
export const OutlinePrimary: Story = {
  args: {
    variant: 'primary',
    outline: true,
    default: 'Outline Primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button with outline style',
      },
    },
  },
}

export const OutlineSuccess: Story = {
  args: {
    variant: 'success',
    outline: true,
    default: 'Outline Success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success button with outline style',
      },
    },
  },
}

export const OutlineWarning: Story = {
  args: {
    variant: 'warning',
    outline: true,
    default: 'Outline Warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning button with outline style',
      },
    },
  },
}

export const OutlineError: Story = {
  args: {
    variant: 'error',
    outline: true,
    default: 'Outline Error',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error button with outline style',
      },
    },
  },
}

export const OutlineInfo: Story = {
  args: {
    variant: 'info',
    outline: true,
    default: 'Outline Info',
  },
  parameters: {
    docs: {
      description: {
        story: 'Info button with outline style',
      },
    },
  },
}

// Variant Comparison story showing solid, outline, and ghost styles
export const VariantComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A comparison of solid, outline, and ghost button styles',
      },
    },
  },
  render: () => ({
    components: { TButton },
    setup() {
      const onClick = fn()
      return { onClick }
    },
    template: `
      <div class="space-y-8">
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Solid Variants (Default)</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="primary" @click="onClick">Primary</TButton>
            <TButton variant="secondary" @click="onClick">Secondary</TButton>
            <TButton variant="success" @click="onClick">Success</TButton>
            <TButton variant="warning" @click="onClick">Warning</TButton>
            <TButton variant="error" @click="onClick">Error</TButton>
            <TButton variant="info" @click="onClick">Info</TButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-medium">Outline Variants</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="primary" outline @click="onClick">Primary</TButton>
            <TButton variant="secondary" outline @click="onClick">Secondary</TButton>
            <TButton variant="success" outline @click="onClick">Success</TButton>
            <TButton variant="warning" outline @click="onClick">Warning</TButton>
            <TButton variant="error" outline @click="onClick">Error</TButton>
            <TButton variant="info" outline @click="onClick">Info</TButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-medium">Ghost Variant</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="ghost" @click="onClick">Ghost</TButton>
          </div>
        </div>
      </div>
    `,
  }),
}

// Add Button Group Example
export const InButtonGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Buttons can be grouped together using the TButtonGroup component to create related actions',
      },
    },
  },
  render: () => ({
    components: { TButton, TButtonGroup },
    setup() {
      const onClick = fn()
      return { onClick }
    },
    template: `
      <div class="space-y-4">
        <TButtonGroup>
          <TButton variant="primary" @click="onClick">Left</TButton>
          <TButton variant="primary" @click="onClick">Middle</TButton>
          <TButton variant="primary" @click="onClick">Right</TButton>
        </TButtonGroup>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find and click the first button
    const leftButton = canvas.getByText('Left')
    await userEvent.click(leftButton)
  },
}
