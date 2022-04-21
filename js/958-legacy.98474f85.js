"use strict";(self["webpackChunkchill_bar"]=self["webpackChunkchill_bar"]||[]).push([[958],{8415:function(e,t,r){var n=r(7854),a=r(9303),l=r(1340),o=r(4488),i=n.RangeError;e.exports=function(e){var t=l(o(this)),r="",n=a(e);if(n<0||n==1/0)throw i("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},6977:function(e,t,r){var n=r(2109),a=r(7854),l=r(1702),o=r(9303),i=r(863),s=r(8415),c=r(7293),u=a.RangeError,d=a.String,f=Math.floor,m=l(s),p=l("".slice),h=l(1..toFixed),g=function(e,t,r){return 0===t?r:t%2===1?g(e,t-1,r*e):g(e*e,t/2,r)},b=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},v=function(e,t,r){var n=-1,a=r;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=f(a/1e7)},w=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=f(n/t),n=n%t*1e7},y=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=d(e[t]);r=""===r?n:r+m("0",7-n.length)+n}return r},x=c((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!c((function(){h({})}));n({target:"Number",proto:!0,forced:x},{toFixed:function(e){var t,r,n,a,l=i(this),s=o(e),c=[0,0,0,0,0,0],f="",h="0";if(s<0||s>20)throw u("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return d(l);if(l<0&&(f="-",l=-l),l>1e-21)if(t=b(l*g(2,69,1))-69,r=t<0?l*g(2,-t,1):l/g(2,t,1),r*=4503599627370496,t=52-t,t>0){v(c,0,r),n=s;while(n>=7)v(c,1e7,0),n-=7;v(c,g(10,n,1),0),n=t-1;while(n>=23)w(c,1<<23),n-=23;w(c,1<<n),v(c,1,1),w(c,2),h=y(c)}else v(c,0,r),v(c,1<<-t,0),h=y(c)+m("0",s);return s>0?(a=h.length,h=f+(a<=s?"0."+m("0",s-a)+h:p(h,0,a-s)+"."+p(h,a-s))):h=f+h,h}})},9939:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(6252),a=r(3577),l={class:"container"},o={class:"flex gap-4 justify-between"},i={class:"tracking-[.25rem]"},s=(0,n._)("br",null,null,-1);function c(e,t,r,c,u,d){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("ul",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.data,(function(e,t){return(0,n.wg)(),(0,n.iD)("li",{key:e.title,class:(0,a.C_)(["flex-grow p-1 rfs:text-base font-light text-center md:rfs:text-lg",c.action===String(t+1)?"bg-secondary-500 text-primary-300":"border-secondary-700 text-secondary-400"])},[(0,n._)("span",{class:(0,a.C_)(["block py-2 border lg:py-2",c.action===String(t+1)?"border-primary-300":"border-secondary-400"])},[(0,n._)("span",i,(0,a.zw)(e.title),1),s,(0,n.Uk)((0,a.zw)(e.content),1)],2)],2)})),128))])])}var u=r(2262),d={props:{active:String},setup:function(e){var t=(0,u.qj)([{title:"STEP1",content:"確認訂單"},{title:"STEP2",content:"建立訂單"},{title:"STEP3",content:"完成訂單"}]),r=(0,u.Vh)(e,"active");return{data:t,action:r}}},f=r(3744);const m=(0,f.Z)(d,[["render",c]]);var p=m},9958:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});r(8309);var n=r(6252),a=r(3577),l=r(9963),o=function(e){return(0,n.dD)("data-v-769f270e"),e=e(),(0,n.Cn)(),e},i={class:"py-8 bg-gray-200"},s={class:"container"},c={class:"flex flex-wrap gap-4 justify-between lg:flex-nowrap"},u={class:"flex flex-col flex-auto pb-4 space-y-8 w-full border-b border-secondary-500 md:w-2/3 lg:pt-14 lg:border-0"},d=o((function(){return(0,n._)("h1",{class:"py-4 text-2xl font-medium text-center"},"訂單內容",-1)})),f={id:"list",class:"overflow-y-auto space-y-4 max-h-[50vh]"},m={class:"flex gap-4"},p=["src","alt"],h={class:"space-y-4"},g={class:"text-xl font-medium"},b={class:"block font-mono tracking-wider"},v={class:"font-mono tracking-widest"},w={class:"flex justify-between"},y={class:"flex justify-start items-center p-4"},x={class:"gap-2 cursor-pointer label"},_=o((function(){return(0,n._)("span",{class:"text-lg"},"還想加購點什麼",-1)})),L={class:"text-right"},k={key:0,class:"text-2xl text-center text-secondary-500"},C={key:1,class:"mb-2 rfs:text-lg font-medium"},S=(0,n.Uk)(" 已套用折價券"),F=o((function(){return(0,n._)("br",null,null,-1)})),R={class:"rfs:text-xl font-light"},Z={class:"rfs:text-2xl font-medium tracking-widest"},D=o((function(){return(0,n._)("div",{class:"lg:divider lg:divider-horizontal"},null,-1)})),P=(0,n.Uk)("現在我想來點");function E(e,t,r,o,E,j){var q,U,z=(0,n.up)("CheckStep"),N=(0,n.up)("OrderForm"),T=(0,n.up)("TheRecommend"),W=(0,n.up)("AlertModal");return(0,n.wg)(),(0,n.iD)("section",i,[(0,n.Wm)(z,{active:"1"}),(0,n._)("div",s,[(0,n._)("div",c,[(0,n._)("div",u,[d,(0,n._)("ul",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.cartList,(function(e){return(0,n.wg)(),(0,n.iD)("li",{key:e.id,class:"flex gap-4 justify-between items-center px-4 pb-4 border-b border-secondary-200"},[(0,n._)("div",m,[(0,n._)("img",{class:"object-cover w-20 h-20",src:e.product.imageUrl,alt:e.product.title},null,8,p),(0,n._)("div",h,[(0,n._)("h3",g,(0,a.zw)(e.product.title),1),(0,n._)("span",b,"數量："+(0,a.zw)(e.qty),1)])]),(0,n._)("span",v," NT$"+(0,a.zw)(o.moneyFormat(e.product.price,e.qty)),1)])})),128))]),(0,n._)("div",w,[(0,n._)("div",y,[(0,n._)("label",x,[_,(0,n.wy)((0,n._)("input",{type:"checkbox",class:"toggle","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.showRecommended=e})},null,512),[[l.e8,o.showRecommended]])])]),(0,n._)("div",L,[0===o.cartList.length?((0,n.wg)(),(0,n.iD)("p",k," 您的購物車是空的 ")):(0,n.kq)("",!0),null!==(q=o.checkCoupon)&&void 0!==q&&q.name?((0,n.wg)(),(0,n.iD)("p",C,[S,F,(0,n._)("span",R,(0,a.zw)(null===(U=o.checkCoupon)||void 0===U?void 0:U.name),1)])):(0,n.kq)("",!0),(0,n.wy)((0,n._)("p",Z," 總金額 ",512),[[l.F8,o.cartList.length>0]]),(0,n.wy)((0,n._)("p",{class:"font-mono text-xl font-extralight"}," NT$"+(0,a.zw)(o.cartResultPrice),513),[[l.F8,o.cartList.length>0]])])])]),D,(0,n.Wm)(N)]),(0,n.Wm)(W,{class:"select-none",modelValue:o.showRecommended,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.showRecommended=e}),onHandleCloseModal:o.handleCloseModal,closeButton:!1},{title:(0,n.w5)((function(){return[P]})),default:(0,n.w5)((function(){return[o.showRecommended?((0,n.wg)(),(0,n.j4)(T,{key:0,title:"還有些好貨",titleClass:"rfs:text-2xl",class:"text-secondary-700 bg-transparent",limit:"10"})):(0,n.kq)("",!0)]})),_:1},8,["modelValue","onHandleCloseModal"])])])}var j=r(6084),q=(r(9653),r(6977),r(7327),r(1539),r(5366)),U=r(2262),z=r(8262),N=r(2119),T={id:"order",class:"container py-4 lg:pt-14 lg:pb-20"},W=(0,n._)("h2",{class:"mb-8 text-2xl font-medium text-center"},"填寫訂單資料",-1),I={class:"flex flex-wrap gap-6 justify-between items-start mb-6 lg:flex-nowrap"},H=["disabled"],A={class:"pt-12"},M=["disabled"];function V(e,t,r,o,i,s){var c=(0,n.up)("InputField"),u=(0,n.up)("Form");return(0,n.wg)(),(0,n.iD)("section",T,[W,(0,n.Wm)(u,{action:"",class:"mx-auto space-y-4",onSubmit:o.handleSubmit,"validation-schema":o.schema},{default:(0,n.w5)((function(){return[(0,n._)("div",I,[(0,n.Wm)(c,{name:"userName",type:"text",label:"訂購人姓名",placeholder:"請輸入姓名",disabled:0===o.cartListLength,class:(0,a.C_)({"opacity-30 cursor-not-allowed":0===o.cartListLength})},null,8,["disabled","class"]),(0,n.Wm)(c,{name:"userPhone",type:"tel",maxlength:"10",label:"訂購人電話",placeholder:"請輸入電話",disabled:0===o.cartListLength,class:(0,a.C_)({"opacity-30 cursor-not-allowed":0===o.cartListLength})},null,8,["disabled","class"])]),(0,n.Wm)(c,{name:"userEmail",type:"email",label:"訂購人Email",placeholder:"請輸入Email",disabled:0===o.cartListLength,class:(0,a.C_)({"opacity-30 cursor-not-allowed":0===o.cartListLength})},null,8,["disabled","class"]),(0,n.Wm)(c,{name:"userAddress",type:"text",label:"訂購人地址",placeholder:"請輸入地址",disabled:0===o.cartListLength,class:(0,a.C_)({"opacity-30 cursor-not-allowed":0===o.cartListLength})},null,8,["disabled","class"]),(0,n._)("div",null,[(0,n._)("label",{for:"userRemark",class:(0,a.C_)(["block mb-2",{"opacity-30 cursor-not-allowed":0===o.cartListLength}])},"備註",2),(0,n.wy)((0,n._)("textarea",{id:"userRemark",name:"userRemark",class:(0,a.C_)(["w-full form-style",{"opacity-30 cursor-not-allowed":0===o.cartListLength}]),rows:"4",placeholder:"想要告訴我們什麼？","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.userRemark=e}),disabled:0===o.cartListLength},null,10,H),[[l.nr,o.userRemark]])]),(0,n._)("div",A,[(0,n._)("button",{type:"submit",class:(0,a.C_)(["w-full text-xl font-medium text-white bg-secondary-700 hover:bg-primary-600 active:bg-primary-500 rounded border-none transition duration-300 ease-in-out btn",{"opacity-30 cursor-not-allowed":0===o.cartListLength}]),disabled:0===o.cartListLength},(0,a.zw)(o.cartListLength>0?"送出訂單資料":"目前購物車沒有商品"),11,M)])]})),_:1},8,["onSubmit","validation-schema"])])}r(3210),r(4916),r(7601);var Y=r(2954),O=r(4231),K=r(9760),$={components:{Form:Y.l0,InputField:K.Z},setup:function(){var e=(0,q.Z)(),t=e.orderStore,r=e.cartStore,a=t.handleSendOrder,l=r.cartData,o=(0,U.iH)(""),i=/09\d{2}-?\d{3}-?\d{3}/,s=O.Ry().shape({userName:O.Z_().trim().required("請輸入姓名"),userEmail:O.Z_().trim().email("請輸入正確的Email信箱").required("請輸入Email"),userPhone:O.Z_().test("phone","請輸入正確的10碼手機號碼(09...)",(function(e){return i.test(e)})).required("請輸入電話號碼"),userAddress:O.Z_().required("請輸入寄件地址")});function c(e,t){var r={name:e.userName,email:e.userEmail,tel:e.userPhone,address:e.userAddress,message:o.value};a(r),o.value="",t.resetForm()}return{handleSubmit:c,schema:s,userRemark:o,cartListLength:(0,n.Fl)((function(){return l.list.length}))}}},B=r(3744);const G=(0,B.Z)($,[["render",V]]);var J=G,Q=r(9939),X=r(7015),ee={components:{OrderForm:J,CheckStep:Q.Z,TheRecommend:X.Z},setup:function(){var e=(0,q.Z)(),t=e.cartStore,r=e.couponStore,a=e.orderStore,l=t.cartData,o=t.handleGetCart,i=t.handleDeleteCart,s=t.handleClearCart,c=t.handleUpdateCart,u=r.couponData,d=r.handleUseCoupon,f=(0,z.Jk)(a),m=f.orderResult,p=(0,U.iH)(!1),h=(0,N.tv)();function g(e,t){var r=e;return void 0!==t&&(r*=t),void 0!==e?Number(r.toFixed(1)).toLocaleString():0}function b(){h.push("confirm")}(0,n.YP)((function(){return l.cart}),(function(e){e.length>0&&o()})),(0,n.YP)((function(){return m.value.success}),(function(e){!0===e&&(b(),localStorage.removeItem("coupon"))}));var v=(0,U.iH)(""),w=(0,n.Fl)((function(){return u.couponList})),y=localStorage.getItem("coupon");function x(){p.value=!1}return(0,n.bv)((function(){if(o(),null!==y){d(y);var e=w.value.filter((function(e){return e.code===y})),t=(0,j.Z)(e,1);v.value=t[0]}})),{cartList:(0,n.Fl)((function(){return l.list})),cartTotalPrice:(0,n.Fl)((function(){return g(l.totalPrice)})),cartFinalPrice:(0,n.Fl)((function(){return g(l.finalPrice)})),cartResultPrice:(0,n.Fl)((function(){return l.resultPrice})),handleDeleteCart:i,handleClearCart:s,handleUpdateCart:c,moneyFormat:g,showRecommended:p,checkCoupon:v,orderResult:m,handleCloseModal:x}}};const te=(0,B.Z)(ee,[["render",E],["__scopeId","data-v-769f270e"]]);var re=te},6084:function(e,t,r){function n(e){if(Array.isArray(e))return e}r.d(t,{Z:function(){return i}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948);function a(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done);o=!0)if(l.push(n.value),t&&l.length===t)break}catch(s){i=!0,a=s}finally{try{o||null==r["return"]||r["return"]()}finally{if(i)throw a}}return l}}var l=r(2780);r(1703);function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){return n(e)||a(e,t)||(0,l.Z)(e,t)||o()}}}]);
//# sourceMappingURL=958-legacy.98474f85.js.map