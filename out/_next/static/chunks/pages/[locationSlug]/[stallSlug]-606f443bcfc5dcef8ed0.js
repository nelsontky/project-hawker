(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{1021:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var a=n(4699),r=n(7294);function o(e){var t=e.compressedSrc,n=e.src,o=r.useState({blur:!0,src:t}),i=(0,a.Z)(o,2),l=i[0],c=i[1];return r.useEffect((function(){var e=new Image;e.src=n,e.onload=function(){c({blur:!1,src:n})}}),[]),l}},7525:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return z},default:function(){return C}});var a=n(7294),r=n(2318),o=n(3832),i=n(9008),l=n(2122),c=n(2949),s=n(1120),u=n(7623),m=n(6010),f=n(1021),d=a.createElement,v=(0,s.Z)((function(e){return(0,u.Z)({root:{position:"relative",height:"80vh"},background:function(e){return{position:"absolute",top:0,height:"100%",width:"100%",zIndex:-1,background:"no-repeat center",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(".concat(e.src,")"),backgroundSize:"cover",filter:e.blur?"blur(8px)":"none",transition:"filter 0.2s ease-out"}}})}));function p(e){var t=e.image,n=e.children,a=e.className,r=(0,c.Z)(e,["image","children","className"]),o=(0,f.e)({src:t.link,compressedSrc:t.compressedBase64}),i=o.src,s=o.blur,u=v({src:i,blur:s});return d("div",(0,l.Z)({className:(0,m.Z)(u.root,a)},r),d("div",{className:u.background}),n)}var h=n(1749),g=n(656),b=(n(5697),n(4670)),N=n(3871),Z=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,i=e.color,s=void 0===i?"inherit":i,u=e.component,f=void 0===u?"svg":u,d=e.fontSize,v=void 0===d?"default":d,p=e.htmlColor,h=e.titleAccess,g=e.viewBox,b=void 0===g?"0 0 24 24":g,Z=(0,c.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.createElement(f,(0,l.Z)({className:(0,m.Z)(r.root,o,"inherit"!==s&&r["color".concat((0,N.Z)(s))],"default"!==v&&r["fontSize".concat((0,N.Z)(v))]),focusable:"false",viewBox:b,color:p,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t},Z),n,h?a.createElement("title",null,h):null)}));Z.muiName="SvgIcon";var S=(0,b.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(Z);var x=function(e,t){var n=function(t,n){return a.createElement(S,(0,l.Z)({ref:n},t),e)};return n.muiName=S.muiName,a.memo(a.forwardRef(n))}(a.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})),y=n(6486),k=n.n(y),_=a.createElement;function w(e){var t=e.stallData,n=t.information;return _(o.Z,{fixed:!0,className:"py-8"},_(h.Z,{container:!0,spacing:8},_(h.Z,{item:!0,xs:12,sm:6},_("div",{className:"mb-4"},_(r.Z,{className:"font-bold text-left"},"Location"),_(r.Z,{className:"text-justify"},t.location.name," (",t.location.postalCode,")")),Object.keys(n).map((function(e,t){return _("div",{key:t,className:"mb-4"},_(r.Z,{className:"font-bold text-left"},k().startCase(e)),_(r.Z,{className:"text-justify"},n[e]),"contact"===e&&!!n[e]&&_(g.Z,{variant:"contained",color:"primary",startIcon:_(x,null),href:"tel:+65".concat(n[e])},"Call to dabao"))}))),_(h.Z,{container:!0,item:!0,xs:12,sm:6,spacing:4},t.images.map((function(e,t){return _(h.Z,{item:!0,xs:12,key:t},_("img",{src:e.link}))})))))}var E=a.createElement,z=!0;function C(e){var t=e.stallData;return E("div",null,E(i.default,null,E("title",null,t.name)),E(p,{image:t.images[0]},E("div",{className:"relative h-full"},E(r.Z,{variant:"h4",className:"font-bold absolute top-4 left-4"},t.stallNumber),E(o.Z,{maxWidth:"md",className:"flex flex-col justify-center h-full text-center"},E(r.Z,{variant:"h2",className:"font-bold"},t.name)))),E(w,{stallData:t}))}},552:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locationSlug]/[stallSlug]",function(){return n(7525)}])},220:function(e,t,n){"use strict";var a=n(7294);t.Z=a.createContext(null)}},function(e){e.O(0,[662,656,774,888,179],(function(){return t=552,e(e.s=t);var t}));var t=e.O();_N_E=t}]);