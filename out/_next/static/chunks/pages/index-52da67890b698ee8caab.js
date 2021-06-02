(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4291:function(A,e,t){"use strict";t.d(e,{Z:function(){return l}});var n=t(2122),r=t(2949),o=t(7294),a=t(6010),c=t(1120),i=t(7623),s=o.createElement,g=(0,c.Z)((function(A){return(0,i.Z)({root:{position:"relative",height:0,paddingTop:function(A){return A.percentage}}})}));function l(A){var e=A.percentage,t=A.className,o=A.children,c=(0,r.Z)(A,["percentage","className","children"]),i=g({percentage:e});return s("div",(0,n.Z)({className:(0,a.Z)(i.root,t)},c),o)}},9330:function(A,e,t){"use strict";t.d(e,{Z:function(){return C}});var n=t(2122),r=t(4699),o=t(2949),a=t(7294),c=t(6010),i=t(1163),s=t(129),g=t.n(s),l=t(1120),B=t(9895),u=t(1781),p=t(7812),m=t(7215),d=a.createElement,w=(0,l.Z)((function(A){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",border:"2px solid ".concat(A.palette.common.black)},input:{marginLeft:A.spacing(1),flex:1},iconButton:{padding:10}}}));function C(A){var e=A.initialValue,t=A.className,s=(0,o.Z)(A,["initialValue","className"]),l=w(),C=a.useState(null!==e&&void 0!==e?e:""),h=(0,r.Z)(C,2),E=h[0],f=h[1],Q=(0,i.useRouter)();a.useEffect((function(){e&&f(e)}),[e]);return d(B.Z,(0,n.Z)({component:"form",className:(0,c.Z)(l.root,t),onSubmit:function(A){A.preventDefault(),Q.push("/search?".concat(g().stringify({q:E})))}},s),d(u.Z,{className:l.input,placeholder:"Find by by stall, location, or food",value:E,onChange:function(A){f(A.target.value)}}),d(p.Z,{type:"submit",className:l.iconButton},d(m.Z,null)))}},4814:function(A,e,t){"use strict";t.d(e,{Z:function(){return R}});var n=t(7294),r=t(1749),o=t(8920),a=t(3457),c=t(4699),i=t(1664),s=t(2318),g=t(1120),l=t(7623),B=t(533),u=t(4291),p=t(2122),m=t(6156),d=t(2949),w=t(2666),C=n.createElement;function h(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function E(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){(0,m.Z)(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}var f=1e3,Q={transition:"opacity ".concat(f,"ms, transform ").concat(f,"ms"),opacity:0,transform:"translateY(20px)"},k={entering:{opacity:1,transform:"translateY(0)"},entered:{opacity:1,transform:"translateY(0)"}};function b(A){var e=A.in,t=A.children,n=(0,d.Z)(A,["in","children"]);return C(w.ZP,(0,p.Z)({in:e,timeout:f},n),(function(A){return C("div",{style:E(E({},Q),k[A])},t)}))}var Z=t(1021),x=n.createElement,v=(0,g.Z)((function(A){return(0,l.Z)({root:{"&:hover $ratioContainer":{transform:"translateY(-".concat(A.spacing(3),"px)"),boxShadow:"3px 18px 4px -2px rgba(0,0,0,0.62)"},"&:hover $textContainer":{color:A.palette.secondary.main}},textContainer:{textAlign:"center",marginTop:A.spacing(4)},ratioContainer:function(A){return{boxShadow:"3px 6px 4px -2px rgba(0,0,0,0.62)",transition:"transform 0.2s, box-shadow 0.2s, filter 0.2s ease-out",backgroundImage:"url(".concat(A.src,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",filter:A.blur?"blur(8px)":"none"}}})}));function D(A){var e=A.image,t=A.href,r=A.children,o=(0,Z.e)({compressedSrc:e.compressedBase64,src:e.link}),a=o.src,g=o.blur,l=v({src:a,blur:g}),p=n.useState(!1),m=(0,c.Z)(p,2),d=m[0],w=m[1];return x(B.h,{onEnter:function(){w(!0)}},x("div",{className:l.root},x(b,{in:d},x(i.default,{href:t},x("a",null,x(u.Z,{className:l.ratioContainer,percentage:"100%"}),x("div",{className:l.textContainer},x(s.Z,{variant:"h6",className:"font-bold leading-none"},r)))))))}var F=n.createElement;function R(A){var e=A.items,t=(0,o.Z)(),n=(0,a.Z)(t.breakpoints.up("sm"));return F(r.Z,{container:!0,spacing:n?10:6,justify:"center"},e.map((function(A,e){return F(r.Z,{item:!0,xs:6,md:4,lg:3,key:A.href},F(D,{href:A.href,image:A.image},A.children))})))}},1021:function(A,e,t){"use strict";t.d(e,{e:function(){return o}});var n=t(4699),r=t(7294);function o(A){var e=A.compressedSrc,t=A.src,o=r.useState({blur:!0,src:e}),a=(0,n.Z)(o,2),c=a[0],i=a[1];return r.useEffect((function(){var A=new Image;A.src=t,A.onload=function(){i({blur:!1,src:t})}}),[]),c}},2567:function(A,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return T},default:function(){return J}});var n=t(7294),r=t(9008),o=t(4699),a=t(1749),c=t(2318),i=t(1120),s=t(7623),g=t(5571),l=t(2122),B=t(2949),u=t(6010),p=n.createElement,m=(0,i.Z)((function(A){return(0,s.Z)({root:{transition:"transform 0.2s",transformOrigin:function(A){return A.origin},"&:hover":{transform:function(A){var e;return"rotate(".concat(null!==(e=A.angle)&&void 0!==e?e:"5","deg)")}}}})}));function d(A){var e=A.className,t=A.angle,n=A.origin,r=(0,B.Z)(A,["className","angle","origin"]),o=m({angle:t,origin:n});return p("img",(0,l.Z)({className:(0,u.Z)(o.root,e)},r))}var w=t(1021),C=n.createElement,h=(0,i.Z)((function(A){return(0,s.Z)({root:function(A){return{filter:A.blur?"blur(8px)":"none",transition:"filter 0.2s ease-out"}}})}));function E(A){var e=A.compressedBase64,t=A.src,n=A.className,r=(0,B.Z)(A,["compressedBase64","src","className"]),o=(0,w.e)({compressedSrc:e,src:t}),a=o.blur,c=o.src,i=h({blur:a});return C("img",(0,l.Z)({src:c,className:(0,u.Z)(n,i.root)},r))}var f=n.createElement;function Q(A){return f("svg",(0,l.Z)({},A,{className:"animate-bounce w-12 h-12",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor"}),f("path",{d:"M19 14l-7 7m0 0l-7-7m7 7V3"}))}var k={link:"/images/hero-background.jpg",compressedBase64:"data:image/png;base64,/9j/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAACQAAAADoAQAAQAAABQAAAAAAAAA/+IbGklDQ19QUk9GSUxFAAEBAAAbCmxjbXMCMAAAbW50clJHQiBYWVogB9QACAANAAwAEgAGYWNzcE1TRlQAAAAAbGNtcwAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1sY21zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMZG1uZAAAARQAAABqZGVzYwAAAYAAAABoZG1kZAAAAegAAABod3RwdAAAAlAAAAAUclhZWgAAAmQAAAAUYlhZWgAAAngAAAAUZ1hZWgAAAowAAAAUclRSQwAAAqAAAAgMZ1RSQwAACqwAAAgMYlRSQwAAErgAAAgMY2hybQAAGsQAAAAkY3BydAAAGugAAAAhZGVzYwAAAAAAAAAQbGNtcyBnZW5lcmF0ZWQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAFc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAAVzUkdCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAADzPQABAAAAARaYWFlaIAAAAAAAAG+UAAA47gAAA5BYWVogAAAAAAAAJJ0AAA+DAAC2vlhZWiAAAAAAAABipQAAt5AAABjeY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t//9jdXJ2AAAAAAAABAAAAAAFAAoADwAUABkAHgAjACgALQAyADcAOwBAAEUASgBPAFQAWQBeAGMAaABtAHIAdwB8AIEAhgCLAJAAlQCaAJ8ApACpAK4AsgC3ALwAwQDGAMsA0ADVANsA4ADlAOsA8AD2APsBAQEHAQ0BEwEZAR8BJQErATIBOAE+AUUBTAFSAVkBYAFnAW4BdQF8AYMBiwGSAZoBoQGpAbEBuQHBAckB0QHZAeEB6QHyAfoCAwIMAhQCHQImAi8COAJBAksCVAJdAmcCcQJ6AoQCjgKYAqICrAK2AsECywLVAuAC6wL1AwADCwMWAyEDLQM4A0MDTwNaA2YDcgN+A4oDlgOiA64DugPHA9MD4APsA/kEBgQTBCAELQQ7BEgEVQRjBHEEfgSMBJoEqAS2BMQE0wThBPAE/gUNBRwFKwU6BUkFWAVnBXcFhgWWBaYFtQXFBdUF5QX2BgYGFgYnBjcGSAZZBmoGewaMBp0GrwbABtEG4wb1BwcHGQcrBz0HTwdhB3QHhgeZB6wHvwfSB+UH+AgLCB8IMghGCFoIbgiCCJYIqgi+CNII5wj7CRAJJQk6CU8JZAl5CY8JpAm6Cc8J5Qn7ChEKJwo9ClQKagqBCpgKrgrFCtwK8wsLCyILOQtRC2kLgAuYC7ALyAvhC/kMEgwqDEMMXAx1DI4MpwzADNkM8w0NDSYNQA1aDXQNjg2pDcMN3g34DhMOLg5JDmQOfw6bDrYO0g7uDwkPJQ9BD14Peg+WD7MPzw/sEAkQJhBDEGEQfhCbELkQ1xD1ERMRMRFPEW0RjBGqEckR6BIHEiYSRRJkEoQSoxLDEuMTAxMjE0MTYxODE6QTxRPlFAYUJxRJFGoUixStFM4U8BUSFTQVVhV4FZsVvRXgFgMWJhZJFmwWjxayFtYW+hcdF0EXZReJF64X0hf3GBsYQBhlGIoYrxjVGPoZIBlFGWsZkRm3Gd0aBBoqGlEadxqeGsUa7BsUGzsbYxuKG7Ib2hwCHCocUhx7HKMczBz1HR4dRx1wHZkdwx3sHhYeQB5qHpQevh7pHxMfPh9pH5Qfvx/qIBUgQSBsIJggxCDwIRwhSCF1IaEhziH7IiciVSKCIq8i3SMKIzgjZiOUI8Ij8CQfJE0kfCSrJNolCSU4JWgllyXHJfcmJyZXJocmtyboJxgnSSd6J6sn3CgNKD8ocSiiKNQpBik4KWspnSnQKgIqNSpoKpsqzysCKzYraSudK9EsBSw5LG4soizXLQwtQS12Last4S4WLkwugi63Lu4vJC9aL5Evxy/+MDUwbDCkMNsxEjFKMYIxujHyMioyYzKbMtQzDTNGM38zuDPxNCs0ZTSeNNg1EzVNNYc1wjX9Njc2cjauNuk3JDdgN5w31zgUOFA4jDjIOQU5Qjl/Obw5+To2OnQ6sjrvOy07azuqO+g8JzxlPKQ84z0iPWE9oT3gPiA+YD6gPuA/IT9hP6I/4kAjQGRApkDnQSlBakGsQe5CMEJyQrVC90M6Q31DwEQDREdEikTORRJFVUWaRd5GIkZnRqtG8Ec1R3tHwEgFSEtIkUjXSR1JY0mpSfBKN0p9SsRLDEtTS5pL4kwqTHJMuk0CTUpNk03cTiVObk63TwBPSU+TT91QJ1BxULtRBlFQUZtR5lIxUnxSx1MTU19TqlP2VEJUj1TbVShVdVXCVg9WXFapVvdXRFeSV+BYL1h9WMtZGllpWbhaB1pWWqZa9VtFW5Vb5Vw1XIZc1l0nXXhdyV4aXmxevV8PX2Ffs2AFYFdgqmD8YU9homH1YklinGLwY0Njl2PrZEBklGTpZT1lkmXnZj1mkmboZz1nk2fpaD9olmjsaUNpmmnxakhqn2r3a09rp2v/bFdsr20IbWBtuW4SbmtuxG8eb3hv0XArcIZw4HE6cZVx8HJLcqZzAXNdc7h0FHRwdMx1KHWFdeF2Pnabdvh3VnezeBF4bnjMeSp5iXnnekZ6pXsEe2N7wnwhfIF84X1BfaF+AX5ifsJ/I3+Ef+WAR4CogQqBa4HNgjCCkoL0g1eDuoQdhICE44VHhauGDoZyhteHO4efiASIaYjOiTOJmYn+imSKyoswi5aL/IxjjMqNMY2Yjf+OZo7OjzaPnpAGkG6Q1pE/kaiSEZJ6kuOTTZO2lCCUipT0lV+VyZY0lp+XCpd1l+CYTJi4mSSZkJn8mmia1ZtCm6+cHJyJnPedZJ3SnkCerp8dn4uf+qBpoNihR6G2oiailqMGo3aj5qRWpMelOKWpphqmi6b9p26n4KhSqMSpN6mpqhyqj6sCq3Wr6axcrNCtRK24ri2uoa8Wr4uwALB1sOqxYLHWskuywrM4s660JbSctRO1irYBtnm28Ldot+C4WbjRuUq5wro7urW7LrunvCG8m70VvY++Cr6Evv+/er/1wHDA7MFnwePCX8Lbw1jD1MRRxM7FS8XIxkbGw8dBx7/IPci8yTrJuco4yrfLNsu2zDXMtc01zbXONs62zzfPuNA50LrRPNG+0j/SwdNE08bUSdTL1U7V0dZV1tjXXNfg2GTY6Nls2fHadtr724DcBdyK3RDdlt4c3qLfKd+v4DbgveFE4cziU+Lb42Pj6+Rz5PzlhOYN5pbnH+ep6DLovOlG6dDqW+rl63Dr++yG7RHtnO4o7rTvQO/M8Fjw5fFy8f/yjPMZ86f0NPTC9VD13vZt9vv3ivgZ+Kj5OPnH+lf65/t3/Af8mP0p/br+S/7c/23//2N1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANwA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCkAKkArgCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYCwQLLAtUC4ALrAvUDAAMLAxYDIQMtAzgDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSQVYBWcFdwWGBZYFpgW1BcUF1QXlBfYGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1ELaQuAC5gLsAvIC+EL+QwSDCoMQwxcDHUMjgynDMAM2QzzDQ0NJg1ADVoNdA2ODakNww3eDfgOEw4uDkkOZA5/DpsOtg7SDu4PCQ8lD0EPXg96D5YPsw/PD+wQCRAmEEMQYRB+EJsQuRDXEPURExExEU8RbRGMEaoRyRHoEgcSJhJFEmQShBKjEsMS4xMDEyMTQxNjE4MTpBPFE+UUBhQnFEkUahSLFK0UzhTwFRIVNBVWFXgVmxW9FeAWAxYmFkkWbBaPFrIW1hb6Fx0XQRdlF4kXrhfSF/cYGxhAGGUYihivGNUY+hkgGUUZaxmRGbcZ3RoEGioaURp3Gp4axRrsGxQbOxtjG4obshvaHAIcKhxSHHscoxzMHPUdHh1HHXAdmR3DHeweFh5AHmoelB6+HukfEx8+H2kflB+/H+ogFSBBIGwgmCDEIPAhHCFIIXUhoSHOIfsiJyJVIoIiryLdIwojOCNmI5QjwiPwJB8kTSR8JKsk2iUJJTglaCWXJccl9yYnJlcmhya3JugnGCdJJ3onqyfcKA0oPyhxKKIo1CkGKTgpaymdKdAqAio1KmgqmyrPKwIrNitpK50r0SwFLDksbiyiLNctDC1BLXYtqy3hLhYuTC6CLrcu7i8kL1ovkS/HL/4wNTBsMKQw2zESMUoxgjG6MfIyKjJjMpsy1DMNM0YzfzO4M/E0KzRlNJ402DUTNU01hzXCNf02NzZyNq426TckN2A3nDfXOBQ4UDiMOMg5BTlCOX85vDn5OjY6dDqyOu87LTtrO6o76DwnPGU8pDzjPSI9YT2hPeA+ID5gPqA+4D8hP2E/oj/iQCNAZECmQOdBKUFqQaxB7kIwQnJCtUL3QzpDfUPARANER0SKRM5FEkVVRZpF3kYiRmdGq0bwRzVHe0fASAVIS0iRSNdJHUljSalJ8Eo3Sn1KxEsMS1NLmkviTCpMcky6TQJNSk2TTdxOJU5uTrdPAE9JT5NP3VAnUHFQu1EGUVBRm1HmUjFSfFLHUxNTX1OqU/ZUQlSPVNtVKFV1VcJWD1ZcVqlW91dEV5JX4FgvWH1Yy1kaWWlZuFoHWlZaplr1W0VblVvlXDVchlzWXSddeF3JXhpebF69Xw9fYV+zYAVgV2CqYPxhT2GiYfViSWKcYvBjQ2OXY+tkQGSUZOllPWWSZedmPWaSZuhnPWeTZ+loP2iWaOxpQ2maafFqSGqfavdrT2una/9sV2yvbQhtYG25bhJua27Ebx5veG/RcCtwhnDgcTpxlXHwcktypnMBc11zuHQUdHB0zHUodYV14XY+dpt2+HdWd7N4EXhueMx5KnmJeed6RnqlewR7Y3vCfCF8gXzhfUF9oX4BfmJ+wn8jf4R/5YBHgKiBCoFrgc2CMIKSgvSDV4O6hB2EgITjhUeFq4YOhnKG14c7h5+IBIhpiM6JM4mZif6KZIrKizCLlov8jGOMyo0xjZiN/45mjs6PNo+ekAaQbpDWkT+RqJIRknqS45NNk7aUIJSKlPSVX5XJljSWn5cKl3WX4JhMmLiZJJmQmfyaaJrVm0Kbr5wcnImc951kndKeQJ6unx2fi5/6oGmg2KFHobaiJqKWowajdqPmpFakx6U4pammGqaLpv2nbqfgqFKoxKk3qamqHKqPqwKrdavprFys0K1ErbiuLa6hrxavi7AAsHWw6rFgsdayS7LCszizrrQltJy1E7WKtgG2ebbwt2i34LhZuNG5SrnCuju6tbsuu6e8IbybvRW9j74KvoS+/796v/XAcMDswWfB48JfwtvDWMPUxFHEzsVLxcjGRsbDx0HHv8g9yLzJOsm5yjjKt8s2y7bMNcy1zTXNtc42zrbPN8+40DnQutE80b7SP9LB00TTxtRJ1MvVTtXR1lXW2Ndc1+DYZNjo2WzZ8dp22vvbgNwF3IrdEN2W3hzeot8p36/gNuC94UThzOJT4tvjY+Pr5HPk/OWE5g3mlucf56noMui86Ubp0Opb6uXrcOv77IbtEe2c7ijutO9A78zwWPDl8XLx//KM8xnzp/Q09ML1UPXe9m32+/eK+Bn4qPk4+cf6V/rn+3f8B/yY/Sn9uv5L/tz/bf//Y2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9cdGV4dAAAAABubyBjb3B5cmlnaHQsIHVzZSBmcmVlbHkACv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIABQAJAMBIgACEQEDEQH/xAAaAAADAQADAAAAAAAAAAAAAAAABQYBAgME/8QAKRAAAQMCBQQCAgMAAAAAAAAAAQIDBAARBQYSITETQVFhFCIycUOBov/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAjEQEAAgEDAgcAAAAAAAAAAAABABECBCFRAzESMkFxodHw/9oADAMBAAIRAxEAPwDxrzZiL4SsyTGdIFzHQHGD73GtP+hT5GY5jaBHxBuVGk3ul5C0kKTbsLWPm/IqAGFpLspkCbrbC0MoccCRxY2O3e9t+3emiOuYaY8Bhl1phBQ866tRJsbkk35t2G9RVZcscjxBzKCRjuKBtCFz1sHTd11adkb8gW/q3JpJLzHmjHJbkPLfy46IoAWuRoQpwX/JSybC/wCthtWRYr2K9LrRGobBUlZQkuEqsLj7KJ3G+1rGuua5DwuWHocBtCHmlqQ+tvVqX9emtIPki/o+qw70bwkfWNExs5PpDi8xxWCf44zDshCfWsWBP6opS7mjMhfeMrFpSndZvpCWkj0BwQPI2NFEafqp5vgkzqcMWsqv3Y0fabkZhgMPo6jbjJcVqUSSoE271SNvBUD4TbLLMdbxC0NJ06uCb+b96KKB7kqN3ecG2G3cOClpGo6wD43O4rZMkzoURme0zJFyAtxF1p++m4I3BtRRR4AVXP1FZqj+5kTjGAMKxF5xcmYVrIJPUA4GkcDwBRRRTl3ip//Z"},b={width:"500px",height:"142px",link:"/images/mainheader.png",compressedBase64:"data:image/png;base64,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"},Z=n.createElement,x=(0,i.Z)((function(A){return(0,s.Z)({root:{position:"relative",minHeight:"80vh",display:"flex",justifyContent:"center",flexDirection:"column",paddingTop:A.spacing(2),paddingBottom:A.spacing(2)},background:function(A){return{position:"absolute",top:0,height:"100%",width:"100%",zIndex:-1,background:"no-repeat center",backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(".concat(A.src,")"),backgroundSize:"cover",filter:A.blur?"blur(8px)":"none",transition:"filter 0.2s ease-out"}},logo:{position:"absolute",top:0,left:"50%",transform:"translate(-50%, -50%)"},content:{display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",backgroundColor:"white",borderRadius:"40px",padding:A.spacing(8),paddingTop:A.spacing(20),paddingBottom:A.spacing(32),textAlign:"justify"},contribute:{position:"absolute",bottom:0,left:"50%",transform:"translate(-50%, 25%)",width:300},scrollDown:{position:"fixed",bottom:A.spacing(2),left:"50%",transform:"translateX(-50%)"}})})),v=k.link,D=k.compressedBase64;function F(){var A=n.useState(0),e=(0,o.Z)(A,2),t=e[0],r=e[1],i=(0,w.e)({src:v,compressedSrc:D}),s=i.src,l=i.blur,B=x({src:s,blur:l});return n.useEffect((function(){0===window.scrollY&&r(1);var A=function(){var A=(100-window.scrollY)/100;r(A)};return document.addEventListener("scroll",A),function(){document.removeEventListener("scroll",A)}}),[]),Z("div",{className:B.root},Z("div",{className:B.background}),Z(a.Z,{container:!0,className:"h-full py-10",justify:"center"},Z(a.Z,{item:!0,xs:3,className:"hidden md:flex pr-20 pl-4 flex-col justify-evenly"},Z(d,{origin:"30% 0%",angle:"5",src:"/images/hawkermain01.png"}),Z(d,{origin:"60% 0%",angle:"-10",src:"/images/hawkermain02.png"})),Z(a.Z,{item:!0,xs:10,md:6,className:"flex flex-col justify-center"},Z("div",{className:B.content},Z(E,{className:B.logo,src:b.link,compressedBase64:b.compressedBase64,width:b.width,height:b.height}),Z(c.Z,{className:"mb-4 text-lg sm:text-xl"},"is a passion project aiming to be a"," ",Z("span",{className:"font-bold"},"consolidated place to list all hawkers and their stories.")),Z(c.Z,{className:"mb-4 text-lg sm:text-xl"},"We are also working on"," ",Z("span",{className:"font-bold"},"helping to future-proof these hawkers (e.g. by being on listed online and on delivery apps).")),Z(c.Z,{className:"mb-4 text-lg sm:text-xl"},"But we can't do this alone. We need the help of all hawker supporters to bring these hawkers to light."),Z(c.Z,{className:"font-bold text-lg sm:text-xl"},"Help us reach out to them and let their stories be heard."),Z("div",{className:B.contribute},Z(g.Z,{src:"/images/icons/contribute.png",href:"http://projecthawker.com/submit",target:"_blank",rel:"noopener noreferrer"}))),Z("div",{className:B.scrollDown},Z(Q,{style:{opacity:t,width:"3rem",height:"3rem"}}))),Z(a.Z,{item:!0,xs:3,className:"hidden md:flex pl-20 pr-4 flex-col justify-evenly"},Z(d,{origin:"55% 0%",angle:"-2",src:"/images/hawkermain03.png"}),Z(d,{origin:"35% 0%",angle:"7",src:"/images/hawkermain04.png"}))))}var R=t(3832),G=t(282),S=t(8920),N=t(1664),U=t(3457),K=t(4814),j=t(9330),I=n.createElement,M=(0,i.Z)((function(A){return(0,s.Z)({root:{backgroundColor:A.palette.primary.main,paddingTop:A.spacing(10),paddingBottom:A.spacing(15)},header:{fontFamily:"'Fredericka the Great', cursive","-webkit-text-stroke-width":"0.5px","-webkit-text-stroke-color":"#404040",color:"#404040"}})}));function y(A){var e=A.allStalls,t=M(),n=(0,S.Z)(),r=(0,U.Z)(n.breakpoints.up("md")),o=(0,U.Z)(n.breakpoints.up("lg"));return I("div",{className:t.root},I(R.Z,{fixed:!0},I("div",{className:"text-center mb-8"},I(c.Z,{variant:"h3",className:t.header},"Explore")),I(j.Z,{className:"mb-10"}),I(K.Z,{items:e.slice(0,o?void 0:r?6:4).map((function(A){return{href:"/".concat(A.location.slug,"/").concat(A.slug),image:A.images[0],children:I("span",null,A.name,I("br",null),I(c.Z,{color:"textSecondary",variant:"subtitle2"},"(",A.location.name,")"))}}))}),I("div",{className:"text-center mt-10"},I(N.default,{href:"/all/1"},I("a",null,I(G.Z,{variant:"contained",color:"secondary"},"View All"))))))}var H=n.createElement,T=!0;function J(A){var e=A.allStalls;return H("div",null,H(r.default,null,H("title",null,"Project Hawker")),H(F,null),H(y,{allStalls:e}))}},5301:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2567)}])},4654:function(){}},function(A){A.O(0,[212,884,768,774,888,179],(function(){return e=5301,A(A.s=e);var e}));var e=A.O();_N_E=e}]);