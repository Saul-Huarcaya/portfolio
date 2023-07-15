function lm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ja={exports:{}},Fa={},A={exports:{}},ue={};var Yi=Symbol.for("react.element"),sm=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),dm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),hm=Symbol.for("react.forward_ref"),mm=Symbol.for("react.suspense"),gm=Symbol.for("react.memo"),vm=Symbol.for("react.lazy"),ad=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=ad&&e[ad]||e["@@iterator"],typeof e=="function"?e:null)}var P0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O0=Object.assign,M0={};function Hr(e,t,n){this.props=e,this.context=t,this.refs=M0,this.updater=n||P0}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function z0(){}z0.prototype=Hr.prototype;function Hc(e,t,n){this.props=e,this.context=t,this.refs=M0,this.updater=n||P0}var Vc=Hc.prototype=new z0;Vc.constructor=Hc;O0(Vc,Hr.prototype);Vc.isPureReactComponent=!0;var ld=Array.isArray,L0=Object.prototype.hasOwnProperty,Uc={current:null},A0={key:!0,ref:!0,__self:!0,__source:!0};function $0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)L0.call(t,r)&&!A0.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yi,type:e,key:o,ref:a,props:i,_owner:Uc.current}}function wm(e,t){return{$$typeof:Yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yi}function xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sd=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xm(""+e.key):t.toString(36)}function Vo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yi:case sm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bl(a,0):r,ld(i)?(n="",e!=null&&(n=e.replace(sd,"$&/")+"/"),Vo(i,t,n,"",function(c){return c})):i!=null&&(Wc(i)&&(i=wm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(sd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ld(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+bl(o,l);a+=Vo(o,t,n,s,i)}else if(s=ym(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+bl(o,l++),a+=Vo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ho(e,t,n){if(e==null)return e;var r=[],i=0;return Vo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Uo={transition:null},bm={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:Uc};ue.Children={map:ho,forEach:function(e,t,n){ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ho(e,function(){t++}),t},toArray:function(e){return ho(e,function(t){return t})||[]},only:function(e){if(!Wc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Hr;ue.Fragment=cm;ue.Profiler=dm;ue.PureComponent=Hc;ue.StrictMode=um;ue.Suspense=mm;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=O0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)L0.call(t,s)&&!A0.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yi,type:e.type,key:i,ref:o,props:r,_owner:a}};ue.createContext=function(e){return e={$$typeof:pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fm,_context:e},e.Consumer=e};ue.createElement=$0;ue.createFactory=function(e){var t=$0.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:hm,render:e}};ue.isValidElement=Wc;ue.lazy=function(e){return{$$typeof:vm,_payload:{_status:-1,_result:e},_init:Sm}};ue.memo=function(e,t){return{$$typeof:gm,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Uo.transition;Uo.transition={};try{e()}finally{Uo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return et.current.useCallback(e,t)};ue.useContext=function(e){return et.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return et.current.useDeferredValue(e)};ue.useEffect=function(e,t){return et.current.useEffect(e,t)};ue.useId=function(){return et.current.useId()};ue.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return et.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};ue.useRef=function(e){return et.current.useRef(e)};ue.useState=function(e){return et.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return et.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(A);const ae=_0(A.exports),_s=lm({__proto__:null,default:ae},[A.exports]);var km=A.exports,Em=Symbol.for("react.element"),Cm=Symbol.for("react.fragment"),Tm=Object.prototype.hasOwnProperty,_m=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pm={key:!0,ref:!0,__self:!0,__source:!0};function N0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Tm.call(t,r)&&!Pm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Em,type:e,key:o,ref:a,props:i,_owner:_m.current}}Fa.Fragment=Cm;Fa.jsx=N0;Fa.jsxs=N0;(function(e){e.exports=Fa})(ja);const Ln=ja.exports.Fragment,p=ja.exports.jsx,N=ja.exports.jsxs;var Ps={},Gc={exports:{}},pt={},I0={exports:{}},R0={};(function(e){function t(B,q){var Z=B.length;B.push(q);e:for(;0<Z;){var ce=Z-1>>>1,W=B[ce];if(0<i(W,q))B[ce]=q,B[Z]=W,Z=ce;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var q=B[0],Z=B.pop();if(Z!==q){B[0]=Z;e:for(var ce=0,W=B.length,G=W>>>1;ce<G;){var Y=2*(ce+1)-1,J=B[Y],L=Y+1,te=B[L];if(0>i(J,Z))L<W&&0>i(te,J)?(B[ce]=te,B[L]=Z,ce=L):(B[ce]=J,B[Y]=Z,ce=Y);else if(L<W&&0>i(te,Z))B[ce]=te,B[L]=Z,ce=L;else break e}}return q}function i(B,q){var Z=B.sortIndex-q.sortIndex;return Z!==0?Z:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],u=1,d=null,h=3,v=!1,y=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(B){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=B)r(c),q.sortIndex=q.expirationTime,t(s,q);else break;q=n(c)}}function w(B){if(x=!1,m(B),!y)if(n(s)!==null)y=!0,ne(b);else{var q=n(c);q!==null&&de(w,q.startTime-B)}}function b(B,q){y=!1,x&&(x=!1,g(M),M=-1),v=!0;var Z=h;try{for(m(q),d=n(s);d!==null&&(!(d.expirationTime>q)||B&&!k());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var W=ce(d.expirationTime<=q);q=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(s)&&r(s),m(q)}else r(s);d=n(s)}if(d!==null)var G=!0;else{var Y=n(c);Y!==null&&de(w,Y.startTime-q),G=!1}return G}finally{d=null,h=Z,v=!1}}var _=!1,$=null,M=-1,T=5,V=-1;function k(){return!(e.unstable_now()-V<T)}function C(){if($!==null){var B=e.unstable_now();V=B;var q=!0;try{q=$(!0,B)}finally{q?R():(_=!1,$=null)}}else _=!1}var R;if(typeof f=="function")R=function(){f(C)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=C,R=function(){X.postMessage(null)}}else R=function(){E(C,0)};function ne(B){$=B,_||(_=!0,R())}function de(B,q){M=E(function(){B(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ne(b))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(B){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var Z=h;h=q;try{return B()}finally{h=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=h;h=B;try{return q()}finally{h=Z}},e.unstable_scheduleCallback=function(B,q,Z){var ce=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,B){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=Z+W,B={id:u++,callback:q,priorityLevel:B,startTime:Z,expirationTime:W,sortIndex:-1},Z>ce?(B.sortIndex=Z,t(c,B),n(s)===null&&B===n(c)&&(x?(g(M),M=-1):x=!0,de(w,Z-ce))):(B.sortIndex=W,t(s,B),y||v||(y=!0,ne(b))),B},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(B){var q=h;return function(){var Z=h;h=q;try{return B.apply(this,arguments)}finally{h=Z}}}})(R0);(function(e){e.exports=R0})(I0);var D0=A.exports,ft=I0.exports;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,Ei={};function nr(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Ei[e]=t,e=0;e<t.length;e++)j0.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=Object.prototype.hasOwnProperty,Om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cd={},ud={};function Mm(e){return Os.call(ud,e)?!0:Os.call(cd,e)?!1:Om.test(e)?ud[e]=!0:(cd[e]=!0,!1)}function zm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lm(e,t,n,r){if(t===null||typeof t>"u"||zm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yc=/[\-:]([a-z])/g;function qc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yc,qc);Ve[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yc,qc);Ve[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yc,qc);Ve[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qc(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lm(t,n,i,r)&&(n=null),r||i===null?Mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),ur=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Ls=Symbol.for("react.suspense_list"),Zc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),dd=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=dd&&e[dd]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,kl;function li(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Am(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function As(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case ur:return"Portal";case Ms:return"Profiler";case Xc:return"StrictMode";case zs:return"Suspense";case Ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case B0:return(e.displayName||"Context")+".Consumer";case F0:return(e._context.displayName||"Context")+".Provider";case Kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zc:return t=e.displayName||null,t!==null?t:As(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return As(e(t))}catch{}}return null}function $m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return As(t);case 8:return t===Xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function V0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nm(e){var t=V0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){e._valueTracker||(e._valueTracker=Nm(e))}function U0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $s(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function W0(e,t){t=t.checked,t!=null&&Qc(e,"checked",t,!1)}function Ns(e,t){W0(e,t);var n=Mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Is(e,t.type,n):t.hasOwnProperty("defaultValue")&&Is(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Is(e,t,n){(t!=="number"||oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var si=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(si(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mn(n)}}function G0(e,t){var n=Mn(t.value),r=Mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Y0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Y0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,q0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){Im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Q0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function X0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rm=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(Rm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bs=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Tr=null,_r=null;function gd(e){if(e=Xi(e)){if(typeof Hs!="function")throw Error(H(280));var t=e.stateNode;t&&(t=Wa(t),Hs(e.stateNode,e.type,t))}}function K0(e){Tr?_r?_r.push(e):_r=[e]:Tr=e}function Z0(){if(Tr){var e=Tr,t=_r;if(_r=Tr=null,gd(e),t)for(e=0;e<t.length;e++)gd(t[e])}}function J0(e,t){return e(t)}function ep(){}var Tl=!1;function tp(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return J0(e,t,n)}finally{Tl=!1,(Tr!==null||_r!==null)&&(ep(),Z0())}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var r=Wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var Vs=!1;if(Jt)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Vs=!1}function Dm(e,t,n,r,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var hi=!1,aa=null,la=!1,Us=null,jm={onError:function(e){hi=!0,aa=e}};function Fm(e,t,n,r,i,o,a,l,s){hi=!1,aa=null,Dm.apply(jm,arguments)}function Bm(e,t,n,r,i,o,a,l,s){if(Fm.apply(this,arguments),hi){if(hi){var c=aa;hi=!1,aa=null}else throw Error(H(198));la||(la=!0,Us=c)}}function rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vd(e){if(rr(e)!==e)throw Error(H(188))}function Hm(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vd(i),e;if(o===r)return vd(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function rp(e){return e=Hm(e),e!==null?ip(e):null}function ip(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ip(e);if(t!==null)return t;e=e.sibling}return null}var op=ft.unstable_scheduleCallback,yd=ft.unstable_cancelCallback,Vm=ft.unstable_shouldYield,Um=ft.unstable_requestPaint,Le=ft.unstable_now,Wm=ft.unstable_getCurrentPriorityLevel,eu=ft.unstable_ImmediatePriority,ap=ft.unstable_UserBlockingPriority,sa=ft.unstable_NormalPriority,Gm=ft.unstable_LowPriority,lp=ft.unstable_IdlePriority,Ba=null,Bt=null;function Ym(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Ba,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Xm,qm=Math.log,Qm=Math.LN2;function Xm(e){return e>>>=0,e===0?32:31-(qm(e)/Qm|0)|0}var yo=64,wo=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ci(l):(o&=a,o!==0&&(r=ci(o)))}else a=n&~i,a!==0?r=ci(a):o!==0&&(r=ci(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=Km(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sp(){var e=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Jm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function cp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var up,nu,dp,fp,pp,Gs=!1,xo=[],wn=null,xn=null,Sn=null,_i=new Map,Pi=new Map,fn=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&nu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tg(e,t,n,r,i){switch(t){case"focusin":return wn=Kr(wn,e,t,n,r,i),!0;case"dragenter":return xn=Kr(xn,e,t,n,r,i),!0;case"mouseover":return Sn=Kr(Sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _i.set(o,Kr(_i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pi.set(o,Kr(Pi.get(o)||null,e,t,n,r,i)),!0}return!1}function hp(e){var t=Vn(e.target);if(t!==null){var n=rr(t);if(n!==null){if(t=n.tag,t===13){if(t=np(n),t!==null){e.blockedOn=t,pp(e.priority,function(){dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bs=r,n.target.dispatchEvent(r),Bs=null}else return t=Xi(n),t!==null&&nu(t),e.blockedOn=n,!1;t.shift()}return!0}function xd(e,t,n){Wo(e)&&n.delete(t)}function ng(){Gs=!1,wn!==null&&Wo(wn)&&(wn=null),xn!==null&&Wo(xn)&&(xn=null),Sn!==null&&Wo(Sn)&&(Sn=null),_i.forEach(xd),Pi.forEach(xd)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,ng)))}function Oi(e){function t(i){return Zr(i,e)}if(0<xo.length){Zr(xo[0],e);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&Zr(wn,e),xn!==null&&Zr(xn,e),Sn!==null&&Zr(Sn,e),_i.forEach(t),Pi.forEach(t),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)hp(n),n.blockedOn===null&&fn.shift()}var Pr=rn.ReactCurrentBatchConfig,ua=!0;function rg(e,t,n,r){var i=pe,o=Pr.transition;Pr.transition=null;try{pe=1,ru(e,t,n,r)}finally{pe=i,Pr.transition=o}}function ig(e,t,n,r){var i=pe,o=Pr.transition;Pr.transition=null;try{pe=4,ru(e,t,n,r)}finally{pe=i,Pr.transition=o}}function ru(e,t,n,r){if(ua){var i=Ys(e,t,n,r);if(i===null)Rl(e,t,r,da,n),wd(e,r);else if(tg(i,e,t,n,r))r.stopPropagation();else if(wd(e,r),t&4&&-1<eg.indexOf(e)){for(;i!==null;){var o=Xi(i);if(o!==null&&up(o),o=Ys(e,t,n,r),o===null&&Rl(e,t,r,da,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var da=null;function Ys(e,t,n,r){if(da=null,e=Jc(r),e=Vn(e),e!==null)if(t=rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return da=e,null}function mp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case eu:return 1;case ap:return 4;case sa:case Gm:return 16;case lp:return 536870912;default:return 16}default:return 16}}var hn=null,iu=null,Go=null;function gp(){if(Go)return Go;var e,t=iu,n=t.length,r,i="value"in hn?hn.value:hn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Go=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function Sd(){return!1}function ht(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?So:Sd,this.isPropagationStopped=Sd,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=ht(Vr),Qi=Oe({},Vr,{view:0,detail:0}),og=ht(Qi),Pl,Ol,Jr,Ha=Oe({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Pl=e.screenX-Jr.screenX,Ol=e.screenY-Jr.screenY):Ol=Pl=0,Jr=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Ol}}),bd=ht(Ha),ag=Oe({},Ha,{dataTransfer:0}),lg=ht(ag),sg=Oe({},Qi,{relatedTarget:0}),Ml=ht(sg),cg=Oe({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=ht(cg),dg=Oe({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fg=ht(dg),pg=Oe({},Vr,{data:0}),kd=ht(pg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gg[e])?!!t[e]:!1}function au(){return vg}var yg=Oe({},Qi,{key:function(e){if(e.key){var t=hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wg=ht(yg),xg=Oe({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=ht(xg),Sg=Oe({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),bg=ht(Sg),kg=Oe({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=ht(kg),Cg=Oe({},Ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tg=ht(Cg),_g=[9,13,27,32],lu=Jt&&"CompositionEvent"in window,mi=null;Jt&&"documentMode"in document&&(mi=document.documentMode);var Pg=Jt&&"TextEvent"in window&&!mi,vp=Jt&&(!lu||mi&&8<mi&&11>=mi),Cd=String.fromCharCode(32),Td=!1;function yp(e,t){switch(e){case"keyup":return _g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Og(e,t){switch(e){case"compositionend":return wp(t);case"keypress":return t.which!==32?null:(Td=!0,Cd);case"textInput":return e=t.data,e===Cd&&Td?null:e;default:return null}}function Mg(e,t){if(fr)return e==="compositionend"||!lu&&yp(e,t)?(e=gp(),Go=iu=hn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vp&&t.locale!=="ko"?null:t.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zg[e.type]:t==="textarea"}function xp(e,t,n,r){K0(r),t=fa(t,"onChange"),0<t.length&&(n=new ou("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gi=null,Mi=null;function Lg(e){zp(e,0)}function Va(e){var t=mr(e);if(U0(t))return e}function Ag(e,t){if(e==="change")return t}var Sp=!1;if(Jt){var zl;if(Jt){var Ll="oninput"in document;if(!Ll){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Ll=typeof Pd.oninput=="function"}zl=Ll}else zl=!1;Sp=zl&&(!document.documentMode||9<document.documentMode)}function Od(){gi&&(gi.detachEvent("onpropertychange",bp),Mi=gi=null)}function bp(e){if(e.propertyName==="value"&&Va(Mi)){var t=[];xp(t,Mi,e,Jc(e)),tp(Lg,t)}}function $g(e,t,n){e==="focusin"?(Od(),gi=t,Mi=n,gi.attachEvent("onpropertychange",bp)):e==="focusout"&&Od()}function Ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Va(Mi)}function Ig(e,t){if(e==="click")return Va(t)}function Rg(e,t){if(e==="input"||e==="change")return Va(t)}function Dg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Dg;function zi(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Os.call(t,i)||!Lt(e[i],t[i]))return!1}return!0}function Md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Md(n)}}function kp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ep(){for(var e=window,t=oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oa(e.document)}return t}function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jg(e){var t=Ep(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kp(n.ownerDocument.documentElement,n)){if(r!==null&&su(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zd(n,o);var a=zd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fg=Jt&&"documentMode"in document&&11>=document.documentMode,pr=null,qs=null,vi=null,Qs=!1;function Ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qs||pr==null||pr!==oa(r)||(r=pr,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&zi(vi,r)||(vi=r,r=fa(qs,"onSelect"),0<r.length&&(t=new ou("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Al={},Cp={};Jt&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Ua(e){if(Al[e])return Al[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cp)return Al[e]=t[n];return e}var Tp=Ua("animationend"),_p=Ua("animationiteration"),Pp=Ua("animationstart"),Op=Ua("transitionend"),Mp=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Mp.set(e,t),nr(t,[e])}for(var $l=0;$l<Ad.length;$l++){var Nl=Ad[$l],Bg=Nl.toLowerCase(),Hg=Nl[0].toUpperCase()+Nl.slice(1);An(Bg,"on"+Hg)}An(Tp,"onAnimationEnd");An(_p,"onAnimationIteration");An(Pp,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Op,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function $d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bm(r,t,void 0,e),e.currentTarget=null}function zp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;$d(i,l,c),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;$d(i,l,c),o=s}}}if(la)throw e=Us,la=!1,Us=null,e}function ve(e,t){var n=t[ec];n===void 0&&(n=t[ec]=new Set);var r=e+"__bubble";n.has(r)||(Lp(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),Lp(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Li(e){if(!e[ko]){e[ko]=!0,j0.forEach(function(n){n!=="selectionchange"&&(Vg.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,Il("selectionchange",!1,t))}}function Lp(e,t,n,r){switch(mp(t)){case 1:var i=rg;break;case 4:i=ig;break;default:i=ru}n=i.bind(null,t,n,e),i=void 0,!Vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Vn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}tp(function(){var c=o,u=Jc(n),d=[];e:{var h=Mp.get(e);if(h!==void 0){var v=ou,y=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":v=wg;break;case"focusin":y="focus",v=Ml;break;case"focusout":y="blur",v=Ml;break;case"beforeblur":case"afterblur":v=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bg;break;case Tp:case _p:case Pp:v=ug;break;case Op:v=Eg;break;case"scroll":v=og;break;case"wheel":v=Tg;break;case"copy":case"cut":case"paste":v=fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ed}var x=(t&4)!==0,E=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var f=c,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Ti(f,g),w!=null&&x.push(Ai(f,w,m)))),E)break;f=f.return}0<x.length&&(h=new v(h,y,null,n,u),d.push({event:h,listeners:x}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Bs&&(y=n.relatedTarget||n.fromElement)&&(Vn(y)||y[en]))break e;if((v||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Vn(y):null,y!==null&&(E=rr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=bd,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ed,w="onPointerLeave",g="onPointerEnter",f="pointer"),E=v==null?h:mr(v),m=y==null?h:mr(y),h=new x(w,f+"leave",v,n,u),h.target=E,h.relatedTarget=m,w=null,Vn(u)===c&&(x=new x(g,f+"enter",y,n,u),x.target=m,x.relatedTarget=E,w=x),E=w,v&&y)t:{for(x=v,g=y,f=0,m=x;m;m=sr(m))f++;for(m=0,w=g;w;w=sr(w))m++;for(;0<f-m;)x=sr(x),f--;for(;0<m-f;)g=sr(g),m--;for(;f--;){if(x===g||g!==null&&x===g.alternate)break t;x=sr(x),g=sr(g)}x=null}else x=null;v!==null&&Nd(d,h,v,x,!1),y!==null&&E!==null&&Nd(d,E,y,x,!0)}}e:{if(h=c?mr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var b=Ag;else if(_d(h))if(Sp)b=Rg;else{b=Ng;var _=$g}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Ig);if(b&&(b=b(e,c))){xp(d,b,n,u);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&Is(h,"number",h.value)}switch(_=c?mr(c):window,e){case"focusin":(_d(_)||_.contentEditable==="true")&&(pr=_,qs=c,vi=null);break;case"focusout":vi=qs=pr=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Ld(d,n,u);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Ld(d,n,u)}var $;if(lu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else fr?yp(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(vp&&n.locale!=="ko"&&(fr||M!=="onCompositionStart"?M==="onCompositionEnd"&&fr&&($=gp()):(hn=u,iu="value"in hn?hn.value:hn.textContent,fr=!0)),_=fa(c,M),0<_.length&&(M=new kd(M,e,null,n,u),d.push({event:M,listeners:_}),$?M.data=$:($=wp(n),$!==null&&(M.data=$)))),($=Pg?Og(e,n):Mg(e,n))&&(c=fa(c,"onBeforeInput"),0<c.length&&(u=new kd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=$))}zp(d,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ti(e,n),o!=null&&r.unshift(Ai(e,o,i)),o=Ti(e,t),o!=null&&r.push(Ai(e,o,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,i?(s=Ti(n,o),s!=null&&a.unshift(Ai(n,s,l))):i||(s=Ti(n,o),s!=null&&a.push(Ai(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ug=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(Ug,`
`).replace(Wg,"")}function Eo(e,t,n){if(t=Id(t),Id(e)!==t&&n)throw Error(H(425))}function pa(){}var Xs=null,Ks=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,Gg=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,Yg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(qg)}:Js;function qg(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ur,$i="__reactProps$"+Ur,en="__reactContainer$"+Ur,ec="__reactEvents$"+Ur,Qg="__reactListeners$"+Ur,Xg="__reactHandles$"+Ur;function Vn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dd(e);e!==null;){if(n=e[Dt])return n;e=Dd(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[Dt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function Wa(e){return e[$i]||null}var tc=[],gr=-1;function $n(e){return{current:e}}function we(e){0>gr||(e.current=tc[gr],tc[gr]=null,gr--)}function ge(e,t){gr++,tc[gr]=e.current,e.current=t}var zn={},qe=$n(zn),it=$n(!1),Xn=zn;function $r(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function ha(){we(it),we(qe)}function jd(e,t,n){if(qe.current!==zn)throw Error(H(168));ge(qe,t),ge(it,n)}function Ap(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(H(108,$m(e)||"Unknown",i));return Oe({},n,r)}function ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,Xn=qe.current,ge(qe,e),ge(it,it.current),!0}function Fd(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=Ap(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,we(it),we(qe),ge(qe,e)):we(it),ge(it,n)}var qt=null,Ga=!1,jl=!1;function $p(e){qt===null?qt=[e]:qt.push(e)}function Kg(e){Ga=!0,$p(e)}function Nn(){if(!jl&&qt!==null){jl=!0;var e=0,t=pe;try{var n=qt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,Ga=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),op(eu,Nn),i}finally{pe=t,jl=!1}}return null}var vr=[],yr=0,ga=null,va=0,yt=[],wt=0,Kn=null,Qt=1,Xt="";function Fn(e,t){vr[yr++]=va,vr[yr++]=ga,ga=e,va=t}function Np(e,t,n){yt[wt++]=Qt,yt[wt++]=Xt,yt[wt++]=Kn,Kn=e;var r=Qt;e=Xt;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qt=1<<32-Mt(t)+i|n<<i|r,Xt=o+e}else Qt=1<<o|n<<i|r,Xt=e}function cu(e){e.return!==null&&(Fn(e,1),Np(e,1,0))}function uu(e){for(;e===ga;)ga=vr[--yr],vr[yr]=null,va=vr[--yr],vr[yr]=null;for(;e===Kn;)Kn=yt[--wt],yt[wt]=null,Xt=yt[--wt],yt[wt]=null,Qt=yt[--wt],yt[wt]=null}var dt=null,ut=null,Ee=!1,_t=null;function Ip(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ut=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Qt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ut=null,!0):!1;default:return!1}}function nc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rc(e){if(Ee){var t=ut;if(t){var n=t;if(!Bd(e,t)){if(nc(e))throw Error(H(418));t=bn(n.nextSibling);var r=dt;t&&Bd(e,t)?Ip(r,n):(e.flags=e.flags&-4097|2,Ee=!1,dt=e)}}else{if(nc(e))throw Error(H(418));e.flags=e.flags&-4097|2,Ee=!1,dt=e}}}function Hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Co(e){if(e!==dt)return!1;if(!Ee)return Hd(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=ut)){if(nc(e))throw Rp(),Error(H(418));for(;t;)Ip(e,t),t=bn(t.nextSibling)}if(Hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=dt?bn(e.stateNode.nextSibling):null;return!0}function Rp(){for(var e=ut;e;)e=bn(e.nextSibling)}function Nr(){ut=dt=null,Ee=!1}function du(e){_t===null?_t=[e]:_t.push(e)}var Zg=rn.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ya=$n(null),wa=null,wr=null,fu=null;function pu(){fu=wr=wa=null}function hu(e){var t=ya.current;we(ya),e._currentValue=t}function ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Or(e,t){wa=e,fu=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(wa===null)throw Error(H(308));wr=e,wa.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Un=null;function mu(e){Un===null?Un=[e]:Un.push(e)}function Dp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mu(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,mu(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xa(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,u=c=s=null,l=o;do{var h=l.lane,v=l.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(h=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,d,h):y,h==null)break e;d=Oe({},d,h);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=v,s=d):u=u.next=v,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(u===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jn|=a,e.lanes=a,e.memoizedState=d}}function Ud(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Fp=new D0.Component().refs;function oc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ya={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Cn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(zt(t,e,i,r),qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Cn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(zt(t,e,i,r),qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Cn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(zt(t,e,r,n),qo(t,e,r))}};function Wd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!zi(n,r)||!zi(i,o):!0}function Bp(e,t,n){var r=!1,i=zn,o=t.contextType;return typeof o=="object"&&o!==null?o=bt(o):(i=ot(t)?Xn:qe.current,r=t.contextTypes,o=(r=r!=null)?$r(e,i):zn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ya.enqueueReplaceState(t,t.state,null)}function ac(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Fp,gu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=bt(o):(o=ot(t)?Xn:qe.current,i.context=$r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ya.enqueueReplaceState(i,i.state,null),xa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Fp&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function Hp(e){function t(g,f){if(e){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Tn(g,f),g.index=0,g.sibling=null,g}function o(g,f,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,m,w){return f===null||f.tag!==6?(f=Gl(m,g.mode,w),f.return=g,f):(f=i(f,m),f.return=g,f)}function s(g,f,m,w){var b=m.type;return b===dr?u(g,f,m.props.children,w,m.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===un&&Yd(b)===f.type)?(w=i(f,m.props),w.ref=ei(g,f,m),w.return=g,w):(w=ea(m.type,m.key,m.props,null,g.mode,w),w.ref=ei(g,f,m),w.return=g,w)}function c(g,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Yl(m,g.mode,w),f.return=g,f):(f=i(f,m.children||[]),f.return=g,f)}function u(g,f,m,w,b){return f===null||f.tag!==7?(f=qn(m,g.mode,w,b),f.return=g,f):(f=i(f,m),f.return=g,f)}function d(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gl(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mo:return m=ea(f.type,f.key,f.props,null,g.mode,m),m.ref=ei(g,null,f),m.return=g,m;case ur:return f=Yl(f,g.mode,m),f.return=g,f;case un:var w=f._init;return d(g,w(f._payload),m)}if(si(f)||Qr(f))return f=qn(f,g.mode,m,null),f.return=g,f;To(g,f)}return null}function h(g,f,m,w){var b=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:l(g,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:return m.key===b?s(g,f,m,w):null;case ur:return m.key===b?c(g,f,m,w):null;case un:return b=m._init,h(g,f,b(m._payload),w)}if(si(m)||Qr(m))return b!==null?null:u(g,f,m,w,null);To(g,m)}return null}function v(g,f,m,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(f,g,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:return g=g.get(w.key===null?m:w.key)||null,s(f,g,w,b);case ur:return g=g.get(w.key===null?m:w.key)||null,c(f,g,w,b);case un:var _=w._init;return v(g,f,m,_(w._payload),b)}if(si(w)||Qr(w))return g=g.get(m)||null,u(f,g,w,b,null);To(f,w)}return null}function y(g,f,m,w){for(var b=null,_=null,$=f,M=f=0,T=null;$!==null&&M<m.length;M++){$.index>M?(T=$,$=null):T=$.sibling;var V=h(g,$,m[M],w);if(V===null){$===null&&($=T);break}e&&$&&V.alternate===null&&t(g,$),f=o(V,f,M),_===null?b=V:_.sibling=V,_=V,$=T}if(M===m.length)return n(g,$),Ee&&Fn(g,M),b;if($===null){for(;M<m.length;M++)$=d(g,m[M],w),$!==null&&(f=o($,f,M),_===null?b=$:_.sibling=$,_=$);return Ee&&Fn(g,M),b}for($=r(g,$);M<m.length;M++)T=v($,g,M,m[M],w),T!==null&&(e&&T.alternate!==null&&$.delete(T.key===null?M:T.key),f=o(T,f,M),_===null?b=T:_.sibling=T,_=T);return e&&$.forEach(function(k){return t(g,k)}),Ee&&Fn(g,M),b}function x(g,f,m,w){var b=Qr(m);if(typeof b!="function")throw Error(H(150));if(m=b.call(m),m==null)throw Error(H(151));for(var _=b=null,$=f,M=f=0,T=null,V=m.next();$!==null&&!V.done;M++,V=m.next()){$.index>M?(T=$,$=null):T=$.sibling;var k=h(g,$,V.value,w);if(k===null){$===null&&($=T);break}e&&$&&k.alternate===null&&t(g,$),f=o(k,f,M),_===null?b=k:_.sibling=k,_=k,$=T}if(V.done)return n(g,$),Ee&&Fn(g,M),b;if($===null){for(;!V.done;M++,V=m.next())V=d(g,V.value,w),V!==null&&(f=o(V,f,M),_===null?b=V:_.sibling=V,_=V);return Ee&&Fn(g,M),b}for($=r(g,$);!V.done;M++,V=m.next())V=v($,g,M,V.value,w),V!==null&&(e&&V.alternate!==null&&$.delete(V.key===null?M:V.key),f=o(V,f,M),_===null?b=V:_.sibling=V,_=V);return e&&$.forEach(function(C){return t(g,C)}),Ee&&Fn(g,M),b}function E(g,f,m,w){if(typeof m=="object"&&m!==null&&m.type===dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:e:{for(var b=m.key,_=f;_!==null;){if(_.key===b){if(b=m.type,b===dr){if(_.tag===7){n(g,_.sibling),f=i(_,m.props.children),f.return=g,g=f;break e}}else if(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===un&&Yd(b)===_.type){n(g,_.sibling),f=i(_,m.props),f.ref=ei(g,_,m),f.return=g,g=f;break e}n(g,_);break}else t(g,_);_=_.sibling}m.type===dr?(f=qn(m.props.children,g.mode,w,m.key),f.return=g,g=f):(w=ea(m.type,m.key,m.props,null,g.mode,w),w.ref=ei(g,f,m),w.return=g,g=w)}return a(g);case ur:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=i(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Yl(m,g.mode,w),f.return=g,g=f}return a(g);case un:return _=m._init,E(g,f,_(m._payload),w)}if(si(m))return y(g,f,m,w);if(Qr(m))return x(g,f,m,w);To(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,m),f.return=g,g=f):(n(g,f),f=Gl(m,g.mode,w),f.return=g,g=f),a(g)):n(g,f)}return E}var Ir=Hp(!0),Vp=Hp(!1),Ki={},Ht=$n(Ki),Ni=$n(Ki),Ii=$n(Ki);function Wn(e){if(e===Ki)throw Error(H(174));return e}function vu(e,t){switch(ge(Ii,t),ge(Ni,e),ge(Ht,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ds(t,e)}we(Ht),ge(Ht,t)}function Rr(){we(Ht),we(Ni),we(Ii)}function Up(e){Wn(Ii.current);var t=Wn(Ht.current),n=Ds(t,e.type);t!==n&&(ge(Ni,e),ge(Ht,n))}function yu(e){Ni.current===e&&(we(Ht),we(Ni))}var _e=$n(0);function Sa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function wu(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Qo=rn.ReactCurrentDispatcher,Bl=rn.ReactCurrentBatchConfig,Zn=0,Pe=null,$e=null,Re=null,ba=!1,yi=!1,Ri=0,Jg=0;function We(){throw Error(H(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function Su(e,t,n,r,i,o){if(Zn=o,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?rv:iv,e=n(r,i),yi){o=0;do{if(yi=!1,Ri=0,25<=o)throw Error(H(301));o+=1,Re=$e=null,t.updateQueue=null,Qo.current=ov,e=n(r,i)}while(yi)}if(Qo.current=ka,t=$e!==null&&$e.next!==null,Zn=0,Re=$e=Pe=null,ba=!1,t)throw Error(H(300));return e}function bu(){var e=Ri!==0;return Ri=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Pe.memoizedState=Re=e:Re=Re.next=e,Re}function kt(){if($e===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Re===null?Pe.memoizedState:Re.next;if(t!==null)Re=t,$e=e;else{if(e===null)throw Error(H(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Re===null?Pe.memoizedState=Re=e:Re=Re.next=e}return Re}function Di(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=kt(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=$e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,c=o;do{var u=c.lane;if((Zn&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,Pe.lanes|=u,Jn|=u}c=c.next}while(c!==null&&c!==o);s===null?a=r:s.next=l,Lt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Pe.lanes|=o,Jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=kt(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Lt(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wp(){}function Gp(e,t){var n=Pe,r=kt(),i=t(),o=!Lt(r.memoizedState,i);if(o&&(r.memoizedState=i,rt=!0),r=r.queue,ku(Qp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,ji(9,qp.bind(null,n,r,i,t),void 0,null),je===null)throw Error(H(349));(Zn&30)!==0||Yp(n,t,i)}return i}function Yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qp(e,t,n,r){t.value=n,t.getSnapshot=r,Xp(t)&&Kp(e)}function Qp(e,t,n){return n(function(){Xp(t)&&Kp(e)})}function Xp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Kp(e){var t=tn(e,1);t!==null&&zt(t,e,1,-1)}function qd(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e},t.queue=e,e=e.dispatch=nv.bind(null,Pe,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zp(){return kt().memoizedState}function Xo(e,t,n,r){var i=It();Pe.flags|=e,i.memoizedState=ji(1|t,n,void 0,r===void 0?null:r)}function qa(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if($e!==null){var a=$e.memoizedState;if(o=a.destroy,r!==null&&xu(r,a.deps)){i.memoizedState=ji(t,n,o,r);return}}Pe.flags|=e,i.memoizedState=ji(1|t,n,o,r)}function Qd(e,t){return Xo(8390656,8,e,t)}function ku(e,t){return qa(2048,8,e,t)}function Jp(e,t){return qa(4,2,e,t)}function eh(e,t){return qa(4,4,e,t)}function th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nh(e,t,n){return n=n!=null?n.concat([e]):null,qa(4,4,th.bind(null,t,e),n)}function Eu(){}function rh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ih(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oh(e,t,n){return(Zn&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(Lt(n,t)||(n=sp(),Pe.lanes|=n,Jn|=n,e.baseState=!0),t)}function ev(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{pe=n,Bl.transition=r}}function ah(){return kt().memoizedState}function tv(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lh(e))sh(t,n);else if(n=Dp(e,t,n,r),n!==null){var i=Je();zt(n,e,r,i),ch(n,t,r)}}function nv(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lh(e))sh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Lt(l,a)){var s=t.interleaved;s===null?(i.next=i,mu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Dp(e,t,i,r),n!==null&&(i=Je(),zt(n,e,r,i),ch(n,t,r))}}function lh(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function sh(e,t){yi=ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}var ka={readContext:bt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},rv={readContext:bt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Qd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4194308,4,th.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tv.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:qd,useDebugValue:Eu,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=qd(!1),t=e[0];return e=ev.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=It();if(Ee){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),je===null)throw Error(H(349));(Zn&30)!==0||Yp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qd(Qp.bind(null,r,o,e),[e]),r.flags|=2048,ji(9,qp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=It(),t=je.identifierPrefix;if(Ee){var n=Xt,r=Qt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},iv={readContext:bt,useCallback:rh,useContext:bt,useEffect:ku,useImperativeHandle:nh,useInsertionEffect:Jp,useLayoutEffect:eh,useMemo:ih,useReducer:Hl,useRef:Zp,useState:function(){return Hl(Di)},useDebugValue:Eu,useDeferredValue:function(e){var t=kt();return oh(t,$e.memoizedState,e)},useTransition:function(){var e=Hl(Di)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Wp,useSyncExternalStore:Gp,useId:ah,unstable_isNewReconciler:!1},ov={readContext:bt,useCallback:rh,useContext:bt,useEffect:ku,useImperativeHandle:nh,useInsertionEffect:Jp,useLayoutEffect:eh,useMemo:ih,useReducer:Vl,useRef:Zp,useState:function(){return Vl(Di)},useDebugValue:Eu,useDeferredValue:function(e){var t=kt();return $e===null?t.memoizedState=e:oh(t,$e.memoizedState,e)},useTransition:function(){var e=Vl(Di)[0],t=kt().memoizedState;return[e,t]},useMutableSource:Wp,useSyncExternalStore:Gp,useId:ah,unstable_isNewReconciler:!1};function Dr(e,t){try{var n="",r=t;do n+=Am(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var av=typeof WeakMap=="function"?WeakMap:Map;function uh(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ca||(Ca=!0,vc=r),lc(e,t)},n}function dh(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lc(e,t),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new av;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xv.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zd(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var lv=rn.ReactCurrentOwner,rt=!1;function Ke(e,t,n,r){t.child=e===null?Vp(t,null,n,r):Ir(t,e.child,n,r)}function Jd(e,t,n,r,i){n=n.render;var o=t.ref;return Or(t,i),r=Su(e,t,n,r,o,i),n=bu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&n&&cu(t),t.flags|=1,Ke(e,t,r,i),t.child)}function ef(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Lu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fh(e,t,o,r,i)):(e=ea(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:zi,n(a,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=Tn(o,r),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zi(o,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return sc(e,t,n,r,i)}function ph(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Sr,lt),lt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Sr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Sr,lt),lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Sr,lt),lt|=r;return Ke(e,t,i,n),t.child}function hh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sc(e,t,n,r,i){var o=ot(n)?Xn:qe.current;return o=$r(t,o),Or(t,i),n=Su(e,t,n,r,o,i),r=bu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&r&&cu(t),t.flags|=1,Ke(e,t,n,i),t.child)}function tf(e,t,n,r,i){if(ot(n)){var o=!0;ma(t)}else o=!1;if(Or(t,i),t.stateNode===null)Ko(e,t),Bp(t,n,r),ac(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bt(c):(c=ot(n)?Xn:qe.current,c=$r(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&Gd(t,a,r,c),dn=!1;var h=t.memoizedState;a.state=h,xa(t,r,a,i),s=t.memoizedState,l!==r||h!==s||it.current||dn?(typeof u=="function"&&(oc(t,n,u,r),s=t.memoizedState),(l=dn||Wd(t,n,l,r,h,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jp(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ct(t.type,l),a.props=c,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=bt(s):(s=ot(n)?Xn:qe.current,s=$r(t,s));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Gd(t,a,r,s),dn=!1,h=t.memoizedState,a.state=h,xa(t,r,a,i);var y=t.memoizedState;l!==d||h!==y||it.current||dn?(typeof v=="function"&&(oc(t,n,v,r),y=t.memoizedState),(c=dn||Wd(t,n,c,r,h,y,s)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return cc(e,t,n,r,o,i)}function cc(e,t,n,r,i,o){hh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Fd(t,n,!1),nn(e,t,o);r=t.stateNode,lv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ir(t,e.child,null,o),t.child=Ir(t,null,l,o)):Ke(e,t,l,o),t.memoizedState=r.state,i&&Fd(t,n,!0),t.child}function mh(e){var t=e.stateNode;t.pendingContext?jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jd(e,t.context,!1),vu(e,t.containerInfo)}function nf(e,t,n,r,i){return Nr(),du(i),t.flags|=256,Ke(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function gh(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(_e,i&1),e===null)return rc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ka(a,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=dc(n),t.memoizedState=uc,e):Cu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return sv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Tn(l,o):(o=qn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?dc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=uc,r}return o=e.child,e=o.sibling,r=Tn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cu(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&du(r),Ir(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(H(422))),_o(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ka({mode:"visible",children:r.children},i,0,null),o=qn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Ir(t,e.child,null,a),t.child.memoizedState=dc(a),t.memoizedState=uc,o);if((t.mode&1)===0)return _o(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(H(419)),r=Ul(o,r,void 0),_o(e,t,a,r)}if(l=(a&e.childLanes)!==0,rt||l){if(r=je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),zt(r,e,i,-1))}return zu(),r=Ul(Error(H(421))),_o(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ut=bn(i.nextSibling),dt=t,Ee=!0,_t=null,e!==null&&(yt[wt++]=Qt,yt[wt++]=Xt,yt[wt++]=Kn,Qt=e.id,Xt=e.overflow,Kn=t),t=Cu(t,r.children),t.flags|=4096,t)}function rf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ic(e.return,t,n)}function Wl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ke(e,t,r.children,n),r=_e.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,n,t);else if(e.tag===19)rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(_e,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Sa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Sa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,o);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cv(e,t,n){switch(t.tag){case 3:mh(t),Nr();break;case 5:Up(t);break;case 1:ot(t.type)&&ma(t);break;case 4:vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(ya,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(_e,_e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?gh(e,t,n):(ge(_e,_e.current&1),e=nn(e,t,n),e!==null?e.sibling:null);ge(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return vh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,ph(e,t,n)}return nn(e,t,n)}var yh,fc,wh,xh;yh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fc=function(){};wh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Ht.current);var o=null;switch(n){case"input":i=$s(e,i),r=$s(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=Rs(e,i),r=Rs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}js(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ei.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ve("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};xh=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uv(e,t,n){var r=t.pendingProps;switch(uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return ot(t.type)&&ha(),Ge(t),null;case 3:return r=t.stateNode,Rr(),we(it),we(qe),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_t!==null&&(xc(_t),_t=null))),fc(e,t),Ge(t),null;case 5:yu(t);var i=Wn(Ii.current);if(n=t.type,e!==null&&t.stateNode!=null)wh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return Ge(t),null}if(e=Wn(Ht.current),Co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[$i]=o,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)ve(ui[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":fd(r,o),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ve("invalid",r);break;case"textarea":hd(r,o),ve("invalid",r)}js(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Eo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Eo(r.textContent,l,e),i=["children",""+l]):Ei.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ve("scroll",r)}switch(n){case"input":go(r),pd(r,o,!0);break;case"textarea":go(r),md(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=pa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Y0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Dt]=t,e[$i]=r,yh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fs(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)ve(ui[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":fd(e,r),i=$s(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ve("invalid",e);break;case"textarea":hd(e,r),i=Rs(e,r),ve("invalid",e);break;default:i=r}js(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?X0(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&q0(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ci(e,s):typeof s=="number"&&Ci(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ve("scroll",e):s!=null&&Qc(e,o,s,a))}switch(n){case"input":go(e),pd(e,r,!1);break;case"textarea":go(e),md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)xh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=Wn(Ii.current),Wn(Ht.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Ge(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rp(),Nr(),t.flags|=98560,o=!1;else if(o=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Dt]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),o=!1}else _t!==null&&(xc(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Ne===0&&(Ne=3):zu())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Rr(),fc(e,t),e===null&&Li(t.stateNode.containerInfo),Ge(t),null;case 10:return hu(t.type._context),Ge(t),null;case 17:return ot(t.type)&&ha(),Ge(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return Ge(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ti(o,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Sa(e),a!==null){for(t.flags|=128,ti(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Le()>jr&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304)}else{if(!r)if(e=Sa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ee)return Ge(t),null}else 2*Le()-o.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,n=_e.current,ge(_e,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(lt&1073741824)!==0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function dv(e,t){switch(uu(t),t.tag){case 1:return ot(t.type)&&ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),we(it),we(qe),wu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return yu(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Rr(),null;case 10:return hu(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Po=!1,Ye=!1,fv=typeof WeakSet=="function"?WeakSet:Set,K=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function pc(e,t,n){try{n()}catch(r){ze(e,t,r)}}var of=!1;function pv(e,t){if(Xs=ua,e=Ep(),su(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===n&&++c===i&&(l=a),h===o&&++u===r&&(s=a),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ks={focusedElem:e,selectionRange:n},ua=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,E=y.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ct(t.type,x),E);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(w){ze(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return y=of,of=!1,y}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pc(t,n,o)}i=i.next}while(i!==r)}}function Qa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sh(e){var t=e.alternate;t!==null&&(e.alternate=null,Sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[$i],delete t[ec],delete t[Qg],delete t[Xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bh(e){return e.tag===5||e.tag===3||e.tag===4}function af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(mc(e,t,n),e=e.sibling;e!==null;)mc(e,t,n),e=e.sibling}function gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}var Be=null,Tt=!1;function an(e,t,n){for(n=n.child;n!==null;)kh(e,t,n),n=n.sibling}function kh(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Ba,n)}catch{}switch(n.tag){case 5:Ye||xr(n,t);case 6:var r=Be,i=Tt;Be=null,an(e,t,n),Be=r,Tt=i,Be!==null&&(Tt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Tt?(e=Be,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),Oi(e)):Dl(Be,n.stateNode));break;case 4:r=Be,i=Tt,Be=n.stateNode.containerInfo,Tt=!0,an(e,t,n),Be=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&pc(n,t,a),i=i.next}while(i!==r)}an(e,t,n);break;case 1:if(!Ye&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,an(e,t,n),Ye=r):an(e,t,n);break;default:an(e,t,n)}}function lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fv),t.forEach(function(r){var i=bv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Tt=!1;break e;case 3:Be=l.stateNode.containerInfo,Tt=!0;break e;case 4:Be=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(Be===null)throw Error(H(160));kh(o,a,i),Be=null,Tt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){ze(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eh(t,e),t=t.sibling}function Eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),$t(e),r&4){try{wi(3,e,e.return),Qa(3,e)}catch(x){ze(e,e.return,x)}try{wi(5,e,e.return)}catch(x){ze(e,e.return,x)}}break;case 1:Et(t,e),$t(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(Et(t,e),$t(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(x){ze(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&W0(i,o),Fs(l,a);var c=Fs(l,o);for(a=0;a<s.length;a+=2){var u=s[a],d=s[a+1];u==="style"?X0(i,d):u==="dangerouslySetInnerHTML"?q0(i,d):u==="children"?Ci(i,d):Qc(i,u,d,c)}switch(l){case"input":Ns(i,o);break;case"textarea":G0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Cr(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Cr(i,!!o.multiple,o.defaultValue,!0):Cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[$i]=o}catch(x){ze(e,e.return,x)}}break;case 6:if(Et(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ze(e,e.return,x)}}break;case 3:if(Et(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(x){ze(e,e.return,x)}break;case 4:Et(t,e),$t(e);break;case 13:Et(t,e),$t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pu=Le())),r&4&&lf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(c=Ye)||u,Et(t,e),Ye=c):Et(t,e),$t(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&(e.mode&1)!==0)for(K=e,u=e.child;u!==null;){for(d=K=u;K!==null;){switch(h=K,v=h.child,h.tag){case 0:case 11:case 14:case 15:wi(4,h,h.return);break;case 1:xr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ze(r,n,x)}}break;case 5:xr(h,h.return);break;case 22:if(h.memoizedState!==null){cf(d);continue}}v!==null?(v.return=h,K=v):cf(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Q0("display",a))}catch(x){ze(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ze(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Et(t,e),$t(e),r&4&&lf(e);break;case 21:break;default:Et(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bh(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ci(i,""),r.flags&=-33);var o=af(e);gc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=af(e);mc(e,l,a);break;default:throw Error(H(161))}}catch(s){ze(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hv(e,t,n){K=e,Ch(e)}function Ch(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Po;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ye;l=Po;var c=Ye;if(Po=a,(Ye=s)&&!c)for(K=i;K!==null;)a=K,s=a.child,a.tag===22&&a.memoizedState!==null?uf(i):s!==null?(s.return=a,K=s):uf(i);for(;o!==null;)K=o,Ch(o),o=o.sibling;K=i,Po=l,Ye=c}sf(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,K=o):sf(e)}}function sf(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ye||Qa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ud(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ud(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Oi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ye||t.flags&512&&hc(t)}catch(h){ze(t,t.return,h)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function cf(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function uf(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qa(4,t)}catch(s){ze(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ze(t,i,s)}}var o=t.return;try{hc(t)}catch(s){ze(t,o,s)}break;case 5:var a=t.return;try{hc(t)}catch(s){ze(t,a,s)}}}catch(s){ze(t,t.return,s)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var mv=Math.ceil,Ea=rn.ReactCurrentDispatcher,Tu=rn.ReactCurrentOwner,St=rn.ReactCurrentBatchConfig,fe=0,je=null,Ae=null,He=0,lt=0,Sr=$n(0),Ne=0,Fi=null,Jn=0,Xa=0,_u=0,xi=null,nt=null,Pu=0,jr=1/0,Yt=null,Ca=!1,vc=null,En=null,Oo=!1,mn=null,Ta=0,Si=0,yc=null,Zo=-1,Jo=0;function Je(){return(fe&6)!==0?Le():Zo!==-1?Zo:Zo=Le()}function Cn(e){return(e.mode&1)===0?1:(fe&2)!==0&&He!==0?He&-He:Zg.transition!==null?(Jo===0&&(Jo=sp()),Jo):(e=pe,e!==0||(e=window.event,e=e===void 0?16:mp(e.type)),e)}function zt(e,t,n,r){if(50<Si)throw Si=0,yc=null,Error(H(185));qi(e,n,r),((fe&2)===0||e!==je)&&(e===je&&((fe&2)===0&&(Xa|=n),Ne===4&&pn(e,He)),at(e,r),n===1&&fe===0&&(t.mode&1)===0&&(jr=Le()+500,Ga&&Nn()))}function at(e,t){var n=e.callbackNode;Zm(e,t);var r=ca(e,e===je?He:0);if(r===0)n!==null&&yd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yd(n),t===1)e.tag===0?Kg(df.bind(null,e)):$p(df.bind(null,e)),Yg(function(){(fe&6)===0&&Nn()}),n=null;else{switch(cp(r)){case 1:n=eu;break;case 4:n=ap;break;case 16:n=sa;break;case 536870912:n=lp;break;default:n=sa}n=Ah(n,Th.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Th(e,t){if(Zo=-1,Jo=0,(fe&6)!==0)throw Error(H(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=ca(e,e===je?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=_a(e,r);else{t=r;var i=fe;fe|=2;var o=Ph();(je!==e||He!==t)&&(Yt=null,jr=Le()+500,Yn(e,t));do try{yv();break}catch(l){_h(e,l)}while(1);pu(),Ea.current=o,fe=i,Ae!==null?t=0:(je=null,He=0,t=Ne)}if(t!==0){if(t===2&&(i=Ws(e),i!==0&&(r=i,t=wc(e,i))),t===1)throw n=Fi,Yn(e,0),pn(e,r),at(e,Le()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!gv(i)&&(t=_a(e,r),t===2&&(o=Ws(e),o!==0&&(r=o,t=wc(e,o))),t===1))throw n=Fi,Yn(e,0),pn(e,r),at(e,Le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:Bn(e,nt,Yt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Pu+500-Le(),10<t)){if(ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Js(Bn.bind(null,e,nt,Yt),t);break}Bn(e,nt,Yt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mv(r/1960))-r,10<r){e.timeoutHandle=Js(Bn.bind(null,e,nt,Yt),r);break}Bn(e,nt,Yt);break;case 5:Bn(e,nt,Yt);break;default:throw Error(H(329))}}}return at(e,Le()),e.callbackNode===n?Th.bind(null,e):null}function wc(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=_a(e,t),e!==2&&(t=nt,nt=n,t!==null&&xc(t)),e}function xc(e){nt===null?nt=e:nt.push.apply(nt,e)}function gv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~_u,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function df(e){if((fe&6)!==0)throw Error(H(327));Mr();var t=ca(e,0);if((t&1)===0)return at(e,Le()),null;var n=_a(e,t);if(e.tag!==0&&n===2){var r=Ws(e);r!==0&&(t=r,n=wc(e,r))}if(n===1)throw n=Fi,Yn(e,0),pn(e,t),at(e,Le()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,nt,Yt),at(e,Le()),null}function Ou(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(jr=Le()+500,Ga&&Nn())}}function er(e){mn!==null&&mn.tag===0&&(fe&6)===0&&Mr();var t=fe;fe|=1;var n=St.transition,r=pe;try{if(St.transition=null,pe=1,e)return e()}finally{pe=r,St.transition=n,fe=t,(fe&6)===0&&Nn()}}function Mu(){lt=Sr.current,we(Sr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gg(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:Rr(),we(it),we(qe),wu();break;case 5:yu(r);break;case 4:Rr();break;case 13:we(_e);break;case 19:we(_e);break;case 10:hu(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(je=e,Ae=e=Tn(e.current,null),He=lt=t,Ne=0,Fi=null,_u=Xa=Jn=0,nt=xi=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Un=null}return e}function _h(e,t){do{var n=Ae;try{if(pu(),Qo.current=ka,ba){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ba=!1}if(Zn=0,Re=$e=Pe=null,yi=!1,Ri=0,Tu.current=null,n===null||n.return===null){Ne=1,Fi=t,Ae=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=He,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if((u.mode&1)===0&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=Kd(a);if(v!==null){v.flags&=-257,Zd(v,a,l,o,t),v.mode&1&&Xd(o,c,t),t=v,s=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(s),t.updateQueue=x}else y.add(s);break e}else{if((t&1)===0){Xd(o,c,t),zu();break e}s=Error(H(426))}}else if(Ee&&l.mode&1){var E=Kd(a);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Zd(E,a,l,o,t),du(Dr(s,l));break e}}o=s=Dr(s,l),Ne!==4&&(Ne=2),xi===null?xi=[o]:xi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=uh(o,s,t);Vd(o,g);break e;case 1:l=s;var f=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(En===null||!En.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=dh(o,l,t);Vd(o,w);break e}}o=o.return}while(o!==null)}Mh(n)}catch(b){t=b,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Ph(){var e=Ea.current;return Ea.current=ka,e===null?ka:e}function zu(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),je===null||(Jn&268435455)===0&&(Xa&268435455)===0||pn(je,He)}function _a(e,t){var n=fe;fe|=2;var r=Ph();(je!==e||He!==t)&&(Yt=null,Yn(e,t));do try{vv();break}catch(i){_h(e,i)}while(1);if(pu(),fe=n,Ea.current=r,Ae!==null)throw Error(H(261));return je=null,He=0,Ne}function vv(){for(;Ae!==null;)Oh(Ae)}function yv(){for(;Ae!==null&&!Vm();)Oh(Ae)}function Oh(e){var t=Lh(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Mh(e):Ae=t,Tu.current=null}function Mh(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=uv(n,t,lt),n!==null){Ae=n;return}}else{if(n=dv(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function Bn(e,t,n){var r=pe,i=St.transition;try{St.transition=null,pe=1,wv(e,t,n,r)}finally{St.transition=i,pe=r}return null}function wv(e,t,n,r){do Mr();while(mn!==null);if((fe&6)!==0)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jm(e,o),e===je&&(Ae=je=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oo||(Oo=!0,Ah(sa,function(){return Mr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=St.transition,St.transition=null;var a=pe;pe=1;var l=fe;fe|=4,Tu.current=null,pv(e,n),Eh(n,e),jg(Ks),ua=!!Xs,Ks=Xs=null,e.current=n,hv(n),Um(),fe=l,pe=a,St.transition=o}else e.current=n;if(Oo&&(Oo=!1,mn=e,Ta=i),o=e.pendingLanes,o===0&&(En=null),Ym(n.stateNode),at(e,Le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ca)throw Ca=!1,e=vc,vc=null,e;return(Ta&1)!==0&&e.tag!==0&&Mr(),o=e.pendingLanes,(o&1)!==0?e===yc?Si++:(Si=0,yc=e):Si=0,Nn(),null}function Mr(){if(mn!==null){var e=cp(Ta),t=St.transition,n=pe;try{if(St.transition=null,pe=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,Ta=0,(fe&6)!==0)throw Error(H(331));var i=fe;for(fe|=4,K=e.current;K!==null;){var o=K,a=o.child;if((K.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(K=c;K!==null;){var u=K;switch(u.tag){case 0:case 11:case 15:wi(8,u,o)}var d=u.child;if(d!==null)d.return=u,K=d;else for(;K!==null;){u=K;var h=u.sibling,v=u.return;if(Sh(u),u===c){K=null;break}if(h!==null){h.return=v,K=h;break}K=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}K=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,K=a;else e:for(;K!==null;){if(o=K,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,K=g;break e}K=o.return}}var f=e.current;for(K=f;K!==null;){a=K;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,K=m;else e:for(a=f;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Qa(9,l)}}catch(b){ze(l,l.return,b)}if(l===a){K=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,K=w;break e}K=l.return}}if(fe=i,Nn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Ba,e)}catch{}r=!0}return r}finally{pe=n,St.transition=t}}return!1}function ff(e,t,n){t=Dr(n,t),t=uh(e,t,1),e=kn(e,t,1),t=Je(),e!==null&&(qi(e,1,t),at(e,t))}function ze(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=Dr(n,e),e=dh(t,e,1),t=kn(t,e,1),e=Je(),t!==null&&(qi(t,1,e),at(t,e));break}}t=t.return}}function xv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(He&n)===n&&(Ne===4||Ne===3&&(He&130023424)===He&&500>Le()-Pu?Yn(e,0):_u|=n),at(e,t)}function zh(e,t){t===0&&((e.mode&1)===0?t=1:(t=wo,wo<<=1,(wo&130023424)===0&&(wo=4194304)));var n=Je();e=tn(e,t),e!==null&&(qi(e,t,n),at(e,n))}function Sv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zh(e,n)}function bv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),zh(e,n)}var Lh;Lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,cv(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Ee&&(t.flags&1048576)!==0&&Np(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var i=$r(t,qe.current);Or(t,n),i=Su(null,t,r,e,i,n);var o=bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,ma(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gu(t),i.updater=Ya,t.stateNode=i,i._reactInternals=t,ac(t,r,e,n),t=cc(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&cu(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ev(r),e=Ct(r,e),i){case 0:t=sc(null,t,r,e,n);break e;case 1:t=tf(null,t,r,e,n);break e;case 11:t=Jd(null,t,r,e,n);break e;case 14:t=ef(null,t,r,Ct(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),sc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),tf(e,t,r,i,n);case 3:e:{if(mh(t),e===null)throw Error(H(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jp(e,t),xa(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(H(423)),t),t=nf(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(H(424)),t),t=nf(e,t,r,n,i);break e}else for(ut=bn(t.stateNode.containerInfo.firstChild),dt=t,Ee=!0,_t=null,n=Vp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===i){t=nn(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return Up(t),e===null&&rc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Zs(r,i)?a=null:o!==null&&Zs(r,o)&&(t.flags|=32),hh(e,t),Ke(e,t,a,n),t.child;case 6:return e===null&&rc(t),null;case 13:return gh(e,t,n);case 4:return vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Jd(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ge(ya,r._currentValue),r._currentValue=a,o!==null)if(Lt(o.value,a)){if(o.children===i.children&&!it.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Zt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ic(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(H(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ic(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Or(t,n),i=bt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),ef(e,t,r,i,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),Ko(e,t),t.tag=1,ot(r)?(e=!0,ma(t)):e=!1,Or(t,n),Bp(t,r,i),ac(t,r,i,n),cc(null,t,r,!0,e,n);case 19:return vh(e,t,n);case 22:return ph(e,t,n)}throw Error(H(156,t.tag))};function Ah(e,t){return op(e,t)}function kv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new kv(e,t,n,r)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ev(e){if(typeof e=="function")return Lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kc)return 11;if(e===Zc)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Lu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case dr:return qn(n.children,i,o,t);case Xc:a=8,i|=8;break;case Ms:return e=xt(12,n,t,i|2),e.elementType=Ms,e.lanes=o,e;case zs:return e=xt(13,n,t,i),e.elementType=zs,e.lanes=o,e;case Ls:return e=xt(19,n,t,i),e.elementType=Ls,e.lanes=o,e;case H0:return Ka(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F0:a=10;break e;case B0:a=9;break e;case Kc:a=11;break e;case Zc:a=14;break e;case un:a=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=xt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function Ka(e,t,n,r){return e=xt(22,e,r,t),e.elementType=H0,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,o,a,l,s){return e=new Cv(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=xt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(o),e}function Tv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $h(e){if(!e)return zn;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(ot(n))return Ap(e,n,t)}return t}function Nh(e,t,n,r,i,o,a,l,s){return e=Au(n,r,!0,e,i,o,a,l,s),e.context=$h(null),n=e.current,r=Je(),i=Cn(n),o=Zt(r,i),o.callback=t??null,kn(n,o,i),e.current.lanes=i,qi(e,i,r),at(e,r),e}function Za(e,t,n,r){var i=t.current,o=Je(),a=Cn(i);return n=$h(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,a),e!==null&&(zt(e,i,a,o),qo(e,i,a)),a}function Pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){pf(e,t),(e=e.alternate)&&pf(e,t)}function _v(){return null}var Ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}Ja.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Za(e,t,null,null)};Ja.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Za(null,e,null,null)}),t[en]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fn.length&&t!==0&&t<fn[n].priority;n++);fn.splice(n,0,e),n===0&&hp(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hf(){}function Pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Pa(a);o.call(c)}}var a=Nh(t,r,e,0,null,!1,!1,"",hf);return e._reactRootContainer=a,e[en]=a.current,Li(e.nodeType===8?e.parentNode:e),er(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Pa(s);l.call(c)}}var s=Au(e,0,!1,null,null,!1,!1,"",hf);return e._reactRootContainer=s,e[en]=s.current,Li(e.nodeType===8?e.parentNode:e),er(function(){Za(t,s,n,r)}),s}function tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Pa(a);l.call(s)}}Za(t,a,e,i)}else a=Pv(n,t,e,i,r);return Pa(a)}up=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ci(t.pendingLanes);n!==0&&(tu(t,n|1),at(t,Le()),(fe&6)===0&&(jr=Le()+500,Nn()))}break;case 13:er(function(){var r=tn(e,1);if(r!==null){var i=Je();zt(r,e,1,i)}}),$u(e,1)}};nu=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=Je();zt(t,e,134217728,n)}$u(e,134217728)}};dp=function(e){if(e.tag===13){var t=Cn(e),n=tn(e,t);if(n!==null){var r=Je();zt(n,e,t,r)}$u(e,t)}};fp=function(){return pe};pp=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Hs=function(e,t,n){switch(t){case"input":if(Ns(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wa(r);if(!i)throw Error(H(90));U0(r),Ns(r,i)}}}break;case"textarea":G0(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};J0=Ou;ep=er;var Ov={usingClientEntryPoint:!1,Events:[Xi,mr,Wa,K0,Z0,Ou]},ni={findFiberByHostInstance:Vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mv={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rp(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Ba=Mo.inject(Mv),Bt=Mo}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(t))throw Error(H(200));return Tv(e,t,null,n)};pt.createRoot=function(e,t){if(!Iu(e))throw Error(H(299));var n=!1,r="",i=Ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,Li(e.nodeType===8?e.parentNode:e),new Nu(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=rp(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return er(e)};pt.hydrate=function(e,t,n){if(!el(t))throw Error(H(200));return tl(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Iu(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nh(t,null,e,1,n??null,i,!1,o,a),e[en]=t.current,Li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ja(t)};pt.render=function(e,t,n){if(!el(t))throw Error(H(200));return tl(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!el(e))throw Error(H(40));return e._reactRootContainer?(er(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};pt.unstable_batchedUpdates=Ou;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return tl(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=pt})(Gc);var mf=Gc.exports;Ps.createRoot=mf.createRoot,Ps.hydrateRoot=mf.hydrateRoot;var Me={},Ru={},Zi={},Ji={},Rh="Expected a function",gf=0/0,zv="[object Symbol]",Lv=/^\s+|\s+$/g,Av=/^[-+]0x[0-9a-f]+$/i,$v=/^0b[01]+$/i,Nv=/^0o[0-7]+$/i,Iv=parseInt,Rv=typeof ai=="object"&&ai&&ai.Object===Object&&ai,Dv=typeof self=="object"&&self&&self.Object===Object&&self,jv=Rv||Dv||Function("return this")(),Fv=Object.prototype,Bv=Fv.toString,Hv=Math.max,Vv=Math.min,ql=function(){return jv.Date.now()};function Uv(e,t,n){var r,i,o,a,l,s,c=0,u=!1,d=!1,h=!0;if(typeof e!="function")throw new TypeError(Rh);t=vf(t)||0,Oa(n)&&(u=!!n.leading,d="maxWait"in n,o=d?Hv(vf(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function v(_){var $=r,M=i;return r=i=void 0,c=_,a=e.apply(M,$),a}function y(_){return c=_,l=setTimeout(g,t),u?v(_):a}function x(_){var $=_-s,M=_-c,T=t-$;return d?Vv(T,o-M):T}function E(_){var $=_-s,M=_-c;return s===void 0||$>=t||$<0||d&&M>=o}function g(){var _=ql();if(E(_))return f(_);l=setTimeout(g,x(_))}function f(_){return l=void 0,h&&r?v(_):(r=i=void 0,a)}function m(){l!==void 0&&clearTimeout(l),c=0,r=s=i=l=void 0}function w(){return l===void 0?a:f(ql())}function b(){var _=ql(),$=E(_);if(r=arguments,i=this,s=_,$){if(l===void 0)return y(s);if(d)return l=setTimeout(g,t),v(s)}return l===void 0&&(l=setTimeout(g,t)),a}return b.cancel=m,b.flush=w,b}function Wv(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(Rh);return Oa(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Uv(e,t,{leading:r,maxWait:t,trailing:i})}function Oa(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Gv(e){return!!e&&typeof e=="object"}function Yv(e){return typeof e=="symbol"||Gv(e)&&Bv.call(e)==zv}function vf(e){if(typeof e=="number")return e;if(Yv(e))return gf;if(Oa(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Oa(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Lv,"");var n=$v.test(e);return n||Nv.test(e)?Iv(e.slice(2),n?2:8):Av.test(e)?gf:+e}var qv=Wv,eo={};Object.defineProperty(eo,"__esModule",{value:!0});eo.addPassiveEventListener=function(t,n,r){var i=function(){var o=!1;try{var a=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,a)}catch{}return o}();t.addEventListener(n,r,i?{passive:!0}:!1)};eo.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Ji,"__esModule",{value:!0});var Qv=qv,Xv=Zv(Qv),Kv=eo;function Zv(e){return e&&e.__esModule?e:{default:e}}var Jv=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Xv.default)(t,n)},Ce={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=Jv(function(i){Ce.scrollHandler(t)},n);Ce.scrollSpyContainers.push(t),(0,Kv.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Ce.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Ce.scrollSpyContainers[Ce.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Ce.currentPositionX(t),Ce.currentPositionY(t))})},addStateHandler:function(t){Ce.spySetState.push(t)},addSpyHandler:function(t,n){var r=Ce.scrollSpyContainers[Ce.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Ce.currentPositionX(n),Ce.currentPositionY(n))},updateStates:function(){Ce.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Ce.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Ce.spySetState&&Ce.spySetState.length&&Ce.spySetState.indexOf(t)>-1&&Ce.spySetState.splice(Ce.spySetState.indexOf(t),1),document.removeEventListener("scroll",Ce.scrollHandler)},update:function(){return Ce.scrollSpyContainers.forEach(function(t){return Ce.scrollHandler(t)})}};Ji.default=Ce;var Wr={},to={};Object.defineProperty(to,"__esModule",{value:!0});var e2=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},t2=function(){return window.location.hash.replace(/^#/,"")},n2=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},r2=function(t){return getComputedStyle(t).position!=="static"},Ql=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},i2=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r2(t)){if(n.offsetParent!==t){var i=function(u){return u===t||u===document},o=Ql(n,i),a=o.offsetTop,l=o.offsetParent;if(l!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(u){return u===document};return Ql(n,s).offsetTop-Ql(t,s).offsetTop};to.default={updateHash:e2,getHash:t2,filterElementInContainer:n2,scrollOffset:i2};var nl={},Du={};Object.defineProperty(Du,"__esModule",{value:!0});Du.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var ju={};Object.defineProperty(ju,"__esModule",{value:!0});var o2=eo,a2=["mousedown","mousewheel","touchmove","keydown"];ju.default={subscribe:function(t){return typeof document<"u"&&a2.forEach(function(n){return(0,o2.addPassiveEventListener)(document,n,t)})}};var no={};Object.defineProperty(no,"__esModule",{value:!0});var Sc={registered:{},scrollEvent:{register:function(t,n){Sc.registered[t]=n},remove:function(t){Sc.registered[t]=null}}};no.default=Sc;Object.defineProperty(nl,"__esModule",{value:!0});var l2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s2=to;rl(s2);var c2=Du,yf=rl(c2),u2=ju,d2=rl(u2),f2=no,Rt=rl(f2);function rl(e){return e&&e.__esModule?e:{default:e}}var Dh=function(t){return yf.default[t.smooth]||yf.default.defaultEasing},p2=function(t){return typeof t=="function"?t:function(){return t}},h2=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},bc=function(){return h2()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),jh=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Fh=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},Bh=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},m2=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},g2=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},v2=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){Rt.default.registered.end&&Rt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);bc.call(window,o);return}Rt.default.registered.end&&Rt.default.registered.end(i.to,i.target,i.currentPosition)},Fu=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},ro=function(t,n,r,i){if(n.data=n.data||jh(),window.clearTimeout(n.data.delayTimeout),d2.default.subscribe(function(){n.data.cancel=!0}),Fu(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Fh(n):Bh(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Rt.default.registered.end&&Rt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=p2(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var o=Dh(n),a=v2.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Rt.default.registered.begin&&Rt.default.registered.begin(n.data.to,n.data.target),bc.call(window,a)},n.delay);return}Rt.default.registered.begin&&Rt.default.registered.begin(n.data.to,n.data.target),bc.call(window,a)},il=function(t){return t=l2({},t),t.data=t.data||jh(),t.absolute=!0,t},y2=function(t){ro(0,il(t))},w2=function(t,n){ro(t,il(n))},x2=function(t){t=il(t),Fu(t),ro(t.horizontal?m2(t):g2(t),t)},S2=function(t,n){n=il(n),Fu(n);var r=n.horizontal?Fh(n):Bh(n);ro(t+r,n)};nl.default={animateTopScroll:ro,getAnimationType:Dh,scrollToTop:y2,scrollToBottom:x2,scrollTo:w2,scrollMore:S2};Object.defineProperty(Wr,"__esModule",{value:!0});var b2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k2=to,E2=Bu(k2),C2=nl,T2=Bu(C2),_2=no,zo=Bu(_2);function Bu(e){return e&&e.__esModule?e:{default:e}}var Lo={},wf=void 0;Wr.default={unmount:function(){Lo={}},register:function(t,n){Lo[t]=n},unregister:function(t){delete Lo[t]},get:function(t){return Lo[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return wf=t},getActiveLink:function(){return wf},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=b2({},n,{absolute:!1});var i=n.containerId,o=n.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,n.absolute=!0;var l=n.horizontal,s=E2.default.scrollOffset(a,r,l)+(n.offset||0);if(!n.smooth){zo.default.registered.begin&&zo.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):a.scrollTop=s,zo.default.registered.end&&zo.default.registered.end(t,r);return}T2.default.animateTopScroll(s,n,t,r)}};var io={exports:{}},P2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",O2=P2,M2=O2;function Hh(){}function Vh(){}Vh.resetWarningCache=Hh;var z2=function(){function e(r,i,o,a,l,s){if(s!==M2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Vh,resetWarningCache:Hh};return n.PropTypes=n,n};io.exports=z2();var ol={};Object.defineProperty(ol,"__esModule",{value:!0});var L2=to,Xl=A2(L2);function A2(e){return e&&e.__esModule?e:{default:e}}var $2={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return Xl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Xl.default.getHash()!==t&&Xl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};ol.default=$2;Object.defineProperty(Zi,"__esModule",{value:!0});var Ao=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N2=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),I2=A.exports,xf=oo(I2),R2=Ji,$o=oo(R2),D2=Wr,j2=oo(D2),F2=io.exports,be=oo(F2),B2=ol,ln=oo(B2);function oo(e){return e&&e.__esModule?e:{default:e}}function H2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V2(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function U2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Sf={to:be.default.string.isRequired,containerId:be.default.string,container:be.default.object,activeClass:be.default.string,activeStyle:be.default.object,spy:be.default.bool,horizontal:be.default.bool,smooth:be.default.oneOfType([be.default.bool,be.default.string]),offset:be.default.number,delay:be.default.number,isDynamic:be.default.bool,onClick:be.default.func,duration:be.default.oneOfType([be.default.number,be.default.func]),absolute:be.default.bool,onSetActive:be.default.func,onSetInactive:be.default.func,ignoreCancelEvents:be.default.bool,hashSpy:be.default.bool,saveHashHistory:be.default.bool,spyThrottle:be.default.number};Zi.default=function(e,t){var n=t||j2.default,r=function(o){U2(a,o);function a(l){H2(this,a);var s=V2(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return i.call(s),s.state={active:!1},s}return N2(a,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,c=this.props.container;return s&&!c?document.getElementById(s):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();$o.default.isMounted(s)||$o.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(ln.default.isMounted()||ln.default.mount(n),ln.default.mapContainer(this.props.to,s)),$o.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){$o.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var c={};this.state&&this.state.active?c=Ao({},this.props.style,this.props.activeStyle):c=Ao({},this.props.style);var u=Ao({},this.props);for(var d in Sf)u.hasOwnProperty(d)&&delete u[d];return u.className=s,u.style=c,u.onClick=this.handleClick,xf.default.createElement(e,u)}}]),a}(xf.default.PureComponent),i=function(){var a=this;this.scrollTo=function(l,s){n.scrollTo(l,Ao({},a.state,s))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(l,s){var c=a.getScrollSpyContainer();if(!(ln.default.isMounted()&&!ln.default.isInitialized())){var u=a.props.horizontal,d=a.props.to,h=null,v=void 0,y=void 0;if(u){var x=0,E=0,g=0;if(c.getBoundingClientRect){var f=c.getBoundingClientRect();g=f.left}if(!h||a.props.isDynamic){if(h=n.get(d),!h)return;var m=h.getBoundingClientRect();x=m.left-g+l,E=x+m.width}var w=l-a.props.offset;v=w>=Math.floor(x)&&w<Math.floor(E),y=w<Math.floor(x)||w>=Math.floor(E)}else{var b=0,_=0,$=0;if(c.getBoundingClientRect){var M=c.getBoundingClientRect();$=M.top}if(!h||a.props.isDynamic){if(h=n.get(d),!h)return;var T=h.getBoundingClientRect();b=T.top-$+s,_=b+T.height}var V=s-a.props.offset;v=V>=Math.floor(b)&&V<Math.floor(_),y=V<Math.floor(b)||V>=Math.floor(_)}var k=n.getActiveLink();if(y){if(d===k&&n.setActiveLink(void 0),a.props.hashSpy&&ln.default.getHash()===d){var C=a.props.saveHashHistory,R=C===void 0?!1:C;ln.default.changeHash("",R)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(d,h))}if(v&&(k!==d||a.state.active===!1)){n.setActiveLink(d);var j=a.props.saveHashHistory,X=j===void 0?!1:j;a.props.hashSpy&&ln.default.changeHash(d,X),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d,h))}}}};return r.propTypes=Sf,r.defaultProps={offset:0},r};Object.defineProperty(Ru,"__esModule",{value:!0});var W2=A.exports,bf=Uh(W2),G2=Zi,Y2=Uh(G2);function Uh(e){return e&&e.__esModule?e:{default:e}}function q2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kf(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Q2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var X2=function(e){Q2(t,e);function t(){var n,r,i,o;q2(this,t);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return o=(r=(i=kf(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(l))),i),i.render=function(){return bf.default.createElement("a",i.props,i.props.children)},r),kf(i,o)}return t}(bf.default.Component);Ru.default=(0,Y2.default)(X2);var Hu={};Object.defineProperty(Hu,"__esModule",{value:!0});var K2=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z2=A.exports,Ef=Wh(Z2),J2=Zi,ey=Wh(J2);function Wh(e){return e&&e.__esModule?e:{default:e}}function ty(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ny(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ry(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var iy=function(e){ry(t,e);function t(){return ty(this,t),ny(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return K2(t,[{key:"render",value:function(){return Ef.default.createElement("input",this.props,this.props.children)}}]),t}(Ef.default.Component);Hu.default=(0,ey.default)(iy);var Vu={},al={};Object.defineProperty(al,"__esModule",{value:!0});var oy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ay=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ly=A.exports,Cf=ll(ly),sy=Gc.exports;ll(sy);var cy=Wr,Tf=ll(cy),uy=io.exports,_f=ll(uy);function ll(e){return e&&e.__esModule?e:{default:e}}function dy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function py(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}al.default=function(e){var t=function(n){py(r,n);function r(i){dy(this,r);var o=fy(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return ay(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Tf.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Tf.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Cf.default.createElement(e,oy({},this.props,{parentBindings:this.childBindings}))}}]),r}(Cf.default.Component);return t.propTypes={name:_f.default.string,id:_f.default.string},t};Object.defineProperty(Vu,"__esModule",{value:!0});var Pf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hy=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),my=A.exports,Of=Uu(my),gy=al,vy=Uu(gy),yy=io.exports,Mf=Uu(yy);function Uu(e){return e&&e.__esModule?e:{default:e}}function wy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Sy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Gh=function(e){Sy(t,e);function t(){return wy(this,t),xy(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return hy(t,[{key:"render",value:function(){var r=this,i=Pf({},this.props);return i.parentBindings&&delete i.parentBindings,Of.default.createElement("div",Pf({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(Of.default.Component);Gh.propTypes={name:Mf.default.string,id:Mf.default.string};Vu.default=(0,vy.default)(Gh);var Kl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zf=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Lf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Af(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function $f(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var No=A.exports,Rn=Ji,Zl=Wr,Te=io.exports,sn=ol,Nf={to:Te.string.isRequired,containerId:Te.string,container:Te.object,activeClass:Te.string,spy:Te.bool,smooth:Te.oneOfType([Te.bool,Te.string]),offset:Te.number,delay:Te.number,isDynamic:Te.bool,onClick:Te.func,duration:Te.oneOfType([Te.number,Te.func]),absolute:Te.bool,onSetActive:Te.func,onSetInactive:Te.func,ignoreCancelEvents:Te.bool,hashSpy:Te.bool,spyThrottle:Te.number},by={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Zl,i=function(a){$f(l,a);function l(s){Lf(this,l);var c=Af(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,s));return o.call(c),c.state={active:!1},c}return zf(l,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Rn.isMounted(c)||Rn.mount(c,this.props.spyThrottle),this.props.hashSpy&&(sn.isMounted()||sn.mount(r),sn.mapContainer(this.props.to,c)),this.props.spy&&Rn.addStateHandler(this.stateHandler),Rn.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Rn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u=Kl({},this.props);for(var d in Nf)u.hasOwnProperty(d)&&delete u[d];return u.className=c,u.onClick=this.handleClick,No.createElement(t,u)}}]),l}(No.Component),o=function(){var l=this;this.scrollTo=function(s,c){r.scrollTo(s,Kl({},l.state,c))},this.handleClick=function(s){l.props.onClick&&l.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){r.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(s){var c=l.getScrollSpyContainer();if(!(sn.isMounted()&&!sn.isInitialized())){var u=l.props.to,d=null,h=0,v=0,y=0;if(c.getBoundingClientRect){var x=c.getBoundingClientRect();y=x.top}if(!d||l.props.isDynamic){if(d=r.get(u),!d)return;var E=d.getBoundingClientRect();h=E.top-y+s,v=h+E.height}var g=s-l.props.offset,f=g>=Math.floor(h)&&g<Math.floor(v),m=g<Math.floor(h)||g>=Math.floor(v),w=r.getActiveLink();if(m)return u===w&&r.setActiveLink(void 0),l.props.hashSpy&&sn.getHash()===u&&sn.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),Rn.updateStates();if(f&&w!==u)return r.setActiveLink(u),l.props.hashSpy&&sn.changeHash(u),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(u)),Rn.updateStates()}}};return i.propTypes=Nf,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){$f(i,r);function i(o){Lf(this,i);var a=Af(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return zf(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Zl.unregister(this.props.name)}},{key:"registerElems",value:function(a){Zl.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return No.createElement(t,Kl({},this.props,{parentBindings:this.childBindings}))}}]),i}(No.Component);return n.propTypes={name:Te.string,id:Te.string},n}},ky=by;Object.defineProperty(Me,"__esModule",{value:!0});Me.Helpers=Me.ScrollElement=Me.ScrollLink=Me.animateScroll=Me.scrollSpy=Me.Events=Me.scroller=Me.Element=Me.Button=r1=Me.Link=void 0;var Ey=Ru,Yh=Ut(Ey),Cy=Hu,qh=Ut(Cy),Ty=Vu,Qh=Ut(Ty),_y=Wr,Xh=Ut(_y),Py=no,Kh=Ut(Py),Oy=Ji,Zh=Ut(Oy),My=nl,Jh=Ut(My),zy=Zi,e1=Ut(zy),Ly=al,t1=Ut(Ly),Ay=ky,n1=Ut(Ay);function Ut(e){return e&&e.__esModule?e:{default:e}}var r1=Me.Link=Yh.default;Me.Button=qh.default;Me.Element=Qh.default;Me.scroller=Xh.default;Me.Events=Kh.default;Me.scrollSpy=Zh.default;Me.animateScroll=Jh.default;Me.ScrollLink=e1.default;Me.ScrollElement=t1.default;Me.Helpers=n1.default;Me.default={Link:Yh.default,Button:qh.default,Element:Qh.default,scroller:Xh.default,Events:Kh.default,scrollSpy:Zh.default,animateScroll:Jh.default,ScrollLink:e1.default,ScrollElement:t1.default,Helpers:n1.default};var i1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},If=ae.createContext&&ae.createContext(i1),_n=globalThis&&globalThis.__assign||function(){return _n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_n.apply(this,arguments)},$y=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function o1(e){return e&&e.map(function(t,n){return ae.createElement(t.tag,_n({key:n},t.attr),o1(t.child))})}function xe(e){return function(t){return ae.createElement(Ny,_n({attr:_n({},e.attr)},t),o1(e.child))}}function Ny(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=$y(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ae.createElement("svg",_n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:_n(_n({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ae.createElement("title",null,o),e.children)};return If!==void 0?ae.createElement(If.Consumer,null,function(n){return t(n)}):t(i1)}function Iy(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]})(e)}function a1(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(e)}function Ry(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function Dy(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function jy(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}function l1(e){return xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(e)}const At=A.exports.createContext(),s1=({children:e})=>{const t="dark",[n,r]=A.exports.useState(t),o={theme:n,handleTheme:a=>{a.target.innerHTML=="🌙"?(r("dark"),a.target.innerHTML="☀️"):(a.target.innerHTML="🌙",r("light"))}};return p(At.Provider,{value:o,children:e})};var sl={exports:{}},he={};var Fe=typeof Symbol=="function"&&Symbol.for,Wu=Fe?Symbol.for("react.element"):60103,Gu=Fe?Symbol.for("react.portal"):60106,cl=Fe?Symbol.for("react.fragment"):60107,ul=Fe?Symbol.for("react.strict_mode"):60108,dl=Fe?Symbol.for("react.profiler"):60114,fl=Fe?Symbol.for("react.provider"):60109,pl=Fe?Symbol.for("react.context"):60110,Yu=Fe?Symbol.for("react.async_mode"):60111,hl=Fe?Symbol.for("react.concurrent_mode"):60111,ml=Fe?Symbol.for("react.forward_ref"):60112,gl=Fe?Symbol.for("react.suspense"):60113,Fy=Fe?Symbol.for("react.suspense_list"):60120,vl=Fe?Symbol.for("react.memo"):60115,yl=Fe?Symbol.for("react.lazy"):60116,By=Fe?Symbol.for("react.block"):60121,Hy=Fe?Symbol.for("react.fundamental"):60117,Vy=Fe?Symbol.for("react.responder"):60118,Uy=Fe?Symbol.for("react.scope"):60119;function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wu:switch(e=e.type,e){case Yu:case hl:case cl:case dl:case ul:case gl:return e;default:switch(e=e&&e.$$typeof,e){case pl:case ml:case yl:case vl:case fl:return e;default:return t}}case Gu:return t}}}function c1(e){return mt(e)===hl}he.AsyncMode=Yu;he.ConcurrentMode=hl;he.ContextConsumer=pl;he.ContextProvider=fl;he.Element=Wu;he.ForwardRef=ml;he.Fragment=cl;he.Lazy=yl;he.Memo=vl;he.Portal=Gu;he.Profiler=dl;he.StrictMode=ul;he.Suspense=gl;he.isAsyncMode=function(e){return c1(e)||mt(e)===Yu};he.isConcurrentMode=c1;he.isContextConsumer=function(e){return mt(e)===pl};he.isContextProvider=function(e){return mt(e)===fl};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wu};he.isForwardRef=function(e){return mt(e)===ml};he.isFragment=function(e){return mt(e)===cl};he.isLazy=function(e){return mt(e)===yl};he.isMemo=function(e){return mt(e)===vl};he.isPortal=function(e){return mt(e)===Gu};he.isProfiler=function(e){return mt(e)===dl};he.isStrictMode=function(e){return mt(e)===ul};he.isSuspense=function(e){return mt(e)===gl};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cl||e===hl||e===dl||e===ul||e===gl||e===Fy||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===vl||e.$$typeof===fl||e.$$typeof===pl||e.$$typeof===ml||e.$$typeof===Hy||e.$$typeof===Vy||e.$$typeof===Uy||e.$$typeof===By)};he.typeOf=mt;(function(e){e.exports=he})(sl);function Wy(e){function t(W,G,Y,J,L){for(var te=0,F=0,se=0,ie=0,le,S,O=0,z=0,D,U=D=le=0,I=0,Q=0,me=0,oe=0,ar=Y.length,Wt=ar-1,Qe,re="",Se="",qr="",lr="",on;I<ar;){if(S=Y.charCodeAt(I),I===Wt&&F+ie+se+te!==0&&(F!==0&&(S=F===47?10:47),ie=se=te=0,ar++,Wt++),F+ie+se+te===0){if(I===Wt&&(0<Q&&(re=re.replace(h,"")),0<re.trim().length)){switch(S){case 32:case 9:case 59:case 13:case 10:break;default:re+=Y.charAt(I)}S=59}switch(S){case 123:for(re=re.trim(),le=re.charCodeAt(0),D=1,oe=++I;I<ar;){switch(S=Y.charCodeAt(I)){case 123:D++;break;case 125:D--;break;case 47:switch(S=Y.charCodeAt(I+1)){case 42:case 47:e:{for(U=I+1;U<Wt;++U)switch(Y.charCodeAt(U)){case 47:if(S===42&&Y.charCodeAt(U-1)===42&&I+2!==U){I=U+1;break e}break;case 10:if(S===47){I=U+1;break e}}I=U}}break;case 91:S++;case 40:S++;case 34:case 39:for(;I++<Wt&&Y.charCodeAt(I)!==S;);}if(D===0)break;I++}switch(D=Y.substring(oe,I),le===0&&(le=(re=re.replace(d,"").trim()).charCodeAt(0)),le){case 64:switch(0<Q&&(re=re.replace(h,"")),S=re.charCodeAt(1),S){case 100:case 109:case 115:case 45:Q=G;break;default:Q=ne}if(D=t(G,Q,D,S,L+1),oe=D.length,0<B&&(Q=n(ne,re,me),on=l(3,D,Q,G,R,C,oe,S,L,J),re=Q.join(""),on!==void 0&&(oe=(D=on.trim()).length)===0&&(S=0,D="")),0<oe)switch(S){case 115:re=re.replace(_,a);case 100:case 109:case 45:D=re+"{"+D+"}";break;case 107:re=re.replace(f,"$1 $2"),D=re+"{"+D+"}",D=X===1||X===2&&o("@"+D,3)?"@-webkit-"+D+"@"+D:"@"+D;break;default:D=re+D,J===112&&(D=(Se+=D,""))}else D="";break;default:D=t(G,n(G,re,me),D,J,L+1)}qr+=D,D=me=Q=U=le=0,re="",S=Y.charCodeAt(++I);break;case 125:case 59:if(re=(0<Q?re.replace(h,""):re).trim(),1<(oe=re.length))switch(U===0&&(le=re.charCodeAt(0),le===45||96<le&&123>le)&&(oe=(re=re.replace(" ",":")).length),0<B&&(on=l(1,re,G,W,R,C,Se.length,J,L,J))!==void 0&&(oe=(re=on.trim()).length)===0&&(re="\0\0"),le=re.charCodeAt(0),S=re.charCodeAt(1),le){case 0:break;case 64:if(S===105||S===99){lr+=re+Y.charAt(I);break}default:re.charCodeAt(oe-1)!==58&&(Se+=i(re,le,S,re.charCodeAt(2)))}me=Q=U=le=0,re="",S=Y.charCodeAt(++I)}}switch(S){case 13:case 10:F===47?F=0:1+le===0&&J!==107&&0<re.length&&(Q=1,re+="\0"),0<B*Z&&l(0,re,G,W,R,C,Se.length,J,L,J),C=1,R++;break;case 59:case 125:if(F+ie+se+te===0){C++;break}default:switch(C++,Qe=Y.charAt(I),S){case 9:case 32:if(ie+te+F===0)switch(O){case 44:case 58:case 9:case 32:Qe="";break;default:S!==32&&(Qe=" ")}break;case 0:Qe="\\0";break;case 12:Qe="\\f";break;case 11:Qe="\\v";break;case 38:ie+F+te===0&&(Q=me=1,Qe="\f"+Qe);break;case 108:if(ie+F+te+j===0&&0<U)switch(I-U){case 2:O===112&&Y.charCodeAt(I-3)===58&&(j=O);case 8:z===111&&(j=z)}break;case 58:ie+F+te===0&&(U=I);break;case 44:F+se+ie+te===0&&(Q=1,Qe+="\r");break;case 34:case 39:F===0&&(ie=ie===S?0:ie===0?S:ie);break;case 91:ie+F+se===0&&te++;break;case 93:ie+F+se===0&&te--;break;case 41:ie+F+te===0&&se--;break;case 40:if(ie+F+te===0){if(le===0)switch(2*O+3*z){case 533:break;default:le=1}se++}break;case 64:F+se+ie+te+U+D===0&&(D=1);break;case 42:case 47:if(!(0<ie+te+se))switch(F){case 0:switch(2*S+3*Y.charCodeAt(I+1)){case 235:F=47;break;case 220:oe=I,F=42}break;case 42:S===47&&O===42&&oe+2!==I&&(Y.charCodeAt(oe+2)===33&&(Se+=Y.substring(oe,I+1)),Qe="",F=0)}}F===0&&(re+=Qe)}z=O,O=S,I++}if(oe=Se.length,0<oe){if(Q=G,0<B&&(on=l(2,Se,Q,W,R,C,oe,J,L,J),on!==void 0&&(Se=on).length===0))return lr+Se+qr;if(Se=Q.join(",")+"{"+Se+"}",X*j!==0){switch(X!==2||o(Se,2)||(j=0),j){case 111:Se=Se.replace(w,":-moz-$1")+Se;break;case 112:Se=Se.replace(m,"::-webkit-input-$1")+Se.replace(m,"::-moz-$1")+Se.replace(m,":-ms-input-$1")+Se}j=0}}return lr+Se+qr}function n(W,G,Y){var J=G.trim().split(E);G=J;var L=J.length,te=W.length;switch(te){case 0:case 1:var F=0;for(W=te===0?"":W[0]+" ";F<L;++F)G[F]=r(W,G[F],Y).trim();break;default:var se=F=0;for(G=[];F<L;++F)for(var ie=0;ie<te;++ie)G[se++]=r(W[ie]+" ",J[F],Y).trim()}return G}function r(W,G,Y){var J=G.charCodeAt(0);switch(33>J&&(J=(G=G.trim()).charCodeAt(0)),J){case 38:return G.replace(g,"$1"+W.trim());case 58:return W.trim()+G.replace(g,"$1"+W.trim());default:if(0<1*Y&&0<G.indexOf("\f"))return G.replace(g,(W.charCodeAt(0)===58?"":"$1")+W.trim())}return W+G}function i(W,G,Y,J){var L=W+";",te=2*G+3*Y+4*J;if(te===944){W=L.indexOf(":",9)+1;var F=L.substring(W,L.length-1).trim();return F=L.substring(0,W).trim()+F+";",X===1||X===2&&o(F,1)?"-webkit-"+F+F:F}if(X===0||X===2&&!o(L,1))return L;switch(te){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(k,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return F=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+L+"-ms-flex-pack"+F+L;case 1005:return y.test(L)?L.replace(v,":-webkit-")+L.replace(v,":-moz-")+L:L;case 1e3:switch(F=L.substring(13).trim(),G=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(G)){case 226:F=L.replace(b,"tb");break;case 232:F=L.replace(b,"tb-rl");break;case 220:F=L.replace(b,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+F+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(G=(L=W).length-10,F=(L.charCodeAt(G)===33?L.substring(0,G):L).substring(W.indexOf(":",7)+1).trim(),te=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:L=L.replace(F,"-webkit-"+F)+";"+L;break;case 207:case 102:L=L.replace(F,"-webkit-"+(102<te?"inline-":"")+"box")+";"+L.replace(F,"-webkit-"+F)+";"+L.replace(F,"-ms-"+F+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return F=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+F+"-ms-flex-"+F+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(M,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(M,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(V.test(W)===!0)return(F=W.substring(W.indexOf(":")+1)).charCodeAt(0)===115?i(W.replace("stretch","fill-available"),G,Y,J).replace(":fill-available",":stretch"):L.replace(F,"-webkit-"+F)+L.replace(F,"-moz-"+F.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,Y+J===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+L}return L}function o(W,G){var Y=W.indexOf(G===1?":":"{"),J=W.substring(0,G!==3?Y:10);return Y=W.substring(Y+1,W.length-1),q(G!==2?J:J.replace(T,"$1"),Y,G)}function a(W,G){var Y=i(G,G.charCodeAt(0),G.charCodeAt(1),G.charCodeAt(2));return Y!==G+";"?Y.replace($," or ($1)").substring(4):"("+G+")"}function l(W,G,Y,J,L,te,F,se,ie,le){for(var S=0,O=G,z;S<B;++S)switch(z=de[S].call(u,W,O,Y,J,L,te,F,se,ie,le)){case void 0:case!1:case!0:case null:break;default:O=z}if(O!==G)return O}function s(W){switch(W){case void 0:case null:B=de.length=0;break;default:if(typeof W=="function")de[B++]=W;else if(typeof W=="object")for(var G=0,Y=W.length;G<Y;++G)s(W[G]);else Z=!!W|0}return s}function c(W){return W=W.prefix,W!==void 0&&(q=null,W?typeof W!="function"?X=1:(X=2,q=W):X=0),c}function u(W,G){var Y=W;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ce=Y,Y=[ce],0<B){var J=l(-1,G,Y,Y,R,C,0,0,0,0);J!==void 0&&typeof J=="string"&&(G=J)}var L=t(ne,Y,G,0,0);return 0<B&&(J=l(-2,L,Y,Y,R,C,L.length,0,0,0),J!==void 0&&(L=J)),ce="",j=0,C=R=1,L}var d=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,y=/zoo|gra/,x=/([,: ])(transform)/g,E=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,w=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,M=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,C=1,R=1,j=0,X=1,ne=[],de=[],B=0,q=null,Z=0,ce="";return u.use=s,u.set=c,e!==void 0&&c(e),u}var Gy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yy(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var qy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rf=Yy(function(e){return qy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),qu=sl.exports,Qy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ky={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qu={};Qu[qu.ForwardRef]=Ky;Qu[qu.Memo]=u1;function Df(e){return qu.isMemo(e)?u1:Qu[e.$$typeof]||Qy}var Zy=Object.defineProperty,Jy=Object.getOwnPropertyNames,jf=Object.getOwnPropertySymbols,e3=Object.getOwnPropertyDescriptor,t3=Object.getPrototypeOf,Ff=Object.prototype;function d1(e,t,n){if(typeof t!="string"){if(Ff){var r=t3(t);r&&r!==Ff&&d1(e,r,n)}var i=Jy(t);jf&&(i=i.concat(jf(t)));for(var o=Df(e),a=Df(t),l=0;l<i.length;++l){var s=i[l];if(!Xy[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var c=e3(t,s);try{Zy(e,s,c)}catch{}}}}return e}var n3=d1;function Kt(){return(Kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Bf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},kc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!sl.exports.typeOf(e)},Ma=Object.freeze([]),Pn=Object.freeze({});function Bi(e){return typeof e=="function"}function Hf(e){return e.displayName||e.name||"Component"}function Xu(e){return e&&typeof e.styledComponentId=="string"}var Fr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ku=typeof window<"u"&&"HTMLElement"in window,r3=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function ao(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var i3=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&ao(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ta=new Map,za=new Map,bi=1,Io=function(e){if(ta.has(e))return ta.get(e);for(;za.has(bi);)bi++;var t=bi++;return ta.set(e,t),za.set(t,e),t},o3=function(e){return za.get(e)},a3=function(e,t){t>=bi&&(bi=t+1),ta.set(e,t),za.set(t,e)},l3="style["+Fr+'][data-styled-version="5.3.9"]',s3=new RegExp("^"+Fr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),c3=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},u3=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(s3);if(l){var s=0|parseInt(l[1],10),c=l[2];s!==0&&(a3(c,s),c3(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},d3=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},f1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,c=s.length;c>=0;c--){var u=s[c];if(u&&u.nodeType===1&&u.hasAttribute(Fr))return u}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Fr,"active"),r.setAttribute("data-styled-version","5.3.9");var a=d3();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},f3=function(){function e(n){var r=this.element=f1(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}ao(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),p3=function(){function e(n){var r=this.element=f1(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),h3=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Vf=Ku,m3={isServer:!Ku,useCSSOMInjection:!r3},p1=function(){function e(n,r,i){n===void 0&&(n=Pn),r===void 0&&(r={}),this.options=Kt({},m3,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ku&&Vf&&(Vf=!1,function(o){for(var a=document.querySelectorAll(l3),l=0,s=a.length;l<s;l++){var c=a[l];c&&c.getAttribute(Fr)!=="active"&&(u3(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Io(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Kt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new h3(a):o?new f3(a):new p3(a),new i3(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Io(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Io(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Io(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=o3(a);if(l!==void 0){var s=n.names.get(l),c=r.getGroup(a);if(s&&c&&s.size){var u=Fr+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),g3=/(a)(d)/gi,Uf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ec(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Uf(t%52)+n;return(Uf(t%52)+n).replace(g3,"$1-$2")}var br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},h1=function(e){return br(5381,e)};function v3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bi(n)&&!Xu(n))return!1}return!0}var y3=h1("5.3.9"),w3=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&v3(t),this.componentId=n,this.baseHash=br(y3,n),this.baseStyle=r,p1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Br(this.rules,t,n,r).join(""),l=Ec(br(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,u=br(this.baseHash,r.hash),d="",h=0;h<c;h++){var v=this.rules[h];if(typeof v=="string")d+=v;else if(v){var y=Br(v,t,n,r),x=Array.isArray(y)?y.join(""):y;u=br(u,x+h),d+=x}}if(d){var E=Ec(u>>>0);if(!n.hasNameForId(i,E)){var g=r(d,"."+E,void 0,i);n.insertRules(i,E,g)}o.push(E)}}return o.join(" ")},e}(),x3=/^\s*\/\/.*$/gm,S3=[":","[",".","#"];function b3(e){var t,n,r,i,o=e===void 0?Pn:e,a=o.options,l=a===void 0?Pn:a,s=o.plugins,c=s===void 0?Ma:s,u=new Wy(l),d=[],h=function(x){function E(g){if(g)try{x(g+"}")}catch{}}return function(g,f,m,w,b,_,$,M,T,V){switch(g){case 1:if(T===0&&f.charCodeAt(0)===64)return x(f+";"),"";break;case 2:if(M===0)return f+"/*|*/";break;case 3:switch(M){case 102:case 112:return x(m[0]+f),"";default:return f+(V===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(x){d.push(x)}),v=function(x,E,g){return E===0&&S3.indexOf(g[n.length])!==-1||g.match(i)?x:"."+t};function y(x,E,g,f){f===void 0&&(f="&");var m=x.replace(x3,""),w=E&&g?g+" "+E+" { "+m+" }":m;return t=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(g||!E?"":E,w)}return u.use([].concat(c,[function(x,E,g){x===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,v))},h,function(x){if(x===-2){var E=d;return d=[],E}}])),y.hash=c.length?c.reduce(function(x,E){return E.name||ao(15),br(x,E.name)},5381).toString():"",y}var m1=ae.createContext();m1.Consumer;var g1=ae.createContext(),k3=(g1.Consumer,new p1),Cc=b3();function E3(){return A.exports.useContext(m1)||k3}function C3(){return A.exports.useContext(g1)||Cc}var T3=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Cc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return ao(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Cc),this.name+t.hash},e}(),_3=/([A-Z])/,P3=/([A-Z])/g,O3=/^ms-/,M3=function(e){return"-"+e.toLowerCase()};function Wf(e){return _3.test(e)?e.replace(P3,M3).replace(O3,"-ms-"):e}var Gf=function(e){return e==null||e===!1||e===""};function Br(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Br(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Gf(e))return"";if(Xu(e))return"."+e.styledComponentId;if(Bi(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Br(s,t,n,r)}var c;return e instanceof T3?n?(e.inject(n,r),e.getName(r)):e:kc(e)?function u(d,h){var v,y,x=[];for(var E in d)d.hasOwnProperty(E)&&!Gf(d[E])&&(Array.isArray(d[E])&&d[E].isCss||Bi(d[E])?x.push(Wf(E)+":",d[E],";"):kc(d[E])?x.push.apply(x,u(d[E],E)):x.push(Wf(E)+": "+(v=E,(y=d[E])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||v in Gy?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(x,["}"]):x}(e):e.toString()}var Yf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function z3(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Bi(e)||kc(e)?Yf(Br(Bf(Ma,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Yf(Br(Bf(e,n)))}var L3=function(e,t,n){return n===void 0&&(n=Pn),e.theme!==n.theme&&e.theme||t||n.theme},A3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$3=/(^-|-$)/g;function Jl(e){return e.replace(A3,"-").replace($3,"")}var N3=function(e){return Ec(h1(e)>>>0)};function Ro(e){return typeof e=="string"&&!0}var Tc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},I3=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function R3(e,t,n){var r=e[n];Tc(t)&&Tc(r)?v1(r,t):e[n]=t}function v1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Tc(a))for(var l in a)I3(l)&&R3(e,a[l],l)}return e}var y1=ae.createContext();y1.Consumer;var es={};function w1(e,t,n){var r=Xu(e),i=!Ro(e),o=t.attrs,a=o===void 0?Ma:o,l=t.componentId,s=l===void 0?function(f,m){var w=typeof f!="string"?"sc":Jl(f);es[w]=(es[w]||0)+1;var b=w+"-"+N3("5.3.9"+w+es[w]);return m?m+"-"+b:b}(t.displayName,t.parentComponentId):l,c=t.displayName,u=c===void 0?function(f){return Ro(f)?"styled."+f:"Styled("+Hf(f)+")"}(e):c,d=t.displayName&&t.componentId?Jl(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(f,m,w){return e.shouldForwardProp(f,m,w)&&t.shouldForwardProp(f,m,w)}:e.shouldForwardProp);var y,x=new w3(n,d,r?e.componentStyle:void 0),E=x.isStatic&&a.length===0,g=function(f,m){return function(w,b,_,$){var M=w.attrs,T=w.componentStyle,V=w.defaultProps,k=w.foldedComponentIds,C=w.shouldForwardProp,R=w.styledComponentId,j=w.target,X=function(J,L,te){J===void 0&&(J=Pn);var F=Kt({},L,{theme:J}),se={};return te.forEach(function(ie){var le,S,O,z=ie;for(le in Bi(z)&&(z=z(F)),z)F[le]=se[le]=le==="className"?(S=se[le],O=z[le],S&&O?S+" "+O:S||O):z[le]}),[F,se]}(L3(b,A.exports.useContext(y1),V)||Pn,b,M),ne=X[0],de=X[1],B=function(J,L,te,F){var se=E3(),ie=C3(),le=L?J.generateAndInjectStyles(Pn,se,ie):J.generateAndInjectStyles(te,se,ie);return le}(T,$,ne),q=_,Z=de.$as||b.$as||de.as||b.as||j,ce=Ro(Z),W=de!==b?Kt({},b,{},de):b,G={};for(var Y in W)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?G.as=W[Y]:(C?C(Y,Rf,Z):!ce||Rf(Y))&&(G[Y]=W[Y]));return b.style&&de.style!==b.style&&(G.style=Kt({},b.style,{},de.style)),G.className=Array.prototype.concat(k,R,B!==R?B:null,b.className,de.className).filter(Boolean).join(" "),G.ref=q,A.exports.createElement(Z,G)}(y,f,m,E)};return g.displayName=u,(y=ae.forwardRef(g)).attrs=h,y.componentStyle=x,y.displayName=u,y.shouldForwardProp=v,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ma,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(f){var m=t.componentId,w=function(_,$){if(_==null)return{};var M,T,V={},k=Object.keys(_);for(T=0;T<k.length;T++)M=k[T],$.indexOf(M)>=0||(V[M]=_[M]);return V}(t,["componentId"]),b=m&&m+"-"+(Ro(f)?f:Jl(Hf(f)));return w1(f,Kt({},w,{attrs:h,componentId:b}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?v1({},e.defaultProps,f):f}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&n3(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var _c=function(e){return function t(n,r,i){if(i===void 0&&(i=Pn),!sl.exports.isValidElementType(r))return ao(1,String(r));var o=function(){return n(r,i,z3.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Kt({},i,{},a))},o.attrs=function(a){return t(n,r,Kt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(w1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){_c[e]=_c(e)});const P=_c,D3=P.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: black;
`,j3=P.nav`
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
`,F3=P.div`
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
`,B3=P.ul`
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
`,H3=P.li`
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
        /* a.item:hover::after{
            content: "";
            position: absolute;
            width: calc(50% - 4px);
            height: 4px;
            margin-top: -0.36rem;
            border-radius: 50px;
            background-color: rgb(209, 28, 28);
            transition: width 0.4s ease-in;
            left: 2px;
            top: 0;
        }
        a.item:hover::before{
            content: "";
            position: absolute;
            width: calc(50% - 4px);
            height: 4px;
            margin-bottom: -0.36rem;
            border-radius: 50px;
            background-color: rgb(209, 28, 28);
            transition: width 0.2s ease-in;
            left: 2px;
            bottom: 0;
        } */
        a::before{
            content: "";
            position: absolute;
            width: 1%;
            bottom: -4px;
            right: 0;
            height: 4px;
            opacity: 1;
            border-radius: 50px;
            background-color: transparent;
            
        }
        a::after{
            content: "";
            position: absolute;
            width: 1%;
            bottom: -4px;
            left: 50%;
            height: 4px;
            opacity: 1;
            border-radius: 50px;
            background-color: transparent;
            
        }
        a:hover::before{
            content: "";
            position: absolute;
            width: calc(50% - 12px);
            background-color: rgb(209, 28, 28);
            right: 50%;
            transition: width 0.3s ease-in-out ;
        }
        a:hover::after{
            content: "";
            position: absolute;
            width: calc(50% - 8px);
            background-color: rgb(209, 28, 28);
            left: 48%;
            transition: width 0.3s ease-in-out ;
        }
    }
`,V3=P.div`
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
`,U3=P.div`
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
`,W3=[{id:1,referencia:"home",texto:"Inicio"},{id:2,referencia:"project",texto:"Proyectos"},,{id:3,referencia:"skill",texto:"Habilidades"},,{id:4,referencia:"contact",texto:"Contacto"}];function G3(){const[e,t]=A.exports.useState(!1),{handleTheme:n,theme:r}=A.exports.useContext(At);return p(D3,{color:r,children:N(j3,{className:"container",children:[p(F3,{click:e,color:r,children:p(B3,{children:W3.map(i=>p(H3,{children:p(r1,{to:i.referencia,spy:!0,smooth:!0,offset:0,duration:0,className:"item",activeClass:"active",onClick:()=>t(!1),children:i.texto})},i.id))})}),p(V3,{onClick:n,children:"☀️"}),p(U3,{onClick:()=>t(!e),children:e?p(Ry,{}):p(jy,{})})]})})}const Y3="/portfolio/assets/perfil-7f023c66.png",qf="/portfolio/assets/CV-SAUL-HUARCAYA-QUISPE-e142ccd1.pdf";function Pc(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}function q3(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&n.test(t)&&(e.length===0||Pc(e[0]))}function Hi(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(Pc);if(Pc(e))return[e];if(q3(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch{return[]}return[]}function Oc(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=In();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function In(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Q3(e,t){for(var n=Oc(e),r=Oc(t),i=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],l=0;l<4;l++){var s=l*4,c=[r[s],r[s+1],r[s+2],r[s+3]],u=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];i[o+s]=u}return i}function X3(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var n=t[2].split(", ").map(parseFloat);return Oc(n)}}return In()}function K3(e){var t=Math.PI/180*e,n=In();return n[5]=n[10]=Math.cos(t),n[6]=n[9]=Math.sin(t),n[9]*=-1,n}function Z3(e){var t=Math.PI/180*e,n=In();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}function J3(e){var t=Math.PI/180*e,n=In();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function Qf(e,t){var n=In();return n[0]=e,n[5]=typeof t=="number"?t:e,n}function ew(e){var t=In();return t[12]=e,t}function tw(e){var t=In();return t[13]=e,t}var x1=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){return x1(t)},0)}}(),nw=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||x1;var S1={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function rw(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function iw(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var ri={success:iw,failure:rw};function na(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function ye(e,t){if(na(e)){var n=Object.keys(e);return n.forEach(function(r){return t(e[r],r,e)})}if(e instanceof Array)return e.forEach(function(r,i){return t(r,i,e)});throw new TypeError("Expected either an array or object literal.")}function Gn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach(function(i){return r+=`
 — `+i}),console.log(r,"color: #ea654b;")}}function b1(){var e=this,t=function(){return{active:[],stale:[]}},n=t(),r=t(),i=t();try{ye(Hi("[data-sr-id]"),function(o){var a=parseInt(o.getAttribute("data-sr-id"));n.active.push(a)})}catch(o){throw o}ye(this.store.elements,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),ye(n.stale,function(o){return delete e.store.elements[o]}),ye(this.store.elements,function(o){i.active.indexOf(o.containerId)===-1&&i.active.push(o.containerId),o.hasOwnProperty("sequence")&&r.active.indexOf(o.sequence.id)===-1&&r.active.push(o.sequence.id)}),ye(this.store.containers,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),ye(i.stale,function(o){var a=e.store.containers[o].node;a.removeEventListener("scroll",e.delegate),a.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),ye(this.store.sequences,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),ye(r.stale,function(o){return delete e.store.sequences[o]})}var Xf=function(){var e={},t=document.documentElement.style;function n(r,i){if(i===void 0&&(i=t),r&&typeof r=="string"){if(e[r])return e[r];if(typeof i[r]=="string")return e[r]=r;if(typeof i["-webkit-"+r]=="string")return e[r]="-webkit-"+r;throw new RangeError('Unable to find "'+r+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function ow(e){var t=window.getComputedStyle(e.node),n=t.position,r=e.config,i={},o=e.node.getAttribute("style")||"",a=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=a?a.map(function(M){return M.trim()}).join("; ")+";":"",i.generated=a.some(function(M){return M.match(/visibility\s?:\s?visible/i)})?i.computed:a.concat(["visibility: visible"]).map(function(M){return M.trim()}).join("; ")+";";var l=parseFloat(t.opacity),s=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),c={computed:l!==s?"opacity: "+l+";":"",generated:l!==s?"opacity: "+s+";":""},u=[];if(parseFloat(r.distance)){var d=r.origin==="top"||r.origin==="bottom"?"Y":"X",h=r.distance;(r.origin==="top"||r.origin==="left")&&(h=/^-/.test(h)?h.substr(1):"-"+h);var v=h.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=v[0],x=v[1];switch(x){case"em":h=parseInt(t.fontSize)*y;break;case"px":h=y;break;case"%":h=d==="Y"?e.node.getBoundingClientRect().height*y/100:e.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}d==="Y"?u.push(tw(h)):u.push(ew(h))}r.rotate.x&&u.push(K3(r.rotate.x)),r.rotate.y&&u.push(Z3(r.rotate.y)),r.rotate.z&&u.push(J3(r.rotate.z)),r.scale!==1&&(r.scale===0?u.push(Qf(2e-4)):u.push(Qf(r.scale)));var E={};if(u.length){E.property=Xf("transform"),E.computed={raw:t[E.property],matrix:X3(t[E.property])},u.unshift(E.computed.matrix);var g=u.reduce(Q3);E.generated={initial:E.property+": matrix3d("+g.join(", ")+");",final:E.property+": matrix3d("+E.computed.matrix.join(", ")+");"}}else E.generated={initial:"",final:""};var f={};if(c.generated||E.generated.initial){f.property=Xf("transition"),f.computed=t[f.property],f.fragments=[];var m=r.delay,w=r.duration,b=r.easing;c.generated&&f.fragments.push({delayed:"opacity "+w/1e3+"s "+b+" "+m/1e3+"s",instant:"opacity "+w/1e3+"s "+b+" 0s"}),E.generated.initial&&f.fragments.push({delayed:E.property+" "+w/1e3+"s "+b+" "+m/1e3+"s",instant:E.property+" "+w/1e3+"s "+b+" 0s"});var _=f.computed&&!f.computed.match(/all 0s|none 0s/);_&&f.fragments.unshift({delayed:f.computed,instant:f.computed});var $=f.fragments.reduce(function(M,T,V){return M.delayed+=V===0?T.delayed:", "+T.delayed,M.instant+=V===0?T.instant:", "+T.instant,M},{delayed:"",instant:""});f.generated={delayed:f.property+": "+$.delayed+";",instant:f.property+": "+$.instant+";"}}else f.generated={delayed:"",instant:""};return{inline:i,opacity:c,position:n,transform:E,transition:f}}function Gr(e,t){t.split(";").forEach(function(n){var r=n.split(":"),i=r[0],o=r.slice(1);i&&o&&(e.style[i.trim()]=o.join(":"))})}function Zu(e){var t=this,n;try{ye(Hi(e),function(r){var i=r.getAttribute("data-sr-id");if(i!==null){n=!0;var o=t.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),Gr(o.node,o.styles.inline.generated),r.removeAttribute("data-sr-id"),delete t.store.elements[i]}})}catch(r){return Gn.call(this,"Clean failed.",r.message)}if(n)try{b1.call(this)}catch(r){return Gn.call(this,"Clean failed.",r.message)}}function aw(){var e=this;ye(this.store.elements,function(t){Gr(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),ye(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function Vi(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(na(e))return ye(t,function(r){ye(r,function(i,o){na(i)?((!e[o]||!na(e[o]))&&(e[o]={}),Vi(e[o],i)):e[o]=i})}),e;throw new TypeError("Target must be an object literal.")}function La(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var Mc=function(){var e=0;return function(){return e++}}();function k1(){var e=this;b1.call(this),ye(this.store.elements,function(t){var n=[t.styles.inline.generated];t.visible?(n.push(t.styles.opacity.computed),n.push(t.styles.transform.generated.final),t.revealed=!0):(n.push(t.styles.opacity.generated),n.push(t.styles.transform.generated.initial),t.revealed=!1),Gr(t.node,n.filter(function(r){return r!==""}).join(" "))}),ye(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function di(e,t){t===void 0&&(t={});var n=t.pristine||this.pristine,r=e.config.useDelay==="always"||e.config.useDelay==="onload"&&n||e.config.useDelay==="once"&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||i)return lw.call(this,e,r);if(t.reset||o)return sw.call(this,e)}function lw(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,Gr(e.node,n.filter(function(r){return r!==""}).join(" ")),E1.call(this,e,t)}function sw(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,Gr(e.node,t.filter(function(n){return n!==""}).join(" ")),E1.call(this,e)}function E1(e,t){var n=this,r=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&Zu.call(n,e.node)},r-a)}}function C1(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return di.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],r=e.sequence.index;if(n){var i=new Kf(n,"visible",this.store),o=new Kf(n,"revealed",this.store);if(n.models={visible:i,revealed:o},!o.body.length){var a=n.members[i.body[0]],l=this.store.elements[a];if(l)return Do.call(this,n,i.body[0],-1,t),Do.call(this,n,i.body[0],1,t),di.call(this,l,{reveal:!0,pristine:t})}if(!n.blocked.head&&r===[].concat(o.head).pop()&&r>=[].concat(i.body).shift())return Do.call(this,n,r,-1,t),di.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&r===[].concat(o.foot).shift()&&r<=[].concat(i.body).pop())return Do.call(this,n,r,1,t),di.call(this,e,{reveal:!0,pristine:t})}}function cw(e){var t=Math.abs(e);if(!isNaN(t))this.id=Mc(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function Kf(e,t,n){var r=this;this.head=[],this.body=[],this.foot=[],ye(e.members,function(i,o){var a=n.elements[i];a&&a[t]&&r.body.push(o)}),this.body.length&&ye(e.members,function(i,o){var a=n.elements[i];a&&!a[t]&&(o<r.body[0]?r.head.push(o):r.foot.push(o))})}function Do(e,t,n,r){var i=this,o=["head",null,"foot"][1+n],a=e.members[t+n],l=this.store.elements[a];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,l&&C1.call(i,l,r)},e.interval)}function T1(e,t,n){var r=this;t===void 0&&(t={}),n===void 0&&(n=!1);var i=[],o,a=t.interval||S1.interval;try{a&&(o=new cw(a));var l=Hi(e);if(!l.length)throw new Error("Invalid reveal target.");var s=l.reduce(function(c,u){var d={},h=u.getAttribute("data-sr-id");h?(Vi(d,r.store.elements[h]),Gr(d.node,d.styles.inline.computed)):(d.id=Mc(),d.node=u,d.seen=!1,d.revealed=!1,d.visible=!1);var v=Vi({},d.config||r.defaults,t);if(!v.mobile&&La()||!v.desktop&&!La())return h&&Zu.call(r,d),c;var y=Hi(v.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(u))return c;var x;return x=uw(y,i,r.store.containers),x===null&&(x=Mc(),i.push({id:x,node:y})),d.config=v,d.containerId=x,d.styles=ow(d),o&&(d.sequence={id:o.id,index:o.members.length},o.members.push(d.id)),c.push(d),c},[]);ye(s,function(c){r.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return Gn.call(this,"Reveal failed.",c.message)}ye(i,function(c){r.store.containers[c.id]={id:c.id,node:c.node}}),o&&(this.store.sequences[o.id]=o),n!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(k1.bind(this),0))}function uw(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=null;return ye(t,function(i){ye(i,function(o){r===null&&o.node===e&&(r=o.id)})}),r}function dw(){var e=this;ye(this.store.history,function(t){T1.call(e,t.target,t.options,!0)}),k1.call(this)}var fw=function(e){return(e>0)-(e<0)||+e},Zf=Math.sign||fw;function Jf(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,a=e.node;do isNaN(a.offsetTop)||(i+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:i,right:o+r,bottom:i+n,left:o},height:n,width:r}}function pw(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function hw(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(!!t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,i={top:e.geometry.bounds.top+e.geometry.height*n,right:e.geometry.bounds.right-e.geometry.width*n,bottom:e.geometry.bounds.bottom-e.geometry.height*n,left:e.geometry.bounds.left+e.geometry.width*n},o={top:t.geometry.bounds.top+t.scroll.top+r.top,right:t.geometry.bounds.right+t.scroll.left-r.right,bottom:t.geometry.bounds.bottom+t.scroll.top-r.bottom,left:t.geometry.bounds.left+t.scroll.left+r.left};return i.top<o.bottom&&i.right>o.left&&i.bottom>o.top&&i.left<o.right||e.styles.position==="fixed"}}function mw(e,t){var n=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),nw(function(){var r=e.type==="init"||e.type==="resize";ye(n.store.containers,function(i){r&&(i.geometry=Jf.call(n,i,!0));var o=pw.call(n,i);i.scroll&&(i.direction={x:Zf(o.left-i.scroll.left),y:Zf(o.top-i.scroll.top)}),i.scroll=o}),ye(t,function(i){(r||i.geometry===void 0)&&(i.geometry=Jf.call(n,i)),i.visible=hw.call(n,i)}),ye(t,function(i){i.sequence?C1.call(n,i):di.call(n,i)}),n.pristine=!1})}function gw(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function vw(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var yw="4.0.9",ts,ns,rs,is,os,cn,as,ls;function Vt(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==Vt.prototype;if(t)return new Vt(e);if(!Vt.isSupported())return Gn.call(this,"Instantiation failed.","This browser is not supported."),ri.failure();var n;try{n=cn?Vi({},cn,e):Vi({},S1,e)}catch(i){return Gn.call(this,"Invalid configuration.",i.message),ri.failure()}try{var r=Hi(n.container)[0];if(!r)throw new Error("Invalid container.")}catch(i){return Gn.call(this,i.message),ri.failure()}return cn=n,!cn.mobile&&La()||!cn.desktop&&!La()?(Gn.call(this,"This device is disabled.","desktop: "+cn.desktop,"mobile: "+cn.mobile),ri.failure()):(ri.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,ts=ts||mw.bind(this),ns=ns||aw.bind(this),rs=rs||T1.bind(this),is=is||Zu.bind(this),os=os||dw.bind(this),Object.defineProperty(this,"delegate",{get:function(){return ts}}),Object.defineProperty(this,"destroy",{get:function(){return ns}}),Object.defineProperty(this,"reveal",{get:function(){return rs}}),Object.defineProperty(this,"clean",{get:function(){return is}}),Object.defineProperty(this,"sync",{get:function(){return os}}),Object.defineProperty(this,"defaults",{get:function(){return cn}}),Object.defineProperty(this,"version",{get:function(){return yw}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),ls||(ls=this))}Vt.isSupported=function(){return gw()&&vw()};Object.defineProperty(Vt,"debug",{get:function(){return as||!1},set:function(e){return as=typeof e=="boolean"?e:as}});Vt();const ww=P.a`
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
`;function e0({text:e,tipo:t,href:n}){const{theme:r}=A.exports.useContext(At);return p(ww,{tipo:t,href:n,download:!0,color:r,children:N("button",{children:[p("span",{children:e}),p("span",{children:p(Dy,{})})]})})}const xw=P.section`
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
`,Sw=P.div`
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
`,bw=P.div`
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
`,kw=P.h1`
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
`,Ew=P.p`
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
`,Cw=P.div`
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

`;function Tw(){A.exports.useEffect(()=>{Vt({origin:"top",duration:1500,reset:!0}).reveal(".top",{origin:"top",delay:100,distance:"300px"})},[]);const{theme:e}=A.exports.useContext(At);return p(xw,{id:"home",color:e,children:N(Sw,{className:"container top",children:[N(bw,{children:[p(kw,{color:e,children:"Saul Huarcaya Quispe"}),p(Ew,{color:e,children:"Desarrollador de Software, manejo tecnologias frontend y backend , me considero entusiasta y perserverante en lo que hago."}),p(e0,{text:"Descargar cv",tipo:"desktop",href:qf})]}),N(Cw,{color:e,children:[p("img",{src:Y3,alt:"author"}),p(e0,{text:"Descargar cv",tipo:"mobile",href:qf})]})]})})}function _w(e){return xe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}function Pw(e){return xe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"}}]})(e)}function Ow(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"}}]})(e)}function Mw(e){return xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"}}]})(e)}const zw=P.article`
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
`,Lw=P.div`
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
`,Aw=P.button`
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

`;function Ui({Modal:e,setModal:t,children:n}){const r=()=>t(!1);return p(zw,{visible:e,onClick:r,children:N(Lw,{onClick:o=>{o.stopPropagation()},children:[p(Aw,{onClick:r,children:"X"}),n]})})}const $w=P.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    max-width: 400px;
    h2{
        color: rgb(209, 28, 28);
    }
    p{
        text-align: justify;
    }
`,Nw=P.div`
    display: flex;
    border-radius: 8px;
    img{
        border-radius: 8px;
    }
`,Iw=P.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 1rem;
        width: 3rem;
    }
    a{
        font-size: 1.3rem;
        padding: 0.4rem;
        display: flex;
        border-radius: 4px;
        color: white;
        background-color: rgb(209, 28, 28);
        transition: background-color 0.3s ease-in-out;
    }
    a:hover{
        background-color: black;
    }

`;function Rw({id:e}){const t=_1.find(n=>n.id==e);return N($w,{children:[p("h2",{children:t.title}),p(Nw,{children:p("img",{src:`img-projects/${t.route_img}`,alt:t.alt_img})}),p("p",{children:t.description}),N(Iw,{children:[p("div",{children:p("a",{href:t.route_github,target:"_blank",children:p(_w,{})})}),p("div",{children:p("a",{href:t.route,target:"_blank",children:p(Mw,{})})})]})]})}const Dw=P.section`
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
`,jw=P.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`,Fw=P.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
`,Bw=P.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
    @media screen and (min-width:541px){
        padding: 0rem 1rem;
    }
`,Hw=P.div`

    display: flex;
    position: relative;
    border-radius: 6px;
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};
    border: 6px solid ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    cursor: pointer;
    
    @media screen and (max-width:375px) {
        height: 200px;
    }
    @media screen and (max-width: 575px) {
        height: 240px;
        width: 100%;
    }
    @media screen and (min-width: 576px) {
        width: 48%;
    }
    @media screen and (min-width:768px){
        height: 220px;
    }
    @media screen and (min-width:940px){
        width: 32%;
    }

`,Vw=P.div`
    display: flex;
    background-color: black;
    width: 100%;
    height: auto;
    border-radius: 6px;
    overflow: hidden;
    
    img{
        width: 100%;
        height: inherit;
        border-radius: 6px !important;
    }

`,Uw=P.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 100;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: ${e=>e.color==="dark"?"rgb(255, 255, 255,0.8)":"rgb(29, 31, 27,0.9)"};
        color: ${e=>e.color==="dark"?"rgb(209, 28, 28)":"rgb(255, 255, 255)"}; 
        font-size: 4rem;
    }
    &:hover{
        opacity: 1;
    }
`,_1=[{id:1,title:"CRUD",description:"Son operaciones para operar la información (crear, leer, actualizar, eliminar) utilizando la api de usecontext + useReducer + useForm.",route:"#/projects/crud",route_github:"https://github.com/Saul-Huarcaya/crudreact",route_img:"crud.JPG",alt_img:"Imagen de un crud realizado con react"},{id:2,title:"App de Países",description:"Aplicación que busca todos los países, mediante nombre del pais o region utiliza la Api RestCountries.",route:"#/projects/api-countries",route_github:"https://github.com/Saul-Huarcaya/app-countries",route_img:"banderas.JPG",alt_img:"Imagen de una aplicación para buscar países."},{id:3,title:"Room Homepage",description:"Desafio Room Homepage propuesto por la web FrontendMentor nivel intermedio se realizo con React.",route:"#/projects/room-page",route_github:"https://github.com/Saul-Huarcaya/room-homepage",route_img:"room-homepage.jpg",alt_img:"Imagen de una room homepage reto de una sola pagina Frontend Mentor."},{id:4,title:"Carrito de Compras",description:"Aplicación que simula el proceso para adquirir uno o varios productos tecnológicos.",route:"#/projects/ecommerce",route_github:"https://github.com/Saul-Huarcaya/carrtito-compras",route_img:"carrito.JPG",alt_img:"Carrito de crompras hecho con React"},{id:5,title:"Manage Page",description:"Desafio Manage page propuesto por la web FrontendMentor nivel intermedio se realizo con React y la libreria swiper.js.",route:"#/projects/mana-page",route_github:"https://github.com/Saul-Huarcaya/manage-page",route_img:"manage-page.jpg",alt_img:"Carrito de crompras hecho con React"}];function Ww(){A.exports.useEffect(()=>{const a=Vt({duration:1500,delay:0,reset:!0,origin:"left"});a.reveal(".left",{distance:"100px"}),a.reveal(".left2",{distance:"100px"})},[]);const{theme:e}=A.exports.useContext(At),[t,n]=A.exports.useState(!1),[r,i]=A.exports.useState(1),o=a=>{i(a),n(!0)};return N(Dw,{id:"project",color:e,children:[N(jw,{className:"container",children:[p(Fw,{className:"left",color:e,children:"Proyectos"}),p(Bw,{className:"left2",children:_1.map(a=>N(Hw,{color:e,onClick:()=>o(a.id),children:[p(Vw,{children:p("img",{src:`img-projects/${a.route_img}`,alt:a.alt_img,color:e})}),p(Uw,{color:e,children:p("div",{children:p(Ow,{})})})]},a.id))})]}),t&&p(Ui,{Modal:t,setModal:n,children:p(Rw,{id:r,setModalProject:n})})]})}function Gw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M8.171 4.999c-0.562 0.083-1.237 0.347-1.716 0.675-0.313 0.207-0.717 0.596-0.95 0.901-0.26 0.343-0.577 1.003-0.702 1.456l-0.106 0.377v15.727l0.106 0.377c0.124 0.453 0.441 1.113 0.702 1.456 0.49 0.641 1.245 1.181 2.003 1.426 0.626 0.2 0.313 0.192 8.486 0.192 8.177 0 7.864 0.008 8.486-0.196 0.762-0.245 1.516-0.781 2.003-1.422 0.26-0.347 0.581-1.007 0.705-1.456l0.102-0.377v-15.727l-0.106-0.377c-0.124-0.452-0.441-1.113-0.701-1.456-0.234-0.306-0.637-0.694-0.95-0.901-0.336-0.23-0.883-0.479-1.305-0.596l-0.37-0.102-7.732-0.004c-4.251-0.004-7.834 0.008-7.954 0.026zM18.709 9.159c1.192 0.196 2.006 0.588 2.538 1.222 0.226 0.268 0.49 0.8 0.6 1.196 0.068 0.26 0.079 0.407 0.083 1.056 0.004 0.683-0.004 0.784-0.083 1.052-0.23 0.8-0.732 1.414-1.543 1.89l-0.279 0.162 0.2 0.064c0.305 0.102 0.815 0.366 1.075 0.562 0.649 0.49 1.101 1.252 1.282 2.161 0.087 0.453 0.087 1.422-0.004 1.837-0.358 1.633-1.622 2.768-3.523 3.149-0.728 0.147-0.916 0.155-4.824 0.155h-3.82v-14.6l3.953 0.015c3.538 0.011 3.99 0.019 4.345 0.079zM13.655 13.277v1.72l1.822-0.015c1.709-0.019 1.837-0.023 2.112-0.098 0.86-0.234 1.233-0.728 1.233-1.633 0-0.694-0.245-1.143-0.777-1.407-0.471-0.234-0.981-0.283-2.983-0.287h-1.407v1.72zM13.655 19.176v2.003l1.991-0.015c2.237-0.015 2.312-0.023 2.863-0.29 0.634-0.309 0.916-0.815 0.916-1.641 0-1.063-0.422-1.652-1.395-1.946-0.275-0.087-0.328-0.087-2.327-0.102l-2.048-0.011v2.003z"}}]})(e)}function Yw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"}}]})(e)}function qw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z"}}]})(e)}function Qw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"}}]})(e)}function Xw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"}}]})(e)}function Kw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"}}]})(e)}function Zw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"}}]})(e)}function Jw(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M18.82 15.507l-4.709 1.536-4.094 1.808-1.147 0.303c-0.291 0.276-0.599 0.557-0.928 0.843-0.361 0.314-0.701 0.599-0.959 0.805-0.288 0.229-0.715 0.654-0.934 0.926-0.325 0.405-0.58 0.837-0.689 1.168-0.197 0.597-0.101 1.202 0.279 1.761 0.485 0.713 1.449 1.438 2.572 1.931 0.572 0.252 1.538 0.576 2.263 0.759 1.207 0.305 3.54 0.636 4.824 0.685 0.261 0.010 0.607 0.009 0.623-0.002 0.028-0.019 0.228-0.397 0.46-0.871 0.79-1.613 1.361-3.125 1.668-4.416 0.186-0.782 0.331-1.825 0.425-3.061 0.026-0.346 0.036-1.501 0.016-1.894-0.033-0.639-0.089-1.16-0.179-1.67-0.013-0.075-0.018-0.141-0.011-0.147 0.013-0.011 0.058-0.025 0.636-0.194l-0.115-0.27zM17.744 16.138c0.043 0 0.157 1.091 0.186 1.784 0.006 0.147 0.005 0.241-0.004 0.241-0.028 0-0.603-0.338-1.011-0.594-0.356-0.224-1.031-0.672-1.139-0.757-0.034-0.027-0.030-0.028 0.261-0.128 0.495-0.171 1.669-0.547 1.706-0.547zM15.345 16.926c0.030-0 0.113 0.046 0.309 0.168 0.735 0.46 1.729 1.014 2.155 1.2 0.132 0.058 0.147 0.035-0.157 0.242-0.649 0.441-1.455 0.874-2.446 1.314-0.173 0.077-0.319 0.139-0.325 0.139s0.013-0.088 0.042-0.195c0.24-0.887 0.375-1.783 0.379-2.502 0.002-0.355 0.002-0.357 0.036-0.366 0.002-0 0.004-0.001 0.006-0.001v0zM14.852 17.114c0.021 0.021 0.006 0.817-0.020 1.034-0.062 0.52-0.164 1.002-0.327 1.549-0.039 0.131-0.075 0.244-0.081 0.25-0.014 0.016-0.501-0.458-0.663-0.646-0.277-0.321-0.495-0.639-0.655-0.953-0.081-0.159-0.21-0.475-0.198-0.483 0.055-0.040 1.93-0.765 1.944-0.751zM12.526 18.031c0.004 0 0.008 0.002 0.010 0.004 0.007 0.008 0.032 0.066 0.055 0.129 0.113 0.308 0.368 0.766 0.59 1.058 0.242 0.32 0.557 0.66 0.821 0.886 0.085 0.073 0.164 0.14 0.175 0.15 0.023 0.020 0.030 0.017-0.55 0.237-0.673 0.255-1.406 0.511-2.247 0.783-0.321 0.104-0.592 0.191-0.602 0.195-0.032 0.012-0.022-0.008 0.071-0.154 0.418-0.653 1.051-1.929 1.405-2.832 0.061-0.157 0.12-0.313 0.13-0.349 0.015-0.052 0.031-0.069 0.079-0.091 0.027-0.012 0.050-0.018 0.063-0.016zM11.813 18.325c0.009 0.008-0.171 0.389-0.349 0.736-0.344 0.672-0.724 1.333-1.228 2.14-0.087 0.139-0.167 0.267-0.178 0.282-0.018 0.026-0.025 0.017-0.080-0.092-0.121-0.24-0.222-0.543-0.274-0.824-0.052-0.279-0.043-0.761 0.019-1.061 0.046-0.222 0.044-0.217 0.149-0.271 0.453-0.232 1.926-0.922 1.941-0.909zM17.952 18.574v0.151c-0.001 0.794-0.085 1.881-0.209 2.674-0.022 0.139-0.040 0.254-0.042 0.255s-0.102-0.028-0.223-0.066c-0.534-0.166-1.114-0.414-1.636-0.7-0.346-0.19-0.847-0.497-0.833-0.511 0.004-0.004 0.151-0.082 0.328-0.174 0.699-0.363 1.366-0.754 1.947-1.142 0.218-0.145 0.544-0.381 0.616-0.445l0.051-0.045zM9.125 19.627c0.014-0.001 0.011 0.027-0.012 0.158-0.016 0.091-0.034 0.263-0.040 0.382-0.029 0.52 0.056 0.904 0.314 1.43 0.072 0.146 0.128 0.268 0.125 0.27-0.026 0.022-2.38 0.71-3.12 0.913-0.219 0.060-0.411 0.113-0.427 0.118-0.026 0.008-0.028 0.002-0.019-0.058 0.081-0.522 0.479-1.207 1.036-1.783 0.37-0.383 0.666-0.609 1.17-0.897 0.362-0.206 0.923-0.516 0.964-0.532 0.003-0.001 0.005-0.001 0.008-0.001v0zM14.677 20.621c0.002-0.003 0.089 0.044 0.194 0.104 0.76 0.44 1.821 0.852 2.726 1.059l0.082 0.019-0.112 0.063c-0.473 0.262-2.029 0.91-3.618 1.506-0.232 0.087-0.458 0.172-0.503 0.19s-0.080 0.030-0.080 0.026 0.066-0.13 0.146-0.28c0.446-0.834 0.892-1.848 1.12-2.552 0.023-0.072 0.044-0.132 0.046-0.135v0zM14.111 20.806c0.002 0.002-0.025 0.077-0.062 0.165-0.31 0.75-0.716 1.568-1.235 2.487-0.132 0.234-0.243 0.425-0.247 0.424s-0.111-0.064-0.238-0.142c-0.755-0.462-1.423-1.031-1.861-1.584l-0.063-0.078 0.325-0.089c1.161-0.318 2.145-0.658 3.124-1.080 0.139-0.060 0.254-0.107 0.256-0.104v0zM17.627 22.034c0.002 0 0.002 0.002 0.002 0.003 0 0.079-0.18 0.811-0.329 1.341-0.125 0.445-0.231 0.792-0.426 1.408-0.086 0.272-0.16 0.494-0.165 0.493s-0.025-0.005-0.046-0.009c-1.057-0.191-2.005-0.458-2.892-0.815-0.248-0.1-0.607-0.259-0.626-0.277-0.006-0.006 0.208-0.107 0.476-0.224 1.62-0.707 3.299-1.512 3.873-1.857 0.069-0.041 0.12-0.066 0.132-0.063zM9.511 22.312c0.009 0.008-0.445 0.657-1.078 1.543-0.22 0.308-0.479 0.671-0.574 0.807s-0.24 0.35-0.322 0.477l-0.15 0.231-0.159-0.134c-0.187-0.157-0.514-0.49-0.663-0.675-0.306-0.381-0.513-0.782-0.594-1.15-0.038-0.17-0.039-0.256-0.003-0.267 0.052-0.016 1.002-0.239 1.894-0.446 0.495-0.115 1.068-0.249 1.273-0.299s0.375-0.088 0.377-0.086zM9.967 22.486l0.115 0.128c0.513 0.571 1.034 0.997 1.67 1.365 0.112 0.065 0.198 0.121 0.191 0.126-0.026 0.016-2.2 0.789-3.205 1.14-0.567 0.198-1.033 0.358-1.035 0.358s-0.035-0.021-0.071-0.047l-0.066-0.047 0.103-0.148c0.334-0.483 0.753-1.014 1.67-2.118l0.629-0.757zM12.807 24.516c0.003-0.003 0.161 0.053 0.354 0.125 0.464 0.173 0.827 0.286 1.32 0.41 0.605 0.151 1.478 0.303 1.996 0.346 0.079 0.007 0.12 0.016 0.107 0.024-0.024 0.015-0.548 0.19-0.933 0.311-0.611 0.192-2.48 0.744-4.004 1.183-0.283 0.081-0.524 0.15-0.537 0.153-0.034 0.007-0.153-0.024-0.153-0.040 0-0.008 0.085-0.116 0.189-0.24 0.512-0.613 1.021-1.297 1.446-1.944 0.116-0.177 0.213-0.325 0.216-0.328zM12.178 24.534c0.005 0.005-0.248 0.409-0.692 1.108-0.188 0.295-0.4 0.631-0.473 0.747s-0.18 0.291-0.237 0.391l-0.104 0.182-0.053-0.014c-0.128-0.035-1.028-0.352-1.265-0.447-0.295-0.117-0.602-0.258-0.828-0.381-0.283-0.153-0.642-0.38-0.614-0.389 0.008-0.003 0.495-0.136 1.081-0.296 1.56-0.425 2.423-0.669 2.989-0.846 0.106-0.033 0.194-0.058 0.196-0.056zM16.609 25.573c0.003-0.001 0.005-0.001 0.005 0 0.015 0.037-0.563 1.636-0.774 2.143-0.047 0.114-0.065 0.141-0.089 0.14-0.060-0.003-0.897-0.12-1.404-0.197-0.887-0.135-2.373-0.394-2.748-0.48l-0.087-0.019 0.532-0.12c1.14-0.257 1.687-0.395 2.242-0.564 0.7-0.214 1.394-0.482 2.094-0.807 0.111-0.052 0.205-0.091 0.229-0.096v0zM13.967 4.533c-0.079-0.009-1.343 0.446-2.155 0.776-1.1 0.447-1.954 0.875-2.481 1.245-0.196 0.138-0.443 0.385-0.479 0.48-0.014 0.036-0.020 0.077-0.020 0.12l0.478 0.451 1.134 0.362 2.702 0.483 3.088 0.531 0.031-0.265c-0.009-0.002-0.018-0.003-0.028-0.004l-0.407-0.064-0.083-0.145c-0.42-0.741-0.884-1.657-1.153-2.277-0.209-0.48-0.409-1.034-0.52-1.434-0.066-0.238-0.073-0.253-0.11-0.258v0zM13.908 4.716c0.003-0.001 0.005-0.001 0.005 0 0.002 0.003 0.017 0.102 0.031 0.221 0.061 0.497 0.172 0.98 0.346 1.499 0.131 0.391 0.133 0.368-0.023 0.325-0.363-0.101-1.99-0.381-3.167-0.544-0.19-0.026-0.348-0.050-0.35-0.052-0.015-0.015 0.849-0.468 1.232-0.646 0.491-0.229 1.829-0.785 1.926-0.803zM10.478 6.309l0.138 0.047c0.756 0.257 2.65 0.619 3.697 0.706 0.118 0.010 0.217 0.020 0.22 0.023s-0.097 0.056-0.223 0.119c-0.505 0.253-1.061 0.561-1.446 0.802-0.113 0.071-0.216 0.128-0.23 0.127s-0.088-0.013-0.166-0.026l-0.142-0.023-0.357-0.347c-0.628-0.607-1.118-1.077-1.307-1.255l-0.184-0.173zM10.338 6.421l0.5 0.625c0.275 0.344 0.552 0.685 0.613 0.758s0.109 0.136 0.106 0.138c-0.014 0.010-0.725-0.128-1.102-0.215-0.387-0.089-0.547-0.131-0.786-0.208l-0.195-0.063 0.001-0.048c0.002-0.24 0.305-0.594 0.818-0.956l0.046-0.031zM14.6 7.272c0.015 0.001 0.031 0.032 0.075 0.129 0.121 0.266 0.499 0.987 0.591 1.126 0.030 0.046 0.078 0.049-0.424-0.032-1.205-0.195-1.595-0.26-1.595-0.267 0-0.005 0.036-0.028 0.080-0.053 0.373-0.208 0.75-0.469 1.085-0.751 0.080-0.068 0.157-0.132 0.171-0.144 0.006-0.005 0.011-0.008 0.016-0.007zM8.874 6.986c0 0-0.078 0.124-0.004 0.308 0.046 0.114 0.183 0.251 0.334 0.396 0 0 1.582 1.543 1.775 1.767 0.876 1.011 1.257 2.007 1.292 3.382 0.023 0.882-0.148 1.658-0.561 2.559-0.741 1.615-2.301 3.397-4.711 5.378l0.354-0.117c0.227-0.17 0.536-0.352 1.265-0.751 1.677-0.918 3.561-1.762 5.875-2.631 3.329-1.251 8.806-2.719 11.922-3.196l0.325-0.050-0.050-0.078c-0.285-0.443-0.479-0.716-0.713-1.005-0.683-0.845-1.511-1.535-2.525-2.102-1.393-0.78-3.2-1.386-5.484-1.84-0.432-0.086-1.378-0.248-2.147-0.368-1.63-0.254-2.681-0.426-3.843-0.628-0.416-0.072-1.038-0.177-1.451-0.266-0.215-0.046-0.624-0.143-0.941-0.253-0.262-0.103-0.632-0.203-0.71-0.504zM9.791 7.876c0.002-0.002 0.062 0.016 0.134 0.041 0.133 0.045 0.31 0.098 0.515 0.156 0.144 0.040 0.302 0.082 0.469 0.125 0.214 0.055 0.391 0.102 0.393 0.104 0.024 0.027 0.383 1.174 0.506 1.614 0.047 0.168 0.082 0.308 0.079 0.311s-0.043-0.059-0.088-0.137c-0.416-0.731-1.074-1.475-1.836-2.073-0.095-0.075-0.172-0.138-0.172-0.141zM11.543 8.36c0.018-0.001 0.097 0.012 0.191 0.033 0.606 0.134 1.689 0.343 2.385 0.46 0.116 0.020 0.211 0.041 0.211 0.047s-0.043 0.034-0.096 0.060c-0.117 0.059-0.59 0.342-0.748 0.448-0.395 0.264-0.75 0.547-1.008 0.804-0.104 0.103-0.191 0.188-0.194 0.188s-0.021-0.060-0.040-0.134c-0.129-0.495-0.397-1.227-0.636-1.742-0.039-0.083-0.070-0.156-0.070-0.162 0-0.001 0.001-0.001 0.004-0.002v0zM14.626 8.946c0.020 0.007 0.059 0.127 0.127 0.395 0.13 0.515 0.191 1.094 0.171 1.629-0.006 0.149-0.015 0.287-0.021 0.308l-0.011 0.037-0.184-0.060c-0.379-0.121-0.999-0.304-1.53-0.451-0.302-0.084-0.549-0.158-0.549-0.165 0-0.022 0.44-0.462 0.629-0.629 0.361-0.32 1.334-1.076 1.368-1.064zM14.871 8.981c0.011-0.010 1.473 0.243 2.137 0.37 0.495 0.095 1.212 0.245 1.255 0.263 0.021 0.009-0.053 0.049-0.291 0.156-0.941 0.424-1.638 0.803-2.331 1.267-0.183 0.122-0.334 0.222-0.337 0.222s-0.006-0.102-0.006-0.226c-0.001-0.676-0.135-1.358-0.383-1.934-0.027-0.062-0.047-0.115-0.044-0.118v0zM18.651 9.729c0.011 0.011-0.037 0.3-0.078 0.47-0.129 0.53-0.472 1.317-0.895 2.056-0.075 0.13-0.141 0.239-0.149 0.241s-0.104-0.048-0.214-0.112c-0.414-0.242-0.882-0.471-1.396-0.683-0.143-0.059-0.266-0.112-0.272-0.118-0.023-0.022 1.12-0.779 1.726-1.142 0.485-0.291 1.265-0.726 1.279-0.712zM18.921 9.771c0.033 0 0.681 0.177 1.017 0.277 0.835 0.25 1.799 0.602 2.423 0.886l0.26 0.118-0.183 0.042c-1.529 0.351-2.84 0.757-4.102 1.269-0.105 0.043-0.196 0.078-0.203 0.078s0.027-0.081 0.074-0.18c0.379-0.806 0.625-1.652 0.688-2.37 0.006-0.065 0.018-0.118 0.026-0.118v0zM12.476 11.253c0.010-0.010 0.504 0.105 0.773 0.181 0.405 0.114 1.266 0.402 1.266 0.424 0 0.004-0.095 0.087-0.211 0.184-0.465 0.389-0.914 0.797-1.452 1.316-0.159 0.154-0.295 0.279-0.302 0.279s-0.010-0.023-0.006-0.050c0.081-0.598 0.064-1.366-0.049-2.147-0.014-0.099-0.023-0.183-0.019-0.187zM22.868 11.262c0.007 0.007-0.229 0.377-0.376 0.588-0.215 0.307-0.526 0.711-1.235 1.603-0.372 0.468-0.792 0.998-0.934 1.177s-0.26 0.326-0.264 0.326-0.049-0.064-0.101-0.142c-0.4-0.597-0.874-1.121-1.44-1.592-0.106-0.088-0.225-0.184-0.264-0.214s-0.072-0.057-0.072-0.061c-0-0.010 0.604-0.269 1.065-0.457 0.803-0.327 1.9-0.718 2.721-0.97 0.433-0.133 0.893-0.265 0.9-0.258zM23.141 11.334c0.013-0.003 0.099 0.039 0.203 0.098 0.865 0.495 1.712 1.132 2.379 1.786 0.19 0.186 0.653 0.668 0.646 0.672-0.002 0.001-0.162 0.014-0.356 0.028-1.499 0.113-3.415 0.431-5.259 0.875-0.125 0.030-0.234 0.055-0.241 0.055s0.13-0.138 0.305-0.305c1.083-1.041 1.578-1.699 2.159-2.874 0.087-0.175 0.16-0.326 0.163-0.335 0-0.001 0.001-0.001 0.002-0.001v0zM15.22 12.146c0.049 0.011 0.511 0.226 0.86 0.401 0.319 0.16 0.802 0.417 0.826 0.439 0.003 0.003-0.167 0.092-0.378 0.197-0.669 0.335-1.242 0.65-1.84 1.016-0.171 0.104-0.313 0.19-0.318 0.19-0.015 0-0.009-0.013 0.086-0.188 0.319-0.583 0.575-1.28 0.723-1.96 0.013-0.061 0.029-0.098 0.040-0.095v0zM14.754 12.229c0.010 0.010-0.11 0.45-0.186 0.685-0.146 0.451-0.392 1.018-0.629 1.445-0.056 0.1-0.141 0.247-0.189 0.326l-0.088 0.144-0.2-0.193c-0.232-0.225-0.421-0.364-0.662-0.489-0.095-0.049-0.172-0.094-0.172-0.101-0.001-0.029 0.607-0.582 1.075-0.978 0.335-0.284 1.042-0.849 1.050-0.84zM17.583 13.392l0.174 0.113c0.398 0.258 0.869 0.606 1.229 0.906 0.201 0.168 0.593 0.518 0.673 0.603l0.043 0.045-0.288 0.080c-1.63 0.452-2.89 0.855-4.359 1.395-0.163 0.060-0.304 0.11-0.314 0.11-0.020 0-0.040 0.019 0.326-0.319 0.94-0.865 1.77-1.818 2.391-2.745l0.125-0.188zM16.84 13.579c0.008 0.008-0.482 0.695-0.773 1.083-0.349 0.464-0.969 1.239-1.396 1.744-0.178 0.211-0.331 0.386-0.34 0.389s-0.015-0.049-0.015-0.13c-0.001-0.431-0.11-0.891-0.302-1.281-0.081-0.165-0.095-0.204-0.078-0.22 0.067-0.061 1.104-0.652 1.758-1.002 0.449-0.241 1.138-0.591 1.147-0.582zM12.344 14.68c0.009 0 0.092 0.042 0.185 0.093 0.227 0.126 0.431 0.264 0.611 0.414 0.007 0.006-0.086 0.082-0.207 0.169-0.337 0.243-0.851 0.631-1.148 0.868-0.314 0.25-0.324 0.257-0.289 0.203 0.235-0.359 0.353-0.563 0.477-0.823 0.11-0.231 0.219-0.505 0.297-0.744 0.033-0.099 0.066-0.18 0.075-0.18zM13.542 15.62c0.016-0.002 0.039 0.028 0.136 0.172 0.203 0.303 0.358 0.707 0.398 1.037l0.008 0.071-0.486 0.188c-0.873 0.339-1.677 0.673-2.219 0.921-0.152 0.070-0.42 0.198-0.595 0.285s-0.318 0.156-0.318 0.153c0-0.004 0.11-0.086 0.244-0.184 1.065-0.773 1.984-1.62 2.676-2.467 0.074-0.091 0.141-0.169 0.15-0.174 0.002-0.002 0.004-0.002 0.007-0.002v0zM12.989 15.757c0.014 0.014-0.393 0.475-0.667 0.754-0.686 0.701-1.367 1.25-2.21 1.784-0.105 0.067-0.202 0.127-0.214 0.135-0.023 0.014 0.007-0.021 0.378-0.424 0.233-0.254 0.412-0.465 0.614-0.728 0.133-0.173 0.159-0.198 0.355-0.339 0.527-0.38 1.731-1.196 1.745-1.182z"}}]})(e)}function e4(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M5.082 5.593c-0.564 0.564-0.423 1.213 0.564 2.679 0.508 0.761 1.1 1.946 1.326 2.623 0.226 0.705 0.677 1.664 0.987 2.143 0.564 0.79 0.564 0.959 0.197 2.397-0.226 0.902-0.31 2.031-0.197 2.736 0.169 1.185 1.128 2.905 1.72 3.102 0.508 0.169 1.241-0.733 1.269-1.551 0-0.705 0.028-0.733 0.338-0.226 0.536 0.874 2.228 2.735 2.369 2.594 0.056-0.056-0.31-0.79-0.846-1.607-0.508-0.846-1.1-1.946-1.325-2.454-0.31-0.846-0.423-0.902-0.79-0.508-0.226 0.226-0.508 0.874-0.592 1.466-0.226 1.354-0.733 1.523-1.128 0.367s-0.395-3.131 0-4.484c0.282-0.931 0.254-1.184-0.226-1.89-0.31-0.423-0.79-1.438-1.044-2.256-0.254-0.79-0.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115 0.056-1.89 0.479 0.085 1.213 0.423 1.664 0.733 0.423 0.31 1.156 0.564 1.607 0.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241 0.423 3.835 2.002 3.835 2.341 0 0.113-0.649 0.282-1.438 0.338-2.115 0.226-2.313 0.62-0.931 1.861 0.649 0.564 1.862 1.438 2.736 1.918l1.579 0.902-0.733-0.931c-0.423-0.508-1.297-1.297-1.974-1.72s-1.213-0.874-1.213-0.987c0-0.113 0.479-0.31 1.072-0.395 1.579-0.282 2.030-0.423 2.030-0.705 0-0.423-2.848-2.566-4.202-3.159-1.156-0.536-1.297-0.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-0.649-0.113-1.551-0.451-1.946-0.733-0.931-0.705-2.82-0.959-3.272-0.479z"}}]})(e)}function t4(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M15.998 28.895c-0.337 0-0.673-0.088-0.969-0.259l-3.086-1.826c-0.46-0.257-0.235-0.349-0.083-0.402 0.614-0.213 0.739-0.262 1.394-0.635 0.069-0.038 0.159-0.024 0.231 0.018l2.37 1.407c0.087 0.048 0.207 0.048 0.287 0l9.241-5.333c0.086-0.049 0.141-0.149 0.141-0.25v-10.665c0-0.104-0.055-0.202-0.143-0.255l-9.237-5.329c-0.086-0.050-0.199-0.050-0.285 0l-9.235 5.331c-0.090 0.051-0.146 0.152-0.146 0.253v10.666c0 0.102 0.056 0.198 0.145 0.247l2.532 1.462c1.374 0.687 2.215-0.122 2.215-0.935v-10.53c0-0.149 0.12-0.266 0.269-0.266h1.172c0.146 0 0.267 0.117 0.267 0.266v10.53c0 1.833-0.998 2.885-2.736 2.885-0.534 0-0.955 0-2.129-0.579l-2.423-1.395c-0.598-0.346-0.969-0.993-0.969-1.686v-10.665c0-0.693 0.371-1.339 0.969-1.684l9.242-5.34c0.585-0.331 1.362-0.331 1.942 0l9.241 5.34c0.599 0.346 0.971 0.992 0.971 1.684v10.665c0 0.693-0.372 1.337-0.971 1.686l-9.241 5.335c-0.296 0.171-0.631 0.259-0.973 0.259zM18.853 21.547c-4.045 0-4.892-1.857-4.892-3.414 0-0.148 0.118-0.266 0.266-0.266h1.195c0.133 0 0.245 0.096 0.265 0.226 0.18 1.216 0.717 1.831 3.164 1.831 1.946 0 2.775-0.441 2.775-1.473 0-0.596-0.234-1.037-3.26-1.334-2.528-0.25-4.093-0.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233 0.007 0.075-0.020 0.148-0.071 0.205-0.051 0.054-0.121 0.086-0.196 0.086h-1.2c-0.124 0-0.233-0.088-0.259-0.209-0.288-1.28-0.988-1.689-2.886-1.689-2.126 0-2.373 0.74-2.373 1.295 0 0.673 0.292 0.869 3.161 1.248 2.84 0.375 4.19 0.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z"}}]})(e)}function n4(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M0.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649v-10.495h-31.36v5.248zM9.055 15.406v3.488h-1.76v-5.216h-1.697v5.216h-3.582v-6.976h7.039v3.488zM17.779 15.412l-0.019 3.488-3.425-0.012v1.766h-3.582v-8.736h7.039l-0.012 3.494zM29.983 15.406v3.488h-1.76v-5.216h-1.76v5.248l-1.76-0.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zM14.335 15.406v1.728h1.634v-3.457h-1.634v1.728z"}}]})(e)}function r4(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M10.372 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.822 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM8.871 17.894h-1.287l0.536-3.216h1.394c0.75 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251zM17.555 13.069h-1.93l0.429-2.251h-2.037l-1.715 8.684h2.037l0.965-4.824h1.608c0.751 0 0.751 0.322 0.643 0.858l-0.75 3.967h2.144l0.75-4.396c0.214-1.072-0.429-1.93-2.144-2.037zM24.738 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.823 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM23.237 17.894h-1.287l0.536-3.216h1.394c0.751 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251z"}}]})(e)}function i4(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"}},{tag:"path",attr:{d:"M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"}}]})(e)}function o4(e){return xe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-0.081 0-1.424-0.987-2.962-2.185l-2.784-2.185-2.266 1.133v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234 0.324-0.194 0.647 0.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101v-18.195l-2.104-0.842c-1.149-0.47-2.396-0.955-2.768-1.101l-0.664-0.259-4.435 4.435zM21.706 16.278c0 2.493-0.032 4.532-0.097 4.532-0.227 0-5.73-4.435-5.682-4.581 0.049-0.178 5.471-4.468 5.666-4.468 0.065-0.016 0.114 2.023 0.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-0.89 0.89-1.667 1.619-1.732 1.619-0.081 0-0.13-1.457-0.13-3.237s0.048-3.238 0.13-3.238c0.065 0 0.842 0.729 1.732 1.619z"}}]})(e)}const ss={frontend:[{id:1,logo:p(Xw,{}),color:"#e34c26",title:"HTML"},{id:2,logo:p(Yw,{}),color:"#264de4",title:"CSS"},{id:3,logo:p(Kw,{}),color:"#F0DB4F",title:"JavaScript"},{id:4,logo:p(Gw,{}),color:"#563d7c",title:"Bootstrap"},{id:5,logo:p(i4,{}),color:"#61DBFB",title:"React JS"}],backend:[{id:1,logo:p(r4,{}),color:"#777BB3",title:"PHP"},{id:2,logo:p(t4,{}),color:"#3c873a",title:"Node JS"},{id:3,logo:p(e4,{}),color:"#00758F",title:"Mysql"},{id:4,logo:p(Jw,{}),color:"#FF0000",title:"SqlServer"},{id:5,logo:p(Zw,{}),color:"#4DB33D",title:"Mongo"}],tools:[{id:1,logo:p(o4,{}),color:"#6ac1b9",title:"VS Code"},{id:2,logo:p(qw,{}),color:"#F1502F",title:"Git"},{id:3,logo:p(Qw,{}),color:"#000000",title:"Github"},{id:4,logo:p(n4,{}),color:"#CC3534",title:"Npm"}]},a4=P.div`
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    border-radius: 6px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 1rem;
`,l4=P.h3`
    text-align: center;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: calc(1.1rem + 1vh);
    color:rgb(29, 31, 27);
    color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};
`,s4=P.div`
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
`,c4=P.div`
    color: ${e=>e.color};
`,u4=P.div`
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
`;function cs({grupo:e,titulo:t}){const{theme:n}=A.exports.useContext(At);return N(a4,{color:n,children:[p(l4,{color:n,children:t}),p(s4,{children:e.map(r=>p(c4,{color:r.color,children:N(u4,{children:[p("div",{children:r.logo}),p("p",{children:r.title})]})},r.id))})]})}const d4=P.section`
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

`,f4=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: calc(100% - 2rem);
    
    @media screen and (min-width:769px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`,p4=P.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    margin-bottom: 1rem;
`,h4=P.div`
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
`;function m4(){A.exports.useEffect(()=>{const t=Vt({duration:1500,delay:100,reset:!0,origin:"left"});t.reveal(".title-skill",{distance:"100px"}),t.reveal(".container-skill",{distance:"150px"})},[]);const{theme:e}=A.exports.useContext(At);return p(d4,{id:"skill",color:e,children:N(f4,{className:"container",children:[p(p4,{color:e,className:"title-skill",children:"Habilidades"}),N(h4,{className:"container-skill",children:[p(cs,{grupo:ss.frontend,titulo:"Frontend"}),p(cs,{grupo:ss.backend,titulo:"Backend"}),p(cs,{grupo:ss.tools,titulo:"Tools"})]})]})})}var lo=e=>e.type==="checkbox",kr=e=>e instanceof Date,Ze=e=>e==null;const P1=e=>typeof e=="object";var Ue=e=>!Ze(e)&&!Array.isArray(e)&&P1(e)&&!kr(e),g4=e=>Ue(e)&&e.target?lo(e.target)?e.target.checked:e.target.value:e,v4=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,y4=(e,t)=>e.has(v4(t)),so=e=>Array.isArray(e)?e.filter(Boolean):[],De=e=>e===void 0,ee=(e,t,n)=>{if(!t||!Ue(e))return n;const r=so(t.split(/[,[\].]+?/)).reduce((i,o)=>Ze(i)?i:i[o],e);return De(r)||r===e?De(e[t])?n:e[t]:r};const t0={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Pt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Gt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ae.createContext(null);var w4=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Pt.all&&(t._proxyFormState[a]=!r||Pt.all),n&&(n[a]=!0),e[a]}});return i},vt=e=>Ue(e)&&!Object.keys(e).length,x4=(e,t,n)=>{const{name:r,...i}=e;return vt(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(o=>t[o]===(!n||Pt.all))},us=e=>Array.isArray(e)?e:[e];function S4(e){const t=ae.useRef(e);t.current=e,ae.useEffect(()=>{const n=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{n&&n.unsubscribe()}},[e.disabled])}var jt=e=>typeof e=="string",b4=(e,t,n,r)=>jt(e)?(r&&t.watch.add(e),ee(n,e)):Array.isArray(e)?e.map(i=>(r&&t.watch.add(i),ee(n,i))):(r&&(t.watchAll=!0),n),k4=e=>{const t=e.constructor&&e.constructor.prototype;return Ue(t)&&t.hasOwnProperty("isPrototypeOf")},zc=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Hn(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(zc&&(e instanceof Blob||e instanceof FileList))&&(n||Ue(e)))if(t=n?[]:{},!Array.isArray(e)&&!k4(e))t=e;else for(const r in e)t[r]=Hn(e[r]);else return e;return t}var E4=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ju=e=>/^\w*$/.test(e),O1=e=>so(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(e,t,n){let r=-1;const i=Ju(t)?[t]:O1(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let s=n;if(r!==a){const c=e[l];s=Ue(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[l]=s,e=e[l]}return e}const Lc=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ee(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else Ue(a)&&Lc(a,t)}}};var n0=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),C4=(e,t,n)=>{const r=so(ee(e,n));return ke(r,"root",t[n]),ke(e,n,r),e},zr=e=>typeof e=="boolean",ed=e=>e.type==="file",Aa=e=>typeof e=="function",ra=e=>jt(e)||ae.isValidElement(e),td=e=>e.type==="radio",$a=e=>e instanceof RegExp;const r0={value:!1,isValid:!1},i0={value:!0,isValid:!0};var M1=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!De(e[0].attributes.value)?De(e[0].value)||e[0].value===""?i0:{value:e[0].value,isValid:!0}:i0:r0}return r0};const o0={isValid:!1,value:null};var z1=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,o0):o0;function a0(e,t,n="validate"){if(ra(e)||Array.isArray(e)&&e.every(ra)||zr(e)&&!e)return{type:n,message:ra(e)?e:"",ref:t}}var cr=e=>Ue(e)&&!$a(e)?e:{value:e,message:""},l0=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:s,minLength:c,min:u,max:d,pattern:h,validate:v,name:y,valueAsNumber:x,mount:E,disabled:g}=e._f;if(!E||g)return{};const f=a?a[0]:o,m=k=>{r&&f.reportValidity&&(f.setCustomValidity(zr(k)?"":k||""),f.reportValidity())},w={},b=td(o),_=lo(o),$=b||_,M=(x||ed(o))&&!o.value||t===""||Array.isArray(t)&&!t.length,T=E4.bind(null,y,n,w),V=(k,C,R,j=Gt.maxLength,X=Gt.minLength)=>{const ne=k?C:R;w[y]={type:k?j:X,message:ne,ref:o,...T(k?j:X,ne)}};if(i?!Array.isArray(t)||!t.length:l&&(!$&&(M||Ze(t))||zr(t)&&!t||_&&!M1(a).isValid||b&&!z1(a).isValid)){const{value:k,message:C}=ra(l)?{value:!!l,message:l}:cr(l);if(k&&(w[y]={type:Gt.required,message:C,ref:f,...T(Gt.required,C)},!n))return m(C),w}if(!M&&(!Ze(u)||!Ze(d))){let k,C;const R=cr(d),j=cr(u);if(!Ze(t)&&!isNaN(t)){const X=o.valueAsNumber||t&&+t;Ze(R.value)||(k=X>R.value),Ze(j.value)||(C=X<j.value)}else{const X=o.valueAsDate||new Date(t),ne=q=>new Date(new Date().toDateString()+" "+q),de=o.type=="time",B=o.type=="week";jt(R.value)&&t&&(k=de?ne(t)>ne(R.value):B?t>R.value:X>new Date(R.value)),jt(j.value)&&t&&(C=de?ne(t)<ne(j.value):B?t<j.value:X<new Date(j.value))}if((k||C)&&(V(!!k,R.message,j.message,Gt.max,Gt.min),!n))return m(w[y].message),w}if((s||c)&&!M&&(jt(t)||i&&Array.isArray(t))){const k=cr(s),C=cr(c),R=!Ze(k.value)&&t.length>k.value,j=!Ze(C.value)&&t.length<C.value;if((R||j)&&(V(R,k.message,C.message),!n))return m(w[y].message),w}if(h&&!M&&jt(t)){const{value:k,message:C}=cr(h);if($a(k)&&!t.match(k)&&(w[y]={type:Gt.pattern,message:C,ref:o,...T(Gt.pattern,C)},!n))return m(C),w}if(v){if(Aa(v)){const k=await v(t),C=a0(k,f);if(C&&(w[y]={...C,...T(Gt.validate,C.message)},!n))return m(C.message),w}else if(Ue(v)){let k={};for(const C in v){if(!vt(k)&&!n)break;const R=a0(await v[C](t),f,C);R&&(k={...R,...T(C,R.message)},m(R.message),n&&(w[y]=k))}if(!vt(k)&&(w[y]={ref:f,...k},!n))return w}}return m(!0),w},s0=e=>({isOnSubmit:!e||e===Pt.onSubmit,isOnBlur:e===Pt.onBlur,isOnChange:e===Pt.onChange,isOnAll:e===Pt.all,isOnTouch:e===Pt.onTouched});function T4(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=De(e)?r++:e[t[r++]];return e}function _4(e){for(const t in e)if(!De(e[t]))return!1;return!0}function Xe(e,t){const n=Ju(t)?[t]:O1(t),r=n.length==1?e:T4(e,n),i=n[n.length-1];let o;r&&delete r[i];for(let a=0;a<n.slice(0,-1).length;a++){let l=-1,s;const c=n.slice(0,-(a+1)),u=c.length-1;for(a>0&&(o=e);++l<c.length;){const d=c[l];s=s?s[d]:e[d],u===l&&(Ue(s)&&vt(s)||Array.isArray(s)&&_4(s))&&(o?delete o[d]:delete e[d]),o=s}}return e}function ds(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Wi=e=>Ze(e)||!P1(e);function Er(e,t){if(Wi(e)||Wi(t))return e===t;if(kr(e)&&kr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(kr(o)&&kr(a)||Ue(o)&&Ue(a)||Array.isArray(o)&&Array.isArray(a)?!Er(o,a):o!==a)return!1}}return!0}var Ac=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},L1=e=>e.type==="select-multiple",P4=e=>td(e)||lo(e),fs=e=>Ac(e)&&e.isConnected,A1=e=>{for(const t in e)if(Aa(e[t]))return!0;return!1};function Na(e,t={}){const n=Array.isArray(e);if(Ue(e)||n)for(const r in e)Array.isArray(e[r])||Ue(e[r])&&!A1(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Na(e[r],t[r])):Ze(e[r])||(t[r]=!0);return t}function $1(e,t,n){const r=Array.isArray(e);if(Ue(e)||r)for(const i in e)Array.isArray(e[i])||Ue(e[i])&&!A1(e[i])?De(t)||Wi(n[i])?n[i]=Array.isArray(e[i])?Na(e[i],[]):{...Na(e[i])}:$1(e[i],Ze(t)?{}:t[i],n[i]):Er(e[i],t[i])?delete n[i]:n[i]=!0;return n}var ps=(e,t)=>$1(e,t,Na(t)),N1=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>De(e)?e:t?e===""?NaN:e&&+e:n&&jt(e)?new Date(e):r?r(e):e;function hs(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return ed(t)?t.files:td(t)?z1(e.refs).value:L1(t)?[...t.selectedOptions].map(({value:n})=>n):lo(t)?M1(e.refs).value:N1(De(t.value)?e.ref.value:t.value,e)}var O4=(e,t,n,r)=>{const i={};for(const o of e){const a=ee(t,o);a&&ke(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ii=e=>De(e)?e:$a(e)?e.source:Ue(e)?$a(e.value)?e.value.source:e.value:e,M4=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function c0(e,t,n){const r=ee(e,n);if(r||Ju(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=ee(t,o),l=ee(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var z4=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,L4=(e,t)=>!so(ee(e,t)).length&&Xe(e,t);const A4={mode:Pt.onSubmit,reValidateMode:Pt.onChange,shouldFocusError:!0};function $4(e={}){let t={...A4,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Hn(t.defaultValues)||{},o=t.shouldUnregister?{}:Hn(i),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},s,c=0;const u={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:ds(),array:ds(),state:ds()},h=s0(t.mode),v=s0(t.reValidateMode),y=t.criteriaMode===Pt.all,x=S=>O=>{clearTimeout(c),c=window.setTimeout(S,O)},E=async()=>{if(u.isValid){const S=t.resolver?vt((await $()).errors):await T(r,!0);S!==n.isValid&&(n.isValid=S,d.state.next({isValid:S}))}},g=S=>u.isValidating&&S!==n.isValidating&&d.state.next({isValidating:S}),f=(S,O=[],z,D,U=!0,I=!0)=>{if(D&&z){if(a.action=!0,I&&Array.isArray(ee(r,S))){const Q=z(ee(r,S),D.argA,D.argB);U&&ke(r,S,Q)}if(I&&Array.isArray(ee(n.errors,S))){const Q=z(ee(n.errors,S),D.argA,D.argB);U&&ke(n.errors,S,Q),L4(n.errors,S)}if(u.touchedFields&&I&&Array.isArray(ee(n.touchedFields,S))){const Q=z(ee(n.touchedFields,S),D.argA,D.argB);U&&ke(n.touchedFields,S,Q)}u.dirtyFields&&(n.dirtyFields=ps(i,o)),d.state.next({name:S,isDirty:k(S,O),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ke(o,S,O)},m=(S,O)=>{ke(n.errors,S,O),d.state.next({errors:n.errors})},w=(S,O,z,D)=>{const U=ee(r,S);if(U){const I=ee(o,S,De(z)?ee(i,S):z);De(I)||D&&D.defaultChecked||O?ke(o,S,O?I:hs(U._f)):j(S,I),a.mount&&E()}},b=(S,O,z,D,U)=>{let I=!1,Q=!1;const me={name:S};if((!z||D)&&(u.isDirty&&(Q=n.isDirty,n.isDirty=me.isDirty=k(),I=Q!==me.isDirty),u.dirtyFields)){Q=ee(n.dirtyFields,S);const oe=Er(ee(i,S),O);oe?Xe(n.dirtyFields,S):ke(n.dirtyFields,S,!0),me.dirtyFields=n.dirtyFields,I=I||Q!==!oe}if(z){const oe=ee(n.touchedFields,S);oe||(ke(n.touchedFields,S,z),me.touchedFields=n.touchedFields,I=I||u.touchedFields&&oe!==z)}return I&&U&&d.state.next(me),I?me:{}},_=(S,O,z,D)=>{const U=ee(n.errors,S),I=u.isValid&&zr(O)&&n.isValid!==O;if(e.delayError&&z?(s=x(()=>m(S,z)),s(e.delayError)):(clearTimeout(c),s=null,z?ke(n.errors,S,z):Xe(n.errors,S)),(z?!Er(U,z):U)||!vt(D)||I){const Q={...D,...I&&zr(O)?{isValid:O}:{},errors:n.errors,name:S};n={...n,...Q},d.state.next(Q)}g(!1)},$=async S=>await t.resolver(o,t.context,O4(S||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation)),M=async S=>{const{errors:O}=await $();if(S)for(const z of S){const D=ee(O,z);D?ke(n.errors,z,D):Xe(n.errors,z)}else n.errors=O;return O},T=async(S,O,z={valid:!0})=>{for(const D in S){const U=S[D];if(U){const{_f:I,...Q}=U;if(I){const me=l.array.has(I.name),oe=await l0(U,ee(o,I.name),y,t.shouldUseNativeValidation,me);if(oe[I.name]&&(z.valid=!1,O))break;!O&&(ee(oe,I.name)?me?C4(n.errors,oe,I.name):ke(n.errors,I.name,oe[I.name]):Xe(n.errors,I.name))}Q&&await T(Q,O,z)}}return z.valid},V=()=>{for(const S of l.unMount){const O=ee(r,S);O&&(O._f.refs?O._f.refs.every(z=>!fs(z)):!fs(O._f.ref))&&Y(S)}l.unMount=new Set},k=(S,O)=>(S&&O&&ke(o,S,O),!Er(q(),i)),C=(S,O,z)=>b4(S,l,{...a.mount?o:De(O)?i:jt(S)?{[S]:O}:O},z),R=S=>so(ee(a.mount?o:i,S,e.shouldUnregister?ee(i,S,[]):[])),j=(S,O,z={})=>{const D=ee(r,S);let U=O;if(D){const I=D._f;I&&(!I.disabled&&ke(o,S,N1(O,I)),U=zc&&Ac(I.ref)&&Ze(O)?"":O,L1(I.ref)?[...I.ref.options].forEach(Q=>Q.selected=U.includes(Q.value)):I.refs?lo(I.ref)?I.refs.length>1?I.refs.forEach(Q=>(!Q.defaultChecked||!Q.disabled)&&(Q.checked=Array.isArray(U)?!!U.find(me=>me===Q.value):U===Q.value)):I.refs[0]&&(I.refs[0].checked=!!U):I.refs.forEach(Q=>Q.checked=Q.value===U):ed(I.ref)?I.ref.value="":(I.ref.value=U,I.ref.type||d.watch.next({name:S})))}(z.shouldDirty||z.shouldTouch)&&b(S,U,z.shouldTouch,z.shouldDirty,!0),z.shouldValidate&&B(S)},X=(S,O,z)=>{for(const D in O){const U=O[D],I=`${S}.${D}`,Q=ee(r,I);(l.array.has(S)||!Wi(U)||Q&&!Q._f)&&!kr(U)?X(I,U,z):j(I,U,z)}},ne=(S,O,z={})=>{const D=ee(r,S),U=l.array.has(S),I=Hn(O);ke(o,S,I),U?(d.array.next({name:S,values:o}),(u.isDirty||u.dirtyFields)&&z.shouldDirty&&(n.dirtyFields=ps(i,o),d.state.next({name:S,dirtyFields:n.dirtyFields,isDirty:k(S,I)}))):D&&!D._f&&!Ze(I)?X(S,I,z):j(S,I,z),n0(S,l)&&d.state.next({}),d.watch.next({name:S})},de=async S=>{const O=S.target;let z=O.name;const D=ee(r,z),U=()=>O.type?hs(D._f):g4(S);if(D){let I,Q;const me=U(),oe=S.type===t0.BLUR||S.type===t0.FOCUS_OUT,ar=!M4(D._f)&&!t.resolver&&!ee(n.errors,z)&&!D._f.deps||z4(oe,ee(n.touchedFields,z),n.isSubmitted,v,h),Wt=n0(z,l,oe);ke(o,z,me),oe?(D._f.onBlur&&D._f.onBlur(S),s&&s(0)):D._f.onChange&&D._f.onChange(S);const Qe=b(z,me,oe,!1),re=!vt(Qe)||Wt;if(!oe&&d.watch.next({name:z,type:S.type}),ar)return u.isValid&&E(),re&&d.state.next({name:z,...Wt?{}:Qe});if(!oe&&Wt&&d.state.next({}),g(!0),t.resolver){const{errors:Se}=await $([z]),qr=c0(n.errors,r,z),lr=c0(Se,r,qr.name||z);I=lr.error,z=lr.name,Q=vt(Se)}else I=(await l0(D,ee(o,z),y,t.shouldUseNativeValidation))[z],I?Q=!1:u.isValid&&(Q=await T(r,!0));!Wi(me)||U()===me?(D._f.deps&&B(D._f.deps),_(z,Q,I,Qe)):g(!1)}},B=async(S,O={})=>{let z,D;const U=us(S);if(g(!0),t.resolver){const I=await M(De(S)?S:U);z=vt(I),D=S?!U.some(Q=>ee(I,Q)):z}else S?(D=(await Promise.all(U.map(async I=>{const Q=ee(r,I);return await T(Q&&Q._f?{[I]:Q}:Q)}))).every(Boolean),!(!D&&!n.isValid)&&E()):D=z=await T(r);return d.state.next({...!jt(S)||u.isValid&&z!==n.isValid?{}:{name:S},...t.resolver||!S?{isValid:z}:{},errors:n.errors,isValidating:!1}),O.shouldFocus&&!D&&Lc(r,I=>I&&ee(n.errors,I),S?U:l.mount),D},q=S=>{const O={...i,...a.mount?o:{}};return De(S)?O:jt(S)?ee(O,S):S.map(z=>ee(O,z))},Z=(S,O)=>({invalid:!!ee((O||n).errors,S),isDirty:!!ee((O||n).dirtyFields,S),isTouched:!!ee((O||n).touchedFields,S),error:ee((O||n).errors,S)}),ce=S=>{S?us(S).forEach(O=>Xe(n.errors,O)):n.errors={},d.state.next({errors:n.errors})},W=(S,O,z)=>{const D=(ee(r,S,{_f:{}})._f||{}).ref;ke(n.errors,S,{...O,ref:D}),d.state.next({name:S,errors:n.errors,isValid:!1}),z&&z.shouldFocus&&D&&D.focus&&D.focus()},G=(S,O)=>Aa(S)?d.watch.subscribe({next:z=>S(C(void 0,O),z)}):C(S,O,!0),Y=(S,O={})=>{for(const z of S?us(S):l.mount)l.mount.delete(z),l.array.delete(z),ee(r,z)&&(O.keepValue||(Xe(r,z),Xe(o,z)),!O.keepError&&Xe(n.errors,z),!O.keepDirty&&Xe(n.dirtyFields,z),!O.keepTouched&&Xe(n.touchedFields,z),!t.shouldUnregister&&!O.keepDefaultValue&&Xe(i,z));d.watch.next({}),d.state.next({...n,...O.keepDirty?{isDirty:k()}:{}}),!O.keepIsValid&&E()},J=(S,O={})=>{let z=ee(r,S);const D=zr(O.disabled);return ke(r,S,{...z||{},_f:{...z&&z._f?z._f:{ref:{name:S}},name:S,mount:!0,...O}}),l.mount.add(S),z?D&&ke(o,S,O.disabled?void 0:ee(o,S,hs(z._f))):w(S,!0,O.value),{...D?{disabled:O.disabled}:{},...t.shouldUseNativeValidation?{required:!!O.required,min:ii(O.min),max:ii(O.max),minLength:ii(O.minLength),maxLength:ii(O.maxLength),pattern:ii(O.pattern)}:{},name:S,onChange:de,onBlur:de,ref:U=>{if(U){J(S,O),z=ee(r,S);const I=De(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,Q=P4(I),me=z._f.refs||[];if(Q?me.find(oe=>oe===I):I===z._f.ref)return;ke(r,S,{_f:{...z._f,...Q?{refs:[...me.filter(fs),I,...Array.isArray(ee(i,S))?[{}]:[]],ref:{type:I.type,name:S}}:{ref:I}}}),w(S,!1,void 0,I)}else z=ee(r,S,{}),z._f&&(z._f.mount=!1),(t.shouldUnregister||O.shouldUnregister)&&!(y4(l.array,S)&&a.action)&&l.unMount.add(S)}}},L=()=>t.shouldFocusError&&Lc(r,S=>S&&ee(n.errors,S),l.mount),te=(S,O)=>async z=>{z&&(z.preventDefault&&z.preventDefault(),z.persist&&z.persist());let D=!0,U=Hn(o);d.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:I,values:Q}=await $();n.errors=I,U=Q}else await T(r);vt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await S(U,z)):(O&&await O({...n.errors},z),L())}catch(I){throw D=!1,I}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:vt(n.errors)&&D,submitCount:n.submitCount+1,errors:n.errors})}},F=(S,O={})=>{ee(r,S)&&(De(O.defaultValue)?ne(S,ee(i,S)):(ne(S,O.defaultValue),ke(i,S,O.defaultValue)),O.keepTouched||Xe(n.touchedFields,S),O.keepDirty||(Xe(n.dirtyFields,S),n.isDirty=O.defaultValue?k(S,ee(i,S)):k()),O.keepError||(Xe(n.errors,S),u.isValid&&E()),d.state.next({...n}))},se=(S,O={})=>{const z=S||i,D=Hn(z),U=S&&!vt(S)?D:i;if(O.keepDefaultValues||(i=z),!O.keepValues){if(O.keepDirtyValues)for(const I of l.mount)ee(n.dirtyFields,I)?ke(U,I,ee(o,I)):ne(I,ee(U,I));else{if(zc&&De(S))for(const I of l.mount){const Q=ee(r,I);if(Q&&Q._f){const me=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(Ac(me)){const oe=me.closest("form");if(oe){oe.reset();break}}}}r={}}o=e.shouldUnregister?O.keepDefaultValues?Hn(i):{}:D,d.array.next({values:U}),d.watch.next({values:U})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!u.isValid||!!O.keepIsValid,a.watch=!!e.shouldUnregister,d.state.next({submitCount:O.keepSubmitCount?n.submitCount:0,isDirty:O.keepDirty||O.keepDirtyValues?n.isDirty:!!(O.keepDefaultValues&&!Er(S,i)),isSubmitted:O.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:O.keepDirty||O.keepDirtyValues?n.dirtyFields:O.keepDefaultValues&&S?ps(i,S):{},touchedFields:O.keepTouched?n.touchedFields:{},errors:O.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:J,unregister:Y,getFieldState:Z,_executeSchema:$,_focusError:L,_getWatch:C,_getDirty:k,_updateValid:E,_removeUnmounted:V,_updateFieldArray:f,_getFieldArray:R,_subjects:d,_proxyFormState:u,get _fields(){return r},get _formValues(){return o},get _stateFlags(){return a},set _stateFlags(S){a=S},get _defaultValues(){return i},get _names(){return l},set _names(S){l=S},get _formState(){return n},set _formState(S){n=S},get _options(){return t},set _options(S){t={...t,...S}}},trigger:B,register:J,handleSubmit:te,watch:G,setValue:ne,getValues:q,reset:(S,O)=>se(Aa(S)?S(o):S,O),resetField:F,clearErrors:ce,unregister:Y,setError:W,setFocus:(S,O={})=>{const z=ee(r,S),D=z&&z._f;if(D){const U=D.refs?D.refs[0]:D.ref;U.focus&&(U.focus(),O.shouldSelect&&U.select())}},getFieldState:Z}}function nd(e={}){const t=ae.useRef(),[n,r]=ae.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...$4(e),formState:n});const i=t.current.control;return i._options=e,S4({subject:i._subjects.state,callback:ae.useCallback(o=>{x4(o,i._proxyFormState,!0)&&(i._formState={...i._formState,...o},r({...i._formState}))},[i])}),ae.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),ae.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),t.current.formState=w4(n,i),t.current}const N4=P.div`
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
`;function rd(){return N(N4,{children:[p("div",{}),p("div",{}),p("div",{})]})}function I4(e){return xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"}}]})(e)}const R4=P.section`
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
`,D4=P.h2`
    font-size: 2.2rem;
    letter-spacing: 2px;
    line-height: 2.2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    text-align: center;

`,j4=P.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width:769px) {
        padding: 1rem;
        gap: 2rem;
        grid-template-columns: 1fr 1fr;
    }
`,F4=P.div`
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
`,B4=P.form`
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
`,jo=P.p`
    color: #f44336;
    margin-left: 0.25rem;
`,H4=P.div`
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
    
`,V4=P.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
`,U4=P.div`
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
`,W4=[{id:"1",classIcon:"bx bxl-whatsapp",redSocial:"Whatsapp",ruta:"https://wa.me/51940970193"},{id:"2",classIcon:"bx bxl-github",redSocial:"Github",ruta:"https://github.com/Saul-Huarcaya"},{id:"3",classIcon:"bx bxl-linkedin",redSocial:"LinkedIn",ruta:"https://linkedin.com/in/saul-huarcaya-quispe-b1504322b"}];function G4(){var s,c,u,d;A.exports.useEffect(()=>{const h=Vt({origin:"left",duration:2e3,delay:0,reset:!0});h.reveal(".title",{distance:"100px",duration:1500}),h.reveal(".subtitle",{distance:"100px"}),h.reveal(".nombre",{distance:"120px"}),h.reveal(".email",{distance:"240px"}),h.reveal(".comentario",{distance:"260px"}),h.reveal(".boton",{distance:"300px"}),h.reveal(".card",{distance:"200px"})},[]);const{register:e,handleSubmit:t,formState:{errors:n},reset:r}=nd(),[i,o]=A.exports.useState(!1),{theme:a}=A.exports.useContext(At);return N(R4,{id:"contact",color:a,children:[p(D4,{className:"title",color:a,children:"Contacto"}),N(j4,{className:"container",children:[N(F4,{className:"container",color:a,children:[p("h3",{className:"subtitle",children:"Enviame un mensaje"}),N(B4,{onSubmit:t(h=>{h&&(o(!0),fetch("https://formsubmit.co/ajax/shuarcaya99@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...h})}).then(v=>{v.ok?v.json():new Promise.reject(v)}).then(v=>{o(!1),setTimeout(()=>{r()},1e3)}))}),color:a,children:[((s=n.nombre)==null?void 0:s.type)==="required"&&p(jo,{children:"nombre obligatorio"}),p("input",{type:"text",placeholder:"Nombre",name:"nombre",className:"nombre",autoComplete:"off",...e("nombre",{required:!0})}),((c=n.email)==null?void 0:c.type)==="required"&&p(jo,{children:"Email obligatorio"}),((u=n.email)==null?void 0:u.type)==="pattern"&&p(jo,{children:"El email es incorrecto"}),p("input",{type:"text",name:"email",placeholder:"ejemplo@gmail.com",className:"email",autoComplete:"off",...e("email",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}),((d=n.comentario)==null?void 0:d.type)==="maxLength"&&p(jo,{children:"maximo 255 caracteres"}),p("textarea",{cols:"30",rows:"8",name:"comentario",placeholder:"Escribe tu comentario",className:"comentario",...e("comentario",{maxLength:255})}),p("input",{className:"boton",type:"submit"})]}),i&&p("div",{className:"container-loding-thema",children:p(rd,{})})]}),N(H4,{color:a,children:[p("h3",{className:"subtitle",children:"Redes Sociales"}),p(V4,{children:W4.map(h=>N(U4,{color:a,className:"card",children:[p("div",{children:p("i",{className:h.classIcon})}),p("h4",{children:h.redSocial}),p("a",{href:h.ruta,target:"_blank",children:p("span",{children:p(I4,{})})})]},h.id))})]})]})]})}const Y4=P.footer`
    background-color: black;
    color: white;
`,q4=P.div`
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`,Q4=P.h4`
    font-size: calc(1rem + 1vh);
    @media screen and (min-width:768px) {
        font-size: calc(1.8rem + 1vh);
    }
`;P.div`
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
`;const X4=P.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;  
`;function K4(){return p(Y4,{children:N(q4,{className:"container",children:[p(Q4,{children:"Software Developer 😄"}),p(X4,{children:"Creado por Saul Huarcaya (2023) ©"})]})})}const Z4=P.div`
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
`;function I1(){const[e,t]=A.exports.useState(!1);return A.exports.useEffect(()=>{const r=()=>{(window.pageXOffset||document.documentElement.scrollTop)>300?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),p(Ln,{children:e&&p(Z4,{onClick:()=>{window.scrollTo(0,0)},children:p(a1,{})})})}function J4(){return N(s1,{children:[p(G3,{}),p(Tw,{}),p(Ww,{}),p(m4,{}),p(G4,{}),p(K4,{}),p(I1,{})]})}function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ia.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const u0="popstate";function ex(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:l="",hash:s=""}=ir(i.location.hash.substr(1));return $c("",{pathname:a,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=i.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof o=="string"?o:Gi(o))}function r(i,o){tx(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ix(t,n,r,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tx(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nx(){return Math.random().toString(36).substr(2,8)}function d0(e){return{usr:e.state,key:e.key}}function $c(e,t,n,r){return n===void 0&&(n=null),Ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ir(t):t,{state:n,key:t&&t.key||r||nx()})}function Gi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rx(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Gi(e);return Ie(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function ix(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=gn.Pop,s=null;function c(){l=gn.Pop,s&&s({action:l,location:h.location})}function u(v,y){l=gn.Push;let x=$c(h.location,v,y);n&&n(x,v);let E=d0(x),g=h.createHref(x);try{a.pushState(E,"",g)}catch{i.location.assign(g)}o&&s&&s({action:l,location:h.location})}function d(v,y){l=gn.Replace;let x=$c(h.location,v,y);n&&n(x,v);let E=d0(x),g=h.createHref(x);a.replaceState(E,"",g),o&&s&&s({action:l,location:h.location})}let h={get action(){return l},get location(){return e(i,a)},listen(v){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(u0,c),s=v,()=>{i.removeEventListener(u0,c),s=null}},createHref(v){return t(i,v)},encodeLocation(v){let y=rx(typeof v=="string"?v:Gi(v));return{pathname:y.pathname,search:y.search,hash:y.hash}},push:u,replace:d,go(v){return a.go(v)}};return h}var f0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(f0||(f0={}));function ox(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ir(t):t,i=D1(r.pathname||"/",n);if(i==null)return null;let o=R1(e);ax(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=mx(o[l],yx(i));return a}function R1(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(Ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let l=On([r,a.relativePath]),s=n.concat(a);i.children&&i.children.length>0&&(Ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),R1(i.children,t,s,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:px(l,i.index),routesMeta:s})}),t}function ax(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lx=/^:\w+$/,sx=3,cx=2,ux=1,dx=10,fx=-2,p0=e=>e==="*";function px(e,t){let n=e.split("/"),r=n.length;return n.some(p0)&&(r+=fx),t&&(r+=cx),n.filter(i=>!p0(i)).reduce((i,o)=>i+(lx.test(o)?sx:o===""?ux:dx),r)}function hx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function mx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=gx({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!u)return null;Object.assign(r,u.params);let d=l.route;o.push({params:r,pathname:On([i,u.pathname]),pathnameBase:bx(On([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=On([i,u.pathnameBase]))}return o}function gx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let h=l[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=wx(l[d]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function vx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),id(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yx(e){try{return decodeURI(e)}catch(t){return id(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wx(e,t){try{return decodeURIComponent(e)}catch(n){return id(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function D1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function id(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ir(e):e;return{pathname:n?n.startsWith("/")?n:Sx(n,t):t,search:kx(r),hash:Ex(i)}}function Sx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ms(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function F1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ir(e):(i=Ia({},e),Ie(!i.pathname||!i.pathname.includes("?"),ms("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),ms("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),ms("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=xx(i,l),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const On=e=>e.join("/").replace(/\/\/+/g,"/"),bx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ex=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Cx{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Tx(e){return e instanceof Cx}const _x=["post","put","patch","delete"];[..._x];function Nc(){return Nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nc.apply(this,arguments)}function Px(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Ox=typeof Object.is=="function"?Object.is:Px,{useState:Mx,useEffect:zx,useLayoutEffect:Lx,useDebugValue:Ax}=_s;function $x(e,t,n){const r=t(),[{inst:i},o]=Mx({inst:{value:r,getSnapshot:t}});return Lx(()=>{i.value=r,i.getSnapshot=t,gs(i)&&o({inst:i})},[e,r,t]),zx(()=>(gs(i)&&o({inst:i}),e(()=>{gs(i)&&o({inst:i})})),[e]),Ax(r),r}function gs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Ox(n,r)}catch{return!0}}function Nx(e,t,n){return t()}const Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rx=!Ix,Dx=Rx?Nx:$x;"useSyncExternalStore"in _s&&(e=>e.useSyncExternalStore)(_s);const jx=A.exports.createContext(null),Fx=A.exports.createContext(null),B1=A.exports.createContext(null),wl=A.exports.createContext(null),xl=A.exports.createContext(null),co=A.exports.createContext({outlet:null,matches:[]}),H1=A.exports.createContext(null);function Bx(e,t){let{relative:n}=t===void 0?{}:t;uo()||Ie(!1);let{basename:r,navigator:i}=A.exports.useContext(wl),{hash:o,pathname:a,search:l}=V1(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:On([r,a])),i.createHref({pathname:s,search:l,hash:o})}function uo(){return A.exports.useContext(xl)!=null}function Sl(){return uo()||Ie(!1),A.exports.useContext(xl).location}function fo(){uo()||Ie(!1);let{basename:e,navigator:t}=A.exports.useContext(wl),{matches:n}=A.exports.useContext(co),{pathname:r}=Sl(),i=JSON.stringify(j1(n).map(l=>l.pathnameBase)),o=A.exports.useRef(!1);return A.exports.useEffect(()=>{o.current=!0}),A.exports.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let c=F1(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:On([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,i,r])}function V1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=A.exports.useContext(co),{pathname:i}=Sl(),o=JSON.stringify(j1(r).map(a=>a.pathnameBase));return A.exports.useMemo(()=>F1(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Hx(e,t){uo()||Ie(!1);let{navigator:n}=A.exports.useContext(wl),r=A.exports.useContext(B1),{matches:i}=A.exports.useContext(co),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Sl(),c;if(t){var u;let x=typeof t=="string"?ir(t):t;l==="/"||((u=x.pathname)==null?void 0:u.startsWith(l))||Ie(!1),c=x}else c=s;let d=c.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",v=ox(e,{pathname:h}),y=Gx(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:On([l,n.encodeLocation?n.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:On([l,n.encodeLocation?n.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,r||void 0);return t&&y?A.exports.createElement(xl.Provider,{value:{location:Nc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:gn.Pop}},y):y}function Vx(){let e=qx(),t=Tx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return A.exports.createElement(A.exports.Fragment,null,A.exports.createElement("h2",null,"Unhandled Thrown Error!"),A.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.exports.createElement("pre",{style:i},n):null,A.exports.createElement("p",null,"💿 Hey developer 👋"),A.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.exports.createElement("code",{style:o},"errorElement")," props on ",A.exports.createElement("code",{style:o},"<Route>")))}class Ux extends A.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?A.exports.createElement(H1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Wx(e){let{routeContext:t,match:n,children:r}=e,i=A.exports.useContext(jx);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),A.exports.createElement(co.Provider,{value:t},r)}function Gx(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Ie(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,c=n?a.route.errorElement||A.exports.createElement(Vx,null):null,u=()=>A.exports.createElement(Wx,{match:a,routeContext:{outlet:o,matches:t.concat(r.slice(0,l+1))}},s?c:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||l===0)?A.exports.createElement(Ux,{location:n.location,component:c,error:s,children:u()}):u()},null)}var h0;(function(e){e.UseRevalidator="useRevalidator"})(h0||(h0={}));var Ic;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ic||(Ic={}));function Yx(e){let t=A.exports.useContext(B1);return t||Ie(!1),t}function qx(){var e;let t=A.exports.useContext(H1),n=Yx(Ic.UseRouteError),r=A.exports.useContext(co),i=r.matches[r.matches.length-1];return t||(r||Ie(!1),i.route.id||Ie(!1),(e=n.errors)==null?void 0:e[i.route.id])}function Nt(e){Ie(!1)}function Qx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=gn.Pop,navigator:o,static:a=!1}=e;uo()&&Ie(!1);let l=t.replace(/^\/*/,"/"),s=A.exports.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=ir(r));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:v="default"}=r,y=A.exports.useMemo(()=>{let x=D1(c,l);return x==null?null:{pathname:x,search:u,hash:d,state:h,key:v}},[l,c,u,d,h,v]);return y==null?null:A.exports.createElement(wl.Provider,{value:s},A.exports.createElement(xl.Provider,{children:n,value:{location:y,navigationType:i}}))}function Xx(e){let{children:t,location:n}=e,r=A.exports.useContext(Fx),i=r&&!t?r.router.routes:Rc(t);return Hx(i,n)}var m0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(m0||(m0={}));new Promise(()=>{});function Rc(e,t){t===void 0&&(t=[]);let n=[];return A.exports.Children.forEach(e,(r,i)=>{if(!A.exports.isValidElement(r))return;if(r.type===A.exports.Fragment){n.push.apply(n,Rc(r.props.children,t));return}r.type!==Nt&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Rc(r.props.children,o)),n.push(a)}),n}function Dc(){return Dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dc.apply(this,arguments)}function Kx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Zx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jx(e,t){return e.button===0&&(!t||t==="_self")&&!Zx(e)}const e6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function t6(e){let{basename:t,children:n,window:r}=e,i=A.exports.useRef();i.current==null&&(i.current=ex({window:r,v5Compat:!0}));let o=i.current,[a,l]=A.exports.useState({action:o.action,location:o.location});return A.exports.useLayoutEffect(()=>o.listen(l),[o]),A.exports.createElement(Qx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const n6=A.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:c,preventScrollReset:u}=t,d=Kx(t,e6),h=Bx(c,{relative:i}),v=r6(c,{replace:a,state:l,target:s,preventScrollReset:u,relative:i});function y(x){r&&r(x),x.defaultPrevented||v(x)}return A.exports.createElement("a",Dc({},d,{href:h,onClick:o?r:y,ref:n,target:s}))});var g0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(g0||(g0={}));var v0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(v0||(v0={}));function r6(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=fo(),s=Sl(),c=V1(e,{relative:a});return A.exports.useCallback(u=>{if(Jx(u,n)){u.preventDefault();let d=r!==void 0?r:Gi(s)===Gi(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,c,r,i,n,e,o,a])}function i6(){return p("div",{className:"container error404",children:N("div",{className:"descriptions",children:[p("p",{className:"title_404",children:"404"}),p("p",{className:"not_found",children:"Page not found"}),p("p",{className:"description_error",children:"The resource requested could not be found on this Server!"}),p(n6,{to:"/",className:"btn_home",children:"Home"})]})})}const Lr={ADD:"ADD",UPDATE:"UPDATE",DELETE:"DELETE"},o6=(e,t)=>{switch(t.type){case Lr.ADD:return[...e,t.payload];case Lr.DELETE:return e.filter(n=>n.id!==t.payload);case Lr.UPDATE:return e.map(n=>n.id===t.payload.id?{...e,id:t.payload.id,nombre:t.payload.nombre,apellido:t.payload.apellido,edad:t.payload.edad}:n);default:return e}},po=A.exports.createContext(),a6=[{id:1,nombre:"Carlos Raul",apellido:"Perez Sevillano",edad:12},{id:2,nombre:"Kevin Manuel",apellido:"Velasquez Rojas",edad:18},{id:3,nombre:"Samuel",apellido:"Castillo Ordoñez",edad:17},{id:4,nombre:"Camila Veronica",apellido:"Hurtado Serna",edad:21},{id:5,nombre:"Viviana Sofia",apellido:"Cornejo de Torre",edad:18}],l6=({children:e})=>{const[t,n]=A.exports.useReducer(o6,a6);return p(po.Provider,{value:{data:t,dispatch:n},children:e})},s6=P.h2`
    color: orange;
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`,c6=P.form`
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
`,Dn=P.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`,u6=P.input`
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
`;function d6({id:e,setModal:t}){var u,d,h,v,y,x,E;const{data:n,dispatch:r}=A.exports.useContext(po),i=n.find(g=>g.id===e),{register:o,formState:{errors:a},reset:l,handleSubmit:s}=nd({defaultValues:i});return N(Ln,{children:[p(s6,{children:"Actualizar"}),N(c6,{onSubmit:s(g=>{g&&(r({type:Lr.UPDATE,payload:g}),t(!1),l())}),children:[p("input",{type:"text",autoComplete:"true",placeholder:"Nombre",...o("nombre",{required:!0,maxLength:100}),name:"nombre"}),((u=a.nombre)==null?void 0:u.type)==="required"&&p(Dn,{children:"El dato es obligatorio"}),((d=a.nombre)==null?void 0:d.type)==="maxLength"&&p(Dn,{children:"El nombre es demasiado largo"}),p("input",{type:"text",placeholder:"Apellido",autoComplete:"true",...o("apellido",{required:!0,maxLength:100}),name:"apellido"}),((h=a.apellido)==null?void 0:h.type)=="required"&&p(Dn,{children:"El apellido es obligatorio"}),((v=a.apellido)==null?void 0:v.type)==="maxLength"&&p(Dn,{children:"El apellido es demasiado largo"}),p("input",{type:"number",placeholder:"Edad",autoComplete:"true",name:"edad",...o("edad",{required:!0,min:12,max:85})}),((y=a.edad)==null?void 0:y.type)==="required"&&p(Dn,{children:"La edad es obligatorio"}),((x=a.edad)==null?void 0:x.type)==="min"&&p(Dn,{children:"La edad minima 12"}),((E=a.edad)==null?void 0:E.type)==="max"&&p(Dn,{children:"La edad maxima es 85"}),p(u6,{type:"submit",value:"Guardar"})]})]})}const f6=P.div`
    padding-top: 28px;
    display: flex;
    flex-direction: column;
`,p6=P.div`
    background-color: rgb(0, 0, 0,0.9);
    padding: 1rem 0.5rem;
    color: white;
    span{
        color: red;
    }
`,h6=P.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    margin-top: 0.5rem;
`,y0=P.button`
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
`;function m6({setModal:e,id:t}){const{data:n,dispatch:r}=A.exports.useContext(po),i=n.find(a=>a.id==t),o=()=>{r({type:Lr.DELETE,payload:i.id}),e(!1)};return N(f6,{children:[p(p6,{children:N("p",{children:["¿ Estas seguro de eliminar al usuario",N("span",{children:[" ",i.nombre," ",i.apellido]})," ?"]})}),N(h6,{children:[p(y0,{$yes:!0,onClick:o,children:"Si"}),p(y0,{onClick:()=>e(!1),children:"No"})]})]})}const g6=P.div`
    width: 100%;
    overflow: auto;
`,v6=P.table`
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
`,w0=P.div`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0px 5px;
    color: ${e=>e.$update?"orange":"red"};
    &:hover{
        color: ${e=>e.$update?"rgb(255, 182, 46)":"rgb(255, 29, 29)"};
    }
`;function y6(){const{data:e}=A.exports.useContext(po),[t,n]=A.exports.useState(),[r,i]=A.exports.useState(),[o,a]=A.exports.useState(!1),[l,s]=A.exports.useState(!1),c=d=>{n(d),a(!0)},u=d=>{i(d),s(!0)};return N(g6,{children:[N(v6,{children:[p("thead",{children:N("tr",{children:[p("th",{children:"Nombre"}),p("th",{children:"Apellido"}),p("th",{children:"Edad"}),p("th",{children:"Opciones"})]})}),p("tbody",{children:e.length===0?p("tr",{children:p("td",{colSpan:4,children:"Sin datos"})}):e.map(d=>N("tr",{children:[p("td",{children:d.nombre}),p("td",{children:d.apellido}),p("td",{children:d.edad}),N("td",{children:[p(w0,{$update:!0,children:p(Pw,{onClick:()=>c(d.id)})}),p(w0,{children:p(Iy,{onClick:()=>u(d.id)})})]})]},d.id))})]}),o&&p(Ui,{Modal:o,setModal:a,children:p(d6,{id:t,setModal:a})}),l&&p(Ui,{Modal:l,setModal:s,children:p(m6,{id:r,setModal:s})})]})}const w6=P.h2`
    color: rgb(1, 158, 1);
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`,x6=P.form`
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
`,jn=P.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`,S6=P.input`
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
`;function b6({setModalAdd:e}){var l,s,c,u,d,h,v;const{register:t,handleSubmit:n,reset:r,formState:{errors:i}}=nd(),{dispatch:o}=A.exports.useContext(po);return N(Ln,{children:[p(w6,{children:"Agregar"}),N(x6,{onSubmit:n(y=>{y&&(o({type:Lr.ADD,payload:{id:Date.now(),nombre:y.nombre,apellido:y.apellido,edad:y.edad}}),r(),e(!1))}),children:[p("input",{type:"text",placeholder:"Nombre",autoComplete:"true",...t("nombre",{required:!0,maxLength:100})}),((l=i.nombre)==null?void 0:l.type)==="required"&&p(jn,{children:"El dato es obligatorio"}),((s=i.nombre)==null?void 0:s.type)==="maxLength"&&p(jn,{children:"El nombre es demasiado largo"}),p("input",{type:"text",placeholder:"Apellido",autoComplete:"true",...t("apellido",{required:!0,maxLength:100})}),((c=i.apellido)==null?void 0:c.type)=="required"&&p(jn,{children:"El apellido es obligatorio"}),((u=i.apellido)==null?void 0:u.type)==="maxLength"&&p(jn,{children:"El apellido es demasiado largo"}),p("input",{type:"number",placeholder:"Edad",autoComplete:"true",...t("edad",{required:!0,min:12,max:85})}),((d=i.edad)==null?void 0:d.type)==="required"&&p(jn,{children:"La edad es obligatorio"}),((h=i.edad)==null?void 0:h.type)==="min"&&p(jn,{children:"La edad minima 12"}),((v=i.edad)==null?void 0:v.type)==="max"&&p(jn,{children:"La edad maxima es 85"}),p(S6,{type:"submit",value:"Enviar"})]})]})}const k6=P.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
`,E6=P.div`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,C6=P.h1`
    color: #1778F2;
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    
    @media screen and (max-width:375px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
`,T6=P.button`
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
`;function _6(){const[e,t]=A.exports.useState(!1);return p(l6,{children:p(k6,{children:N(E6,{className:"container",children:[p(C6,{children:"CRUD useContext +  useReducer + useForm"}),p(T6,{onClick:()=>t(!0),children:"Agregar"}),e&&p(Ui,{Modal:e,setModal:t,children:p(b6,{setModalAdd:t})}),p(y6,{})]})})})}function P6({image:e,name:t,status:n,specie:r}){return p(Ln,{children:N("div",{className:"card-character",children:[p("img",{src:e,alt:t}),p("div",{className:"container-name",children:p("h2",{className:"name",children:t})}),N("div",{className:"datos",children:[N("div",{className:"row",children:[p("p",{className:"estado",children:"Estado: "}),p("p",{children:n})]}),N("div",{className:"row",children:[p("p",{className:"especie",children:"Estado: "}),p("p",{children:r})]})]})]})})}function O6(){let[e,t]=A.exports.useState([]),[n,r]=A.exports.useState(""),[i,o]=A.exports.useState(1);A.exports.useEffect(()=>{let c=`https://rickandmortyapi.com/api/character/?page=${i}`;fetch(c).then(u=>u.json()).then(u=>{u.results.map(d=>t(h=>[...h,d]))})},[i]);const a=()=>{const{scrollTop:c,clientHeight:u,scrollHeight:d}=document.documentElement;c+u>=d-16&&o(h=>h+1)};A.exports.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]);let l=[];return n?l=e.filter(c=>c.name.toLowerCase().includes(n.toLowerCase())):l=e,p("div",{children:N("div",{className:"container-app-morty",id:"infiniteScroll",children:[N("header",{className:"header-morty",children:[p("h1",{className:"title-app-morty",children:"Rick and Morty"}),p("input",{type:"text",value:n,onChange:c=>{r(c.target.value),window.scrollTo(0,0)},placeholder:"Buscar personaje",maxLength:"50",className:"input-busqueda"})]}),p("main",{className:"main-morty",children:l.length>0&&l.map(c=>p(P6,{image:c.image,name:c.name,status:c.status,specie:c.species},c.id))}),l.length===0&&p("div",{className:"container-loader",children:p(rd,{})}),p(I1,{})]})})}const M6=P.div`
    color: white;
    background-color: rgb(3, 3, 3);
    border-radius: 6px;
`,z6=P.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`,L6=P.div`
    padding: 0.5rem 1rem ;
`,A6=P.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: fantasy;
`,vs=P.div`
    display: flex;
    gap: 0.5rem;
`,ys=P.p`
    font-weight: 600;
`,ws=P.p`
    flex-wrap: wrap;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
`;function $6({nombre:e,ruta:t,capital:n,poblacion:r,subregion:i}){return N(M6,{children:[p(z6,{src:t,alt:e}),N(L6,{children:[p(A6,{children:e}),N(vs,{children:[p(ys,{children:"Capital: "}),p(ws,{children:n?n.join(" "):"No Tiene"})]}),N(vs,{children:[p(ys,{children:"Población: "}),p(ws,{children:r!="0"?r:"-"})]}),N(vs,{children:[p(ys,{children:"Subregion: "}),p(ws,{children:i||"No Tiene"})]})]})]})}const N6=P.div`
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
`;function I6(){const{theme:e,handleTheme:t}=A.exports.useContext(At);return p(N6,{onClick:t,color:e,children:"☀️"})}const R6=P.div`
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
`;function D6(){const[e,t]=A.exports.useState(!1),{theme:n}=A.exports.useContext(At);return A.exports.useEffect(()=>{const i=()=>{(window.pageXOffset||document.documentElement.scrollTop)>300?t(!0):t(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),p(Ln,{children:e&&p(R6,{onClick:()=>{window.scrollTo(0,0)},color:n,children:p(a1,{})})})}const j6=P.div`
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
    min-height: 100vh;
    width: 100%;
    padding-top: 7rem;
    padding-bottom: 1rem;
`,F6=P.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`,B6=P.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`,H6=P.h1`
    color: white;
    font-size: 1.5rem;
    @media screen and (min-width:480px){
        font-size: 2rem;
    }
`,V6=P.div`
    width: calc(100% - 2rem);
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
`,U6=P.input`
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    width: 140px;
    color: ${e=>e.color=="dark"?"black":"white"};
    background-color: ${e=>e.color=="dark"?"white":"black"};
    
    @media screen and (min-width:480px){
        width: 180px;
    }
`,W6=P.select`
    padding: 0.25rem 1rem;
    background-color: ${e=>e.color=="dark"?"white":"black"};
    color: ${e=>e.color=="dark"?"black":"white"};
`,G6=P.main`  
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

`,Y6=P.p`
    color: ${e=>e.color=="dark"?"white":"black"};
`,q6=P.div`
    position: fixed;
    height: 100vh;
    left: calc(50% - 28px);
`,Q6=P.div`
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
`;function X6(){const[e,t]=A.exports.useState([]),[n,r]=A.exports.useState("https://restcountries.com/v3.1/all"),[i,o]=A.exports.useState(""),{theme:a}=A.exports.useContext(At),[l,s]=A.exports.useState(!1),c=h=>{o(h.target.value)};let u=[];i?u=e.filter(h=>h.name.common.toLowerCase().includes(i.toLowerCase())):u=e;const d=h=>{h.target.value==="all"?r("https://restcountries.com/v3.1/all"):r(`https://restcountries.com/v3.1/region/${h.target.value}`)};return A.exports.useEffect(()=>{(()=>{const v=fetch(n);s(!0),v.then(y=>y.json()).then(y=>{t([...y]),s(!1)}).catch(y=>console.log(y))})()},[n]),p(j6,{color:a,children:N("div",{className:"container",children:[N(F6,{children:[p(B6,{color:a,children:p(H6,{children:"Where in the world?"})}),N(V6,{className:"container",color:a,children:[p(U6,{value:i,onChange:c,type:"text",placeholder:"Buscar País",color:a}),N(W6,{name:"paises",onChange:d,color:a,children:[p("option",{value:"all",children:"Todos"}),p("option",{value:"Africa",children:"Africa"}),p("option",{value:"Americas",children:"America"}),p("option",{value:"Asia",children:"Asia"}),p("option",{value:"Europe",children:"Europa"}),p("option",{value:"Oceania",children:"Oceania"})]})]})]}),N(G6,{children:[u.length===0?N(Y6,{color:a,children:["No se encuentra: ",p("mark",{children:i})]}):p(Q6,{children:u.map(h=>p($6,{nombre:h.name.common,ruta:h.flags.svg,capital:h.capital,poblacion:h.population,subregion:h.subregion},h.name.common))}),l&&p(q6,{children:p(rd,{})})]}),p(D6,{}),p(I6,{})]})})}function K6(){return p(s1,{children:p(X6,{})})}const Ot={ADD_PRODUCTO:"ADD_PRODUCTO",REMOVE_PRODUCTO:"REMOVE_PRODUCTO",DECREASE_ONE_PRODUCTO:"DECREASE_ONE_PRODUCTO",REMOVE_TOTAL_PRODUCTOS:"REMOVE_TOTAL_PRODUCTOS"},Z6=(e,t)=>{switch(t.type){case Ot.ADD_PRODUCTO:let n=e.productos.find(o=>o.id===t.payload);return e.carrito.find(o=>o.id===n.id)?{...e,carrito:e.carrito.map(o=>o.id===n.id?{...o,cantidad:o.cantidad+1}:o)}:{...e,carrito:[...e.carrito,{...n,cantidad:1}]};case Ot.DECREASE_ONE_PRODUCTO:let i=e.carrito.find(o=>o.id===t.payload);return i.cantidad>1?{...e,carrito:e.carrito.map(o=>o.id===i.id?{...o,cantidad:o.cantidad-1}:o)}:{...e,carrito:e.carrito.filter(o=>o.id!==i.id)};case Ot.REMOVE_PRODUCTO:return{...e,carrito:e.carrito.filter(o=>o.id!=t.payload)};case Ot.REMOVE_TOTAL_PRODUCTOS:return{...e,carrito:[]};default:return e}},Yr=A.exports.createContext(),J6={productos:[{id:"1",nombre:"Audifono Gaming X15 PRO Bluetooth",precio:129,img:"audifonos.jpg"},{id:"2",nombre:"Televisor Panasonic LCD 4K UHD Smart 43",precio:1299,img:"televisor.jpg"},{id:"3",nombre:"Smartphone Galaxy A23 128Gb 4Gb Single Sim Negro",precio:1049,img:"celular.jpg"},{id:"4",nombre:"Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB",precio:364,img:"teclado.jpg"}],carrito:[]},e5=({children:e})=>{const[t,n]=A.exports.useReducer(Z6,J6);return p(Yr.Provider,{value:{data:t,dispatch:n},children:e})},t5=P.header`
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
`,n5=P.nav`
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
`,r5=P.div`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    
    &:hover{
        transition: background-color 0.2s ease-in;
        background-color: #007bff;
        border-radius: 40px;
    }
`,i5=P.button`
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
`,o5=P.div`
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
`;function U1(){const e=fo(),{data:t}=A.exports.useContext(Yr),n=t.carrito.length>0&&t.carrito.map(r=>r.cantidad).reduce((r,i)=>r+i);return p(t5,{children:N(n5,{children:[p(r5,{onClick:()=>e("/projects/ecommerce"),children:p("h2",{children:"Store"})}),N(i5,{onClick:()=>e("/projects/ecommerce/cart"),children:[p(l1,{}),t.carrito.length>0&&p(o5,{children:n})]})]})})}const a5=P.article`
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
`,l5=P.div`
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
`,s5=P.div`
    margin-top: 1rem;
    gap: 0.5rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,c5=P.div`
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
`,u5=P.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
        color: red;
        font-size: 1.25rem;
    }
`,d5=P.div`
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
`,f5=P.span`
    text-align: center;
    width: 40px;
`,p5=P.div`
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
`;function h5({id:e,setModalAdd:t}){const{data:n,dispatch:r}=A.exports.useContext(Yr),i=n.productos.find(u=>u.id==e),o=n.carrito.find(u=>u.id==i.id),a=fo(),l=()=>{a("/projects/ecommerce"),t(!1)},s=()=>{a("/projects/ecommerce/cart"),t(!1)},c=()=>{o&&r({type:Ot.DECREASE_ONE_PRODUCTO,payload:i.id})};return N(a5,{children:[p(l5,{children:p("img",{src:`img/${i.img}`,alt:i.nombre})}),N(s5,{children:[N(c5,{children:[p("p",{children:i.nombre}),N(u5,{children:[N("p",{children:["S/.",i.precio]}),N(d5,{children:[p("button",{onClick:()=>r({type:Ot.ADD_PRODUCTO,payload:i.id}),children:"+"}),p(f5,{children:o?o.cantidad:0}),p("button",{onClick:c,children:"-"})]})]})]}),N(p5,{children:[p("button",{onClick:l,children:"seguir comprando"}),p("button",{onClick:s,children:"Ir al carrito"})]})]})]})}const m5=P.div`
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
`,g5=P.div`
    background-color: white;
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
`,v5=P.div`
    display: flex;
    flex-direction: column;
    flex: 100%;
`,y5=P.div`
    display: flex;
    flex: 100%;
    align-items: center;
    justify-content: center;
`,w5=P.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: 600;
    span{
        font-weight: 500;
        color: #db0909;
        font-size: 1.1rem;
    }
`,x5=P.button`
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
`;function S5(){const{data:e,dispatch:t}=A.exports.useContext(Yr),[n,r]=A.exports.useState(!1),[i,o]=A.exports.useState(0),a=l=>{o(l),r(!0),t({type:Ot.ADD_PRODUCTO,payload:l})};return N(m5,{className:"container",children:[e.productos.map(l=>p(g5,{children:N(v5,{children:[p(y5,{children:p("img",{src:`img/${l.img}`,alt:l.nombre})}),N(w5,{children:[p("p",{children:l.nombre}),N("p",{children:["Precio: ",N("span",{children:["S/.",l.precio]})]}),p(x5,{onClick:()=>a(l.id),children:"Añadir al Carrito"})]})]})},l.id)),n&&p(Ui,{modal:n,setModal:r,children:p(h5,{id:i,setModalAdd:r})})]})}function b5(){return N(Ln,{children:[p(U1,{}),p(S5,{})]})}const k5=P.div`
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
`,E5=P.div`
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
`,C5=P.div`
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
`,T5=P.p`
    font-size: calc(1rem + 1vh);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 600;
    color: red;
`,_5=P.div`
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
`,P5=P.div`
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
`;function O5({id:e,img:t,nombre:n,precio:r,cantidad:i}){const{dispatch:o}=A.exports.useContext(Yr);return N(k5,{children:[p(E5,{children:p("img",{src:`img/${t}`})}),N(C5,{children:[p("h2",{children:n}),N("div",{children:[N(T5,{children:["S/.",r]}),N(_5,{children:[p("button",{onClick:()=>o({type:Ot.ADD_PRODUCTO,payload:e}),children:"+"}),p("p",{children:i}),p("button",{onClick:()=>o({type:Ot.DECREASE_ONE_PRODUCTO,payload:e}),children:"-"})]})]}),p(P5,{children:p("button",{onClick:()=>o({type:Ot.REMOVE_PRODUCTO,payload:e}),children:"Eliminar"})})]})]})}const M5=P.main`
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
`,z5=P.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,L5=P.div`
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

`,A5=P.div`
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
`;function $5(){const{data:e,dispatch:t}=A.exports.useContext(Yr),n=e.carrito.length>0&&e.carrito.map(o=>o.cantidad).reduce((o,a)=>o+a),r=fo(),i=()=>{t({type:Ot.REMOVE_TOTAL_PRODUCTOS}),r("/projects/ecommerce")};return N(M5,{className:"container",cantidad:e.carrito.length>0,children:[N(z5,{children:[e.carrito.length>0&&N("h1",{children:["Carrito (",n," productos)"]}),e.carrito.length>0?e.carrito.map(o=>p(O5,{id:o.id,img:o.img,nombre:o.nombre,precio:o.precio,cantidad:o.cantidad},o.id)):N(L5,{children:[p("div",{children:p(l1,{})}),p("h2",{children:"Tu Carro está vacío"}),p("p",{children:"Tenemos los mejores precios en productos tecnológicos.¿Te los vas a perder?"}),p("button",{onClick:()=>r("/projects/ecommerce"),children:"Inicio"})]})]}),p(A5,{children:e.carrito.length>0&&N("div",{children:[p("h2",{children:"Resumen de la Orden"}),N("div",{children:[N("p",{children:["Total :  ",N("span",{children:["S/. ",e.carrito.map(o=>o.cantidad*o.precio).reduce((o,a)=>o+a)]})]}),p("button",{onClick:i,children:"Comprar"})]})]})})]})}function N5(){return N(Ln,{children:[p(U1,{}),p($5,{})]})}const I5=P.section`
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
`,R5=P.article`
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
`,D5=P.article`
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
`,j5=P.div`
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
`,F5=P.div`
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
`,B5=P.h1`
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
`,x0=P.p`
    color: hsl(0, 0%, 63%);
    font-size: 1rem;
    line-height: 1.2rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
`,H5=P.button`
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
`,V5=P.div`
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen  and (min-width:1024px) {
        padding: 3rem;
    }
`,U5=P.h2`
    font-family: 'League Spartan', sans-serif;
    font-size: 1rem;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    color: black;
`,W5=[{id:"1",ruta:"imagenes-room/desktop-image-hero-1.jpg",title:"Discover innovative ways to decorate",content:"We provide unmatched quality, comfort,and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. "},{id:"2",ruta:"imagenes-room/desktop-image-hero-2.jpg",title:"We are available all across the globe",content:"With stores all over the world. it`s easy for you to find furniture for your home or place of business.Locally, we`re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questiongs?Don`t hesitate to contact us today."},{id:"3",ruta:"imagenes-room/desktop-image-hero-3.jpg",title:"Manufactured with the best materials",content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand wta customers want for their home and office."}];function G5(){const[e,t]=A.exports.useState(1),n=W5.filter(a=>a.id==e),r=()=>e<=1?t(3):t(e-1),i=()=>e>=3?t(1):t(e+1),o=fo();return p(Ln,{children:N(I5,{children:[N(R5,{children:[n.map(a=>p("div",{children:p("img",{src:a.ruta,alt:"img-desktop"})},a.id)),N(j5,{children:[N(F5,{children:[p("button",{onClick:r,children:p("img",{src:"imagenes-room/icon-angle-left.svg",alt:"left"})}),p("button",{onClick:i,children:p("img",{src:"imagenes-room/icon-angle-right.svg",alt:"right"})})]}),n.map(a=>N("div",{children:[p(B5,{children:a.title}),p(x0,{children:a.content})]},a.id)),N(H5,{onClick:()=>o("/projects/room-page"),children:["SHOP NOW",p("span",{className:"arrow",children:p("img",{src:"imagenes-room/icon-arrow.svg",alt:"arrow"})})]})]})]}),N(D5,{children:[p("img",{src:"imagenes-room/image-about-dark.jpg",alt:"img-mobile"}),N(V5,{children:[p(U5,{children:"ABOUT OUR FURNITURE"}),p(x0,{children:"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick o cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialist are available to help you create your dream space"})]}),p("img",{src:"imagenes-room/image-about-light.jpg",alt:"img-mobile"})]})]})})}const Y5=P.header`
    width: 100%;
`,q5=P.nav`
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

`,Q5=P.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
    `,X5=P.div`
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
`,K5=P.div`
    width: 100%;
    position: absolute;
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
`,Z5=P.button`
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
`,J5=P.ul`
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
`,e8=P.div`
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
`;function t8(){const[e,t]=A.exports.useState(!1);return N(Y5,{children:[N(q5,{children:[p(Q5,{onClick:()=>t(!0),children:p("img",{src:"imagenes-room/icon-hamburger.svg",alt:"nav-hamburger"})}),p(X5,{children:p("img",{src:"imagenes-room/logo.svg",alt:"logo",className:"logo"})}),N(K5,{visible:e,children:[p(Z5,{className:"container-close",onClick:()=>t(!1),children:p("img",{src:"imagenes-room/icon-close.svg",alt:"close"})}),N(J5,{children:[p("li",{className:"list-item",children:p("a",{href:"../#/projects/room-page",className:"item-link",children:"home"})}),p("li",{className:"list-item",children:p("a",{href:"../#/projects/room-page",className:"item-link",children:"shop"})}),p("li",{className:"list-item",children:p("a",{href:"../#/projects/room-page",className:"item-link",children:"about"})}),p("li",{className:"list-item",children:p("a",{href:"../#/projects/room-page",className:"item-link",children:"contact"})})]})]})]}),e&&p(e8,{})]})}const n8=P.div`
    position: relative;
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
`;function r8(){return N(n8,{children:[p(t8,{}),p(G5,{})]})}const i8=P.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    background-color: ${e=>e.colorHeader?"white":"transparente"};
    
`,o8=P.nav`
    display: flex;
    width: 100%;
    align-items: center;
    left: 0;
    top: 0;
    justify-content: space-between;
    max-width: 1024px;
    height: 4rem;
    @media screen and (min-width:769px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width:1025px) {
        margin-left: auto;
        margin-right: auto;
    }
`,a8=P.div`
    display:flex;
    height: inherit;
    justify-content: center;
    align-items: center;
    img{
        width: 120px;
        height: 1rem;
    }
`,l8=P.div`
    display: none;

    @media screen and (max-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`,s8=P.div`
    ul{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
    li{
        color: var(--dark_blue);
        cursor: pointer;
    }
    li:hover{
        color: var(--bright_red);
    }
    @media screen and (max-width: 768px) {
        background-color: rgb(0, 0, 0,0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        top: 4rem;
        color: black;
        visibility: ${({click:e})=>e?"visible":"hidden"};
        transition: opacity 0.4s linear;
        opacity: ${({click:e})=>e?"1":"0"};
        height: 100vh;
        padding: 1rem;
        z-index: 1000;

        ul{
            flex-direction: column;
            background-color: white;
            margin: 0 auto;
            border-radius: 8px;
            overflow: hidden;
            z-index: 1000;
            background-color: white;
            margin: 0 auto;
            border-radius: 8px;
            overflow: hidden;
            z-index: 1000;
        }
        li{
            padding:1rem 0;
            width: 100%;
            text-align: center;
            cursor: pointer;
        }
        li:hover{
            background-color:hsl(12,88%,59%);
            color: white;
        }
    }
`,c8=P.div`
    display:block;
    button{
        border: none;
        outline: none;
        margin: auto;
        border-radius: 40px;
        width: 100px;
        background-color: var(--bright_red);
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        transition: box-shadow 0.3s linear;
        color: white;
    }
    button:hover{
        opacity: 0.9;
        box-shadow: 1px 1px 6px 2px rgb(0, 0, 0,0.9);
    }
    @media screen and (max-width:768px){
        display: none;
    }
`;function u8(){const[e,t]=A.exports.useState(!1),[n,r]=A.exports.useState(!1);return A.exports.useEffect(()=>{const i=()=>{window.scrollY>=30?r(!0):r(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),p(i8,{colorHeader:n,children:N(o8,{className:"container",children:[p(a8,{children:p("img",{src:"imagenes-manage/logo.svg",alt:"logo"})}),p(s8,{click:e,children:N("ul",{children:[p("li",{children:"Pricing"}),p("li",{children:"Product"}),p("li",{children:"About Us"}),p("li",{children:"Careers"}),p("li",{children:"Community"})]})}),p(c8,{children:p("button",{className:"btn-started",children:"Get Started"})}),p(l8,{onClick:()=>t(!e),children:e?p("img",{src:"imagenes-manage/icon-close.svg",alt:"icono de cerrar"}):p("img",{src:"imagenes-manage/icon-hamburger.svg",alt:"icono de amburguesa mobile",id:"amburguesa"})})]})})}const d8=P.section`
    display: flex;
    gap: 3rem;
    flex-direction: row-reverse;
    padding-top: 4rem;
    padding-bottom: 4rem;
    z-index: 1;
    

    @media screen and (max-width:768px) {
        gap: 3rem;
        flex-direction: column;
    }
    @media screen and (min-width:769px) {
        margin-left:1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width: 1025px) {
        margin: 0 auto;
        height: 100vh;
    }
`,f8=P.div`
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 499;

    @media screen and (max-width:768px) {
        justify-content: center;
    }
`,p8=P.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    h1{
        font-size: calc(2.4rem + 1vh);
        color: hsl(228, 39%, 23%);
        font-weight: 700;
        line-height: calc(2.5rem + 1vh);
    }
    p{
        font-size: calc(0.9rem + 1vh);
        color: hsl(227, 12%, 61%);
        font-weight: 400;
        line-height: 1.5rem;
    }
    div button{
        border: none;
        outline: none;
        margin: auto;
        border-radius: 40px;
        width: 100px;
        background-color: var(--bright_red);
        padding: 0.5rem 0.8rem;
        color: white;
        cursor: pointer;
    }
    div button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;

    }
    @media screen and (max-width:768px) {
        h1{
            text-align: center;
            font-size: calc(2rem + 1vh);
        }
        p{
            text-align: center;
        }
        div button{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;function h8(){return N(d8,{className:"container",children:[p(f8,{children:p("img",{src:"imagenes-manage/illustration-intro.svg",alt:"imagen principal de las estadisticas"})}),N(p8,{children:[p("h1",{children:"Bring ereryone together to build better products."}),p("p",{children:"Manage makes it simple for software teams to plan day to -day tasks while keeping the larger team goals in view."}),p("div",{children:p("button",{children:"Get Started"})})]})]})}const m8=P.section`
    display: flex;
    gap: 3rem;  
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    z-index:1;
    

    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem; 
    }
    @media screen and (min-width:769px) {
        margin-left:1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width: 1025px) {
        display: flex;
        padding-top: 4rem;
        padding-bottom: 4rem;
        height: calc(100vh - 4rem);
        margin:0 auto;
    }
`,g8=P.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    h2{
        color: var(--dark_blue);
        font-weight: 700;
        font-size: 1.5rem;
    }
    p{
        color: var(--dark_grayish_blue);
        line-height: 1.5rem;
    }
    @media screen and (max-width:768px) {
        h2{
            text-align: center;
        }
        p{
            text-align: center;
        }
    }
`,v8=P.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 2rem;
    width: 100%;
    text-align: left;

    article{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        text-align: left;
    }

    h3{
        display: flex;
        font-size: 1rem;
        color: var(--dark_blue);
        align-items: center;
        border-radius: 25px 0px 0px 25px;
        gap: 0.8rem;
        background-color: var(--very_pale_red);
    }
    span{
        border-radius: 16px;
        overflow: hidden;
        background-color: var(--bright_red);
        color: white;
        width: 60px;
        height: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        color: var(--dark_grayish_blue);
    }
`;function y8(){return N(m8,{className:"container",children:[N(g8,{children:[p("h2",{children:"What´s different about Manage?"}),p("p",{children:"Manage provides all the functionality your team needs without complexity. Our software is tailor-made for modern digital product teams"})]}),N(v8,{children:[N("article",{children:[N("h3",{children:[p("span",{children:"01"})," Track company-wide progress"]}),p("p",{children:"See how your day-to-day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details Never lose sight of the bigger picture again."})]}),N("article",{children:[N("h3",{children:[p("span",{children:"02"})," Advanced built-in reports"]}),p("p",{children:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key  stakeholders informed."})]}),N("article",{children:[N("h3",{children:[p("span",{children:"03"})," Everything you need in one place"]}),p("p",{children:"Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-in-one team productivity solution"})]})]})]})}const w8=P.section`
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: var(--bright_red);
    background-image: url("imagenes-manage/bg-simplify-section-desktop.svg");
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width:768px) {
        background-image: url("imagenes-manage/bg-simplify-section-mobile.svg");
        background-position: left;
    }
`,x8=P.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    h2{
        width: 100%;
        font-size: calc(2rem + 1vh);
        color: white;
        text-align: left;
        line-height: calc(2rem + 1vh);
    }

    div{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    button{
        border: none;
        outline: none;
        border-radius: 40px;
        width: 100px;
        background-color: white;
        padding: 0.5rem 0.8rem;
        color: var(--bright_red);
        cursor: pointer;
    }

    button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;
    }
    
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
        h2{
            text-align: center;
        }
        div{
            width: 100%;
            justify-content: center;
            align-content: center;
        }
    }
    @media screen and (min-width:769px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width:1025px) {
        margin-left: 0;
        margin-right:0;
        margin-left: auto;
        margin-right: auto;
    }
`;function S8(){return p(w8,{children:N(x8,{className:"container",children:[p("h2",{className:"title-simply",children:"Simplify how your team works today."}),p("div",{children:p("button",{className:"btn-started btn-white",children:"Get Started"})})]})})}const b8=P.footer`
    padding: 2rem 0rem;
    background-color: var(--very_dark_blue);
`,k8=P.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "redes links inbox"
    "redes links copy";

    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width:769px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width:1025px) {
        margin-left: 0;
        margin-right:0;
        margin-left: auto;
        margin-right: auto;
    }
`,E8=P.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 1rem;
    grid-area: inbox;

    input{
        outline: none;
        padding: 1rem 0rem 1rem 1rem;
        border-radius: 40px;
        border: none;
        width: 180px;
    }

    button{
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100px;
        border: none;
        outline: none;
        margin: auto;
        border-radius: 40px;
        background-color: var(--bright_red);
        color: white;
        cursor: pointer;
    }
    button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;
    }
    @media screen and (max-width:375px) {
        input{
            width: 150px;
        }
    }
    @media screen and (max-width:768px) {
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
`,C8=P.div`
    padding: 1rem 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-items: center;
    gap: 1rem;
    grid-area: links;
    
    ul{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: white;
    }
    ul li:hover{
        color: var(--bright_red);
        cursor: pointer;
    }
    @media screen and (max-width:768px) {
        gap: 5rem;
    }
`,T8=P.div`
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    grid-area: redes;
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    div:nth-child(1) a{
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:nth-child(1) a:hover{
        color: var(--bright_red);
        background-color: var(--bright_red);
        border-radius: 5px;
    }
    a img{
        width: 30px;
        cursor: pointer;
    }
    div:nth-child(2){
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 1rem 0rem;
    }
    div:nth-child(2) div{
        width: 200px;
    }
    @media screen and (max-width:768px) {
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        
        div:nth-child(1){
            gap: 1rem;
        }
    }
`,_8=P.div`
    text-align: right;
    color: var(--dark_grayish_blue);
    grid-area: copy;
    @media screen and (max-width:768px) {
        text-align: center;
    }
`;function P8(){return p(b8,{children:N(k8,{className:"container",children:[N(E8,{className:"footer-inbox",children:[p("input",{type:"text",placeholder:"Updates in your inbox..."}),p("div",{children:p("button",{children:"GO"})})]}),N(C8,{children:[N("ul",{children:[p("li",{children:"Home"}),p("li",{children:"Pricing"}),p("li",{children:"Products"}),p("li",{children:"About Us"})]}),N("ul",{children:[p("li",{children:"Careers"}),p("li",{children:"Comunity"}),p("li",{children:"Privaty"})]})]}),N(T8,{children:[N("div",{className:"redes",children:[p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-facebook.svg",alt:"facebook"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-youtube.svg",alt:"youtube"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-twitter.svg",alt:"twitter"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-pinterest.svg",alt:"pinterest"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-instagram.svg",alt:"instagram"})})]}),p("div",{children:p("div",{children:p("img",{src:"imagenes-manage/logo2.svg",alt:"logo"})})})]}),p(_8,{className:"copyright",children:p("p",{children:"Copyright 2020. All Rights Reserved"})})]})})}function S0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function od(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:S0(t[n])&&S0(e[n])&&Object.keys(t[n]).length>0&&od(e[n],t[n])})}const W1={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function or(){const e=typeof document<"u"?document:{};return od(e,W1),e}const O8={document:W1,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function gt(){const e=typeof window<"u"?window:{};return od(e,O8),e}function M8(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function jc(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Qn(){return Date.now()}function z8(e){const t=gt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function L8(e,t){t===void 0&&(t="x");const n=gt();let r,i,o;const a=z8(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Fo(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function A8(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ct(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!A8(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const l=i[o],s=Object.getOwnPropertyDescriptor(r,l);s!==void 0&&s.enumerable&&(Fo(e[l])&&Fo(r[l])?r[l].__swiper__?e[l]=r[l]:ct(e[l],r[l]):!Fo(e[l])&&Fo(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:ct(e[l],r[l])):e[l]=r[l])}}}return e}function Bo(e,t,n){e.style.setProperty(t,n)}function G1(e){let{swiper:t,targetPosition:n,side:r}=e;const i=gt(),o=-t.translate;let a=null,l;const s=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",u=(h,v)=>c==="next"&&h>=v||c==="prev"&&h<=v,d=()=>{l=new Date().getTime(),a===null&&(a=l);const h=Math.max(Math.min((l-a)/s,1),0),v=.5-Math.cos(h*Math.PI)/2;let y=o+v*(n-o);if(u(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),u(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(d)};d()}function Ft(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Y1(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function $8(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function N8(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function vn(e,t){return gt().getComputedStyle(e,null).getPropertyValue(t)}function Ra(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function q1(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function xs(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function Fc(e,t,n){const r=gt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let Ss;function I8(){const e=gt(),t=or();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Q1(){return Ss||(Ss=I8()),Ss}let bs;function R8(e){let{userAgent:t}=e===void 0?{}:e;const n=Q1(),r=gt(),i=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},l=r.screen.width,s=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let u=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let y=i==="MacIntel";const x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&y&&n.touch&&x.indexOf(`${l}x${s}`)>=0&&(u=o.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),y=!1),c&&!v&&(a.os="android",a.android=!0),(u||h||d)&&(a.os="ios",a.ios=!0),a}function D8(e){return e===void 0&&(e={}),bs||(bs=R8(e)),bs}let ks;function j8(){const e=gt();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,o]=r.split("Version/")[1].split(" ")[0].split(".").map(a=>Number(a));t=i<16||i===16&&o<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function F8(){return ks||(ks=j8()),ks}function B8(e){let{swiper:t,on:n,emit:r}=e;const i=gt();let o=null,a=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},s=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(d=>{a=i.requestAnimationFrame(()=>{const{width:h,height:v}=t;let y=h,x=v;d.forEach(E=>{let{contentBoxSize:g,contentRect:f,target:m}=E;m&&m!==t.el||(y=f?f.width:(g[0]||g).inlineSize,x=f?f.height:(g[0]||g).blockSize)}),(y!==h||x!==v)&&l()})}),o.observe(t.el))},c=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){s();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",u)}),n("destroy",()=>{c(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",u)})}function H8(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],a=gt(),l=function(u,d){d===void 0&&(d={});const h=a.MutationObserver||a.WebkitMutationObserver,v=new h(y=>{if(t.__preventObserver__)return;if(y.length===1){i("observerUpdate",y[0]);return}const x=function(){i("observerUpdate",y[0])};a.requestAnimationFrame?a.requestAnimationFrame(x):a.setTimeout(x,0)});v.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),o.push(v)},s=()=>{if(!!t.params.observer){if(t.params.observeParents){const u=q1(t.el);for(let d=0;d<u.length;d+=1)l(u[d])}l(t.el,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(u=>{u.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",s),r("destroy",c)}var V8={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(s=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[s,...n])}),e.eventsListeners&&e.eventsListeners[s]&&e.eventsListeners[s].forEach(c=>{c.apply(r,n)})}),e}};function U8(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(vn(r,"padding-left")||0,10)-parseInt(vn(r,"padding-right")||0,10),n=n-parseInt(vn(r,"padding-top")||0,10)-parseInt(vn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function W8(){const e=this;function t(k){return e.isHorizontal()?k:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[k]}function n(k,C){return parseFloat(k.getPropertyValue(t(C))||0)}const r=e.params,{wrapperEl:i,slidesEl:o,size:a,rtlTranslate:l,wrongRTL:s}=e,c=e.virtual&&r.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,d=Ft(o,`.${e.params.slideClass}, swiper-slide`),h=c?e.virtual.slides.length:d.length;let v=[];const y=[],x=[];let E=r.slidesOffsetBefore;typeof E=="function"&&(E=r.slidesOffsetBefore.call(e));let g=r.slidesOffsetAfter;typeof g=="function"&&(g=r.slidesOffsetAfter.call(e));const f=e.snapGrid.length,m=e.slidesGrid.length;let w=r.spaceBetween,b=-E,_=0,$=0;if(typeof a>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*a:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w,d.forEach(k=>{l?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(Bo(i,"--swiper-centered-offset-before",""),Bo(i,"--swiper-centered-offset-after",""));const M=r.grid&&r.grid.rows>1&&e.grid;M&&e.grid.initSlides(h);let T;const V=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(k=>typeof r.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<h;k+=1){T=0;let C;if(d[k]&&(C=d[k]),M&&e.grid.updateSlide(k,C,h,t),!(d[k]&&vn(C,"display")==="none")){if(r.slidesPerView==="auto"){V&&(d[k].style[t("width")]="");const R=getComputedStyle(C),j=C.style.transform,X=C.style.webkitTransform;if(j&&(C.style.transform="none"),X&&(C.style.webkitTransform="none"),r.roundLengths)T=e.isHorizontal()?Fc(C,"width",!0):Fc(C,"height",!0);else{const ne=n(R,"width"),de=n(R,"padding-left"),B=n(R,"padding-right"),q=n(R,"margin-left"),Z=n(R,"margin-right"),ce=R.getPropertyValue("box-sizing");if(ce&&ce==="border-box")T=ne+q+Z;else{const{clientWidth:W,offsetWidth:G}=C;T=ne+de+B+q+Z+(G-W)}}j&&(C.style.transform=j),X&&(C.style.webkitTransform=X),r.roundLengths&&(T=Math.floor(T))}else T=(a-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(T=Math.floor(T)),d[k]&&(d[k].style[t("width")]=`${T}px`);d[k]&&(d[k].swiperSlideSize=T),x.push(T),r.centeredSlides?(b=b+T/2+_/2+w,_===0&&k!==0&&(b=b-a/2-w),k===0&&(b=b-a/2-w),Math.abs(b)<1/1e3&&(b=0),r.roundLengths&&(b=Math.floor(b)),$%r.slidesPerGroup===0&&v.push(b),y.push(b)):(r.roundLengths&&(b=Math.floor(b)),($-Math.min(e.params.slidesPerGroupSkip,$))%e.params.slidesPerGroup===0&&v.push(b),y.push(b),b=b+T+w),e.virtualSize+=T+w,_=T,$+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+g,l&&s&&(r.effect==="slide"||r.effect==="coverflow")&&(i.style.width=`${e.virtualSize+w}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+w}px`),M&&e.grid.updateWrapperSize(T,v,t),!r.centeredSlides){const k=[];for(let C=0;C<v.length;C+=1){let R=v[C];r.roundLengths&&(R=Math.floor(R)),v[C]<=e.virtualSize-a&&k.push(R)}v=k,Math.floor(e.virtualSize-a)-Math.floor(v[v.length-1])>1&&v.push(e.virtualSize-a)}if(c&&r.loop){const k=x[0]+w;if(r.slidesPerGroup>1){const C=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),R=k*r.slidesPerGroup;for(let j=0;j<C;j+=1)v.push(v[v.length-1]+R)}for(let C=0;C<e.virtual.slidesBefore+e.virtual.slidesAfter;C+=1)r.slidesPerGroup===1&&v.push(v[v.length-1]+k),y.push(y[y.length-1]+k),e.virtualSize+=k}if(v.length===0&&(v=[0]),w!==0){const k=e.isHorizontal()&&l?"marginLeft":t("marginRight");d.filter((C,R)=>!r.cssMode||r.loop?!0:R!==d.length-1).forEach(C=>{C.style[k]=`${w}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let k=0;x.forEach(R=>{k+=R+(w||0)}),k-=w;const C=k-a;v=v.map(R=>R<=0?-E:R>C?C+g:R)}if(r.centerInsufficientSlides){let k=0;if(x.forEach(C=>{k+=C+(w||0)}),k-=w,k<a){const C=(a-k)/2;v.forEach((R,j)=>{v[j]=R-C}),y.forEach((R,j)=>{y[j]=R+C})}}if(Object.assign(e,{slides:d,snapGrid:v,slidesGrid:y,slidesSizesGrid:x}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Bo(i,"--swiper-centered-offset-before",`${-v[0]}px`),Bo(i,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const k=-e.snapGrid[0],C=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(R=>R+k),e.slidesGrid=e.slidesGrid.map(R=>R+C)}if(h!==u&&e.emit("slidesLengthChange"),v.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==m&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!c&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const k=`${r.containerModifierClass}backface-hidden`,C=e.el.classList.contains(k);h<=r.maxBackfaceHiddenSlides?C||e.el.classList.add(k):C&&e.el.classList.remove(k)}}function G8(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Y8(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function q8(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),r.forEach(s=>{s.classList.remove(n.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<r.length;s+=1){const c=r[s];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const d=(a+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),h=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),v=-(a-u),y=v+t.slidesSizesGrid[s];(v>=0&&v<t.size-1||y>1&&y<=t.size||v<=0&&y>=t.size)&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(s),r[s].classList.add(n.slideVisibleClass)),c.progress=i?-d:d,c.originalProgress=i?-h:h}}function Q8(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:l}=t;const s=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,a=d||i>=1,u&&(i=0),d&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[u],v=t.slidesGrid[d],y=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=h?l=(x-h)/y:l=(x+y-v)/y,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!s&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(s&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}function X8(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=s=>Ft(r,`.${n.slideClass}${s}, swiper-slide${s}`)[0];t.forEach(s=>{s.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l;if(o)if(n.loop){let s=i-e.virtual.slidesBefore;s<0&&(s=e.virtual.slides.length+s),s>=e.virtual.slides.length&&(s-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${s}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else l=t[i];if(l){l.classList.add(n.slideActiveClass);let s=N8(l,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!s&&(s=t[0]),s&&s.classList.add(n.slideNextClass);let c=$8(l,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!c===0&&(c=t[t.length-1]),c&&c.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const ia=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){const i=r.querySelector(`.${e.params.lazyPreloaderClass}`);i&&i.remove()}},Es=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Bc=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,l=[a-t];l.push(...Array.from({length:t}).map((s,c)=>a+r+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Es(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const l=(a%n+n)%n;(l<i||l>o)&&Es(e,l)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Es(e,a)};function K8(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Z8(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let s=e,c;const u=h=>{let v=h-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof s>"u"&&(s=K8(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,s);c=h+Math.floor((s-h)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),s===o){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(s));return}let d;t.virtual&&i.virtual.enabled&&i.loop?d=u(s):t.slides[s]?d=parseInt(t.slides[s].getAttribute("data-swiper-slide-index")||s,10):d=s,Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:d,previousIndex:o,activeIndex:s}),t.initialized&&Bc(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function J8(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i=!1,o;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){i=!0,o=a;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var eS={updateSize:U8,updateSlides:W8,updateAutoHeight:G8,updateSlidesOffset:Y8,updateSlidesProgress:q8,updateProgress:Q8,updateSlidesClasses:X8,updateActiveIndex:Z8,updateClickedSlide:J8};function tS(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=L8(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function nS(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let l=0,s=0;const c=0;n.isHorizontal()?l=r?-e:e:s=e,i.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:s,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-s:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():s-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(e-n.minTranslate())/d,u!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function rS(){return-this.snapGrid[0]}function iS(){return-this.snapGrid[this.snapGrid.length-1]}function oS(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const s=o.minTranslate(),c=o.maxTranslate();let u;if(r&&e>s?u=s:r&&e<c?u=c:u=e,o.updateProgress(u),a.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return G1({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var aS={getTranslate:tS,setTranslate:nS,minTranslate:rS,maxTranslate:iS,translateTo:oS};function lS(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function X1(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let l=r;if(l||(o>a?l="next":o<a?l="prev":l="reset"),t.emit(`transition${i}`),n&&o!==a){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function sS(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),X1({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function cS(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),X1({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var uS={setTransition:lS,transitionStart:sS,transitionEnd:cS};function dS(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:l,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:v,enabled:y}=o;if(o.animating&&l.preventInteractionOnTransition||!y&&!r&&!i)return!1;const x=Math.min(o.params.slidesPerGroupSkip,a);let E=x+Math.floor((a-x)/o.params.slidesPerGroup);E>=s.length&&(E=s.length-1);const g=-s[E];if(l.normalizeSlideIndex)for(let m=0;m<c.length;m+=1){const w=-Math.floor(g*100),b=Math.floor(c[m]*100),_=Math.floor(c[m+1]*100);typeof c[m+1]<"u"?w>=b&&w<_-(_-b)/2?a=m:w>=b&&w<_&&(a=m+1):w>=b&&(a=m)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&(h?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let f;if(a>d?f="next":a<d?f="prev":f="reset",h&&-g===o.translate||!h&&g===o.translate)return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(g),f!=="reset"&&(o.transitionStart(n,f),o.transitionEnd(n,f)),!1;if(l.cssMode){const m=o.isHorizontal(),w=h?g:-g;if(t===0){const b=o.virtual&&o.params.virtual.enabled;b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[m?"scrollLeft":"scrollTop"]=w})):v[m?"scrollLeft":"scrollTop"]=w,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return G1({swiper:o,targetPosition:w,side:m?"left":"top"}),!0;v.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,f),t===0?o.transitionEnd(n,f):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(w){!o||o.destroyed||w.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,f))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function fS(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let o=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?o=o+i.virtual.slidesBefore:o=i.getSlideIndexByData(o)),i.slideTo(o,t,n,r)}function pS(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:a}=r;if(!i)return r;let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const s=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+s,e,t,n)}function hS(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=r;if(!s)return r;const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=l?r.translate:-r.translate;function h(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=h(d),y=o.map(g=>h(g));let x=o[y.indexOf(v)-1];if(typeof x>"u"&&i.cssMode){let g;o.forEach((f,m)=>{v>=f&&(g=m)}),typeof g<"u"&&(x=o[g>0?g-1:g])}let E=0;if(typeof x<"u"&&(E=a.indexOf(x),E<0&&(E=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),i.rewind&&r.isBeginning){const g=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(g,e,t,n)}return r.slideTo(E,e,t,n)}function mS(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function gS(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){const c=i.snapGrid[l],u=i.snapGrid[l+1];s-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],u=i.snapGrid[l];s-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function vS(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Ft(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),jc(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Ft(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),jc(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var yS={slideTo:dS,slideToLoop:fS,slideNext:pS,slidePrev:hS,slideReset:mS,slideToClosest:gS,slideToClickedSlide:vS};function wS(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;Ft(r,`.${n.slideClass}, swiper-slide`).forEach((o,a)=>{o.setAttribute("data-swiper-slide-index",a)}),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function xS(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:l}=e===void 0?{}:e;const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:h,params:v}=s;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):v.centeredSlides&&s.snapIndex<v.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=u,s.allowSlideNext=d,s.emit("loopFix");return}const y=v.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(v.slidesPerView,10));let x=v.loopedSlides||y;x%v.slidesPerGroup!==0&&(x+=v.slidesPerGroup-x%v.slidesPerGroup),s.loopedSlides=x;const E=[],g=[];let f=s.activeIndex;typeof o>"u"?o=s.getSlideIndex(s.slides.filter($=>$.classList.contains(v.slideActiveClass))[0]):f=o;const m=r==="next"||!r,w=r==="prev"||!r;let b=0,_=0;if(o<x){b=Math.max(x-o,v.slidesPerGroup);for(let $=0;$<x-o;$+=1){const M=$-Math.floor($/c.length)*c.length;E.push(c.length-M-1)}}else if(o>s.slides.length-x*2){_=Math.max(o-(s.slides.length-x*2),v.slidesPerGroup);for(let $=0;$<_;$+=1){const M=$-Math.floor($/c.length)*c.length;g.push(M)}}if(w&&E.forEach($=>{s.slides[$].swiperLoopMoveDOM=!0,h.prepend(s.slides[$]),s.slides[$].swiperLoopMoveDOM=!1}),m&&g.forEach($=>{s.slides[$].swiperLoopMoveDOM=!0,h.append(s.slides[$]),s.slides[$].swiperLoopMoveDOM=!1}),s.recalcSlides(),v.slidesPerView==="auto"&&s.updateSlides(),v.watchSlidesProgress&&s.updateSlidesOffset(),n){if(E.length>0&&w)if(typeof t>"u"){const $=s.slidesGrid[f],T=s.slidesGrid[f+b]-$;l?s.setTranslate(s.translate-T):(s.slideTo(f+b,0,!1,!0),i&&(s.touches[s.isHorizontal()?"startX":"startY"]+=T))}else i&&s.slideToLoop(t,0,!1,!0);else if(g.length>0&&m)if(typeof t>"u"){const $=s.slidesGrid[f],T=s.slidesGrid[f-_]-$;l?s.setTranslate(s.translate-T):(s.slideTo(f-_,0,!1,!0),i&&(s.touches[s.isHorizontal()?"startX":"startY"]+=T))}else s.slideToLoop(t,0,!1,!0)}if(s.allowSlidePrev=u,s.allowSlideNext=d,s.controller&&s.controller.control&&!a){const $={slideRealIndex:t,slideTo:!1,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix($)}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix($)}s.emit("loopFix")}function SS(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var bS={loopCreate:wS,loopFix:xS,loopDestroy:SS};function kS(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ES(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var CS={setGrabCursor:kS,unsetGrabCursor:ES};function TS(e,t){t===void 0&&(t=this);function n(r){if(!r||r===or()||r===gt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function _S(e){const t=this,n=or(),r=gt(),i=t.touchEventsData;i.evCache.push(e);const{params:o,touches:a,enabled:l}=t;if(!l||!o.simulateTouch&&e.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=e;s.originalEvent&&(s=s.originalEvent);let c=s.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(c)||"which"in s&&s.which===3||"button"in s&&s.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=e.composedPath?e.composedPath():e.path;u&&s.target&&s.target.shadowRoot&&d&&(c=d[0]);const h=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(s.target&&s.target.shadowRoot);if(o.noSwiping&&(v?TS(h,c):c.closest(h))){t.allowClick=!0;return}if(o.swipeHandler&&!c.closest(o.swipeHandler))return;a.currentX=s.pageX,a.currentY=s.pageY;const y=a.currentX,x=a.currentY,E=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,g=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(E&&(y<=g||y>=r.innerWidth-g))if(E==="prevent")e.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=y,a.startY=x,i.touchStartTime=Qn(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let f=!0;c.matches(i.focusableElements)&&(f=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const m=f&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||m)&&!c.isContentEditable&&s.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function PS(e){const t=or(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}const c=r.evCache.findIndex(_=>_.pointerId===s.pointerId);c>=0&&(r.evCache[c]=s);const u=r.evCache.length>1?r.evCache[0]:s,d=u.pageX,h=u.pageY;if(s.preventedByNestedSwiper){o.startX=d,o.startY=h;return}if(!n.allowTouchMove){s.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:h}),r.touchStartTime=Qn());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<o.startY&&n.translate<=n.maxTranslate()||h>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&s.target===t.activeElement&&s.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",s),s.targetTouches&&s.targetTouches.length>1)return;o.currentX=d,o.currentY=h;const v=o.currentX-o.startX,y=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(v**2+y**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let _;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:v*v+y*y>=25&&(_=Math.atan2(Math.abs(y),Math.abs(v))*180/Math.PI,r.isScrolling=n.isHorizontal()?_>i.touchAngle:90-_>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation();let x=n.isHorizontal()?v:y,E=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(x=Math.abs(x)*(a?1:-1),E=Math.abs(E)*(a?1:-1)),o.diff=x,x*=i.touchRatio,a&&(x=-x,E=-E);const g=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=E>0?"prev":"next";const f=n.params.loop&&!i.cssMode;if(!r.isMoved){if(f&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const _=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(_)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)}let m;r.isMoved&&g!==n.touchesDirection&&f&&Math.abs(x)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),m=!0),n.emit("sliderMove",s),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),x>0?(f&&!m&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**b))):x<0&&(f&&!m&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**b))),w&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function OS(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex(m=>m.pointerId===e.pointerId);if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&!(e.type==="pointercancel"&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:i,touches:o,rtlTranslate:a,slidesGrid:l,enabled:s}=t;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Qn(),d=u-n.touchStartTime;if(t.allowClick){const m=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(m&&m[0]||c.target),t.emit("tap click",c),d<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=Qn(),jc(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(i.followFinger?h=a?t.translate:-t.translate:h=-n.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}let v=0,y=t.slidesSizesGrid[0];for(let m=0;m<l.length;m+=m<i.slidesPerGroupSkip?1:i.slidesPerGroup){const w=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof l[m+w]<"u"?h>=l[m]&&h<l[m+w]&&(v=m,y=l[m+w]-l[m]):h>=l[m]&&(v=m,y=l[l.length-1]-l[l.length-2])}let x=null,E=null;i.rewind&&(t.isBeginning?E=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(x=0));const g=(h-l[v])/y,f=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?x:v+f):t.slideTo(v)),t.swipeDirection==="prev"&&(g>1-i.longSwipesRatio?t.slideTo(v+f):E!==null&&g<0&&Math.abs(g)>i.longSwipesRatio?t.slideTo(E):t.slideTo(v))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(v+f):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(x!==null?x:v+f),t.swipeDirection==="prev"&&t.slideTo(E!==null?E:v))}}function b0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function MS(e){const t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function zS(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function LS(e){const t=this;ia(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let k0=!1;function AS(){}const K1=(e,t)=>{const n=or(),{params:r,el:i,wrapperEl:o,device:a}=e,l=!!r.nested,s=t==="on"?"addEventListener":"removeEventListener",c=t;i[s]("pointerdown",e.onTouchStart,{passive:!1}),n[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[s]("pointerup",e.onTouchEnd,{passive:!0}),n[s]("pointercancel",e.onTouchEnd,{passive:!0}),n[s]("pointerout",e.onTouchEnd,{passive:!0}),n[s]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[s]("click",e.onClick,!0),r.cssMode&&o[s]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",b0,!0):e[c]("observerUpdate",b0,!0),i[s]("load",e.onLoad,{capture:!0})};function $S(){const e=this,t=or(),{params:n}=e;e.onTouchStart=_S.bind(e),e.onTouchMove=PS.bind(e),e.onTouchEnd=OS.bind(e),n.cssMode&&(e.onScroll=zS.bind(e)),e.onClick=MS.bind(e),e.onLoad=LS.bind(e),k0||(t.addEventListener("touchstart",AS),k0=!0),K1(e,"on")}function NS(){K1(this,"off")}var IS={attachEvents:$S,detachEvents:NS};const E0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function RS(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const s=(a in o?o[a]:void 0)||e.originalParams,c=E0(e,r),u=E0(e,s),d=r.enabled;c&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(s.grid.fill&&s.grid.fill==="column"||!s.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof s[x]>"u")return;const E=r[x]&&r[x].enabled,g=s[x]&&s[x].enabled;E&&!g&&e[x].disable(),!E&&g&&e[x].enable()});const h=s.direction&&s.direction!==r.direction,v=r.loop&&(s.slidesPerView!==r.slidesPerView||h);h&&n&&e.changeDirection(),ct(e.params,s);const y=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!y?e.disable():!d&&y&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",s),v&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",s)}function DS(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=gt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){const{point:s,value:c}=a[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var jS={setBreakpoint:RS,getBreakpoint:DS};function FS(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function BS(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=FS(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function HS(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var VS={addClasses:BS,removeClasses:HS};function US(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var WS={checkOverflow:US},C0={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function GS(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){ct(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in o)){ct(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),ct(t,r)}}const Cs={eventsEmitter:V8,update:eS,translate:aS,transition:uS,slide:yS,loop:bS,grabCursor:CS,events:IS,breakpoints:jS,checkOverflow:WS,classes:VS},Ts={};let st=class{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=ct({},n),t&&!n.el&&(n.el=t);const a=or();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const u=[];return a.querySelectorAll(n.el).forEach(d=>{const h=ct({},n,{el:d});u.push(new st(h))}),u}const l=this;l.__swiper__=!0,l.support=Q1(),l.device=D8({userAgent:n.userAgent}),l.browser=F8(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const s={};l.modules.forEach(u=>{u({params:n,swiper:l,extendParams:GS(n,s),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=ct({},C0,s);return l.params=ct({},c,Ts,n),l.originalParams=ct({},l.params),l.passedParams=ct({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(u=>{l.on(u,l.params.on[u])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Ft(n,`.${r.slideClass}, swiper-slide`),o=Ra(i[0]);return Ra(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Ft(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r;let u=1;if(i.centeredSlides){let d=o[c]?o[c].swiperSlideSize:0,h;for(let v=c+1;v<o.length;v+=1)o[v]&&!h&&(d+=o[v].swiperSlideSize,u+=1,d>s&&(h=!0));for(let v=c-1;v>=0;v-=1)o[v]&&!h&&(d+=o[v].swiperSlideSize,u+=1,d>s&&(h=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ia(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Ft(r,i())[0])();return!a&&n.params.createElements&&(a=Y1("div",n.params.wrapperClass),r.append(a),Ft(r,`.${n.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||vn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||vn(r,"direction")==="rtl"),wrongRTL:vn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?ia(n,i):i.addEventListener("load",o=>{ia(n,o.target)})}),Bc(n),n.initialized=!0,Bc(n),n.emit("init"),n.emit("afterInit")),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttribute("style"),a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),t!==!1&&(r.el.swiper=null,M8(r)),r.destroyed=!0),null}static extendDefaults(t){ct(Ts,t)}static get extendedDefaults(){return Ts}static get defaults(){return C0}static installModule(t){st.prototype.__modules__||(st.prototype.__modules__=[]);const n=st.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>st.installModule(n)),st):(st.installModule(t),st)}};Object.keys(Cs).forEach(e=>{Object.keys(Cs[e]).forEach(t=>{st.prototype[t]=Cs[e][t]})});st.use([B8,H8]);const Z1=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function tr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function yn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:tr(t[r])&&tr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:yn(e[r],t[r]):e[r]=t[r]})}function J1(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function em(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function tm(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function nm(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function YS(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function qS(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:l,paginationEl:s}=e;const c=i.filter(T=>T!=="children"&&T!=="direction"&&T!=="wrapperClass"),{params:u,pagination:d,navigation:h,scrollbar:v,virtual:y,thumbs:x}=t;let E,g,f,m,w,b,_,$;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(E=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(g=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||s)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(f=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||o)&&(u.navigation||u.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(w=!0);const M=T=>{!t[T]||(t[T].destroy(),T==="navigation"?(t.isElement&&(t[T].prevEl.remove(),t[T].nextEl.remove()),u[T].prevEl=void 0,u[T].nextEl=void 0,t[T].prevEl=void 0,t[T].nextEl=void 0):(t.isElement&&t[T].el.remove(),u[T].el=void 0,t[T].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!r.loop?b=!0:!u.loop&&r.loop?_=!0:$=!0),c.forEach(T=>{if(tr(u[T])&&tr(r[T]))yn(u[T],r[T]),(T==="navigation"||T==="pagination"||T==="scrollbar")&&"enabled"in r[T]&&!r[T].enabled&&M(T);else{const V=r[T];(V===!0||V===!1)&&(T==="navigation"||T==="pagination"||T==="scrollbar")?V===!1&&M(T):u[T]=r[T]}}),c.includes("controller")&&!g&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&n&&y&&u.virtual.enabled&&(y.slides=n,y.update(!0)),i.includes("children")&&n&&u.loop&&($=!0),E&&x.init()&&x.update(!0),g&&(t.controller.control=u.controller.control),f&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-pagination"),t.el.appendChild(s)),s&&(u.pagination.el=s),d.init(),d.render(),d.update()),m&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),t.el.appendChild(l)),l&&(u.scrollbar.el=l),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.nextButtonSvg,t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.prevButtonSvg,t.el.appendChild(a))),o&&(u.navigation.nextEl=o),a&&(u.navigation.prevEl=a),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(b||$)&&t.loopDestroy(),(_||$)&&t.loopCreate(),t.update()}function QS(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};yn(n,st.defaults),yn(n,st.extendedDefaults),n._emitClasses=!0,n.init=!1;const o={},a=Z1.map(s=>s.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(s=>{typeof e[s]>"u"||(a.indexOf(s)>=0?tr(e[s])?(n[s]={},i[s]={},yn(n[s],e[s]),yn(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:o[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{n[s]===!0&&(n[s]={}),n[s]===!1&&delete n[s]}),{params:n,passedParams:i,rest:o,events:r}}function XS(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:l}=e;J1(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),em(t)&&o&&(l.params.pagination.el=o,l.originalParams.pagination.el=o),tm(t)&&a&&(l.params.scrollbar.el=a,l.originalParams.scrollbar.el=a),l.init(n)}function KS(e,t,n,r,i){const o=[];if(!t)return o;const a=s=>{o.indexOf(s)<0&&o.push(s)};if(n&&r){const s=r.map(i),c=n.map(i);s.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return Z1.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(tr(e[s])&&tr(t[s])){const c=Object.keys(e[s]),u=Object.keys(t[s]);c.length!==u.length?a(s):(c.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}),u.forEach(d=>{e[s][d]!==t[s][d]&&a(s)}))}else e[s]!==t[s]&&a(s)}),o}const ZS=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function rm(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function im(e){const t=[];return ae.Children.toArray(e).forEach(n=>{rm(n)?t.push(n):n.props&&n.props.children&&im(n.props.children).forEach(r=>t.push(r))}),t}function JS(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ae.Children.toArray(e).forEach(r=>{if(rm(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=im(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function e7(e,t,n){if(!n)return null;const r=u=>{let d=u;return u<0?d=t.length+u:d>=t.length&&(d=d-t.length),d},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,l=e.params.loop?-t.length:0,s=e.params.loop?t.length*2:t.length,c=[];for(let u=l;u<s;u+=1)u>=o&&u<=a&&c.push(t[r(u)]);return c.map((u,d)=>ae.cloneElement(u,{swiper:e,style:i,key:`slide-${d}`}))}function ki(e,t){return typeof window>"u"?A.exports.useEffect(e,t):A.exports.useLayoutEffect(e,t)}const T0=A.exports.createContext(null),t7=A.exports.createContext(null),om=A.exports.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:a,...l}=e===void 0?{}:e,s=!1;const[c,u]=A.exports.useState("swiper"),[d,h]=A.exports.useState(null),[v,y]=A.exports.useState(!1),x=A.exports.useRef(!1),E=A.exports.useRef(null),g=A.exports.useRef(null),f=A.exports.useRef(null),m=A.exports.useRef(null),w=A.exports.useRef(null),b=A.exports.useRef(null),_=A.exports.useRef(null),$=A.exports.useRef(null),{params:M,passedParams:T,rest:V,events:k}=QS(l),{slides:C,slots:R}=JS(o),j=()=>{y(!v)};Object.assign(M.on,{_containerClasses(q,Z){u(Z)}});const X=()=>{Object.assign(M.on,k),s=!0;const q={...M};if(delete q.wrapperClass,g.current=new st(q),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=C;const Z={cache:!1,slides:C,renderExternal:h,renderExternalUpdate:!1};yn(g.current.params.virtual,Z),yn(g.current.originalParams.virtual,Z)}};E.current||X(),g.current&&g.current.on("_beforeBreakpoint",j);const ne=()=>{s||!k||!g.current||Object.keys(k).forEach(q=>{g.current.on(q,k[q])})},de=()=>{!k||!g.current||Object.keys(k).forEach(q=>{g.current.off(q,k[q])})};A.exports.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",j)}),A.exports.useEffect(()=>{!x.current&&g.current&&(g.current.emitSlidesClasses(),x.current=!0)}),ki(()=>{if(t&&(t.current=E.current),!!E.current)return g.current.destroyed&&X(),XS({el:E.current,nextEl:w.current,prevEl:b.current,paginationEl:_.current,scrollbarEl:$.current,swiper:g.current},M),a&&a(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),ki(()=>{ne();const q=KS(T,f.current,C,m.current,Z=>Z.key);return f.current=T,m.current=C,q.length&&g.current&&!g.current.destroyed&&qS({swiper:g.current,slides:C,passedParams:T,changedParams:q,nextEl:w.current,prevEl:b.current,scrollbarEl:$.current,paginationEl:_.current}),()=>{de()}}),ki(()=>{ZS(g.current)},[d]);function B(){return M.virtual?e7(g.current,C,d):C.map((q,Z)=>ae.cloneElement(q,{swiper:g.current,swiperSlideIndex:Z}))}return ae.createElement(r,Da({ref:E,className:nm(`${c}${n?` ${n}`:""}`)},V),ae.createElement(t7.Provider,{value:g.current},R["container-start"],ae.createElement(i,{className:YS(M.wrapperClass)},R["wrapper-start"],B(),R["wrapper-end"]),J1(M)&&ae.createElement(ae.Fragment,null,ae.createElement("div",{ref:b,className:"swiper-button-prev"}),ae.createElement("div",{ref:w,className:"swiper-button-next"})),tm(M)&&ae.createElement("div",{ref:$,className:"swiper-scrollbar"}),em(M)&&ae.createElement("div",{ref:_,className:"swiper-pagination"}),R["container-end"]))});om.displayName="Swiper";const fi=A.exports.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:a,lazy:l,virtualIndex:s,swiperSlideIndex:c,...u}=e===void 0?{}:e;const d=A.exports.useRef(null),[h,v]=A.exports.useState("swiper-slide"),[y,x]=A.exports.useState(!1);function E(w,b,_){b===d.current&&v(_)}ki(()=>{if(typeof c<"u"&&(d.current.swiperSlideIndex=c),t&&(t.current=d.current),!(!d.current||!o)){if(o.destroyed){h!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",E),()=>{!o||o.off("_slideClass",E)}}}),ki(()=>{o&&d.current&&!o.destroyed&&v(o.getSlideClasses(d.current))},[o]);const g={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(g):r,m=()=>{x(!0)};return ae.createElement(n,Da({ref:d,className:nm(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":s,onLoad:m},u),a&&ae.createElement(T0.Provider,{value:g},ae.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},f(),l&&!y&&ae.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&ae.createElement(T0.Provider,{value:g},f(),l&&!y&&ae.createElement("div",{className:"swiper-lazy-preloader"})))});fi.displayName="SwiperSlide";function n7(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=Ft(e.el,`.${r[i]}`)[0];o||(o=Y1("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function oi(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function r7(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,l=0;const s=f=>(Array.isArray(f)||(f=[f].filter(m=>!!m)),f);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(f,m){const{bulletActiveClass:w}=t.params.pagination;!f||(f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${w}-${m}`),f=f[`${m==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${w}-${m}-${m}`)))}function d(f){const m=f.target.closest(oi(t.params.pagination.bulletClass));if(!m)return;f.preventDefault();const w=Ra(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const b=t.getSlideIndexByData(w),_=t.getSlideIndexByData(t.realIndex);b>t.slides.length-t.loopedSlides&&t.loopFix({direction:b>_?"next":"prev",activeSlideIndex:b,slideTo:!1}),t.slideToLoop(w)}else t.slideTo(w)}function h(){const f=t.rtl,m=t.params.pagination;if(c())return;let w=t.pagination.el;w=s(w);let b,_;const $=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,M=t.params.loop?Math.ceil($/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(_=t.previousRealIndex||0,b=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(b=t.snapIndex,_=t.previousSnapIndex):(_=t.previousIndex||0,b=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const T=t.pagination.bullets;let V,k,C;if(m.dynamicBullets&&(a=Fc(T[0],t.isHorizontal()?"width":"height",!0),w.forEach(R=>{R.style[t.isHorizontal()?"width":"height"]=`${a*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&_!==void 0&&(l+=b-(_||0),l>m.dynamicMainBullets-1?l=m.dynamicMainBullets-1:l<0&&(l=0)),V=Math.max(b-l,0),k=V+(Math.min(T.length,m.dynamicMainBullets)-1),C=(k+V)/2),T.forEach(R=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(X=>`${m.bulletActiveClass}${X}`)].map(X=>typeof X=="string"&&X.includes(" ")?X.split(" "):X).flat();R.classList.remove(...j)}),w.length>1)T.forEach(R=>{const j=Ra(R);j===b?R.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&R.setAttribute("part","bullet"),m.dynamicBullets&&(j>=V&&j<=k&&R.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),j===V&&u(R,"prev"),j===k&&u(R,"next"))});else{const R=T[b];if(R&&R.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&T.forEach((j,X)=>{j.setAttribute("part",X===b?"bullet-active":"bullet")}),m.dynamicBullets){const j=T[V],X=T[k];for(let ne=V;ne<=k;ne+=1)T[ne]&&T[ne].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(j,"prev"),u(X,"next")}}if(m.dynamicBullets){const R=Math.min(T.length,m.dynamicMainBullets+4),j=(a*R-a)/2-C*a,X=f?"right":"left";T.forEach(ne=>{ne.style[t.isHorizontal()?X:"top"]=`${j}px`})}}w.forEach((T,V)=>{if(m.type==="fraction"&&(T.querySelectorAll(oi(m.currentClass)).forEach(k=>{k.textContent=m.formatFractionCurrent(b+1)}),T.querySelectorAll(oi(m.totalClass)).forEach(k=>{k.textContent=m.formatFractionTotal(M)})),m.type==="progressbar"){let k;m.progressbarOpposite?k=t.isHorizontal()?"vertical":"horizontal":k=t.isHorizontal()?"horizontal":"vertical";const C=(b+1)/M;let R=1,j=1;k==="horizontal"?R=C:j=C,T.querySelectorAll(oi(m.progressbarFillClass)).forEach(X=>{X.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${j})`,X.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(T.innerHTML=m.renderCustom(t,b+1,M),V===0&&i("paginationRender",T)):(V===0&&i("paginationRender",T),i("paginationUpdate",T)),t.params.watchOverflow&&t.enabled&&T.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const f=t.params.pagination;if(c())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let w=t.pagination.el;w=s(w);let b="";if(f.type==="bullets"){let _=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&_>m&&(_=m);for(let $=0;$<_;$+=1)f.renderBullet?b+=f.renderBullet.call(t,$,f.bulletClass):b+=`<${f.bulletElement} ${t.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?b=f.renderFraction.call(t,f.currentClass,f.totalClass):b=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?b=f.renderProgressbar.call(t,f.progressbarFillClass):b=`<span class="${f.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(_=>{f.type!=="custom"&&(_.innerHTML=b||""),f.type==="bullets"&&t.pagination.bullets.push(..._.querySelectorAll(oi(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",w[0])}function y(){t.params.pagination=n7(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const f=t.params.pagination;if(!f.el)return;let m;typeof f.el=="string"&&t.isElement&&(m=t.el.querySelector(f.el)),!m&&typeof f.el=="string"&&(m=[...document.querySelectorAll(f.el)]),m||(m=f.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(f.el)],m.length>1&&(m=m.filter(w=>q1(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=s(m),m.forEach(w=>{f.type==="bullets"&&f.clickable&&w.classList.add(f.clickableClass),w.classList.add(f.modifierClass+f.type),w.classList.add(t.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(w.classList.add(`${f.modifierClass}${f.type}-dynamic`),l=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&w.classList.add(f.progressbarOppositeClass),f.clickable&&w.addEventListener("click",d),t.enabled||w.classList.add(f.lockClass)}))}function x(){const f=t.params.pagination;if(c())return;let m=t.pagination.el;m&&(m=s(m),m.forEach(w=>{w.classList.remove(f.hiddenClass),w.classList.remove(f.modifierClass+f.type),w.classList.remove(t.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&w.removeEventListener("click",d)})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...f.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const f=t.params.pagination;let{el:m}=t.pagination;m=s(m),m.forEach(w=>{w.classList.remove(f.horizontalClass,f.verticalClass),w.classList.add(t.isHorizontal()?f.horizontalClass:f.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?g():(y(),v(),h())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&h()}),r("snapIndexChange",()=>{h()}),r("snapGridLengthChange",()=>{v(),h()}),r("destroy",()=>{x()}),r("enable disable",()=>{let{el:f}=t.pagination;f&&(f=s(f),f.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{h()}),r("click",(f,m)=>{const w=m.target,b=s(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&b&&b.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const _=b[0].classList.contains(t.params.pagination.hiddenClass);i(_===!0?"paginationShow":"paginationHide"),b.forEach($=>$.classList.toggle(t.params.pagination.hiddenClass))}});const E=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:f}=t.pagination;f&&(f=s(f),f.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),y(),v(),h()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:f}=t.pagination;f&&(f=s(f),f.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),x()};Object.assign(t.pagination,{enable:E,disable:g,render:v,update:h,init:y,destroy:x})}function i7(e){let{swiper:t,extendParams:n,emit:r,once:i}=e;n({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function o(){if(t.params.cssMode)return;const s=t.getTranslate();t.setTranslate(s),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function a(){if(t.params.cssMode)return;const{touchEventsData:s,touches:c}=t;s.velocities.length===0&&s.velocities.push({position:c[t.isHorizontal()?"startX":"startY"],time:s.touchStartTime}),s.velocities.push({position:c[t.isHorizontal()?"currentX":"currentY"],time:Qn()})}function l(s){let{currentPos:c}=s;if(t.params.cssMode)return;const{params:u,wrapperEl:d,rtlTranslate:h,snapGrid:v,touchEventsData:y}=t,E=Qn()-y.touchStartTime;if(c<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(c>-t.maxTranslate()){t.slides.length<v.length?t.slideTo(v.length-1):t.slideTo(t.slides.length-1);return}if(u.freeMode.momentum){if(y.velocities.length>1){const M=y.velocities.pop(),T=y.velocities.pop(),V=M.position-T.position,k=M.time-T.time;t.velocity=V/k,t.velocity/=2,Math.abs(t.velocity)<u.freeMode.minimumVelocity&&(t.velocity=0),(k>150||Qn()-M.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=u.freeMode.momentumVelocityRatio,y.velocities.length=0;let g=1e3*u.freeMode.momentumRatio;const f=t.velocity*g;let m=t.translate+f;h&&(m=-m);let w=!1,b;const _=Math.abs(t.velocity)*20*u.freeMode.momentumBounceRatio;let $;if(m<t.maxTranslate())u.freeMode.momentumBounce?(m+t.maxTranslate()<-_&&(m=t.maxTranslate()-_),b=t.maxTranslate(),w=!0,y.allowMomentumBounce=!0):m=t.maxTranslate(),u.loop&&u.centeredSlides&&($=!0);else if(m>t.minTranslate())u.freeMode.momentumBounce?(m-t.minTranslate()>_&&(m=t.minTranslate()+_),b=t.minTranslate(),w=!0,y.allowMomentumBounce=!0):m=t.minTranslate(),u.loop&&u.centeredSlides&&($=!0);else if(u.freeMode.sticky){let M;for(let T=0;T<v.length;T+=1)if(v[T]>-m){M=T;break}Math.abs(v[M]-m)<Math.abs(v[M-1]-m)||t.swipeDirection==="next"?m=v[M]:m=v[M-1],m=-m}if($&&i("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(h?g=Math.abs((-m-t.translate)/t.velocity):g=Math.abs((m-t.translate)/t.velocity),u.freeMode.sticky){const M=Math.abs((h?-m:m)-t.translate),T=t.slidesSizesGrid[t.activeIndex];M<T?g=u.speed:M<2*T?g=u.speed*1.5:g=u.speed*2.5}}else if(u.freeMode.sticky){t.slideToClosest();return}u.freeMode.momentumBounce&&w?(t.updateProgress(b),t.setTransition(g),t.setTranslate(m),t.transitionStart(!0,t.swipeDirection),t.animating=!0,xs(d,()=>{!t||t.destroyed||!y.allowMomentumBounce||(r("momentumBounce"),t.setTransition(u.speed),setTimeout(()=>{t.setTranslate(b),xs(d,()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(r("_freeModeNoMomentumRelease"),t.updateProgress(m),t.setTransition(g),t.setTranslate(m),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,xs(d,()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(m),t.updateActiveIndex(),t.updateSlidesClasses()}else if(u.freeMode.sticky){t.slideToClosest();return}else u.freeMode&&r("_freeModeNoMomentumRelease");(!u.freeMode.momentum||E>=u.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:o,onTouchMove:a,onTouchEnd:l}})}const o7=P.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; 
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    &::after{
        content: "";
        background-image: url("imagenes-manage/bg-tablet-pattern.svg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        z-index: 0;
        width: 100%;
        bottom: 0rem;
    }
    @media screen and (max-width:375px) {
        &::after{
            height: 200px !important;
            left: -3rem;
        }
    }
    @media screen and (max-width:768px) {
        &::after{
            height: 300px;
            left: -20%;
        }
    }
    @media screen and (min-width:769px) {
        &::after{
            height: calc(600px + 1vh);
            left: -50%;
        }
    }

    @media screen and (min-width:1024px) {
        height: calc(100vh - 1rem);
    }
    
`,a7=P.div`
    cursor: pointer;
    h2{
        font-size: 2rem;
        text-align: center;
        color: var(--dark_blue);
        font-weight: 700;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;
    }
    button{
        border: none;
        outline: none;
        border-radius: 40px;
        width: 100px;
        background-color: var(--bright_red);
        padding: 0.5rem 0.8rem;
        color: white;
        cursor: pointer;
        display: block;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    button:hover{
        transition: box-shadow 0.3s ease;
        opacity: 0.9;
        box-shadow: 1px 1px 8px 1px black;
    }

    @media screen and (min-width: 280px) {
        width: 280px;
        h2{

            font-size: 1.5rem;
        }
        
    }
    @media screen and (min-width: 640px) {
        width: 640px;
        
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width:769px) {
        margin-left:1rem;
        margin-right: 1rem;
    }
    @media screen and (min-width: 1025px) {
        margin: 0 auto;
        height: calc(100vh - 3rem);
    }
    
`,Ho=P.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    z-index: 1;
    img{
        width: 40px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
    }
    h4{
        color: var(--dark_blue);
        margin-bottom: 1rem;
    }
    p{
        font-size: 1rem;
        color: var(--dark_grayish_blue);
    }
`;function l7(){return p(o7,{children:N(a7,{className:"container",children:[p("h2",{children:"What they´ve said"}),N(om,{slidesPerView:1,spaceBetween:30,freeMode:!0,pagination:{clickable:!0},breakpoints:{640:{width:640,slidesPerView:2},768:{width:768,slidesPerView:3,spaceBetween:40}},modules:[i7,r7],className:"mySwiper",children:[p(fi,{children:N(Ho,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-anisha.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Anisha Li"}),p("p",{children:'"Manage has supercharged our team`s workflow.The ability to maintain visibility on larger milestones at all times keeps eveyone motvated"'})]})}),p(fi,{children:N(Ho,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-ali.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Ali Bravo"}),p("p",{children:'"We Have been able to cancel so many other subcriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused."'})]})}),p(fi,{children:N(Ho,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-richard.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Richard Watts"}),p("p",{children:'"Manage allows us to provide structure and process.It keeps us organized and focused. I can`t stop recommending them to everyone i talk to!"'})]})}),p(fi,{children:N(Ho,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-shanai.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Shanai Gough"}),p("p",{children:'"Their software allows us to track, manage collaborate on our projects from anywhere.it keeps the whole team in-sync without being intrusive."'})]})})]}),p("button",{className:"btn-started",children:"Get Started"})]})})}const s7=P.div`
    background-color: white;
    position: relative;
    font-family: 'Be Vietnam Pro', sans-serif;
    
    &::before{
        content: "";
        background-image: url("imagenes-manage/bg-tablet-pattern.svg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 50%;
        max-width: 700px;
        height: 700px;
        top:-5rem;
        bottom: 40rem;
        right: 0;
        z-index: 0;  
    }

    @media screen and (max-width:768px) {
        &::before{
            content: "";
            height: 400px;
            z-index: 0;
            background-color: transparent;
        }
    }
    
    *{
        /*--- colores principales ---*/
        --bright_red: hsl(12,88%,59%);
        --dark_blue:hsl(228,39%,23%);

        /*--- colores neutrales ---*/
        --dark_grayish_blue: hsl(227,12% ,61%);
        --very_dark_blue: hsl(233 ,12% ,13%);
        --very_pale_red: hsl(13,100%,96%);
        --vary_light_gray: hsl(0.0%,98%);
    }
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
`;function c7(){return N(s7,{children:[p(u8,{}),p(h8,{}),p(y8,{}),p(l7,{}),p(S8,{}),p(P8,{})]})}function u7(){return p("div",{className:"App",children:p(e5,{children:N(Xx,{children:[p(Nt,{path:"/",element:p(J4,{})}),p(Nt,{path:"*",element:p(i6,{})}),p(Nt,{path:"/projects/crud",element:p(_6,{})}),p(Nt,{path:"/projects/rick-and-morty",element:p(O6,{})}),p(Nt,{path:"/projects/api-countries",element:p(K6,{})}),p(Nt,{path:"/projects/ecommerce",element:p(b5,{})}),p(Nt,{path:"/projects/ecommerce/cart",element:p(N5,{})}),p(Nt,{path:"/projects/room-page",element:p(r8,{})}),p(Nt,{path:"/projects/mana-page",element:p(c7,{})})]})})})}var am={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(ai,function(){return function(n){function r(o){if(i[o])return i[o].exports;var a=i[o]={exports:{},id:o,loaded:!1};return n[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function o(j){return j&&j.__esModule?j:{default:j}}var a=Object.assign||function(j){for(var X=1;X<arguments.length;X++){var ne=arguments[X];for(var de in ne)Object.prototype.hasOwnProperty.call(ne,de)&&(j[de]=ne[de])}return j},l=i(1),s=(o(l),i(6)),c=o(s),u=i(7),d=o(u),h=i(8),v=o(h),y=i(9),x=o(y),E=i(10),g=o(E),f=i(11),m=o(f),w=i(14),b=o(w),_=[],$=!1,M={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(){var j=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(j&&($=!0),$)return _=(0,m.default)(_,M),(0,g.default)(_,M.once),_},V=function(){_=(0,b.default)(),T()},k=function(){_.forEach(function(j,X){j.node.removeAttribute("data-aos"),j.node.removeAttribute("data-aos-easing"),j.node.removeAttribute("data-aos-duration"),j.node.removeAttribute("data-aos-delay")})},C=function(j){return j===!0||j==="mobile"&&x.default.mobile()||j==="phone"&&x.default.phone()||j==="tablet"&&x.default.tablet()||typeof j=="function"&&j()===!0},R=function(j){M=a(M,j),_=(0,b.default)();var X=document.all&&!window.atob;return C(M.disable)||X?k():(M.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),M.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",M.easing),document.querySelector("body").setAttribute("data-aos-duration",M.duration),document.querySelector("body").setAttribute("data-aos-delay",M.delay),M.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?T(!0):M.startEvent==="load"?window.addEventListener(M.startEvent,function(){T(!0)}):document.addEventListener(M.startEvent,function(){T(!0)}),window.addEventListener("resize",(0,d.default)(T,M.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(T,M.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,g.default)(_,M.once)},M.throttleDelay)),M.disableMutationObserver||v.default.ready("[data-aos]",V),_)};n.exports={init:R,refresh:T,refreshHard:V}},function(n,r){},,,,,function(n,r){(function(i){function o(C,R,j){function X(z){var D=Y,U=J;return Y=J=void 0,ie=z,te=C.apply(U,D)}function ne(z){return ie=z,F=setTimeout(q,R),le?X(z):te}function de(z){var D=z-se,U=z-ie,I=R-D;return S?V(I,L-U):I}function B(z){var D=z-se,U=z-ie;return se===void 0||D>=R||D<0||S&&U>=L}function q(){var z=k();return B(z)?Z(z):void(F=setTimeout(q,de(z)))}function Z(z){return F=void 0,O&&Y?X(z):(Y=J=void 0,te)}function ce(){F!==void 0&&clearTimeout(F),ie=0,Y=se=J=F=void 0}function W(){return F===void 0?te:Z(k())}function G(){var z=k(),D=B(z);if(Y=arguments,J=this,se=z,D){if(F===void 0)return ne(se);if(S)return F=setTimeout(q,R),X(se)}return F===void 0&&(F=setTimeout(q,R)),te}var Y,J,L,te,F,se,ie=0,le=!1,S=!1,O=!0;if(typeof C!="function")throw new TypeError(h);return R=u(R)||0,l(j)&&(le=!!j.leading,S="maxWait"in j,L=S?T(u(j.maxWait)||0,R):L,O="trailing"in j?!!j.trailing:O),G.cancel=ce,G.flush=W,G}function a(C,R,j){var X=!0,ne=!0;if(typeof C!="function")throw new TypeError(h);return l(j)&&(X="leading"in j?!!j.leading:X,ne="trailing"in j?!!j.trailing:ne),o(C,R,{leading:X,maxWait:R,trailing:ne})}function l(C){var R=typeof C>"u"?"undefined":d(C);return!!C&&(R=="object"||R=="function")}function s(C){return!!C&&(typeof C>"u"?"undefined":d(C))=="object"}function c(C){return(typeof C>"u"?"undefined":d(C))=="symbol"||s(C)&&M.call(C)==y}function u(C){if(typeof C=="number")return C;if(c(C))return v;if(l(C)){var R=typeof C.valueOf=="function"?C.valueOf():C;C=l(R)?R+"":R}if(typeof C!="string")return C===0?C:+C;C=C.replace(x,"");var j=g.test(C);return j||f.test(C)?m(C.slice(2),j?2:8):E.test(C)?v:+C}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},h="Expected a function",v=NaN,y="[object Symbol]",x=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,w=(typeof i>"u"?"undefined":d(i))=="object"&&i&&i.Object===Object&&i,b=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,_=w||b||Function("return this")(),$=Object.prototype,M=$.toString,T=Math.max,V=Math.min,k=function(){return _.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){(function(i){function o(k,C,R){function j(O){var z=G,D=Y;return G=Y=void 0,se=O,L=k.apply(D,z)}function X(O){return se=O,te=setTimeout(B,C),ie?j(O):L}function ne(O){var z=O-F,D=O-se,U=C-z;return le?T(U,J-D):U}function de(O){var z=O-F,D=O-se;return F===void 0||z>=C||z<0||le&&D>=J}function B(){var O=V();return de(O)?q(O):void(te=setTimeout(B,ne(O)))}function q(O){return te=void 0,S&&G?j(O):(G=Y=void 0,L)}function Z(){te!==void 0&&clearTimeout(te),se=0,G=F=Y=te=void 0}function ce(){return te===void 0?L:q(V())}function W(){var O=V(),z=de(O);if(G=arguments,Y=this,F=O,z){if(te===void 0)return X(F);if(le)return te=setTimeout(B,C),j(F)}return te===void 0&&(te=setTimeout(B,C)),L}var G,Y,J,L,te,F,se=0,ie=!1,le=!1,S=!0;if(typeof k!="function")throw new TypeError(d);return C=c(C)||0,a(R)&&(ie=!!R.leading,le="maxWait"in R,J=le?M(c(R.maxWait)||0,C):J,S="trailing"in R?!!R.trailing:S),W.cancel=Z,W.flush=ce,W}function a(k){var C=typeof k>"u"?"undefined":u(k);return!!k&&(C=="object"||C=="function")}function l(k){return!!k&&(typeof k>"u"?"undefined":u(k))=="object"}function s(k){return(typeof k>"u"?"undefined":u(k))=="symbol"||l(k)&&$.call(k)==v}function c(k){if(typeof k=="number")return k;if(s(k))return h;if(a(k)){var C=typeof k.valueOf=="function"?k.valueOf():k;k=a(C)?C+"":C}if(typeof k!="string")return k===0?k:+k;k=k.replace(y,"");var R=E.test(k);return R||g.test(k)?f(k.slice(2),R?2:8):x.test(k)?h:+k}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},d="Expected a function",h=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,g=/^0o[0-7]+$/i,f=parseInt,m=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,b=m||w||Function("return this")(),_=Object.prototype,$=_.toString,M=Math.max,T=Math.min,V=function(){return b.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){function i(u){var d=void 0,h=void 0;for(d=0;d<u.length;d+=1)if(h=u[d],h.dataset&&h.dataset.aos||h.children&&i(h.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!o()}function l(u,d){var h=window.document,v=o(),y=new v(s);c=d,y.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(u){u&&u.forEach(function(d){var h=Array.prototype.slice.call(d.addedNodes),v=Array.prototype.slice.call(d.removedNodes),y=h.concat(v);if(i(y))return c()})}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){};r.default={isSupported:a,ready:l}},function(n,r){function i(h,v){if(!(h instanceof v))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function h(v,y){for(var x=0;x<y.length;x++){var E=y[x];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(v,E.key,E)}}return function(v,y,x){return y&&h(v.prototype,y),x&&h(v,x),v}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function h(){i(this,h)}return a(h,[{key:"phone",value:function(){var v=o();return!(!l.test(v)&&!s.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=o();return!(!c.test(v)&&!u.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();r.default=new d},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a,l,s){var c=a.node.getAttribute("data-aos-once");l>a.position?a.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!s&&c!=="true")&&a.node.classList.remove("aos-animate")},o=function(a,l){var s=window.pageYOffset,c=window.innerHeight;a.forEach(function(u,d){i(u,c+s,l)})};r.default=o},function(n,r,i){function o(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var a=i(12),l=o(a),s=function(c,u){return c.forEach(function(d,h){d.node.classList.add("aos-init"),d.position=(0,l.default)(d.node,u.offset)}),c};r.default=s},function(n,r,i){function o(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(r,"__esModule",{value:!0});var a=i(13),l=o(a),s=function(c,u){var d=0,h=0,v=window.innerHeight,y={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(h=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(c=document.querySelectorAll(y.anchor)[0]),d=(0,l.default)(c).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=c.offsetHeight/2;break;case"bottom-bottom":d+=c.offsetHeight;break;case"top-center":d+=v/2;break;case"bottom-center":d+=v/2+c.offsetHeight;break;case"center-center":d+=v/2+c.offsetHeight/2;break;case"top-top":d+=v;break;case"bottom-top":d+=c.offsetHeight+v;break;case"center-top":d+=c.offsetHeight/2+v}return y.anchorPlacement||y.offset||isNaN(u)||(h=u),d+h};r.default=s},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){for(var a=0,l=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)a+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),l+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:l,left:a}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(a){return{node:a}})};r.default=i}])})})(am);const d7=_0(am.exports);d7.init();Ps.createRoot(document.getElementById("root")).render(p(t6,{children:p(u7,{})}));
