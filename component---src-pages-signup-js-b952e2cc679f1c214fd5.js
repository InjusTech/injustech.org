(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Wwxz:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),s=t("D5Hz"),i=t("QojX");var o=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={email:a.props.email,userName:"",businessName:"",location:"",existingWebsite:""},a.handleChange=function(e,t){var n;a.setState(((n={})[e]=t.target.value,n))},a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var o=n.prototype;return o.handleSubmit=function(e){e.preventDefault();var a=this.state,t=a.email,n=a.userName,l=a.businessName,i=a.location,o=a.existingWebsite,r={from_name:t,to_name:"InjusTech",subject:"Get my business online!",message_html:"Name: ".concat(n).concat(" Business: ").concat(l).concat(" Location: ").concat(i).concat(" existingWebsite: ").concat(o)};s.send("gmail","template_E250JsFz",r,"user_m60oJdTQRZjxaOD5xYXBe"),this.resetForm()},o.resetForm=function(){this.setState({email:"",userName:"",businessName:"",location:"",existingWebsite:""})},o.render=function(){return l.a.createElement(i.a,{onSubmit:this.handleSubmit.bind(this)},l.a.createElement(i.a.Group,{className:"mr-4",controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Email address"),l.a.createElement(i.a.Control,{value:this.state.email,onChange:this.handleChange.bind(this,"email"),type:"email",placeholder:this.state.email}),l.a.createElement(i.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(i.a.Group,{className:"mr-4",controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Full Name"),l.a.createElement(i.a.Control,{value:this.state.github,onChange:this.handleChange.bind(this,"github"),placeholder:"John Doe"})),l.a.createElement(i.a.Group,{className:"mr-4"},l.a.createElement(i.a.Label,null,"Business Name"),l.a.createElement(i.a.Control,{value:this.state.linkedIn,onChange:this.handleChange.bind(this,"linkedIn"),placeholder:"Google"})),l.a.createElement(i.a.Group,{className:"mr-4",controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Where does your business operate?"),l.a.createElement(i.a.Control,{value:this.state.github,onChange:this.handleChange.bind(this,"github"),placeholder:"Boston, MA"})),l.a.createElement(i.a.Group,{className:"mr-4",controlId:"formBasicEmail"},l.a.createElement(i.a.Label,null,"Do you have an existing website? If so, provide the URL"),l.a.createElement(i.a.Control,{value:this.state.github,onChange:this.handleChange.bind(this,"github"),placeholder:"www.injustech.org"})),l.a.createElement("button",{style:{color:"#ffffff"},className:"btn mt-3 primary",back:!0,type:"submit"},"Submit"))},n}(n.Component),r=t("Bl7J");a.default=function(e){e.location;var a=Object(n.useState)(""),s=a[0],i=a[1];return Object(n.useEffect)((function(){i(window.history.state.email)}),[window.history.state.email]),l.a.createElement(r.a,null,l.a.createElement("section",{className:"landing-section"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"mb-4"},"Sign Up Your Business"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",null,l.a.createElement(o,{email:s}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"mt-4 ml-4"},l.a.createElement("img",{alt:"forms",className:"img-fluid mt-4",src:t("dA21")})))))))}},dA21:function(e,a,t){e.exports=t.p+"static/fill-forms-2683516a13e28968555eacc6b338bc2f.png"}}]);
//# sourceMappingURL=component---src-pages-signup-js-b952e2cc679f1c214fd5.js.map