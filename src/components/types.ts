// Type exports from all components

// Common types
export type Orientation = 'horizontal' | 'vertical'

// TButton types
export type ButtonVariant =
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'info'
  | 'ghost'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonGroupContext {
  isButtonGroup: { value: boolean }
  isFirstButton: { value: (el: Element) => boolean }
  isLastButton: { value: (el: Element) => boolean }
  rounded: { value: boolean }
  orientation: { value: Orientation }
  hasGap: { value: boolean }
}

// TBadge types
export type BadgeVariant =
  | 'primary'
  | 'success'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'info'
  | 'ghost'
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BadgeRounding = 'full' | 'md' | 'lg' | 'sm' | 'none' | 'default'

export interface BadgeGroupContext {
  isBadgeGroup: { value: boolean }
  isFirstBadge: { value: (el: Element) => boolean }
  isLastBadge: { value: (el: Element) => boolean }
  rounded: { value: boolean }
  orientation: { value: Orientation }
  hasGap: { value: boolean }
  registerBadge: () => string
  handleBadgeDismiss: (id: string) => void
  visibleBadges: { [key: string]: boolean }
  showBadge: (id: string) => void
}

// TBadgeGroup types
export type GapSize = '0' | '1' | '2' | '3' | '4'

// TModal types
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

// TCard types
export type CardElevation = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
export type RoundedOption = boolean | 'none' | 'sm' | 'md' | 'lg' | 'xl'

// TAlert types
export type AlertVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type AlertSize = 'sm' | 'md' | 'lg'
export type AlertElevation = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// TInput types
export type InputType =
  | 'text'
  | 'email'
  | 'date'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
export type InputVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type InputSize = 'sm' | 'md' | 'lg'

// TPopover types
export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left' | 'auto'
export interface PopoverProps {
  modelValue: boolean
  placement: PopoverPlacement
  offset: number
  showArrow: boolean
  closeOnClickOutside: boolean
  animated: boolean
  class: string
  elevation: CardElevation
  id: string
  ariaLabel: string
  ariaLabelledby: string
  ariaDescribedby: string
  autoFocus: boolean
}

// TInputCalendar types
export type WeekdayStart = 'monday' | 'sunday' | 'saturday'
export type DateDisplayFormat = 'yyyy-MM-dd' | 'MM/dd/yyyy' | 'dd/MM/yyyy' | 'MMM dd, yyyy'
export interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  isDisabled: boolean
}
