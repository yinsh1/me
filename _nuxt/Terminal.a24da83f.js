import{u as m}from"./index.b94807d4.js";import{d as v,r as h,I as f,b as s,c as o,M as i,f as p,e,F as y,Z as k,p as C,i as b,t as g,k as x}from"./entry.295c4316.js";const c=t=>(C("data-v-fb462725"),t=t(),b(),t),I={key:0,class:"copied"},S=c(()=>e("div",{class:"scrim"},null,-1)),w=c(()=>e("div",{class:"content"}," Copied! ",-1)),B=[S,w],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=c(()=>e("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),n=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",I,B)):p("",!0),T,e("div",F,[(s(!0),o(y,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,e("span",V,g(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}});const L=x(q,[["__scopeId","data-v-fb462725"]]);export{L as default};
