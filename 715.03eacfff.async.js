(self.webpackChunkbizk=self.webpackChunkbizk||[]).push([[715],{66117:function(C,W,p){"use strict";var k=p(42475),R=p(50959),g=p(84708);function x(a,s){return M(a)||T(a,s)||_(a,s)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(a,s){if(a){if(typeof a=="string")return O(a,s);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return O(a,s)}}function O(a,s){(s==null||s>a.length)&&(s=a.length);for(var l=0,e=new Array(s);l<s;l++)e[l]=a[l];return e}function T(a,s){var l=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var e=[],n=!0,r=!1,o,i;try{for(l=l.call(a);!(n=(o=l.next()).done)&&(e.push(o.value),!(s&&e.length===s));n=!0);}catch(u){r=!0,i=u}finally{try{!n&&l.return!=null&&l.return()}finally{if(r)throw i}}return e}}function M(a){if(Array.isArray(a))return a}var B=function(s){var l,e=useRouteMeta(),n=e.frontmatter,r=useAtomAssets(),o=r.components,i=s.id||n.atomId,u=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var v=o==null?void 0:o[i];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,u.formatMessage({id:"api.component.name"})),React.createElement("th",null,u.formatMessage({id:"api.component.description"})),React.createElement("th",null,u.formatMessage({id:"api.component.type"})),React.createElement("th",null,u.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,v&&(l=v.propsConfig)!==null&&l!==void 0&&l.properties?Object.entries(v.propsConfig.properties).map(function(I){var t,c=x(I,2),f=c[0],m=c[1];return React.createElement("tr",{key:f},React.createElement("td",null,f),React.createElement("td",null,m.description||"--"),React.createElement("td",null,React.createElement("code",null,m.type)),React.createElement("td",null,React.createElement("code",null,(t=v.propsConfig.required)!==null&&t!==void 0&&t.includes(f)?u.formatMessage({id:"api.component.required"}):m.default||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},u.formatMessage({id:"api.component.".concat(o?"not.found":"loading")},{id:i}))))))},D=null},76650:function(C,W,p){"use strict";var k=p(50959);function R(){return R=Object.assign?Object.assign.bind():function(A){for(var _=1;_<arguments.length;_++){var O=arguments[_];for(var T in O)Object.prototype.hasOwnProperty.call(O,T)&&(A[T]=O[T])}return A},R.apply(this,arguments)}var g=function(_){return React.createElement("span",R({className:"dumi-default-badge"},_))},x=null},84708:function(C,W,p){"use strict";p.d(W,{Z:function(){return l}});var k=p(30826),R=p.n(k),g=p(50959),x=["children"];function A(e,n){return B(e)||M(e,n)||O(e,n)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e,n){if(e){if(typeof e=="string")return T(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,n)}}function T(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function M(e,n){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o=[],i=!0,u=!1,v,I;try{for(r=r.call(e);!(i=(v=r.next()).done)&&(o.push(v.value),!(n&&o.length===n));i=!0);}catch(t){u=!0,I=t}finally{try{!i&&r.return!=null&&r.return()}finally{if(u)throw I}}return o}}function B(e){if(Array.isArray(e))return e}function D(e,n){if(e==null)return{};var r=a(e,n),o,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)o=u[i],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function a(e,n){if(e==null)return{};var r={},o=Object.keys(e),i,u;for(u=0;u<o.length;u++)i=o[u],!(n.indexOf(i)>=0)&&(r[i]=e[i]);return r}var s=function(n){var r=n.children,o=D(n,x),i=(0,g.useRef)(null),u=(0,g.useState)(!1),v=A(u,2),I=v[0],t=v[1],c=(0,g.useState)(!1),f=A(c,2),m=f[0],h=f[1];return(0,g.useEffect)(function(){var y=i.current;if(y){var b=R()(function(){t(y.scrollLeft>0),h(y.scrollLeft<y.scrollWidth-y.offsetWidth)},100);return b(),y.addEventListener("scroll",b),window.addEventListener("resize",b),function(){y.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),g.createElement("div",{className:"dumi-default-table"},g.createElement("div",{className:"dumi-default-table-content",ref:i,"data-left-folded":I||void 0,"data-right-folded":m||void 0},g.createElement("table",o,r)))},l=s},30826:function(C,W,p){var k="Expected a function",R=NaN,g="[object Symbol]",x=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,T=parseInt,M=typeof p.g=="object"&&p.g&&p.g.Object===Object&&p.g,B=typeof self=="object"&&self&&self.Object===Object&&self,D=M||B||Function("return this")(),a=Object.prototype,s=a.toString,l=Math.max,e=Math.min,n=function(){return D.Date.now()};function r(t,c,f){var m,h,y,b,E,S,L=0,z=!1,P=!1,N=!0;if(typeof t!="function")throw new TypeError(k);c=I(c)||0,i(f)&&(z=!!f.leading,P="maxWait"in f,y=P?l(I(f.maxWait)||0,c):y,N="trailing"in f?!!f.trailing:N);function $(d){var j=m,w=h;return m=h=void 0,L=d,b=t.apply(w,j),b}function G(d){return L=d,E=setTimeout(F,c),z?$(d):b}function Z(d){var j=d-S,w=d-L,X=c-j;return P?e(X,y-w):X}function K(d){var j=d-S,w=d-L;return S===void 0||j>=c||j<0||P&&w>=y}function F(){var d=n();if(K(d))return H(d);E=setTimeout(F,Z(d))}function H(d){return E=void 0,N&&m?$(d):(m=h=void 0,b)}function J(){E!==void 0&&clearTimeout(E),L=0,m=S=h=E=void 0}function Q(){return E===void 0?b:H(n())}function U(){var d=n(),j=K(d);if(m=arguments,h=this,S=d,j){if(E===void 0)return G(S);if(P)return E=setTimeout(F,c),$(S)}return E===void 0&&(E=setTimeout(F,c)),b}return U.cancel=J,U.flush=Q,U}function o(t,c,f){var m=!0,h=!0;if(typeof t!="function")throw new TypeError(k);return i(f)&&(m="leading"in f?!!f.leading:m,h="trailing"in f?!!f.trailing:h),r(t,c,{leading:m,maxWait:c,trailing:h})}function i(t){var c=typeof t;return!!t&&(c=="object"||c=="function")}function u(t){return!!t&&typeof t=="object"}function v(t){return typeof t=="symbol"||u(t)&&s.call(t)==g}function I(t){if(typeof t=="number")return t;if(v(t))return R;if(i(t)){var c=typeof t.valueOf=="function"?t.valueOf():t;t=i(c)?c+"":c}if(typeof t!="string")return t===0?t:+t;t=t.replace(x,"");var f=_.test(t);return f||O.test(t)?T(t.slice(2),f?2:8):A.test(t)?R:+t}C.exports=o}}]);
