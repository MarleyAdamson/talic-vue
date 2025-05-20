import type { Meta, StoryObj } from '@storybook/vue3'
import { within, expect } from '@storybook/test'
import TCard from '../components/TCard.vue'

const meta = {
  title: 'Components/TCard',
  component: TCard,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
      description: 'Controls the shadow elevation of the card',
    },
    grayFooter: {
      control: 'boolean',
      description: 'Whether to show a gray footer background',
    },
    grayBody: {
      control: 'boolean',
      description: 'Whether to show a gray body background',
    },
    edgeToEdgeOnMobile: {
      control: 'boolean',
      description: 'Whether to remove padding on mobile devices',
    },
    well: {
      control: 'boolean',
      description: 'Whether the card is a well (inset) style',
    },
    rounded: {
      control: 'select',
      options: [true, false, 'none', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the border radius of the card',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    header: {
      description: 'Content to display in the header slot',
      control: 'text',
    },
    default: {
      description: 'Content to display in the main content slot',
      control: 'text',
    },
    footer: {
      description: 'Content to display in the footer slot',
      control: 'text',
    },
  },
  args: {
    elevation: 'md',
    grayFooter: false,
    grayBody: false,
    edgeToEdgeOnMobile: false,
    well: false,
    rounded: true,
    default: 'This is the main content of the card.',
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
        component: 'A versatile card component for presenting data with optional header and footer',
      },
    },
  },
  render: (args) => ({
    components: { TCard },
    setup() {
      return { args }
    },
    template: `
      <TCard v-bind="args">
        <template v-if="args.header" #header>{{ args.header }}</template>
        {{ args.default }}
        <template v-if="args.footer" #footer>{{ args.footer }}</template>
      </TCard>
    `,
  }),
} satisfies Meta<typeof TCard>

export default meta
type Story = StoryObj<typeof meta>

// Basic card
export const Basic: Story = {
  args: {
    default: 'This is a basic card with default settings.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('This is a basic card with default settings.')).toBeTruthy()
  },
}

// Card with header
export const WithHeader: Story = {
  args: {
    header: 'Card Header',
    default: 'This card has a header section.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Card Header')).toBeTruthy()
    await expect(canvas.getByText('This card has a header section.')).toBeTruthy()
  },
}

// Card with footer
export const WithFooter: Story = {
  args: {
    default: 'This card has a footer section.',
    footer: 'Card Footer',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('This card has a footer section.')).toBeTruthy()
    await expect(canvas.getByText('Card Footer')).toBeTruthy()
  },
}

// Card with header and footer
export const WithHeaderAndFooter: Story = {
  args: {
    header: 'Card Header',
    default: 'This card has both header and footer sections.',
    footer: 'Card Footer',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Card Header')).toBeTruthy()
    await expect(canvas.getByText('This card has both header and footer sections.')).toBeTruthy()
    await expect(canvas.getByText('Card Footer')).toBeTruthy()
  },
}

// Card with gray footer
export const WithGrayFooter: Story = {
  args: {
    default: 'This card has a gray footer background.',
    footer: 'Gray Footer',
    grayFooter: true,
  },
}

// Card with gray body
export const WithGrayBody: Story = {
  args: {
    header: 'Card Header',
    default: 'This card has a gray body background.',
    footer: 'Card Footer',
    grayBody: true,
  },
}

// Well style card
export const Well: Story = {
  args: {
    default: 'This card uses the "well" style with an inset appearance.',
    well: true,
  },
}

// Edge-to-edge on mobile
export const EdgeToEdgeOnMobile: Story = {
  render: () => ({
    components: { TCard },
    template: `
      <div class="p-4 bg-gray-100">
        <div class="flex flex-col items-center text-center mb-6">
          <div class="font-medium mb-2">Resize browser window to see the effect</div>
          <div class="text-sm text-gray-600">On small screens, the card content extends to the edges</div>
        </div>

        <div class="mb-8">
          <div class="font-medium mb-2">Edge-to-Edge Card:</div>
          <TCard edgeToEdgeOnMobile>
            <template #header>Edge-to-Edge on Mobile</template>
            <div class="bg-blue-100 p-4 rounded mb-4">
              <p>This content has no side padding on mobile screens.</p>
              <p>On desktop, padding is restored to normal.</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <p>Notice how this content touches the edges on mobile.</p>
            </div>
            <template #footer>Card Footer</template>
          </TCard>
        </div>

        <div>
          <div class="font-medium mb-2">Standard Card (for comparison):</div>
          <TCard>
            <template #header>Standard Card</template>
            <div class="bg-blue-100 p-4 rounded mb-4">
              <p>This content has consistent padding on all screen sizes.</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <p>Content always maintains the same distance from card edges.</p>
            </div>
            <template #footer>Card Footer</template>
          </TCard>
        </div>
      </div>
    `,
  }),
}

// Different border radius options
export const BorderRadiusOptions: Story = {
  render: () => ({
    components: { TCard },
    template: `
      <div class="space-y-4">
        <TCard rounded="none" class="mb-4">
          <template #header>No Rounded Corners</template>
          <p>This card has squared corners (rounded="none" or rounded={false})</p>
        </TCard>

        <TCard rounded="sm" class="mb-4">
          <template #header>Small Rounded Corners</template>
          <p>This card has small rounded corners (rounded="sm")</p>
        </TCard>

        <TCard rounded="md" class="mb-4">
          <template #header>Medium Rounded Corners</template>
          <p>This card has medium rounded corners (rounded="md")</p>
        </TCard>

        <TCard rounded="lg" class="mb-4">
          <template #header>Large Rounded Corners (Default)</template>
          <p>This card has large rounded corners (rounded="lg" or rounded={true})</p>
        </TCard>

        <TCard rounded="xl" class="mb-4">
          <template #header>Extra Large Rounded Corners</template>
          <p>This card has extra large rounded corners (rounded="xl")</p>
        </TCard>
      </div>
    `,
  }),
}

// Different elevations
export const ElevationLevels: Story = {
  render: () => ({
    components: { TCard },
    template: `
      <div class="space-y-4">
        <TCard elevation="xs" class="mb-4">
          <template #header>XS Elevation</template>
          Card with extra small shadow
        </TCard>

        <TCard elevation="sm" class="mb-4">
          <template #header>SM Elevation</template>
          Card with small shadow
        </TCard>

        <TCard elevation="md" class="mb-4">
          <template #header>MD Elevation (Default)</template>
          Card with medium shadow
        </TCard>

        <TCard elevation="lg" class="mb-4">
          <template #header>LG Elevation</template>
          Card with large shadow
        </TCard>

        <TCard elevation="xl" class="mb-4">
          <template #header>XL Elevation</template>
          Card with extra large shadow
        </TCard>

        <TCard elevation="none" class="mb-4">
          <template #header>No Elevation</template>
          Card with no shadow
        </TCard>
      </div>
    `,
  }),
}

// Custom width example
export const CustomWidth: Story = {
  render: () => ({
    components: { TCard },
    template: `
      <div class="space-y-8 w-full max-w-screen-xl mx-auto">
        <div>
          <div class="text-center mb-2 font-medium">Narrow Card (max-w-xs: 320px)</div>
          <TCard class="max-w-xs mx-auto">
            <template #header>Narrow Card</template>
            <div class="text-center">This card has a max-width of xs (320px)</div>
          </TCard>
        </div>

        <div>
          <div class="text-center mb-2 font-medium">Medium Card (max-w-md: 448px)</div>
          <TCard class="max-w-md mx-auto">
            <template #header>Medium Card</template>
            <div class="text-center">This card has a max-width of md (448px)</div>
          </TCard>
        </div>

        <div>
          <div class="text-center mb-2 font-medium">Wide Card (max-w-2xl: 672px)</div>
          <TCard class="max-w-2xl mx-auto">
            <template #header>Wide Card</template>
            <div class="text-center">This card has a max-width of 2xl (672px)</div>
          </TCard>
        </div>

        <div class="w-full h-8 bg-gray-200 mt-4 flex">
          <div class="h-full bg-blue-500 w-[320px]"></div>
          <div class="h-full bg-green-500 w-[128px]"></div>
          <div class="h-full bg-red-500 w-[224px]"></div>
        </div>
        <div class="flex text-xs justify-between max-w-2xl mx-auto">
          <div>0px</div>
          <div>320px (xs)</div>
          <div>448px (md)</div>
          <div>672px (2xl)</div>
        </div>
      </div>
    `,
  }),
}
