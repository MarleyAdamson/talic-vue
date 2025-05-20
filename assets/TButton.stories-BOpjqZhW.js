import{f as c,w as o,e as a,u as s,a as G}from"./index-B7dDGrsI.js";import{_ as i}from"./TButton-DKkzQOAf.js";import{_ as Bn}from"./TButtonGroup-BE32FjPa.js";import"./vue.esm-bundler-CJdtXRgK.js";const Tn={title:"Components/TButton",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","success","secondary","warning","error","info","ghost"],description:"Controls the visual style of the button"},outline:{control:"boolean",description:"Whether to use the outline style for the button"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Controls the size of the button"},ariaLabel:{control:"text",description:"Provides an accessible name when no text content is available"},disabled:{control:"boolean",description:"Controls whether the button is disabled"},loading:{control:"boolean",description:"Displays a loading spinner and disables the button"},fullWidth:{control:"boolean",description:"Makes the button take the full width of its container"},type:{control:"radio",options:["button","submit","reset"],description:"Sets the button type attribute"},role:{control:"text",description:"Overrides the default ARIA role"},class:{control:"text",description:"Additional CSS classes to apply"},onClick:{action:"clicked",description:"Event emitted when the button is clicked"},prefix:{description:"Content to display before the main button text",control:"text"},suffix:{description:"Content to display after the main button text",control:"text"}},args:{default:"Button Text",type:"button",disabled:!1,loading:!1,fullWidth:!1,size:"md",outline:!1},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},interactions:{disable:!1},docs:{description:{component:"An accessible button component that follows WCAG 2.1 AA standards. Can be used individually or as part of a TButtonGroup."}}},render:t=>({components:{TButton:i},setup(){const e=c();return{args:t,onClick:e}},template:'<TButton v-bind="args" @click="onClick">{{ args.default }}</TButton>'})},l={args:{variant:"primary",default:"Primary Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Primary Button");await a(n).toHaveAttribute("type","button"),await s.click(n)}},u={args:{variant:"secondary",default:"Secondary Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Secondary Button");await s.tab(),await a(n).toHaveFocus()}},d={args:{variant:"success",default:"Success Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Success Button");await s.click(n)}},p={args:{variant:"warning",default:"Warning Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Warning Button");await s.click(n)}},m={args:{variant:"error",default:"Error Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Error Button");await s.click(n)}},v={args:{variant:"info",default:"Info Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Info Button");await s.click(n)}},y={args:{variant:"primary",default:"Disabled Button",disabled:!0},play:async({canvasElement:t})=>{const n=o(t).getByText("Disabled Button");await a(n).toBeDisabled(),await a(n).toHaveAttribute("aria-disabled","true"),await s.click(n)}},g={args:{variant:"primary",default:"Loading Button",loading:!0},play:async({canvasElement:t})=>{const n=o(t).getByRole("button");await a(n).toHaveAttribute("aria-busy","true"),await a(n).toBeDisabled();const r=t.querySelector(".animate-spin");await a(r).not.toBeNull()}},f={args:{variant:"primary",default:"Full Width Button",fullWidth:!0},parameters:{layout:"fullscreen"},play:async({canvasElement:t})=>{const n=o(t).getByText("Full Width Button"),r=window.getComputedStyle(n);await a(r.width!=="0px").toBeTruthy()}},b={args:{variant:"primary",default:"",ariaLabel:"Accessible button with no visible text"},parameters:{docs:{description:{story:"A button with no visible text content, but with an accessible name provided via aria-label"}}},play:async({canvasElement:t})=>{var r;const n=o(t).getByRole("button",{name:"Accessible button with no visible text"});await a(n).toHaveAttribute("aria-label","Accessible button with no visible text"),a((r=n.textContent)==null?void 0:r.trim()).toBe("")}},B={args:{variant:"success",default:"Submit Form",type:"submit"},parameters:{docs:{description:{story:"A submit button that can be used within forms"}}},play:async({canvasElement:t})=>{const n=o(t).getByText("Submit Form");await a(n).toHaveAttribute("type","submit")}},h={args:{variant:"primary",default:"Keyboard Focus Button"},play:async({canvasElement:t})=>{const n=o(t).getByText("Keyboard Focus Button");await G(()=>{a(n).toBeInTheDocument()}),await s.tab(),await G(()=>{a(document.activeElement).toBe(n)}),await s.keyboard("{Enter}")}},w={args:{variant:"primary",default:"Button with Prefix"},parameters:{docs:{description:{story:"A button with a prefix icon using the prefix slot"}}},render:t=>({components:{TButton:i},setup(){const e=c();return{args:t,onClick:e}},template:`
      <TButton v-bind="args" @click="onClick">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TButton>
    `}),play:async({canvasElement:t})=>{const n=o(t).getByText("Button with Prefix"),r=t.querySelector("svg");await a(r).not.toBeNull(),await s.click(n)}},x={args:{variant:"primary",default:"Button with Suffix"},parameters:{docs:{description:{story:"A button with a suffix icon using the suffix slot"}}},render:t=>({components:{TButton:i},setup(){const e=c();return{args:t,onClick:e}},template:`
      <TButton v-bind="args" @click="onClick">
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </template>
      </TButton>
    `}),play:async({canvasElement:t})=>{const n=o(t).getByText("Button with Suffix"),r=t.querySelector("svg");await a(r).not.toBeNull(),await s.click(n)}},k={args:{variant:"primary",default:"Button with Icons"},parameters:{docs:{description:{story:"A button with both prefix and suffix icons using the respective slots"}}},render:t=>({components:{TButton:i},setup(){const e=c();return{args:t,onClick:e}},template:`
      <TButton v-bind="args" @click="onClick">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </template>
      </TButton>
    `}),play:async({canvasElement:t})=>{const n=o(t).getByText("Button with Icons"),r=t.querySelectorAll("svg");await a(r.length).toBe(2),await s.click(n)}},T={args:{variant:"primary",size:"xs",default:"Extra Small Button"},parameters:{docs:{description:{story:"Extra small button size, suitable for tight spaces"}}}},C={args:{variant:"primary",size:"sm",default:"Small Button"},parameters:{docs:{description:{story:"Small button size, for compact interfaces"}}}},S={args:{variant:"primary",size:"md",default:"Medium Button"},parameters:{docs:{description:{story:"Standard medium button size (default)"}}}},E={args:{variant:"primary",size:"lg",default:"Large Button"},parameters:{docs:{description:{story:"Large button size for emphasis"}}}},z={args:{variant:"primary",size:"xl",default:"Extra Large Button"},parameters:{docs:{description:{story:"Extra large button size for maximum visibility"}}}},A={parameters:{docs:{description:{story:"All button sizes compared side by side"}}},render:()=>({components:{TButton:i},setup(){return{onClick:c()}},template:`
      <div class="flex flex-col items-start space-y-4">
        <TButton size="xs" @click="onClick">Extra Small</TButton>
        <TButton size="sm" @click="onClick">Small</TButton>
        <TButton size="md" @click="onClick">Medium (Default)</TButton>
        <TButton size="lg" @click="onClick">Large</TButton>
        <TButton size="xl" @click="onClick">Extra Large</TButton>
      </div>
    `})},W={args:{variant:"ghost",default:"Ghost Button"},parameters:{docs:{description:{story:"A transparent button that shows a subtle background on hover"}}}},I={args:{variant:"primary",outline:!0,default:"Outline Primary"},parameters:{docs:{description:{story:"Primary button with outline style"}}}},L={args:{variant:"success",outline:!0,default:"Outline Success"},parameters:{docs:{description:{story:"Success button with outline style"}}}},V={args:{variant:"warning",outline:!0,default:"Outline Warning"},parameters:{docs:{description:{story:"Warning button with outline style"}}}},O={args:{variant:"error",outline:!0,default:"Outline Error"},parameters:{docs:{description:{story:"Error button with outline style"}}}},H={args:{variant:"info",outline:!0,default:"Outline Info"},parameters:{docs:{description:{story:"Info button with outline style"}}}},P={parameters:{docs:{description:{story:"A comparison of solid, outline, and ghost button styles"}}},render:()=>({components:{TButton:i},setup(){return{onClick:c()}},template:`
      <div class="space-y-8">
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Solid Variants (Default)</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="primary" @click="onClick">Primary</TButton>
            <TButton variant="secondary" @click="onClick">Secondary</TButton>
            <TButton variant="success" @click="onClick">Success</TButton>
            <TButton variant="warning" @click="onClick">Warning</TButton>
            <TButton variant="error" @click="onClick">Error</TButton>
            <TButton variant="info" @click="onClick">Info</TButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-medium">Outline Variants</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="primary" outline @click="onClick">Primary</TButton>
            <TButton variant="secondary" outline @click="onClick">Secondary</TButton>
            <TButton variant="success" outline @click="onClick">Success</TButton>
            <TButton variant="warning" outline @click="onClick">Warning</TButton>
            <TButton variant="error" outline @click="onClick">Error</TButton>
            <TButton variant="info" outline @click="onClick">Info</TButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-medium">Ghost Variant</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="ghost" @click="onClick">Ghost</TButton>
          </div>
        </div>
      </div>
    `})},F={parameters:{docs:{description:{story:"Buttons can be grouped together using the TButtonGroup component to create related actions"}}},render:()=>({components:{TButton:i,TButtonGroup:Bn},setup(){return{onClick:c()}},template:`
      <div class="space-y-4">
        <TButtonGroup>
          <TButton variant="primary" @click="onClick">Left</TButton>
          <TButton variant="primary" @click="onClick">Middle</TButton>
          <TButton variant="primary" @click="onClick">Right</TButton>
        </TButtonGroup>
      </div>
    `}),play:async({canvasElement:t})=>{const n=o(t).getByText("Left");await s.click(n)}};var D,M,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Primary Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Primary Button');

    // Verify button is accessible
    await expect(button).toHaveAttribute('type', 'button');

    // Click the button
    await userEvent.click(button);
  }
}`,...(q=(M=l.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var N,_,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    default: 'Secondary Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Secondary Button');

    // Test focus state for accessibility
    await userEvent.tab();
    await expect(button).toHaveFocus();
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var K,U,$;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    default: 'Success Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Success Button');

    // Click the button
    await userEvent.click(button);
  }
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var j,J,Q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    default: 'Warning Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Warning Button');

    // Click the button
    await userEvent.click(button);
  }
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    default: 'Error Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Error Button');

    // Click the button
    await userEvent.click(button);
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,nt,et;v.parameters={...v.parameters,docs:{...(tt=v.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    default: 'Info Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Info Button');

    // Click the button
    await userEvent.click(button);
  }
}`,...(et=(nt=v.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};var at,ot,st;y.parameters={...y.parameters,docs:{...(at=y.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Disabled Button',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Disabled Button');

    // Verify disabled attribute
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-disabled', 'true');

    // Try to click the button - should not trigger click event
    await userEvent.click(button);
  }
}`,...(st=(ot=y.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var rt,it,ct;g.parameters={...g.parameters,docs:{...(rt=g.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Loading Button',
    loading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Use a more specific selector since there's a loading spinner
    const button = canvas.getByRole('button');

    // Verify loading state
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toBeDisabled();

    // Verify loading spinner exists - using a different approach
    const spinnerElement = canvasElement.querySelector('.animate-spin');
    await expect(spinnerElement).not.toBeNull();
  }
}`,...(ct=(it=g.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var lt,ut,dt;f.parameters={...f.parameters,docs:{...(lt=f.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Full Width Button',
    fullWidth: true
  },
  parameters: {
    layout: 'fullscreen'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Full Width Button');

    // Verify the button has the fullWidth class (indirectly)
    const computedStyle = window.getComputedStyle(button);
    await expect(computedStyle.width !== '0px').toBeTruthy();
  }
}`,...(dt=(ut=f.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var pt,mt,vt;b.parameters={...b.parameters,docs:{...(pt=b.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: '',
    ariaLabel: 'Accessible button with no visible text'
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with no visible text content, but with an accessible name provided via aria-label'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Use the aria-label to find the button
    const button = canvas.getByRole('button', {
      name: 'Accessible button with no visible text'
    });

    // Verify aria-label is used as accessible name
    await expect(button).toHaveAttribute('aria-label', 'Accessible button with no visible text');

    // Verify no visible text
    expect(button.textContent?.trim()).toBe('');
  }
}`,...(vt=(mt=b.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var yt,gt,ft;B.parameters={...B.parameters,docs:{...(yt=B.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    default: 'Submit Form',
    type: 'submit'
  },
  parameters: {
    docs: {
      description: {
        story: 'A submit button that can be used within forms'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Submit Form');

    // Verify type attribute is set to 'submit'
    await expect(button).toHaveAttribute('type', 'submit');
  }
}`,...(ft=(gt=B.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var bt,Bt,ht;h.parameters={...h.parameters,docs:{...(bt=h.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Keyboard Focus Button'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // First, find the button (to ensure it's in the DOM)
    const button = canvas.getByText('Keyboard Focus Button');

    // Wait for the component to be fully rendered
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });

    // Use keyboard to navigate to the button
    await userEvent.tab();

    // Get the focused element
    await waitFor(() => {
      expect(document.activeElement).toBe(button);
    });

    // Test keyboard activation
    await userEvent.keyboard('{Enter}');
  }
}`,...(ht=(Bt=h.parameters)==null?void 0:Bt.docs)==null?void 0:ht.source}}};var wt,xt,kt;w.parameters={...w.parameters,docs:{...(wt=w.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Button with Prefix'
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with a prefix icon using the prefix slot'
      }
    }
  },
  render: args => ({
    components: {
      TButton
    },
    setup() {
      const onClick = fn();
      return {
        args,
        onClick
      };
    },
    template: \`
      <TButton v-bind="args" @click="onClick">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TButton>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Button with Prefix');

    // Verify icon is present
    const icon = canvasElement.querySelector('svg');
    await expect(icon).not.toBeNull();

    // Click the button
    await userEvent.click(button);
  }
}`,...(kt=(xt=w.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var Tt,Ct,St;x.parameters={...x.parameters,docs:{...(Tt=x.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Button with Suffix'
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with a suffix icon using the suffix slot'
      }
    }
  },
  render: args => ({
    components: {
      TButton
    },
    setup() {
      const onClick = fn();
      return {
        args,
        onClick
      };
    },
    template: \`
      <TButton v-bind="args" @click="onClick">
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </template>
      </TButton>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Button with Suffix');

    // Verify icon is present
    const icon = canvasElement.querySelector('svg');
    await expect(icon).not.toBeNull();

    // Click the button
    await userEvent.click(button);
  }
}`,...(St=(Ct=x.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Et,zt,At;k.parameters={...k.parameters,docs:{...(Et=k.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Button with Icons'
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with both prefix and suffix icons using the respective slots'
      }
    }
  },
  render: args => ({
    components: {
      TButton
    },
    setup() {
      const onClick = fn();
      return {
        args,
        onClick
      };
    },
    template: \`
      <TButton v-bind="args" @click="onClick">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </template>
      </TButton>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Button with Icons');

    // Verify icons are present
    const icons = canvasElement.querySelectorAll('svg');
    await expect(icons.length).toBe(2);

    // Click the button
    await userEvent.click(button);
  }
}`,...(At=(zt=k.parameters)==null?void 0:zt.docs)==null?void 0:At.source}}};var Wt,It,Lt;T.parameters={...T.parameters,docs:{...(Wt=T.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'xs',
    default: 'Extra Small Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small button size, suitable for tight spaces'
      }
    }
  }
}`,...(Lt=(It=T.parameters)==null?void 0:It.docs)==null?void 0:Lt.source}}};var Vt,Ot,Ht;C.parameters={...C.parameters,docs:{...(Vt=C.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    default: 'Small Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small button size, for compact interfaces'
      }
    }
  }
}`,...(Ht=(Ot=C.parameters)==null?void 0:Ot.docs)==null?void 0:Ht.source}}};var Pt,Ft,Gt;S.parameters={...S.parameters,docs:{...(Pt=S.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    default: 'Medium Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard medium button size (default)'
      }
    }
  }
}`,...(Gt=(Ft=S.parameters)==null?void 0:Ft.docs)==null?void 0:Gt.source}}};var Dt,Mt,qt;E.parameters={...E.parameters,docs:{...(Dt=E.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    default: 'Large Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large button size for emphasis'
      }
    }
  }
}`,...(qt=(Mt=E.parameters)==null?void 0:Mt.docs)==null?void 0:qt.source}}};var Nt,_t,Rt;z.parameters={...z.parameters,docs:{...(Nt=z.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'xl',
    default: 'Extra Large Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large button size for maximum visibility'
      }
    }
  }
}`,...(Rt=(_t=z.parameters)==null?void 0:_t.docs)==null?void 0:Rt.source}}};var Kt,Ut,$t;A.parameters={...A.parameters,docs:{...(Kt=A.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'All button sizes compared side by side'
      }
    }
  },
  render: () => ({
    components: {
      TButton
    },
    setup() {
      const onClick = fn();
      return {
        onClick
      };
    },
    template: \`
      <div class="flex flex-col items-start space-y-4">
        <TButton size="xs" @click="onClick">Extra Small</TButton>
        <TButton size="sm" @click="onClick">Small</TButton>
        <TButton size="md" @click="onClick">Medium (Default)</TButton>
        <TButton size="lg" @click="onClick">Large</TButton>
        <TButton size="xl" @click="onClick">Extra Large</TButton>
      </div>
    \`
  })
}`,...($t=(Ut=A.parameters)==null?void 0:Ut.docs)==null?void 0:$t.source}}};var jt,Jt,Qt;W.parameters={...W.parameters,docs:{...(jt=W.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    default: 'Ghost Button'
  },
  parameters: {
    docs: {
      description: {
        story: 'A transparent button that shows a subtle background on hover'
      }
    }
  }
}`,...(Qt=(Jt=W.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};var Xt,Yt,Zt;I.parameters={...I.parameters,docs:{...(Xt=I.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    outline: true,
    default: 'Outline Primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button with outline style'
      }
    }
  }
}`,...(Zt=(Yt=I.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source}}};var tn,nn,en;L.parameters={...L.parameters,docs:{...(tn=L.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    outline: true,
    default: 'Outline Success'
  },
  parameters: {
    docs: {
      description: {
        story: 'Success button with outline style'
      }
    }
  }
}`,...(en=(nn=L.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,on,sn;V.parameters={...V.parameters,docs:{...(an=V.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    outline: true,
    default: 'Outline Warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning button with outline style'
      }
    }
  }
}`,...(sn=(on=V.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var rn,cn,ln;O.parameters={...O.parameters,docs:{...(rn=O.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    outline: true,
    default: 'Outline Error'
  },
  parameters: {
    docs: {
      description: {
        story: 'Error button with outline style'
      }
    }
  }
}`,...(ln=(cn=O.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var un,dn,pn;H.parameters={...H.parameters,docs:{...(un=H.parameters)==null?void 0:un.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    outline: true,
    default: 'Outline Info'
  },
  parameters: {
    docs: {
      description: {
        story: 'Info button with outline style'
      }
    }
  }
}`,...(pn=(dn=H.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var mn,vn,yn;P.parameters={...P.parameters,docs:{...(mn=P.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A comparison of solid, outline, and ghost button styles'
      }
    }
  },
  render: () => ({
    components: {
      TButton
    },
    setup() {
      const onClick = fn();
      return {
        onClick
      };
    },
    template: \`
      <div class="space-y-8">
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Solid Variants (Default)</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="primary" @click="onClick">Primary</TButton>
            <TButton variant="secondary" @click="onClick">Secondary</TButton>
            <TButton variant="success" @click="onClick">Success</TButton>
            <TButton variant="warning" @click="onClick">Warning</TButton>
            <TButton variant="error" @click="onClick">Error</TButton>
            <TButton variant="info" @click="onClick">Info</TButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-medium">Outline Variants</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="primary" outline @click="onClick">Primary</TButton>
            <TButton variant="secondary" outline @click="onClick">Secondary</TButton>
            <TButton variant="success" outline @click="onClick">Success</TButton>
            <TButton variant="warning" outline @click="onClick">Warning</TButton>
            <TButton variant="error" outline @click="onClick">Error</TButton>
            <TButton variant="info" outline @click="onClick">Info</TButton>
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-lg font-medium">Ghost Variant</h3>
          <div class="flex flex-wrap gap-2">
            <TButton variant="ghost" @click="onClick">Ghost</TButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...(yn=(vn=P.parameters)==null?void 0:vn.docs)==null?void 0:yn.source}}};var gn,fn,bn;F.parameters={...F.parameters,docs:{...(gn=F.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be grouped together using the TButtonGroup component to create related actions'
      }
    }
  },
  render: () => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      const onClick = fn();
      return {
        onClick
      };
    },
    template: \`
      <div class="space-y-4">
        <TButtonGroup>
          <TButton variant="primary" @click="onClick">Left</TButton>
          <TButton variant="primary" @click="onClick">Middle</TButton>
          <TButton variant="primary" @click="onClick">Right</TButton>
        </TButtonGroup>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find and click the first button
    const leftButton = canvas.getByText('Left');
    await userEvent.click(leftButton);
  }
}`,...(bn=(fn=F.parameters)==null?void 0:fn.docs)==null?void 0:bn.source}}};const Cn=["Primary","Secondary","Success","Warning","Error","Info","Disabled","Loading","FullWidth","AriaLabelOnly","SubmitButton","KeyboardNavigation","WithPrefixIcon","WithSuffixIcon","WithBothIcons","ExtraSmall","Small","Medium","Large","ExtraLarge","SizeComparison","Ghost","OutlinePrimary","OutlineSuccess","OutlineWarning","OutlineError","OutlineInfo","VariantComparison","InButtonGroup"];export{b as AriaLabelOnly,y as Disabled,m as Error,z as ExtraLarge,T as ExtraSmall,f as FullWidth,W as Ghost,F as InButtonGroup,v as Info,h as KeyboardNavigation,E as Large,g as Loading,S as Medium,O as OutlineError,H as OutlineInfo,I as OutlinePrimary,L as OutlineSuccess,V as OutlineWarning,l as Primary,u as Secondary,A as SizeComparison,C as Small,B as SubmitButton,d as Success,P as VariantComparison,p as Warning,k as WithBothIcons,w as WithPrefixIcon,x as WithSuffixIcon,Cn as __namedExportsOrder,Tn as default};
