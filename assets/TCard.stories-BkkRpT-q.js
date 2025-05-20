import{w as v,e as t}from"./index-B7dDGrsI.js";import{_ as r}from"./TCard-iiimh3rz.js";import"./vue.esm-bundler-CJdtXRgK.js";const Z={title:"Components/TCard",component:r,tags:["autodocs"],argTypes:{elevation:{control:"select",options:["xs","sm","md","lg","xl","none"],description:"Controls the shadow elevation of the card"},grayFooter:{control:"boolean",description:"Whether to show a gray footer background"},grayBody:{control:"boolean",description:"Whether to show a gray body background"},edgeToEdgeOnMobile:{control:"boolean",description:"Whether to remove padding on mobile devices"},well:{control:"boolean",description:"Whether the card is a well (inset) style"},rounded:{control:"select",options:[!0,!1,"none","sm","md","lg","xl"],description:"Controls the border radius of the card"},class:{control:"text",description:"Additional CSS classes to apply"},header:{description:"Content to display in the header slot",control:"text"},default:{description:"Content to display in the main content slot",control:"text"},footer:{description:"Content to display in the footer slot",control:"text"}},args:{elevation:"md",grayFooter:!1,grayBody:!1,edgeToEdgeOnMobile:!1,well:!1,rounded:!0,default:"This is the main content of the card."},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},interactions:{disable:!1},docs:{description:{component:"A versatile card component for presenting data with optional header and footer"}}},render:a=>({components:{TCard:r},setup(){return{args:a}},template:`
      <TCard v-bind="args">
        <template v-if="args.header" #header>{{ args.header }}</template>
        {{ args.default }}
        <template v-if="args.footer" #footer>{{ args.footer }}</template>
      </TCard>
    `})},d={args:{default:"This is a basic card with default settings."},play:async({canvasElement:a})=>{const e=v(a);await t(e.getByText("This is a basic card with default settings.")).toBeTruthy()}},n={args:{header:"Card Header",default:"This card has a header section."},play:async({canvasElement:a})=>{const e=v(a);await t(e.getByText("Card Header")).toBeTruthy(),await t(e.getByText("This card has a header section.")).toBeTruthy()}},s={args:{default:"This card has a footer section.",footer:"Card Footer"},play:async({canvasElement:a})=>{const e=v(a);await t(e.getByText("This card has a footer section.")).toBeTruthy(),await t(e.getByText("Card Footer")).toBeTruthy()}},o={args:{header:"Card Header",default:"This card has both header and footer sections.",footer:"Card Footer"},play:async({canvasElement:a})=>{const e=v(a);await t(e.getByText("Card Header")).toBeTruthy(),await t(e.getByText("This card has both header and footer sections.")).toBeTruthy(),await t(e.getByText("Card Footer")).toBeTruthy()}},i={args:{default:"This card has a gray footer background.",footer:"Gray Footer",grayFooter:!0}},l={args:{header:"Card Header",default:"This card has a gray body background.",footer:"Card Footer",grayBody:!0}},c={args:{default:'This card uses the "well" style with an inset appearance.',well:!0}},m={render:()=>({components:{TCard:r},template:`
      <div class="p-4 bg-gray-100">
        <div class="flex flex-col items-center text-center mb-6">
          <div class="font-medium mb-2">Resize browser window to see the effect</div>
          <div class="text-sm text-gray-600">On small screens, the card content extends to the edges</div>
        </div>

        <div class="mb-8">
          <div class="font-medium mb-2">Edge-to-Edge Card:</div>
          <TCard edgeToEdgeOnMobile>
            <template #header>Edge-to-Edge on Mobile</template>
            <div class="bg-blue-100 p-4 rounded mb-4">
              <p>This content has no side padding on mobile screens.</p>
              <p>On desktop, padding is restored to normal.</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <p>Notice how this content touches the edges on mobile.</p>
            </div>
            <template #footer>Card Footer</template>
          </TCard>
        </div>

        <div>
          <div class="font-medium mb-2">Standard Card (for comparison):</div>
          <TCard>
            <template #header>Standard Card</template>
            <div class="bg-blue-100 p-4 rounded mb-4">
              <p>This content has consistent padding on all screen sizes.</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <p>Content always maintains the same distance from card edges.</p>
            </div>
            <template #footer>Card Footer</template>
          </TCard>
        </div>
      </div>
    `})},p={render:()=>({components:{TCard:r},template:`
      <div class="space-y-4">
        <TCard rounded="none" class="mb-4">
          <template #header>No Rounded Corners</template>
          <p>This card has squared corners (rounded="none" or rounded={false})</p>
        </TCard>

        <TCard rounded="sm" class="mb-4">
          <template #header>Small Rounded Corners</template>
          <p>This card has small rounded corners (rounded="sm")</p>
        </TCard>

        <TCard rounded="md" class="mb-4">
          <template #header>Medium Rounded Corners</template>
          <p>This card has medium rounded corners (rounded="md")</p>
        </TCard>

        <TCard rounded="lg" class="mb-4">
          <template #header>Large Rounded Corners (Default)</template>
          <p>This card has large rounded corners (rounded="lg" or rounded={true})</p>
        </TCard>

        <TCard rounded="xl" class="mb-4">
          <template #header>Extra Large Rounded Corners</template>
          <p>This card has extra large rounded corners (rounded="xl")</p>
        </TCard>
      </div>
    `})},h={render:()=>({components:{TCard:r},template:`
      <div class="space-y-4">
        <TCard elevation="xs" class="mb-4">
          <template #header>XS Elevation</template>
          Card with extra small shadow
        </TCard>

        <TCard elevation="sm" class="mb-4">
          <template #header>SM Elevation</template>
          Card with small shadow
        </TCard>

        <TCard elevation="md" class="mb-4">
          <template #header>MD Elevation (Default)</template>
          Card with medium shadow
        </TCard>

        <TCard elevation="lg" class="mb-4">
          <template #header>LG Elevation</template>
          Card with large shadow
        </TCard>

        <TCard elevation="xl" class="mb-4">
          <template #header>XL Elevation</template>
          Card with extra large shadow
        </TCard>

        <TCard elevation="none" class="mb-4">
          <template #header>No Elevation</template>
          Card with no shadow
        </TCard>
      </div>
    `})},u={render:()=>({components:{TCard:r},template:`
      <div class="space-y-8 w-full max-w-screen-xl mx-auto">
        <div>
          <div class="text-center mb-2 font-medium">Narrow Card (max-w-xs: 320px)</div>
          <TCard class="max-w-xs mx-auto">
            <template #header>Narrow Card</template>
            <div class="text-center">This card has a max-width of xs (320px)</div>
          </TCard>
        </div>

        <div>
          <div class="text-center mb-2 font-medium">Medium Card (max-w-md: 448px)</div>
          <TCard class="max-w-md mx-auto">
            <template #header>Medium Card</template>
            <div class="text-center">This card has a max-width of md (448px)</div>
          </TCard>
        </div>

        <div>
          <div class="text-center mb-2 font-medium">Wide Card (max-w-2xl: 672px)</div>
          <TCard class="max-w-2xl mx-auto">
            <template #header>Wide Card</template>
            <div class="text-center">This card has a max-width of 2xl (672px)</div>
          </TCard>
        </div>

        <div class="w-full h-8 bg-gray-200 mt-4 flex">
          <div class="h-full bg-blue-500 w-[320px]"></div>
          <div class="h-full bg-green-500 w-[128px]"></div>
          <div class="h-full bg-red-500 w-[224px]"></div>
        </div>
        <div class="flex text-xs justify-between max-w-2xl mx-auto">
          <div>0px</div>
          <div>320px (xs)</div>
          <div>448px (md)</div>
          <div>672px (2xl)</div>
        </div>
      </div>
    `})};var x,g,T;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    default: 'This is a basic card with default settings.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This is a basic card with default settings.')).toBeTruthy();
  }
}`,...(T=(g=d.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var C,f,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    header: 'Card Header',
    default: 'This card has a header section.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Card Header')).toBeTruthy();
    await expect(canvas.getByText('This card has a header section.')).toBeTruthy();
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,y,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    default: 'This card has a footer section.',
    footer: 'Card Footer'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This card has a footer section.')).toBeTruthy();
    await expect(canvas.getByText('Card Footer')).toBeTruthy();
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var E,F,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    header: 'Card Header',
    default: 'This card has both header and footer sections.',
    footer: 'Card Footer'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Card Header')).toBeTruthy();
    await expect(canvas.getByText('This card has both header and footer sections.')).toBeTruthy();
    await expect(canvas.getByText('Card Footer')).toBeTruthy();
  }
}`,...(S=(F=o.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var W,M,H;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    default: 'This card has a gray footer background.',
    footer: 'Gray Footer',
    grayFooter: true
  }
}`,...(H=(M=i.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var R,O,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    header: 'Card Header',
    default: 'This card has a gray body background.',
    footer: 'Card Footer',
    grayBody: true
  }
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var N,k,G;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    default: 'This card uses the "well" style with an inset appearance.',
    well: true
  }
}`,...(G=(k=c.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var D,_,z;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TCard
    },
    template: \`
      <div class="p-4 bg-gray-100">
        <div class="flex flex-col items-center text-center mb-6">
          <div class="font-medium mb-2">Resize browser window to see the effect</div>
          <div class="text-sm text-gray-600">On small screens, the card content extends to the edges</div>
        </div>

        <div class="mb-8">
          <div class="font-medium mb-2">Edge-to-Edge Card:</div>
          <TCard edgeToEdgeOnMobile>
            <template #header>Edge-to-Edge on Mobile</template>
            <div class="bg-blue-100 p-4 rounded mb-4">
              <p>This content has no side padding on mobile screens.</p>
              <p>On desktop, padding is restored to normal.</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <p>Notice how this content touches the edges on mobile.</p>
            </div>
            <template #footer>Card Footer</template>
          </TCard>
        </div>

        <div>
          <div class="font-medium mb-2">Standard Card (for comparison):</div>
          <TCard>
            <template #header>Standard Card</template>
            <div class="bg-blue-100 p-4 rounded mb-4">
              <p>This content has consistent padding on all screen sizes.</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <p>Content always maintains the same distance from card edges.</p>
            </div>
            <template #footer>Card Footer</template>
          </TCard>
        </div>
      </div>
    \`
  })
}`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var A,X,j;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TCard
    },
    template: \`
      <div class="space-y-4">
        <TCard rounded="none" class="mb-4">
          <template #header>No Rounded Corners</template>
          <p>This card has squared corners (rounded="none" or rounded={false})</p>
        </TCard>

        <TCard rounded="sm" class="mb-4">
          <template #header>Small Rounded Corners</template>
          <p>This card has small rounded corners (rounded="sm")</p>
        </TCard>

        <TCard rounded="md" class="mb-4">
          <template #header>Medium Rounded Corners</template>
          <p>This card has medium rounded corners (rounded="md")</p>
        </TCard>

        <TCard rounded="lg" class="mb-4">
          <template #header>Large Rounded Corners (Default)</template>
          <p>This card has large rounded corners (rounded="lg" or rounded={true})</p>
        </TCard>

        <TCard rounded="xl" class="mb-4">
          <template #header>Extra Large Rounded Corners</template>
          <p>This card has extra large rounded corners (rounded="xl")</p>
        </TCard>
      </div>
    \`
  })
}`,...(j=(X=p.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var q,I,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TCard
    },
    template: \`
      <div class="space-y-4">
        <TCard elevation="xs" class="mb-4">
          <template #header>XS Elevation</template>
          Card with extra small shadow
        </TCard>

        <TCard elevation="sm" class="mb-4">
          <template #header>SM Elevation</template>
          Card with small shadow
        </TCard>

        <TCard elevation="md" class="mb-4">
          <template #header>MD Elevation (Default)</template>
          Card with medium shadow
        </TCard>

        <TCard elevation="lg" class="mb-4">
          <template #header>LG Elevation</template>
          Card with large shadow
        </TCard>

        <TCard elevation="xl" class="mb-4">
          <template #header>XL Elevation</template>
          Card with extra large shadow
        </TCard>

        <TCard elevation="none" class="mb-4">
          <template #header>No Elevation</template>
          Card with no shadow
        </TCard>
      </div>
    \`
  })
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,P,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TCard
    },
    template: \`
      <div class="space-y-8 w-full max-w-screen-xl mx-auto">
        <div>
          <div class="text-center mb-2 font-medium">Narrow Card (max-w-xs: 320px)</div>
          <TCard class="max-w-xs mx-auto">
            <template #header>Narrow Card</template>
            <div class="text-center">This card has a max-width of xs (320px)</div>
          </TCard>
        </div>

        <div>
          <div class="text-center mb-2 font-medium">Medium Card (max-w-md: 448px)</div>
          <TCard class="max-w-md mx-auto">
            <template #header>Medium Card</template>
            <div class="text-center">This card has a max-width of md (448px)</div>
          </TCard>
        </div>

        <div>
          <div class="text-center mb-2 font-medium">Wide Card (max-w-2xl: 672px)</div>
          <TCard class="max-w-2xl mx-auto">
            <template #header>Wide Card</template>
            <div class="text-center">This card has a max-width of 2xl (672px)</div>
          </TCard>
        </div>

        <div class="w-full h-8 bg-gray-200 mt-4 flex">
          <div class="h-full bg-blue-500 w-[320px]"></div>
          <div class="h-full bg-green-500 w-[128px]"></div>
          <div class="h-full bg-red-500 w-[224px]"></div>
        </div>
        <div class="flex text-xs justify-between max-w-2xl mx-auto">
          <div>0px</div>
          <div>320px (xs)</div>
          <div>448px (md)</div>
          <div>672px (2xl)</div>
        </div>
      </div>
    \`
  })
}`,...(Q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const $=["Basic","WithHeader","WithFooter","WithHeaderAndFooter","WithGrayFooter","WithGrayBody","Well","EdgeToEdgeOnMobile","BorderRadiusOptions","ElevationLevels","CustomWidth"];export{d as Basic,p as BorderRadiusOptions,u as CustomWidth,m as EdgeToEdgeOnMobile,h as ElevationLevels,c as Well,s as WithFooter,l as WithGrayBody,i as WithGrayFooter,n as WithHeader,o as WithHeaderAndFooter,$ as __namedExportsOrder,Z as default};
