(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{220:function(t,e,r){},221:function(t,e,r){},222:function(t,e,r){},223:function(t,e,r){},269:function(t,e,r){"use strict";var n=r(220);r.n(n).a},270:function(t,e,r){"use strict";var n=r(221);r.n(n).a},271:function(t,e,r){"use strict";var n=r(222);r.n(n).a},272:function(t,e,r){"use strict";var n=r(223);r.n(n).a},275:function(t,e,r){"use strict";r.r(e);var n={props:{profile:Object}},l=r(24),o=r(89),c=r.n(o),d=r(229),v=r(277),m=r(212),h=r(273),f=r(213),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-flex",{attrs:{xs8:""}},[e("v-card",{staticClass:"semiTransparent my-5"},[e("v-layout",[e("v-flex",{staticClass:"pa-4",attrs:{xs4:""}},[e("v-img",{attrs:{src:"profilepic.jpg"}})],1),e("v-flex",{attrs:{xs6:""}},[e("v-card-text",{staticClass:"display-1"},[this._v("Cameron Sexton")]),e("v-card-text",{staticClass:"headline"},[this._v("Software Developer")])],1)],1)],1)],1)],1)},[],!1,null,null,null),x=component.exports;c()(component,{VCard:d.a,VCardText:v.a,VFlex:m.a,VImg:h.a,VLayout:f.a});r(43);var y=r(234),_=r(236),C={mixins:[y.validationMixin],validations:{name:{required:_.required,maxLength:Object(_.maxLength)(30)},email:{required:_.required,email:_.email},message:{required:_.required,maxLength:Object(_.maxLength)(500)}},data:function(){return{name:"",email:"",message:"",submitStatus:null}},methods:{submit:function(){var t=this;this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":(this.$axios.$post(this.formUrl,{form:{Name:this.name,Email:this.email,Message:this.message}}),this.submitStatus="PENDING",setTimeout(function(){t.submitStatus="OK"},500))}},computed:{formUrl:function(){return"".concat("https://gh-backend.camsexton.com","/api/forms/submit/Contact?token=").concat("84654bf365c06b61021b0190842a08")},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Name must be at most 10 characters long"),!this.$v.name.required&&t.push("Name is required."),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t},messageErrors:function(){var t=[];return this.$v.message.$dirty?(!this.$v.message.maxLength&&t.push("500 characters max."),!this.$v.message.required&&t.push("Message is required."),t):t}}},w=r(84),k=r(274),$=r(85),V=r(276),j=r(267),A=Object(l.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",[r("v-flex",{attrs:{xs11:"",lg8:""}},[r("v-card",{staticClass:"my-5",attrs:{light:"",color:"grey lighten-4",elevation:"10",tile:""}},[r("v-layout",{staticClass:"ma-0 pa-0",attrs:{wrap:"","justify-center":""}},[r("v-img",{attrs:{contain:"",width:"100%","max-width":"320px",src:"profilepic.jpg"}}),r("v-flex",{staticClass:"pa-0 ma-0",attrs:{grow:""}},[r("v-layout",{staticClass:"pa-0 ma-0",attrs:{wrap:"","justify-center":""}},[r("v-layout",{staticClass:"px-3 ma-0",attrs:{"justify-end":"","align-center":""}},[r("v-icon",{staticClass:"ma-2",attrs:{size:"40",color:"grey darken-3"}},[t._v("fab fa-github")]),r("v-icon",{staticClass:"ma-2",attrs:{size:"40",color:"grey darken-3"}},[t._v("fab fa-linkedin")])],1),"OK"!=t.submitStatus?r("v-flex",{staticClass:"pa-0",attrs:{xs12:""}},[r("v-form",{staticClass:"pa-3 transparent standard-card",attrs:{width:"100%",left:""}},[r("v-text-field",{attrs:{"error-messages":t.nameErrors,label:"Name",required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("v-text-field",{attrs:{"error-messages":t.emailErrors,label:"Email",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-textarea",{attrs:{"error-messages":t.messageErrors,label:"Message",required:""},on:{input:function(e){return t.$v.message.$touch()},blur:function(e){return t.$v.message.$touch()}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),r("v-btn",{staticClass:"mx-0",attrs:{left:"",large:"",color:"success"},on:{click:t.submit}},[t._v("Submit")])],1):r("v-card-text",{staticClass:"display-2 text-xs-center py-5"},[t._v("Thanks for your message!")])],1)],1)],1)],1)],1)],1)},[],!1,null,null,null),E=A.exports;c()(A,{VBtn:w.a,VCard:d.a,VCardText:v.a,VFlex:m.a,VForm:k.a,VIcon:$.a,VImg:h.a,VLayout:f.a,VTextField:V.a,VTextarea:j.a});var O={props:{color:String,text:String}},S=r(228),T=Object(l.a)(O,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{staticClass:"pa-0",attrs:{xs12:"",grow:""}},[r("v-sheet",{staticClass:"font-weight-thin white--text px-4",class:{headline:t.$breakpoint.is("smAndDown"),"display-1":t.$breakpoint.is("mdAndUp"),"py-2":t.$breakpoint.is("smAndDown"),"py-4":t.$breakpoint.is("mdAndUp")},attrs:{color:t.color}},[t._v(t._s(t.text))])],1)},[],!1,null,null,null),D=T.exports;c()(T,{VFlex:m.a,VSheet:S.a});var L={props:{skills:Object},computed:{iconSize:function(){return this.$vuetify.breakpoint.xsOnly?40:this.$vuetify.breakpoint.smOnly?70:100},verticalSpace:function(){return this.$vuetify.breakpoint.xsOnly?"my-3":"my-5"}}},U=r(225),I=r(211),F=Object(l.a)(L,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",t._l(t.skills,function(e,n){return r("v-flex",{key:n,staticClass:"pa-0",class:t.verticalSpace,attrs:{xs11:"",md9:"",lg8:"",grow:""}},[r("v-card",{attrs:{light:"",color:"grey lighten-4",elevation:"10"}},[r("v-card-title",{staticClass:"font-weight-thin",class:{headline:t.$breakpoint.is("smAndDown"),"display-1":t.$breakpoint.is("mdAndUp")}},[t._v(t._s(n))]),r("v-divider"),r("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},t._l(e,function(e){return r("v-flex",{key:e.title,staticClass:"ma-3 pa-0 text-xs-center",attrs:{"min-width":"200px"}},[r("v-icon",{attrs:{size:t.iconSize,color:"grey darken-3"}},[t._v(t._s(e.icon))]),r("div",{staticClass:"font-weight-thin",class:{"body-2":t.$breakpoint.is("smAndDown"),headline:t.$breakpoint.is("mdAndUp")}},[t._v(t._s(e.title))])],1)}),1)],1)],1)}),1)},[],!1,null,null,null),P=F.exports;c()(F,{VCard:d.a,VCardTitle:U.a,VDivider:I.a,VFlex:m.a,VIcon:$.a,VLayout:f.a});var M={props:{projects:Array},computed:{verticalSpace:function(){return this.$vuetify.breakpoint.xsOnly?"my-3":"my-5"}}},N=(r(269),Object(l.a)(M,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",t._l(t.projects,function(e){return r("v-flex",{key:e.title,staticClass:"ma-0 pa-0",attrs:{xs11:"",sm10:"",md5:""}},[r("v-card",{class:t.verticalSpace,attrs:{elevation:"10",color:"grey lighten-4"}},[r("v-img",{attrs:{src:e.image}}),r("v-divider"),r("v-card-text",{staticClass:"font-weight-light ma-0 pb-0",class:{headline:t.$breakpoint.is("smAndDown"),"display-1":t.$breakpoint.is("mdAndUp")}},[r("p",{staticClass:"text-xs-left font-weight-light"},[t._v(t._s(e.title))])]),r("v-divider"),r("v-card-text",{staticClass:"py-1"},[e.description?r("p",{staticClass:"title font-weight-light"},[r("i",[t._v(t._s(e.description))])]):t._e(),r("ul",{staticClass:"my-2"},t._l(e.bullets,function(e,n){return r("li",{key:n,staticClass:"subheading font-weight-light my-1"},[t._v(t._s(e))])}),0),r("p",{staticClass:"my-1 subheading font-weight-light"},[t._v("Link: "),r("a",{staticClass:"blue--text text-nodec",attrs:{href:e.link}},[t._v(t._s(e.link))])]),e.code?r("p",{staticClass:"my-1 subheading font-weight-light"},[t._v("Code: "),r("a",{staticClass:"blue--text text-nodec",attrs:{href:e.code}},[t._v(t._s(e.code))])]):t._e()]),r("v-divider"),r("v-card-text",{staticClass:"pb-1"},[r("p",{staticClass:"title"},[t._v("Tech Stack: "),t._l(e.tools,function(n,l){return r("span",{key:n,staticClass:"font-weight-light"},[t._v(t._s(n)),l!=Object.keys(e.tools).length-1?r("span",[t._v(",\n")]):t._e()])})],2)])],1)],1)}),1)},[],!1,null,"1476e2bb",null)),z=N.exports;c()(N,{VCard:d.a,VCardText:v.a,VDivider:I.a,VFlex:m.a,VImg:h.a});var H={props:{about:Object}},R=(r(270),Object(l.a)(H,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",[r("v-flex",{staticClass:"ma-0",attrs:{xs11:"",sm10:"",md8:"",lg7:"",grow:""}},[r("v-card",{staticClass:"my-5",attrs:{elevation:"10",color:"grey lighten-4"}},[r("v-card-text",{staticClass:"body-2"},[r("p",{staticClass:"blockquote left-border font-weight-light",class:{headline:t.$breakpoint.is("smAndDown"),"display-1":t.$breakpoint.is("mdAndUp")}},[t._v(t._s(t.about.quote))]),t._l(t.about.description,function(e){return r("p",{staticClass:"font-weight-light",class:{title:t.$breakpoint.is("smAndDown"),headline:t.$breakpoint.is("mdAndUp")},domProps:{innerHTML:t._s(e)}})}),r("p",{staticClass:"title"},[t._v("Location: "),r("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.about.location))])]),r("p",{staticClass:"title"},[t._v("Read my code: "),r("a",{staticClass:"no-dec font-weight-light blue--text",attrs:{href:t.about.github,target:"_blank"}},[t._v(t._s(t.about.github))])]),r("v-divider",{staticClass:"my-4"}),r("p",{staticClass:"headline"},[t._v("What I bring to the table:")]),r("ul",{staticClass:"title font-weight-light"},t._l(t.about.whatIBring,function(e,n){return r("li",{key:n,staticClass:"my-3"},[r("span",{domProps:{innerHTML:t._s(e)}})])}),0)],2)],1)],1)],1)},[],!1,null,"3d98d0a9",null)),B=R.exports;c()(R,{VCard:d.a,VCardText:v.a,VDivider:I.a,VFlex:m.a});var J={props:{education:Array},computed:{verticalSpace:function(){return this.$vuetify.breakpoint.xsOnly?"my-3":"my-5"}}},K=Object(l.a)(J,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",t._l(t.education,function(e){return r("v-flex",{key:e.degree,staticClass:"py-0",attrs:{xs11:"",sm8:"",md5:"",lg4:"",shrink:""}},[r("v-card",{class:t.verticalSpace,attrs:{elevation:"10"}},[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{staticClass:"pa-4",attrs:{xs12:""}},[r("v-img",{attrs:{width:"100%",src:"monash.svg",position:"center center"}})],1)],1),r("v-divider"),r("v-card-text",{staticClass:"font-weight-thin",class:{headline:t.$breakpoint.is("smAndDown"),"display-1":t.$breakpoint.is("mdAndUp")}},[t._v(t._s(e.degree))]),r("v-divider"),r("v-card-text",{staticClass:"subheading pb-1 pt-3"},[t._v(t._s(e.institution)+" | "+t._s(e.year))]),r("v-card-text",{staticClass:"subheading py-2"},[r("span",{domProps:{innerHTML:t._s(e.notes)}})])],1)],1)}),1)},[],!1,null,null,null),G=K.exports;c()(K,{VCard:d.a,VCardText:v.a,VDivider:I.a,VFlex:m.a,VImg:h.a,VLayout:f.a});var W={props:{experience:Array},computed:{verticalSpace:function(){return this.$vuetify.breakpoint.xsOnly?"my-3":"my-5"}}},Q=(r(271),Object(l.a)(W,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fragment",t._l(t.experience,function(e){return r("v-flex",{key:e.title,staticClass:"ma-0 pa-0",attrs:{xs11:"",sm10:"",md8:"",lg7:"",grow:""}},[r("v-card",{class:t.verticalSpace,attrs:{elevation:"10",color:"grey lighten-4"}},[r("v-img",{attrs:{src:e.image}}),r("v-divider"),r("v-layout",{staticClass:"mx-1 my-2 pa-0",attrs:{wrap:"","align-baseline":""}},[r("v-flex",{staticClass:"ma-0 text-xs-left font-weight-light",class:{headline:t.$breakpoint.is("smAndDown"),"display-1":t.$breakpoint.is("mdAndUp")},attrs:{xs12:"",md6:""}},[t._v(t._s(e.title))]),r("v-flex",{staticClass:"ma-0 text-md-right",class:{subheading:t.$breakpoint.is("smAndDown"),headline:t.$breakpoint.is("mdAndUp")},attrs:{xs12:"",md6:""}},[t._v(t._s(e.role))])],1),r("v-divider"),r("v-card-text",[r("p",{staticClass:"body-2 font-weight-light"},[t._v(t._s(e.time)+" | "+t._s(e.location))]),r("p",{staticClass:"title font-weight-light"},[r("i",[t._v(t._s(e.description))])]),r("ul",t._l(e.bullets,function(e,n){return r("li",{key:n,staticClass:"subheading font-weight-light my-1"},[t._v(t._s(e))])}),0),r("v-layout",{staticClass:"mt-3",attrs:{wrap:"","align-baseline":""}},[r("v-flex",{staticClass:"title font-weight-light",attrs:{xs12:"",md6:""}},[t._v("Link: "),r("a",{staticClass:"blue--text text-nodec",attrs:{href:e.link}},[t._v(t._s(e.link))])]),e.code?r("v-flex",{staticClass:"title font-weight-light",attrs:{xs12:"",md6:""}},[t._v("Code: "),r("a",{staticClass:"blue--text text-nodec",attrs:{href:e.code}},[t._v(t._s(e.code))])]):t._e()],1)],1),r("v-divider"),r("v-card-text",{staticClass:"pb-2"},[r("p",{staticClass:"title"},[t._v("Tech Stack: "),t._l(e.tools,function(n,l){return r("span",{key:n,staticClass:"font-weight-light"},[t._v(t._s(n)),l!=Object.keys(e.tools).length-1?r("span",[t._v(",\n")]):t._e()])})],2)])],1)],1)}),1)},[],!1,null,"79eee210",null)),X=Q.exports;c()(Q,{VCard:d.a,VCardText:v.a,VDivider:I.a,VFlex:m.a,VImg:h.a,VLayout:f.a});var Y={computed:{imgHeight:function(){return this.$vuetify.breakpoint.mdAndDown?"calc(100vh - 56px)":"100vh"}}},Z=Object(l.a)(Y,function(){var t=this.$createElement,e=this._self._c||t;return e("v-img",{staticClass:"pa-0 ma-0",attrs:{src:"distant_forest.jpg",height:this.imgHeight,width:"100%",position:"bottom center"}},[e("v-card-text",{staticClass:"standout white--text pa-4 font-weight-thin",class:{"display-1":this.$breakpoint.is("smAndDown"),"display-3":this.$breakpoint.is("mdAndUp")}},[this._v("Think."),e("br"),this._v("Code."),e("br"),this._v("Test."),e("br"),this._v("Repeat.")])],1)},[],!1,null,null,null),tt=Z.exports;c()(Z,{VCardText:v.a,VImg:h.a});var content=r(113),at=r.n(content),et={components:{About:B,Contact:E,Banner:D,Skills:P,Projects:z,Experience:X,Profile:x,Education:G,CoverPhoto:tt},data:function(){return{content:at.a.attributes}}},st=(r(272),Object(l.a)(et,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{column:"","justify-start":"","fill-height":""}},[e("v-layout",{staticClass:"pa-0",attrs:{id:"top"}},[e("coverPhoto")],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"",id:"About"}},[e("banner",{attrs:{color:"rgba(0, 50, 255, 0.4)",text:"About"}}),e("about",{attrs:{about:this.content.about}})],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"",id:"Experience"}},[e("banner",{attrs:{color:"rgba(255, 20, 20, 0.4)",text:"Experience"}}),e("experience",{attrs:{experience:this.content.experience}})],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"",id:"Projects"}},[e("banner",{attrs:{color:"rgba(255, 225, 0, 0.4)",text:"Projects"}}),e("projects",{attrs:{projects:this.content.portfolio}})],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"",id:"Skills"}},[e("banner",{attrs:{color:"rgba(0, 255, 0, 0.4)",text:"Skills"}}),e("skills",{attrs:{skills:this.content.skills}})],1),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"",id:"Education"}},[e("banner",{attrs:{color:"rgba(230, 0, 255, 0.4)",text:"Education"}}),e("education",{attrs:{education:this.content.education}})],1),e("v-layout",{attrs:{row:"",wrap:"","justify-center":"",id:"Contact"}},[e("banner",{attrs:{color:"rgba(60, 40, 30, 0.4)",text:"Contact"}}),e("contact")],1)],1)},[],!1,null,"069198cb",null));e.default=st.exports;c()(st,{VLayout:f.a})}}]);