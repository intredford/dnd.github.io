import B from"./ProseTh.9a3a8dce.js";import C from"./ProseTr.e31ca8aa.js";import V from"./ProseThead.12e8687c.js";import g from"./ProseCodeInline.4e99bbd1.js";import b from"./ProseTd.2b9f77c2.js";import N from"./ProseTbody.aa8e232b.js";import R from"./ProseTable.01aff9fe.js";import{u as F}from"./asyncData.184dd75d.js";import{a as S,l as p,G as j,D as c,o as a,c as l,w as e,e as r,H as d,j as s,i as A,F as E,r as G,t as m}from"./entry.4af23fc9.js";/* empty css                    *//* empty css                    *//* empty css                       *//* empty css                            *//* empty css                    *//* empty css                       */const H=p({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${j(t.of)}`,{data:h}=await F(t.of,()=>$fetch(k),"$oSoCJtWFoC"),f=c(()=>h.value.props.filter(o=>{var n;return!((n=o.tags)!=null&&n.ignore.includes(o))})),w=c(()=>{var o;return t.required!==void 0?t.required:(o=f.value)==null?void 0:o.find(n=>n.required!==void 0)}),q=c(()=>{var o;return t.values!==void 0?t.values:(o=f.value)==null?void 0:o.find(n=>n.values)}),i=c(()=>{var o;return t.description!==void 0?t.description:(o=f.value)==null?void 0:o.find(n=>n.description)}),y=c(()=>{var o;return t.default!==void 0?t.default:(o=f.value)==null?void 0:o.find(n=>n.default)});return{meta:h,properties:f,showRequired:w,showValues:q,showDescription:i,showDefault:y}}});function I(t,k,h,f,w,q){var v,D,P;const i=B,y=C,o=V,n=g,_=b,T=N,$=R;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(a(),l($,{key:0},{default:e(()=>[r(o,null,{default:e(()=>[r(y,null,{default:e(()=>[r(i,null,{default:e(()=>[d("Prop")]),_:1}),r(i,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(a(),l(i,{key:0},{default:e(()=>[d(" Required ")]),_:1})):s("",!0),t.showDefault?(a(),l(i,{key:1},{default:e(()=>[d(" Default ")]),_:1})):s("",!0),t.showValues?(a(),l(i,{key:2},{default:e(()=>[d(" Values ")]),_:1})):s("",!0),t.showDescription?(a(),l(i,{key:3},{default:e(()=>[d(" Description ")]),_:1})):s("",!0)]),_:1})]),_:1}),r(T,null,{default:e(()=>[(a(!0),A(E,null,G(t.properties,u=>(a(),l(y,{key:u.name},{default:e(()=>[r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(a(),l(_,{key:0},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):s("",!0),t.showDefault?(a(),l(_,{key:1},{default:e(()=>[u.default?(a(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):s("",!0)]),_:2},1024)):s("",!0),t.showValues?(a(),l(_,{key:2},{default:e(()=>[u.values?(a(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(a(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):s("",!0),t.showDescription?(a(),l(_,{key:3},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.description),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):s("",!0)}const ne=S(H,[["render",I]]);export{ne as default};