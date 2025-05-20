import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, fn, expect } from '@storybook/test'
import TInput from '../components/TInput.vue'

const meta = {
  title: 'Components/TInput',
  component: TInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'date', 'number', 'password', 'search', 'tel', 'time'],
      description: 'Controls the type of input',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Controls the visual style of the input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the input',
    },
    modelValue: {
      control: 'text',
      description: 'Current value of the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text to display when the input is empty',
    },
    label: {
      control: 'text',
      description: 'Text label for the input',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to display the label',
    },
    helpText: {
      control: 'text',
      description: 'Help text to display below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Controls whether the input is disabled',
    },
    readonly: {
      control: 'boolean',
      description: 'Controls whether the input is readonly',
    },
    required: {
      control: 'boolean',
      description: 'Controls whether the input is required',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the input take the full width of its container',
    },
    ariaLabel: {
      control: 'text',
      description: 'Provides an accessible name when no label is available',
    },
    'update:modelValue': {
      action: 'update:modelValue',
      description: 'Event emitted when the input value changes',
    },
    prefix: {
      description: 'Content to display as a prefix icon',
      control: 'text',
    },
    suffix: {
      description: 'Content to display as a suffix icon',
      control: 'text',
    },
  },
  args: {
    type: 'text',
    variant: 'primary',
    size: 'md',
    modelValue: '',
    placeholder: 'Enter text...',
    label: 'Label',
    showLabel: true,
    disabled: false,
    readonly: false,
    required: false,
    fullWidth: true,
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
          'An accessible input component that follows WCAG 2.1 AA standards. Supports various input types and provides multiple states and variants.',
      },
    },
  },
  render: (args) => ({
    components: { TInput },
    setup() {
      const onUpdateModelValue = fn()
      return { args, onUpdateModelValue }
    },
    template: `
      <TInput
        v-bind="args"
        @update:modelValue="onUpdateModelValue"
      >
        <template v-if="args.prefix" #prefix>{{ args.prefix }}</template>
        <template v-if="args.suffix" #suffix>{{ args.suffix }}</template>
      </TInput>
    `,
  }),
} satisfies Meta<typeof TInput>

export default meta
type Story = StoryObj<typeof meta>

// Primary variant
export const Primary: Story = {
  args: {
    variant: 'primary',
    modelValue: '',
    placeholder: 'Primary input...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Primary input...')

    // Test typing functionality
    await userEvent.type(input, 'Hello, World!')
    await expect(input).toHaveValue('Hello, World!')
  },
}

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    modelValue: '',
    placeholder: 'Secondary input...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Secondary input...')

    // Test focus state
    await userEvent.tab()
    await expect(input).toHaveFocus()
  },
}

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    modelValue: 'Success value',
    helpText: 'This input has been validated successfully.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Verify help text is displayed
    expect(canvas.getByText('This input has been validated successfully.')).toBeInTheDocument()
  },
}

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    modelValue: 'Warning value',
    helpText: 'This input needs attention.',
  },
}

// Error variant
export const Error: Story = {
  args: {
    variant: 'error',
    modelValue: 'Error value',
    errorMessage: 'This field has an error.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByDisplayValue('Error value')

    // Verify error message is displayed
    expect(canvas.getByText('This field has an error.')).toBeInTheDocument()
    // Check ARIA attributes for accessibility
    expect(input).toHaveAttribute('aria-invalid', 'true')
  },
}

// Info variant
export const Info: Story = {
  args: {
    variant: 'info',
    modelValue: 'Info value',
    helpText: 'This is informational help text.',
  },
}

// Different Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small input...',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium input...',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large input...',
  },
}

// Different types
export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email...',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password...',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Quantity',
    placeholder: 'Enter quantity...',
    min: 0,
    max: 100,
    step: 1,
  },
}

export const Date: Story = {
  args: {
    type: 'date',
    label: 'Select Date',
  },
}

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Input',
    modelValue: 'Cannot edit this',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByDisplayValue('Cannot edit this')

    expect(input).toBeDisabled()
  },
}

export const Readonly: Story = {
  args: {
    readonly: true,
    label: 'Readonly Input',
    modelValue: 'Cannot edit this',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByDisplayValue('Cannot edit this')

    expect(input).toHaveAttribute('readonly')
  },
}

export const Required: Story = {
  args: {
    required: true,
    label: 'Required Input',
    placeholder: 'This field is required',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('This field is required')

    expect(input).toHaveAttribute('required')
    expect(input).toHaveAttribute('aria-required', 'true')
  },
}

// With Icons
export const WithPrefixIcon: Story = {
  args: {
    prefix: '🔍',
    placeholder: 'Search...',
    label: 'Search',
  },
}

export const WithSuffixIcon: Story = {
  args: {
    suffix: '✉️',
    placeholder: 'Enter your email...',
    label: 'Email',
    type: 'email',
  },
}

export const WithBothIcons: Story = {
  args: {
    prefix: '🔍',
    suffix: '✓',
    placeholder: 'Search and validate...',
    label: 'Verified Search',
  },
}

// No Label
export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    placeholder: 'Input without label',
    ariaLabel: 'Hidden label for accessibility',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Input without label')

    expect(input).toHaveAttribute('aria-label', 'Hidden label for accessibility')
  },
}

// With Help Text
export const WithHelpText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helpText: 'Your username must be 3-20 characters long',
  },
}
