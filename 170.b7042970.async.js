"use strict";(self.webpackChunkbizk=self.webpackChunkbizk||[]).push([[170],{82170:function(xt,Te,m){m.d(Te,{NH:function(){return ke},g2:function(){return vt},u1:function(){return zt}});var je=m(52510),re=m.n(je),Ae=m(57213),l=m.n(Ae),Ne=m(93525),ae=m.n(Ne),Pe=m(25359),ee=m.n(Pe),$e=m(49811),fe=m.n($e),Ie=m(54306),$=m.n(Ie),Le=m(12342),te=m.n(Le),u=m(50959);function We(e,t){var n=(0,u.useState)(!1),r=$()(n,2),i=r[0],a=r[1],s=(0,u.useState)(),d=$()(s,2),y=d[0],N=d[1],C=(0,u.useMemo)(function(){return t||{manual:!1}},[t]),p=C.manual,c=C.onError,f=C.onSuccess,R=(0,u.useCallback)(fe()(ee()().mark(function S(){var v,x,I,D,L=arguments;return ee()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:for(a(!0),v=L.length,x=new Array(v),I=0;I<v;I++)x[I]=L[I];return b.prev=2,b.next=5,e.apply(void 0,x);case 5:return D=b.sent,N(D),f==null||f(D,x),a(!1),b.abrupt("return",D);case 12:throw b.prev=12,b.t0=b.catch(2),c==null||c(b.t0,x),a(!1),b.t0;case 17:case"end":return b.stop()}},S,null,[[2,12]])})),[e,t]);return(0,u.useEffect)(function(){p||R.apply(void 0,ae()([]))},[p]),{loading:i,data:y,run:R}}var A=m(11527),Me=["request","adapterParams","batchParams","disabledRow","authKey","rowKey","pagination"],Ke=["currentPage","pageSize"],De={excludes:"excludes",includes:"includes"};function ke(e){var t=e.request,n=e.adapterParams,r=e.batchParams,i=r===void 0?De:r,a=i.excludes,s=i.includes,d=e.disabledRow,y=e.authKey,N=y===void 0?"":y,C=e.rowKey,p=e.pagination,c=p===void 0?{}:p,f=te()(e,Me),R=(0,u.useState)(),S=$()(R,2),v=S[0],x=S[1],I=(0,u.useState)([]),D=$()(I,2),L=D[0],H=D[1],b=(0,u.useState)([]),k=$()(b,2),W=k[0],J=k[1],ie=(0,u.useState)([]),_=$()(ie,2),E=_[0],O=_[1],T=(0,u.useState)(),M=$()(T,2),X=M[0],me=M[1],le=We(function(){var g=fe()(ee()().mark(function z(h){var K,B,j,F,V,ge;return ee()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,t(h,N);case 2:if(K=q.sent,B=K.success,j=K.data,F=j.wholeOperationNum,V=j.items,ge=j.totalNum,!B){q.next=10;break}return q.abrupt("return",{selectableTotal:F!=null?F:ge,total:ge,data:V,success:!0});case 10:return q.abrupt("return",{selectableTotal:0,total:0,data:[],success:!1});case 11:case"end":return q.stop()}},z)}));return function(z){return g.apply(this,arguments)}}(),{manual:!0,onSuccess:function(z,h){var K=z.data;if(K.length){var B=K.map(function(F){return!(d!=null&&d(F))&&C?F[C]:void 0}).filter(function(F){return F&&!L.includes(F)});if(B.length){var j=[].concat(ae()(L),ae()(B));H(j),v==="all"&&O(j.filter(function(F){return!W.includes(F)}))}}}}),ue=le.run,de=le.data,ne=de===void 0?{}:de,ce=ne.selectableTotal,w=ce===void 0?0:ce,U=ne.total,P=U===void 0?0:U,o=(0,u.useMemo)(function(){return{type:v,selectableTotal:w,selectedRowKeys:E,selected:!!(v==="all"&&w||E!=null&&E.length),selectedTotal:v==="all"?(w!=null?w:P)-((W==null?void 0:W.length)||0):(E==null?void 0:E.length)||0}},[v,w,E,P,W]),Z=function(z){O(z),v==="all"?J(L.filter(function(h){return!z.includes(h)})):W.length&&J([])},Q=function(){x(void 0),J([]),O([])},Y=(0,u.useCallback)(function(){var g=v==="all",z=X||{},h=z.currentPage,K=z.pageSize,B=te()(z,Ke),j=l()(l()({selectedTotal:o.selectedTotal,type:g?"1":"0"},g?re()({},a,W):re()({},s,E)),{},{condition:B});return j},[v,a,s,W,E,X]);return{selectedInfo:o,resetSelection:Q,takeQueryParams:Y,options:l()({rowKey:C,request:function(){var g=fe()(ee()().mark(function h(K,B){var j;return ee()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return j=(n==null?void 0:n(K,B))||K,me(j),V.next=4,ue(j);case 4:return V.abrupt("return",V.sent);case 5:case"end":return V.stop()}},h)}));function z(h,K){return g.apply(this,arguments)}return z}(),search:{labelWidth:70},onSubmit:Q,pagination:c?l()({pageSizeOptions:[10,20,30,50],defaultPageSize:10,showSizeChanger:!0,showQuickJumper:!0,size:"default",showTotal:function(z){return"\u5171\u6709 ".concat(z," \u6761")}},c):!1,rowSelection:{columnWidth:48,selectedRowKeys:E,onChange:Z,preserveSelectedRowKeys:!0,selections:[{key:"all",text:"\u5168\u90E8",onSelect:function(){x("all"),J([]),O(L)}},{key:"current",text:"\u5F53\u524D\u9875",onSelect:function(z){x("current"),J([]),O(z)}}],getCheckboxProps:function(z){return{disabled:!!(d!=null&&d(z))}},alwaysShowAlert:v==="all"&&w||(E==null?void 0:E.length)},tableAlertRender:function(){return"\u5DF2\u9009\u62E9 ".concat(o.selectedTotal," \u9879")},tableAlertOptionRender:function(){return(0,A.jsx)("a",{onClick:Q,children:"\u53D6\u6D88\u9009\u62E9"})},scroll:{x:1200}},f)}}var G="dataIndex",Oe="resizable-table-id";function Ue(e){return"".concat(Oe,"-").concat(e)}function Se(e){var t=e,n=t==null?void 0:t.map(function(r,i){var a;return l()(l()({},r),{},re()({children:r!=null&&(a=r.children)!==null&&a!==void 0&&a.length?Se(r.children):void 0},G,r[G]||r.key||Ue("".concat(r.title,"-").concat(i))))});return n}function Be(e){var t=(0,u.useMemo)(function(){return Se(e)},[e]);return t||e}var Fe=m(65854),ye=m.n(Fe),Ge=m(84403),He=function(){var t=(0,u.useRef)(!1);return(0,u.useEffect)(function(){return t.current=!1,function(){t.current=!0}},[]),t};function ve(e){var t=He(),n=(0,u.useState)(e),r=$()(n,2),i=r[0],a=r[1],s=(0,u.useCallback)(function(d){t.current||a(d)},[]);return[i,s]}var Qe=m(37635),Ye=m.n(Qe);function Je(e,t,n){var r=ae()(e);return function i(a){if(a)for(var s=0;s<(a==null?void 0:a.length);s++){if(t(a[s])){a[s]=l()(l()({},a[s]),{},{width:n});return}a[s].children&&i(a[s].children)}}(r),r}function he(e){return typeof e=="string"}function Ve(e){return Ye()(e)!=="object"||e===null?!0:!(Array.isArray(e)&&e.length||Object.keys(e).length)}var Xe=["width","minWidth","maxWidth","onResize","onResizeStart","onResizeEnd","onMount","triggerRender","className","style","onClick","children","rowSpan","colSpan","title","scope"],Ze=function(t){var n=t.width,r=t.minWidth,i=t.maxWidth,a=t.onResize,s=t.onResizeStart,d=t.onResizeEnd,y=t.onMount,N=t.triggerRender,C=t.className,p=t.style,c=t.onClick,f=t.children,R=t.rowSpan,S=t.colSpan,v=t.title,x=t.scope,I=te()(t,Xe),D=(0,u.useRef)(null),L=ve(0),H=$()(L,2),b=H[0],k=H[1];if((0,u.useEffect)(function(){n&&(k(n),y==null||y(n))},[N]),(0,u.useEffect)(function(){n&&k(n)},[k,n]),!n||Number.isNaN(Number(n)))return(0,A.jsx)("th",l()(l()({},I),{},{"data-arh-disable":"true",style:p,className:C,onClick:c,rowSpan:R,colSpan:S,children:(0,A.jsx)("span",{title:v,children:f})}));var W=function(T){document.body.style.userSelect=T?"none":"",document.body.style.pointerEvents=T?"none":"",document.documentElement.style.cursor=T?"col-resize":""},J=function(T,M){ye()(T),k(M.size.width),W(!0),s==null||s(M.size.width)},ie=function(T,M){ye()(T),k(M.size.width)},_=function(){b<=0||(a(b),W(!1),d==null||d(b))},E=function(){if(Array.isArray(f)){var T=f[f.length-1];if(T){var M,X;return he(T)||((M=T.props)===null||M===void 0?void 0:M.ellipsis)||he((X=T.props)===null||X===void 0?void 0:X.label)}}return!1};return(0,A.jsxs)("th",{scope:x,className:"resizable-container ".concat(C),style:l()(l()({},p),{},{overflow:"unset"}),"data-arh-enable":"true",ref:D,onClick:c,rowSpan:R,colSpan:S,children:[(0,A.jsx)(Ge.Resizable,{className:"resizable-box",width:b,minConstraints:[r,0],maxConstraints:[i,0],height:0,handle:(0,A.jsx)("div",{className:"resizable-handler",onClick:function(T){T.stopPropagation()},children:(0,A.jsx)("div",{className:"resizable-line"})}),draggableOpts:{enableUserSelectHack:!1},onResizeStart:J,onResize:ie,onResizeStop:_,children:(0,A.jsx)("div",{style:{width:b,height:"100%"}})}),(0,A.jsx)("div",l()(l()({},I),{},{className:"resizable-title ".concat(E()?"ellipsis":""),children:(0,A.jsx)("span",{title:v,children:f})}))]})},qe=(0,u.memo)(Ze),_e=m(66292),et=m.n(_e);function be(e,t){var n=(0,u.useRef)({deps:t,obj:void 0,initialized:!1}),r=n.current;return(r.initialized===!1||!tt(r.deps,t))&&(r.deps=t,r.obj=e(),r.initialized=!0),r.obj}function tt(e,t){if(e===t)return!0;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function nt(e,t){var n,r=(0,u.useRef)(e);r.current=e;var i=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,a=be(function(){return et()(function(){return r.current.apply(r,arguments)},i,t)},[]);return(0,u.useEffect)(function(){a.cancel()},[]),{run:a,cancel:a.cancel,flush:a.flush}}function se(e){var t=(0,u.useRef)(e);t.current=(0,u.useMemo)(function(){return e},[e]);var n=(0,u.useRef)();return n.current||(n.current=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t.current.apply(this,i)}),n.current}function we(e,t,n){var r=e;return Array.isArray(r)&&Array.isArray(t)&&r.forEach(function(i,a){if(i!=null&&i.children){var s;we(i.children,(s=t[a])===null||s===void 0?void 0:s.children,n)}else{var d;r[a][n]=((d=t.find(function(y){return y.dataIndex===r[a].dataIndex}))===null||d===void 0?void 0:d[n])||r[a][n]}}),r}function rt(e){var t=e.columnsState,n=e.resizableColumns,r=e.columns,i=Be(r),a=se(function(){var p=t||{},c=p.persistenceType,f=p.persistenceKey;if(!f||!c||typeof window=="undefined")return i;var R=window[c];try{var S,v=(S=JSON.parse((R==null?void 0:R.getItem(f))||"{}"))===null||S===void 0?void 0:S.resizableColumns;return we(i||[],v,"width")}catch(x){console.error(x)}}),s=(0,u.useState)(a),d=$()(s,2),y=d[0],N=d[1];(0,u.useEffect)(function(){N(a())},[i]),(0,u.useEffect)(function(){var p=t||{},c=p.persistenceType,f=p.persistenceKey;if(!(!f||!c||!(n!=null&&n.length))&&typeof window!="undefined"){var R=window[c];try{R.setItem(f,JSON.stringify(l()(l()({},JSON.parse((R==null?void 0:R.getItem(f))||"{}")),{},{resizableColumns:n.map(function(S){var v={dataIndex:S.dataIndex,key:S.key,width:S.width,children:S.children};return he(S.title)&&(v.title=S.title),v})})))}catch(S){console.error(S)}}},[n]);var C=se(function(){N(ae()(i||[]))});return{localColumns:(0,u.useMemo)(function(){return y},[y]),resetLocalColumns:C}}function at(e){var t=(0,u.useRef)(e);return t.current=e,t}var pe=function(t){return function(n,r){var i=(0,u.useRef)(!1);t(function(){return function(){i.current=!1}},[]),t(function(){if(!i.current)i.current=!0;else return n()},r)}},it=m(38209),ut=m.n(it);function st(e,t){var n,r=(0,u.useRef)(e);r.current=e;var i=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,a=be(function(){return ut()(function(){return r.current.apply(r,arguments)},i,t)},[]);return(0,u.useEffect)(function(){a.cancel()},[]),{run:a,cancel:a.cancel,flush:a.flush}}var ot=pe(u.useEffect);function lt(e,t,n){var r=(0,u.useState)({}),i=$()(r,2),a=i[0],s=i[1],d=st(function(){s({})},n),y=d.run,N=d.cancel;(0,u.useEffect)(function(){return y()},t),(0,u.useEffect)(N,[]),ot(e,[a])}var dt=pe(lt),ct=!!(typeof window!="undefined"&&window.document&&window.document.createElement),Re=ct?u.useLayoutEffect:u.useEffect,Ce=120;function ft(e){var t=e.columns,n=e.defaultWidth,r=n===void 0?Ce:n,i=e.minConstraints,a=i===void 0?Ce/2:i,s=e.maxConstraints,d=s===void 0?1/0:s,y=e.cache,N=y===void 0?!0:y,C=e.columnsState,p=e.onResizeStart,c=e.onResizeEnd,f=(0,u.useRef)(new Map),R=ve(t||[]),S=$()(R,2),v=S[0],x=S[1],I=at(v),D=rt({columnsState:C,columns:t,resizableColumns:v}),L=D.localColumns,H=D.resetLocalColumns,b=ve(),k=$()(b,2),W=k[0],J=k[1],ie=(0,u.useReducer)(function(w){return w+1},0),_=$()(ie,2),E=_[0],O=_[1],T=se(function(){f.current=new Map,H()}),M=(0,u.useCallback)(function(w){return function(U){U&&x(function(P){var o=Je(P,function(Y){return Y[G]===w&&!!Y.width},U),Z=new Map;function Q(Y){Y.forEach(function(g,z){var h=g[G];Z.set(h!=null?h:"",{width:g==null?void 0:g.width,index:z}),g!=null&&g.children&&Q(g.children)})}return Q(o),f.current=Z,o})}},[]),X=(0,u.useMemo)(function(){return M},[M]),me=function(U){return function(P){p==null||p(l()(l()({},U),{},{width:P,resizableColumns:I.current}))}},le=function(U){return function(P){c==null||c(l()(l()({},U),{},{width:P,resizableColumns:I.current}))}},ue=se(function(w){var U=w==null?void 0:w.filter(function(o){return!Ve(o)}),P=U.map(function(o){var Z,Q,Y,g;return l()(l()({},o),{},re()({children:o!=null&&(Z=o.children)!==null&&Z!==void 0&&Z.length?ue(o.children):void 0,onHeaderCell:function(h){var K,B,j;return{title:typeof(o==null?void 0:o.title)=="string"?o==null?void 0:o.title:"",width:N&&((K=f.current)===null||K===void 0||(B=K.get((j=h[G])!==null&&j!==void 0?j:""))===null||B===void 0?void 0:B.width)||(h==null?void 0:h.width),resizable:h.resizable,onMount:M(h==null?void 0:h[G]),onResize:X(h==null?void 0:h[G]),onResizeStart:me(h),onResizeEnd:le(h),minWidth:a,maxWidth:d,triggerRender:E}},width:N&&((Q=f.current)===null||Q===void 0||(Y=Q.get((g=o[G])!==null&&g!==void 0?g:""))===null||Y===void 0?void 0:Y.width)||(o==null?void 0:o.width),ellipsis:typeof o.ellipsis!="undefined"?o.ellipsis:!0},G,o[G]||o.key))});return P});Re(function(){if(L){var w=ue(L);x(w)}},[L]),dt(function(){var w=ue(v);x(w)},[E],{wait:500}),Re(function(){var w=0;(function U(P){for(var o=0;o<P.length;o++)P[o].children?U(P[o].children):P[o].hideInTable||(w+=Number(P[o].width)||r)})(v),J(w)},[r,v]);var de=nt(O),ne=de.run;(0,u.useEffect)(function(){return window.addEventListener("resize",ne),function(){window.removeEventListener("resize",ne)}},[ne]);var ce=(0,u.useMemo)(function(){return{header:{cell:qe}}},[]);return{resizableColumns:v,components:ce,tableWidth:W,resetColumns:T}}var vt=ft,ze=m(84506),ht=m(78954);function mt(e){return(0,A.jsx)(ze.LB,{modifiers:[ht.K7],children:(0,A.jsx)("table",l()({},e))})}var gt=["children"];function St(e){var t=e.children,n=te()(e,gt);return(0,A.jsx)("tr",l()(l()({},n),{},{children:u.Children.map(t,function(r,i){var a=r.props.column,s=a.dataIndex,d=a.key,y=a.draggable;return u.cloneElement(r,{additionalProps:{index:i,id:s||d,draggable:y}})})}))}function yt(e,t){for(var n=[];(e=(r=e)===null||r===void 0?void 0:r.parentNode)&&e!==document;){var r,i;(!t||(i=e)!==null&&i!==void 0&&i.matches(t))&&n.push(e)}return n}function xe(e){return e.split(";").reduce(function(t,n){if(n){var r=n==null?void 0:n.split(":"),i=$()(r,2),a=i[0],s=i[1];t[a.trim()]=s.trim()}return t},{})}function Ee(e){return Object.entries(e).map(function(t){return t.join(":")}).join(";")}function bt(e,t){var n=t.min,r=t.max,i=t.offset,a=e+i;return a<n?{width:n,offset:n-e}:a>r?{width:r,offset:r-e}:{width:a,offset:i}}var oe="cursor";function wt(e){var t=e.isDragging,n=e.offset,r=e.targetElem,i=e.minLimit,a=i===void 0?80:i,s=e.maxLimit,d=s===void 0?1/0:s,y=e.cache,N=y===void 0?!1:y,C=(0,u.useRef)(0);(0,u.useEffect)(function(){if(r){var p=r.querySelector(':scope i[data-cypress="draggable-handle"]');if(p){var c=yt(r,"table")[0],f=c.classList;if(t?f.contains(oe)||f.add(oe):f.contains(oe)&&f.remove(oe),t){var R=p.getBoundingClientRect(),S=c.getBoundingClientRect(),v=Math.round(R.x-S.x+n-2);c.parentNode.parentNode.style.cssText="--dnd-translate-x: ".concat(v,"px"),C.current=n}else if(c.parentNode.parentNode.removeAttribute("style"),C.current!==0){var x=c.querySelector(":scope colgroup"),I=r.getBoundingClientRect(),D="--dnd-col-".concat(r.getAttribute("id")),L=xe(x.style.cssText),H=bt(I.width,{min:a,max:d,offset:C.current}),b=H.width,k=H.offset;x.style.cssText=Ee(l()(l()({},L),{},re()({},D,"".concat(b,"px"))));var W=c.getBoundingClientRect();c.style.cssText=Ee(l()(l()({},xe(c.style.cssText)),{},{width:"".concat(W.width+k,"px")}))}}}},[t,n,r])}var pt=["children","className"];function Rt(e){var t=(0,u.useRef)(),n=e.id,r=e.index,i=e.draggable,a=i===void 0?!0:i,s=(0,ze.O1)({id:n}),d=s.attributes,y=s.listeners,N=s.setNodeRef,C=s.transform,p=s.isDragging,c=e.children,f=e.className,R=te()(e,pt),S=Math.round((C==null?void 0:C.x)||0);return wt(l()({isDragging:p,offset:S,targetElem:t.current},R)),(0,A.jsxs)("th",l()(l()({},R),{},{className:f,ref:t,children:[c,n&&a?(0,A.jsx)("i",l()(l()(l()({ref:N},d),y),{},{style:{display:"block",position:"absolute",top:"0",right:"0",height:"100%",width:1,backgroundColor:"rgba(255, 0, 0, .35)",cursor:"col-resize",zIndex:3},"data-cypress":"draggable-handle"})):null]}))}var Ct=["columns"];function zt(e){var t=e.columns,n=te()(e,Ct),r=(0,u.useMemo)(function(){return t.map(function(i){var a="--dnd-col-".concat(i.dataIndex||i.key);return Object.assign(i,{width:i.width?"var(".concat(a,", ").concat(i.width,"px)"):"var(".concat(a,")")})})},[t]);return{components:{table:mt,header:{row:St,cell:function(a){return(0,A.jsx)(Rt,l()(l()({},a),n))}}},columns:r,tableWidth:"100%",reset:function(){}}}}}]);
