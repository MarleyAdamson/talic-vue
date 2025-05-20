import{f as ze,w as r,u as Me,e as n}from"./index-B7dDGrsI.js";import{_ as V}from"./TInput-D4F_TQjo.js";import"./vue.esm-bundler-CJdtXRgK.js";const ke={title:"Components/TInput",component:V,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","date","number","password","search","tel","time"],description:"Controls the type of input"},variant:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"Controls the visual style of the input"},size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the input"},modelValue:{control:"text",description:"Current value of the input"},placeholder:{control:"text",description:"Placeholder text to display when the input is empty"},label:{control:"text",description:"Text label for the input"},showLabel:{control:"boolean",description:"Whether to display the label"},helpText:{control:"text",description:"Help text to display below the input"},errorMessage:{control:"text",description:"Error message to display below the input"},disabled:{control:"boolean",description:"Controls whether the input is disabled"},readonly:{control:"boolean",description:"Controls whether the input is readonly"},required:{control:"boolean",description:"Controls whether the input is required"},fullWidth:{control:"boolean",description:"Makes the input take the full width of its container"},ariaLabel:{control:"text",description:"Provides an accessible name when no label is available"},"update:modelValue":{action:"update:modelValue",description:"Event emitted when the input value changes"},prefix:{description:"Content to display as a prefix icon",control:"text"},suffix:{description:"Content to display as a suffix icon",control:"text"}},args:{type:"text",variant:"primary",size:"md",modelValue:"",placeholder:"Enter text...",label:"Label",showLabel:!0,disabled:!1,readonly:!1,required:!1,fullWidth:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},interactions:{disable:!1},docs:{description:{component:"An accessible input component that follows WCAG 2.1 AA standards. Supports various input types and provides multiple states and variants."}}},render:e=>({components:{TInput:V},setup(){const t=ze();return{args:e,onUpdateModelValue:t}},template:`
      <TInput
        v-bind="args"
        @update:modelValue="onUpdateModelValue"
      >
        <template v-if="args.prefix" #prefix>{{ args.prefix }}</template>
        <template v-if="args.suffix" #suffix>{{ args.suffix }}</template>
      </TInput>
    `})},s={args:{variant:"primary",modelValue:"",placeholder:"Primary input..."},play:async({canvasElement:e})=>{const a=r(e).getByPlaceholderText("Primary input...");await Me.type(a,"Hello, World!"),await n(a).toHaveValue("Hello, World!")}},o={args:{variant:"secondary",modelValue:"",placeholder:"Secondary input..."},play:async({canvasElement:e})=>{const a=r(e).getByPlaceholderText("Secondary input...");await Me.tab(),await n(a).toHaveFocus()}},l={args:{variant:"success",modelValue:"Success value",helpText:"This input has been validated successfully."},play:async({canvasElement:e})=>{const t=r(e);n(t.getByText("This input has been validated successfully.")).toBeInTheDocument()}},i={args:{variant:"warning",modelValue:"Warning value",helpText:"This input needs attention."}},c={args:{variant:"error",modelValue:"Error value",errorMessage:"This field has an error."},play:async({canvasElement:e})=>{const t=r(e),a=t.getByDisplayValue("Error value");n(t.getByText("This field has an error.")).toBeInTheDocument(),n(a).toHaveAttribute("aria-invalid","true")}},p={args:{variant:"info",modelValue:"Info value",helpText:"This is informational help text."}},u={args:{size:"sm",label:"Small Input",placeholder:"Small input..."}},d={args:{size:"md",label:"Medium Input",placeholder:"Medium input..."}},m={args:{size:"lg",label:"Large Input",placeholder:"Large input..."}},h={args:{type:"email",label:"Email Address",placeholder:"Enter your email..."}},y={args:{type:"password",label:"Password",placeholder:"Enter your password..."}},g={args:{type:"number",label:"Quantity",placeholder:"Enter quantity...",min:0,max:100,step:1}},v={args:{type:"date",label:"Select Date"}},b={args:{disabled:!0,label:"Disabled Input",modelValue:"Cannot edit this"},play:async({canvasElement:e})=>{const a=r(e).getByDisplayValue("Cannot edit this");n(a).toBeDisabled()}},f={args:{readonly:!0,label:"Readonly Input",modelValue:"Cannot edit this"},play:async({canvasElement:e})=>{const a=r(e).getByDisplayValue("Cannot edit this");n(a).toHaveAttribute("readonly")}},x={args:{required:!0,label:"Required Input",placeholder:"This field is required"},play:async({canvasElement:e})=>{const a=r(e).getByPlaceholderText("This field is required");n(a).toHaveAttribute("required"),n(a).toHaveAttribute("aria-required","true")}},T={args:{prefix:"🔍",placeholder:"Search...",label:"Search"}},S={args:{suffix:"✉️",placeholder:"Enter your email...",label:"Email",type:"email"}},w={args:{prefix:"🔍",suffix:"✓",placeholder:"Search and validate...",label:"Verified Search"}},E={args:{showLabel:!1,placeholder:"Input without label",ariaLabel:"Hidden label for accessibility"},play:async({canvasElement:e})=>{const a=r(e).getByPlaceholderText("Input without label");n(a).toHaveAttribute("aria-label","Hidden label for accessibility")}},I={args:{label:"Username",placeholder:"Enter username",helpText:"Your username must be 3-20 characters long"}};var B,H,P;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    modelValue: '',
    placeholder: 'Primary input...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Primary input...');

    // Test typing functionality
    await userEvent.type(input, 'Hello, World!');
    await expect(input).toHaveValue('Hello, World!');
  }
}`,...(P=(H=s.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var W,C,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    modelValue: '',
    placeholder: 'Secondary input...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Secondary input...');

    // Test focus state
    await userEvent.tab();
    await expect(input).toHaveFocus();
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var q,A,L;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    modelValue: 'Success value',
    helpText: 'This input has been validated successfully.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify help text is displayed
    expect(canvas.getByText('This input has been validated successfully.')).toBeInTheDocument();
  }
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,z,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    modelValue: 'Warning value',
    helpText: 'This input needs attention.'
  }
}`,...(R=(z=i.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var _,U,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    modelValue: 'Error value',
    errorMessage: 'This field has an error.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue('Error value');

    // Verify error message is displayed
    expect(canvas.getByText('This field has an error.')).toBeInTheDocument();
    // Check ARIA attributes for accessibility
    expect(input).toHaveAttribute('aria-invalid', 'true');
  }
}`,...(k=(U=c.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var F,N,Q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    modelValue: 'Info value',
    helpText: 'This is informational help text.'
  }
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var Y,G,O;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small input...'
  }
}`,...(O=(G=u.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var j,J,K;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium input...'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large input...'
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email...'
  }
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,se;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password...'
  }
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,le,ie;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: 'number',
    label: 'Quantity',
    placeholder: 'Enter quantity...',
    min: 0,
    max: 100,
    step: 1
  }
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,pe,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    type: 'date',
    label: 'Select Date'
  }
}`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,me,he;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Input',
    modelValue: 'Cannot edit this'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue('Cannot edit this');
    expect(input).toBeDisabled();
  }
}`,...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ye,ge,ve;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    readonly: true,
    label: 'Readonly Input',
    modelValue: 'Cannot edit this'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue('Cannot edit this');
    expect(input).toHaveAttribute('readonly');
  }
}`,...(ve=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,fe,xe;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required Input',
    placeholder: 'This field is required'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('This field is required');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-required', 'true');
  }
}`,...(xe=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Te,Se,we;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    prefix: '🔍',
    placeholder: 'Search...',
    label: 'Search'
  }
}`,...(we=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Ee,Ie,Ve;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    suffix: '✉️',
    placeholder: 'Enter your email...',
    label: 'Email',
    type: 'email'
  }
}`,...(Ve=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Be,He,Pe;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    prefix: '🔍',
    suffix: '✓',
    placeholder: 'Search and validate...',
    label: 'Verified Search'
  }
}`,...(Pe=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var We,Ce,De;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    placeholder: 'Input without label',
    ariaLabel: 'Hidden label for accessibility'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Input without label');
    expect(input).toHaveAttribute('aria-label', 'Hidden label for accessibility');
  }
}`,...(De=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var qe,Ae,Le;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helpText: 'Your username must be 3-20 characters long'
  }
}`,...(Le=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};const Fe=["Primary","Secondary","Success","Warning","Error","Info","Small","Medium","Large","Email","Password","Number","Date","Disabled","Readonly","Required","WithPrefixIcon","WithSuffixIcon","WithBothIcons","WithoutLabel","WithHelpText"];export{v as Date,b as Disabled,h as Email,c as Error,p as Info,m as Large,d as Medium,g as Number,y as Password,s as Primary,f as Readonly,x as Required,o as Secondary,u as Small,l as Success,i as Warning,w as WithBothIcons,I as WithHelpText,T as WithPrefixIcon,S as WithSuffixIcon,E as WithoutLabel,Fe as __namedExportsOrder,ke as default};
