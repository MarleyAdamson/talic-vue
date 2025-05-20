/**
 * @file TInputCalendar story
 */
import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import TInputCalendar from '../components/TInputCalendar.vue'

// Define the meta for the stories
const meta = {
  title: 'Components/TInputCalendar',
  component: TInputCalendar,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'date',
      description: 'Selected date value',
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
    placeholder: {
      control: 'text',
      description: 'Placeholder text to display when no date is selected',
    },
    label: {
      control: 'text',
      description: 'Text label for the input',
    },
    weekdayStart: {
      control: 'select',
      options: ['monday', 'sunday', 'saturday'],
      description: 'Day of the week to start the calendar on',
    },
    displayFormat: {
      control: 'select',
      options: ['yyyy-MM-dd', 'MM/dd/yyyy', 'dd/MM/yyyy', 'MMM dd, yyyy'],
      description: 'Format to display the date in the input',
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
    required: {
      control: 'boolean',
      description: 'Controls whether the input is required',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the input take the full width of its container',
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date',
    },
    disabledDates: {
      control: 'object',
      description: 'Array of dates that cannot be selected',
    },
    calendarAriaLabel: {
      control: 'text',
      description: 'Accessible label for the calendar popover',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    modelValue: undefined,
    placeholder: 'Select date...',
    label: 'Date',
    weekdayStart: 'monday',
    displayFormat: 'yyyy-MM-dd',
    disabled: false,
    required: false,
    fullWidth: true,
  },
  parameters: {
    // Make sure interactions are enabled
    interactions: {
      disable: false,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        component:
          'An accessible date picker component that combines TInput and TPopover to allow users to select dates from a calendar interface. Follows WCAG 2.1 AA accessibility standards and supports keyboard navigation and touch interactions.',
      },
    },
  },
  // Set up the component with proper v-model binding
  render: (args) => ({
    components: { TInputCalendar },
    setup() {
      // Create a local reactive reference for the date value
      const date = ref(args.modelValue || null)

      // Handle date changes
      const onChange = (value: Date) => {
        date.value = value
        console.log('Date changed:', value)
      }

      return { args, date, onChange }
    },
    template: `
      <div style="padding: 2rem; max-width: 500px;">
        <TInputCalendar
          v-bind="args"
          v-model="date"
          @change="onChange"
        />
      </div>
    `,
  }),
} satisfies Meta<typeof TInputCalendar>

export default meta
type Story = StoryObj<typeof meta>

// Basic example
export const Default: Story = {
  args: {},
}

// With preselected date
export const WithPreselectedDate: Story = {
  args: {
    modelValue: new Date('2023-05-15'),
  },
}

// Different date format
export const USDateFormat: Story = {
  args: {
    displayFormat: 'MM/dd/yyyy',
    modelValue: new Date('2023-05-15'),
  },
}

// Different weekday start
export const WeekStartingSunday: Story = {
  args: {
    weekdayStart: 'sunday',
  },
}

// Error state
export const WithError: Story = {
  args: {
    variant: 'error',
    errorMessage: 'Please select a valid date',
  },
}

// Success state
export const Success: Story = {
  args: {
    variant: 'success',
    modelValue: new Date(),
    helpText: 'Date successfully selected',
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: new Date(),
  },
}

// With min and max dates
export const DateRange: Story = {
  args: {
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1), // First day of current month
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0), // Last day of current month
  },
}

// Different sizes
export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

// Different variants
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    helpText: 'Please review this date carefully',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    helpText: 'Select your preferred date',
  },
}
