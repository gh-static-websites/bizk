"use strict";(self.webpackChunkbizk=self.webpackChunkbizk||[]).push([[524],{41505:function(D,e,n){n.r(e);var m=n(84319),t=n(11527);e.default=function(){return(0,t.jsx)(m.a,{href:"https://bizk.qhan.wang/",children:"Click me!"})}},25410:function(D,e,n){n.r(e);var m=n(84319),t=n(11527);e.default=function(){return(0,t.jsx)(m.a,{onClick:function(){return console.log("Click!")},children:"Click me!"})}},88178:function(D,e,n){n.r(e);var m=n(84319),t=n(11527);e.default=function(){return(0,t.jsx)(m.a,{target:"_blank",href:"https://bizk.qhan.wang/",children:"Click me!"})}},34682:function(D,e,n){n.r(e);var m=n(84319),t=n(11527);e.default=function(){return(0,t.jsx)(m.a,{target:"_blank",to:{pathname:"/blank"},children:"Click me!"})}},84319:function(D,e,n){n.d(e,{a:function(){return T},d:function(){return Q}});var m=n(86378),t=n.n(m),O=n(28488),I=n.n(O),A=n(15155),R=n(99558),S=n(85366),z=n(32062),h=n(11527),B=["children","to","button"],W=function(r){var s=r.children,i=r.to,o=r.button,u=I()(r,B),g=i||{},v=g.pathname,c=g.search,E=g.query,a=o?(0,h.jsx)(R.ZP,t()(t()({},o),{},{disabled:u==null?void 0:u.disabled,children:s})):s;return i&&!u.disabled?(0,h.jsx)(A.rU,t()(t()({to:{pathname:v,search:[c,z.Z.stringify(E||{})].filter(function(l){return l}).join("&")}},u),{},{children:a})):(0,h.jsxs)(S.Z.Link,t()(t()({},u),{},{children:[" ",a]}))},T=W,U=n(90967),N=n.n(U),P=n(50959),k=n(84506),b=n(29323),K=n(78954),Z=n(24047),F=n.n(Z),$=n(45924),p=n(75485),G=["style","className","children"],L="bizkui";function H(f){var r,s,i=f["data-row-key"],o=(0,b.nB)({id:i}),u=o.attributes,g=o.listeners,v=o.setNodeRef,c=o.transform,E=o.transition,a=o.isDragging,l={transition:E,"--translate-x":"".concat((r=c==null?void 0:c.x)!==null&&r!==void 0?r:0,"px"),"--translate-y":"".concat((s=c==null?void 0:c.y)!==null&&s!==void 0?s:0,"px")},y=f.style,d=f.className,x=f.children,j=I()(f,G);return(0,h.jsx)("tr",t()(t()(t()({id:i,ref:v},u),{},{className:(0,$.Z)(d,"".concat(L,"-dragItem"),F()({},"".concat(L,"-dragOverlay"),a)),style:t()(t()({},y),l)},j),{},{"data-cypress":"draggable-item",children:P.Children.map(x,function(C){return C.key==="sort"?P.cloneElement(C,{children:(0,h.jsx)(p.Z,{}),additionalProps:t()(t()({},g),{},{id:"draggable-handle","data-cypress":"draggable-handle"})}):C})}))}var J="bizkui";function Q(f){var r=f.children,s=f.onChange,i=(0,P.useMemo)(function(){var a=r==null?void 0:r.props,l=(a==null?void 0:a.dataSource)||(a==null?void 0:a.value),y=a==null?void 0:a.columns,d=(l==null?void 0:l.length)>1;return{dataSource:l,columns:d?[{key:"sort",width:32,editable:!1}].concat(N()(y)):y,items:(l==null?void 0:l.map(function(x){return x[a==null?void 0:a.rowKey]}))||[],rowKey:a==null?void 0:a.rowKey,sortable:d}},[r==null?void 0:r.props]),o=i.dataSource,u=i.columns,g=i.items,v=i.rowKey,c=i.sortable,E=function(l){if(o!=null&&o.length){var y=l.active,d=l.over;if(y[v]!==(d==null?void 0:d[v])){var x=o.findIndex(function(M){return M[v]===y[v]}),j=o.findIndex(function(M){return M[v]===(d==null?void 0:d[v])}),C=(0,b.Rp)(o,x,j);s==null||s(C)}}};return(0,h.jsx)(k.LB,{modifiers:[K.DL,K.F4],onDragEnd:E,children:(0,h.jsx)(b.Fo,{items:g,strategy:b.qw,children:P.cloneElement(r,t()({columns:u,className:"".concat(J,"-dnd")},c?{components:{body:{row:H}}}:{}))})})}}}]);
