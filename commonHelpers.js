(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m="modulepreload",h=function(a){return"/108_html-css_parahumanoid/"+a},u={},f=function(o,s,c){if(!s||s.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=h(e),e in u)return;u[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let i=t.length-1;i>=0;i--){const l=t[i];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":m,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((i,l)=>{n.addEventListener("load",i),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})};f(()=>import("./assets/tesimonials-84570235.js"),[]);f(()=>import("./assets/mobile-menu-71e5cfad.js"),[]);
//# sourceMappingURL=commonHelpers.js.map