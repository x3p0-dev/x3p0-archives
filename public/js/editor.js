(()=>{var e,r={712:(e,r,t)=>{"use strict";var n=t(893);const a=(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",children:(0,n.jsx)("path",{d:"M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"})});t(184);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=lodash,c=(l.get,l.includes,l.invoke,l.isUndefined,l.pickBy,wp.date),p=c.date,u=c.dateI18n,v=c.format,h=wp.coreData.store,f=wp.i18n,d=f.__,b=(f._n,f.sprintf,wp.data.useSelect),y=wp.components,g=y.PanelBody,x=y.Placeholder,m=(y.QueryControls,y.SelectControl),O=y.Spinner,j=(y.TextControl,wp.element),_=(j.RawHTML,j.useMemo),w=wp.blockEditor,k=(w.BlockControls,w.InspectorControls),S=w.useBlockProps,P=function(e){return e.preventDefault()};const T=JSON.parse('{"apiVersion":2,"name":"x3p0/archives","title":"X3P0 Archives","category":"widgets","description":"Displays a site archives list, broken down by month.","keywords":["archives"],"textdomain":"x3p0-archives","icon":"","attributes":{"postType":{"type":"string","default":"post"},"order":{"type":"string","default":"desc"},"year":{"type":"string","default":""},"month":{"type":"string","default":""}},"supports":{"anchor":true,"align":true,"html":false,"__experimentalBorder":true,"color":{"gradients":true,"link":true},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalFontFamily":true,"__experimentalTextTransform":true}},"style":"x3p0-archives","editorStyle":"x3p0-archives-editor","editorScript":"x3p0-archives-editor"}');var A={icon:a,edit:function(e){var r,t=e.attributes,o=e.setAttributes,i=(e.clientId,(r=b((function(e){var r,t=e(h).getPostTypes,n=["attachment"];return{postTypes:null===(r=t({per_page:-1}))||void 0===r?void 0:r.filter((function(e){var r=e.viewable,t=e.slug;return r&&!n.includes(t)}))}}),[]).postTypes,{postTypesSelectOptions:_((function(){return(r||[]).map((function(e){var r=e.labels,t=e.slug;return{label:r.singular_name,value:t}}))}),[r])}).postTypesSelectOptions),l=S(),c=t.postType,f=t.month,y=t.year,j=t.order,w=b((function(e){var r={per_page:-1,order:j,orderby:"date"};if(y){var t=new Date(y,f?f-1:0,1),n=new Date(y,f||11,f?0:31,23,59,59);r.after=t.toISOString(),r.before=n.toISOString()}var a=e(h).getEntityRecords("postType",c,r);return{latestPosts:Array.isArray(a)?a.map((function(e){return s({},e)})):a}}),[j,y,f,c]).latestPosts,T=!(null==w||!w.length),A=[{label:d("Select Year","x3p0-archives"),value:""}];x3p0Archives.years.length&&x3p0Archives.years.forEach((function(e){A.push({label:e,value:e})}));var C=(0,n.jsx)(k,{children:(0,n.jsxs)(g,{title:d("Archives settings","x3p0-archives"),children:[(0,n.jsx)(m,{label:d("Post Type","x3p0-archives"),value:c,onChange:function(e){return o({postType:e})},options:i}),(0,n.jsx)(m,{label:d("Order","x3p0-archives"),value:j,onChange:function(e){return o({order:e})},options:[{value:"desc",label:d("Descending","x3p0-archives")},{value:"asc",label:d("Ascending","x3p0-archives")}]}),A&&(0,n.jsx)(m,{label:d("Year","x3p0-archives"),value:y,onChange:function(e){return o({year:e,month:e?f:""})},options:A}),y&&(0,n.jsx)(m,{label:d("Month","x3p0-archives"),value:f,onChange:function(e){return o({month:e})},options:[{value:"",label:d("Select Month","x3p0-archives")},{value:"01",label:d("January","x3p0-archives")},{value:"02",label:d("February","x3p0-archives")},{value:"03",label:d("March","x3p0-archives")},{value:"04",label:d("April","x3p0-archives")},{value:"05",label:d("May","x3p0-archives")},{value:"06",label:d("June","x3p0-archives")},{value:"07",label:d("July","x3p0-archives")},{value:"08",label:d("August","x3p0-archives")},{value:"09",label:d("September","x3p0-archives")},{value:"10",label:d("October","x3p0-archives")},{value:"11",label:d("November","x3p0-archives")},{value:"12",label:d("December","x3p0-archives")}]})]})});if(!T)return(0,n.jsxs)("div",s(s({},l),{},{children:[C,(0,n.jsx)(x,{icon:a,label:d("Site Archives","x3p0-archives"),children:Array.isArray(w)?d("No posts found.","x3p0-archives"):(0,n.jsx)(O,{})})]}));var E="",N="",D=[];w.forEach((function(e,r){var t=p("Y",e.date_gmt),n=p("m",e.date_gmt);if(E!==t||N!==n){var a={year:t,month:n,date:u("F Y",e.date_gmt),posts:[]};D[t+n]=a,E=t,N=n}D[t+n].posts.push(e)})),"desc"===j&&D.reverse();var F=D.map((function(e,r){var t="";return[(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"wp-block-x3p0-archives__heading",children:(0,n.jsx)("a",{href:x3p0Archives.monthLink.replace("%year%",e.year).replace("%monthnum%",e.month),className:"wp-block-x3p0-archives__heading-link",children:e.date})}),(0,n.jsx)("ul",{className:"wp-block-x3p0-archives__list",children:e.posts.map((function(e,r){var a=p("d",e.date_gmt),o=a===t?"wp-block-x3p0-archives__post has-duplicate-day":"wp-block-x3p0-archives__post";return t=a,(0,n.jsxs)("li",{className:o,children:[(0,n.jsx)("time",{dateTime:v("c",e.date_gmt),className:"wp-block-x3p0-archives__post-day",children:u("d:",e.date_gmt)}),(0,n.jsx)("a",{href:e.link,className:"wp-block-x3p0-archives__post-link",onClick:P,rel:"noreferrer noopener",children:e.title.rendered||e.id})]},r)}))})]})]}));return(0,n.jsxs)(n.Fragment,{children:[C,(0,n.jsx)("div",s(s({},l),{},{children:F}))]})},save:function(){return null}},C=wp.blocks.registerBlockType;wp.domReady((function(){C(T,A)}))},184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var s=a.apply(null,t);s&&e.push(s)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var i in t)n.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()},644:()=>{},857:()=>{},251:(e,r,t)=>{"use strict";t(424);var n=t(804),a=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),r.Fragment=o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:p,props:o,_owner:s.current}}r.jsx=c,r.jsxs=c},893:(e,r,t)=>{"use strict";e.exports=t(251)},424:e=>{"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var s,i,l=a(e),c=1;c<arguments.length;c++){for(var p in s=Object(arguments[c]))t.call(s,p)&&(l[p]=s[p]);if(r){i=r(s);for(var u=0;u<i.length;u++)n.call(s,i[u])&&(l[i[u]]=s[i[u]])}}return l}},804:e=>{"use strict";e.exports=React}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,n),o.exports}n.m=r,e=[],n.O=(r,t,a,o)=>{if(!t){var s=1/0;for(c=0;c<e.length;c++){for(var[t,a,o]=e[c],i=!0,l=0;l<t.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(i=!1,o<s&&(s=o));i&&(e.splice(c--,1),r=a())}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,a,o]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={103:0,826:0,938:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[s,i,l]=t,c=0;for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var p=l(n);for(r&&r(t);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[s[c]]=0;return n.O(p)},t=self.webpackChunkx3p0_archives=self.webpackChunkx3p0_archives||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[826,938],(()=>n(712))),n.O(void 0,[826,938],(()=>n(644)));var a=n.O(void 0,[826,938],(()=>n(857)));a=n.O(a)})();