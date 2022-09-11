/*! For license information please see 161.c161c4f5.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[161],{9815:function(e,n,t){"use strict";var r=t(2791),a="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,o="undefined"!==typeof document;n.Z=o||a?r.useLayoutEffect:r.useEffect},5341:function(e,n,t){"use strict";t.d(n,{FT:function(){return s}});var r=t(885),a=t(2791),o=t(184),i=["as","disabled"];function s(e){var n=e.tagName,t=e.disabled,r=e.href,a=e.target,o=e.rel,i=e.role,s=e.onClick,c=e.tabIndex,u=void 0===c?0:c,l=e.type;n||(n=null!=r||null!=a||null!=o?"a":"button");var f={tagName:n};if("button"===n)return[{type:l||"button",disabled:t},f];var d=function(e){(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==s||s(e)};return"a"===n&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:u,href:r,target:"a"===n?a:void 0,"aria-disabled":t||void 0,rel:"a"===n?o:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},f]}var c=a.forwardRef((function(e,n){var t=e.as,a=e.disabled,c=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i),u=s(Object.assign({tagName:t,disabled:a},c)),l=(0,r.Z)(u,2),f=l[0],d=l[1].tagName;return(0,o.jsx)(d,Object.assign({},c,f,{ref:n}))}));c.displayName="Button",n.ZP=c},8633:function(e,n,t){"use strict";t.d(n,{h:function(){return a}});var r=t(2791).createContext(null),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null};n.Z=r},1694:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var i=a.apply(null,t);i&&e.push(i)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var s in t)r.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},2176:function(e){"use strict";e.exports=function(e,n,t,r,a,o,i,s){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,r,a,o,i,s],l=0;(c=new Error(n.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},3573:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=null;return n.forEach((function(e){if(null==a){var n=e.apply(void 0,t);null!=n&&(a=n)}})),a}return(0,o.default)(r)};var r,a=t(6054),o=(r=a)&&r.__esModule?r:{default:r};e.exports=n.default},6054:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,t,r,a,o,i){var s=a||"<<anonymous>>",c=i||r;if(null==t[r])return n?new Error("Required "+o+" `"+c+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[t,r,s,o,c].concat(l))}var t=n.bind(null,!1);return t.isRequired=n.bind(null,!0),t},e.exports=n.default},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5736:function(e,n,t){"use strict";var r=t(1413),a=t(5987),o=t(1694),i=t.n(o),s=t(2791),c=t(162),u=t(184),l=["bsPrefix","bg","pill","text","className","as"],f=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.bg,s=e.pill,f=e.text,d=e.className,v=e.as,p=void 0===v?"span":v,m=(0,a.Z)(e,l),b=(0,c.vE)(t,"badge");return(0,u.jsx)(p,(0,r.Z)((0,r.Z)({ref:n},m),{},{className:i()(d,b,s&&"rounded-pill",f&&"text-".concat(f),o&&"bg-".concat(o))}))}));f.displayName="Badge",f.defaultProps={bg:"primary",pill:!1},n.Z=f},3360:function(e,n,t){"use strict";var r=t(1413),a=t(885),o=t(5987),i=t(1694),s=t.n(i),c=t(2791),u=t(5341),l=t(162),f=t(184),d=["as","bsPrefix","variant","size","active","className"],v=c.forwardRef((function(e,n){var t=e.as,i=e.bsPrefix,c=e.variant,v=e.size,p=e.active,m=e.className,b=(0,o.Z)(e,d),x=(0,l.vE)(i,"btn"),g=(0,u.FT)((0,r.Z)({tagName:t},b)),y=(0,a.Z)(g,2),h=y[0],Z=y[1].tagName;return(0,f.jsx)(Z,(0,r.Z)((0,r.Z)((0,r.Z)({},h),b),{},{ref:n,className:s()(m,x,p&&"active",c&&"".concat(x,"-").concat(c),v&&"".concat(x,"-").concat(v),b.href&&b.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=v},7022:function(e,n,t){"use strict";var r=t(1413),a=t(5987),o=t(1694),i=t.n(o),s=t(2791),c=t(162),u=t(184),l=["bsPrefix","fluid","as","className"],f=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.fluid,s=e.as,f=void 0===s?"div":s,d=e.className,v=(0,a.Z)(e,l),p=(0,c.vE)(t,"container"),m="string"===typeof o?"-".concat(o):"-fluid";return(0,u.jsx)(f,(0,r.Z)((0,r.Z)({ref:n},v),{},{className:i()(d,o?"".concat(p).concat(m):p)}))}));f.displayName="Container",f.defaultProps={fluid:!1},n.Z=f},7913:function(e,n,t){"use strict";t.d(n,{Z:function(){return U}});var r=t(4942),a=t(1413),o=t(5987),i=t(1694),s=t.n(i),c=(t(3573),t(2791)),u=t(239),l=t(3808);var f=t(3201),d=c.createContext(null);d.displayName="NavContext";var v=d,p=t(8633),m=c.createContext(null),b=t(1306),x=t(885),g=t(9007),y=t(5341),h=t(184),Z=["as","active","eventKey"];function N(e){var n=e.key,t=e.onClick,r=e.active,a=e.id,o=e.role,i=e.disabled,s=(0,c.useContext)(p.Z),u=(0,c.useContext)(v),l=(0,c.useContext)(m),f=r,d={role:o};if(u){o||"tablist"!==u.role||(d.role="tab");var x=u.getControllerId(null!=n?n:null),y=u.getControlledId(null!=n?n:null);d[(0,b.PB)("event-key")]=n,d.id=x||a,!(f=null==r&&null!=n?u.activeKey===n:r)&&(null!=l&&l.unmountOnExit||null!=l&&l.mountOnEnter)||(d["aria-controls"]=y)}return"tab"===d.role&&(d["aria-selected"]=f,f||(d.tabIndex=-1),i&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=(0,g.Z)((function(e){i||(null==t||t(e),null!=n&&s&&!e.isPropagationStopped()&&s(n,e))})),[d,{isActive:f}]}var w=c.forwardRef((function(e,n){var t=e.as,r=void 0===t?y.ZP:t,a=e.active,o=e.eventKey,i=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,Z),s=N(Object.assign({key:(0,p.h)(o,i.href),active:a},i)),c=(0,x.Z)(s,2),u=c[0],l=c[1];return u[(0,b.PB)("active")]=l.isActive,(0,h.jsx)(r,Object.assign({},i,u,{ref:n}))}));w.displayName="NavItem";var E=w,C=["as","onSelect","activeKey","role","onKeyDown"];var P=function(){},j=(0,b.PB)("event-key"),O=c.forwardRef((function(e,n){var t,r,a=e.as,o=void 0===a?"div":a,i=e.onSelect,s=e.activeKey,u=e.role,d=e.onKeyDown,x=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,C),g=(0,c.useReducer)((function(e){return!e}),!1)[1],y=(0,c.useRef)(!1),Z=(0,c.useContext)(p.Z),N=(0,c.useContext)(m);N&&(u=u||"tablist",s=N.activeKey,t=N.getControlledId,r=N.getControllerId);var w=(0,c.useRef)(null),E=function(e){var n=w.current;if(!n)return null;var t=(0,l.Z)(n,"[".concat(j,"]:not([aria-disabled=true])")),r=n.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;var a=t.indexOf(r);if(-1===a)return null;var o=a+e;return o>=t.length&&(o=0),o<0&&(o=t.length-1),t[o]},O=function(e,n){null!=e&&(null==i||i(e,n),null==Z||Z(e,n))};(0,c.useEffect)((function(){if(w.current&&y.current){var e=w.current.querySelector("[".concat(j,"][aria-selected=true]"));null==e||e.focus()}y.current=!1}));var k=(0,f.Z)(n,w);return(0,h.jsx)(p.Z.Provider,{value:O,children:(0,h.jsx)(v.Provider,{value:{role:u,activeKey:(0,p.h)(s),getControlledId:t||P,getControllerId:r||P},children:(0,h.jsx)(o,Object.assign({},x,{onKeyDown:function(e){if(null==d||d(e),N){var n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=E(-1);break;case"ArrowRight":case"ArrowDown":n=E(1);break;default:return}n&&(e.preventDefault(),O(n.dataset[(0,b.$F)("EventKey")]||null,e),y.current=!0,g())}},ref:k,role:u}))})})}));O.displayName="Nav";var k=Object.assign(O,{Item:E}),S=t(162),R=t(5715),T=c.createContext(null);T.displayName="CardHeaderContext";var _=T,D=(0,t(6543).Z)("nav-item");t(7731),t(7904);t(5746),t(2803);t(9815),new WeakMap;var K=["onKeyDown"];var I=c.forwardRef((function(e,n){var t,r=e.onKeyDown,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,K),o=(0,y.FT)(Object.assign({tagName:"a"},a)),i=(0,x.Z)(o,1)[0],s=(0,g.Z)((function(e){i.onKeyDown(e),null==r||r(e)}));return(t=a.href)&&"#"!==t.trim()&&"button"!==a.role?(0,h.jsx)("a",Object.assign({ref:n},a,{onKeyDown:r})):(0,h.jsx)("a",Object.assign({ref:n},a,i,{onKeyDown:s}))}));I.displayName="Anchor";var F=I,A=["bsPrefix","className","as","active","eventKey"],M=c.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.as,c=void 0===i?F:i,u=e.active,l=e.eventKey,f=(0,o.Z)(e,A);t=(0,S.vE)(t,"nav-link");var d=N((0,a.Z)({key:(0,p.h)(l,f.href),active:u},f)),v=(0,x.Z)(d,2),m=v[0],b=v[1];return(0,h.jsx)(c,(0,a.Z)((0,a.Z)((0,a.Z)({},f),m),{},{ref:n,className:s()(r,t,f.disabled&&"disabled",b.isActive&&"active")}))}));M.displayName="NavLink",M.defaultProps={disabled:!1};var B=M,L=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],H=c.forwardRef((function(e,n){var t,i,l,f=(0,u.Ch)(e,{activeKey:"onSelect"}),d=f.as,v=void 0===d?"div":d,p=f.bsPrefix,m=f.variant,b=f.fill,x=f.justify,g=f.navbar,y=f.navbarScroll,Z=f.className,N=f.activeKey,w=(0,o.Z)(f,L),E=(0,S.vE)(p,"nav"),C=!1,P=(0,c.useContext)(R.Z),j=(0,c.useContext)(_);return P?(i=P.bsPrefix,C=null==g||g):j&&(l=j.cardHeaderBsPrefix),(0,h.jsx)(k,(0,a.Z)({as:v,ref:n,activeKey:N,className:s()(Z,(t={},(0,r.Z)(t,E,!C),(0,r.Z)(t,"".concat(i,"-nav"),C),(0,r.Z)(t,"".concat(i,"-nav-scroll"),C&&y),(0,r.Z)(t,"".concat(l,"-").concat(m),!!l),(0,r.Z)(t,"".concat(E,"-").concat(m),!!m),(0,r.Z)(t,"".concat(E,"-fill"),b),(0,r.Z)(t,"".concat(E,"-justified"),x),t))},w))}));H.displayName="Nav",H.defaultProps={justify:!1,fill:!1};var U=Object.assign(H,{Item:D,Link:B})},2932:function(e,n,t){"use strict";t.d(n,{Z:function(){return xe}});var r=t(1413),a=t(5987),o=t(1694),i=t.n(o),s=t(2791),c=t(8633),u=t(239),l=t(6543),f=t(162),d=t(184),v=["bsPrefix","className","as"],p=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.as,c=(0,a.Z)(e,v);t=(0,f.vE)(t,"navbar-brand");var u=s||(c.href?"a":"span");return(0,d.jsx)(u,(0,r.Z)((0,r.Z)({},c),{},{ref:n,className:i()(o,t)}))}));p.displayName="NavbarBrand";var m=p,b=t(4942),x=t(5427),g=t(5090),y=t(1380);var h,Z=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)},N=t(7202),w=t(4083),E=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function P(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=C[e];return t+parseInt((0,x.Z)(n,r[0]),10)+parseInt((0,x.Z)(n,r[1]),10)}var j=(h={},(0,b.Z)(h,g.Wj,"collapse"),(0,b.Z)(h,g.Ix,"collapsing"),(0,b.Z)(h,g.d0,"collapsing"),(0,b.Z)(h,g.cn,"collapse show"),h),O={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:P},k=s.forwardRef((function(e,n){var t=e.onEnter,o=e.onEntering,c=e.onEntered,u=e.onExit,l=e.onExiting,f=e.className,v=e.children,p=e.dimension,m=void 0===p?"height":p,b=e.getDimensionValue,x=void 0===b?P:b,g=(0,a.Z)(e,E),h="function"===typeof m?m():m,C=(0,s.useMemo)((function(){return Z((function(e){e.style[h]="0"}),t)}),[h,t]),O=(0,s.useMemo)((function(){return Z((function(e){var n="scroll".concat(h[0].toUpperCase()).concat(h.slice(1));e.style[h]="".concat(e[n],"px")}),o)}),[h,o]),k=(0,s.useMemo)((function(){return Z((function(e){e.style[h]=null}),c)}),[h,c]),S=(0,s.useMemo)((function(){return Z((function(e){e.style[h]="".concat(x(h,e),"px"),(0,N.Z)(e)}),u)}),[u,x,h]),R=(0,s.useMemo)((function(){return Z((function(e){e.style[h]=null}),l)}),[h,l]);return(0,d.jsx)(w.Z,(0,r.Z)((0,r.Z)({ref:n,addEndListener:y.Z},g),{},{"aria-expanded":g.role?g.in:null,onEnter:C,onEntering:O,onEntered:k,onExit:S,onExiting:R,childRef:v.ref,children:function(e,n){return s.cloneElement(v,(0,r.Z)((0,r.Z)({},n),{},{className:i()(f,v.props.className,j[e],"width"===h&&"collapse-horizontal")}))}}))}));k.defaultProps=O;var S=k,R=t(5715),T=["children","bsPrefix"],_=s.forwardRef((function(e,n){var t=e.children,o=e.bsPrefix,i=(0,a.Z)(e,T);o=(0,f.vE)(o,"navbar-collapse");var c=(0,s.useContext)(R.Z);return(0,d.jsx)(S,(0,r.Z)((0,r.Z)({in:!(!c||!c.expanded)},i),{},{children:(0,d.jsx)("div",{ref:n,className:o,children:t})}))}));_.displayName="NavbarCollapse";var D=_,K=t(9007),I=["bsPrefix","className","children","label","as","onClick"],F=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,c=e.children,u=e.label,l=e.as,v=void 0===l?"button":l,p=e.onClick,m=(0,a.Z)(e,I);t=(0,f.vE)(t,"navbar-toggler");var b=(0,s.useContext)(R.Z)||{},x=b.onToggle,g=b.expanded,y=(0,K.Z)((function(e){p&&p(e),x&&x()}));return"button"===v&&(m.type="button"),(0,d.jsx)(v,(0,r.Z)((0,r.Z)({},m),{},{ref:n,onClick:y,"aria-label":u,className:i()(o,t,!g&&"collapsed"),children:c||(0,d.jsx)("span",{className:"".concat(t,"-icon")})}))}));F.displayName="NavbarToggle",F.defaultProps={label:"Toggle navigation"};var A=F,M=t(885),B=t(9815),L=new WeakMap,H=function(e,n){if(e&&n){var t=L.get(n)||new Map;L.set(n,t);var r=t.get(e);return r||((r=n.matchMedia(e)).refCount=0,t.set(r.media,r)),r}};function U(e,n){void 0===n&&(n="undefined"===typeof window?void 0:window);var t=H(e,n),r=(0,s.useState)((function(){return!!t&&t.matches})),a=r[0],o=r[1];return(0,B.Z)((function(){var t=H(e,n);if(!t)return o(!1);var r=L.get(n),a=function(){o(t.matches)};return t.refCount++,t.addListener(a),a(),function(){t.removeListener(a),t.refCount--,t.refCount<=0&&(null==r||r.delete(t.media)),t=void 0}}),[e]),a}var W,z=function(e){var n=Object.keys(e);function t(e,n){return e===n?n:e?e+" and "+n:n}function r(t){var r=function(e){return n[Math.min(n.indexOf(e)+1,n.length-1)]}(t),a=e[r];return"(max-width: "+(a="number"===typeof a?a-.2+"px":"calc("+a+" - 0.2px)")+")"}return function(n,a,o){var i,c;"object"===typeof n?(i=n,o=a,a=!0):((c={})[n]=a=a||!0,i=c);var u=(0,s.useMemo)((function(){return Object.entries(i).reduce((function(n,a){var o=a[0],i=a[1];return"up"!==i&&!0!==i||(n=t(n,function(n){var t=e[n];return"number"===typeof t&&(t+="px"),"(min-width: "+t+")"}(o))),"down"!==i&&!0!==i||(n=t(n,r(o))),n}),"")}),[JSON.stringify(i)]);return U(u,o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),V=t(6137),q=t(2709),G=(0,l.Z)("offcanvas-body"),J=["bsPrefix","className","children"],Y=(W={},(0,b.Z)(W,g.d0,"show"),(0,b.Z)(W,g.cn,"show"),W),$=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,c=e.children,u=(0,a.Z)(e,J);return t=(0,f.vE)(t,"offcanvas"),(0,d.jsx)(w.Z,(0,r.Z)((0,r.Z)({ref:n,addEndListener:y.Z},u),{},{childRef:c.ref,children:function(e,n){return s.cloneElement(c,(0,r.Z)((0,r.Z)({},n),{},{className:i()(o,c.props.className,(e===g.d0||e===g.Ix)&&"".concat(t,"-toggling"),Y[e])}))}}))}));$.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},$.displayName="OffcanvasToggling";var Q=$,X=t(9820),ee=t(2086),ne=["bsPrefix","className"],te=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=(0,a.Z)(e,ne);return t=(0,f.vE)(t,"offcanvas-header"),(0,d.jsx)(ee.Z,(0,r.Z)((0,r.Z)({ref:n},s),{},{className:i()(o,t)}))}));te.displayName="OffcanvasHeader",te.defaultProps={closeLabel:"Close",closeButton:!1};var re=te,ae=(0,t(7472).Z)("h5"),oe=(0,l.Z)("offcanvas-title",{Component:ae}),ie=t(5137),se=["bsPrefix","className","children","aria-labelledby","placement","responsive","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager","renderStaticNode"];function ce(e){return(0,d.jsx)(Q,(0,r.Z)({},e))}function ue(e){return(0,d.jsx)(q.Z,(0,r.Z)({},e))}var le=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,c=e.children,u=e["aria-labelledby"],l=e.placement,v=e.responsive,p=e.show,m=e.backdrop,b=e.keyboard,x=e.scroll,g=e.onEscapeKeyDown,y=e.onShow,h=e.onHide,Z=e.container,N=e.autoFocus,w=e.enforceFocus,E=e.restoreFocus,C=e.restoreFocusOptions,P=e.onEntered,j=e.onExit,O=e.onExiting,k=e.onEnter,S=e.onEntering,T=e.onExited,_=e.backdropClassName,D=e.manager,I=e.renderStaticNode,F=(0,a.Z)(e,se),A=(0,s.useRef)();t=(0,f.vE)(t,"offcanvas");var B=((0,s.useContext)(R.Z)||{}).onToggle,L=(0,s.useState)(!1),H=(0,M.Z)(L,2),U=H[0],W=H[1],q=z(v||"xs","up");(0,s.useEffect)((function(){W(v?p&&!q:p)}),[p,v,q]);var G=(0,K.Z)((function(){null==B||B(),null==h||h()})),J=(0,s.useMemo)((function(){return{onHide:G}}),[G]);var Y=(0,s.useCallback)((function(e){return(0,d.jsx)("div",(0,r.Z)((0,r.Z)({},e),{},{className:i()("".concat(t,"-backdrop"),_)}))}),[_,t]),$=function(e){return(0,d.jsx)("div",(0,r.Z)((0,r.Z)((0,r.Z)({},e),F),{},{className:i()(o,v?"".concat(t,"-").concat(v):t,"".concat(t,"-").concat(l)),"aria-labelledby":u,children:c}))};return(0,d.jsxs)(d.Fragment,{children:[!U&&(v||I)&&$({}),(0,d.jsx)(X.Z.Provider,{value:J,children:(0,d.jsx)(V.Z,{show:U,ref:n,backdrop:m,container:Z,keyboard:b,autoFocus:N,enforceFocus:w&&!x,restoreFocus:E,restoreFocusOptions:C,onEscapeKeyDown:g,onShow:y,onHide:G,onEnter:function(e){e&&(e.style.visibility="visible");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];null==k||k.apply(void 0,[e].concat(t))},onEntering:S,onEntered:P,onExit:j,onExiting:O,onExited:function(e){e&&(e.style.visibility="");for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];null==T||T.apply(void 0,t)},manager:D||(x?(A.current||(A.current=new ie.Z({handleContainerOverflow:!1})),A.current):(0,ie.t)()),transition:ce,backdropTransition:ue,renderBackdrop:Y,renderDialog:$})})]})}));le.displayName="Offcanvas",le.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var fe=Object.assign(le,{Body:G,Header:re,Title:oe}),de=s.forwardRef((function(e,n){var t=(0,s.useContext)(R.Z);return(0,d.jsx)(fe,(0,r.Z)((0,r.Z)({ref:n,show:!(null==t||!t.expanded)},e),{},{renderStaticNode:!0}))}));de.displayName="NavbarOffcanvas";var ve=de,pe=["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"],me=(0,l.Z)("navbar-text",{Component:"span"}),be=s.forwardRef((function(e,n){var t=(0,u.Ch)(e,{expanded:"onToggle"}),o=t.bsPrefix,l=t.expand,v=t.variant,p=t.bg,m=t.fixed,b=t.sticky,x=t.className,g=t.as,y=void 0===g?"nav":g,h=t.expanded,Z=t.onToggle,N=t.onSelect,w=t.collapseOnSelect,E=(0,a.Z)(t,pe),C=(0,f.vE)(o,"navbar"),P=(0,s.useCallback)((function(){null==N||N.apply(void 0,arguments),w&&h&&(null==Z||Z(!1))}),[N,w,h,Z]);void 0===E.role&&"nav"!==y&&(E.role="navigation");var j="".concat(C,"-expand");"string"===typeof l&&(j="".concat(j,"-").concat(l));var O=(0,s.useMemo)((function(){return{onToggle:function(){return null==Z?void 0:Z(!h)},bsPrefix:C,expanded:!!h,expand:l}}),[C,h,l,Z]);return(0,d.jsx)(R.Z.Provider,{value:O,children:(0,d.jsx)(c.Z.Provider,{value:P,children:(0,d.jsx)(y,(0,r.Z)((0,r.Z)({ref:n},E),{},{className:i()(x,C,l&&j,v&&"".concat(C,"-").concat(v),p&&"bg-".concat(p),b&&"sticky-".concat(b),m&&"fixed-".concat(m))}))})})}));be.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},be.displayName="Navbar";var xe=Object.assign(be,{Brand:m,Collapse:D,Offcanvas:ve,Text:me,Toggle:A})},5715:function(e,n,t){"use strict";var r=t(2791).createContext(null);r.displayName="NavbarContext",n.Z=r},162:function(e,n,t){"use strict";t.d(n,{SC:function(){return u},pi:function(){return s},vE:function(){return i},zG:function(){return c}});var r=t(2791),a=(t(184),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"});o.Consumer,o.Provider;function i(e,n){var t=(0,r.useContext)(o).prefixes;return e||t[n]||n}function s(){return(0,r.useContext)(o).breakpoints}function c(){return(0,r.useContext)(o).minBreakpoint}function u(){return"rtl"===(0,r.useContext)(o).dir}},6543:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(1413),a=t(5987),o=t(1694),i=t.n(o),s=/-(.)/g;var c=t(2791),u=t(162),l=t(184),f=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(n=e,n.replace(s,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,o=void 0===t?d(e):t,s=n.Component,v=n.defaultProps,p=c.forwardRef((function(n,t){var o=n.className,c=n.bsPrefix,d=n.as,v=void 0===d?s||"div":d,p=(0,a.Z)(n,f),m=(0,u.vE)(c,e);return(0,l.jsx)(v,(0,r.Z)({ref:t,className:i()(o,m)},p))}));return p.defaultProps=v,p.displayName=o,p}},6355:function(e,n,t){"use strict";t.d(n,{BKo:function(){return a}});var r=t(9983);function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"}}]})(e)}},239:function(e,n,t){"use strict";t.d(n,{Ch:function(){return c}});var r=t(7462),a=t(3366),o=t(2791);t(2176);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n){return Object.keys(n).reduce((function(t,c){var u,l=t,f=l[i(c)],d=l[c],v=(0,a.Z)(l,[i(c),c].map(s)),p=n[c],m=function(e,n,t){var r=(0,o.useRef)(void 0!==e),a=(0,o.useState)(n),i=a[0],s=a[1],c=void 0!==e,u=r.current;return r.current=c,!c&&u&&i!==n&&s(n),[c?e:i,(0,o.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t&&t.apply(void 0,[e].concat(r)),s(e)}),[t])]}(d,f,e[p]),b=m[0],x=m[1];return(0,r.Z)({},v,((u={})[c]=b,u[p]=x,u))}),e)}function u(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function f(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}u.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},5987:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(3366);function a(e,n){if(null==e)return{};var t,a,o=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},3366:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=161.c161c4f5.chunk.js.map