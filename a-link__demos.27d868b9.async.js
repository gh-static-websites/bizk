"use strict";(self.webpackChunkbizk=self.webpackChunkbizk||[]).push([[524],{14664:function(C,i,n){n.r(i);var c=n(78292),t=n(11527);i.default=function(){return(0,t.jsx)(c.a,{href:"https://bizk.qhan.wang/",children:"Click me!"})}},31353:function(C,i,n){n.r(i);var c=n(78292),t=n(11527);i.default=function(){return(0,t.jsx)(c.a,{onClick:function(){return console.log("Click!")},children:"Click me!"})}},13727:function(C,i,n){n.r(i);var c=n(78292),t=n(11527);i.default=function(){return(0,t.jsx)(c.a,{target:"_blank",href:"https://bizk.qhan.wang/",children:"Click me!"})}},21911:function(C,i,n){n.r(i);var c=n(78292),t=n(11527);i.default=function(){return(0,t.jsx)(c.a,{target:"_blank",to:{pathname:"/blank"},children:"Click me!"})}},78292:function(C,i,n){n.d(i,{a:function(){return T},d:function(){return Z}});var c=n(26068),t=n.n(c),x=n(67825),O=n.n(x),R=n(47462),b=n(26820),K=n(83863),L=n(95430),m=n(11527),I=["children","to","button"],B=function(e){var s=e.children,d=e.to,r=e.button,u=O()(e,I),f=d||{},v=f.pathname,y=f.search,g=f.query,o=r?(0,m.jsx)(b.ZP,t()(t()({},r),{},{disabled:u==null?void 0:u.disabled,children:s})):s;return d&&!u.disabled?(0,m.jsx)(R.rU,t()(t()({to:{pathname:v,search:[y,L.Z.stringify(g||{})].filter(function(a){return a}).join("&")}},u),{},{children:o})):(0,m.jsxs)(K.Z.Link,t()(t()({},u),{},{children:[" ",o]}))},T=B,W=n(15558),z=n.n(W),D=n(50959),S=n(85264),j=n(6472),A=n(88102),U=n(72496),k=n(47581),p=["children"],N=function(E){var e=E.children,s=O()(E,p),d=s["data-row-key"],r=(0,j.nB)({id:d}),u=r.attributes,f=r.listeners,v=r.setNodeRef,y=r.setActivatorNodeRef,g=r.transform,o=r.transition,a=r.isDragging,h=t()(t()({},s.style),{},{transform:k.ux.Transform.toString(g&&t()(t()({},g),{},{scaleY:1})),transition:o},a?{position:"relative",zIndex:9999}:{});return(0,m.jsx)("tr",t()(t()(t()({},s),{},{id:d,ref:v,style:h},u),{},{children:D.Children.map(e,function(l){return l.key==="sort"?D.cloneElement(l,{children:(0,m.jsx)(U.Z,{}),additionalProps:t()(t()({},f),{},{ref:y,style:{touchAction:"none",cursor:"move"}})}):l})}))};function Z(E){var e=E.children,s=E.onChange,d=(0,D.useMemo)(function(){var o=e==null?void 0:e.props,a=(o==null?void 0:o.dataSource)||(o==null?void 0:o.value),h=o==null?void 0:o.columns,l=(a==null?void 0:a.length)>1;return{dataSource:a,columns:l?[{key:"sort",width:32,editable:!1}].concat(z()(h)):h,items:(a==null?void 0:a.map(function(P){return P[o==null?void 0:o.rowKey]}))||[],rowKey:o==null?void 0:o.rowKey,sortable:l}},[e==null?void 0:e.props]),r=d.dataSource,u=d.columns,f=d.items,v=d.rowKey,y=d.sortable,g=function(a){if(r!=null&&r.length){var h=a.active,l=a.over;if(h[v]!==(l==null?void 0:l[v])){var P=r.findIndex(function(M){return M[v]===h[v]}),F=r.findIndex(function(M){return M[v]===(l==null?void 0:l[v])}),Y=(0,j.Rp)(r,P,F);s==null||s(Y)}}};return(0,m.jsx)(S.LB,{modifiers:[A.DL,A.F4],onDragEnd:g,children:(0,m.jsx)(j.Fo,{items:f,strategy:j.qw,children:D.cloneElement(e,t()({columns:u},y?{components:{body:{row:N}}}:{}))})})}}}]);
