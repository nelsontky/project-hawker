(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{1021:function(e,t,a){"use strict";a.d(t,{e:function(){return s}});var n=a(4699),r=a(7294);function s(e){var t=e.compressedSrc,a=e.src,s=r.useState({blur:!0,src:t}),c=(0,n.Z)(s,2),l=c[0],i=c[1];return r.useEffect((function(){var e=new Image;e.src=a,e.onload=function(){i({blur:!1,src:a})}}),[]),l}},2493:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return k},default:function(){return x}});var n=a(7294),r=a(2318),s=a(3832),c=a(9008),l=a(2122),i=a(2949),o=a(1120),u=a(7623),m=a(6010),f=a(1021),d=n.createElement,b=(0,o.Z)((function(e){return(0,u.Z)({root:{position:"relative",height:"80vh"},background:function(e){return{position:"absolute",top:0,height:"100%",width:"100%",zIndex:-1,background:"no-repeat center",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(".concat(e.src,")"),backgroundSize:"cover",filter:e.blur?"blur(8px)":"none",transition:"filter 0.2s ease-out"}}})}));function v(e){var t=e.image,a=e.children,n=e.className,r=(0,i.Z)(e,["image","children","className"]),s=(0,f.e)({src:t.link,compressedSrc:t.compressedBase64}),c=s.src,o=s.blur,u=b({src:c,blur:o});return d("div",(0,l.Z)({className:(0,m.Z)(u.root,n)},r),d("div",{className:u.background}),a)}var g=a(1749),N=a(6486),p=a.n(N),Z=n.createElement;function h(e){var t=e.stallData,a=t.information;return Z(s.Z,{fixed:!0,className:"py-8"},Z(g.Z,{container:!0,spacing:8},Z(g.Z,{item:!0,xs:12,sm:6},Z("div",{className:"mb-4"},Z(r.Z,{className:"font-bold text-left"},"Location"),Z(r.Z,{className:"text-justify"},t.location.name," (",t.location.postalCode,")")),Object.keys(a).map((function(e,t){return Z("div",{key:t,className:"mb-4"},Z(r.Z,{className:"font-bold text-left"},p().startCase(e)),Z(r.Z,{className:"text-justify"},a[e]))}))),Z(g.Z,{container:!0,item:!0,xs:12,sm:6,spacing:4},t.images.map((function(e,t){return Z(g.Z,{item:!0,xs:12,key:t},Z("img",{src:e.link}))})))))}var _=n.createElement,k=!0;function x(e){var t=e.stallData;return _("div",null,_(c.default,null,_("title",null,t.name)),_(v,{image:t.images[0]},_("div",{className:"relative h-full"},_(r.Z,{variant:"h4",className:"font-bold absolute top-4 left-4"},t.stallNumber),_(s.Z,{maxWidth:"md",className:"flex flex-col justify-center h-full text-center"},_(r.Z,{variant:"h2",className:"font-bold"},t.name)))),_(h,{stallData:t}))}},552:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locationSlug]/[stallSlug]",function(){return a(2493)}])}},function(e){e.O(0,[662,774,888,179],(function(){return t=552,e(e.s=t);var t}));var t=e.O();_N_E=t}]);