import{w as ne,u as ie,e as re}from"./index-B7dDGrsI.js";import{c as ce,r as de,o as ue}from"./vue.esm-bundler-CJdtXRgK.js";import{_ as k}from"./TModal-CUsktSnf.js";import{_ as me}from"./TButton-DKkzQOAf.js";import"./TCard-iiimh3rz.js";const ve={title:"Components/TModal",component:k,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"Controls whether the modal is visible"},title:{control:"text",description:"Title text for the modal"},subtitle:{control:"text",description:"Subtitle text for the modal"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"Controls the size of the modal"},closeOnBackdrop:{control:"boolean",description:"Whether clicking the backdrop should close the modal"},showCloseButton:{control:"boolean",description:"Controls whether to show the close button in the header"},animated:{control:"boolean",description:"Whether to animate the modal when opening/closing"},persistent:{control:"boolean",description:"Whether the modal should persist in the DOM when closed"},autoFocus:{control:"boolean",description:"Whether to auto-focus the first element in the modal"},initialFocusId:{control:"text",description:"ID of the element to focus when the modal opens"},id:{control:"text",description:"ID for the modal element"},titleId:{control:"text",description:"ID for the title element"},descriptionId:{control:"text",description:"ID for the description element"},titleSlot:{control:"text",description:"Content for the title slot"},subtitleSlot:{control:"text",description:"Content for the subtitle slot"},headerSlot:{control:"text",description:"Content for the header slot"},footerSlot:{control:"text",description:"Content for the footer slot"},default:{control:"text",description:"Content for the default slot"}},args:{modelValue:!1,title:"Modal Title",subtitle:"Modal subtitle text",size:"md",closeOnBackdrop:!0,showCloseButton:!0,animated:!0,persistent:!1,autoFocus:!1,initialFocusId:""},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},interactions:{disable:!1},docs:{description:{component:"An accessible modal component that follows WCAG 2.1 AA standards. This component supports v-model for controlling visibility, animations, and responsive layouts for different screen sizes."}}},render:o=>({components:{TModal:k,TButton:me},setup(){const v=ce(()=>{var e;return(e=window==null?void 0:window.parent)==null?void 0:e.location.pathname.includes("/docs/")}),s=de(v.value?!1:o.modelValue);let t=e=>{if(s.value=e,o.modelValue!==void 0){const l=new CustomEvent("update:modelValue",{detail:e});document.dispatchEvent(l)}};const w=()=>{t(!1)},y=()=>{console.log("Backdrop click detected via custom event"),o.closeOnBackdrop&&t(!1)};return ue(()=>{document.addEventListener("modal-close",w),document.addEventListener("modal-backdrop-click",y);let e=!1;const l=a=>{if(!e&&s.value){const x=document.querySelector('[data-testid="modal-backdrop"]');console.log("Click event:",{target:a.target,backdropElement:x,isMatch:a.target===x,closeOnBackdrop:o.closeOnBackdrop})}};document.addEventListener("click",l,{capture:!0});const le=t;return t=a=>{a===!0&&(e=!0,setTimeout(()=>{e=!1},500)),le(a)},()=>{document.removeEventListener("modal-close",w),document.removeEventListener("modal-backdrop-click",y),document.removeEventListener("click",l,{capture:!0})}}),{args:o,isOpen:s,updateModel:t}},template:`
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
    `})},n={args:{title:"Basic Modal",subtitle:"This is a basic modal with a title and subtitle",default:"This is the modal content.",modelValue:!1},play:async({canvasElement:o})=>{const s=ne(o).getByText("Open Modal");await ie.click(s);const t=document.querySelector('[role="dialog"]');t&&re(t.getAttribute("aria-modal")).toBe("true")}},i={args:{title:"Small Modal",size:"sm",default:"This is a small-sized modal.",modelValue:!1}},r={args:{title:"Large Modal",size:"lg",default:"This is a large-sized modal with more content area.",modelValue:!1}},c={args:{title:"No Close Button",showCloseButton:!1,default:"This modal does not have a close button in the header.",modelValue:!1}},d={args:{title:"No Backdrop Close",closeOnBackdrop:!1,default:"Clicking the backdrop will not close this modal.",modelValue:!1}},u={args:{title:"Auto-Focused Modal",subtitle:"The close button will be auto-focused when opened",default:"This modal automatically focuses the first focusable element.",autoFocus:!0,modelValue:!1}},m={args:{title:"Custom Focus Modal",subtitle:"A specific element is focused when opened",default:`
      <div>
        <p>This modal focuses a specific element by ID.</p>
        <button id="focus-target" class="px-4 py-2 bg-blue-600 text-white rounded mt-4">
          This button should receive focus
        </button>
      </div>
    `,initialFocusId:"focus-target",modelValue:!1}},p={args:{headerSlot:`<div class="flex items-center justify-between w-full">
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
    </div>`,default:"This modal has a completely custom header with a different design.",modelValue:!1}},h={args:{title:"Modal with Footer",default:"This modal has a footer with action buttons.",footerSlot:`<div class="flex justify-end space-x-3 w-full">
      <button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">Cancel</button>
      <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="alert('Save action triggered')">Save Changes</button>
    </div>`,modelValue:!1}},g={args:{title:"Full Screen Modal",size:"full",default:`<div>
      <p>This is a full-screen modal that takes up most of the viewport.</p>
      <div class="h-96 w-full bg-gray-100 rounded-lg mt-4 flex items-center justify-center">
        Large content area
      </div>
    </div>`,modelValue:!1}},f={args:{title:"Rich Content Modal",titleSlot:'<span class="text-blue-600">Custom Title Styling</span>',subtitleSlot:'<span class="italic">This subtitle uses a custom slot</span>',default:`<div>
      <h4 class="text-lg font-semibold mb-2">Modal with rich content</h4>
      <p class="mb-4">This modal demonstrates using rich content in the body.</p>
      <div class="p-4 bg-blue-50 rounded-lg mb-4">
        <p class="text-blue-700">This is a notice box with important information.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="p-3 bg-gray-100 rounded">Column 1</div>
        <div class="p-3 bg-gray-100 rounded">Column 2</div>
      </div>
    </div>`,footerSlot:`<div class="flex justify-between w-full">
      <button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded" onclick="alert('Learn more clicked')">Learn More</button>
      <div class="space-x-3">
        <button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">Cancel</button>
        <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="alert('Proceed clicked')">Proceed</button>
      </div>
    </div>`,modelValue:!1}},b={args:{title:"Non-Animated Modal",animated:!1,default:"This modal appears and disappears without animations.",modelValue:!1}};var C,S,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Basic Modal',
    subtitle: 'This is a basic modal with a title and subtitle',
    default: 'This is the modal content.',
    modelValue: false // Start closed, user needs to click button to open
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find the button and click it
    const button = canvas.getByText('Open Modal');
    await userEvent.click(button);

    // Check that the modal is visible
    const dialog = document.querySelector('[role="dialog"]');
    if (dialog) {
      expect(dialog.getAttribute('aria-modal')).toBe('true');
    }
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var M,B,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Small Modal',
    size: 'sm',
    default: 'This is a small-sized modal.',
    modelValue: false // Start closed
  }
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var V,E,I;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Large Modal',
    size: 'lg',
    default: 'This is a large-sized modal with more content area.',
    modelValue: false // Start closed
  }
}`,...(I=(E=r.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var z,L,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    default: 'This modal does not have a close button in the header.',
    modelValue: false // Start closed
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var A,j,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'No Backdrop Close',
    closeOnBackdrop: false,
    default: 'Clicking the backdrop will not close this modal.',
    modelValue: false // Start closed
  }
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var D,W,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Auto-Focused Modal',
    subtitle: 'The close button will be auto-focused when opened',
    default: 'This modal automatically focuses the first focusable element.',
    autoFocus: true,
    modelValue: false // Start closed
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var P,$,H;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Custom Focus Modal',
    subtitle: 'A specific element is focused when opened',
    default: \`
      <div>
        <p>This modal focuses a specific element by ID.</p>
        <button id="focus-target" class="px-4 py-2 bg-blue-600 text-white rounded mt-4">
          This button should receive focus
        </button>
      </div>
    \`,
    initialFocusId: 'focus-target',
    modelValue: false // Start closed
  }
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var R,q,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    headerSlot: \`<div class="flex items-center justify-between w-full">
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
    </div>\`,
    default: 'This modal has a completely custom header with a different design.',
    modelValue: false // Start closed
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var U,Y,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Modal with Footer',
    default: 'This modal has a footer with action buttons.',
    footerSlot: \`<div class="flex justify-end space-x-3 w-full">
      <button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">Cancel</button>
      <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="alert('Save action triggered')">Save Changes</button>
    </div>\`,
    modelValue: false // Start closed
  }
}`,...(J=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Full Screen Modal',
    size: 'full',
    default: \`<div>
      <p>This is a full-screen modal that takes up most of the viewport.</p>
      <div class="h-96 w-full bg-gray-100 rounded-lg mt-4 flex items-center justify-center">
        Large content area
      </div>
    </div>\`,
    modelValue: false // Start closed
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Rich Content Modal',
    titleSlot: '<span class="text-blue-600">Custom Title Styling</span>',
    subtitleSlot: '<span class="italic">This subtitle uses a custom slot</span>',
    default: \`<div>
      <h4 class="text-lg font-semibold mb-2">Modal with rich content</h4>
      <p class="mb-4">This modal demonstrates using rich content in the body.</p>
      <div class="p-4 bg-blue-50 rounded-lg mb-4">
        <p class="text-blue-700">This is a notice box with important information.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="p-3 bg-gray-100 rounded">Column 1</div>
        <div class="p-3 bg-gray-100 rounded">Column 2</div>
      </div>
    </div>\`,
    footerSlot: \`<div class="flex justify-between w-full">
      <button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded" onclick="alert('Learn more clicked')">Learn More</button>
      <div class="space-x-3">
        <button type="button" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onclick="document.dispatchEvent(new CustomEvent('modal-close'))">Cancel</button>
        <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="alert('Proceed clicked')">Proceed</button>
      </div>
    </div>\`,
    modelValue: false // Start closed
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,se,ae;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    title: 'Non-Animated Modal',
    animated: false,
    default: 'This modal appears and disappears without animations.',
    modelValue: false // Start closed
  }
}`,...(ae=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const we=["Basic","Small","Large","NoCloseButton","NoBackdropClose","AutoFocused","CustomFocus","CustomHeader","WithFooter","FullScreen","RichContent","NonAnimated"];export{u as AutoFocused,n as Basic,m as CustomFocus,p as CustomHeader,g as FullScreen,r as Large,d as NoBackdropClose,c as NoCloseButton,b as NonAnimated,f as RichContent,i as Small,h as WithFooter,we as __namedExportsOrder,ve as default};
