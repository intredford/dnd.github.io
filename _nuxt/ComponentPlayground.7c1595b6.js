import{K as _,aq as b,J as a,d as m,Z as S,b as $,c as I,n as P,p as w,j as C,e as x,l as u,a6 as z,r as D,O as r}from"./entry.9ccc6e4c.js";import E from"./ComponentPlaygroundData.e1e324fc.js";import"./TabsHeader.c73ade15.js";import"./ComponentPlaygroundProps.5b5d314d.js";import"./ProseH4.e1ac1c84.js";import"./ProseCodeInline.ce568672.js";import"./Badge.167a176b.js";import"./ContentSlot.25a8f674.js";import"./ProseP.139470db.js";import"./ComponentPlaygroundSlots.vue.5ef2c0b9.js";import"./ComponentPlaygroundTokens.vue.93831af1.js";async function j(n){const e=_(n);{const{data:o}=await b(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>o.value)}}const q=n=>(w("data-v-7d261f72"),n=n(),C(),n),B=q(()=>x("div",{class:"ellipsis-item"},null,-1)),O=[B],R=m({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(n){const e=n,o=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),c=a(()=>((t=e)=>t.right)()),i=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,d,p;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(p=t==null?void 0:t.colors)==null?void 0:p[2]} 98.48%)`})()),{$pinceau:v}=S(e,void 0,{_6HG_top:o,_31J_insetInlineStart:s,_Cy1_insetInlineEnd:c,_RFz_zIndex:i,_U3d_maxWidth:f,_Rmg_height:g,_MhW_filter:y,_LPh_background:h});return(t,l)=>($(),I("div",{class:P(["ellipsis",[_(v)]])},O,2))}});const V=u(R,[["__scopeId","data-v-7d261f72"]]),W=m({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(n){const e=a(()=>z(n.component)),o=D({...n.props}),s=await j(n.component);return{as:e,formProps:o,componentData:s}},render(n){const e=Object.entries(this.$slots).reduce((o,[s,c])=>{if(s.startsWith("component-")){const i=s.replace("component-","");o[i]=c}return o},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(V,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(n.as,{...n.formProps,class:"component-playground-component"},{...e})]),r(E,{modelValue:n.formProps,componentData:n.componentData,"onUpdate:modelValue":o=>n.formProps=o})])}});const Z=u(W,[["__scopeId","data-v-9ca9b996"]]);export{Z as default};
