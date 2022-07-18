(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7657:function(e,r,n){"use strict";n.d(r,{qE:function(){return x}});var t=n(4651),a=n(1604),o=n(4592),i=n(7294),l=n(8922);function c(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}var u=["name","getInitials"],d=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],m=(0,a.eC)("Avatar"),f=m[0],b=m[1],h=(0,a.Gp)((function(e,r){var n=s({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},b().badge);return i.createElement(a.m$.div,s({ref:r},e,{className:(0,o.cx)("chakra-avatar__badge",e.className),__css:n}))}));function g(e){var r=e.split(" "),n=r[0],t=r[1];return n&&t?""+n.charAt(0)+t.charAt(0):n.charAt(0)}o.Ts&&(h.displayName="AvatarBadge");var p=function(e){var r=e.name,n=e.getInitials,t=c(e,u),o=b();return i.createElement(a.m$.div,s({role:"img","aria-label":r},t,{__css:o.label}),r?null==n?void 0:n(r):null)},v=function(e){return i.createElement(a.m$.svg,s({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),i.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),i.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},y={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},x=(0,a.Gp)((function(e,r){var n=(0,a.jC)("Avatar",e),t=(0,a.Lr)(e),l=t.src,u=t.srcSet,m=t.name,b=t.showBorder,h=t.borderRadius,p=void 0===h?"full":h,x=t.onError,w=t.getInitials,O=void 0===w?g:w,E=t.icon,C=void 0===E?i.createElement(v,null):E,_=t.iconLabel,k=void 0===_?" avatar":_,S=t.loading,P=t.children,R=t.borderColor,I=t.ignoreFallback,N=c(t,d),A=s({borderRadius:p,borderWidth:b?"2px":void 0},y,n.container);return R&&(A.borderColor=R),i.createElement(a.m$.span,s({ref:r},N,{className:(0,o.cx)("chakra-avatar",e.className),__css:A}),i.createElement(f,{value:n},i.createElement(j,{src:l,srcSet:u,loading:S,onError:x,getInitials:O,name:m,borderRadius:p,icon:C,iconLabel:k,ignoreFallback:I}),P))}));o.Ts&&(x.displayName="Avatar");var j=function(e){var r=e.src,n=e.srcSet,o=e.onError,l=e.getInitials,c=e.name,s=e.borderRadius,u=e.loading,d=e.iconLabel,m=e.icon,f=void 0===m?i.createElement(v,null):m,b=e.ignoreFallback,h=e.referrerPolicy,g=(0,t.d9)({src:r,onError:o,ignoreFallback:b});return!r||!("loaded"===g)?c?i.createElement(p,{className:"chakra-avatar__initials",getInitials:l,name:c}):i.cloneElement(f,{role:"img","aria-label":d}):i.createElement(a.m$.img,{src:r,srcSet:n,alt:c,referrerPolicy:h,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};o.Ts&&(j.displayName="AvatarImage");var w=["children","borderColor","max","spacing","borderRadius"],O=(0,a.Gp)((function(e,r){var n=(0,a.jC)("Avatar",e),t=(0,a.Lr)(e),u=t.children,d=t.borderColor,m=t.max,f=t.spacing,b=void 0===f?"-0.75rem":f,h=t.borderRadius,g=void 0===h?"full":h,p=c(t,w),v=(0,l.WR)(u),x=m?v.slice(0,m):v,j=null!=m&&v.length-m,O=x.reverse().map((function(r,n){var t,a={marginEnd:0===n?0:b,size:e.size,borderColor:null!=(t=r.props.borderColor)?t:d,showBorder:!0};return i.cloneElement(r,(0,o.YU)(a))})),E=s({borderRadius:g,marginStart:b},y,n.excessLabel);return i.createElement(a.m$.div,s({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},p,{className:(0,o.cx)("chakra-avatar__group",e.className)}),j>0&&i.createElement(a.m$.span,{className:"chakra-avatar__excess",__css:E},"+"+j),O)}));o.Ts&&(O.displayName="AvatarGroup")},4545:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(1145)}])},7768:function(e,r,n){"use strict";n.d(r,{zx:function(){return c},hR:function(){return f},qW:function(){return x}});var t=n(5893),a=n(1604),o=n(5193);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=(0,a.Gp)((function(e,r){var n=e.children,a=l(e,["children"]);return(0,t.jsx)(o.zx,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){i(e,r,n[r])}))}return e}({},a,{ref:r,children:n}))})),s=n(5456);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}function m(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=(0,a.Gp)((function(e,r){var n=e.iconType,a=m(e,["iconType"]);return(0,t.jsx)(t.Fragment,{children:"plus"===n?(0,t.jsx)(c,d({},a,{ref:r,variant:"iconRound",children:(0,t.jsx)(s.SC,{w:"2.4rem",h:"2.4rem",color:"white"})})):(0,t.jsxs)(c,d({},a,{ref:r,variant:"iconRound",bgColor:"white",w:"4rem",h:"4rem",children:["return"===n&&(0,t.jsx)(s.BK,{w:"2.4rem",h:"2.4rem",color:"black",mt:".4rem"}),"edit"===n&&(0,t.jsx)(s.yl,{w:"1.8rem",h:"1.8rem",color:"logo-black"}),"menu"===n&&(0,t.jsx)(s.dc,{w:"2rem",h:"2rem",color:"logo-black"})]}))})})),b=n(7375);function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function g(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function v(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){g(e,r,n[r])}))}return e}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return h(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(e){var r=p({},e),n=y((0,b.kt)(!1),2),a=n[0],o=n[1],i=function(){a?o.off():o.on()};return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)(s.d8,v({},r,{w:"2.5rem",h:"2.5rem",onClick:i})):(0,t.jsx)(s.MS,v({},r,{w:"2.5rem",h:"2.5rem",onClick:i}))})}},1145:function(e,r,n){"use strict";n.r(r);var t=n(5893),a=n(8527),o=n(7657),i=n(1664),l=n.n(i),c=n(2298),s=n(5456),u=n(5246),d=n(1163),m=n(7768);r.default=function(){var e=(0,d.useRouter)(),r=(0,u.O_)().travelinkList,n=(0,u.mw)().ownerProfile;return(0,t.jsx)(t.Fragment,{children:n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.kC,{marginTop:"1.2rem",children:[(0,t.jsx)(a.xu,{w:"4rem"}),(0,t.jsx)(a.LZ,{}),(0,t.jsx)(a.kC,{bgImage:"/images/traveli.svg",marginTop:"1rem",w:"7.7rem",h:"1.8rem"}),(0,t.jsx)(a.LZ,{}),(0,t.jsx)(o.qE,{w:"4rem",h:"4rem",src:n?n.icon:""})]}),(0,t.jsx)(a.xu,{marginTop:"2.2rem",filter:"drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",w:"100%",h:"11.4rem",borderRadius:"1rem",bgColor:"white",children:"banner"}),(0,t.jsxs)(a.kC,{paddingTop:"1.6rem",paddingBottom:"1.6rem",alignItems:"baseline",children:[(0,t.jsx)(a.xu,{paddingRight:"0.8rem",fontSize:"2xl",fontWeight:"bold",children:"00"}),(0,t.jsx)(a.xu,{w:"1.8rem",h:"1.8rem",borderRadius:"50%",textAlign:"center",bgColor:"white",fontSize:"xs",children:"\u571f"}),(0,t.jsx)(a.xu,{paddingLeft:"0.8rem",fontSize:"sm",children:"2022/05"})]}),r.map((function(r,n){return(0,t.jsx)(l(),{href:e.basePath+r.id,passHref:!0,children:(0,t.jsxs)(a.xu,{w:"100%",h:"23.9rem",borderRadius:"10",filter:"drop-shadow(0.4rem 0.4rem 1rem #E4EBEE)",bgColor:"white",marginBottom:"2.2rem",children:[(0,t.jsx)(a.xu,{bgImage:r.thumbnail,h:"12.9rem",borderTopRadius:"10"}),(0,t.jsxs)(a.xu,{paddingTop:"1.1rem",paddingLeft:"1.8rem",paddingRight:"1.8rem",borderBottomRadius:"10",children:[r.date[0]&&(0,t.jsxs)(a.xu,{fontSize:"xs",color:"gray",children:[r.date[0]&&(0,c.default)(r.date[0].toDate(),"yyyy/MM/dd"),"~",r.date[1]&&(0,c.default)(r.date[1].toDate(),"yyyy/MM/dd")]}),(0,t.jsx)(a.xu,{children:(0,t.jsx)(a.X6,{paddingTop:"0.6rem",paddingBottom:"1.4rem",fontSize:"lg",children:r.title})}),(0,t.jsxs)(a.kC,{alignContent:"baseline",children:[(0,t.jsxs)(a.kC,{children:[(0,t.jsx)(o.qE,{w:"2.4rem",h:"2.4rem",src:r.ownerIcon}),(0,t.jsx)(a.xu,{paddingLeft:"1rem",fontSize:"md",children:r.ownerName})]}),(0,t.jsx)(a.LZ,{}),(0,t.jsx)(l(),{href:e.basePath+"/user",passHref:!0,children:(0,t.jsx)(s.JH,{w:"2rem",h:"2rem",color:"gray"})})]})]})]})},n)})),(0,t.jsx)(m.hR,{iconType:"plus",position:"fixed",top:"calc(100vh - 6.4rem - 4.8rem)",right:"1.6rem",w:"6.4rem",h:"6.4rem",boxShadow:"0 0.1rem 0.3rem 0.1rem rgba(101, 119, 134, 0.25)",filter:"drop-shadow(0 0 0.8rem rgba(101, 119, 134, 0.20))"})]}):(0,t.jsx)(t.Fragment,{children:"\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30a4\u30b3\u30f3"})})}}},function(e){e.O(0,[664,461,668,774,888,179],(function(){return r=4545,e(e.s=r);var r}));var r=e.O();_N_E=r}]);