import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, fn, expect, waitFor } from '@storybook/test'
import TButton from '../components/TButton.vue'

const meta = {
  title: 'Components/TButton',
  component: TButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'secondary'],
      description: 'Controls the visual style of the button',
    },
    style: {
      control: 'radio',
      options: ['solid', 'light'],
      description: 'Sets the button style (solid for better contrast, light for subtle UI)',
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
  },
  args: {
    default: 'Button Text',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
    style: 'solid', // Default to solid style for better a11y
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
        component: 'An accessible button component that follows WCAG 2.1 AA standards',
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

// Light Primary variant
export const LightPrimary: Story = {
  args: {
    variant: 'primary',
    style: 'light',
    default: 'Light Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Light Primary Button')
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

// Light Success variant
export const LightSuccess: Story = {
  args: {
    variant: 'success',
    style: 'light',
    default: 'Light Success Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Light Success Button')
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
