import{f as ea,w as aa,e as na,u as sa}from"./index-B7dDGrsI.js";import{_ as a}from"./TBadge--TaD6PUp.js";import"./vue.esm-bundler-CJdtXRgK.js";const da={title:"Components/TBadge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","success","secondary","warning","error","info","ghost"],description:"Controls the visual style of the badge"},outline:{control:"boolean",description:"Whether to use the outline style for the badge"},tonal:{control:"boolean",description:"Whether to use a tonal (reduced opacity) background"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Controls the size of the badge"},rounding:{control:"select",options:["full","lg","md","sm","none","default"],description:"Controls the border radius of the badge"},ariaLabel:{control:"text",description:"Provides an accessible label for the badge"},dismissible:{control:"boolean",description:"Whether the badge can be dismissed with an X button"},class:{control:"text",description:"Additional CSS classes to apply"},onDismiss:{action:"dismissed",description:"Event emitted when the dismiss button is clicked"},prefix:{description:"Content to display before the main badge text",control:"text"},suffix:{description:"Content to display after the main badge text",control:"text"}},args:{default:"Badge Text",dismissible:!1,size:"md",outline:!1,tonal:!1,rounding:"default"},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},interactions:{disable:!1},docs:{description:{component:"A badge component used to display small pieces of information like status, counts, or tags. Supports various visual styles and can be dismissible."}}},render:e=>({components:{TBadge:a},setup(){const R=ea();return{args:e,onDismiss:R}},template:'<TBadge v-bind="args" @dismiss="onDismiss">{{ args.default }}</TBadge>'})},n={args:{variant:"primary",default:"Primary Badge"}},s={args:{variant:"secondary",default:"Secondary Badge"}},r={args:{variant:"success",default:"Success Badge"}},t={args:{variant:"warning",default:"Warning Badge"}},i={args:{variant:"error",default:"Error Badge"}},d={args:{variant:"info",default:"Info Badge"}},o={args:{variant:"ghost",default:"Ghost Badge"}},l={args:{variant:"primary",outline:!0,default:"Outline Primary"}},g={args:{variant:"success",outline:!0,default:"Outline Success"}},c={args:{variant:"primary",tonal:!0,default:"Tonal Primary"}},u={args:{variant:"success",tonal:!0,default:"Tonal Success"}},m={args:{size:"xs",default:"XS Badge"}},p={args:{size:"sm",default:"Small Badge"}},f={args:{size:"md",default:"Medium Badge"}},B={args:{size:"lg",default:"Large Badge"}},v={args:{size:"xl",default:"XL Badge"}},T={args:{rounding:"full",default:"Pill Badge"}},w={args:{rounding:"lg",default:"Large Rounding"}},x={args:{rounding:"md",default:"Medium Rounding"}},h={args:{rounding:"sm",default:"Small Rounding"}},b={args:{rounding:"none",default:"No Rounding"}},S={args:{rounding:"default",default:"Default Rounding"}},y={args:{dismissible:!0,default:"Dismissible Badge"},play:async({canvasElement:e})=>{const D=aa(e).getByRole("button",{name:"Dismiss"});await na(D).toBeInTheDocument(),await sa.click(D)}},z={args:{default:"Badge with Prefix"},render:e=>({components:{TBadge:a},setup(){return{args:e}},template:`
      <TBadge v-bind="args">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TBadge>
    `})},P={args:{default:"Badge with Suffix"},render:e=>({components:{TBadge:a},setup(){return{args:e}},template:`
      <TBadge v-bind="args">
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </template>
      </TBadge>
    `})},M={render:()=>({components:{TBadge:a},template:`
      <div class="space-y-8">
        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Basic Badges</h3>
          <TBadge variant="primary">New</TBadge>
          <TBadge variant="success">Completed</TBadge>
          <TBadge variant="warning">Pending</TBadge>
          <TBadge variant="error">Failed</TBadge>
          <TBadge variant="info">Info</TBadge>
          <TBadge variant="secondary">Default</TBadge>
          <TBadge variant="ghost">Ghost</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Outline Badges</h3>
          <TBadge variant="primary" outline>Primary</TBadge>
          <TBadge variant="success" outline>Success</TBadge>
          <TBadge variant="warning" outline>Warning</TBadge>
          <TBadge variant="error" outline>Error</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Tonal Badges</h3>
          <TBadge variant="primary" tonal>Primary</TBadge>
          <TBadge variant="success" tonal>Success</TBadge>
          <TBadge variant="warning" tonal>Warning</TBadge>
          <TBadge variant="error" tonal>Error</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Sizes</h3>
          <TBadge size="xs">XS</TBadge>
          <TBadge size="sm">Small</TBadge>
          <TBadge size="md">Medium</TBadge>
          <TBadge size="lg">Large</TBadge>
          <TBadge size="xl">X-Large</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Rounding Options</h3>
          <TBadge rounding="full">Pill</TBadge>
          <TBadge rounding="lg">Large</TBadge>
          <TBadge rounding="md">Medium</TBadge>
          <TBadge rounding="sm">Small</TBadge>
          <TBadge rounding="none">None</TBadge>
          <TBadge rounding="default">Default</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Dismissible Badges</h3>
          <TBadge dismissible>Dismissible</TBadge>
          <TBadge variant="success" dismissible>Dismiss Me</TBadge>
          <TBadge variant="warning" outline dismissible>Close</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">With Icons</h3>
          <TBadge>
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </template>
            Verified
          </TBadge>
          <TBadge variant="error">
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </template>
            Alert
          </TBadge>
          <TBadge variant="info">
            42
            <template #suffix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
            </template>
          </TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Combined Options</h3>
          <TBadge variant="primary" outline rounding="full">Pill Outline</TBadge>
          <TBadge variant="success" tonal rounding="none">Tonal Square</TBadge>
          <TBadge variant="warning" rounding="lg" dismissible>Large Radius</TBadge>
        </div>
      </div>
    `})};var C,L,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    default: 'Primary Badge'
  }
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var O,W,A;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    default: 'Secondary Badge'
  }
}`,...(A=(W=s.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var I,X,N;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    default: 'Success Badge'
  }
}`,...(N=(X=r.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var k,G,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    default: 'Warning Badge'
  }
}`,...(_=(G=t.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var F,V,q;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    default: 'Error Badge'
  }
}`,...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var j,H,J;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    default: 'Info Badge'
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    default: 'Ghost Badge'
  }
}`,...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    outline: true,
    default: 'Outline Primary'
  }
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    outline: true,
    default: 'Outline Success'
  }
}`,...(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,te;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    tonal: true,
    default: 'Tonal Primary'
  }
}`,...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,de,oe;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    tonal: true,
    default: 'Tonal Success'
  }
}`,...(oe=(de=u.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var le,ge,ce;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    default: 'XS Badge'
  }
}`,...(ce=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:ce.source}}};var ue,me,pe;p.parameters={...p.parameters,docs:{...(ue=p.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    default: 'Small Badge'
  }
}`,...(pe=(me=p.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,Be,ve;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    size: 'md',
    default: 'Medium Badge'
  }
}`,...(ve=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:ve.source}}};var Te,we,xe;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    default: 'Large Badge'
  }
}`,...(xe=(we=B.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var he,be,Se;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    default: 'XL Badge'
  }
}`,...(Se=(be=v.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ye,ze,Pe;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    rounding: 'full',
    default: 'Pill Badge'
  }
}`,...(Pe=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var Me,Re,De;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    rounding: 'lg',
    default: 'Large Rounding'
  }
}`,...(De=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ce,Le,Ee;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    rounding: 'md',
    default: 'Medium Rounding'
  }
}`,...(Ee=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Oe,We,Ae;h.parameters={...h.parameters,docs:{...(Oe=h.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    rounding: 'sm',
    default: 'Small Rounding'
  }
}`,...(Ae=(We=h.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Ie,Xe,Ne;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    rounding: 'none',
    default: 'No Rounding'
  }
}`,...(Ne=(Xe=b.parameters)==null?void 0:Xe.docs)==null?void 0:Ne.source}}};var ke,Ge,_e;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    rounding: 'default',
    default: 'Default Rounding'
  }
}`,...(_e=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Fe,Ve,qe;y.parameters={...y.parameters,docs:{...(Fe=y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    default: 'Dismissible Badge'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dismissButton = canvas.getByRole('button', {
      name: 'Dismiss'
    });

    // Verify button is present
    await expect(dismissButton).toBeInTheDocument();

    // Click the dismiss button
    await userEvent.click(dismissButton);
  }
}`,...(qe=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var je,He,Je;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    default: 'Badge with Prefix'
  },
  render: args => ({
    components: {
      TBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadge v-bind="args">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
        </template>
        {{ args.default }}
      </TBadge>
    \`
  })
}`,...(Je=(He=z.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ke,Qe,Ue;P.parameters={...P.parameters,docs:{...(Ke=P.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    default: 'Badge with Suffix'
  },
  render: args => ({
    components: {
      TBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TBadge v-bind="args">
        {{ args.default }}
        <template #suffix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </template>
      </TBadge>
    \`
  })
}`,...(Ue=(Qe=P.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ye,Ze,$e;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TBadge
    },
    template: \`
      <div class="space-y-8">
        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Basic Badges</h3>
          <TBadge variant="primary">New</TBadge>
          <TBadge variant="success">Completed</TBadge>
          <TBadge variant="warning">Pending</TBadge>
          <TBadge variant="error">Failed</TBadge>
          <TBadge variant="info">Info</TBadge>
          <TBadge variant="secondary">Default</TBadge>
          <TBadge variant="ghost">Ghost</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Outline Badges</h3>
          <TBadge variant="primary" outline>Primary</TBadge>
          <TBadge variant="success" outline>Success</TBadge>
          <TBadge variant="warning" outline>Warning</TBadge>
          <TBadge variant="error" outline>Error</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Tonal Badges</h3>
          <TBadge variant="primary" tonal>Primary</TBadge>
          <TBadge variant="success" tonal>Success</TBadge>
          <TBadge variant="warning" tonal>Warning</TBadge>
          <TBadge variant="error" tonal>Error</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Sizes</h3>
          <TBadge size="xs">XS</TBadge>
          <TBadge size="sm">Small</TBadge>
          <TBadge size="md">Medium</TBadge>
          <TBadge size="lg">Large</TBadge>
          <TBadge size="xl">X-Large</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Rounding Options</h3>
          <TBadge rounding="full">Pill</TBadge>
          <TBadge rounding="lg">Large</TBadge>
          <TBadge rounding="md">Medium</TBadge>
          <TBadge rounding="sm">Small</TBadge>
          <TBadge rounding="none">None</TBadge>
          <TBadge rounding="default">Default</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Dismissible Badges</h3>
          <TBadge dismissible>Dismissible</TBadge>
          <TBadge variant="success" dismissible>Dismiss Me</TBadge>
          <TBadge variant="warning" outline dismissible>Close</TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">With Icons</h3>
          <TBadge>
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </template>
            Verified
          </TBadge>
          <TBadge variant="error">
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </template>
            Alert
          </TBadge>
          <TBadge variant="info">
            42
            <template #suffix>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5">
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
            </template>
          </TBadge>
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <h3 class="w-full text-lg font-semibold mb-2">Combined Options</h3>
          <TBadge variant="primary" outline rounding="full">Pill Outline</TBadge>
          <TBadge variant="success" tonal rounding="none">Tonal Square</TBadge>
          <TBadge variant="warning" rounding="lg" dismissible>Large Radius</TBadge>
        </div>
      </div>
    \`
  })
}`,...($e=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};const oa=["Primary","Secondary","Success","Warning","Error","Info","Ghost","OutlinePrimary","OutlineSuccess","TonalPrimary","TonalSuccess","ExtraSmall","Small","Medium","Large","ExtraLarge","RoundingFull","RoundingLarge","RoundingMedium","RoundingSmall","RoundingNone","RoundingDefault","Dismissible","WithPrefix","WithSuffix","Examples"];export{y as Dismissible,i as Error,M as Examples,v as ExtraLarge,m as ExtraSmall,o as Ghost,d as Info,B as Large,f as Medium,l as OutlinePrimary,g as OutlineSuccess,n as Primary,S as RoundingDefault,T as RoundingFull,w as RoundingLarge,x as RoundingMedium,b as RoundingNone,h as RoundingSmall,s as Secondary,p as Small,r as Success,c as TonalPrimary,u as TonalSuccess,t as Warning,z as WithPrefix,P as WithSuffix,oa as __namedExportsOrder,da as default};
