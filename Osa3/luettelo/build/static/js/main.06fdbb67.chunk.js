(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(20),t(2)),i=function(e){var n=e.henkilo,t=e.remove;return r.a.createElement("li",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n.id)}},"Delete"))},l=function(e){var n=e.value,t=e.changeHandler;return r.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.name,t=e.nameHandler,a=e.number,u=e.numberHandler,o=e.submitHandler;return r.a.createElement("form",null,r.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:o},"lis\xe4\xe4")))},s=t(3),f=t.n(s),d="https://fierce-hollows-63450.herokuapp.com/api/persons",v=function(){return f.a.get(d).then(function(e){return e.data})},E=function(e){return f.a.post(d,e).then(function(e){return e.data})},h=function(e,n){return f.a.put("".concat(d,"/").concat(e),n).then(function(e){return e.data})},b=function(e){return f.a.delete("".concat(d,"/").concat(e)).then(function(e){return e.data})},p=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),s=Object(c.a)(o,2),f=s[0],d=s[1],p=Object(a.useState)(""),w=Object(c.a)(p,2),g=w[0],j=w[1],O=Object(a.useState)(""),H=Object(c.a)(O,2),k=H[0],C=H[1],S=Object(a.useState)(null),T=Object(c.a)(S,2),I=T[0],y=T[1],L=Object(a.useState)(null),R=Object(c.a)(L,2),N=R[0],V=R[1];Object(a.useEffect)(function(){v().then(function(e){u(e)})},[]);var P=function(e){var n=t.filter(function(n){return n.id===e}).map(function(e){return e.name});window.confirm("Poistetaanko ".concat(n,"?"))&&b(e).then(function(){u(t.filter(function(n){return n.id!==e})),V("".concat(n," poistettiin")),setTimeout(function(){V(null)},5e3)}).catch(function(e){V("VIRHE POISTETTAESSA HENKIL\xd6\xc4"),setTimeout(function(){V(null)},5e3)})},A=t.filter(function(e){return e.name.toLowerCase().includes(k.toLowerCase())});return r.a.createElement("div",null,r.a.createElement(function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"newperson"},n)},{message:I}),r.a.createElement(function(e){var n=e.error;return null===n?null:r.a.createElement("div",{className:"removeperson"},n)},{error:N}),r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(l,{value:k,changeHandler:function(e){C(e.target.value)}}),r.a.createElement(m,{name:f,nameHandler:function(e){d(e.target.value)},number:g,numberHandler:function(e){j(e.target.value)},submitHandler:function(e){e.preventDefault();var n={name:f,number:g};if(t.map(function(e){return e.name.toLowerCase()}).includes(f.toLowerCase())){if(window.confirm("".concat(f," on jo luettelossa, p\xe4ivitet\xe4\xe4nk\xf6 numero?"))){var a=t.find(function(e){return e.name===f});a.number=g,h(a.id,a).then(function(e){u(t.map(function(n){return n.id!==e.id?n:e})),y("".concat(f," numero p\xe4ivitettiin")),setTimeout(function(){y(null)},5e3)}).catch(function(e){V("VIRHE VIRHE VIRHE"),setTimeout(function(){V(null)},5e3)})}}else E(n).then(function(e){u(t.concat(n)),d(""),j(""),y("lis\xe4tty ".concat(f)),setTimeout(function(){y(null)},5e3)})}}),r.a.createElement("h2",null,"Numerot"),r.a.createElement("ul",null,A.map(function(e){return r.a.createElement(i,{key:e.id,henkilo:e,remove:P})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.06fdbb67.chunk.js.map