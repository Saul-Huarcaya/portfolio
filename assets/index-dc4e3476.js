function nv(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function iv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var us={exports:{}},ds={},E={exports:{}},ae={};var go=Symbol.for("react.element"),ov=Symbol.for("react.portal"),av=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),lv=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),dv=Symbol.for("react.forward_ref"),fv=Symbol.for("react.suspense"),pv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),mf=Symbol.iterator;function mv(e){return e===null||typeof e!="object"?null:(e=mf&&e[mf]||e["@@iterator"],typeof e=="function"?e:null)}var eh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},th=Object.assign,rh={};function ii(e,t,r){this.props=e,this.context=t,this.refs=rh,this.updater=r||eh}ii.prototype.isReactComponent={};ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nh(){}nh.prototype=ii.prototype;function Hu(e,t,r){this.props=e,this.context=t,this.refs=rh,this.updater=r||eh}var Bu=Hu.prototype=new nh;Bu.constructor=Hu;th(Bu,ii.prototype);Bu.isPureReactComponent=!0;var gf=Array.isArray,ih=Object.prototype.hasOwnProperty,Uu={current:null},oh={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ih.call(t,n)&&!oh.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:go,type:e,key:o,ref:a,props:i,_owner:Uu.current}}function gv(e,t){return{$$typeof:go,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===go}function vv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var vf=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vv(""+e.key):t.toString(36)}function da(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case go:case ov:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+rl(a,0):n,gf(i)?(r="",e!=null&&(r=e.replace(vf,"$&/")+"/"),da(i,t,r,"",function(c){return c})):i!=null&&(Vu(i)&&(i=gv(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",gf(e))for(var s=0;s<e.length;s++){o=e[s];var l=n+rl(o,s);a+=da(o,t,r,l,i)}else if(l=mv(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=n+rl(o,s++),a+=da(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ao(e,t,r){if(e==null)return e;var n=[],i=0;return da(e,n,"","",function(o){return t.call(r,o,i++)}),n}function yv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},fa={transition:null},wv={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:fa,ReactCurrentOwner:Uu};ae.Children={map:Ao,forEach:function(e,t,r){Ao(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ao(e,function(){t++}),t},toArray:function(e){return Ao(e,function(t){return t})||[]},only:function(e){if(!Vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=ii;ae.Fragment=av;ae.Profiler=lv;ae.PureComponent=Hu;ae.StrictMode=sv;ae.Suspense=fv;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;ae.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=th({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Uu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ih.call(t,l)&&!oh.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:go,type:e.type,key:i,ref:o,props:n,_owner:a}};ae.createContext=function(e){return e={$$typeof:uv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cv,_context:e},e.Consumer=e};ae.createElement=ah;ae.createFactory=function(e){var t=ah.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:dv,render:e}};ae.isValidElement=Vu;ae.lazy=function(e){return{$$typeof:hv,_payload:{_status:-1,_result:e},_init:yv}};ae.memo=function(e,t){return{$$typeof:pv,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=fa.transition;fa.transition={};try{e()}finally{fa.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return rt.current.useCallback(e,t)};ae.useContext=function(e){return rt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return rt.current.useEffect(e,t)};ae.useId=function(){return rt.current.useId()};ae.useImperativeHandle=function(e,t,r){return rt.current.useImperativeHandle(e,t,r)};ae.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return rt.current.useMemo(e,t)};ae.useReducer=function(e,t,r){return rt.current.useReducer(e,t,r)};ae.useRef=function(e){return rt.current.useRef(e)};ae.useState=function(e){return rt.current.useState(e)};ae.useSyncExternalStore=function(e,t,r){return rt.current.useSyncExternalStore(e,t,r)};ae.useTransition=function(){return rt.current.useTransition()};ae.version="18.2.0";(function(e){e.exports=ae})(E);const ie=iv(E.exports),mc=nv({__proto__:null,default:ie},[E.exports]);var xv=E.exports,Sv=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Ev=Object.prototype.hasOwnProperty,Cv=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tv={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Ev.call(t,n)&&!Tv.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Sv,type:e,key:o,ref:a,props:i,_owner:Cv.current}}ds.Fragment=bv;ds.jsx=sh;ds.jsxs=sh;(function(e){e.exports=ds})(us);const ur=us.exports.Fragment,p=us.exports.jsx,D=us.exports.jsxs;var gc={},Wu={exports:{}},vt={},lh={exports:{}},ch={};(function(e){function t(F,Y){var K=F.length;F.push(Y);e:for(;0<K;){var ce=K-1>>>1,H=F[ce];if(0<i(H,Y))F[ce]=Y,F[K]=H,K=ce;else break e}}function r(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var Y=F[0],K=F.pop();if(K!==Y){F[0]=K;e:for(var ce=0,H=F.length,W=H>>>1;ce<W;){var q=2*(ce+1)-1,ee=F[q],O=q+1,oe=F[O];if(0>i(ee,K))O<H&&0>i(oe,ee)?(F[ce]=oe,F[O]=K,ce=O):(F[ce]=ee,F[q]=K,ce=q);else if(O<H&&0>i(oe,K))F[ce]=oe,F[O]=K,ce=O;else break e}}return Y}function i(F,Y){var K=F.sortIndex-Y.sortIndex;return K!==0?K:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,m=3,v=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(F){for(var Y=r(c);Y!==null;){if(Y.callback===null)n(c);else if(Y.startTime<=F)n(c),Y.sortIndex=Y.expirationTime,t(l,Y);else break;Y=r(c)}}function y(F){if(w=!1,h(F),!x)if(r(l)!==null)x=!0,se(b);else{var Y=r(c);Y!==null&&ve(y,Y.startTime-F)}}function b(F,Y){x=!1,w&&(w=!1,g(I),I=-1),v=!0;var K=m;try{for(h(Y),f=r(l);f!==null&&(!(f.expirationTime>Y)||F&&!z());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,m=f.priorityLevel;var H=ce(f.expirationTime<=Y);Y=e.unstable_now(),typeof H=="function"?f.callback=H:f===r(l)&&n(l),h(Y)}else n(l);f=r(l)}if(f!==null)var W=!0;else{var q=r(c);q!==null&&ve(y,q.startTime-Y),W=!1}return W}finally{f=null,m=K,v=!1}}var _=!1,P=null,I=-1,k=5,B=-1;function z(){return!(e.unstable_now()-B<k)}function R(){if(P!==null){var F=e.unstable_now();B=F;var Y=!0;try{Y=P(!0,F)}finally{Y?j():(_=!1,P=null)}}else _=!1}var j;if(typeof d=="function")j=function(){d(R)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,J=Q.port2;Q.port1.onmessage=R,j=function(){J.postMessage(null)}}else j=function(){C(R,0)};function se(F){P=F,_||(_=!0,j())}function ve(F,Y){I=C(function(){F(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,se(b))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(F){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var K=m;m=Y;try{return F()}finally{m=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var K=m;m=F;try{return Y()}finally{m=K}},e.unstable_scheduleCallback=function(F,Y,K){var ce=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,F){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=K+H,F={id:u++,callback:Y,priorityLevel:F,startTime:K,expirationTime:H,sortIndex:-1},K>ce?(F.sortIndex=K,t(c,F),r(l)===null&&F===r(c)&&(w?(g(I),I=-1):w=!0,ve(y,K-ce))):(F.sortIndex=H,t(l,F),x||v||(x=!0,se(b))),F},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(F){var Y=m;return function(){var K=m;m=Y;try{return F.apply(this,arguments)}finally{m=K}}}})(ch);(function(e){e.exports=ch})(lh);var uh=E.exports,ht=lh.exports;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dh=new Set,Ui={};function hn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Ui[e]=t,e=0;e<t.length;e++)dh.add(t[e])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},wf={};function _v(e){return vc.call(wf,e)?!0:vc.call(yf,e)?!1:kv.test(e)?wf[e]=!0:(yf[e]=!0,!1)}function Ov(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pv(e,t,r,n){if(t===null||typeof t>"u"||Ov(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gu=/[\-:]([a-z])/g;function Yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gu,Yu);Ve[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gu,Yu);Ve[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gu,Yu);Ve[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function qu(e,t,r,n){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pv(t,r,i,n)&&(r=null),n||i===null?_v(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dr=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),ph=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),hh=Symbol.for("react.offscreen"),xf=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=xf&&e[xf]||e["@@iterator"],typeof e=="function"?e:null)}var De=Object.assign,nl;function Ti(e){if(nl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);nl=t&&t[1]||""}return`
`+nl+e}var il=!1;function ol(e,t){if(!e||il)return"";il=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{il=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ti(e):""}function Dv(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function Sc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Cn:return"Portal";case yc:return"Profiler";case Xu:return"StrictMode";case wc:return"Suspense";case xc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ph:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case Qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ku:return t=e.displayName||null,t!==null?t:Sc(e.type)||"Memo";case yr:t=e._payload,e=e._init;try{return Sc(e(t))}catch{}}return null}function Mv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(t);case 8:return t===Xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Iv(e){var t=mh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function No(e){e._valueTracker||(e._valueTracker=Iv(e))}function gh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=mh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bc(e,t){var r=t.checked;return De({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Sf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=$r(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vh(e,t){t=t.checked,t!=null&&qu(e,"checked",t,!1)}function Ec(e,t){vh(e,t);var r=$r(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cc(e,t.type,r):t.hasOwnProperty("defaultValue")&&Cc(e,t.type,$r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Cc(e,t,r){(t!=="number"||Oa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ki=Array.isArray;function jn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+$r(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return De({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ef(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error($(92));if(ki(r)){if(1<r.length)throw Error($(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:$r(r)}}function yh(e,t){var r=$r(t.value),n=$r(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Cf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $o,xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vi(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zv=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(e){zv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mi[t]=Mi[e]})});function Sh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mi.hasOwnProperty(e)&&Mi[e]?(""+t).trim():t+"px"}function bh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Sh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Lv=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(e,t){if(t){if(Lv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Oc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pc=null;function Zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dc=null,Fn=null,Hn=null;function Tf(e){if(e=wo(e)){if(typeof Dc!="function")throw Error($(280));var t=e.stateNode;t&&(t=gs(t),Dc(e.stateNode,e.type,t))}}function Eh(e){Fn?Hn?Hn.push(e):Hn=[e]:Fn=e}function Ch(){if(Fn){var e=Fn,t=Hn;if(Hn=Fn=null,Tf(e),t)for(e=0;e<t.length;e++)Tf(t[e])}}function Th(e,t){return e(t)}function kh(){}var al=!1;function _h(e,t,r){if(al)return e(t,r);al=!0;try{return Th(e,t,r)}finally{al=!1,(Fn!==null||Hn!==null)&&(kh(),Ch())}}function Wi(e,t){var r=e.stateNode;if(r===null)return null;var n=gs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error($(231,t,typeof r));return r}var Mc=!1;if(ar)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{Mc=!1}function Av(e,t,r,n,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Ii=!1,Pa=null,Da=!1,Ic=null,Rv={onError:function(e){Ii=!0,Pa=e}};function Nv(e,t,r,n,i,o,a,s,l){Ii=!1,Pa=null,Av.apply(Rv,arguments)}function $v(e,t,r,n,i,o,a,s,l){if(Nv.apply(this,arguments),Ii){if(Ii){var c=Pa;Ii=!1,Pa=null}else throw Error($(198));Da||(Da=!0,Ic=c)}}function mn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Oh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kf(e){if(mn(e)!==e)throw Error($(188))}function jv(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error($(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return kf(i),e;if(o===n)return kf(i),t;o=o.sibling}throw Error($(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error($(189))}}if(r.alternate!==n)throw Error($(190))}if(r.tag!==3)throw Error($(188));return r.stateNode.current===r?e:t}function Ph(e){return e=jv(e),e!==null?Dh(e):null}function Dh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dh(e);if(t!==null)return t;e=e.sibling}return null}var Mh=ht.unstable_scheduleCallback,_f=ht.unstable_cancelCallback,Fv=ht.unstable_shouldYield,Hv=ht.unstable_requestPaint,ze=ht.unstable_now,Bv=ht.unstable_getCurrentPriorityLevel,Ju=ht.unstable_ImmediatePriority,Ih=ht.unstable_UserBlockingPriority,Ma=ht.unstable_NormalPriority,Uv=ht.unstable_LowPriority,zh=ht.unstable_IdlePriority,fs=null,qt=null;function Vv(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Yv,Wv=Math.log,Gv=Math.LN2;function Yv(e){return e>>>=0,e===0?32:31-(Wv(e)/Gv|0)|0}var jo=64,Fo=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ia(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~i;s!==0?n=_i(s):(o&=a,o!==0&&(n=_i(o)))}else a=r&~i,a!==0?n=_i(a):o!==0&&(n=_i(o));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-jt(t),i=1<<r,n|=e[r],t&=~i;return n}function qv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xv(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-jt(o),s=1<<a,l=i[a];l===-1?((s&r)===0||(s&n)!==0)&&(i[a]=qv(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function zc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lh(){var e=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),e}function sl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function Qv(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-jt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function ed(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-jt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var fe=0;function Ah(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rh,td,Nh,$h,jh,Lc=!1,Ho=[],_r=null,Or=null,Pr=null,Gi=new Map,Yi=new Map,xr=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(e,t){switch(e){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function gi(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wo(t),t!==null&&td(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zv(e,t,r,n,i){switch(t){case"focusin":return _r=gi(_r,e,t,r,n,i),!0;case"dragenter":return Or=gi(Or,e,t,r,n,i),!0;case"mouseover":return Pr=gi(Pr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Gi.set(o,gi(Gi.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Yi.set(o,gi(Yi.get(o)||null,e,t,r,n,i)),!0}return!1}function Fh(e){var t=Kr(e.target);if(t!==null){var r=mn(t);if(r!==null){if(t=r.tag,t===13){if(t=Oh(r),t!==null){e.blockedOn=t,jh(e.priority,function(){Nh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ac(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Pc=n,r.target.dispatchEvent(n),Pc=null}else return t=wo(r),t!==null&&td(t),e.blockedOn=r,!1;t.shift()}return!0}function Pf(e,t,r){pa(e)&&r.delete(t)}function Jv(){Lc=!1,_r!==null&&pa(_r)&&(_r=null),Or!==null&&pa(Or)&&(Or=null),Pr!==null&&pa(Pr)&&(Pr=null),Gi.forEach(Pf),Yi.forEach(Pf)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,Lc||(Lc=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,Jv)))}function qi(e){function t(i){return vi(i,e)}if(0<Ho.length){vi(Ho[0],e);for(var r=1;r<Ho.length;r++){var n=Ho[r];n.blockedOn===e&&(n.blockedOn=null)}}for(_r!==null&&vi(_r,e),Or!==null&&vi(Or,e),Pr!==null&&vi(Pr,e),Gi.forEach(t),Yi.forEach(t),r=0;r<xr.length;r++)n=xr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<xr.length&&(r=xr[0],r.blockedOn===null);)Fh(r),r.blockedOn===null&&xr.shift()}var Bn=dr.ReactCurrentBatchConfig,za=!0;function ey(e,t,r,n){var i=fe,o=Bn.transition;Bn.transition=null;try{fe=1,rd(e,t,r,n)}finally{fe=i,Bn.transition=o}}function ty(e,t,r,n){var i=fe,o=Bn.transition;Bn.transition=null;try{fe=4,rd(e,t,r,n)}finally{fe=i,Bn.transition=o}}function rd(e,t,r,n){if(za){var i=Ac(e,t,r,n);if(i===null)vl(e,t,n,La,r),Of(e,n);else if(Zv(i,e,t,r,n))n.stopPropagation();else if(Of(e,n),t&4&&-1<Kv.indexOf(e)){for(;i!==null;){var o=wo(i);if(o!==null&&Rh(o),o=Ac(e,t,r,n),o===null&&vl(e,t,n,La,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else vl(e,t,n,null,r)}}var La=null;function Ac(e,t,r,n){if(La=null,e=Zu(n),e=Kr(e),e!==null)if(t=mn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Oh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return La=e,null}function Hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bv()){case Ju:return 1;case Ih:return 4;case Ma:case Uv:return 16;case zh:return 536870912;default:return 16}default:return 16}}var br=null,nd=null,ha=null;function Bh(){if(ha)return ha;var e,t=nd,r=t.length,n,i="value"in br?br.value:br.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return ha=i.slice(e,1<n?1-n:void 0)}function ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function Df(){return!1}function yt(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bo:Df,this.isPropagationStopped=Df,this}return De(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},id=yt(oi),yo=De({},oi,{view:0,detail:0}),ry=yt(yo),ll,cl,yi,ps=De({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(ll=e.screenX-yi.screenX,cl=e.screenY-yi.screenY):cl=ll=0,yi=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Mf=yt(ps),ny=De({},ps,{dataTransfer:0}),iy=yt(ny),oy=De({},yo,{relatedTarget:0}),ul=yt(oy),ay=De({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=yt(ay),ly=De({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cy=yt(ly),uy=De({},oi,{data:0}),If=yt(uy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=py[e])?!!t[e]:!1}function od(){return hy}var my=De({},yo,{key:function(e){if(e.key){var t=dy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gy=yt(my),vy=De({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=yt(vy),yy=De({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),wy=yt(yy),xy=De({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=yt(xy),by=De({},ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=yt(by),Cy=[9,13,27,32],ad=ar&&"CompositionEvent"in window,zi=null;ar&&"documentMode"in document&&(zi=document.documentMode);var Ty=ar&&"TextEvent"in window&&!zi,Uh=ar&&(!ad||zi&&8<zi&&11>=zi),Lf=String.fromCharCode(32),Af=!1;function Vh(e,t){switch(e){case"keyup":return Cy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function ky(e,t){switch(e){case"compositionend":return Wh(t);case"keypress":return t.which!==32?null:(Af=!0,Lf);case"textInput":return e=t.data,e===Lf&&Af?null:e;default:return null}}function _y(e,t){if(kn)return e==="compositionend"||!ad&&Vh(e,t)?(e=Bh(),ha=nd=br=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uh&&t.locale!=="ko"?null:t.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oy[e.type]:t==="textarea"}function Gh(e,t,r,n){Eh(n),t=Aa(t,"onChange"),0<t.length&&(r=new id("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Li=null,Xi=null;function Py(e){nm(e,0)}function hs(e){var t=Pn(e);if(gh(t))return e}function Dy(e,t){if(e==="change")return t}var Yh=!1;if(ar){var dl;if(ar){var fl="oninput"in document;if(!fl){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),fl=typeof Nf.oninput=="function"}dl=fl}else dl=!1;Yh=dl&&(!document.documentMode||9<document.documentMode)}function $f(){Li&&(Li.detachEvent("onpropertychange",qh),Xi=Li=null)}function qh(e){if(e.propertyName==="value"&&hs(Xi)){var t=[];Gh(t,Xi,e,Zu(e)),_h(Py,t)}}function My(e,t,r){e==="focusin"?($f(),Li=t,Xi=r,Li.attachEvent("onpropertychange",qh)):e==="focusout"&&$f()}function Iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(Xi)}function zy(e,t){if(e==="click")return hs(t)}function Ly(e,t){if(e==="input"||e==="change")return hs(t)}function Ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Ay;function Qi(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!vc.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ff(e,t){var r=jf(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=jf(r)}}function Xh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qh(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Oa(e.document)}return t}function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ry(e){var t=Qh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Xh(r.ownerDocument.documentElement,r)){if(n!==null&&sd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Ff(r,o);var a=Ff(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ny=ar&&"documentMode"in document&&11>=document.documentMode,_n=null,Rc=null,Ai=null,Nc=!1;function Hf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Nc||_n==null||_n!==Oa(n)||(n=_n,"selectionStart"in n&&sd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ai&&Qi(Ai,n)||(Ai=n,n=Aa(Rc,"onSelect"),0<n.length&&(t=new id("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=_n)))}function Uo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var On={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},pl={},Kh={};ar&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function ms(e){if(pl[e])return pl[e];if(!On[e])return e;var t=On[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Kh)return pl[e]=t[r];return e}var Zh=ms("animationend"),Jh=ms("animationiteration"),em=ms("animationstart"),tm=ms("transitionend"),rm=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(e,t){rm.set(e,t),hn(t,[e])}for(var hl=0;hl<Bf.length;hl++){var ml=Bf[hl],$y=ml.toLowerCase(),jy=ml[0].toUpperCase()+ml.slice(1);Fr($y,"on"+jy)}Fr(Zh,"onAnimationEnd");Fr(Jh,"onAnimationIteration");Fr(em,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(tm,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Uf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,$v(n,t,void 0,e),e.currentTarget=null}function nm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Uf(i,s,c),o=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Uf(i,s,c),o=l}}}if(Da)throw e=Ic,Da=!1,Ic=null,e}function ye(e,t){var r=t[Bc];r===void 0&&(r=t[Bc]=new Set);var n=e+"__bubble";r.has(n)||(im(t,e,2,!1),r.add(n))}function gl(e,t,r){var n=0;t&&(n|=4),im(r,e,n,t)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ki(e){if(!e[Vo]){e[Vo]=!0,dh.forEach(function(r){r!=="selectionchange"&&(Fy.has(r)||gl(r,!1,e),gl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vo]||(t[Vo]=!0,gl("selectionchange",!1,t))}}function im(e,t,r,n){switch(Hh(t)){case 1:var i=ey;break;case 4:i=ty;break;default:i=rd}r=i.bind(null,t,r,e),i=void 0,!Mc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function vl(e,t,r,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Kr(s),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}s=s.parentNode}}n=n.return}_h(function(){var c=o,u=Zu(r),f=[];e:{var m=rm.get(e);if(m!==void 0){var v=id,x=e;switch(e){case"keypress":if(ma(r)===0)break e;case"keydown":case"keyup":v=gy;break;case"focusin":x="focus",v=ul;break;case"focusout":x="blur",v=ul;break;case"beforeblur":case"afterblur":v=ul;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wy;break;case Zh:case Jh:case em:v=sy;break;case tm:v=Sy;break;case"scroll":v=ry;break;case"wheel":v=Ey;break;case"copy":case"cut":case"paste":v=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=zf}var w=(t&4)!==0,C=!w&&e==="scroll",g=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,g!==null&&(y=Wi(d,g),y!=null&&w.push(Zi(d,y,h)))),C)break;d=d.return}0<w.length&&(m=new v(m,x,null,r,u),f.push({event:m,listeners:w}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&r!==Pc&&(x=r.relatedTarget||r.fromElement)&&(Kr(x)||x[sr]))break e;if((v||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,v?(x=r.relatedTarget||r.toElement,v=c,x=x?Kr(x):null,x!==null&&(C=mn(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=Mf,y="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=zf,y="onPointerLeave",g="onPointerEnter",d="pointer"),C=v==null?m:Pn(v),h=x==null?m:Pn(x),m=new w(y,d+"leave",v,r,u),m.target=C,m.relatedTarget=h,y=null,Kr(u)===c&&(w=new w(g,d+"enter",x,r,u),w.target=h,w.relatedTarget=C,y=w),C=y,v&&x)t:{for(w=v,g=x,d=0,h=w;h;h=Sn(h))d++;for(h=0,y=g;y;y=Sn(y))h++;for(;0<d-h;)w=Sn(w),d--;for(;0<h-d;)g=Sn(g),h--;for(;d--;){if(w===g||g!==null&&w===g.alternate)break t;w=Sn(w),g=Sn(g)}w=null}else w=null;v!==null&&Vf(f,m,v,w,!1),x!==null&&C!==null&&Vf(f,C,x,w,!0)}}e:{if(m=c?Pn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var b=Dy;else if(Rf(m))if(Yh)b=Ly;else{b=Iy;var _=My}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=zy);if(b&&(b=b(e,c))){Gh(f,b,r,u);break e}_&&_(e,m,c),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Cc(m,"number",m.value)}switch(_=c?Pn(c):window,e){case"focusin":(Rf(_)||_.contentEditable==="true")&&(_n=_,Rc=c,Ai=null);break;case"focusout":Ai=Rc=_n=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Hf(f,r,u);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":Hf(f,r,u)}var P;if(ad)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else kn?Vh(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(Uh&&r.locale!=="ko"&&(kn||I!=="onCompositionStart"?I==="onCompositionEnd"&&kn&&(P=Bh()):(br=u,nd="value"in br?br.value:br.textContent,kn=!0)),_=Aa(c,I),0<_.length&&(I=new If(I,e,null,r,u),f.push({event:I,listeners:_}),P?I.data=P:(P=Wh(r),P!==null&&(I.data=P)))),(P=Ty?ky(e,r):_y(e,r))&&(c=Aa(c,"onBeforeInput"),0<c.length&&(u=new If("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:c}),u.data=P))}nm(f,t)})}function Zi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Aa(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wi(e,r),o!=null&&n.unshift(Zi(e,o,i)),o=Wi(e,t),o!=null&&n.push(Zi(e,o,i))),e=e.return}return n}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vf(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&c!==null&&(s=c,i?(l=Wi(r,o),l!=null&&a.unshift(Zi(r,l,s))):i||(l=Wi(r,o),l!=null&&a.push(Zi(r,l,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Hy=/\r\n?/g,By=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(Hy,`
`).replace(By,"")}function Wo(e,t,r){if(t=Wf(t),Wf(e)!==t&&r)throw Error($(425))}function Ra(){}var $c=null,jc=null;function Fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(e){return Gf.resolve(null).then(e).catch(Wy)}:Hc;function Wy(e){setTimeout(function(){throw e})}function yl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),qi(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);qi(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ai=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ai,Ji="__reactProps$"+ai,sr="__reactContainer$"+ai,Bc="__reactEvents$"+ai,Gy="__reactListeners$"+ai,Yy="__reactHandles$"+ai;function Kr(e){var t=e[Wt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[sr]||r[Wt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Yf(e);e!==null;){if(r=e[Wt])return r;e=Yf(e)}return t}e=r,r=e.parentNode}return null}function wo(e){return e=e[Wt]||e[sr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function gs(e){return e[Ji]||null}var Uc=[],Dn=-1;function Hr(e){return{current:e}}function xe(e){0>Dn||(e.current=Uc[Dn],Uc[Dn]=null,Dn--)}function me(e,t){Dn++,Uc[Dn]=e.current,e.current=t}var jr={},Xe=Hr(jr),at=Hr(!1),on=jr;function qn(e,t){var r=e.type.contextTypes;if(!r)return jr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function Na(){xe(at),xe(Xe)}function qf(e,t,r){if(Xe.current!==jr)throw Error($(168));me(Xe,t),me(at,r)}function om(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error($(108,Mv(e)||"Unknown",i));return De({},r,n)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jr,on=Xe.current,me(Xe,e),me(at,at.current),!0}function Xf(e,t,r){var n=e.stateNode;if(!n)throw Error($(169));r?(e=om(e,t,on),n.__reactInternalMemoizedMergedChildContext=e,xe(at),xe(Xe),me(Xe,e)):xe(at),me(at,r)}var tr=null,vs=!1,wl=!1;function am(e){tr===null?tr=[e]:tr.push(e)}function qy(e){vs=!0,am(e)}function Br(){if(!wl&&tr!==null){wl=!0;var e=0,t=fe;try{var r=tr;for(fe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}tr=null,vs=!1}catch(i){throw tr!==null&&(tr=tr.slice(e+1)),Mh(Ju,Br),i}finally{fe=t,wl=!1}}return null}var Mn=[],In=0,ja=null,Fa=0,Ct=[],Tt=0,an=null,rr=1,nr="";function Yr(e,t){Mn[In++]=Fa,Mn[In++]=ja,ja=e,Fa=t}function sm(e,t,r){Ct[Tt++]=rr,Ct[Tt++]=nr,Ct[Tt++]=an,an=e;var n=rr;e=nr;var i=32-jt(n)-1;n&=~(1<<i),r+=1;var o=32-jt(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,rr=1<<32-jt(t)+i|r<<i|n,nr=o+e}else rr=1<<o|r<<i|n,nr=e}function ld(e){e.return!==null&&(Yr(e,1),sm(e,1,0))}function cd(e){for(;e===ja;)ja=Mn[--In],Mn[In]=null,Fa=Mn[--In],Mn[In]=null;for(;e===an;)an=Ct[--Tt],Ct[Tt]=null,nr=Ct[--Tt],Ct[Tt]=null,rr=Ct[--Tt],Ct[Tt]=null}var pt=null,ft=null,Te=!1,At=null;function lm(e,t){var r=_t(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Qf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=an!==null?{id:rr,overflow:nr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=_t(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,pt=e,ft=null,!0):!1;default:return!1}}function Vc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wc(e){if(Te){var t=ft;if(t){var r=t;if(!Qf(e,t)){if(Vc(e))throw Error($(418));t=Dr(r.nextSibling);var n=pt;t&&Qf(e,t)?lm(n,r):(e.flags=e.flags&-4097|2,Te=!1,pt=e)}}else{if(Vc(e))throw Error($(418));e.flags=e.flags&-4097|2,Te=!1,pt=e}}}function Kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function Go(e){if(e!==pt)return!1;if(!Te)return Kf(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fc(e.type,e.memoizedProps)),t&&(t=ft)){if(Vc(e))throw cm(),Error($(418));for(;t;)lm(e,t),t=Dr(t.nextSibling)}if(Kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ft=Dr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?Dr(e.stateNode.nextSibling):null;return!0}function cm(){for(var e=ft;e;)e=Dr(e.nextSibling)}function Xn(){ft=pt=null,Te=!1}function ud(e){At===null?At=[e]:At.push(e)}var Xy=dr.ReactCurrentBatchConfig;function zt(e,t){if(e&&e.defaultProps){t=De({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Ha=Hr(null),Ba=null,zn=null,dd=null;function fd(){dd=zn=Ba=null}function pd(e){var t=Ha.current;xe(Ha),e._currentValue=t}function Gc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Un(e,t){Ba=e,dd=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(dd!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(Ba===null)throw Error($(308));zn=e,Ba.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var Zr=null;function hd(e){Zr===null?Zr=[e]:Zr.push(e)}function um(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,hd(t)):(r.next=i.next,i.next=r),t.interleaved=r,lr(e,n)}function lr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var wr=!1;function md(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function or(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,lr(e,r)}return i=n.interleaved,i===null?(t.next=t,hd(n)):(t.next=i.next,i.next=t),n.interleaved=t,lr(e,r)}function ga(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ed(e,r)}}function Zf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ua(e,t,r,n){var i=e.updateQueue;wr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=c=l=null,s=o;do{var m=s.lane,v=s.eventTime;if((n&m)===m){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(m=t,v=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(v,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(v,f,m):x,m==null)break e;f=De({},f,m);break e;case 2:wr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=v,l=f):u=u.next=v,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ln|=a,e.lanes=a,e.memoizedState=f}}function Jf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error($(191,i));i.call(n)}}}var fm=new uh.Component().refs;function Yc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:De({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ys={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=tt(),i=zr(e),o=or(n,i);o.payload=t,r!=null&&(o.callback=r),t=Mr(e,o,i),t!==null&&(Ft(t,e,i,n),ga(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=tt(),i=zr(e),o=or(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Mr(e,o,i),t!==null&&(Ft(t,e,i,n),ga(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=tt(),n=zr(e),i=or(r,n);i.tag=2,t!=null&&(i.callback=t),t=Mr(e,i,n),t!==null&&(Ft(t,e,n,r),ga(t,e,n))}};function e0(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qi(r,n)||!Qi(i,o):!0}function pm(e,t,r){var n=!1,i=jr,o=t.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(i=st(t)?on:Xe.current,n=t.contextTypes,o=(n=n!=null)?qn(e,i):jr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function t0(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function qc(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=fm,md(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pt(o):(o=st(t)?on:Xe.current,i.context=qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Yc(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),Ua(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error($(309));var n=r.stateNode}if(!n)throw Error($(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===fm&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!r._owner)throw Error($(290,e))}return e}function Yo(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function r0(e){var t=e._init;return t(e._payload)}function hm(e){function t(g,d){if(e){var h=g.deletions;h===null?(g.deletions=[d],g.flags|=16):h.push(d)}}function r(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function n(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function i(g,d){return g=Lr(g,d),g.index=0,g.sibling=null,g}function o(g,d,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<d?(g.flags|=2,d):h):(g.flags|=2,d)):(g.flags|=1048576,d)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,d,h,y){return d===null||d.tag!==6?(d=kl(h,g.mode,y),d.return=g,d):(d=i(d,h),d.return=g,d)}function l(g,d,h,y){var b=h.type;return b===Tn?u(g,d,h.props.children,y,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===yr&&r0(b)===d.type)?(y=i(d,h.props),y.ref=wi(g,d,h),y.return=g,y):(y=ba(h.type,h.key,h.props,null,g.mode,y),y.ref=wi(g,d,h),y.return=g,y)}function c(g,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=_l(h,g.mode,y),d.return=g,d):(d=i(d,h.children||[]),d.return=g,d)}function u(g,d,h,y,b){return d===null||d.tag!==7?(d=rn(h,g.mode,y,b),d.return=g,d):(d=i(d,h),d.return=g,d)}function f(g,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=kl(""+d,g.mode,h),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ro:return h=ba(d.type,d.key,d.props,null,g.mode,h),h.ref=wi(g,null,d),h.return=g,h;case Cn:return d=_l(d,g.mode,h),d.return=g,d;case yr:var y=d._init;return f(g,y(d._payload),h)}if(ki(d)||hi(d))return d=rn(d,g.mode,h,null),d.return=g,d;Yo(g,d)}return null}function m(g,d,h,y){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:s(g,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:return h.key===b?l(g,d,h,y):null;case Cn:return h.key===b?c(g,d,h,y):null;case yr:return b=h._init,m(g,d,b(h._payload),y)}if(ki(h)||hi(h))return b!==null?null:u(g,d,h,y,null);Yo(g,h)}return null}function v(g,d,h,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(h)||null,s(d,g,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ro:return g=g.get(y.key===null?h:y.key)||null,l(d,g,y,b);case Cn:return g=g.get(y.key===null?h:y.key)||null,c(d,g,y,b);case yr:var _=y._init;return v(g,d,h,_(y._payload),b)}if(ki(y)||hi(y))return g=g.get(h)||null,u(d,g,y,b,null);Yo(d,y)}return null}function x(g,d,h,y){for(var b=null,_=null,P=d,I=d=0,k=null;P!==null&&I<h.length;I++){P.index>I?(k=P,P=null):k=P.sibling;var B=m(g,P,h[I],y);if(B===null){P===null&&(P=k);break}e&&P&&B.alternate===null&&t(g,P),d=o(B,d,I),_===null?b=B:_.sibling=B,_=B,P=k}if(I===h.length)return r(g,P),Te&&Yr(g,I),b;if(P===null){for(;I<h.length;I++)P=f(g,h[I],y),P!==null&&(d=o(P,d,I),_===null?b=P:_.sibling=P,_=P);return Te&&Yr(g,I),b}for(P=n(g,P);I<h.length;I++)k=v(P,g,I,h[I],y),k!==null&&(e&&k.alternate!==null&&P.delete(k.key===null?I:k.key),d=o(k,d,I),_===null?b=k:_.sibling=k,_=k);return e&&P.forEach(function(z){return t(g,z)}),Te&&Yr(g,I),b}function w(g,d,h,y){var b=hi(h);if(typeof b!="function")throw Error($(150));if(h=b.call(h),h==null)throw Error($(151));for(var _=b=null,P=d,I=d=0,k=null,B=h.next();P!==null&&!B.done;I++,B=h.next()){P.index>I?(k=P,P=null):k=P.sibling;var z=m(g,P,B.value,y);if(z===null){P===null&&(P=k);break}e&&P&&z.alternate===null&&t(g,P),d=o(z,d,I),_===null?b=z:_.sibling=z,_=z,P=k}if(B.done)return r(g,P),Te&&Yr(g,I),b;if(P===null){for(;!B.done;I++,B=h.next())B=f(g,B.value,y),B!==null&&(d=o(B,d,I),_===null?b=B:_.sibling=B,_=B);return Te&&Yr(g,I),b}for(P=n(g,P);!B.done;I++,B=h.next())B=v(P,g,I,B.value,y),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?I:B.key),d=o(B,d,I),_===null?b=B:_.sibling=B,_=B);return e&&P.forEach(function(R){return t(g,R)}),Te&&Yr(g,I),b}function C(g,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Tn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:e:{for(var b=h.key,_=d;_!==null;){if(_.key===b){if(b=h.type,b===Tn){if(_.tag===7){r(g,_.sibling),d=i(_,h.props.children),d.return=g,g=d;break e}}else if(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===yr&&r0(b)===_.type){r(g,_.sibling),d=i(_,h.props),d.ref=wi(g,_,h),d.return=g,g=d;break e}r(g,_);break}else t(g,_);_=_.sibling}h.type===Tn?(d=rn(h.props.children,g.mode,y,h.key),d.return=g,g=d):(y=ba(h.type,h.key,h.props,null,g.mode,y),y.ref=wi(g,d,h),y.return=g,g=y)}return a(g);case Cn:e:{for(_=h.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(g,d.sibling),d=i(d,h.children||[]),d.return=g,g=d;break e}else{r(g,d);break}else t(g,d);d=d.sibling}d=_l(h,g.mode,y),d.return=g,g=d}return a(g);case yr:return _=h._init,C(g,d,_(h._payload),y)}if(ki(h))return x(g,d,h,y);if(hi(h))return w(g,d,h,y);Yo(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(g,d.sibling),d=i(d,h),d.return=g,g=d):(r(g,d),d=kl(h,g.mode,y),d.return=g,g=d),a(g)):r(g,d)}return C}var Qn=hm(!0),mm=hm(!1),xo={},Xt=Hr(xo),eo=Hr(xo),to=Hr(xo);function Jr(e){if(e===xo)throw Error($(174));return e}function gd(e,t){switch(me(to,t),me(eo,e),me(Xt,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kc(t,e)}xe(Xt),me(Xt,t)}function Kn(){xe(Xt),xe(eo),xe(to)}function gm(e){Jr(to.current);var t=Jr(Xt.current),r=kc(t,e.type);t!==r&&(me(eo,e),me(Xt,r))}function vd(e){eo.current===e&&(xe(Xt),xe(eo))}var Oe=Hr(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function yd(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var va=dr.ReactCurrentDispatcher,Sl=dr.ReactCurrentBatchConfig,sn=0,Pe=null,Ae=null,$e=null,Wa=!1,Ri=!1,ro=0,Qy=0;function Ge(){throw Error($(321))}function wd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ht(e[r],t[r]))return!1;return!0}function xd(e,t,r,n,i,o){if(sn=o,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?e2:t2,e=r(n,i),Ri){o=0;do{if(Ri=!1,ro=0,25<=o)throw Error($(301));o+=1,$e=Ae=null,t.updateQueue=null,va.current=r2,e=r(n,i)}while(Ri)}if(va.current=Ga,t=Ae!==null&&Ae.next!==null,sn=0,$e=Ae=Pe=null,Wa=!1,t)throw Error($(300));return e}function Sd(){var e=ro!==0;return ro=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Pe.memoizedState=$e=e:$e=$e.next=e,$e}function Dt(){if(Ae===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=$e===null?Pe.memoizedState:$e.next;if(t!==null)$e=t,Ae=e;else{if(e===null)throw Error($(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},$e===null?Pe.memoizedState=$e=e:$e=$e.next=e}return $e}function no(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Dt(),r=t.queue;if(r===null)throw Error($(311));r.lastRenderedReducer=e;var n=Ae,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((sn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=n):l=l.next=f,Pe.lanes|=u,ln|=u}c=c.next}while(c!==null&&c!==o);l===null?a=n:l.next=s,Ht(n,t.memoizedState)||(ot=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,Pe.lanes|=o,ln|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function El(e){var t=Dt(),r=t.queue;if(r===null)throw Error($(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ht(o,t.memoizedState)||(ot=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function vm(){}function ym(e,t){var r=Pe,n=Dt(),i=t(),o=!Ht(n.memoizedState,i);if(o&&(n.memoizedState=i,ot=!0),n=n.queue,bd(Sm.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(r.flags|=2048,io(9,xm.bind(null,r,n,i,t),void 0,null),Fe===null)throw Error($(349));(sn&30)!==0||wm(r,t,i)}return i}function wm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xm(e,t,r,n){t.value=r,t.getSnapshot=n,bm(t)&&Em(e)}function Sm(e,t,r){return r(function(){bm(t)&&Em(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ht(e,r)}catch{return!0}}function Em(e){var t=lr(e,1);t!==null&&Ft(t,e,1,-1)}function n0(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=Jy.bind(null,Pe,e),[t.memoizedState,e]}function io(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Cm(){return Dt().memoizedState}function ya(e,t,r,n){var i=Ut();Pe.flags|=e,i.memoizedState=io(1|t,r,void 0,n===void 0?null:n)}function ws(e,t,r,n){var i=Dt();n=n===void 0?null:n;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,n!==null&&wd(n,a.deps)){i.memoizedState=io(t,r,o,n);return}}Pe.flags|=e,i.memoizedState=io(1|t,r,o,n)}function i0(e,t){return ya(8390656,8,e,t)}function bd(e,t){return ws(2048,8,e,t)}function Tm(e,t){return ws(4,2,e,t)}function km(e,t){return ws(4,4,e,t)}function _m(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Om(e,t,r){return r=r!=null?r.concat([e]):null,ws(4,4,_m.bind(null,t,e),r)}function Ed(){}function Pm(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&wd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Dm(e,t){var r=Dt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&wd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Mm(e,t,r){return(sn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=r):(Ht(r,t)||(r=Lh(),Pe.lanes|=r,ln|=r,e.baseState=!0),t)}function Ky(e,t){var r=fe;fe=r!==0&&4>r?r:4,e(!0);var n=Sl.transition;Sl.transition={};try{e(!1),t()}finally{fe=r,Sl.transition=n}}function Im(){return Dt().memoizedState}function Zy(e,t,r){var n=zr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},zm(e))Lm(t,r);else if(r=um(e,t,r,n),r!==null){var i=tt();Ft(r,e,n,i),Am(r,t,n)}}function Jy(e,t,r){var n=zr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(zm(e))Lm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,Ht(s,a)){var l=t.interleaved;l===null?(i.next=i,hd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=um(e,t,i,n),r!==null&&(i=tt(),Ft(r,e,n,i),Am(r,t,n))}}function zm(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Lm(e,t){Ri=Wa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Am(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ed(e,r)}}var Ga={readContext:Pt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},e2={readContext:Pt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:i0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ya(4194308,4,_m.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return ya(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ut();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Zy.bind(null,Pe,e),[n.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:n0,useDebugValue:Ed,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=n0(!1),t=e[0];return e=Ky.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Pe,i=Ut();if(Te){if(r===void 0)throw Error($(407));r=r()}else{if(r=t(),Fe===null)throw Error($(349));(sn&30)!==0||wm(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,i0(Sm.bind(null,n,o,e),[e]),n.flags|=2048,io(9,xm.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Fe.identifierPrefix;if(Te){var r=nr,n=rr;r=(n&~(1<<32-jt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ro++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Qy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t2={readContext:Pt,useCallback:Pm,useContext:Pt,useEffect:bd,useImperativeHandle:Om,useInsertionEffect:Tm,useLayoutEffect:km,useMemo:Dm,useReducer:bl,useRef:Cm,useState:function(){return bl(no)},useDebugValue:Ed,useDeferredValue:function(e){var t=Dt();return Mm(t,Ae.memoizedState,e)},useTransition:function(){var e=bl(no)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:vm,useSyncExternalStore:ym,useId:Im,unstable_isNewReconciler:!1},r2={readContext:Pt,useCallback:Pm,useContext:Pt,useEffect:bd,useImperativeHandle:Om,useInsertionEffect:Tm,useLayoutEffect:km,useMemo:Dm,useReducer:El,useRef:Cm,useState:function(){return El(no)},useDebugValue:Ed,useDeferredValue:function(e){var t=Dt();return Ae===null?t.memoizedState=e:Mm(t,Ae.memoizedState,e)},useTransition:function(){var e=El(no)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:vm,useSyncExternalStore:ym,useId:Im,unstable_isNewReconciler:!1};function Zn(e,t){try{var r="",n=t;do r+=Dv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Cl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var n2=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,t,r){r=or(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){qa||(qa=!0,ou=n),Xc(e,t)},r}function Nm(e,t,r){r=or(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Xc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Xc(e,t),typeof n!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function o0(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new n2;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=v2.bind(null,e,t,r),t.then(e,e))}function a0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function s0(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=or(-1,1),t.tag=2,Mr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var i2=dr.ReactCurrentOwner,ot=!1;function Ze(e,t,r,n){t.child=e===null?mm(t,null,r,n):Qn(t,e.child,r,n)}function l0(e,t,r,n,i){r=r.render;var o=t.ref;return Un(t,i),n=xd(e,t,r,n,o,i),r=Sd(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cr(e,t,i)):(Te&&r&&ld(t),t.flags|=1,Ze(e,t,n,i),t.child)}function c0(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Md(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,$m(e,t,o,n,i)):(e=ba(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Qi,r(a,n)&&e.ref===t.ref)return cr(e,t,i)}return t.flags|=1,e=Lr(o,n),e.ref=t.ref,e.return=t,t.child=e}function $m(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Qi(o,n)&&e.ref===t.ref)if(ot=!1,t.pendingProps=n=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,cr(e,t,i)}return Qc(e,t,r,n,i)}function jm(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(An,ct),ct|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(An,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,me(An,ct),ct|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,me(An,ct),ct|=n;return Ze(e,t,i,r),t.child}function Fm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Qc(e,t,r,n,i){var o=st(r)?on:Xe.current;return o=qn(t,o),Un(t,i),r=xd(e,t,r,n,o,i),n=Sd(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cr(e,t,i)):(Te&&n&&ld(t),t.flags|=1,Ze(e,t,r,i),t.child)}function u0(e,t,r,n,i){if(st(r)){var o=!0;$a(t)}else o=!1;if(Un(t,i),t.stateNode===null)wa(e,t),pm(t,r,n),qc(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Pt(c):(c=st(r)?on:Xe.current,c=qn(t,c));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==c)&&t0(t,a,n,c),wr=!1;var m=t.memoizedState;a.state=m,Ua(t,n,a,i),l=t.memoizedState,s!==n||m!==l||at.current||wr?(typeof u=="function"&&(Yc(t,r,u,n),l=t.memoizedState),(s=wr||e0(t,r,s,n,m,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=c,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,dm(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:zt(t.type,s),a.props=c,f=t.pendingProps,m=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=st(r)?on:Xe.current,l=qn(t,l));var v=r.getDerivedStateFromProps;(u=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==l)&&t0(t,a,n,l),wr=!1,m=t.memoizedState,a.state=m,Ua(t,n,a,i);var x=t.memoizedState;s!==f||m!==x||at.current||wr?(typeof v=="function"&&(Yc(t,r,v,n),x=t.memoizedState),(c=wr||e0(t,r,c,n,m,x,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=l,n=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return Kc(e,t,r,n,o,i)}function Kc(e,t,r,n,i,o){Fm(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Xf(t,r,!1),cr(e,t,o);n=t.stateNode,i2.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Qn(t,e.child,null,o),t.child=Qn(t,null,s,o)):Ze(e,t,s,o),t.memoizedState=n.state,i&&Xf(t,r,!0),t.child}function Hm(e){var t=e.stateNode;t.pendingContext?qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qf(e,t.context,!1),gd(e,t.containerInfo)}function d0(e,t,r,n,i){return Xn(),ud(i),t.flags|=256,Ze(e,t,r,n),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Jc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bm(e,t,r){var n=t.pendingProps,i=Oe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Oe,i&1),e===null)return Wc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},(n&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=bs(a,n,0,null),e=rn(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jc(r),t.memoizedState=Zc,e):Cd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return o2(e,t,a,n,s,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Lr(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Lr(s,o):(o=rn(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Jc(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Zc,n}return o=e.child,e=o.sibling,n=Lr(o,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Cd(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qo(e,t,r,n){return n!==null&&ud(n),Qn(t,e.child,null,r),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o2(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Cl(Error($(422))),qo(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=bs({mode:"visible",children:n.children},i,0,null),o=rn(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,(t.mode&1)!==0&&Qn(t,e.child,null,a),t.child.memoizedState=Jc(a),t.memoizedState=Zc,o);if((t.mode&1)===0)return qo(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error($(419)),n=Cl(o,n,void 0),qo(e,t,a,n)}if(s=(a&e.childLanes)!==0,ot||s){if(n=Fe,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,lr(e,i),Ft(n,e,i,-1))}return Dd(),n=Cl(Error($(421))),qo(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=y2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=Dr(i.nextSibling),pt=t,Te=!0,At=null,e!==null&&(Ct[Tt++]=rr,Ct[Tt++]=nr,Ct[Tt++]=an,rr=e.id,nr=e.overflow,an=t),t=Cd(t,n.children),t.flags|=4096,t)}function f0(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Gc(e.return,t,r)}function Tl(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Um(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Ze(e,t,n.children,r),n=Oe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f0(e,r,t);else if(e.tag===19)f0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(me(Oe,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Va(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Tl(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Va(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Tl(t,!0,r,null,o);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,r=Lr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Lr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function a2(e,t,r){switch(t.tag){case 3:Hm(t),Xn();break;case 5:gm(t);break;case 1:st(t.type)&&$a(t);break;case 4:gd(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;me(Ha,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(me(Oe,Oe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Bm(e,t,r):(me(Oe,Oe.current&1),e=cr(e,t,r),e!==null?e.sibling:null);me(Oe,Oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Um(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Oe,Oe.current),n)break;return null;case 22:case 23:return t.lanes=0,jm(e,t,r)}return cr(e,t,r)}var Vm,eu,Wm,Gm;Vm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};eu=function(){};Wm=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Jr(Xt.current);var o=null;switch(r){case"input":i=bc(e,i),n=bc(e,n),o=[];break;case"select":i=De({},i,{value:void 0}),n=De({},n,{value:void 0}),o=[];break;case"textarea":i=Tc(e,i),n=Tc(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ra)}_c(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ui.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var l=n[c];if(s=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ye("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Gm=function(e,t,r,n){r!==n&&(t.flags|=4)};function xi(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function s2(e,t,r){var n=t.pendingProps;switch(cd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return st(t.type)&&Na(),Ye(t),null;case 3:return n=t.stateNode,Kn(),xe(at),xe(Xe),yd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(lu(At),At=null))),eu(e,t),Ye(t),null;case 5:vd(t);var i=Jr(to.current);if(r=t.type,e!==null&&t.stateNode!=null)Wm(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error($(166));return Ye(t),null}if(e=Jr(Xt.current),Go(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Wt]=t,n[Ji]=o,e=(t.mode&1)!==0,r){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<Oi.length;i++)ye(Oi[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":Sf(n,o),ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},ye("invalid",n);break;case"textarea":Ef(n,o),ye("invalid",n)}_c(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Wo(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Wo(n.textContent,s,e),i=["children",""+s]):Ui.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ye("scroll",n)}switch(r){case"input":No(n),bf(n,o,!0);break;case"textarea":No(n),Cf(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ra)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Wt]=t,e[Ji]=n,Vm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Oc(r,n),r){case"dialog":ye("cancel",e),ye("close",e),i=n;break;case"iframe":case"object":case"embed":ye("load",e),i=n;break;case"video":case"audio":for(i=0;i<Oi.length;i++)ye(Oi[i],e);i=n;break;case"source":ye("error",e),i=n;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=n;break;case"details":ye("toggle",e),i=n;break;case"input":Sf(e,n),i=bc(e,n),ye("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=De({},n,{value:void 0}),ye("invalid",e);break;case"textarea":Ef(e,n),i=Tc(e,n),ye("invalid",e);break;default:i=n}_c(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?bh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xh(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Vi(e,l):typeof l=="number"&&Vi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ye("scroll",e):l!=null&&qu(e,o,l,a))}switch(r){case"input":No(e),bf(e,n,!1);break;case"textarea":No(e),Cf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+$r(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?jn(e,!!n.multiple,o,!1):n.defaultValue!=null&&jn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ra)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Gm(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error($(166));if(r=Jr(to.current),Jr(Xt.current),Go(t)){if(n=t.stateNode,r=t.memoizedProps,n[Wt]=t,(o=n.nodeValue!==r)&&(e=pt,e!==null))switch(e.tag){case 3:Wo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Wt]=t,t.stateNode=n}return Ye(t),null;case 13:if(xe(Oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cm(),Xn(),t.flags|=98560,o=!1;else if(o=Go(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Wt]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else At!==null&&(lu(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Oe.current&1)!==0?Re===0&&(Re=3):Dd())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Kn(),eu(e,t),e===null&&Ki(t.stateNode.containerInfo),Ye(t),null;case 10:return pd(t.type._context),Ye(t),null;case 17:return st(t.type)&&Na(),Ye(t),null;case 19:if(xe(Oe),o=t.memoizedState,o===null)return Ye(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)xi(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Va(e),a!==null){for(t.flags|=128,xi(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return me(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Jn&&(t.flags|=128,n=!0,xi(o,!1),t.lanes=4194304)}else{if(!n)if(e=Va(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),xi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Te)return Ye(t),null}else 2*ze()-o.renderingStartTime>Jn&&r!==1073741824&&(t.flags|=128,n=!0,xi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,r=Oe.current,me(Oe,n?r&1|2:r&1),t):(Ye(t),null);case 22:case 23:return Pd(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ct&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function l2(e,t){switch(cd(t),t.tag){case 1:return st(t.type)&&Na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),xe(at),xe(Xe),yd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return vd(t),null;case 13:if(xe(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Oe),null;case 4:return Kn(),null;case 10:return pd(t.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Xo=!1,qe=!1,c2=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ln(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ie(e,t,n)}else r.current=null}function tu(e,t,r){try{r()}catch(n){Ie(e,t,n)}}var p0=!1;function u2(e,t){if($c=za,e=Qh(),sd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=e,m=null;t:for(;;){for(var v;f!==r||i!==0&&f.nodeType!==3||(s=a+i),f!==o||n!==0&&f.nodeType!==3||(l=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===r&&++c===i&&(s=a),m===o&&++u===n&&(l=a),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(jc={focusedElem:e,selectionRange:r},za=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:zt(t.type,w),C);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(y){Ie(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return x=p0,p0=!1,x}function Ni(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tu(t,r,o)}i=i.next}while(i!==n)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ru(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[Ji],delete t[Bc],delete t[Gy],delete t[Yy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qm(e){return e.tag===5||e.tag===3||e.tag===4}function h0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ra));else if(n!==4&&(e=e.child,e!==null))for(nu(e,t,r),e=e.sibling;e!==null;)nu(e,t,r),e=e.sibling}function iu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(iu(e,t,r),e=e.sibling;e!==null;)iu(e,t,r),e=e.sibling}var Be=null,Lt=!1;function pr(e,t,r){for(r=r.child;r!==null;)Xm(e,t,r),r=r.sibling}function Xm(e,t,r){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(fs,r)}catch{}switch(r.tag){case 5:qe||Ln(r,t);case 6:var n=Be,i=Lt;Be=null,pr(e,t,r),Be=n,Lt=i,Be!==null&&(Lt?(e=Be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Be.removeChild(r.stateNode));break;case 18:Be!==null&&(Lt?(e=Be,r=r.stateNode,e.nodeType===8?yl(e.parentNode,r):e.nodeType===1&&yl(e,r),qi(e)):yl(Be,r.stateNode));break;case 4:n=Be,i=Lt,Be=r.stateNode.containerInfo,Lt=!0,pr(e,t,r),Be=n,Lt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&tu(r,t,a),i=i.next}while(i!==n)}pr(e,t,r);break;case 1:if(!qe&&(Ln(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Ie(r,t,s)}pr(e,t,r);break;case 21:pr(e,t,r);break;case 22:r.mode&1?(qe=(n=qe)||r.memoizedState!==null,pr(e,t,r),qe=n):pr(e,t,r);break;default:pr(e,t,r)}}function m0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new c2),t.forEach(function(n){var i=w2.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Mt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,Lt=!1;break e;case 3:Be=s.stateNode.containerInfo,Lt=!0;break e;case 4:Be=s.stateNode.containerInfo,Lt=!0;break e}s=s.return}if(Be===null)throw Error($(160));Xm(o,a,i),Be=null,Lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ie(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qm(t,e),t=t.sibling}function Qm(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Bt(e),n&4){try{Ni(3,e,e.return),xs(3,e)}catch(w){Ie(e,e.return,w)}try{Ni(5,e,e.return)}catch(w){Ie(e,e.return,w)}}break;case 1:Mt(t,e),Bt(e),n&512&&r!==null&&Ln(r,r.return);break;case 5:if(Mt(t,e),Bt(e),n&512&&r!==null&&Ln(r,r.return),e.flags&32){var i=e.stateNode;try{Vi(i,"")}catch(w){Ie(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&vh(i,o),Oc(s,a);var c=Oc(s,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?bh(i,f):u==="dangerouslySetInnerHTML"?xh(i,f):u==="children"?Vi(i,f):qu(i,u,f,c)}switch(s){case"input":Ec(i,o);break;case"textarea":yh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?jn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?jn(i,!!o.multiple,o.defaultValue,!0):jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ji]=o}catch(w){Ie(e,e.return,w)}}break;case 6:if(Mt(t,e),Bt(e),n&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ie(e,e.return,w)}}break;case 3:if(Mt(t,e),Bt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{qi(t.containerInfo)}catch(w){Ie(e,e.return,w)}break;case 4:Mt(t,e),Bt(e);break;case 13:Mt(t,e),Bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_d=ze())),n&4&&m0(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(qe=(c=qe)||u,Mt(t,e),qe=c):Mt(t,e),Bt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&(e.mode&1)!==0)for(X=e,u=e.child;u!==null;){for(f=X=u;X!==null;){switch(m=X,v=m.child,m.tag){case 0:case 11:case 14:case 15:Ni(4,m,m.return);break;case 1:Ln(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Ie(n,r,w)}}break;case 5:Ln(m,m.return);break;case 22:if(m.memoizedState!==null){v0(f);continue}}v!==null?(v.return=m,X=v):v0(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Sh("display",a))}catch(w){Ie(e,e.return,w)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){Ie(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mt(t,e),Bt(e),n&4&&m0(e);break;case 21:break;default:Mt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(qm(r)){var n=r;break e}r=r.return}throw Error($(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Vi(i,""),n.flags&=-33);var o=h0(e);iu(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=h0(e);nu(e,s,a);break;default:throw Error($(161))}}catch(l){Ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d2(e,t,r){X=e,Km(e)}function Km(e,t,r){for(var n=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Xo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||qe;s=Xo;var c=qe;if(Xo=a,(qe=l)&&!c)for(X=i;X!==null;)a=X,l=a.child,a.tag===22&&a.memoizedState!==null?y0(i):l!==null?(l.return=a,X=l):y0(i);for(;o!==null;)X=o,Km(o),o=o.sibling;X=i,Xo=s,qe=c}g0(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,X=o):g0(e)}}function g0(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||xs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!qe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:zt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Jf(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Jf(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&qi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}qe||t.flags&512&&ru(t)}catch(m){Ie(t,t.return,m)}}if(t===e){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function v0(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function y0(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xs(4,t)}catch(l){Ie(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Ie(t,i,l)}}var o=t.return;try{ru(t)}catch(l){Ie(t,o,l)}break;case 5:var a=t.return;try{ru(t)}catch(l){Ie(t,a,l)}}}catch(l){Ie(t,t.return,l)}if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}var f2=Math.ceil,Ya=dr.ReactCurrentDispatcher,Td=dr.ReactCurrentOwner,Ot=dr.ReactCurrentBatchConfig,le=0,Fe=null,Le=null,Ue=0,ct=0,An=Hr(0),Re=0,oo=null,ln=0,Ss=0,kd=0,$i=null,it=null,_d=0,Jn=1/0,er=null,qa=!1,ou=null,Ir=null,Qo=!1,Er=null,Xa=0,ji=0,au=null,xa=-1,Sa=0;function tt(){return(le&6)!==0?ze():xa!==-1?xa:xa=ze()}function zr(e){return(e.mode&1)===0?1:(le&2)!==0&&Ue!==0?Ue&-Ue:Xy.transition!==null?(Sa===0&&(Sa=Lh()),Sa):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Hh(e.type)),e)}function Ft(e,t,r,n){if(50<ji)throw ji=0,au=null,Error($(185));vo(e,r,n),((le&2)===0||e!==Fe)&&(e===Fe&&((le&2)===0&&(Ss|=r),Re===4&&Sr(e,Ue)),lt(e,n),r===1&&le===0&&(t.mode&1)===0&&(Jn=ze()+500,vs&&Br()))}function lt(e,t){var r=e.callbackNode;Xv(e,t);var n=Ia(e,e===Fe?Ue:0);if(n===0)r!==null&&_f(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&_f(r),t===1)e.tag===0?qy(w0.bind(null,e)):am(w0.bind(null,e)),Vy(function(){(le&6)===0&&Br()}),r=null;else{switch(Ah(n)){case 1:r=Ju;break;case 4:r=Ih;break;case 16:r=Ma;break;case 536870912:r=zh;break;default:r=Ma}r=og(r,Zm.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zm(e,t){if(xa=-1,Sa=0,(le&6)!==0)throw Error($(327));var r=e.callbackNode;if(Vn()&&e.callbackNode!==r)return null;var n=Ia(e,e===Fe?Ue:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Qa(e,n);else{t=n;var i=le;le|=2;var o=eg();(Fe!==e||Ue!==t)&&(er=null,Jn=ze()+500,tn(e,t));do try{m2();break}catch(s){Jm(e,s)}while(1);fd(),Ya.current=o,le=i,Le!==null?t=0:(Fe=null,Ue=0,t=Re)}if(t!==0){if(t===2&&(i=zc(e),i!==0&&(n=i,t=su(e,i))),t===1)throw r=oo,tn(e,0),Sr(e,n),lt(e,ze()),r;if(t===6)Sr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!p2(i)&&(t=Qa(e,n),t===2&&(o=zc(e),o!==0&&(n=o,t=su(e,o))),t===1))throw r=oo,tn(e,0),Sr(e,n),lt(e,ze()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error($(345));case 2:qr(e,it,er);break;case 3:if(Sr(e,n),(n&130023424)===n&&(t=_d+500-ze(),10<t)){if(Ia(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hc(qr.bind(null,e,it,er),t);break}qr(e,it,er);break;case 4:if(Sr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-jt(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*f2(n/1960))-n,10<n){e.timeoutHandle=Hc(qr.bind(null,e,it,er),n);break}qr(e,it,er);break;case 5:qr(e,it,er);break;default:throw Error($(329))}}}return lt(e,ze()),e.callbackNode===r?Zm.bind(null,e):null}function su(e,t){var r=$i;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=it,it=r,t!==null&&lu(t)),e}function lu(e){it===null?it=e:it.push.apply(it,e)}function p2(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sr(e,t){for(t&=~kd,t&=~Ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),n=1<<r;e[r]=-1,t&=~n}}function w0(e){if((le&6)!==0)throw Error($(327));Vn();var t=Ia(e,0);if((t&1)===0)return lt(e,ze()),null;var r=Qa(e,t);if(e.tag!==0&&r===2){var n=zc(e);n!==0&&(t=n,r=su(e,n))}if(r===1)throw r=oo,tn(e,0),Sr(e,t),lt(e,ze()),r;if(r===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qr(e,it,er),lt(e,ze()),null}function Od(e,t){var r=le;le|=1;try{return e(t)}finally{le=r,le===0&&(Jn=ze()+500,vs&&Br())}}function cn(e){Er!==null&&Er.tag===0&&(le&6)===0&&Vn();var t=le;le|=1;var r=Ot.transition,n=fe;try{if(Ot.transition=null,fe=1,e)return e()}finally{fe=n,Ot.transition=r,le=t,(le&6)===0&&Br()}}function Pd(){ct=An.current,xe(An)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Uy(r)),Le!==null)for(r=Le.return;r!==null;){var n=r;switch(cd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Na();break;case 3:Kn(),xe(at),xe(Xe),yd();break;case 5:vd(n);break;case 4:Kn();break;case 13:xe(Oe);break;case 19:xe(Oe);break;case 10:pd(n.type._context);break;case 22:case 23:Pd()}r=r.return}if(Fe=e,Le=e=Lr(e.current,null),Ue=ct=t,Re=0,oo=null,kd=Ss=ln=0,it=$i=null,Zr!==null){for(t=0;t<Zr.length;t++)if(r=Zr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Zr=null}return e}function Jm(e,t){do{var r=Le;try{if(fd(),va.current=Ga,Wa){for(var n=Pe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Wa=!1}if(sn=0,$e=Ae=Pe=null,Ri=!1,ro=0,Td.current=null,r===null||r.return===null){Re=1,oo=t,Le=null;break}e:{var o=e,a=r.return,s=r,l=t;if(t=Ue,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=a0(a);if(v!==null){v.flags&=-257,s0(v,a,s,o,t),v.mode&1&&o0(o,c,t),t=v,l=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(l),t.updateQueue=w}else x.add(l);break e}else{if((t&1)===0){o0(o,c,t),Dd();break e}l=Error($(426))}}else if(Te&&s.mode&1){var C=a0(a);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),s0(C,a,s,o,t),ud(Zn(l,s));break e}}o=l=Zn(l,s),Re!==4&&(Re=2),$i===null?$i=[o]:$i.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Rm(o,l,t);Zf(o,g);break e;case 1:s=l;var d=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ir===null||!Ir.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Nm(o,s,t);Zf(o,y);break e}}o=o.return}while(o!==null)}rg(r)}catch(b){t=b,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(1)}function eg(){var e=Ya.current;return Ya.current=Ga,e===null?Ga:e}function Dd(){(Re===0||Re===3||Re===2)&&(Re=4),Fe===null||(ln&268435455)===0&&(Ss&268435455)===0||Sr(Fe,Ue)}function Qa(e,t){var r=le;le|=2;var n=eg();(Fe!==e||Ue!==t)&&(er=null,tn(e,t));do try{h2();break}catch(i){Jm(e,i)}while(1);if(fd(),le=r,Ya.current=n,Le!==null)throw Error($(261));return Fe=null,Ue=0,Re}function h2(){for(;Le!==null;)tg(Le)}function m2(){for(;Le!==null&&!Fv();)tg(Le)}function tg(e){var t=ig(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?rg(e):Le=t,Td.current=null}function rg(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=s2(r,t,ct),r!==null){Le=r;return}}else{if(r=l2(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Re===0&&(Re=5)}function qr(e,t,r){var n=fe,i=Ot.transition;try{Ot.transition=null,fe=1,g2(e,t,r,n)}finally{Ot.transition=i,fe=n}return null}function g2(e,t,r,n){do Vn();while(Er!==null);if((le&6)!==0)throw Error($(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Qv(e,o),e===Fe&&(Le=Fe=null,Ue=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Qo||(Qo=!0,og(Ma,function(){return Vn(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=Ot.transition,Ot.transition=null;var a=fe;fe=1;var s=le;le|=4,Td.current=null,u2(e,r),Qm(r,e),Ry(jc),za=!!$c,jc=$c=null,e.current=r,d2(r),Hv(),le=s,fe=a,Ot.transition=o}else e.current=r;if(Qo&&(Qo=!1,Er=e,Xa=i),o=e.pendingLanes,o===0&&(Ir=null),Vv(r.stateNode),lt(e,ze()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(qa)throw qa=!1,e=ou,ou=null,e;return(Xa&1)!==0&&e.tag!==0&&Vn(),o=e.pendingLanes,(o&1)!==0?e===au?ji++:(ji=0,au=e):ji=0,Br(),null}function Vn(){if(Er!==null){var e=Ah(Xa),t=Ot.transition,r=fe;try{if(Ot.transition=null,fe=16>e?16:e,Er===null)var n=!1;else{if(e=Er,Er=null,Xa=0,(le&6)!==0)throw Error($(331));var i=le;for(le|=4,X=e.current;X!==null;){var o=X,a=o.child;if((X.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(X=c;X!==null;){var u=X;switch(u.tag){case 0:case 11:case 15:Ni(8,u,o)}var f=u.child;if(f!==null)f.return=u,X=f;else for(;X!==null;){u=X;var m=u.sibling,v=u.return;if(Ym(u),u===c){X=null;break}if(m!==null){m.return=v,X=m;break}X=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}X=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,X=a;else e:for(;X!==null;){if(o=X,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,X=g;break e}X=o.return}}var d=e.current;for(X=d;X!==null;){a=X;var h=a.child;if((a.subtreeFlags&2064)!==0&&h!==null)h.return=a,X=h;else e:for(a=d;X!==null;){if(s=X,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:xs(9,s)}}catch(b){Ie(s,s.return,b)}if(s===a){X=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,X=y;break e}X=s.return}}if(le=i,Br(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(fs,e)}catch{}n=!0}return n}finally{fe=r,Ot.transition=t}}return!1}function x0(e,t,r){t=Zn(r,t),t=Rm(e,t,1),e=Mr(e,t,1),t=tt(),e!==null&&(vo(e,1,t),lt(e,t))}function Ie(e,t,r){if(e.tag===3)x0(e,e,r);else for(;t!==null;){if(t.tag===3){x0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ir===null||!Ir.has(n))){e=Zn(r,e),e=Nm(t,e,1),t=Mr(t,e,1),e=tt(),t!==null&&(vo(t,1,e),lt(t,e));break}}t=t.return}}function v2(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&r,Fe===e&&(Ue&r)===r&&(Re===4||Re===3&&(Ue&130023424)===Ue&&500>ze()-_d?tn(e,0):kd|=r),lt(e,t)}function ng(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fo,Fo<<=1,(Fo&130023424)===0&&(Fo=4194304)));var r=tt();e=lr(e,t),e!==null&&(vo(e,t,r),lt(e,r))}function y2(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ng(e,r)}function w2(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error($(314))}n!==null&&n.delete(t),ng(e,r)}var ig;ig=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)ot=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ot=!1,a2(e,t,r);ot=(e.flags&131072)!==0}else ot=!1,Te&&(t.flags&1048576)!==0&&sm(t,Fa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;wa(e,t),e=t.pendingProps;var i=qn(t,Xe.current);Un(t,r),i=xd(null,t,n,e,i,r);var o=Sd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(n)?(o=!0,$a(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,md(t),i.updater=ys,t.stateNode=i,i._reactInternals=t,qc(t,n,e,r),t=Kc(null,t,n,!0,o,r)):(t.tag=0,Te&&o&&ld(t),Ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=S2(n),e=zt(n,e),i){case 0:t=Qc(null,t,n,e,r);break e;case 1:t=u0(null,t,n,e,r);break e;case 11:t=l0(null,t,n,e,r);break e;case 14:t=c0(null,t,n,zt(n.type,e),r);break e}throw Error($(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),Qc(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),u0(e,t,n,i,r);case 3:e:{if(Hm(t),e===null)throw Error($(387));n=t.pendingProps,o=t.memoizedState,i=o.element,dm(e,t),Ua(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error($(423)),t),t=d0(e,t,n,r,i);break e}else if(n!==i){i=Zn(Error($(424)),t),t=d0(e,t,n,r,i);break e}else for(ft=Dr(t.stateNode.containerInfo.firstChild),pt=t,Te=!0,At=null,r=mm(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xn(),n===i){t=cr(e,t,r);break e}Ze(e,t,n,r)}t=t.child}return t;case 5:return gm(t),e===null&&Wc(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Fc(n,i)?a=null:o!==null&&Fc(n,o)&&(t.flags|=32),Fm(e,t),Ze(e,t,a,r),t.child;case 6:return e===null&&Wc(t),null;case 13:return Bm(e,t,r);case 4:return gd(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Qn(t,null,n,r):Ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),l0(e,t,n,i,r);case 7:return Ze(e,t,t.pendingProps,r),t.child;case 8:return Ze(e,t,t.pendingProps.children,r),t.child;case 12:return Ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,me(Ha,n._currentValue),n._currentValue=a,o!==null)if(Ht(o.value,a)){if(o.children===i.children&&!at.current){t=cr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=or(-1,r&-r),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Gc(o.return,r,t),s.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error($(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Gc(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Un(t,r),i=Pt(i),n=n(i),t.flags|=1,Ze(e,t,n,r),t.child;case 14:return n=t.type,i=zt(n,t.pendingProps),i=zt(n.type,i),c0(e,t,n,i,r);case 15:return $m(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:zt(n,i),wa(e,t),t.tag=1,st(n)?(e=!0,$a(t)):e=!1,Un(t,r),pm(t,n,i),qc(t,n,i,r),Kc(null,t,n,!0,e,r);case 19:return Um(e,t,r);case 22:return jm(e,t,r)}throw Error($(156,t.tag))};function og(e,t){return Mh(e,t)}function x2(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,r,n){return new x2(e,t,r,n)}function Md(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S2(e){if(typeof e=="function")return Md(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qu)return 11;if(e===Ku)return 14}return 2}function Lr(e,t){var r=e.alternate;return r===null?(r=_t(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ba(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")Md(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tn:return rn(r.children,i,o,t);case Xu:a=8,i|=8;break;case yc:return e=_t(12,r,t,i|2),e.elementType=yc,e.lanes=o,e;case wc:return e=_t(13,r,t,i),e.elementType=wc,e.lanes=o,e;case xc:return e=_t(19,r,t,i),e.elementType=xc,e.lanes=o,e;case hh:return bs(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:a=10;break e;case ph:a=9;break e;case Qu:a=11;break e;case Ku:a=14;break e;case yr:a=16,n=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=_t(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function rn(e,t,r,n){return e=_t(7,e,n,t),e.lanes=r,e}function bs(e,t,r,n){return e=_t(22,e,n,t),e.elementType=hh,e.lanes=r,e.stateNode={isHidden:!1},e}function kl(e,t,r){return e=_t(6,e,null,t),e.lanes=r,e}function _l(e,t,r){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b2(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Id(e,t,r,n,i,o,a,s,l){return e=new b2(e,t,r,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(o),e}function E2(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ag(e){if(!e)return jr;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var r=e.type;if(st(r))return om(e,r,t)}return t}function sg(e,t,r,n,i,o,a,s,l){return e=Id(r,n,!0,e,i,o,a,s,l),e.context=ag(null),r=e.current,n=tt(),i=zr(r),o=or(n,i),o.callback=t??null,Mr(r,o,i),e.current.lanes=i,vo(e,i,n),lt(e,n),e}function Es(e,t,r,n){var i=t.current,o=tt(),a=zr(i);return r=ag(r),t.context===null?t.context=r:t.pendingContext=r,t=or(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Mr(i,t,a),e!==null&&(Ft(e,i,a,o),ga(e,i,a)),a}function Ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function S0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function zd(e,t){S0(e,t),(e=e.alternate)&&S0(e,t)}function C2(){return null}var lg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ld(e){this._internalRoot=e}Cs.prototype.render=Ld.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Es(e,t,null,null)};Cs.prototype.unmount=Ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Es(null,e,null,null)}),t[sr]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=$h();e={blockedOn:null,target:e,priority:t};for(var r=0;r<xr.length&&t!==0&&t<xr[r].priority;r++);xr.splice(r,0,e),r===0&&Fh(e)}};function Ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function b0(){}function T2(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=Ka(a);o.call(c)}}var a=sg(t,n,e,0,null,!1,!1,"",b0);return e._reactRootContainer=a,e[sr]=a.current,Ki(e.nodeType===8?e.parentNode:e),cn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var c=Ka(l);s.call(c)}}var l=Id(e,0,!1,null,null,!1,!1,"",b0);return e._reactRootContainer=l,e[sr]=l.current,Ki(e.nodeType===8?e.parentNode:e),cn(function(){Es(t,l,r,n)}),l}function ks(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ka(a);s.call(l)}}Es(t,a,e,i)}else a=T2(r,t,e,i,n);return Ka(a)}Rh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_i(t.pendingLanes);r!==0&&(ed(t,r|1),lt(t,ze()),(le&6)===0&&(Jn=ze()+500,Br()))}break;case 13:cn(function(){var n=lr(e,1);if(n!==null){var i=tt();Ft(n,e,1,i)}}),zd(e,1)}};td=function(e){if(e.tag===13){var t=lr(e,134217728);if(t!==null){var r=tt();Ft(t,e,134217728,r)}zd(e,134217728)}};Nh=function(e){if(e.tag===13){var t=zr(e),r=lr(e,t);if(r!==null){var n=tt();Ft(r,e,t,n)}zd(e,t)}};$h=function(){return fe};jh=function(e,t){var r=fe;try{return fe=e,t()}finally{fe=r}};Dc=function(e,t,r){switch(t){case"input":if(Ec(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=gs(n);if(!i)throw Error($(90));gh(n),Ec(n,i)}}}break;case"textarea":yh(e,r);break;case"select":t=r.value,t!=null&&jn(e,!!r.multiple,t,!1)}};Th=Od;kh=cn;var k2={usingClientEntryPoint:!1,Events:[wo,Pn,gs,Eh,Ch,Od]},Si={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_2={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||C2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{fs=Ko.inject(_2),qt=Ko}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k2;vt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(t))throw Error($(200));return E2(e,t,null,r)};vt.createRoot=function(e,t){if(!Ad(e))throw Error($(299));var r=!1,n="",i=lg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Id(e,1,!1,null,null,r,!1,n,i),e[sr]=t.current,Ki(e.nodeType===8?e.parentNode:e),new Ld(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return cn(e)};vt.hydrate=function(e,t,r){if(!Ts(t))throw Error($(200));return ks(null,e,t,!0,r)};vt.hydrateRoot=function(e,t,r){if(!Ad(e))throw Error($(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=lg;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=sg(t,null,e,1,r??null,i,!1,o,a),e[sr]=t.current,Ki(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Cs(t)};vt.render=function(e,t,r){if(!Ts(t))throw Error($(200));return ks(null,e,t,!1,r)};vt.unmountComponentAtNode=function(e){if(!Ts(e))throw Error($(40));return e._reactRootContainer?(cn(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[sr]=null})}),!0):!1};vt.unstable_batchedUpdates=Od;vt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ts(r))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return ks(e,t,r,!1,n)};vt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}t(),e.exports=vt})(Wu);var E0=Wu.exports;gc.createRoot=E0.createRoot,gc.hydrateRoot=E0.hydrateRoot;var Me={},Rd={},So={},bo={},cg="Expected a function",C0=0/0,O2="[object Symbol]",P2=/^\s+|\s+$/g,D2=/^[-+]0x[0-9a-f]+$/i,M2=/^0b[01]+$/i,I2=/^0o[0-7]+$/i,z2=parseInt,L2=typeof Lo=="object"&&Lo&&Lo.Object===Object&&Lo,A2=typeof self=="object"&&self&&self.Object===Object&&self,R2=L2||A2||Function("return this")(),N2=Object.prototype,$2=N2.toString,j2=Math.max,F2=Math.min,Ol=function(){return R2.Date.now()};function H2(e,t,r){var n,i,o,a,s,l,c=0,u=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(cg);t=T0(t)||0,Za(r)&&(u=!!r.leading,f="maxWait"in r,o=f?j2(T0(r.maxWait)||0,t):o,m="trailing"in r?!!r.trailing:m);function v(_){var P=n,I=i;return n=i=void 0,c=_,a=e.apply(I,P),a}function x(_){return c=_,s=setTimeout(g,t),u?v(_):a}function w(_){var P=_-l,I=_-c,k=t-P;return f?F2(k,o-I):k}function C(_){var P=_-l,I=_-c;return l===void 0||P>=t||P<0||f&&I>=o}function g(){var _=Ol();if(C(_))return d(_);s=setTimeout(g,w(_))}function d(_){return s=void 0,m&&n?v(_):(n=i=void 0,a)}function h(){s!==void 0&&clearTimeout(s),c=0,n=l=i=s=void 0}function y(){return s===void 0?a:d(Ol())}function b(){var _=Ol(),P=C(_);if(n=arguments,i=this,l=_,P){if(s===void 0)return x(l);if(f)return s=setTimeout(g,t),v(l)}return s===void 0&&(s=setTimeout(g,t)),a}return b.cancel=h,b.flush=y,b}function B2(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(cg);return Za(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),H2(e,t,{leading:n,maxWait:t,trailing:i})}function Za(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function U2(e){return!!e&&typeof e=="object"}function V2(e){return typeof e=="symbol"||U2(e)&&$2.call(e)==O2}function T0(e){if(typeof e=="number")return e;if(V2(e))return C0;if(Za(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Za(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(P2,"");var r=M2.test(e);return r||I2.test(e)?z2(e.slice(2),r?2:8):D2.test(e)?C0:+e}var W2=B2,Eo={};Object.defineProperty(Eo,"__esModule",{value:!0});Eo.addPassiveEventListener=function(t,r,n){var i=function(){var o=!1;try{var a=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,a)}catch{}return o}();t.addEventListener(r,n,i?{passive:!0}:!1)};Eo.removePassiveEventListener=function(t,r,n){t.removeEventListener(r,n)};Object.defineProperty(bo,"__esModule",{value:!0});var G2=W2,Y2=X2(G2),q2=Eo;function X2(e){return e&&e.__esModule?e:{default:e}}var Q2=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Y2.default)(t,r)},ke={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,r){if(t){var n=Q2(function(i){ke.scrollHandler(t)},r);ke.scrollSpyContainers.push(t),(0,q2.addPassiveEventListener)(t,"scroll",n)}},isMounted:function(t){return ke.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var r=window.pageYOffset!==void 0,n=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var r=window.pageXOffset!==void 0,n=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var r=ke.scrollSpyContainers[ke.scrollSpyContainers.indexOf(t)].spyCallbacks||[];r.forEach(function(n){return n(ke.currentPositionX(t),ke.currentPositionY(t))})},addStateHandler:function(t){ke.spySetState.push(t)},addSpyHandler:function(t,r){var n=ke.scrollSpyContainers[ke.scrollSpyContainers.indexOf(r)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t),t(ke.currentPositionX(r),ke.currentPositionY(r))},updateStates:function(){ke.spySetState.forEach(function(t){return t()})},unmount:function(t,r){ke.scrollSpyContainers.forEach(function(n){return n.spyCallbacks&&n.spyCallbacks.length&&n.spyCallbacks.indexOf(r)>-1&&n.spyCallbacks.splice(n.spyCallbacks.indexOf(r),1)}),ke.spySetState&&ke.spySetState.length&&ke.spySetState.indexOf(t)>-1&&ke.spySetState.splice(ke.spySetState.indexOf(t),1),document.removeEventListener("scroll",ke.scrollHandler)},update:function(){return ke.scrollSpyContainers.forEach(function(t){return ke.scrollHandler(t)})}};bo.default=ke;var si={},Co={};Object.defineProperty(Co,"__esModule",{value:!0});var K2=function(t,r){var n=t.indexOf("#")===0?t.substring(1):t,i=n?"#"+n:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;r?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},Z2=function(){return window.location.hash.replace(/^#/,"")},J2=function(t){return function(r){return t.contains?t!=r&&t.contains(r):!!(t.compareDocumentPosition(r)&16)}},ew=function(t){return getComputedStyle(t).position!=="static"},Pl=function(t,r){for(var n=t.offsetTop,i=t.offsetParent;i&&!r(i);)n+=i.offsetTop,i=i.offsetParent;return{offsetTop:n,offsetParent:i}},tw=function(t,r,n){if(n)return t===document?r.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?r.offsetLeft:r.offsetLeft-t.offsetLeft;if(t===document)return r.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(ew(t)){if(r.offsetParent!==t){var i=function(u){return u===t||u===document},o=Pl(r,i),a=o.offsetTop,s=o.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return r.offsetTop}if(r.offsetParent===t.offsetParent)return r.offsetTop-t.offsetTop;var l=function(u){return u===document};return Pl(r,l).offsetTop-Pl(t,l).offsetTop};Co.default={updateHash:K2,getHash:Z2,filterElementInContainer:J2,scrollOffset:tw};var _s={},Nd={};Object.defineProperty(Nd,"__esModule",{value:!0});Nd.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var $d={};Object.defineProperty($d,"__esModule",{value:!0});var rw=Eo,nw=["mousedown","mousewheel","touchmove","keydown"];$d.default={subscribe:function(t){return typeof document<"u"&&nw.forEach(function(r){return(0,rw.addPassiveEventListener)(document,r,t)})}};var To={};Object.defineProperty(To,"__esModule",{value:!0});var cu={registered:{},scrollEvent:{register:function(t,r){cu.registered[t]=r},remove:function(t){cu.registered[t]=null}}};To.default=cu;Object.defineProperty(_s,"__esModule",{value:!0});var iw=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ow=Co;Os(ow);var aw=Nd,k0=Os(aw),sw=$d,lw=Os(sw),cw=To,Vt=Os(cw);function Os(e){return e&&e.__esModule?e:{default:e}}var ug=function(t){return k0.default[t.smooth]||k0.default.defaultEasing},uw=function(t){return typeof t=="function"?t:function(){return t}},dw=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},uu=function(){return dw()||function(e,t,r){window.setTimeout(e,r||1e3/60,new Date().getTime())}}(),dg=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},fg=function(t){var r=t.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollLeft;var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},pg=function(t){var r=t.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollTop;var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},fw=function(t){var r=t.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollWidth-r.offsetWidth;var n=document.body,i=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},pw=function(t){var r=t.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollHeight-r.offsetHeight;var n=document.body,i=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},hw=function e(t,r,n){var i=r.data;if(!r.ignoreCancelEvents&&i.cancel){Vt.default.registered.end&&Vt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=n),i.progress=n-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?r.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:r.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,r);uu.call(window,o);return}Vt.default.registered.end&&Vt.default.registered.end(i.to,i.target,i.currentPosition)},jd=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},ko=function(t,r,n,i){if(r.data=r.data||dg(),window.clearTimeout(r.data.delayTimeout),lw.default.subscribe(function(){r.data.cancel=!0}),jd(r),r.data.start=null,r.data.cancel=!1,r.data.startPosition=r.horizontal?fg(r):pg(r),r.data.targetPosition=r.absolute?t:t+r.data.startPosition,r.data.startPosition===r.data.targetPosition){Vt.default.registered.end&&Vt.default.registered.end(r.data.to,r.data.target,r.data.currentPosition);return}r.data.delta=Math.round(r.data.targetPosition-r.data.startPosition),r.data.duration=uw(r.duration)(r.data.delta),r.data.duration=isNaN(parseFloat(r.data.duration))?1e3:parseFloat(r.data.duration),r.data.to=n,r.data.target=i;var o=ug(r),a=hw.bind(null,o,r);if(r&&r.delay>0){r.data.delayTimeout=window.setTimeout(function(){Vt.default.registered.begin&&Vt.default.registered.begin(r.data.to,r.data.target),uu.call(window,a)},r.delay);return}Vt.default.registered.begin&&Vt.default.registered.begin(r.data.to,r.data.target),uu.call(window,a)},Ps=function(t){return t=iw({},t),t.data=t.data||dg(),t.absolute=!0,t},mw=function(t){ko(0,Ps(t))},gw=function(t,r){ko(t,Ps(r))},vw=function(t){t=Ps(t),jd(t),ko(t.horizontal?fw(t):pw(t),t)},yw=function(t,r){r=Ps(r),jd(r);var n=r.horizontal?fg(r):pg(r);ko(t+n,r)};_s.default={animateTopScroll:ko,getAnimationType:ug,scrollToTop:mw,scrollToBottom:vw,scrollTo:gw,scrollMore:yw};Object.defineProperty(si,"__esModule",{value:!0});var ww=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xw=Co,Sw=Fd(xw),bw=_s,Ew=Fd(bw),Cw=To,Zo=Fd(Cw);function Fd(e){return e&&e.__esModule?e:{default:e}}var Jo={},_0=void 0;si.default={unmount:function(){Jo={}},register:function(t,r){Jo[t]=r},unregister:function(t){delete Jo[t]},get:function(t){return Jo[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return _0=t},getActiveLink:function(){return _0},scrollTo:function(t,r){var n=this.get(t);if(!n){console.warn("target Element not found");return}r=ww({},r,{absolute:!1});var i=r.containerId,o=r.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,r.absolute=!0;var s=r.horizontal,l=Sw.default.scrollOffset(a,n,s)+(r.offset||0);if(!r.smooth){Zo.default.registered.begin&&Zo.default.registered.begin(t,n),a===document?r.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,Zo.default.registered.end&&Zo.default.registered.end(t,n);return}Ew.default.animateTopScroll(l,r,t,n)}};var _o={exports:{}},Tw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kw=Tw,_w=kw;function hg(){}function mg(){}mg.resetWarningCache=hg;var Ow=function(){function e(n,i,o,a,s,l){if(l!==_w){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mg,resetWarningCache:hg};return r.PropTypes=r,r};_o.exports=Ow();var Ds={};Object.defineProperty(Ds,"__esModule",{value:!0});var Pw=Co,Dl=Dw(Pw);function Dw(e){return e&&e.__esModule?e:{default:e}}var Mw={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,r){this.containers[t]=r},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,r=this.getHash();r?window.setTimeout(function(){t.scrollTo(r,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,r){var n=this.scroller,i=n.get(t);if(i&&(r||t!==n.getActiveLink())){var o=this.containers[t]||document;n.scrollTo(t,{container:o})}},getHash:function(){return Dl.default.getHash()},changeHash:function(t,r){this.isInitialized()&&Dl.default.getHash()!==t&&Dl.default.updateHash(t,r)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Ds.default=Mw;Object.defineProperty(So,"__esModule",{value:!0});var ea=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Iw=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),zw=E.exports,O0=Oo(zw),Lw=bo,ta=Oo(Lw),Aw=si,Rw=Oo(Aw),Nw=_o.exports,Ee=Oo(Nw),$w=Ds,hr=Oo($w);function Oo(e){return e&&e.__esModule?e:{default:e}}function jw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fw(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Hw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var P0={to:Ee.default.string.isRequired,containerId:Ee.default.string,container:Ee.default.object,activeClass:Ee.default.string,activeStyle:Ee.default.object,spy:Ee.default.bool,horizontal:Ee.default.bool,smooth:Ee.default.oneOfType([Ee.default.bool,Ee.default.string]),offset:Ee.default.number,delay:Ee.default.number,isDynamic:Ee.default.bool,onClick:Ee.default.func,duration:Ee.default.oneOfType([Ee.default.number,Ee.default.func]),absolute:Ee.default.bool,onSetActive:Ee.default.func,onSetInactive:Ee.default.func,ignoreCancelEvents:Ee.default.bool,hashSpy:Ee.default.bool,saveHashHistory:Ee.default.bool,spyThrottle:Ee.default.number};So.default=function(e,t){var r=t||Rw.default,n=function(o){Hw(a,o);function a(s){jw(this,a);var l=Fw(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(l),l.state={active:!1},l}return Iw(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();ta.default.isMounted(l)||ta.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(hr.default.isMounted()||hr.default.mount(r),hr.default.mapContainer(this.props.to,l)),ta.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){ta.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=ea({},this.props.style,this.props.activeStyle):c=ea({},this.props.style);var u=ea({},this.props);for(var f in P0)u.hasOwnProperty(f)&&delete u[f];return u.className=l,u.style=c,u.onClick=this.handleClick,O0.default.createElement(e,u)}}]),a}(O0.default.PureComponent),i=function(){var a=this;this.scrollTo=function(s,l){r.scrollTo(s,ea({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var c=a.getScrollSpyContainer();if(!(hr.default.isMounted()&&!hr.default.isInitialized())){var u=a.props.horizontal,f=a.props.to,m=null,v=void 0,x=void 0;if(u){var w=0,C=0,g=0;if(c.getBoundingClientRect){var d=c.getBoundingClientRect();g=d.left}if(!m||a.props.isDynamic){if(m=r.get(f),!m)return;var h=m.getBoundingClientRect();w=h.left-g+s,C=w+h.width}var y=s-a.props.offset;v=y>=Math.floor(w)&&y<Math.floor(C),x=y<Math.floor(w)||y>=Math.floor(C)}else{var b=0,_=0,P=0;if(c.getBoundingClientRect){var I=c.getBoundingClientRect();P=I.top}if(!m||a.props.isDynamic){if(m=r.get(f),!m)return;var k=m.getBoundingClientRect();b=k.top-P+l,_=b+k.height}var B=l-a.props.offset;v=B>=Math.floor(b)&&B<Math.floor(_),x=B<Math.floor(b)||B>=Math.floor(_)}var z=r.getActiveLink();if(x){if(f===z&&r.setActiveLink(void 0),a.props.hashSpy&&hr.default.getHash()===f){var R=a.props.saveHashHistory,j=R===void 0?!1:R;hr.default.changeHash("",j)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(f,m))}if(v&&(z!==f||a.state.active===!1)){r.setActiveLink(f);var Q=a.props.saveHashHistory,J=Q===void 0?!1:Q;a.props.hashSpy&&hr.default.changeHash(f,J),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(f,m))}}}};return n.propTypes=P0,n.defaultProps={offset:0},n};Object.defineProperty(Rd,"__esModule",{value:!0});var Bw=E.exports,D0=gg(Bw),Uw=So,Vw=gg(Uw);function gg(e){return e&&e.__esModule?e:{default:e}}function Ww(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Gw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Yw=function(e){Gw(t,e);function t(){var r,n,i,o;Ww(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return o=(n=(i=M0(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this].concat(s))),i),i.render=function(){return D0.default.createElement("a",i.props,i.props.children)},n),M0(i,o)}return t}(D0.default.Component);Rd.default=(0,Vw.default)(Yw);var Hd={};Object.defineProperty(Hd,"__esModule",{value:!0});var qw=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Xw=E.exports,I0=vg(Xw),Qw=So,Kw=vg(Qw);function vg(e){return e&&e.__esModule?e:{default:e}}function Zw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jw(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function e3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var t3=function(e){e3(t,e);function t(){return Zw(this,t),Jw(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return qw(t,[{key:"render",value:function(){return I0.default.createElement("input",this.props,this.props.children)}}]),t}(I0.default.Component);Hd.default=(0,Kw.default)(t3);var Bd={},Ms={};Object.defineProperty(Ms,"__esModule",{value:!0});var r3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n3=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i3=E.exports,z0=Is(i3),o3=Wu.exports;Is(o3);var a3=si,L0=Is(a3),s3=_o.exports,A0=Is(s3);function Is(e){return e&&e.__esModule?e:{default:e}}function l3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function u3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Ms.default=function(e){var t=function(r){u3(n,r);function n(i){l3(this,n);var o=c3(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return o.childBindings={domNode:null},o}return n3(n,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;L0.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){L0.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return z0.default.createElement(e,r3({},this.props,{parentBindings:this.childBindings}))}}]),n}(z0.default.Component);return t.propTypes={name:A0.default.string,id:A0.default.string},t};Object.defineProperty(Bd,"__esModule",{value:!0});var R0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d3=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f3=E.exports,N0=Ud(f3),p3=Ms,h3=Ud(p3),m3=_o.exports,$0=Ud(m3);function Ud(e){return e&&e.__esModule?e:{default:e}}function g3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function y3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var yg=function(e){y3(t,e);function t(){return g3(this,t),v3(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d3(t,[{key:"render",value:function(){var n=this,i=R0({},this.props);return i.parentBindings&&delete i.parentBindings,N0.default.createElement("div",R0({},i,{ref:function(a){n.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(N0.default.Component);yg.propTypes={name:$0.default.string,id:$0.default.string};Bd.default=(0,h3.default)(yg);var Ml=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j0=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function F0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function B0(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ra=E.exports,Vr=bo,Il=si,_e=_o.exports,mr=Ds,U0={to:_e.string.isRequired,containerId:_e.string,container:_e.object,activeClass:_e.string,spy:_e.bool,smooth:_e.oneOfType([_e.bool,_e.string]),offset:_e.number,delay:_e.number,isDynamic:_e.bool,onClick:_e.func,duration:_e.oneOfType([_e.number,_e.func]),absolute:_e.bool,onSetActive:_e.func,onSetInactive:_e.func,ignoreCancelEvents:_e.bool,hashSpy:_e.bool,spyThrottle:_e.number},w3={Scroll:function(t,r){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=r||Il,i=function(a){B0(s,a);function s(l){F0(this,s);var c=H0(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return o.call(c),c.state={active:!1},c}return j0(s,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Vr.isMounted(c)||Vr.mount(c,this.props.spyThrottle),this.props.hashSpy&&(mr.isMounted()||mr.mount(n),mr.mapContainer(this.props.to,c)),this.props.spy&&Vr.addStateHandler(this.stateHandler),Vr.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Vr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u=Ml({},this.props);for(var f in U0)u.hasOwnProperty(f)&&delete u[f];return u.className=c,u.onClick=this.handleClick,ra.createElement(t,u)}}]),s}(ra.Component),o=function(){var s=this;this.scrollTo=function(l,c){n.scrollTo(l,Ml({},s.state,c))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){n.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var c=s.getScrollSpyContainer();if(!(mr.isMounted()&&!mr.isInitialized())){var u=s.props.to,f=null,m=0,v=0,x=0;if(c.getBoundingClientRect){var w=c.getBoundingClientRect();x=w.top}if(!f||s.props.isDynamic){if(f=n.get(u),!f)return;var C=f.getBoundingClientRect();m=C.top-x+l,v=m+C.height}var g=l-s.props.offset,d=g>=Math.floor(m)&&g<Math.floor(v),h=g<Math.floor(m)||g>=Math.floor(v),y=n.getActiveLink();if(h)return u===y&&n.setActiveLink(void 0),s.props.hashSpy&&mr.getHash()===u&&mr.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Vr.updateStates();if(d&&y!==u)return n.setActiveLink(u),s.props.hashSpy&&mr.changeHash(u),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(u)),Vr.updateStates()}}};return i.propTypes=U0,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var r=function(n){B0(i,n);function i(o){F0(this,i);var a=H0(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return j0(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Il.unregister(this.props.name)}},{key:"registerElems",value:function(a){Il.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return ra.createElement(t,Ml({},this.props,{parentBindings:this.childBindings}))}}]),i}(ra.Component);return r.propTypes={name:_e.string,id:_e.string},r}},x3=w3;Object.defineProperty(Me,"__esModule",{value:!0});Me.Helpers=Me.ScrollElement=Me.ScrollLink=Me.animateScroll=Me.scrollSpy=Me.Events=Me.scroller=Me.Element=Me.Button=Pg=Me.Link=void 0;var S3=Rd,wg=Kt(S3),b3=Hd,xg=Kt(b3),E3=Bd,Sg=Kt(E3),C3=si,bg=Kt(C3),T3=To,Eg=Kt(T3),k3=bo,Cg=Kt(k3),_3=_s,Tg=Kt(_3),O3=So,kg=Kt(O3),P3=Ms,_g=Kt(P3),D3=x3,Og=Kt(D3);function Kt(e){return e&&e.__esModule?e:{default:e}}var Pg=Me.Link=wg.default;Me.Button=xg.default;Me.Element=Sg.default;Me.scroller=bg.default;Me.Events=Eg.default;Me.scrollSpy=Cg.default;Me.animateScroll=Tg.default;Me.ScrollLink=kg.default;Me.ScrollElement=_g.default;Me.Helpers=Og.default;Me.default={Link:wg.default,Button:xg.default,Element:Sg.default,scroller:bg.default,Events:Eg.default,scrollSpy:Cg.default,animateScroll:Tg.default,ScrollLink:kg.default,ScrollElement:_g.default,Helpers:Og.default};var Dg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V0=ie.createContext&&ie.createContext(Dg),Ar=globalThis&&globalThis.__assign||function(){return Ar=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ar.apply(this,arguments)},M3=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function Mg(e){return e&&e.map(function(t,r){return ie.createElement(t.tag,Ar({key:r},t.attr),Mg(t.child))})}function ge(e){return function(t){return ie.createElement(I3,Ar({attr:Ar({},e.attr)},t),Mg(e.child))}}function I3(e){var t=function(r){var n=e.attr,i=e.size,o=e.title,a=M3(e,["attr","size","title"]),s=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),ie.createElement("svg",Ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:l,style:Ar(Ar({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ie.createElement("title",null,o),e.children)};return V0!==void 0?ie.createElement(V0.Consumer,null,function(r){return t(r)}):t(Dg)}function Ig(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]})(e)}function z3(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(e)}function L3(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function A3(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function R3(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}function zg(e){return ge({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"}}]})(e)}const wt=E.exports.createContext(),Vd=({children:e})=>{const t="dark",[r,n]=E.exports.useState(t),o={theme:r,handleTheme:a=>{a.target.innerHTML=="🌙"?(n("dark"),a.target.innerHTML="☀️"):(a.target.innerHTML="🌙",n("light"))}};return p(wt.Provider,{value:o,children:e})};var zs={exports:{}},pe={};var He=typeof Symbol=="function"&&Symbol.for,Wd=He?Symbol.for("react.element"):60103,Gd=He?Symbol.for("react.portal"):60106,Ls=He?Symbol.for("react.fragment"):60107,As=He?Symbol.for("react.strict_mode"):60108,Rs=He?Symbol.for("react.profiler"):60114,Ns=He?Symbol.for("react.provider"):60109,$s=He?Symbol.for("react.context"):60110,Yd=He?Symbol.for("react.async_mode"):60111,js=He?Symbol.for("react.concurrent_mode"):60111,Fs=He?Symbol.for("react.forward_ref"):60112,Hs=He?Symbol.for("react.suspense"):60113,N3=He?Symbol.for("react.suspense_list"):60120,Bs=He?Symbol.for("react.memo"):60115,Us=He?Symbol.for("react.lazy"):60116,$3=He?Symbol.for("react.block"):60121,j3=He?Symbol.for("react.fundamental"):60117,F3=He?Symbol.for("react.responder"):60118,H3=He?Symbol.for("react.scope"):60119;function xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wd:switch(e=e.type,e){case Yd:case js:case Ls:case Rs:case As:case Hs:return e;default:switch(e=e&&e.$$typeof,e){case $s:case Fs:case Us:case Bs:case Ns:return e;default:return t}}case Gd:return t}}}function Lg(e){return xt(e)===js}pe.AsyncMode=Yd;pe.ConcurrentMode=js;pe.ContextConsumer=$s;pe.ContextProvider=Ns;pe.Element=Wd;pe.ForwardRef=Fs;pe.Fragment=Ls;pe.Lazy=Us;pe.Memo=Bs;pe.Portal=Gd;pe.Profiler=Rs;pe.StrictMode=As;pe.Suspense=Hs;pe.isAsyncMode=function(e){return Lg(e)||xt(e)===Yd};pe.isConcurrentMode=Lg;pe.isContextConsumer=function(e){return xt(e)===$s};pe.isContextProvider=function(e){return xt(e)===Ns};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wd};pe.isForwardRef=function(e){return xt(e)===Fs};pe.isFragment=function(e){return xt(e)===Ls};pe.isLazy=function(e){return xt(e)===Us};pe.isMemo=function(e){return xt(e)===Bs};pe.isPortal=function(e){return xt(e)===Gd};pe.isProfiler=function(e){return xt(e)===Rs};pe.isStrictMode=function(e){return xt(e)===As};pe.isSuspense=function(e){return xt(e)===Hs};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ls||e===js||e===Rs||e===As||e===Hs||e===N3||typeof e=="object"&&e!==null&&(e.$$typeof===Us||e.$$typeof===Bs||e.$$typeof===Ns||e.$$typeof===$s||e.$$typeof===Fs||e.$$typeof===j3||e.$$typeof===F3||e.$$typeof===H3||e.$$typeof===$3)};pe.typeOf=xt;(function(e){e.exports=pe})(zs);function B3(e){function t(H,W,q,ee,O){for(var oe=0,U=0,Se=0,ue=0,de,S,M=0,L=0,N,V=N=de=0,A=0,G=0,he=0,ne=0,wn=q.length,Zt=wn-1,Qe,te="",be="",pi="",xn="",fr;A<wn;){if(S=q.charCodeAt(A),A===Zt&&U+ue+Se+oe!==0&&(U!==0&&(S=U===47?10:47),ue=Se=oe=0,wn++,Zt++),U+ue+Se+oe===0){if(A===Zt&&(0<G&&(te=te.replace(m,"")),0<te.trim().length)){switch(S){case 32:case 9:case 59:case 13:case 10:break;default:te+=q.charAt(A)}S=59}switch(S){case 123:for(te=te.trim(),de=te.charCodeAt(0),N=1,ne=++A;A<wn;){switch(S=q.charCodeAt(A)){case 123:N++;break;case 125:N--;break;case 47:switch(S=q.charCodeAt(A+1)){case 42:case 47:e:{for(V=A+1;V<Zt;++V)switch(q.charCodeAt(V)){case 47:if(S===42&&q.charCodeAt(V-1)===42&&A+2!==V){A=V+1;break e}break;case 10:if(S===47){A=V+1;break e}}A=V}}break;case 91:S++;case 40:S++;case 34:case 39:for(;A++<Zt&&q.charCodeAt(A)!==S;);}if(N===0)break;A++}switch(N=q.substring(ne,A),de===0&&(de=(te=te.replace(f,"").trim()).charCodeAt(0)),de){case 64:switch(0<G&&(te=te.replace(m,"")),S=te.charCodeAt(1),S){case 100:case 109:case 115:case 45:G=W;break;default:G=se}if(N=t(W,G,N,S,O+1),ne=N.length,0<F&&(G=r(se,te,he),fr=s(3,N,G,W,j,R,ne,S,O,ee),te=G.join(""),fr!==void 0&&(ne=(N=fr.trim()).length)===0&&(S=0,N="")),0<ne)switch(S){case 115:te=te.replace(_,a);case 100:case 109:case 45:N=te+"{"+N+"}";break;case 107:te=te.replace(d,"$1 $2"),N=te+"{"+N+"}",N=J===1||J===2&&o("@"+N,3)?"@-webkit-"+N+"@"+N:"@"+N;break;default:N=te+N,ee===112&&(N=(be+=N,""))}else N="";break;default:N=t(W,r(W,te,he),N,ee,O+1)}pi+=N,N=he=G=V=de=0,te="",S=q.charCodeAt(++A);break;case 125:case 59:if(te=(0<G?te.replace(m,""):te).trim(),1<(ne=te.length))switch(V===0&&(de=te.charCodeAt(0),de===45||96<de&&123>de)&&(ne=(te=te.replace(" ",":")).length),0<F&&(fr=s(1,te,W,H,j,R,be.length,ee,O,ee))!==void 0&&(ne=(te=fr.trim()).length)===0&&(te="\0\0"),de=te.charCodeAt(0),S=te.charCodeAt(1),de){case 0:break;case 64:if(S===105||S===99){xn+=te+q.charAt(A);break}default:te.charCodeAt(ne-1)!==58&&(be+=i(te,de,S,te.charCodeAt(2)))}he=G=V=de=0,te="",S=q.charCodeAt(++A)}}switch(S){case 13:case 10:U===47?U=0:1+de===0&&ee!==107&&0<te.length&&(G=1,te+="\0"),0<F*K&&s(0,te,W,H,j,R,be.length,ee,O,ee),R=1,j++;break;case 59:case 125:if(U+ue+Se+oe===0){R++;break}default:switch(R++,Qe=q.charAt(A),S){case 9:case 32:if(ue+oe+U===0)switch(M){case 44:case 58:case 9:case 32:Qe="";break;default:S!==32&&(Qe=" ")}break;case 0:Qe="\\0";break;case 12:Qe="\\f";break;case 11:Qe="\\v";break;case 38:ue+U+oe===0&&(G=he=1,Qe="\f"+Qe);break;case 108:if(ue+U+oe+Q===0&&0<V)switch(A-V){case 2:M===112&&q.charCodeAt(A-3)===58&&(Q=M);case 8:L===111&&(Q=L)}break;case 58:ue+U+oe===0&&(V=A);break;case 44:U+Se+ue+oe===0&&(G=1,Qe+="\r");break;case 34:case 39:U===0&&(ue=ue===S?0:ue===0?S:ue);break;case 91:ue+U+Se===0&&oe++;break;case 93:ue+U+Se===0&&oe--;break;case 41:ue+U+oe===0&&Se--;break;case 40:if(ue+U+oe===0){if(de===0)switch(2*M+3*L){case 533:break;default:de=1}Se++}break;case 64:U+Se+ue+oe+V+N===0&&(N=1);break;case 42:case 47:if(!(0<ue+oe+Se))switch(U){case 0:switch(2*S+3*q.charCodeAt(A+1)){case 235:U=47;break;case 220:ne=A,U=42}break;case 42:S===47&&M===42&&ne+2!==A&&(q.charCodeAt(ne+2)===33&&(be+=q.substring(ne,A+1)),Qe="",U=0)}}U===0&&(te+=Qe)}L=M,M=S,A++}if(ne=be.length,0<ne){if(G=W,0<F&&(fr=s(2,be,G,H,j,R,ne,ee,O,ee),fr!==void 0&&(be=fr).length===0))return xn+be+pi;if(be=G.join(",")+"{"+be+"}",J*Q!==0){switch(J!==2||o(be,2)||(Q=0),Q){case 111:be=be.replace(y,":-moz-$1")+be;break;case 112:be=be.replace(h,"::-webkit-input-$1")+be.replace(h,"::-moz-$1")+be.replace(h,":-ms-input-$1")+be}Q=0}}return xn+be+pi}function r(H,W,q){var ee=W.trim().split(C);W=ee;var O=ee.length,oe=H.length;switch(oe){case 0:case 1:var U=0;for(H=oe===0?"":H[0]+" ";U<O;++U)W[U]=n(H,W[U],q).trim();break;default:var Se=U=0;for(W=[];U<O;++U)for(var ue=0;ue<oe;++ue)W[Se++]=n(H[ue]+" ",ee[U],q).trim()}return W}function n(H,W,q){var ee=W.charCodeAt(0);switch(33>ee&&(ee=(W=W.trim()).charCodeAt(0)),ee){case 38:return W.replace(g,"$1"+H.trim());case 58:return H.trim()+W.replace(g,"$1"+H.trim());default:if(0<1*q&&0<W.indexOf("\f"))return W.replace(g,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+W}function i(H,W,q,ee){var O=H+";",oe=2*W+3*q+4*ee;if(oe===944){H=O.indexOf(":",9)+1;var U=O.substring(H,O.length-1).trim();return U=O.substring(0,H).trim()+U+";",J===1||J===2&&o(U,1)?"-webkit-"+U+U:U}if(J===0||J===2&&!o(O,1))return O;switch(oe){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(z,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return U=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+U+"-webkit-"+O+"-ms-flex-pack"+U+O;case 1005:return x.test(O)?O.replace(v,":-webkit-")+O.replace(v,":-moz-")+O:O;case 1e3:switch(U=O.substring(13).trim(),W=U.indexOf("-")+1,U.charCodeAt(0)+U.charCodeAt(W)){case 226:U=O.replace(b,"tb");break;case 232:U=O.replace(b,"tb-rl");break;case 220:U=O.replace(b,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+U+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(W=(O=H).length-10,U=(O.charCodeAt(W)===33?O.substring(0,W):O).substring(H.indexOf(":",7)+1).trim(),oe=U.charCodeAt(0)+(U.charCodeAt(7)|0)){case 203:if(111>U.charCodeAt(8))break;case 115:O=O.replace(U,"-webkit-"+U)+";"+O;break;case 207:case 102:O=O.replace(U,"-webkit-"+(102<oe?"inline-":"")+"box")+";"+O.replace(U,"-webkit-"+U)+";"+O.replace(U,"-ms-"+U+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return U=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+U+"-ms-flex-"+U+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(I,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(I,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(B.test(H)===!0)return(U=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),W,q,ee).replace(":fill-available",":stretch"):O.replace(U,"-webkit-"+U)+O.replace(U,"-moz-"+U.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,q+ee===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+O}return O}function o(H,W){var q=H.indexOf(W===1?":":"{"),ee=H.substring(0,W!==3?q:10);return q=H.substring(q+1,H.length-1),Y(W!==2?ee:ee.replace(k,"$1"),q,W)}function a(H,W){var q=i(W,W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2));return q!==W+";"?q.replace(P," or ($1)").substring(4):"("+W+")"}function s(H,W,q,ee,O,oe,U,Se,ue,de){for(var S=0,M=W,L;S<F;++S)switch(L=ve[S].call(u,H,M,q,ee,O,oe,U,Se,ue,de)){case void 0:case!1:case!0:case null:break;default:M=L}if(M!==W)return M}function l(H){switch(H){case void 0:case null:F=ve.length=0;break;default:if(typeof H=="function")ve[F++]=H;else if(typeof H=="object")for(var W=0,q=H.length;W<q;++W)l(H[W]);else K=!!H|0}return l}function c(H){return H=H.prefix,H!==void 0&&(Y=null,H?typeof H!="function"?J=1:(J=2,Y=H):J=0),c}function u(H,W){var q=H;if(33>q.charCodeAt(0)&&(q=q.trim()),ce=q,q=[ce],0<F){var ee=s(-1,W,q,q,j,R,0,0,0,0);ee!==void 0&&typeof ee=="string"&&(W=ee)}var O=t(se,q,W,0,0);return 0<F&&(ee=s(-2,O,q,q,j,R,O.length,0,0,0),ee!==void 0&&(O=ee)),ce="",Q=0,R=j=1,O}var f=/^\0+/g,m=/[\0\r\f]/g,v=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,y=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,I=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,R=1,j=1,Q=0,J=1,se=[],ve=[],F=0,Y=null,K=0,ce="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var U3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function V3(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var W3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,W0=V3(function(e){return W3.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),qd=zs.exports,G3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ag={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xd={};Xd[qd.ForwardRef]=q3;Xd[qd.Memo]=Ag;function G0(e){return qd.isMemo(e)?Ag:Xd[e.$$typeof]||G3}var X3=Object.defineProperty,Q3=Object.getOwnPropertyNames,Y0=Object.getOwnPropertySymbols,K3=Object.getOwnPropertyDescriptor,Z3=Object.getPrototypeOf,q0=Object.prototype;function Rg(e,t,r){if(typeof t!="string"){if(q0){var n=Z3(t);n&&n!==q0&&Rg(e,n,r)}var i=Q3(t);Y0&&(i=i.concat(Y0(t)));for(var o=G0(e),a=G0(t),s=0;s<i.length;++s){var l=i[s];if(!Y3[l]&&!(r&&r[l])&&!(a&&a[l])&&!(o&&o[l])){var c=K3(t,l);try{X3(e,l,c)}catch{}}}}return e}var J3=Rg;function ir(){return(ir=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var X0=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},du=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!zs.exports.typeOf(e)},Ja=Object.freeze([]),Rr=Object.freeze({});function ao(e){return typeof e=="function"}function Q0(e){return e.displayName||e.name||"Component"}function Qd(e){return e&&typeof e.styledComponentId=="string"}var ei=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Kd=typeof window<"u"&&"HTMLElement"in window,e4=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function Po(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var t4=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,i=0;i<r;i++)n+=this.groupSizes[i];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;r>=a;)(a<<=1)<0&&Po(16,""+r);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(r+1),c=0,u=n.length;c<u;c++)this.tag.insertRule(l,n[c])&&(this.groupSizes[r]++,l++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],i=this.indexOfGroup(r),o=i+n;this.groupSizes[r]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var i=this.groupSizes[r],o=this.indexOfGroup(r),a=o+i,s=o;s<a;s++)n+=this.tag.getRule(s)+`/*!sc*/
`;return n},e}(),Ea=new Map,es=new Map,Fi=1,na=function(e){if(Ea.has(e))return Ea.get(e);for(;es.has(Fi);)Fi++;var t=Fi++;return Ea.set(e,t),es.set(t,e),t},r4=function(e){return es.get(e)},n4=function(e,t){t>=Fi&&(Fi=t+1),Ea.set(e,t),es.set(t,e)},i4="style["+ei+'][data-styled-version="5.3.9"]',o4=new RegExp("^"+ei+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),a4=function(e,t,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&e.registerName(t,n)},s4=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(o4);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(n4(c,l),a4(e,c,s[3]),e.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},l4=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ng=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(ei))return u}}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(ei,"active"),n.setAttribute("data-styled-version","5.3.9");var a=l4();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},c4=function(){function e(r){var n=this.element=Ng(r);n.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}Po(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),u4=function(){function e(r){var n=this.element=Ng(r);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var i=document.createTextNode(n),o=this.nodes[r];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),d4=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),K0=Kd,f4={isServer:!Kd,useCSSOMInjection:!e4},$g=function(){function e(r,n,i){r===void 0&&(r=Rr),n===void 0&&(n={}),this.options=ir({},f4,{},r),this.gs=n,this.names=new Map(i),this.server=!!r.isServer,!this.server&&Kd&&K0&&(K0=!1,function(o){for(var a=document.querySelectorAll(i4),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(ei)!=="active"&&(s4(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(r){return na(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(ir({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(n=this.options).isServer,o=n.useCSSOMInjection,a=n.target,r=i?new d4(a):o?new c4(a):new u4(a),new t4(r)));var r,n,i,o,a},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(na(r),this.names.has(r))this.names.get(r).add(n);else{var i=new Set;i.add(n),this.names.set(r,i)}},t.insertRules=function(r,n,i){this.registerName(r,n),this.getTag().insertRules(na(r),i)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(na(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),i=n.length,o="",a=0;a<i;a++){var s=r4(a);if(s!==void 0){var l=r.names.get(s),c=n.getGroup(a);if(l&&c&&l.size){var u=ei+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(m){m.length>0&&(f+=m+",")}),o+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),p4=/(a)(d)/gi,Z0=function(e){return String.fromCharCode(e+(e>25?39:97))};function fu(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Z0(t%52)+r;return(Z0(t%52)+r).replace(p4,"$1-$2")}var Rn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},jg=function(e){return Rn(5381,e)};function h4(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ao(r)&&!Qd(r))return!1}return!0}var m4=jg("5.3.9"),g4=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&h4(t),this.componentId=r,this.baseHash=Rn(m4,r),this.baseStyle=n,$g.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=ti(this.rules,t,r,n).join(""),s=fu(Rn(this.baseHash,a)>>>0);if(!r.hasNameForId(i,s)){var l=n(a,"."+s,void 0,i);r.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=Rn(this.baseHash,n.hash),f="",m=0;m<c;m++){var v=this.rules[m];if(typeof v=="string")f+=v;else if(v){var x=ti(v,t,r,n),w=Array.isArray(x)?x.join(""):x;u=Rn(u,w+m),f+=w}}if(f){var C=fu(u>>>0);if(!r.hasNameForId(i,C)){var g=n(f,"."+C,void 0,i);r.insertRules(i,C,g)}o.push(C)}}return o.join(" ")},e}(),v4=/^\s*\/\/.*$/gm,y4=[":","[",".","#"];function w4(e){var t,r,n,i,o=e===void 0?Rr:e,a=o.options,s=a===void 0?Rr:a,l=o.plugins,c=l===void 0?Ja:l,u=new B3(s),f=[],m=function(w){function C(g){if(g)try{w(g+"}")}catch{}}return function(g,d,h,y,b,_,P,I,k,B){switch(g){case 1:if(k===0&&d.charCodeAt(0)===64)return w(d+";"),"";break;case 2:if(I===0)return d+"/*|*/";break;case 3:switch(I){case 102:case 112:return w(h[0]+d),"";default:return d+(B===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(C)}}}(function(w){f.push(w)}),v=function(w,C,g){return C===0&&y4.indexOf(g[r.length])!==-1||g.match(i)?w:"."+t};function x(w,C,g,d){d===void 0&&(d="&");var h=w.replace(v4,""),y=C&&g?g+" "+C+" { "+h+" }":h;return t=d,r=C,n=new RegExp("\\"+r+"\\b","g"),i=new RegExp("(\\"+r+"\\b){2,}"),u(g||!C?"":C,y)}return u.use([].concat(c,[function(w,C,g){w===2&&g.length&&g[0].lastIndexOf(r)>0&&(g[0]=g[0].replace(n,v))},m,function(w){if(w===-2){var C=f;return f=[],C}}])),x.hash=c.length?c.reduce(function(w,C){return C.name||Po(15),Rn(w,C.name)},5381).toString():"",x}var Fg=ie.createContext();Fg.Consumer;var Hg=ie.createContext(),x4=(Hg.Consumer,new $g),pu=w4();function S4(){return E.exports.useContext(Fg)||x4}function b4(){return E.exports.useContext(Hg)||pu}var E4=function(){function e(t,r){var n=this;this.inject=function(i,o){o===void 0&&(o=pu);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.toString=function(){return Po(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=pu),this.name+t.hash},e}(),C4=/([A-Z])/,T4=/([A-Z])/g,k4=/^ms-/,_4=function(e){return"-"+e.toLowerCase()};function J0(e){return C4.test(e)?e.replace(T4,_4).replace(k4,"-ms-"):e}var ep=function(e){return e==null||e===!1||e===""};function ti(e,t,r,n){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=ti(e[a],t,r,n))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ep(e))return"";if(Qd(e))return"."+e.styledComponentId;if(ao(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return ti(l,t,r,n)}var c;return e instanceof E4?r?(e.inject(r,n),e.getName(n)):e:du(e)?function u(f,m){var v,x,w=[];for(var C in f)f.hasOwnProperty(C)&&!ep(f[C])&&(Array.isArray(f[C])&&f[C].isCss||ao(f[C])?w.push(J0(C)+":",f[C],";"):du(f[C])?w.push.apply(w,u(f[C],C)):w.push(J0(C)+": "+(v=C,(x=f[C])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||v in U3?String(x).trim():x+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var tp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function O4(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return ao(e)||du(e)?tp(ti(X0(Ja,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:tp(ti(X0(e,r)))}var P4=function(e,t,r){return r===void 0&&(r=Rr),e.theme!==r.theme&&e.theme||t||r.theme},D4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M4=/(^-|-$)/g;function zl(e){return e.replace(D4,"-").replace(M4,"")}var I4=function(e){return fu(jg(e)>>>0)};function ia(e){return typeof e=="string"&&!0}var hu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},z4=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function L4(e,t,r){var n=e[r];hu(t)&&hu(n)?Bg(n,t):e[r]=t}function Bg(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];if(hu(a))for(var s in a)z4(s)&&L4(e,a[s],s)}return e}var Ug=ie.createContext();Ug.Consumer;var Ll={};function Vg(e,t,r){var n=Qd(e),i=!ia(e),o=t.attrs,a=o===void 0?Ja:o,s=t.componentId,l=s===void 0?function(d,h){var y=typeof d!="string"?"sc":zl(d);Ll[y]=(Ll[y]||0)+1;var b=y+"-"+I4("5.3.9"+y+Ll[y]);return h?h+"-"+b:b}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(d){return ia(d)?"styled."+d:"Styled("+Q0(d)+")"}(e):c,f=t.displayName&&t.componentId?zl(t.displayName)+"-"+t.componentId:t.componentId||l,m=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;n&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,h,y){return e.shouldForwardProp(d,h,y)&&t.shouldForwardProp(d,h,y)}:e.shouldForwardProp);var x,w=new g4(r,f,n?e.componentStyle:void 0),C=w.isStatic&&a.length===0,g=function(d,h){return function(y,b,_,P){var I=y.attrs,k=y.componentStyle,B=y.defaultProps,z=y.foldedComponentIds,R=y.shouldForwardProp,j=y.styledComponentId,Q=y.target,J=function(ee,O,oe){ee===void 0&&(ee=Rr);var U=ir({},O,{theme:ee}),Se={};return oe.forEach(function(ue){var de,S,M,L=ue;for(de in ao(L)&&(L=L(U)),L)U[de]=Se[de]=de==="className"?(S=Se[de],M=L[de],S&&M?S+" "+M:S||M):L[de]}),[U,Se]}(P4(b,E.exports.useContext(Ug),B)||Rr,b,I),se=J[0],ve=J[1],F=function(ee,O,oe,U){var Se=S4(),ue=b4(),de=O?ee.generateAndInjectStyles(Rr,Se,ue):ee.generateAndInjectStyles(oe,Se,ue);return de}(k,P,se),Y=_,K=ve.$as||b.$as||ve.as||b.as||Q,ce=ia(K),H=ve!==b?ir({},b,{},ve):b,W={};for(var q in H)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?W.as=H[q]:(R?R(q,W0,K):!ce||W0(q))&&(W[q]=H[q]));return b.style&&ve.style!==b.style&&(W.style=ir({},b.style,{},ve.style)),W.className=Array.prototype.concat(z,j,F!==j?F:null,b.className,ve.className).filter(Boolean).join(" "),W.ref=Y,E.exports.createElement(K,W)}(x,d,h,C)};return g.displayName=u,(x=ie.forwardRef(g)).attrs=m,x.componentStyle=w,x.displayName=u,x.shouldForwardProp=v,x.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ja,x.styledComponentId=f,x.target=n?e.target:e,x.withComponent=function(d){var h=t.componentId,y=function(_,P){if(_==null)return{};var I,k,B={},z=Object.keys(_);for(k=0;k<z.length;k++)I=z[k],P.indexOf(I)>=0||(B[I]=_[I]);return B}(t,["componentId"]),b=h&&h+"-"+(ia(d)?d:zl(Q0(d)));return Vg(d,ir({},y,{attrs:m,componentId:b}),r)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=n?Bg({},e.defaultProps,d):d}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&J3(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var mu=function(e){return function t(r,n,i){if(i===void 0&&(i=Rr),!zs.exports.isValidElementType(n))return Po(1,String(n));var o=function(){return r(n,i,O4.apply(void 0,arguments))};return o.withConfig=function(a){return t(r,n,ir({},i,{},a))},o.attrs=function(a){return t(r,n,ir({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Vg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){mu[e]=mu(e)});const T=mu,A4=T.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: black;
`,R4=T.nav`
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
`,N4=T.div`
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
`,$4=T.ul`
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
`,j4=T.li`
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
`,F4=T.div`
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
`,H4=T.div`
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
`,B4=[{id:1,referencia:"home",texto:"Inicio"},{id:2,referencia:"project",texto:"Proyectos"},,{id:3,referencia:"skill",texto:"Habilidades"},,{id:4,referencia:"contact",texto:"Contacto"}];function U4(){const[e,t]=E.exports.useState(!1),{handleTheme:r,theme:n}=E.exports.useContext(wt);return p(A4,{color:n,children:D(R4,{className:"container",children:[p(N4,{click:e,color:n,children:p($4,{children:B4.map(i=>p(j4,{children:p(Pg,{to:i.referencia,spy:!0,smooth:!0,offset:0,duration:0,className:"item",activeClass:"active",onClick:()=>t(!1),children:i.texto})},i.id))})}),p(F4,{onClick:r,children:"☀️"}),p(H4,{onClick:()=>t(!e),children:e?p(L3,{}):p(R3,{})})]})})}const V4="/portfolio/assets/perfil-7f023c66.png",rp="/portfolio/assets/CV-SAUL-HUARCAYA-QUISPE-e142ccd1.pdf";function gu(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}function W4(e){var t=Object.prototype.toString.call(e),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&r.test(t)&&(e.length===0||gu(e[0]))}function so(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(gu);if(gu(e))return[e];if(W4(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]}function vu(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=Ur();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function Ur(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function G4(e,t){for(var r=vu(e),n=vu(t),i=[],o=0;o<4;o++)for(var a=[r[o],r[o+4],r[o+8],r[o+12]],s=0;s<4;s++){var l=s*4,c=[n[l],n[l+1],n[l+2],n[l+3]],u=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];i[o+l]=u}return i}function Y4(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var r=t[2].split(", ").map(parseFloat);return vu(r)}}return Ur()}function q4(e){var t=Math.PI/180*e,r=Ur();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}function X4(e){var t=Math.PI/180*e,r=Ur();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}function Q4(e){var t=Math.PI/180*e,r=Ur();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}function np(e,t){var r=Ur();return r[0]=e,r[5]=typeof t=="number"?t:e,r}function K4(e){var t=Ur();return t[12]=e,t}function Z4(e){var t=Ur();return t[13]=e,t}var Wg=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return Wg(t)},0)}}(),J4=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Wg;var Gg={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function ex(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function tx(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var bi={success:tx,failure:ex};function Ca(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function we(e,t){if(Ca(e)){var r=Object.keys(e);return r.forEach(function(n){return t(e[n],n,e)})}if(e instanceof Array)return e.forEach(function(n,i){return t(n,i,e)});throw new TypeError("Expected either an array or object literal.")}function en(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+e;t.forEach(function(i){return n+=`
 — `+i}),console.log(n,"color: #ea654b;")}}function Yg(){var e=this,t=function(){return{active:[],stale:[]}},r=t(),n=t(),i=t();try{we(so("[data-sr-id]"),function(o){var a=parseInt(o.getAttribute("data-sr-id"));r.active.push(a)})}catch(o){throw o}we(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),we(r.stale,function(o){return delete e.store.elements[o]}),we(this.store.elements,function(o){i.active.indexOf(o.containerId)===-1&&i.active.push(o.containerId),o.hasOwnProperty("sequence")&&n.active.indexOf(o.sequence.id)===-1&&n.active.push(o.sequence.id)}),we(this.store.containers,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),we(i.stale,function(o){var a=e.store.containers[o].node;a.removeEventListener("scroll",e.delegate),a.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),we(this.store.sequences,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),we(n.stale,function(o){return delete e.store.sequences[o]})}var ip=function(){var e={},t=document.documentElement.style;function r(n,i){if(i===void 0&&(i=t),n&&typeof n=="string"){if(e[n])return e[n];if(typeof i[n]=="string")return e[n]=n;if(typeof i["-webkit-"+n]=="string")return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function rx(e){var t=window.getComputedStyle(e.node),r=t.position,n=e.config,i={},o=e.node.getAttribute("style")||"",a=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=a?a.map(function(I){return I.trim()}).join("; ")+";":"",i.generated=a.some(function(I){return I.match(/visibility\s?:\s?visible/i)})?i.computed:a.concat(["visibility: visible"]).map(function(I){return I.trim()}).join("; ")+";";var s=parseFloat(t.opacity),l=isNaN(parseFloat(n.opacity))?parseFloat(t.opacity):parseFloat(n.opacity),c={computed:s!==l?"opacity: "+s+";":"",generated:s!==l?"opacity: "+l+";":""},u=[];if(parseFloat(n.distance)){var f=n.origin==="top"||n.origin==="bottom"?"Y":"X",m=n.distance;(n.origin==="top"||n.origin==="left")&&(m=/^-/.test(m)?m.substr(1):"-"+m);var v=m.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=v[0],w=v[1];switch(w){case"em":m=parseInt(t.fontSize)*x;break;case"px":m=x;break;case"%":m=f==="Y"?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}f==="Y"?u.push(Z4(m)):u.push(K4(m))}n.rotate.x&&u.push(q4(n.rotate.x)),n.rotate.y&&u.push(X4(n.rotate.y)),n.rotate.z&&u.push(Q4(n.rotate.z)),n.scale!==1&&(n.scale===0?u.push(np(2e-4)):u.push(np(n.scale)));var C={};if(u.length){C.property=ip("transform"),C.computed={raw:t[C.property],matrix:Y4(t[C.property])},u.unshift(C.computed.matrix);var g=u.reduce(G4);C.generated={initial:C.property+": matrix3d("+g.join(", ")+");",final:C.property+": matrix3d("+C.computed.matrix.join(", ")+");"}}else C.generated={initial:"",final:""};var d={};if(c.generated||C.generated.initial){d.property=ip("transition"),d.computed=t[d.property],d.fragments=[];var h=n.delay,y=n.duration,b=n.easing;c.generated&&d.fragments.push({delayed:"opacity "+y/1e3+"s "+b+" "+h/1e3+"s",instant:"opacity "+y/1e3+"s "+b+" 0s"}),C.generated.initial&&d.fragments.push({delayed:C.property+" "+y/1e3+"s "+b+" "+h/1e3+"s",instant:C.property+" "+y/1e3+"s "+b+" 0s"});var _=d.computed&&!d.computed.match(/all 0s|none 0s/);_&&d.fragments.unshift({delayed:d.computed,instant:d.computed});var P=d.fragments.reduce(function(I,k,B){return I.delayed+=B===0?k.delayed:", "+k.delayed,I.instant+=B===0?k.instant:", "+k.instant,I},{delayed:"",instant:""});d.generated={delayed:d.property+": "+P.delayed+";",instant:d.property+": "+P.instant+";"}}else d.generated={delayed:"",instant:""};return{inline:i,opacity:c,position:r,transform:C,transition:d}}function li(e,t){t.split(";").forEach(function(r){var n=r.split(":"),i=n[0],o=n.slice(1);i&&o&&(e.style[i.trim()]=o.join(":"))})}function Zd(e){var t=this,r;try{we(so(e),function(n){var i=n.getAttribute("data-sr-id");if(i!==null){r=!0;var o=t.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),li(o.node,o.styles.inline.generated),n.removeAttribute("data-sr-id"),delete t.store.elements[i]}})}catch(n){return en.call(this,"Clean failed.",n.message)}if(r)try{Yg.call(this)}catch(n){return en.call(this,"Clean failed.",n.message)}}function nx(){var e=this;we(this.store.elements,function(t){li(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),we(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function lo(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(Ca(e))return we(t,function(n){we(n,function(i,o){Ca(i)?((!e[o]||!Ca(e[o]))&&(e[o]={}),lo(e[o],i)):e[o]=i})}),e;throw new TypeError("Target must be an object literal.")}function ts(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var yu=function(){var e=0;return function(){return e++}}();function qg(){var e=this;Yg.call(this),we(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),li(t.node,r.filter(function(n){return n!==""}).join(" "))}),we(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function Pi(e,t){t===void 0&&(t={});var r=t.pristine||this.pristine,n=e.config.useDelay==="always"||e.config.useDelay==="onload"&&r||e.config.useDelay==="once"&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||i)return ix.call(this,e,n);if(t.reset||o)return ox.call(this,e)}function ix(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?r.push(e.styles.transition.generated.delayed):r.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,li(e.node,r.filter(function(n){return n!==""}).join(" ")),Xg.call(this,e,t)}function ox(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,li(e.node,t.filter(function(r){return r!==""}).join(" ")),Xg.call(this,e)}function Xg(e,t){var r=this,n=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&Zd.call(r,e.node)},n-a)}}function Qg(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return Pi.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],n=e.sequence.index;if(r){var i=new op(r,"visible",this.store),o=new op(r,"revealed",this.store);if(r.models={visible:i,revealed:o},!o.body.length){var a=r.members[i.body[0]],s=this.store.elements[a];if(s)return oa.call(this,r,i.body[0],-1,t),oa.call(this,r,i.body[0],1,t),Pi.call(this,s,{reveal:!0,pristine:t})}if(!r.blocked.head&&n===[].concat(o.head).pop()&&n>=[].concat(i.body).shift())return oa.call(this,r,n,-1,t),Pi.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&n===[].concat(o.foot).shift()&&n<=[].concat(i.body).pop())return oa.call(this,r,n,1,t),Pi.call(this,e,{reveal:!0,pristine:t})}}function ax(e){var t=Math.abs(e);if(!isNaN(t))this.id=yu(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function op(e,t,r){var n=this;this.head=[],this.body=[],this.foot=[],we(e.members,function(i,o){var a=r.elements[i];a&&a[t]&&n.body.push(o)}),this.body.length&&we(e.members,function(i,o){var a=r.elements[i];a&&!a[t]&&(o<n.body[0]?n.head.push(o):n.foot.push(o))})}function oa(e,t,r,n){var i=this,o=["head",null,"foot"][1+r],a=e.members[t+r],s=this.store.elements[a];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,s&&Qg.call(i,s,n)},e.interval)}function Kg(e,t,r){var n=this;t===void 0&&(t={}),r===void 0&&(r=!1);var i=[],o,a=t.interval||Gg.interval;try{a&&(o=new ax(a));var s=so(e);if(!s.length)throw new Error("Invalid reveal target.");var l=s.reduce(function(c,u){var f={},m=u.getAttribute("data-sr-id");m?(lo(f,n.store.elements[m]),li(f.node,f.styles.inline.computed)):(f.id=yu(),f.node=u,f.seen=!1,f.revealed=!1,f.visible=!1);var v=lo({},f.config||n.defaults,t);if(!v.mobile&&ts()||!v.desktop&&!ts())return m&&Zd.call(n,f),c;var x=so(v.container)[0];if(!x)throw new Error("Invalid container.");if(!x.contains(u))return c;var w;return w=sx(x,i,n.store.containers),w===null&&(w=yu(),i.push({id:w,node:x})),f.config=v,f.containerId=w,f.styles=rx(f),o&&(f.sequence={id:o.id,index:o.members.length},o.members.push(f.id)),c.push(f),c},[]);we(l,function(c){n.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return en.call(this,"Reveal failed.",c.message)}we(i,function(c){n.store.containers[c.id]={id:c.id,node:c.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(qg.bind(this),0))}function sx(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var n=null;return we(t,function(i){we(i,function(o){n===null&&o.node===e&&(n=o.id)})}),n}function lx(){var e=this;we(this.store.history,function(t){Kg.call(e,t.target,t.options,!0)}),qg.call(this)}var cx=function(e){return(e>0)-(e<0)||+e},ap=Math.sign||cx;function sp(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,n=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,a=e.node;do isNaN(a.offsetTop)||(i+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:i,right:o+n,bottom:i+r,left:o},height:r,width:n}}function ux(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function dx(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(!!t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),n=e.config.viewOffset,i={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},o={top:t.geometry.bounds.top+t.scroll.top+n.top,right:t.geometry.bounds.right+t.scroll.left-n.right,bottom:t.geometry.bounds.bottom+t.scroll.top-n.bottom,left:t.geometry.bounds.left+t.scroll.left+n.left};return i.top<o.bottom&&i.right>o.left&&i.bottom>o.top&&i.left<o.right||e.styles.position==="fixed"}}function fx(e,t){var r=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),J4(function(){var n=e.type==="init"||e.type==="resize";we(r.store.containers,function(i){n&&(i.geometry=sp.call(r,i,!0));var o=ux.call(r,i);i.scroll&&(i.direction={x:ap(o.left-i.scroll.left),y:ap(o.top-i.scroll.top)}),i.scroll=o}),we(t,function(i){(n||i.geometry===void 0)&&(i.geometry=sp.call(r,i)),i.visible=dx.call(r,i)}),we(t,function(i){i.sequence?Qg.call(r,i):Pi.call(r,i)}),r.pristine=!1})}function px(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function hx(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var mx="4.0.9",Al,Rl,Nl,$l,jl,gr,Fl,Hl;function Qt(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==Qt.prototype;if(t)return new Qt(e);if(!Qt.isSupported())return en.call(this,"Instantiation failed.","This browser is not supported."),bi.failure();var r;try{r=gr?lo({},gr,e):lo({},Gg,e)}catch(i){return en.call(this,"Invalid configuration.",i.message),bi.failure()}try{var n=so(r.container)[0];if(!n)throw new Error("Invalid container.")}catch(i){return en.call(this,i.message),bi.failure()}return gr=r,!gr.mobile&&ts()||!gr.desktop&&!ts()?(en.call(this,"This device is disabled.","desktop: "+gr.desktop,"mobile: "+gr.mobile),bi.failure()):(bi.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Al=Al||fx.bind(this),Rl=Rl||nx.bind(this),Nl=Nl||Kg.bind(this),$l=$l||Zd.bind(this),jl=jl||lx.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Al}}),Object.defineProperty(this,"destroy",{get:function(){return Rl}}),Object.defineProperty(this,"reveal",{get:function(){return Nl}}),Object.defineProperty(this,"clean",{get:function(){return $l}}),Object.defineProperty(this,"sync",{get:function(){return jl}}),Object.defineProperty(this,"defaults",{get:function(){return gr}}),Object.defineProperty(this,"version",{get:function(){return mx}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Hl||(Hl=this))}Qt.isSupported=function(){return px()&&hx()};Object.defineProperty(Qt,"debug",{get:function(){return Fl||!1},set:function(e){return Fl=typeof e=="boolean"?e:Fl}});Qt();const gx=T.a`
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
`;function lp({text:e,tipo:t,href:r}){const{theme:n}=E.exports.useContext(wt);return p(gx,{tipo:t,href:r,download:!0,color:n,children:D("button",{children:[p("span",{children:e}),p("span",{children:p(A3,{})})]})})}const vx=T.section`
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
`,yx=T.div`
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
`,wx=T.div`
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
`,xx=T.h1`
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
`,Sx=T.p`
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
`,bx=T.div`
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

`;function Ex(){E.exports.useEffect(()=>{Qt({origin:"top",duration:1500,reset:!0}).reveal(".top",{origin:"top",delay:100,distance:"300px"})},[]);const{theme:e}=E.exports.useContext(wt);return p(vx,{id:"home",color:e,children:D(yx,{className:"container top",children:[D(wx,{children:[p(xx,{color:e,children:"Saul Huarcaya Quispe"}),p(Sx,{color:e,children:"Desarrollador de Software, manejo tecnologias frontend y backend , me considero entusiasta y perserverante en lo que hago."}),p(lp,{text:"Descargar cv",tipo:"desktop",href:rp})]}),D(bx,{color:e,children:[p("img",{src:V4,alt:"author"}),p(lp,{text:"Descargar cv",tipo:"mobile",href:rp})]})]})})}function Cx(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function Tx(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}function kx(e){return ge({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"}}]})(e)}function _x(e){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"}}]})(e)}function Ox(e){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"}}]})(e)}const Px=T.article`
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
`,Dx=T.div`
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
`,Mx=T.button`
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

`;function co({Modal:e,setModal:t,children:r}){const n=()=>t(!1);return p(Px,{visible:e,onClick:n,children:D(Dx,{onClick:o=>{o.stopPropagation()},children:[p(Mx,{onClick:n,children:"X"}),r]})})}const Ix=T.div`
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
`,zx=T.div`
    display: flex;
    border-radius: 8px;
    img{
        border-radius: 8px;
        width: 100%;
        height: auto;
    }
`,Lx=T.div`
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

`;function Ax({id:e}){const t=Zg.find(r=>r.id==e);return D(Ix,{children:[p("h2",{children:t.title}),p(zx,{children:p("img",{src:`img-projects/${t.route_img}`,alt:t.alt_img})}),p("p",{children:t.description}),D(Lx,{children:[p("div",{children:p("a",{href:t.route_github,target:"_blank",children:p(Tx,{})})}),p("div",{children:p("a",{href:t.route,target:"_blank",children:p(Ox,{})})})]})]})}const Rx=T.section`
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
`,Nx=T.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`,$x=T.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
`,jx=T.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
    @media screen and (min-width:541px){
        padding: 0rem 1rem;
    }
`,Fx=T.div`

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

`,Hx=T.div`
    display: flex;
    background-color: black;
    width: 100%;
    height: auto;
    border-radius: 6px;
    overflow: hidden;
    
    img{
        width: 100%;
        height: auto;
        border-radius: 6px;
        min-height: 100px;
    }

`,Bx=T.div`
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
`,Zg=[{id:1,title:"CRUD",description:"Son operaciones para operar la información (crear, leer, actualizar, eliminar) utilizando la api de usecontext + useReducer + useForm.",route:"#/projects/crud",route_github:"https://github.com/Saul-Huarcaya/crudreact",route_img:"crud.JPG",alt_img:"Imagen de un crud realizado con react"},{id:2,title:"Room Homepage",description:"Desafio Room Homepage propuesto por la web FrontendMentor nivel intermedio se realizo con React.",route:"#/projects/room-page",route_github:"https://github.com/Saul-Huarcaya/room-homepage",route_img:"room-homepage.jpg",alt_img:"Imagen de una room homepage reto de una sola pagina Frontend Mentor."},{id:3,title:"App de Países",description:"Aplicación que busca todos los países, mediante nombre del pais o region utiliza la Api RestCountries.",route:"#/projects/api-countries",route_github:"https://github.com/Saul-Huarcaya/app-countries",route_img:"banderas.JPG",alt_img:"Imagen de una aplicación para buscar países."},{id:4,title:"Carrito de Compras",description:"Aplicación que simula el proceso para adquirir uno o varios productos tecnológicos.",route:"#/projects/ecommerce",route_github:"https://github.com/Saul-Huarcaya/carrtito-compras",route_img:"carrito.JPG",alt_img:"Carrito de crompras hecho con React"},{id:5,title:"Manage Page",description:"Desafio Manage page propuesto por la web FrontendMentor nivel intermedio se realizo con React y la libreria swiper.js.",route:"#/projects/mana-page",route_github:"https://github.com/Saul-Huarcaya/manage-page",route_img:"manage-page.jpg",alt_img:"Carrito de compras hecho con React"},{id:6,title:"App Tier List",description:"Aplicación que sirve para nivelar y ver que país es mejor en sudamerica.",route:"#/projects/tier-list",route_github:"https://github.com/Saul-Huarcaya/tier-list",route_img:"tier-list.png",alt_img:"Imagen de tier list"}];function Ux(){E.exports.useEffect(()=>{const a=Qt({duration:1500,delay:0,reset:!0,origin:"left"});a.reveal(".left",{distance:"100px"}),a.reveal(".left2",{distance:"100px"})},[]);const{theme:e}=E.exports.useContext(wt),[t,r]=E.exports.useState(!1),[n,i]=E.exports.useState(1),o=a=>{i(a),r(!0)};return D(Rx,{id:"project",color:e,children:[D(Nx,{className:"container",children:[p($x,{className:"left",color:e,children:"Proyectos"}),p(jx,{className:"left2",children:Zg.map(a=>D(Fx,{color:e,onClick:()=>o(a.id),children:[p(Hx,{children:p("img",{src:`img-projects/${a.route_img}`,alt:a.alt_img,color:e})}),p(Bx,{color:e,children:p("div",{children:p(_x,{})})})]},a.id))})]}),t&&p(co,{Modal:t,setModal:r,children:p(Ax,{id:n,setModalProject:r})})]})}function Vx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M8.171 4.999c-0.562 0.083-1.237 0.347-1.716 0.675-0.313 0.207-0.717 0.596-0.95 0.901-0.26 0.343-0.577 1.003-0.702 1.456l-0.106 0.377v15.727l0.106 0.377c0.124 0.453 0.441 1.113 0.702 1.456 0.49 0.641 1.245 1.181 2.003 1.426 0.626 0.2 0.313 0.192 8.486 0.192 8.177 0 7.864 0.008 8.486-0.196 0.762-0.245 1.516-0.781 2.003-1.422 0.26-0.347 0.581-1.007 0.705-1.456l0.102-0.377v-15.727l-0.106-0.377c-0.124-0.452-0.441-1.113-0.701-1.456-0.234-0.306-0.637-0.694-0.95-0.901-0.336-0.23-0.883-0.479-1.305-0.596l-0.37-0.102-7.732-0.004c-4.251-0.004-7.834 0.008-7.954 0.026zM18.709 9.159c1.192 0.196 2.006 0.588 2.538 1.222 0.226 0.268 0.49 0.8 0.6 1.196 0.068 0.26 0.079 0.407 0.083 1.056 0.004 0.683-0.004 0.784-0.083 1.052-0.23 0.8-0.732 1.414-1.543 1.89l-0.279 0.162 0.2 0.064c0.305 0.102 0.815 0.366 1.075 0.562 0.649 0.49 1.101 1.252 1.282 2.161 0.087 0.453 0.087 1.422-0.004 1.837-0.358 1.633-1.622 2.768-3.523 3.149-0.728 0.147-0.916 0.155-4.824 0.155h-3.82v-14.6l3.953 0.015c3.538 0.011 3.99 0.019 4.345 0.079zM13.655 13.277v1.72l1.822-0.015c1.709-0.019 1.837-0.023 2.112-0.098 0.86-0.234 1.233-0.728 1.233-1.633 0-0.694-0.245-1.143-0.777-1.407-0.471-0.234-0.981-0.283-2.983-0.287h-1.407v1.72zM13.655 19.176v2.003l1.991-0.015c2.237-0.015 2.312-0.023 2.863-0.29 0.634-0.309 0.916-0.815 0.916-1.641 0-1.063-0.422-1.652-1.395-1.946-0.275-0.087-0.328-0.087-2.327-0.102l-2.048-0.011v2.003z"}}]})(e)}function Wx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"}}]})(e)}function Gx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z"}}]})(e)}function Yx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"}}]})(e)}function qx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"}}]})(e)}function Xx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"}}]})(e)}function Qx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"}}]})(e)}function Kx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M18.82 15.507l-4.709 1.536-4.094 1.808-1.147 0.303c-0.291 0.276-0.599 0.557-0.928 0.843-0.361 0.314-0.701 0.599-0.959 0.805-0.288 0.229-0.715 0.654-0.934 0.926-0.325 0.405-0.58 0.837-0.689 1.168-0.197 0.597-0.101 1.202 0.279 1.761 0.485 0.713 1.449 1.438 2.572 1.931 0.572 0.252 1.538 0.576 2.263 0.759 1.207 0.305 3.54 0.636 4.824 0.685 0.261 0.010 0.607 0.009 0.623-0.002 0.028-0.019 0.228-0.397 0.46-0.871 0.79-1.613 1.361-3.125 1.668-4.416 0.186-0.782 0.331-1.825 0.425-3.061 0.026-0.346 0.036-1.501 0.016-1.894-0.033-0.639-0.089-1.16-0.179-1.67-0.013-0.075-0.018-0.141-0.011-0.147 0.013-0.011 0.058-0.025 0.636-0.194l-0.115-0.27zM17.744 16.138c0.043 0 0.157 1.091 0.186 1.784 0.006 0.147 0.005 0.241-0.004 0.241-0.028 0-0.603-0.338-1.011-0.594-0.356-0.224-1.031-0.672-1.139-0.757-0.034-0.027-0.030-0.028 0.261-0.128 0.495-0.171 1.669-0.547 1.706-0.547zM15.345 16.926c0.030-0 0.113 0.046 0.309 0.168 0.735 0.46 1.729 1.014 2.155 1.2 0.132 0.058 0.147 0.035-0.157 0.242-0.649 0.441-1.455 0.874-2.446 1.314-0.173 0.077-0.319 0.139-0.325 0.139s0.013-0.088 0.042-0.195c0.24-0.887 0.375-1.783 0.379-2.502 0.002-0.355 0.002-0.357 0.036-0.366 0.002-0 0.004-0.001 0.006-0.001v0zM14.852 17.114c0.021 0.021 0.006 0.817-0.020 1.034-0.062 0.52-0.164 1.002-0.327 1.549-0.039 0.131-0.075 0.244-0.081 0.25-0.014 0.016-0.501-0.458-0.663-0.646-0.277-0.321-0.495-0.639-0.655-0.953-0.081-0.159-0.21-0.475-0.198-0.483 0.055-0.040 1.93-0.765 1.944-0.751zM12.526 18.031c0.004 0 0.008 0.002 0.010 0.004 0.007 0.008 0.032 0.066 0.055 0.129 0.113 0.308 0.368 0.766 0.59 1.058 0.242 0.32 0.557 0.66 0.821 0.886 0.085 0.073 0.164 0.14 0.175 0.15 0.023 0.020 0.030 0.017-0.55 0.237-0.673 0.255-1.406 0.511-2.247 0.783-0.321 0.104-0.592 0.191-0.602 0.195-0.032 0.012-0.022-0.008 0.071-0.154 0.418-0.653 1.051-1.929 1.405-2.832 0.061-0.157 0.12-0.313 0.13-0.349 0.015-0.052 0.031-0.069 0.079-0.091 0.027-0.012 0.050-0.018 0.063-0.016zM11.813 18.325c0.009 0.008-0.171 0.389-0.349 0.736-0.344 0.672-0.724 1.333-1.228 2.14-0.087 0.139-0.167 0.267-0.178 0.282-0.018 0.026-0.025 0.017-0.080-0.092-0.121-0.24-0.222-0.543-0.274-0.824-0.052-0.279-0.043-0.761 0.019-1.061 0.046-0.222 0.044-0.217 0.149-0.271 0.453-0.232 1.926-0.922 1.941-0.909zM17.952 18.574v0.151c-0.001 0.794-0.085 1.881-0.209 2.674-0.022 0.139-0.040 0.254-0.042 0.255s-0.102-0.028-0.223-0.066c-0.534-0.166-1.114-0.414-1.636-0.7-0.346-0.19-0.847-0.497-0.833-0.511 0.004-0.004 0.151-0.082 0.328-0.174 0.699-0.363 1.366-0.754 1.947-1.142 0.218-0.145 0.544-0.381 0.616-0.445l0.051-0.045zM9.125 19.627c0.014-0.001 0.011 0.027-0.012 0.158-0.016 0.091-0.034 0.263-0.040 0.382-0.029 0.52 0.056 0.904 0.314 1.43 0.072 0.146 0.128 0.268 0.125 0.27-0.026 0.022-2.38 0.71-3.12 0.913-0.219 0.060-0.411 0.113-0.427 0.118-0.026 0.008-0.028 0.002-0.019-0.058 0.081-0.522 0.479-1.207 1.036-1.783 0.37-0.383 0.666-0.609 1.17-0.897 0.362-0.206 0.923-0.516 0.964-0.532 0.003-0.001 0.005-0.001 0.008-0.001v0zM14.677 20.621c0.002-0.003 0.089 0.044 0.194 0.104 0.76 0.44 1.821 0.852 2.726 1.059l0.082 0.019-0.112 0.063c-0.473 0.262-2.029 0.91-3.618 1.506-0.232 0.087-0.458 0.172-0.503 0.19s-0.080 0.030-0.080 0.026 0.066-0.13 0.146-0.28c0.446-0.834 0.892-1.848 1.12-2.552 0.023-0.072 0.044-0.132 0.046-0.135v0zM14.111 20.806c0.002 0.002-0.025 0.077-0.062 0.165-0.31 0.75-0.716 1.568-1.235 2.487-0.132 0.234-0.243 0.425-0.247 0.424s-0.111-0.064-0.238-0.142c-0.755-0.462-1.423-1.031-1.861-1.584l-0.063-0.078 0.325-0.089c1.161-0.318 2.145-0.658 3.124-1.080 0.139-0.060 0.254-0.107 0.256-0.104v0zM17.627 22.034c0.002 0 0.002 0.002 0.002 0.003 0 0.079-0.18 0.811-0.329 1.341-0.125 0.445-0.231 0.792-0.426 1.408-0.086 0.272-0.16 0.494-0.165 0.493s-0.025-0.005-0.046-0.009c-1.057-0.191-2.005-0.458-2.892-0.815-0.248-0.1-0.607-0.259-0.626-0.277-0.006-0.006 0.208-0.107 0.476-0.224 1.62-0.707 3.299-1.512 3.873-1.857 0.069-0.041 0.12-0.066 0.132-0.063zM9.511 22.312c0.009 0.008-0.445 0.657-1.078 1.543-0.22 0.308-0.479 0.671-0.574 0.807s-0.24 0.35-0.322 0.477l-0.15 0.231-0.159-0.134c-0.187-0.157-0.514-0.49-0.663-0.675-0.306-0.381-0.513-0.782-0.594-1.15-0.038-0.17-0.039-0.256-0.003-0.267 0.052-0.016 1.002-0.239 1.894-0.446 0.495-0.115 1.068-0.249 1.273-0.299s0.375-0.088 0.377-0.086zM9.967 22.486l0.115 0.128c0.513 0.571 1.034 0.997 1.67 1.365 0.112 0.065 0.198 0.121 0.191 0.126-0.026 0.016-2.2 0.789-3.205 1.14-0.567 0.198-1.033 0.358-1.035 0.358s-0.035-0.021-0.071-0.047l-0.066-0.047 0.103-0.148c0.334-0.483 0.753-1.014 1.67-2.118l0.629-0.757zM12.807 24.516c0.003-0.003 0.161 0.053 0.354 0.125 0.464 0.173 0.827 0.286 1.32 0.41 0.605 0.151 1.478 0.303 1.996 0.346 0.079 0.007 0.12 0.016 0.107 0.024-0.024 0.015-0.548 0.19-0.933 0.311-0.611 0.192-2.48 0.744-4.004 1.183-0.283 0.081-0.524 0.15-0.537 0.153-0.034 0.007-0.153-0.024-0.153-0.040 0-0.008 0.085-0.116 0.189-0.24 0.512-0.613 1.021-1.297 1.446-1.944 0.116-0.177 0.213-0.325 0.216-0.328zM12.178 24.534c0.005 0.005-0.248 0.409-0.692 1.108-0.188 0.295-0.4 0.631-0.473 0.747s-0.18 0.291-0.237 0.391l-0.104 0.182-0.053-0.014c-0.128-0.035-1.028-0.352-1.265-0.447-0.295-0.117-0.602-0.258-0.828-0.381-0.283-0.153-0.642-0.38-0.614-0.389 0.008-0.003 0.495-0.136 1.081-0.296 1.56-0.425 2.423-0.669 2.989-0.846 0.106-0.033 0.194-0.058 0.196-0.056zM16.609 25.573c0.003-0.001 0.005-0.001 0.005 0 0.015 0.037-0.563 1.636-0.774 2.143-0.047 0.114-0.065 0.141-0.089 0.14-0.060-0.003-0.897-0.12-1.404-0.197-0.887-0.135-2.373-0.394-2.748-0.48l-0.087-0.019 0.532-0.12c1.14-0.257 1.687-0.395 2.242-0.564 0.7-0.214 1.394-0.482 2.094-0.807 0.111-0.052 0.205-0.091 0.229-0.096v0zM13.967 4.533c-0.079-0.009-1.343 0.446-2.155 0.776-1.1 0.447-1.954 0.875-2.481 1.245-0.196 0.138-0.443 0.385-0.479 0.48-0.014 0.036-0.020 0.077-0.020 0.12l0.478 0.451 1.134 0.362 2.702 0.483 3.088 0.531 0.031-0.265c-0.009-0.002-0.018-0.003-0.028-0.004l-0.407-0.064-0.083-0.145c-0.42-0.741-0.884-1.657-1.153-2.277-0.209-0.48-0.409-1.034-0.52-1.434-0.066-0.238-0.073-0.253-0.11-0.258v0zM13.908 4.716c0.003-0.001 0.005-0.001 0.005 0 0.002 0.003 0.017 0.102 0.031 0.221 0.061 0.497 0.172 0.98 0.346 1.499 0.131 0.391 0.133 0.368-0.023 0.325-0.363-0.101-1.99-0.381-3.167-0.544-0.19-0.026-0.348-0.050-0.35-0.052-0.015-0.015 0.849-0.468 1.232-0.646 0.491-0.229 1.829-0.785 1.926-0.803zM10.478 6.309l0.138 0.047c0.756 0.257 2.65 0.619 3.697 0.706 0.118 0.010 0.217 0.020 0.22 0.023s-0.097 0.056-0.223 0.119c-0.505 0.253-1.061 0.561-1.446 0.802-0.113 0.071-0.216 0.128-0.23 0.127s-0.088-0.013-0.166-0.026l-0.142-0.023-0.357-0.347c-0.628-0.607-1.118-1.077-1.307-1.255l-0.184-0.173zM10.338 6.421l0.5 0.625c0.275 0.344 0.552 0.685 0.613 0.758s0.109 0.136 0.106 0.138c-0.014 0.010-0.725-0.128-1.102-0.215-0.387-0.089-0.547-0.131-0.786-0.208l-0.195-0.063 0.001-0.048c0.002-0.24 0.305-0.594 0.818-0.956l0.046-0.031zM14.6 7.272c0.015 0.001 0.031 0.032 0.075 0.129 0.121 0.266 0.499 0.987 0.591 1.126 0.030 0.046 0.078 0.049-0.424-0.032-1.205-0.195-1.595-0.26-1.595-0.267 0-0.005 0.036-0.028 0.080-0.053 0.373-0.208 0.75-0.469 1.085-0.751 0.080-0.068 0.157-0.132 0.171-0.144 0.006-0.005 0.011-0.008 0.016-0.007zM8.874 6.986c0 0-0.078 0.124-0.004 0.308 0.046 0.114 0.183 0.251 0.334 0.396 0 0 1.582 1.543 1.775 1.767 0.876 1.011 1.257 2.007 1.292 3.382 0.023 0.882-0.148 1.658-0.561 2.559-0.741 1.615-2.301 3.397-4.711 5.378l0.354-0.117c0.227-0.17 0.536-0.352 1.265-0.751 1.677-0.918 3.561-1.762 5.875-2.631 3.329-1.251 8.806-2.719 11.922-3.196l0.325-0.050-0.050-0.078c-0.285-0.443-0.479-0.716-0.713-1.005-0.683-0.845-1.511-1.535-2.525-2.102-1.393-0.78-3.2-1.386-5.484-1.84-0.432-0.086-1.378-0.248-2.147-0.368-1.63-0.254-2.681-0.426-3.843-0.628-0.416-0.072-1.038-0.177-1.451-0.266-0.215-0.046-0.624-0.143-0.941-0.253-0.262-0.103-0.632-0.203-0.71-0.504zM9.791 7.876c0.002-0.002 0.062 0.016 0.134 0.041 0.133 0.045 0.31 0.098 0.515 0.156 0.144 0.040 0.302 0.082 0.469 0.125 0.214 0.055 0.391 0.102 0.393 0.104 0.024 0.027 0.383 1.174 0.506 1.614 0.047 0.168 0.082 0.308 0.079 0.311s-0.043-0.059-0.088-0.137c-0.416-0.731-1.074-1.475-1.836-2.073-0.095-0.075-0.172-0.138-0.172-0.141zM11.543 8.36c0.018-0.001 0.097 0.012 0.191 0.033 0.606 0.134 1.689 0.343 2.385 0.46 0.116 0.020 0.211 0.041 0.211 0.047s-0.043 0.034-0.096 0.060c-0.117 0.059-0.59 0.342-0.748 0.448-0.395 0.264-0.75 0.547-1.008 0.804-0.104 0.103-0.191 0.188-0.194 0.188s-0.021-0.060-0.040-0.134c-0.129-0.495-0.397-1.227-0.636-1.742-0.039-0.083-0.070-0.156-0.070-0.162 0-0.001 0.001-0.001 0.004-0.002v0zM14.626 8.946c0.020 0.007 0.059 0.127 0.127 0.395 0.13 0.515 0.191 1.094 0.171 1.629-0.006 0.149-0.015 0.287-0.021 0.308l-0.011 0.037-0.184-0.060c-0.379-0.121-0.999-0.304-1.53-0.451-0.302-0.084-0.549-0.158-0.549-0.165 0-0.022 0.44-0.462 0.629-0.629 0.361-0.32 1.334-1.076 1.368-1.064zM14.871 8.981c0.011-0.010 1.473 0.243 2.137 0.37 0.495 0.095 1.212 0.245 1.255 0.263 0.021 0.009-0.053 0.049-0.291 0.156-0.941 0.424-1.638 0.803-2.331 1.267-0.183 0.122-0.334 0.222-0.337 0.222s-0.006-0.102-0.006-0.226c-0.001-0.676-0.135-1.358-0.383-1.934-0.027-0.062-0.047-0.115-0.044-0.118v0zM18.651 9.729c0.011 0.011-0.037 0.3-0.078 0.47-0.129 0.53-0.472 1.317-0.895 2.056-0.075 0.13-0.141 0.239-0.149 0.241s-0.104-0.048-0.214-0.112c-0.414-0.242-0.882-0.471-1.396-0.683-0.143-0.059-0.266-0.112-0.272-0.118-0.023-0.022 1.12-0.779 1.726-1.142 0.485-0.291 1.265-0.726 1.279-0.712zM18.921 9.771c0.033 0 0.681 0.177 1.017 0.277 0.835 0.25 1.799 0.602 2.423 0.886l0.26 0.118-0.183 0.042c-1.529 0.351-2.84 0.757-4.102 1.269-0.105 0.043-0.196 0.078-0.203 0.078s0.027-0.081 0.074-0.18c0.379-0.806 0.625-1.652 0.688-2.37 0.006-0.065 0.018-0.118 0.026-0.118v0zM12.476 11.253c0.010-0.010 0.504 0.105 0.773 0.181 0.405 0.114 1.266 0.402 1.266 0.424 0 0.004-0.095 0.087-0.211 0.184-0.465 0.389-0.914 0.797-1.452 1.316-0.159 0.154-0.295 0.279-0.302 0.279s-0.010-0.023-0.006-0.050c0.081-0.598 0.064-1.366-0.049-2.147-0.014-0.099-0.023-0.183-0.019-0.187zM22.868 11.262c0.007 0.007-0.229 0.377-0.376 0.588-0.215 0.307-0.526 0.711-1.235 1.603-0.372 0.468-0.792 0.998-0.934 1.177s-0.26 0.326-0.264 0.326-0.049-0.064-0.101-0.142c-0.4-0.597-0.874-1.121-1.44-1.592-0.106-0.088-0.225-0.184-0.264-0.214s-0.072-0.057-0.072-0.061c-0-0.010 0.604-0.269 1.065-0.457 0.803-0.327 1.9-0.718 2.721-0.97 0.433-0.133 0.893-0.265 0.9-0.258zM23.141 11.334c0.013-0.003 0.099 0.039 0.203 0.098 0.865 0.495 1.712 1.132 2.379 1.786 0.19 0.186 0.653 0.668 0.646 0.672-0.002 0.001-0.162 0.014-0.356 0.028-1.499 0.113-3.415 0.431-5.259 0.875-0.125 0.030-0.234 0.055-0.241 0.055s0.13-0.138 0.305-0.305c1.083-1.041 1.578-1.699 2.159-2.874 0.087-0.175 0.16-0.326 0.163-0.335 0-0.001 0.001-0.001 0.002-0.001v0zM15.22 12.146c0.049 0.011 0.511 0.226 0.86 0.401 0.319 0.16 0.802 0.417 0.826 0.439 0.003 0.003-0.167 0.092-0.378 0.197-0.669 0.335-1.242 0.65-1.84 1.016-0.171 0.104-0.313 0.19-0.318 0.19-0.015 0-0.009-0.013 0.086-0.188 0.319-0.583 0.575-1.28 0.723-1.96 0.013-0.061 0.029-0.098 0.040-0.095v0zM14.754 12.229c0.010 0.010-0.11 0.45-0.186 0.685-0.146 0.451-0.392 1.018-0.629 1.445-0.056 0.1-0.141 0.247-0.189 0.326l-0.088 0.144-0.2-0.193c-0.232-0.225-0.421-0.364-0.662-0.489-0.095-0.049-0.172-0.094-0.172-0.101-0.001-0.029 0.607-0.582 1.075-0.978 0.335-0.284 1.042-0.849 1.050-0.84zM17.583 13.392l0.174 0.113c0.398 0.258 0.869 0.606 1.229 0.906 0.201 0.168 0.593 0.518 0.673 0.603l0.043 0.045-0.288 0.080c-1.63 0.452-2.89 0.855-4.359 1.395-0.163 0.060-0.304 0.11-0.314 0.11-0.020 0-0.040 0.019 0.326-0.319 0.94-0.865 1.77-1.818 2.391-2.745l0.125-0.188zM16.84 13.579c0.008 0.008-0.482 0.695-0.773 1.083-0.349 0.464-0.969 1.239-1.396 1.744-0.178 0.211-0.331 0.386-0.34 0.389s-0.015-0.049-0.015-0.13c-0.001-0.431-0.11-0.891-0.302-1.281-0.081-0.165-0.095-0.204-0.078-0.22 0.067-0.061 1.104-0.652 1.758-1.002 0.449-0.241 1.138-0.591 1.147-0.582zM12.344 14.68c0.009 0 0.092 0.042 0.185 0.093 0.227 0.126 0.431 0.264 0.611 0.414 0.007 0.006-0.086 0.082-0.207 0.169-0.337 0.243-0.851 0.631-1.148 0.868-0.314 0.25-0.324 0.257-0.289 0.203 0.235-0.359 0.353-0.563 0.477-0.823 0.11-0.231 0.219-0.505 0.297-0.744 0.033-0.099 0.066-0.18 0.075-0.18zM13.542 15.62c0.016-0.002 0.039 0.028 0.136 0.172 0.203 0.303 0.358 0.707 0.398 1.037l0.008 0.071-0.486 0.188c-0.873 0.339-1.677 0.673-2.219 0.921-0.152 0.070-0.42 0.198-0.595 0.285s-0.318 0.156-0.318 0.153c0-0.004 0.11-0.086 0.244-0.184 1.065-0.773 1.984-1.62 2.676-2.467 0.074-0.091 0.141-0.169 0.15-0.174 0.002-0.002 0.004-0.002 0.007-0.002v0zM12.989 15.757c0.014 0.014-0.393 0.475-0.667 0.754-0.686 0.701-1.367 1.25-2.21 1.784-0.105 0.067-0.202 0.127-0.214 0.135-0.023 0.014 0.007-0.021 0.378-0.424 0.233-0.254 0.412-0.465 0.614-0.728 0.133-0.173 0.159-0.198 0.355-0.339 0.527-0.38 1.731-1.196 1.745-1.182z"}}]})(e)}function Zx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M5.082 5.593c-0.564 0.564-0.423 1.213 0.564 2.679 0.508 0.761 1.1 1.946 1.326 2.623 0.226 0.705 0.677 1.664 0.987 2.143 0.564 0.79 0.564 0.959 0.197 2.397-0.226 0.902-0.31 2.031-0.197 2.736 0.169 1.185 1.128 2.905 1.72 3.102 0.508 0.169 1.241-0.733 1.269-1.551 0-0.705 0.028-0.733 0.338-0.226 0.536 0.874 2.228 2.735 2.369 2.594 0.056-0.056-0.31-0.79-0.846-1.607-0.508-0.846-1.1-1.946-1.325-2.454-0.31-0.846-0.423-0.902-0.79-0.508-0.226 0.226-0.508 0.874-0.592 1.466-0.226 1.354-0.733 1.523-1.128 0.367s-0.395-3.131 0-4.484c0.282-0.931 0.254-1.184-0.226-1.89-0.31-0.423-0.79-1.438-1.044-2.256-0.254-0.79-0.846-1.974-1.325-2.595-1.1-1.551-1.1-2.115 0.056-1.89 0.479 0.085 1.213 0.423 1.664 0.733 0.423 0.31 1.156 0.564 1.607 0.564 1.354 0 3.723 1.326 5.443 3.046 1.326 1.325 2.002 2.397 3.441 5.302 1.692 3.44 1.833 3.638 2.877 3.976 1.241 0.423 3.835 2.002 3.835 2.341 0 0.113-0.649 0.282-1.438 0.338-2.115 0.226-2.313 0.62-0.931 1.861 0.649 0.564 1.862 1.438 2.736 1.918l1.579 0.902-0.733-0.931c-0.423-0.508-1.297-1.297-1.974-1.72s-1.213-0.874-1.213-0.987c0-0.113 0.479-0.31 1.072-0.395 1.579-0.282 2.030-0.423 2.030-0.705 0-0.423-2.848-2.566-4.202-3.159-1.156-0.536-1.297-0.762-2.792-3.835-1.326-2.82-1.861-3.61-3.553-5.302-2.171-2.171-3.666-3.102-5.584-3.384-0.649-0.113-1.551-0.451-1.946-0.733-0.931-0.705-2.82-0.959-3.272-0.479z"}}]})(e)}function Jx(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M15.998 28.895c-0.337 0-0.673-0.088-0.969-0.259l-3.086-1.826c-0.46-0.257-0.235-0.349-0.083-0.402 0.614-0.213 0.739-0.262 1.394-0.635 0.069-0.038 0.159-0.024 0.231 0.018l2.37 1.407c0.087 0.048 0.207 0.048 0.287 0l9.241-5.333c0.086-0.049 0.141-0.149 0.141-0.25v-10.665c0-0.104-0.055-0.202-0.143-0.255l-9.237-5.329c-0.086-0.050-0.199-0.050-0.285 0l-9.235 5.331c-0.090 0.051-0.146 0.152-0.146 0.253v10.666c0 0.102 0.056 0.198 0.145 0.247l2.532 1.462c1.374 0.687 2.215-0.122 2.215-0.935v-10.53c0-0.149 0.12-0.266 0.269-0.266h1.172c0.146 0 0.267 0.117 0.267 0.266v10.53c0 1.833-0.998 2.885-2.736 2.885-0.534 0-0.955 0-2.129-0.579l-2.423-1.395c-0.598-0.346-0.969-0.993-0.969-1.686v-10.665c0-0.693 0.371-1.339 0.969-1.684l9.242-5.34c0.585-0.331 1.362-0.331 1.942 0l9.241 5.34c0.599 0.346 0.971 0.992 0.971 1.684v10.665c0 0.693-0.372 1.337-0.971 1.686l-9.241 5.335c-0.296 0.171-0.631 0.259-0.973 0.259zM18.853 21.547c-4.045 0-4.892-1.857-4.892-3.414 0-0.148 0.118-0.266 0.266-0.266h1.195c0.133 0 0.245 0.096 0.265 0.226 0.18 1.216 0.717 1.831 3.164 1.831 1.946 0 2.775-0.441 2.775-1.473 0-0.596-0.234-1.037-3.26-1.334-2.528-0.25-4.093-0.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233 0.007 0.075-0.020 0.148-0.071 0.205-0.051 0.054-0.121 0.086-0.196 0.086h-1.2c-0.124 0-0.233-0.088-0.259-0.209-0.288-1.28-0.988-1.689-2.886-1.689-2.126 0-2.373 0.74-2.373 1.295 0 0.673 0.292 0.869 3.161 1.248 2.84 0.375 4.19 0.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z"}}]})(e)}function e6(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M0.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649v-10.495h-31.36v5.248zM9.055 15.406v3.488h-1.76v-5.216h-1.697v5.216h-3.582v-6.976h7.039v3.488zM17.779 15.412l-0.019 3.488-3.425-0.012v1.766h-3.582v-8.736h7.039l-0.012 3.494zM29.983 15.406v3.488h-1.76v-5.216h-1.76v5.248l-1.76-0.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zM14.335 15.406v1.728h1.634v-3.457h-1.634v1.728z"}}]})(e)}function t6(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M10.372 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.822 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM8.871 17.894h-1.287l0.536-3.216h1.394c0.75 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251zM17.555 13.069h-1.93l0.429-2.251h-2.037l-1.715 8.684h2.037l0.965-4.824h1.608c0.751 0 0.751 0.322 0.643 0.858l-0.75 3.967h2.144l0.75-4.396c0.214-1.072-0.429-1.93-2.144-2.037zM24.738 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.823 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM23.237 17.894h-1.287l0.536-3.216h1.394c0.751 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251z"}}]})(e)}function r6(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"}},{tag:"path",attr:{d:"M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"}}]})(e)}function n6(e){return ge({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M17.319 9.414c-2.444 2.444-4.5 4.435-4.597 4.435-0.081 0-1.424-0.987-2.962-2.185l-2.784-2.185-2.266 1.133v11.331l2.266 1.133 2.574-2.007c1.425-1.117 2.736-2.12 2.914-2.234 0.324-0.194 0.647 0.097 4.84 4.274l4.484 4.484 2.752-1.117 2.752-1.101v-18.195l-2.104-0.842c-1.149-0.47-2.396-0.955-2.768-1.101l-0.664-0.259-4.435 4.435zM21.706 16.278c0 2.493-0.032 4.532-0.097 4.532-0.227 0-5.73-4.435-5.682-4.581 0.049-0.178 5.471-4.468 5.666-4.468 0.065-0.016 0.114 2.023 0.114 4.516zM8.837 14.659l1.619 1.619-1.619 1.619c-0.89 0.89-1.667 1.619-1.732 1.619-0.081 0-0.13-1.457-0.13-3.237s0.048-3.238 0.13-3.238c0.065 0 0.842 0.729 1.732 1.619z"}}]})(e)}const Bl={frontend:[{id:1,logo:p(qx,{}),color:"#e34c26",title:"HTML"},{id:2,logo:p(Wx,{}),color:"#264de4",title:"CSS"},{id:3,logo:p(Xx,{}),color:"#F0DB4F",title:"JavaScript"},{id:4,logo:p(Vx,{}),color:"#563d7c",title:"Bootstrap"},{id:5,logo:p(r6,{}),color:"#61DBFB",title:"React JS"}],backend:[{id:1,logo:p(t6,{}),color:"#777BB3",title:"PHP"},{id:2,logo:p(Jx,{}),color:"#3c873a",title:"Node JS"},{id:3,logo:p(Zx,{}),color:"#00758F",title:"Mysql"},{id:4,logo:p(Kx,{}),color:"#FF0000",title:"SqlServer"},{id:5,logo:p(Qx,{}),color:"#4DB33D",title:"Mongo"}],tools:[{id:1,logo:p(n6,{}),color:"#6ac1b9",title:"VS Code"},{id:2,logo:p(Gx,{}),color:"#F1502F",title:"Git"},{id:3,logo:p(Yx,{}),color:"#000000",title:"Github"},{id:4,logo:p(e6,{}),color:"#CC3534",title:"Npm"}]},i6=T.div`
    background-color: ${e=>e.color==="dark"?"white":"rgb(29, 31, 27)"};
    border-radius: 6px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 1rem;
`,o6=T.h3`
    text-align: center;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: calc(1.1rem + 1vh);
    color:rgb(29, 31, 27);
    color: ${e=>e.color==="dark"?"rgb(29, 31, 27)":"white"};
`,a6=T.div`
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
`,s6=T.div`
    color: ${e=>e.color};
`,l6=T.div`
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
`;function Ul({grupo:e,titulo:t}){const{theme:r}=E.exports.useContext(wt);return D(i6,{color:r,children:[p(o6,{color:r,children:t}),p(a6,{children:e.map(n=>p(s6,{color:n.color,children:D(l6,{children:[p("div",{children:n.logo}),p("p",{children:n.title})]})},n.id))})]})}const c6=T.section`
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

`,u6=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: calc(100% - 2rem);
    
    @media screen and (min-width:769px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`,d6=T.h2`
    text-align: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    margin-bottom: 1rem;
`,f6=T.div`
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
`;function p6(){E.exports.useEffect(()=>{const t=Qt({duration:1500,delay:100,reset:!0,origin:"left"});t.reveal(".title-skill",{distance:"100px"}),t.reveal(".container-skill",{distance:"150px"})},[]);const{theme:e}=E.exports.useContext(wt);return p(c6,{id:"skill",color:e,children:D(u6,{className:"container",children:[p(d6,{color:e,className:"title-skill",children:"Habilidades"}),D(f6,{className:"container-skill",children:[p(Ul,{grupo:Bl.frontend,titulo:"Frontend"}),p(Ul,{grupo:Bl.backend,titulo:"Backend"}),p(Ul,{grupo:Bl.tools,titulo:"Tools"})]})]})})}var Do=e=>e.type==="checkbox",Nn=e=>e instanceof Date,Je=e=>e==null;const Jg=e=>typeof e=="object";var We=e=>!Je(e)&&!Array.isArray(e)&&Jg(e)&&!Nn(e),h6=e=>We(e)&&e.target?Do(e.target)?e.target.checked:e.target.value:e,m6=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,g6=(e,t)=>e.has(m6(t)),Mo=e=>Array.isArray(e)?e.filter(Boolean):[],je=e=>e===void 0,Z=(e,t,r)=>{if(!t||!We(e))return r;const n=Mo(t.split(/[,[\].]+?/)).reduce((i,o)=>Je(i)?i:i[o],e);return je(n)||n===e?je(e[t])?r:e[t]:n};const cp={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Rt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Jt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var v6=(e,t,r,n=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Rt.all&&(t._proxyFormState[a]=!n||Rt.all),r&&(r[a]=!0),e[a]}});return i},Et=e=>We(e)&&!Object.keys(e).length,y6=(e,t,r)=>{const{name:n,...i}=e;return Et(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(o=>t[o]===(!r||Rt.all))},Vl=e=>Array.isArray(e)?e:[e];function w6(e){const t=ie.useRef(e);t.current=e,ie.useEffect(()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}var Gt=e=>typeof e=="string",x6=(e,t,r,n)=>Gt(e)?(n&&t.watch.add(e),Z(r,e)):Array.isArray(e)?e.map(i=>(n&&t.watch.add(i),Z(r,i))):(n&&(t.watchAll=!0),r),S6=e=>{const t=e.constructor&&e.constructor.prototype;return We(t)&&t.hasOwnProperty("isPrototypeOf")},wu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Xr(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wu&&(e instanceof Blob||e instanceof FileList))&&(r||We(e)))if(t=r?[]:{},!Array.isArray(e)&&!S6(e))t=e;else for(const n in e)t[n]=Xr(e[n]);else return e;return t}var b6=(e,t,r,n,i)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:i||!0}}:{},Jd=e=>/^\w*$/.test(e),e1=e=>Mo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Ce(e,t,r){let n=-1;const i=Jd(t)?[t]:e1(t),o=i.length,a=o-1;for(;++n<o;){const s=i[n];let l=r;if(n!==a){const c=e[s];l=We(c)||Array.isArray(c)?c:isNaN(+i[n+1])?{}:[]}e[s]=l,e=e[s]}return e}const xu=(e,t,r)=>{for(const n of r||Object.keys(e)){const i=Z(e,n);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else We(a)&&xu(a,t)}}};var up=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length)))),E6=(e,t,r)=>{const n=Mo(Z(e,r));return Ce(n,"root",t[r]),Ce(e,r,n),e},Wn=e=>typeof e=="boolean",ef=e=>e.type==="file",rs=e=>typeof e=="function",Ta=e=>Gt(e)||ie.isValidElement(e),tf=e=>e.type==="radio",ns=e=>e instanceof RegExp;const dp={value:!1,isValid:!1},fp={value:!0,isValid:!0};var t1=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!je(e[0].attributes.value)?je(e[0].value)||e[0].value===""?fp:{value:e[0].value,isValid:!0}:fp:dp}return dp};const pp={isValid:!1,value:null};var r1=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,pp):pp;function hp(e,t,r="validate"){if(Ta(e)||Array.isArray(e)&&e.every(Ta)||Wn(e)&&!e)return{type:r,message:Ta(e)?e:"",ref:t}}var bn=e=>We(e)&&!ns(e)?e:{value:e,message:""},mp=async(e,t,r,n,i)=>{const{ref:o,refs:a,required:s,maxLength:l,minLength:c,min:u,max:f,pattern:m,validate:v,name:x,valueAsNumber:w,mount:C,disabled:g}=e._f;if(!C||g)return{};const d=a?a[0]:o,h=z=>{n&&d.reportValidity&&(d.setCustomValidity(Wn(z)?"":z||""),d.reportValidity())},y={},b=tf(o),_=Do(o),P=b||_,I=(w||ef(o))&&!o.value||t===""||Array.isArray(t)&&!t.length,k=b6.bind(null,x,r,y),B=(z,R,j,Q=Jt.maxLength,J=Jt.minLength)=>{const se=z?R:j;y[x]={type:z?Q:J,message:se,ref:o,...k(z?Q:J,se)}};if(i?!Array.isArray(t)||!t.length:s&&(!P&&(I||Je(t))||Wn(t)&&!t||_&&!t1(a).isValid||b&&!r1(a).isValid)){const{value:z,message:R}=Ta(s)?{value:!!s,message:s}:bn(s);if(z&&(y[x]={type:Jt.required,message:R,ref:d,...k(Jt.required,R)},!r))return h(R),y}if(!I&&(!Je(u)||!Je(f))){let z,R;const j=bn(f),Q=bn(u);if(!Je(t)&&!isNaN(t)){const J=o.valueAsNumber||t&&+t;Je(j.value)||(z=J>j.value),Je(Q.value)||(R=J<Q.value)}else{const J=o.valueAsDate||new Date(t),se=Y=>new Date(new Date().toDateString()+" "+Y),ve=o.type=="time",F=o.type=="week";Gt(j.value)&&t&&(z=ve?se(t)>se(j.value):F?t>j.value:J>new Date(j.value)),Gt(Q.value)&&t&&(R=ve?se(t)<se(Q.value):F?t<Q.value:J<new Date(Q.value))}if((z||R)&&(B(!!z,j.message,Q.message,Jt.max,Jt.min),!r))return h(y[x].message),y}if((l||c)&&!I&&(Gt(t)||i&&Array.isArray(t))){const z=bn(l),R=bn(c),j=!Je(z.value)&&t.length>z.value,Q=!Je(R.value)&&t.length<R.value;if((j||Q)&&(B(j,z.message,R.message),!r))return h(y[x].message),y}if(m&&!I&&Gt(t)){const{value:z,message:R}=bn(m);if(ns(z)&&!t.match(z)&&(y[x]={type:Jt.pattern,message:R,ref:o,...k(Jt.pattern,R)},!r))return h(R),y}if(v){if(rs(v)){const z=await v(t),R=hp(z,d);if(R&&(y[x]={...R,...k(Jt.validate,R.message)},!r))return h(R.message),y}else if(We(v)){let z={};for(const R in v){if(!Et(z)&&!r)break;const j=hp(await v[R](t),d,R);j&&(z={...j,...k(R,j.message)},h(j.message),r&&(y[x]=z))}if(!Et(z)&&(y[x]={ref:d,...z},!r))return y}}return h(!0),y},gp=e=>({isOnSubmit:!e||e===Rt.onSubmit,isOnBlur:e===Rt.onBlur,isOnChange:e===Rt.onChange,isOnAll:e===Rt.all,isOnTouch:e===Rt.onTouched});function C6(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=je(e)?n++:e[t[n++]];return e}function T6(e){for(const t in e)if(!je(e[t]))return!1;return!0}function Ke(e,t){const r=Jd(t)?[t]:e1(t),n=r.length==1?e:C6(e,r),i=r[r.length-1];let o;n&&delete n[i];for(let a=0;a<r.slice(0,-1).length;a++){let s=-1,l;const c=r.slice(0,-(a+1)),u=c.length-1;for(a>0&&(o=e);++s<c.length;){const f=c[s];l=l?l[f]:e[f],u===s&&(We(l)&&Et(l)||Array.isArray(l)&&T6(l))&&(o?delete o[f]:delete e[f]),o=l}}return e}function Wl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var uo=e=>Je(e)||!Jg(e);function $n(e,t){if(uo(e)||uo(t))return e===t;if(Nn(e)&&Nn(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const i of r){const o=e[i];if(!n.includes(i))return!1;if(i!=="ref"){const a=t[i];if(Nn(o)&&Nn(a)||We(o)&&We(a)||Array.isArray(o)&&Array.isArray(a)?!$n(o,a):o!==a)return!1}}return!0}var Su=e=>{const t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},n1=e=>e.type==="select-multiple",k6=e=>tf(e)||Do(e),Gl=e=>Su(e)&&e.isConnected,i1=e=>{for(const t in e)if(rs(e[t]))return!0;return!1};function is(e,t={}){const r=Array.isArray(e);if(We(e)||r)for(const n in e)Array.isArray(e[n])||We(e[n])&&!i1(e[n])?(t[n]=Array.isArray(e[n])?[]:{},is(e[n],t[n])):Je(e[n])||(t[n]=!0);return t}function o1(e,t,r){const n=Array.isArray(e);if(We(e)||n)for(const i in e)Array.isArray(e[i])||We(e[i])&&!i1(e[i])?je(t)||uo(r[i])?r[i]=Array.isArray(e[i])?is(e[i],[]):{...is(e[i])}:o1(e[i],Je(t)?{}:t[i],r[i]):$n(e[i],t[i])?delete r[i]:r[i]=!0;return r}var Yl=(e,t)=>o1(e,t,is(t)),a1=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>je(e)?e:t?e===""?NaN:e&&+e:r&&Gt(e)?new Date(e):n?n(e):e;function ql(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return ef(t)?t.files:tf(t)?r1(e.refs).value:n1(t)?[...t.selectedOptions].map(({value:r})=>r):Do(t)?t1(e.refs).value:a1(je(t.value)?e.ref.value:t.value,e)}var _6=(e,t,r,n)=>{const i={};for(const o of e){const a=Z(t,o);a&&Ce(i,o,a._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:n}},Ei=e=>je(e)?e:ns(e)?e.source:We(e)?ns(e.value)?e.value.source:e.value:e,O6=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function vp(e,t,r){const n=Z(e,r);if(n||Jd(r))return{error:n,name:r};const i=r.split(".");for(;i.length;){const o=i.join("."),a=Z(t,o),s=Z(e,o);if(a&&!Array.isArray(a)&&r!==o)return{name:r};if(s&&s.type)return{name:o,error:s};i.pop()}return{name:r}}var P6=(e,t,r,n,i)=>i.isOnAll?!1:!r&&i.isOnTouch?!(t||e):(r?n.isOnBlur:i.isOnBlur)?!e:(r?n.isOnChange:i.isOnChange)?e:!0,D6=(e,t)=>!Mo(Z(e,t)).length&&Ke(e,t);const M6={mode:Rt.onSubmit,reValidateMode:Rt.onChange,shouldFocusError:!0};function I6(e={}){let t={...M6,...e},r={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},i=Xr(t.defaultValues)||{},o=t.shouldUnregister?{}:Xr(i),a={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,c=0;const u={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={watch:Wl(),array:Wl(),state:Wl()},m=gp(t.mode),v=gp(t.reValidateMode),x=t.criteriaMode===Rt.all,w=S=>M=>{clearTimeout(c),c=window.setTimeout(S,M)},C=async()=>{if(u.isValid){const S=t.resolver?Et((await P()).errors):await k(n,!0);S!==r.isValid&&(r.isValid=S,f.state.next({isValid:S}))}},g=S=>u.isValidating&&S!==r.isValidating&&f.state.next({isValidating:S}),d=(S,M=[],L,N,V=!0,A=!0)=>{if(N&&L){if(a.action=!0,A&&Array.isArray(Z(n,S))){const G=L(Z(n,S),N.argA,N.argB);V&&Ce(n,S,G)}if(A&&Array.isArray(Z(r.errors,S))){const G=L(Z(r.errors,S),N.argA,N.argB);V&&Ce(r.errors,S,G),D6(r.errors,S)}if(u.touchedFields&&A&&Array.isArray(Z(r.touchedFields,S))){const G=L(Z(r.touchedFields,S),N.argA,N.argB);V&&Ce(r.touchedFields,S,G)}u.dirtyFields&&(r.dirtyFields=Yl(i,o)),f.state.next({name:S,isDirty:z(S,M),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ce(o,S,M)},h=(S,M)=>{Ce(r.errors,S,M),f.state.next({errors:r.errors})},y=(S,M,L,N)=>{const V=Z(n,S);if(V){const A=Z(o,S,je(L)?Z(i,S):L);je(A)||N&&N.defaultChecked||M?Ce(o,S,M?A:ql(V._f)):Q(S,A),a.mount&&C()}},b=(S,M,L,N,V)=>{let A=!1,G=!1;const he={name:S};if((!L||N)&&(u.isDirty&&(G=r.isDirty,r.isDirty=he.isDirty=z(),A=G!==he.isDirty),u.dirtyFields)){G=Z(r.dirtyFields,S);const ne=$n(Z(i,S),M);ne?Ke(r.dirtyFields,S):Ce(r.dirtyFields,S,!0),he.dirtyFields=r.dirtyFields,A=A||G!==!ne}if(L){const ne=Z(r.touchedFields,S);ne||(Ce(r.touchedFields,S,L),he.touchedFields=r.touchedFields,A=A||u.touchedFields&&ne!==L)}return A&&V&&f.state.next(he),A?he:{}},_=(S,M,L,N)=>{const V=Z(r.errors,S),A=u.isValid&&Wn(M)&&r.isValid!==M;if(e.delayError&&L?(l=w(()=>h(S,L)),l(e.delayError)):(clearTimeout(c),l=null,L?Ce(r.errors,S,L):Ke(r.errors,S)),(L?!$n(V,L):V)||!Et(N)||A){const G={...N,...A&&Wn(M)?{isValid:M}:{},errors:r.errors,name:S};r={...r,...G},f.state.next(G)}g(!1)},P=async S=>await t.resolver(o,t.context,_6(S||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation)),I=async S=>{const{errors:M}=await P();if(S)for(const L of S){const N=Z(M,L);N?Ce(r.errors,L,N):Ke(r.errors,L)}else r.errors=M;return M},k=async(S,M,L={valid:!0})=>{for(const N in S){const V=S[N];if(V){const{_f:A,...G}=V;if(A){const he=s.array.has(A.name),ne=await mp(V,Z(o,A.name),x,t.shouldUseNativeValidation,he);if(ne[A.name]&&(L.valid=!1,M))break;!M&&(Z(ne,A.name)?he?E6(r.errors,ne,A.name):Ce(r.errors,A.name,ne[A.name]):Ke(r.errors,A.name))}G&&await k(G,M,L)}}return L.valid},B=()=>{for(const S of s.unMount){const M=Z(n,S);M&&(M._f.refs?M._f.refs.every(L=>!Gl(L)):!Gl(M._f.ref))&&q(S)}s.unMount=new Set},z=(S,M)=>(S&&M&&Ce(o,S,M),!$n(Y(),i)),R=(S,M,L)=>x6(S,s,{...a.mount?o:je(M)?i:Gt(S)?{[S]:M}:M},L),j=S=>Mo(Z(a.mount?o:i,S,e.shouldUnregister?Z(i,S,[]):[])),Q=(S,M,L={})=>{const N=Z(n,S);let V=M;if(N){const A=N._f;A&&(!A.disabled&&Ce(o,S,a1(M,A)),V=wu&&Su(A.ref)&&Je(M)?"":M,n1(A.ref)?[...A.ref.options].forEach(G=>G.selected=V.includes(G.value)):A.refs?Do(A.ref)?A.refs.length>1?A.refs.forEach(G=>(!G.defaultChecked||!G.disabled)&&(G.checked=Array.isArray(V)?!!V.find(he=>he===G.value):V===G.value)):A.refs[0]&&(A.refs[0].checked=!!V):A.refs.forEach(G=>G.checked=G.value===V):ef(A.ref)?A.ref.value="":(A.ref.value=V,A.ref.type||f.watch.next({name:S})))}(L.shouldDirty||L.shouldTouch)&&b(S,V,L.shouldTouch,L.shouldDirty,!0),L.shouldValidate&&F(S)},J=(S,M,L)=>{for(const N in M){const V=M[N],A=`${S}.${N}`,G=Z(n,A);(s.array.has(S)||!uo(V)||G&&!G._f)&&!Nn(V)?J(A,V,L):Q(A,V,L)}},se=(S,M,L={})=>{const N=Z(n,S),V=s.array.has(S),A=Xr(M);Ce(o,S,A),V?(f.array.next({name:S,values:o}),(u.isDirty||u.dirtyFields)&&L.shouldDirty&&(r.dirtyFields=Yl(i,o),f.state.next({name:S,dirtyFields:r.dirtyFields,isDirty:z(S,A)}))):N&&!N._f&&!Je(A)?J(S,A,L):Q(S,A,L),up(S,s)&&f.state.next({}),f.watch.next({name:S})},ve=async S=>{const M=S.target;let L=M.name;const N=Z(n,L),V=()=>M.type?ql(N._f):h6(S);if(N){let A,G;const he=V(),ne=S.type===cp.BLUR||S.type===cp.FOCUS_OUT,wn=!O6(N._f)&&!t.resolver&&!Z(r.errors,L)&&!N._f.deps||P6(ne,Z(r.touchedFields,L),r.isSubmitted,v,m),Zt=up(L,s,ne);Ce(o,L,he),ne?(N._f.onBlur&&N._f.onBlur(S),l&&l(0)):N._f.onChange&&N._f.onChange(S);const Qe=b(L,he,ne,!1),te=!Et(Qe)||Zt;if(!ne&&f.watch.next({name:L,type:S.type}),wn)return u.isValid&&C(),te&&f.state.next({name:L,...Zt?{}:Qe});if(!ne&&Zt&&f.state.next({}),g(!0),t.resolver){const{errors:be}=await P([L]),pi=vp(r.errors,n,L),xn=vp(be,n,pi.name||L);A=xn.error,L=xn.name,G=Et(be)}else A=(await mp(N,Z(o,L),x,t.shouldUseNativeValidation))[L],A?G=!1:u.isValid&&(G=await k(n,!0));!uo(he)||V()===he?(N._f.deps&&F(N._f.deps),_(L,G,A,Qe)):g(!1)}},F=async(S,M={})=>{let L,N;const V=Vl(S);if(g(!0),t.resolver){const A=await I(je(S)?S:V);L=Et(A),N=S?!V.some(G=>Z(A,G)):L}else S?(N=(await Promise.all(V.map(async A=>{const G=Z(n,A);return await k(G&&G._f?{[A]:G}:G)}))).every(Boolean),!(!N&&!r.isValid)&&C()):N=L=await k(n);return f.state.next({...!Gt(S)||u.isValid&&L!==r.isValid?{}:{name:S},...t.resolver||!S?{isValid:L}:{},errors:r.errors,isValidating:!1}),M.shouldFocus&&!N&&xu(n,A=>A&&Z(r.errors,A),S?V:s.mount),N},Y=S=>{const M={...i,...a.mount?o:{}};return je(S)?M:Gt(S)?Z(M,S):S.map(L=>Z(M,L))},K=(S,M)=>({invalid:!!Z((M||r).errors,S),isDirty:!!Z((M||r).dirtyFields,S),isTouched:!!Z((M||r).touchedFields,S),error:Z((M||r).errors,S)}),ce=S=>{S?Vl(S).forEach(M=>Ke(r.errors,M)):r.errors={},f.state.next({errors:r.errors})},H=(S,M,L)=>{const N=(Z(n,S,{_f:{}})._f||{}).ref;Ce(r.errors,S,{...M,ref:N}),f.state.next({name:S,errors:r.errors,isValid:!1}),L&&L.shouldFocus&&N&&N.focus&&N.focus()},W=(S,M)=>rs(S)?f.watch.subscribe({next:L=>S(R(void 0,M),L)}):R(S,M,!0),q=(S,M={})=>{for(const L of S?Vl(S):s.mount)s.mount.delete(L),s.array.delete(L),Z(n,L)&&(M.keepValue||(Ke(n,L),Ke(o,L)),!M.keepError&&Ke(r.errors,L),!M.keepDirty&&Ke(r.dirtyFields,L),!M.keepTouched&&Ke(r.touchedFields,L),!t.shouldUnregister&&!M.keepDefaultValue&&Ke(i,L));f.watch.next({}),f.state.next({...r,...M.keepDirty?{isDirty:z()}:{}}),!M.keepIsValid&&C()},ee=(S,M={})=>{let L=Z(n,S);const N=Wn(M.disabled);return Ce(n,S,{...L||{},_f:{...L&&L._f?L._f:{ref:{name:S}},name:S,mount:!0,...M}}),s.mount.add(S),L?N&&Ce(o,S,M.disabled?void 0:Z(o,S,ql(L._f))):y(S,!0,M.value),{...N?{disabled:M.disabled}:{},...t.shouldUseNativeValidation?{required:!!M.required,min:Ei(M.min),max:Ei(M.max),minLength:Ei(M.minLength),maxLength:Ei(M.maxLength),pattern:Ei(M.pattern)}:{},name:S,onChange:ve,onBlur:ve,ref:V=>{if(V){ee(S,M),L=Z(n,S);const A=je(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,G=k6(A),he=L._f.refs||[];if(G?he.find(ne=>ne===A):A===L._f.ref)return;Ce(n,S,{_f:{...L._f,...G?{refs:[...he.filter(Gl),A,...Array.isArray(Z(i,S))?[{}]:[]],ref:{type:A.type,name:S}}:{ref:A}}}),y(S,!1,void 0,A)}else L=Z(n,S,{}),L._f&&(L._f.mount=!1),(t.shouldUnregister||M.shouldUnregister)&&!(g6(s.array,S)&&a.action)&&s.unMount.add(S)}}},O=()=>t.shouldFocusError&&xu(n,S=>S&&Z(r.errors,S),s.mount),oe=(S,M)=>async L=>{L&&(L.preventDefault&&L.preventDefault(),L.persist&&L.persist());let N=!0,V=Xr(o);f.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:A,values:G}=await P();r.errors=A,V=G}else await k(n);Et(r.errors)?(f.state.next({errors:{},isSubmitting:!0}),await S(V,L)):(M&&await M({...r.errors},L),O())}catch(A){throw N=!1,A}finally{r.isSubmitted=!0,f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Et(r.errors)&&N,submitCount:r.submitCount+1,errors:r.errors})}},U=(S,M={})=>{Z(n,S)&&(je(M.defaultValue)?se(S,Z(i,S)):(se(S,M.defaultValue),Ce(i,S,M.defaultValue)),M.keepTouched||Ke(r.touchedFields,S),M.keepDirty||(Ke(r.dirtyFields,S),r.isDirty=M.defaultValue?z(S,Z(i,S)):z()),M.keepError||(Ke(r.errors,S),u.isValid&&C()),f.state.next({...r}))},Se=(S,M={})=>{const L=S||i,N=Xr(L),V=S&&!Et(S)?N:i;if(M.keepDefaultValues||(i=L),!M.keepValues){if(M.keepDirtyValues)for(const A of s.mount)Z(r.dirtyFields,A)?Ce(V,A,Z(o,A)):se(A,Z(V,A));else{if(wu&&je(S))for(const A of s.mount){const G=Z(n,A);if(G&&G._f){const he=Array.isArray(G._f.refs)?G._f.refs[0]:G._f.ref;if(Su(he)){const ne=he.closest("form");if(ne){ne.reset();break}}}}n={}}o=e.shouldUnregister?M.keepDefaultValues?Xr(i):{}:N,f.array.next({values:V}),f.watch.next({values:V})}s={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!u.isValid||!!M.keepIsValid,a.watch=!!e.shouldUnregister,f.state.next({submitCount:M.keepSubmitCount?r.submitCount:0,isDirty:M.keepDirty||M.keepDirtyValues?r.isDirty:!!(M.keepDefaultValues&&!$n(S,i)),isSubmitted:M.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:M.keepDirty||M.keepDirtyValues?r.dirtyFields:M.keepDefaultValues&&S?Yl(i,S):{},touchedFields:M.keepTouched?r.touchedFields:{},errors:M.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:ee,unregister:q,getFieldState:K,_executeSchema:P,_focusError:O,_getWatch:R,_getDirty:z,_updateValid:C,_removeUnmounted:B,_updateFieldArray:d,_getFieldArray:j,_subjects:f,_proxyFormState:u,get _fields(){return n},get _formValues(){return o},get _stateFlags(){return a},set _stateFlags(S){a=S},get _defaultValues(){return i},get _names(){return s},set _names(S){s=S},get _formState(){return r},set _formState(S){r=S},get _options(){return t},set _options(S){t={...t,...S}}},trigger:F,register:ee,handleSubmit:oe,watch:W,setValue:se,getValues:Y,reset:(S,M)=>Se(rs(S)?S(o):S,M),resetField:U,clearErrors:ce,unregister:q,setError:H,setFocus:(S,M={})=>{const L=Z(n,S),N=L&&L._f;if(N){const V=N.refs?N.refs[0]:N.ref;V.focus&&(V.focus(),M.shouldSelect&&V.select())}},getFieldState:K}}function rf(e={}){const t=ie.useRef(),[r,n]=ie.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...I6(e),formState:r});const i=t.current.control;return i._options=e,w6({subject:i._subjects.state,callback:ie.useCallback(o=>{y6(o,i._proxyFormState,!0)&&(i._formState={...i._formState,...o},n({...i._formState}))},[i])}),ie.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),ie.useEffect(()=>{r.submitCount&&i._focusError()},[i,r.submitCount]),t.current.formState=v6(r,i),t.current}const z6=T.div`
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
`;function nf(){return D(z6,{children:[p("div",{}),p("div",{}),p("div",{})]})}function L6(e){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"}}]})(e)}const A6=T.section`
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
`,R6=T.h2`
    font-size: 2.2rem;
    letter-spacing: 2px;
    line-height: 2.2rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${e=>e.color==="dark"?"white":"rgb(209, 28, 28)"};
    text-align: center;

`,N6=T.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width:769px) {
        padding: 1rem;
        gap: 2rem;
        grid-template-columns: 1fr 1fr;
    }
`,$6=T.div`
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
`,j6=T.form`
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
`,aa=T.p`
    color: #f44336;
    margin-left: 0.25rem;
`,F6=T.div`
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
    
`,H6=T.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
`,B6=T.div`
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
`,U6=[{id:"1",classIcon:"bx bxl-whatsapp",redSocial:"Whatsapp",ruta:"https://wa.me/51940970193"},{id:"2",classIcon:"bx bxl-github",redSocial:"Github",ruta:"https://github.com/Saul-Huarcaya"},{id:"3",classIcon:"bx bxl-linkedin",redSocial:"LinkedIn",ruta:"https://linkedin.com/in/saul-huarcaya-quispe-b1504322b"}];function V6(){var l,c,u,f;E.exports.useEffect(()=>{const m=Qt({origin:"left",duration:2e3,delay:0,reset:!0});m.reveal(".title",{distance:"100px",duration:1500}),m.reveal(".subtitle",{distance:"100px"}),m.reveal(".nombre",{distance:"120px"}),m.reveal(".email",{distance:"240px"}),m.reveal(".comentario",{distance:"260px"}),m.reveal(".boton",{distance:"300px"}),m.reveal(".card",{distance:"200px"})},[]);const{register:e,handleSubmit:t,formState:{errors:r},reset:n}=rf(),[i,o]=E.exports.useState(!1),{theme:a}=E.exports.useContext(wt);return D(A6,{id:"contact",color:a,children:[p(R6,{className:"title",color:a,children:"Contacto"}),D(N6,{className:"container",children:[D($6,{className:"container",color:a,children:[p("h3",{className:"subtitle",children:"Enviame un mensaje"}),D(j6,{onSubmit:t(m=>{m&&(o(!0),fetch("https://formsubmit.co/ajax/shuarcaya99@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...m})}).then(v=>{v.ok?v.json():new Promise.reject(v)}).then(v=>{o(!1),setTimeout(()=>{n()},1e3)}))}),color:a,children:[((l=r.nombre)==null?void 0:l.type)==="required"&&p(aa,{children:"nombre obligatorio"}),p("input",{type:"text",placeholder:"Nombre",name:"nombre",className:"nombre",autoComplete:"off",...e("nombre",{required:!0})}),((c=r.email)==null?void 0:c.type)==="required"&&p(aa,{children:"Email obligatorio"}),((u=r.email)==null?void 0:u.type)==="pattern"&&p(aa,{children:"El email es incorrecto"}),p("input",{type:"text",name:"email",placeholder:"ejemplo@gmail.com",className:"email",autoComplete:"off",...e("email",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/})}),((f=r.comentario)==null?void 0:f.type)==="maxLength"&&p(aa,{children:"maximo 255 caracteres"}),p("textarea",{cols:"30",rows:"8",name:"comentario",placeholder:"Escribe tu comentario",className:"comentario",...e("comentario",{maxLength:255})}),p("input",{className:"boton",type:"submit"})]}),i&&p("div",{className:"container-loding-thema",children:p(nf,{})})]}),D(F6,{color:a,children:[p("h3",{className:"subtitle",children:"Redes Sociales"}),p(H6,{children:U6.map(m=>D(B6,{color:a,className:"card",children:[p("div",{children:p("i",{className:m.classIcon})}),p("h4",{children:m.redSocial}),p("a",{href:m.ruta,target:"_blank",children:p("span",{children:p(L6,{})})})]},m.id))})]})]})]})}const W6=T.footer`
    background-color: black;
    color: white;
`,G6=T.div`
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`,Y6=T.h4`
    font-size: calc(1rem + 1vh);
    @media screen and (min-width:768px) {
        font-size: calc(1.8rem + 1vh);
    }
`;T.div`
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
`;const q6=T.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;  
`;function X6(){return p(W6,{children:D(G6,{className:"container",children:[p(Y6,{children:"Software Developer 😄"}),p(q6,{children:"Creado por Saul Huarcaya (2023) ©"})]})})}const Q6=T.div`
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
`;function K6(){const[e,t]=E.exports.useState(!1);return E.exports.useEffect(()=>{const n=()=>{(window.pageXOffset||document.documentElement.scrollTop)>300?t(!0):t(!1)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),p(ur,{children:e&&p(Q6,{onClick:()=>{window.scrollTo(0,0)},children:p(z3,{})})})}function Z6(){return D(Vd,{children:[p(U4,{}),p(Ex,{}),p(Ux,{}),p(p6,{}),p(V6,{}),p(X6,{}),p(K6,{})]})}function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},os.apply(this,arguments)}var Cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cr||(Cr={}));const yp="popstate";function J6(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=gn(i.location.hash.substr(1));return bu("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof o=="string"?o:fo(o))}function n(i,o){eS(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return nS(t,r,n,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eS(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tS(){return Math.random().toString(36).substr(2,8)}function wp(e){return{usr:e.state,key:e.key}}function bu(e,t,r,n){return r===void 0&&(r=null),os({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:r,key:t&&t.key||n||tS()})}function fo(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function gn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function rS(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,r=typeof e=="string"?e:fo(e);return Ne(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}function nS(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,s=Cr.Pop,l=null;function c(){s=Cr.Pop,l&&l({action:s,location:m.location})}function u(v,x){s=Cr.Push;let w=bu(m.location,v,x);r&&r(w,v);let C=wp(w),g=m.createHref(w);try{a.pushState(C,"",g)}catch{i.location.assign(g)}o&&l&&l({action:s,location:m.location})}function f(v,x){s=Cr.Replace;let w=bu(m.location,v,x);r&&r(w,v);let C=wp(w),g=m.createHref(w);a.replaceState(C,"",g),o&&l&&l({action:s,location:m.location})}let m={get action(){return s},get location(){return e(i,a)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yp,c),l=v,()=>{i.removeEventListener(yp,c),l=null}},createHref(v){return t(i,v)},encodeLocation(v){let x=rS(typeof v=="string"?v:fo(v));return{pathname:x.pathname,search:x.search,hash:x.hash}},push:u,replace:f,go(v){return a.go(v)}};return m}var xp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xp||(xp={}));function iS(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?gn(t):t,i=l1(n.pathname||"/",r);if(i==null)return null;let o=s1(e);oS(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=hS(o[s],vS(i));return a}function s1(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((i,o)=>{let a={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(Ne(a.relativePath.startsWith(n),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(n.length));let s=Nr([n,a.relativePath]),l=r.concat(a);i.children&&i.children.length>0&&(Ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),s1(i.children,t,l,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:fS(s,i.index),routesMeta:l})}),t}function oS(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:pS(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const aS=/^:\w+$/,sS=3,lS=2,cS=1,uS=10,dS=-2,Sp=e=>e==="*";function fS(e,t){let r=e.split("/"),n=r.length;return r.some(Sp)&&(n+=dS),t&&(n+=lS),r.filter(i=>!Sp(i)).reduce((i,o)=>i+(aS.test(o)?sS:o===""?cS:uS),n)}function pS(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function hS(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],l=a===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=mS({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(n,u.params);let f=s.route;o.push({params:n,pathname:Nr([i,u.pathname]),pathnameBase:SS(Nr([i,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(i=Nr([i,u.pathnameBase]))}return o}function mS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=gS(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((c,u,f)=>{if(u==="*"){let m=s[f]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return c[u]=yS(s[f]||"",u),c},{}),pathname:o,pathnameBase:a,pattern:e}}function gS(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),of(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(n.push(s),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function vS(e){try{return decodeURI(e)}catch(t){return of(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yS(e,t){try{return decodeURIComponent(e)}catch(r){return of(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function l1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function of(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wS(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?gn(e):e;return{pathname:r?r.startsWith("/")?r:xS(r,t):t,search:bS(n),hash:ES(i)}}function xS(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Xl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function u1(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=gn(e):(i=os({},e),Ne(!i.pathname||!i.pathname.includes("?"),Xl("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Xl("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Xl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(n||a==null)s=r;else{let f=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}s=f>=0?t[f]:"/"}let l=wS(i,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Nr=e=>e.join("/").replace(/\/\/+/g,"/"),SS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ES=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class CS{constructor(t,r,n,i){i===void 0&&(i=!1),this.status=t,this.statusText=r||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function TS(e){return e instanceof CS}const kS=["post","put","patch","delete"];[...kS];function Eu(){return Eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Eu.apply(this,arguments)}function _S(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const OS=typeof Object.is=="function"?Object.is:_S,{useState:PS,useEffect:DS,useLayoutEffect:MS,useDebugValue:IS}=mc;function zS(e,t,r){const n=t(),[{inst:i},o]=PS({inst:{value:n,getSnapshot:t}});return MS(()=>{i.value=n,i.getSnapshot=t,Ql(i)&&o({inst:i})},[e,n,t]),DS(()=>(Ql(i)&&o({inst:i}),e(()=>{Ql(i)&&o({inst:i})})),[e]),IS(n),n}function Ql(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!OS(r,n)}catch{return!0}}function LS(e,t,r){return t()}const AS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RS=!AS,NS=RS?LS:zS;"useSyncExternalStore"in mc&&(e=>e.useSyncExternalStore)(mc);const $S=E.exports.createContext(null),jS=E.exports.createContext(null),d1=E.exports.createContext(null),Vs=E.exports.createContext(null),Ws=E.exports.createContext(null),ci=E.exports.createContext({outlet:null,matches:[]}),f1=E.exports.createContext(null);function FS(e,t){let{relative:r}=t===void 0?{}:t;Io()||Ne(!1);let{basename:n,navigator:i}=E.exports.useContext(Vs),{hash:o,pathname:a,search:s}=p1(e,{relative:r}),l=a;return n!=="/"&&(l=a==="/"?n:Nr([n,a])),i.createHref({pathname:l,search:s,hash:o})}function Io(){return E.exports.useContext(Ws)!=null}function Gs(){return Io()||Ne(!1),E.exports.useContext(Ws).location}function vn(){Io()||Ne(!1);let{basename:e,navigator:t}=E.exports.useContext(Vs),{matches:r}=E.exports.useContext(ci),{pathname:n}=Gs(),i=JSON.stringify(c1(r).map(s=>s.pathnameBase)),o=E.exports.useRef(!1);return E.exports.useEffect(()=>{o.current=!0}),E.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let c=u1(s,JSON.parse(i),n,l.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Nr([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state,l)},[e,t,i,n])}function HS(){let{matches:e}=E.exports.useContext(ci),t=e[e.length-1];return t?t.params:{}}function p1(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=E.exports.useContext(ci),{pathname:i}=Gs(),o=JSON.stringify(c1(n).map(a=>a.pathnameBase));return E.exports.useMemo(()=>u1(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function BS(e,t){Io()||Ne(!1);let{navigator:r}=E.exports.useContext(Vs),n=E.exports.useContext(d1),{matches:i}=E.exports.useContext(ci),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Gs(),c;if(t){var u;let w=typeof t=="string"?gn(t):t;s==="/"||((u=w.pathname)==null?void 0:u.startsWith(s))||Ne(!1),c=w}else c=l;let f=c.pathname||"/",m=s==="/"?f:f.slice(s.length)||"/",v=iS(e,{pathname:m}),x=GS(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Nr([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Nr([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n||void 0);return t&&x?E.exports.createElement(Ws.Provider,{value:{location:Eu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Cr.Pop}},x):x}function US(){let e=qS(),t=TS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n};return E.exports.createElement(E.exports.Fragment,null,E.exports.createElement("h2",null,"Unhandled Thrown Error!"),E.exports.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.exports.createElement("pre",{style:i},r):null,E.exports.createElement("p",null,"💿 Hey developer 👋"),E.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.exports.createElement("code",{style:o},"errorElement")," props on ",E.exports.createElement("code",{style:o},"<Route>")))}class VS extends E.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?E.exports.createElement(f1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function WS(e){let{routeContext:t,match:r,children:n}=e,i=E.exports.useContext($S);return i&&r.route.errorElement&&(i._deepestRenderedBoundaryId=r.route.id),E.exports.createElement(ci.Provider,{value:t},n)}function GS(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,i=r==null?void 0:r.errors;if(i!=null){let o=n.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Ne(!1),n=n.slice(0,Math.min(n.length,o+1))}return n.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,c=r?a.route.errorElement||E.exports.createElement(US,null):null,u=()=>E.exports.createElement(WS,{match:a,routeContext:{outlet:o,matches:t.concat(n.slice(0,s+1))}},l?c:a.route.element!==void 0?a.route.element:o);return r&&(a.route.errorElement||s===0)?E.exports.createElement(VS,{location:r.location,component:c,error:l,children:u()}):u()},null)}var bp;(function(e){e.UseRevalidator="useRevalidator"})(bp||(bp={}));var Cu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Cu||(Cu={}));function YS(e){let t=E.exports.useContext(d1);return t||Ne(!1),t}function qS(){var e;let t=E.exports.useContext(f1),r=YS(Cu.UseRouteError),n=E.exports.useContext(ci),i=n.matches[n.matches.length-1];return t||(n||Ne(!1),i.route.id||Ne(!1),(e=r.errors)==null?void 0:e[i.route.id])}function It(e){Ne(!1)}function XS(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Cr.Pop,navigator:o,static:a=!1}=e;Io()&&Ne(!1);let s=t.replace(/^\/*/,"/"),l=E.exports.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof n=="string"&&(n=gn(n));let{pathname:c="/",search:u="",hash:f="",state:m=null,key:v="default"}=n,x=E.exports.useMemo(()=>{let w=l1(c,s);return w==null?null:{pathname:w,search:u,hash:f,state:m,key:v}},[s,c,u,f,m,v]);return x==null?null:E.exports.createElement(Vs.Provider,{value:l},E.exports.createElement(Ws.Provider,{children:r,value:{location:x,navigationType:i}}))}function QS(e){let{children:t,location:r}=e,n=E.exports.useContext(jS),i=n&&!t?n.router.routes:Tu(t);return BS(i,r)}var Ep;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ep||(Ep={}));new Promise(()=>{});function Tu(e,t){t===void 0&&(t=[]);let r=[];return E.exports.Children.forEach(e,(n,i)=>{if(!E.exports.isValidElement(n))return;if(n.type===E.exports.Fragment){r.push.apply(r,Tu(n.props.children,t));return}n.type!==It&&Ne(!1),!n.props.index||!n.props.children||Ne(!1);let o=[...t,i],a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,hasErrorBoundary:n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle};n.props.children&&(a.children=Tu(n.props.children,o)),r.push(a)}),r}function ku(){return ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ku.apply(this,arguments)}function KS(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function ZS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function JS(e,t){return e.button===0&&(!t||t==="_self")&&!ZS(e)}const e5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function t5(e){let{basename:t,children:r,window:n}=e,i=E.exports.useRef();i.current==null&&(i.current=J6({window:n,v5Compat:!0}));let o=i.current,[a,s]=E.exports.useState({action:o.action,location:o.location});return E.exports.useLayoutEffect(()=>o.listen(s),[o]),E.exports.createElement(XS,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:o})}const r5=E.exports.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:c,preventScrollReset:u}=t,f=KS(t,e5),m=FS(c,{relative:i}),v=n5(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:i});function x(w){n&&n(w),w.defaultPrevented||v(w)}return E.exports.createElement("a",ku({},f,{href:m,onClick:o?n:x,ref:r,target:l}))});var Cp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Cp||(Cp={}));var Tp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tp||(Tp={}));function n5(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=vn(),l=Gs(),c=p1(e,{relative:a});return E.exports.useCallback(u=>{if(JS(u,r)){u.preventDefault();let f=n!==void 0?n:fo(l)===fo(c);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,c,n,i,r,e,o,a])}function i5(){return p("div",{className:"container error404",children:D("div",{className:"descriptions",children:[p("p",{className:"title_404",children:"404"}),p("p",{className:"not_found",children:"Page not found"}),p("p",{className:"description_error",children:"The resource requested could not be found on this Server!"}),p(r5,{to:"/",className:"btn_home",children:"Home"})]})})}const Gn={ADD:"ADD",UPDATE:"UPDATE",DELETE:"DELETE"},o5=(e,t)=>{switch(t.type){case Gn.ADD:return[...e,t.payload];case Gn.DELETE:return e.filter(r=>r.id!==t.payload);case Gn.UPDATE:return e.map(r=>r.id===t.payload.id?{...e,id:t.payload.id,nombre:t.payload.nombre,apellido:t.payload.apellido,edad:t.payload.edad}:r);default:return e}},zo=E.exports.createContext(),a5=[{id:1,nombre:"Carlos Raul",apellido:"Perez Sevillano",edad:12},{id:2,nombre:"Kevin Manuel",apellido:"Velasquez Rojas",edad:18},{id:3,nombre:"Samuel",apellido:"Castillo Ordoñez",edad:17},{id:4,nombre:"Camila Veronica",apellido:"Hurtado Serna",edad:21},{id:5,nombre:"Viviana Sofia",apellido:"Cornejo de Torre",edad:18}],s5=({children:e})=>{const[t,r]=E.exports.useReducer(o5,a5);return p(zo.Provider,{value:{data:t,dispatch:r},children:e})},l5=T.h2`
    color: orange;
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`,c5=T.form`
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
`,Wr=T.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`,u5=T.input`
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
`;function d5({id:e,setModal:t}){var u,f,m,v,x,w,C;const{data:r,dispatch:n}=E.exports.useContext(zo),i=r.find(g=>g.id===e),{register:o,formState:{errors:a},reset:s,handleSubmit:l}=rf({defaultValues:i});return D(ur,{children:[p(l5,{children:"Actualizar"}),D(c5,{onSubmit:l(g=>{g&&(n({type:Gn.UPDATE,payload:g}),t(!1),s())}),children:[p("input",{type:"text",autoComplete:"true",placeholder:"Nombre",...o("nombre",{required:!0,maxLength:100}),name:"nombre"}),((u=a.nombre)==null?void 0:u.type)==="required"&&p(Wr,{children:"El dato es obligatorio"}),((f=a.nombre)==null?void 0:f.type)==="maxLength"&&p(Wr,{children:"El nombre es demasiado largo"}),p("input",{type:"text",placeholder:"Apellido",autoComplete:"true",...o("apellido",{required:!0,maxLength:100}),name:"apellido"}),((m=a.apellido)==null?void 0:m.type)=="required"&&p(Wr,{children:"El apellido es obligatorio"}),((v=a.apellido)==null?void 0:v.type)==="maxLength"&&p(Wr,{children:"El apellido es demasiado largo"}),p("input",{type:"number",placeholder:"Edad",autoComplete:"true",name:"edad",...o("edad",{required:!0,min:12,max:85})}),((x=a.edad)==null?void 0:x.type)==="required"&&p(Wr,{children:"La edad es obligatorio"}),((w=a.edad)==null?void 0:w.type)==="min"&&p(Wr,{children:"La edad minima 12"}),((C=a.edad)==null?void 0:C.type)==="max"&&p(Wr,{children:"La edad maxima es 85"}),p(u5,{type:"submit",value:"Guardar"})]})]})}const f5=T.div`
    padding-top: 28px;
    display: flex;
    flex-direction: column;
`,p5=T.div`
    background-color: rgb(0, 0, 0,0.9);
    padding: 1rem 0.5rem;
    color: white;
    span{
        color: red;
    }
`,h5=T.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
    margin-top: 0.5rem;
`,kp=T.button`
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
`;function m5({setModal:e,id:t}){const{data:r,dispatch:n}=E.exports.useContext(zo),i=r.find(a=>a.id==t),o=()=>{n({type:Gn.DELETE,payload:i.id}),e(!1)};return D(f5,{children:[p(p5,{children:D("p",{children:["¿ Estas seguro de eliminar al usuario",D("span",{children:[" ",i.nombre," ",i.apellido]})," ?"]})}),D(h5,{children:[p(kp,{$yes:!0,onClick:o,children:"Si"}),p(kp,{onClick:()=>e(!1),children:"No"})]})]})}const g5=T.div`
    width: 100%;
    overflow: auto;
`,v5=T.table`
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
`,_p=T.div`
    display: inline-block;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0px 5px;
    color: ${e=>e.$update?"orange":"red"};
    &:hover{
        color: ${e=>e.$update?"rgb(255, 182, 46)":"rgb(255, 29, 29)"};
    }
`;function y5(){const{data:e}=E.exports.useContext(zo),[t,r]=E.exports.useState(),[n,i]=E.exports.useState(),[o,a]=E.exports.useState(!1),[s,l]=E.exports.useState(!1);console.log(e);const c=f=>{r(f),a(!0)},u=f=>{i(f),l(!0)};return D(g5,{children:[D(v5,{children:[p("thead",{children:D("tr",{children:[p("th",{children:"Nombre"}),p("th",{children:"Apellido"}),p("th",{children:"Edad"}),p("th",{children:"Opciones"})]})}),p("tbody",{children:e.length===0?p("tr",{children:p("td",{colSpan:4,children:"Sin datos"})}):e.map(f=>D("tr",{children:[p("td",{children:f.nombre}),p("td",{children:f.apellido}),p("td",{children:f.edad}),D("td",{children:[p(_p,{$update:!0,children:p(kx,{onClick:()=>c(f.id)})}),p(_p,{children:p(Ig,{onClick:()=>u(f.id)})})]})]},f.id))})]}),o&&p(co,{Modal:o,setModal:a,children:p(d5,{id:t,setModal:a})}),s&&p(co,{Modal:s,setModal:l,children:p(m5,{id:n,setModal:l})})]})}const w5=T.h2`
    color: rgb(1, 158, 1);
    font-size: 1.6rem;
    font-family: fantasy;
    text-align: center;
    padding: 0.25rem;
    margin-bottom: 0.5rem;
`,x5=T.form`
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
`,Gr=T.p`
    color: red;
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    padding-top: 0.25rem;
`,S5=T.input`
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
`;function b5({setModalAdd:e}){var s,l,c,u,f,m,v;const{register:t,handleSubmit:r,reset:n,formState:{errors:i}}=rf(),{dispatch:o}=E.exports.useContext(zo);return D(ur,{children:[p(w5,{children:"Agregar"}),D(x5,{onSubmit:r(x=>{x&&(o({type:Gn.ADD,payload:{id:Date.now(),nombre:x.nombre,apellido:x.apellido,edad:x.edad}}),n(),e(!1))}),children:[p("input",{type:"text",placeholder:"Nombre",autoComplete:"true",...t("nombre",{required:!0,maxLength:100})}),((s=i.nombre)==null?void 0:s.type)==="required"&&p(Gr,{children:"El dato es obligatorio"}),((l=i.nombre)==null?void 0:l.type)==="maxLength"&&p(Gr,{children:"El nombre es demasiado largo"}),p("input",{type:"text",placeholder:"Apellido",autoComplete:"true",...t("apellido",{required:!0,maxLength:100})}),((c=i.apellido)==null?void 0:c.type)=="required"&&p(Gr,{children:"El apellido es obligatorio"}),((u=i.apellido)==null?void 0:u.type)==="maxLength"&&p(Gr,{children:"El apellido es demasiado largo"}),p("input",{type:"number",placeholder:"Edad",autoComplete:"true",...t("edad",{required:!0,min:12,max:85})}),((f=i.edad)==null?void 0:f.type)==="required"&&p(Gr,{children:"La edad es obligatorio"}),((m=i.edad)==null?void 0:m.type)==="min"&&p(Gr,{children:"La edad minima 12"}),((v=i.edad)==null?void 0:v.type)==="max"&&p(Gr,{children:"La edad maxima es 85"}),p(S5,{type:"submit",value:"Enviar"})]})]})}const E5=T.div`
    width: 100%;
    padding-top: 1rem;
    display: flex;
`,C5=T.div`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,T5=T.h1`
    color: #1778F2;
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    
    @media screen and (max-width:375px) {
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
`,k5=T.button`
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
`;function _5(){const[e,t]=E.exports.useState(!1);return p(s5,{children:p(E5,{children:D(C5,{className:"container",children:[p(T5,{children:"CRUD useContext +  useReducer + useForm"}),p(k5,{onClick:()=>t(!0),children:"Agregar"}),e&&p(co,{Modal:e,setModal:t,children:p(b5,{setModalAdd:t})}),p(y5,{})]})})})}const O5=T.article`
    background-color: ${e=>e.color=="dark"?"black":"white"};
    color: ${e=>e.color=="dark"?"white":"black"};
    border-radius: 6px;
    box-shadow: 0px 0px 10px 2px ${e=>e.color=="dark"?"transparent":"gray"};
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    overflow: hidden;
    &:hover{
        box-shadow: 0px 0px 14px 2px ${e=>e.color=="dark"?"white":"black"};
    }
`,P5=T.div`
    width: 100%;
    height: 140px;
    object-fit: cover;
    overflow: hidden;
    img{
        width: 100%;
        object-fit: cover;
        height: 140px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
`,D5=T.div`
    padding: 0.5rem 1rem ;
`,M5=T.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: fantasy;
`,Kl=T.div`
    display: flex;
    gap: 0.5rem;
`,Zl=T.p`
    font-weight: 600;
`,Jl=T.p`
    flex-wrap: wrap;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
`;function I5({nombre:e,ruta:t,capital:r,poblacion:n,subregion:i}){const{theme:o}=E.exports.useContext(wt),a=vn();return D(O5,{color:o,onClick:()=>a(`/projects/api-countries/${e}`),children:[p(P5,{children:p("img",{src:t,alt:e})}),D(D5,{color:o,children:[p(M5,{children:e}),D(Kl,{children:[p(Zl,{children:"Capital: "}),p(Jl,{children:r?r.join(" "):"No Tiene"})]}),D(Kl,{children:[p(Zl,{children:"Población: "}),p(Jl,{children:n!="0"?n:"-"})]}),D(Kl,{children:[p(Zl,{children:"Subregion: "}),p(Jl,{children:i||"No Tiene"})]})]})]})}const z5=T.div`
    width: 100%;
    color: white;
    background-color: ${e=>e.color=="dark"?"black":"white"};
    color:${e=>e.color=="dark"?"white":"black"};
    box-shadow: 0px 0px 6px 2px gray;
    z-index: 100;

    div{
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h1{
        font-size: 1.5rem;
    }
    button{
        border: none;
        outline: none;
        font-size: 1.5rem;
        padding: 2px;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0px 0px 6px 2px transparent;
        transition: box-shadow 0.3s ease-in;
        background-color: transparent;
    }
    button:hover{
        box-shadow: 0px 0px 6px 2px gray;
    }

    @media screen and (min-width:768px){
        div{
            width: calc(100% - 2rem);
            margin-left: auto;
            margin-right: auto;
        }
    }
`;function h1(){const{theme:e,handleTheme:t}=E.exports.useContext(wt);return p(z5,{color:e,children:D("div",{className:"container",children:[p("h1",{children:"Where in the world?"}),p("button",{onClick:t,color:e,children:"☀️"})]})})}const L5=T.div`
    width: 100%;
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
    div{
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input{
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        width: 140px;
        color: ${e=>e.color=="dark"?"white":"black"};
        background-color: ${e=>e.color=="dark"?"black":"white"};
        box-shadow: 0px 0px 10px 2px ${e=>e.color=="dark"?"transparent":"gray"};
    }
    select{
        padding: 0.25rem 1rem;
        background-color: ${e=>e.color=="dark"?"black":"white"};
        color: ${e=>e.color=="dark"?"white":"black"};
        box-shadow: 0px 0px 10px 2px ${e=>e.color=="dark"?"transparent":"gray"};
    }
    @media screen and (min-width:480px){
        input{

            width: 300px;
        }
    }

    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }


`;function A5({setSearch:e,search:t,setUrl:r,setLoader:n}){const{theme:i}=E.exports.useContext(wt);return p(L5,{color:i,children:D("div",{className:"container",children:[p("input",{type:"text",placeholder:"Buscar País",value:t,onChange:s=>{e(s.target.value)},maxLength:50}),D("select",{name:"paises",onChange:s=>{n(!0),s.target.value==="all"?(r("https://restcountries.com/v3.1/all"),n(!1)):(r(`https://restcountries.com/v3.1/region/${s.target.value}`),n(!1))},children:[p("option",{value:"all",children:"Todos"}),p("option",{value:"Africa",children:"Africa"}),p("option",{value:"Americas",children:"America"}),p("option",{value:"Asia",children:"Asia"}),p("option",{value:"Europe",children:"Europa"}),p("option",{value:"Oceania",children:"Oceania"})]})]})})}const R5=T.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`,N5=T.div`
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
    min-height: 100vh;
    width: 100%;
    padding-top: 6.7rem;
    padding-bottom: 1rem;
`,$5=T.main`  
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

`,j5=T.p`
    color: ${e=>e.color=="dark"?"white":"black"};
`,F5=T.div`
    position: fixed;
    height: 100vh;
    left: calc(50% - 28px);
`,H5=T.div`
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
`;function B5(){const[e,t]=E.exports.useState([]),[r,n]=E.exports.useState("https://restcountries.com/v3.1/all"),[i,o]=E.exports.useState(""),{theme:a}=E.exports.useContext(wt),[s,l]=E.exports.useState(!1);E.exports.useEffect(()=>{(()=>{const f=fetch(r);l(!0),f.then(m=>m.json()).then(m=>{t([...m]),l(!1)}).catch(m=>console.log(m))})()},[r]);let c=[];return i?c=e.filter(u=>u.name.common.toLowerCase().includes(i.toLowerCase())):c=e,p(N5,{color:a,children:D("div",{className:"container",children:[D(R5,{children:[p(h1,{}),p(A5,{setSearch:o,search:i,results:c,setUrl:n,setLoader:l})]}),D($5,{children:[s?p(F5,{children:p(nf,{})}):p(H5,{children:c.map(u=>p(I5,{nombre:u.name.common,ruta:u.flags.svg,capital:u.capital,poblacion:u.population,subregion:u.subregion},u.name.common))}),c.length===0&&i!=""&&D(j5,{color:a,children:["No se encuentra: ",p("mark",{children:i})]})]})]})})}function U5(){return p(Vd,{children:p(B5,{})})}const $t={ADD_PRODUCTO:"ADD_PRODUCTO",REMOVE_PRODUCTO:"REMOVE_PRODUCTO",DECREASE_ONE_PRODUCTO:"DECREASE_ONE_PRODUCTO",REMOVE_TOTAL_PRODUCTOS:"REMOVE_TOTAL_PRODUCTOS"},V5=(e,t)=>{switch(t.type){case $t.ADD_PRODUCTO:let r=e.productos.find(o=>o.id===t.payload);return e.carrito.find(o=>o.id===r.id)?{...e,carrito:e.carrito.map(o=>o.id===r.id?{...o,cantidad:o.cantidad+1}:o)}:{...e,carrito:[...e.carrito,{...r,cantidad:1}]};case $t.DECREASE_ONE_PRODUCTO:let i=e.carrito.find(o=>o.id===t.payload);return i.cantidad>1?{...e,carrito:e.carrito.map(o=>o.id===i.id?{...o,cantidad:o.cantidad-1}:o)}:{...e,carrito:e.carrito.filter(o=>o.id!==i.id)};case $t.REMOVE_PRODUCTO:return{...e,carrito:e.carrito.filter(o=>o.id!=t.payload)};case $t.REMOVE_TOTAL_PRODUCTOS:return{...e,carrito:[]};default:return e}},ui=E.exports.createContext(),W5={productos:[{id:"1",nombre:"Audifono Gaming X15 PRO Bluetooth",precio:129,img:"audifonos.jpg"},{id:"2",nombre:"Televisor Panasonic LCD 4K UHD Smart 43",precio:1299,img:"televisor.jpg"},{id:"3",nombre:"Smartphone Galaxy A23 128Gb 4Gb Single Sim Negro",precio:1049,img:"celular.jpg"},{id:"4",nombre:"Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB",precio:364,img:"teclado.jpg"}],carrito:[]},G5=({children:e})=>{const[t,r]=E.exports.useReducer(V5,W5);return p(ui.Provider,{value:{data:t,dispatch:r},children:e})},Y5=T.header`
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
`,q5=T.nav`
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
`,X5=T.div`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    
    &:hover{
        transition: background-color 0.2s ease-in;
        background-color: #007bff;
        border-radius: 40px;
    }
`,Q5=T.button`
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
`,K5=T.div`
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
`;function m1(){const e=vn(),{data:t}=E.exports.useContext(ui),r=t.carrito.length>0&&t.carrito.map(n=>n.cantidad).reduce((n,i)=>n+i);return p(Y5,{children:D(q5,{children:[p(X5,{onClick:()=>e("/projects/ecommerce"),children:p("h2",{children:"Store"})}),D(Q5,{onClick:()=>e("/projects/ecommerce/cart"),children:[p(zg,{}),t.carrito.length>0&&p(K5,{children:r})]})]})})}const Z5=T.article`
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
`,J5=T.div`
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
`,e8=T.div`
    margin-top: 1rem;
    gap: 0.5rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,t8=T.div`
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
`,r8=T.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
        color: red;
        font-size: 1.25rem;
    }
`,n8=T.div`
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
`,i8=T.span`
    text-align: center;
    width: 40px;
`,o8=T.div`
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
`;function a8({id:e,setModalAdd:t}){const{data:r,dispatch:n}=E.exports.useContext(ui),i=r.productos.find(u=>u.id==e),o=r.carrito.find(u=>u.id==i.id),a=vn(),s=()=>{a("/projects/ecommerce"),t(!1)},l=()=>{a("/projects/ecommerce/cart"),t(!1)},c=()=>{o&&n({type:$t.DECREASE_ONE_PRODUCTO,payload:i.id})};return D(Z5,{children:[p(J5,{children:p("img",{src:`img/${i.img}`,alt:i.nombre})}),D(e8,{children:[D(t8,{children:[p("p",{children:i.nombre}),D(r8,{children:[D("p",{children:["S/.",i.precio]}),D(n8,{children:[p("button",{onClick:()=>n({type:$t.ADD_PRODUCTO,payload:i.id}),children:"+"}),p(i8,{children:o?o.cantidad:0}),p("button",{onClick:c,children:"-"})]})]})]}),D(o8,{children:[p("button",{onClick:s,children:"seguir comprando"}),p("button",{onClick:l,children:"Ir al carrito"})]})]})]})}const s8=T.div`
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
`,l8=T.div`
    background-color: white;
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
`,c8=T.div`
    display: flex;
    flex-direction: column;
    flex: 100%;
`,u8=T.div`
    display: flex;
    flex: 100%;
    align-items: center;
    justify-content: center;
    
    img{
        width: 100%;
        min-height: 100px;
        height: auto;
    }
`,d8=T.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: 600;
    span{
        font-weight: 500;
        color: #db0909;
        font-size: 1.1rem;
    }
`,f8=T.button`
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
`;function p8(){const{data:e,dispatch:t}=E.exports.useContext(ui),[r,n]=E.exports.useState(!1),[i,o]=E.exports.useState(0),a=s=>{o(s),n(!0),t({type:$t.ADD_PRODUCTO,payload:s})};return D(s8,{className:"container",children:[e.productos.map(s=>p(l8,{children:D(c8,{children:[p(u8,{children:p("img",{src:`img/${s.img}`,alt:s.nombre})}),D(d8,{children:[p("p",{children:s.nombre}),D("p",{children:["Precio: ",D("span",{children:["S/.",s.precio]})]}),p(f8,{onClick:()=>a(s.id),children:"Añadir al Carrito"})]})]})},s.id)),r&&p(co,{modal:r,setModal:n,children:p(a8,{id:i,setModalAdd:n})})]})}function h8(){return D(ur,{children:[p(m1,{}),p(p8,{})]})}const m8=T.div`
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
`,g8=T.div`
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
`,v8=T.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    h2{
        font-weight:500;
        font-size: 1.2rem;
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
`,y8=T.p`
    font-size: calc(1rem + 1vh);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 600;
    color: red;
`,w8=T.div`
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
`,x8=T.div`
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
`;function S8({id:e,img:t,nombre:r,precio:n,cantidad:i}){const{dispatch:o}=E.exports.useContext(ui);return D(m8,{children:[p(g8,{children:p("img",{src:`img/${t}`})}),D(v8,{children:[p("h2",{children:r}),D("div",{children:[D(y8,{children:["S/.",n]}),D(w8,{children:[p("button",{onClick:()=>o({type:$t.ADD_PRODUCTO,payload:e}),children:"+"}),p("p",{children:i}),p("button",{onClick:()=>o({type:$t.DECREASE_ONE_PRODUCTO,payload:e}),children:"-"})]})]}),p(x8,{children:p("button",{onClick:()=>o({type:$t.REMOVE_PRODUCTO,payload:e}),children:"Eliminar"})})]})]})}const b8=T.main`
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
`,E8=T.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,C8=T.div`
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

`,T8=T.div`
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
`;function k8(){const{data:e,dispatch:t}=E.exports.useContext(ui),r=e.carrito.length>0&&e.carrito.map(o=>o.cantidad).reduce((o,a)=>o+a),n=vn(),i=()=>{t({type:$t.REMOVE_TOTAL_PRODUCTOS}),n("/projects/ecommerce")};return D(b8,{className:"container",cantidad:e.carrito.length>0,children:[D(E8,{children:[e.carrito.length>0&&D("h1",{children:["Carrito (",r," productos)"]}),e.carrito.length>0?e.carrito.map(o=>p(S8,{id:o.id,img:o.img,nombre:o.nombre,precio:o.precio,cantidad:o.cantidad},o.id)):D(C8,{children:[p("div",{children:p(zg,{})}),p("h2",{children:"Tu Carro está vacío"}),p("p",{children:"Tenemos los mejores precios en productos tecnológicos.¿Te los vas a perder?"}),p("button",{onClick:()=>n("/projects/ecommerce"),children:"Inicio"})]})]}),p(T8,{children:e.carrito.length>0&&D("div",{children:[p("h2",{children:"Resumen de la Orden"}),D("div",{children:[D("p",{children:["Total :  ",D("span",{children:["S/. ",e.carrito.map(o=>o.cantidad*o.precio).reduce((o,a)=>o+a)]})]}),p("button",{onClick:i,children:"Comprar"})]})]})})]})}function _8(){return D(ur,{children:[p(m1,{}),p(k8,{})]})}const O8=T.section`
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
`,P8=T.article`
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
`,D8=T.article`
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
`,M8=T.div`
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
`,I8=T.div`
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
`,z8=T.h1`
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
`,Op=T.p`
    color: hsl(0, 0%, 63%);
    font-size: 1rem;
    line-height: 1.2rem;
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
`,L8=T.button`
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
`,A8=T.div`
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen  and (min-width:1024px) {
        padding: 3rem;
    }
`,R8=T.h2`
    font-family: 'League Spartan', sans-serif;
    font-size: 1rem;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    color: black;
`,N8=[{id:"1",ruta:"imagenes-room/desktop-image-hero-1.jpg",title:"Discover innovative ways to decorate",content:"We provide unmatched quality, comfort,and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. "},{id:"2",ruta:"imagenes-room/desktop-image-hero-2.jpg",title:"We are available all across the globe",content:"With stores all over the world. it`s easy for you to find furniture for your home or place of business.Locally, we`re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questiongs?Don`t hesitate to contact us today."},{id:"3",ruta:"imagenes-room/desktop-image-hero-3.jpg",title:"Manufactured with the best materials",content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand wta customers want for their home and office."}];function $8(){const[e,t]=E.exports.useState(1),r=N8.filter(a=>a.id==e),n=()=>e<=1?t(3):t(e-1),i=()=>e>=3?t(1):t(e+1),o=vn();return p(ur,{children:D(O8,{children:[D(P8,{children:[r.map(a=>p("div",{children:p("img",{src:a.ruta,alt:"img-desktop"})},a.id)),D(M8,{children:[D(I8,{children:[p("button",{onClick:n,children:p("img",{src:"imagenes-room/icon-angle-left.svg",alt:"left"})}),p("button",{onClick:i,children:p("img",{src:"imagenes-room/icon-angle-right.svg",alt:"right"})})]}),r.map(a=>D("div",{children:[p(z8,{children:a.title}),p(Op,{children:a.content})]},a.id)),D(L8,{onClick:()=>o("/projects/room-page"),children:["SHOP NOW",p("span",{className:"arrow",children:p("img",{src:"imagenes-room/icon-arrow.svg",alt:"arrow"})})]})]})]}),D(D8,{children:[p("img",{src:"imagenes-room/image-about-dark.jpg",alt:"img-mobile"}),D(A8,{children:[p(R8,{children:"ABOUT OUR FURNITURE"}),p(Op,{children:"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick o cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialist are available to help you create your dream space"})]}),p("img",{src:"imagenes-room/image-about-light.jpg",alt:"img-mobile"})]})]})})}const j8=T.header`
    width: 100%;
`,F8=T.nav`
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

`,H8=T.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
    `,B8=T.div`
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
`,U8=T.div`
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
`,V8=T.button`
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
`,W8=T.ul`
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
`,G8=T.div`
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
`;function Y8(){const[e,t]=E.exports.useState(!1);return D(j8,{children:[D(F8,{children:[p(H8,{onClick:()=>t(!0),children:p("img",{src:"imagenes-room/icon-hamburger.svg",alt:"nav-hamburger"})}),p(B8,{children:p("img",{src:"imagenes-room/logo.svg",alt:"logo",className:"logo"})}),D(U8,{visible:e,children:[p(V8,{className:"container-close",onClick:()=>t(!1),children:p("img",{src:"imagenes-room/icon-close.svg",alt:"close"})}),D(W8,{children:[p("li",{className:"list-item",children:p("a",{href:"../portfolio/#/projects/room-page",className:"item-link",children:"home"})}),p("li",{className:"list-item",children:p("a",{href:"../portfolio/#/projects/room-page",className:"item-link",children:"shop"})}),p("li",{className:"list-item",children:p("a",{href:"../portfolio/#/projects/room-page",className:"item-link",children:"about"})}),p("li",{className:"list-item",children:p("a",{href:"../portfolio/#/projects/room-page",className:"item-link",children:"contact"})})]})]})]}),e&&p(G8,{})]})}const q8=T.div`
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
`;function X8(){return D(q8,{children:[p(Y8,{}),p($8,{})]})}const Q8=T.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 500;
    top: 0;
    left: 0;
    background-color: ${e=>e.colorHeader?"white":"transparente"};
    
`,K8=T.nav`
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
`,Z8=T.div`
    display:flex;
    height: inherit;
    justify-content: center;
    align-items: center;
    img{
        width: 120px;
        height: 1rem;
    }
`,J8=T.div`
    display: none;

    @media screen and (max-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`,eb=T.div`
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
`,tb=T.div`
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
`;function rb(){const[e,t]=E.exports.useState(!1),[r,n]=E.exports.useState(!1);return E.exports.useEffect(()=>{const i=()=>{window.scrollY>=30?n(!0):n(!1)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),p(Q8,{colorHeader:r,children:D(K8,{className:"container",children:[p(Z8,{children:p("img",{src:"imagenes-manage/logo.svg",alt:"logo"})}),p(eb,{click:e,children:D("ul",{children:[p("li",{children:"Pricing"}),p("li",{children:"Product"}),p("li",{children:"About Us"}),p("li",{children:"Careers"}),p("li",{children:"Community"})]})}),p(tb,{children:p("button",{className:"btn-started",children:"Get Started"})}),p(J8,{onClick:()=>t(!e),children:e?p("img",{src:"imagenes-manage/icon-close.svg",alt:"icono de cerrar"}):p("img",{src:"imagenes-manage/icon-hamburger.svg",alt:"icono de amburguesa mobile",id:"amburguesa"})})]})})}const nb=T.section`
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
`,ib=T.div`
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 499;
    img{
        width: 100%;
    }
    @media screen and (max-width:768px) {
        justify-content: center;
    }
`,ob=T.div`
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
`;function ab(){return D(nb,{className:"container",children:[p(ib,{children:p("img",{src:"imagenes-manage/illustration-intro.svg",alt:"imagen principal de las estadisticas"})}),D(ob,{children:[p("h1",{children:"Bring ereryone together to build better products."}),p("p",{children:"Manage makes it simple for software teams to plan day to -day tasks while keeping the larger team goals in view."}),p("div",{children:p("button",{children:"Get Started"})})]})]})}const sb=T.section`
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
`,lb=T.div`
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
`,cb=T.div`
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
`;function ub(){return D(sb,{className:"container",children:[D(lb,{children:[p("h2",{children:"What´s different about Manage?"}),p("p",{children:"Manage provides all the functionality your team needs without complexity. Our software is tailor-made for modern digital product teams"})]}),D(cb,{children:[D("article",{children:[D("h3",{children:[p("span",{children:"01"})," Track company-wide progress"]}),p("p",{children:"See how your day-to-day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details Never lose sight of the bigger picture again."})]}),D("article",{children:[D("h3",{children:[p("span",{children:"02"})," Advanced built-in reports"]}),p("p",{children:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key  stakeholders informed."})]}),D("article",{children:[D("h3",{children:[p("span",{children:"03"})," Everything you need in one place"]}),p("p",{children:"Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-in-one team productivity solution"})]})]})]})}const db=T.section`
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
`,fb=T.div`
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
`;function pb(){return p(db,{children:D(fb,{className:"container",children:[p("h2",{className:"title-simply",children:"Simplify how your team works today."}),p("div",{children:p("button",{className:"btn-started btn-white",children:"Get Started"})})]})})}const hb=T.footer`
    padding: 2rem 0rem;
    background-color: var(--very_dark_blue);
`,mb=T.div`
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
`,gb=T.div`
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
`,vb=T.div`
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
`,yb=T.div`
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
`,wb=T.div`
    text-align: right;
    color: var(--dark_grayish_blue);
    grid-area: copy;
    @media screen and (max-width:768px) {
        text-align: center;
    }
`;function xb(){return p(hb,{children:D(mb,{className:"container",children:[D(gb,{className:"footer-inbox",children:[p("input",{type:"text",placeholder:"Updates in your inbox..."}),p("div",{children:p("button",{children:"GO"})})]}),D(vb,{children:[D("ul",{children:[p("li",{children:"Home"}),p("li",{children:"Pricing"}),p("li",{children:"Products"}),p("li",{children:"About Us"})]}),D("ul",{children:[p("li",{children:"Careers"}),p("li",{children:"Comunity"}),p("li",{children:"Privaty"})]})]}),D(yb,{children:[D("div",{className:"redes",children:[p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-facebook.svg",alt:"facebook"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-youtube.svg",alt:"youtube"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-twitter.svg",alt:"twitter"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-pinterest.svg",alt:"pinterest"})}),p("a",{href:"#",children:p("img",{src:"imagenes-manage/icon-instagram.svg",alt:"instagram"})})]}),p("div",{children:p("div",{children:p("img",{src:"imagenes-manage/logo2.svg",alt:"logo"})})})]}),p(wb,{className:"copyright",children:p("p",{children:"Copyright 2020. All Rights Reserved"})})]})})}function Pp(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function af(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Pp(t[r])&&Pp(e[r])&&Object.keys(t[r]).length>0&&af(e[r],t[r])})}const g1={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function yn(){const e=typeof document<"u"?document:{};return af(e,g1),e}const Sb={document:g1,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function St(){const e=typeof window<"u"?window:{};return af(e,Sb),e}function bb(e){const t=e;Object.keys(t).forEach(r=>{try{t[r]=null}catch{}try{delete t[r]}catch{}})}function _u(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function nn(){return Date.now()}function Eb(e){const t=St();let r;return t.getComputedStyle&&(r=t.getComputedStyle(e,null)),!r&&e.currentStyle&&(r=e.currentStyle),r||(r=e.style),r}function Cb(e,t){t===void 0&&(t="x");const r=St();let n,i,o;const a=Eb(e);return r.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),o=new r.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=o.toString().split(",")),t==="x"&&(r.WebKitCSSMatrix?i=o.m41:n.length===16?i=parseFloat(n[12]):i=parseFloat(n[4])),t==="y"&&(r.WebKitCSSMatrix?i=o.m42:n.length===16?i=parseFloat(n[13]):i=parseFloat(n[5])),i||0}function sa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Tb(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function dt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let r=1;r<arguments.length;r+=1){const n=r<0||arguments.length<=r?void 0:arguments[r];if(n!=null&&!Tb(n)){const i=Object.keys(Object(n)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const s=i[o],l=Object.getOwnPropertyDescriptor(n,s);l!==void 0&&l.enumerable&&(sa(e[s])&&sa(n[s])?n[s].__swiper__?e[s]=n[s]:dt(e[s],n[s]):!sa(e[s])&&sa(n[s])?(e[s]={},n[s].__swiper__?e[s]=n[s]:dt(e[s],n[s])):e[s]=n[s])}}}return e}function la(e,t,r){e.style.setProperty(t,r)}function v1(e){let{swiper:t,targetPosition:r,side:n}=e;const i=St(),o=-t.translate;let a=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=r>o?"next":"prev",u=(m,v)=>c==="next"&&m>=v||c==="prev"&&m<=v,f=()=>{s=new Date().getTime(),a===null&&(a=s);const m=Math.max(Math.min((s-a)/l,1),0),v=.5-Math.cos(m*Math.PI)/2;let x=o+v*(r-o);if(u(x,r)&&(x=r),t.wrapperEl.scrollTo({[n]:x}),u(x,r)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Yt(e,t){return t===void 0&&(t=""),[...e.children].filter(r=>r.matches(t))}function y1(e,t){t===void 0&&(t=[]);const r=document.createElement(e);return r.classList.add(...Array.isArray(t)?t:[t]),r}function kb(e,t){const r=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&r.push(n):r.push(n),e=n}return r}function _b(e,t){const r=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&r.push(n):r.push(n),e=n}return r}function Tr(e,t){return St().getComputedStyle(e,null).getPropertyValue(t)}function as(e){let t=e,r;if(t){for(r=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(r+=1);return r}}function w1(e,t){const r=[];let n=e.parentElement;for(;n;)t?n.matches(t)&&r.push(n):r.push(n),n=n.parentElement;return r}function ec(e,t){function r(n){n.target===e&&(t.call(e,n),e.removeEventListener("transitionend",r))}t&&e.addEventListener("transitionend",r)}function Ou(e,t,r){const n=St();return r?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let tc;function Ob(){const e=St(),t=yn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function x1(){return tc||(tc=Ob()),tc}let rc;function Pb(e){let{userAgent:t}=e===void 0?{}:e;const r=x1(),n=St(),i=n.navigator.platform,o=t||n.navigator.userAgent,a={ios:!1,android:!1},s=n.screen.width,l=n.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let u=o.match(/(iPad).*OS\s([\d_]+)/);const f=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let x=i==="MacIntel";const w=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&x&&r.touch&&w.indexOf(`${s}x${l}`)>=0&&(u=o.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),x=!1),c&&!v&&(a.os="android",a.android=!0),(u||m||f)&&(a.os="ios",a.ios=!0),a}function Db(e){return e===void 0&&(e={}),rc||(rc=Pb(e)),rc}let nc;function Mb(){const e=St();let t=!1;function r(){const n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}if(r()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[i,o]=n.split("Version/")[1].split(" ")[0].split(".").map(a=>Number(a));t=i<16||i===16&&o<2}}return{isSafari:t||r(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function Ib(){return nc||(nc=Mb()),nc}function zb(e){let{swiper:t,on:r,emit:n}=e;const i=St();let o=null,a=null;const s=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(f=>{a=i.requestAnimationFrame(()=>{const{width:m,height:v}=t;let x=m,w=v;f.forEach(C=>{let{contentBoxSize:g,contentRect:d,target:h}=C;h&&h!==t.el||(x=d?d.width:(g[0]||g).inlineSize,w=d?d.height:(g[0]||g).blockSize)}),(x!==m||w!==v)&&s()})}),o.observe(t.el))},c=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},u=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};r("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",u)}),r("destroy",()=>{c(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",u)})}function Lb(e){let{swiper:t,extendParams:r,on:n,emit:i}=e;const o=[],a=St(),s=function(u,f){f===void 0&&(f={});const m=a.MutationObserver||a.WebkitMutationObserver,v=new m(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const w=function(){i("observerUpdate",x[0])};a.requestAnimationFrame?a.requestAnimationFrame(w):a.setTimeout(w,0)});v.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),o.push(v)},l=()=>{if(!!t.params.observer){if(t.params.observeParents){const u=w1(t.el);for(let f=0;f<u.length;f+=1)s(u[f])}s(t.el,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(u=>{u.disconnect()}),o.splice(0,o.length)};r({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var Ab={on(e,t,r){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const i=r?"unshift":"push";return e.split(" ").forEach(o=>{n.eventsListeners[o]||(n.eventsListeners[o]=[]),n.eventsListeners[o][i](t)}),n},once(e,t,r){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;function i(){n.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];t.apply(n,a)}return i.__emitterProxy=t,n.on(e,i,r)},onAny(e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const n=t?"unshift":"push";return r.eventsAnyListeners.indexOf(e)<0&&r.eventsAnyListeners[n](e),r},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const r=t.eventsAnyListeners.indexOf(e);return r>=0&&t.eventsAnyListeners.splice(r,1),t},off(e,t){const r=this;return!r.eventsListeners||r.destroyed||!r.eventsListeners||e.split(" ").forEach(n=>{typeof t>"u"?r.eventsListeners[n]=[]:r.eventsListeners[n]&&r.eventsListeners[n].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&r.eventsListeners[n].splice(o,1)})}),r},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,r,n;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],r=o.slice(1,o.length),n=e):(t=o[0].events,r=o[0].data,n=o[0].context||e),r.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...r])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(n,r)})}),e}};function Rb(){const e=this;let t,r;const n=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=n.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?r=e.params.height:r=n.clientHeight,!(t===0&&e.isHorizontal()||r===0&&e.isVertical())&&(t=t-parseInt(Tr(n,"padding-left")||0,10)-parseInt(Tr(n,"padding-right")||0,10),r=r-parseInt(Tr(n,"padding-top")||0,10)-parseInt(Tr(n,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(r)&&(r=0),Object.assign(e,{width:t,height:r,size:e.isHorizontal()?t:r}))}function Nb(){const e=this;function t(z){return e.isHorizontal()?z:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[z]}function r(z,R){return parseFloat(z.getPropertyValue(t(R))||0)}const n=e.params,{wrapperEl:i,slidesEl:o,size:a,rtlTranslate:s,wrongRTL:l}=e,c=e.virtual&&n.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,f=Yt(o,`.${e.params.slideClass}, swiper-slide`),m=c?e.virtual.slides.length:f.length;let v=[];const x=[],w=[];let C=n.slidesOffsetBefore;typeof C=="function"&&(C=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(e));const d=e.snapGrid.length,h=e.slidesGrid.length;let y=n.spaceBetween,b=-C,_=0,P=0;if(typeof a>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*a:typeof y=="string"&&(y=parseFloat(y)),e.virtualSize=-y,f.forEach(z=>{s?z.style.marginLeft="":z.style.marginRight="",z.style.marginBottom="",z.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(la(i,"--swiper-centered-offset-before",""),la(i,"--swiper-centered-offset-after",""));const I=n.grid&&n.grid.rows>1&&e.grid;I&&e.grid.initSlides(m);let k;const B=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(z=>typeof n.breakpoints[z].slidesPerView<"u").length>0;for(let z=0;z<m;z+=1){k=0;let R;if(f[z]&&(R=f[z]),I&&e.grid.updateSlide(z,R,m,t),!(f[z]&&Tr(R,"display")==="none")){if(n.slidesPerView==="auto"){B&&(f[z].style[t("width")]="");const j=getComputedStyle(R),Q=R.style.transform,J=R.style.webkitTransform;if(Q&&(R.style.transform="none"),J&&(R.style.webkitTransform="none"),n.roundLengths)k=e.isHorizontal()?Ou(R,"width",!0):Ou(R,"height",!0);else{const se=r(j,"width"),ve=r(j,"padding-left"),F=r(j,"padding-right"),Y=r(j,"margin-left"),K=r(j,"margin-right"),ce=j.getPropertyValue("box-sizing");if(ce&&ce==="border-box")k=se+Y+K;else{const{clientWidth:H,offsetWidth:W}=R;k=se+ve+F+Y+K+(W-H)}}Q&&(R.style.transform=Q),J&&(R.style.webkitTransform=J),n.roundLengths&&(k=Math.floor(k))}else k=(a-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),f[z]&&(f[z].style[t("width")]=`${k}px`);f[z]&&(f[z].swiperSlideSize=k),w.push(k),n.centeredSlides?(b=b+k/2+_/2+y,_===0&&z!==0&&(b=b-a/2-y),z===0&&(b=b-a/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),P%n.slidesPerGroup===0&&v.push(b),x.push(b)):(n.roundLengths&&(b=Math.floor(b)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&v.push(b),x.push(b),b=b+k+y),e.virtualSize+=k+y,_=k,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+g,s&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+y}px`),I&&e.grid.updateWrapperSize(k,v,t),!n.centeredSlides){const z=[];for(let R=0;R<v.length;R+=1){let j=v[R];n.roundLengths&&(j=Math.floor(j)),v[R]<=e.virtualSize-a&&z.push(j)}v=z,Math.floor(e.virtualSize-a)-Math.floor(v[v.length-1])>1&&v.push(e.virtualSize-a)}if(c&&n.loop){const z=w[0]+y;if(n.slidesPerGroup>1){const R=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),j=z*n.slidesPerGroup;for(let Q=0;Q<R;Q+=1)v.push(v[v.length-1]+j)}for(let R=0;R<e.virtual.slidesBefore+e.virtual.slidesAfter;R+=1)n.slidesPerGroup===1&&v.push(v[v.length-1]+z),x.push(x[x.length-1]+z),e.virtualSize+=z}if(v.length===0&&(v=[0]),y!==0){const z=e.isHorizontal()&&s?"marginLeft":t("marginRight");f.filter((R,j)=>!n.cssMode||n.loop?!0:j!==f.length-1).forEach(R=>{R.style[z]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let z=0;w.forEach(j=>{z+=j+(y||0)}),z-=y;const R=z-a;v=v.map(j=>j<=0?-C:j>R?R+g:j)}if(n.centerInsufficientSlides){let z=0;if(w.forEach(R=>{z+=R+(y||0)}),z-=y,z<a){const R=(a-z)/2;v.forEach((j,Q)=>{v[Q]=j-R}),x.forEach((j,Q)=>{x[Q]=j+R})}}if(Object.assign(e,{slides:f,snapGrid:v,slidesGrid:x,slidesSizesGrid:w}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){la(i,"--swiper-centered-offset-before",`${-v[0]}px`),la(i,"--swiper-centered-offset-after",`${e.size/2-w[w.length-1]/2}px`);const z=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(j=>j+z),e.slidesGrid=e.slidesGrid.map(j=>j+R)}if(m!==u&&e.emit("slidesLengthChange"),v.length!==d&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),x.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const z=`${n.containerModifierClass}backface-hidden`,R=e.el.classList.contains(z);m<=n.maxBackfaceHiddenSlides?R||e.el.classList.add(z):R&&e.el.classList.remove(z)}}function $b(e){const t=this,r=[],n=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=s=>n?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{r.push(s)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const s=t.activeIndex+o;if(s>t.slides.length&&!n)break;r.push(a(s))}else r.push(a(t.activeIndex));for(o=0;o<r.length;o+=1)if(typeof r[o]<"u"){const s=r[o].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function jb(){const e=this,t=e.slides,r=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=(e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop)-r-e.cssOverflowAdjustment()}function Fb(e){e===void 0&&(e=this&&this.translate||0);const t=this,r=t.params,{slides:n,rtlTranslate:i,snapGrid:o}=t;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),n.forEach(l=>{l.classList.remove(r.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=r.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<n.length;l+=1){const c=n[l];let u=c.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(u-=n[0].swiperSlideOffset);const f=(a+(r.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+s),m=(a-o[0]+(r.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+s),v=-(a-u),x=v+t.slidesSizesGrid[l];(v>=0&&v<t.size-1||x>1&&x<=t.size||v<=0&&x>=t.size)&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l),n[l].classList.add(r.slideVisibleClass)),c.progress=i?-f:f,c.originalProgress=i?-m:m}}function Hb(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const r=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:s}=t;const l=o,c=a;if(n===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/n;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=u||i<=0,a=f||i>=1,u&&(i=0),f&&(i=1)}if(r.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[u],v=t.slidesGrid[f],x=t.slidesGrid[t.slidesGrid.length-1],w=Math.abs(e);w>=m?s=(w-m)/x:s=(w+x-v)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:o,isEnd:a}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}function Bb(){const e=this,{slides:t,params:r,slidesEl:n,activeIndex:i}=e,o=e.virtual&&r.virtual.enabled,a=l=>Yt(n,`.${r.slideClass}${l}, swiper-slide${l}`)[0];t.forEach(l=>{l.classList.remove(r.slideActiveClass,r.slideNextClass,r.slidePrevClass)});let s;if(o)if(r.loop){let l=i-e.virtual.slidesBefore;l<0&&(l=e.virtual.slides.length+l),l>=e.virtual.slides.length&&(l-=e.virtual.slides.length),s=a(`[data-swiper-slide-index="${l}"]`)}else s=a(`[data-swiper-slide-index="${i}"]`);else s=t[i];if(s){s.classList.add(r.slideActiveClass);let l=_b(s,`.${r.slideClass}, swiper-slide`)[0];r.loop&&!l&&(l=t[0]),l&&l.classList.add(r.slideNextClass);let c=kb(s,`.${r.slideClass}, swiper-slide`)[0];r.loop&&!c===0&&(c=t[t.length-1]),c&&c.classList.add(r.slidePrevClass)}e.emitSlidesClasses()}const ka=(e,t)=>{if(!e||e.destroyed||!e.params)return;const r=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,n=t.closest(r());if(n){const i=n.querySelector(`.${e.params.lazyPreloaderClass}`);i&&i.remove()}},ic=(e,t)=>{if(!e.slides[t])return;const r=e.slides[t].querySelector('[loading="lazy"]');r&&r.removeAttribute("loading")},Pu=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const r=e.slides.length;if(!r||!t||t<0)return;t=Math.min(t,r);const n=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,s=[a-t];s.push(...Array.from({length:t}).map((l,c)=>a+n+c)),e.slides.forEach((l,c)=>{s.includes(l.column)&&ic(e,c)});return}const o=i+n-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const s=(a%r+r)%r;(s<i||s>o)&&ic(e,s)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,r-1);a+=1)a!==i&&(a>o||a<i)&&ic(e,a)};function Ub(e){const{slidesGrid:t,params:r}=e,n=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?n>=t[o]&&n<t[o+1]-(t[o+1]-t[o])/2?i=o:n>=t[o]&&n<t[o+1]&&(i=o+1):n>=t[o]&&(i=o);return r.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Vb(e){const t=this,r=t.rtlTranslate?t.translate:-t.translate,{snapGrid:n,params:i,activeIndex:o,realIndex:a,snapIndex:s}=t;let l=e,c;const u=m=>{let v=m-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof l>"u"&&(l=Ub(t)),n.indexOf(r)>=0)c=n.indexOf(r);else{const m=Math.min(i.slidesPerGroupSkip,l);c=m+Math.floor((l-m)/i.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===o){c!==s&&(t.snapIndex=c,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(l));return}let f;t.virtual&&i.virtual.enabled&&i.loop?f=u(l):t.slides[l]?f=parseInt(t.slides[l].getAttribute("data-swiper-slide-index")||l,10):f=l,Object.assign(t,{previousSnapIndex:s,snapIndex:c,previousRealIndex:a,realIndex:f,previousIndex:o,activeIndex:l}),t.initialized&&Pu(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==f&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Wb(e){const t=this,r=t.params,n=e.closest(`.${r.slideClass}, swiper-slide`);let i=!1,o;if(n){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===n){i=!0,o=a;break}}if(n&&i)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Gb={updateSize:Rb,updateSlides:Nb,updateAutoHeight:$b,updateSlidesOffset:jb,updateSlidesProgress:Fb,updateProgress:Hb,updateSlidesClasses:Bb,updateActiveIndex:Vb,updateClickedSlide:Wb};function Yb(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:r,rtlTranslate:n,translate:i,wrapperEl:o}=t;if(r.virtualTranslate)return n?-i:i;if(r.cssMode)return i;let a=Cb(o,e);return a+=t.cssOverflowAdjustment(),n&&(a=-a),a||0}function qb(e,t){const r=this,{rtlTranslate:n,params:i,wrapperEl:o,progress:a}=r;let s=0,l=0;const c=0;r.isHorizontal()?s=n?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?s:l,i.cssMode?o[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-s:-l:i.virtualTranslate||(r.isHorizontal()?s-=r.cssOverflowAdjustment():l-=r.cssOverflowAdjustment(),o.style.transform=`translate3d(${s}px, ${l}px, ${c}px)`);let u;const f=r.maxTranslate()-r.minTranslate();f===0?u=0:u=(e-r.minTranslate())/f,u!==a&&r.updateProgress(e),r.emit("setTranslate",r.translate,t)}function Xb(){return-this.snapGrid[0]}function Qb(){return-this.snapGrid[this.snapGrid.length-1]}function Kb(e,t,r,n,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),r===void 0&&(r=!0),n===void 0&&(n=!0);const o=this,{params:a,wrapperEl:s}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const l=o.minTranslate(),c=o.maxTranslate();let u;if(n&&e>l?u=l:n&&e<c?u=c:u=e,o.updateProgress(u),a.cssMode){const f=o.isHorizontal();if(t===0)s[f?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return v1({swiper:o,targetPosition:-u,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),r&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),r&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,r&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var Zb={getTranslate:Yb,setTranslate:qb,minTranslate:Xb,maxTranslate:Qb,translateTo:Kb};function Jb(e,t){const r=this;r.params.cssMode||(r.wrapperEl.style.transitionDuration=`${e}ms`),r.emit("setTransition",e,t)}function S1(e){let{swiper:t,runCallbacks:r,direction:n,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let s=n;if(s||(o>a?s="next":o<a?s="prev":s="reset"),t.emit(`transition${i}`),r&&o!==a){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function e7(e,t){e===void 0&&(e=!0);const r=this,{params:n}=r;n.cssMode||(n.autoHeight&&r.updateAutoHeight(),S1({swiper:r,runCallbacks:e,direction:t,step:"Start"}))}function t7(e,t){e===void 0&&(e=!0);const r=this,{params:n}=r;r.animating=!1,!n.cssMode&&(r.setTransition(0),S1({swiper:r,runCallbacks:e,direction:t,step:"End"}))}var r7={setTransition:Jb,transitionStart:e7,transitionEnd:t7};function n7(e,t,r,n,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),r===void 0&&(r=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:m,wrapperEl:v,enabled:x}=o;if(o.animating&&s.preventInteractionOnTransition||!x&&!n&&!i)return!1;const w=Math.min(o.params.slidesPerGroupSkip,a);let C=w+Math.floor((a-w)/o.params.slidesPerGroup);C>=l.length&&(C=l.length-1);const g=-l[C];if(s.normalizeSlideIndex)for(let h=0;h<c.length;h+=1){const y=-Math.floor(g*100),b=Math.floor(c[h]*100),_=Math.floor(c[h+1]*100);typeof c[h+1]<"u"?y>=b&&y<_-(_-b)/2?a=h:y>=b&&y<_&&(a=h+1):y>=b&&(a=h)}if(o.initialized&&a!==f&&(!o.allowSlideNext&&(m?g>o.translate&&g>o.minTranslate():g<o.translate&&g<o.minTranslate())||!o.allowSlidePrev&&g>o.translate&&g>o.maxTranslate()&&(f||0)!==a))return!1;a!==(u||0)&&r&&o.emit("beforeSlideChangeStart"),o.updateProgress(g);let d;if(a>f?d="next":a<f?d="prev":d="reset",m&&-g===o.translate||!m&&g===o.translate)return o.updateActiveIndex(a),s.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),s.effect!=="slide"&&o.setTranslate(g),d!=="reset"&&(o.transitionStart(r,d),o.transitionEnd(r,d)),!1;if(s.cssMode){const h=o.isHorizontal(),y=m?g:-g;if(t===0){const b=o.virtual&&o.params.virtual.enabled;b&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),b&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[h?"scrollLeft":"scrollTop"]=y})):v[h?"scrollLeft":"scrollTop"]=y,b&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return v1({swiper:o,targetPosition:y,side:h?"left":"top"}),!0;v.scrollTo({[h?"left":"top"]:y,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(g),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,n),o.transitionStart(r,d),t===0?o.transitionEnd(r,d):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(r,d))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function i7(e,t,r,n){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),r===void 0&&(r=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;let o=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?o=o+i.virtual.slidesBefore:o=i.getSlideIndexByData(o)),i.slideTo(o,t,r,n)}function o7(e,t,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const n=this,{enabled:i,params:o,animating:a}=n;if(!i)return n;let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<o.slidesPerGroupSkip?1:s,c=n.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return o.rewind&&n.isEnd?n.slideTo(0,e,t,r):n.slideTo(n.activeIndex+l,e,t,r)}function a7(e,t,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const n=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:s,enabled:l,animating:c}=n;if(!l)return n;const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const f=s?n.translate:-n.translate;function m(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const v=m(f),x=o.map(g=>m(g));let w=o[x.indexOf(v)-1];if(typeof w>"u"&&i.cssMode){let g;o.forEach((d,h)=>{v>=d&&(g=h)}),typeof g<"u"&&(w=o[g>0?g-1:g])}let C=0;if(typeof w<"u"&&(C=a.indexOf(w),C<0&&(C=n.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(C=C-n.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),i.rewind&&n.isBeginning){const g=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(g,e,t,r)}return n.slideTo(C,e,t,r)}function s7(e,t,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const n=this;return n.slideTo(n.activeIndex,e,t,r)}function l7(e,t,r,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=.5);const i=this;let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),s=a+Math.floor((o-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const c=i.snapGrid[s],u=i.snapGrid[s+1];l-c>(u-c)*n&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[s-1],u=i.snapGrid[s];l-c<=(u-c)*n&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,r)}function c7(){const e=this,{params:t,slidesEl:r}=e,n=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-n/2||i>e.slides.length-e.loopedSlides+n/2?(e.loopFix(),i=e.getSlideIndex(Yt(r,`${a}[data-swiper-slide-index="${o}"]`)[0]),_u(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-n?(e.loopFix(),i=e.getSlideIndex(Yt(r,`${a}[data-swiper-slide-index="${o}"]`)[0]),_u(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var u7={slideTo:n7,slideToLoop:i7,slideNext:o7,slidePrev:a7,slideReset:s7,slideToClosest:l7,slideToClickedSlide:c7};function d7(e){const t=this,{params:r,slidesEl:n}=t;if(!r.loop||t.virtual&&t.params.virtual.enabled)return;Yt(n,`.${r.slideClass}, swiper-slide`).forEach((o,a)=>{o.setAttribute("data-swiper-slide-index",a)}),t.loopFix({slideRealIndex:e,direction:r.centeredSlides?void 0:"next"})}function f7(e){let{slideRealIndex:t,slideTo:r=!0,direction:n,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:f,slidesEl:m,params:v}=l;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){r&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}const x=v.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(parseFloat(v.slidesPerView,10));let w=v.loopedSlides||x;w%v.slidesPerGroup!==0&&(w+=v.slidesPerGroup-w%v.slidesPerGroup),l.loopedSlides=w;const C=[],g=[];let d=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(l.slides.filter(P=>P.classList.contains(v.slideActiveClass))[0]):d=o;const h=n==="next"||!n,y=n==="prev"||!n;let b=0,_=0;if(o<w){b=Math.max(w-o,v.slidesPerGroup);for(let P=0;P<w-o;P+=1){const I=P-Math.floor(P/c.length)*c.length;C.push(c.length-I-1)}}else if(o>l.slides.length-w*2){_=Math.max(o-(l.slides.length-w*2),v.slidesPerGroup);for(let P=0;P<_;P+=1){const I=P-Math.floor(P/c.length)*c.length;g.push(I)}}if(y&&C.forEach(P=>{l.slides[P].swiperLoopMoveDOM=!0,m.prepend(l.slides[P]),l.slides[P].swiperLoopMoveDOM=!1}),h&&g.forEach(P=>{l.slides[P].swiperLoopMoveDOM=!0,m.append(l.slides[P]),l.slides[P].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"&&l.updateSlides(),v.watchSlidesProgress&&l.updateSlidesOffset(),r){if(C.length>0&&y)if(typeof t>"u"){const P=l.slidesGrid[d],k=l.slidesGrid[d+b]-P;s?l.setTranslate(l.translate-k):(l.slideTo(d+b,0,!1,!0),i&&(l.touches[l.isHorizontal()?"startX":"startY"]+=k))}else i&&l.slideToLoop(t,0,!1,!0);else if(g.length>0&&h)if(typeof t>"u"){const P=l.slidesGrid[d],k=l.slidesGrid[d-_]-P;s?l.setTranslate(l.translate-k):(l.slideTo(d-_,0,!1,!0),i&&(l.touches[l.isHorizontal()?"startX":"startY"]+=k))}else l.slideToLoop(t,0,!1,!0)}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!a){const P={slideRealIndex:t,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix(P)}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix(P)}l.emit("loopFix")}function p7(){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;n[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),n.forEach(i=>{r.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var h7={loopCreate:d7,loopFix:f7,loopDestroy:p7};function m7(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const r=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),r.style.cursor="move",r.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function g7(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var v7={setGrabCursor:m7,unsetGrabCursor:g7};function y7(e,t){t===void 0&&(t=this);function r(n){if(!n||n===yn()||n===St())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return!i&&!n.getRootNode?null:i||r(n.getRootNode().host)}return r(t)}function w7(e){const t=this,r=yn(),n=St(),i=t.touchEventsData;i.evCache.push(e);const{params:o,touches:a,enabled:s}=t;if(!s||!o.simulateTouch&&e.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",f=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&f&&(c=f[0]);const m=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,v=!!(l.target&&l.target.shadowRoot);if(o.noSwiping&&(v?y7(m,c):c.closest(m))){t.allowClick=!0;return}if(o.swipeHandler&&!c.closest(o.swipeHandler))return;a.currentX=l.pageX,a.currentY=l.pageY;const x=a.currentX,w=a.currentY,C=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,g=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(C&&(x<=g||x>=n.innerWidth-g))if(C==="prevent")e.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=x,a.startY=w,i.touchStartTime=nn(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let d=!0;c.matches(i.focusableElements)&&(d=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),r.activeElement&&r.activeElement.matches(i.focusableElements)&&r.activeElement!==c&&r.activeElement.blur();const h=d&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||h)&&!c.isContentEditable&&l.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function x7(e){const t=yn(),r=this,n=r.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:s}=r;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&r.emit("touchMoveOpposite",l);return}const c=n.evCache.findIndex(_=>_.pointerId===l.pointerId);c>=0&&(n.evCache[c]=l);const u=n.evCache.length>1?n.evCache[0]:l,f=u.pageX,m=u.pageY;if(l.preventedByNestedSwiper){o.startX=f,o.startY=m;return}if(!r.allowTouchMove){l.target.matches(n.focusableElements)||(r.allowClick=!1),n.isTouched&&(Object.assign(o,{startX:f,startY:m,prevX:r.touches.currentX,prevY:r.touches.currentY,currentX:f,currentY:m}),n.touchStartTime=nn());return}if(i.touchReleaseOnEdges&&!i.loop){if(r.isVertical()){if(m<o.startY&&r.translate<=r.maxTranslate()||m>o.startY&&r.translate>=r.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(f<o.startX&&r.translate<=r.maxTranslate()||f>o.startX&&r.translate>=r.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,r.allowClick=!1;return}if(n.allowTouchCallbacks&&r.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;o.currentX=f,o.currentY=m;const v=o.currentX-o.startX,x=o.currentY-o.startY;if(r.params.threshold&&Math.sqrt(v**2+x**2)<r.params.threshold)return;if(typeof n.isScrolling>"u"){let _;r.isHorizontal()&&o.currentY===o.startY||r.isVertical()&&o.currentX===o.startX?n.isScrolling=!1:v*v+x*x>=25&&(_=Math.atan2(Math.abs(x),Math.abs(v))*180/Math.PI,n.isScrolling=r.isHorizontal()?_>i.touchAngle:90-_>i.touchAngle)}if(n.isScrolling&&r.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(n.startMoving=!0),n.isScrolling||r.zoom&&r.params.zoom&&r.params.zoom.enabled&&n.evCache.length>1){n.isTouched=!1;return}if(!n.startMoving)return;r.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let w=r.isHorizontal()?v:x,C=r.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(w=Math.abs(w)*(a?1:-1),C=Math.abs(C)*(a?1:-1)),o.diff=w,w*=i.touchRatio,a&&(w=-w,C=-C);const g=r.touchesDirection;r.swipeDirection=w>0?"prev":"next",r.touchesDirection=C>0?"prev":"next";const d=r.params.loop&&!i.cssMode;if(!n.isMoved){if(d&&r.loopFix({direction:r.swipeDirection}),n.startTranslate=r.getTranslate(),r.setTransition(0),r.animating){const _=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});r.wrapperEl.dispatchEvent(_)}n.allowMomentumBounce=!1,i.grabCursor&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!0),r.emit("sliderFirstMove",l)}let h;n.isMoved&&g!==r.touchesDirection&&d&&Math.abs(w)>=1&&(r.loopFix({direction:r.swipeDirection,setTranslate:!0}),h=!0),r.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=w+n.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),w>0?(d&&!h&&n.currentTranslate>(i.centeredSlides?r.minTranslate()-r.size/2:r.minTranslate())&&r.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>r.minTranslate()&&(y=!1,i.resistance&&(n.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+n.startTranslate+w)**b))):w<0&&(d&&!h&&n.currentTranslate<(i.centeredSlides?r.maxTranslate()+r.size/2:r.maxTranslate())&&r.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:r.slides.length-(i.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<r.maxTranslate()&&(y=!1,i.resistance&&(n.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-n.startTranslate-w)**b))),y&&(l.preventedByNestedSwiper=!0),!r.allowSlideNext&&r.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!r.allowSlidePrev&&r.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!r.allowSlidePrev&&!r.allowSlideNext&&(n.currentTranslate=n.startTranslate),i.threshold>0)if(Math.abs(w)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,n.currentTranslate=n.startTranslate,o.diff=r.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{n.currentTranslate=n.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&r.freeMode||i.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(n.currentTranslate),r.setTranslate(n.currentTranslate))}function S7(e){const t=this,r=t.touchEventsData,n=r.evCache.findIndex(h=>h.pointerId===e.pointerId);if(n>=0&&r.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&!(e.type==="pointercancel"&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:i,touches:o,rtlTranslate:a,slidesGrid:s,enabled:l}=t;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let c=e;if(c.originalEvent&&(c=c.originalEvent),r.allowTouchCallbacks&&t.emit("touchEnd",c),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&i.grabCursor&&t.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}i.grabCursor&&r.isMoved&&r.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=nn(),f=u-r.touchStartTime;if(t.allowClick){const h=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(h&&h[0]||c.target),t.emit("tap click",c),f<300&&u-r.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(r.lastClickTime=nn(),_u(()=>{t.destroyed||(t.allowClick=!0)}),!r.isTouched||!r.isMoved||!t.swipeDirection||o.diff===0||r.currentTranslate===r.startTranslate){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;let m;if(i.followFinger?m=a?t.translate:-t.translate:m=-r.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}let v=0,x=t.slidesSizesGrid[0];for(let h=0;h<s.length;h+=h<i.slidesPerGroupSkip?1:i.slidesPerGroup){const y=h<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof s[h+y]<"u"?m>=s[h]&&m<s[h+y]&&(v=h,x=s[h+y]-s[h]):m>=s[h]&&(v=h,x=s[s.length-1]-s[s.length-2])}let w=null,C=null;i.rewind&&(t.isBeginning?C=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(w=0));const g=(m-s[v])/x,d=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(f>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?w:v+d):t.slideTo(v)),t.swipeDirection==="prev"&&(g>1-i.longSwipesRatio?t.slideTo(v+d):C!==null&&g<0&&Math.abs(g)>i.longSwipesRatio?t.slideTo(C):t.slideTo(v))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(v+d):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(w!==null?w:v+d),t.swipeDirection==="prev"&&t.slideTo(C!==null?C:v))}}function Dp(){const e=this,{params:t,el:r}=e;if(r&&r.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=n,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function b7(e){const t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function E7(){const e=this,{wrapperEl:t,rtlTranslate:r,enabled:n}=e;if(!n)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(r?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function C7(e){const t=this;ka(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let Mp=!1;function T7(){}const b1=(e,t)=>{const r=yn(),{params:n,el:i,wrapperEl:o,device:a}=e,s=!!n.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;i[l]("pointerdown",e.onTouchStart,{passive:!1}),r[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),r[l]("pointerup",e.onTouchEnd,{passive:!0}),r[l]("pointercancel",e.onTouchEnd,{passive:!0}),r[l]("pointerout",e.onTouchEnd,{passive:!0}),r[l]("pointerleave",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",e.onClick,!0),n.cssMode&&o[l]("scroll",e.onScroll),n.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Dp,!0):e[c]("observerUpdate",Dp,!0),i[l]("load",e.onLoad,{capture:!0})};function k7(){const e=this,t=yn(),{params:r}=e;e.onTouchStart=w7.bind(e),e.onTouchMove=x7.bind(e),e.onTouchEnd=S7.bind(e),r.cssMode&&(e.onScroll=E7.bind(e)),e.onClick=b7.bind(e),e.onLoad=C7.bind(e),Mp||(t.addEventListener("touchstart",T7),Mp=!0),b1(e,"on")}function _7(){b1(this,"off")}var O7={attachEvents:k7,detachEvents:_7};const Ip=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function P7(){const e=this,{realIndex:t,initialized:r,params:n,el:i}=e,o=n.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,c=Ip(e,n),u=Ip(e,l),f=n.enabled;c&&!u?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&u&&(i.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&i.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const C=n[w]&&n[w].enabled,g=l[w]&&l[w].enabled;C&&!g&&e[w].disable(),!C&&g&&e[w].enable()});const m=l.direction&&l.direction!==n.direction,v=n.loop&&(l.slidesPerView!==n.slidesPerView||m);m&&r&&e.changeDirection(),dt(e.params,l);const x=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),f&&!x?e.disable():!f&&x&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),v&&r&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",l)}function D7(e,t,r){if(t===void 0&&(t="window"),!e||t==="container"&&!r)return;let n=!1;const i=St(),o=t==="window"?i.innerHeight:r.clientHeight,a=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:o*l,point:s}}return{value:s,point:s}});a.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<a.length;s+=1){const{point:l,value:c}=a[s];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=r.clientWidth&&(n=l)}return n||"max"}var M7={setBreakpoint:P7,getBreakpoint:D7};function I7(e,t){const r=[];return e.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(i=>{n[i]&&r.push(t+i)}):typeof n=="string"&&r.push(t+n)}),r}function z7(){const e=this,{classNames:t,params:r,rtl:n,el:i,device:o}=e,a=I7(["initialized",r.direction,{"free-mode":e.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:n},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&r.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function L7(){const e=this,{el:t,classNames:r}=e;t.classList.remove(...r),e.emitContainerClasses()}var A7={addClasses:z7,removeClasses:L7};function R7(){const e=this,{isLocked:t,params:r}=e,{slidesOffsetBefore:n}=r;if(n){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+n*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;r.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),r.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var N7={checkOverflow:R7},zp={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $7(e,t){return function(n){n===void 0&&(n={});const i=Object.keys(n)[0],o=n[i];if(typeof o!="object"||o===null){dt(t,n);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in o)){dt(t,n);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),dt(t,n)}}const oc={eventsEmitter:Ab,update:Gb,translate:Zb,transition:r7,slide:u7,loop:h7,grabCursor:v7,events:O7,breakpoints:M7,checkOverflow:N7,classes:A7},ac={};let ut=class{constructor(){let t,r;for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?r=i[0]:[t,r]=i,r||(r={}),r=dt({},r),t&&!r.el&&(r.el=t);const a=yn();if(r.el&&typeof r.el=="string"&&a.querySelectorAll(r.el).length>1){const u=[];return a.querySelectorAll(r.el).forEach(f=>{const m=dt({},r,{el:f});u.push(new ut(m))}),u}const s=this;s.__swiper__=!0,s.support=x1(),s.device=Db({userAgent:r.userAgent}),s.browser=Ib(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],r.modules&&Array.isArray(r.modules)&&s.modules.push(...r.modules);const l={};s.modules.forEach(u=>{u({params:r,swiper:s,extendParams:$7(r,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const c=dt({},zp,l);return s.params=dt({},c,ac,r),s.originalParams=dt({},s.params),s.passedParams=dt({},r),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getSlideIndex(t){const{slidesEl:r,params:n}=this,i=Yt(r,`.${n.slideClass}, swiper-slide`),o=as(i[0]);return as(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(r=>r.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:r,params:n}=t;t.slides=Yt(r,`.${n.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,r){const n=this;t=Math.min(Math.max(t,0),1);const i=n.minTranslate(),a=(n.maxTranslate()-i)*t+i;n.translateTo(a,typeof r>"u"?0:r),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=t.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",r.join(" "))}getSlideClasses(t){const r=this;return r.destroyed?"":t.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(r.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=[];t.slides.forEach(n=>{const i=t.getSlideClasses(n);r.push({slideEl:n,classNames:i}),t.emit("_slideClass",n,i)}),t.emit("_slideClasses",r)}slidesPerViewDynamic(t,r){t===void 0&&(t="current"),r===void 0&&(r=!1);const n=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:s,size:l,activeIndex:c}=n;let u=1;if(i.centeredSlides){let f=o[c]?o[c].swiperSlideSize:0,m;for(let v=c+1;v<o.length;v+=1)o[v]&&!m&&(f+=o[v].swiperSlideSize,u+=1,f>l&&(m=!0));for(let v=c-1;v>=0;v-=1)o[v]&&!m&&(f+=o[v].swiperSlideSize,u+=1,f>l&&(m=!0))}else if(t==="current")for(let f=c+1;f<o.length;f+=1)(r?a[f]+s[f]-a[c]<l:a[f]-a[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:r,params:n}=t;n.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&ka(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)i(),n.autoHeight&&t.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&t.isEnd&&!n.centeredSlides){const a=t.virtual&&n.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}n.watchOverflow&&r!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,r){r===void 0&&(r=!0);const n=this,i=n.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${t}`),n.emitContainerClasses(),n.params.direction=t,n.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),n.emit("changeDirection"),r&&n.update()),n}changeLanguageDirection(t){const r=this;r.rtl&&t==="rtl"||!r.rtl&&t==="ltr"||(r.rtl=t==="rtl",r.rtlTranslate=r.params.direction==="horizontal"&&r.rtl,r.rtl?(r.el.classList.add(`${r.params.containerModifierClass}rtl`),r.el.dir="rtl"):(r.el.classList.remove(`${r.params.containerModifierClass}rtl`),r.el.dir="ltr"),r.update())}mount(t){const r=this;if(r.mounted)return!0;let n=t||r.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=r,n.parentNode&&n.parentNode.host&&(r.isElement=!0);const i=()=>`.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):Yt(n,i())[0])();return!a&&r.params.createElements&&(a=y1("div",r.params.wrapperClass),n.append(a),Yt(n,`.${r.params.slideClass}`).forEach(s=>{a.append(s)})),Object.assign(r,{el:n,wrapperEl:a,slidesEl:r.isElement?n.parentNode.host:a,hostEl:r.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Tr(n,"direction")==="rtl",rtlTranslate:r.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Tr(n,"direction")==="rtl"),wrongRTL:Tr(a,"display")==="-webkit-box"}),!0}init(t){const r=this;return r.initialized||r.mount(t)===!1||(r.emit("beforeInit"),r.params.breakpoints&&r.setBreakpoint(),r.addClasses(),r.updateSize(),r.updateSlides(),r.params.watchOverflow&&r.checkOverflow(),r.params.grabCursor&&r.enabled&&r.setGrabCursor(),r.params.loop&&r.virtual&&r.params.virtual.enabled?r.slideTo(r.params.initialSlide+r.virtual.slidesBefore,0,r.params.runCallbacksOnInit,!1,!0):r.slideTo(r.params.initialSlide,0,r.params.runCallbacksOnInit,!1,!0),r.params.loop&&r.loopCreate(),r.attachEvents(),[...r.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?ka(r,i):i.addEventListener("load",o=>{ka(r,o.target)})}),Pu(r),r.initialized=!0,Pu(r),r.emit("init"),r.emit("afterInit")),r}destroy(t,r){t===void 0&&(t=!0),r===void 0&&(r=!0);const n=this,{params:i,el:o,wrapperEl:a,slides:s}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),r&&(n.removeClasses(),o.removeAttribute("style"),a.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),t!==!1&&(n.el.swiper=null,bb(n)),n.destroyed=!0),null}static extendDefaults(t){dt(ac,t)}static get extendedDefaults(){return ac}static get defaults(){return zp}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const r=ut.prototype.__modules__;typeof t=="function"&&r.indexOf(t)<0&&r.push(t)}static use(t){return Array.isArray(t)?(t.forEach(r=>ut.installModule(r)),ut):(ut.installModule(t),ut)}};Object.keys(oc).forEach(e=>{Object.keys(oc[e]).forEach(t=>{ut.prototype[t]=oc[e][t]})});ut.use([zb,Lb]);const E1=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function un(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function kr(e,t){const r=["__proto__","constructor","prototype"];Object.keys(t).filter(n=>r.indexOf(n)<0).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:un(t[n])&&un(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:kr(e[n],t[n]):e[n]=t[n]})}function C1(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function T1(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function k1(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function _1(e){e===void 0&&(e="");const t=e.split(" ").map(n=>n.trim()).filter(n=>!!n),r=[];return t.forEach(n=>{r.indexOf(n)<0&&r.push(n)}),r.join(" ")}function j7(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function F7(e){let{swiper:t,slides:r,passedParams:n,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const c=i.filter(k=>k!=="children"&&k!=="direction"&&k!=="wrapperClass"),{params:u,pagination:f,navigation:m,scrollbar:v,virtual:x,thumbs:w}=t;let C,g,d,h,y,b,_,P;i.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(C=!0),i.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(g=!0),i.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(d=!0),i.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||s)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(h=!0),i.includes("navigation")&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||o)&&(u.navigation||u.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(y=!0);const I=k=>{!t[k]||(t[k].destroy(),k==="navigation"?(t.isElement&&(t[k].prevEl.remove(),t[k].nextEl.remove()),u[k].prevEl=void 0,u[k].nextEl=void 0,t[k].prevEl=void 0,t[k].nextEl=void 0):(t.isElement&&t[k].el.remove(),u[k].el=void 0,t[k].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!n.loop?b=!0:!u.loop&&n.loop?_=!0:P=!0),c.forEach(k=>{if(un(u[k])&&un(n[k]))kr(u[k],n[k]),(k==="navigation"||k==="pagination"||k==="scrollbar")&&"enabled"in n[k]&&!n[k].enabled&&I(k);else{const B=n[k];(B===!0||B===!1)&&(k==="navigation"||k==="pagination"||k==="scrollbar")?B===!1&&I(k):u[k]=n[k]}}),c.includes("controller")&&!g&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&r&&x&&u.virtual.enabled&&(x.slides=r,x.update(!0)),i.includes("children")&&r&&u.loop&&(P=!0),C&&w.init()&&w.update(!0),g&&(t.controller.control=u.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),h&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),y&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.nextButtonSvg,t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.prevButtonSvg,t.el.appendChild(a))),o&&(u.navigation.nextEl=o),a&&(u.navigation.prevEl=a),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=n.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=n.allowSlidePrev),i.includes("direction")&&t.changeDirection(n.direction,!1),(b||P)&&t.loopDestroy(),(_||P)&&t.loopCreate(),t.update()}function H7(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const r={on:{}},n={},i={};kr(r,ut.defaults),kr(r,ut.extendedDefaults),r._emitClasses=!0,r.init=!1;const o={},a=E1.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?un(e[l])?(r[l]={},i[l]={},kr(r[l],e[l]),kr(i[l],e[l])):(r[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?n[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:r.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{r[l]===!0&&(r[l]={}),r[l]===!1&&delete r[l]}),{params:r,passedParams:i,rest:o,events:n}}function B7(e,t){let{el:r,nextEl:n,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:s}=e;C1(t)&&n&&i&&(s.params.navigation.nextEl=n,s.originalParams.navigation.nextEl=n,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),T1(t)&&o&&(s.params.pagination.el=o,s.originalParams.pagination.el=o),k1(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(r)}function U7(e,t,r,n,i){const o=[];if(!t)return o;const a=l=>{o.indexOf(l)<0&&o.push(l)};if(r&&n){const l=n.map(i),c=r.map(i);l.join("")!==c.join("")&&a("children"),n.length!==r.length&&a("children")}return E1.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(un(e[l])&&un(t[l])){const c=Object.keys(e[l]),u=Object.keys(t[l]);c.length!==u.length?a(l):(c.forEach(f=>{e[l][f]!==t[l][f]&&a(l)}),u.forEach(f=>{e[l][f]!==t[l][f]&&a(l)}))}else e[l]!==t[l]&&a(l)}),o}const V7=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ss.apply(this,arguments)}function O1(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function P1(e){const t=[];return ie.Children.toArray(e).forEach(r=>{O1(r)?t.push(r):r.props&&r.props.children&&P1(r.props.children).forEach(n=>t.push(n))}),t}function W7(e){const t=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ie.Children.toArray(e).forEach(n=>{if(O1(n))t.push(n);else if(n.props&&n.props.slot&&r[n.props.slot])r[n.props.slot].push(n);else if(n.props&&n.props.children){const i=P1(n.props.children);i.length>0?i.forEach(o=>t.push(o)):r["container-end"].push(n)}else r["container-end"].push(n)}),{slides:t,slots:r}}function G7(e,t,r){if(!r)return null;const n=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:o,to:a}=r,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,c=[];for(let u=s;u<l;u+=1)u>=o&&u<=a&&c.push(t[n(u)]);return c.map((u,f)=>ie.cloneElement(u,{swiper:e,style:i,key:`slide-${f}`}))}function Hi(e,t){return typeof window>"u"?E.exports.useEffect(e,t):E.exports.useLayoutEffect(e,t)}const Lp=E.exports.createContext(null),Y7=E.exports.createContext(null),D1=E.exports.forwardRef(function(e,t){let{className:r,tag:n="div",wrapperTag:i="div",children:o,onSwiper:a,...s}=e===void 0?{}:e,l=!1;const[c,u]=E.exports.useState("swiper"),[f,m]=E.exports.useState(null),[v,x]=E.exports.useState(!1),w=E.exports.useRef(!1),C=E.exports.useRef(null),g=E.exports.useRef(null),d=E.exports.useRef(null),h=E.exports.useRef(null),y=E.exports.useRef(null),b=E.exports.useRef(null),_=E.exports.useRef(null),P=E.exports.useRef(null),{params:I,passedParams:k,rest:B,events:z}=H7(s),{slides:R,slots:j}=W7(o),Q=()=>{x(!v)};Object.assign(I.on,{_containerClasses(Y,K){u(K)}});const J=()=>{Object.assign(I.on,z),l=!0;const Y={...I};if(delete Y.wrapperClass,g.current=new ut(Y),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=R;const K={cache:!1,slides:R,renderExternal:m,renderExternalUpdate:!1};kr(g.current.params.virtual,K),kr(g.current.originalParams.virtual,K)}};C.current||J(),g.current&&g.current.on("_beforeBreakpoint",Q);const se=()=>{l||!z||!g.current||Object.keys(z).forEach(Y=>{g.current.on(Y,z[Y])})},ve=()=>{!z||!g.current||Object.keys(z).forEach(Y=>{g.current.off(Y,z[Y])})};E.exports.useEffect(()=>()=>{g.current&&g.current.off("_beforeBreakpoint",Q)}),E.exports.useEffect(()=>{!w.current&&g.current&&(g.current.emitSlidesClasses(),w.current=!0)}),Hi(()=>{if(t&&(t.current=C.current),!!C.current)return g.current.destroyed&&J(),B7({el:C.current,nextEl:y.current,prevEl:b.current,paginationEl:_.current,scrollbarEl:P.current,swiper:g.current},I),a&&a(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),Hi(()=>{se();const Y=U7(k,d.current,R,h.current,K=>K.key);return d.current=k,h.current=R,Y.length&&g.current&&!g.current.destroyed&&F7({swiper:g.current,slides:R,passedParams:k,changedParams:Y,nextEl:y.current,prevEl:b.current,scrollbarEl:P.current,paginationEl:_.current}),()=>{ve()}}),Hi(()=>{V7(g.current)},[f]);function F(){return I.virtual?G7(g.current,R,f):R.map((Y,K)=>ie.cloneElement(Y,{swiper:g.current,swiperSlideIndex:K}))}return ie.createElement(n,ss({ref:C,className:_1(`${c}${r?` ${r}`:""}`)},B),ie.createElement(Y7.Provider,{value:g.current},j["container-start"],ie.createElement(i,{className:j7(I.wrapperClass)},j["wrapper-start"],F(),j["wrapper-end"]),C1(I)&&ie.createElement(ie.Fragment,null,ie.createElement("div",{ref:b,className:"swiper-button-prev"}),ie.createElement("div",{ref:y,className:"swiper-button-next"})),k1(I)&&ie.createElement("div",{ref:P,className:"swiper-scrollbar"}),T1(I)&&ie.createElement("div",{ref:_,className:"swiper-pagination"}),j["container-end"]))});D1.displayName="Swiper";const Di=E.exports.forwardRef(function(e,t){let{tag:r="div",children:n,className:i="",swiper:o,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:c,...u}=e===void 0?{}:e;const f=E.exports.useRef(null),[m,v]=E.exports.useState("swiper-slide"),[x,w]=E.exports.useState(!1);function C(y,b,_){b===f.current&&v(_)}Hi(()=>{if(typeof c<"u"&&(f.current.swiperSlideIndex=c),t&&(t.current=f.current),!(!f.current||!o)){if(o.destroyed){m!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",C),()=>{!o||o.off("_slideClass",C)}}}),Hi(()=>{o&&f.current&&!o.destroyed&&v(o.getSlideClasses(f.current))},[o]);const g={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},d=()=>typeof n=="function"?n(g):n,h=()=>{w(!0)};return ie.createElement(r,ss({ref:f,className:_1(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:h},u),a&&ie.createElement(Lp.Provider,{value:g},ie.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},d(),s&&!x&&ie.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&ie.createElement(Lp.Provider,{value:g},d(),s&&!x&&ie.createElement("div",{className:"swiper-lazy-preloader"})))});Di.displayName="SwiperSlide";function q7(e,t,r,n){return e.params.createElements&&Object.keys(n).forEach(i=>{if(!r[i]&&r.auto===!0){let o=Yt(e.el,`.${n[i]}`)[0];o||(o=y1("div",n[i]),o.className=n[i],e.el.append(o)),r[i]=o,t[i]=o}}),r}function Ci(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function X7(e){let{swiper:t,extendParams:r,on:n,emit:i}=e;const o="swiper-pagination";r({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,s=0;const l=d=>(Array.isArray(d)||(d=[d].filter(h=>!!h)),d);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(d,h){const{bulletActiveClass:y}=t.params.pagination;!d||(d=d[`${h==="prev"?"previous":"next"}ElementSibling`],d&&(d.classList.add(`${y}-${h}`),d=d[`${h==="prev"?"previous":"next"}ElementSibling`],d&&d.classList.add(`${y}-${h}-${h}`)))}function f(d){const h=d.target.closest(Ci(t.params.pagination.bulletClass));if(!h)return;d.preventDefault();const y=as(h)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===y)return;const b=t.getSlideIndexByData(y),_=t.getSlideIndexByData(t.realIndex);b>t.slides.length-t.loopedSlides&&t.loopFix({direction:b>_?"next":"prev",activeSlideIndex:b,slideTo:!1}),t.slideToLoop(y)}else t.slideTo(y)}function m(){const d=t.rtl,h=t.params.pagination;if(c())return;let y=t.pagination.el;y=l(y);let b,_;const P=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(P/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(_=t.previousRealIndex||0,b=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(b=t.snapIndex,_=t.previousSnapIndex):(_=t.previousIndex||0,b=t.activeIndex||0),h.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const k=t.pagination.bullets;let B,z,R;if(h.dynamicBullets&&(a=Ou(k[0],t.isHorizontal()?"width":"height",!0),y.forEach(j=>{j.style[t.isHorizontal()?"width":"height"]=`${a*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&_!==void 0&&(s+=b-(_||0),s>h.dynamicMainBullets-1?s=h.dynamicMainBullets-1:s<0&&(s=0)),B=Math.max(b-s,0),z=B+(Math.min(k.length,h.dynamicMainBullets)-1),R=(z+B)/2),k.forEach(j=>{const Q=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(J=>`${h.bulletActiveClass}${J}`)].map(J=>typeof J=="string"&&J.includes(" ")?J.split(" "):J).flat();j.classList.remove(...Q)}),y.length>1)k.forEach(j=>{const Q=as(j);Q===b?j.classList.add(...h.bulletActiveClass.split(" ")):t.isElement&&j.setAttribute("part","bullet"),h.dynamicBullets&&(Q>=B&&Q<=z&&j.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),Q===B&&u(j,"prev"),Q===z&&u(j,"next"))});else{const j=k[b];if(j&&j.classList.add(...h.bulletActiveClass.split(" ")),t.isElement&&k.forEach((Q,J)=>{Q.setAttribute("part",J===b?"bullet-active":"bullet")}),h.dynamicBullets){const Q=k[B],J=k[z];for(let se=B;se<=z;se+=1)k[se]&&k[se].classList.add(...`${h.bulletActiveClass}-main`.split(" "));u(Q,"prev"),u(J,"next")}}if(h.dynamicBullets){const j=Math.min(k.length,h.dynamicMainBullets+4),Q=(a*j-a)/2-R*a,J=d?"right":"left";k.forEach(se=>{se.style[t.isHorizontal()?J:"top"]=`${Q}px`})}}y.forEach((k,B)=>{if(h.type==="fraction"&&(k.querySelectorAll(Ci(h.currentClass)).forEach(z=>{z.textContent=h.formatFractionCurrent(b+1)}),k.querySelectorAll(Ci(h.totalClass)).forEach(z=>{z.textContent=h.formatFractionTotal(I)})),h.type==="progressbar"){let z;h.progressbarOpposite?z=t.isHorizontal()?"vertical":"horizontal":z=t.isHorizontal()?"horizontal":"vertical";const R=(b+1)/I;let j=1,Q=1;z==="horizontal"?j=R:Q=R,k.querySelectorAll(Ci(h.progressbarFillClass)).forEach(J=>{J.style.transform=`translate3d(0,0,0) scaleX(${j}) scaleY(${Q})`,J.style.transitionDuration=`${t.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(k.innerHTML=h.renderCustom(t,b+1,I),B===0&&i("paginationRender",k)):(B===0&&i("paginationRender",k),i("paginationUpdate",k)),t.params.watchOverflow&&t.enabled&&k.classList[t.isLocked?"add":"remove"](h.lockClass)})}function v(){const d=t.params.pagination;if(c())return;const h=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let y=t.pagination.el;y=l(y);let b="";if(d.type==="bullets"){let _=t.params.loop?Math.ceil(h/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&_>h&&(_=h);for(let P=0;P<_;P+=1)d.renderBullet?b+=d.renderBullet.call(t,P,d.bulletClass):b+=`<${d.bulletElement} ${t.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`}d.type==="fraction"&&(d.renderFraction?b=d.renderFraction.call(t,d.currentClass,d.totalClass):b=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),d.type==="progressbar"&&(d.renderProgressbar?b=d.renderProgressbar.call(t,d.progressbarFillClass):b=`<span class="${d.progressbarFillClass}"></span>`),t.pagination.bullets=[],y.forEach(_=>{d.type!=="custom"&&(_.innerHTML=b||""),d.type==="bullets"&&t.pagination.bullets.push(..._.querySelectorAll(Ci(d.bulletClass)))}),d.type!=="custom"&&i("paginationRender",y[0])}function x(){t.params.pagination=q7(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const d=t.params.pagination;if(!d.el)return;let h;typeof d.el=="string"&&t.isElement&&(h=t.el.querySelector(d.el)),!h&&typeof d.el=="string"&&(h=[...document.querySelectorAll(d.el)]),h||(h=d.el),!(!h||h.length===0)&&(t.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...t.el.querySelectorAll(d.el)],h.length>1&&(h=h.filter(y=>w1(y,".swiper")[0]===t.el)[0])),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(t.pagination,{el:h}),h=l(h),h.forEach(y=>{d.type==="bullets"&&d.clickable&&y.classList.add(d.clickableClass),y.classList.add(d.modifierClass+d.type),y.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(y.classList.add(`${d.modifierClass}${d.type}-dynamic`),s=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&y.classList.add(d.progressbarOppositeClass),d.clickable&&y.addEventListener("click",f),t.enabled||y.classList.add(d.lockClass)}))}function w(){const d=t.params.pagination;if(c())return;let h=t.pagination.el;h&&(h=l(h),h.forEach(y=>{y.classList.remove(d.hiddenClass),y.classList.remove(d.modifierClass+d.type),y.classList.remove(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&y.removeEventListener("click",f)})),t.pagination.bullets&&t.pagination.bullets.forEach(y=>y.classList.remove(...d.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const d=t.params.pagination;let{el:h}=t.pagination;h=l(h),h.forEach(y=>{y.classList.remove(d.horizontalClass,d.verticalClass),y.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass)})}),n("init",()=>{t.params.pagination.enabled===!1?g():(x(),v(),m())}),n("activeIndexChange",()=>{typeof t.snapIndex>"u"&&m()}),n("snapIndexChange",()=>{m()}),n("snapGridLengthChange",()=>{v(),m()}),n("destroy",()=>{w()}),n("enable disable",()=>{let{el:d}=t.pagination;d&&(d=l(d),d.forEach(h=>h.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),n("lock unlock",()=>{m()}),n("click",(d,h)=>{const y=h.target,b=l(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&b&&b.length>0&&!y.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&y===t.navigation.nextEl||t.navigation.prevEl&&y===t.navigation.prevEl))return;const _=b[0].classList.contains(t.params.pagination.hiddenClass);i(_===!0?"paginationShow":"paginationHide"),b.forEach(P=>P.classList.toggle(t.params.pagination.hiddenClass))}});const C=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=l(d),d.forEach(h=>h.classList.remove(t.params.pagination.paginationDisabledClass))),x(),v(),m()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=l(d),d.forEach(h=>h.classList.add(t.params.pagination.paginationDisabledClass))),w()};Object.assign(t.pagination,{enable:C,disable:g,render:v,update:m,init:x,destroy:w})}function Q7(e){let{swiper:t,extendParams:r,emit:n,once:i}=e;r({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function o(){if(t.params.cssMode)return;const l=t.getTranslate();t.setTranslate(l),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function a(){if(t.params.cssMode)return;const{touchEventsData:l,touches:c}=t;l.velocities.length===0&&l.velocities.push({position:c[t.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:c[t.isHorizontal()?"currentX":"currentY"],time:nn()})}function s(l){let{currentPos:c}=l;if(t.params.cssMode)return;const{params:u,wrapperEl:f,rtlTranslate:m,snapGrid:v,touchEventsData:x}=t,C=nn()-x.touchStartTime;if(c<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(c>-t.maxTranslate()){t.slides.length<v.length?t.slideTo(v.length-1):t.slideTo(t.slides.length-1);return}if(u.freeMode.momentum){if(x.velocities.length>1){const I=x.velocities.pop(),k=x.velocities.pop(),B=I.position-k.position,z=I.time-k.time;t.velocity=B/z,t.velocity/=2,Math.abs(t.velocity)<u.freeMode.minimumVelocity&&(t.velocity=0),(z>150||nn()-I.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=u.freeMode.momentumVelocityRatio,x.velocities.length=0;let g=1e3*u.freeMode.momentumRatio;const d=t.velocity*g;let h=t.translate+d;m&&(h=-h);let y=!1,b;const _=Math.abs(t.velocity)*20*u.freeMode.momentumBounceRatio;let P;if(h<t.maxTranslate())u.freeMode.momentumBounce?(h+t.maxTranslate()<-_&&(h=t.maxTranslate()-_),b=t.maxTranslate(),y=!0,x.allowMomentumBounce=!0):h=t.maxTranslate(),u.loop&&u.centeredSlides&&(P=!0);else if(h>t.minTranslate())u.freeMode.momentumBounce?(h-t.minTranslate()>_&&(h=t.minTranslate()+_),b=t.minTranslate(),y=!0,x.allowMomentumBounce=!0):h=t.minTranslate(),u.loop&&u.centeredSlides&&(P=!0);else if(u.freeMode.sticky){let I;for(let k=0;k<v.length;k+=1)if(v[k]>-h){I=k;break}Math.abs(v[I]-h)<Math.abs(v[I-1]-h)||t.swipeDirection==="next"?h=v[I]:h=v[I-1],h=-h}if(P&&i("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(m?g=Math.abs((-h-t.translate)/t.velocity):g=Math.abs((h-t.translate)/t.velocity),u.freeMode.sticky){const I=Math.abs((m?-h:h)-t.translate),k=t.slidesSizesGrid[t.activeIndex];I<k?g=u.speed:I<2*k?g=u.speed*1.5:g=u.speed*2.5}}else if(u.freeMode.sticky){t.slideToClosest();return}u.freeMode.momentumBounce&&y?(t.updateProgress(b),t.setTransition(g),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating=!0,ec(f,()=>{!t||t.destroyed||!x.allowMomentumBounce||(n("momentumBounce"),t.setTransition(u.speed),setTimeout(()=>{t.setTranslate(b),ec(f,()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(n("_freeModeNoMomentumRelease"),t.updateProgress(h),t.setTransition(g),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,ec(f,()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(h),t.updateActiveIndex(),t.updateSlidesClasses()}else if(u.freeMode.sticky){t.slideToClosest();return}else u.freeMode&&n("_freeModeNoMomentumRelease");(!u.freeMode.momentum||C>=u.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:o,onTouchMove:a,onTouchEnd:s}})}const K7=T.section`
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
    
`,Z7=T.div`
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
    
`,ca=T.div`
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
`;function J7(){return p(K7,{children:D(Z7,{className:"container",children:[p("h2",{children:"What they´ve said"}),D(D1,{slidesPerView:1,spaceBetween:30,freeMode:!0,pagination:{clickable:!0},breakpoints:{640:{width:640,slidesPerView:2},768:{width:768,slidesPerView:3,spaceBetween:40}},modules:[Q7,X7],className:"mySwiper",children:[p(Di,{children:D(ca,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-anisha.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Anisha Li"}),p("p",{children:'"Manage has supercharged our team`s workflow.The ability to maintain visibility on larger milestones at all times keeps eveyone motvated"'})]})}),p(Di,{children:D(ca,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-ali.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Ali Bravo"}),p("p",{children:'"We Have been able to cancel so many other subcriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused."'})]})}),p(Di,{children:D(ca,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-richard.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Richard Watts"}),p("p",{children:'"Manage allows us to provide structure and process.It keeps us organized and focused. I can`t stop recommending them to everyone i talk to!"'})]})}),p(Di,{children:D(ca,{children:[p("div",{className:"container-avatar",children:p("img",{src:"imagenes-manage/avatar-shanai.png",alt:"Anisha Li"})}),p("h4",{className:"title-avatar",children:"Shanai Gough"}),p("p",{children:'"Their software allows us to track, manage collaborate on our projects from anywhere.it keeps the whole team in-sync without being intrusive."'})]})})]}),p("button",{className:"btn-started",children:"Get Started"})]})})}const eE=T.div`
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
`;function tE(){return D(eE,{children:[p(rb,{}),p(ab,{}),p(ub,{}),p(J7,{}),p(pb,{}),p(xb,{})]})}const rE=T.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`,nE=T.div`
    padding-top: 4rem;
    min-height: 100vh;
    background-color: ${e=>e.color=="dark"?"rgb(29, 31, 27)":"white"};
    display: flex;
    align-items: center;
    flex-direction: column;
`,iE=T.div`
    width: 100%;
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    button{
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        box-shadow: 0px 0px 8px 4px ${e=>e.color=="dark"?"transparent":"gray"};
        background-color: ${e=>e.color=="dark"?"black":"white"};
        color: ${e=>e.color=="dark"?"white":"black"};
        width: 88px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    button span{
        
        display: flex;
        font-size: 1.2rem;
        font-weight: 800;
    }
    button:hover{
        transition: background-color 0.3s ease-in-out , color 0.3s ease-in-out;
        background-color: ${e=>e.color=="dark"?"white":"black"};
        color: ${e=>e.color=="dark"?"black":"white"};
    }
    @media screen and (min-width:769px) {
        &{
            padding-left: 0;
            padding-right: 0;
        }
    }
    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }
`,oE=T.section`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
    }
`,aE=T.div`
    display: flex;
    width: 100%;
    box-shadow: 0px 0px 8px 4px ${e=>e.color=="dark"?"transparent":"gray"};
    max-height: 500px;
    img{
        object-fit: cover;
        display: flex;
        width: 100%;
        height: auto;
    }
`,sE=T.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: transparent;
    gap: 1rem;
    padding: 1rem;
    background-color: ${e=>e.color=="dark"?"black":"white"};
    box-shadow: 0px 0px 8px 4px ${e=>e.color=="dark"?"transparent":"gray"};
    color: ${e=>e.color=="dark"?"white":"black"};
`,lE=T.div`
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h1{
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }
    p{
        gap:0.5rem;
        display: flex;
        font-size: 1.1rem;
    }
    span{
        font-weight: 800;
    }
`;function cE(){let{pais:e}=HS();const[t,r]=E.exports.useState([]),{theme:n}=E.exports.useContext(wt),i=vn();return E.exports.useEffect(()=>{(()=>{fetch(`https://restcountries.com/v3.1/name/${e}`).then(s=>s.json()).then(s=>{r([...s])}).catch(s=>console.log(s))})()},[]),D(ur,{children:[p(rE,{children:p(h1,{})}),D(nE,{color:n,children:[p(iE,{className:"container",color:n,children:D("button",{onClick:()=>i(-1),children:[p("span",{children:p(Cx,{})}),"Back"]})}),t.length>0?D(oE,{className:"container",children:[p(aE,{color:n,children:p("img",{src:t[0].flags.svg,alt:"algo"})}),p(sE,{color:n,children:D(lE,{children:[p("h1",{children:t[0].name.common}),D("p",{children:[p("span",{children:"Población:"})," ",t[0].population]}),D("p",{children:[p("span",{children:"Región:"}),"  ",t[0].region]}),D("p",{children:[p("span",{children:"Subregión:"}),"  ",t[0].subregion]}),D("p",{children:[p("span",{children:"Capital:"}),"  ",t[0].capital.join(" ")]}),D("p",{children:[p("span",{children:"Tld:"}),t[0].tld]}),D("p",{children:[p("span",{children:"Moneda: "}),Object.keys(t[0].currencies)]}),D("p",{children:[p("span",{children:"Lenguajes:"})," ",Object.values(t[0].languages).join(" , ")]}),t[0].borders&&D("p",{children:[p("span",{children:"Países Fronterizos:"}),t[0].borders.join(" , ")]})]})})]}):p(nf,{})]})]})}function uE(){return p(Vd,{children:p(cE,{})})}const M1=E.exports.createContext({dragDropManager:void 0});function bt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ap=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sc=function(){return Math.random().toString(36).substring(7).split("").join(".")},Rp={INIT:"@@redux/INIT"+sc(),REPLACE:"@@redux/REPLACE"+sc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sc()}};function dE(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function I1(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(bt(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(bt(1));return r(I1)(e,t)}if(typeof e!="function")throw new Error(bt(2));var i=e,o=t,a=[],s=a,l=!1;function c(){s===a&&(s=a.slice())}function u(){if(l)throw new Error(bt(3));return o}function f(w){if(typeof w!="function")throw new Error(bt(4));if(l)throw new Error(bt(5));var C=!0;return c(),s.push(w),function(){if(!!C){if(l)throw new Error(bt(6));C=!1,c();var d=s.indexOf(w);s.splice(d,1),a=null}}}function m(w){if(!dE(w))throw new Error(bt(7));if(typeof w.type>"u")throw new Error(bt(8));if(l)throw new Error(bt(9));try{l=!0,o=i(o,w)}finally{l=!1}for(var C=a=s,g=0;g<C.length;g++){var d=C[g];d()}return w}function v(w){if(typeof w!="function")throw new Error(bt(10));i=w,m({type:Rp.REPLACE})}function x(){var w,C=f;return w={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(bt(11));function h(){d.next&&d.next(u())}h();var y=C(h);return{unsubscribe:y}}},w[Ap]=function(){return this},w}return m({type:Rp.INIT}),n={dispatch:m,subscribe:f,getState:u,replaceReducer:v},n[Ap]=x,n}function re(e,t,...r){if(fE()&&t===void 0)throw new Error("invariant requires an error message argument");if(!e){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let i=0;n=new Error(t.replace(/%s/g,function(){return r[i++]})),n.name="Invariant Violation"}throw n.framesToPop=1,n}}function fE(){return typeof process<"u"&&process.env.NODE_ENV==="production"}function pE(e,t,r){return t.split(".").reduce((n,i)=>n&&n[i]?n[i]:r||null,e)}function hE(e,t){return e.filter(r=>r!==t)}function z1(e){return typeof e=="object"}function mE(e,t){const r=new Map,n=o=>{r.set(o,r.has(o)?r.get(o)+1:1)};e.forEach(n),t.forEach(n);const i=[];return r.forEach((o,a)=>{o===1&&i.push(a)}),i}function gE(e,t){return e.filter(r=>t.indexOf(r)>-1)}const sf="dnd-core/INIT_COORDS",Ys="dnd-core/BEGIN_DRAG",lf="dnd-core/PUBLISH_DRAG_SOURCE",qs="dnd-core/HOVER",Xs="dnd-core/DROP",Qs="dnd-core/END_DRAG";function Np(e,t){return{type:sf,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}const vE={type:sf,payload:{clientOffset:null,sourceClientOffset:null}};function yE(e){return function(r=[],n={publishSource:!0}){const{publishSource:i=!0,clientOffset:o,getSourceClientOffset:a}=n,s=e.getMonitor(),l=e.getRegistry();e.dispatch(Np(o)),wE(r,s,l);const c=bE(r,s);if(c==null){e.dispatch(vE);return}let u=null;if(o){if(!a)throw new Error("getSourceClientOffset must be defined");xE(a),u=a(c)}e.dispatch(Np(o,u));const m=l.getSource(c).beginDrag(s,c);if(m==null)return;SE(m),l.pinSource(c);const v=l.getSourceType(c);return{type:Ys,payload:{itemType:v,item:m,sourceId:c,clientOffset:o||null,sourceClientOffset:u||null,isSourcePublic:!!i}}}}function wE(e,t,r){re(!t.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(n){re(r.getSource(n),"Expected sourceIds to be registered.")})}function xE(e){re(typeof e=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function SE(e){re(z1(e),"Item must be an object.")}function bE(e,t){let r=null;for(let n=e.length-1;n>=0;n--)if(t.canDragSource(e[n])){r=e[n];break}return r}function EE(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function CE(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){EE(e,i,r[i])})}return e}function TE(e){return function(r={}){const n=e.getMonitor(),i=e.getRegistry();kE(n),PE(n).forEach((a,s)=>{const l=_E(a,s,i,n),c={type:Xs,payload:{dropResult:CE({},r,l)}};e.dispatch(c)})}}function kE(e){re(e.isDragging(),"Cannot call drop while not dragging."),re(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function _E(e,t,r,n){const i=r.getTarget(e);let o=i?i.drop(n,e):void 0;return OE(o),typeof o>"u"&&(o=t===0?{}:n.getDropResult()),o}function OE(e){re(typeof e>"u"||z1(e),"Drop result must either be an object or undefined.")}function PE(e){const t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t}function DE(e){return function(){const r=e.getMonitor(),n=e.getRegistry();ME(r);const i=r.getSourceId();return i!=null&&(n.getSource(i,!0).endDrag(r,i),n.unpinSource()),{type:Qs}}}function ME(e){re(e.isDragging(),"Cannot call endDrag while not dragging.")}function Du(e,t){return t===null?e===null:Array.isArray(e)?e.some(r=>r===t):e===t}function IE(e){return function(r,{clientOffset:n}={}){zE(r);const i=r.slice(0),o=e.getMonitor(),a=e.getRegistry(),s=o.getItemType();return AE(i,a,s),LE(i,o,a),RE(i,o,a),{type:qs,payload:{targetIds:i,clientOffset:n||null}}}}function zE(e){re(Array.isArray(e),"Expected targetIds to be an array.")}function LE(e,t,r){re(t.isDragging(),"Cannot call hover while not dragging."),re(!t.didDrop(),"Cannot call hover after drop.");for(let n=0;n<e.length;n++){const i=e[n];re(e.lastIndexOf(i)===n,"Expected targetIds to be unique in the passed array.");const o=r.getTarget(i);re(o,"Expected targetIds to be registered.")}}function AE(e,t,r){for(let n=e.length-1;n>=0;n--){const i=e[n],o=t.getTargetType(i);Du(o,r)||e.splice(n,1)}}function RE(e,t,r){e.forEach(function(n){r.getTarget(n).hover(t,n)})}function NE(e){return function(){if(e.getMonitor().isDragging())return{type:lf}}}function $E(e){return{beginDrag:yE(e),publishDragSource:NE(e),hover:IE(e),drop:TE(e),endDrag:DE(e)}}class jE{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:r}=this.store;function n(o){return(...a)=>{const s=o.apply(t,a);typeof s<"u"&&r(s)}}const i=$E(this);return Object.keys(i).reduce((o,a)=>{const s=i[a];return o[a]=n(s),o},{})}dispatch(t){this.store.dispatch(t)}constructor(t,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const n=this.store.getState().refCount>0;this.backend&&(n&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!n&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=r,t.subscribe(this.handleRefCountChange)}}function FE(e,t){return{x:e.x+t.x,y:e.y+t.y}}function L1(e,t){return{x:e.x-t.x,y:e.y-t.y}}function HE(e){const{clientOffset:t,initialClientOffset:r,initialSourceClientOffset:n}=e;return!t||!r||!n?null:L1(FE(t,n),r)}function BE(e){const{clientOffset:t,initialClientOffset:r}=e;return!t||!r?null:L1(t,r)}const Bi=[],cf=[];Bi.__IS_NONE__=!0;cf.__IS_ALL__=!0;function UE(e,t){return e===Bi?!1:e===cf||typeof t>"u"?!0:gE(t,e).length>0}class VE{subscribeToStateChange(t,r={}){const{handlerIds:n}=r;re(typeof t=="function","listener must be a function."),re(typeof n>"u"||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let i=this.store.getState().stateId;const o=()=>{const a=this.store.getState(),s=a.stateId;try{s===i||s===i+1&&!UE(a.dirtyHandlerIds,n)||t()}finally{i=s}};return this.store.subscribe(o)}subscribeToOffsetChange(t){re(typeof t=="function","listener must be a function.");let r=this.store.getState().dragOffset;const n=()=>{const i=this.store.getState().dragOffset;i!==r&&(r=i,t())};return this.store.subscribe(n)}canDragSource(t){if(!t)return!1;const r=this.registry.getSource(t);return re(r,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:r.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const r=this.registry.getTarget(t);if(re(r,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const n=this.registry.getTargetType(t),i=this.getItemType();return Du(n,i)&&r.canDrop(this,t)}isDragging(){return Boolean(this.getItemType())}isDraggingSource(t){if(!t)return!1;const r=this.registry.getSource(t,!0);if(re(r,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const n=this.registry.getSourceType(t),i=this.getItemType();return n!==i?!1:r.isDragging(this,t)}isOverTarget(t,r={shallow:!1}){if(!t)return!1;const{shallow:n}=r;if(!this.isDragging())return!1;const i=this.registry.getTargetType(t),o=this.getItemType();if(o&&!Du(i,o))return!1;const a=this.getTargetIds();if(!a.length)return!1;const s=a.indexOf(t);return n?s===a.length-1:s>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return Boolean(this.store.getState().dragOperation.isSourcePublic)}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return HE(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return BE(this.store.getState().dragOffset)}constructor(t,r){this.store=t,this.registry=r}}const $p=typeof global<"u"?global:self,A1=$p.MutationObserver||$p.WebKitMutationObserver;function R1(e){return function(){const r=setTimeout(i,0),n=setInterval(i,50);function i(){clearTimeout(r),clearInterval(n),e()}}}function WE(e){let t=1;const r=new A1(e),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}const GE=typeof A1=="function"?WE:R1;class YE{enqueueTask(t){const{queue:r,requestFlush:n}=this;r.length||(n(),this.flushing=!0),r[r.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const r=this.index;if(this.index++,t[r].call(),this.index>this.capacity){for(let n=0,i=t.length-this.index;n<i;n++)t[n]=t[n+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=GE(this.flush),this.requestErrorThrow=R1(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class qE{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,r){this.onError=t,this.release=r,this.task=null}}class XE{create(t){const r=this.freeTasks,n=r.length?r.pop():new qE(this.onError,i=>r[r.length]=i);return n.task=t,n}constructor(t){this.onError=t,this.freeTasks=[]}}const N1=new YE,QE=new XE(N1.registerPendingError);function KE(e){N1.enqueueTask(QE.create(e))}const uf="dnd-core/ADD_SOURCE",df="dnd-core/ADD_TARGET",ff="dnd-core/REMOVE_SOURCE",Ks="dnd-core/REMOVE_TARGET";function ZE(e){return{type:uf,payload:{sourceId:e}}}function JE(e){return{type:df,payload:{targetId:e}}}function eC(e){return{type:ff,payload:{sourceId:e}}}function tC(e){return{type:Ks,payload:{targetId:e}}}function rC(e){re(typeof e.canDrag=="function","Expected canDrag to be a function."),re(typeof e.beginDrag=="function","Expected beginDrag to be a function."),re(typeof e.endDrag=="function","Expected endDrag to be a function.")}function nC(e){re(typeof e.canDrop=="function","Expected canDrop to be a function."),re(typeof e.hover=="function","Expected hover to be a function."),re(typeof e.drop=="function","Expected beginDrag to be a function.")}function Mu(e,t){if(t&&Array.isArray(e)){e.forEach(r=>Mu(r,!1));return}re(typeof e=="string"||typeof e=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var kt;(function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"})(kt||(kt={}));let iC=0;function oC(){return iC++}function aC(e){const t=oC().toString();switch(e){case kt.SOURCE:return`S${t}`;case kt.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function jp(e){switch(e[0]){case"S":return kt.SOURCE;case"T":return kt.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function Fp(e,t){const r=e.entries();let n=!1;do{const{done:i,value:[,o]}=r.next();if(o===t)return!0;n=!!i}while(!n);return!1}class sC{addSource(t,r){Mu(t),rC(r);const n=this.addHandler(kt.SOURCE,t,r);return this.store.dispatch(ZE(n)),n}addTarget(t,r){Mu(t,!0),nC(r);const n=this.addHandler(kt.TARGET,t,r);return this.store.dispatch(JE(n)),n}containsHandler(t){return Fp(this.dragSources,t)||Fp(this.dropTargets,t)}getSource(t,r=!1){return re(this.isSourceId(t),"Expected a valid source ID."),r&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return re(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return re(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return re(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return jp(t)===kt.SOURCE}isTargetId(t){return jp(t)===kt.TARGET}removeSource(t){re(this.getSource(t),"Expected an existing source."),this.store.dispatch(eC(t)),KE(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){re(this.getTarget(t),"Expected an existing target."),this.store.dispatch(tC(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const r=this.getSource(t);re(r,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=r}unpinSource(){re(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,r,n){const i=aC(t);return this.types.set(i,r),t===kt.SOURCE?this.dragSources.set(i,n):t===kt.TARGET&&this.dropTargets.set(i,n),i}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const lC=(e,t)=>e===t;function cC(e,t){return!e&&!t?!0:!e||!t?!1:e.x===t.x&&e.y===t.y}function uC(e,t,r=lC){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!r(e[n],t[n]))return!1;return!0}function dC(e=Bi,t){switch(t.type){case qs:break;case uf:case df:case Ks:case ff:return Bi;case Ys:case lf:case Qs:case Xs:default:return cf}const{targetIds:r=[],prevTargetIds:n=[]}=t.payload,i=mE(r,n);if(!(i.length>0||!uC(r,n)))return Bi;const a=n[n.length-1],s=r[r.length-1];return a!==s&&(a&&i.push(a),s&&i.push(s)),i}function fC(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pC(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){fC(e,i,r[i])})}return e}const Hp={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function hC(e=Hp,t){const{payload:r}=t;switch(t.type){case sf:case Ys:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case qs:return cC(e.clientOffset,r.clientOffset)?e:pC({},e,{clientOffset:r.clientOffset});case Qs:case Xs:return Hp;default:return e}}function mC(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function En(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){mC(e,i,r[i])})}return e}const gC={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function vC(e=gC,t){const{payload:r}=t;switch(t.type){case Ys:return En({},e,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case lf:return En({},e,{isSourcePublic:!0});case qs:return En({},e,{targetIds:r.targetIds});case Ks:return e.targetIds.indexOf(r.targetId)===-1?e:En({},e,{targetIds:hE(e.targetIds,r.targetId)});case Xs:return En({},e,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case Qs:return En({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function yC(e=0,t){switch(t.type){case uf:case df:return e+1;case ff:case Ks:return e-1;default:return e}}function wC(e=0){return e+1}function xC(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function SC(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){xC(e,i,r[i])})}return e}function bC(e={},t){return{dirtyHandlerIds:dC(e.dirtyHandlerIds,{type:t.type,payload:SC({},t.payload,{prevTargetIds:pE(e,"dragOperation.targetIds",[])})}),dragOffset:hC(e.dragOffset,t),refCount:yC(e.refCount,t),dragOperation:vC(e.dragOperation,t),stateId:wC(e.stateId)}}function EC(e,t=void 0,r={},n=!1){const i=CC(n),o=new VE(i,new sC(i)),a=new jE(i,o),s=e(a,t,r);return a.receiveBackend(s),a}function CC(e){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return I1(bC,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function TC(e,t){if(e==null)return{};var r=kC(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function kC(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}let Bp=0;const _a=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var _C=E.exports.memo(function(t){var{children:r}=t,n=TC(t,["children"]);const[i,o]=OC(n);return E.exports.useEffect(()=>{if(o){const a=$1();return++Bp,()=>{--Bp===0&&(a[_a]=null)}}},[]),p(M1.Provider,{value:i,children:r})});function OC(e){if("manager"in e)return[{dragDropManager:e.manager},!1];const t=PC(e.backend,e.context,e.options,e.debugMode),r=!e.context;return[t,r]}function PC(e,t=$1(),r,n){const i=t;return i[_a]||(i[_a]={dragDropManager:EC(e,t,r,n)}),i[_a]}function $1(){return typeof global<"u"?global:window}var DC=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,i,o;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(i=n;i--!==0;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(r).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;i--!==0;){var a=o[i];if(!e(t[a],r[a]))return!1}return!0}return t!==t&&r!==r};const dn=typeof window<"u"?E.exports.useLayoutEffect:E.exports.useEffect;function MC(e,t,r){const[n,i]=E.exports.useState(()=>t(e)),o=E.exports.useCallback(()=>{const a=t(e);DC(n,a)||(i(a),r&&r())},[n,e,r]);return dn(o),[n,o]}function IC(e,t,r){const[n,i]=MC(e,t,r);return dn(function(){const a=e.getHandlerId();if(a!=null)return e.subscribeToStateChange(i,{handlerIds:[a]})},[e,i]),n}function j1(e,t,r){return IC(t,e||(()=>({})),()=>r.reconnect())}function F1(e,t){const r=[...t||[]];return t==null&&typeof e!="function"&&r.push(e),E.exports.useMemo(()=>typeof e=="function"?e():e,r)}function zC(e){return E.exports.useMemo(()=>e.hooks.dragSource(),[e])}function LC(e){return E.exports.useMemo(()=>e.hooks.dragPreview(),[e])}let lc=!1,cc=!1;class AC{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){re(!lc,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return lc=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{lc=!1}}isDragging(){if(!this.sourceId)return!1;re(!cc,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return cc=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{cc=!1}}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,r){return this.internalMonitor.isOverTarget(t,r)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let uc=!1;class RC{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;re(!uc,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return uc=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{uc=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function NC(e,t,r){const n=r.getRegistry(),i=n.addTarget(e,t);return[i,()=>n.removeTarget(i)]}function $C(e,t,r){const n=r.getRegistry(),i=n.addSource(e,t);return[i,()=>n.removeSource(i)]}function Iu(e,t,r,n){let i=r?r.call(n,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;const s=Object.prototype.hasOwnProperty.bind(t);for(let l=0;l<o.length;l++){const c=o[l];if(!s(c))return!1;const u=e[c],f=t[c];if(i=r?r.call(n,u,f,c):void 0,i===!1||i===void 0&&u!==f)return!1}return!0}function zu(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function jC(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function FC(e){return(t=null,r=null)=>{if(!E.exports.isValidElement(t)){const o=t;return e(o,r),o}const n=t;return jC(n),HC(n,r?o=>e(o,r):e)}}function H1(e){const t={};return Object.keys(e).forEach(r=>{const n=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{const i=FC(n);t[r]=()=>i}}),t}function Up(e,t){typeof e=="function"?e(t):e.current=t}function HC(e,t){const r=e.ref;return re(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?E.exports.cloneElement(e,{ref:n=>{Up(r,n),Up(t,n)}}):E.exports.cloneElement(e,{ref:t})}class BC{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,r=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return r&&this.disconnectDragSource(),this.handlerId?t?(r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),r):(this.lastConnectedDragSource=t,r):r}reconnectDragPreview(t=!1){const r=this.dragPreview,n=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(n&&this.disconnectDragPreview(),!!this.handlerId){if(!r){this.lastConnectedDragPreview=r;return}n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=r,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,r,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!Iu(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!Iu(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=H1({dragSource:(r,n)=>{this.clearDragSource(),this.dragSourceOptions=n||null,zu(r)?this.dragSourceRef=r:this.dragSourceNode=r,this.reconnectDragSource()},dragPreview:(r,n)=>{this.clearDragPreview(),this.dragPreviewOptions=n||null,zu(r)?this.dragPreviewRef=r:this.dragPreviewNode=r,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class UC{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(!!this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Iu(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=H1({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,zu(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function di(){const{dragDropManager:e}=E.exports.useContext(M1);return re(e!=null,"Expected drag drop context"),e}function VC(e,t){const r=di(),n=E.exports.useMemo(()=>new BC(r.getBackend()),[r]);return dn(()=>(n.dragSourceOptions=e||null,n.reconnect(),()=>n.disconnectDragSource()),[n,e]),dn(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}function WC(){const e=di();return E.exports.useMemo(()=>new AC(e),[e])}class GC{beginDrag(){const t=this.spec,r=this.monitor;let n=null;return typeof t.item=="object"?n=t.item:typeof t.item=="function"?n=t.item(r):n={},n??null}canDrag(){const t=this.spec,r=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(r):!0}isDragging(t,r){const n=this.spec,i=this.monitor,{isDragging:o}=n;return o?o(i):r===t.getSourceId()}endDrag(){const t=this.spec,r=this.monitor,n=this.connector,{end:i}=t;i&&i(r.getItem(),r),n.reconnect()}constructor(t,r,n){this.spec=t,this.monitor=r,this.connector=n}}function YC(e,t,r){const n=E.exports.useMemo(()=>new GC(e,t,r),[t,r]);return E.exports.useEffect(()=>{n.spec=e},[e]),n}function qC(e){return E.exports.useMemo(()=>{const t=e.type;return re(t!=null,"spec.type must be defined"),t},[e])}function XC(e,t,r){const n=di(),i=YC(e,t,r),o=qC(e);dn(function(){if(o!=null){const[s,l]=$C(o,i,n);return t.receiveHandlerId(s),r.receiveHandlerId(s),l}},[n,t,r,i,o])}function QC(e,t){const r=F1(e,t);re(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const n=WC(),i=VC(r.options,r.previewOptions);return XC(r,n,i),[j1(r.collect,n,i),zC(i),LC(i)]}function KC(e){return E.exports.useMemo(()=>e.hooks.dropTarget(),[e])}function ZC(e){const t=di(),r=E.exports.useMemo(()=>new UC(t.getBackend()),[t]);return dn(()=>(r.dropTargetOptions=e||null,r.reconnect(),()=>r.disconnectDropTarget()),[e]),r}function JC(){const e=di();return E.exports.useMemo(()=>new RC(e),[e])}function e9(e){const{accept:t}=e;return E.exports.useMemo(()=>(re(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class t9{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function r9(e,t){const r=E.exports.useMemo(()=>new t9(e,t),[t]);return E.exports.useEffect(()=>{r.spec=e},[e]),r}function n9(e,t,r){const n=di(),i=r9(e,t),o=e9(e);dn(function(){const[s,l]=NC(o,i,n);return t.receiveHandlerId(s),r.receiveHandlerId(s),l},[n,t,i,r,o.map(a=>a.toString()).join("|")])}function B1(e,t){const r=F1(e,t),n=JC(),i=ZC(r.options);return n9(r,n,i),[j1(r.collect,n,i),KC(i)]}function U1(e){let t=null;return()=>(t==null&&(t=e()),t)}function i9(e,t){return e.filter(r=>r!==t)}function o9(e,t){const r=new Set,n=o=>r.add(o);e.forEach(n),t.forEach(n);const i=[];return r.forEach(o=>i.push(o)),i}class a9{enter(t){const r=this.entered.length,n=i=>this.isNodeInDocument(i)&&(!i.contains||i.contains(t));return this.entered=o9(this.entered.filter(n),[t]),r===0&&this.entered.length>0}leave(t){const r=this.entered.length;return this.entered=i9(this.entered.filter(this.isNodeInDocument),t),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class s9{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const r={};Object.keys(this.config.exposeProperties).forEach(n=>{const i=this.config.exposeProperties[n];i!=null&&(r[n]={value:i(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,r){return r===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const V1="__NATIVE_FILE__",W1="__NATIVE_URL__",G1="__NATIVE_TEXT__",Y1="__NATIVE_HTML__",Vp=Object.freeze(Object.defineProperty({__proto__:null,FILE:V1,URL:W1,TEXT:G1,HTML:Y1},Symbol.toStringTag,{value:"Module"}));function dc(e,t,r){const n=t.reduce((i,o)=>i||e.getData(o),"");return n??r}const Lu={[V1]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[Y1]:{exposeProperties:{html:(e,t)=>dc(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[W1]:{exposeProperties:{urls:(e,t)=>dc(e,t,"").split(`
`),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[G1]:{exposeProperties:{text:(e,t)=>dc(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function l9(e,t){const r=Lu[e];if(!r)throw new Error(`native type ${e} has no configuration`);const n=new s9(r);return n.loadDataTransfer(t),n}function fc(e){if(!e)return null;const t=Array.prototype.slice.call(e.types||[]);return Object.keys(Lu).filter(r=>{const n=Lu[r];return n!=null&&n.matchesTypes?n.matchesTypes.some(i=>t.indexOf(i)>-1):!1})[0]||null}const c9=U1(()=>/firefox/i.test(navigator.userAgent)),q1=U1(()=>Boolean(window.safari));class Wp{interpolate(t){const{xs:r,ys:n,c1s:i,c2s:o,c3s:a}=this;let s=r.length-1;if(t===r[s])return n[s];let l=0,c=a.length-1,u;for(;l<=c;){u=Math.floor(.5*(l+c));const v=r[u];if(v<t)l=u+1;else if(v>t)c=u-1;else return n[u]}s=Math.max(0,c);const f=t-r[s],m=f*f;return n[s]+i[s]*f+o[s]*m+a[s]*f*m}constructor(t,r){const{length:n}=t,i=[];for(let v=0;v<n;v++)i.push(v);i.sort((v,x)=>t[v]<t[x]?-1:1);const o=[],a=[];let s,l;for(let v=0;v<n-1;v++)s=t[v+1]-t[v],l=r[v+1]-r[v],o.push(s),a.push(l/s);const c=[a[0]];for(let v=0;v<o.length-1;v++){const x=a[v],w=a[v+1];if(x*w<=0)c.push(0);else{s=o[v];const C=o[v+1],g=s+C;c.push(3*g/((g+C)/x+(g+s)/w))}}c.push(a[a.length-1]);const u=[],f=[];let m;for(let v=0;v<c.length-1;v++){m=a[v];const x=c[v],w=1/o[v],C=x+c[v+1]-m-m;u.push((m-x-C)*w),f.push(C*w*w)}this.xs=t,this.ys=r,this.c1s=c,this.c2s=u,this.c3s=f}}const u9=1;function X1(e){const t=e.nodeType===u9?e:e.parentElement;if(!t)return null;const{top:r,left:n}=t.getBoundingClientRect();return{x:n,y:r}}function ua(e){return{x:e.clientX,y:e.clientY}}function d9(e){var t;return e.nodeName==="IMG"&&(c9()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(e)))}function f9(e,t,r,n){let i=e?t.width:r,o=e?t.height:n;return q1()&&e&&(o/=window.devicePixelRatio,i/=window.devicePixelRatio),{dragPreviewWidth:i,dragPreviewHeight:o}}function p9(e,t,r,n,i){const o=d9(t),s=X1(o?e:t),l={x:r.x-s.x,y:r.y-s.y},{offsetWidth:c,offsetHeight:u}=e,{anchorX:f,anchorY:m}=n,{dragPreviewWidth:v,dragPreviewHeight:x}=f9(o,t,c,u),w=()=>{let _=new Wp([0,.5,1],[l.y,l.y/u*x,l.y+x-u]).interpolate(m);return q1()&&o&&(_+=(window.devicePixelRatio-1)*x),_},C=()=>new Wp([0,.5,1],[l.x,l.x/c*v,l.x+v-c]).interpolate(f),{offsetX:g,offsetY:d}=i,h=g===0||g,y=d===0||d;return{x:h?g:C(),y:y?d:w()}}class h9{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,r){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=r}}function m9(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Gp(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),n.forEach(function(i){m9(e,i,r[i])})}return e}class g9{profile(){var t,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,r,n){return this.sourcePreviewNodeOptions.set(t,n),this.sourcePreviewNodes.set(t,r),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,r,n){this.sourceNodes.set(t,r),this.sourceNodeOptions.set(t,n);const i=a=>this.handleDragStart(a,t),o=a=>this.handleSelectStart(a);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",i),r.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),r.removeEventListener("dragstart",i),r.removeEventListener("selectstart",o),r.setAttribute("draggable","false")}}connectDropTarget(t,r){const n=a=>this.handleDragEnter(a,t),i=a=>this.handleDragOver(a,t),o=a=>this.handleDrop(a,t);return r.addEventListener("dragenter",n),r.addEventListener("dragover",i),r.addEventListener("drop",o),()=>{r.removeEventListener("dragenter",n),r.removeEventListener("dragover",i),r.removeEventListener("drop",o)}}addEventListeners(t){!t.addEventListener||(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){!t.removeEventListener||(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(t);return Gp({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(t);return Gp({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(Vp).some(r=>Vp[r]===t)}beginDragNativeItem(t,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=l9(t,r),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var n;return(n=this.rootElement)===null||n===void 0?void 0:n.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,r){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(t,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(t,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(t,r){this.dropTargetIds.unshift(r)}constructor(t,r,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=i=>{const o=this.sourceNodes.get(i);return o&&X1(o)||null},this.endDragNativeItem=()=>{!this.isDraggingNativeItem()||(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=i=>Boolean(i&&this.document&&this.document.body&&this.document.body.contains(i)),this.endDragIfSourceWasRemovedFromDOM=()=>{const i=this.currentDragSourceNode;i==null||this.isNodeInDocument(i)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=i=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(i||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=i=>{if(i.defaultPrevented)return;const{dragStartSourceIds:o}=this;this.dragStartSourceIds=null;const a=ua(i);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(o||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:s}=i,l=fc(s);if(this.monitor.isDragging()){if(s&&typeof s.setDragImage=="function"){const u=this.monitor.getSourceId(),f=this.sourceNodes.get(u),m=this.sourcePreviewNodes.get(u)||f;if(m){const{anchorX:v,anchorY:x,offsetX:w,offsetY:C}=this.getCurrentSourcePreviewNodeOptions(),h=p9(f,m,a,{anchorX:v,anchorY:x},{offsetX:w,offsetY:C});s.setDragImage(m,h.x,h.y)}}try{s==null||s.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(i.target);const{captureDraggingState:c}=this.getCurrentSourcePreviewNodeOptions();c?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(l)this.beginDragNativeItem(l);else{if(s&&!s.types&&(i.target&&!i.target.hasAttribute||!i.target.hasAttribute("draggable")))return;i.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=i=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}if(!this.enterLeaveCounter.enter(i.target)||this.monitor.isDragging())return;const{dataTransfer:s}=i,l=fc(s);l&&this.beginDragNativeItem(l,s)},this.handleTopDragEnter=i=>{const{dragEnterTargetIds:o}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=i.altKey,o.length>0&&this.actions.hover(o,{clientOffset:ua(i)}),o.some(s=>this.monitor.canDropOnTarget(s))&&(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=i=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var o;(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}},this.handleTopDragOver=i=>{const{dragOverTargetIds:o}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none");return}this.altKeyPressed=i.altKey,this.lastClientOffset=ua(i),this.scheduleHover(o),(o||[]).some(s=>this.monitor.canDropOnTarget(s))?(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?i.preventDefault():(i.preventDefault(),i.dataTransfer&&(i.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=i=>{this.isDraggingNativeItem()&&i.preventDefault(),this.enterLeaveCounter.leave(i.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=i=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var o;i.preventDefault(),(o=this.currentNativeSource)===null||o===void 0||o.loadDataTransfer(i.dataTransfer)}else fc(i.dataTransfer)&&i.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=i=>{const{dropTargetIds:o}=this;this.dropTargetIds=[],this.actions.hover(o,{clientOffset:ua(i)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=i=>{const o=i.target;typeof o.dragDrop=="function"&&(o.tagName==="INPUT"||o.tagName==="SELECT"||o.tagName==="TEXTAREA"||o.isContentEditable||(i.preventDefault(),o.dragDrop()))},this.options=new h9(r,n),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new a9(this.isNodeInDocument)}}const v9=function(t,r,n){return new g9(t,r,n)};function Q1({imagen:e}){const[{isDragging:t},r]=QC(()=>({type:"image",item:{imagen:e},collect:n=>({isDragging:!!n.isDragging()})}));return p("img",{ref:r,src:`img-countries/${e.refImg}`,alt:e.nombre,style:{border:t?"5px solid yellow":"5px solid white",width:"120px"}})}const et={DELETE_IMG_DATA:"DELETE_IMG_DATA",ADD_IMG_DATA:"ADD_IMG_DATA",ADD_IMG_COUNTRIE:"ADD_IMG_COUNTRIE",CREATE_ROW:"CREATE_ROW",DELETE_ROW:"DELETE_ROW",ADD_IMG_ROW:"ADD_IMG_ROW",DELETE_IMG_ROW:"DELETE_IMG_ROW"};var y9=Object.defineProperty,Yp=Object.getOwnPropertySymbols,w9=Object.prototype.hasOwnProperty,x9=Object.prototype.propertyIsEnumerable,qp=(e,t,r)=>t in e?y9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S9=(e,t)=>{for(var r in t||(t={}))w9.call(t,r)&&qp(e,r,t[r]);if(Yp)for(var r of Yp(t))x9.call(t,r)&&qp(e,r,t[r]);return e},K1=Symbol.for("immer-nothing"),Xp=Symbol.for("immer-draftable"),mt=Symbol.for("immer-state");function Nt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ri=Object.getPrototypeOf;function ni(e){return!!e&&!!e[mt]}function fn(e){var t;return e?Z1(e)||Array.isArray(e)||!!e[Xp]||!!((t=e.constructor)!=null&&t[Xp])||Js(e)||el(e):!1}var b9=Object.prototype.constructor.toString();function Z1(e){if(!e||typeof e!="object")return!1;const t=ri(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===b9}function po(e,t){Zs(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function Zs(e){const t=e[mt];return t?t.type_:Array.isArray(e)?1:Js(e)?2:el(e)?3:0}function Au(e,t){return Zs(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function J1(e,t,r){const n=Zs(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function E9(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Js(e){return e instanceof Map}function el(e){return e instanceof Set}function Qr(e){return e.copy_||e.base_}function Ru(e,t){if(Js(e))return new Map(e);if(el(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&Z1(e))return ri(e)?S9({},e):Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[mt];let n=Reflect.ownKeys(r);for(let i=0;i<n.length;i++){const o=n[i],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(ri(e),r)}function pf(e,t=!1){return tl(e)||ni(e)||!fn(e)||(Zs(e)>1&&(e.set=e.add=e.clear=e.delete=C9),Object.freeze(e),t&&po(e,(r,n)=>pf(n,!0))),e}function C9(){Nt(2)}function tl(e){return Object.isFrozen(e)}var T9={};function pn(e){const t=T9[e];return t||Nt(0,e),t}var ho;function ev(){return ho}function k9(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Qp(e,t){t&&(pn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Nu(e){$u(e),e.drafts_.forEach(_9),e.drafts_=null}function $u(e){e===ho&&(ho=e.parent_)}function Kp(e){return ho=k9(ho,e)}function _9(e){const t=e[mt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Zp(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[mt].modified_&&(Nu(t),Nt(4)),fn(e)&&(e=ls(t,e),t.parent_||cs(t,e)),t.patches_&&pn("Patches").generateReplacementPatches_(r[mt].base_,e,t.patches_,t.inversePatches_)):e=ls(t,r,[]),Nu(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==K1?e:void 0}function ls(e,t,r){if(tl(t))return t;const n=t[mt];if(!n)return po(t,(i,o)=>Jp(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return cs(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,a=!1;n.type_===3&&(o=new Set(i),i.clear(),a=!0),po(o,(s,l)=>Jp(e,n,i,s,l,r,a)),cs(e,i,!1),r&&e.patches_&&pn("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Jp(e,t,r,n,i,o,a){if(ni(i)){const s=o&&t&&t.type_!==3&&!Au(t.assigned_,n)?o.concat(n):void 0,l=ls(e,i,s);if(J1(r,n,l),ni(l))e.canAutoFreeze_=!1;else return}else a&&r.add(i);if(fn(i)&&!tl(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ls(e,i),(!t||!t.scope_.parent_)&&cs(e,i)}}function cs(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&pf(t,r)}function O9(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ev(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=hf;r&&(i=[n],o=mo);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}var hf={get(e,t){if(t===mt)return e;const r=Qr(e);if(!Au(r,t))return P9(e,r,t);const n=r[t];return e.finalized_||!fn(n)?n:n===pc(e.base_,t)?(hc(e),e.copy_[t]=Fu(n,e)):n},has(e,t){return t in Qr(e)},ownKeys(e){return Reflect.ownKeys(Qr(e))},set(e,t,r){const n=tv(Qr(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=pc(Qr(e),t),o=i==null?void 0:i[mt];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(E9(r,i)&&(r!==void 0||Au(e.base_,t)))return!0;hc(e),ju(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return pc(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,hc(e),ju(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Qr(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Nt(11)},getPrototypeOf(e){return ri(e.base_)},setPrototypeOf(){Nt(12)}},mo={};po(hf,(e,t)=>{mo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});mo.deleteProperty=function(e,t){return mo.set.call(this,e,t,void 0)};mo.set=function(e,t,r){return hf.set.call(this,e[0],t,r,e[0])};function pc(e,t){const r=e[mt];return(r?Qr(r):e)[t]}function P9(e,t,r){var n;const i=tv(t,r);return i?"value"in i?i.value:(n=i.get)==null?void 0:n.call(e.draft_):void 0}function tv(e,t){if(!(t in e))return;let r=ri(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=ri(r)}}function ju(e){e.modified_||(e.modified_=!0,e.parent_&&ju(e.parent_))}function hc(e){e.copy_||(e.copy_=Ru(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var D9=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const a=this;return function(l=o,...c){return a.produce(l,u=>r.call(this,u,...c))}}typeof r!="function"&&Nt(6),n!==void 0&&typeof n!="function"&&Nt(7);let i;if(fn(t)){const o=Kp(this),a=Fu(t,void 0);let s=!0;try{i=r(a),s=!1}finally{s?Nu(o):$u(o)}return Qp(o,n),Zp(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===K1&&(i=void 0),this.autoFreeze_&&pf(i,!0),n){const o=[],a=[];pn("Patches").generateReplacementPatches_(t,i,o,a),n(o,a)}return i}else Nt(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(a,...s)=>this.produceWithPatches(a,l=>t(l,...s));let n,i;return[this.produce(t,r,(a,s)=>{n=a,i=s}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){fn(e)||Nt(8),ni(e)&&(e=M9(e));const t=Kp(this),r=Fu(e,void 0);return r[mt].isManual_=!0,$u(t),r}finishDraft(e,t){const r=e&&e[mt];(!r||!r.isManual_)&&Nt(9);const{scope_:n}=r;return Qp(n,t),Zp(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=pn("Patches").applyPatches_;return ni(e)?n(e,t):this.produce(e,i=>n(i,t))}};function Fu(e,t){const r=Js(e)?pn("MapSet").proxyMap_(e,t):el(e)?pn("MapSet").proxySet_(e,t):O9(e,t);return(t?t.scope_:ev()).drafts_.push(r),r}function M9(e){return ni(e)||Nt(10,e),rv(e)}function rv(e){if(!fn(e)||tl(e))return e;const t=e[mt];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Ru(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Ru(e,!0);return po(r,(n,i)=>{J1(r,n,rv(i))}),t&&(t.finalized_=!1),r}var gt=new D9,vr=gt.produce;gt.produceWithPatches.bind(gt);gt.setAutoFreeze.bind(gt);gt.setUseStrictShallowCopy.bind(gt);gt.applyPatches.bind(gt);gt.createDraft.bind(gt);gt.finishDraft.bind(gt);const I9={imagenes:[{id:"idPeru",nombre:"Perú",refImg:"peru.jpg"},{id:"idUruguay",nombre:"Uruguay",refImg:"uruguay.jpg"},{id:"idBrasil",nombre:"Brasil",refImg:"brasil.jpg"},{id:"idArgentina",nombre:"Argentina",refImg:"argentina.png"},{id:"idChile",nombre:"Chile",refImg:"chile.png"}],filas:[]},z9=(e,t)=>{switch(t.type){case et.DELETE_IMG_DATA:return vr(e,r=>{r.imagenes=r.imagenes.filter(n=>n.id!=t.payload)});case et.ADD_IMG_DATA:return e.filas.length>0?vr(e,r=>{let n=r.filas.find(i=>i.id==t.payload);n.imagenes.length>0&&n.imagenes.forEach(i=>r.imagenes.push(i))}):e;case et.ADD_IMG_COUNTRIE:return vr(e,r=>{r.imagenes.filter(i=>i.id===t.payload.id).length<=0&&r.imagenes.push(t.payload)});case et.CREATE_ROW:return vr(e,r=>{r.filas.push(t.payload)});case et.DELETE_ROW:return e.filas.length>0?vr(e,r=>{r.filas=r.filas.filter(n=>n.id!=t.payload)}):e;case et.ADD_IMG_ROW:return e.filas.length>0?vr(e,r=>{r.filas=r.filas.map(n=>n.id==t.payload.id?{id:n.id,imagenes:[...n.imagenes,t.payload.imagen],nombre:n.nombre}:n)}):e;case et.DELETE_IMG_ROW:return e.filas.length>0?vr(e,r=>{r.filas.map(n=>{n.imagenes.length>0&&(n.imagenes=n.imagenes.filter(i=>i.id!=t.payload))})}):e;default:return e}},fi=E.exports.createContext(),L9=({children:e})=>{const[t,r]=E.exports.useReducer(vr(z9),I9),{imagenes:n,filas:i}=t;return p(fi.Provider,{value:{imagenes:n,filas:i,dispatch:r},children:e})},A9=T.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: rgb(20, 19, 19);
    border-radius: 16px;
    padding: 1rem;
    flex-wrap: wrap;
    width: 100%;
    min-height: 140px;
    max-width: 1024px;
    gap: 1rem;


    @media screen and (max-width:540px) {
        & img{
            width: 46%;
        }
    }
    @media screen and (min-width:540px) {
        & img{
            width: 40%;
        }
    }

@media screen  and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    
    & img{
        width: 140px;
    }
}
    
`;function R9(){const{dispatch:e,imagenes:t}=E.exports.useContext(fi),[{isOver:r},n]=B1(()=>({accept:"image",drop:o=>i(o.imagen),collect:o=>({isOver:!!o.isOver()})})),i=o=>{let a=o.id;e({type:et.ADD_IMG_COUNTRIE,payload:o}),e({type:et.DELETE_IMG_ROW,payload:a})};return p(A9,{ref:n,className:"contenedor-countries",children:t.map(o=>p(Q1,{imagen:o},o.id))})}const N9=T.h1`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: calc(1.5rem + 1vh);
`;function $9(){return D(ur,{children:[p(N9,{children:"Tier List Paises de Sudamerica"}),p(R9,{})]})}const j9=T.form`
    gap: 0.5rem;
    max-width: 1024px;
    margin: 1rem auto;
    flex-direction: row;
    display: flex;


    input[type="text"]{
        background-color: rgb(20, 19, 19);
        border-radius: 6px;
        padding: 0.5rem 1rem;
        color: white;
        border: none;
    }
    input[type="submit"]{
    background-color:white;
    border: none;
    color: rgb(20, 19, 19);
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    }
    input[type="submit"]:hover{
        cursor: pointer;
        background-color:rgb(20, 19, 19);
        transition: background-color 0.3s ease , color 0.3s ease;
        border: none;
        color: white;
    }
`;function F9(){const[e,t]=E.exports.useState(""),{dispatch:r}=E.exports.useContext(fi);return D(j9,{onSubmit:i=>{i.preventDefault();let o=i.target.nombre.value,a=crypto.randomUUID();o!==""&&r({type:et.CREATE_ROW,payload:{id:a,nombre:o,imagenes:[]}}),t("")},children:[p("input",{type:"text",placeholder:"Ingresa nombre de la fila",name:"nombre",onChange:i=>t(i.target.value),value:e,className:"input-search"}),p("input",{type:"submit",value:"Crear",className:"input-save"})]})}function H9({id:e,row:t}){const{dispatch:r}=E.exports.useContext(fi),[{isOver:n},i]=B1(()=>({accept:"image",drop:a=>o(a.imagen),collect:a=>({isOver:!!a.isOver()})})),o=a=>{let s=a.id;r({type:et.DELETE_IMG_ROW,payload:s}),r({type:et.ADD_IMG_ROW,payload:{imagen:a,id:e}}),r({type:et.DELETE_IMG_DATA,payload:s})};return p("div",{ref:i,className:"contenedor-fila",children:t.imagenes.length>0?t.imagenes.map(a=>p(Q1,{imagen:a},a.id)):null})}const B9=T.div`
    
    display: flex;
    align-items: center;
    margin-top: 1rem;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 18px;
    gap: 0.5rem;


    & div:nth-child(1){
    background-color: rgb(20, 19, 19);
    border: none;
    resize: none;
    height: 116px;
    width: 120px;
    color: white;
    border-radius: 18px;
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
    & div:nth-child(1):focus{
        text-align: center;
        height: 116px;
        width: 120px;
        align-items: center;
        justify-content: center;
    }
    & div:nth-child(2){
        display: flex;
        gap: 0.5rem;
        padding: 1rem;
        height: 116px;
        width: 100%;
        background-color: rgb(20, 19, 19);
        border-radius: 18px;
        overflow-x: auto;
    }
    button{
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        background-color: transparent;
        outline: none;
        border: none;
        color: white;
    }
    button:hover{
        cursor: pointer;
        color: rgb(20, 19, 19);
        transition: color 0.3s ease ;
    }
`;function U9({row:e}){const{dispatch:t}=E.exports.useContext(fi),r=n=>{t({type:et.ADD_IMG_DATA,payload:n}),t({type:et.DELETE_ROW,payload:n})};return D(B9,{children:[p("div",{contentEditable:!0,suppressContentEditableWarning:!0,children:p("label",{children:e.nombre})}),p(H9,{id:e.id,row:e},e.id),p("button",{onClick:()=>r(e.id),className:"button-delete",children:p(Ig,{})})]})}function V9(){const{filas:e}=E.exports.useContext(fi);return p(ur,{children:e.length>0&&e.map(t=>p(U9,{row:t},t.id))})}function W9(){return p(_C,{backend:v9,children:D("div",{className:"container",children:[p($9,{}),p(F9,{}),p(V9,{})]})})}function G9(){return p("div",{className:"App",children:p(G5,{children:p(L9,{children:D(QS,{children:[p(It,{path:"/",element:p(Z6,{})}),p(It,{path:"*",element:p(i5,{})}),p(It,{path:"/projects/crud",element:p(_5,{})}),p(It,{path:"/projects/api-countries",element:p(U5,{})}),p(It,{path:"/projects/api-countries/:pais",element:p(uE,{})}),p(It,{path:"/projects/ecommerce",element:p(h8,{})}),p(It,{path:"/projects/ecommerce/cart",element:p(_8,{})}),p(It,{path:"/projects/room-page",element:p(X8,{})}),p(It,{path:"/projects/mana-page",element:p(tE,{})}),p(It,{path:"/projects/tier-list",element:p(W9,{})})]})})})})}gc.createRoot(document.getElementById("root")).render(p(t5,{children:p(G9,{})}));
