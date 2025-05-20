<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed, watch, onMounted } from 'vue'
import TInput from './TInput.vue'
import TPopover from './TPopover.vue'
import TButton from './TButton.vue'
import type { InputVariant, InputSize, WeekdayStart, DateDisplayFormat, CalendarDay } from './types'

// Define props for the component
const props = defineProps({
  /**
   * The date value / v-model
   */
  modelValue: {
    type: Date,
    default: null,
  },

  /**
   * Input variant, passed to TInput
   */
  variant: {
    type: String as PropType<InputVariant>,
    default: 'primary',
  },

  /**
   * Input size, passed to TInput
   */
  size: {
    type: String as PropType<InputSize>,
    default: 'md',
  },

  /**
   * Placeholder text for the input
   */
  placeholder: {
    type: String,
    default: 'Select date...',
  },

  /**
   * Label for the input
   */
  label: {
    type: String,
    default: 'Date',
  },

  /**
   * Whether the input is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },

  /**
   * Help text to display below the input
   */
  helpText: {
    type: String,
    default: '',
  },

  /**
   * Error message to display below the input
   */
  errorMessage: {
    type: String,
    default: '',
  },

  /**
   * Whether the input is required
   */
  required: {
    type: Boolean,
    default: false,
  },

  /**
   * Day of the week to start the calendar on
   */
  weekdayStart: {
    type: String as PropType<WeekdayStart>,
    default: 'monday',
    validator: (val: string) => ['monday', 'sunday', 'saturday'].includes(val),
  },

  /**
   * Display format for the date in the input
   */
  displayFormat: {
    type: String as PropType<DateDisplayFormat>,
    default: 'yyyy-MM-dd',
  },

  /**
   * Minimum selectable date
   */
  minDate: {
    type: Date,
    default: undefined,
  },

  /**
   * Maximum selectable date
   */
  maxDate: {
    type: Date,
    default: undefined,
  },

  /**
   * Array of dates to disable
   */
  disabledDates: {
    type: Array as PropType<Date[]>,
    default: () => [],
  },

  /**
   * Disable all dates before this date
   */
  disableBefore: {
    type: Date,
    default: undefined,
  },

  /**
   * Disable all dates after this date
   */
  disableAfter: {
    type: Date,
    default: undefined,
  },

  /**
   * ID to use for the input element
   */
  id: {
    type: String,
    default: '',
  },

  /**
   * Whether the input should be full width
   */
  fullWidth: {
    type: Boolean,
    default: true,
  },

  /**
   * Accessible label for the calendar
   */
  calendarAriaLabel: {
    type: String,
    default: 'Date picker calendar',
  },

  /**
   * Additional classes to apply to the input
   */
  classes: {
    type: String,
    default: '',
  },
})

// Emit events
const emit = defineEmits<{
  (e: 'update:modelValue', value: Date): void
  (e: 'change', value: Date): void
}>()

// Internal state
const showCalendar = ref(false)
const currentMonth = ref(new Date())
const currentYear = ref(new Date().getFullYear())
const todayDate = new Date()
todayDate.setHours(0, 0, 0, 0)

// Keep month and year in sync with the model value
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      currentMonth.value = new Date(newValue)
      currentYear.value = newValue.getFullYear()
    }
  },
  { immediate: true },
)

// Watch for showCalendar changes to ensure view is set to the current selection
watch(
  () => showCalendar.value,
  (isOpen) => {
    if (isOpen && props.modelValue) {
      // When opening the calendar, ensure we're showing the month of the selected date
      currentMonth.value = new Date(props.modelValue)
      currentYear.value = props.modelValue.getFullYear()
    }
  },
)

// Generate unique ID for the component if not provided
const uniqueId = ref(`calendar-${Math.random().toString(36).substring(2, 11)}`)
const inputId = computed(() => props.id || uniqueId.value)
const calendarId = computed(() => `${inputId.value}-calendar`)
const monthSelectId = computed(() => `${inputId.value}-month-select`)
const yearSelectId = computed(() => `${inputId.value}-year-select`)

// Format date for display in the input
const formatDate = (date: Date | null): string => {
  if (!date) return ''

  switch (props.displayFormat) {
    case 'MM/dd/yyyy':
      return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`
    case 'dd/MM/yyyy':
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
    case 'MMM dd, yyyy':
      return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`
    case 'yyyy-MM-dd':
    default:
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  }
}

// Parse date from input string
const parseDate = (dateString: string): Date | null => {
  if (!dateString) return null

  // Try to parse using the expected format
  try {
    let date: Date | null = null

    switch (props.displayFormat) {
      case 'MM/dd/yyyy': {
        const [month, day, year] = dateString.split('/').map(Number)
        date = new Date(year, month - 1, day)
        break
      }
      case 'dd/MM/yyyy': {
        const [day, month, year] = dateString.split('/').map(Number)
        date = new Date(year, month - 1, day)
        break
      }
      case 'MMM dd, yyyy': {
        // This is more complex to parse, let the browser handle it
        date = new Date(dateString)
        break
      }
      case 'yyyy-MM-dd':
      default: {
        const [year, month, day] = dateString.split('-').map(Number)
        date = new Date(year, month - 1, day)
        break
      }
    }

    // Validate the date is valid
    if (isNaN(date.getTime())) {
      return null
    }

    return date
  } catch {
    return null
  }
}

// Get day names based on the weekday start
const dayNames = computed(() => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  if (props.weekdayStart === 'sunday') {
    days.unshift(days.pop() as string)
  } else if (props.weekdayStart === 'saturday') {
    days.unshift(days.pop() as string)
    days.unshift(days.pop() as string)
  }

  return days.map((day) => ({
    full: day,
    short: day.substring(0, 3),
    narrow: day.substring(0, 1),
  }))
})

// Determine what day index to start from
const weekStartsOn = computed(() => {
  if (props.weekdayStart === 'sunday') return 0
  if (props.weekdayStart === 'saturday') return 6
  return 1 // Monday default
})

// Generate the days for the current month
const calendarDays = computed((): CalendarDay[] => {
  const year = currentYear.value
  const month = currentMonth.value.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Get the first day of the month
  const firstDayOfMonth = new Date(year, month, 1)
  let dayOfWeek = firstDayOfMonth.getDay() // 0 = Sunday, 1 = Monday, etc.

  // Adjust day of week based on weekStartsOn
  dayOfWeek = (dayOfWeek - weekStartsOn.value + 7) % 7

  const days: CalendarDay[] = []

  // Add days from previous month to fill the first row
  const prevMonth = new Date(year, month, 0)
  const daysInPrevMonth = prevMonth.getDate()

  for (let i = dayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, daysInPrevMonth - i)
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isSameDay(date, todayDate),
      isSelected: props.modelValue ? isSameDay(date, props.modelValue) : false,
      isDisabled: isDateDisabled(date),
    })
  }

  // Add days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i)
    days.push({
      date,
      isCurrentMonth: true,
      isToday: isSameDay(date, todayDate),
      isSelected: props.modelValue ? isSameDay(date, props.modelValue) : false,
      isDisabled: isDateDisabled(date),
    })
  }

  // Add days from next month to fill the last row
  const totalDaysNeeded = Math.ceil(days.length / 7) * 7
  const nextMonthDays = totalDaysNeeded - days.length

  for (let i = 1; i <= nextMonthDays; i++) {
    const date = new Date(year, month + 1, i)
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isSameDay(date, todayDate),
      isSelected: props.modelValue ? isSameDay(date, props.modelValue) : false,
      isDisabled: isDateDisabled(date),
    })
  }

  return days
})

// Check if two dates are the same day
const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

// Check if a date is disabled
const isDateDisabled = (date: Date): boolean => {
  // Ensure date is a clean date object (no time component)
  const cleanDate = new Date(date)
  cleanDate.setHours(0, 0, 0, 0)

  // Check min date
  if (props.minDate) {
    const minDate = new Date(props.minDate)
    minDate.setHours(0, 0, 0, 0)
    if (cleanDate < minDate) {
      return true
    }
  }

  // Check max date
  if (props.maxDate) {
    const maxDate = new Date(props.maxDate)
    maxDate.setHours(0, 0, 0, 0)
    if (cleanDate > maxDate) {
      return true
    }
  }

  // Check disableBefore (inclusive)
  if (props.disableBefore) {
    const disableBeforeDate = new Date(props.disableBefore)
    disableBeforeDate.setHours(0, 0, 0, 0)
    if (cleanDate < disableBeforeDate) {
      return true
    }
  }

  // Check disableAfter (inclusive)
  if (props.disableAfter) {
    const disableAfterDate = new Date(props.disableAfter)
    disableAfterDate.setHours(0, 0, 0, 0) // Start of day to be inclusive
    if (cleanDate > disableAfterDate) {
      return true
    }
  }

  // Check disabled dates array
  return props.disabledDates.some((disabledDate) => {
    if (!disabledDate) return false
    return isSameDay(cleanDate, disabledDate)
  })
}

// We don't need a separate computed for current month name as we use availableMonths

// Get available years for selection (10 years before and after current year)
const availableYears = computed(() => {
  const currentYearNum = new Date().getFullYear()
  return Array.from({ length: 21 }, (_, i) => currentYearNum - 10 + i)
})

// Get available months for selection
const availableMonths = computed(() => {
  return Array.from({ length: 12 }, (_, i) => ({
    value: i,
    name: new Date(currentYear.value, i).toLocaleString('default', { month: 'long' }),
  }))
})

// Navigate to the previous month
const prevMonth = () => {
  currentMonth.value = new Date(currentYear.value, currentMonth.value.getMonth() - 1)
  currentYear.value = currentMonth.value.getFullYear()
}

// Navigate to the next month
const nextMonth = () => {
  currentMonth.value = new Date(currentYear.value, currentMonth.value.getMonth() + 1)
  currentYear.value = currentMonth.value.getFullYear()
}

// Navigate to today and select it
const goToToday = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Update the view to show current month
  currentMonth.value = new Date(today.getFullYear(), today.getMonth())
  currentYear.value = today.getFullYear()

  // Select today's date
  emit('update:modelValue', today)
  emit('change', today)
}

// Handle month change
const handleMonthChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  currentMonth.value = new Date(currentYear.value, parseInt(select.value))
}

// Handle year change
const handleYearChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  currentYear.value = parseInt(select.value)
  currentMonth.value = new Date(currentYear.value, currentMonth.value.getMonth())
}

// Handle date selection
const selectDate = (day: CalendarDay) => {
  if (day.isDisabled) return

  // Create a new date object to ensure it's a fresh reference
  const selectedDate = new Date(day.date)

  // Update model
  emit('update:modelValue', selectedDate)
  emit('change', selectedDate)

  // Close the calendar
  showCalendar.value = false
}

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent, day: CalendarDay, index: number) => {
  const days = calendarDays.value
  const rows = Math.ceil(days.length / 7)
  const currentRow = Math.floor(index / 7)
  const currentCol = index % 7

  let newIndex = -1

  switch (event.key) {
    case 'ArrowLeft':
      newIndex = index - 1
      if (currentCol === 0) newIndex = index + 6 // Wrap to end of previous row
      break
    case 'ArrowRight':
      newIndex = index + 1
      if (currentCol === 6) newIndex = index - 6 // Wrap to start of next row
      break
    case 'ArrowUp':
      newIndex = index - 7
      if (currentRow === 0) newIndex = index + 7 * (rows - 1) // Wrap to same column in last row
      break
    case 'ArrowDown':
      newIndex = index + 7
      if (currentRow === rows - 1) newIndex = index - 7 * (rows - 1) // Wrap to same column in first row
      break
    case 'Home':
      newIndex = currentRow * 7 // First day of current row
      break
    case 'End':
      newIndex = currentRow * 7 + 6 // Last day of current row
      break
    case 'PageUp':
      prevMonth()
      newIndex = 7 + currentCol // Approximately same position in new month
      event.preventDefault()
      break
    case 'PageDown':
      nextMonth()
      newIndex = 7 + currentCol // Approximately same position in new month
      event.preventDefault()
      break
    case 'Enter':
    case ' ':
      selectDate(day)
      event.preventDefault()
      return
    default:
      return
  }

  if (newIndex >= 0 && newIndex < days.length) {
    event.preventDefault()

    // Skip disabled dates
    if (days[newIndex].isDisabled) {
      // Find the next non-disabled date in the same direction
      let direction = 0
      if (event.key === 'ArrowLeft' || event.key === 'Home') direction = -1
      if (event.key === 'ArrowRight' || event.key === 'End') direction = 1
      if (event.key === 'ArrowUp') direction = -7
      if (event.key === 'ArrowDown') direction = 7

      let testIndex = newIndex
      // Try to find a non-disabled date in the same direction (max 7 attempts)
      for (let i = 0; i < 7; i++) {
        testIndex += direction
        if (testIndex >= 0 && testIndex < days.length && !days[testIndex].isDisabled) {
          newIndex = testIndex
          break
        }
      }

      // If we still have a disabled date, don't move
      if (days[newIndex].isDisabled) {
        return
      }
    }

    // Update tabindex for all day buttons (set all to -1 except the new focus)
    days.forEach((_, idx) => {
      const btn = document.getElementById(`day-${idx}`)
      if (btn) {
        btn.setAttribute('tabindex', idx === newIndex ? '0' : '-1')
      }
    })

    // Focus the new day button
    const buttonId = `day-${newIndex}`
    document.getElementById(buttonId)?.focus()
  }
}

// Handle input change
const handleInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const date = parseDate(input.value)

  if (date) {
    emit('update:modelValue', date)
    emit('change', date)

    // Update current month and year to match the selected date
    currentMonth.value = new Date(date.getFullYear(), date.getMonth())
    currentYear.value = date.getFullYear()
  }
}

// Format the input value
const inputValue = computed(() => {
  return formatDate(props.modelValue)
})

// Calendar icon for the input suffix
const CalendarIcon = () => {
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      class: 'h-5 w-5',
    },
    [
      h('path', {
        d: 'M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z',
      }),
    ],
  )
}

// Use provide API to import h
import { h } from 'vue'

// Open the calendar when clicking on the input
const openCalendar = (event: Event) => {
  // Prevent default browser behavior
  event.preventDefault()
  event.stopPropagation()

  // Always set to true to ensure it opens
  // The calendar will be closed automatically when clicking outside
  // through the close-on-click-outside prop on TPopover
  showCalendar.value = true

  // Focus on the selected date when calendar opens or first available date
  // Need to use setTimeout to wait for the DOM to update
  setTimeout(() => {
    let focusIndex = -1

    if (props.modelValue) {
      // Try to focus on the selected date
      focusIndex = calendarDays.value.findIndex(
        (day) => day.isSelected && isSameDay(day.date, props.modelValue),
      )
    }

    // If no date is selected or we couldn't find it, focus on the first non-disabled day of current month
    if (focusIndex === -1) {
      focusIndex = calendarDays.value.findIndex((day) => day.isCurrentMonth && !day.isDisabled)
    }

    if (focusIndex !== -1) {
      const buttonId = `day-${focusIndex}`
      document.getElementById(buttonId)?.focus()

      // Set tabindex for this element to 0, make all others -1
      calendarDays.value.forEach((_, index) => {
        const button = document.getElementById(`day-${index}`)
        if (button) {
          button.setAttribute('tabindex', index === focusIndex ? '0' : '-1')
        }
      })
    }
  }, 100)
}

// Check if we're in Storybook
const isStorybook = computed(() => {
  if (typeof window === 'undefined') return false
  return (
    window?.location?.href?.includes('viewMode=story') ||
    window?.location?.href?.includes('story-') ||
    window?.parent?.location?.href?.includes('storybook')
  )
})

// When in Storybook, force the popover to open after mount
onMounted(() => {
  // In Storybook stories with a predetermined date, show the calendar briefly
  if (isStorybook.value && props.modelValue) {
    // Brief timeout to let the component fully render
    setTimeout(() => {
      showCalendar.value = true
      // Then hide it after a moment (for stories where it shouldn't stay open)
      setTimeout(() => {
        showCalendar.value = false
      }, 100)
    }, 100)
  }
})
</script>

<template>
  <div :class="['relative', { 'w-full': fullWidth }, classes]">
    <TPopover
      v-model="showCalendar"
      placement="bottom"
      :offset="4"
      :close-on-click-outside="true"
      :id="calendarId"
      :aria-label="calendarAriaLabel"
      :class="'calendar-popover'"
    >
      <template #trigger>
        <div @click="openCalendar" class="w-full cursor-pointer">
          <TInput
            :id="inputId"
            type="text"
            :variant="variant"
            :size="size"
            :model-value="inputValue"
            :placeholder="placeholder"
            :label="label"
            :disabled="disabled"
            :help-text="helpText"
            :error-message="errorMessage"
            :required="required"
            :full-width="fullWidth"
            :classes="classes"
            readonly
            tabindex="0"
            aria-haspopup="dialog"
            :aria-controls="calendarId"
            :aria-expanded="showCalendar"
            @change="handleInputChange"
            @keydown.enter.prevent="openCalendar"
            @keydown.space.prevent="openCalendar"
          >
            <template #suffix>
              <CalendarIcon />
            </template>
          </TInput>
        </div>
      </template>

      <!-- Calendar content -->
      <div class="w-72 p-2 select-none">
        <!-- Calendar header with month/year navigation -->
        <div class="mb-2 flex items-center justify-between">
          <TButton size="sm" variant="ghost" aria-label="Previous month" @click="prevMonth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </TButton>

          <div class="flex items-center space-x-1 font-medium">
            <span id="calendar-month-label" class="sr-only">
              {{ availableMonths.find((m) => m.value === currentMonth.getMonth())?.name }}
              {{ currentYear }}
            </span>
            <select
              :id="monthSelectId"
              class="cursor-pointer rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              :value="currentMonth.getMonth()"
              @change="handleMonthChange"
              aria-label="Select month"
            >
              <option v-for="month in availableMonths" :key="month.value" :value="month.value">
                {{ month.name }}
              </option>
            </select>

            <select
              :id="yearSelectId"
              class="cursor-pointer rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              :value="currentYear"
              @change="handleYearChange"
              aria-label="Select year"
            >
              <option v-for="year in availableYears" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>

          <TButton size="sm" variant="ghost" aria-label="Next month" @click="nextMonth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </TButton>
        </div>

        <!-- Day headers -->
        <div class="mb-1 grid grid-cols-7 text-center text-xs font-semibold text-gray-700">
          <div v-for="(day, index) in dayNames" :key="index" class="p-1" :aria-label="day.full">
            <span class="hidden sm:inline">{{ day.short }}</span>
            <span class="sm:hidden">{{ day.narrow }}</span>
          </div>
        </div>

        <!-- Calendar days grid -->
        <div class="grid grid-cols-7 gap-1" role="grid" aria-labelledby="calendar-month-label">
          <button
            v-for="(day, index) in calendarDays"
            :id="`day-${index}`"
            :key="index"
            :class="[
              'flex h-8 w-full items-center justify-center rounded text-sm transition focus:ring-2 focus:ring-blue-400 focus:outline-none',
              day.isDisabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer',
              day.isCurrentMonth ? 'font-medium' : 'text-gray-400',
              day.isToday && !day.isSelected ? 'border border-blue-500' : '',
              day.isSelected && !day.isDisabled ? 'bg-blue-500 text-white' : '',
              !day.isSelected && !day.isDisabled && !day.isToday ? 'hover:bg-gray-100' : '',
            ]"
            :aria-label="
              day.date.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            "
            :aria-disabled="day.isDisabled"
            :aria-selected="day.isSelected"
            :aria-current="day.isToday ? 'date' : undefined"
            :tabindex="day.isSelected ? 0 : -1"
            role="gridcell"
            @click="selectDate(day)"
            @keydown="(e) => handleKeydown(e, day, index)"
            :disabled="day.isDisabled"
          >
            {{ day.date.getDate() }}
          </button>
        </div>

        <!-- Today button - only shown when selected date is not today -->
        <div
          v-if="!props.modelValue || !isSameDay(props.modelValue, todayDate)"
          class="mt-2 flex justify-center"
        >
          <TButton size="sm" variant="secondary" @click="goToToday" aria-label="Go to today">
            Today
          </TButton>
        </div>
      </div>
    </TPopover>
  </div>
</template>

<style scoped>
/* Ensure focus indicators work well on touch devices */
@media (hover: none) {
  button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
}

/* Ensure the calendar popover is visible */
.calendar-popover {
  --popover-width: 18rem;
  --popover-min-width: 18rem;
}
</style>
