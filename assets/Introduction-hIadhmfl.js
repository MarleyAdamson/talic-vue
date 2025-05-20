import{j as n,M as s}from"./index-CmEdETqa.js";import{useMDXComponents as i}from"./index-BWIaN2SD.js";import"./iframe-Oy_jBFwR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"welcome-to-talic-vue-storybook",children:"Welcome to Talic Vue Storybook"}),`
`,n.jsx(e.p,{children:"This is a collection of Vue components used in the Talic Vue application. Browse the components in the sidebar to see what's available."}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TButton"})," - A customizable button component with different variants and sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TButtonGroup"})," - A component for grouping related buttons together"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TBadge"})," - A versatile badge component for status indicators or labels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TBadgeGroup"})," - A component to manage and organize groups of badges"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TAlert"})," - An alert component for displaying messages with different severity levels"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TCard"})," - A card component for organizing content in a container"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TModal"})," - A modal dialog component for displaying content that requires user attention"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TInput"})," - A form input component with styling and validation states"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TPopover"})," - An accessible popover component for displaying contextual content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TInputCalendar"})," - A date picker component with calendar selection and multiple display formats"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Each component is documented with:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Available props and their types"}),`
`,n.jsx(e.li,{children:"Usage examples"}),`
`,n.jsx(e.li,{children:"Different variations"}),`
`]}),`
`,n.jsx(e.p,{children:"Click on a component in the sidebar to see its documentation and interact with it."}),`
`,n.jsx(e.h2,{id:"type-exports",children:"Type Exports"}),`
`,n.jsx(e.p,{children:"All component types are exported and can be imported for use in your TypeScript code:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import {
  TButton,
  ButtonVariant,
  ButtonSize,
  TPopover,
  PopoverPlacement,
  TInputCalendar,
  WeekdayStart,
  DateDisplayFormat,
} from '@talic-vue/components'

// Example usage with type safety:
const variant: ButtonVariant = 'primary'
const size: ButtonSize = 'md'
const placement: PopoverPlacement = 'bottom'
const weekStart: WeekdayStart = 'monday'
const dateFormat: DateDisplayFormat = 'yyyy-MM-dd'
`})})]})}function h(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default};
