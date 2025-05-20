import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TInputCalendar from '~/components/TInputCalendar.vue'

// Base component tests
describe('TInputCalendar Component', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(TInputCalendar, {
      props: {
        label: 'Test Date',
        modelValue: undefined,
      },
      attachTo: document.body,
    })
  })

  it('exists', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('is visible', () => {
    expect(component.isVisible()).toBeTruthy()
  })

  it('renders the label', () => {
    expect(component.text()).toContain('Test Date')
  })

  it('opens calendar on click', async () => {
    const input = component.find('input')
    await input.trigger('click')

    // The popover should be teleported to body, we need to query the document
    const calendar = document.querySelector('[role="dialog"]')
    expect(calendar).not.toBeNull()
  })

  it('emits update:modelValue when date is selected', async () => {
    // Mount the component with attachTo to ensure it's in the DOM
    const wrapper = mount(TInputCalendar, {
      props: {
        label: 'Test Date',
        modelValue: undefined,
      },
      attachTo: document.body,
    })

    // Open the calendar
    const input = wrapper.find('input')
    await input.trigger('click')

    // Wait for the calendar to open
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Find all date cells and click one that's in the current month and not disabled
    const dateButtons = document.querySelectorAll('[role="gridcell"]:not([aria-disabled="true"])')
    expect(dateButtons.length).toBeGreaterThan(0)

    // Click on the middle of the available dates
    const middleIndex = Math.floor(dateButtons.length / 2)
    await dateButtons[middleIndex].dispatchEvent(new Event('click', { bubbles: true }))

    // Wait for event to propagate
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Check that the event was emitted
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.length).toBe(1)

    // Check that the value is a Date
    const emittedValue = wrapper.emitted('update:modelValue')?.[0][0]
    expect(emittedValue instanceof Date).toBeTruthy()
  })

  it('emits change event when date is selected', async () => {
    // Mount the component with attachTo to ensure it's in the DOM
    const wrapper = mount(TInputCalendar, {
      props: {
        label: 'Test Date',
        modelValue: undefined,
      },
      attachTo: document.body,
    })

    // Open the calendar
    const input = wrapper.find('input')
    await input.trigger('click')

    // Wait for the calendar to open
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Find all date cells and click one that's in the current month and not disabled
    const dateButtons = document.querySelectorAll('[role="gridcell"]:not([aria-disabled="true"])')
    expect(dateButtons.length).toBeGreaterThan(0)

    // Click on the middle of the available dates
    const middleIndex = Math.floor(dateButtons.length / 2)
    await dateButtons[middleIndex].dispatchEvent(new Event('click', { bubbles: true }))

    // Wait for event to propagate
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Check that the event was emitted
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')?.length).toBe(1)

    // Check that the value is a Date
    const emittedValue = wrapper.emitted('change')?.[0][0]
    expect(emittedValue instanceof Date).toBeTruthy()
  })

  it('closes calendar when date is selected', async () => {
    // Mount the component with attachTo to ensure it's in the DOM
    const wrapper = mount(TInputCalendar, {
      props: {
        label: 'Test Date',
        modelValue: undefined,
      },
      attachTo: document.body,
    })

    // Open the calendar
    const input = wrapper.find('input')
    await input.trigger('click')

    // Wait for the calendar to open
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Find all date cells and click one that's in the current month and not disabled
    const dateButtons = document.querySelectorAll('[role="gridcell"]:not([aria-disabled="true"])')
    expect(dateButtons.length).toBeGreaterThan(0)

    // Click on the middle of the available dates
    const middleIndex = Math.floor(dateButtons.length / 2)
    await dateButtons[middleIndex].dispatchEvent(new Event('click', { bubbles: true }))

    // Wait for event to propagate
    await new Promise((resolve) => setTimeout(resolve, 50))

    // Check that the calendar is closed
    const calendar = document.querySelector('[role="dialog"]')
    expect(calendar).toBeNull()
  })

  it('formats date according to displayFormat', async () => {
    // Create a component with MM/dd/yyyy format and a preset date
    const testDate = new Date('2023-05-15')
    const formattedComponent = mount(TInputCalendar, {
      props: {
        modelValue: testDate,
        displayFormat: 'MM/dd/yyyy',
      },
    })

    // Input should show the date in the correct format
    const input = formattedComponent.find('input')
    expect(input.element.value).toBe('05/15/2023')
  })

  it('displays calendar with correct weekday start', async () => {
    // Create a component with Sunday as the first day of the week
    const sundayStartComponent = mount(TInputCalendar, {
      props: {
        weekdayStart: 'sunday',
      },
      attachTo: document.body,
    })

    // Open the calendar
    const input = sundayStartComponent.find('input')
    await input.trigger('click')

    // Get the day headers
    const dayHeaders = document.querySelectorAll('.grid-cols-7 > div')
    expect(dayHeaders.length).toBe(7)

    // First day should be Sunday
    const firstDayHeader = dayHeaders[0].textContent?.trim().toLowerCase() || ''
    expect(firstDayHeader.includes('s') || firstDayHeader.includes('sun')).toBeTruthy()
  })

  // Variant tests
  describe('variants', () => {
    it('renders primary variant with correct classes', () => {
      const wrapper = mount(TInputCalendar, {
        props: {
          variant: 'primary',
          label: 'Primary Date',
        },
      })

      // Check that the TInput within uses the correct variant
      const input = wrapper.findComponent({ name: 'TInput' })
      expect(input.props('variant')).toBe('primary')
    })

    it('renders success variant with correct classes', () => {
      const wrapper = mount(TInputCalendar, {
        props: {
          variant: 'success',
          label: 'Success Date',
        },
      })

      const input = wrapper.findComponent({ name: 'TInput' })
      expect(input.props('variant')).toBe('success')
    })

    it('renders warning variant with correct classes', () => {
      const wrapper = mount(TInputCalendar, {
        props: {
          variant: 'warning',
          label: 'Warning Date',
        },
      })

      const input = wrapper.findComponent({ name: 'TInput' })
      expect(input.props('variant')).toBe('warning')
    })
  })

  // Size tests
  describe('sizes', () => {
    it('renders small size correctly', () => {
      const wrapper = mount(TInputCalendar, {
        props: {
          size: 'sm',
          label: 'Small Date',
        },
      })

      const input = wrapper.findComponent({ name: 'TInput' })
      expect(input.props('size')).toBe('sm')
    })

    it('renders medium size correctly', () => {
      const wrapper = mount(TInputCalendar, {
        props: {
          size: 'md',
          label: 'Medium Date',
        },
      })

      const input = wrapper.findComponent({ name: 'TInput' })
      expect(input.props('size')).toBe('md')
    })

    it('renders large size correctly', () => {
      const wrapper = mount(TInputCalendar, {
        props: {
          size: 'lg',
          label: 'Large Date',
        },
      })

      const input = wrapper.findComponent({ name: 'TInput' })
      expect(input.props('size')).toBe('lg')
    })
  })

  // Navigation tests
  describe('navigation', () => {
    it('moves to previous month when previous button is clicked', async () => {
      const wrapper = mount(TInputCalendar, {
        attachTo: document.body,
      })

      // Open the calendar
      const input = wrapper.find('input')
      await input.trigger('click')

      // Get the current month name
      const initialMonthSelect = document.querySelector(
        '[aria-label="Select month"]',
      ) as HTMLSelectElement
      const initialMonthValue = initialMonthSelect ? parseInt(initialMonthSelect.value) : 0

      // Click the previous month button
      const prevButton = document.querySelector('button[aria-label="Previous month"]')
      if (prevButton) {
        await prevButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))

        // Check that the month has changed
        const newMonthValue = parseInt(initialMonthSelect.value)
        const expectedMonthValue = initialMonthValue === 0 ? 11 : initialMonthValue - 1
        expect(newMonthValue).toBe(expectedMonthValue)
      }
    })

    it('moves to next month when next button is clicked', async () => {
      const wrapper = mount(TInputCalendar, {
        attachTo: document.body,
      })

      // Open the calendar
      const input = wrapper.find('input')
      await input.trigger('click')

      // Get the current month name
      const initialMonthSelect = document.querySelector(
        '[aria-label="Select month"]',
      ) as HTMLSelectElement
      const initialMonthValue = initialMonthSelect ? parseInt(initialMonthSelect.value) : 0

      // Click the next month button
      const nextButton = document.querySelector('button[aria-label="Next month"]')
      if (nextButton) {
        await nextButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))

        // Check that the month has changed
        const newMonthValue = parseInt(initialMonthSelect.value)
        const expectedMonthValue = initialMonthValue === 11 ? 0 : initialMonthValue + 1
        expect(newMonthValue).toBe(expectedMonthValue)
      }
    })

    it('goes to today when today button is clicked', async () => {
      const wrapper = mount(TInputCalendar, {
        attachTo: document.body,
      })

      // Open the calendar
      const input = wrapper.find('input')
      await input.trigger('click')

      // Get the current values before clicking "Today"
      const initialMonthSelect = document.querySelector(
        '[aria-label="Select month"]',
      ) as HTMLSelectElement
      const initialYearSelect = document.querySelector(
        '[aria-label="Select year"]',
      ) as HTMLSelectElement

      if (initialMonthSelect && initialYearSelect) {
        // Change the month and year to something different than today
        // First, get today's values
        const today = new Date()
        const todayMonth = today.getMonth()
        const todayYear = today.getFullYear()

        // Change the selects to a different month/year
        const differentMonth = (todayMonth + 6) % 12 // 6 months away
        const differentYear = todayYear - 1 // Previous year

        // Set the select values to different values
        initialMonthSelect.value = differentMonth.toString()
        initialMonthSelect.dispatchEvent(new Event('change', { bubbles: true }))

        initialYearSelect.value = differentYear.toString()
        initialYearSelect.dispatchEvent(new Event('change', { bubbles: true }))

        // Click the Today button
        const todayButton = document.querySelector('button[aria-label="Go to today"]')
        if (todayButton) {
          await todayButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))

          // Check that the calendar has moved to the current month/year
          expect(parseInt(initialMonthSelect.value)).toBe(todayMonth)
          expect(parseInt(initialYearSelect.value)).toBe(todayYear)
        }
      }
    })
  })

  // Disabled dates tests
  describe('date constraints', () => {
    it('disables dates before minDate', async () => {
      // Create a component with a minimum date of today
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const wrapper = mount(TInputCalendar, {
        props: {
          minDate: today,
        },
        attachTo: document.body,
      })

      // Open the calendar
      const input = wrapper.find('input')
      await input.trigger('click')

      // Find yesterday's date (should be disabled)
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)

      // Check if there's a disabled date with the same day number as yesterday
      const yesterdayDay = yesterday.getDate()

      // Get all disabled date buttons
      const disabledDates = Array.from(document.querySelectorAll('[aria-disabled="true"]'))

      // Check that we have at least one disabled date
      expect(disabledDates.length).toBeGreaterThan(0)

      // At least one date before today should be disabled
      const hasDisabledBeforeToday = disabledDates.some(
        (el) => parseInt(el.textContent?.trim() || '0') === yesterdayDay,
      )

      expect(hasDisabledBeforeToday).toBeTruthy()
    })

    it('disables dates after maxDate', async () => {
      // Create a component with a maximum date of today
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const wrapper = mount(TInputCalendar, {
        props: {
          maxDate: today,
        },
        attachTo: document.body,
      })

      // Open the calendar
      const input = wrapper.find('input')
      await input.trigger('click')

      // Find tomorrow's date (should be disabled)
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      const tomorrowDay = tomorrow.getDate()

      // Get all disabled date buttons
      const disabledDates = Array.from(document.querySelectorAll('[aria-disabled="true"]'))

      // Find at least one disabled date with the same day number as tomorrow
      const hasTomorrowDisabled = disabledDates.some(
        (el) => parseInt(el.textContent?.trim() || '0') === tomorrowDay,
      )

      expect(hasTomorrowDisabled).toBeTruthy()
    })
  })

  // Accessibility tests
  describe('accessibility', () => {
    it('has correct ARIA attributes for the input', () => {
      const input = component.find('input')
      expect(input.attributes('aria-label')).toBe('Test Date')
    })

    it('has correct ARIA attributes for the calendar', async () => {
      const input = component.find('input')
      await input.trigger('click')

      const calendar = document.querySelector('[role="dialog"]')
      expect(calendar?.getAttribute('role')).toBe('dialog')
      expect(calendar?.getAttribute('aria-label')).toBe('Date picker calendar')
    })

    it('handles keyboard navigation correctly', async () => {
      vi.spyOn(HTMLElement.prototype, 'focus')

      const input = component.find('input')
      await input.trigger('click')

      // Get a date button
      const dateButton = document.querySelector('[role="gridcell"]') as HTMLElement
      if (dateButton) {
        // Simulate right arrow key press
        await dateButton.dispatchEvent(
          new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            bubbles: true,
          }),
        )

        // Check that focus was moved to the next day
        expect(HTMLElement.prototype.focus).toHaveBeenCalled()
      }
    })
  })
})
