(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(48),c=a.n(r),o=(a(63),a(6)),m=a(1),s=a(49),i=a.n(s),d=a(50),u=a.n(d),p=a(51),g=a.n(p),b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid about-container",id:"homeSection"},l.a.createElement("div",{className:"container-fluid about-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content row"},l.a.createElement("div",{className:"about-text col-md-6",id:"homeSection2"},l.a.createElement("h1",{className:"text-white",style:{fontFamily:"Helvetica",fontWeight:"bold",fontSize:"44px"}},"If you can dream",l.a.createElement("br",null)," it, you can sell it",l.a.createElement("br",null)," with Shopify"),l.a.createElement("br",null),l.a.createElement("p",{className:"text-white"},l.a.createElement("p",null,"Build your business here. Take it anywhere."),l.a.createElement(o.b,{to:"/register",id:"trial",className:"btn btn-lg btn-primary me-3 fw-bold"},"Start free trial")),l.a.createElement("p",{className:"text-white"},"Try Shopify free , no credit card required. By entering your email, you agree to receive marketing emails from Shopify.")),l.a.createElement("img",{src:i.a,alt:"Home page",className:" col-md-6 pb-3",id:"home2"})))))," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("h2",{id:"discover"},"Discover why millions of",l.a.createElement("br",null)," entrepreneurs choose Shopify",l.a.createElement("br",null)," to build their business\u2014from",l.a.createElement("br",null),"Hello World to IPO.")),l.a.createElement("div",null,l.a.createElement("img",{src:u.a,alt:"Home page2",className:"img-fluid col-md-6",id:"home3"}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"container-fluid about-container"},l.a.createElement("div",{className:"container",id:"section3"},l.a.createElement("div",{className:"content row"},l.a.createElement("div",{className:"about-text col-md-6"},l.a.createElement("br",null),l.a.createElement("h2",{className:""},"Connect with customers",l.a.createElement("br",null)," everywhere"),l.a.createElement("p",{className:"fw-normal"},l.a.createElement("br",null),"Sell online, in person, or both with the marketing",l.a.createElement("br",null),"tools, social integrations, and sales channels you",l.a.createElement("br",null)," need to get your products in front of customers\u2014and ",l.a.createElement("br",null),"out the door."),l.a.createElement("h4",{className:"text-success"},"Marketing made easy  ")),l.a.createElement("img",{src:g.a,alt:"marketing",className:"img-fluid col-md-6",id:"marketing"})))),l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Grow your business here"),l.a.createElement("p",{className:"fw-normal"},"Whether you want to sell products down the street or around the world, we have all the tools you need."),l.a.createElement(o.b,{to:"/register",className:"btn btn-lg btn-success me-3 fw-bold"},"Get Started")),l.a.createElement("footer",{className:"page-footer font-small bg-dark mt-5",style:{mariginTop:"30px",paddingTop:"0px"}},l.a.createElement("div",{className:"footer-copyright text-center py-3 text-white"},"\xa9 2022 Copyright:",l.a.createElement("br",null),l.a.createElement("h4",{className:"text-danger"},"Awais Saddiqui"))))},E=a(3),f=a(19),h=a.n(f),N=(a(26),a(7)),v=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(E.a)(c,2),i=s[0],d=s[1],u=Object(m.m)();return l.a.createElement("div",{style:{marginTop:"200px"}},l.a.createElement("section",null,l.a.createElement("div",{className:"px-4 py-5 px-md-5 text-center text-lg-start mt-5",style:{backgroundColor:"hsl(0, 0%, 96%)"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row gx-lg-5 align-items-center"},l.a.createElement("div",{className:"col-lg-6 mb-5 mb-lg-0"},l.a.createElement("h1",{className:"my-5 display-4 fw-normal ls-tight"},"The best offer ",l.a.createElement("br",null),l.a.createElement("span",{className:"text-primary"},"for your business")),l.a.createElement("p",{style:{color:"hsl(217, 10%, 50.8%)"}},"I had all my signs and my branding ready to go and it was a",l.a.createElement("br",null)," matter of is this going to work\u2026 but people loved it, it ",l.a.createElement("br",null),"wasn\u2019t just in my head.")),l.a.createElement("div",{className:"col-lg-6 mb-5 mb-lg-0 "},l.a.createElement("div",{className:"card",id:"card"},l.a.createElement("div",{className:"card-body py-5 px-md-5"},l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a&&i?i.length<3?N.NotificationManager.error("Password must be at least 3 characters","",3e3):h.a.post("https://myshopify-api.herokuapp.com/api/user/login",{email:a,password:i}).then(function(e){localStorage.setItem("token",e.headers.token),N.NotificationManager.success("User ".concat(a," is logged In successfully"),"",4e3),u("/")}).catch(function(e){N.NotificationManager.error(e.response.data,"",4e3)}):N.NotificationManager.error("Please fill all the fields","",3e3)}(e)}},l.a.createElement("div",{className:"form-outline mb-4"},l.a.createElement("input",{type:"email",id:"email",onChange:function(e){return r(e.target.value)},value:a,placeholder:"Email address",className:"form-control"}),l.a.createElement("label",{className:"form-label text-light",htmlFor:"form3Example3"},"Email address")),l.a.createElement("div",{className:"form-outline mb-4"},l.a.createElement("input",{type:"password",id:"password",onChange:function(e){return d(e.target.value)},value:i,placeholder:"Password",className:"form-control"}),l.a.createElement("label",{className:"form-label text-light",htmlFor:"form3Example4"},"Password")),l.a.createElement("button",{type:"submit",className:"btn btn-block mb-4",id:"btn1"},"Sign In"),l.a.createElement("p",{className:"text-light"},"Don't have an account? ",l.a.createElement(o.b,{to:"/register",className:"link-info"},"Register here")))))))))))},y=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(E.a)(c,2),i=s[0],d=s[1],u=Object(n.useState)(""),p=Object(E.a)(u,2),g=p[0],b=p[1],f=Object(n.useState)(""),v=Object(E.a)(f,2),y=v[0],x=v[1],w=Object(m.m)();return l.a.createElement("div",{className:"vh-40",style:{marginTop:"60px"},id:"login"},l.a.createElement("section",{className:"vh-40",style:{backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}},l.a.createElement("div",{className:"mask d-flex align-items-center h-100 ",id:"gradient-custom-3"},l.a.createElement("div",{className:"container h-30"},l.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},l.a.createElement("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6"},l.a.createElement("div",{className:"card",style:{borderRadius:"20px",paddingBottom:"40px",marginTop:"60px",marginBottom:"60px"}},l.a.createElement("div",{className:"card-body p-5"},l.a.createElement("h2",{className:" text-center mb-1"},"Create an account"),l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a&&i&&g&&y?a.length<3?N.NotificationManager.warning("Name must be at least 3 characters","",3e3):g.length<5?N.NotificationManager.warning("Password must be at least 5 characters","",3e3):y.length<8?N.NotificationManager.warning("Address must be at least 8 characters","",3e3):h.a.post("https://myshopify-api.herokuapp.com/api/user/register",{name:a,email:i,password:g,address:y}).then(function(e){N.NotificationManager.success("User ".concat(e.data.email," is register successfully"),"",3e3),w("/login")}).catch(function(e){N.NotificationManager.error(e.response.data,"",3e3)}):N.NotificationManager.warning("Please fill all the fields","",3e3)}(e)}},l.a.createElement("div",{className:"form-outline mb-4"},l.a.createElement("input",{type:"text",id:"name",onChange:function(e){return r(e.target.value)},placeholder:"Full name",value:a,className:"form-control form-control-lg"}),l.a.createElement("label",{className:"form-label",htmlFor:"form3Example1cg"},"Your Name")),l.a.createElement("div",{className:"form-outline mb-4"},l.a.createElement("input",{type:"email",id:"email",onChange:function(e){return d(e.target.value)},placeholder:"Email address",value:i,className:"form-control form-control-lg"}),l.a.createElement("label",{className:"form-label",htmlFor:"form3Example3cg"},"Your Email")),l.a.createElement("div",{className:"form-outline mb-4"},l.a.createElement("input",{type:"password",id:"password",onChange:function(e){return b(e.target.value)},placeholder:"Password",value:g,className:"form-control form-control-lg"}),l.a.createElement("label",{className:"form-label",htmlFor:"form3Example4cg"},"Password")),l.a.createElement("div",{className:"form-outline mb-4"},l.a.createElement("input",{type:"text",id:"address",onChange:function(e){return x(e.target.value)},placeholder:"Address",value:y,className:"form-control form-control-lg"}),l.a.createElement("label",{className:"form-label",htmlFor:"form3Example5cg"},"Address")),l.a.createElement("div",{className:"form-check d-flex justify-content-center mb-5"},l.a.createElement("input",{className:"form-check-input me-2",type:"checkbox",value:"",id:"terms"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"form2Example3g"},"I agree all statements in ",l.a.createElement("u",null,"Terms of service"))),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{type:"submit",className:"btn btn-success btn-block btn-lg text-body ",id:"gradient-custom-4"},"Register")),l.a.createElement("p",{className:"text-center text-muted mt-5 mb-0"},"Have already an account? ",l.a.createElement(o.b,{to:"/login",id:"login-link",className:"fw-bold text-body"},l.a.createElement("br",null),l.a.createElement("u",null,"Login here"))))))))))))},x=function(){var e=Object(m.m)();return Object(n.useEffect)(function(){localStorage.getItem("token")?(localStorage.removeItem("token"),N.NotificationManager.warning("Logged out Successfully !!","",3e3),e("/")):(N.NotificationManager.error("Already Logged out ","",3e3),e("/"))}),l.a.createElement("div",null,"LogOut ")},w=function(){var e=Object(m.o)(),t=Object(n.useState)([]),a=Object(E.a)(t,2),r=a[0],c=a[1],o=Object(m.m)();return Object(n.useEffect)(function(){var t=localStorage.getItem("token");if(!t)return N.NotificationManager.error("You need to login first","",3e3);h.a.get("https://myshopify-api.herokuapp.com/api/product?pid="+e.pid,{headers:{token:t}}).then(function(e){c(e.data)}).catch(function(e){})}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{margin:"0px auto",minWidth:"300px",height:"100vh",padding:"5% 0% 17% 0%",backgroundColor:"rgba(0, 50, 46, 0.888)",backgroundAttachment:"fixed"}},l.a.createElement("div",{id:"productCard"},l.a.createElement("img",{style:{padding:"20px 10px"},src:r.image,width:300,height:300,alt:r.title}),l.a.createElement("h2",null,r.title),l.a.createElement("p",{style:{padding:"0px 50px"}},r.description),l.a.createElement("p",{className:"fs-2 text-success"},"$ ",r.price),l.a.createElement("button",{className:"btn btn-lg btn-info px-4",style:{margin:"30px auto",padding:"2px 20px"},onClick:function(){o("/products")}},"Back for More Products"))))},k=a(25),S=function(e){var t=e.id,a=e.title,n=e.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{style:{width:"16rem",marginTop:"70px",padding:"2px",boxShadow:"rgb(98 98 98 / 38%) 0px 0px 43px -3px"}},l.a.createElement(k.a.Title,{style:{fontSize:"18px"},className:"text-success"},a),l.a.createElement(k.a.Img,{variant:"top",src:n,alt:a,width:"100px",height:"190px"}),l.a.createElement(k.a.Body,null),l.a.createElement(k.a.Footer,null,l.a.createElement(o.b,{to:"/product/"+t},l.a.createElement("button",{style:{width:"100%",fontWeight:"bold"},className:"btn btn-danger"}," ","View")))))},j=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e=localStorage.getItem("token");if(!e)return N.NotificationManager.error("You need to Login First !!","",4e3);h.a.get("https://myshopify-api.herokuapp.com/api/products",{headers:{token:e}}).then(function(e){r(e.data)}).catch(function(e){N.NotificationManager.error(e,"",4e3)})},[]),l.a.createElement("div",null,l.a.createElement("div",{className:"container1"},l.a.createElement("div",{className:"products-wrapper"},l.a.createElement("div",{className:"products"},a.map(function(e){return l.a.createElement(S,{id:e.id,title:e.title,url:e.image,key:e.id})})))))},O=a(52),C=a.n(O),F=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"about-banner",style:{marginTop:"150px"}}," "),l.a.createElement("div",{className:"container-fluid about-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content row"},l.a.createElement("div",{className:"about-text col-md-6"},l.a.createElement("h2",{className:""},"About Us"),l.a.createElement("p",{className:""},"That's not all. Not to be outdone, individual sellers have increasingly engaged in ecommerce transactions via their own personal websites. And digital marketplaces such as eBay or Etsy serve as exchanges where multitudes of buyers and sellers come together to conduct business."),l.a.createElement("p",{className:""},"Electronic commerce ecommerce refers to companies and individuals that buy and sell goods and services over the Internet. Ecommerce operates in different types of market segments and can be conducted over computers, tablets, smartphone, and other smart devices. Nearly every imaginable product and service is available through ecommerce transactions, including books, music, plane tickets, and financial services such as stock investing and online banking. As such, it is considered a very disruptive technology."),l.a.createElement("button",{className:"btn btn-primary"},"Contact")),l.a.createElement("img",{src:C.a,alt:"about-us",className:"img-fluid rounded col-md-6"})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},M=function(){return l.a.createElement("div",{className:"d-flex align-items-center justify-content-center vh-100"},l.a.createElement("div",{className:"text-center row"},l.a.createElement("div",{className:" col-md-6"},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg",alt:"error page",className:"img-fluid"})),l.a.createElement("div",{className:" col-md-6 mt-5"},l.a.createElement("p",{className:"fs-3"}," ",l.a.createElement("span",{className:"text-danger"},"Opps!")," Page not found."),l.a.createElement("p",{className:"lead"},"The page you\u2019re looking for doesn\u2019t exist."),l.a.createElement(o.b,{to:"/",className:"btn btn-primary"},"Go Home"))))},T=a(53),I=a.n(T),P=(a(94),a(104)),B=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(N.NotificationContainer,null),l.a.createElement(P.a,{className:"navbar navbar-expand-lg fixed-top "},l.a.createElement("div",{className:"container-fluid",id:"bg_color"},l.a.createElement(o.b,{className:"navbar-brand me-2",to:"/"},l.a.createElement("img",{src:I.a,height:54,width:130,alt:"MDB Logo",className:"rounded ms-5",style:{marginTop:"-1px"}})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarButtonsExample","aria-controls":"navbarButtonsExample","aria-expanded":"false","aria-label":"Toggle navigation"}),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 fs-4"},l.a.createElement(o.b,{className:"nav-link text-white",id:"home",to:"/"},"Home"),l.a.createElement(o.b,{className:"nav-link text-white",id:"products",to:"/products"},"Products"),l.a.createElement(o.b,{className:"nav-link text-white",id:"about",to:"/about"},"About")),l.a.createElement("div",{className:" align-items-center "},l.a.createElement(o.b,{to:"/login",id:"login",className:"btn btn-lg btn-info me-3 fw-bold "},"Login"),l.a.createElement(o.b,{to:"/register",id:"register",className:"btn btn-lg btn-primary me-3 fw-bold"},"Sign up for free"),l.a.createElement(o.b,{id:"logout",className:"btn btn-lg btn-danger px-3 fw-bold",to:"/logout"},"LogOut"))))),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(b,null)}),l.a.createElement(m.a,{path:"/login",element:l.a.createElement(v,null)}),l.a.createElement(m.a,{path:"/logout",element:l.a.createElement(x,null)}),l.a.createElement(m.a,{path:"/register",element:l.a.createElement(y,null)}),l.a.createElement(m.a,{path:"/product/:pid",element:l.a.createElement(w,null)}),l.a.createElement(m.a,{path:"/products",element:l.a.createElement(j,null)}),l.a.createElement(m.a,{path:"/about",element:l.a.createElement(F,null)}),l.a.createElement(m.a,{path:"*",element:l.a.createElement(M,null)}))))},A=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,103)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};a(98);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(B,null)),A()},49:function(e,t,a){e.exports=a.p+"static/media/man.86038ab4.png"},50:function(e,t,a){e.exports=a.p+"static/media/home3.fa306e40.jpeg"},51:function(e,t,a){e.exports=a.p+"static/media/mob.3f9c48bb.png"},52:function(e,t,a){e.exports=a.p+"static/media/ecommerce marketing.68e1a972.webp"},53:function(e,t,a){e.exports=a.p+"static/media/logo.879febee.png"},56:function(e,t,a){e.exports=a(101)},63:function(e,t,a){},94:function(e,t,a){}},[[56,3,2]]]);
//# sourceMappingURL=main.d90af5f2.chunk.js.map