"use strict";(self.webpackChunkbizk=self.webpackChunkbizk||[]).push([[823],{26207:function(oe,I,t){t.r(I);var a=t(48305),j=t.n(a),P=t(50959),B=t(36737),k=t(54037),L=t(60904),g=t(11527),z=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];I.default=function(){var M=(0,P.useReducer)(function(b){return b+1},0),R=j()(M,2),W=R[1],A=(0,P.useState)(0),v=j()(A,2),N=v[0],T=v[1],E=[{title:"Name",dataIndex:"name",key:"name",ellipsis:!0,render:function(y){return(0,g.jsxs)("a",{onClick:function(){return T(function(S){return S+1})},children:[y,N]})}},{title:"Age",dataIndex:"age",key:"age",ellipsis:!0,width:200},{title:"Address",dataIndex:"address",key:"address",ellipsis:!0},{title:"Tags",key:"tags",dataIndex:"tags",width:200,ellipsis:!0,render:function(y){return(0,g.jsx)(g.Fragment,{children:y.map(function(f){var S=f.length>5?"geekblue":"green";return f==="loser"&&(S="volcano"),(0,g.jsx)(B.Z,{color:S,children:f.toUpperCase()},f)})})}},{title:"render",key:"option",draggable:!1,width:100,render:function(){return(0,g.jsx)("a",{onClick:function(){W(),alert("render")},children:"render"})}}],h=(0,L.u1)({columns:(0,P.useMemo)(function(){return E},[N])}),H=h.components,w=h.columns,_=h.tableWidth;return(0,g.jsx)(k.Z,{columns:w,components:H,dataSource:z,scroll:{x:_}})}},36737:function(oe,I,t){t.d(I,{Z:function(){return le}});var a=t(50959),j=t(54574),P=t(82187),B=t.n(P),k=t(2687),L=t(70986),g=t(20630),z=t(88099),M=t(63504),R=t(99978),W=t(85682),A=t(26900),v=t(82422);const N=e=>{const{paddingXXS:n,lineWidth:l,tagPaddingHorizontal:o,componentCls:r,calc:d}=e,s=d(o).sub(l).equal(),m=d(n).sub(l).equal();return{[r]:Object.assign(Object.assign({},(0,W.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,M.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:m,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:s}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},T=e=>{const{lineWidth:n,fontSizeIcon:l,calc:o}=e,r=e.fontSizeSM;return(0,A.TS)(e,{tagFontSize:r,tagLineHeight:(0,M.bf)(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(l).sub(o(n).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},E=e=>({defaultBg:new R.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var h=(0,v.I$)("Tag",e=>{const n=T(e);return N(n)},E),H=function(e,n){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l},_=a.forwardRef((e,n)=>{const{prefixCls:l,style:o,className:r,checked:d,onChange:s,onClick:m}=e,C=H(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:$,tag:u}=a.useContext(z.E_),U=F=>{s==null||s(!d),m==null||m(F)},O=$("tag",l),[p,K,Z]=h(O),c=B()(O,`${O}-checkable`,{[`${O}-checkable-checked`]:d},u==null?void 0:u.className,r,K,Z);return p(a.createElement("span",Object.assign({},C,{ref:n,style:Object.assign(Object.assign({},o),u==null?void 0:u.style),className:c,onClick:U})))}),b=t(76889);const y=e=>(0,b.Z)(e,(n,l)=>{let{textColor:o,lightBorderColor:r,lightColor:d,darkColor:s}=l;return{[`${e.componentCls}${e.componentCls}-${n}`]:{color:o,background:d,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var f=(0,v.bk)(["Tag","preset"],e=>{const n=T(e);return y(n)},E);function S(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const D=(e,n,l)=>{const o=S(l);return{[`${e.componentCls}${e.componentCls}-${n}`]:{color:e[`color${l}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var re=(0,v.bk)(["Tag","status"],e=>{const n=T(e);return[D(n,"success","Success"),D(n,"processing","Info"),D(n,"error","Error"),D(n,"warning","Warning")]},E),ne=function(e,n){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const te=(e,n)=>{const{prefixCls:l,className:o,rootClassName:r,style:d,children:s,icon:m,color:C,onClose:$,closeIcon:u,closable:U,bordered:O=!0}=e,p=ne(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:K,direction:Z,tag:c}=a.useContext(z.E_),[F,X]=a.useState(!0);a.useEffect(()=>{"visible"in p&&X(p.visible)},[p.visible]);const G=(0,k.o2)(C),Q=(0,k.yT)(C),V=G||Q,ae=Object.assign(Object.assign({backgroundColor:C&&!V?C:void 0},c==null?void 0:c.style),d),i=K("tag",l),[se,ce,ie]=h(i),de=B()(i,c==null?void 0:c.className,{[`${i}-${C}`]:V,[`${i}-has-color`]:C&&!V,[`${i}-hidden`]:!F,[`${i}-rtl`]:Z==="rtl",[`${i}-borderless`]:!O},o,r,ce,ie),Y=x=>{x.stopPropagation(),$==null||$(x),!x.defaultPrevented&&X(!1)},[,ue]=(0,L.Z)(U,u!=null?u:c==null?void 0:c.closeIcon,x=>x===null?a.createElement(j.Z,{className:`${i}-close-icon`,onClick:Y}):a.createElement("span",{className:`${i}-close-icon`,onClick:Y},x),null,!1),ge=typeof p.onClick=="function"||s&&s.type==="a",q=m||null,Ce=q?a.createElement(a.Fragment,null,q,s&&a.createElement("span",null,s)):s,ee=a.createElement("span",Object.assign({},p,{ref:n,className:de,style:ae}),Ce,ue,G&&a.createElement(f,{key:"preset",prefixCls:i}),Q&&a.createElement(re,{key:"status",prefixCls:i}));return se(ge?a.createElement(g.Z,{component:"Tag"},ee):ee)},J=a.forwardRef(te);J.CheckableTag=_;var le=J}}]);
