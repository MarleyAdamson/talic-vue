import{w as _,e as I,u as M,f as O}from"./index-B7dDGrsI.js";import{_ as H}from"./TButton-DKkzQOAf.js";import"./TModal-CUsktSnf.js";import"./TButtonGroup-BE32FjPa.js";import"./TCard-iiimh3rz.js";import{a as e}from"./TBadgeGroup-C4gwlk51.js";import{_ as r}from"./TBadge--TaD6PUp.js";import"./TInput-D4F_TQjo.js";import"./TPopover-U4-3EIWv.js";import"./TInputCalendar-CSzsCene.js";import"./vue.esm-bundler-CJdtXRgK.js";const Z={title:"Components/TBadgeGroup",component:e,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Controls the orientation of the badge group"},rounded:{control:"boolean",description:"Controls whether the first and last badges have rounded edges"},gap:{control:"text",description:"Sets the gap between badges using Tailwind spacing scale"},class:{control:"text",description:"Additional CSS classes to apply"}},args:{orientation:"horizontal",rounded:!0,gap:"0"},parameters:{docs:{description:{component:"A component for grouping related badges together with consistent styling and visibility management"}}}},s={args:{orientation:"horizontal"},render:a=>({components:{TBadge:r,TBadgeGroup:e},setup(){return{args:a}},template:`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Primary</TBadge>
        <TBadge variant="secondary">Secondary</TBadge>
        <TBadge variant="success">Success</TBadge>
      </TBadgeGroup>
    `}),play:async({canvasElement:a})=>{const n=_(a).getByText("Primary");I(n).toBeDefined()}},i={args:{orientation:"vertical"},render:a=>({components:{TBadge:r,TBadgeGroup:e},setup(){return{args:a}},template:`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Top</TBadge>
        <TBadge variant="secondary">Middle</TBadge>
        <TBadge variant="success">Bottom</TBadge>
      </TBadgeGroup>
    `})},d={render:a=>({components:{TBadge:r,TBadgeGroup:e},setup(){return{args:a}},template:`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Primary</TBadge>
        <TBadge variant="secondary">Secondary</TBadge>
        <TBadge variant="success">Success</TBadge>
        <TBadge variant="warning">Warning</TBadge>
        <TBadge variant="error">Error</TBadge>
        <TBadge variant="info">Info</TBadge>
      </TBadgeGroup>
    `}),parameters:{docs:{description:{story:"Badge group with different badge variants"}}}},t={render:a=>({components:{TBadge:r,TBadgeGroup:e},setup(){return{args:a}},template:`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary" outline>Primary</TBadge>
        <TBadge variant="secondary" outline>Secondary</TBadge>
        <TBadge variant="success" outline>Success</TBadge>
      </TBadgeGroup>
    `}),parameters:{docs:{description:{story:"Badge group with outline badge style"}}}},o={args:{gap:"2"},render:a=>({components:{TBadge:r,TBadgeGroup:e},setup(){return{args:a}},template:`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">First</TBadge>
        <TBadge variant="secondary">Second</TBadge>
        <TBadge variant="success">Third</TBadge>
      </TBadgeGroup>
    `}),parameters:{docs:{description:{story:"Badge group with gap between badges"}}}},g={render:a=>({components:{TBadge:r,TBadgeGroup:e},setup(){const c=O();return{args:a,onDismiss:c}},template:`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary" dismissible @dismiss="onDismiss">First</TBadge>
        <TBadge variant="secondary" dismissible @dismiss="onDismiss">Second</TBadge>
        <TBadge variant="success" dismissible @dismiss="onDismiss">Third</TBadge>
      </TBadgeGroup>
    `}),play:async({canvasElement:a})=>{const n=_(a).getAllByRole("button",{name:"Dismiss"});n.length>0&&await M.click(n[0])},parameters:{docs:{description:{story:"Badge group with dismissible badges"}}}},B={render:a=>({components:{TBadge:r,TBadgeGroup:e,TButton:H},setup(){return{args:a}},template:`
      <div class="space-y-4">
        <TBadgeGroup v-bind="args" ref="badgeGroup">
          <TBadge variant="primary" dismissible>First</TBadge>
          <TBadge variant="secondary" dismissible>Second</TBadge>
          <TBadge variant="success" dismissible>Third</TBadge>
          <TBadge variant="warning" dismissible>Fourth</TBadge>
          <TBadge variant="error" dismissible>Fifth</TBadge>
        </TBadgeGroup>

        <div class="flex gap-2 mt-4">
          <TButton
            variant="primary"
            size="sm"
            @click="$refs.badgeGroup.showAllBadges()"
          >
            Show All
          </TButton>
          <TButton
            variant="secondary"
            size="sm"
            @click="$refs.badgeGroup.hideAllBadges()"
          >
            Hide All
          </TButton>
          <TButton
            variant="info"
            size="sm"
            @click="alert(\`Visible: \${$refs.badgeGroup?.getVisibleBadgeCount()} / Total: \${$refs.badgeGroup?.getTotalBadgeCount()}\`)"
          >
            Badge Info
          </TButton>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"Demonstrating badge group visibility control methods"}}}},T={render:()=>({components:{TBadge:r,TBadgeGroup:e,TButton:H},template:`
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-lg font-medium">Horizontal (Default)</h3>
          <TBadgeGroup>
            <TBadge variant="primary">First</TBadge>
            <TBadge variant="secondary">Second</TBadge>
            <TBadge variant="success">Third</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Vertical</h3>
          <TBadgeGroup orientation="vertical">
            <TBadge variant="primary">Top</TBadge>
            <TBadge variant="secondary">Middle</TBadge>
            <TBadge variant="success">Bottom</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Variants</h3>
          <TBadgeGroup>
            <TBadge variant="primary">Primary</TBadge>
            <TBadge variant="secondary">Secondary</TBadge>
            <TBadge variant="success">Success</TBadge>
            <TBadge variant="warning">Warning</TBadge>
            <TBadge variant="error">Error</TBadge>
            <TBadge variant="info">Info</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Gap</h3>
          <TBadgeGroup gap="2">
            <TBadge variant="primary">First</TBadge>
            <TBadge variant="secondary">Second</TBadge>
            <TBadge variant="success">Third</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Styles</h3>
          <TBadgeGroup gap="2">
            <TBadge variant="primary" tonal>Tonal</TBadge>
            <TBadge variant="success" outline>Outline</TBadge>
            <TBadge variant="warning" size="lg">Large</TBadge>
            <TBadge variant="error" size="sm">Small</TBadge>
            <TBadge variant="info" rounding="full">Rounded</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Dismissible Badges</h3>
          <TBadgeGroup ref="dismissibleGroup" gap="2">
            <TBadge variant="primary" dismissible>First</TBadge>
            <TBadge variant="secondary" dismissible>Second</TBadge>
            <TBadge variant="success" dismissible>Third</TBadge>
          </TBadgeGroup>

          <div class="flex gap-2 mt-2">
            <TButton
              variant="primary"
              size="sm"
              @click="$refs.dismissibleGroup.showAllBadges()"
            >
              Show All
            </TButton>
            <TButton
              variant="secondary"
              size="sm"
              @click="$refs.dismissibleGroup.hideAllBadges()"
            >
              Hide All
            </TButton>
          </div>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"Showcase of different badge group configurations"}}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Primary</TBadge>
        <TBadge variant="secondary">Secondary</TBadge>
        <TBadge variant="success">Success</TBadge>
      </TBadgeGroup>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Verify badges are rendered
    const primaryBadge = canvas.getByText('Primary');
    expect(primaryBadge).toBeDefined();
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,v,y;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Top</TBadge>
        <TBadge variant="secondary">Middle</TBadge>
        <TBadge variant="success">Bottom</TBadge>
      </TBadgeGroup>
    \`
  })
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,f,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">Primary</TBadge>
        <TBadge variant="secondary">Secondary</TBadge>
        <TBadge variant="success">Success</TBadge>
        <TBadge variant="warning">Warning</TBadge>
        <TBadge variant="error">Error</TBadge>
        <TBadge variant="info">Info</TBadge>
      </TBadgeGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge group with different badge variants'
      }
    }
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var G,S,w;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary" outline>Primary</TBadge>
        <TBadge variant="secondary" outline>Secondary</TBadge>
        <TBadge variant="success" outline>Success</TBadge>
      </TBadgeGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge group with outline badge style'
      }
    }
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,x,z;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    gap: '2'
  },
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary">First</TBadge>
        <TBadge variant="secondary">Second</TBadge>
        <TBadge variant="success">Third</TBadge>
      </TBadgeGroup>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Badge group with gap between badges'
      }
    }
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var A,$,F;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup
    },
    setup() {
      const onDismiss = fn();
      return {
        args,
        onDismiss
      };
    },
    template: \`
      <TBadgeGroup v-bind="args">
        <TBadge variant="primary" dismissible @dismiss="onDismiss">First</TBadge>
        <TBadge variant="secondary" dismissible @dismiss="onDismiss">Second</TBadge>
        <TBadge variant="success" dismissible @dismiss="onDismiss">Third</TBadge>
      </TBadgeGroup>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find dismiss button and click it
    const dismissButtons = canvas.getAllByRole('button', {
      name: 'Dismiss'
    });
    if (dismissButtons.length > 0) {
      await userEvent.click(dismissButtons[0]);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge group with dismissible badges'
      }
    }
  }
}`,...(F=($=g.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var V,W,k;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TBadge,
      TBadgeGroup,
      TButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <TBadgeGroup v-bind="args" ref="badgeGroup">
          <TBadge variant="primary" dismissible>First</TBadge>
          <TBadge variant="secondary" dismissible>Second</TBadge>
          <TBadge variant="success" dismissible>Third</TBadge>
          <TBadge variant="warning" dismissible>Fourth</TBadge>
          <TBadge variant="error" dismissible>Fifth</TBadge>
        </TBadgeGroup>

        <div class="flex gap-2 mt-4">
          <TButton
            variant="primary"
            size="sm"
            @click="$refs.badgeGroup.showAllBadges()"
          >
            Show All
          </TButton>
          <TButton
            variant="secondary"
            size="sm"
            @click="$refs.badgeGroup.hideAllBadges()"
          >
            Hide All
          </TButton>
          <TButton
            variant="info"
            size="sm"
            @click="alert(\\\`Visible: \\\${$refs.badgeGroup?.getVisibleBadgeCount()} / Total: \\\${$refs.badgeGroup?.getTotalBadgeCount()}\\\`)"
          >
            Badge Info
          </TButton>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrating badge group visibility control methods'
      }
    }
  }
}`,...(k=(W=B.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var E,C,P;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TBadge,
      TBadgeGroup,
      TButton
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="mb-2 text-lg font-medium">Horizontal (Default)</h3>
          <TBadgeGroup>
            <TBadge variant="primary">First</TBadge>
            <TBadge variant="secondary">Second</TBadge>
            <TBadge variant="success">Third</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Vertical</h3>
          <TBadgeGroup orientation="vertical">
            <TBadge variant="primary">Top</TBadge>
            <TBadge variant="secondary">Middle</TBadge>
            <TBadge variant="success">Bottom</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Variants</h3>
          <TBadgeGroup>
            <TBadge variant="primary">Primary</TBadge>
            <TBadge variant="secondary">Secondary</TBadge>
            <TBadge variant="success">Success</TBadge>
            <TBadge variant="warning">Warning</TBadge>
            <TBadge variant="error">Error</TBadge>
            <TBadge variant="info">Info</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Gap</h3>
          <TBadgeGroup gap="2">
            <TBadge variant="primary">First</TBadge>
            <TBadge variant="secondary">Second</TBadge>
            <TBadge variant="success">Third</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">With Different Styles</h3>
          <TBadgeGroup gap="2">
            <TBadge variant="primary" tonal>Tonal</TBadge>
            <TBadge variant="success" outline>Outline</TBadge>
            <TBadge variant="warning" size="lg">Large</TBadge>
            <TBadge variant="error" size="sm">Small</TBadge>
            <TBadge variant="info" rounding="full">Rounded</TBadge>
          </TBadgeGroup>
        </div>

        <div>
          <h3 class="mb-2 text-lg font-medium">Dismissible Badges</h3>
          <TBadgeGroup ref="dismissibleGroup" gap="2">
            <TBadge variant="primary" dismissible>First</TBadge>
            <TBadge variant="secondary" dismissible>Second</TBadge>
            <TBadge variant="success" dismissible>Third</TBadge>
          </TBadgeGroup>

          <div class="flex gap-2 mt-2">
            <TButton
              variant="primary"
              size="sm"
              @click="$refs.dismissibleGroup.showAllBadges()"
            >
              Show All
            </TButton>
            <TButton
              variant="secondary"
              size="sm"
              @click="$refs.dismissibleGroup.hideAllBadges()"
            >
              Hide All
            </TButton>
          </div>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different badge group configurations'
      }
    }
  }
}`,...(P=(C=T.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const aa=["Horizontal","Vertical","DifferentVariants","Outline","WithGap","Dismissible","WithControlMethods","AllVariants"];export{T as AllVariants,d as DifferentVariants,g as Dismissible,s as Horizontal,t as Outline,i as Vertical,B as WithControlMethods,o as WithGap,aa as __namedExportsOrder,Z as default};
