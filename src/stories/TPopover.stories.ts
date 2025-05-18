import type { Meta, StoryObj } from '@storybook/vue3'
import { within, expect, userEvent } from '@storybook/test'
import { ref } from 'vue'
import TPopover from '../components/TPopover.vue'
import TButton from '../components/TButton.vue'

const meta = {
  title: 'Components/TPopover',
  component: TPopover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left', 'auto'],
      description: 'Preferred placement of the popover',
    },
    offset: {
      control: { type: 'number', min: 0, max: 32, step: 2 },
      description: 'Offset (in pixels) from the trigger element',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show an arrow pointing to the trigger',
    },
    closeOnClickOutside: {
      control: 'boolean',
      description: 'Whether clicking outside the popover should close it',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate the popover entrance/exit',
    },
    modelValue: {
      control: 'boolean',
      description: 'Controls whether the popover is visible',
    },
    elevation: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Card elevation to use',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    id: {
      control: 'text',
      description: 'ID for the popover element (required for accessibility)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the popover (used when no visible label is present)',
    },
    ariaLabelledby: {
      control: 'text',
      description: 'ID of an element that labels the popover (used instead of ariaLabel)',
    },
    ariaDescribedby: {
      control: 'text',
      description: 'ID of an element that describes the popover',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether to focus the first focusable element in the popover when opened',
    },
    trigger: {
      description: 'Content to display in the trigger slot',
      control: 'text',
    },
    default: {
      description: 'Content to display in the popover content',
      control: 'text',
    },
  },
  args: {
    placement: 'bottom',
    offset: 8,
    showArrow: false,
    closeOnClickOutside: true,
    animated: true,
    modelValue: false,
    elevation: 'lg',
    autoFocus: true,
    id: '',
    ariaLabel: '',
    ariaLabelledby: '',
    ariaDescribedby: '',
    trigger: 'Click me',
    default: 'Popover content',
  },
  parameters: {
    // Accessibility parameters
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
    interactions: {
      disable: false,
    },
    docs: {
      description: {
        component:
          'A popover component that displays content in a card when the trigger is clicked',
      },
    },
  },
  render: (args) => ({
    components: { TPopover, TButton },
    setup() {
      // Create a local reactive state that syncs with args.modelValue
      const isOpen = ref(args.modelValue)
      return { args, isOpen }
    },
    template: `
      <div class="flex justify-center">
        <TPopover
          v-model="isOpen"
          :placement="args.placement"
          :offset="args.offset"
          :showArrow="args.showArrow"
          :closeOnClickOutside="args.closeOnClickOutside"
          :animated="args.animated"
          :elevation="args.elevation"
          :class="args.class"
        >
          <template #trigger>
            <TButton>{{ args.trigger }}</TButton>
          </template>
          <div class="p-4">{{ args.default }}</div>
        </TPopover>
      </div>
    `,
  }),
} satisfies Meta<typeof TPopover>

export default meta
type Story = StoryObj<typeof meta>

// Basic Popover
export const Basic: Story = {
  args: {
    trigger: 'Open Popover',
    default: 'This is a basic popover with default settings.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByText('Open Popover')

    // Click to open popover
    await userEvent.click(button)

    // Wait for the popover to be visible
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Find the popover content
    await expect(document.body.textContent).toContain(
      'This is a basic popover with default settings.',
    )
  },
}

// Different placement options
export const PlacementOptions: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      // Create reactive state for each popover
      const isTopOpen = ref(false)
      const isRightOpen = ref(false)
      const isBottomOpen = ref(false)
      const isLeftOpen = ref(false)

      return { isTopOpen, isRightOpen, isBottomOpen, isLeftOpen }
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex justify-center">
          <TPopover placement="top" v-model="isTopOpen">
            <template #trigger>
              <TButton>Placement: Top</TButton>
            </template>
            <div class="p-4">
              <div class="font-medium">Top Placement</div>
              <p class="mt-2">This popover appears above the trigger.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover placement="right" v-model="isRightOpen">
            <template #trigger>
              <TButton>Placement: Right</TButton>
            </template>
            <div class="p-4">
              <div class="font-medium">Right Placement</div>
              <p class="mt-2">This popover appears to the right of the trigger.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover placement="bottom" v-model="isBottomOpen">
            <template #trigger>
              <TButton>Placement: Bottom</TButton>
            </template>
            <div class="p-4">
              <div class="font-medium">Bottom Placement</div>
              <p class="mt-2">This popover appears below the trigger.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover placement="left" v-model="isLeftOpen">
            <template #trigger>
              <TButton>Placement: Left</TButton>
            </template>
            <div class="p-4">
              <div class="font-medium">Left Placement</div>
              <p class="mt-2">This popover appears to the left of the trigger.</p>
            </div>
          </TPopover>
        </div>
      </div>
    `,
  }),
}

// Interactive example with different content
export const RichContent: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div class="flex justify-center">
        <TPopover v-model="isOpen">
          <template #trigger>
            <TButton>Show Rich Content</TButton>
          </template>
          <div class="max-w-sm">
            <h3 class="text-lg font-medium text-gray-900">Popover Title</h3>
            <p class="mt-2 text-sm text-gray-600">
              This popover contains rich content with formatting and multiple paragraphs.
            </p>
            <div class="mt-4 p-3 bg-blue-50 rounded-md text-sm">
              <p class="text-blue-800">You can include any HTML content here, including:</p>
              <ul class="mt-2 list-disc pl-5 text-blue-700">
                <li>Lists</li>
                <li>Images</li>
                <li>Forms</li>
                <li>Other components</li>
              </ul>
            </div>
            <div class="mt-4 flex justify-end">
              <TButton size="sm">Action Button</TButton>
            </div>
          </div>
        </TPopover>
      </div>
    `,
  }),
}

// With arrow (non-default)
export const WithArrow: Story = {
  args: {
    showArrow: true,
    trigger: 'With Arrow',
    default: 'This popover has an arrow pointing to the trigger.',
  },
}

// With various offsets
export const OffsetVariations: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      const isSmallOffsetOpen = ref(false)
      const isMediumOffsetOpen = ref(false)
      const isLargeOffsetOpen = ref(false)

      return { isSmallOffsetOpen, isMediumOffsetOpen, isLargeOffsetOpen }
    },
    template: `
      <div class="p-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex justify-center">
          <TPopover :offset="4" placement="bottom" v-model="isSmallOffsetOpen">
            <template #trigger>
              <TButton>Small Offset (4px)</TButton>
            </template>
            <div class="p-4">
              <p>This popover has a small offset (4px) from the trigger.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover :offset="12" placement="bottom" v-model="isMediumOffsetOpen">
            <template #trigger>
              <TButton>Medium Offset (12px)</TButton>
            </template>
            <div class="p-4">
              <p>This popover has a medium offset (12px) from the trigger.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover :offset="24" placement="bottom" v-model="isLargeOffsetOpen">
            <template #trigger>
              <TButton>Large Offset (24px)</TButton>
            </template>
            <div class="p-4">
              <p>This popover has a large offset (24px) from the trigger.</p>
            </div>
          </TPopover>
        </div>
      </div>
    `,
  }),
}

// Elevation options
export const ElevationOptions: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      const isXsOpen = ref(false)
      const isMdOpen = ref(false)
      const isXlOpen = ref(false)

      return { isXsOpen, isMdOpen, isXlOpen }
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex justify-center">
          <TPopover elevation="xs" v-model="isXsOpen">
            <template #trigger>
              <TButton>XS Elevation</TButton>
            </template>
            <div class="p-4">
              <p>This popover uses xs elevation.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover elevation="md" v-model="isMdOpen">
            <template #trigger>
              <TButton>MD Elevation</TButton>
            </template>
            <div class="p-4">
              <p>This popover uses md elevation.</p>
            </div>
          </TPopover>
        </div>

        <div class="flex justify-center">
          <TPopover elevation="xl" v-model="isXlOpen">
            <template #trigger>
              <TButton>XL Elevation</TButton>
            </template>
            <div class="p-4">
              <p>This popover uses xl elevation.</p>
            </div>
          </TPopover>
        </div>
      </div>
    `,
  }),
}

// Without animation
export const WithoutAnimation: Story = {
  args: {
    animated: false,
    trigger: 'No Animation',
    default: 'This popover appears instantly without animation.',
  },
}

// Example of usage in a form
export const FormExample: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      const isHelpOpen = ref(false)
      return { isHelpOpen }
    },
    template: `
      <div class="flex justify-center">
        <TPopover v-model="isHelpOpen">
          <template #trigger>
            <TButton>Help</TButton>
          </template>
          <div class="p-4 max-w-sm">
            <h3 class="text-lg font-medium text-gray-900">Form Help</h3>
            <p class="mt-2 text-sm text-gray-600">
              This is an example of using a popover to provide context-sensitive help in a form.
            </p>
            <ul class="mt-3 list-disc pl-5 text-sm text-gray-600">
              <li>Use this field to enter your full legal name</li>
              <li>This information will appear on official documents</li>
              <li>Make sure it matches your ID</li>
            </ul>
          </div>
        </TPopover>
      </div>
    `,
  }),
}

// Viewport edge detection example (with auto placement)
export const ViewportEdgeDetection: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      const isLeftOpen = ref(false)
      const isRightOpen = ref(false)

      return { isLeftOpen, isRightOpen }
    },
    template: `
      <div class="p-2">
        <div class="mb-8 text-center bg-blue-50 p-4 rounded-lg">
          <h3 class="font-medium text-blue-800">Auto Placement Demo</h3>
          <p class="mt-2 text-sm text-blue-700">
            Try positioning this story near the edge of the viewport and click the buttons.
            The popover will automatically adjust its placement to stay in view.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex justify-start">
            <TPopover placement="auto" v-model="isLeftOpen">
              <template #trigger>
                <TButton>Left Button</TButton>
              </template>
              <div class="p-4 w-64">
                <h3 class="font-medium">Auto Placement</h3>
                <p class="mt-2 text-sm">This popover will adjust its position to stay in the viewport.</p>
              </div>
            </TPopover>
          </div>

          <div class="flex justify-end">
            <TPopover placement="auto" v-model="isRightOpen">
              <template #trigger>
                <TButton>Right Button</TButton>
              </template>
              <div class="p-4 w-64">
                <h3 class="font-medium">Auto Placement</h3>
                <p class="mt-2 text-sm">This popover will adjust its position to stay in the viewport.</p>
              </div>
            </TPopover>
          </div>
        </div>
      </div>
    `,
  }),
}

// With auto placement (non-default)
export const AutoPlacementOption: Story = {
  args: {
    placement: 'auto',
    trigger: 'Auto Placement',
    default: 'This popover uses automatic placement based on available space.',
  },
}

// Accessibility features demo
export const AccessibilityFeatures: Story = {
  render: () => ({
    components: { TPopover, TButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <h3 id="popover-title" class="text-lg font-medium mb-4">Accessible Popover Example</h3>
        <p id="popover-description" class="mb-4">
          This popover demonstrates accessibility features including ARIA attributes, keyboard navigation, and focus management.
        </p>

        <div class="flex items-center space-x-4">
          <TPopover
            v-model="isOpen"
            ariaLabelledby="popover-title"
            ariaDescribedby="popover-description"
            autoFocus
          >
            <template #trigger>
              <TButton>Accessible Popover</TButton>
            </template>
            <div class="p-4">
              <h4 id="popover-content-title" class="text-lg font-medium mb-2">Popover Content</h4>
              <p class="mb-4">This popover implements WCAG 2.1 AA compliance features:</p>
              <ul class="list-disc pl-6 mb-4">
                <li>Proper ARIA attributes</li>
                <li>Keyboard navigation with Tab key</li>
                <li>Focus management</li>
                <li>Escape key closes the popover</li>
              </ul>
              <div class="flex justify-end space-x-2">
                <TButton size="sm" variant="secondary">Cancel</TButton>
                <TButton size="sm">Confirm</TButton>
              </div>
            </div>
          </TPopover>

          <div class="text-sm text-gray-600">
            <p>Try interacting with the popover using:</p>
            <ul class="list-disc pl-6">
              <li>Tab key to navigate</li>
              <li>Escape key to close</li>
              <li>Arrow keys for elements within</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  }),
}
