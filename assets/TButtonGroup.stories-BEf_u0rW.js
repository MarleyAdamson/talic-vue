import{w as W,u as _}from"./index-B7dDGrsI.js";import{_ as o}from"./TButton-DKkzQOAf.js";import"./TModal-CUsktSnf.js";import{_ as n}from"./TButtonGroup-BE32FjPa.js";import"./TCard-iiimh3rz.js";import"./TBadgeGroup-C4gwlk51.js";import"./TBadge--TaD6PUp.js";import"./TInput-D4F_TQjo.js";import"./TPopover-U4-3EIWv.js";import"./TInputCalendar-CSzsCene.js";import"./vue.esm-bundler-CJdtXRgK.js";const q={title:"Components/TButtonGroup",component:n,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Controls the orientation of the button group"},rounded:{control:"boolean",description:"Controls whether the first and last buttons have rounded edges"},gap:{control:"text",description:"Sets the gap between buttons using Tailwind spacing scale"},class:{control:"text",description:"Additional CSS classes to apply"}},args:{orientation:"horizontal",rounded:!0,gap:"0"},parameters:{docs:{description:{component:"A component for grouping related buttons together with consistent styling"}}}},r={args:{orientation:"horizontal"},render:t=>({components:{TButton:o,TButtonGroup:n},setup(){return{args:t}},template:`
      <TButtonGroup v-bind="args">
        <TButton>Left</TButton>
        <TButton>Middle</TButton>
        <TButton>Right</TButton>
      </TButtonGroup>
    `}),play:async({canvasElement:t})=>{const T=W(t).getByText("Left");await _.click(T)}},u={args:{orientation:"vertical"},render:t=>({components:{TButton:o,TButtonGroup:n},setup(){return{args:t}},template:`
      <TButtonGroup v-bind="args">
        <TButton>Top</TButton>
        <TButton>Middle</TButton>
        <TButton>Bottom</TButton>
      </TButtonGroup>
    `}),play:async({canvasElement:t})=>{const T=W(t).getByText("Top");await _.click(T)}},e={render:t=>({components:{TButton:o,TButtonGroup:n},setup(){return{args:t}},template:`
      <TButtonGroup v-bind="args">
        <TButton variant="primary">Primary</TButton>
        <TButton variant="secondary">Secondary</TButton>
        <TButton variant="success">Success</TButton>
      </TButtonGroup>
    `}),parameters:{docs:{description:{story:"Button group with different button variants"}}}},a={render:t=>({components:{TButton:o,TButtonGroup:n},setup(){return{args:t}},template:`
      <TButtonGroup v-bind="args">
        <TButton outline>Left</TButton>
        <TButton outline>Middle</TButton>
        <TButton outline>Right</TButton>
      </TButtonGroup>
    `}),parameters:{docs:{description:{story:"Button group with outline button style"}}}},s={args:{gap:"2"},render:t=>({components:{TButton:o,TButtonGroup:n},setup(){return{args:t}},template:`
      <TButtonGroup v-bind="args">
        <TButton>First</TButton>
        <TButton>Second</TButton>
        <TButton>Third</TButton>
      </TButtonGroup>
    `}),parameters:{docs:{description:{story:"Button group with gap between buttons"}}}},i={args:{rounded:!1},render:t=>({components:{TButton:o,TButtonGroup:n},setup(){return{args:t}},template:`
      <TButtonGroup v-bind="args">
        <TButton>Left</TButton>
        <TButton>Middle</TButton>
        <TButton>Right</TButton>
      </TButtonGroup>
    `}),parameters:{docs:{description:{story:"Button group with no rounded corners on first and last buttons"}}}},B={render:()=>({components:{TButton:o,TButtonGroup:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-lg font-medium">Horizontal (Default)</h3>
          <TButtonGroup>
            <TButton>Left</TButton>
            <TButton>Middle</TButton>
            <TButton>Right</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Vertical</h3>
          <TButtonGroup orientation="vertical">
            <TButton>Top</TButton>
            <TButton>Middle</TButton>
            <TButton>Bottom</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Variants</h3>
          <TButtonGroup>
            <TButton variant="primary">Primary</TButton>
            <TButton variant="secondary">Secondary</TButton>
            <TButton variant="success">Success</TButton>
            <TButton variant="warning">Warning</TButton>
            <TButton variant="error">Error</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Outline Style</h3>
          <TButtonGroup>
            <TButton outline>Left</TButton>
            <TButton outline>Middle</TButton>
            <TButton outline>Right</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Gap</h3>
          <TButtonGroup gap="2">
            <TButton>First</TButton>
            <TButton>Second</TButton>
            <TButton>Third</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">No Rounding</h3>
          <TButtonGroup :rounded="false">
            <TButton>Left</TButton>
            <TButton>Middle</TButton>
            <TButton>Right</TButton>
          </TButtonGroup>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"All variations of the button group component"}}}};var p,d,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TButtonGroup v-bind="args">
        <TButton>Left</TButton>
        <TButton>Middle</TButton>
        <TButton>Right</TButton>
      </TButtonGroup>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find buttons
    const leftButton = canvas.getByText('Left');

    // Interact with buttons
    await userEvent.click(leftButton);
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,g;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TButtonGroup v-bind="args">
        <TButton>Top</TButton>
        <TButton>Middle</TButton>
        <TButton>Bottom</TButton>
      </TButtonGroup>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find and interact with top button
    const topButton = canvas.getByText('Top');
    await userEvent.click(topButton);
  }
}`,...(g=(m=u.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,h,G;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TButtonGroup v-bind="args">
        <TButton variant="primary">Primary</TButton>
        <TButton variant="secondary">Secondary</TButton>
        <TButton variant="success">Success</TButton>
      </TButtonGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with different button variants'
      }
    }
  }
}`,...(G=(h=e.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var f,y,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TButtonGroup v-bind="args">
        <TButton outline>Left</TButton>
        <TButton outline>Middle</TButton>
        <TButton outline>Right</TButton>
      </TButtonGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with outline button style'
      }
    }
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,S,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    gap: '2'
  },
  render: args => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TButtonGroup v-bind="args">
        <TButton>First</TButton>
        <TButton>Second</TButton>
        <TButton>Third</TButton>
      </TButtonGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with gap between buttons'
      }
    }
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var M,R,L;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    rounded: false
  },
  render: args => ({
    components: {
      TButton,
      TButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TButtonGroup v-bind="args">
        <TButton>Left</TButton>
        <TButton>Middle</TButton>
        <TButton>Right</TButton>
      </TButtonGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button group with no rounded corners on first and last buttons'
      }
    }
  }
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var E,V,z;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TButton,
      TButtonGroup
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-lg font-medium">Horizontal (Default)</h3>
          <TButtonGroup>
            <TButton>Left</TButton>
            <TButton>Middle</TButton>
            <TButton>Right</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Vertical</h3>
          <TButtonGroup orientation="vertical">
            <TButton>Top</TButton>
            <TButton>Middle</TButton>
            <TButton>Bottom</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Variants</h3>
          <TButtonGroup>
            <TButton variant="primary">Primary</TButton>
            <TButton variant="secondary">Secondary</TButton>
            <TButton variant="success">Success</TButton>
            <TButton variant="warning">Warning</TButton>
            <TButton variant="error">Error</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Outline Style</h3>
          <TButtonGroup>
            <TButton outline>Left</TButton>
            <TButton outline>Middle</TButton>
            <TButton outline>Right</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Gap</h3>
          <TButtonGroup gap="2">
            <TButton>First</TButton>
            <TButton>Second</TButton>
            <TButton>Third</TButton>
          </TButtonGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">No Rounding</h3>
          <TButtonGroup :rounded="false">
            <TButton>Left</TButton>
            <TButton>Middle</TButton>
            <TButton>Right</TButton>
          </TButtonGroup>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'All variations of the button group component'
      }
    }
  }
}`,...(z=(V=B.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const J=["Horizontal","Vertical","DifferentVariants","Outline","WithGap","NoRounding","AllVariants"];export{B as AllVariants,e as DifferentVariants,r as Horizontal,i as NoRounding,a as Outline,u as Vertical,s as WithGap,J as __namedExportsOrder,q as default};
