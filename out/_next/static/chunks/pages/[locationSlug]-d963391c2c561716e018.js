(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{8920:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(159),r=(t(7294),t(9700));function o(){return(0,a.Z)()||r.Z}},3457:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(2122),r=t(7294),o=t(159),c=t(3869);function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.Z)(),i=(0,c.Z)({theme:t,name:"MuiUseMediaQuery",props:{}});var s="function"===typeof e?e(t):e;s=s.replace(/^@media( ?)/m,"");var l="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,u=(0,a.Z)({},i,n),m=u.defaultMatches,f=void 0!==m&&m,d=u.matchMedia,p=void 0===d?l?window.matchMedia:null:d,g=u.noSsr,h=void 0!==g&&g,v=u.ssrMatchMedia,Z=void 0===v?null:v,w=r.useState((function(){return h&&l?p(s).matches:Z?Z(s).matches:f})),N=w[0],b=w[1];return r.useEffect((function(){var e=!0;if(l){var n=p(s),t=function(){e&&b(n.matches)};return t(),n.addListener(t),function(){e=!1,n.removeListener(t)}}}),[s,p,l]),N}},5959:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var a=t(7294),r=t(3832),o=t(1749),c=t(2318),i=t(1120),s=t(7623),l=t(5571),u=a.createElement,m=(0,i.Z)((function(e){return(0,s.Z)({root:{paddingBottom:e.spacing(10),backgroundColor:e.palette.secondary.main},title:{fontFamily:"'Fredericka the Great', cursive",color:e.palette.common.white},waves:{fill:function(n){var t;return null!==(t=n.neighborColor)&&void 0!==t?t:e.palette.background.default}},icon:{height:e.spacing(16),width:e.spacing(16)}})}));function f(e){var n=e.neighborColor,t=m({neighborColor:n});return u("div",{className:t.root},u("div",null,u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 100",preserveAspectRatio:"none"},u("path",{className:t.waves,opacity:"0.33",d:"M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"}),u("path",{className:t.waves,opacity:"0.66",d:"M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"}),u("path",{className:t.waves,d:"M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"}))),u(r.Z,{fixed:!0,className:"pt-8"},u(o.Z,{container:!0,spacing:6},u(o.Z,{item:!0,xs:12,className:"text-center"},u(c.Z,{className:t.title,variant:"h4"},"@projecthawker")),u(o.Z,{item:!0,xs:12,container:!0,spacing:2,justify:"center"},u(o.Z,{item:!0},u(l.Z,{className:t.icon,src:"/images/icons/instagram.png",href:"https://www.instagram.com/projecthawker/",target:"_blank",rel:"noopener noreferrer"})),u(o.Z,{item:!0},u(l.Z,{className:t.icon,src:"/images/icons/facebook.png",href:"https://www.facebook.com/projecthawker",target:"_blank",rel:"noopener noreferrer"})),u(o.Z,{item:!0},u(l.Z,{className:t.icon,src:"/images/icons/whatsapp.png",href:"https://api.whatsapp.com/send?phone=6590682937",target:"_blank",rel:"noopener noreferrer"})),u(o.Z,{item:!0},u(l.Z,{className:t.icon,src:"/images/icons/telegram.png",href:"https://t.me/projecthawker",target:"_blank",rel:"noopener noreferrer"}))))))}},5754:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(2122),r=t(2949),o=t(7294),c=t(1120),i=t(7623),s=t(6010),l=o.createElement,u=(0,c.Z)((function(e){return(0,i.Z)({root:{background:"no-repeat center",backgroundImage:function(e){return"linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(".concat(e.image,")")},backgroundSize:"cover",height:"80vh"}})}));function m(e){var n=e.image,t=e.children,o=e.className,c=(0,r.Z)(e,["image","children","className"]),i=u({image:n});return l("div",(0,a.Z)({className:(0,s.Z)(i.root,o)},c),t)}},5571:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var a=t(2949),r=t(7294),o=t(6010),c=t(1120),i=t(7623),s=t(1664),l=t(2318),u=r.createElement,m=(0,c.Z)((function(e){return(0,i.Z)({root:{position:"relative",transition:"transform 0.2s","&:hover":{transform:"scale(1.2)"}},caption:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4),position:"absolute",backgroundColor:function(n){var t;return null!==(t=n.color)&&void 0!==t?t:e.palette.primary.main},left:"50%",bottom:e.spacing(2),transform:"translateX(-50%)"}})}));function f(e){var n=e.src,t=e.children,r=e.className,c=e.target,i=e.rel,f=e.color,d=e.fontVariant,p=(0,a.Z)(e,["src","children","className","target","rel","color","fontVariant"]),g=m({color:f});return u("div",{className:(0,o.Z)(g.root,r)},u(s.default,p,u("a",{target:c,rel:i},u("img",{src:n}),t&&u("div",{className:g.caption},u(l.Z,{variant:null!==d&&void 0!==d?d:"h6"},t)))))}},4291:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(2122),r=t(2949),o=t(7294),c=t(6010),i=t(1120),s=t(7623),l=o.createElement,u=(0,i.Z)((function(e){return(0,s.Z)({root:{height:0,paddingTop:function(e){return e.percentage}}})}));function m(e){var n=e.percentage,t=e.className,o=e.children,i=(0,r.Z)(e,["percentage","className","children"]),s=u({percentage:n});return l("div",(0,a.Z)({className:(0,c.Z)(s.root,t)},i),o)}},5261:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Z},default:function(){return w}});var a=t(7294),r=t(3832),o=t(2318),c=t(1749),i=t(5959),s=t(9008),l=t(1120),u=t(7623),m=t(8920),f=t(3457),d=t(1664),p=t(5754),g=t(4291),h=a.createElement,v=(0,l.Z)((function(e){return(0,u.Z)({ratioContainer:{boxShadow:"3px 6px 4px -2px rgba(0,0,0,0.62)",transition:"transform 0.2s, box-shadow 0.2s","&:hover":{transform:"translateY(-".concat(e.spacing(3),"px)"),boxShadow:"3px 18px 4px -2px rgba(0,0,0,0.62)"}},stall:{"&:hover":{color:e.palette.primary.main}}})})),Z=!0;function w(e){var n=e.locationData,t=e.locationSlug,a=v(),l=(0,m.Z)(),u=(0,f.Z)(l.breakpoints.up("sm"));return h("div",null,h(s.default,null,h("title",null,n.name)),h(p.Z,{image:n.images[0].link},h(r.Z,{maxWidth:"md",className:"flex flex-col justify-center h-full text-center"},h(o.Z,{variant:"h2",className:"font-bold"},n.name))),h(r.Z,{fixed:!0,className:"pt-16"},h(c.Z,{container:!0,spacing:10,justify:"center"},n.stalls.map((function(e,n){return h(c.Z,{item:!0,xs:12,sm:6,md:4,lg:3,key:n,className:a.stall},h(d.default,{href:"/".concat(t,"/").concat(e.slug)},h("a",null,h(g.Z,{className:a.ratioContainer,percentage:u?"100%":"56.25%",style:{background:"url(".concat(e.images[0].link,") no-repeat center"),backgroundSize:"cover"}}),h("div",{className:"text-center mt-4"},h(o.Z,{variant:"h6",className:"font-bold leading-none"},e.name)))))})))),h(i.Z,null))}},9617:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locationSlug]",function(){return t(5261)}])}},function(e){e.O(0,[398,774,888,179],(function(){return n=9617,e(e.s=n);var n}));var n=e.O();_N_E=n}]);