"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[949],{8938:function(e,a,t){t(2791);a.Z=t.p+"static/media/sprite.2e56cac306786fd27e390c09919be1af.svg"},7140:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(5987),i=t(6151),s="Buttons_Buttons__uhWXN",d="Buttons_Buttons__button__7dqbx",c=t(3329),o=["firstButtonType","secondButtonType"],l=function(e){var a=e.firstButtonType,t=void 0===a?"button":a,l=e.secondButtonType,r=void 0===l?"button":l,m=(0,n.Z)(e,o);return(0,c.jsxs)("div",{className:s,children:[(0,c.jsx)(i.Z,{variant:"contained",type:t,className:d,onClick:m.firstButtonHandler,children:m.firstButtonText.toString()}),(0,c.jsx)(i.Z,{variant:"outlined",type:r,className:d,onClick:m.secondButtonHandler,color:"secondary",sx:{color:"secondary.main",backgroundColor:"transparent"},children:m.secondButtonText.toString()})]})}},8683:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(5391),i=t(3400),s=t(9823),d={ModalTemplate__container:"ModalTemplate_ModalTemplate__container__k5r6S",ModalTemplate__header:"ModalTemplate_ModalTemplate__header__otUUK",ModalTemplate__header__close:"ModalTemplate_ModalTemplate__header__close__vWIAx"},c=t(3329),o=function(e){var a=e.children,t=e.open,o=e.onClose,l=e.title;return(0,c.jsx)(n.Z,{open:t,onClose:o,"aria-labelledby":"modal-template","aria-describedby":"modal-template",children:(0,c.jsxs)("div",{className:d.ModalTemplate__container,children:[(0,c.jsxs)("div",{className:d.ModalTemplate__header,children:[(0,c.jsx)("p",{id:"modal-template",children:l}),(0,c.jsx)(i.Z,{className:d.ModalTemplate__close,"aria-label":"close",onClick:o,sx:{position:"absolute",right:8,top:8,color:"text.secondary","@media screen and (max-width: 768px)":{display:"none"}},children:(0,c.jsx)(s.Z,{})})]}),a]})})}},1523:function(e,a,t){t.r(a),t.d(a,{default:function(){return K}});var n=t(2791),i=t(1971),s=t(9434),d=t(2276),c=t(1304),o="Table_Table__text__cITGZ",l=t(6073),r="TableMobile_TableMobile__0bmgt",m=t(4716),p=t(5888),_=t(9980),h=t(6151),b="EditIcon_iconContainer__PekQF",x="EditIcon_iconContainer__img__d-f5o",u=t(8938),f=t(3329);function E(){return(0,f.jsx)("div",{className:b,children:(0,f.jsx)("svg",{className:x,children:(0,f.jsx)("use",{href:"".concat(u.Z,"#icon-edit")})})})}var y=t(7630),j="TableMobileRow_income__mLEOe",N="TableMobileRow_expense__Y-vOp",T="TableMobileRow_TableRowMobile__AXZQ7",v="TableMobileRow_TableRowMobile__stripeIncome__1HNsP",g="TableMobileRow_TableRowMobile__stripeExpense__OKHbq",S="TableMobileRow_TableRowMobile__element__vzMAO",M="TableMobileRow_TableRowMobile__key__XYWhd",w="TableMobileRow_TableRowMobile__value__+hbtn",P="TableMobileRow_DeleteButton__Text__gvyAc",k="TableMobileRow_EditButton__Text__L4ztp",C=(0,y.ZP)(h.Z)((function(e){e.theme;return{height:26,marginBottom:0,padding:"0px",gap:8,fontFamily:"Circe",fontSize:14,textTransform:"capitalize",borderRadius:4,backgroundColor:"transparent",color:"#000"}})),X=(0,y.ZP)(h.Z)((function(e){e.theme;return{marginBottom:0,fontFamily:"Circe",fontWeight:400,fontSize:"14px",lineHeight:"1em",textTransform:"capitalize",width:"67px",height:"26px",padding:"4px 12px"}}));function R(e){var a=e.transaction,t=(0,s.I0)(),n="EXPENSE"===a.type?N:j,i="EXPENSE"===a.type?g:v,c=new Date(a.transactionDate),o={day:String(c.getDate()).padStart(2,"0"),month:String(c.getMonth()+1).padStart(2,"0"),year:c.getYear()>100?c.getYear()-100:c.getYear()},l=[{id:"c9d9e447-1b83-4238-8712-edc77b18b739",name:"Main expenses",type:"EXPENSE"},{id:"27eb4b75-9a42-4991-a802-4aefe21ac3ce",name:"Products",type:"EXPENSE"},{id:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",name:"Car",type:"EXPENSE"},{id:"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",name:"Self care",type:"EXPENSE"},{id:"76cc875a-3b43-4eae-8fdb-f76633821a34",name:"Child care",type:"EXPENSE"},{id:"128673b5-2f9a-46ae-a428-ec48cf1effa1",name:"Household products",type:"EXPENSE"},{id:"1272fcc4-d59f-462d-ad33-a85a075e5581",name:"Education",type:"EXPENSE"},{id:"c143130f-7d1e-4011-90a4-54766d4e308e",name:"Leisure",type:"EXPENSE"},{id:"719626f1-9d23-4e99-84f5-289024e437a8",name:"Other expenses",type:"EXPENSE"},{id:"3acd0ecd-5295-4d54-8e7c-d3908f4d0402",name:"Entertainment",type:"EXPENSE"},{id:"063f1132-ba5d-42b4-951d-44011ca46262",name:"Income",type:"INCOME"}].filter((function(e){return e.id===a.categoryId}))[0].name;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:T,children:[(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)("span",{className:M,children:"Date"}),(0,f.jsx)("span",{className:w,children:"".concat(o.day,".").concat(o.month,".").concat(o.year)})]}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)("span",{className:M,children:"Type"}),(0,f.jsx)("span",{className:w,children:"EXPENSE"===a.type?"-":"+"})]}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)("span",{className:M,children:"Category"}),(0,f.jsx)("span",{className:w,children:l})]}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)("span",{className:M,children:" Comment"}),(0,f.jsx)("span",{className:w,children:a.comment})]}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)("span",{className:M,children:"Sum"}),(0,f.jsx)("span",{className:n,children:a.amount})]}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)(X,{disableElevation:!0,variant:"contained",type:"button",onClick:function(){return e=a.id,void t((0,d.aI)(e));var e},children:(0,f.jsx)("span",{className:P,children:"Delete"})}),(0,f.jsxs)(C,{type:"button","aria-label":"edit",onClick:function(){return e=a.type,t((0,p.I0)(a)),void t((0,m.LM)(e));var e},children:[(0,f.jsx)(E,{}),(0,f.jsx)("span",{className:k,children:"Edit"})]})]}),(0,f.jsx)("div",{className:i})]}),(0,f.jsx)(_.Z,{})]})}var Z=t(319);function D(e){var a=e.transactions;return(0,f.jsxs)("div",{className:r,children:[a.map((function(e){return(0,f.jsx)(R,{transaction:e},e.id)})),(0,f.jsx)(Z.Z,{})]})}var I="TableDesktop_container__nla-h",B="TableDesktop_Table__xAH5l",H="TableDesktop_Table__container__H7Gtt",O="TableDesktop_Table__headerBackground__WRnJp",F="TableDesktop_Table__headContainer__PWEwO",W=t(3400),z="TableDesktopRow_income__tNWtO",A="TableDesktopRow_expense__esWIC",Y="TableDesktopRow_stack__4hDh3",L="TableDesktopRow_editIcon__LivUc",q=(0,y.ZP)(h.Z)((function(e){e.theme;return{margin:0,fontFamily:"Circe",fontWeight:400,fontSize:"14px",lineHeight:"1em",textTransform:"capitalize",width:"67px",height:"26px",padding:"4px 12px"}}));function U(e){var a=e.transaction,t=(0,s.I0)(),n=new Date(a.transactionDate),i={day:String(n.getDate()).padStart(2,"0"),month:String(n.getMonth()+1).padStart(2,"0"),year:n.getYear()>100?n.getYear()-100:n.getYear()},c=[{id:"c9d9e447-1b83-4238-8712-edc77b18b739",name:"Main expenses",type:"EXPENSE"},{id:"27eb4b75-9a42-4991-a802-4aefe21ac3ce",name:"Products",type:"EXPENSE"},{id:"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",name:"Car",type:"EXPENSE"},{id:"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",name:"Self care",type:"EXPENSE"},{id:"76cc875a-3b43-4eae-8fdb-f76633821a34",name:"Child care",type:"EXPENSE"},{id:"128673b5-2f9a-46ae-a428-ec48cf1effa1",name:"Household products",type:"EXPENSE"},{id:"1272fcc4-d59f-462d-ad33-a85a075e5581",name:"Education",type:"EXPENSE"},{id:"c143130f-7d1e-4011-90a4-54766d4e308e",name:"Leisure",type:"EXPENSE"},{id:"719626f1-9d23-4e99-84f5-289024e437a8",name:"Other expenses",type:"EXPENSE"},{id:"3acd0ecd-5295-4d54-8e7c-d3908f4d0402",name:"Entertainment",type:"EXPENSE"},{id:"063f1132-ba5d-42b4-951d-44011ca46262",name:"Income",type:"INCOME"}],o="EXPENSE"===a.type?A:z,l=c.filter((function(e){return e.id===a.categoryId}))[0].name;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{"data-type":"date",children:"".concat(i.day,".").concat(i.month,".").concat(i.year)}),(0,f.jsx)("td",{"data-type":"type",children:"EXPENSE"===a.type?"-":"+"}),(0,f.jsx)("td",{children:l}),(0,f.jsx)("td",{"data-type":"comment",children:a.comment}),(0,f.jsx)("td",{"data-type":"sum",className:o,children:Math.abs(a.amount)}),(0,f.jsx)("td",{"data-type":"edit",children:(0,f.jsxs)("div",{className:Y,children:[(0,f.jsx)(W.Z,{type:"button","aria-label":"edit",onClick:function(){var e;e=a.type,t((0,p.I0)(a)),t((0,m.LM)(e))},children:(0,f.jsx)(E,{className:L})}),(0,f.jsx)(q,{disableElevation:!0,variant:"contained",type:"button",onClick:function(){return e=a.id,void t((0,d.aI)(e));var e},children:"Delete"})]})})]})})}function G(e){var a=e.transactions;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:I,children:(0,f.jsxs)("div",{className:H,children:[(0,f.jsx)("div",{className:O}),a.length>0&&(0,f.jsxs)("table",{className:B,children:[(0,f.jsx)("thead",{className:F,children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-type":"date",children:"date"}),(0,f.jsx)("th",{"data-type":"type",children:"type"}),(0,f.jsx)("th",{children:"category"}),(0,f.jsx)("th",{"data-type":"comment",children:"comment"}),(0,f.jsx)("th",{"data-type":"sum",children:"sum"}),(0,f.jsx)("th",{}),(0,f.jsx)("th",{})]})}),(0,f.jsx)("tbody",{children:a.map((function(e){return(0,f.jsx)(U,{transaction:e},e.id)}))})]})]})})})}function K(){var e=(0,s.I0)(),a=(0,s.v9)(c.ig)||[];return(0,n.useEffect)((function(){e((0,d.mC)())}),[e]),(0,f.jsx)(f.Fragment,{children:0===a.length?(0,f.jsx)("div",{className:o,children:"No Transactions to show. Add some below!"}):(0,f.jsx)(i.Z,{queries:l.A,children:function(e){return(0,f.jsxs)(f.Fragment,{children:[e.mobile&&(0,f.jsx)(D,{transactions:a}),(e.desktop||e.tablet)&&(0,f.jsx)(G,{transactions:a})]})}})})}},6073:function(e,a,t){t.d(a,{A:function(){return n}});var n={mobile:"(max-width: 767px)",tablet:"(min-width: 768px) and (max-width: 1279px)",desktop:"(min-width: 1280px)"}}}]);
//# sourceMappingURL=949.ad27b739.chunk.js.map