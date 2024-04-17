"use strict";(self.webpackChunktoddlerpips=self.webpackChunktoddlerpips||[]).push([[9406],{46637:function(e,t,n){n.d(t,{Z:function(){return v}});var r,o=n(67294),i=n(94184),a=n.n(i),u=n(45883),c=n(56960);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=function(e){return o.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.97 8",preserveAspectRatio:"xMidYMid meet"},e),r||(r=o.createElement("path",{d:"M.61 0h9.73a.511.511 0 0 1 .53.77c-.21.31-4.49 6.43-4.86 6.95a.672.672 0 0 1-1.06 0C4.69 7.35.38 1.2.08.75A.506.506 0 0 1 .61 0Z"})))},f=n(86643),d=["className"],m=o.forwardRef((function(e,t){var n=e.className,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,d);return o.createElement("input",Object.assign({className:n,ref:t,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",spellCheck:"false",type:"text"},r))})),p=function(e){var t=e.className,n=e.options,r=e.name,i=e.value,l=e.label,d=e.icon,p=e.size,v=e.theme,h=e.filterFn,g=e.onRenderValue,w=e.onPickerChange,b=(0,c.XA)(),_=(0,u.yc)("SelectPicker"),y=(0,o.useState)(!1),A=y[0],k=y[1],E=(0,o.useState)(""),S=E[0],O=E[1],P=(0,o.useState)(void 0),C=P[0],R=P[1],N=(0,o.useRef)(),Z=(0,o.useRef)(),x=(0,o.useRef)(),L=(0,o.useRef)(),j=(0,o.useRef)(),M=(0,o.useMemo)((function(){return n.filter((function(e){return h({option:e,input:S})}))}),[h,n,S]),I=M.length-1,T=(0,o.useCallback)((function(e,t){w(t.value),k(!1),O(""),R(void 0)}),[w]),B=(0,o.useCallback)((function(e){var t=e.currentTarget,n=JSON.parse(t.value);w(n)}),[w]),U=(0,o.useCallback)((function(e){Z&&Z.current.contains(e.target)||(b?L.current&&L.current.blur():(k(!1),O(""),R(void 0)),document.removeEventListener("click",U))}),[b,L]),z=(0,o.useCallback)((function(){b?L.current&&L.current.focus():(j.current&&j.current.focus(),R(void 0),O(""),k(!0)),document.addEventListener("click",U)}),[b,L,U]);return(0,u.LI)((function(){if(A&&x.current){var e=N.current,t=x.current;void 0!==C&&(t=document.getElementById(_+"-opt-"+C)||t);var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.bottom-n.top-3.5*r.height;e.scrollTop+=o,e.scrollIntoView({block:"nearest",inline:"nearest"})}}),[_,A,C]),o.createElement("div",{ref:Z,role:"combobox","aria-autocomplete":"list","aria-controls":_+"-listbox","aria-expanded":A,className:a()(f.Z.picker,f.Z[p],f.Z[v],A?f.Z.open:f.Z.closed,t)},o.createElement("button",{className:f.Z.selector,onClick:z,type:"button"},o.createElement("div",{className:f.Z.currentValue},d?o.createElement("div",{className:f.Z.icon},d):null,o.createElement("div",{className:f.Z.label},b?null:o.createElement(m,{ref:j,className:f.Z.input,onKeyDown:function(e){if(A){switch(e.key){case"Escape":k(!1),O(""),R(void 0),j.current.blur();break;case"Up":case"ArrowUp":R((function(e){return Math.max(void 0===e?I:e-1,0)}));break;case"Down":case"ArrowDown":R((function(e){return Math.min(void 0===e||e+1>I?0:e+1,I)}));break;case"Enter":case"Tab":var t=M[C];t&&(T(e,t),k(!1),O(""),R(void 0),j.current.blur());break;default:return}e.stopPropagation(),e.preventDefault()}},onFocus:z,onChange:function(e){return O(e.target.value)},value:S}),o.createElement("span",{style:{color:""!==S?"transparent":void 0}},function(e,t,n){if(t)return t;var r=e.find((function(e){return e.value===n}));return r?r.label:n}(n,l,i))),o.createElement(s,{className:f.Z.indicator})),o.createElement("select",{ref:L,name:r,value:JSON.stringify(i),onChange:B},M.map((function(e){return o.createElement("option",{value:JSON.stringify(e.value),key:JSON.stringify(e.value)},e.label)})))),A?M.length>0?o.createElement("ol",{ref:N,id:_+"-listbox",role:"listbox",tabIndex:"0","aria-activedescendant":void 0!==C?_+"-opt-"+C:void 0,className:a()(f.Z.list,f.Z.listOpen)},M.map((function(e,t){return o.createElement("li",{ref:e.value===i?x:void 0,key:JSON.stringify(e.value),id:_+"-opt-"+t,role:"option","aria-selected":e.value===i,className:a()(C===t&&e.value!==i?f.Z.highlighted:void 0,e.value===i?f.Z.active:f.Z.inactive),onClick:function(t){return T(t,e)}},"function"==typeof g?g(e):o.createElement("span",{className:f.Z.valueRow},o.createElement("span",{className:f.Z.value},e.label)))}))):o.createElement("div",{className:a()(f.Z.list,f.Z.listOpen,f.Z.listEmpty)},"No options"):null)};p.defaultProps={theme:"light",size:"normal",icon:void 0,styles:{},filterFn:function(e){var t=e.option,n=e.input;return t.label.match(new RegExp("^"+n,"i"))},onPickerChange:function(){}};var v=p},8069:function(e,t,n){n.d(t,{X:function(){return a}});var r=n(67294),o=n(73935);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t=Object.keys(e),n=function(n){for(var a,u=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(a=u()).done;)for(var c=a.value,l='[data-react-class="'+c+'"]',s=n.querySelectorAll(l),f=0;f<s.length;++f){var d=s[f],m=e[c].__esModule?e[c].default:e[c],p=d.getAttribute("data-react-props"),v=p&&JSON.parse(p),h=d.getAttribute("data-hydrate");if(!m){var g="Cannot find component in current context: '"+c+"'";throw console&&console.log&&(console.log("%c[react-rails] %c"+g+" for element,","font-weight: bold","font-weight: normal",d),console.log("%c[react-rails] %cCurrent context:","font-weight: bold","font-weight: normal",e)),new Error(g+". Make sure your component is available to render.")}var w=r.createElement(m,v);h&&"function"==typeof o.hydrate?(0,o.hydrate)(w,d):(0,o.render)(w,d)}};window.addEventListener("turbo-frame:loaded",(function(e){var t=e.detail.newFrame;n(t)})),n(document)}},56960:function(e,t,n){n.d(t,{FJ:function(){return c},Hz:function(){return i},Ln:function(){return u},Ve:function(){return a},XA:function(){return l}});var r=n(1852),o=n(45883),i=function(e){return(0,r.useMediaQuery)({maxWidth:e})},a=function(e){return(0,r.useMediaQuery)({minWidth:e})},u=function(e){return void 0===e&&(e=void 0),a(1200)||(0,o.s$)()&&"desktop"===e},c=function(e){return void 0===e&&(e=void 0),a(1024)||(0,o.s$)()&&"tablet"===e},l=function(e){return void 0===e&&(e=void 0),i(1023)||(0,o.s$)()&&"mobile"===e}},45883:function(e,t,n){n.d(t,{$N:function(){return R},DB:function(){return X},EO:function(){return N},LF:function(){return x},LI:function(){return _},M8:function(){return M},Mm:function(){return V},Mq:function(){return P},Pz:function(){return B},QK:function(){return W},T9:function(){return y},_n:function(){return w},aA:function(){return k},c5:function(){return b},cI:function(){return $},d9:function(){return C},dK:function(){return z},jv:function(){return I},lD:function(){return S},lV:function(){return A},no:function(){return Z},oH:function(){return L},rY:function(){return T},s$:function(){return O},uf:function(){return F},uo:function(){return j},us:function(){return K},yc:function(){return E},zT:function(){return q}});var r=n(67294),o=n(3522),i=n.n(o),a=n(41609),u=n.n(a),c=n(18029),l=n.n(c),s=n(7334),f=n.n(s),d=n(92742),m=n.n(d),p=n(73955),v=n.n(p),h=n(22274),g=new RegExp(i()(h.ue)+"$","i"),w=h.TF+"://"+h.T$,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",_="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function y(e){return(""+e).toLowerCase().replaceAll(/[&/\\#,+()$~%.'":*?<>{}]/g,"").replaceAll(/\s{2,}/g," ").trim()}function A(e){return(""+e).toLowerCase().trim().replace(/[.:]+/g,"-").replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}function k(){var e="undefined"!=typeof document?document.querySelector('meta[name="csrf-token"]'):void 0;return e?e.getAttribute("content"):void 0}function E(e){return(0,r.useState)(v()(e))[0]}function S(e,t){var n=(0,r.useRef)(e),o=function(e){n.current=e,t.forEach((function(t){"function"==typeof t?t(e):t&&(t.current=e)}))};return o.current||Object.defineProperty(o,"current",{get:function(){return n.current}}),o}function O(){try{return!("undefined"!=typeof document)}catch(e){return!0}}function P(e,t,n){return void 0===n&&(n={}),new Promise((function(r,o){document.getElementById(e)&&r();var i=document.createElement("script");for(var a in i.id=e,i.src=t,i.async=!0,i.type="text/javascript",n["data-timestamp"]=""+new Date,n)n.hasOwnProperty(a)&&i.setAttribute(a,n[a]);i.addEventListener("error",(function(e){return o(e)}),!1),i.addEventListener("load",(function(){return r()}),!1),document.getElementsByTagName("head")[0].appendChild(i)}))}function C(e,t){var n=e.nextElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function R(){for(var e=arguments.length,t=0;t<e;t++)if(null!=arguments[t]&&!Number.isNaN(arguments[t]))return arguments[t];return null}function N(e){if(null==e||""===e)return!1;if("string"==typeof e&&e.match(/^\//))return!0;if(void 0!==e.hostname)return null!==e.hostname.match(g);var t=document.createElement("a");return t.href=e,null!==t.hostname.match(g)}function Z(e){return/[^@]+@[^@]+/.test(e)}function x(e){return l()(f()(m()(e)))}function L(e){return!u()(e)&&/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(e)}function j(e){return!u()(e)&&new RegExp("^.{8,}$").test(e)}function M(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function I(e){var t=Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&");return u()(t)?"":"?"+t}function T(e){return Array.isArray(e)?e:Array.of(e)}function B(e){return String(e)}function U(e){if(Number.isFinite(e)){for(var t=1;Math.round(e*t)/t!==e;)t*=10;return Math.log10(t)}return 0}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Math.max.apply(Math,t.map((function(e){return U(e)})))}function F(e,t){void 0===t&&(t={});try{return Number.isFinite(e)?(t.precision&&(t.maximumFractionDigits=t.precision,delete t.precision),new Intl.NumberFormat(t.locale||[],t).format(e)):""}catch(t){return console.warn(t),e}}function $(e){return e.map((function(e){return{label:e,value:e}}))}var D=/^(visible|hidden)/,J=function(e,t){return!D.test(window.getComputedStyle(e).overflowY||"visible")};function V(e){var t=e instanceof HTMLElement&&(J(e)||J(e));return e?t&&(e.scrollHeight>=e.clientHeight||e.scrollWidth>=e.clientWidth)?e:V(e.parentNode)||document.body:null}function q(e,t){void 0===t&&(t=!1),"undefined"!=typeof window&&window.requestAnimationFrame((function(){return setTimeout((function(){var n=e.getBoundingClientRect();t?e.scrollIntoView(!0):(n.top<0||n.bottom>window.innerHeight)&&e.scrollIntoView(!(n.bottom>window.innerHeight))}),0)}))}function H(e){for(var t=window.atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),o=new Uint8Array(r),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([r],{type:n})}function Y(e){return new Promise((function(t,n){try{var r=window.URL||window.webkitURL||window;if(!r)throw new Error("(browser doesnt support this)");var o=e.match(/height="(\d+)/m),i=o&&o[1]?parseInt(o[1],10):200,a=e.match(/width="(\d+)/m),u=a&&a[1]?parseInt(a[1],10):200;e.match(/xmlns="/im)||(e=e.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" '));var c=document.createElement("canvas");c.width=i,c.height=u;var l=c.getContext("2d"),s=new Blob([e],{type:"image/svg+xml"}),f=r.createObjectURL(s),d=new Image;d.onload=function(){l.drawImage(this,0,0),r.revokeObjectURL(f),window.requestAnimationFrame((function(){return t(c.toDataURL())}))},d.src=f}catch(e){n("failed to convert svg to png "+e)}}))}function W(e){return Y(e).then((function(){return new Promise((function(t){return setTimeout((function(){return Y(e).then(t)}),300)}))}))}function X(e,t){if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(H(t),e);else{var n=document.createElement("a");if("download"in n){n.download=e,n.style.display="none",document.body.appendChild(n);try{var r=H(t),o=URL.createObjectURL(r);n.href=o,n.onclick=function(){return requestAnimationFrame((function(){return URL.revokeObjectURL(o)}))}}catch(e){console.error(e),console.warn("Error while getting object URL. Falling back to string URL."),n.href=t}n.click(),document.body.removeChild(n)}}}function K(e,t,n){void 0===n&&(n={});var r=n,o=r.method,i=r.params;delete n.method,delete n.params;var a=Object.assign({width:550,height:440,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},n);a.left=window.outerWidth/2+(window.screenX||window.screenLeft||0)-a.width/2,a.top=window.outerHeight/2+(window.screenY||window.screenTop||0)-a.height/2;var u=Object.keys(a).map((function(e){return e+"="+a[e]})).join(", ");if("GET"===o||void 0===o)return window.open(e,t,u);if("POST"===o){var c="'w_"+(Date.now()+Math.floor(1e5*Math.random())),l=document.createElement("form");l.setAttribute("method","post"),l.setAttribute("action",e),l.setAttribute("target",c);var s=document.querySelector('meta[name="csrf-token"]'),f=s?s.getAttribute("content"):void 0,d=Object.assign({authenticity_token:f},i||{});if(d)for(var m in d)if(d.hasOwnProperty(m)){var p=document.createElement("input");p.type="hidden",p.name=m,p.value=d[m],l.appendChild(p)}document.body.appendChild(l);var v=window.open("",c,u);return l.target=c,l.submit(),document.body.removeChild(l),v}}},86643:function(e,t){t.Z={picker:"SelectPicker-module__picker___viJG2",primary:"SelectPicker-module__primary___qhTfJ",dark:"SelectPicker-module__dark___rTQ0i",light:"SelectPicker-module__light___mnAP5",normal:"SelectPicker-module__normal___rpqYZ",large:"SelectPicker-module__large___jcKid",selector:"SelectPicker-module__selector___ToVXh",currentValue:"SelectPicker-module__currentValue___Nha8n",input:"SelectPicker-module__input____WDJR",label:"SelectPicker-module__label___cmqZe",list:"SelectPicker-module__list___WbNxf",icon:"SelectPicker-module__icon____HP7i",indicator:"SelectPicker-module__indicator___YSXYU",open:"SelectPicker-module__open___ul2G1",active:"SelectPicker-module__active___jLqRV",highlighted:"SelectPicker-module__highlighted___LRXY2",listOpen:"SelectPicker-module__listOpen___S4k2y",listEmpty:"SelectPicker-module__listEmpty___RVKAK",valueRow:"SelectPicker-module__valueRow___zmHnh",value:"SelectPicker-module__value___ai7uC"}},22274:function(e){e.exports=JSON.parse('{"TF":"https","ue":".babypips.com","T$":"www.babypips.com","Jc":"marketmilk.babypips.com"}')}}]);
//# sourceMappingURL=9406-636d1a75af6ecf9c0646.js.map