(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7657:function(e,r,a){"use strict";a.d(r,{qE:function(){return E}});var n=a(4651),t=a(1604),i=a(4592),o=a(7294),s=a(8922);function l(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var d=["name","getInitials"],m=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],u=(0,t.eC)("Avatar"),g=u[0],h=u[1],f=(0,t.Gp)((function(e,r){var a=c({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},h().badge);return o.createElement(t.m$.div,c({ref:r},e,{className:(0,i.cx)("chakra-avatar__badge",e.className),__css:a}))}));function x(e){var r=e.split(" "),a=r[0],n=r[1];return a&&n?""+a.charAt(0)+n.charAt(0):a.charAt(0)}i.Ts&&(f.displayName="AvatarBadge");var p=function(e){var r=e.name,a=e.getInitials,n=l(e,d),i=h();return o.createElement(t.m$.div,c({role:"img","aria-label":r},n,{__css:i.label}),r?null==a?void 0:a(r):null)},b=function(e){return o.createElement(t.m$.svg,c({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),o.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},v={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},E=(0,t.Gp)((function(e,r){var a=(0,t.jC)("Avatar",e),n=(0,t.Lr)(e),s=n.src,d=n.srcSet,u=n.name,h=n.showBorder,f=n.borderRadius,p=void 0===f?"full":f,E=n.onError,_=n.getInitials,C=void 0===_?x:_,w=n.icon,y=void 0===w?o.createElement(b,null):w,k=n.iconLabel,N=void 0===k?" avatar":k,R=n.loading,L=n.children,I=n.borderColor,T=n.ignoreFallback,S=l(n,m),A=c({borderRadius:p,borderWidth:h?"2px":void 0},v,a.container);return I&&(A.borderColor=I),o.createElement(t.m$.span,c({ref:r},S,{className:(0,i.cx)("chakra-avatar",e.className),__css:A}),o.createElement(g,{value:a},o.createElement(j,{src:s,srcSet:d,loading:R,onError:E,getInitials:C,name:u,borderRadius:p,icon:y,iconLabel:N,ignoreFallback:T}),L))}));i.Ts&&(E.displayName="Avatar");var j=function(e){var r=e.src,a=e.srcSet,i=e.onError,s=e.getInitials,l=e.name,c=e.borderRadius,d=e.loading,m=e.iconLabel,u=e.icon,g=void 0===u?o.createElement(b,null):u,h=e.ignoreFallback,f=e.referrerPolicy,x=(0,n.d9)({src:r,onError:i,ignoreFallback:h});return!r||!("loaded"===x)?l?o.createElement(p,{className:"chakra-avatar__initials",getInitials:s,name:l}):o.cloneElement(g,{role:"img","aria-label":m}):o.createElement(t.m$.img,{src:r,srcSet:a,alt:l,referrerPolicy:f,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};i.Ts&&(j.displayName="AvatarImage");var _=["children","borderColor","max","spacing","borderRadius"],C=(0,t.Gp)((function(e,r){var a=(0,t.jC)("Avatar",e),n=(0,t.Lr)(e),d=n.children,m=n.borderColor,u=n.max,g=n.spacing,h=void 0===g?"-0.75rem":g,f=n.borderRadius,x=void 0===f?"full":f,p=l(n,_),b=(0,s.WR)(d),E=u?b.slice(0,u):b,j=null!=u&&b.length-u,C=E.reverse().map((function(r,a){var n,t={marginEnd:0===a?0:h,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:m,showBorder:!0};return o.cloneElement(r,(0,i.YU)(t))})),w=c({borderRadius:x,marginStart:h},v,a.excessLabel);return o.createElement(t.m$.div,c({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},p,{className:(0,i.cx)("chakra-avatar__group",e.className)}),j>0&&o.createElement(t.m$.span,{className:"chakra-avatar__excess",__css:w},"+"+j),C)}));i.Ts&&(C.displayName="AvatarGroup")},4545:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return a(1145)}])},1145:function(e,r,a){"use strict";a.r(r);var n=a(5893),t=a(8527),i=a(7657),o=a(1163),s=a(1664),l=a.n(s),c=a(2298),d=a(5456),m=a(5246);r.default=function(){var e=(0,o.useRouter)(),r=(0,m.O_)().travelinkList,a=(0,m.mw)().ownerProfile;return(0,n.jsx)(n.Fragment,{children:a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.kC,{marginTop:"1.2rem",children:[(0,n.jsx)(t.xu,{w:"4rem"}),(0,n.jsx)(t.LZ,{}),(0,n.jsx)(t.kC,{bgImage:"/images/traveli.svg",marginTop:"1rem",w:"7.7rem",h:"1.8rem"}),(0,n.jsx)(t.LZ,{}),(0,n.jsx)(i.qE,{w:"4rem",h:"4rem",src:a?a.icon:""})]}),(0,n.jsx)(t.xu,{marginTop:"2.2rem",filter:"drop-shadow(4px 4px 10px #E4EBEE)",w:"100%",h:"11.4rem",borderRadius:"1rem",bgColor:"white",children:"banner"}),(0,n.jsxs)(t.kC,{paddingTop:"1.6rem",paddingBottom:"1.6rem",alignItems:"baseline",children:[(0,n.jsx)(t.xu,{paddingRight:"0.8rem",fontSize:"2xl",fontWeight:"bold",children:"00"}),(0,n.jsx)(t.xu,{w:"1.8rem",h:"1.8rem",borderRadius:"50%",textAlign:"center",bgColor:"white",fontSize:"xs",children:"\u571f"}),(0,n.jsx)(t.xu,{paddingLeft:"0.8rem",fontSize:"sm",children:"2022/05"})]}),r.map((function(r,a){return(0,n.jsx)(l(),{href:e.basePath+r.id,passHref:!0,children:(0,n.jsxs)(t.xu,{w:"100%",h:"23.9rem",borderRadius:"10",filter:"drop-shadow(4px 4px 10px #E4EBEE)",bgColor:"white",marginBottom:"2.2rem",children:[(0,n.jsx)(t.xu,{bgImage:r.thumbnail,h:"12.9rem",borderTopRadius:"10"}),(0,n.jsxs)(t.xu,{paddingTop:"1.1rem",paddingLeft:"1.8rem",paddingRight:"1.8rem",borderBottomRadius:"10",children:[r.date[0]&&(0,n.jsxs)(t.xu,{fontSize:"xs",color:"gray",children:[r.date[0]&&(0,c.default)(r.date[0].toDate(),"yyyy/MM/dd"),"~",r.date[1]&&(0,c.default)(r.date[1].toDate(),"yyyy/MM/dd")]}),(0,n.jsx)(t.xu,{children:(0,n.jsx)(t.X6,{paddingTop:"0.6rem",paddingBottom:"1.4rem",fontSize:"lg",children:r.title})}),(0,n.jsxs)(t.kC,{alignContent:"baseline",children:[(0,n.jsxs)(t.kC,{children:[(0,n.jsx)(i.qE,{w:"2.4rem",h:"2.4rem",src:r.ownerIcon}),(0,n.jsx)(t.xu,{paddingLeft:"1rem",fontSize:"md",children:r.ownerName})]}),(0,n.jsx)(t.LZ,{}),(0,n.jsx)(l(),{href:e.basePath+"/user",passHref:!0,children:(0,n.jsx)(d.JH,{w:"2rem",h:"2rem",color:"gray"})})]})]})]})},a)}))]}):(0,n.jsx)(n.Fragment,{children:"\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30a4\u30b3\u30f3"})})}}},function(e){e.O(0,[664,250,668,774,888,179],(function(){return r=4545,e(e.s=r);var r}));var r=e.O();_N_E=r}]);