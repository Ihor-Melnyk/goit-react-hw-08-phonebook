"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[705],{385:function(n,e,t){var r=t(885),a=t(2791),o=t(2677),s=t(9743),i=t(7855),c=t(184);e.Z=function(n){var e=n.errorMessage,t=(0,a.useState)(!0),d=(0,r.Z)(t,2),x=d[0],l=d[1];return console.log(e),(0,c.jsx)(s.Z,{children:(0,c.jsx)(o.Z,{md:6,className:"mb-2",children:(0,c.jsxs)(i.Z,{show:x,onClose:function(){l(!1)},children:[(0,c.jsxs)(i.Z.Header,{children:[(0,c.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),(0,c.jsx)("strong",{className:"me-auto",children:"PhoneBook"})]}),(0,c.jsx)(i.Z.Body,{children:e})]})})})}},4065:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a=t(885),o=t(2791),s=t(184),i=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})},c=t(385),d=t(3360),x=t(168),l=t(6444),p=t(7022),u=(0,l.ZP)(p.Z)(r||(r=(0,x.Z)(["\n  margin-top: 20px;\n  max-width: 600px;\n  border: solid 1px black;\n  padding: 30px;\n  border-radius: 15px;\n"]))),h=t(3855),m=t(6407);function b(n){var e=n.contacts,t=n.onClose,r=(0,o.useState)(""),i=(0,a.Z)(r,2),x=i[0],l=i[1],p=(0,o.useState)(""),b=(0,a.Z)(p,2),f=b[0],g=b[1],w=(0,o.useState)(!1),Z=(0,a.Z)(w,2),j=Z[0],v=Z[1],C=(0,m.Lr)(),k=(0,a.Z)(C,1)[0],y=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":l(r);break;case"number":g(r);break;default:return}},S=function(n){l(""),g(""),v(!1)};return(0,s.jsxs)(u,{children:[(0,s.jsxs)(h.Z,{onSubmit:function(n){n.preventDefault();var r={name:x,number:f},a=r.name.toLowerCase();e.find((function(n){return a===n.name.toLowerCase()}))?v(!j):(k(r),S(),t())},children:[(0,s.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,s.jsx)(h.Z.Label,{children:"Name"}),(0,s.jsx)(h.Z.Control,{size:"lg",type:"text",name:"name",value:x,placeholder:"Enter name",onChange:y})]}),(0,s.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,s.jsx)(h.Z.Label,{children:"Number"}),(0,s.jsx)(h.Z.Control,{size:"lg",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,placeholder:"Enter number",onChange:y})]}),(0,s.jsx)(d.Z,{size:"lg",variant:"primary",type:"submit",children:"Add contact"})]}),j&&(0,s.jsx)(c.Z,{errorMessage:"This contact is already in the PhoneBook!"})]})}var f=t(5316);function g(n){var e=n.editContact,t=n.contacts,r=n.onClose,i=e.id,x=e.name,l=e.number,p=(0,o.useState)((function(){return x})),b=(0,a.Z)(p,2),f=b[0],g=b[1],w=(0,o.useState)(l),Z=(0,a.Z)(w,2),j=Z[0],v=Z[1],C=(0,o.useState)(!1),k=(0,a.Z)(C,2),y=k[0],S=k[1],L=(0,m.i)(),P=(0,a.Z)(L,1)[0],M=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":g(r);break;case"number":v(r);break;default:return}};return(0,s.jsxs)(u,{children:[(0,s.jsxs)(h.Z,{onSubmit:function(n){n.preventDefault();var e={name:f,number:j,id:i},a=e.name.toLowerCase();t.find((function(n){return a===n.name.toLowerCase()}))?S(!y):(P(e),r())},children:[(0,s.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,s.jsx)(h.Z.Label,{children:"Name"}),(0,s.jsx)(h.Z.Control,{size:"lg",type:"text",name:"name",value:f,placeholder:"Enter name",onChange:M})]}),(0,s.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,s.jsx)(h.Z.Label,{children:"Number"}),(0,s.jsx)(h.Z.Control,{size:"lg",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:j,placeholder:"Enter number",onChange:M})]}),(0,s.jsx)(d.Z,{size:"lg",variant:"primary",type:"submit",children:"Edit contact"})]}),y&&(0,s.jsx)(c.Z,{})]})}var w,Z,j,v,C,k,y,S,L,P,M=function(n){var e=n.editContact,t=n.setEditContact,r=n.setShowModal,a=n.contacts,o=function(){r(!1),e&&t("")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(f.Z,{show:!0,onHide:o,backdrop:"static",keyboard:!1,children:[(0,s.jsx)(f.Z.Header,{closeButton:!0,children:(0,s.jsx)(f.Z.Title,{style:{marginLeft:"auto"},children:e?"Edit contact":"Add Contact"})}),(0,s.jsx)(f.Z.Body,{children:e?(0,s.jsx)(g,{onClose:o,editContact:e,contacts:a}):(0,s.jsx)(b,{contacts:a,onClose:o})})]})})},z=l.ZP.li(w||(w=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  padding: 15px;\n  border: 1px solid black;\n  border-radius: 10px;\n"]))),N=l.ZP.p(Z||(Z=(0,x.Z)(["\n  margin: 0;\n"]))),B=l.ZP.div(j||(j=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),E=l.ZP.button(v||(v=(0,x.Z)(["\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: blue;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  -webkit-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  -moz-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  transition: transform 300ms;\n  &:hover,\n  :focus {\n    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    transition: transform 300ms;\n  }\n"]))),A=l.ZP.button(C||(C=(0,x.Z)(["\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  -webkit-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  -moz-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  transition: transform 300ms;\n  &:hover,\n  :focus {\n    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    transition: transform 300ms;\n  }\n"]))),H=l.ZP.div(k||(k=(0,x.Z)(["\n  width: 18px;\n  height: 3px;\n  background-color: white;\n"]))),I=function(n){var e=n.id,t=n.name,r=n.number,c=n.showModal,d=n.setShowModal,x=n.contacts,l=(0,m.Nt)(),p=(0,a.Z)(l,1)[0],u=(0,o.useState)(""),h=(0,a.Z)(u,2),b=h[0],f=h[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(z,{children:[(0,s.jsxs)(N,{children:[t,": ",(0,s.jsx)("span",{children:r})]}),(0,s.jsxs)(B,{children:[(0,s.jsx)(E,{type:"button",onClick:function(){f({name:t,number:r,id:e}),d(!0)},children:(0,s.jsx)(i,{style:{display:"inline-block",width:"18px",height:"18px",stroke:"currentColor",fill:"currentColor",border:"1px solid red"}})}),(0,s.jsx)(A,{type:"button",onClick:function(){return p(e)},children:(0,s.jsx)(H,{})})]})]}),c&&b.name&&(0,s.jsx)(M,{setShowModal:d,editContact:b,setEditContact:f,contacts:x})]})},F=(0,l.ZP)(p.Z)(y||(y=(0,x.Z)(["\n  margin-top: 30px;\n"]))),G=l.ZP.ul(S||(S=(0,x.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),_=function(n){var e=n.contacts,t=n.showModal,r=n.setShowModal;return(0,s.jsx)(F,{children:(0,s.jsx)(G,{children:e.map((function(n){var a=n.id,o=n.name,i=n.number;return(0,s.jsx)(I,{contacts:e,showModal:t,setShowModal:r,id:a,name:o,number:i},a)}))})})},T=t(4373),q=function(n){var e=n.filter,t=n.onChange;return(0,s.jsxs)(p.Z,{children:[(0,s.jsxs)(h.Z.Label,{children:[(0,s.jsx)(T.FKI,{})," Find by name"]}),(0,s.jsx)(h.Z.Control,{size:"lg",type:"text",value:e,placeholder:"find contact",onChange:t})]})},D=(0,l.ZP)(p.Z)(L||(L=(0,x.Z)(["\n  max-width: 500px;\n  padding: 0 15px;\n"]))),J=l.ZP.button(P||(P=(0,x.Z)(["\n  width: 60px;\n  height: 60px;\n  margin: 15px 0 5px;\n  margin-left: auto;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font: inherit;\n  background-color: #4caf50;\n  cursor: pointer;\n  font-size: 50px;\n  padding-bottom: 10px;\n  box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  -webkit-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  -moz-box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.96);\n  transition: transform 300ms;\n  &:hover,\n  :focus {\n    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);\n    transition: transform 300ms;\n  }\n"])));function K(){var n=(0,m.Jx)().data,e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],i=t[1],c=(0,o.useState)(!1),d=(0,a.Z)(c,2),x=d[0],l=d[1],u=function(){return l(!x)};return(0,s.jsxs)(D,{children:[(0,s.jsx)(p.Z,{children:(0,s.jsx)(J,{type:"button",onClick:function(){u()},children:"+"})}),x&&(0,s.jsx)(M,{onClose:u,showModal:x,setShowModal:l,contacts:n}),(0,s.jsx)(q,{filter:r,onChange:function(n){i(n.currentTarget.value)}}),n&&(0,s.jsx)(_,{showModal:x,setShowModal:l,contacts:function(){var e=r.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}()})]})}}}]);
//# sourceMappingURL=ContactsView.28b71e28.chunk.js.map