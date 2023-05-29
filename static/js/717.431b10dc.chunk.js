"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[717],{717:function(n,e,t){t.r(e),t.d(e,{default:function(){return Xn}});var r,o,i,c=t(2070),a=t(5048),s=t(168),l=t(7686),d=l.Z.label(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-bottom: 50px;\n"]))),u=l.Z.p(o||(o=(0,s.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),x=l.Z.input(i||(i=(0,s.Z)(["\n  width: 95%;\n  height: 40px;\n  padding: 0 10px 0 10px;\n\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n\n  color: var(--main-text-color);\n  font-size: 14px;\n\n  :focus {\n    border-color: var(--accent-bg-color);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: var(--main-text-color);\n  }\n"]))),p=t(9652),g=t(3329);var h,f,m,v,b,Z,j,y,w,k,C,R,q,z=function(){var n=(0,a.I0)();return(0,g.jsxs)(d,{children:[(0,g.jsx)(u,{children:"Find contacts by name"}),(0,g.jsx)(x,{type:"text",onChange:function(e){var t=e.currentTarget.value;n((0,p.M6)(t))},name:"filter"})]})},M=t(2007),_=t.n(M),L=t(6355),E=l.Z.div(h||(h=(0,s.Z)(["\n  background-color: #fafafa;\n  border-radius: 10px;\n  border: 1px solid #f2f2f2;\n\n  padding: 10px;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),F=l.Z.div(f||(f=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),S=(0,l.Z)(L.Xws)(m||(m=(0,s.Z)(["\n  background-color: var(--accent-bg-color);\n  color: var(--main-bg-color);\n\n  margin-right: 30px;\n  padding: 10px;\n"]))),Y=l.Z.p(v||(v=(0,s.Z)(["\n  font-size: 18px;\n  color: var(--main-text-color);\n"]))),D=l.Z.p(b||(b=(0,s.Z)(["\n  text-align: center;\n"]))),T=l.Z.ul(Z||(Z=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),A=l.Z.li(j||(j=(0,s.Z)(["\n  margin-right: 5px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),I=l.Z.button(y||(y=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 40px;\n  height: 30px;\n  padding: 10px;\n\n  border: none;\n  background-color: transparent;\n  color: var(--accent-bg-color);\n\n  cursor: pointer;\n  transition: color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    color: var(--second-bg-color);\n  }\n"]))),N=t(2791),P=t(4164),X=t(8820),H=l.Z.div(w||(w=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: var(--backdrop-bg-color);\n"]))),U=l.Z.div(k||(k=(0,s.Z)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 280px;\n  height: auto;\n  padding: 10px;\n\n  background-color: var(--main-bg-color);\n  color: var(--main-text-color);\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n    padding: 30px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 50px;\n  }\n"]))),B=l.Z.div(C||(C=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  border-bottom: 1px solid var(--accent-bg-color);\n\n  margin-bottom: 25px;\n  padding-bottom: 15px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 35px;\n    padding-bottom: 25px;\n  }\n"]))),G=l.Z.h2(R||(R=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 900;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 768px) {\n    font-size: 30px;\n  }\n"]))),J=l.Z.button(q||(q=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 30px;\n  height: 30px;\n\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 40px;\n    height: 40px;\n  }\n"]))),K=document.querySelector("#modal-root");function O(n){var e=n.children,t=n.onClose,r=n.title;(0,N.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[t]);return(0,P.createPortal)((0,g.jsx)(H,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,g.jsxs)(U,{children:[(0,g.jsxs)(B,{children:[(0,g.jsx)(G,{children:r}),(0,g.jsx)(J,{type:"button",onClick:t,children:(0,g.jsx)(X.oHP,{})})]}),e]})}),K)}O.prototype={children:_().element,onClose:_().func.isRequired,title:_().string};var Q=O,V=t(9439);var W,$,nn,en,tn,rn,on=function(n){var e=(0,N.useState)(n),t=(0,V.Z)(e,2),r=t[0],o=t[1];return{toggleModal:function(){return o((function(n){return!n}))},showModal:r}},cn=l.Z.p(W||(W=(0,s.Z)(["\n  font-size: 20px;\n  margin-bottom: 30px;\n"]))),an=l.Z.span($||($=(0,s.Z)(["\n  color: red;\n"]))),sn=l.Z.ul(nn||(nn=(0,s.Z)(["\n  display: flex;\n  justify-content: right;\n"]))),ln=l.Z.li(en||(en=(0,s.Z)(["\n  margin-right: 10px;\n\n  :last-child {\n    margin-right: 0;\n  }\n"]))),dn=l.Z.button(tn||(tn=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100px;\n  height: 30px;\n\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),un=l.Z.button(rn||(rn=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100px;\n  height: 30px;\n\n  background-color: red;\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),xn=t(7689),pn=t(2223),gn=t(5264);var hn=function(n,e,t){var r=(0,xn.s0)(),o=(0,pn.Nt)(),i=(0,V.Z)(o,2),c=i[0];return{isDeleting:i[1].isLoading,deleteSelectedContact:function(){c(n),r("/contacts"),t(),gn.Notify.success("The ".concat(e," has been removed from your contact list."))}}};function fn(n){var e=n.id,t=n.name,r=n.toggleModal,o=hn(e,t,r),i=o.isDeleting,c=o.deleteSelectedContact;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(cn,{children:["Are you sure you want to delete a contact ",(0,g.jsx)(an,{children:t}),"?"]}),(0,g.jsxs)(sn,{children:[(0,g.jsx)(ln,{children:(0,g.jsx)(dn,{type:"button",onClick:r,children:"Cancel"})}),(0,g.jsx)(ln,{children:(0,g.jsx)(un,{type:"button",onClick:c,children:i?"...":"Delete"})})]})]})}fn.prototype={id:_().string.isRequired,name:_().string.isRequired,togleModal:_().func.isRequired};var mn=fn;function vn(n){var e=n.id,t=n.name,r=n.number,o=on(!1),i=o.showModal,c=o.toggleModal,a=(0,xn.s0)();return(0,g.jsxs)(g.Fragment,{children:[i&&(0,g.jsx)(Q,{onClose:c,title:t,children:(0,g.jsx)(mn,{id:e,name:t,toggleModal:c})}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(F,{children:[(0,g.jsx)(S,{}),(0,g.jsx)(Y,{children:t})]}),(0,g.jsx)(D,{children:r}),(0,g.jsxs)(T,{children:[(0,g.jsx)(A,{children:(0,g.jsx)(I,{type:"button",onClick:c,children:(0,g.jsx)(L.Xm5,{})})}),(0,g.jsx)(A,{children:(0,g.jsx)(I,{type:"button",onClick:function(){return a("edit/".concat(e))},children:(0,g.jsx)(L.dfI,{})})})]})]})]})}vn.prototype={id:_().string.isRequired,name:_().string.isRequired,number:_().string.isRequired};var bn,Zn,jn=vn,yn=t(8929),wn=t(6258),kn=l.Z.ul(bn||(bn=(0,s.Z)([""]))),Cn=l.Z.li(Zn||(Zn=(0,s.Z)(["\n  margin-bottom: 20px;\n"])));var Rn=function(){var n=(0,pn.wY)().data,e=(0,a.v9)((function(n){return function(n){return n.contacts}(n)})).filter;return{filteredContactList:function(){var t=e.toLowerCase();return n&&n.filter((function(n){return n.name.toLowerCase().includes(t)}))}()}};var qn,zn,Mn=function(){var n=(0,pn.wY)(),e=n.data,t=n.isFetching,r=n.error,o=n.refetch,i=Rn().filteredContactList;return(0,N.useEffect)((function(){o()}),[o]),(0,g.jsxs)(g.Fragment,{children:[t&&(0,g.jsx)(yn.Z,{}),r&&(0,g.jsx)(wn.Z,{data:r.data,status:r.status}),(0,g.jsx)(kn,{children:e&&i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,g.jsx)(Cn,{children:(0,g.jsx)(jn,{id:e,name:t,number:r})},e)}))})]})},_n=l.Z.div(qn||(qn=(0,s.Z)(["\n  text-align: center;\n"]))),Ln=l.Z.p(zn||(zn=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 25px;\n"])));function En(n){var e=n.message;return(0,g.jsx)(_n,{children:(0,g.jsx)(Ln,{children:e})})}En.prototype={message:_().string};var Fn,Sn,Yn=En,Dn=t(1087),Tn=(0,l.Z)(Dn.rU)(Fn||(Fn=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 270px;\n  height: 40px;\n  margin-bottom: 50px;\n\n  background-color: var(--accent-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--second-bg-color);\n  }\n"]))),An=l.Z.span(Sn||(Sn=(0,s.Z)(["\n  margin-right: 10px;\n"]))),In=t(9126);function Nn(n){var e=n.text;return(0,g.jsxs)(Tn,{to:"/contacts/add",children:[(0,g.jsx)(An,{children:e}),(0,g.jsx)(In.RYR,{size:20})]})}Nn.prototype={text:_().string};var Pn=Nn;var Xn=function(){var n=(0,pn.wY)().data;return(0,g.jsxs)(c.Z,{title:"Contacts",children:[(0,g.jsx)(Pn,{text:"Add new contact"}),(0,g.jsx)(z,{}),n&&n.length>0?(0,g.jsx)(Mn,{}):(0,g.jsx)(Yn,{message:"Contact list is empty."})]})}}}]);
//# sourceMappingURL=717.431b10dc.chunk.js.map