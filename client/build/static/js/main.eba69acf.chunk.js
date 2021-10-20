(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(85)},50:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),o=n.n(l),c=(n(50),n(43)),i=n(88),s=n(89),u=n(90),m=n(93),d=n(91),f=n(92),h=n(11);var E=function(e){var t=Object(a.useState)(!0),n=Object(c.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(i.a,{color:"faded",light:!0},r.a.createElement(s.a,{href:"/",className:"mr-auto"},"Google Books"),r.a.createElement(u.a,{onClick:function(){return o(!l)},className:"mr-2"}),r.a.createElement(m.a,{isOpen:!l,navbar:!0},r.a.createElement(d.a,{navbar:!0},r.a.createElement(f.a,null,r.a.createElement(h.b,{to:"/Search",className:"/search"===window.location.pathname?"nav-link active navv":"nav-link"},"Search")),r.a.createElement(f.a,null,r.a.createElement(h.b,{to:"/Saved",className:"/saved"===window.location.pathname?"nav-link active navv":"nav-link"},"Saved"))))))},v=n(14),g=n(15),k=n(17),b=n(16),p=n(18),N=n(12),w=n.n(N),B={getBooks:function(e){return w.a.get("/api/google",{params:{q:"title"+e}})},getSavedBooks:function(){return w.a.get("/api/search")},deleteBook:function(e){return w.a.delete("/api/search/"+e)},saveBook:function(e){return w.a.post("/api/search",e)}},S=function(e){var t=e.icon,n=e.title,a=e.children;return r.a.createElement("div",{className:"card mt=4"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa".concat(t),"aria-hidden":"true"})," ",n))),r.a.createElement("div",{className:"card-body"},a))};function y(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function I(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function j(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}var O=n(94),z=(n(79),function(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}),x=function(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)},C=(n(80),function(e){var t=e.title,n=e.authors,a=e.link,l=e.description,o=e.image,c=e.Button;return r.a.createElement(x,null,r.a.createElement(I,{className:"flex-wrap-reverse"},r.a.createElement(j,{size:"md-8"},r.a.createElement("h3",{className:"font-italic"},t)),r.a.createElement(j,{size:"md-8"},r.a.createElement("h3",{className:"font-italic small"},"Written by ",n)),r.a.createElement(c,null)),r.a.createElement(I,null,r.a.createElement(j,{size:"md-6"},r.a.createElement("a",{href:a,className:"btn btn-light",target:"_blank",rel:"noopener noreferrer"},"View"))),r.a.createElement(I,null,r.a.createElement(j,{size:"12 sm-4 md-2"},r.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:o,alt:t})),r.a.createElement(j,{size:"12 sm-8 md-10"},r.a.createElement("p",null,l))))}),q=n(41),L=n.n(q),D=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},n.getSavedBooks=function(){B.getSavedBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.handleBookDelete=function(e){B.deleteBook(e).then(function(e){return n.getSavedBooks()})},n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks(),console.log(this)}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,null,r.a.createElement(I,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(L.a,null,r.a.createElement("h1",{className:"text-center"},r.a.createElement("strong",null,"(React) Google Books Search")),r.a.createElement("h2",{className:"text-center"},"Search for and Save Books of Interest")))),r.a.createElement(I,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(S,{title:"Saved Books",icon:"download"},this.state.books.length?r.a.createElement(z,null,this.state.books.map(function(t){return r.a.createElement(C,{key:t._id,title:t.title,link:t.infoLink,authors:t.authors,description:t.description,image:t.image,Button:function(){return r.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2"},"Delete")}})})):r.a.createElement("h2",{className:"text-center"},"No Saved Books")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I,null,r.a.createElement(j,{size:"sm=12"})))}}]),t}(a.Component),W=n(42),A=function(e){var t=e.children;return r.a.createElement("div",{className:"jumbotron mt-4"},t)},G=function(e){var t=e.q,n=e.handleInputChange,a=e.handleSubmit;return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlfor:"Query"},r.a.createElement("strong",null,"Book")),r.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"A Game of Thrones",name:"q",onChange:n,required:!0})),r.a.createElement("div",{className:"pull-right"},r.a.createElement("button",{onClick:a,type:"submit",className:"btn btn-lg btn-danger float-right"},"Search")))},R=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],q:"",message:"Let's get Started"},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(W.a)({},a,r))},n.getBooks=function(){B.getBooks(n.state.q).then(function(e){return n.setState({books:e.data})}).catch(function(){return n.setState({books:[],message:"Nothing in search.  Please try again"})})},n.handleSubmit=function(e){e.preventDefault(),n.getBooks()},n.handleBookSave=function(e){var t=n.state.books.find(function(t){return t.id===e});B.saveBook({googleId:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return n.getBooks()},console.log(t))},n}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y,null,r.a.createElement(I,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(A,null,r.a.createElement("h1",{className:"text-center"},r.a.createElement("strong",null,"(React) Google Books Search")),r.a.createElement("h2",{className:"text-center"},"Search for and Save Books of Interest."))),r.a.createElement(j,{size:"md-12"},r.a.createElement(S,{title:"Book Search",icon:"far fa-book"},r.a.createElement(G,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit,q:this.state.q})))),r.a.createElement(I,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(S,{title:"Results"},this.state.books.length?r.a.createElement(z,null,this.state.books.map(function(t){return r.a.createElement(C,{key:t.id,title:t.volumeInfo.title,authors:t.volumeInfo.authors,description:t.volumeInfo.description,link:t.volumeInfo.infoLink,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return r.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-primary m1-2"},"Save")}})})):r.a.createElement("h2",{className:"text-center"},this.state.message)))))}}]),t}(a.Component),_=function(){return r.a.createElement(y,{fluid:!0},r.a.createElement(I,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(A,null,r.a.createElement("h1",null,"404 Page Unfortunetly Not Found")))))},J=n(10);n(84);var P=function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(J.c,null,r.a.createElement(J.a,{exact:!0,path:"/",component:R}),r.a.createElement(J.a,{exact:!0,path:"/saved",component:D}),r.a.createElement(J.a,{component:_}))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");T?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):U(e)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.eba69acf.chunk.js.map