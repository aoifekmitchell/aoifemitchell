(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{874:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Projects",function(){return s(3803)}])},3803:function(e,t,s){"use strict";s.r(t);var n=s(5893),r=s(7294),c=s(6154);let d=()=>{let[e,t]=(0,r.useState)([]),[s,d]=(0,r.useState)(""),[i,l]=(0,r.useState)(""),[h,a]=(0,r.useState)([]),[o,x]=(0,r.useState)([]),[j,u]=(0,r.useState)([]),[p,m]=(0,r.useState)([]),[_,w]=(0,r.useState)(""),g=async()=>{let{data:n}=await (0,c.Z)("https://api.openweathermap.org/data/2.5/forecast?q="+s+"&units=metric&appid=3e2d927d4f28b456c6bc662f34350957");t(n),f(n),d(s),console.log(e)},f=e=>{console.log(e.list);let t=[],s=[],n=[],r=[],c=[],d=e.city.country;var i=0;e.list.forEach(e=>{(15==e.dt_txt.substr(11,2)&&e.dt_txt!=r[0]||0==i)&&(console.log(e.dt_txt),i+=1,t.push(e.main.temp_min),s.push(e.main.temp_max),r.push(e.dt_txt.substring(0,10)),c.push(e.weather[0].description),console.log(e.main.temp_min),console.log(e.main.temp_max),("rainy"===e.weather[0].main.toLowerCase()||"rain"===e.weather[0].main.toLowerCase())&&n.push("Pack an umbrella!"),"snow"===e.weather[0].main.toLowerCase()&&n.push("Don't forget your gloves!"),"clear"===e.weather[0].main.toLowerCase()&&n.push("Pack some sunglasses!"),"clouds"===e.weather[0].main.toLowerCase()&&n.push("Bring a jumper!"))}),a(n),x(t),u(s),w(r),m(c),l(d)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:" Weather Forecast "}),"Please enter the name of a city ",(0,n.jsx)("br",{}),"City: ",(0,n.jsx)("input",{type:"text",value:s,onChange:e=>d(e.target.value)}),(0,n.jsx)("button",{onClick:g,children:" Get Forecast "}),(0,n.jsxs)("h3",{className:"table_header",children:[" ",s]}),(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"Day"}),(0,n.jsx)("th",{scope:"col",children:"Min Temp"}),(0,n.jsx)("th",{scope:"col",children:"Max Temp"}),(0,n.jsx)("th",{scope:"col",children:"Weather"}),(0,n.jsx)("th",{scope:"col",children:"Suggestion"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:_[0]}),(0,n.jsx)("td",{children:o[0]}),(0,n.jsx)("td",{children:j[0]}),(0,n.jsx)("td",{children:p[0]}),(0,n.jsx)("td",{children:h[0]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:_[1]}),(0,n.jsx)("td",{children:o[1]}),(0,n.jsx)("td",{children:j[1]}),(0,n.jsx)("td",{children:p[1]}),(0,n.jsx)("td",{children:h[1]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:_[2]}),(0,n.jsx)("td",{children:o[2]}),(0,n.jsx)("td",{children:j[2]}),(0,n.jsx)("td",{children:p[2]}),(0,n.jsx)("td",{children:h[2]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:_[3]}),(0,n.jsx)("td",{children:o[3]}),(0,n.jsx)("td",{children:j[3]}),(0,n.jsx)("td",{children:p[3]}),(0,n.jsx)("td",{children:h[3]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:_[4]}),(0,n.jsx)("td",{children:o[4]}),(0,n.jsx)("td",{children:j[4]}),(0,n.jsx)("td",{children:p[4]}),(0,n.jsx)("td",{children:h[4]})]})]})})]})};t.default=d}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=874)}),_N_E=e.O()}]);