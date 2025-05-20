import{w as J,u as K}from"./index-B7dDGrsI.js";import"./TButton-DKkzQOAf.js";import"./TModal-CUsktSnf.js";import"./TButtonGroup-BE32FjPa.js";import"./TCard-iiimh3rz.js";import{_ as e}from"./TBadgeGroup-C4gwlk51.js";import"./TBadge--TaD6PUp.js";import"./TInput-D4F_TQjo.js";import"./TPopover-U4-3EIWv.js";import"./TInputCalendar-CSzsCene.js";import"./vue.esm-bundler-CJdtXRgK.js";const le={title:"Components/TAlert",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"The visual style of the alert"},title:{control:"text",description:"The title displayed at the top of the alert"},size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the alert"},rounded:{control:"boolean",description:"Whether the alert has rounded corners"},dismissible:{control:"boolean",description:"Whether the alert can be dismissed"},hasIcon:{control:"boolean",description:"Whether to show the variant icon (default is true for all variants except secondary)"},live:{control:"select",options:["assertive","polite","off"],description:"ARIA live region setting for screen readers"},ariaLabel:{control:"text",description:"Accessible label for the alert (when title is not provided)"},elevation:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Controls the shadow depth of the alert"},class:{control:"text",description:"Additional CSS classes to apply"}},args:{variant:"primary",size:"md",rounded:!0,dismissible:!1,elevation:"none"},parameters:{docs:{description:{component:"A versatile alert component used to display messages with various severity levels"}}}},r={args:{title:"Alert Title"},render:t=>({components:{TAlert:e},setup(){return{args:t}},template:`
      <TAlert v-bind="args">
        This is a basic alert message. It provides important information.
      </TAlert>
    `})},n={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert variant="primary" title="Primary Alert">
          This is a primary alert — check it out!
        </TAlert>

        <TAlert variant="secondary" title="Secondary Alert">
          This is a secondary alert — check it out!
        </TAlert>

        <TAlert variant="success" title="Success Alert">
          This is a success alert — check it out!
        </TAlert>

        <TAlert variant="warning" title="Warning Alert">
          This is a warning alert — check it out!
        </TAlert>

        <TAlert variant="error" title="Error Alert">
          This is an error alert — check it out!
        </TAlert>

        <TAlert variant="info" title="Info Alert">
          This is an info alert — check it out!
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"All available alert variants to indicate different states"}}}},s={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert title="Small Alert" size="sm">
          This is a small-sized alert message with slightly larger icon.
        </TAlert>

        <TAlert title="Medium Alert" size="md">
          This is a medium-sized alert message (default) with slightly larger icon.
        </TAlert>

        <TAlert title="Large Alert" size="lg">
          This is a large-sized alert message with slightly larger icon.
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"Alerts can be displayed in different sizes with proportionally sized icons"}}}},a={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert title="No Elevation (Default)" elevation="none" variant="primary">
          This alert has no shadow (flat design).
        </TAlert>

        <TAlert title="Extra Small Elevation" elevation="xs" variant="primary">
          This alert has an extra small shadow (shadow-sm).
        </TAlert>

        <TAlert title="Small Elevation" elevation="sm" variant="primary">
          This alert has a small shadow.
        </TAlert>

        <TAlert title="Medium Elevation" elevation="md" variant="primary">
          This alert has a medium shadow.
        </TAlert>

        <TAlert title="Large Elevation" elevation="lg" variant="primary">
          This alert has a large shadow.
        </TAlert>

        <TAlert title="Extra Large Elevation" elevation="xl" variant="primary">
          This alert has an extra large shadow.
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"Alerts can have different elevation levels, from none to extra large"}}}},i={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert title="With Default Icon" variant="success">
          This alert uses the default icon for its variant.
        </TAlert>

        <TAlert title="Without Icon" variant="success" :hasIcon="false">
          This alert has no icon.
        </TAlert>

        <TAlert title="Secondary With Icon" variant="secondary" :hasIcon="true">
          Secondary alerts don't show icons by default, but you can enable them.
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"Icons can be shown or hidden regardless of variant"}}}},l={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert variant="info" title="Alert with Footer">
          This alert has additional information in a footer section.
          <template #footer>
            <div class="flex items-center justify-between">
              <span>Last updated: 2 hours ago</span>
              <a href="#" class="font-medium underline">Learn more</a>
            </div>
          </template>
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"Alerts can include a footer section for additional information or actions"}}}},o={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert
          variant="success"
          title="Elevated Alert with Footer"
          elevation="lg"
          dismissible
        >
          This alert combines multiple features: success variant, large elevation, dismissible button, and a footer.
          <template #footer>
            <div class="flex items-center">
              <span class="font-medium">Action completed successfully!</span>
            </div>
          </template>
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"Alerts can combine multiple features for advanced use cases"}}}},c={args:{title:"Dismissible Alert",dismissible:!0},render:t=>({components:{TAlert:e},setup(){return{args:t}},template:`
      <TAlert v-bind="args">
        This alert can be dismissed by clicking the X button in the corner.
      </TAlert>
    `}),play:async({canvasElement:t})=>{const H=J(t).getByLabelText("Dismiss alert");await K.click(H)},parameters:{docs:{description:{story:"Alerts can be dismissible, allowing users to close them"}}}},d={args:{title:"Alert Without Rounded Corners",rounded:!1},render:t=>({components:{TAlert:e},setup(){return{args:t}},template:`
      <TAlert v-bind="args">
        This alert has square corners instead of rounded ones.
      </TAlert>
    `}),parameters:{docs:{description:{story:"Alerts can have squared corners instead of rounded ones"}}}},m={render:()=>({components:{TAlert:e},template:`
      <TAlert variant="warning">
        This alert contains only content without a title.
      </TAlert>
    `}),parameters:{docs:{description:{story:"Alerts can be displayed without a title, showing only content"}}}},p={render:()=>({components:{TAlert:e},template:`
      <div class="space-y-4">
        <TAlert
          variant="error"
          title="Critical Error"
          live="assertive"
          ariaLabel="Critical system error"
        >
          This error alert will be announced immediately to screen readers.
        </TAlert>

        <TAlert
          variant="info"
          live="polite"
          ariaLabel="Information notification"
        >
          This info alert without a visible title has an aria-label and will be announced when the user is idle.
        </TAlert>

        <TAlert
          variant="success"
          title="Success Message"
          live="off"
        >
          This success alert won't be announced by screen readers (aria-live="off").
        </TAlert>
      </div>
    `}),parameters:{docs:{description:{story:"Examples showing different accessibility configurations for screen readers"}}}};var h,u,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Alert Title'
  },
  render: args => ({
    components: {
      TAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TAlert v-bind="args">
        This is a basic alert message. It provides important information.
      </TAlert>
    \`
  })
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var A,v,f;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert variant="primary" title="Primary Alert">
          This is a primary alert — check it out!
        </TAlert>

        <TAlert variant="secondary" title="Secondary Alert">
          This is a secondary alert — check it out!
        </TAlert>

        <TAlert variant="success" title="Success Alert">
          This is a success alert — check it out!
        </TAlert>

        <TAlert variant="warning" title="Warning Alert">
          This is a warning alert — check it out!
        </TAlert>

        <TAlert variant="error" title="Error Alert">
          This is an error alert — check it out!
        </TAlert>

        <TAlert variant="info" title="Info Alert">
          This is an info alert — check it out!
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available alert variants to indicate different states'
      }
    }
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,g,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert title="Small Alert" size="sm">
          This is a small-sized alert message with slightly larger icon.
        </TAlert>

        <TAlert title="Medium Alert" size="md">
          This is a medium-sized alert message (default) with slightly larger icon.
        </TAlert>

        <TAlert title="Large Alert" size="lg">
          This is a large-sized alert message with slightly larger icon.
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be displayed in different sizes with proportionally sized icons'
      }
    }
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,E,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert title="No Elevation (Default)" elevation="none" variant="primary">
          This alert has no shadow (flat design).
        </TAlert>

        <TAlert title="Extra Small Elevation" elevation="xs" variant="primary">
          This alert has an extra small shadow (shadow-sm).
        </TAlert>

        <TAlert title="Small Elevation" elevation="sm" variant="primary">
          This alert has a small shadow.
        </TAlert>

        <TAlert title="Medium Elevation" elevation="md" variant="primary">
          This alert has a medium shadow.
        </TAlert>

        <TAlert title="Large Elevation" elevation="lg" variant="primary">
          This alert has a large shadow.
        </TAlert>

        <TAlert title="Extra Large Elevation" elevation="xl" variant="primary">
          This alert has an extra large shadow.
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can have different elevation levels, from none to extra large'
      }
    }
  }
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var x,I,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert title="With Default Icon" variant="success">
          This alert uses the default icon for its variant.
        </TAlert>

        <TAlert title="Without Icon" variant="success" :hasIcon="false">
          This alert has no icon.
        </TAlert>

        <TAlert title="Secondary With Icon" variant="secondary" :hasIcon="true">
          Secondary alerts don't show icons by default, but you can enable them.
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be shown or hidden regardless of variant'
      }
    }
  }
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var k,L,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert variant="info" title="Alert with Footer">
          This alert has additional information in a footer section.
          <template #footer>
            <div class="flex items-center justify-between">
              <span>Last updated: 2 hours ago</span>
              <a href="#" class="font-medium underline">Learn more</a>
            </div>
          </template>
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can include a footer section for additional information or actions'
      }
    }
  }
}`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var W,D,F;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert
          variant="success"
          title="Elevated Alert with Footer"
          elevation="lg"
          dismissible
        >
          This alert combines multiple features: success variant, large elevation, dismissible button, and a footer.
          <template #footer>
            <div class="flex items-center">
              <span class="font-medium">Action completed successfully!</span>
            </div>
          </template>
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can combine multiple features for advanced use cases'
      }
    }
  }
}`,...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var B,M,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible Alert',
    dismissible: true
  },
  render: args => ({
    components: {
      TAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TAlert v-bind="args">
        This alert can be dismissed by clicking the X button in the corner.
      </TAlert>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Find the dismiss button
    const dismissButton = canvas.getByLabelText('Dismiss alert');

    // Click the dismiss button
    await userEvent.click(dismissButton);
  },
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be dismissible, allowing users to close them'
      }
    }
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,_,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Alert Without Rounded Corners',
    rounded: false
  },
  render: args => ({
    components: {
      TAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TAlert v-bind="args">
        This alert has square corners instead of rounded ones.
      </TAlert>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can have squared corners instead of rounded ones'
      }
    }
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var N,j,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <TAlert variant="warning">
        This alert contains only content without a title.
      </TAlert>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be displayed without a title, showing only content'
      }
    }
  }
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var V,X,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TAlert
    },
    template: \`
      <div class="space-y-4">
        <TAlert
          variant="error"
          title="Critical Error"
          live="assertive"
          ariaLabel="Critical system error"
        >
          This error alert will be announced immediately to screen readers.
        </TAlert>

        <TAlert
          variant="info"
          live="polite"
          ariaLabel="Information notification"
        >
          This info alert without a visible title has an aria-label and will be announced when the user is idle.
        </TAlert>

        <TAlert
          variant="success"
          title="Success Message"
          live="off"
        >
          This success alert won't be announced by screen readers (aria-live="off").
        </TAlert>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing different accessibility configurations for screen readers'
      }
    }
  }
}`,...(G=(X=p.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const oe=["Basic","AllVariants","Sizes","Elevation","IconOptions","WithFooter","CombinedFeatures","Dismissible","NoRounding","ContentOnly","Accessibility"];export{p as Accessibility,n as AllVariants,r as Basic,o as CombinedFeatures,m as ContentOnly,c as Dismissible,a as Elevation,i as IconOptions,d as NoRounding,s as Sizes,l as WithFooter,oe as __namedExportsOrder,le as default};
