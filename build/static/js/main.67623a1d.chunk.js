(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);var l=a(3),i=a(4),s=a(6),u=a(5),h=a(7),m=function(e){var t=e.name,a=e.loves,n=e.id;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"cat",src:"https://robohash.org/".concat(n,"?set=set4")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.cats;return r.a.createElement("div",null,t.map(function(e,a){return r.a.createElement(m,{key:t[a].id,id:t[a].id,name:t[a].name,loves:t[a].loves})}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},v=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search for kitties",onChange:t}))},p=(a(17),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChanges=function(t){e.setState({searchfield:t.target.value})},e.state={cats:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({cats:t})})}},{key:"render",value:function(){var e=this.state,t=e.cats,a=e.searchfield,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Kitties"),r.a.createElement(v,{searchChange:this.onSearchChanges}),r.a.createElement(f,null,r.a.createElement(d,{cats:n}),";")):r.a.createElement("h1",null,"Loading")}}]),t}(n.Component));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.67623a1d.chunk.js.map