"use strict";(self.webpackChunkbizk=self.webpackChunkbizk||[]).push([[293],{7293:function(dt,be,v){v.d(be,{NH:function(){return Ie},g2:function(){return ot}});var pe=v(52510),ue=v.n(pe),Ee=v(57213),y=v.n(Ee),Te=v(93525),re=v.n(Te),Ae=v(25359),_=v.n(Ae),Pe=v(49811),oe=v.n(Pe),xe=v(54306),$=v.n(xe),je=v(12342),de=v.n(je),u=v(50959);function We(t,e){var n=(0,u.useState)(!1),r=$()(n,2),i=r[0],a=r[1],d=(0,u.useState)(),f=$()(d,2),p=f[0],L=f[1],N=(0,u.useMemo)(function(){return e||{manual:!1}},[e]),E=N.manual,T=N.onError,h=N.onSuccess,g=(0,u.useCallback)(oe()(_()().mark(function o(){var w,x,M,I,O=arguments;return _()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:for(a(!0),w=O.length,x=new Array(w),M=0;M<w;M++)x[M]=O[M];return m.prev=2,m.next=5,t(x);case 5:return I=m.sent,L(I),h==null||h(I,x),a(!1),m.abrupt("return",I);case 12:throw m.prev=12,m.t0=m.catch(2),T==null||T(m.t0,x),a(!1),m.t0;case 17:case"end":return m.stop()}},o,null,[[2,12]])})),[t,e]);return(0,u.useEffect)(function(){E||g.apply(void 0,re()([]))},[E]),{loading:i,data:p,run:g}}var D=v(11527),$e=["request","adapterParams","batchParams","disabledRow","authKey","rowKey","pagination"],Ne=["currentPage","pageSize"],Me={excludes:"excludes",includes:"includes"};function Ie(t){var e=t.request,n=t.adapterParams,r=t.batchParams,i=r===void 0?Me:r,a=i.excludes,d=i.includes,f=t.disabledRow,p=t.authKey,L=p===void 0?"":p,N=t.rowKey,E=t.pagination,T=de()(t,$e),h=(0,u.useState)(),g=$()(h,2),o=g[0],w=g[1],x=(0,u.useState)([]),M=$()(x,2),I=M[0],O=M[1],Z=(0,u.useState)([]),m=$()(Z,2),A=m[0],G=m[1],ae=(0,u.useState)([]),ee=$()(ae,2),R=ee[0],H=ee[1],Y=(0,u.useState)(),z=$()(Y,2),j=z[0],q=z[1],le=We(function(){var c=oe()(_()().mark(function S(s){var K,W,b,U,Ce,he;return _()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return X.next=2,e(s,L);case 2:if(K=X.sent,W=K.success,b=K.data,U=b.wholeOperationNum,Ce=b.items,he=b.totalNum,!W){X.next=10;break}return X.abrupt("return",{selectableTotal:U!=null?U:he,total:he,data:Ce,success:!0});case 10:return X.abrupt("return",{selectableTotal:0,total:0,data:[],success:!1});case 11:case"end":return X.stop()}},S)}));return function(S){return c.apply(this,arguments)}}(),{manual:!0,onSuccess:function(S){var s=S.data;if(s.length){var K=s.map(function(b){return!(f!=null&&f(b))&&N?b[N]:void 0}).filter(function(b){return b&&!I.includes(b)});if(K.length){var W=[].concat(re()(I),re()(K));O(W),o==="all"&&H(W.filter(function(b){return!A.includes(b)}))}}}}),ve=le.run,te=le.data,se=te===void 0?{}:te,ne=se.selectableTotal,J=ne===void 0?0:ne,C=se.total,k=C===void 0?0:C,P=(0,u.useMemo)(function(){return{type:o,selectableTotal:J,selectedRowKeys:R,selected:!!(o==="all"&&J||R!=null&&R.length),selectedTotal:o==="all"?(J!=null?J:k)-((A==null?void 0:A.length)||0):(R==null?void 0:R.length)||0}},[o,J,R,k,A]),l=function(S){H(S),o==="all"?G(I.filter(function(s){return!S.includes(s)})):A.length&&G([])},Q=function(){w(void 0),G([]),H([])},V=(0,u.useCallback)(function(){var c=o==="all",S=j||{},s=S.currentPage,K=S.pageSize,W=de()(S,Ne),b=y()(y()({selectedTotal:P.selectedTotal,type:c?"1":"0"},c?ue()({},a,A):ue()({},d,R)),{},{condition:W});return b},[o,a,d,A,R,j]),B=function(){var c=oe()(_()().mark(function S(s,K){var W;return _()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return W=(n==null?void 0:n(s,K))||s,q(W),U.next=4,ve(W);case 4:return U.abrupt("return",U.sent);case 5:case"end":return U.stop()}},S)}));return function(s,K){return c.apply(this,arguments)}}();return{selectedInfo:P,resetSelection:Q,takeQueryParams:V,options:y()({rowKey:N,request:B,search:{labelWidth:70,defaultCollapsed:!0},onSubmit:Q,pagination:E?y()({pageSizeOptions:[10,20,30,50],defaultPageSize:10,showSizeChanger:!0,showQuickJumper:!0,size:"default",showTotal:function(S){return"\u5171\u6709 ".concat(S," \u6761")}},E):!1,rowSelection:{columnWidth:48,selectedRowKeys:R,onChange:l,preserveSelectedRowKeys:!0,selections:[{key:"all",text:"\u5168\u90E8",onSelect:function(){w("all"),G([]),H(I)}},{key:"current",text:"\u5F53\u524D\u9875",onSelect:function(S){w("current"),G([]),H(S)}}],getCheckboxProps:function(S){return{disabled:!!(f!=null&&f(S))}},alwaysShowAlert:o==="all"&&J||(R==null?void 0:R.length)},tableAlertRender:function(){return"\u5DF2\u9009\u62E9 ".concat(P.selectedTotal," \u9879")},tableAlertOptionRender:function(){return(0,D.jsx)("a",{onClick:Q,children:"\u53D6\u6D88\u9009\u62E9"})},scroll:{x:1200}},T)}}var F="dataIndex",Ke="resizable-table-id";function Le(t){return"".concat(Ke,"-").concat(t)}function me(t){var e=t,n=e==null?void 0:e.map(function(r,i){var a;return y()(y()({},r),{},ue()({children:r!=null&&(a=r.children)!==null&&a!==void 0&&a.length?me(r.children):void 0},F,r[F]||r.key||Le("".concat(r.title,"-").concat(i))))});return n}function ke(t){var e=(0,u.useMemo)(function(){return me(t)},[t]);return e||t}var Ue=v(65854),Se=v.n(Ue),De=v(76369),Fe=function(){var e=(0,u.useRef)(!1);return(0,u.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e};function ce(t){var e=Fe(),n=(0,u.useState)(t),r=$()(n,2),i=r[0],a=r[1],d=(0,u.useCallback)(function(f){e.current||a(f)},[]);return[i,d]}var Oe=v(37635),Ge=v.n(Oe);function He(t,e,n){var r=re()(t);return function i(a){if(a)for(var d=0;d<(a==null?void 0:a.length);d++){if(e(a[d])){a[d]=y()(y()({},a[d]),{},{width:n});return}a[d].children&&i(a[d].children)}}(r),r}function fe(t){return typeof t=="string"}function Qe(t){return Ge()(t)!=="object"||t===null?!0:!(Array.isArray(t)&&t.length||Object.keys(t).length)}var Be=["width","minWidth","maxWidth","onResize","onResizeStart","onResizeEnd","onMount","triggerRender","className","style","onClick","children","rowSpan","colSpan","title","scope"],Ye=function(e){var n=e.width,r=e.minWidth,i=e.maxWidth,a=e.onResize,d=e.onResizeStart,f=e.onResizeEnd,p=e.onMount,L=e.triggerRender,N=e.className,E=e.style,T=e.onClick,h=e.children,g=e.rowSpan,o=e.colSpan,w=e.title,x=e.scope,M=de()(e,Be),I=(0,u.useRef)(null),O=ce(0),Z=$()(O,2),m=Z[0],A=Z[1];if((0,u.useEffect)(function(){n&&(A(n),p==null||p(n))},[L]),(0,u.useEffect)(function(){n&&A(n)},[A,n]),!n||Number.isNaN(Number(n)))return(0,D.jsx)("th",y()(y()({},M),{},{"data-arh-disable":"true",style:E,className:N,onClick:T,rowSpan:g,colSpan:o,children:(0,D.jsx)("span",{title:w,children:h})}));var G=function(z){document.body.style.userSelect=z?"none":"",document.body.style.pointerEvents=z?"none":"",document.documentElement.style.cursor=z?"col-resize":""},ae=function(z,j){Se()(z),A(j.size.width),G(!0),d==null||d(j.size.width)},ee=function(z,j){Se()(z),A(j.size.width)},R=function(){m<=0||(a(m),G(!1),f==null||f(m))},H=function(){if(Array.isArray(h)){var z=h[h.length-1];if(z){var j,q;return fe(z)||((j=z.props)===null||j===void 0?void 0:j.ellipsis)||fe((q=z.props)===null||q===void 0?void 0:q.label)}}return!1};return(0,D.jsxs)("th",{scope:x,className:"resizable-container ".concat(N),style:y()(y()({},E),{},{overflow:"unset"}),"data-arh-enable":"true",ref:I,onClick:T,rowSpan:g,colSpan:o,children:[(0,D.jsx)(De.Resizable,{className:"resizable-box",width:m,minConstraints:[r,0],maxConstraints:[i,0],height:0,handle:(0,D.jsx)("div",{className:"resizable-handler",onClick:function(z){z.stopPropagation()},children:(0,D.jsx)("div",{className:"resizable-line"})}),draggableOpts:{enableUserSelectHack:!1},onResizeStart:ae,onResize:ee,onResizeStop:R,children:(0,D.jsx)("div",{style:{width:m,height:"100%"}})}),(0,D.jsx)("div",y()(y()({},M),{},{className:"resizable-title ".concat(H()?"ellipsis":""),children:(0,D.jsx)("span",{title:w,children:h})}))]})},Je=(0,u.memo)(Ye),Ve=v(66292),Xe=v.n(Ve);function ye(t,e){var n=(0,u.useRef)({deps:e,obj:void 0,initialized:!1}),r=n.current;return(r.initialized===!1||!Ze(r.deps,e))&&(r.deps=e,r.obj=t(),r.initialized=!0),r.obj}function Ze(t,e){if(t===e)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function qe(t,e){var n,r=(0,u.useRef)(t);r.current=t;var i=(n=e==null?void 0:e.wait)!==null&&n!==void 0?n:1e3,a=ye(function(){return Xe()(function(){return r.current.apply(r,arguments)},i,e)},[]);return(0,u.useEffect)(function(){a.cancel()},[]),{run:a,cancel:a.cancel,flush:a.flush}}function ie(t){var e=(0,u.useRef)(t);e.current=(0,u.useMemo)(function(){return t},[t]);var n=(0,u.useRef)();return n.current||(n.current=function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e.current.apply(this,i)}),n.current}function we(t,e,n){var r=t;return Array.isArray(r)&&Array.isArray(e)&&r.forEach(function(i,a){if(i!=null&&i.children){var d;we(i.children,(d=e[a])===null||d===void 0?void 0:d.children,n)}else{var f;r[a][n]=((f=e.find(function(p){return p.dataIndex===r[a].dataIndex}))===null||f===void 0?void 0:f[n])||r[a][n]}}),r}function _e(t){var e=t.columnsState,n=t.resizableColumns,r=t.columns,i=ke(r),a=ie(function(){var E=e||{},T=E.persistenceType,h=E.persistenceKey;if(!h||!T||typeof window=="undefined")return i;var g=window[T];try{var o,w=(o=JSON.parse((g==null?void 0:g.getItem(h))||"{}"))===null||o===void 0?void 0:o.resizableColumns;return we(i||[],w,"width")}catch(x){console.error(x)}}),d=(0,u.useState)(a),f=$()(d,2),p=f[0],L=f[1];(0,u.useEffect)(function(){L(a())},[i]),(0,u.useEffect)(function(){var E=e||{},T=E.persistenceType,h=E.persistenceKey;if(!(!h||!T||!(n!=null&&n.length))&&typeof window!="undefined"){var g=window[T];try{g.setItem(h,JSON.stringify(y()(y()({},JSON.parse((g==null?void 0:g.getItem(h))||"{}")),{},{resizableColumns:n.map(function(o){var w={dataIndex:o.dataIndex,key:o.key,width:o.width,children:o.children};return fe(o.title)&&(w.title=o.title),w})})))}catch(o){console.error(o)}}},[n]);var N=ie(function(){L(re()(i||[]))});return{localColumns:(0,u.useMemo)(function(){return p},[p]),resetLocalColumns:N}}function et(t){var e=(0,u.useRef)(t);return e.current=t,e}var ge=function(e){return function(n,r){var i=(0,u.useRef)(!1);e(function(){return function(){i.current=!1}},[]),e(function(){if(!i.current)i.current=!0;else return n()},r)}},tt=v(38209),nt=v.n(tt);function rt(t,e){var n,r=(0,u.useRef)(t);r.current=t;var i=(n=e==null?void 0:e.wait)!==null&&n!==void 0?n:1e3,a=ye(function(){return nt()(function(){return r.current.apply(r,arguments)},i,e)},[]);return(0,u.useEffect)(function(){a.cancel()},[]),{run:a,cancel:a.cancel,flush:a.flush}}var at=ge(u.useEffect);function ut(t,e,n){var r=(0,u.useState)({}),i=$()(r,2),a=i[0],d=i[1],f=rt(function(){d({})},n),p=f.run,L=f.cancel;(0,u.useEffect)(function(){return p()},e),(0,u.useEffect)(L,[]),at(t,[a])}var it=ge(ut),lt=!!(typeof window!="undefined"&&window.document&&window.document.createElement),Re=lt?u.useLayoutEffect:u.useEffect,ze=120;function st(t){var e=t.columns,n=t.defaultWidth,r=n===void 0?ze:n,i=t.minConstraints,a=i===void 0?ze/2:i,d=t.maxConstraints,f=d===void 0?1/0:d,p=t.cache,L=p===void 0?!0:p,N=t.columnsState,E=t.onResizeStart,T=t.onResizeEnd,h=(0,u.useRef)(new Map),g=ce(e||[]),o=$()(g,2),w=o[0],x=o[1],M=et(w),I=_e({columnsState:N,columns:e,resizableColumns:w}),O=I.localColumns,Z=I.resetLocalColumns,m=ce(),A=$()(m,2),G=A[0],ae=A[1],ee=(0,u.useReducer)(function(C){return C+1},0),R=$()(ee,2),H=R[0],Y=R[1],z=ie(function(){h.current=new Map,Z()}),j=(0,u.useCallback)(function(C){return function(k){k&&x(function(P){var l=He(P,function(B){return B[F]===C&&!!B.width},k),Q=new Map;function V(B){B.forEach(function(c,S){var s=c[F];Q.set(s!=null?s:"",{width:c==null?void 0:c.width,index:S}),c!=null&&c.children&&V(c.children)})}return V(l),h.current=Q,l})}},[]),q=(0,u.useMemo)(function(){return j},[j]),le=function(k){return function(P){E==null||E(y()(y()({},k),{},{width:P,resizableColumns:M.current}))}},ve=function(k){return function(P){T==null||T(y()(y()({},k),{},{width:P,resizableColumns:M.current}))}},te=ie(function(C){var k=C==null?void 0:C.filter(function(l){return!Qe(l)}),P=k.map(function(l){var Q,V,B,c;return y()(y()({},l),{},ue()({children:l!=null&&(Q=l.children)!==null&&Q!==void 0&&Q.length?te(l.children):void 0,onHeaderCell:function(s){var K,W,b;return{title:typeof(l==null?void 0:l.title)=="string"?l==null?void 0:l.title:"",width:L&&((K=h.current)===null||K===void 0||(W=K.get((b=s[F])!==null&&b!==void 0?b:""))===null||W===void 0?void 0:W.width)||(s==null?void 0:s.width),resizable:s.resizable,onMount:j(s==null?void 0:s[F]),onResize:q(s==null?void 0:s[F]),onResizeStart:le(s),onResizeEnd:ve(s),minWidth:a,maxWidth:f,triggerRender:H}},width:L&&((V=h.current)===null||V===void 0||(B=V.get((c=l[F])!==null&&c!==void 0?c:""))===null||B===void 0?void 0:B.width)||(l==null?void 0:l.width),ellipsis:typeof l.ellipsis!="undefined"?l.ellipsis:!0},F,l[F]||l.key))});return P});Re(function(){if(O){var C=te(O);x(C)}},[O]),it(function(){var C=te(w);x(C)},[H],{wait:500}),Re(function(){var C=0;(function k(P){for(var l=0;l<P.length;l++)P[l].children?k(P[l].children):P[l].hideInTable||(C+=Number(P[l].width)||r)})(w),ae(C)},[r,w]);var se=qe(Y),ne=se.run;(0,u.useEffect)(function(){return window.addEventListener("resize",ne),function(){window.removeEventListener("resize",ne)}},[ne]);var J=(0,u.useMemo)(function(){return{header:{cell:Je}}},[]);return{resizableColumns:w,components:J,tableWidth:G,resetColumns:z}}var ot=st}}]);
