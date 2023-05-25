function ch(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kl={exports:{}},Sl={},_={exports:{}},ae={};var Ai=Symbol.for("react.element"),dh=Symbol.for("react.portal"),fh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),hh=Symbol.for("react.profiler"),mh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),wh=Symbol.for("react.memo"),xh=Symbol.for("react.lazy"),Mc=Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,Yd={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Yd,this.updater=n||Qd}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gd(){}Gd.prototype=Nr.prototype;function hu(e,t,n){this.props=e,this.context=t,this.refs=Yd,this.updater=n||Qd}var mu=hu.prototype=new Gd;mu.constructor=hu;qd(mu,Nr.prototype);mu.isPureReactComponent=!0;var $c=Array.isArray,Xd=Object.prototype.hasOwnProperty,gu={current:null},Kd={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Xd.call(t,r)&&!Kd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ai,type:e,key:o,ref:l,props:i,_owner:gu.current}}function Sh(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function bh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nc=/\/+/g;function ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bh(""+e.key):t.toString(36)}function Po(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ai:case dh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ia(l,0):r,$c(i)?(n="",e!=null&&(n=e.replace(Nc,"$&/")+"/"),Po(i,t,n,"",function(u){return u})):i!=null&&(vu(i)&&(i=Sh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Nc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",$c(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ia(o,a);l+=Po(o,t,n,s,i)}else if(s=kh(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ia(o,a++),l+=Po(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return Po(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Oo={transition:null},Eh={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:gu};ae.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Nr;ae.Fragment=fh;ae.Profiler=hh;ae.PureComponent=hu;ae.StrictMode=ph;ae.Suspense=yh;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=gu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Xd.call(t,s)&&!Kd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ai,type:e.type,key:i,ref:o,props:r,_owner:l}};ae.createContext=function(e){return e={$$typeof:gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mh,_context:e},e.Consumer=e};ae.createElement=Zd;ae.createFactory=function(e){var t=Zd.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:vh,render:e}};ae.isValidElement=vu;ae.lazy=function(e){return{$$typeof:xh,_payload:{_status:-1,_result:e},_init:Ch}};ae.memo=function(e,t){return{$$typeof:wh,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Oo.transition;Oo.transition={};try{e()}finally{Oo.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return et.current.useCallback(e,t)};ae.useContext=function(e){return et.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return et.current.useDeferredValue(e)};ae.useEffect=function(e,t){return et.current.useEffect(e,t)};ae.useId=function(){return et.current.useId()};ae.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return et.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};ae.useRef=function(e){return et.current.useRef(e)};ae.useState=function(e){return et.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return et.current.useTransition()};ae.version="18.2.0";(function(e){e.exports=ae})(_);const $e=Wd(_.exports),ns=ch({__proto__:null,default:$e},[_.exports]);var _h=_.exports,Ph=Symbol.for("react.element"),Oh=Symbol.for("react.fragment"),Th=Object.prototype.hasOwnProperty,zh=_h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mh={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Th.call(t,r)&&!Mh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ph,type:e,key:o,ref:l,props:i,_owner:zh.current}}Sl.Fragment=Oh;Sl.jsx=Jd;Sl.jsxs=Jd;(function(e){e.exports=Sl})(kl);const _n=kl.exports.Fragment,d=kl.exports.jsx,R=kl.exports.jsxs;var rs={},yu={exports:{}},dt={},ef={exports:{}},tf={};(function(e){function t(I,X){var ee=I.length;I.push(X);e:for(;0<ee;){var ue=ee-1>>>1,H=I[ue];if(0<i(H,X))I[ue]=X,I[ee]=H,ee=ue;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var X=I[0],ee=I.pop();if(ee!==X){I[0]=ee;e:for(var ue=0,H=I.length,B=H>>>1;ue<B;){var U=2*(ue+1)-1,K=I[U],C=U+1,J=I[C];if(0>i(K,ee))C<H&&0>i(J,K)?(I[ue]=J,I[C]=ee,ue=C):(I[ue]=K,I[U]=ee,ue=U);else if(C<H&&0>i(J,ee))I[ue]=J,I[C]=ee,ue=C;else break e}}return X}function i(I,X){var ee=I.sortIndex-X.sortIndex;return ee!==0?ee:I.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,c=null,p=3,w=!1,y=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=I)r(u),X.sortIndex=X.expirationTime,t(s,X);else break;X=n(u)}}function S(I){if(x=!1,v(I),!y)if(n(s)!==null)y=!0,se($);else{var X=n(u);X!==null&&de(S,X.startTime-I)}}function $(I,X){y=!1,x&&(x=!1,g(z),z=-1),w=!0;var ee=p;try{for(v(X),c=n(s);c!==null&&(!(c.expirationTime>X)||I&&!A());){var ue=c.callback;if(typeof ue=="function"){c.callback=null,p=c.priorityLevel;var H=ue(c.expirationTime<=X);X=e.unstable_now(),typeof H=="function"?c.callback=H:c===n(s)&&r(s),v(X)}else r(s);c=n(s)}if(c!==null)var B=!0;else{var U=n(u);U!==null&&de(S,U.startTime-X),B=!1}return B}finally{c=null,p=ee,w=!1}}var N=!1,j=null,z=-1,q=5,Y=-1;function A(){return!(e.unstable_now()-Y<q)}function T(){if(j!==null){var I=e.unstable_now();Y=I;var X=!0;try{X=j(!0,I)}finally{X?Q():(N=!1,j=null)}}else N=!1}var Q;if(typeof h=="function")Q=function(){h(T)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=T,Q=function(){te.postMessage(null)}}else Q=function(){O(T,0)};function se(I){j=I,N||(N=!0,Q())}function de(I,X){z=O(function(){I(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,se($))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var X=3;break;default:X=p}var ee=p;p=X;try{return I()}finally{p=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=p;p=I;try{return X()}finally{p=ee}},e.unstable_scheduleCallback=function(I,X,ee){var ue=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ue+ee:ue):ee=ue,I){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ee+H,I={id:f++,callback:X,priorityLevel:I,startTime:ee,expirationTime:H,sortIndex:-1},ee>ue?(I.sortIndex=ee,t(u,I),n(s)===null&&I===n(u)&&(x?(g(z),z=-1):x=!0,de(S,ee-ue))):(I.sortIndex=H,t(s,I),y||w||(y=!0,se($))),I},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(I){var X=p;return function(){var ee=p;p=X;try{return I.apply(this,arguments)}finally{p=ee}}}})(tf);(function(e){e.exports=tf})(ef);var nf=_.exports,ct=ef.exports;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rf=new Set,fi={};function Yn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(fi[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=Object.prototype.hasOwnProperty,$h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Rc={};function Nh(e){return is.call(Rc,e)?!0:is.call(Ac,e)?!1:$h.test(e)?Rc[e]=!0:(Ac[e]=!0,!1)}function Ah(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rh(e,t,n,r){if(t===null||typeof t>"u"||Ah(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function xu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wu,xu);Be[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wu,xu);Be[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wu,xu);Be[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ku(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rh(t,n,i,r)&&(n=null),r||i===null?Nh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Su=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),of=Symbol.for("react.provider"),lf=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),as=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,oa;function Kr(e){if(oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||""}return`
`+oa+e}var la=!1;function aa(e,t){if(!e||la)return"";la=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{la=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kr(e):""}function Lh(e){switch(e.tag){case 5:return Kr(e.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case os:return"Profiler";case Su:return"StrictMode";case ls:return"Suspense";case as:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lf:return(e.displayName||"Context")+".Consumer";case of:return(e._context.displayName||"Context")+".Provider";case bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cu:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function jh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===Su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dh(e){var t=sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=Dh(e))}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function us(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cf(e,t){t=t.checked,t!=null&&ku(e,"checked",t,!1)}function cs(e,t){cf(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ds(e,t.type,n):t.hasOwnProperty("defaultValue")&&ds(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Zr(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function df(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ff(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ff(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ih=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){Ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fh=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,t){if(t){if(Fh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vs=null,vr=null,yr=null;function Hc(e){if(e=ji(e)){if(typeof vs!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Pl(t),vs(e.stateNode,e.type,t))}}function gf(e){vr?yr?yr.push(e):yr=[e]:vr=e}function vf(){if(vr){var e=vr,t=yr;if(yr=vr=null,Hc(e),t)for(e=0;e<t.length;e++)Hc(t[e])}}function yf(e,t){return e(t)}function wf(){}var sa=!1;function xf(e,t,n){if(sa)return e(t,n);sa=!0;try{return yf(e,t,n)}finally{sa=!1,(vr!==null||yr!==null)&&(wf(),vf())}}function hi(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ys=!1;if(Gt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{ys=!1}function Hh(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ri=!1,Bo=null,Vo=!1,ws=null,Uh={onError:function(e){ri=!0,Bo=e}};function Bh(e,t,n,r,i,o,l,a,s){ri=!1,Bo=null,Hh.apply(Uh,arguments)}function Vh(e,t,n,r,i,o,l,a,s){if(Bh.apply(this,arguments),ri){if(ri){var u=Bo;ri=!1,Bo=null}else throw Error(D(198));Vo||(Vo=!0,ws=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uc(e){if(Gn(e)!==e)throw Error(D(188))}function Wh(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Uc(i),e;if(o===r)return Uc(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Sf(e){return e=Wh(e),e!==null?bf(e):null}function bf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bf(e);if(t!==null)return t;e=e.sibling}return null}var Cf=ct.unstable_scheduleCallback,Bc=ct.unstable_cancelCallback,Qh=ct.unstable_shouldYield,qh=ct.unstable_requestPaint,Me=ct.unstable_now,Yh=ct.unstable_getCurrentPriorityLevel,_u=ct.unstable_ImmediatePriority,Ef=ct.unstable_UserBlockingPriority,Wo=ct.unstable_NormalPriority,Gh=ct.unstable_LowPriority,_f=ct.unstable_IdlePriority,bl=null,Lt=null;function Xh(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Jh,Kh=Math.log,Zh=Math.LN2;function Jh(e){return e>>>=0,e===0?32:31-(Kh(e)/Zh|0)|0}var io=64,oo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Jr(a):(o&=l,o!==0&&(r=Jr(o)))}else l=n&~i,l!==0?r=Jr(l):o!==0&&(r=Jr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function em(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ot(o),a=1<<l,s=i[l];s===-1?((a&n)===0||(a&r)!==0)&&(i[l]=em(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function nm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Of(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tf,Ou,zf,Mf,$f,ks=!1,lo=[],pn=null,hn=null,mn=null,mi=new Map,gi=new Map,sn=[],rm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function Ur(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ji(t),t!==null&&Ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function im(e,t,n,r,i){switch(t){case"focusin":return pn=Ur(pn,e,t,n,r,i),!0;case"dragenter":return hn=Ur(hn,e,t,n,r,i),!0;case"mouseover":return mn=Ur(mn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return mi.set(o,Ur(mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,gi.set(o,Ur(gi.get(o)||null,e,t,n,r,i)),!0}return!1}function Nf(e){var t=jn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=kf(n),t!==null){e.blockedOn=t,$f(e.priority,function(){zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gs=r,n.target.dispatchEvent(r),gs=null}else return t=ji(n),t!==null&&Ou(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){To(e)&&n.delete(t)}function om(){ks=!1,pn!==null&&To(pn)&&(pn=null),hn!==null&&To(hn)&&(hn=null),mn!==null&&To(mn)&&(mn=null),mi.forEach(Wc),gi.forEach(Wc)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,om)))}function vi(e){function t(i){return Br(i,e)}if(0<lo.length){Br(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Br(pn,e),hn!==null&&Br(hn,e),mn!==null&&Br(mn,e),mi.forEach(t),gi.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&sn.shift()}var wr=Jt.ReactCurrentBatchConfig,qo=!0;function lm(e,t,n,r){var i=fe,o=wr.transition;wr.transition=null;try{fe=1,Tu(e,t,n,r)}finally{fe=i,wr.transition=o}}function am(e,t,n,r){var i=fe,o=wr.transition;wr.transition=null;try{fe=4,Tu(e,t,n,r)}finally{fe=i,wr.transition=o}}function Tu(e,t,n,r){if(qo){var i=Ss(e,t,n,r);if(i===null)wa(e,t,r,Yo,n),Vc(e,r);else if(im(i,e,t,n,r))r.stopPropagation();else if(Vc(e,r),t&4&&-1<rm.indexOf(e)){for(;i!==null;){var o=ji(i);if(o!==null&&Tf(o),o=Ss(e,t,n,r),o===null&&wa(e,t,r,Yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else wa(e,t,r,null,n)}}var Yo=null;function Ss(e,t,n,r){if(Yo=null,e=Eu(r),e=jn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function Af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yh()){case _u:return 1;case Ef:return 4;case Wo:case Gh:return 16;case _f:return 536870912;default:return 16}default:return 16}}var cn=null,zu=null,zo=null;function Rf(){if(zo)return zo;var e,t=zu,n=t.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return zo=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Qc(){return!1}function ft(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:Qc,this.isPropagationStopped=Qc,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=ft(Ar),Li=Oe({},Ar,{view:0,detail:0}),sm=ft(Li),ca,da,Vr,Cl=Oe({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(ca=e.screenX-Vr.screenX,da=e.screenY-Vr.screenY):da=ca=0,Vr=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),qc=ft(Cl),um=Oe({},Cl,{dataTransfer:0}),cm=ft(um),dm=Oe({},Li,{relatedTarget:0}),fa=ft(dm),fm=Oe({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),pm=ft(fm),hm=Oe({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mm=ft(hm),gm=Oe({},Ar,{data:0}),Yc=ft(gm),vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function $u(){return xm}var km=Oe({},Li,{key:function(e){if(e.key){var t=vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sm=ft(km),bm=Oe({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=ft(bm),Cm=Oe({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),Em=ft(Cm),_m=Oe({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pm=ft(_m),Om=Oe({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tm=ft(Om),zm=[9,13,27,32],Nu=Gt&&"CompositionEvent"in window,ii=null;Gt&&"documentMode"in document&&(ii=document.documentMode);var Mm=Gt&&"TextEvent"in window&&!ii,Lf=Gt&&(!Nu||ii&&8<ii&&11>=ii),Xc=String.fromCharCode(32),Kc=!1;function jf(e,t){switch(e){case"keyup":return zm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function $m(e,t){switch(e){case"compositionend":return Df(t);case"keypress":return t.which!==32?null:(Kc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Kc?null:e;default:return null}}function Nm(e,t){if(rr)return e==="compositionend"||!Nu&&jf(e,t)?(e=Rf(),zo=zu=cn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function If(e,t,n,r){gf(r),t=Go(t,"onChange"),0<t.length&&(n=new Mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oi=null,yi=null;function Rm(e){Xf(e,0)}function El(e){var t=lr(e);if(uf(t))return e}function Lm(e,t){if(e==="change")return t}var Ff=!1;if(Gt){var pa;if(Gt){var ha="oninput"in document;if(!ha){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),ha=typeof Jc.oninput=="function"}pa=ha}else pa=!1;Ff=pa&&(!document.documentMode||9<document.documentMode)}function e0(){oi&&(oi.detachEvent("onpropertychange",Hf),yi=oi=null)}function Hf(e){if(e.propertyName==="value"&&El(yi)){var t=[];If(t,yi,e,Eu(e)),xf(Rm,t)}}function jm(e,t,n){e==="focusin"?(e0(),oi=t,yi=n,oi.attachEvent("onpropertychange",Hf)):e==="focusout"&&e0()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(yi)}function Im(e,t){if(e==="click")return El(t)}function Fm(e,t){if(e==="input"||e==="change")return El(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Hm;function wi(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!is.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function t0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,t){var n=t0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=t0(n)}}function Uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Um(e){var t=Bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uf(n.ownerDocument.documentElement,n)){if(r!==null&&Au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=n0(n,o);var l=n0(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bm=Gt&&"documentMode"in document&&11>=document.documentMode,ir=null,bs=null,li=null,Cs=!1;function r0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cs||ir==null||ir!==Uo(r)||(r=ir,"selectionStart"in r&&Au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&wi(li,r)||(li=r,r=Go(bs,"onSelect"),0<r.length&&(t=new Mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},ma={},Vf={};Gt&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function _l(e){if(ma[e])return ma[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vf)return ma[e]=t[n];return e}var Wf=_l("animationend"),Qf=_l("animationiteration"),qf=_l("animationstart"),Yf=_l("transitionend"),Gf=new Map,i0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Gf.set(e,t),Yn(t,[e])}for(var ga=0;ga<i0.length;ga++){var va=i0[ga],Vm=va.toLowerCase(),Wm=va[0].toUpperCase()+va.slice(1);Pn(Vm,"on"+Wm)}Pn(Wf,"onAnimationEnd");Pn(Qf,"onAnimationIteration");Pn(qf,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Yf,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function o0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vh(r,t,void 0,e),e.currentTarget=null}function Xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;o0(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;o0(i,a,u),o=s}}}if(Vo)throw e=ws,Vo=!1,ws=null,e}function ve(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var r=e+"__bubble";n.has(r)||(Kf(t,e,2,!1),n.add(r))}function ya(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[uo]){e[uo]=!0,rf.forEach(function(n){n!=="selectionchange"&&(Qm.has(n)||ya(n,!1,e),ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,ya("selectionchange",!1,t))}}function Kf(e,t,n,r){switch(Af(t)){case 1:var i=lm;break;case 4:i=am;break;default:i=Tu}n=i.bind(null,t,n,e),i=void 0,!ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wa(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=jn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}xf(function(){var u=o,f=Eu(n),c=[];e:{var p=Gf.get(e);if(p!==void 0){var w=Mu,y=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":w=Sm;break;case"focusin":y="focus",w=fa;break;case"focusout":y="blur",w=fa;break;case"beforeblur":case"afterblur":w=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Em;break;case Wf:case Qf:case qf:w=pm;break;case Yf:w=Pm;break;case"scroll":w=sm;break;case"wheel":w=Tm;break;case"copy":case"cut":case"paste":w=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Gc}var x=(t&4)!==0,O=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,v;h!==null;){v=h;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=hi(h,g),S!=null&&x.push(ki(h,S,v)))),O)break;h=h.return}0<x.length&&(p=new w(p,y,null,n,f),c.push({event:p,listeners:x}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==gs&&(y=n.relatedTarget||n.fromElement)&&(jn(y)||y[Xt]))break e;if((w||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?jn(y):null,y!==null&&(O=Gn(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(x=qc,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Gc,S="onPointerLeave",g="onPointerEnter",h="pointer"),O=w==null?p:lr(w),v=y==null?p:lr(y),p=new x(S,h+"leave",w,n,f),p.target=O,p.relatedTarget=v,S=null,jn(f)===u&&(x=new x(g,h+"enter",y,n,f),x.target=v,x.relatedTarget=O,S=x),O=S,w&&y)t:{for(x=w,g=y,h=0,v=x;v;v=Jn(v))h++;for(v=0,S=g;S;S=Jn(S))v++;for(;0<h-v;)x=Jn(x),h--;for(;0<v-h;)g=Jn(g),v--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=Jn(x),g=Jn(g)}x=null}else x=null;w!==null&&l0(c,p,w,x,!1),y!==null&&O!==null&&l0(c,O,y,x,!0)}}e:{if(p=u?lr(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var $=Lm;else if(Zc(p))if(Ff)$=Fm;else{$=Dm;var N=jm}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=Im);if($&&($=$(e,u))){If(c,$,n,f);break e}N&&N(e,p,u),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&ds(p,"number",p.value)}switch(N=u?lr(u):window,e){case"focusin":(Zc(N)||N.contentEditable==="true")&&(ir=N,bs=u,li=null);break;case"focusout":li=bs=ir=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,r0(c,n,f);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":r0(c,n,f)}var j;if(Nu)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else rr?jf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Lf&&n.locale!=="ko"&&(rr||z!=="onCompositionStart"?z==="onCompositionEnd"&&rr&&(j=Rf()):(cn=f,zu="value"in cn?cn.value:cn.textContent,rr=!0)),N=Go(u,z),0<N.length&&(z=new Yc(z,e,null,n,f),c.push({event:z,listeners:N}),j?z.data=j:(j=Df(n),j!==null&&(z.data=j)))),(j=Mm?$m(e,n):Nm(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(f=new Yc("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=j))}Xf(c,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hi(e,n),o!=null&&r.unshift(ki(e,o,i)),o=hi(e,t),o!=null&&r.push(ki(e,o,i))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function l0(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=hi(n,o),s!=null&&l.unshift(ki(n,s,a))):i||(s=hi(n,o),s!=null&&l.push(ki(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var qm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function a0(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Ym,"")}function co(e,t,n){if(t=a0(t),a0(e)!==t&&n)throw Error(D(425))}function Xo(){}var Es=null,_s=null;function Ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Os=typeof setTimeout=="function"?setTimeout:void 0,Gm=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(e){return s0.resolve(null).then(e).catch(Km)}:Os;function Km(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function u0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),At="__reactFiber$"+Rr,Si="__reactProps$"+Rr,Xt="__reactContainer$"+Rr,Ts="__reactEvents$"+Rr,Zm="__reactListeners$"+Rr,Jm="__reactHandles$"+Rr;function jn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=u0(e);e!==null;){if(n=e[At])return n;e=u0(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[At]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Pl(e){return e[Si]||null}var zs=[],ar=-1;function On(e){return{current:e}}function we(e){0>ar||(e.current=zs[ar],zs[ar]=null,ar--)}function me(e,t){ar++,zs[ar]=e.current,e.current=t}var En={},Ye=On(En),it=On(!1),Bn=En;function Er(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Ko(){we(it),we(Ye)}function c0(e,t,n){if(Ye.current!==En)throw Error(D(168));me(Ye,t),me(it,n)}function Zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,jh(e)||"Unknown",i));return Oe({},n,r)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Bn=Ye.current,me(Ye,e),me(it,it.current),!0}function d0(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Zf(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,we(it),we(Ye),me(Ye,e)):we(it),me(it,n)}var Vt=null,Ol=!1,ka=!1;function Jf(e){Vt===null?Vt=[e]:Vt.push(e)}function e2(e){Ol=!0,Jf(e)}function Tn(){if(!ka&&Vt!==null){ka=!0;var e=0,t=fe;try{var n=Vt;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Ol=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),Cf(_u,Tn),i}finally{fe=t,ka=!1}}return null}var sr=[],ur=0,Jo=null,el=0,mt=[],gt=0,Vn=null,Wt=1,Qt="";function An(e,t){sr[ur++]=el,sr[ur++]=Jo,Jo=e,el=t}function e1(e,t,n){mt[gt++]=Wt,mt[gt++]=Qt,mt[gt++]=Vn,Vn=e;var r=Wt;e=Qt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Wt=1<<32-Ot(t)+i|n<<i|r,Qt=o+e}else Wt=1<<o|n<<i|r,Qt=e}function Ru(e){e.return!==null&&(An(e,1),e1(e,1,0))}function Lu(e){for(;e===Jo;)Jo=sr[--ur],sr[ur]=null,el=sr[--ur],sr[ur]=null;for(;e===Vn;)Vn=mt[--gt],mt[gt]=null,Qt=mt[--gt],mt[gt]=null,Wt=mt[--gt],mt[gt]=null}var ut=null,st=null,be=!1,Et=null;function t1(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function f0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,st=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Wt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,st=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(be){var t=st;if(t){var n=t;if(!f0(e,t)){if(Ms(e))throw Error(D(418));t=gn(n.nextSibling);var r=ut;t&&f0(e,t)?t1(r,n):(e.flags=e.flags&-4097|2,be=!1,ut=e)}}else{if(Ms(e))throw Error(D(418));e.flags=e.flags&-4097|2,be=!1,ut=e}}}function p0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function fo(e){if(e!==ut)return!1;if(!be)return p0(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ps(e.type,e.memoizedProps)),t&&(t=st)){if(Ms(e))throw n1(),Error(D(418));for(;t;)t1(e,t),t=gn(t.nextSibling)}if(p0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=ut?gn(e.stateNode.nextSibling):null;return!0}function n1(){for(var e=st;e;)e=gn(e.nextSibling)}function _r(){st=ut=null,be=!1}function ju(e){Et===null?Et=[e]:Et.push(e)}var t2=Jt.ReactCurrentBatchConfig;function bt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var tl=On(null),nl=null,cr=null,Du=null;function Iu(){Du=cr=nl=null}function Fu(e){var t=tl.current;we(tl),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){nl=e,Du=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Du!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(nl===null)throw Error(D(308));cr=e,nl.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Dn=null;function Hu(e){Dn===null?Dn=[e]:Dn.push(e)}function r1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ce&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function $o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pu(e,n)}}function h0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,f=u=s=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,w=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){c=y.call(w,c,p);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(w,c,p):y,p==null)break e;c=Oe({},c,p);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=w,s=c):f=f.next=w,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=l,e.lanes=l,e.memoizedState=c}}function m0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var o1=new nf.Component().refs;function As(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=wn(e),o=Yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(Tt(t,e,i,r),$o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=wn(e),o=Yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vn(e,o,i),t!==null&&(Tt(t,e,i,r),$o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=wn(e),i=Yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=vn(e,i,r),t!==null&&(Tt(t,e,r,n),$o(t,e,r))}};function g0(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!wi(n,r)||!wi(i,o):!0}function l1(e,t,n){var r=!1,i=En,o=t.contextType;return typeof o=="object"&&o!==null?o=wt(o):(i=ot(t)?Bn:Ye.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):En),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function v0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=o1,Uu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wt(o):(o=ot(t)?Bn:Ye.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(As(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tl.enqueueReplaceState(i,i.state,null),rl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===o1&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function y0(e){var t=e._init;return t(e._payload)}function a1(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=xn(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,v,S){return h===null||h.tag!==6?(h=Oa(v,g.mode,S),h.return=g,h):(h=i(h,v),h.return=g,h)}function s(g,h,v,S){var $=v.type;return $===nr?f(g,h,v.props.children,S,v.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ln&&y0($)===h.type)?(S=i(h,v.props),S.ref=Wr(g,h,v),S.return=g,S):(S=Do(v.type,v.key,v.props,null,g.mode,S),S.ref=Wr(g,h,v),S.return=g,S)}function u(g,h,v,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Ta(v,g.mode,S),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function f(g,h,v,S,$){return h===null||h.tag!==7?(h=Un(v,g.mode,S,$),h.return=g,h):(h=i(h,v),h.return=g,h)}function c(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Oa(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case to:return v=Do(h.type,h.key,h.props,null,g.mode,v),v.ref=Wr(g,null,h),v.return=g,v;case tr:return h=Ta(h,g.mode,v),h.return=g,h;case ln:var S=h._init;return c(g,S(h._payload),v)}if(Zr(h)||Fr(h))return h=Un(h,g.mode,v,null),h.return=g,h;po(g,h)}return null}function p(g,h,v,S){var $=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return $!==null?null:a(g,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===$?s(g,h,v,S):null;case tr:return v.key===$?u(g,h,v,S):null;case ln:return $=v._init,p(g,h,$(v._payload),S)}if(Zr(v)||Fr(v))return $!==null?null:f(g,h,v,S,null);po(g,v)}return null}function w(g,h,v,S,$){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(h,g,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case to:return g=g.get(S.key===null?v:S.key)||null,s(h,g,S,$);case tr:return g=g.get(S.key===null?v:S.key)||null,u(h,g,S,$);case ln:var N=S._init;return w(g,h,v,N(S._payload),$)}if(Zr(S)||Fr(S))return g=g.get(v)||null,f(h,g,S,$,null);po(h,S)}return null}function y(g,h,v,S){for(var $=null,N=null,j=h,z=h=0,q=null;j!==null&&z<v.length;z++){j.index>z?(q=j,j=null):q=j.sibling;var Y=p(g,j,v[z],S);if(Y===null){j===null&&(j=q);break}e&&j&&Y.alternate===null&&t(g,j),h=o(Y,h,z),N===null?$=Y:N.sibling=Y,N=Y,j=q}if(z===v.length)return n(g,j),be&&An(g,z),$;if(j===null){for(;z<v.length;z++)j=c(g,v[z],S),j!==null&&(h=o(j,h,z),N===null?$=j:N.sibling=j,N=j);return be&&An(g,z),$}for(j=r(g,j);z<v.length;z++)q=w(j,g,z,v[z],S),q!==null&&(e&&q.alternate!==null&&j.delete(q.key===null?z:q.key),h=o(q,h,z),N===null?$=q:N.sibling=q,N=q);return e&&j.forEach(function(A){return t(g,A)}),be&&An(g,z),$}function x(g,h,v,S){var $=Fr(v);if(typeof $!="function")throw Error(D(150));if(v=$.call(v),v==null)throw Error(D(151));for(var N=$=null,j=h,z=h=0,q=null,Y=v.next();j!==null&&!Y.done;z++,Y=v.next()){j.index>z?(q=j,j=null):q=j.sibling;var A=p(g,j,Y.value,S);if(A===null){j===null&&(j=q);break}e&&j&&A.alternate===null&&t(g,j),h=o(A,h,z),N===null?$=A:N.sibling=A,N=A,j=q}if(Y.done)return n(g,j),be&&An(g,z),$;if(j===null){for(;!Y.done;z++,Y=v.next())Y=c(g,Y.value,S),Y!==null&&(h=o(Y,h,z),N===null?$=Y:N.sibling=Y,N=Y);return be&&An(g,z),$}for(j=r(g,j);!Y.done;z++,Y=v.next())Y=w(j,g,z,Y.value,S),Y!==null&&(e&&Y.alternate!==null&&j.delete(Y.key===null?z:Y.key),h=o(Y,h,z),N===null?$=Y:N.sibling=Y,N=Y);return e&&j.forEach(function(T){return t(g,T)}),be&&An(g,z),$}function O(g,h,v,S){if(typeof v=="object"&&v!==null&&v.type===nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var $=v.key,N=h;N!==null;){if(N.key===$){if($=v.type,$===nr){if(N.tag===7){n(g,N.sibling),h=i(N,v.props.children),h.return=g,g=h;break e}}else if(N.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===ln&&y0($)===N.type){n(g,N.sibling),h=i(N,v.props),h.ref=Wr(g,N,v),h.return=g,g=h;break e}n(g,N);break}else t(g,N);N=N.sibling}v.type===nr?(h=Un(v.props.children,g.mode,S,v.key),h.return=g,g=h):(S=Do(v.type,v.key,v.props,null,g.mode,S),S.ref=Wr(g,h,v),S.return=g,g=S)}return l(g);case tr:e:{for(N=v.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Ta(v,g.mode,S),h.return=g,g=h}return l(g);case ln:return N=v._init,O(g,h,N(v._payload),S)}if(Zr(v))return y(g,h,v,S);if(Fr(v))return x(g,h,v,S);po(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,v),h.return=g,g=h):(n(g,h),h=Oa(v,g.mode,S),h.return=g,g=h),l(g)):n(g,h)}return O}var Pr=a1(!0),s1=a1(!1),Di={},jt=On(Di),bi=On(Di),Ci=On(Di);function In(e){if(e===Di)throw Error(D(174));return e}function Bu(e,t){switch(me(Ci,t),me(bi,e),me(jt,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ps(t,e)}we(jt),me(jt,t)}function Or(){we(jt),we(bi),we(Ci)}function u1(e){In(Ci.current);var t=In(jt.current),n=ps(t,e.type);t!==n&&(me(bi,e),me(jt,n))}function Vu(e){bi.current===e&&(we(jt),we(bi))}var _e=On(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=[];function Wu(){for(var e=0;e<Sa.length;e++)Sa[e]._workInProgressVersionPrimary=null;Sa.length=0}var No=Jt.ReactCurrentDispatcher,ba=Jt.ReactCurrentBatchConfig,Wn=0,Pe=null,Ae=null,je=null,ol=!1,ai=!1,Ei=0,n2=0;function We(){throw Error(D(321))}function Qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function qu(e,t,n,r,i,o){if(Wn=o,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?l2:a2,e=n(r,i),ai){o=0;do{if(ai=!1,Ei=0,25<=o)throw Error(D(301));o+=1,je=Ae=null,t.updateQueue=null,No.current=s2,e=n(r,i)}while(ai)}if(No.current=ll,t=Ae!==null&&Ae.next!==null,Wn=0,je=Ae=Pe=null,ol=!1,t)throw Error(D(300));return e}function Yu(){var e=Ei!==0;return Ei=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Pe.memoizedState=je=e:je=je.next=e,je}function xt(){if(Ae===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=je===null?Pe.memoizedState:je.next;if(t!==null)je=t,Ae=e;else{if(e===null)throw Error(D(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},je===null?Pe.memoizedState=je=e:je=je.next=e}return je}function _i(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=xt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((Wn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,Pe.lanes|=f,Qn|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,zt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Pe.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=xt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);zt(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function c1(){}function d1(e,t){var n=Pe,r=xt(),i=t(),o=!zt(r.memoizedState,i);if(o&&(r.memoizedState=i,rt=!0),r=r.queue,Gu(h1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Pi(9,p1.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(D(349));(Wn&30)!==0||f1(n,t,i)}return i}function f1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function p1(e,t,n,r){t.value=n,t.getSnapshot=r,m1(t)&&g1(e)}function h1(e,t,n){return n(function(){m1(t)&&g1(e)})}function m1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function g1(e){var t=Kt(e,1);t!==null&&Tt(t,e,1,-1)}function w0(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=o2.bind(null,Pe,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function v1(){return xt().memoizedState}function Ao(e,t,n,r){var i=$t();Pe.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var i=xt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var l=Ae.memoizedState;if(o=l.destroy,r!==null&&Qu(r,l.deps)){i.memoizedState=Pi(t,n,o,r);return}}Pe.flags|=e,i.memoizedState=Pi(1|t,n,o,r)}function x0(e,t){return Ao(8390656,8,e,t)}function Gu(e,t){return zl(2048,8,e,t)}function y1(e,t){return zl(4,2,e,t)}function w1(e,t){return zl(4,4,e,t)}function x1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k1(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,x1.bind(null,t,e),n)}function Xu(){}function S1(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function b1(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function C1(e,t,n){return(Wn&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(zt(n,t)||(n=Pf(),Pe.lanes|=n,Qn|=n,e.baseState=!0),t)}function r2(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=ba.transition;ba.transition={};try{e(!1),t()}finally{fe=n,ba.transition=r}}function E1(){return xt().memoizedState}function i2(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_1(e))P1(t,n);else if(n=r1(e,t,n,r),n!==null){var i=Je();Tt(n,e,r,i),O1(n,t,r)}}function o2(e,t,n){var r=wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_1(e))P1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,l)){var s=t.interleaved;s===null?(i.next=i,Hu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=r1(e,t,i,r),n!==null&&(i=Je(),Tt(n,e,r,i),O1(n,t,r))}}function _1(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function P1(e,t){ai=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function O1(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pu(e,n)}}var ll={readContext:wt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},l2={readContext:wt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:x0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,x1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i2.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:w0,useDebugValue:Xu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=w0(!1),t=e[0];return e=r2.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=$t();if(be){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ie===null)throw Error(D(349));(Wn&30)!==0||f1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,x0(h1.bind(null,r,o,e),[e]),r.flags|=2048,Pi(9,p1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ie.identifierPrefix;if(be){var n=Qt,r=Wt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a2={readContext:wt,useCallback:S1,useContext:wt,useEffect:Gu,useImperativeHandle:k1,useInsertionEffect:y1,useLayoutEffect:w1,useMemo:b1,useReducer:Ca,useRef:v1,useState:function(){return Ca(_i)},useDebugValue:Xu,useDeferredValue:function(e){var t=xt();return C1(t,Ae.memoizedState,e)},useTransition:function(){var e=Ca(_i)[0],t=xt().memoizedState;return[e,t]},useMutableSource:c1,useSyncExternalStore:d1,useId:E1,unstable_isNewReconciler:!1},s2={readContext:wt,useCallback:S1,useContext:wt,useEffect:Gu,useImperativeHandle:k1,useInsertionEffect:y1,useLayoutEffect:w1,useMemo:b1,useReducer:Ea,useRef:v1,useState:function(){return Ea(_i)},useDebugValue:Xu,useDeferredValue:function(e){var t=xt();return Ae===null?t.memoizedState=e:C1(t,Ae.memoizedState,e)},useTransition:function(){var e=Ea(_i)[0],t=xt().memoizedState;return[e,t]},useMutableSource:c1,useSyncExternalStore:d1,useId:E1,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=Lh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _a(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u2=typeof WeakMap=="function"?WeakMap:Map;function T1(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Qs=r),Ls(e,t)},n}function z1(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ls(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ls(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function k0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new u2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=b2.bind(null,e,t,n),t.then(e,e))}function S0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function b0(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var c2=Jt.ReactCurrentOwner,rt=!1;function Ke(e,t,n,r){t.child=e===null?s1(t,null,n,r):Pr(t,e.child,n,r)}function C0(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=qu(e,t,n,r,o,i),n=Yu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(be&&n&&Ru(t),t.flags|=1,Ke(e,t,r,i),t.child)}function E0(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ic(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,M1(e,t,o,r,i)):(e=Do(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(l,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=xn(o,r),e.ref=t.ref,e.return=t,t.child=e}function M1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wi(o,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return js(e,t,n,r,i)}function $1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(fr,at),at|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(fr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(fr,at),at|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(fr,at),at|=r;return Ke(e,t,i,n),t.child}function N1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,i){var o=ot(n)?Bn:Ye.current;return o=Er(t,o),xr(t,i),n=qu(e,t,n,r,o,i),r=Yu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(be&&r&&Ru(t),t.flags|=1,Ke(e,t,n,i),t.child)}function _0(e,t,n,r,i){if(ot(n)){var o=!0;Zo(t)}else o=!1;if(xr(t,i),t.stateNode===null)Ro(e,t),l1(t,n,r),Rs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=ot(n)?Bn:Ye.current,u=Er(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&v0(t,l,r,u),an=!1;var p=t.memoizedState;l.state=p,rl(t,r,l,i),s=t.memoizedState,a!==r||p!==s||it.current||an?(typeof f=="function"&&(As(t,n,f,r),s=t.memoizedState),(a=an||g0(t,n,a,r,p,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,i1(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:bt(t.type,a),l.props=u,c=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=ot(n)?Bn:Ye.current,s=Er(t,s));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||p!==s)&&v0(t,l,r,s),an=!1,p=t.memoizedState,l.state=p,rl(t,r,l,i);var y=t.memoizedState;a!==c||p!==y||it.current||an?(typeof w=="function"&&(As(t,n,w,r),y=t.memoizedState),(u=an||g0(t,n,u,r,p,y,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ds(e,t,n,r,o,i)}function Ds(e,t,n,r,i,o){N1(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&d0(t,n,!1),Zt(e,t,o);r=t.stateNode,c2.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,a,o)):Ke(e,t,a,o),t.memoizedState=r.state,i&&d0(t,n,!0),t.child}function A1(e){var t=e.stateNode;t.pendingContext?c0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&c0(e,t.context,!1),Bu(e,t.containerInfo)}function P0(e,t,n,r,i){return _r(),ju(i),t.flags|=256,Ke(e,t,n,r),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function R1(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(_e,i&1),e===null)return $s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Nl(l,r,0,null),e=Un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fs(n),t.memoizedState=Is,e):Ku(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return d2(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=xn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=xn(a,o):(o=Un(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Is,r}return o=e.child,e=o.sibling,r=xn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&ju(r),Pr(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d2(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=_a(Error(D(422))),ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Nl({mode:"visible",children:r.children},i,0,null),o=Un(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Pr(t,e.child,null,l),t.child.memoizedState=Fs(l),t.memoizedState=Is,o);if((t.mode&1)===0)return ho(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=_a(o,r,void 0),ho(e,t,l,r)}if(a=(l&e.childLanes)!==0,rt||a){if(r=Ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),Tt(r,e,i,-1))}return rc(),r=_a(Error(D(421))),ho(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,st=gn(i.nextSibling),ut=t,be=!0,Et=null,e!==null&&(mt[gt++]=Wt,mt[gt++]=Qt,mt[gt++]=Vn,Wt=e.id,Qt=e.overflow,Vn=t),t=Ku(t,r.children),t.flags|=4096,t)}function O0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ns(e.return,t,n)}function Pa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function L1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ke(e,t,r.children,n),r=_e.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O0(e,n,t);else if(e.tag===19)O0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(_e,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&il(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pa(t,!0,n,null,o);break;case"together":Pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f2(e,t,n){switch(t.tag){case 3:A1(t),_r();break;case 5:u1(t);break;case 1:ot(t.type)&&Zo(t);break;case 4:Bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(_e,_e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?R1(e,t,n):(me(_e,_e.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);me(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return L1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,$1(e,t,n)}return Zt(e,t,n)}var j1,Hs,D1,I1;j1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hs=function(){};D1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(jt.current);var o=null;switch(n){case"input":i=us(e,i),r=us(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=fs(e,i),r=fs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}hs(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ve("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};I1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p2(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ot(t.type)&&Ko(),Qe(t),null;case 3:return r=t.stateNode,Or(),we(it),we(Ye),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Gs(Et),Et=null))),Hs(e,t),Qe(t),null;case 5:Vu(t);var i=In(Ci.current);if(n=t.type,e!==null&&t.stateNode!=null)D1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Qe(t),null}if(e=In(jt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[At]=t,r[Si]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)ve(ei[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":jc(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":Ic(r,o),ve("invalid",r)}hs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&co(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&co(r.textContent,a,e),i=["children",""+a]):fi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ve("scroll",r)}switch(n){case"input":no(r),Dc(r,o,!0);break;case"textarea":no(r),Fc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ff(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[At]=t,e[Si]=r,j1(e,t,!1,!1),t.stateNode=e;e:{switch(l=ms(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)ve(ei[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":jc(e,r),i=us(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ve("invalid",e);break;case"textarea":Ic(e,r),i=fs(e,r),ve("invalid",e);break;default:i=r}hs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?mf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&pf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&pi(e,s):typeof s=="number"&&pi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&ku(e,o,s,l))}switch(n){case"input":no(e),Dc(e,r,!1);break;case"textarea":no(e),Fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gr(e,!!r.multiple,o,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)I1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=In(Ci.current),In(jt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(o=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Qe(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)n1(),_r(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[At]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),o=!1}else Et!==null&&(Gs(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Re===0&&(Re=3):rc())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Or(),Hs(e,t),e===null&&xi(t.stateNode.containerInfo),Qe(t),null;case 10:return Fu(t.type._context),Qe(t),null;case 17:return ot(t.type)&&Ko(),Qe(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return Qe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Qr(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=il(e),l!==null){for(t.flags|=128,Qr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>zr&&(t.flags|=128,r=!0,Qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=il(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!be)return Qe(t),null}else 2*Me()-o.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=_e.current,me(_e,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function h2(e,t){switch(Lu(t),t.tag){case 1:return ot(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),we(it),we(Ye),Wu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vu(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Or(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var mo=!1,qe=!1,m2=typeof WeakSet=="function"?WeakSet:Set,G=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Us(e,t,n){try{n()}catch(r){ze(e,t,r)}}var T0=!1;function g2(e,t){if(Es=qo,e=Bf(),Au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,c=e,p=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(w=c.firstChild)!==null;)p=c,c=w;for(;;){if(c===e)break t;if(p===n&&++u===i&&(a=l),p===o&&++f===r&&(s=l),(w=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(_s={focusedElem:e,selectionRange:n},qo=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,O=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:bt(t.type,x),O);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(S){ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return y=T0,T0=!1,y}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Us(t,n,o)}i=i.next}while(i!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function F1(e){var t=e.alternate;t!==null&&(e.alternate=null,F1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Si],delete t[Ts],delete t[Zm],delete t[Jm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function H1(e){return e.tag===5||e.tag===3||e.tag===4}function z0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}var He=null,Ct=!1;function tn(e,t,n){for(n=n.child;n!==null;)U1(e,t,n),n=n.sibling}function U1(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:qe||dr(n,t);case 6:var r=He,i=Ct;He=null,tn(e,t,n),He=r,Ct=i,He!==null&&(Ct?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ct?(e=He,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),vi(e)):xa(He,n.stateNode));break;case 4:r=He,i=Ct,He=n.stateNode.containerInfo,Ct=!0,tn(e,t,n),He=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Us(n,t,l),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!qe&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,t,a)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,tn(e,t,n),qe=r):tn(e,t,n);break;default:tn(e,t,n)}}function M0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m2),t.forEach(function(r){var i=E2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Ct=!1;break e;case 3:He=a.stateNode.containerInfo,Ct=!0;break e;case 4:He=a.stateNode.containerInfo,Ct=!0;break e}a=a.return}if(He===null)throw Error(D(160));U1(o,l,i),He=null,Ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B1(t,e),t=t.sibling}function B1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Mt(e),r&4){try{si(3,e,e.return),Ml(3,e)}catch(x){ze(e,e.return,x)}try{si(5,e,e.return)}catch(x){ze(e,e.return,x)}}break;case 1:St(t,e),Mt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(St(t,e),Mt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(x){ze(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cf(i,o),ms(a,l);var u=ms(a,o);for(l=0;l<s.length;l+=2){var f=s[l],c=s[l+1];f==="style"?mf(i,c):f==="dangerouslySetInnerHTML"?pf(i,c):f==="children"?pi(i,c):ku(i,f,c,u)}switch(a){case"input":cs(i,o);break;case"textarea":df(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?gr(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?gr(i,!!o.multiple,o.defaultValue,!0):gr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Si]=o}catch(x){ze(e,e.return,x)}}break;case 6:if(St(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ze(e,e.return,x)}}break;case 3:if(St(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(x){ze(e,e.return,x)}break;case 4:St(t,e),Mt(e);break;case 13:St(t,e),Mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=Me())),r&4&&M0(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||f,St(t,e),qe=u):St(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(G=e,f=e.child;f!==null;){for(c=G=f;G!==null;){switch(p=G,w=p.child,p.tag){case 0:case 11:case 14:case 15:si(4,p,p.return);break;case 1:dr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ze(r,n,x)}}break;case 5:dr(p,p.return);break;case 22:if(p.memoizedState!==null){N0(c);continue}}w!==null?(w.return=p,G=w):N0(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=hf("display",l))}catch(x){ze(e,e.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){ze(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:St(t,e),Mt(e),r&4&&M0(e);break;case 21:break;default:St(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(H1(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=z0(e);Ws(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=z0(e);Vs(e,a,l);break;default:throw Error(D(161))}}catch(s){ze(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v2(e,t,n){G=e,V1(e)}function V1(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||mo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||qe;a=mo;var u=qe;if(mo=l,(qe=s)&&!u)for(G=i;G!==null;)l=G,s=l.child,l.tag===22&&l.memoizedState!==null?A0(i):s!==null?(s.return=l,G=s):A0(i);for(;o!==null;)G=o,V1(o),o=o.sibling;G=i,mo=a,qe=u}$0(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,G=o):$0(e)}}function $0(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&m0(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}m0(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&vi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}qe||t.flags&512&&Bs(t)}catch(p){ze(t,t.return,p)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function N0(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function A0(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(s){ze(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ze(t,i,s)}}var o=t.return;try{Bs(t)}catch(s){ze(t,o,s)}break;case 5:var l=t.return;try{Bs(t)}catch(s){ze(t,l,s)}}}catch(s){ze(t,t.return,s)}if(t===e){G=null;break}var a=t.sibling;if(a!==null){a.return=t.return,G=a;break}G=t.return}}var y2=Math.ceil,al=Jt.ReactCurrentDispatcher,Zu=Jt.ReactCurrentOwner,yt=Jt.ReactCurrentBatchConfig,ce=0,Ie=null,Ne=null,Ue=0,at=0,fr=On(0),Re=0,Oi=null,Qn=0,$l=0,Ju=0,ui=null,nt=null,ec=0,zr=1/0,Bt=null,sl=!1,Qs=null,yn=null,go=!1,dn=null,ul=0,ci=0,qs=null,Lo=-1,jo=0;function Je(){return(ce&6)!==0?Me():Lo!==-1?Lo:Lo=Me()}function wn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Ue!==0?Ue&-Ue:t2.transition!==null?(jo===0&&(jo=Pf()),jo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Af(e.type)),e)}function Tt(e,t,n,r){if(50<ci)throw ci=0,qs=null,Error(D(185));Ri(e,n,r),((ce&2)===0||e!==Ie)&&(e===Ie&&((ce&2)===0&&($l|=n),Re===4&&un(e,Ue)),lt(e,r),n===1&&ce===0&&(t.mode&1)===0&&(zr=Me()+500,Ol&&Tn()))}function lt(e,t){var n=e.callbackNode;tm(e,t);var r=Qo(e,e===Ie?Ue:0);if(r===0)n!==null&&Bc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bc(n),t===1)e.tag===0?e2(R0.bind(null,e)):Jf(R0.bind(null,e)),Xm(function(){(ce&6)===0&&Tn()}),n=null;else{switch(Of(r)){case 1:n=_u;break;case 4:n=Ef;break;case 16:n=Wo;break;case 536870912:n=_f;break;default:n=Wo}n=Z1(n,W1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W1(e,t){if(Lo=-1,jo=0,(ce&6)!==0)throw Error(D(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=Qo(e,e===Ie?Ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=cl(e,r);else{t=r;var i=ce;ce|=2;var o=q1();(Ie!==e||Ue!==t)&&(Bt=null,zr=Me()+500,Hn(e,t));do try{k2();break}catch(a){Q1(e,a)}while(1);Iu(),al.current=o,ce=i,Ne!==null?t=0:(Ie=null,Ue=0,t=Re)}if(t!==0){if(t===2&&(i=xs(e),i!==0&&(r=i,t=Ys(e,i))),t===1)throw n=Oi,Hn(e,0),un(e,r),lt(e,Me()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,(r&30)===0&&!w2(i)&&(t=cl(e,r),t===2&&(o=xs(e),o!==0&&(r=o,t=Ys(e,o))),t===1))throw n=Oi,Hn(e,0),un(e,r),lt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Rn(e,nt,Bt);break;case 3:if(un(e,r),(r&130023424)===r&&(t=ec+500-Me(),10<t)){if(Qo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Os(Rn.bind(null,e,nt,Bt),t);break}Rn(e,nt,Bt);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ot(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y2(r/1960))-r,10<r){e.timeoutHandle=Os(Rn.bind(null,e,nt,Bt),r);break}Rn(e,nt,Bt);break;case 5:Rn(e,nt,Bt);break;default:throw Error(D(329))}}}return lt(e,Me()),e.callbackNode===n?W1.bind(null,e):null}function Ys(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=cl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Gs(t)),e}function Gs(e){nt===null?nt=e:nt.push.apply(nt,e)}function w2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~Ju,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function R0(e){if((ce&6)!==0)throw Error(D(327));kr();var t=Qo(e,0);if((t&1)===0)return lt(e,Me()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=xs(e);r!==0&&(t=r,n=Ys(e,r))}if(n===1)throw n=Oi,Hn(e,0),un(e,t),lt(e,Me()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,nt,Bt),lt(e,Me()),null}function tc(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(zr=Me()+500,Ol&&Tn())}}function qn(e){dn!==null&&dn.tag===0&&(ce&6)===0&&kr();var t=ce;ce|=1;var n=yt.transition,r=fe;try{if(yt.transition=null,fe=1,e)return e()}finally{fe=r,yt.transition=n,ce=t,(ce&6)===0&&Tn()}}function nc(){at=fr.current,we(fr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gm(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Or(),we(it),we(Ye),Wu();break;case 5:Vu(r);break;case 4:Or();break;case 13:we(_e);break;case 19:we(_e);break;case 10:Fu(r.type._context);break;case 22:case 23:nc()}n=n.return}if(Ie=e,Ne=e=xn(e.current,null),Ue=at=t,Re=0,Oi=null,Ju=$l=Qn=0,nt=ui=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Dn=null}return e}function Q1(e,t){do{var n=Ne;try{if(Iu(),No.current=ll,ol){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Wn=0,je=Ae=Pe=null,ai=!1,Ei=0,Zu.current=null,n===null||n.return===null){Re=1,Oi=t,Ne=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if((f.mode&1)===0&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=S0(l);if(w!==null){w.flags&=-257,b0(w,l,a,o,t),w.mode&1&&k0(o,u,t),t=w,s=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(s),t.updateQueue=x}else y.add(s);break e}else{if((t&1)===0){k0(o,u,t),rc();break e}s=Error(D(426))}}else if(be&&a.mode&1){var O=S0(l);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),b0(O,l,a,o,t),ju(Tr(s,a));break e}}o=s=Tr(s,a),Re!==4&&(Re=2),ui===null?ui=[o]:ui.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=T1(o,s,t);h0(o,g);break e;case 1:a=s;var h=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yn===null||!yn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=z1(o,a,t);h0(o,S);break e}}o=o.return}while(o!==null)}G1(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function q1(){var e=al.current;return al.current=ll,e===null?ll:e}function rc(){(Re===0||Re===3||Re===2)&&(Re=4),Ie===null||(Qn&268435455)===0&&($l&268435455)===0||un(Ie,Ue)}function cl(e,t){var n=ce;ce|=2;var r=q1();(Ie!==e||Ue!==t)&&(Bt=null,Hn(e,t));do try{x2();break}catch(i){Q1(e,i)}while(1);if(Iu(),ce=n,al.current=r,Ne!==null)throw Error(D(261));return Ie=null,Ue=0,Re}function x2(){for(;Ne!==null;)Y1(Ne)}function k2(){for(;Ne!==null&&!Qh();)Y1(Ne)}function Y1(e){var t=K1(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?G1(e):Ne=t,Zu.current=null}function G1(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=p2(n,t,at),n!==null){Ne=n;return}}else{if(n=h2(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Re===0&&(Re=5)}function Rn(e,t,n){var r=fe,i=yt.transition;try{yt.transition=null,fe=1,S2(e,t,n,r)}finally{yt.transition=i,fe=r}return null}function S2(e,t,n,r){do kr();while(dn!==null);if((ce&6)!==0)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(nm(e,o),e===Ie&&(Ne=Ie=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||go||(go=!0,Z1(Wo,function(){return kr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=yt.transition,yt.transition=null;var l=fe;fe=1;var a=ce;ce|=4,Zu.current=null,g2(e,n),B1(n,e),Um(_s),qo=!!Es,_s=Es=null,e.current=n,v2(n),qh(),ce=a,fe=l,yt.transition=o}else e.current=n;if(go&&(go=!1,dn=e,ul=i),o=e.pendingLanes,o===0&&(yn=null),Xh(n.stateNode),lt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=Qs,Qs=null,e;return(ul&1)!==0&&e.tag!==0&&kr(),o=e.pendingLanes,(o&1)!==0?e===qs?ci++:(ci=0,qs=e):ci=0,Tn(),null}function kr(){if(dn!==null){var e=Of(ul),t=yt.transition,n=fe;try{if(yt.transition=null,fe=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,ul=0,(ce&6)!==0)throw Error(D(331));var i=ce;for(ce|=4,G=e.current;G!==null;){var o=G,l=o.child;if((G.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(G=u;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:si(8,f,o)}var c=f.child;if(c!==null)c.return=f,G=c;else for(;G!==null;){f=G;var p=f.sibling,w=f.return;if(F1(f),f===u){G=null;break}if(p!==null){p.return=w,G=p;break}G=w}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}G=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,G=l;else e:for(;G!==null;){if(o=G,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,G=g;break e}G=o.return}}var h=e.current;for(G=h;G!==null;){l=G;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,G=v;else e:for(l=h;G!==null;){if(a=G,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch($){ze(a,a.return,$)}if(a===l){G=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,G=S;break e}G=a.return}}if(ce=i,Tn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(bl,e)}catch{}r=!0}return r}finally{fe=n,yt.transition=t}}return!1}function L0(e,t,n){t=Tr(n,t),t=T1(e,t,1),e=vn(e,t,1),t=Je(),e!==null&&(Ri(e,1,t),lt(e,t))}function ze(e,t,n){if(e.tag===3)L0(e,e,n);else for(;t!==null;){if(t.tag===3){L0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Tr(n,e),e=z1(t,e,1),t=vn(t,e,1),e=Je(),t!==null&&(Ri(t,1,e),lt(t,e));break}}t=t.return}}function b2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ue&n)===n&&(Re===4||Re===3&&(Ue&130023424)===Ue&&500>Me()-ec?Hn(e,0):Ju|=n),lt(e,t)}function X1(e,t){t===0&&((e.mode&1)===0?t=1:(t=oo,oo<<=1,(oo&130023424)===0&&(oo=4194304)));var n=Je();e=Kt(e,t),e!==null&&(Ri(e,t,n),lt(e,n))}function C2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),X1(e,n)}function E2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),X1(e,n)}var K1;K1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,f2(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,be&&(t.flags&1048576)!==0&&e1(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var i=Er(t,Ye.current);xr(t,n),i=qu(null,t,r,e,i,n);var o=Yu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,Zo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uu(t),i.updater=Tl,t.stateNode=i,i._reactInternals=t,Rs(t,r,e,n),t=Ds(null,t,r,!0,o,n)):(t.tag=0,be&&o&&Ru(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=P2(r),e=bt(r,e),i){case 0:t=js(null,t,r,e,n);break e;case 1:t=_0(null,t,r,e,n);break e;case 11:t=C0(null,t,r,e,n);break e;case 14:t=E0(null,t,r,bt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),js(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),_0(e,t,r,i,n);case 3:e:{if(A1(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,i1(e,t),rl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tr(Error(D(423)),t),t=P0(e,t,r,n,i);break e}else if(r!==i){i=Tr(Error(D(424)),t),t=P0(e,t,r,n,i);break e}else for(st=gn(t.stateNode.containerInfo.firstChild),ut=t,be=!0,Et=null,n=s1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Zt(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return u1(t),e===null&&$s(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ps(r,i)?l=null:o!==null&&Ps(r,o)&&(t.flags|=32),N1(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&$s(t),null;case 13:return R1(e,t,n);case 4:return Bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),C0(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,me(tl,r._currentValue),r._currentValue=l,o!==null)if(zt(o.value,l)){if(o.children===i.children&&!it.current){t=Zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Yt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ns(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ns(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=wt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=bt(r,t.pendingProps),i=bt(r.type,i),E0(e,t,r,i,n);case 15:return M1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Ro(e,t),t.tag=1,ot(r)?(e=!0,Zo(t)):e=!1,xr(t,n),l1(t,r,i),Rs(t,r,i,n),Ds(null,t,r,!0,e,n);case 19:return L1(e,t,n);case 22:return $1(e,t,n)}throw Error(D(156,t.tag))};function Z1(e,t){return Cf(e,t)}function _2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new _2(e,t,n,r)}function ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P2(e){if(typeof e=="function")return ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bu)return 11;if(e===Cu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Do(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ic(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case nr:return Un(n.children,i,o,t);case Su:l=8,i|=8;break;case os:return e=vt(12,n,t,i|2),e.elementType=os,e.lanes=o,e;case ls:return e=vt(13,n,t,i),e.elementType=ls,e.lanes=o,e;case as:return e=vt(19,n,t,i),e.elementType=as,e.lanes=o,e;case af:return Nl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case of:l=10;break e;case lf:l=9;break e;case bu:l=11;break e;case Cu:l=14;break e;case ln:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Un(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=vt(22,e,r,t),e.elementType=af,e.lanes=n,e.stateNode={isHidden:!1},e}function Oa(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Ta(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oc(e,t,n,r,i,o,l,a,s){return e=new O2(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(o),e}function T2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function J1(e){if(!e)return En;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ot(n))return Zf(e,n,t)}return t}function ep(e,t,n,r,i,o,l,a,s){return e=oc(n,r,!0,e,i,o,l,a,s),e.context=J1(null),n=e.current,r=Je(),i=wn(n),o=Yt(r,i),o.callback=t??null,vn(n,o,i),e.current.lanes=i,Ri(e,i,r),lt(e,r),e}function Al(e,t,n,r){var i=t.current,o=Je(),l=wn(i);return n=J1(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(i,t,l),e!==null&&(Tt(e,i,l,o),$o(e,i,l)),l}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lc(e,t){j0(e,t),(e=e.alternate)&&j0(e,t)}function z2(){return null}var tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ac(e){this._internalRoot=e}Rl.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Al(e,t,null,null)};Rl.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Al(null,e,null,null)}),t[Xt]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&Nf(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function D0(){}function M2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=dl(l);o.call(u)}}var l=ep(t,r,e,0,null,!1,!1,"",D0);return e._reactRootContainer=l,e[Xt]=l.current,xi(e.nodeType===8?e.parentNode:e),qn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=dl(s);a.call(u)}}var s=oc(e,0,!1,null,null,!1,!1,"",D0);return e._reactRootContainer=s,e[Xt]=s.current,xi(e.nodeType===8?e.parentNode:e),qn(function(){Al(t,s,n,r)}),s}function jl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=dl(l);a.call(s)}}Al(t,l,e,i)}else l=M2(n,t,e,i,r);return dl(l)}Tf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Pu(t,n|1),lt(t,Me()),(ce&6)===0&&(zr=Me()+500,Tn()))}break;case 13:qn(function(){var r=Kt(e,1);if(r!==null){var i=Je();Tt(r,e,1,i)}}),lc(e,1)}};Ou=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Je();Tt(t,e,134217728,n)}lc(e,134217728)}};zf=function(e){if(e.tag===13){var t=wn(e),n=Kt(e,t);if(n!==null){var r=Je();Tt(n,e,t,r)}lc(e,t)}};Mf=function(){return fe};$f=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};vs=function(e,t,n){switch(t){case"input":if(cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pl(r);if(!i)throw Error(D(90));uf(r),cs(r,i)}}}break;case"textarea":df(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};yf=tc;wf=qn;var $2={usingClientEntryPoint:!1,Events:[ji,lr,Pl,gf,vf,tc]},qr={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N2={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sf(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||z2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{bl=vo.inject(N2),Lt=vo}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$2;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(t))throw Error(D(200));return T2(e,t,null,n)};dt.createRoot=function(e,t){if(!sc(e))throw Error(D(299));var n=!1,r="",i=tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oc(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,xi(e.nodeType===8?e.parentNode:e),new ac(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Sf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return qn(e)};dt.hydrate=function(e,t,n){if(!Ll(t))throw Error(D(200));return jl(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!sc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=tp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ep(t,null,e,1,n??null,i,!1,o,l),e[Xt]=t.current,xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Rl(t)};dt.render=function(e,t,n){if(!Ll(t))throw Error(D(200));return jl(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(D(40));return e._reactRootContainer?(qn(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};dt.unstable_batchedUpdates=tc;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return jl(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dt})(yu);var I0=yu.exports;rs.createRoot=I0.createRoot,rs.hydrateRoot=I0.hydrateRoot;var Te={},uc={},Ii={},Fi={},np="Expected a function",F0=0/0,A2="[object Symbol]",R2=/^\s+|\s+$/g,L2=/^[-+]0x[0-9a-f]+$/i,j2=/^0b[01]+$/i,D2=/^0o[0-7]+$/i,I2=parseInt,F2=typeof Xr=="object"&&Xr&&Xr.Object===Object&&Xr,H2=typeof self=="object"&&self&&self.Object===Object&&self,U2=F2||H2||Function("return this")(),B2=Object.prototype,V2=B2.toString,W2=Math.max,Q2=Math.min,za=function(){return U2.Date.now()};function q2(e,t,n){var r,i,o,l,a,s,u=0,f=!1,c=!1,p=!0;if(typeof e!="function")throw new TypeError(np);t=H0(t)||0,fl(n)&&(f=!!n.leading,c="maxWait"in n,o=c?W2(H0(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p);function w(N){var j=r,z=i;return r=i=void 0,u=N,l=e.apply(z,j),l}function y(N){return u=N,a=setTimeout(g,t),f?w(N):l}function x(N){var j=N-s,z=N-u,q=t-j;return c?Q2(q,o-z):q}function O(N){var j=N-s,z=N-u;return s===void 0||j>=t||j<0||c&&z>=o}function g(){var N=za();if(O(N))return h(N);a=setTimeout(g,x(N))}function h(N){return a=void 0,p&&r?w(N):(r=i=void 0,l)}function v(){a!==void 0&&clearTimeout(a),u=0,r=s=i=a=void 0}function S(){return a===void 0?l:h(za())}function $(){var N=za(),j=O(N);if(r=arguments,i=this,s=N,j){if(a===void 0)return y(s);if(c)return a=setTimeout(g,t),w(s)}return a===void 0&&(a=setTimeout(g,t)),l}return $.cancel=v,$.flush=S,$}function Y2(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(np);return fl(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),q2(e,t,{leading:r,maxWait:t,trailing:i})}function fl(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function G2(e){return!!e&&typeof e=="object"}function X2(e){return typeof e=="symbol"||G2(e)&&V2.call(e)==A2}function H0(e){if(typeof e=="number")return e;if(X2(e))return F0;if(fl(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=fl(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(R2,"");var n=j2.test(e);return n||D2.test(e)?I2(e.slice(2),n?2:8):L2.test(e)?F0:+e}var K2=Y2,Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});Hi.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};Hi.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Fi,"__esModule",{value:!0});var Z2=K2,J2=tg(Z2),eg=Hi;function tg(e){return e&&e.__esModule?e:{default:e}}var ng=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,J2.default)(t,n)},Ce={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=ng(function(i){Ce.scrollHandler(t)},n);Ce.scrollSpyContainers.push(t),(0,eg.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Ce.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Ce.scrollSpyContainers[Ce.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Ce.currentPositionX(t),Ce.currentPositionY(t))})},addStateHandler:function(t){Ce.spySetState.push(t)},addSpyHandler:function(t,n){var r=Ce.scrollSpyContainers[Ce.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Ce.currentPositionX(n),Ce.currentPositionY(n))},updateStates:function(){Ce.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Ce.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Ce.spySetState&&Ce.spySetState.length&&Ce.spySetState.indexOf(t)>-1&&Ce.spySetState.splice(Ce.spySetState.indexOf(t),1),document.removeEventListener("scroll",Ce.scrollHandler)},update:function(){return Ce.scrollSpyContainers.forEach(function(t){return Ce.scrollHandler(t)})}};Fi.default=Ce;var Lr={},Ui={};Object.defineProperty(Ui,"__esModule",{value:!0});var rg=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,l=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},ig=function(){return window.location.hash.replace(/^#/,"")},og=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},lg=function(t){return getComputedStyle(t).position!=="static"},Ma=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},ag=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(lg(t)){if(n.offsetParent!==t){var i=function(f){return f===t||f===document},o=Ma(n,i),l=o.offsetTop,a=o.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(f){return f===document};return Ma(n,s).offsetTop-Ma(t,s).offsetTop};Ui.default={updateHash:rg,getHash:ig,filterElementInContainer:og,scrollOffset:ag};var Dl={},cc={};Object.defineProperty(cc,"__esModule",{value:!0});cc.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var dc={};Object.defineProperty(dc,"__esModule",{value:!0});var sg=Hi,ug=["mousedown","mousewheel","touchmove","keydown"];dc.default={subscribe:function(t){return typeof document<"u"&&ug.forEach(function(n){return(0,sg.addPassiveEventListener)(document,n,t)})}};var Bi={};Object.defineProperty(Bi,"__esModule",{value:!0});var Xs={registered:{},scrollEvent:{register:function(t,n){Xs.registered[t]=n},remove:function(t){Xs.registered[t]=null}}};Bi.default=Xs;Object.defineProperty(Dl,"__esModule",{value:!0});var cg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dg=Ui;Il(dg);var fg=cc,U0=Il(fg),pg=dc,hg=Il(pg),mg=Bi,Nt=Il(mg);function Il(e){return e&&e.__esModule?e:{default:e}}var rp=function(t){return U0.default[t.smooth]||U0.default.defaultEasing},gg=function(t){return typeof t=="function"?t:function(){return t}},vg=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ks=function(){return vg()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),ip=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},op=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},lp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},yg=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},wg=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},xg=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){Nt.default.registered.end&&Nt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);Ks.call(window,o);return}Nt.default.registered.end&&Nt.default.registered.end(i.to,i.target,i.currentPosition)},fc=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Vi=function(t,n,r,i){if(n.data=n.data||ip(),window.clearTimeout(n.data.delayTimeout),hg.default.subscribe(function(){n.data.cancel=!0}),fc(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?op(n):lp(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Nt.default.registered.end&&Nt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=gg(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=rp(n),l=xg.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Nt.default.registered.begin&&Nt.default.registered.begin(n.data.to,n.data.target),Ks.call(window,l)},n.delay);return}Nt.default.registered.begin&&Nt.default.registered.begin(n.data.to,n.data.target),Ks.call(window,l)},Fl=function(t){return t=cg({},t),t.data=t.data||ip(),t.absolute=!0,t},kg=function(t){Vi(0,Fl(t))},Sg=function(t,n){Vi(t,Fl(n))},bg=function(t){t=Fl(t),fc(t),Vi(t.horizontal?yg(t):wg(t),t)},Cg=function(t,n){n=Fl(n),fc(n);var r=n.horizontal?op(n):lp(n);Vi(t+r,n)};Dl.default={animateTopScroll:Vi,getAnimationType:rp,scrollToTop:kg,scrollToBottom:bg,scrollTo:Sg,scrollMore:Cg};Object.defineProperty(Lr,"__esModule",{value:!0});var Eg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_g=Ui,Pg=pc(_g),Og=Dl,Tg=pc(Og),zg=Bi,yo=pc(zg);function pc(e){return e&&e.__esModule?e:{default:e}}var wo={},B0=void 0;Lr.default={unmount:function(){wo={}},register:function(t,n){wo[t]=n},unregister:function(t){delete wo[t]},get:function(t){return wo[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return B0=t},getActiveLink:function(){return B0},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=Eg({},n,{absolute:!1});var i=n.containerId,o=n.container,l=void 0;i?l=document.getElementById(i):o&&o.nodeType?l=o:l=document,n.absolute=!0;var a=n.horizontal,s=Pg.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){yo.default.registered.begin&&yo.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,yo.default.registered.end&&yo.default.registered.end(t,r);return}Tg.default.animateTopScroll(s,n,t,r)}};var Wi={exports:{}},Mg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$g=Mg,Ng=$g;function ap(){}function sp(){}sp.resetWarningCache=ap;var Ag=function(){function e(r,i,o,l,a,s){if(s!==Ng){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sp,resetWarningCache:ap};return n.PropTypes=n,n};Wi.exports=Ag();var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});var Rg=Ui,$a=Lg(Rg);function Lg(e){return e&&e.__esModule?e:{default:e}}var jg={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return $a.default.getHash()},changeHash:function(t,n){this.isInitialized()&&$a.default.getHash()!==t&&$a.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Hl.default=jg;Object.defineProperty(Ii,"__esModule",{value:!0});var xo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dg=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ig=_.exports,V0=Qi(Ig),Fg=Fi,ko=Qi(Fg),Hg=Lr,Ug=Qi(Hg),Bg=Wi.exports,ke=Qi(Bg),Vg=Hl,nn=Qi(Vg);function Qi(e){return e&&e.__esModule?e:{default:e}}function Wg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qg(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function qg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var W0={to:ke.default.string.isRequired,containerId:ke.default.string,container:ke.default.object,activeClass:ke.default.string,activeStyle:ke.default.object,spy:ke.default.bool,horizontal:ke.default.bool,smooth:ke.default.oneOfType([ke.default.bool,ke.default.string]),offset:ke.default.number,delay:ke.default.number,isDynamic:ke.default.bool,onClick:ke.default.func,duration:ke.default.oneOfType([ke.default.number,ke.default.func]),absolute:ke.default.bool,onSetActive:ke.default.func,onSetInactive:ke.default.func,ignoreCancelEvents:ke.default.bool,hashSpy:ke.default.bool,saveHashHistory:ke.default.bool,spyThrottle:ke.default.number};Ii.default=function(e,t){var n=t||Ug.default,r=function(o){qg(l,o);function l(a){Wg(this,l);var s=Qg(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return i.call(s),s.state={active:!1},s}return Dg(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();ko.default.isMounted(s)||ko.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(nn.default.isMounted()||nn.default.mount(n),nn.default.mapContainer(this.props.to,s)),ko.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){ko.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=xo({},this.props.style,this.props.activeStyle):u=xo({},this.props.style);var f=xo({},this.props);for(var c in W0)f.hasOwnProperty(c)&&delete f[c];return f.className=s,f.style=u,f.onClick=this.handleClick,V0.default.createElement(e,f)}}]),l}(V0.default.PureComponent),i=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,xo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(nn.default.isMounted()&&!nn.default.isInitialized())){var f=l.props.horizontal,c=l.props.to,p=null,w=void 0,y=void 0;if(f){var x=0,O=0,g=0;if(u.getBoundingClientRect){var h=u.getBoundingClientRect();g=h.left}if(!p||l.props.isDynamic){if(p=n.get(c),!p)return;var v=p.getBoundingClientRect();x=v.left-g+a,O=x+v.width}var S=a-l.props.offset;w=S>=Math.floor(x)&&S<Math.floor(O),y=S<Math.floor(x)||S>=Math.floor(O)}else{var $=0,N=0,j=0;if(u.getBoundingClientRect){var z=u.getBoundingClientRect();j=z.top}if(!p||l.props.isDynamic){if(p=n.get(c),!p)return;var q=p.getBoundingClientRect();$=q.top-j+s,N=$+q.height}var Y=s-l.props.offset;w=Y>=Math.floor($)&&Y<Math.floor(N),y=Y<Math.floor($)||Y>=Math.floor(N)}var A=n.getActiveLink();if(y){if(c===A&&n.setActiveLink(void 0),l.props.hashSpy&&nn.default.getHash()===c){var T=l.props.saveHashHistory,Q=T===void 0?!1:T;nn.default.changeHash("",Q)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(c,p))}if(w&&(A!==c||l.state.active===!1)){n.setActiveLink(c);var V=l.props.saveHashHistory,te=V===void 0?!1:V;l.props.hashSpy&&nn.default.changeHash(c,te),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(c,p))}}}};return r.propTypes=W0,r.defaultProps={offset:0},r};Object.defineProperty(uc,"__esModule",{value:!0});var Yg=_.exports,Q0=up(Yg),Gg=Ii,Xg=up(Gg);function up(e){return e&&e.__esModule?e:{default:e}}function Kg(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Zg(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Jg=function(e){Zg(t,e);function t(){var n,r,i,o;Kg(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return o=(r=(i=q0(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.render=function(){return Q0.default.createElement("a",i.props,i.props.children)},r),q0(i,o)}return t}(Q0.default.Component);uc.default=(0,Xg.default)(Jg);var hc={};Object.defineProperty(hc,"__esModule",{value:!0});var ev=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),tv=_.exports,Y0=cp(tv),nv=Ii,rv=cp(nv);function cp(e){return e&&e.__esModule?e:{default:e}}function iv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ov(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function lv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var av=function(e){lv(t,e);function t(){return iv(this,t),ov(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return ev(t,[{key:"render",value:function(){return Y0.default.createElement("input",this.props,this.props.children)}}]),t}(Y0.default.Component);hc.default=(0,rv.default)(av);var mc={},Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});var sv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),cv=_.exports,G0=Bl(cv),dv=yu.exports;Bl(dv);var fv=Lr,X0=Bl(fv),pv=Wi.exports,K0=Bl(pv);function Bl(e){return e&&e.__esModule?e:{default:e}}function hv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function gv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Ul.default=function(e){var t=function(n){gv(r,n);function r(i){hv(this,r);var o=mv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return uv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;X0.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){X0.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return G0.default.createElement(e,sv({},this.props,{parentBindings:this.childBindings}))}}]),r}(G0.default.Component);return t.propTypes={name:K0.default.string,id:K0.default.string},t};Object.defineProperty(mc,"__esModule",{value:!0});var Z0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),yv=_.exports,J0=gc(yv),wv=Ul,xv=gc(wv),kv=Wi.exports,ed=gc(kv);function gc(e){return e&&e.__esModule?e:{default:e}}function Sv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Cv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dp=function(e){Cv(t,e);function t(){return Sv(this,t),bv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return vv(t,[{key:"render",value:function(){var r=this,i=Z0({},this.props);return i.parentBindings&&delete i.parentBindings,J0.default.createElement("div",Z0({},i,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(J0.default.Component);dp.propTypes={name:ed.default.string,id:ed.default.string};mc.default=(0,xv.default)(dp);var Na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},td=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function nd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rd(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function id(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var So=_.exports,Mn=Fi,Aa=Lr,Ee=Wi.exports,rn=Hl,od={to:Ee.string.isRequired,containerId:Ee.string,container:Ee.object,activeClass:Ee.string,spy:Ee.bool,smooth:Ee.oneOfType([Ee.bool,Ee.string]),offset:Ee.number,delay:Ee.number,isDynamic:Ee.bool,onClick:Ee.func,duration:Ee.oneOfType([Ee.number,Ee.func]),absolute:Ee.bool,onSetActive:Ee.func,onSetInactive:Ee.func,ignoreCancelEvents:Ee.bool,hashSpy:Ee.bool,spyThrottle:Ee.number},Ev={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Aa,i=function(l){id(a,l);function a(s){nd(this,a);var u=rd(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(u),u.state={active:!1},u}return td(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,f=this.props.container;return u?document.getElementById(u):f&&f.nodeType?f:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Mn.isMounted(u)||Mn.mount(u,this.props.spyThrottle),this.props.hashSpy&&(rn.isMounted()||rn.mount(r),rn.mapContainer(this.props.to,u)),this.props.spy&&Mn.addStateHandler(this.stateHandler),Mn.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Mn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var f=Na({},this.props);for(var c in od)f.hasOwnProperty(c)&&delete f[c];return f.className=u,f.onClick=this.handleClick,So.createElement(t,f)}}]),a}(So.Component),o=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Na({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(rn.isMounted()&&!rn.isInitialized())){var f=a.props.to,c=null,p=0,w=0,y=0;if(u.getBoundingClientRect){var x=u.getBoundingClientRect();y=x.top}if(!c||a.props.isDynamic){if(c=r.get(f),!c)return;var O=c.getBoundingClientRect();p=O.top-y+s,w=p+O.height}var g=s-a.props.offset,h=g>=Math.floor(p)&&g<Math.floor(w),v=g<Math.floor(p)||g>=Math.floor(w),S=r.getActiveLink();if(v)return f===S&&r.setActiveLink(void 0),a.props.hashSpy&&rn.getHash()===f&&rn.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Mn.updateStates();if(h&&S!==f)return r.setActiveLink(f),a.props.hashSpy&&rn.changeHash(f),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(f)),Mn.updateStates()}}};return i.propTypes=od,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){id(i,r);function i(o){nd(this,i);var l=rd(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return l.childBindings={domNode:null},l}return td(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Aa.unregister(this.props.name)}},{key:"registerElems",value:function(l){Aa.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return So.createElement(t,Na({},this.props,{parentBindings:this.childBindings}))}}]),i}(So.Component);return n.propTypes={name:Ee.string,id:Ee.string},n}},_v=Ev;Object.defineProperty(Te,"__esModule",{value:!0});Te.Helpers=Te.ScrollElement=Te.ScrollLink=Te.animateScroll=Te.scrollSpy=Te.Events=Te.scroller=Te.Element=Te.Button=Sp=Te.Link=void 0;var Pv=uc,fp=It(Pv),Ov=hc,pp=It(Ov),Tv=mc,hp=It(Tv),zv=Lr,mp=It(zv),Mv=Bi,gp=It(Mv),$v=Fi,vp=It($v),Nv=Dl,yp=It(Nv),Av=Ii,wp=It(Av),Rv=Ul,xp=It(Rv),Lv=_v,kp=It(Lv);function It(e){return e&&e.__esModule?e:{default:e}}var Sp=Te.Link=fp.default;Te.Button=pp.default;Te.Element=hp.default;Te.scroller=mp.default;Te.Events=gp.default;Te.scrollSpy=vp.default;Te.animateScroll=yp.default;Te.ScrollLink=wp.default;Te.ScrollElement=xp.default;Te.Helpers=kp.default;Te.default={Link:fp.default,Button:pp.default,Element:hp.default,scroller:mp.default,Events:gp.default,scrollSpy:vp.default,animateScroll:yp.default,ScrollLink:wp.default,ScrollElement:xp.default,Helpers:kp.default};var bp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ld=$e.createContext&&$e.createContext(bp),kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kn.apply(this,arguments)},jv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Cp(e){return e&&e.map(function(t,n){return $e.createElement(t.tag,kn({key:n},t.attr),Cp(t.child))})}function ge(e){return function(t){return $e.createElement(Dv,kn({attr:kn({},e.attr)},t),Cp(e.child))}}function Dv(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=jv(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),$e.createElement("svg",kn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:kn(kn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&$e.createElement("title",null,o),e.children)};return ld!==void 0?$e.createElement(ld.Consumer,null,function(n){return t(n)}):t(bp)}function Iv(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]})(e)}function Ep(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(e)}function Fv(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function Hv(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function Uv(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}function _p(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(e)}const kt=_.exports.createContext(),Pp=({children:e})=>{const t="dark",[n,r]=_.exports.useState(t),o={theme:n,handleTheme:l=>{l.target.innerHTML=="🌙"?(r("dark"),l.target.innerHTML="☀️"):(l.target.innerHTML="🌙",r("light"))}};return d(kt.Provider,{value:o,children:e})};var Vl={exports:{}},pe={};var Fe=typeof Symbol=="function"&&Symbol.for,vc=Fe?Symbol.for("react.element"):60103,yc=Fe?Symbol.for("react.portal"):60106,Wl=Fe?Symbol.for("react.fragment"):60107,Ql=Fe?Symbol.for("react.strict_mode"):60108,ql=Fe?Symbol.for("react.profiler"):60114,Yl=Fe?Symbol.for("react.provider"):60109,Gl=Fe?Symbol.for("react.context"):60110,wc=Fe?Symbol.for("react.async_mode"):60111,Xl=Fe?Symbol.for("react.concurrent_mode"):60111,Kl=Fe?Symbol.for("react.forward_ref"):60112,Zl=Fe?Symbol.for("react.suspense"):60113,Bv=Fe?Symbol.for("react.suspense_list"):60120,Jl=Fe?Symbol.for("react.memo"):60115,ea=Fe?Symbol.for("react.lazy"):60116,Vv=Fe?Symbol.for("react.block"):60121,Wv=Fe?Symbol.for("react.fundamental"):60117,Qv=Fe?Symbol.for("react.responder"):60118,qv=Fe?Symbol.for("react.scope"):60119;function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vc:switch(e=e.type,e){case wc:case Xl:case Wl:case ql:case Ql:case Zl:return e;default:switch(e=e&&e.$$typeof,e){case Gl:case Kl:case ea:case Jl:case Yl:return e;default:return t}}case yc:return t}}}function Op(e){return pt(e)===Xl}pe.AsyncMode=wc;pe.ConcurrentMode=Xl;pe.ContextConsumer=Gl;pe.ContextProvider=Yl;pe.Element=vc;pe.ForwardRef=Kl;pe.Fragment=Wl;pe.Lazy=ea;pe.Memo=Jl;pe.Portal=yc;pe.Profiler=ql;pe.StrictMode=Ql;pe.Suspense=Zl;pe.isAsyncMode=function(e){return Op(e)||pt(e)===wc};pe.isConcurrentMode=Op;pe.isContextConsumer=function(e){return pt(e)===Gl};pe.isContextProvider=function(e){return pt(e)===Yl};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vc};pe.isForwardRef=function(e){return pt(e)===Kl};pe.isFragment=function(e){return pt(e)===Wl};pe.isLazy=function(e){return pt(e)===ea};pe.isMemo=function(e){return pt(e)===Jl};pe.isPortal=function(e){return pt(e)===yc};pe.isProfiler=function(e){return pt(e)===ql};pe.isStrictMode=function(e){return pt(e)===Ql};pe.isSuspense=function(e){return pt(e)===Zl};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wl||e===Xl||e===ql||e===Ql||e===Zl||e===Bv||typeof e=="object"&&e!==null&&(e.$$typeof===ea||e.$$typeof===Jl||e.$$typeof===Yl||e.$$typeof===Gl||e.$$typeof===Kl||e.$$typeof===Wv||e.$$typeof===Qv||e.$$typeof===qv||e.$$typeof===Vv)};pe.typeOf=pt;(function(e){e.exports=pe})(Vl);function Yv(e){function t(H,B,U,K,C){for(var J=0,L=0,le=0,re=0,oe,m,k=0,b=0,M,F=M=oe=0,P=0,W=0,he=0,ie=0,Kn=U.length,Ft=Kn-1,Ge,ne="",xe="",Ir="",Zn="",en;P<Kn;){if(m=U.charCodeAt(P),P===Ft&&L+re+le+J!==0&&(L!==0&&(m=L===47?10:47),re=le=J=0,Kn++,Ft++),L+re+le+J===0){if(P===Ft&&(0<W&&(ne=ne.replace(p,"")),0<ne.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:ne+=U.charAt(P)}m=59}switch(m){case 123:for(ne=ne.trim(),oe=ne.charCodeAt(0),M=1,ie=++P;P<Kn;){switch(m=U.charCodeAt(P)){case 123:M++;break;case 125:M--;break;case 47:switch(m=U.charCodeAt(P+1)){case 42:case 47:e:{for(F=P+1;F<Ft;++F)switch(U.charCodeAt(F)){case 47:if(m===42&&U.charCodeAt(F-1)===42&&P+2!==F){P=F+1;break e}break;case 10:if(m===47){P=F+1;break e}}P=F}}break;case 91:m++;case 40:m++;case 34:case 39:for(;P++<Ft&&U.charCodeAt(P)!==m;);}if(M===0)break;P++}switch(M=U.substring(ie,P),oe===0&&(oe=(ne=ne.replace(c,"").trim()).charCodeAt(0)),oe){case 64:switch(0<W&&(ne=ne.replace(p,"")),m=ne.charCodeAt(1),m){case 100:case 109:case 115:case 45:W=B;break;default:W=se}if(M=t(B,W,M,m,C+1),ie=M.length,0<I&&(W=n(se,ne,he),en=a(3,M,W,B,Q,T,ie,m,C,K),ne=W.join(""),en!==void 0&&(ie=(M=en.trim()).length)===0&&(m=0,M="")),0<ie)switch(m){case 115:ne=ne.replace(N,l);case 100:case 109:case 45:M=ne+"{"+M+"}";break;case 107:ne=ne.replace(h,"$1 $2"),M=ne+"{"+M+"}",M=te===1||te===2&&o("@"+M,3)?"@-webkit-"+M+"@"+M:"@"+M;break;default:M=ne+M,K===112&&(M=(xe+=M,""))}else M="";break;default:M=t(B,n(B,ne,he),M,K,C+1)}Ir+=M,M=he=W=F=oe=0,ne="",m=U.charCodeAt(++P);break;case 125:case 59:if(ne=(0<W?ne.replace(p,""):ne).trim(),1<(ie=ne.length))switch(F===0&&(oe=ne.charCodeAt(0),oe===45||96<oe&&123>oe)&&(ie=(ne=ne.replace(" ",":")).length),0<I&&(en=a(1,ne,B,H,Q,T,xe.length,K,C,K))!==void 0&&(ie=(ne=en.trim()).length)===0&&(ne="\0\0"),oe=ne.charCodeAt(0),m=ne.charCodeAt(1),oe){case 0:break;case 64:if(m===105||m===99){Zn+=ne+U.charAt(P);break}default:ne.charCodeAt(ie-1)!==58&&(xe+=i(ne,oe,m,ne.charCodeAt(2)))}he=W=F=oe=0,ne="",m=U.charCodeAt(++P)}}switch(m){case 13:case 10:L===47?L=0:1+oe===0&&K!==107&&0<ne.length&&(W=1,ne+="\0"),0<I*ee&&a(0,ne,B,H,Q,T,xe.length,K,C,K),T=1,Q++;break;case 59:case 125:if(L+re+le+J===0){T++;break}default:switch(T++,Ge=U.charAt(P),m){case 9:case 32:if(re+J+L===0)switch(k){case 44:case 58:case 9:case 32:Ge="";break;default:m!==32&&(Ge=" ")}break;case 0:Ge="\\0";break;case 12:Ge="\\f";break;case 11:Ge="\\v";break;case 38:re+L+J===0&&(W=he=1,Ge="\f"+Ge);break;case 108:if(re+L+J+V===0&&0<F)switch(P-F){case 2:k===112&&U.charCodeAt(P-3)===58&&(V=k);case 8:b===111&&(V=b)}break;case 58:re+L+J===0&&(F=P);break;case 44:L+le+re+J===0&&(W=1,Ge+="\r");break;case 34:case 39:L===0&&(re=re===m?0:re===0?m:re);break;case 91:re+L+le===0&&J++;break;case 93:re+L+le===0&&J--;break;case 41:re+L+J===0&&le--;break;case 40:if(re+L+J===0){if(oe===0)switch(2*k+3*b){case 533:break;default:oe=1}le++}break;case 64:L+le+re+J+F+M===0&&(M=1);break;case 42:case 47:if(!(0<re+J+le))switch(L){case 0:switch(2*m+3*U.charCodeAt(P+1)){case 235:L=47;break;case 220:ie=P,L=42}break;case 42:m===47&&k===42&&ie+2!==P&&(U.charCodeAt(ie+2)===33&&(xe+=U.substring(ie,P+1)),Ge="",L=0)}}L===0&&(ne+=Ge)}b=k,k=m,P++}if(ie=xe.length,0<ie){if(W=B,0<I&&(en=a(2,xe,W,H,Q,T,ie,K,C,K),en!==void 0&&(xe=en).length===0))return Zn+xe+Ir;if(xe=W.join(",")+"{"+xe+"}",te*V!==0){switch(te!==2||o(xe,2)||(V=0),V){case 111:xe=xe.replace(S,":-moz-$1")+xe;break;case 112:xe=xe.replace(v,"::-webkit-input-$1")+xe.replace(v,"::-moz-$1")+xe.replace(v,":-ms-input-$1")+xe}V=0}}return Zn+xe+Ir}function n(H,B,U){var K=B.trim().split(O);B=K;var C=K.length,J=H.length;switch(J){case 0:case 1:var L=0;for(H=J===0?"":H[0]+" ";L<C;++L)B[L]=r(H,B[L],U).trim();break;default:var le=L=0;for(B=[];L<C;++L)for(var re=0;re<J;++re)B[le++]=r(H[re]+" ",K[L],U).trim()}return B}function r(H,B,U){var K=B.charCodeAt(0);switch(33>K&&(K=(B=B.trim()).charCodeAt(0)),K){case 38:return B.replace(g,"$1"+H.trim());case 58:return H.trim()+B.replace(g,"$1"+H.trim());default:if(0<1*U&&0<B.indexOf("\f"))return B.replace(g,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+B}function i(H,B,U,K){var C=H+";",J=2*B+3*U+4*K;if(J===944){H=C.indexOf(":",9)+1;var L=C.substring(H,C.length-1).trim();return L=C.substring(0,H).trim()+L+";",te===1||te===2&&o(L,1)?"-webkit-"+L+L:L}if(te===0||te===2&&!o(C,1))return C;switch(J){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(A,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return L=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+C+"-ms-flex-pack"+L+C;case 1005:return y.test(C)?C.replace(w,":-webkit-")+C.replace(w,":-moz-")+C:C;case 1e3:switch(L=C.substring(13).trim(),B=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(B)){case 226:L=C.replace($,"tb");break;case 232:L=C.replace($,"tb-rl");break;case 220:L=C.replace($,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+L+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(B=(C=H).length-10,L=(C.charCodeAt(B)===33?C.substring(0,B):C).substring(H.indexOf(":",7)+1).trim(),J=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:C=C.replace(L,"-webkit-"+L)+";"+C;break;case 207:case 102:C=C.replace(L,"-webkit-"+(102<J?"inline-":"")+"box")+";"+C.replace(L,"-webkit-"+L)+";"+C.replace(L,"-ms-"+L+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return L=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+L+"-ms-flex-"+L+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(z,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(z,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(Y.test(H)===!0)return(L=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),B,U,K).replace(":fill-available",":stretch"):C.replace(L,"-webkit-"+L)+C.replace(L,"-moz-"+L.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,U+K===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+C}return C}function o(H,B){var U=H.indexOf(B===1?":":"{"),K=H.substring(0,B!==3?U:10);return U=H.substring(U+1,H.length-1),X(B!==2?K:K.replace(q,"$1"),U,B)}function l(H,B){var U=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return U!==B+";"?U.replace(j," or ($1)").substring(4):"("+B+")"}function a(H,B,U,K,C,J,L,le,re,oe){for(var m=0,k=B,b;m<I;++m)switch(b=de[m].call(f,H,k,U,K,C,J,L,le,re,oe)){case void 0:case!1:case!0:case null:break;default:k=b}if(k!==B)return k}function s(H){switch(H){case void 0:case null:I=de.length=0;break;default:if(typeof H=="function")de[I++]=H;else if(typeof H=="object")for(var B=0,U=H.length;B<U;++B)s(H[B]);else ee=!!H|0}return s}function u(H){return H=H.prefix,H!==void 0&&(X=null,H?typeof H!="function"?te=1:(te=2,X=H):te=0),u}function f(H,B){var U=H;if(33>U.charCodeAt(0)&&(U=U.trim()),ue=U,U=[ue],0<I){var K=a(-1,B,U,U,Q,T,0,0,0,0);K!==void 0&&typeof K=="string"&&(B=K)}var C=t(se,U,B,0,0);return 0<I&&(K=a(-2,C,U,U,Q,T,C.length,0,0,0),K!==void 0&&(C=K)),ue="",V=0,T=Q=1,C}var c=/^\0+/g,p=/[\0\r\f]/g,w=/: */g,y=/zoo|gra/,x=/([,: ])(transform)/g,O=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,S=/:(read-only)/g,$=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,j=/([\s\S]*?);/g,z=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Y=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,T=1,Q=1,V=0,te=1,se=[],de=[],I=0,X=null,ee=0,ue="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var Gv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Kv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ad=Xv(function(e){return Kv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xc=Vl.exports,Zv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ey={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kc={};kc[xc.ForwardRef]=ey;kc[xc.Memo]=Tp;function sd(e){return xc.isMemo(e)?Tp:kc[e.$$typeof]||Zv}var ty=Object.defineProperty,ny=Object.getOwnPropertyNames,ud=Object.getOwnPropertySymbols,ry=Object.getOwnPropertyDescriptor,iy=Object.getPrototypeOf,cd=Object.prototype;function zp(e,t,n){if(typeof t!="string"){if(cd){var r=iy(t);r&&r!==cd&&zp(e,r,n)}var i=ny(t);ud&&(i=i.concat(ud(t)));for(var o=sd(e),l=sd(t),a=0;a<i.length;++a){var s=i[a];if(!Jv[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=ry(t,s);try{ty(e,s,u)}catch{}}}}return e}var oy=zp;function qt(){return(qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var dd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Zs=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Vl.exports.typeOf(e)},pl=Object.freeze([]),Sn=Object.freeze({});function Ti(e){return typeof e=="function"}function fd(e){return e.displayName||e.name||"Component"}function Sc(e){return e&&typeof e.styledComponentId=="string"}var Mr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",bc=typeof window<"u"&&"HTMLElement"in window,ly=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function qi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ay=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&qi(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Io=new Map,hl=new Map,di=1,bo=function(e){if(Io.has(e))return Io.get(e);for(;hl.has(di);)di++;var t=di++;return Io.set(e,t),hl.set(t,e),t},sy=function(e){return hl.get(e)},uy=function(e,t){t>=di&&(di=t+1),Io.set(e,t),hl.set(t,e)},cy="style["+Mr+'][data-styled-version="5.3.9"]',dy=new RegExp("^"+Mr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fy=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},py=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(dy);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(uy(u,s),fy(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},hy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Mp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(Mr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Mr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=hy();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},my=function(){function e(n){var r=this.element=Mp(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}qi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),gy=function(){function e(n){var r=this.element=Mp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),vy=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),pd=bc,yy={isServer:!bc,useCSSOMInjection:!ly},$p=function(){function e(n,r,i){n===void 0&&(n=Sn),r===void 0&&(r={}),this.options=qt({},yy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&bc&&pd&&(pd=!1,function(o){for(var l=document.querySelectorAll(cy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Mr)!=="active"&&(py(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return bo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new vy(l):o?new my(l):new gy(l),new ay(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(bo(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(bo(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(bo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=sy(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var f=Mr+".g"+l+'[id="'+a+'"]',c="";s!==void 0&&s.forEach(function(p){p.length>0&&(c+=p+",")}),o+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),wy=/(a)(d)/gi,hd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Js(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=hd(t%52)+n;return(hd(t%52)+n).replace(wy,"$1-$2")}var pr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Np=function(e){return pr(5381,e)};function xy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ti(n)&&!Sc(n))return!1}return!0}var ky=Np("5.3.9"),Sy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xy(t),this.componentId=n,this.baseHash=pr(ky,n),this.baseStyle=r,$p.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=$r(this.rules,t,n,r).join(""),a=Js(pr(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=pr(this.baseHash,r.hash),c="",p=0;p<u;p++){var w=this.rules[p];if(typeof w=="string")c+=w;else if(w){var y=$r(w,t,n,r),x=Array.isArray(y)?y.join(""):y;f=pr(f,x+p),c+=x}}if(c){var O=Js(f>>>0);if(!n.hasNameForId(i,O)){var g=r(c,"."+O,void 0,i);n.insertRules(i,O,g)}o.push(O)}}return o.join(" ")},e}(),by=/^\s*\/\/.*$/gm,Cy=[":","[",".","#"];function Ey(e){var t,n,r,i,o=e===void 0?Sn:e,l=o.options,a=l===void 0?Sn:l,s=o.plugins,u=s===void 0?pl:s,f=new Yv(a),c=[],p=function(x){function O(g){if(g)try{x(g+"}")}catch{}}return function(g,h,v,S,$,N,j,z,q,Y){switch(g){case 1:if(q===0&&h.charCodeAt(0)===64)return x(h+";"),"";break;case 2:if(z===0)return h+"/*|*/";break;case 3:switch(z){case 102:case 112:return x(v[0]+h),"";default:return h+(Y===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(O)}}}(function(x){c.push(x)}),w=function(x,O,g){return O===0&&Cy.indexOf(g[n.length])!==-1||g.match(i)?x:"."+t};function y(x,O,g,h){h===void 0&&(h="&");var v=x.replace(by,""),S=O&&g?g+" "+O+" { "+v+" }":v;return t=h,n=O,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(g||!O?"":O,S)}return f.use([].concat(u,[function(x,O,g){x===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,w))},p,function(x){if(x===-2){var O=c;return c=[],O}}])),y.hash=u.length?u.reduce(function(x,O){return O.name||qi(15),pr(x,O.name)},5381).toString():"",y}var Ap=$e.createContext();Ap.Consumer;var Rp=$e.createContext(),_y=(Rp.Consumer,new $p),eu=Ey();function Py(){return _.exports.useContext(Ap)||_y}function Oy(){return _.exports.useContext(Rp)||eu}var Ty=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=eu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return qi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=eu),this.name+t.hash},e}(),zy=/([A-Z])/,My=/([A-Z])/g,$y=/^ms-/,Ny=function(e){return"-"+e.toLowerCase()};function md(e){return zy.test(e)?e.replace(My,Ny).replace($y,"-ms-"):e}var gd=function(e){return e==null||e===!1||e===""};function $r(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=$r(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(gd(e))return"";if(Sc(e))return"."+e.styledComponentId;if(Ti(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return $r(s,t,n,r)}var u;return e instanceof Ty?n?(e.inject(n,r),e.getName(r)):e:Zs(e)?function f(c,p){var w,y,x=[];for(var O in c)c.hasOwnProperty(O)&&!gd(c[O])&&(Array.isArray(c[O])&&c[O].isCss||Ti(c[O])?x.push(md(O)+":",c[O],";"):Zs(c[O])?x.push.apply(x,f(c[O],O)):x.push(md(O)+": "+(w=O,(y=c[O])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||w in Gv?String(y).trim():y+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(e):e.toString()}var vd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ay(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ti(e)||Zs(e)?vd($r(dd(pl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:vd($r(dd(e,n)))}var Ry=function(e,t,n){return n===void 0&&(n=Sn),e.theme!==n.theme&&e.theme||t||n.theme},Ly=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jy=/(^-|-$)/g;function Ra(e){return e.replace(Ly,"-").replace(jy,"")}var Dy=function(e){return Js(Np(e)>>>0)};function Co(e){return typeof e=="string"&&!0}var tu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Iy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Fy(e,t,n){var r=e[n];tu(t)&&tu(r)?Lp(r,t):e[n]=t}function Lp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(tu(l))for(var a in l)Iy(a)&&Fy(e,l[a],a)}return e}var jp=$e.createContext();jp.Consumer;var La={};function Dp(e,t,n){var r=Sc(e),i=!Co(e),o=t.attrs,l=o===void 0?pl:o,a=t.componentId,s=a===void 0?function(h,v){var S=typeof h!="string"?"sc":Ra(h);La[S]=(La[S]||0)+1;var $=S+"-"+Dy("5.3.9"+S+La[S]);return v?v+"-"+$:$}(t.displayName,t.parentComponentId):a,u=t.displayName,f=u===void 0?function(h){return Co(h)?"styled."+h:"Styled("+fd(h)+")"}(e):u,c=t.displayName&&t.componentId?Ra(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(h,v,S){return e.shouldForwardProp(h,v,S)&&t.shouldForwardProp(h,v,S)}:e.shouldForwardProp);var y,x=new Sy(n,c,r?e.componentStyle:void 0),O=x.isStatic&&l.length===0,g=function(h,v){return function(S,$,N,j){var z=S.attrs,q=S.componentStyle,Y=S.defaultProps,A=S.foldedComponentIds,T=S.shouldForwardProp,Q=S.styledComponentId,V=S.target,te=function(K,C,J){K===void 0&&(K=Sn);var L=qt({},C,{theme:K}),le={};return J.forEach(function(re){var oe,m,k,b=re;for(oe in Ti(b)&&(b=b(L)),b)L[oe]=le[oe]=oe==="className"?(m=le[oe],k=b[oe],m&&k?m+" "+k:m||k):b[oe]}),[L,le]}(Ry($,_.exports.useContext(jp),Y)||Sn,$,z),se=te[0],de=te[1],I=function(K,C,J,L){var le=Py(),re=Oy(),oe=C?K.generateAndInjectStyles(Sn,le,re):K.generateAndInjectStyles(J,le,re);return oe}(q,j,se),X=N,ee=de.$as||$.$as||de.as||$.as||V,ue=Co(ee),H=de!==$?qt({},$,{},de):$,B={};for(var U in H)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?B.as=H[U]:(T?T(U,ad,ee):!ue||ad(U))&&(B[U]=H[U]));return $.style&&de.style!==$.style&&(B.style=qt({},$.style,{},de.style)),B.className=Array.prototype.concat(A,Q,I!==Q?I:null,$.className,de.className).filter(Boolean).join(" "),B.ref=X,_.exports.createElement(ee,B)}(y,h,v,O)};return g.displayName=f,(y=$e.forwardRef(g)).attrs=p,y.componentStyle=x,y.displayName=f,y.shouldForwardProp=w,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):pl,y.styledComponentId=c,y.target=r?e.target:e,y.withComponent=function(h){var v=t.componentId,S=function(N,j){if(N==null)return{};var z,q,Y={},A=Object.keys(N);for(q=0;q<A.length;q++)z=A[q],j.indexOf(z)>=0||(Y[z]=N[z]);return Y}(t,["componentId"]),$=v&&v+"-"+(Co(h)?h:Ra(fd(h)));return Dp(h,qt({},S,{attrs:p,componentId:$}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?Lp({},e.defaultProps,h):h}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&oy(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var nu=function(e){return function t(n,r,i){if(i===void 0&&(i=Sn),!Vl.exports.isValidElementType(r))return qi(1,String(r));var o=function(){return n(r,i,Ay.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,qt({},i,{},l))},o.attrs=function(l){return t(n,r,qt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Dp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){nu[e]=nu(e)});const E=nu,Hy=E.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: black;
`,Uy=E.nav`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    gap: 1rem;
    
    @media screen and (max-width:768px){
        justify-content: space-between;
        height: 3rem;
    }
    @media screen and (min-width:769px)  {
        padding-left: 1rem;
        padding-right: 1rem;
        align-items: center;
    }
`,By=E.div`
    @media screen and (max-width:768px){
        position: fixed;
        width: 100%;
        top: 3rem;
        bottom: 0;
        right: ${({click:e})=>e?0:"-100%"};
        background-color: rgb(29, 31, 27);

        z-index: 2000;
        transition: .5s;
        overflow-y: hidden;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`,Vy=E.ul`
    list-style: none;
    display: flex;
    gap: 1.5rem;
    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: calc(100vh - 3rem);
        background-color: rgb(29, 31, 27);
    }
`,Wy=E.li`
    cursor: pointer;
    color: white;
    position: relative;

    a{
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
    }
    a.active{
        background-color: rgb(209, 28, 28);
    }
    @media screen and (min-width:769px){
        a{
            border-radius: 4px;
            border: 4px solid transparent;
        }
        a.item{
            font-size: 1.2rem;
        }
        a.item:hover::after{
            content: " ";
            position: absolute;
            width: calc(100% - 4px);
            height: 4px;
            margin-top: -0.36rem;
            border-radius: 50px;
            background-color: rgb(209, 28, 28);
            transition: width 0.2s ease-in;
            left: 2px;
            top: 0;
        }
        a.item:hover::before{
            content: " ";
            position: absolute;
            width: calc(100% - 4px);
            height: 4px;
            margin-bottom: -0.36rem;
            border-radius: 50px;
            background-color: rgb(209, 28, 28);
            transition: width 0.2s ease-in;
            left: 2px;
            bottom: 0;
        }
    }
`,Qy=E.div`
    border: none;
    font-size: 2rem;
    cursor: pointer;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 0.5rem;
    user-select: none;

    @media screen and (min-width:769px){
        font-size: 1.5rem;
        margin-left: 0.5rem;
        top: -2px;
        position: relative;
        right: 0px;
        padding: 0.4rem 0.2rem;
    }
`,qy=E.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 2rem;
    color: white;
    cursor: pointer;

    @media screen and (min-width:769px){
        display: none;
    }
`,Yy=[{id:1,referencia:"home",texto:"Inicio"},{id:2,referencia:"project",texto:"Proyectos"},,{id:3,referencia:"skill",texto:"Habilidades"},,{id:4,referencia:"contact",texto:"Contacto"}];function Gy(){const[e,t]=_.exports.useState(!1),{handleTheme:n,theme:r}=_.exports.useContext(kt);return d(Hy,{color:r,children:R(Uy,{className:"container",children:[d(By,{click:e,color:r,children:d(Vy,{children:Yy.map(i=>d(Wy,{children:d(Sp,{to:i.referencia,spy:!0,smooth:!0,offset:0,duration:0,className:"item",activeClass:"active",onClick:()=>t(!1),children:i.texto})},i.id))})}),d(Qy,{onClick:n,children:"☀️"}),d(qy,{onClick:()=>t(!e),children:e?d(Fv,{}):d(Uv,{})})]})})}const Xy="/portfolio/assets/perfil-7f023c66.png",yd="/portfolio/assets/CV-SAUL-HUARCAYA-QUISPE-e142ccd1.pdf";function ru(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}function Ky(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&n.test(t)&&(e.length===0||ru(e[0]))}function zi(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(ru);if(ru(e))return[e];if(Ky(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch{return[]}return[]}function iu(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=zn();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function zn(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Zy(e,t){for(var n=iu(e),r=iu(t),i=[],o=0;o<4;o++)for(var l=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var s=a*4,u=[r[s],r[s+1],r[s+2],r[s+3]],f=l[0]*u[0]+l[1]*u[1]+l[2]*u[2]+l[3]*u[3];i[o+s]=f}return i}function Jy(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var n=t[2].split(", ").map(parseFloat);return iu(n)}}return zn()}function e3(e){var t=Math.PI/180*e,n=zn();return n[5]=n[10]=Math.cos(t),n[6]=n[9]=Math.sin(t),n[9]*=-1,n}function t3(e){var t=Math.PI/180*e,n=zn();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}function n3(e){var t=Math.PI/180*e,n=zn();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function wd(e,t){var n=zn();return n[0]=e,n[5]=typeof t=="number"?t:e,n}function r3(e){var t=zn();return t[12]=e,t}function i3(e){var t=zn();return t[13]=e,t}var Ip=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){return Ip(t)},0)}}(),o3=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ip;var Fp={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function l3(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function a3(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var Yr={success:a3,failure:l3};function Fo(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function ye(e,t){if(Fo(e)){var n=Object.keys(e);return n.forEach(function(r){return t(e[r],r,e)})}if(e instanceof Array)return e.forEach(function(r,i){return t(r,i,e)});throw new TypeError("Expected either an array or object literal.")}function Fn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach(function(i){return r+=`
 — `+i}),console.log(r,"color: #ea654b;")}}function Hp(){var e=this,t=function(){return{active:[],stale:[]}},n=t(),r=t(),i=t();try{ye(zi("[data-sr-id]"),function(o){var l=parseInt(o.getAttribute("data-sr-id"));n.active.push(l)})}catch(o){throw o}ye(this.store.elements,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),ye(n.stale,function(o){return delete e.store.elements[o]}),ye(this.store.elements,function(o){i.active.indexOf(o.containerId)===-1&&i.active.push(o.containerId),o.hasOwnProperty("sequence")&&r.active.indexOf(o.sequence.id)===-1&&r.active.push(o.sequence.id)}),ye(this.store.containers,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),ye(i.stale,function(o){var l=e.store.containers[o].node;l.removeEventListener("scroll",e.delegate),l.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),ye(this.store.sequences,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),ye(r.stale,function(o){return delete e.store.sequences[o]})}var xd=function(){var e={},t=document.documentElement.style;function n(r,i){if(i===void 0&&(i=t),r&&typeof r=="string"){if(e[r])return e[r];if(typeof i[r]=="string")return e[r]=r;if(typeof i["-webkit-"+r]=="string")return e[r]="-webkit-"+r;throw new RangeError('Unable to find "'+r+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function s3(e){var t=window.getComputedStyle(e.node),n=t.position,r=e.config,i={},o=e.node.getAttribute("style")||"",l=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=l?l.map(function(z){return z.trim()}).join("; ")+";":"",i.generated=l.some(function(z){return z.match(/visibility\s?:\s?visible/i)})?i.computed:l.concat(["visibility: visible"]).map(function(z){return z.trim()}).join("; ")+";";var a=parseFloat(t.opacity),s=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),u={computed:a!==s?"opacity: "+a+";":"",generated:a!==s?"opacity: "+s+";":""},f=[];if(parseFloat(r.distance)){var c=r.origin==="top"||r.origin==="bottom"?"Y":"X",p=r.distance;(r.origin==="top"||r.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var w=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=w[0],x=w[1];switch(x){case"em":p=parseInt(t.fontSize)*y;break;case"px":p=y;break;case"%":p=c==="Y"?e.node.getBoundingClientRect().height*y/100:e.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}c==="Y"?f.push(i3(p)):f.push(r3(p))}r.rotate.x&&f.push(e3(r.rotate.x)),r.rotate.y&&f.push(t3(r.rotate.y)),r.rotate.z&&f.push(n3(r.rotate.z)),r.scale!==1&&(r.scale===0?f.push(wd(2e-4)):f.push(wd(r.scale)));var O={};if(f.length){O.property=xd("transform"),O.computed={raw:t[O.property],matrix:Jy(t[O.property])},f.unshift(O.computed.matrix);var g=f.reduce(Zy);O.generated={initial:O.property+": matrix3d("+g.join(", ")+");",final:O.property+": matrix3d("+O.computed.matrix.join(", ")+");"}}else O.generated={initial:"",final:""};var h={};if(u.generated||O.generated.initial){h.property=xd("transition"),h.computed=t[h.property],h.fragments=[];var v=r.delay,S=r.duration,$=r.easing;u.generated&&h.fragments.push({delayed:"opacity "+S/1e3+"s "+$+" "+v/1e3+"s",instant:"opacity "+S/1e3+"s "+$+" 0s"}),O.generated.initial&&h.fragments.push({delayed:O.property+" "+S/1e3+"s "+$+" "+v/1e3+"s",instant:O.property+" "+S/1e3+"s "+$+" 0s"});var N=h.computed&&!h.computed.match(/all 0s|none 0s/);N&&h.fragments.unshift({delayed:h.computed,instant:h.computed});var j=h.fragments.reduce(function(z,q,Y){return z.delayed+=Y===0?q.delayed:", "+q.delayed,z.instant+=Y===0?q.instant:", "+q.instant,z},{delayed:"",instant:""});h.generated={delayed:h.property+": "+j.delayed+";",instant:h.property+": "+j.instant+";"}}else h.generated={delayed:"",instant:""};return{inline:i,opacity:u,position:n,transform:O,transition:h}}function jr(e,t){t.split(";").forEach(function(n){var r=n.split(":"),i=r[0],o=r.slice(1);i&&o&&(e.style[i.trim()]=o.join(":"))})}function Cc(e){var t=this,n;try{ye(zi(e),function(r){var i=r.getAttribute("data-sr-id");if(i!==null){n=!0;var o=t.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),jr(o.node,o.styles.inline.generated),r.removeAttribute("data-sr-id"),delete t.store.elements[i]}})}catch(r){return Fn.call(this,"Clean failed.",r.message)}if(n)try{Hp.call(this)}catch(r){return Fn.call(this,"Clean failed.",r.message)}}function u3(){var e=this;ye(this.store.elements,function(t){jr(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),ye(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function Mi(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(Fo(e))return ye(t,function(r){ye(r,function(i,o){Fo(i)?((!e[o]||!Fo(e[o]))&&(e[o]={}),Mi(e[o],i)):e[o]=i})}),e;throw new TypeError("Target must be an object literal.")}function ml(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var ou=function(){var e=0;return function(){return e++}}();function Up(){var e=this;Hp.call(this),ye(this.store.elements,function(t){var n=[t.styles.inline.generated];t.visible?(n.push(t.styles.opacity.computed),n.push(t.styles.transform.generated.final),t.revealed=!0):(n.push(t.styles.opacity.generated),n.push(t.styles.transform.generated.initial),t.revealed=!1),jr(t.node,n.filter(function(r){return r!==""}).join(" "))}),ye(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function ti(e,t){t===void 0&&(t={});var n=t.pristine||this.pristine,r=e.config.useDelay==="always"||e.config.useDelay==="onload"&&n||e.config.useDelay==="once"&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||i)return c3.call(this,e,r);if(t.reset||o)return d3.call(this,e)}function c3(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,jr(e.node,n.filter(function(r){return r!==""}).join(" ")),Bp.call(this,e,t)}function d3(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,jr(e.node,t.filter(function(n){return n!==""}).join(" ")),Bp.call(this,e)}function Bp(e,t){var n=this,r=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,l=0;e.callbackTimer&&(l=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&Cc.call(n,e.node)},r-l)}}function Vp(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return ti.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],r=e.sequence.index;if(n){var i=new kd(n,"visible",this.store),o=new kd(n,"revealed",this.store);if(n.models={visible:i,revealed:o},!o.body.length){var l=n.members[i.body[0]],a=this.store.elements[l];if(a)return Eo.call(this,n,i.body[0],-1,t),Eo.call(this,n,i.body[0],1,t),ti.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&r===[].concat(o.head).pop()&&r>=[].concat(i.body).shift())return Eo.call(this,n,r,-1,t),ti.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&r===[].concat(o.foot).shift()&&r<=[].concat(i.body).pop())return Eo.call(this,n,r,1,t),ti.call(this,e,{reveal:!0,pristine:t})}}function f3(e){var t=Math.abs(e);if(!isNaN(t))this.id=ou(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function kd(e,t,n){var r=this;this.head=[],this.body=[],this.foot=[],ye(e.members,function(i,o){var l=n.elements[i];l&&l[t]&&r.body.push(o)}),this.body.length&&ye(e.members,function(i,o){var l=n.elements[i];l&&!l[t]&&(o<r.body[0]?r.head.push(o):r.foot.push(o))})}function Eo(e,t,n,r){var i=this,o=["head",null,"foot"][1+n],l=e.members[t+n],a=this.store.elements[l];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&Vp.call(i,a,r)},e.interval)}function Wp(e,t,n){var r=this;t===void 0&&(t={}),n===void 0&&(n=!1);var i=[],o,l=t.interval||Fp.interval;try{l&&(o=new f3(l));var a=zi(e);if(!a.length)throw new Error("Invalid reveal target.");var s=a.reduce(function(u,f){var c={},p=f.getAttribute("data-sr-id");p?(Mi(c,r.store.elements[p]),jr(c.node,c.styles.inline.computed)):(c.id=ou(),c.node=f,c.seen=!1,c.revealed=!1,c.visible=!1);var w=Mi({},c.config||r.defaults,t);if(!w.mobile&&ml()||!w.desktop&&!ml())return p&&Cc.call(r,c),u;var y=zi(w.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(f))return u;var x;return x=p3(y,i,r.store.containers),x===null&&(x=ou(),i.push({id:x,node:y})),c.config=w,c.containerId=x,c.styles=s3(c),o&&(c.sequence={id:o.id,index:o.members.length},o.members.push(c.id)),u.push(c),u},[]);ye(s,function(u){r.store.elements[u.id]=u,u.node.setAttribute("data-sr-id",u.id)})}catch(u){return Fn.call(this,"Reveal failed.",u.message)}ye(i,function(u){r.store.containers[u.id]={id:u.id,node:u.node}}),o&&(this.store.sequences[o.id]=o),n!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(Up.bind(this),0))}function p3(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=null;return ye(t,function(i){ye(i,function(o){r===null&&o.node===e&&(r=o.id)})}),r}function h3(){var e=this;ye(this.store.history,function(t){Wp.call(e,t.target,t.options,!0)}),Up.call(this)}var m3=function(e){return(e>0)-(e<0)||+e},Sd=Math.sign||m3;function bd(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,l=e.node;do isNaN(l.offsetTop)||(i+=l.offsetTop),isNaN(l.offsetLeft)||(o+=l.offsetLeft),l=l.offsetParent;while(l);return{bounds:{top:i,right:o+r,bottom:i+n,left:o},height:n,width:r}}function g3(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function v3(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(!!t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,i={top:e.geometry.bounds.top+e.geometry.height*n,right:e.geometry.bounds.right-e.geometry.width*n,bottom:e.geometry.bounds.bottom-e.geometry.height*n,left:e.geometry.bounds.left+e.geometry.width*n},o={top:t.geometry.bounds.top+t.scroll.top+r.top,right:t.geometry.bounds.right+t.scroll.left-r.right,bottom:t.geometry.bounds.bottom+t.scroll.top-r.bottom,left:t.geometry.bounds.left+t.scroll.left+r.left};return i.top<o.bottom&&i.right>o.left&&i.bottom>o.top&&i.left<o.right||e.styles.position==="fixed"}}function y3(e,t){var n=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),o3(function(){var r=e.type==="init"||e.type==="resize";ye(n.store.containers,function(i){r&&(i.geometry=bd.call(n,i,!0));var o=g3.call(n,i);i.scroll&&(i.direction={x:Sd(o.left-i.scroll.left),y:Sd(o.top-i.scroll.top)}),i.scroll=o}),ye(t,function(i){(r||i.geometry===void 0)&&(i.geometry=bd.call(n,i)),i.visible=v3.call(n,i)}),ye(t,function(i){i.sequence?Vp.call(n,i):ti.call(n,i)}),n.pristine=!1})}function w3(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function x3(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var k3="4.0.9",ja,Da,Ia,Fa,Ha,on,Ua,Ba;function Dt(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==Dt.prototype;if(t)return new Dt(e);if(!Dt.isSupported())return Fn.call(this,"Instantiation failed.","This browser is not supported."),Yr.failure();var n;try{n=on?Mi({},on,e):Mi({},Fp,e)}catch(i){return Fn.call(this,"Invalid configuration.",i.message),Yr.failure()}try{var r=zi(n.container)[0];if(!r)throw new Error("Invalid container.")}catch(i){return Fn.call(this,i.message),Yr.failure()}return on=n,!on.mobile&&ml()||!on.desktop&&!ml()?(Fn.call(this,"This device is disabled.","desktop: "+on.desktop,"mobile: "+on.mobile),Yr.failure()):(Yr.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,ja=ja||y3.bind(this),Da=Da||u3.bind(this),Ia=Ia||Wp.bind(this),Fa=Fa||Cc.bind(this),Ha=Ha||h3.bind(this),Object.defineProperty(this,"delegate",{get:function(){return ja}}),Object.defineProperty(this,"destroy",{get:function(){return Da}}),Object.defineProperty(this,"reveal",{get:function(){return Ia}}),Object.defineProperty(this,"clean",{get:function(){return Fa}}),Object.defineProperty(this,"sync",{get:function(){return Ha}}),Object.defineProperty(this,"defaults",{get:function(){return on}}),Object.defineProperty(this,"version",{get:function(){return k3}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Ba||(Ba=this))}Dt.isSupported=function(){return w3()&&x3()};Object.defineProperty(Dt,"debug",{get:function(){return Ua||!1},set:function(e){return Ua=typeof e=="boolean"?e:Ua}});Dt();const S3=E.div`
    font-weight: 800;
    cursor: pointer;
    color: white;
    background-color: rgb(209, 28, 28);
    text-align: center;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    transition: background-color 0.3s ease-in;
    text-decoration: none;
    display: ${e=>e.tipo=="mobile"?"block":"none"};
    cursor: pointer;
    position:relative;
    overflow: hidden;
    width: 200px;

    &:hover{
        background-color: #111111;
        background-color: ${e=>e.color=="dark"?"black":"#111111"};
    }

    &:before{
        content: " ";
        background-color: ${e=>e.color=="dark"?"black":"#111111"};
        width: 280px;
        height: 200px;
        position: absolute;
        top: -200px;
        left: -40px;
        border-radius: 50%;
        transition: top .3s ease;
    }
    &:hover::before{
        top: -50px;
    }

    @media screen and (max-width: 375px) {
        font-size: 1rem;
        padding: 0.8rem;
    }
    @media screen and (min-width: 321px) {
        padding: 1rem;
    }

    @media screen and (min-width:769px) {
        font-size: 1.1rem;
        padding: 0.8rem 1rem;
        margin-left: 0;
        margin-right: 0;
        display: ${e=>e.tipo=="desktop"?"block":"none"};
    }

    button{
        outline: none;
        border: none;
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-size: 1.4rem;
        background-color: transparent;
        color: white;
        align-items: center;
        cursor: pointer;
        position: relative;
        z-index: 400;
    }

    button span:nth-child(2){
        display: flex;
        font-size: 1.6rem;
        border-radius: 8px;
    }
`;function Cd({text:e,tipo:t,href:n}){const{theme:r}=_.exports.useContext(kt);return d(S3,{tipo:t,href:n,download:!0,color:r,children:R("button",{children:[d("span",{children:e}),d("span",{children:d(Hv,{})})]})})}const b3=E.section`
    min-height: 100vh;
    padding-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};

    @media screen and (min-width:1024px) {
        padding-top: 4.5rem
    }
`,C3=E.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width:769px) {
        flex-direction: row;
        padding-left: 1rem;
        padding-right: 1rem;
        gap: 2rem;
    }
    

    @media screen and (min-width:1024px) {
        flex-direction: row;
        justify-content: space-between;
        
    }
`,E3=E.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media screen and (min-width:769px) {
        gap: 2rem;
    }

    @media screen and (min-width:1024px) {
        gap: 0.5rem;

    }
`,_3=E.h1`
    text-align: center;
    line-height: 2rem;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    font-size: calc(1.5rem + 1vh);

    @media screen and (min-width: 375px) {
        font-size: calc(1.8rem + 1vh);
        line-height: 2.1rem;
    }

    @media screen and (min-width:769px) {
        text-align: left;
        font-size: calc(3.6rem + 1vh);
        line-height: calc(3.8rem + 1vh);
        font-weight: 600;
        padding: 0px;
    }
    @media screen and (min-width:1024px) {
        margin-bottom: 1rem;
    }
`,P3=E.p`
    text-align: center;
    font-size: 1.2rem;
    color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};

    @media screen and (max-width:375px) {
        font-size: 1rem;
    }

    @media screen and (min-width:769px) {
        text-align: left;
        max-width: 600px;
        font-size: calc(1rem + 1vh);
        line-height: 2rem;
        font-weight: 400;
    }
    @media screen and (min-width:1024px) {
        margin-bottom: 1rem;
    }
`,O3=E.div`
    min-width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    img{
        margin-bottom: 1rem;
        background-color: rgb(209, 28, 28) ;
        border: 8px solid white;
        max-width: 200px;
        border-radius: 20px;
    }

    /* img:hover{
        transform: scale();
    } */
    @media screen and (min-width: 321px){
        img{
            max-width: 260px;
            margin-bottom: 0.5rem;
        } 
    }

    @media screen and (min-width:769px) {
        display: flex;
        align-items: end;
        min-width: 40%;
        img{
            max-width: 300px;
            border-radius: 20px;
        }
    }

    @media screen and (min-width:1024px) {
        img{
            width: 100%;
            max-width: 320px;
        }
    }

`;function T3(){_.exports.useEffect(()=>{Dt({origin:"top",duration:1500,reset:!0}).reveal(".top",{origin:"top",delay:100,distance:"300px"})},[]);const{theme:e}=_.exports.useContext(kt);return d(b3,{id:"home",color:e,children:R(C3,{className:"container top",children:[R(E3,{children:[d(_3,{color:e,children:"Saul Huarcaya Quispe"}),d(P3,{color:e,children:"Desarrollador de Software, manejo tecnologias frontend y backend , me considero entusiasta y perserverante en lo que hago."}),d(Cd,{text:"Descargar cv",tipo:"desktop",href:yd})]}),R(O3,{color:e,children:[d("img",{src:Xy,alt:"author"}),d(Cd,{text:"Descargar cv",tipo:"mobile",href:yd})]})]})})}function z3(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"}}]})(e)}function M3(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"}}]})(e)}function $3(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}function N3(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"}}]})(e)}function A3(e){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"}}]})(e)}const R3=E.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
    @media screen and (min-width:541px){
        padding: 0rem 1rem;
    }
`,L3=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};
    border-radius: 4px;
    gap: 1rem;
    text-align: justify;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    border: 6px solid ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};

    @media screen and (max-width:540px){
        width: 100%;
        height: 260px;
    }
    @media screen and (min-width:541px){
        width: 48%;
        height: 260px;
    }
    @media screen and (min-width:768px){
        height: 220px;
    }
    @media screen and (min-width:940px){
        width: 32%;
    }
    /* img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    } */
`,j3=E.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    flex: 1;
    img{
        width: 100%;
        height: 100%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    button{
        position: absolute;
        border-top-left-radius: 6px;
        border-bottom-right-radius: 2px;
        overflow: hidden;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        outline: none;
        border: none;
        right: 0rem;
        bottom: 0rem;
        cursor: pointer;
        font-size: 1.8rem;
        transition: color 0.3s ease-in, background-color 0.3s ease-in-out;
        color: white;
        background-color: rgb(252, 19, 19);
    }
    button:hover{
        background-color: black;
        color: white;
    }
    
`,D3=E.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem 1rem 0rem 1rem;
    position: absolute;
    z-index: 80;
    overflow: hidden;
    bottom: ${e=>e.visible?"0%":"100%"} ;
    left: ${e=>e.visible?"0":"100%"};
    transition: bottom 0.3s ease-in , left 0.3s ease-in;
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    height: inherit;
    width: 100%;
    h3{
        text-align: center;
        font-size: calc(1rem + 1vh);
        font-weight: 600;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(252, 19, 19);
        color: ${e=>e.color==="dark"?"rgb(252, 19, 19)":"white"};
    }
    p{
        text-align: justify;
    }

    button{
        border-top-left-radius: 8px;
        color:white;
        position: absolute;
        width: 3rem;
        height: 3rem;
        outline: none;
        border: none;
        right: 0;
        bottom: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(252, 19, 19);
        font-size: 1.7rem;
        background-color: rgb(252, 19, 19);
        color: white;
        transition: color 0.3s ease-in, background-color 0.3s ease-in-out;
    }
    button:hover{
        background-color: black;
        color: white;
    }   
`,I3=E.div`
    align-self: flex-start;
    display: flex;
    width: 6rem;
    height:3rem;
    div{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    a{
        font-size: 1.3rem;
        background-color: rgb(252, 19, 19);
        padding: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgb(252, 19, 19);
        color: white;
    }
    a:hover{
        background-color:black;
    }
`,F3=[{id:1,title:"CRUD",description:"Son operaciones para operar la información (crear, leer, actualizar, eliminar) utilizando la api de usecontext + useReducer + useForm.",route:"#/projects/crud",route_github:"https://github.com/Saul-Huarcaya/crudreact",route_img:"crud.JPG",alt_img:"Imagen de un crud realizado con react"},{id:2,title:"Rick and Morty",description:"Aplicación para buscar los personajes de Rick and Morty + scroll infinito , utilizando la Api rickandmorty.",route:"#/projects/rick-and-morty",route_github:"https://github.com/Saul-Huarcaya/app-countries",route_img:"rick.JPG",alt_img:"Imagen de un scroll infinito de la serie Rick and Morty"},{id:3,title:"App de Países",description:"Aplicación que busca todos los países, mediante nombre del pais o region utiliza la Api RestCountries.",route:"#/projects/api-countries",route_github:"https://github.com/Saul-Huarcaya/app-countries",route_img:"banderas.JPG",alt_img:"Imagen de una aplicación para buscar países."},{id:4,title:"Room Homepage",description:"Desafio Room Homepage propuesto por la web FrontendMentor nivel intermedio se realizo con React.",route:"#/projects/room-page",route_github:"https://github.com/Saul-Huarcaya/room-homepage",route_img:"room-homepage.jpg",alt_img:"Imagen de una room homepage reto de una sola pagina Frontend Mentor."},{id:5,title:"Carrito de Compras",description:"Aplicación que simula el proceso para adquirir uno o varios productos tecnológicos.",route:"#/projects/ecommerce",route_github:"https://github.com/Saul-Huarcaya/carrtito-compras",route_img:"carrito.JPG",alt_img:"Carrito de crompras hecho con React"}];function H3({title:e,description:t,route:n,route_github:r,route_img:i,alt_img:o}){const{theme:l}=_.exports.useContext(kt),[a,s]=_.exports.useState(!1);return R(L3,{color:l,children:[R(j3,{children:[d("img",{src:`img-projects/${i}`,alt:o}),d("button",{onClick:()=>s(!0),children:d(z3,{})})]}),R(D3,{visible:a,color:l,children:[d("h3",{children:e}),d("p",{children:t}),R(I3,{children:[d("div",{children:d("a",{href:r,target:"_blank",children:d($3,{})})}),d("div",{children:d("a",{href:n,target:"_blank",children:d(A3,{})})})]}),d("button",{onClick:()=>s(!1),children:d(M3,{})})]})]})}const U3=E.section`
    min-height: 100vh;
    padding-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.color==="dark"?"dark":"white"};
    
    @media screen and (min-width:1024px) {
        padding-top: 4rem;
    }
`,B3=E.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`,V3=E.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
`;function W3(){_.exports.useEffect(()=>{const t=Dt({duration:1500,delay:0,reset:!0,origin:"left"});t.reveal(".left",{distance:"100px"}),t.reveal(".left2",{distance:"100px"})},[]);const{theme:e}=_.exports.useContext(kt);return d(U3,{id:"project",color:e,children:R(B3,{className:"container",children:[d(V3,{className:"left",color:e,children:"Proyectos"}),d(R3,{className:"left2",children:F3.map(t=>d(H3,{title:t.title,description:t.description,route:t.route,route_github:t.route_github,route_img:t.route_img,alt_img:t.alt_img},t.id))})]})})}function Q3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M8.171 4.999c-0.562 0.083-1.237 0.347-1.716 0.675-0.313 0.207-0.717 0.596-0.95 0.901-0.26 0.343-0.577 1.003-0.702 1.456l-0.106 0.377v15.727l0.106 0.377c0.124 0.453 0.441 1.113 0.702 1.456 0.49 0.641 1.245 1.181 2.003 1.426 0.626 0.2 0.313 0.192 8.486 0.192 8.177 0 7.864 0.008 8.486-0.196 0.762-0.245 1.516-0.781 2.003-1.422 0.26-0.347 0.581-1.007 0.705-1.456l0.102-0.377v-15.727l-0.106-0.377c-0.124-0.452-0.441-1.113-0.701-1.456-0.234-0.306-0.637-0.694-0.95-0.901-0.336-0.23-0.883-0.479-1.305-0.596l-0.37-0.102-7.732-0.004c-4.251-0.004-7.834 0.008-7.954 0.026zM18.709 9.159c1.192 0.196 2.006 0.588 2.538 1.222 0.226 0.268 0.49 0.8 0.6 1.196 0.068 0.26 0.079 0.407 0.083 1.056 0.004 0.683-0.004 0.784-0.083 1.052-0.23 0.8-0.732 1.414-1.543 1.89l-0.279 0.162 0.2 0.064c0.305 0.102 0.815 0.366 1.075 0.562 0.649 0.49 1.101 1.252 1.282 2.161 0.087 0.453 0.087 1.422-0.004 1.837-0.358 1.633-1.622 2.768-3.523 3.149-0.728 0.147-0.916 0.155-4.824 0.155h-3.82v-14.6l3.953 0.015c3.538 0.011 3.99 0.019 4.345 0.079zM13.655 13.277v1.72l1.822-0.015c1.709-0.019 1.837-0.023 2.112-0.098 0.86-0.234 1.233-0.728 1.233-1.633 0-0.694-0.245-1.143-0.777-1.407-0.471-0.234-0.981-0.283-2.983-0.287h-1.407v1.72zM13.655 19.176v2.003l1.991-0.015c2.237-0.015 2.312-0.023 2.863-0.29 0.634-0.309 0.916-0.815 0.916-1.641 0-1.063-0.422-1.652-1.395-1.946-0.275-0.087-0.328-0.087-2.327-0.102l-2.048-0.011v2.003z"}}]})(e)}function q3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"}}]})(e)}function Y3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z"}}]})(e)}function G3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"}}]})(e)}function X3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"}}]})(e)}function K3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"}}]})(e)}function Z3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"}}]})(e)}function J3(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M18.82 15.507l-4.709 1.536-4.094 1.808-1.147 0.303c-0.291 0.276-0.599 0.557-0.928 0.843-0.361 0.314-0.701 0.599-0.959 0.805-0.288 0.229-0.715 0.654-0.934 0.926-0.325 0.405-0.58 0.837-0.689 1.168-0.197 0.597-0.101 1.202 0.279 1.761 0.485 0.713 1.449 1.438 2.572 1.931 0.572 0.252 1.538 0.576 2.263 0.759 1.207 0.305 3.54 0.636 4.824 0.685 0.261 0.010 0.607 0.009 0.623-0.002 0.028-0.019 0.228-0.397 0.46-0.871 0.79-1.613 1.361-3.125 1.668-4.416 0.186-0.782 0.331-1.825 0.425-3.061 0.026-0.346 0.036-1.501 0.016-1.894-0.033-0.639-0.089-1.16-0.179-1.67-0.013-0.075-0.018-0.141-0.011-0.147 0.013-0.011 0.058-0.025 0.636-0.194l-0.115-0.27zM17.744 16.138c0.043 0 0.157 1.091 0.186 1.784 0.006 0.147 0.005 0.241-0.004 0.241-0.028 0-0.603-0.338-1.011-0.594-0.356-0.224-1.031-0.672-1.139-0.757-0.034-0.027-0.030-0.028 0.261-0.128 0.495-0.171 1.669-0.547 1.706-0.547zM15.345 16.926c0.030-0 0.113 0.046 0.309 0.168 0.735 0.46 1.729 1.014 2.155 1.2 0.132 0.058 0.147 0.035-0.157 0.242-0.649 0.441-1.455 0.874-2.446 1.314-0.173 0.077-0.319 0.139-0.325 0.139s0.013-0.088 0.042-0.195c0.24-0.887 0.375-1.783 0.379-2.502 0.002-0.355 0.002-0.357 0.036-0.366 0.002-0 0.004-0.001 0.006-0.001v0zM14.852 17.114c0.021 0.021 0.006 0.817-0.020 1.034-0.062 0.52-0.164 1.002-0.327 1.549-0.039 0.131-0.075 0.244-0.081 0.25-0.014 0.016-0.501-0.458-0.663-0.646-0.277-0.321-0.495-0.639-0.655-0.953-0.081-0.159-0.21-0.475-0.198-0.483 0.055-0.040 1.93-0.765 1.944-0.751zM12.526 18.031c0.004 0 0.008 0.002 0.010 0.004 0.007 0.008 0.032 0.066 0.055 0.129 0.113 0.308 0.368 0.766 0.59 1.058 0.242 0.32 0.557 0.66 0.821 0.886 0.085 0.073 0.164 0.14 0.175 0.15 0.023 0.020 0.030 0.017-0.55 0.237-0.673 0.255-1.406 0.511-2.247 0.783-0.321 0.104-0.592 0.191-0.602 0.195-0.032 0.012-0.022-0.008 0.071-0.154 0.418-0.653 1.051-1.929 1.405-2.832 0.061-0.157 0.12-0.313 0.13-0.349 0.015-0.052 0.031-0.069 0.079-0.091 0.027-0.012 0.050-0.018 0.063-0.016zM11.813 18.325c0.009 0.008-0.171 0.389-0.349 0.736-0.344 0.672-0.724 1.333-1.228 2.14-0.087 0.139-0.167 0.267-0.178 0.282-0.018 0.026-0.025 0.017-0.080-0.092-0.121-0.24-0.222-0.543-0.274-0.824-0.052-0.279-0.043-0.761 0.019-1.061 0.046-0.222 0.044-0.217 0.149-0.271 0.453-0.232 1.926-0.922 1.941-0.909zM17.952 18.574v0.151c-0.001 0.794-0.085 1.881-0.209 2.674-0.022 0.139-0.040 0.254-0.042 0.255s-0.102-0.028-0.223-0.066c-0.534-0.166-1.114-0.414-1.636-0.7-0.346-0.19-0.847-0.497-0.833-0.511 0.004-0.004 0.151-0.082 0.328-0.174 0.699-0.363 1.366-0.754 1.947-1.142 0.218-0.145 0.544-0.381 0.616-0.445l0.051-0.045zM9.125 19.627c0.014-0.001 0.011 0.027-0.012 0.158-0.016 0.091-0.034 0.263-0.040 0.382-0.029 0.52 0.056 0.904 0.314 1.43 0.072 0.146 0.128 0.268 0.125 0.27-0.026 0.022-2.38 0.71-3.12 0.913-0.219 0.060-0.411 0.113-0.427 0.118-0.026 0.008-0.028 0.002-0.019-0.058 0.081-0.522 0.479-1.207 1.036-1.783 0.37-0.383 0.666-0.609 1.17-0.897 0.362-0.206 0.923-0.516 0.964-0.532 0.003-0.001 0.005-0.001 0.008-0.001v0zM14.677 20.621c0.002-0.003 0.089 0.044 0.194 0.104 0.76 0.44 1.821 0.852 2.726 1.059l0.082 0.019-0.112 0.063c-0.473 0.262-2.029 0.91-3.618 1.506-0.232 0.087-0.458 0.172-0.503 0.19s-0.080 0.030-0.080 0.026 0.066-0.13 0.146-0.28c0.446-0.834 0.892-1.848 1.12-2.552 0.023-0.072 0.044-0.132 0.046-0.135v0zM14.111 20.806c0.002 0.002-0.025 0.077-0.062 0.165-0.31 0.75-0.716 1.568-1.235 2.487-0.132 0.234-0.243 0.425-0.247 0.424s-0.111-0.064-0.238-0.142c-0.755-0.462-1.423-1.031-1.861-1.584l-0.063-0.078 0.325-0.089c1.161-0.318 2.145-0.658 3.124-1.080 0.139-0.060 0.254-0.107 0.256-0.104v0zM17.627 22.034c0.002 0 0.002 0.002 0.002 0.003 0 0.079-0.18 0.811-0.329 1.341-0.125 0.445-0.231 0.792-0.426 1.408-0.086 0.272-0.16 0.494-0.165 0.493s-0.025-0.005-0.046-0.009c-1.057-0.191-2.005-0.458-2.892-0.815-0.248-0.1-0.607-0.259-0.626-0.277-0.006-0.006 0.208-0.107 0.476-0.224 1.62-0.707 3.299-1.512 3.873-1.857 0.069-0.041 0.12-0.066 0.132-0.063zM9.511 22.312c0.009 0.008-0.445 0.657-1.078 1.543-0.22 0.308-0.479 0.671-0.574 0.807s-0.24 0.35-0.322 0.477l-0.15 0.231-0.159-0.134c-0.187-0.157-0.514-0.49-0.663-0.675-0.306-0.381-0.513-0.782-0.594-1.15-0.038-0.17-0.039-0.256-0.003-0.267 0.052-0.016 1.002-0.239 1.894-0.446 0.495-0.115 1.068-0.249 1.273-0.299s0.375-0.088 0.377-0.086zM9.967 22.486l0.115 0.128c0.513 0.571 1.034 0.997 1.67 1.365 0.112 0.065 0.198 0.121 0.191 0.126-0.026 0.016-2.2 0.789-3.205 1.14-0.567 0.198-1.033 0.358-1.035 0.358s-0.035-0.021-0.071-0.047l-0.066-0.047 0.103-0.148c0.334-0.483 0.753-1.014 1.67-2.118l0.629-0.757zM12.807 24.516c0.003-0.003 0.161 0.053 0.354 0.125 0.464 0.173 0.827 0.286 1.32 0.41 0.605 0.151 1.478 0.303 1.996 0.346 0.079 0.007 0.12 0.016 0.107 0.024-0.024 0.015-0.548 0.19-0.933 0.311-0.611 0.192-2.48 0.744-4.004 1.183-0.283 0.081-0.524 0.15-0.537 0.153-0.034 0.007-0.153-0.024-0.153-0.040 0-0.008 0.085-0.116 0.189-0.24 0.512-0.613 1.021-1.297 1.446-1.944 0.116-0.177 0.213-0.325 0.216-0.328zM12.178 24.534c0.005 0.005-0.248 0.409-0.692 1.108-0.188 0.295-0.4 0.631-0.473 0.747s-0.18 0.291-0.237 0.391l-0.104 0.182-0.053-0.014c-0.128-0.035-1.028-0.352-1.265-0.447-0.295-0.117-0.602-0.258-0.828-0.381-0.283-0.153-0.642-0.38-0.614-0.389 0.008-0.003 0.495-0.136 1.081-0.296 1.56-0.425 2.423-0.669 2.989-0.846 0.106-0.033 0.194-0.058 0.196-0.056zM16.609 25.573c0.003-0.001 0.005-0.001 0.005 0 0.015 0.037-0.563 1.636-0.774 2.143-0.047 0.114-0.065 0.141-0.089 0.14-0.060-0.003-0.897-0.12-1.404-0.197-0.887-0.135-2.373-0.394-2.748-0.48l-0.087-0.019 0.532-0.12c1.14-0.257 1.687-0.395 2.242-0.564 0.7-0.214 1.394-0.482 2.094-0.807 0.111-0.052 0.205-0.091 0.229-0.096v0zM13.967 4.533c-0.079-0.009-1.343 0.446-2.155 0.776-1.1 0.447-1.954 0.875-2.481 1.245-0.196 0.138-0.443 0.385-0.479 0.48-0.014 0.036-0.020 0.077-0.020 0.12l0.478 0.451 1.134 0.362 2.702 0.483 3.088 0.531 0.031-0.265c-0.009-0.002-0.018-0.003-0.028-0.004l-0.407-0.064-0.083-0.145c-0.42-0.741-0.884-1.657-1.153-2.277-0.209-0.48-0.409-1.034-0.52-1.434-0.066-0.238-0.073-0.253-0.11-0.258v0zM13.908 4.716c0.003-0.001 0.005-0.001 0.005 0 0.002 0.003 0.017 0.102 0.031 0.221 0.061 0.497 0.172 0.98 0.346 1.499 0.131 0.391 0.133 0.368-0.023 0.325-0.363-0.101-1.99-0.381-3.167-0.544-0.19-0.026-0.348-0.050-0.35-0.052-0.015-0.015 0.849-0.468 1.232-0.646 0.491-0.229 1.829-0.785 1.926-0.803zM10.478 6.309l0.138 0.047c0.756 0.257 2.65 0.619 3.697 0.706 0.118 0.010 0.217 0.020 0.22 0.023s-0.097 0.056-0.223 0.119c-0.505 0.253-1.061 0.561-1.446 0.802-0.113 0.071-0.216 0.128-0.23 0.127s-0.088-0.013-0.166-0.026l-0.142-0.023-0.357-0.347c-0.628-0.607-1.118-1.077-1.307-1.255l-0.184-0.173zM10.338 6.421l0.5 0.625c0.275 0.344 0.552 0.685 0.613 0.758s0.109 0.136 0.106 0.138c-0.014 0.010-0.725-0.128-1.102-0.215-0.387-0.089-0.547-0.131-0.786-0.208l-0.195-0.063 0.001-0.048c0.002-0.24 0.305-0.594 0.818-0.956l0.046-0.031zM14.6 7.272c0.015 0.001 0.031 0.032 0.075 0.129 0.121 0.266 0.499 0.987 0.591 1.126 0.030 0.046 0.078 0.049-0.424-0.032-1.205-0.195-1.595-0.26-1.595-0.267 0-0.005 0.036-0.028 0.080-0.053 0.373-0.208 0.75-0.469 1.085-0.751 0.080-0.068 0.157-0.132 0.171-0.144 0.006-0.005 0.011-0.008 0.016-0.007zM8.874 6.986c0 0-0.078 0.124-0.004 0.308 0.046 0.114 0.183 0.251 0.334 0.396 0 0 1.582 1.543 1.775 1.767 0.876 1.011 1.257 2.007 1.292 3.382 0.023 0.882-0.148 1.658-0.561 2.559-0.741 1.615-2.301 3.397-4.711 5.378l0.354-0.117c0.227-0.17 0.536-0.352 1.265-0.751 1.677-0.918 3.561-1.762 5.875-2.631 3.329-1.251 8.806-2.719 11.922-3.196l0.325-0.050-0.050-0.078c-0.285-0.443-0.479-0.716-0.713-1.005-0.683-0.845-1.511-1.535-2.525-2.102-1.393-0.78-3.2-1.386-5.484-1.84-0.432-0.086-1.378-0.248-2.147-0.368-1.63-0.254-2.681-0.426-3.843-0.628-0.416-0.072-1.038-0.177-1.451-0.266-0.215-0.046-0.624-0.143-0.941-0.253-0.262-0.103-0.632-0.203-0.71-0.504zM9.791 7.876c0.002-0.002 0.062 0.016 0.134 0.041 0.133 0.045 0.31 0.098 0.515 0.156 0.144 0.040 0.302 0.082 0.469 0.125 0.214 0.055 0.391 0.102 0.393 0.104 0.024 0.027 0.383 1.174 0.506 1.614 0.047 0.168 0.082 0.308 0.079 0.311s-0.043-0.059-0.088-0.137c-0.416-0.731-1.074-1.475-1.836-2.073-0.095-0.075-0.172-0.138-0.172-0.141zM11.543 8.36c0.018-0.001 0.097 0.012 0.191 0.033 0.606 0.134 1.689 0.343 2.385 0.46 0.116 0.020 0.211 0.041 0.211 0.047s-0.043 0.034-0.096 0.060c-0.117 0.059-0.59 0.342-0.748 0.448-0.395 0.264-0.75 0.547-1.008 0.804-0.104 0.103-0.191 0.188-0.194 0.188s-0.021-0.060-0.040-0.134c-0.129-0.495-0.397-1.227-0.636-1.742-0.039-0.083-0.070-0.156-0.070-0.162 0-0.001 0.001-0.001 0.004-0.002v0zM14.626 8.946c0.020 0.007 0.059 0.127 0.127 0.395 0.13 0.515 0.191 1.094 0.171 1.629-0.006 0.149-0.015 0.287-0.021 0.308l-0.011 0.037-0.184-0.060c-0.379-0.121-0.999-0.304-1.53-0.451-0.302-0.084-0.549-0.158-0.549-0.165 0-0.022 0.44-0.462 0.629-0.629 0.361-0.32 1.334-1.076 1.368-1.064zM14.871 8.981c0.011-0.010 1.473 0.243 2.137 0.37 0.495 0.095 1.212 0.245 1.255 0.263 0.021 0.009-0.053 0.049-0.291 0.156-0.941 0.424-1.638 0.803-2.331 1.267-0.183 0.122-0.334 0.222-0.337 0.222s-0.006-0.102-0.006-0.226c-0.001-0.676-0.135-1.358-0.383-1.934-0.027-0.062-0.047-0.115-0.044-0.118v0zM18.651 9.729c0.011 0.011-0.037 0.3-0.078 0.47-0.129 0.53-0.472 1.317-0.895 2.056-0.075 0.13-0.141 0.239-0.149 0.241s-0.104-0.048-0.214-0.112c-0.414-0.242-0.882-0.471-1.396-0.683-0.143-0.059-0.266-0.112-0.272-0.118-0.023-0.022 1.12-0.779 1.726-1.142 0.485-0.291 1.265-0.726 1.279-0.712zM18.921 9.771c0.033 0 0.681 0.177 1.017 0.277 0.835 0.25 1.799 0.602 2.423 0.886l0.26 0.118-0.183 0.042c-1.529 0.351-2.84 0.757-4.102 1.269-0.105 0.043-0.196 0.078-0.203 0.078s0.027-0.081 0.074-0.18c0.379-0.806 0.625-1.652 0.688-2.37 0.006-0.065 0.018-0.118 0.026-0.118v0zM12.476 11.253c0.010-0.010 0.504 0.105 0.773 0.181 0.405 0.114 1.266 0.402 1.266 0.424 0 0.004-0.095 0.087-0.211 0.184-0.465 0.389-0.914 0.797-1.452 1.316-0.159 0.154-0.295 0.279-0.302 0.279s-0.010-0.023-0.006-0.050c0.081-0.598 0.064-1.366-0.049-2.147-0.014-0.099-0.023-0.183-0.019-0.187zM22.868 11.262c0.007 0.007-0.229 0.377-0.376 0.588-0.215 0.307-0.526 0.711-1.235 1.603-0.372 0.468-0.792 0.998-0.934 1.177s-0.26 0.326-0.264 0.326-0.049-0.064-0.101-0.142c-0.4-0.597-0.874-1.121-1.44-1.592-0.106-0.088-0.225-0.184-0.264-0.214s-0.072-0.057-0.072-0.061c-0-0.010 0.604-0.269 1.065-0.457 0.803-0.327 1.9-0.718 2.721-0.97 0.433-0.133 0.893-0.265 0.9-0.258zM23.141 11.334c0.013-0.003 0.099 0.039 0.203 0.098 0.865 0.495 1.712 1.132 2.379 1.786 0.19 0.186 0.653 0.668 0.646 0.672-0.002 0.001-0.162 0.014-0.356 0.028-1.499 0.113-3.415 0.431-5.259 0.875-0.125 0.030-0.234 0.055-0.241 0.055s0.13-0.138 0.305-0.305c1.083-1.041 1.578-1.699 2.159-2.874 0.087-0.175 0.16-0.326 0.163-0.335 0-0.001 0.001-0.001 0.002-0.001v0zM15.22 12.146c0.049 0.011 0.511 0.226 0.86 0.401 0.319 0.16 0.802 0.417 0.826 0.439 0.003 0.003-0.167 0.092-0.378 0.197-0.669 0.335-1.242 0.65-1.84 1.016-0.171 0.104-0.313 0.19-0.318 0.19-0.015 0-0.009-0.013 0.086-0.188 0.319-0.583 0.575-1.28 0.723-1.96 0.013-0.061 0.029-0.098 0.040-0.095v0zM14.754 12.229c0.010 0.010-0.11 0.45-0.186 0.685-0.146 0.451-0.392 1.018-0.629 1.445-0.056 0.1-0.141 0.247-0.189 0.326l-0.088 0.144-0.2-0.193c-0.232-0.225-0.421-0.364-0.662-0.489-0.095-0.049-0.172-0.094-0.172-0.101-0.001-0.029 0.607-0.582 1.075-0.978 0.335-0.284 1.042-0.849 1.050-0.84zM17.583 13.392l0.174 0.113c0.398 0.258 0.869 0.606 1.229 0.906 0.201 0.168 0.593 0.518 0.673 0.603l0.043 0.045-0.288 0.080c-1.63 0.452-2.89 0.855-4.359 1.395-0.163 0.060-0.304 0.11-0.314 0.11-0.020 0-0.040 0.019 0.326-0.319 0.94-0.865 1.77-1.818 2.391-2.745l0.125-0.188zM16.84 13.579c0.008 0.008-0.482 0.695-0.773 1.083-0.349 0.464-0.969 1.239-1.396 1.744-0.178 0.211-0.331 0.386-0.34 0.389s-0.015-0.049-0.015-0.13c-0.001-0.431-0.11-0.891-0.302-1.281-0.081-0.165-0.095-0.204-0.078-0.22 0.067-0.061 1.104-0.652 1.758-1.002 0.449-0.241 1.138-0.591 1.147-0.582zM12.344 14.68c0.009 0 0.092 0.042 0.185 0.093 0.227 0.126 0.431 0.264 0.611 0.414 0.007 0.006-0.086 0.082-0.207 0.169-0.337 0.243-0.851 0.631-1.148 0.868-0.314 0.25-0.324 0.257-0.289 0.203 0.235-0.359 0.353-0.563 0.477-0.823 0.11-0.231 0.219-0.505 0.297-0.744 0.033-0.099 0.066-0.18 0.075-0.18zM13.542 15.62c0.016-0.002 0.039 0.028 0.136 0.172 0.203 0.303 0.358 0.707 0.398 1.037l0.008 0.071-0.486 0.188c-0.873 0.339-1.677 0.673-2.219 0.921-0.152 0.070-0.42 0.198-0.595 0.285s-0.318 0.156-0.318 0.153c0-0.004 0.11-0.086 0.244-0.184 1.065-0.773 1.984-1.62 2.676-2.467 0.074-0.091 0.141-0.169 0.15-0.174 0.002-0.002 0.004-0.002 0.007-0.002v0zM12.989 15.757c0.014 0.014-0.393 0.475-0.667 0.754-0.686 0.701-1.367 1.25-2.21 1.784-0.105 0.067-0.202 0.127-0.214 0.135-0.023 0.014 0.007-0.021 0.378-0.424 0.233-0.254 0.412-0.465 0.614-0.728 0.133-0.173 0.159-0.198 0.355-0.339 0.527-0.38 1.731-1.196 1.745-1.182z"}}]})(e)}function e4(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M5.082 5.593c-0.564 0.564-0.423 1.213 0.564 2.679 0.508 0.761 1.1 1.946 1.326 2.623 0.226 0.705 0.677 1.664 0.987 2.143 0.564 0.79 0.564 0.959 0.197 2.397-0.226 0.902-0.31 2.031-0.197 2.736 0.169 1.185 1.128 2.905 1.72 3.102 0.508 0.169 1.241-0.733 1.269-1.551 0-0.705 0.028-0.733 0.338-0.226 0.536 0.874 2.228 2.735 2.369 2.594 0.056-0.056-0.31-0.79-0.846-1.607-0.508-0.846-1.1-1.946-1.325-2.454-0.31-0.846-0.423-0.902-0.79-0.508-0.226 0.226-0.508 0.874-0.592 1.466-0.226 1.354-0.733 1.523-1.128 0.367s-0.395-3.131 0-4.484c0.282-0.931 0.254-1.184-0.226-1.89-0.31-0.423-0.79-1.438-1.044-2.256-0.254-0.79-0.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115 0.056-1.89 0.479 0.085 1.213 0.423 1.664 0.733 0.423 0.31 1.156 0.564 1.607 0.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241 0.423 3.835 2.002 3.835 2.341 0 0.113-0.649 0.282-1.438 0.338-2.115 0.226-2.313 0.62-0.931 1.861 0.649 0.564 1.862 1.438 2.736 1.918l1.579 0.902-0.733-0.931c-0.423-0.508-1.297-1.297-1.974-1.72s-1.213-0.874-1.213-0.987c0-0.113 0.479-0.31 1.072-0.395 1.579-0.282 2.030-0.423 2.030-0.705 0-0.423-2.848-2.566-4.202-3.159-1.156-0.536-1.297-0.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-0.649-0.113-1.551-0.451-1.946-0.733-0.931-0.705-2.82-0.959-3.272-0.479z"}}]})(e)}function t4(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M15.998 28.895c-0.337 0-0.673-0.088-0.969-0.259l-3.086-1.826c-0.46-0.257-0.235-0.349-0.083-0.402 0.614-0.213 0.739-0.262 1.394-0.635 0.069-0.038 0.159-0.024 0.231 0.018l2.37 1.407c0.087 0.048 0.207 0.048 0.287 0l9.241-5.333c0.086-0.049 0.141-0.149 0.141-0.25v-10.665c0-0.104-0.055-0.202-0.143-0.255l-9.237-5.329c-0.086-0.050-0.199-0.050-0.285 0l-9.235 5.331c-0.090 0.051-0.146 0.152-0.146 0.253v10.666c0 0.102 0.056 0.198 0.145 0.247l2.532 1.462c1.374 0.687 2.215-0.122 2.215-0.935v-10.53c0-0.149 0.12-0.266 0.269-0.266h1.172c0.146 0 0.267 0.117 0.267 0.266v10.53c0 1.833-0.998 2.885-2.736 2.885-0.534 0-0.955 0-2.129-0.579l-2.423-1.395c-0.598-0.346-0.969-0.993-0.969-1.686v-10.665c0-0.693 0.371-1.339 0.969-1.684l9.242-5.34c0.585-0.331 1.362-0.331 1.942 0l9.241 5.34c0.599 0.346 0.971 0.992 0.971 1.684v10.665c0 0.693-0.372 1.337-0.971 1.686l-9.241 5.335c-0.296 0.171-0.631 0.259-0.973 0.259zM18.853 21.547c-4.045 0-4.892-1.857-4.892-3.414 0-0.148 0.118-0.266 0.266-0.266h1.195c0.133 0 0.245 0.096 0.265 0.226 0.18 1.216 0.717 1.831 3.164 1.831 1.946 0 2.775-0.441 2.775-1.473 0-0.596-0.234-1.037-3.26-1.334-2.528-0.25-4.093-0.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233 0.007 0.075-0.020 0.148-0.071 0.205-0.051 0.054-0.121 0.086-0.196 0.086h-1.2c-0.124 0-0.233-0.088-0.259-0.209-0.288-1.28-0.988-1.689-2.886-1.689-2.126 0-2.373 0.74-2.373 1.295 0 0.673 0.292 0.869 3.161 1.248 2.84 0.375 4.19 0.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z"}}]})(e)}function n4(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M0.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649v-10.495h-31.36v5.248zM9.055 15.406v3.488h-1.76v-5.216h-1.697v5.216h-3.582v-6.976h7.039v3.488zM17.779 15.412l-0.019 3.488-3.425-0.012v1.766h-3.582v-8.736h7.039l-0.012 3.494zM29.983 15.406v3.488h-1.76v-5.216h-1.76v5.248l-1.76-0.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zM14.335 15.406v1.728h1.634v-3.457h-1.634v1.728z"}}]})(e)}function r4(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M10.372 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.822 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM8.871 17.894h-1.287l0.536-3.216h1.394c0.75 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251zM17.555 13.069h-1.93l0.429-2.251h-2.037l-1.715 8.684h2.037l0.965-4.824h1.608c0.751 0 0.751 0.322 0.643 0.858l-0.75 3.967h2.144l0.75-4.396c0.214-1.072-0.429-1.93-2.144-2.037zM24.738 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.823 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM23.237 17.894h-1.287l0.536-3.216h1.394c0.751 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251z"}}]})(e)}function i4(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"}},{tag:"path",attr:{d:"M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"}}]})(e)}function o4(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-0.081 0-1.424-0.987-2.962-2.185l-2.784-2.185-2.266 1.133v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234 0.324-0.194 0.647 0.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101v-18.195l-2.104-0.842c-1.149-0.47-2.396-0.955-2.768-1.101l-0.664-0.259-4.435 4.435zM21.706 16.278c0 2.493-0.032 4.532-0.097 4.532-0.227 0-5.73-4.435-5.682-4.581 0.049-0.178 5.471-4.468 5.666-4.468 0.065-0.016 0.114 2.023 0.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-0.89 0.89-1.667 1.619-1.732 1.619-0.081 0-0.13-1.457-0.13-3.237s0.048-3.238 0.13-3.238c0.065 0 0.842 0.729 1.732 1.619z"}}]})(e)}const Va={frontend:[{id:1,logo:d(X3,{}),color:"#e34c26",title:"HTML"},{id:2,logo:d(q3,{}),color:"#264de4",title:"CSS"},{id:3,logo:d(K3,{}),color:"#F0DB4F",title:"JavaScript"},{id:4,logo:d(Q3,{}),color:"#563d7c",title:"Bootstrap"},{id:5,logo:d(i4,{}),color:"#61DBFB",title:"React JS"}],backend:[{id:1,logo:d(r4,{}),color:"#777BB3",title:"PHP"},{id:2,logo:d(t4,{}),color:"#3c873a",title:"Node JS"},{id:3,logo:d(e4,{}),color:"#00758F",title:"Mysql"},{id:4,logo:d(J3,{}),color:"#FF0000",title:"SqlServer"},{id:5,logo:d(Z3,{}),color:"#4DB33D",title:"Mongo"}],tools:[{id:1,logo:d(o4,{}),color:"#6ac1b9",title:"VS Code"},{id:2,logo:d(Y3,{}),color:"#F1502F",title:"Git"},{id:3,logo:d(G3,{}),color:"#000000",title:"Github"},{id:4,logo:d(n4,{}),color:"#CC3534",title:"Npm"}]},l4=E.div`
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    border-radius: 6px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 1rem;
`,a4=E.h3`
    text-align: center;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: calc(1.1rem + 1vh);
    color:rgb(29, 31, 27);
    color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};
`,s4=E.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    flex: 100%;
    gap: 1rem;
    @media screen and (min-width: 375px) {
        gap: 0.5rem;
    }
`,u4=E.div`
    color: ${e=>e.color};
`,c4=E.div`
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: calc(5.5rem + 1vh);
    }
    @media screen and (max-width: 374px){
        font-size: calc(4rem + 1vh);
    }

    p{
        font-size: calc(1rem + 1vh);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 500;
    }
`;function Wa({grupo:e,titulo:t}){const{theme:n}=_.exports.useContext(kt);return R(l4,{color:n,children:[d(a4,{color:n,children:t}),d(s4,{children:e.map(r=>d(u4,{color:r.color,children:R(c4,{children:[d("div",{children:r.logo}),d("p",{children:r.title})]})},r.id))})]})}const d4=E.section`
    min-height: 100vh;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.color==="dark"?"dark":"white"};
    @media screen and (min-width: 575px){
        padding-top: 5rem;
    }
    @media screen and (min-width: 1024px){
        padding-top: 4.5rem;
    }

`,f4=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: calc(100% - 2rem);
    
    @media screen and (min-width:769px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`,p4=E.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    margin-bottom: 1rem;
`,h4=E.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;

    @media screen and (min-width: 575px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 975px) {
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
`;function m4(){_.exports.useEffect(()=>{const t=Dt({duration:1500,delay:100,reset:!0,origin:"left"});t.reveal(".title-skill",{distance:"100px"}),t.reveal(".container-skill",{distance:"150px"})},[]);const{theme:e}=_.exports.useContext(kt);return d(d4,{id:"skill",color:e,children:R(f4,{className:"container",children:[d(p4,{color:e,className:"title-skill",children:"Habilidades"}),R(h4,{className:"container-skill",children:[d(Wa,{grupo:Va.frontend,titulo:"Frontend"}),d(Wa,{grupo:Va.backend,titulo:"Backend"}),d(Wa,{grupo:Va.tools,titulo:"Tools"})]})]})})}var Yi=e=>e.type==="checkbox",hr=e=>e instanceof Date,Ze=e=>e==null;const Qp=e=>typeof e=="object";var Ve=e=>!Ze(e)&&!Array.isArray(e)&&Qp(e)&&!hr(e),g4=e=>Ve(e)&&e.target?Yi(e.target)?e.target.checked:e.target.value:e,v4=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,y4=(e,t)=>e.has(v4(t)),Gi=e=>Array.isArray(e)?e.filter(Boolean):[],De=e=>e===void 0,Z=(e,t,n)=>{if(!t||!Ve(e))return n;const r=Gi(t.split(/[,[\].]+?/)).reduce((i,o)=>Ze(i)?i:i[o],e);return De(r)||r===e?De(e[t])?n:e[t]:r};const Ed={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},_t={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ht={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};$e.createContext(null);var w4=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const l=o;return t._proxyFormState[l]!==_t.all&&(t._proxyFormState[l]=!r||_t.all),n&&(n[l]=!0),e[l]}});return i},ht=e=>Ve(e)&&!Object.keys(e).length,x4=(e,t,n)=>{const{name:r,...i}=e;return ht(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(o=>t[o]===(!n||_t.all))},Qa=e=>Array.isArray(e)?e:[e];function k4(e){const t=$e.useRef(e);t.current=e,$e.useEffect(()=>{const n=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Rt=e=>typeof e=="string",S4=(e,t,n,r)=>Rt(e)?(r&&t.watch.add(e),Z(n,e)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),Z(n,i))):(r&&(t.watchAll=!0),n),b4=e=>{const t=e.constructor&&e.constructor.prototype;return Ve(t)&&t.hasOwnProperty("isPrototypeOf")},lu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ln(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(lu&&(e instanceof Blob||e instanceof FileList))&&(n||Ve(e)))if(t=n?[]:{},!Array.isArray(e)&&!b4(e))t=e;else for(const r in e)t[r]=Ln(e[r]);else return e;return t}var C4=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ec=e=>/^\w*$/.test(e),qp=e=>Gi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Se(e,t,n){let r=-1;const i=Ec(t)?[t]:qp(t),o=i.length,l=o-1;for(;++r<o;){const a=i[r];let s=n;if(r!==l){const u=e[a];s=Ve(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=s,e=e[a]}return e}const au=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=Z(e,r);if(i){const{_f:o,...l}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else Ve(l)&&au(l,t)}}};var _d=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),E4=(e,t,n)=>{const r=Gi(Z(e,n));return Se(r,"root",t[n]),Se(e,n,r),e},Sr=e=>typeof e=="boolean",_c=e=>e.type==="file",gl=e=>typeof e=="function",Ho=e=>Rt(e)||$e.isValidElement(e),Pc=e=>e.type==="radio",vl=e=>e instanceof RegExp;const Pd={value:!1,isValid:!1},Od={value:!0,isValid:!0};var Yp=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!De(e[0].attributes.value)?De(e[0].value)||e[0].value===""?Od:{value:e[0].value,isValid:!0}:Od:Pd}return Pd};const Td={isValid:!1,value:null};var Gp=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Td):Td;function zd(e,t,n="validate"){if(Ho(e)||Array.isArray(e)&&e.every(Ho)||Sr(e)&&!e)return{type:n,message:Ho(e)?e:"",ref:t}}var er=e=>Ve(e)&&!vl(e)?e:{value:e,message:""},Md=async(e,t,n,r,i)=>{const{ref:o,refs:l,required:a,maxLength:s,minLength:u,min:f,max:c,pattern:p,validate:w,name:y,valueAsNumber:x,mount:O,disabled:g}=e._f;if(!O||g)return{};const h=l?l[0]:o,v=A=>{r&&h.reportValidity&&(h.setCustomValidity(Sr(A)?"":A||""),h.reportValidity())},S={},$=Pc(o),N=Yi(o),j=$||N,z=(x||_c(o))&&!o.value||t===""||Array.isArray(t)&&!t.length,q=C4.bind(null,y,n,S),Y=(A,T,Q,V=Ht.maxLength,te=Ht.minLength)=>{const se=A?T:Q;S[y]={type:A?V:te,message:se,ref:o,...q(A?V:te,se)}};if(i?!Array.isArray(t)||!t.length:a&&(!j&&(z||Ze(t))||Sr(t)&&!t||N&&!Yp(l).isValid||$&&!Gp(l).isValid)){const{value:A,message:T}=Ho(a)?{value:!!a,message:a}:er(a);if(A&&(S[y]={type:Ht.required,message:T,ref:h,...q(Ht.required,T)},!n))return v(T),S}if(!z&&(!Ze(f)||!Ze(c))){let A,T;const Q=er(c),V=er(f);if(!Ze(t)&&!isNaN(t)){const te=o.valueAsNumber||t&&+t;Ze(Q.value)||(A=te>Q.value),Ze(V.value)||(T=te<V.value)}else{const te=o.valueAsDate||new Date(t),se=X=>new Date(new Date().toDateString()+" "+X),de=o.type=="time",I=o.type=="week";Rt(Q.value)&&t&&(A=de?se(t)>se(Q.value):I?t>Q.value:te>new Date(Q.value)),Rt(V.value)&&t&&(T=de?se(t)<se(V.value):I?t<V.value:te<new Date(V.value))}if((A||T)&&(Y(!!A,Q.message,V.message,Ht.max,Ht.min),!n))return v(S[y].message),S}if((s||u)&&!z&&(Rt(t)||i&&Array.isArray(t))){const A=er(s),T=er(u),Q=!Ze(A.value)&&t.length>A.value,V=!Ze(T.value)&&t.length<T.value;if((Q||V)&&(Y(Q,A.message,T.message),!n))return v(S[y].message),S}if(p&&!z&&Rt(t)){const{value:A,message:T}=er(p);if(vl(A)&&!t.match(A)&&(S[y]={type:Ht.pattern,message:T,ref:o,...q(Ht.pattern,T)},!n))return v(T),S}if(w){if(gl(w)){const A=await w(t),T=zd(A,h);if(T&&(S[y]={...T,...q(Ht.validate,T.message)},!n))return v(T.message),S}else if(Ve(w)){let A={};for(const T in w){if(!ht(A)&&!n)break;const Q=zd(await w[T](t),h,T);Q&&(A={...Q,...q(T,Q.message)},v(Q.message),n&&(S[y]=A))}if(!ht(A)&&(S[y]={ref:h,...A},!n))return S}}return v(!0),S},$d=e=>({isOnSubmit:!e||e===_t.onSubmit,isOnBlur:e===_t.onBlur,isOnChange:e===_t.onChange,isOnAll:e===_t.all,isOnTouch:e===_t.onTouched});function _4(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=De(e)?r++:e[t[r++]];return e}function P4(e){for(const t in e)if(!De(e[t]))return!1;return!0}function Xe(e,t){const n=Ec(t)?[t]:qp(t),r=n.length==1?e:_4(e,n),i=n[n.length-1];let o;r&&delete r[i];for(let l=0;l<n.slice(0,-1).length;l++){let a=-1,s;const u=n.slice(0,-(l+1)),f=u.length-1;for(l>0&&(o=e);++a<u.length;){const c=u[a];s=s?s[c]:e[c],f===a&&(Ve(s)&&ht(s)||Array.isArray(s)&&P4(s))&&(o?delete o[c]:delete e[c]),o=s}}return e}function qa(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var $i=e=>Ze(e)||!Qp(e);function mr(e,t){if($i(e)||$i(t))return e===t;if(hr(e)&&hr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const l=t[i];if(hr(o)&&hr(l)||Ve(o)&&Ve(l)||Array.isArray(o)&&Array.isArray(l)?!mr(o,l):o!==l)return!1}}return!0}var su=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},Xp=e=>e.type==="select-multiple",O4=e=>Pc(e)||Yi(e),Ya=e=>su(e)&&e.isConnected,Kp=e=>{for(const t in e)if(gl(e[t]))return!0;return!1};function yl(e,t={}){const n=Array.isArray(e);if(Ve(e)||n)for(const r in e)Array.isArray(e[r])||Ve(e[r])&&!Kp(e[r])?(t[r]=Array.isArray(e[r])?[]:{},yl(e[r],t[r])):Ze(e[r])||(t[r]=!0);return t}function Zp(e,t,n){const r=Array.isArray(e);if(Ve(e)||r)for(const i in e)Array.isArray(e[i])||Ve(e[i])&&!Kp(e[i])?De(t)||$i(n[i])?n[i]=Array.isArray(e[i])?yl(e[i],[]):{...yl(e[i])}:Zp(e[i],Ze(t)?{}:t[i],n[i]):mr(e[i],t[i])?delete n[i]:n[i]=!0;return n}var Ga=(e,t)=>Zp(e,t,yl(t)),Jp=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>De(e)?e:t?e===""?NaN:e&&+e:n&&Rt(e)?new Date(e):r?r(e):e;function Xa(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return _c(t)?t.files:Pc(t)?Gp(e.refs).value:Xp(t)?[...t.selectedOptions].map(({value:n})=>n):Yi(t)?Yp(e.refs).value:Jp(De(t.value)?e.ref.value:t.value,e)}var T4=(e,t,n,r)=>{const i={};for(const o of e){const l=Z(t,o);l&&Se(i,o,l._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Gr=e=>De(e)?e:vl(e)?e.source:Ve(e)?vl(e.value)?e.value.source:e.value:e,z4=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Nd(e,t,n){const r=Z(e,n);if(r||Ec(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),l=Z(t,o),a=Z(e,o);if(l&&!Array.isArray(l)&&n!==o)return{name:n};if(a&&a.type)return{name:o,error:a};i.pop()}return{name:n}}var M4=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,$4=(e,t)=>!Gi(Z(e,t)).length&&Xe(e,t);const N4={mode:_t.onSubmit,reValidateMode:_t.onChange,shouldFocusError:!0};function A4(e={}){let t={...N4,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Ln(t.defaultValues)||{},o=t.shouldUnregister?{}:Ln(i),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},s,u=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},c={watch:qa(),array:qa(),state:qa()},p=$d(t.mode),w=$d(t.reValidateMode),y=t.criteriaMode===_t.all,x=m=>k=>{clearTimeout(u),u=window.setTimeout(m,k)},O=async()=>{if(f.isValid){const m=t.resolver?ht((await j()).errors):await q(r,!0);m!==n.isValid&&(n.isValid=m,c.state.next({isValid:m}))}},g=m=>f.isValidating&&m!==n.isValidating&&c.state.next({isValidating:m}),h=(m,k=[],b,M,F=!0,P=!0)=>{if(M&&b){if(l.action=!0,P&&Array.isArray(Z(r,m))){const W=b(Z(r,m),M.argA,M.argB);F&&Se(r,m,W)}if(P&&Array.isArray(Z(n.errors,m))){const W=b(Z(n.errors,m),M.argA,M.argB);F&&Se(n.errors,m,W),$4(n.errors,m)}if(f.touchedFields&&P&&Array.isArray(Z(n.touchedFields,m))){const W=b(Z(n.touchedFields,m),M.argA,M.argB);F&&Se(n.touchedFields,m,W)}f.dirtyFields&&(n.dirtyFields=Ga(i,o)),c.state.next({name:m,isDirty:A(m,k),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Se(o,m,k)},v=(m,k)=>{Se(n.errors,m,k),c.state.next({errors:n.errors})},S=(m,k,b,M)=>{const F=Z(r,m);if(F){const P=Z(o,m,De(b)?Z(i,m):b);De(P)||M&&M.defaultChecked||k?Se(o,m,k?P:Xa(F._f)):V(m,P),l.mount&&O()}},$=(m,k,b,M,F)=>{let P=!1,W=!1;const he={name:m};if((!b||M)&&(f.isDirty&&(W=n.isDirty,n.isDirty=he.isDirty=A(),P=W!==he.isDirty),f.dirtyFields)){W=Z(n.dirtyFields,m);const ie=mr(Z(i,m),k);ie?Xe(n.dirtyFields,m):Se(n.dirtyFields,m,!0),he.dirtyFields=n.dirtyFields,P=P||W!==!ie}if(b){const ie=Z(n.touchedFields,m);ie||(Se(n.touchedFields,m,b),he.touchedFields=n.touchedFields,P=P||f.touchedFields&&ie!==b)}return P&&F&&c.state.next(he),P?he:{}},N=(m,k,b,M)=>{const F=Z(n.errors,m),P=f.isValid&&Sr(k)&&n.isValid!==k;if(e.delayError&&b?(s=x(()=>v(m,b)),s(e.delayError)):(clearTimeout(u),s=null,b?Se(n.errors,m,b):Xe(n.errors,m)),(b?!mr(F,b):F)||!ht(M)||P){const W={...M,...P&&Sr(k)?{isValid:k}:{},errors:n.errors,name:m};n={...n,...W},c.state.next(W)}g(!1)},j=async m=>await t.resolver(o,t.context,T4(m||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation)),z=async m=>{const{errors:k}=await j();if(m)for(const b of m){const M=Z(k,b);M?Se(n.errors,b,M):Xe(n.errors,b)}else n.errors=k;return k},q=async(m,k,b={valid:!0})=>{for(const M in m){const F=m[M];if(F){const{_f:P,...W}=F;if(P){const he=a.array.has(P.name),ie=await Md(F,Z(o,P.name),y,t.shouldUseNativeValidation,he);if(ie[P.name]&&(b.valid=!1,k))break;!k&&(Z(ie,P.name)?he?E4(n.errors,ie,P.name):Se(n.errors,P.name,ie[P.name]):Xe(n.errors,P.name))}W&&await q(W,k,b)}}return b.valid},Y=()=>{for(const m of a.unMount){const k=Z(r,m);k&&(k._f.refs?k._f.refs.every(b=>!Ya(b)):!Ya(k._f.ref))&&U(m)}a.unMount=new Set},A=(m,k)=>(m&&k&&Se(o,m,k),!mr(X(),i)),T=(m,k,b)=>S4(m,a,{...l.mount?o:De(k)?i:Rt(m)?{[m]:k}:k},b),Q=m=>Gi(Z(l.mount?o:i,m,e.shouldUnregister?Z(i,m,[]):[])),V=(m,k,b={})=>{const M=Z(r,m);let F=k;if(M){const P=M._f;P&&(!P.disabled&&Se(o,m,Jp(k,P)),F=lu&&su(P.ref)&&Ze(k)?"":k,Xp(P.ref)?[...P.ref.options].forEach(W=>W.selected=F.includes(W.value)):P.refs?Yi(P.ref)?P.refs.length>1?P.refs.forEach(W=>(!W.defaultChecked||!W.disabled)&&(W.checked=Array.isArray(F)?!!F.find(he=>he===W.value):F===W.value)):P.refs[0]&&(P.refs[0].checked=!!F):P.refs.forEach(W=>W.checked=W.value===F):_c(P.ref)?P.ref.value="":(P.ref.value=F,P.ref.type||c.watch.next({name:m})))}(b.shouldDirty||b.shouldTouch)&&$(m,F,b.shouldTouch,b.shouldDirty,!0),b.shouldValidate&&I(m)},te=(m,k,b)=>{for(const M in k){const F=k[M],P=`${m}.${M}`,W=Z(r,P);(a.array.has(m)||!$i(F)||W&&!W._f)&&!hr(F)?te(P,F,b):V(P,F,b)}},se=(m,k,b={})=>{const M=Z(r,m),F=a.array.has(m),P=Ln(k);Se(o,m,P),F?(c.array.next({name:m,values:o}),(f.isDirty||f.dirtyFields)&&b.shouldDirty&&(n.dirtyFields=Ga(i,o),c.state.next({name:m,dirtyFields:n.dirtyFields,isDirty:A(m,P)}))):M&&!M._f&&!Ze(P)?te(m,P,b):V(m,P,b),_d(m,a)&&c.state.next({}),c.watch.next({name:m})},de=async m=>{const k=m.target;let b=k.name;const M=Z(r,b),F=()=>k.type?Xa(M._f):g4(m);if(M){let P,W;const he=F(),ie=m.type===Ed.BLUR||m.type===Ed.FOCUS_OUT,Kn=!z4(M._f)&&!t.resolver&&!Z(n.errors,b)&&!M._f.deps||M4(ie,Z(n.touchedFields,b),n.isSubmitted,w,p),Ft=_d(b,a,ie);Se(o,b,he),ie?(M._f.onBlur&&M._f.onBlur(m),s&&s(0)):M._f.onChange&&M._f.onChange(m);const Ge=$(b,he,ie,!1),ne=!ht(Ge)||Ft;if(!ie&&c.watch.next({name:b,type:m.type}),Kn)return f.isValid&&O(),ne&&c.state.next({name:b,...Ft?{}:Ge});if(!ie&&Ft&&c.state.next({}),g(!0),t.resolver){const{errors:xe}=await j([b]),Ir=Nd(n.errors,r,b),Zn=Nd(xe,r,Ir.name||b);P=Zn.error,b=Zn.name,W=ht(xe)}else P=(await Md(M,Z(o,b),y,t.shouldUseNativeValidation))[b],P?W=!1:f.isValid&&(W=await q(r,!0));!$i(he)||F()===he?(M._f.deps&&I(M._f.deps),N(b,W,P,Ge)):g(!1)}},I=async(m,k={})=>{let b,M;const F=Qa(m);if(g(!0),t.resolver){const P=await z(De(m)?m:F);b=ht(P),M=m?!F.some(W=>Z(P,W)):b}else m?(M=(await Promise.all(F.map(async P=>{const W=Z(r,P);return await q(W&&W._f?{[P]:W}:W)}))).every(Boolean),!(!M&&!n.isValid)&&O()):M=b=await q(r);return c.state.next({...!Rt(m)||f.isValid&&b!==n.isValid?{}:{name:m},...t.resolver||!m?{isValid:b}:{},errors:n.errors,isValidating:!1}),k.shouldFocus&&!M&&au(r,P=>P&&Z(n.errors,P),m?F:a.mount),M},X=m=>{const k={...i,...l.mount?o:{}};return De(m)?k:Rt(m)?Z(k,m):m.map(b=>Z(k,b))},ee=(m,k)=>({invalid:!!Z((k||n).errors,m),isDirty:!!Z((k||n).dirtyFields,m),isTouched:!!Z((k||n).touchedFields,m),error:Z((k||n).errors,m)}),ue=m=>{m?Qa(m).forEach(k=>Xe(n.errors,k)):n.errors={},c.state.next({errors:n.errors})},H=(m,k,b)=>{const M=(Z(r,m,{_f:{}})._f||{}).ref;Se(n.errors,m,{...k,ref:M}),c.state.next({name:m,errors:n.errors,isValid:!1}),b&&b.shouldFocus&&M&&M.focus&&M.focus()},B=(m,k)=>gl(m)?c.watch.subscribe({next:b=>m(T(void 0,k),b)}):T(m,k,!0),U=(m,k={})=>{for(const b of m?Qa(m):a.mount)a.mount.delete(b),a.array.delete(b),Z(r,b)&&(k.keepValue||(Xe(r,b),Xe(o,b)),!k.keepError&&Xe(n.errors,b),!k.keepDirty&&Xe(n.dirtyFields,b),!k.keepTouched&&Xe(n.touchedFields,b),!t.shouldUnregister&&!k.keepDefaultValue&&Xe(i,b));c.watch.next({}),c.state.next({...n,...k.keepDirty?{isDirty:A()}:{}}),!k.keepIsValid&&O()},K=(m,k={})=>{let b=Z(r,m);const M=Sr(k.disabled);return Se(r,m,{...b||{},_f:{...b&&b._f?b._f:{ref:{name:m}},name:m,mount:!0,...k}}),a.mount.add(m),b?M&&Se(o,m,k.disabled?void 0:Z(o,m,Xa(b._f))):S(m,!0,k.value),{...M?{disabled:k.disabled}:{},...t.shouldUseNativeValidation?{required:!!k.required,min:Gr(k.min),max:Gr(k.max),minLength:Gr(k.minLength),maxLength:Gr(k.maxLength),pattern:Gr(k.pattern)}:{},name:m,onChange:de,onBlur:de,ref:F=>{if(F){K(m,k),b=Z(r,m);const P=De(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,W=O4(P),he=b._f.refs||[];if(W?he.find(ie=>ie===P):P===b._f.ref)return;Se(r,m,{_f:{...b._f,...W?{refs:[...he.filter(Ya),P,...Array.isArray(Z(i,m))?[{}]:[]],ref:{type:P.type,name:m}}:{ref:P}}}),S(m,!1,void 0,P)}else b=Z(r,m,{}),b._f&&(b._f.mount=!1),(t.shouldUnregister||k.shouldUnregister)&&!(y4(a.array,m)&&l.action)&&a.unMount.add(m)}}},C=()=>t.shouldFocusError&&au(r,m=>m&&Z(n.errors,m),a.mount),J=(m,k)=>async b=>{b&&(b.preventDefault&&b.preventDefault(),b.persist&&b.persist());let M=!0,F=Ln(o);c.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:P,values:W}=await j();n.errors=P,F=W}else await q(r);ht(n.errors)?(c.state.next({errors:{},isSubmitting:!0}),await m(F,b)):(k&&await k({...n.errors},b),C())}catch(P){throw M=!1,P}finally{n.isSubmitted=!0,c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ht(n.errors)&&M,submitCount:n.submitCount+1,errors:n.errors})}},L=(m,k={})=>{Z(r,m)&&(De(k.defaultValue)?se(m,Z(i,m)):(se(m,k.defaultValue),Se(i,m,k.defaultValue)),k.keepTouched||Xe(n.touchedFields,m),k.keepDirty||(Xe(n.dirtyFields,m),n.isDirty=k.defaultValue?A(m,Z(i,m)):A()),k.keepError||(Xe(n.errors,m),f.isValid&&O()),c.state.next({...n}))},le=(m,k={})=>{const b=m||i,M=Ln(b),F=m&&!ht(m)?M:i;if(k.keepDefaultValues||(i=b),!k.keepValues){if(k.keepDirtyValues)for(const P of a.mount)Z(n.dirtyFields,P)?Se(F,P,Z(o,P)):se(P,Z(F,P));else{if(lu&&De(m))for(const P of a.mount){const W=Z(r,P);if(W&&W._f){const he=Array.isArray(W._f.refs)?W._f.refs[0]:W._f.ref;if(su(he)){const ie=he.closest("form");if(ie){ie.reset();break}}}}r={}}o=e.shouldUnregister?k.keepDefaultValues?Ln(i):{}:M,c.array.next({values:F}),c.watch.next({values:F})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!f.isValid||!!k.keepIsValid,l.watch=!!e.shouldUnregister,c.state.next({submitCount:k.keepSubmitCount?n.submitCount:0,isDirty:k.keepDirty||k.keepDirtyValues?n.isDirty:!!(k.keepDefaultValues&&!mr(m,i)),isSubmitted:k.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:k.keepDirty||k.keepDirtyValues?n.dirtyFields:k.keepDefaultValues&&m?Ga(i,m):{},touchedFields:k.keepTouched?n.touchedFields:{},errors:k.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:K,unregister:U,getFieldState:ee,_executeSchema:j,_focusError:C,_getWatch:T,_getDirty:A,_updateValid:O,_removeUnmounted:Y,_updateFieldArray:h,_getFieldArray:Q,_subjects:c,_proxyFormState:f,get _fields(){return r},get _formValues(){return o},get _stateFlags(){return l},set _stateFlags(m){l=m},get _defaultValues(){return i},get _names(){return a},set _names(m){a=m},get _formState(){return n},set _formState(m){n=m},get _options(){return t},set _options(m){t={...t,...m}}},trigger:I,register:K,handleSubmit:J,watch:B,setValue:se,getValues:X,reset:(m,k)=>le(gl(m)?m(o):m,k),resetField:L,clearErrors:ue,unregister:U,setError:H,setFocus:(m,k={})=>{const b=Z(r,m),M=b&&b._f;if(M){const F=M.refs?M.refs[0]:M.ref;F.focus&&(F.focus(),k.shouldSelect&&F.select())}},getFieldState:ee}}function Oc(e={}){const t=$e.useRef(),[n,r]=$e.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...A4(e),formState:n});const i=t.current.control;return i._options=e,k4({subject:i._subjects.state,callback:$e.useCallback(o=>{x4(o,i._proxyFormState,!0)&&(i._formState={...i._formState,...o},r({...i._formState}))},[i])}),$e.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),$e.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),t.current.formState=w4(n,i),t.current}const R4=E.div`
    display: inline-block;
    position: relative;
    width: 56px;
    height: 56px;

    div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: black transparent transparent transparent;
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    
    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;function Tc(){return R(R4,{children:[d("div",{}),d("div",{}),d("div",{})]})}function L4(e){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"}}]})(e)}const j4=E.section`
    min-height: 100vh;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    padding-top: 3.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};

    @media screen and (min-width:768px) {
        min-height: 100vh;
    }
`,D4=E.h2`
    font-size: 2.2rem;
    letter-spacing: 2px;
    line-height: 2.2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    text-align: center;

`,I4=E.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width:769px) {
        padding: 1rem;
        gap: 2rem;
        grid-template-columns: 1fr 1fr;
    }
`,F4=E.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    h3{
        color: white;
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    }
`,H4=E.form`
    font-family: Arial, Helvetica, sans-serif;
    color: black;

    input , textarea{
        width: 100%;
        padding: 1rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 6px;
        background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
        color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};
    }
    textarea{
        resize: none;
    }
    input[type="submit"]{
        display: block;
        border: none;
        background-color: rgb(206, 30, 30);
        color: white;
        padding: 0.8rem;
        width: 140px;
        border-radius: 8px;
        font-size: 1.1rem;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        transition: all 0.2s ease-in;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin-top: -0.5rem;
        transition:  background-color 0.3s ease-in-out;
    }
    input[type="submit"]:hover{
        background-color: ${e=>e.color&&"black"};
    }
`,_o=E.p`
    color: #f44336;
    margin-left: 0.25rem;
`,U4=E.div`
    display: flex;
    flex-direction: column;
    h3{
        color: white;
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
        
    }
    
`,B4=E.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
`,V4=E.div`
    width: 250px;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: white;
    justify-content: space-evenly;
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    
    div{
        border-top-left-radius:6px;
        border-bottom-left-radius: 6px;
        height: inherit;
        width: 3.5rem;
        height: 3rem;
        font-size: 2.5rem;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin: 0;
        background-color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
        color: ${e=>e.color==="dark"?"rgb(209, 28, 28)":"white"};
    }
    
    h4{
        color: ${e=>e.color==="dark"?"black":"white"};
        font-size: 1.2rem;
        font-weight: 800;
        text-align: center;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        text-align: center;
        color: white;
        background-color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
        color: ${e=>e.color==="dark"?"rgb(209, 28, 28)":"white"};
    }
    a {
        text-decoration: none;
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: 500;
        color: ${e=>e.color==="dark"?"rgb(209, 28, 28)":"white"};
        color: white;
        border-top-right-radius:6px;
        border-bottom-right-radius: 6px;
        background-color: ${e=>e.color==="dark"?"rgb(209, 28, 28)":"rgb(29, 31, 27)"};
        color: white;
        position: relative;
        z-index: 400;
        overflow: hidden;
        
    }
    a span{
        position: relative;
        z-index: 10000;
        display: flex;
    }
    a::after{
        content:  "";
        width: 3rem;
        height: 3rem;
        left: -3rem;
        position: absolute;
        transition: left 0.3s ease-in-out;
    }
    a:hover::after{
        background-color: black;
        top: 0;
        left: 0;
    }
`,W4=[{id:"1",classIcon:"bx bxl-whatsapp",redSocial:"Whatsapp",ruta:"https://wa.me/51940970193"},{id:"2",classIcon:"bx bxl-github",redSocial:"Github",ruta:"https://github.com/Saul-Huarcaya"},{id:"3",classIcon:"bx bxl-linkedin",redSocial:"LinkedIn",ruta:"https://linkedin.com/in/saul-huarcaya-quispe-b1504322b"}];function Q4(){var s,u,f,c;_.exports.useEffect(()=>{const p=Dt({origin:"left",duration:2e3,delay:0,reset:!0});p.reveal(".title",{distance:"100px",duration:1500}),p.reveal(".subtitle",{distance:"100px"}),p.reveal(".nombre",{distance:"120px"}),p.reveal(".email",{distance:"240px"}),p.reveal(".comentario",{distance:"260px"}),p.reveal(".boton",{distance:"300px"}),p.reveal(".card",{distance:"200px"})},[]);const{register:e,handleSubmit:t,formState:{errors:n},reset:r}=Oc(),[i,o]=_.exports.useState(!1),{theme:l}=_.exports.useContext(kt);return R(j4,{id:"contact",color:l,children:[d(D4,{className:"title",color:l,children:"Contacto"}),R(I4,{className:"container",children:[R(F4,{className:"container",color:l,children:[d("h3",{className:"subtitle",children:"Enviame un mensaje"}),R(H4,{onSubmit:t(p=>{p&&(o(!0),fetch("https://formsubmit.co/ajax/shuarcaya99@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...p})}).then(w=>{w.ok?w.json():new Promise.reject(w)}).then(w=>{o(!1),setTimeout(()=>{r()},1e3)}))}),color:l,children:[((s=n.nombre)==null?void 0:s.type)==="required"&&d(_o,{children:"nombre obligatorio"}),d("input",{type:"text",placeholder:"Nombre",name:"nombre",className:"nombre",autoComplete:"off",...e("nombre",{required:!0})}),((u=n.email)==null?void 0:u.type)==="required"&&d(_o,{children:"Email obligatorio"}),((f=n.email)==null?void 0:f.type)==="pattern"&&d(_o,{children:"El email es incorrecto"}),d("input",{type:"text",name:"email",placeholder:"ejemplo@gmail.com",className:"email",autoComplete:"off",...e("email",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}),((c=n.comentario)==null?void 0:c.type)==="maxLength"&&d(_o,{children:"maximo 255 caracteres"}),d("textarea",{cols:"30",rows:"8",name:"comentario",placeholder:"Escribe tu comentario",className:"comentario",...e("comentario",{maxLength:255})}),d("input",{className:"boton",type:"submit"})]}),i&&d("div",{className:"container-loding-thema",children:d(Tc,{})})]}),R(U4,{color:l,children:[d("h3",{className:"subtitle",children:"Redes Sociales"}),d(B4,{children:W4.map(p=>R(V4,{color:l,className:"card",children:[d("div",{children:d("i",{className:p.classIcon})}),d("h4",{children:p.redSocial}),d("a",{href:p.ruta,target:"_blank",children:d("span",{children:d(L4,{})})})]},p.id))})]})]})]})}const q4=E.footer`
    background-color: black;
    color: white;
`,Y4=E.div`
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`,G4=E.h4`
    font-size: calc(1rem + 1vh);
    @media screen and (min-width:768px) {
        font-size: calc(1.8rem + 1vh);
    }
`;E.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    a{
        font-size: 2rem;
        color:white;
        border-radius: 50%;
        padding: 8px;
        transition: all 0.2s ease-in;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        text-decoration: none;
    }
    a:nth-child(1){
        background-color: #25D366;
    }
    a:hover:nth-child(1){
        background-color: #00772c;
    }

    a:nth-child(2){
        background-color: #252424;
    }
    a:hover:nth-child(2){
        background-color: #141313;
    }

    a:nth-child(3){
        background-color: #0e76a8;
    }
    a:hover:nth-child(3){
        background-color: #005b85;
    }
`;const X4=E.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;  
`;function K4(){return d(q4,{children:R(Y4,{className:"container",children:[d(G4,{children:"Software Developer 😄"}),d(X4,{children:"Creado por Saul Huarcaya (2023) ©"})]})})}const Z4=E.div`
    background-color: rgb(209, 28, 28);
    color: white;
    width: 3.5rem;
    height: 4rem;
    font-size: 2.2rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 100;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: black;
    }
`;function eh(){const[e,t]=_.exports.useState(!1);return _.exports.useEffect(()=>{const r=()=>{(window.pageXOffset||document.documentElement.scrollTop)>300?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),d(_n,{children:e&&d(Z4,{onClick:()=>{window.scrollTo(0,0)},children:d(Ep,{})})})}function J4(){return R(Pp,{children:[d(Gy,{}),d(T3,{}),d(W3,{}),d(m4,{}),d(Q4,{}),d(K4,{}),d(eh,{})]})}function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(this,arguments)}var fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fn||(fn={}));const Ad="popstate";function e6(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=Xn(i.location.hash.substr(1));return uu("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:Ni(o))}function r(i,o){t6(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return i6(t,n,r,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function t6(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function n6(){return Math.random().toString(36).substr(2,8)}function Rd(e){return{usr:e.state,key:e.key}}function uu(e,t,n,r){return n===void 0&&(n=null),wl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xn(t):t,{state:n,key:t&&t.key||r||n6()})}function Ni(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function r6(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Ni(e);return Le(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function i6(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=fn.Pop,s=null;function u(){a=fn.Pop,s&&s({action:a,location:p.location})}function f(w,y){a=fn.Push;let x=uu(p.location,w,y);n&&n(x,w);let O=Rd(x),g=p.createHref(x);try{l.pushState(O,"",g)}catch{i.location.assign(g)}o&&s&&s({action:a,location:p.location})}function c(w,y){a=fn.Replace;let x=uu(p.location,w,y);n&&n(x,w);let O=Rd(x),g=p.createHref(x);l.replaceState(O,"",g),o&&s&&s({action:a,location:p.location})}let p={get action(){return a},get location(){return e(i,l)},listen(w){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ad,u),s=w,()=>{i.removeEventListener(Ad,u),s=null}},createHref(w){return t(i,w)},encodeLocation(w){let y=r6(typeof w=="string"?w:Ni(w));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:c,go(w){return l.go(w)}};return p}var Ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ld||(Ld={}));function o6(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Xn(t):t,i=nh(r.pathname||"/",n);if(i==null)return null;let o=th(e);l6(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=m6(o[a],y6(i));return l}function th(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let l={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let a=bn([r,l.relativePath]),s=n.concat(l);i.children&&i.children.length>0&&(Le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),th(i.children,t,s,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:p6(a,i.index),routesMeta:s})}),t}function l6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:h6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const a6=/^:\w+$/,s6=3,u6=2,c6=1,d6=10,f6=-2,jd=e=>e==="*";function p6(e,t){let n=e.split("/"),r=n.length;return n.some(jd)&&(r+=f6),t&&(r+=u6),n.filter(i=>!jd(i)).reduce((i,o)=>i+(a6.test(o)?s6:o===""?c6:d6),r)}function h6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function m6(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=g6({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let c=a.route;o.push({params:r,pathname:bn([i,f.pathname]),pathnameBase:S6(bn([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=bn([i,f.pathnameBase]))}return o}function g6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=v6(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{if(f==="*"){let p=a[c]||"";l=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[f]=w6(a[c]||"",f),u},{}),pathname:o,pathnameBase:l,pattern:e}}function v6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function y6(e){try{return decodeURI(e)}catch(t){return zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function w6(e,t){try{return decodeURIComponent(e)}catch(n){return zc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function nh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function x6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xn(e):e;return{pathname:n?n.startsWith("/")?n:k6(n,t):t,search:b6(r),hash:C6(i)}}function k6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ka(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ih(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Xn(e):(i=wl({},e),Le(!i.pathname||!i.pathname.includes("?"),Ka("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Ka("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Ka("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=n;else{let c=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),c-=1;i.pathname=p.join("/")}a=c>=0?t[c]:"/"}let s=x6(i,a),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const bn=e=>e.join("/").replace(/\/\/+/g,"/"),S6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class E6{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function _6(e){return e instanceof E6}const P6=["post","put","patch","delete"];[...P6];function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function O6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const T6=typeof Object.is=="function"?Object.is:O6,{useState:z6,useEffect:M6,useLayoutEffect:$6,useDebugValue:N6}=ns;function A6(e,t,n){const r=t(),[{inst:i},o]=z6({inst:{value:r,getSnapshot:t}});return $6(()=>{i.value=r,i.getSnapshot=t,Za(i)&&o({inst:i})},[e,r,t]),M6(()=>(Za(i)&&o({inst:i}),e(()=>{Za(i)&&o({inst:i})})),[e]),N6(r),r}function Za(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!T6(n,r)}catch{return!0}}function R6(e,t,n){return t()}const L6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j6=!L6,D6=j6?R6:A6;"useSyncExternalStore"in ns&&(e=>e.useSyncExternalStore)(ns);const I6=_.exports.createContext(null),F6=_.exports.createContext(null),oh=_.exports.createContext(null),ta=_.exports.createContext(null),na=_.exports.createContext(null),Xi=_.exports.createContext({outlet:null,matches:[]}),lh=_.exports.createContext(null);function H6(e,t){let{relative:n}=t===void 0?{}:t;Ki()||Le(!1);let{basename:r,navigator:i}=_.exports.useContext(ta),{hash:o,pathname:l,search:a}=ah(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:bn([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Ki(){return _.exports.useContext(na)!=null}function ra(){return Ki()||Le(!1),_.exports.useContext(na).location}function Zi(){Ki()||Le(!1);let{basename:e,navigator:t}=_.exports.useContext(ta),{matches:n}=_.exports.useContext(Xi),{pathname:r}=ra(),i=JSON.stringify(rh(n).map(a=>a.pathnameBase)),o=_.exports.useRef(!1);return _.exports.useEffect(()=>{o.current=!0}),_.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=ih(a,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:bn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function ah(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.exports.useContext(Xi),{pathname:i}=ra(),o=JSON.stringify(rh(r).map(l=>l.pathnameBase));return _.exports.useMemo(()=>ih(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function U6(e,t){Ki()||Le(!1);let{navigator:n}=_.exports.useContext(ta),r=_.exports.useContext(oh),{matches:i}=_.exports.useContext(Xi),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=ra(),u;if(t){var f;let x=typeof t=="string"?Xn(t):t;a==="/"||((f=x.pathname)==null?void 0:f.startsWith(a))||Le(!1),u=x}else u=s;let c=u.pathname||"/",p=a==="/"?c:c.slice(a.length)||"/",w=o6(e,{pathname:p}),y=Q6(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:bn([a,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:bn([a,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r||void 0);return t&&y?_.exports.createElement(na.Provider,{value:{location:cu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:fn.Pop}},y):y}function B6(){let e=Y6(),t=_6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return _.exports.createElement(_.exports.Fragment,null,_.exports.createElement("h2",null,"Unhandled Thrown Error!"),_.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.exports.createElement("pre",{style:i},n):null,_.exports.createElement("p",null,"💿 Hey developer 👋"),_.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.exports.createElement("code",{style:o},"errorElement")," props on ",_.exports.createElement("code",{style:o},"<Route>")))}class V6 extends _.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.exports.createElement(lh.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function W6(e){let{routeContext:t,match:n,children:r}=e,i=_.exports.useContext(I6);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),_.exports.createElement(Xi.Provider,{value:t},r)}function Q6(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(l=>l.route.id&&(i==null?void 0:i[l.route.id]));o>=0||Le(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,l,a)=>{let s=l.route.id?i==null?void 0:i[l.route.id]:null,u=n?l.route.errorElement||_.exports.createElement(B6,null):null,f=()=>_.exports.createElement(W6,{match:l,routeContext:{outlet:o,matches:t.concat(r.slice(0,a+1))}},s?u:l.route.element!==void 0?l.route.element:o);return n&&(l.route.errorElement||a===0)?_.exports.createElement(V6,{location:n.location,component:u,error:s,children:f()}):f()},null)}var Dd;(function(e){e.UseRevalidator="useRevalidator"})(Dd||(Dd={}));var du;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(du||(du={}));function q6(e){let t=_.exports.useContext(oh);return t||Le(!1),t}function Y6(){var e;let t=_.exports.useContext(lh),n=q6(du.UseRouteError),r=_.exports.useContext(Xi),i=r.matches[r.matches.length-1];return t||(r||Le(!1),i.route.id||Le(!1),(e=n.errors)==null?void 0:e[i.route.id])}function Ut(e){Le(!1)}function G6(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fn.Pop,navigator:o,static:l=!1}=e;Ki()&&Le(!1);let a=t.replace(/^\/*/,"/"),s=_.exports.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=Xn(r));let{pathname:u="/",search:f="",hash:c="",state:p=null,key:w="default"}=r,y=_.exports.useMemo(()=>{let x=nh(u,a);return x==null?null:{pathname:x,search:f,hash:c,state:p,key:w}},[a,u,f,c,p,w]);return y==null?null:_.exports.createElement(ta.Provider,{value:s},_.exports.createElement(na.Provider,{children:n,value:{location:y,navigationType:i}}))}function X6(e){let{children:t,location:n}=e,r=_.exports.useContext(F6),i=r&&!t?r.router.routes:fu(t);return U6(i,n)}var Id;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Id||(Id={}));new Promise(()=>{});function fu(e,t){t===void 0&&(t=[]);let n=[];return _.exports.Children.forEach(e,(r,i)=>{if(!_.exports.isValidElement(r))return;if(r.type===_.exports.Fragment){n.push.apply(n,fu(r.props.children,t));return}r.type!==Ut&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o=[...t,i],l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=fu(r.props.children,o)),n.push(l)}),n}function pu(){return pu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pu.apply(this,arguments)}function K6(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Z6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J6(e,t){return e.button===0&&(!t||t==="_self")&&!Z6(e)}const e5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function t5(e){let{basename:t,children:n,window:r}=e,i=_.exports.useRef();i.current==null&&(i.current=e6({window:r,v5Compat:!0}));let o=i.current,[l,a]=_.exports.useState({action:o.action,location:o.location});return _.exports.useLayoutEffect(()=>o.listen(a),[o]),_.exports.createElement(G6,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const n5=_.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:f}=t,c=K6(t,e5),p=H6(u,{relative:i}),w=r5(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:i});function y(x){r&&r(x),x.defaultPrevented||w(x)}return _.exports.createElement("a",pu({},c,{href:p,onClick:o?r:y,ref:n,target:s}))});var Fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Fd||(Fd={}));var Hd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hd||(Hd={}));function r5(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,a=Zi(),s=ra(),u=ah(e,{relative:l});return _.exports.useCallback(f=>{if(J6(f,n)){f.preventDefault();let c=r!==void 0?r:Ni(s)===Ni(u);a(e,{replace:c,state:i,preventScrollReset:o,relative:l})}},[s,a,u,r,i,n,e,o,l])}function i5(){return d("div",{className:"container error404",children:R("div",{className:"descriptions",children:[d("p",{className:"title_404",children:"404"}),d("p",{className:"not_found",children:"Page not found"}),d("p",{className:"description_error",children:"The resource requested could not be found on this Server!"}),d(n5,{to:"/",className:"btn_home",children:"Home"})]})})}const o5=E.article`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(0, 0, 0,0.75);
    display: ${e=>e?"flex":"none"};
    justify-content: center;
    align-items: center;
`,l5=E.div`
    position: relative;
    padding: 1rem;
    max-width: 500px;
    max-height: 600px;
    overflow-y: auto;
    background-color: white;
    color: black;
    border-radius: 6px;
    @media screen and (max-width:375px) {
        width: 260px;
        padding: 0.5rem;
    }
`,a5=E.button`
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    cursor: pointer;
    border: none;
    color: black;
    font-size: 1rem;
    transition: all 0.2s ease-in;
    
    &:hover{
        color: red;
    }

`;function xl({Modal:e,setModal:t,children:n}){const r=()=>t(!1);return d(o5,{visible:e,onClick:r,children:R(l5,{onClick:o=>{o.stopPropagation()},children:[d(a5,{onClick:r,children:"X"}),n]})})}const br={ADD:"ADD",UPDATE:"UPDATE",DELETE:"DELETE"},s5=(e,t)=>{switch(t.type){case br.ADD:return[...e,t.payload];case br.DELETE:return e.filter(n=>n.id!==t.payload);case br.UPDATE:return e.map(n=>n.id===t.payload.id?{...e,id:t.payload.id,nombre:t.payload.nombre,apellido:t.payload.apellido,edad:t.payload.edad}:n);default:return e}},Ji=_.exports.createContext(),u5=[{id:1,nombre:"Carlos Raul",apellido:"Perez Sevillano",edad:12},{id:2,nombre:"Kevin Manuel",apellido:"Velasquez Rojas",edad:18},{id:3,nombre:"Samuel",apellido:"Castillo Ordoñez",edad:17},{id:4,nombre:"Camila Veronica",apellido:"Hurtado Serna",edad:21},{id:5,nombre:"Viviana Sofia",apellido:"Cornejo de Torre",edad:18}],c5=({children:e})=>{const[t,n]=_.exports.useReducer(s5,u5);return d(Ji.Provider,{value:{data:t,dispatch:n},children:e})},d5=E.h2`
    color: orange;
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`,f5=E.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    input[type="text"] , input[type="number"]{
        border: none;
        padding: 6px 0px 6px 4px;
        width: 100%;
        border-radius: 4px;
        font-size: 1rem;
    }

    input[type="text"]:valid, input[type="number"]{
        border: 1px solid orange;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`,$n=E.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`,p5=E.input`
    background-color: rgb(187, 122, 2);
    border: 0;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    font-weight: 600;

    &:hover{
        background-color: rgb(255, 166, 2);
    }
`;function h5({id:e,setModal:t}){var f,c,p,w,y,x,O;const{data:n,dispatch:r}=_.exports.useContext(Ji),i=n.find(g=>g.id===e),{register:o,formState:{errors:l},reset:a,handleSubmit:s}=Oc({defaultValues:i});return R(_n,{children:[d(d5,{children:"Actualizar"}),R(f5,{onSubmit:s(g=>{g&&(r({type:br.UPDATE,payload:g}),t(!1),a())}),children:[d("input",{type:"text",autoComplete:"true",placeholder:"Nombre",...o("nombre",{required:!0,maxLength:100}),name:"nombre"}),((f=l.nombre)==null?void 0:f.type)==="required"&&d($n,{children:"El dato es obligatorio"}),((c=l.nombre)==null?void 0:c.type)==="maxLength"&&d($n,{children:"El nombre es demasiado largo"}),d("input",{type:"text",placeholder:"Apellido",autoComplete:"true",...o("apellido",{required:!0,maxLength:100}),name:"apellido"}),((p=l.apellido)==null?void 0:p.type)=="required"&&d($n,{children:"El apellido es obligatorio"}),((w=l.apellido)==null?void 0:w.type)==="maxLength"&&d($n,{children:"El apellido es demasiado largo"}),d("input",{type:"number",placeholder:"Edad",autoComplete:"true",name:"edad",...o("edad",{required:!0,min:12,max:85})}),((y=l.edad)==null?void 0:y.type)==="required"&&d($n,{children:"La edad es obligatorio"}),((x=l.edad)==null?void 0:x.type)==="min"&&d($n,{children:"La edad minima 12"}),((O=l.edad)==null?void 0:O.type)==="max"&&d($n,{children:"La edad maxima es 85"}),d(p5,{type:"submit",value:"Guardar"})]})]})}const m5=E.div`
    padding-top: 28px;
    display: flex;
    flex-direction: column;
`,g5=E.div`
    background-color: rgb(0, 0, 0,0.9);
    padding: 1rem 0.5rem;
    color: white;
    span{
        color: red;
    }
`,v5=E.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    margin-top: 0.5rem;
`,Ud=E.button`
    text-align: center;
    font-size: 1rem;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #fff;
    background-color: ${e=>e.$yes?"#28a745":"#dc3545"};
    border-color: ${e=>e.$yes?"#28a745":"#dc3545"};

    &:hover{
        background-color: ${e=>e.$yes?"green":"red"};
    }
`;function y5({setModal:e,id:t}){const{data:n,dispatch:r}=_.exports.useContext(Ji),i=n.find(l=>l.id==t),o=()=>{r({type:br.DELETE,payload:i.id}),e(!1)};return R(m5,{children:[d(g5,{children:R("p",{children:["¿ Estas seguro de eliminar al usuario",R("span",{children:[" ",i.nombre," ",i.apellido]})," ?"]})}),R(v5,{children:[d(Ud,{$yes:!0,onClick:o,children:"Si"}),d(Ud,{onClick:()=>e(!1),children:"No"})]})]})}const w5=E.div`
    width: 100%;
    overflow: auto;
`,x5=E.table`
    border-collapse: collapse;
    overflow-x: auto ;
    width: 100%;
    text-align: left;
    background-color: white;
    min-width: 540px;
    thead{
        background-color: black;
        color: white;
    }
    th:nth-child(1){
        width: 35%;
    }

    th:nth-child(3){
        width: 15%;
    }
    th:nth-child(4){
        width: 15%;
    }

    tr th{
        padding: 12px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
    tr td{
        padding: 12px;
        border-bottom: 1px solid grey;
        font-size: 1.1rem;
        word-break: break-all;
    }
`,Bd=E.div`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0px 5px;
    color: ${e=>e.$update?"orange":"red"};
    &:hover{
        color: ${e=>e.$update?"rgb(255, 182, 46)":"rgb(255, 29, 29)"};
    }
`;function k5(){const{data:e}=_.exports.useContext(Ji),[t,n]=_.exports.useState(),[r,i]=_.exports.useState(),[o,l]=_.exports.useState(!1),[a,s]=_.exports.useState(!1),u=c=>{n(c),l(!0)},f=c=>{i(c),s(!0)};return R(w5,{children:[R(x5,{children:[d("thead",{children:R("tr",{children:[d("th",{children:"Nombre"}),d("th",{children:"Apellido"}),d("th",{children:"Edad"}),d("th",{children:"Opciones"})]})}),d("tbody",{children:e.length===0?d("tr",{children:d("td",{colSpan:4,children:"Sin datos"})}):e.map(c=>R("tr",{children:[d("td",{children:c.nombre}),d("td",{children:c.apellido}),d("td",{children:c.edad}),R("td",{children:[d(Bd,{$update:!0,children:d(N3,{onClick:()=>u(c.id)})}),d(Bd,{children:d(Iv,{onClick:()=>f(c.id)})})]})]},c.id))})]}),o&&d(xl,{Modal:o,setModal:l,children:d(h5,{id:t,setModal:l})}),a&&d(xl,{Modal:a,setModal:s,children:d(y5,{id:r,setModal:s})})]})}const S5=E.h2`
    color: rgb(1, 158, 1);
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`,b5=E.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;  

    input[type="text"],
    input[type="number"]{
        border: none;
        padding: 6px 0px 6px 4px;
        width: 100%;
        border-radius: 4px;
        font-size: 1rem;
    
    }

    input[type="text"]:valid,
    input[type="number"]{
        border: 1px solid rgb(1, 158, 1);
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`,Nn=E.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`,C5=E.input`
    background-color: #1aa33a;
    border: 0;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease-in-out;

    &:hover{
        background-color: rgb(1, 158, 1);
    }
`;function E5({setModalAdd:e}){var a,s,u,f,c,p,w;const{register:t,handleSubmit:n,reset:r,formState:{errors:i}}=Oc(),{dispatch:o}=_.exports.useContext(Ji);return R(_n,{children:[d(S5,{children:"Agregar"}),R(b5,{onSubmit:n(y=>{y&&(o({type:br.ADD,payload:{id:Date.now(),nombre:y.nombre,apellido:y.apellido,edad:y.edad}}),r(),e(!1))}),children:[d("input",{type:"text",placeholder:"Nombre",autoComplete:"true",...t("nombre",{required:!0,maxLength:100})}),((a=i.nombre)==null?void 0:a.type)==="required"&&d(Nn,{children:"El dato es obligatorio"}),((s=i.nombre)==null?void 0:s.type)==="maxLength"&&d(Nn,{children:"El nombre es demasiado largo"}),d("input",{type:"text",placeholder:"Apellido",autoComplete:"true",...t("apellido",{required:!0,maxLength:100})}),((u=i.apellido)==null?void 0:u.type)=="required"&&d(Nn,{children:"El apellido es obligatorio"}),((f=i.apellido)==null?void 0:f.type)==="maxLength"&&d(Nn,{children:"El apellido es demasiado largo"}),d("input",{type:"number",placeholder:"Edad",autoComplete:"true",...t("edad",{required:!0,min:12,max:85})}),((c=i.edad)==null?void 0:c.type)==="required"&&d(Nn,{children:"La edad es obligatorio"}),((p=i.edad)==null?void 0:p.type)==="min"&&d(Nn,{children:"La edad minima 12"}),((w=i.edad)==null?void 0:w.type)==="max"&&d(Nn,{children:"La edad maxima es 85"}),d(C5,{type:"submit",value:"Enviar"})]})]})}const _5=E.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
`,P5=E.div`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,O5=E.h1`
    color: #1778F2;
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    
    @media screen and (max-width:375px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
`,T5=E.button`
    border: none;
    border: 1px solid #1aa33a;
    background-color: #1aa33a;
    color: white;
    padding: 0.5rem 0.25rem;
    font-size: 1.25rem;
    border-radius: 4px;
    width: 180px;
    margin-left: auto;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: rgb(1, 158, 1);
    }
`;function z5(){const[e,t]=_.exports.useState(!1);return d(c5,{children:d(_5,{children:R(P5,{className:"container",children:[d(O5,{children:"CRUD useContext +  useReducer + useForm"}),d(T5,{onClick:()=>t(!0),children:"Agregar"}),e&&d(xl,{Modal:e,setModal:t,children:d(E5,{setModalAdd:t})}),d(k5,{})]})})})}function M5({image:e,name:t,status:n,specie:r}){return d(_n,{children:R("div",{className:"card-character",children:[d("img",{src:e,alt:t}),d("div",{className:"container-name",children:d("h2",{className:"name",children:t})}),R("div",{className:"datos",children:[R("div",{className:"row",children:[d("p",{className:"estado",children:"Estado: "}),d("p",{children:n})]}),R("div",{className:"row",children:[d("p",{className:"especie",children:"Estado: "}),d("p",{children:r})]})]})]})})}function $5(){let[e,t]=_.exports.useState([]),[n,r]=_.exports.useState(""),[i,o]=_.exports.useState(1);_.exports.useEffect(()=>{let u=`https://rickandmortyapi.com/api/character/?page=${i}`;fetch(u).then(f=>f.json()).then(f=>{f.results.map(c=>t(p=>[...p,c]))})},[i]);const l=()=>{const{scrollTop:u,clientHeight:f,scrollHeight:c}=document.documentElement;u+f>=c-16&&o(p=>p+1)};_.exports.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]);let a=[];return n?a=e.filter(u=>u.name.toLowerCase().includes(n.toLowerCase())):a=e,d("div",{children:R("div",{className:"container-app-morty",id:"infiniteScroll",children:[R("header",{className:"header-morty",children:[d("h1",{className:"title-app-morty",children:"Rick and Morty"}),d("input",{type:"text",value:n,onChange:u=>{r(u.target.value),window.scrollTo(0,0)},placeholder:"Buscar personaje",maxLength:"50",className:"input-busqueda"})]}),d("main",{className:"main-morty",children:a.length>0&&a.map(u=>d(M5,{image:u.image,name:u.name,status:u.status,specie:u.species},u.id))}),a.length===0&&d("div",{className:"container-loader",children:d(Tc,{})}),d(eh,{})]})})}const N5=E.div`
    color: white;
    background-color: rgb(3, 3, 3);
    border-radius: 6px;
`,A5=E.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`,R5=E.div`
    padding: 0.5rem 1rem ;
`,L5=E.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: fantasy;
`,Ja=E.div`
    display: flex;
    gap: 0.5rem;
`,es=E.p`
    font-weight: 600;
`,ts=E.p`
    flex-wrap: wrap;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
`;function j5({nombre:e,ruta:t,capital:n,poblacion:r,subregion:i}){return R(N5,{children:[d(A5,{src:t,alt:e}),R(R5,{children:[d(L5,{children:e}),R(Ja,{children:[d(es,{children:"Capital: "}),d(ts,{children:n?n.join(" "):"No Tiene"})]}),R(Ja,{children:[d(es,{children:"Población: "}),d(ts,{children:r!="0"?r:"-"})]}),R(Ja,{children:[d(es,{children:"Subregion: "}),d(ts,{children:i||"No Tiene"})]})]})]})}const D5=E.div`
    background-color: ${e=>e.color=="dark"?"white":"rgb(29, 31, 27)"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    user-select: none;
    position: fixed;
    width: 3.5rem;
    height: 4rem;
    font-size: 2.2rem;
    bottom: 1rem;
    right: 1rem;
    &:hover{
        background-color: ${e=>e.color=="dark"?"yellow":"black"};
    }
`;function I5(){const{theme:e,handleTheme:t}=_.exports.useContext(kt);return d(D5,{onClick:t,color:e,children:"☀️"})}const F5=E.div`
    background-color: ${e=>e.color=="dark"?"white":"rgb(29, 31, 27)"};
    color: ${e=>e.color=="dark"?"black":"white"};
    width: 3.5rem;
    height: 4rem;
    font-size: 2.2rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1rem;
    bottom: 5.5rem;
    z-index: 100;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: ${e=>e.color=="dark"?"yellow":"black"};
    }
`;function H5(){const[e,t]=_.exports.useState(!1),{theme:n}=_.exports.useContext(kt);return _.exports.useEffect(()=>{const i=()=>{(window.pageXOffset||document.documentElement.scrollTop)>300?t(!0):t(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),d(_n,{children:e&&d(F5,{onClick:()=>{window.scrollTo(0,0)},color:n,children:d(Ep,{})})})}const U5=E.div`
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
    min-height: 100vh;
    width: 100%;
    padding-top: 7rem;
    padding-bottom: 1rem;
`,B5=E.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`,V5=E.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`,W5=E.h1`
    color: white;
    font-size: 1.5rem;
    @media screen and (min-width:480px){
        font-size: 2rem;
    }
`,Q5=E.div`
    width: calc(100% - 2rem);
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
`,q5=E.input`
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    width: 140px;
    color: ${e=>e.color=="dark"?"black":"white"};
    background-color: ${e=>e.color=="dark"?"white":"black"};
    
    @media screen and (min-width:480px){
        width: 180px;
    }
`,Y5=E.select`
    padding: 0.25rem 1rem;
    background-color: ${e=>e.color=="dark"?"white":"black"};
    color: ${e=>e.color=="dark"?"black":"white"};
`,G5=E.main`  
    position: relative;
    width: 100%;
    scroll-behavior: smooth;

    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width:1048px){
        width: 100%;
    } 

`,X5=E.p`
    color: ${e=>e.color=="dark"?"white":"black"};
`,K5=E.div`
    position: fixed;
    height: 100vh;
    left: calc(50% - 28px);
`,Z5=E.div`
    display: grid;
    grid-template-columns: repeat(1,minmax(1,1fr));
    gap: 1rem;

    @media screen and (min-width:480px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    @media screen and (min-width:768px){
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 1.5rem;
    }
    @media screen and (min-width:1048px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
`;function J5(){const[e,t]=_.exports.useState([]),[n,r]=_.exports.useState("https://restcountries.com/v3.1/all"),[i,o]=_.exports.useState(""),{theme:l}=_.exports.useContext(kt),[a,s]=_.exports.useState(!1),u=p=>{o(p.target.value)};let f=[];i?f=e.filter(p=>p.name.common.toLowerCase().includes(i.toLowerCase())):f=e;const c=p=>{p.target.value==="all"?r("https://restcountries.com/v3.1/all"):r(`https://restcountries.com/v3.1/region/${p.target.value}`)};return _.exports.useEffect(()=>{(()=>{const w=fetch(n);s(!0),w.then(y=>y.json()).then(y=>{t([...y]),s(!1)}).catch(y=>console.log(y))})()},[n]),d(U5,{color:l,children:R("div",{className:"container",children:[R(B5,{children:[d(V5,{color:l,children:d(W5,{children:"Where in the world?"})}),R(Q5,{className:"container",color:l,children:[d(q5,{value:i,onChange:u,type:"text",placeholder:"Buscar País",color:l}),R(Y5,{name:"paises",onChange:c,color:l,children:[d("option",{value:"all",children:"Todos"}),d("option",{value:"Africa",children:"Africa"}),d("option",{value:"Americas",children:"America"}),d("option",{value:"Asia",children:"Asia"}),d("option",{value:"Europe",children:"Europa"}),d("option",{value:"Oceania",children:"Oceania"})]})]})]}),R(G5,{children:[f.length===0?R(X5,{color:l,children:["No se encuentra: ",d("mark",{children:i})]}):d(Z5,{children:f.map(p=>d(j5,{nombre:p.name.common,ruta:p.flags.svg,capital:p.capital,poblacion:p.population,subregion:p.subregion},p.name.common))}),a&&d(K5,{children:d(Tc,{})})]}),d(H5,{}),d(I5,{})]})})}function e8(){return d(Pp,{children:d(J5,{})})}const Pt={ADD_PRODUCTO:"ADD_PRODUCTO",REMOVE_PRODUCTO:"REMOVE_PRODUCTO",DECREASE_ONE_PRODUCTO:"DECREASE_ONE_PRODUCTO",REMOVE_TOTAL_PRODUCTOS:"REMOVE_TOTAL_PRODUCTOS"},t8=(e,t)=>{switch(t.type){case Pt.ADD_PRODUCTO:let n=e.productos.find(o=>o.id===t.payload);return e.carrito.find(o=>o.id===n.id)?{...e,carrito:e.carrito.map(o=>o.id===n.id?{...o,cantidad:o.cantidad+1}:o)}:{...e,carrito:[...e.carrito,{...n,cantidad:1}]};case Pt.DECREASE_ONE_PRODUCTO:let i=e.carrito.find(o=>o.id===t.payload);return i.cantidad>1?{...e,carrito:e.carrito.map(o=>o.id===i.id?{...o,cantidad:o.cantidad-1}:o)}:{...e,carrito:e.carrito.filter(o=>o.id!==i.id)};case Pt.REMOVE_PRODUCTO:return{...e,carrito:e.carrito.filter(o=>o.id!=t.payload)};case Pt.REMOVE_TOTAL_PRODUCTOS:return{...e,carrito:[]};default:return e}},Dr=_.exports.createContext(),n8={productos:[{id:"1",nombre:"Audifono Gaming X15 PRO Bluetooth",precio:129,img:"audifonos.jpg"},{id:"2",nombre:"Televisor Panasonic LCD 4K UHD Smart 43",precio:1299,img:"televisor.jpg"},{id:"3",nombre:"Smartphone Galaxy A23 128Gb 4Gb Single Sim Negro",precio:1049,img:"celular.jpg"},{id:"4",nombre:"Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB",precio:364,img:"teclado.jpg"}],carrito:[]},r8=({children:e})=>{const[t,n]=_.exports.useReducer(t8,n8);return d(Dr.Provider,{value:{data:t,dispatch:n},children:e})},i8=E.header`
    background-color: black;
    color: white;
    height: 5rem;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
`,o8=E.nav`
    width: 100%;
    display: flex;
    height: inherit;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-right: 1rem;
    max-width: 1024px;
    position: relative;  
`,l8=E.div`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    
    &:hover{
        transition: background-color 0.2s ease-in;
        background-color: #007bff;
        border-radius: 40px;
    }
`,a8=E.button`
    border: none;
    background-color: #007bff;
    color: white ;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
    position: static;
    border: 2px solid transparent;
    
    &:hover{
        border: 2px solid white;
    }
`,s8=E.div`
    top: 10px;
    right: 0;
    height: 10px;
    width: 10px;
    background-color: red;
    position: absolute;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: white;
    border-radius: 50%;
`;function sh(){const e=Zi(),{data:t}=_.exports.useContext(Dr),n=t.carrito.length>0&&t.carrito.map(r=>r.cantidad).reduce((r,i)=>r+i);return d(i8,{children:R(o8,{children:[d(l8,{onClick:()=>e("/projects/ecommerce"),children:d("h2",{children:"Store"})}),R(a8,{onClick:()=>e("/projects/ecommerce/cart"),children:[d(_p,{}),t.carrito.length>0&&d(s8,{children:n})]})]})})}const u8=E.article`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 100%;
    @media screen and (max-width:375px) {
        width: 260px;
    }
    @media screen and (max-width:575px) {
        flex-direction:column;
        width: 100%;
    }
`,c8=E.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 150px;
    }
    @media screen and (min-width:576px) {
        
        max-width: 150px;
        
    }
`,d8=E.div`
    margin-top: 1rem;
    gap: 0.5rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,f8=E.div`
    p:nth-child(1){
        font-weight: 600;
    }
    p:nth-child(2){
        font-size: 1.1rem;
    }
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
`,p8=E.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
        color: red;
        font-size: 1.25rem;
    }
`,h8=E.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    button{
        padding: 0.5rem 0.8rem;
        font-size: 1rem;
        background-color: #181717;
        color: white;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        
    }
    button:hover{
        background-color: black;
    }
`,m8=E.span`
    text-align: center;
    width: 40px;
`,g8=E.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    button{
        border: none;
        cursor: pointer;
        background-color: white;
    }


    button:nth-child(1){
        font-size: 14px;
        transition: color 0.2s ease-in-out;
        color: #0d61bb;
    }
    button:nth-child(1):hover{
        text-decoration: underline;
    }

    button:nth-child(2){
        background-color: #0d61bb;
        color: white;
        padding: 0.5rem 1.25rem;
        border-radius: 16px;
        font-size: 1rem;
    }
    button:nth-child(2):hover{
        background-color: #007bff;
    }
    @media screen and (max-width:375px)  {
        gap: 0.5rem;
    }
`;function v8({id:e,setModalAdd:t}){const{data:n,dispatch:r}=_.exports.useContext(Dr),i=n.productos.find(f=>f.id==e),o=n.carrito.find(f=>f.id==i.id),l=Zi(),a=()=>{l("/projects/ecommerce"),t(!1)},s=()=>{l("/projects/ecommerce/cart"),t(!1)},u=()=>{o&&r({type:Pt.DECREASE_ONE_PRODUCTO,payload:i.id})};return R(u8,{children:[d(c8,{children:d("img",{src:`img/${i.img}`,alt:i.nombre})}),R(d8,{children:[R(f8,{children:[d("p",{children:i.nombre}),R(p8,{children:[R("p",{children:["S/.",i.precio]}),R(h8,{children:[d("button",{onClick:()=>r({type:Pt.ADD_PRODUCTO,payload:i.id}),children:"+"}),d(m8,{children:o?o.cantidad:0}),d("button",{onClick:u,children:"-"})]})]})]}),R(g8,{children:[d("button",{onClick:a,children:"seguir comprando"}),d("button",{onClick:s,children:"Ir al carrito"})]})]})]})}const y8=E.div`
    margin-top: 6rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width:540px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width:768px) {
        padding-left:1rem ;
        padding-right: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width:940px) {
        padding-left:1rem ;
        padding-right: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
`,w8=E.div`
    background-color: white;
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
`,x8=E.div`
    display: flex;
    flex-direction: column;
    flex: 100%;
`,k8=E.div`
    display: flex;
    flex: 100%;
    align-items: center;
    justify-content: center;
`,S8=E.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: 600;
    span{
        font-weight: 500;
        color: #db0909;
        font-size: 1.1rem;
    }
`,b8=E.button`
    border: none;
    background-color: #0d61bb;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 0.25rem;
    font-size: 1.1rem;
    width: 100%;
    
    &:hover{
        cursor: pointer;
        background-color: #007bff;
    }
`;function C8(){const{data:e,dispatch:t}=_.exports.useContext(Dr),[n,r]=_.exports.useState(!1),[i,o]=_.exports.useState(0),l=a=>{o(a),r(!0),t({type:Pt.ADD_PRODUCTO,payload:a})};return R(y8,{className:"container",children:[e.productos.map(a=>d(w8,{children:R(x8,{children:[d(k8,{children:d("img",{src:`img/${a.img}`,alt:a.nombre})}),R(S8,{children:[d("p",{children:a.nombre}),R("p",{children:["Precio: ",R("span",{children:["S/.",a.precio]})]}),d(b8,{onClick:()=>l(a.id),children:"Añadir al Carrito"})]})]})},a.id)),n&&d(xl,{modal:n,setModal:r,children:d(v8,{id:i,setModalAdd:r})})]})}function E8(){return R(_n,{children:[d(sh,{}),d(C8,{})]})}const _8=E.div`
    position: relative;
    background-color: white;
    border-radius: 8px;
    color: black;
    display: flex;
    padding: 1rem;
    gap: 0.5rem;
    max-width: 500px;
    @media screen and (max-width:400px) {
        flex-direction: column;
        padding: 1rem 0.5rem;
    }
`,P8=E.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* max-width: 200px; */
    img{
        max-width: 150px;
    }
    @media screen and (min-width:576px) {
        max-width: 150px;
        
    }
`,O8=E.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    h2{
        font-weight:500;
        font-size: 1.3rem;
        text-align: justify;
    }

    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width:375px)  {
        padding: 0.25rem;
    }
`,T8=E.p`
    font-size: calc(1rem + 1vh);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 600;
    color: red;
`,z8=E.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    button{
        padding: 0.5rem 0.8rem;
        font-size: 1rem;
        background-color: #181717;
        color: white;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        
    }
    button:hover{
        background-color: black;
    }
    p{
        width: 40px;
        text-align: center;
    }
`,M8=E.div`
    width:100%;
    display: flex;
    justify-content: end;

    button {
        outline: none;
        border: none;
        background-color: #0d61bb;
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 16px;
        font-size: 1rem;
        cursor: pointer;
    }
    button:hover{
        background-color: #007bff;
    }
    @media screen and (min-width:376px)  {
        button {
            padding: 0.5rem 2rem;
        }
    }
`;function $8({id:e,img:t,nombre:n,precio:r,cantidad:i}){const{dispatch:o}=_.exports.useContext(Dr);return R(_8,{children:[d(P8,{children:d("img",{src:`img/${t}`})}),R(O8,{children:[d("h2",{children:n}),R("div",{children:[R(T8,{children:["S/.",r]}),R(z8,{children:[d("button",{onClick:()=>o({type:Pt.ADD_PRODUCTO,payload:e}),children:"+"}),d("p",{children:i}),d("button",{onClick:()=>o({type:Pt.DECREASE_ONE_PRODUCTO,payload:e}),children:"-"})]})]}),d(M8,{children:d("button",{onClick:()=>o({type:Pt.REMOVE_PRODUCTO,payload:e}),children:"Eliminar"})})]})]})}const N8=E.main`
    margin-top: 6rem;
    margin-bottom: 1rem;
    width: calc(100% - 2rem);    
    display: grid;
    grid-template-columns: ${e=>e.cantidad?"2fr 1fr":"1fr"};
    color: white;
    gap: 1rem;
    @media screen and (max-width:550px) {
        grid-template-columns: 1fr;

    }
`,A8=E.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,R8=E.div`
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    div{
        font-size: calc(7rem + 1vh);
        display: flex;
        color: red;
    }
    h2{
        text-align: center;
        font-size: calc(2.5rem + 1vh);
        line-height: calc(2.5rem + 1vh);
    }
    p{
        text-align: center;
        font-size: calc(1.25rem + 1vh);
        line-height: calc(1.25rem + 1vh);
    }
    button{
        outline: none;
        border: none;
        background-color: #0d61bb;
        padding: 0.5rem 2.5rem;
        font-size: calc(1rem + 1vh);
        color: white;
        border-radius: 20px;
        cursor: pointer;
        transition: background-color 0.3s ease-in;
    }
    button:hover{
        background-color: #007bff;
    }
    @media screen and (max-width:374px) {
        padding: 1rem;
        div{
            font-size: calc(4rem + 1vh);
        }
    }

`,L8=E.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* width: calc(100% - 2.5rem); */

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div:nth-child(2){
        background-color: white;
        border-radius: 6px;
        padding: 0.5rem;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: 1.2rem;
    }

    p{
        display: flex;
        justify-content: space-between;
    }
    
    button{
        outline: none;
        border: none;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: 16px;
        background-color: #0d61bb;
        color: white;
        text-align: center;
        cursor: pointer;
    }
    button:hover{
        background-color: #007bff;
    }
`;function j8(){const{data:e,dispatch:t}=_.exports.useContext(Dr),n=e.carrito.length>0&&e.carrito.map(o=>o.cantidad).reduce((o,l)=>o+l),r=Zi(),i=()=>{t({type:Pt.REMOVE_TOTAL_PRODUCTOS}),r("/projects/ecommerce")};return R(N8,{className:"container",cantidad:e.carrito.length>0,children:[R(A8,{children:[e.carrito.length>0&&R("h1",{children:["Carrito (",n," productos)"]}),e.carrito.length>0?e.carrito.map(o=>d($8,{id:o.id,img:o.img,nombre:o.nombre,precio:o.precio,cantidad:o.cantidad},o.id)):R(R8,{children:[d("div",{children:d(_p,{})}),d("h2",{children:"Tu Carro está vacío"}),d("p",{children:"Tenemos los mejores precios en productos tecnológicos.¿Te los vas a perder?"}),d("button",{onClick:()=>r("/projects/ecommerce"),children:"Inicio"})]})]}),d(L8,{children:e.carrito.length>0&&R("div",{children:[d("h2",{children:"Resumen de la Orden"}),R("div",{children:[R("p",{children:["Total :  ",R("span",{children:["S/. ",e.carrito.map(o=>o.cantidad*o.precio).reduce((o,l)=>o+l)]})]}),d("button",{onClick:i,children:"Comprar"})]})]})})]})}function D8(){return R(_n,{children:[d(sh,{}),d(j8,{})]})}const I8=E.section`
    display: flex;
    flex-direction:column;

    img{
        width: 100%;
        height: auto;
    }
    @media screen and (min-width: 769px) {
        height: 100vh;
        display: grid;
        grid-template-rows: 2fr 1fr;
    }
`,F8=E.article`
    display: flex;
    flex-direction: column;

    div:nth-child(1){
        display: flex;
    }

    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: 500px 1fr;
    }
    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 680px 1fr;
    }
`,H8=E.article`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 769px) {
        flex-direction: row;
        display: grid;
        grid-template-columns: 1fr 400px 1fr;
        img{
        height: 100%;
        object-fit: cover;
        }
    }
    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 640px 1fr;
    }
`,U8=E.div`
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    @media screen and (min-width:769px) {
        padding: 1rem;
    }
    @media screen and (min-width: 845px) {
        justify-content: center;
    }
    @media screen  and (min-width:1024px) {
        padding: 4rem;
    }
`,B8=E.div`
    display: flex;
    position: absolute;
    top: -4rem;
    right: 0;
    height: 4rem;

    button{
        background-color: black;
        outline: none;
        border: none;
        padding: 1.5rem ;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:hover{
        background-color: #111111;
    }
    @media screen and (min-width: 769px) {
        top: calc(100% - 4rem);
        left: 0;
    }
`,V8=E.h1`
    color: black;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    @media screen and (min-width: 769px) {
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
    }
    @media screen and (min-width: 845px){
        font-size: calc(1.8rem + 1vh);
        margin-bottom: 1rem;
    }
`,Vd=E.p`
    color: hsl(0, 0%, 63%);
    font-size: 1rem;
    line-height: 1.2rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
`,W8=E.button`
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    justify-content: space-between; 
    margin-top: 2rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
    letter-spacing: 10px;
    width: 220px;
    font-family: 'League Spartan', sans-serif;
    font-weight: 600;
    color: black;
    @media screen and (min-width:769px) {
        margin-top: 1rem;
    }
`,Q8=E.div`
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen  and (min-width:1024px) {
        padding: 3rem;
    }
`,q8=E.h2`
    font-family: 'League Spartan', sans-serif;
    font-size: 1rem;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    color: black;
`,Y8=[{id:"1",ruta:"imagenes-room/desktop-image-hero-1.jpg",title:"Discover innovative ways to decorate",content:"We provide unmatched quality, comfort,and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. "},{id:"2",ruta:"imagenes-room/desktop-image-hero-2.jpg",title:"We are available all across the globe",content:"With stores all over the world. it`s easy for you to find furniture for your home or place of business.Locally, we`re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questiongs?Don`t hesitate to contact us today."},{id:"3",ruta:"imagenes-room/desktop-image-hero-3.jpg",title:"Manufactured with the best materials",content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand wta customers want for their home and office."}];function G8(){const[e,t]=_.exports.useState(1),n=Y8.filter(l=>l.id==e),r=()=>e<=1?t(3):t(e-1),i=()=>e>=3?t(1):t(e+1),o=Zi();return d(_n,{children:R(I8,{children:[R(F8,{children:[n.map(l=>d("div",{children:d("img",{src:l.ruta,alt:"img-desktop"})},l.id)),R(U8,{children:[R(B8,{children:[d("button",{onClick:r,children:d("img",{src:"imagenes-room/icon-angle-left.svg",alt:"left"})}),d("button",{onClick:i,children:d("img",{src:"imagenes-room/icon-angle-right.svg",alt:"right"})})]}),n.map(l=>R("div",{children:[d(V8,{children:l.title}),d(Vd,{children:l.content})]},l.id)),R(W8,{onClick:()=>o("/projects/room-page"),children:["SHOP NOW",d("span",{className:"arrow",children:d("img",{src:"imagenes-room/icon-arrow.svg",alt:"arrow"})})]})]})]}),R(H8,{children:[d("img",{src:"imagenes-room/image-about-dark.jpg",alt:"img-mobile"}),R(Q8,{children:[d(q8,{children:"ABOUT OUR FURNITURE"}),d(Vd,{children:"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick o cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialist are available to help you create your dream space"})]}),d("img",{src:"imagenes-room/image-about-light.jpg",alt:"img-mobile"})]})]})})}const X8=E.header`
    width: 100%;
`,K8=E.nav`
    position: relative;
    width: 100%;
    height: 5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: absolute;
    
    @media screen and (min-width:769px) {
        max-width: 380px;
        display: flex;
        gap: 2rem;
    }

`,Z8=E.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
    `,J8=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    vertical-align: center;
    height: 100%;

    @media screen and (max-width:768px) {
        width: 100%;
        img{
            width: 3rem;
        }
    }
`,ew=E.div`
    width: 100%;
    position: absolute;
    width: 100%;
    top: ${e=>e.visible?"0rem":"-5rem"};
    left: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 1rem;
    z-index: 500;
    background-color: white;
    transition: top 0.3s ease-in;

    @media screen and (min-width:769px) {
        position: static;
        background-color: transparent;
    }
`,tw=E.button`
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
`,nw=E.ul`
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 100%;
    text-align: center;
    width: 100%;
    
    a{
        color: black;
        position: relative;
    }
    a::before{
        content: "";
        position: absolute;
        bottom: -2px;
        width: 1%;
        right: 50%;
        height: 2px;
        opacity: 1;
    }
    a::after{
        content: "";
        position: absolute;
        bottom: -2px;
        width: 1%;
        left: 50%;
        height: 2px;
        opacity: 1;
    }

    a:hover::before{
        content: "";
        position: absolute;
        width: 50%;
        background-color: white;
        right: 50%;
        transition: width 0.4s ease-in ;
    }
    a:hover::after{
        content: "";
        position: absolute;
        width: 50%;
        background-color: white;
        left: 50%;
        transition: width 0.4s ease-in ;
    }

    @media screen and (min-width:769px) {
        a{
            color:white;
        }   
    }
`,rw=E.div`
    background-color: black;
    opacity: 0.6;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 400;
    @media screen and (min-width: 769px) {
        display:none;
    }
`;function iw(){const[e,t]=_.exports.useState(!1);return R(X8,{children:[R(K8,{children:[d(Z8,{onClick:()=>t(!0),children:d("img",{src:"imagenes-room/icon-hamburger.svg",alt:"nav-hamburger"})}),d(J8,{children:d("img",{src:"imagenes-room/logo.svg",alt:"logo",className:"logo"})}),R(ew,{visible:e,children:[d(tw,{className:"container-close",onClick:()=>t(!1),children:d("img",{src:"imagenes-room/icon-close.svg",alt:"close"})}),R(nw,{children:[d("li",{className:"list-item",children:d("a",{href:"../#/projects/room-page",className:"item-link",children:"home"})}),d("li",{className:"list-item",children:d("a",{href:"../#/projects/room-page",className:"item-link",children:"shop"})}),d("li",{className:"list-item",children:d("a",{href:"../#/projects/room-page",className:"item-link",children:"about"})}),d("li",{className:"list-item",children:d("a",{href:"../#/projects/room-page",className:"item-link",children:"contact"})})]})]})]}),e&&d(rw,{})]})}const ow=E.div`
    position: relative ;
    background-color: white;
    img{
        min-height:auto;
        border-radius: 0;
    }
    ul{
        list-style:none;
    }
    a{
        text-decoration: none;
    }
`;function lw(){return R(ow,{children:[d(iw,{}),d(G8,{})]})}function aw(){return d("div",{className:"App",children:d(r8,{children:R(X6,{children:[d(Ut,{path:"/",element:d(J4,{})}),d(Ut,{path:"*",element:d(i5,{})}),d(Ut,{path:"/projects/crud",element:d(z5,{})}),d(Ut,{path:"/projects/rick-and-morty",element:d($5,{})}),d(Ut,{path:"/projects/api-countries",element:d(e8,{})}),d(Ut,{path:"/projects/ecommerce",element:d(E8,{})}),d(Ut,{path:"/projects/ecommerce/cart",element:d(D8,{})}),d(Ut,{path:"/projects/room-page",element:d(lw,{})})]})})})}var uh={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Xr,function(){return function(n){function r(o){if(i[o])return i[o].exports;var l=i[o]={exports:{},id:o,loaded:!1};return n[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function o(V){return V&&V.__esModule?V:{default:V}}var l=Object.assign||function(V){for(var te=1;te<arguments.length;te++){var se=arguments[te];for(var de in se)Object.prototype.hasOwnProperty.call(se,de)&&(V[de]=se[de])}return V},a=i(1),s=(o(a),i(6)),u=o(s),f=i(7),c=o(f),p=i(8),w=o(p),y=i(9),x=o(y),O=i(10),g=o(O),h=i(11),v=o(h),S=i(14),$=o(S),N=[],j=!1,z={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(V&&(j=!0),j)return N=(0,v.default)(N,z),(0,g.default)(N,z.once),N},Y=function(){N=(0,$.default)(),q()},A=function(){N.forEach(function(V,te){V.node.removeAttribute("data-aos"),V.node.removeAttribute("data-aos-easing"),V.node.removeAttribute("data-aos-duration"),V.node.removeAttribute("data-aos-delay")})},T=function(V){return V===!0||V==="mobile"&&x.default.mobile()||V==="phone"&&x.default.phone()||V==="tablet"&&x.default.tablet()||typeof V=="function"&&V()===!0},Q=function(V){z=l(z,V),N=(0,$.default)();var te=document.all&&!window.atob;return T(z.disable)||te?A():(z.disableMutationObserver||w.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),z.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",z.easing),document.querySelector("body").setAttribute("data-aos-duration",z.duration),document.querySelector("body").setAttribute("data-aos-delay",z.delay),z.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):z.startEvent==="load"?window.addEventListener(z.startEvent,function(){q(!0)}):document.addEventListener(z.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,c.default)(q,z.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(q,z.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,g.default)(N,z.once)},z.throttleDelay)),z.disableMutationObserver||w.default.ready("[data-aos]",Y),N)};n.exports={init:Q,refresh:q,refreshHard:Y}},function(n,r){},,,,,function(n,r){(function(i){function o(T,Q,V){function te(b){var M=U,F=K;return U=K=void 0,re=b,J=T.apply(F,M)}function se(b){return re=b,L=setTimeout(X,Q),oe?te(b):J}function de(b){var M=b-le,F=b-re,P=Q-M;return m?Y(P,C-F):P}function I(b){var M=b-le,F=b-re;return le===void 0||M>=Q||M<0||m&&F>=C}function X(){var b=A();return I(b)?ee(b):void(L=setTimeout(X,de(b)))}function ee(b){return L=void 0,k&&U?te(b):(U=K=void 0,J)}function ue(){L!==void 0&&clearTimeout(L),re=0,U=le=K=L=void 0}function H(){return L===void 0?J:ee(A())}function B(){var b=A(),M=I(b);if(U=arguments,K=this,le=b,M){if(L===void 0)return se(le);if(m)return L=setTimeout(X,Q),te(le)}return L===void 0&&(L=setTimeout(X,Q)),J}var U,K,C,J,L,le,re=0,oe=!1,m=!1,k=!0;if(typeof T!="function")throw new TypeError(p);return Q=f(Q)||0,a(V)&&(oe=!!V.leading,m="maxWait"in V,C=m?q(f(V.maxWait)||0,Q):C,k="trailing"in V?!!V.trailing:k),B.cancel=ue,B.flush=H,B}function l(T,Q,V){var te=!0,se=!0;if(typeof T!="function")throw new TypeError(p);return a(V)&&(te="leading"in V?!!V.leading:te,se="trailing"in V?!!V.trailing:se),o(T,Q,{leading:te,maxWait:Q,trailing:se})}function a(T){var Q=typeof T>"u"?"undefined":c(T);return!!T&&(Q=="object"||Q=="function")}function s(T){return!!T&&(typeof T>"u"?"undefined":c(T))=="object"}function u(T){return(typeof T>"u"?"undefined":c(T))=="symbol"||s(T)&&z.call(T)==y}function f(T){if(typeof T=="number")return T;if(u(T))return w;if(a(T)){var Q=typeof T.valueOf=="function"?T.valueOf():T;T=a(Q)?Q+"":Q}if(typeof T!="string")return T===0?T:+T;T=T.replace(x,"");var V=g.test(T);return V||h.test(T)?v(T.slice(2),V?2:8):O.test(T)?w:+T}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},p="Expected a function",w=NaN,y="[object Symbol]",x=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,S=(typeof i>"u"?"undefined":c(i))=="object"&&i&&i.Object===Object&&i,$=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,N=S||$||Function("return this")(),j=Object.prototype,z=j.toString,q=Math.max,Y=Math.min,A=function(){return N.Date.now()};n.exports=l}).call(r,function(){return this}())},function(n,r){(function(i){function o(A,T,Q){function V(k){var b=B,M=U;return B=U=void 0,le=k,C=A.apply(M,b)}function te(k){return le=k,J=setTimeout(I,T),re?V(k):C}function se(k){var b=k-L,M=k-le,F=T-b;return oe?q(F,K-M):F}function de(k){var b=k-L,M=k-le;return L===void 0||b>=T||b<0||oe&&M>=K}function I(){var k=Y();return de(k)?X(k):void(J=setTimeout(I,se(k)))}function X(k){return J=void 0,m&&B?V(k):(B=U=void 0,C)}function ee(){J!==void 0&&clearTimeout(J),le=0,B=L=U=J=void 0}function ue(){return J===void 0?C:X(Y())}function H(){var k=Y(),b=de(k);if(B=arguments,U=this,L=k,b){if(J===void 0)return te(L);if(oe)return J=setTimeout(I,T),V(L)}return J===void 0&&(J=setTimeout(I,T)),C}var B,U,K,C,J,L,le=0,re=!1,oe=!1,m=!0;if(typeof A!="function")throw new TypeError(c);return T=u(T)||0,l(Q)&&(re=!!Q.leading,oe="maxWait"in Q,K=oe?z(u(Q.maxWait)||0,T):K,m="trailing"in Q?!!Q.trailing:m),H.cancel=ee,H.flush=ue,H}function l(A){var T=typeof A>"u"?"undefined":f(A);return!!A&&(T=="object"||T=="function")}function a(A){return!!A&&(typeof A>"u"?"undefined":f(A))=="object"}function s(A){return(typeof A>"u"?"undefined":f(A))=="symbol"||a(A)&&j.call(A)==w}function u(A){if(typeof A=="number")return A;if(s(A))return p;if(l(A)){var T=typeof A.valueOf=="function"?A.valueOf():A;A=l(T)?T+"":T}if(typeof A!="string")return A===0?A:+A;A=A.replace(y,"");var Q=O.test(A);return Q||g.test(A)?h(A.slice(2),Q?2:8):x.test(A)?p:+A}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},c="Expected a function",p=NaN,w="[object Symbol]",y=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt,v=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,S=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,$=v||S||Function("return this")(),N=Object.prototype,j=N.toString,z=Math.max,q=Math.min,Y=function(){return $.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){function i(f){var c=void 0,p=void 0;for(c=0;c<f.length;c+=1)if(p=f[c],p.dataset&&p.dataset.aos||p.children&&i(p.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!o()}function a(f,c){var p=window.document,w=o(),y=new w(s);u=c,y.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(f){f&&f.forEach(function(c){var p=Array.prototype.slice.call(c.addedNodes),w=Array.prototype.slice.call(c.removedNodes),y=p.concat(w);if(i(y))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:l,ready:a}},function(n,r){function i(p,w){if(!(p instanceof w))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function p(w,y){for(var x=0;x<y.length;x++){var O=y[x];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(w,O.key,O)}}return function(w,y,x){return y&&p(w.prototype,y),x&&p(w,x),w}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function p(){i(this,p)}return l(p,[{key:"phone",value:function(){var w=o();return!(!a.test(w)&&!s.test(w.substr(0,4)))}},{key:"mobile",value:function(){var w=o();return!(!u.test(w)&&!f.test(w.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();r.default=new c},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(l,a,s){var u=l.node.getAttribute("data-aos-once");a>l.position?l.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!s&&u!=="true")&&l.node.classList.remove("aos-animate")},o=function(l,a){var s=window.pageYOffset,u=window.innerHeight;l.forEach(function(f,c){i(f,u+s,a)})};r.default=o},function(n,r,i){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(12),a=o(l),s=function(u,f){return u.forEach(function(c,p){c.node.classList.add("aos-init"),c.position=(0,a.default)(c.node,f.offset)}),u};r.default=s},function(n,r,i){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(13),a=o(l),s=function(u,f){var c=0,p=0,w=window.innerHeight,y={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(p=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(u=document.querySelectorAll(y.anchor)[0]),c=(0,a.default)(u).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=u.offsetHeight/2;break;case"bottom-bottom":c+=u.offsetHeight;break;case"top-center":c+=w/2;break;case"bottom-center":c+=w/2+u.offsetHeight;break;case"center-center":c+=w/2+u.offsetHeight/2;break;case"top-top":c+=w;break;case"bottom-top":c+=u.offsetHeight+w;break;case"center-top":c+=u.offsetHeight/2+w}return y.anchorPlacement||y.offset||isNaN(f)||(p=f),c+p};r.default=s},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){for(var l=0,a=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)l+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),a+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:a,left:l}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(l){return{node:l}})};r.default=i}])})})(uh);const sw=Wd(uh.exports);sw.init();rs.createRoot(document.getElementById("root")).render(d(t5,{children:d(aw,{})}));
