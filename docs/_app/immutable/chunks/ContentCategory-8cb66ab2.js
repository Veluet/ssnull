import{S as q,i as H,s as P,e as h,b as _,B as g,h as p,H as k,k as C,q as S,a as I,l as v,m as w,r as A,c as D,D as m,J as B,n as F,K as J}from"./index-6cba987f.js";import{r as E}from"./index-9a995bf9.js";const K=E([{id:"product-and-design",name:"Product & Design"},{id:"frontend-coding",name:"Frontend Coding"},{id:"art",name:"Artwork"},{id:"empty",name:"Empty"}]),M=E([{id:"signup-redesign",name:"Signup Redesign",parentId:"product-and-design"},{id:"color-palettes-with-sass",name:"Color Palettes with SASS",parentId:"frontend-coding"},{id:"digital-analog",name:"Digital Analog",parentId:"art"}]);function y(o,a,e){const n=o.slice();return n[6]=a[e],n}function N(o){let a,e=o[0].name+"",n,s,i=[],d=new Map,r,c=o[1];const u=t=>t[6].id;for(let t=0;t<c.length;t+=1){let l=y(o,c,t),f=u(l);d.set(f,i[t]=b(f,l))}return{c(){a=C("h3"),n=S(e),s=I();for(let t=0;t<i.length;t+=1)i[t].c();r=h()},l(t){a=v(t,"H3",{});var l=w(a);n=A(l,e),l.forEach(p),s=D(t);for(let f=0;f<i.length;f+=1)i[f].l(t);r=h()},m(t,l){_(t,a,l),m(a,n),_(t,s,l);for(let f=0;f<i.length;f+=1)i[f].m(t,l);_(t,r,l)},p(t,l){l&2&&(c=t[1],i=B(i,l,u,1,t,c,d,r.parentNode,J,b,r,y))},d(t){t&&p(a),t&&p(s);for(let l=0;l<i.length;l+=1)i[l].d(t);t&&p(r)}}}function b(o,a){let e,n=a[6].name+"",s,i;return{key:o,first:null,c(){e=C("a"),s=S(n),i=I(),this.h()},l(d){e=v(d,"A",{href:!0});var r=w(e);s=A(r,n),i=D(r),r.forEach(p),this.h()},h(){F(e,"href","articles/"+a[6].parentId+"/"+a[6].id),this.first=e},m(d,r){_(d,e,r),m(e,s),m(e,i)},p(d,r){a=d},d(d){d&&p(e)}}}function R(o){let a,e=o[1].length>0&&N(o);return{c(){e&&e.c(),a=h()},l(n){e&&e.l(n),a=h()},m(n,s){e&&e.m(n,s),_(n,a,s)},p(n,[s]){n[1].length>0&&e.p(n,s)},i:g,o:g,d(n){e&&e.d(n),n&&p(a)}}}function j(o,a,e){let n,s;k(o,M,c=>e(3,n=c)),k(o,K,c=>e(4,s=c));let{id:i}=a;const d=s.find(c=>c.id===i),r=n.filter(c=>c.parentId===i);return o.$$set=c=>{"id"in c&&e(2,i=c.id)},[d,r,i]}class L extends q{constructor(a){super(),H(this,a,j,R,P,{id:2})}}export{L as C,K as p};
