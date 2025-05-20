# Talic Vue Component Library

A modern, accessible Vue 3 component library with Tailwind CSS styling - all built with nothing but vibes & coffee.

## Features

- **Vue 3 Component Library** - Built with Vue 3 Composition API and TypeScript
- **Tailwind CSS Integration** - Beautifully styled with Tailwind CSS
- **Type Safe** - Full TypeScript support with exported types
- **Responsive** - Mobile-first responsive components
- **Accessible** - ARIA compliant components with keyboard navigation
- **Customizable** - Flexible props and theming support

## Components

The library includes the following components:

| Component      | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| TButton        | A customizable button with variants, sizes, and states            |
| TButtonGroup   | Groups related buttons with proper styling and spacing            |
| TBadge         | Displays status indicators, counts, or labels                     |
| TBadgeGroup    | Manages collections of badges with visibility tracking            |
| TAlert         | Shows contextual feedback messages with different severity levels |
| TCard          | Container component for organizing related content                |
| TModal         | Dialog component for focused user interactions                    |
| TInput         | Form input component with validation states and styling           |
| TPopover       | Accessible popover for displaying contextual content              |
| TInputCalendar | Date picker component with calendar selection and formatting      |

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Run Storybook

```sh
pnpm storybook
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Type Exports

All component types are exported to provide type safety when using the components:

```typescript
// Import components and types
import {
  TButton,
  ButtonVariant,
  ButtonSize,
  TBadge,
  BadgeVariant,
  TPopover,
  PopoverPlacement,
  TInput,
  InputType,
  InputVariant,
  TInputCalendar,
  WeekdayStart,
  DateDisplayFormat,
  // etc.
} from '@talic-vue/components'

// Use with type safety
const variant: ButtonVariant = 'primary'
const placement: PopoverPlacement = 'bottom'
const inputType: InputType = 'email'
const weekStart: WeekdayStart = 'monday'
const dateFormat: DateDisplayFormat = 'yyyy-MM-dd'
```
