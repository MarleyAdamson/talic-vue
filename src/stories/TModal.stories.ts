import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within, expect } from '@storybook/test'
import { ref, onMounted, computed } from 'vue'
import TModal from '../components/TModal.vue'
import TButton from '../components/TButton.vue'

// Define custom args interface to handle our slot content
interface TModalStoryArgs {
  modelValue: boolean
  title: string
  subtitle: string
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdrop: boolean
  showCloseButton: boolean
  animated: boolean
  persistent: boolean
  autoFocus: boolean
  initialFocusId: string
  id?: string
  titleId?: string
  descriptionId?: string
  default?: string
  titleSlot?: string
  subtitleSlot?: string
  headerSlot?: string
  footerSlot?: string
  open?: (event: Event) => void
  close?: (event: Event) => void
}

// Define an interface for the control options
interface StoryControlOptions {
  control: string | { type: string; options?: string[] }
  description?: string
  options?: string[]
}

// Custom Meta interface that includes our slots
interface CustomMeta extends Meta<typeof TModal> {
  argTypes: Record<string, StoryControlOptions>
}

// Extended Story type that allows our custom slot properties
type TModalStory = StoryObj<typeof meta> & {
  args?: Partial<TModalStoryArgs>
}

const meta: CustomMeta = {
  title: 'Components/TModal',
  component: TModal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Controls whether the modal is visible',
    },
    title: {
      control: 'text',
      description: 'Title text for the modal',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle text for the modal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Controls the size of the modal',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Whether clicking the backdrop should close the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Controls whether to show the close button in the header',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate the modal when opening/closing',
    },
    persistent: {
      control: 'boolean',
      description: 'Whether the modal should persist in the DOM when closed',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether to auto-focus the first element in the modal',
    },
    initialFocusId: {
      control: 'text',
      description: 'ID of the element to focus when the modal opens',
    },
    id: {
      control: 'text',
      description: 'ID for the modal element',
    },
    titleId: {
      control: 'text',
      description: 'ID for the title element',
    },
    descriptionId: {
      control: 'text',
      description: 'ID for the description element',
    },
    // Custom slot content controls
    titleSlot: {
      control: 'text',
      description: 'Content for the title slot',
    },
    subtitleSlot: {
      control: 'text',
      description: 'Content for the subtitle slot',
    },
    headerSlot: {
      control: 'text',
      description: 'Content for the header slot',
    },
    footerSlot: {
      control: 'text',
      description: 'Content for the footer slot',
    },
    default: {
      control: 'text',
      description: 'Content for the default slot',
    },
  },
  args: {
    modelValue: false, // Set default to false so modals don't open by default
    title: 'Modal Title',
    subtitle: 'Modal subtitle text',
    size: 'md',
    closeOnBackdrop: true,
    showCloseButton: true,
    animated: true,
    persistent: false,
    autoFocus: false, // Default to false so no element is auto-focused
    initialFocusId: '',
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
          'An accessible modal component that follows WCAG 2.1 AA standards. This component supports v-model for controlling visibility, animations, and responsive layouts for different screen sizes.',
      },
    },
  },
  render: (args: TModalStoryArgs) => ({
    components: { TModal, TButton },
    setup() {
      // Always start with closed modal in docs mode
      const isInDocsPage = computed(() => {
        return window?.parent?.location.pathname.includes('/docs/')
      })

      // Use false as the initial value in docs mode
      const isOpen = ref(isInDocsPage.value ? false : args.modelValue)

      // Use a function with type annotations - use let instead of const so it can be reassigned
      let updateModel = (value: boolean) => {
        isOpen.value = value
        // Create a dummy event handler for storybook
        if (args.modelValue !== undefined) {
          // Simulate v-model update
          const updateEvent = new CustomEvent('update:modelValue', { detail: value })
          document.dispatchEvent(updateEvent)
        }
      }

      // Set up event listener for custom close events from HTML content
      // Handler function for modal-close event
      const handleModalClose = () => {
        updateModel(false)
      }

      // Handler for backdrop clicks from the modal component
      const handleBackdropClick = () => {
        console.log('Backdrop click detected via custom event')
        if (args.closeOnBackdrop) {
          updateModel(false)
        }
      }

      // We need to ensure event listeners are properly set up and cleaned up
      onMounted(() => {
        document.addEventListener('modal-close', handleModalClose)
        document.addEventListener('modal-backdrop-click', handleBackdropClick)

        // Create a flag to prevent immediate click handling after opening
        let isOpeningModal = false

        // When the modal is closed by a custom event, also check for document clicks outside
        const handleDocumentClick = (e: MouseEvent) => {
          // Skip click handling during modal opening transition
          if (isOpeningModal) return

          // Only use this for debugging now, since we have a direct event for backdrop clicks
          // For Storybook, handle backdrop clicks by finding the backdrop element directly
          if (isOpen.value) {
            // Find the backdrop div using the data-testid attribute
            const backdropElement = document.querySelector('[data-testid="modal-backdrop"]')

            // Debug info to help troubleshoot
            console.log('Click event:', {
              target: e.target,
              backdropElement,
              isMatch: e.target === backdropElement,
              closeOnBackdrop: args.closeOnBackdrop,
            })
          }
        }

        document.addEventListener('click', handleDocumentClick, { capture: true })

        // Override the updateModel function to add a delay when opening
        const originalUpdateModel = updateModel
        updateModel = (value: boolean) => {
          if (value === true) {
            // Opening the modal - prevent immediate backdrop clicks
            isOpeningModal = true
            setTimeout(() => {
              isOpeningModal = false
            }, 500) // Delay enough to prevent accidental click throughs
          }
          originalUpdateModel(value)
        }

        return () => {
          document.removeEventListener('modal-close', handleModalClose)
          document.removeEventListener('modal-backdrop-click', handleBackdropClick)
          document.removeEventListener('click', handleDocumentClick, { capture: true })
        }
      })

      return { args, isOpen, updateModel }
    },
    template: `
      <div>
        <TButton @click="updateModel(true)" v-if="!isOpen">Open Modal</TButton>
        <TModal
          v-model="isOpen"
          :title="args.title"
          :subtitle="args.subtitle"
          :size="args.size"
          :closeOnBackdrop="args.closeOnBackdrop"
          :showCloseButton="args.showCloseButton"
          :animated="args.animated"
          :persistent="args.persistent"
          :id="args.id"
          :titleId="args.titleId"
          :descriptionId="args.descriptionId"
          :autoFocus="args.autoFocus"
          :initialFocusId="args.initialFocusId"
          @close="$event => args.close && args.close($event)"
          @open="$event => args.open && args.open($event)"
        >
          <template v-if="args.titleSlot" #title>
            <div v-html="args.titleSlot"></div>
          </template>
          <template v-if="args.subtitleSlot" #subtitle>
            <div v-html="args.subtitleSlot"></div>
          </template>
          <template v-if="args.headerSlot" #header>
            <div v-html="args.headerSlot"></div>
          </template>
          <template v-if="args.default">
            <div v-html="args.default"></div>
          </template>
          <template v-else>
            <p>This is the default modal content.</p>
            <p class="mt-2">You can provide custom content through the default slot.</p>
          </template>
          <template v-if="args.footerSlot" #footer>
            <div v-html="args.footerSlot"></div>
          </template>
        </TModal>
      </div>
    `,
  }),
} as CustomMeta

export default meta
type Story = TModalStory

// Basic modal
export const Basic: Story = {
  args: {
    title: 'Basic Modal',
    subtitle: 'This is a basic modal with a title and subtitle',
    default: 'This is the modal content.',
    modelValue: false, // Start closed, user needs to click button to open
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find the button and click it
    const button = canvas.getByText('Open Modal')
    await userEvent.click(button)

    // Check that the modal is visible
    const dialog = document.querySelector('[role="dialog"]')
    if (dialog) {
      expect(dialog.getAttribute('aria-modal')).toBe('true')
    }
  },
}

// Small modal
export const Small: Story = {
  args: {
    title: 'Small Modal',
    size: 'sm',
    default: 'This is a small-sized modal.',
    modelValue: false, // Start closed
  },
}

// Large modal
export const Large: Story = {
  args: {
    title: 'Large Modal',
    size: 'lg',
    default: 'This is a large-sized modal with more content area.',
    modelValue: false, // Start closed
  },
}

// No close button
export const NoCloseButton: Story = {
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    default: 'This modal does not have a close button in the header.',
    modelValue: false, // Start closed
  },
}

// No backdrop close
export const NoBackdropClose: Story = {
  args: {
    title: 'No Backdrop Close',
    closeOnBackdrop: false,
    default: 'Clicking the backdrop will not close this modal.',
    modelValue: false, // Start closed
  },
}

// Auto-focused modal
export const AutoFocused: Story = {
  args: {
    title: 'Auto-Focused Modal',
    subtitle: 'The close button will be auto-focused when opened',
    default: 'This modal automatically focuses the first focusable element.',
    autoFocus: true,
    modelValue: false, // Start closed
  },
}

// Custom focused element
export const CustomFocus: Story = {
  args: {
    title: 'Custom Focus Modal',
    subtitle: 'A specific element is focused when opened',
    default: `
      <div>
        <p>This modal focuses a specific element by ID.</p>
        <button id="focus-target" class="px-4 py-2 bg-blue-600 text-white rounded mt-4">
          This button should receive focus
        </button>
      </div>
    `,
    initialFocusId: 'focus-target',
    modelValue: false, // Start closed
  },
}

// Custom header
export const CustomHeader: Story = {
  args: {
    headerSlot: `<div class="flex items-center justify-between w-full">
      <div class="flex items-center">
        <div class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-lg font-medium text-gray-900">Custom Header</h3>
          <p class="text-sm text-gray-500">With a custom design</p>
        </div>
      </div>
      <button type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">
        <span class="sr-only">Close</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>`,
    default: 'This modal has a completely custom header with a different design.',
    modelValue: false, // Start closed
  },
}

// With footer
export const WithFooter: Story = {
  args: {
    title: 'Modal with Footer',
    default: 'This modal has a footer with action buttons.',
    footerSlot: `<div class="flex justify-end space-x-3 w-full">
      <button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">Cancel</button>
      <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="alert('Save action triggered')">Save Changes</button>
    </div>`,
    modelValue: false, // Start closed
  },
}

// Full screen modal
export const FullScreen: Story = {
  args: {
    title: 'Full Screen Modal',
    size: 'full',
    default: `<div>
      <p>This is a full-screen modal that takes up most of the viewport.</p>
      <div class="h-96 w-full bg-gray-100 rounded-lg mt-4 flex items-center justify-center">
        Large content area
      </div>
    </div>`,
    modelValue: false, // Start closed
  },
}

// Rich content example
export const RichContent: Story = {
  args: {
    title: 'Rich Content Modal',
    titleSlot: '<span class="text-blue-600">Custom Title Styling</span>',
    subtitleSlot: '<span class="italic">This subtitle uses a custom slot</span>',
    default: `<div>
      <h4 class="text-lg font-semibold mb-2">Modal with rich content</h4>
      <p class="mb-4">This modal demonstrates using rich content in the body.</p>
      <div class="p-4 bg-blue-50 rounded-lg mb-4">
        <p class="text-blue-700">This is a notice box with important information.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="p-3 bg-gray-100 rounded">Column 1</div>
        <div class="p-3 bg-gray-100 rounded">Column 2</div>
      </div>
    </div>`,
    footerSlot: `<div class="flex justify-between w-full">
      <button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded" onclick="alert('Learn more clicked')">Learn More</button>
      <div class="space-x-3">
        <button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">Cancel</button>
        <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="alert('Proceed clicked')">Proceed</button>
      </div>
    </div>`,
    modelValue: false, // Start closed
  },
}

// Non-animated modal
export const NonAnimated: Story = {
  args: {
    title: 'Non-Animated Modal',
    animated: false,
    default: 'This modal appears and disappears without animations.',
    modelValue: false, // Start closed
  },
}
