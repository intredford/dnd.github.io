import r from"./ContentSlot.ed5d80e7.js";import{l as s,C as u,D as f,K as l}from"./entry.4af23fc9.js";const m=s({name:"Markdown",extends:r,setup(t){const{parent:e}=l(),{between:n,default:a}=u(),o=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:o,between:n,parent:e}}});export{m as default};