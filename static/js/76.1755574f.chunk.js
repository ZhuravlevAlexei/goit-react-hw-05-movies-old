"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,a,e){e.r(a),e.d(a,{default:function(){return l}});var r=e(439),c=e(791),s=e(689),n=e(468),i={castTitle:"Cast_castTitle__eoJbw",castActorCard:"Cast_castActorCard__xZEue",castBlankImage:"Cast_castBlankImage__F8I9l"},o=e(184),l=function(){var t=(0,s.UO)().movieId,a=(0,c.useState)([]),e=(0,r.Z)(a,2),l=e[0],u=e[1];return(0,c.useEffect)((function(){(0,n.V)("/movie/".concat(t,"/credits"),0,"").then((function(t){if(200!==t.status)throw new Error(t.statusText);u(t.data.cast)}))}),[t]),(0,o.jsxs)("div",{children:[0===l.length?(0,o.jsx)("h4",{className:i.castTitle,children:"No cast available."}):(0,o.jsx)("h4",{className:i.castTitle,children:"Cast"}),l.length&&(0,o.jsx)("ul",{className:i.castThumb,children:l.map((function(t){var a=t.character,e=t.id,r=t.name,c=t.profile_path;return(0,o.jsxs)("li",{className:i.castActorCard,children:[c?(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/"+c,alt:"Cast actor ",width:"180",height:"270"}):(0,o.jsx)("img",{className:i.castBlankImage,src:"",alt:"Cast actor (no poster) ",width:"180",height:"270"}),r,(0,o.jsxs)("p",{children:["Caracter: ",a]})]},e)}))})]})}},468:function(t,a,e){e.d(a,{V:function(){return o}});var r=e(861),c=e(757),s=e.n(c),n=e(243),i=e(73);function o(t){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(s().mark((function t(a){var e,r,c,o,l=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.length>1&&void 0!==l[1]?l[1]:1,r=l.length>2&&void 0!==l[2]?l[2]:"",t.prev=2,c="https://api.themoviedb.org/3"+a+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),r&&(c+="&query=".concat(r.trim())),e&&(c+="&page=".concat(e)),t.next=10,n.Z.get(c);case 10:return o=t.sent,t.abrupt("return",o);case 14:t.prev=14,t.t0=t.catch(2),i.Am.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[2,14]])}))),l.apply(this,arguments)}}}]);
//# sourceMappingURL=76.1755574f.chunk.js.map