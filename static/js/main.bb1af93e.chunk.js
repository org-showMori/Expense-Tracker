(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),s=n(35),i=n.n(s),o=n(16),u=n(7),l=n(31),j=(n(55),n(56),l.a.initializeApp({apiKey:"AIzaSyDR8tvZ_nXU_Yvf3m9fDSstpav1n0HCJGc",authDomain:"expense-tracker-91c95.firebaseapp.com",projectId:"expense-tracker-91c95",storageBucket:"expense-tracker-91c95.appspot.com",messagingSenderId:"982156523497",appId:"1:982156523497:web:1f3a7dca886f9d5a4b3d78"}),"transactions"),b="categories",d="mainColor",m=l.a.firestore(),O=n(25),x=n(5),p=n(8),h=n.n(p),f=n(14);var v=function(e){var t=e.formType,n=e.itemId,a=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ub0b4\uc5ed\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=10;break}if(t!==j){e.next=7;break}return e.next=5,m.doc("".concat(j,"/").concat(n)).delete();case 5:e.next=10;break;case 7:if(t!==b){e.next=10;break}return e.next=10,m.doc("".concat(b,"/").concat(n)).delete();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("button",{className:"eventButton",onClick:a,children:"X"})},g=n(21),y=n(22);var N=function(e){var t=e.header,n=e.contents,a=e.onToggleHandler;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsxs)("div",{className:"modalContents",children:[Object(c.jsx)("h4",{children:t}),Object(c.jsx)("button",{onClick:a,children:"X"})]}),Object(c.jsx)("div",{className:"modalContents flexColumn",children:n})]})})};var S=function(e){var t=e.category,n=Object(a.useState)(t.category),r=Object(u.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),j=l[0],d=l[1],O=function(){d((function(e){return!e}))},x=function(){var e=Object(f.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),d(!1),e.next=4,m.doc("".concat(b,"/").concat(t.id)).update({category:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)(v,{formType:b,itemId:t.id})}),Object(c.jsx)("td",{children:t.type}),Object(c.jsx)("td",{children:t.category}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:O,className:"deleteBtn",children:Object(c.jsx)(g.a,{icon:y.b})})})]}),j&&Object(c.jsx)(N,{header:"\uce74\ud14c\uace0\ub9ac \uc218\uc815",onToggleHandler:O,contents:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["".concat(t.type," - ")," ",Object(c.jsx)("span",{children:t.category})]}),Object(c.jsxs)("form",{onSubmit:x,children:[Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){i(e.target.value)},className:"input"}),Object(c.jsx)("button",{className:"modalSubmitButton",children:Object(c.jsx)(g.a,{icon:y.a})})]})]})})]})};var C=function(e){var t=e.categories;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"listTable",children:[Object(c.jsx)("h3",{children:"Category List"}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"\uc0ad\uc81c"}),Object(c.jsx)("th",{children:"TYPE"}),Object(c.jsx)("th",{children:"CONTENTS"}),Object(c.jsx)("th",{children:"\uc218\uc815"})]})}),Object(c.jsx)("tbody",{children:t&&t.map((function(e){return Object(c.jsx)(S,{category:e},e.id)}))})]})]})})};var w=function(e){var t=e.SubmitBtn,n=t.componentStyle.rules[1],r=Object(a.useState)("".concat(n)),s=Object(u.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.doc("".concat(d,"/mainColor")).update({mainColor:i,bgColor:"".concat(i,"77"),buttonColor:i,scrollbarColor:i});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{id:"selectColorContainer",children:[Object(c.jsx)("h4",{children:"\uba54\uc778 \uceec\ub7ec"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l()},className:"selectColorForm",children:[Object(c.jsx)("input",{type:"color",onChange:function(e){var t=e.target.value;o(t)},value:i}),Object(c.jsx)(t,{type:"submit",className:"button",value:"Apply"})]})]})};var k=function(e){e.values;var t=e.changeHandler,n=Object(a.useRef)(),r=function(){var e=n.current;e.classList.contains("toRight")?(e.classList.remove("toRight"),e.classList.add("toLeft")):(e.classList.remove("toLeft"),e.classList.add("toRight"))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsx)("div",{className:"checked",ref:n}),Object(c.jsx)("label",{htmlFor:"typePlus",className:"radioLabels",onClick:r,children:"+"}),Object(c.jsx)("input",{type:"radio",name:"type",id:"typePlus",className:"transactionType",value:"\uc218\uc785",onChange:t}),Object(c.jsx)("label",{htmlFor:"typeMinus",className:"radioLabels",onClick:r,children:"-"}),Object(c.jsx)("input",{type:"radio",name:"type",id:"typeMinus",className:"transactionType",value:"\uc9c0\ucd9c",onChange:t})]})})},B=n(27);var T=function(e){var t=e.initialValues,n=e.onSubmit,c=e.validate,r=Object(a.useState)(t),s=Object(u.a)(r,2),i=s[0],l=s[1],d=Object(a.useState)(""),O=Object(u.a)(d,2),x=O[0],p=O[1],v=Object(a.useState)(!1),g=Object(u.a)(v,2),y=g[0],N=g[1],S=Object(a.useState)([]),C=Object(u.a)(S,2),w=C[0],k=C[1],T=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection(b).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));k(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===w.length&&T();var F=function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection(j).doc("".concat(t.id)).set(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection(b).add(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y&&n(i),N(!1)}),[]),{values:i,errors:x,isSubmit:y,changeHandler:function(e){var t=e.target,n=t.name,c=t.value;l(Object(o.a)(Object(o.a)({},i),{},Object(B.a)({},n,c))),N(!1)},submitHandler:function(e){if(e.preventDefault(),N(!0),p(c(i)),i.formType===j){var n={type:i.type,date:i.date,id:Date.now(),text:i.text,amount:+i.amount,category:i.category};F(n)}else if(i.formType===b){var a={type:i.type,category:i.category};E(a)}l(t)},categories:w,getCategories:T}};function F(e){var t=e.date,n=e.amount,c={};return c.date=t?null:"\ub0a0\uc9dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",/^[0-9]/.test(n)?c.amount=null:c.amount="\uae08\uc561\uc5d0\ub294 \uc22b\uc790\ub9cc \uc785\ub825\ud574\uc8fc\uc138\uc694.",c}var E=function(e){var t=e.SubmitBtn,n=T({initialValues:{formType:b,type:"\uc9c0\ucd9c",category:""},onSubmit:function(e){},validate:F}),a=n.values,r=n.changeHandler,s=n.submitHandler;return Object(c.jsxs)("form",{onSubmit:s,className:"categoryForm",children:[Object(c.jsx)("h3",{children:"New Category"}),Object(c.jsx)(k,{values:a,changeHandler:r}),Object(c.jsxs)("p",{children:[Object(c.jsx)("label",{htmlFor:"category",children:"Contents"}),Object(c.jsx)("input",{type:"text",className:"input",name:"category",required:!0,value:a.category,onChange:r,placeholder:"Enter contents..."}),Object(c.jsx)(t,{type:"submit",className:"button",name:"submit",value:"+"})]})]})};var H=function(e){var t=e.categories,n=e.SubmitBtn;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("article",{id:"settingSection",className:"mainContainer",children:[Object(c.jsx)(E,{SubmitBtn:n}),Object(c.jsx)(C,{categories:t}),Object(c.jsx)(w,{SubmitBtn:n})]})})};var L=function(e){var t=e.SubmitBtn,n=T({initialValues:{formType:j,type:"\uc9c0\ucd9c",date:"",text:"",amount:0,category:""},onSubmit:function(e){},validate:F}),a=n.values,r=n.errors,s=n.isSubmit,i=n.changeHandler,o=n.submitHandler,u=n.categories;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{onSubmit:o,children:[Object(c.jsx)("h3",{children:"Add New Transaction"}),Object(c.jsx)(k,{values:a,changeHandler:i}),Object(c.jsxs)("fieldset",{className:"formFieldset",children:[Object(c.jsxs)("select",{name:"category",onChange:i,children:[Object(c.jsx)("option",{children:"\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),u&&u.filter((function(e){return e.type===a.type})).map((function(e){return Object(c.jsx)("option",{value:e.category,children:e.category},e.id)}))]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("label",{htmlFor:"date",children:"Date"}),r.date&&Object(c.jsx)("span",{children:r.date}),Object(c.jsx)("input",{type:"date",name:"date",value:a.date,onChange:i,required:!0,className:"input"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",value:a.text,onChange:i,name:"text",id:"text",placeholder:"Enter text",required:!0,className:"input"})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("label",{htmlFor:"amount",children:"Amount"}),r.amount&&Object(c.jsx)("span",{children:r.amount}),Object(c.jsx)("input",{type:"number",id:"amount",name:"amount",value:a.amount,onChange:i,required:!0,className:"input"})]}),Object(c.jsx)(t,{type:"submit",id:"transactionSubmitBtn",className:"button",value:"Add transaction",disabled:s})]})]})})};function I(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var D=function(e){var t=e.transactionObj,n=e.isNewDate,r=Object(a.useState)(t.text),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),b=Object(u.a)(l,2),d=b[0],O=b[1],x=t.type,p=function(){O((function(e){return!e}))},S=function(){var e=Object(f.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),O(!1),e.next=4,m.doc("".concat(j,"/").concat(t.id)).update({text:i});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C="";return"\uc218\uc785"===x?C="moneyPlus":"\uc9c0\ucd9c"===x&&(C="moneyMinus"),Object(c.jsxs)(c.Fragment,{children:[n?Object(c.jsx)("p",{className:"date",children:t.date}):"",Object(c.jsxs)("div",{className:"".concat(C," transactionContainer"),onClick:function(){},children:[Object(c.jsxs)("div",{className:"buttonContainer",children:[Object(c.jsx)(v,{formType:j,itemId:t.id}),Object(c.jsx)("button",{onClick:p,className:"eventButton",children:Object(c.jsx)(g.a,{icon:y.b})})]}),Object(c.jsxs)("div",{className:"transactionContents",children:[Object(c.jsxs)("span",{className:"text",children:[t.text,Object(c.jsx)("span",{className:"category",children:t.category})]}),Object(c.jsxs)("span",{className:"amount",children:[I(t.amount),"\uc6d0"]})]})]}),d&&Object(c.jsx)(N,{header:"\uac70\ub798 \ub0b4\uc5ed \uc218\uc815",onToggleHandler:p,contents:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["".concat(t.date," / ").concat(t.type," / "),Object(c.jsx)("span",{children:t.text})," / ".concat(t.amount)]}),Object(c.jsxs)("form",{onSubmit:S,children:[Object(c.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},className:"input"}),Object(c.jsx)("button",{className:"modalSubmitButton",children:Object(c.jsx)(g.a,{icon:y.a})})]})]})})]})};var A=function(e){var t=e.transactions.concat();return t.sort((function(e,t){return e.date>t.date?-1:1})),Object(c.jsx)("article",{id:"historyComponent",className:"mainContainer",children:Object(c.jsxs)("section",{children:[Object(c.jsx)("h3",{children:"History"}),t&&t.map((function(e,n){var a=!0;return 0===n?a=!0:n>0&&n<t.length-1&&(a=e.date!==t[n-1].date),Object(c.jsx)(D,{transactionObj:e,isNewDate:a},e.id)}))]})})};var R=function(e){var t=e.transactions.concat(),n=I(t.map((function(e){var t=0;return"\uc218\uc785"===e.type?t=+e.amount:"\uc9c0\ucd9c"===e.type&&(t=-e.amount),t})).reduce((function(e,t){return e+t}),0)),a=I(t.filter((function(e){return"\uc218\uc785"===e.type})).map((function(e){return parseInt(e.amount)})).reduce((function(e,t){return e+t}),0)),r=I(t.filter((function(e){return"\uc9c0\ucd9c"===e.type})).map((function(e){return parseInt(e.amount)})).reduce((function(e,t){return e+t}),0));return Object(c.jsxs)("article",{className:"balanceComponent",children:[Object(c.jsxs)("section",{className:"balanceSection",children:[Object(c.jsx)("p",{className:"subTitle",children:"YOUR BALANCE"}),Object(c.jsxs)("p",{id:"money",children:[n,"\uc6d0"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("section",{className:"balanceSection income ",children:[Object(c.jsx)("p",{className:"subTitle",children:"INCOME"}),Object(c.jsxs)("p",{className:"money plus",children:["+",a,"\uc6d0"]})]}),Object(c.jsxs)("section",{className:"balanceSection expense",children:[Object(c.jsx)("p",{className:"subTitle",children:"EXPENSE"}),Object(c.jsxs)("p",{className:"money minus",children:["-",r,"\uc6d0"]})]})]})]})};var M=function(e){var t=e.SubmitBtn,n=Object(a.useState)([]),r=Object(u.a)(n,2),s=r[0],i=r[1],l=Object(a.useRef)();return Object(a.useEffect)((function(){m.collection(j).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R,{transactions:s}),Object(c.jsx)(A,{transactions:s}),Object(c.jsx)("section",{className:"addNewButton",children:Object(c.jsx)(t,{type:"button",className:"button",onClick:function(){document.getElementById("historyComponent").classList.toggle("short");var e=document.getElementById("newTransactionContainer");e.classList.toggle("show"),l.current.value=e.classList.contains("show")?"Cancel":"Add new transaction"},ref:l,value:"Add new transaction"})}),Object(c.jsx)("article",{id:"newTransactionContainer",children:Object(c.jsx)(L,{SubmitBtn:t})})]})};var P=function(){var e=Object(x.f)(),t="";return"/"===e.pathname?t="HOME":"/settings"===e.pathname&&(t="Settings"),Object(c.jsxs)("nav",{children:[Object(c.jsx)(O.b,{to:"/settings",children:"\u276e"}),Object(c.jsx)("span",{id:"navTitle",children:t}),Object(c.jsx)(O.b,{to:"/",children:"\u276f"})]})};var Y=function(e){var t=e.categories,n=e.SubmitBtn;return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(P,{}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{exact:!0,path:"/settings",children:Object(c.jsx)(H,{categories:t,SubmitBtn:n})}),Object(c.jsx)(x.a,{exact:!0,path:"/",children:Object(c.jsx)(M,{categories:t,SubmitBtn:n})})]})]})};var q=function(){return Object(c.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Expense Tracker - SOHYEON OH \uc624\uc18c\ud604"]})},X=n(36),J=n(37);function V(){var e=Object(X.a)(["\n        background-color: ",";\n    "]);return V=function(){return e},e}var z=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],j=i[1],O=Object(a.useState)(""),x=Object(u.a)(O,2),p=x[0],h=x[1],f=function(e){var t=e.mainColor;return{SubmitBtn:J.a.input(V(),t)}}({mainColor:l}).SubmitBtn;Object(a.useEffect)((function(){m.collection(b).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})}));r(t)})),m.collection(d).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.mainColor})}));j(t[0].mainColor),h(t[0].bgColor)}))}),[]);var v={forBg:{backgroundColor:p}};return Object(c.jsxs)("main",{className:"App",style:v.forBg,children:[Object(c.jsx)(Y,{categories:n,SubmitBtn:f}),Object(c.jsx)(q,{})]})};n(53);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.bb1af93e.chunk.js.map