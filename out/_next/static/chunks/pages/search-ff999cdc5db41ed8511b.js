(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{6467:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(2949),a=t(7294),o=t(282),i=t(4577),c=t(1664),s=t(6010),u=a.createElement;function l(e){var n=e.className;(0,r.Z)(e,["className"]);return u(c.default,{href:"/"},u("a",null,u(o.Z,{variant:"contained",color:"secondary",className:(0,s.Z)("mt-4 ml-4",n),startIcon:u(i.Z,null)},"Return to home")))}},4291:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(2122),a=t(2949),o=t(7294),i=t(6010),c=t(1120),s=t(7623),u=o.createElement,l=(0,c.Z)((function(e){return(0,s.Z)({root:{position:"relative",height:0,paddingTop:function(e){return e.percentage}}})}));function f(e){var n=e.percentage,t=e.className,o=e.children,c=(0,a.Z)(e,["percentage","className","children"]),s=l({percentage:n});return u("div",(0,r.Z)({className:(0,i.Z)(s.root,t)},c),o)}},9330:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(2122),a=t(4699),o=t(2949),i=t(7294),c=t(6010),s=t(1163),u=t(129),l=t.n(u),f=t(1120),m=t(9895),p=t(1781),d=t(7812),h=t(7215),g=i.createElement,Z=(0,f.Z)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",border:"2px solid ".concat(e.palette.common.black)},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function b(e){var n=e.initialValue,t=e.className,u=(0,o.Z)(e,["initialValue","className"]),f=Z(),b=i.useState(null!==n&&void 0!==n?n:""),v=(0,a.Z)(b,2),y=v[0],x=v[1],N=(0,s.useRouter)();i.useEffect((function(){n&&x(n)}),[n]);return g(m.Z,(0,r.Z)({component:"form",className:(0,c.Z)(f.root,t),onSubmit:function(e){e.preventDefault(),N.push("/search?".concat(l().stringify({q:y})))}},u),g(p.Z,{className:f.input,placeholder:"Find by by stall, location, or food",value:y,onChange:function(e){x(e.target.value)}}),g(d.Z,{type:"submit",className:f.iconButton},g(h.Z,null)))}},4814:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(7294),a=t(1749),o=t(8920),i=t(3457),c=t(4699),s=t(1664),u=t(2318),l=t(1120),f=t(7623),m=t(533),p=t(4291),d=t(2122),h=t(6156),g=t(2949),Z=t(2666),b=r.createElement;function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=1e3,N={transition:"opacity ".concat(x,"ms, transform ").concat(x,"ms"),opacity:0,transform:"translateY(20px)"},w={entering:{opacity:1,transform:"translateY(0)"},entered:{opacity:1,transform:"translateY(0)"}};function O(e){var n=e.in,t=e.children,r=(0,g.Z)(e,["in","children"]);return b(Z.ZP,(0,d.Z)({in:n,timeout:x},r),(function(e){return b("div",{style:y(y({},N),w[e])},t)}))}var k=t(1021),S=r.createElement,E=(0,l.Z)((function(e){return(0,f.Z)({root:{"&:hover $ratioContainer":{transform:"translateY(-".concat(e.spacing(3),"px)"),boxShadow:"3px 18px 4px -2px rgba(0,0,0,0.62)"},"&:hover $textContainer":{color:e.palette.secondary.main}},textContainer:{textAlign:"center",marginTop:e.spacing(4)},ratioContainer:function(e){return{boxShadow:"3px 6px 4px -2px rgba(0,0,0,0.62)",transition:"transform 0.2s, box-shadow 0.2s, filter 0.2s ease-out",backgroundImage:"url(".concat(e.src,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",filter:e.blur?"blur(8px)":"none"}}})}));function _(e){var n=e.image,t=e.href,a=e.children,o=(0,k.e)({compressedSrc:n.compressedBase64,src:n.link}),i=o.src,l=o.blur,f=E({src:i,blur:l}),d=r.useState(!1),h=(0,c.Z)(d,2),g=h[0],Z=h[1];return S(m.h,{onEnter:function(){Z(!0)}},S("div",{className:f.root},S(O,{in:g},S(s.default,{href:t},S("a",null,S(p.Z,{className:f.ratioContainer,percentage:"100%"}),S("div",{className:f.textContainer},S(u.Z,{variant:"h6",className:"font-bold leading-none"},a)))))))}var j=r.createElement;function C(e){var n=e.items,t=(0,o.Z)(),r=(0,i.Z)(t.breakpoints.up("sm"));return j(a.Z,{container:!0,spacing:r?10:6,justify:"center"},n.map((function(e,n){return j(a.Z,{item:!0,xs:6,md:4,lg:3,key:e.href},j(_,{href:e.href,image:e.image},e.children))})))}},1021:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(4699),a=t(7294);function o(e){var n=e.compressedSrc,t=e.src,o=a.useState({blur:!0,src:n}),i=(0,r.Z)(o,2),c=i[0],s=i[1];return a.useEffect((function(){var e=new Image;e.src=t,e.onload=function(){s({blur:!1,src:t})}}),[]),c}},4834:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return b},default:function(){return v}});var r=t(4699),a=t(7294),o=t(3832),i=t(2318),c=t(3681),s=t(9008),u=t(1120),l=t(7623),f=t(1163),m=t(4814),p=t(9330),d=t(6467),h=t(4221);var g=a.createElement,Z=(0,u.Z)((function(e){return(0,l.Z)({root:{backgroundColor:e.palette.primary.main}})})),b=!0;function v(e){var n=e.stalls,t=Z(),u=(0,f.useRouter)(),l=a.useState(null),b=(0,r.Z)(l,2),v=b[0],y=b[1],x=a.useState(""),N=(0,r.Z)(x,2),w=N[0],O=N[1];return a.useEffect((function(){if(u.isReady)if(u.query.q){O(u.query.q);var e=function(e,n){return new h.Z(n,{includeScore:!0,minMatchCharLength:3,keys:["name","location.name","stallNumber","information.deliveryAvailable","information.contact","information.foodTheyServe","information.favorites","information.dietaryRestrictions","information.priceRange","information.nameOfHawker","information.moreAboutThisHawker","information.openingHours","information.whatAreTheConcernsThisHawkerIsFacing","information.recommendedBy"]}).search(e)}(u.query.q,n);y(e.map((function(e){return e.item})))}else y([])}),[u.isReady,u.query]),g("div",{className:t.root},g(s.default,null,g("title",null,"Search Results")),g(d.Z,null),g(o.Z,{maxWidth:"md",className:"flex flex-col justify-center h-full text-center pt-10"},g(i.Z,{variant:"h2",className:"font-bold"},"Search Results")),g(o.Z,{fixed:!0,className:"py-16"},g(p.Z,{initialValue:w,className:"mb-16"}),v?0===v.length?g("div",{className:"text-center"},g(i.Z,null,"Oh the sadness... No results found! Try another search term or add a new entry"," ",g("a",{className:"underline",href:"https://projecthawker.com/submit",target:"_blank",rel:"noopener noreferrer"},"here"),".")):g(m.Z,{items:v.map((function(e){return{href:"/".concat(e.location.slug,"/").concat(e.slug),image:e.images[0],children:g("span",null,e.name,g("br",null),g(i.Z,{color:"textSecondary",variant:"subtitle2"},"(",e.location.name,")"))}}))}):g(c.Z,{color:"secondary"})))}},881:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(4834)}])},4654:function(){}},function(e){e.O(0,[212,884,768,296,774,888,179],(function(){return n=881,e(e.s=n);var n}));var n=e.O();_N_E=n}]);