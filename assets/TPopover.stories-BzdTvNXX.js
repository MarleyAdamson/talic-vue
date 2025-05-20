import{w as Q,u as Z,e as $}from"./index-B7dDGrsI.js";import{r as e}from"./vue.esm-bundler-CJdtXRgK.js";import{T as o}from"./TPopover-U4-3EIWv.js";import{_ as s}from"./TButton-DKkzQOAf.js";import"./TCard-iiimh3rz.js";const ie={title:"Components/TPopover",component:o,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","right","bottom","left","auto"],description:"Preferred placement of the popover"},offset:{control:{type:"number",min:0,max:32,step:2},description:"Offset (in pixels) from the trigger element"},showArrow:{control:"boolean",description:"Whether to show an arrow pointing to the trigger"},closeOnClickOutside:{control:"boolean",description:"Whether clicking outside the popover should close it"},animated:{control:"boolean",description:"Whether to animate the popover entrance/exit"},modelValue:{control:"boolean",description:"Controls whether the popover is visible"},elevation:{control:"select",options:["xs","sm","md","lg","xl","none"],description:"Card elevation to use"},class:{control:"text",description:"Additional CSS classes to apply"},id:{control:"text",description:"ID for the popover element (required for accessibility)"},ariaLabel:{control:"text",description:"Accessible label for the popover (used when no visible label is present)"},ariaLabelledby:{control:"text",description:"ID of an element that labels the popover (used instead of ariaLabel)"},ariaDescribedby:{control:"text",description:"ID of an element that describes the popover"},autoFocus:{control:"boolean",description:"Whether to focus the first focusable element in the popover when opened"},trigger:{description:"Content to display in the trigger slot",control:"text"},default:{description:"Content to display in the popover content",control:"text"}},args:{placement:"bottom",offset:8,showArrow:!1,closeOnClickOutside:!0,animated:!0,modelValue:!1,elevation:"lg",autoFocus:!0,id:"",ariaLabel:"",ariaLabelledby:"",ariaDescribedby:"",trigger:"Click me",default:"Popover content"},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},interactions:{disable:!1},docs:{description:{component:"A popover component that displays content in a card when the trigger is clicked"}}},render:t=>({components:{TPopover:o,TButton:s},setup(){const n=e(t.modelValue);return{args:t,isOpen:n}},template:`
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
    `})},a={args:{trigger:"Open Popover",default:"This is a basic popover with default settings."},play:async({canvasElement:t})=>{const i=Q(t).getByText("Open Popover");await Z.click(i),await new Promise(T=>setTimeout(T,200)),await $(document.body.textContent).toContain("This is a basic popover with default settings.")}},r={render:()=>({components:{TPopover:o,TButton:s},setup(){const t=e(!1),n=e(!1),i=e(!1),T=e(!1);return{isTopOpen:t,isRightOpen:n,isBottomOpen:i,isLeftOpen:T}},template:`
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
    `})},p={render:()=>({components:{TPopover:o,TButton:s},setup(){return{isOpen:e(!1)}},template:`
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
    `})},l={args:{showArrow:!0,trigger:"With Arrow",default:"This popover has an arrow pointing to the trigger."}},c={render:()=>({components:{TPopover:o,TButton:s},setup(){const t=e(!1),n=e(!1),i=e(!1);return{isSmallOffsetOpen:t,isMediumOffsetOpen:n,isLargeOffsetOpen:i}},template:`
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
    `})},m={render:()=>({components:{TPopover:o,TButton:s},setup(){const t=e(!1),n=e(!1),i=e(!1);return{isXsOpen:t,isMdOpen:n,isXlOpen:i}},template:`
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
    `})},d={args:{animated:!1,trigger:"No Animation",default:"This popover appears instantly without animation."}},v={render:()=>({components:{TPopover:o,TButton:s},setup(){return{isHelpOpen:e(!1)}},template:`
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
    `})},u={render:()=>({components:{TPopover:o,TButton:s},setup(){const t=e(!1),n=e(!1);return{isLeftOpen:t,isRightOpen:n}},template:`
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
    `})},f={args:{placement:"auto",trigger:"Auto Placement",default:"This popover uses automatic placement based on available space."}},g={render:()=>({components:{TPopover:o,TButton:s},setup(){return{isOpen:e(!1)}},template:`
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
    `})};var h,x,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    trigger: 'Open Popover',
    default: 'This is a basic popover with default settings.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Open Popover');

    // Click to open popover
    await userEvent.click(button);

    // Wait for the popover to be visible
    await new Promise(resolve => setTimeout(resolve, 200));

    // Find the popover content
    await expect(document.body.textContent).toContain('This is a basic popover with default settings.');
  }
}`,...(O=(x=a.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var P,b,y;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      // Create reactive state for each popover
      const isTopOpen = ref(false);
      const isRightOpen = ref(false);
      const isBottomOpen = ref(false);
      const isLeftOpen = ref(false);
      return {
        isTopOpen,
        isRightOpen,
        isBottomOpen,
        isLeftOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,w,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var j,L,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showArrow: true,
    trigger: 'With Arrow',
    default: 'This popover has an arrow pointing to the trigger.'
  }
}`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var k,R,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      const isSmallOffsetOpen = ref(false);
      const isMediumOffsetOpen = ref(false);
      const isLargeOffsetOpen = ref(false);
      return {
        isSmallOffsetOpen,
        isMediumOffsetOpen,
        isLargeOffsetOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var E,M,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      const isXsOpen = ref(false);
      const isMdOpen = ref(false);
      const isXlOpen = ref(false);
      return {
        isXsOpen,
        isMdOpen,
        isXlOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(D=(M=m.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,X,W;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    animated: false,
    trigger: 'No Animation',
    default: 'This popover appears instantly without animation.'
  }
}`,...(W=(X=d.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var H,I,V;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      const isHelpOpen = ref(false);
      return {
        isHelpOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(V=(I=v.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var z,_,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      const isLeftOpen = ref(false);
      const isRightOpen = ref(false);
      return {
        isLeftOpen,
        isRightOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,N,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placement: 'auto',
    trigger: 'Auto Placement',
    default: 'This popover uses automatic placement based on available space.'
  }
}`,...(U=(N=f.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var Y,q,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TPopover,
      TButton
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: \`
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
    \`
  })
}`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const ae=["Basic","PlacementOptions","RichContent","WithArrow","OffsetVariations","ElevationOptions","WithoutAnimation","FormExample","ViewportEdgeDetection","AutoPlacementOption","AccessibilityFeatures"];export{g as AccessibilityFeatures,f as AutoPlacementOption,a as Basic,m as ElevationOptions,v as FormExample,c as OffsetVariations,r as PlacementOptions,p as RichContent,u as ViewportEdgeDetection,l as WithArrow,d as WithoutAnimation,ae as __namedExportsOrder,ie as default};
