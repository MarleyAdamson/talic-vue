import{r as re}from"./vue.esm-bundler-CJdtXRgK.js";import{T as h}from"./TInputCalendar-CSzsCene.js";import"./TInput-D4F_TQjo.js";import"./TPopover-U4-3EIWv.js";import"./TCard-iiimh3rz.js";import"./TButton-DKkzQOAf.js";const ie={title:"Components/TInputCalendar",component:h,tags:["autodocs"],argTypes:{modelValue:{control:"date",description:"Selected date value"},variant:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"Controls the visual style of the input"},size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the input"},placeholder:{control:"text",description:"Placeholder text to display when no date is selected"},label:{control:"text",description:"Text label for the input"},weekdayStart:{control:"select",options:["monday","sunday","saturday"],description:"Day of the week to start the calendar on"},displayFormat:{control:"select",options:["yyyy-MM-dd","MM/dd/yyyy","dd/MM/yyyy","MMM dd, yyyy"],description:"Format to display the date in the input"},helpText:{control:"text",description:"Help text to display below the input"},errorMessage:{control:"text",description:"Error message to display below the input"},disabled:{control:"boolean",description:"Controls whether the input is disabled"},required:{control:"boolean",description:"Controls whether the input is required"},fullWidth:{control:"boolean",description:"Makes the input take the full width of its container"},minDate:{control:"date",description:"Minimum selectable date"},maxDate:{control:"date",description:"Maximum selectable date"},disabledDates:{control:"object",description:"Array of dates that cannot be selected"},calendarAriaLabel:{control:"text",description:"Accessible label for the calendar popover"}},args:{variant:"primary",size:"md",modelValue:void 0,placeholder:"Select date...",label:"Date",weekdayStart:"monday",displayFormat:"yyyy-MM-dd",disabled:!1,required:!1,fullWidth:!0},parameters:{interactions:{disable:!1},a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},docs:{description:{component:"An accessible date picker component that combines TInput and TPopover to allow users to select dates from a calendar interface. Follows WCAG 2.1 AA accessibility standards and supports keyboard navigation and touch interactions."}}},render:u=>({components:{TInputCalendar:h},setup(){const g=re(u.modelValue||null);return{args:u,date:g,onChange:y=>{g.value=y,console.log("Date changed:",y)}}},template:`
      <div style="padding: 2rem; max-width: 500px;">
        <TInputCalendar
          v-bind="args"
          v-model="date"
          @change="onChange"
        />
      </div>
    `})},e={args:{}},a={args:{modelValue:new Date("2023-05-15")}},r={args:{displayFormat:"MM/dd/yyyy",modelValue:new Date("2023-05-15")}},t={args:{weekdayStart:"sunday"}},s={args:{variant:"error",errorMessage:"Please select a valid date"}},o={args:{variant:"success",modelValue:new Date,helpText:"Date successfully selected"}},n={args:{disabled:!0,modelValue:new Date}},c={args:{minDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),maxDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},d={args:{size:"sm"}},l={args:{size:"lg"}},i={args:{variant:"secondary"}},p={args:{variant:"warning",helpText:"Please review this date carefully"}},m={args:{variant:"info",helpText:"Select your preferred date"}};var D,w,f;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {}
}`,...(f=(w=e.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var S,b,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: new Date('2023-05-15')
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var M,x,T;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    displayFormat: 'MM/dd/yyyy',
    modelValue: new Date('2023-05-15')
  }
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var F,C,k;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    weekdayStart: 'sunday'
  }
}`,...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var V,W,P;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    errorMessage: 'Please select a valid date'
  }
}`,...(P=(W=s.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var z,A,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    modelValue: new Date(),
    helpText: 'Date successfully selected'
  }
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var E,L,Y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    modelValue: new Date()
  }
}`,...(Y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var q,R,U;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    // First day of current month
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) // Last day of current month
  }
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var _,j,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(G=(j=d.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,O,B;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(B=(O=l.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var J,K,N;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(N=(K=i.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,X,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    helpText: 'Please review this date carefully'
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    helpText: 'Select your preferred date'
  }
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const pe=["Default","WithPreselectedDate","USDateFormat","WeekStartingSunday","WithError","Success","Disabled","DateRange","Small","Large","Secondary","Warning","Info"];export{c as DateRange,e as Default,n as Disabled,m as Info,l as Large,i as Secondary,d as Small,o as Success,r as USDateFormat,p as Warning,t as WeekStartingSunday,s as WithError,a as WithPreselectedDate,pe as __namedExportsOrder,ie as default};
