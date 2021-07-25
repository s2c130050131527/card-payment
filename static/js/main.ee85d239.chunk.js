(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){e.exports={axisY:"Chart_axisY__2RRun"}},11:function(e,t,n){e.exports={container:"Repayment_container__1WcT2",title:"Repayment_title__3E0lc",paragraph:"Repayment_paragraph__19XmC",optionsContainer:"Repayment_optionsContainer__3ZlSq",continue:"Repayment_continue__26jWc",continueBtn:"Repayment_continueBtn__2_dgS"}},110:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(39),o=n.n(c),r=(n(105),n(14)),s=n(28),l=n.n(s),d=n(8),j=(n(107),n(0)),u=function(e){for(var t=e.x,n=e.y,a=0,i=10,c=10,o=0,r=e.widthX-o-i,s=e.heightY-a-c,l=[{mon:0,amt:0}],u=n/(t*(t+1)/2),m=1;m<=t;m++){var b={mon:m,amt:u*m+l[m-1].amt};l.push(b)}var h=d.d().domain([0,t]).range([10,r]),p=d.d().domain([0,900]).range([s,5]),x=d.c().x((function(e){return h(e.mon)})).y((function(e){return p(e.amt)})).curve(d.b)(l),_=d.a().x((function(e){return h(e.mon)})).y0((function(e){return p(e.amt)})).y1((function(){return p(0)})).curve(d.b)(l);return Object(j.jsxs)("svg",{viewBox:"0 0 ".concat(r+o+i," \n  ").concat(s+a+c),children:[Object(j.jsx)("g",{transform:"translate(".concat(r-70,",").concat(parseFloat(n)<100?p(n)-10:p(n),")"),children:Object(j.jsxs)("text",{fontSize:"15px",fontWeight:"bold",fill:"#f06060",children:["$ ",n]})}),Object(j.jsx)("path",{strokeWidth:5,fill:"none",stroke:"url(#linear)",d:x,strokeLinecap:"round"}),Object(j.jsx)("path",{fill:"url(#linear2)",d:_,opacity:.3}),Object(j.jsxs)("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Object(j.jsx)("stop",{offset:"0%",stopColor:"#edb42d"}),Object(j.jsx)("stop",{offset:"45%",stopColor:"#edb42d"}),Object(j.jsx)("stop",{offset:"100%",stopColor:"#f06060"})]}),Object(j.jsxs)("linearGradient",{id:"linear2",x1:"0%",y1:"0%",x2:"100%",y2:"0%",gradientTransform:"rotate(90)",children:[Object(j.jsx)("stop",{offset:"50%",stopColor:"#f06060"}),Object(j.jsx)("stop",{offset:"100%",stopColor:"#edb42d00"})]})]})},m=n(19),b=n.n(m),h={3:1.025,6:1.05,9:1.08},p=function(e){var t=e.amount,n=e.payNowAmount,i=e.selectedMonth,c=Object(a.useState)({width:0,height:0}),o=Object(r.a)(c,2),s=o[0],l=o[1],d=Object(a.useRef)(null),m=function(){d.current&&l({width:d.current.clientWidth,height:d.current.clientHeight})};Object(a.useEffect)((function(){var e,t=function(){clearTimeout(e),e=setTimeout((function(){m()}),200)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(a.useEffect)((function(){m()}),[]);var p=t-n,x=parseFloat(p*h[i]),_=parseFloat(x-p).toFixed(2);return Object(j.jsxs)("div",{className:b.a.container,children:[Object(j.jsx)("div",{className:b.a.title,children:"Total Finance Charge"}),Object(j.jsx)("div",{className:b.a.boxOfGraph,ref:d,children:Object(j.jsx)(u,{y:_,x:i,widthX:s.width,heightY:s.height})})]})},x=n(6),_=n(3),O=n.n(_),f=n(40),y=function(e){var t=e.amount,n=e.payNowAmount,i=e.setPayNowAmount,c=Object(a.useMemo)((function(){return parseInt(n/t*100)}),[n]);return Object(j.jsxs)("div",{className:O.a.container,children:[Object(j.jsxs)("div",{className:O.a.amounts,children:[Object(j.jsxs)("div",{className:O.a.payNow,children:[Object(j.jsx)("div",{className:O.a.title,children:"Pay now"}),Object(j.jsxs)("div",{className:O.a.amount,children:["$ ",n]})]}),Object(j.jsxs)("div",{className:O.a.payLater,children:[Object(j.jsx)("div",{className:O.a.title,children:"Pay over time"}),Object(j.jsxs)("div",{className:O.a.amount,children:["$ ",t-n]})]})]}),Object(j.jsxs)("div",{className:O.a.slider,children:[Object(j.jsx)(f.Range,{values:n,step:100,min:0,max:t-100,rtl:!1,onChange:function(e){return i(e)},renderTrack:function(e){var t=e.props,n=e.children;return Object(j.jsx)("div",{onMouseDown:t.onMouseDown,onTouchStart:t.onTouchStart,style:Object(x.a)(Object(x.a)({},t.style),{},{height:"36px",display:"flex",width:"100%"}),children:Object(j.jsx)("div",{ref:t.ref,style:{height:"20px",width:"100%",borderRadius:"10px",background:"linear-gradient(90deg, rgba(240,96,96,1) 0%, rgba(237,179,45,1) ".concat(c,"%, rgba(246,246,246,1) ").concat(c,"%)"),alignSelf:"center"},children:n})})},renderThumb:function(e){var t=e.props;e.isDragged;return Object(j.jsx)("div",Object(x.a)(Object(x.a)({},t),{},{style:Object(x.a)(Object(x.a)({},t.style),{},{outline:"none",height:"32px",width:"32px",borderRadius:"16px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),children:Object(j.jsx)("div",{style:{height:"16px",width:"16px",borderRadius:"8px",backgroundColor:"rgb(231,164,50)"}})}))}}),Object(j.jsxs)("div",{className:O.a.rangeAmt,children:[Object(j.jsx)("div",{className:O.a.minAmt,children:"$ 0.00"}),Object(j.jsxs)("div",{className:O.a.maxAmt,children:["$ ",parseFloat(t).toFixed(2)]})]})]})]})},v=n(11),g=n.n(v),N=n(4),w=n.n(N),C={3:1.025,6:1.05,9:1.08},S=function(e){var t=e.monthQty,n=e.amt,i=e.selected,c=e.onChange,o=e.amount,r=Object(a.useMemo)((function(){return parseFloat((o-n)*C[t]/t).toFixed(2)}),[t,n]);return Object(j.jsx)("div",{className:"".concat(w.a.container," ").concat(i?w.a.selected:""),onClick:function(){return c(t)},children:Object(j.jsxs)("div",{className:w.a.innerBtn,role:"button",tabIndex:"0",children:[Object(j.jsxs)("div",{className:w.a.monthTitle,children:[Object(j.jsx)("span",{className:w.a.monthQty,children:t}),Object(j.jsx)("span",{children:"\xa0Payments"})]}),Object(j.jsxs)("div",{className:w.a.amountDisp,children:[Object(j.jsxs)("span",{className:w.a.amtBold,children:["$ ",r.split(".")[0]]}),Object(j.jsxs)("span",{children:[".",r.split(".")[1],"/M"]})]})]})})},T=function(e){var t=e.payNowAmount,n=e.amount,a=e.monthList,i=e.selectedMonth,c=e.setSelectedMonth;return Object(j.jsxs)("div",{className:g.a.container,children:[Object(j.jsx)("div",{className:g.a.title,children:"Repayment option"}),Object(j.jsx)("div",{className:g.a.optionsContainer,children:a.map((function(e){return Object(j.jsx)(S,{monthQty:e,amount:n,amt:t,selected:i===e,onChange:c},e)}))}),Object(j.jsx)("div",{className:g.a.continue,children:Object(j.jsx)("button",{className:g.a.continueBtn,children:"Continue"})})]})},A=n(7),k=n.n(A),R=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:k.a.container,children:[Object(j.jsx)("div",{className:k.a.title,children:"Pay card balance"}),Object(j.jsx)("div",{className:k.a.subTitle,children:"Pay off part of the balance now and convert the rest into a loan. Pay it over time with fixed installments."})]}),Object(j.jsxs)("div",{className:k.a.container2,children:[Object(j.jsx)("div",{className:k.a.title,children:"Card balance"}),Object(j.jsx)("div",{className:k.a.amount,children:"$ 10,500.00"})]})]})},F=10500,P=[3,6,9];var B=function(){var e=Object(a.useState)([3e3]),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(P[0]),o=Object(r.a)(c,2),s=o[0],d=o[1];return Object(j.jsx)("div",{className:l.a.container,children:Object(j.jsxs)("div",{className:l.a.body,children:[Object(j.jsx)(R,{}),Object(j.jsx)(p,{amount:F,payNowAmount:n,selectedMonth:s}),Object(j.jsx)(y,{payNowAmount:n,setPayNowAmount:i,amount:F}),Object(j.jsx)(T,{payNowAmount:n,amount:F,monthList:P,selectedMonth:s,setSelectedMonth:d})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),M()},19:function(e,t,n){e.exports={container:"GraphContainer_container__3SLqc",title:"GraphContainer_title__3A7wT",boxOfGraph:"GraphContainer_boxOfGraph__1H5GQ",intDisplay:"GraphContainer_intDisplay__1yZMU"}},28:function(e,t,n){e.exports={container:"App_container__eSJ6i",body:"App_body__2a4FT"}},3:function(e,t,n){e.exports={container:"PaybackAndSlider_container__3HYJ1",amounts:"PaybackAndSlider_amounts__3cpzz",title:"PaybackAndSlider_title__1kB-x",amount:"PaybackAndSlider_amount__11rX-",payNow:"PaybackAndSlider_payNow__3v18U",payLater:"PaybackAndSlider_payLater__yKUkb",slider:"PaybackAndSlider_slider__3n0KB",rangeAmt:"PaybackAndSlider_rangeAmt__2NlT3"}},4:function(e,t,n){e.exports={container:"RepaymentOption_container__1w8JS",selected:"RepaymentOption_selected__38zuX",innerBtn:"RepaymentOption_innerBtn__2KHM_",monthTitle:"RepaymentOption_monthTitle__3iXde",monthQty:"RepaymentOption_monthQty__wIdJ3",amountDisp:"RepaymentOption_amountDisp__3QaWe",amtBold:"RepaymentOption_amtBold__3DuE9"}},7:function(e,t,n){e.exports={container:"TitleCard_container__1gw9k",title:"TitleCard_title__1a-il",subTitle:"TitleCard_subTitle__2qT-S",container2:"TitleCard_container2__2kj3i",amount:"TitleCard_amount__Bxa-w"}}},[[110,1,2]]]);
//# sourceMappingURL=main.ee85d239.chunk.js.map