(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("54c2027a",content,!0,{sourceMap:!1})},200:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("77fcbca8",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";var o=n(199);n.n(o).a},209:function(t,e,n){(e=n(31)(!1)).push([t.i,".scrollText-container[data-v-63231556]{margin-top:50px;position:relative;height:50px}.fade-enter-active[data-v-63231556],.fade-leave-active[data-v-63231556]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-63231556],.fade-leave-to[data-v-63231556]{opacity:0}.scrollText span[data-v-63231556]{font-size:2rem}.scrollText[data-v-63231556]{font-size:1.5rem;text-transform:uppercase;font-weight:600;position:absolute;top:0;left:0;right:0;bottom:0}",""]),t.exports=e},210:function(t,e,n){"use strict";var o=n(200);n.n(o).a},211:function(t,e,n){(e=n(31)(!1)).push([t.i,".jumbotron-custom[data-v-733fd51f]{height:auto;position:relative}.action-container[data-v-733fd51f]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.action-container a[data-v-733fd51f]{margin-top:5px}.description[data-v-733fd51f]{margin-top:50px}.jumbotron-h1[data-v-733fd51f]{font-size:2.5rem}.jumbotron-container[data-v-733fd51f]{width:90%;margin:30px auto;z-index:5;text-align:center}.jumbotron-container .description[data-v-733fd51f]{font-size:1.2rem}.jumbotron-image[data-v-733fd51f]{position:absolute;overflow:hidden;top:0;left:0;height:100%;-o-object-fit:cover;object-fit:cover;z-index:-2}.jumbotron-custom[data-v-733fd51f],.jumbotron-image[data-v-733fd51f]{width:100%;display:-webkit-box;display:flex}.jumbotron-custom[data-v-733fd51f]{height:100vh;-webkit-box-align:center;align-items:center;justify-content:space-around}.jumbotron[data-v-733fd51f]{height:200px}.video-container[data-v-733fd51f]{position:absolute;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:-2;display:-webkit-box;display:flex}.image-color-overlay[data-v-733fd51f],.video-color-overlay[data-v-733fd51f]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:hsla(0,0%,40%,.8)}.arrows[data-v-733fd51f]{width:60px;height:72px;position:absolute;left:50%;margin-left:-30px;bottom:20px}.arrows path[data-v-733fd51f]{stroke:var(--secondary-color);fill:transparent;stroke-width:1px;animation:arrow-data-v-733fd51f 2s infinite;-webkit-animation:arrow-data-v-733fd51f 2s infinite}@keyframes arrow-data-v-733fd51f{0%{opacity:0}40%{opacity:1}80%{opacity:0}to{opacity:0}}@-webkit-keyframes arrow-data-v-733fd51f{0%{opacity:0}40%{opacity:1}80%{opacity:0}to{opacity:0}}.arrows path.a1[data-v-733fd51f]{animation-delay:-1s;-webkit-animation-delay:-1s}.arrows path.a2[data-v-733fd51f]{animation-delay:-.5s;-webkit-animation-delay:-.5s}.arrows path.a3[data-v-733fd51f]{animation-delay:0s;-webkit-animation-delay:0s}@media (min-width:736px){.jumbotron-h1[data-v-733fd51f]{font-size:4rem}.jumbotron-container[data-v-733fd51f]{width:80%;margin:30px auto;z-index:5}.action-container[data-v-733fd51f]{justify-content:space-around}}",""]),t.exports=e},220:function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("7611f2e9",content,!0,{sourceMap:!1})},221:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("4f599ed4",content,!0,{sourceMap:!1})},222:function(t,e,n){var content=n(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("2057c1ac",content,!0,{sourceMap:!1})},223:function(t,e,n){var content=n(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("19f5eab5",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("4fdba25d",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("6759f5ab",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";var o=n(100),r=(n(9),{props:{texts:{type:Array,required:!0},interval:{type:Number,default:4e3}},data:function(){return{arrayPosition:0}},created:function(){var t=this;setInterval((function(){t.changeText()}),this.interval)},methods:{changeText:function(){return this.arrayPosition++,this.texts.length===this.arrayPosition&&(this.arrayPosition=0),this.texts[this.arrayPosition]}}}),l=(n(208),n(22)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollText-container"},[n("transition",{attrs:{name:"fade",duration:500}},t._l(t.texts,(function(text,e){return e===t.arrayPosition?n("span",{key:text,staticClass:"scrollText"},[n("span",{staticClass:"text-color-secondary"},[t._v("- ")]),t._v(t._s(text)),n("span",{staticClass:"text-color-secondary"},[t._v(" -")])]):t._e()})),0)],1)}),[],!1,null,"63231556",null).exports,d={props:{showVideo:{type:Boolean,default:!1},showVideoOverlay:{type:Boolean,default:!0},showImage:{type:Boolean,default:!1},bgImage:{type:String},bgColor:{type:String},heightClass:{type:String},overLayColor:{type:String},showArrow:{type:Boolean,default:!1}},data:function(){return{title:"Dein persönlicher Finanzkompass",subtitles:["Einfach","Zeitsparend","Auf einer Seite DIN A4"]}},components:{pbtn:o.a,ScrollText:c}},m=(n(210),Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"jumbotron-custom",class:t.heightClass,style:{backgroundColor:t.bgColor}},[t.showVideo?n("div",{staticClass:"video-container"},[t.showVideoOverlay?n("div",{staticClass:"video-color-overlay",style:{backgroundColor:t.overLayColor}}):t._e(),t._t("video",[n("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}})])],2):t._e(),t.showImage?n("div",{staticClass:"image-container"},[n("div",{staticClass:"image-color-overlay"}),t._t("image",[n("img",{staticClass:"jumbotron-image",attrs:{src:"img/"+t.bgImage}})])],2):t._e(),n("div",{staticClass:"jumbotron-container"},[t._t("jumbotron-content",[n("h1",{staticClass:"jumbotron-h1"},[t._v(t._s(t.title))]),n("ScrollText",{attrs:{texts:t.subtitles}}),n("p",{staticClass:"description"},[t._v("Endlich eine einfache und zeitsparende Planung der Finanzen haben und damit das gute Gefühl, gegenüber den Ereignissen des Lebens finanziell gewappnet zu sein.")]),t._t("jumbotron-action",[n("div",{staticClass:"row action-container"},[n("pbtn",{staticClass:"col-12 col-md-5 mt-5",attrs:{to:"appointment",text:"Kostenlosen Termin vereinbaren"}}),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"col-12 col-md-5 mt-5 btn-transparent"},[t._v("Weitere Info's im kurzen Video")])],1)])])],2),t.showArrow?n("svg",{staticClass:"arrows"},[n("path",{staticClass:"a1",attrs:{d:"M0 0 L30 32 L60 0"}}),n("path",{staticClass:"a2",attrs:{d:"M0 20 L30 52 L60 20"}}),n("path",{staticClass:"a3",attrs:{d:"M0 40 L30 72 L60 40"}})]):t._e()])])}),[],!1,null,"733fd51f",null));e.a=m.exports},271:function(t,e,n){"use strict";var o=n(220);n.n(o).a},272:function(t,e,n){(e=n(31)(!1)).push([t.i,".page-container[data-v-7d93a34d]{width:100%;height:250px;background-color:var(--secondary-color)}.page-content[data-v-7d93a34d]{display:-webkit-box;display:flex;height:100%;width:90%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center;margin:0 auto}.page-content a[data-v-7d93a34d]{display:block;margin:0 auto}@media (min-width:736px){.page-content[data-v-7d93a34d]{width:80%}}",""]),t.exports=e},274:function(t,e,n){"use strict";var o=n(221);n.n(o).a},275:function(t,e,n){(e=n(31)(!1)).push([t.i,".parallax-container[data-v-f13d1768]{position:relative;overflow:hidden}.parallax-title[data-v-f13d1768]{top:30%;left:0;right:0;padding:20px;background:rgba(0,0,0,.6);color:#fff}.parallax-content[data-v-f13d1768],.parallax-title[data-v-f13d1768]{position:absolute;text-align:center}.parallax-content[data-v-f13d1768]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.parallax-container img[data-v-f13d1768]{-webkit-transform:scale(3);transform:scale(3)}",""]),t.exports=e},276:function(t){t.exports=JSON.parse('[{"name":"Axel Beta - Einführung","url":"https://player.vimeo.com/video/375219154"},{"name":"Geld leichtgemacht","url":"https://player.vimeo.com/video/375219594"},{"name":"Freiheit macht Spass","url":"https://player.vimeo.com/video/375219154"},{"name":"Freiheit macht Spass","url":"https://player.vimeo.com/video/375219154"}]')},277:function(t,e,n){"use strict";var o=n(222);n.n(o).a},278:function(t,e,n){(e=n(31)(!1)).push([t.i,".vimeo-video-container[data-v-37533350]{position:static;margin:0 auto;display:-webkit-box;display:flex}.vimeo-video-container h2[data-v-37533350]{text-align:center}.video[data-v-37533350]{display:block;padding:20px;min-width:320px;width:100%}.videoWrapper[data-v-37533350]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.videoWrapper iframe[data-v-37533350]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},279:function(t,e,n){"use strict";var o=n(223);n.n(o).a},280:function(t,e,n){(e=n(31)(!1)).push([t.i,".modal-title{color:#000}.modal-dialog{max-width:700px!important}",""]),t.exports=e},281:function(t,e,n){"use strict";var o=n(224);n.n(o).a},282:function(t,e,n){(e=n(31)(!1)).push([t.i,".videoWrapper[data-v-c7b8cc22]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.videoWrapper h1[data-v-c7b8cc22]{text-align:center!important}.videoWrapper iframe[data-v-c7b8cc22]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},283:function(t,e,n){"use strict";var o=n(225);n.n(o).a},284:function(t,e,n){(e=n(31)(!1)).push([t.i,"jumbotron{height:auto!important}.ref-image{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;width:100%;position:relative}.ref-image img{max-width:150px;max-height:150px;border-radius:100px;border:4px solid var(--primary-color)}.custom-jumbrotron-0 .jumbotron-custom{padding-top:200px}.custom-jumbrotron-1 h1,.custom-jumbrotron-1 h2,.custom-jumbrotron-1 p,.custom-jumbrotron-2 h1,.custom-jumbrotron-2 h2,.custom-jumbrotron-2 p{color:var(--write-color);margin:50px 0;text-align:center}.custom-jumbrotron-2,.custom-jumbrotron-3 *,.custom-jumbrotron-4,.custom-jumbrotron-5,.custom-jumbrotron-6{text-align:center}.custom-jumbrotron-6 p .text{color:#000!important;font-size:1.2rem;text-align:center}.custom-jumbrotron-5 p{font-size:1.2rem}.custom-jumbrotron-6 p{color:#000!important}.custom-jumbrotron-6 .text-wrapper{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.custom-jumbrotron-6 .right{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.right p{-webkit-box-pack:end;justify-content:flex-end}.ref-container{margin:20px 0}.custom-jumbrotron-6 h2{color:var(--primary-color);font-weight:600}.custom-jumbrotron-6 .references{text-align:left!important}.custom-jumbrotron-6 .headline{margin-bottom:50px}.custom-jumbrotron-6 .people{color:var(--primary-color);font-weight:600;font-size:1.2rem}.custom-jumbrotron-5-img{display:block;margin:0 auto;border-radius:500px;max-width:400px;width:100%;height:auto;border:4px solid var(--primary-color)}.stepper-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;justify-items:center;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 1s ease;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease,-webkit-transform 1s ease}.stepper,.stepper-container{display:-webkit-box;display:flex}.stepper{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background-color:rgba(15,54,97,.8);height:150px;width:150px;border-radius:100px;margin:15px auto}.stepper-container:hover{-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:-webkit-transform 1s ease;transition:-webkit-transform 1s ease;transition:transform 1s ease;transition:transform 1s ease,-webkit-transform 1s ease}@media (min-width:736px){.custom-jumbrotron-1{padding:30px}}@media (min-width:767px){.custom-jumbrotron-0 .jumbotron-custom{padding-top:0}.custom-jumbrotron-6 p .text{color:#000!important;font-size:1.2rem;text-align:left}.custom-jumbrotron-6 .right .text{text-align:right}}@media (min-width:1024px){.stepper{height:200px;width:200px}}",""]),t.exports=e},285:function(t,e,n){"use strict";n.r(e);var o=n(226),r=n(100),l={components:{pbtn:r.a}},c=(n(271),n(22)),d=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-container"},[e("div",{staticClass:"page-content"},[e("div",[this._t("page-content",[e("h2",[this._v("„Im Einfachen liegt das Geniale“")]),e("p",[this._v("Adrian Newey")])])],2)])])}),[],!1,null,"7d93a34d",null).exports,m=n(273),h={props:["containerHeight"],components:{customPara:n.n(m).a},data:function(){return{yPosition:0}},methods:{handleScroll:function(){var t=this.getTopPos();t<400&&document&&document.getElementsByClassName("parallax-img")[0].setAttribute("style","transform: translate3d(0px, ".concat(-.5*t,"px, 0px);"))},getTopPos:function(){return this.$refs.parallaxContainer.getBoundingClientRect().top},getStyle:function(){return{height:this.containerHeight+"px"}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},f=(n(274),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"parallaxContainer",staticClass:"parallax-container",style:this.getStyle()},[e("div",{staticClass:"parallax-content"},[this._t("parallax-content",[e("h1",[this._v("Happy Pony")])])],2),e("custom-para",{attrs:{containerClass:"parallax-img"}},[e("img",{attrs:{src:"/img/bg_compass.webp"}})])],1)])}),[],!1,null,"f13d1768",null).exports),v=n(276),x={data:function(){return{videos:v}}},w=(n(277),Object(c.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vimeo-video-container row",attrs:{id:"videos"}},t._l(t.videos,(function(video){return n("div",{staticClass:"video col"},[n("h3",[t._v(t._s(video.name))]),n("div",{staticClass:"videoWrapper"},[n("iframe",{attrs:{src:video.url+"?title=0&byline=0&portrait=0&sidedock=0",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])})),0)}),[],!1,null,"37533350",null).exports),y={props:["modalid","title"]},C=(n(279),Object(c.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-modal",{attrs:{title:this.title,id:this.modalid,"hide-footer":""}},[this._t("modal-content",[e("p",{staticClass:"my-4"},[this._v("Hello from modal!")])])],2)],1)}),[],!1,null,null,null).exports),k={props:["url","description"]},_=(n(281),Object(c.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"videoWrapper"},[e("iframe",{attrs:{src:this.url+"?title=0&byline=0&portrait=0&sidedock=0",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),""!==this.description?e("p",[this._v(this._s(this.description))]):this._e()])])}),[],!1,null,"c7b8cc22",null).exports),j={head:function(){return{title:"Finanzen richtig einfach"}},components:{Jumbotron:o.a,PageStatement:d,pbtn:r.a,Parallax:f,VideoContainer:w,Modal:C,VideoIFrame:_}},z=(n(283),Object(c.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{attrs:{modalid:"modal-1",title:"Kurzvorstellung-Mehrwert"},scopedSlots:t._u([{key:"modal-content",fn:function(){return[n("VideoIFrame",{attrs:{url:"https://player.vimeo.com/video/375219154"}})]},proxy:!0}])}),n("Modal",{attrs:{modalid:"modal-2",title:"Fehlende Finanzplanung-Gründe und Lösungen"},scopedSlots:t._u([{key:"modal-content",fn:function(){return[n("VideoIFrame",{attrs:{url:"https://player.vimeo.com/video/375219594"}})]},proxy:!0}])}),n("jumbotron",{staticClass:"custom-jumbrotron-0",attrs:{showImage:!0,bgImage:"bg_compass.webp",heightClass:"height-modification",showArrow:!0},scopedSlots:t._u([{key:"jumbotron-action",fn:function(){},proxy:!0}])}),n("page-statement"),n("div",{staticClass:"position-relative"},[n("jumbotron",{attrs:{showImage:!0,bgImage:"schulsystem.webp",overLayColor:"rgba(15, 54, 97, 0.8)",heightClass:"height-modification"},scopedSlots:t._u([{key:"jumbotron-content",fn:function(){return[n("div",{staticClass:"custom-jumbrotron-1"},[n("h1",[t._v("Kennen du das Problem, dass einem das Geld durch die Finger rinnt und es bei plötzlichen Notfällen eng wird auf dem Konto?")]),n("p",{staticClass:"description"},[t._v("Im deutschen Schulsystem steht viel auf dem Lehrplan. Finanzielle Bildung und Erfolgswissen i.d.R. Leider nicht. Deshalb ist das Thema Finanzen für viele Menschen häufig nur eins, nämlich ätzend.")]),n("p",{staticClass:"description"},[t._v("Es scheint so, als ob man eine Rechnung bezahlt und die nächste Ausgabe bereits um die Ecke schielt.")]),n("h2",{staticClass:"mt-1"},[t._v("Jetzt gibt es den persönlichen Finanzkompass. Einmal erstellt, dauerhaft Zeit und Geld gespart.")]),n("div",{staticClass:"row action-container"},[n("pbtn",{staticClass:"col-12 col-md-5 mt-5",attrs:{to:"appointment",text:"Kostenlosen Termin vereinbaren"}}),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}],staticClass:"col-12 col-md-5 btn-transparent mt-5"},[t._v("Mehr erfahren")])],1)])]},proxy:!0}])})],1),n("page-statement",{scopedSlots:t._u([{key:"page-content",fn:function(){return[n("h2",[t._v("„Es gibt nur eins, was auf Dauer teurer ist als Bildung: Keine Bildung“")]),n("p",[t._v("John F. Kennedy")])]},proxy:!0}])}),n("div",{staticClass:"position-relative"},[n("jumbotron",{attrs:{showImage:!0,bgImage:"cool-plan.webp",overLayColor:"rgba(15, 54, 97, 0.8)",heightClass:"height-modification"},scopedSlots:t._u([{key:"jumbotron-content",fn:function(){return[n("div",{staticClass:"custom-jumbrotron-2"},[n("h1",[t._v("„Cool, endlich hab ich einen Plan“")]),n("p",{staticClass:"description"},[t._v("Das Besondere am Finanzkompass ist, dass er die verschiedensten Lebenssituationen berücksichtigt, aufeinander abstimmt und am Ende übersichtlich und klar auf einer Seite DIN A4 komprimiert ist.")]),n("p",{staticClass:"description"},[t._v("Der Vorteil: Bei finanziellen Entscheidungen nur einen Blick auf seinen Finanzkompass werfen und sofort im Bilde sein, ob der Kurs stimmt.")]),n("pbtn",{staticClass:"m-auto",attrs:{to:"appointment",text:"Kostenlosen Termin vereinbaren"}})],1)]},proxy:!0}])})],1),n("page-statement",{scopedSlots:t._u([{key:"page-content",fn:function(){return[n("h2",[t._v("„Nicht zu planen heißt den Misserfolg zu planen“")]),n("p",[t._v("Brian Tracy")])]},proxy:!0}])}),n("div",{staticClass:"position-relative"},[n("jumbotron",{attrs:{showImage:!0,bgImage:"geldplanze.webp",heightClass:"height-lg-modification"},scopedSlots:t._u([{key:"jumbotron-content",fn:function(){return[n("div",{staticClass:"custom-jumbrotron-3"},[n("h1",{staticClass:"mb-lg-5"},[t._v("3 Einfache Schritte zum Erfolg")]),n("div",{staticClass:"row justify-content-between"},[n("div",{staticClass:"col-12 col-lg-3 stepper-container"},[n("div",{staticClass:"stepper"},[t._v("Schritt 1")]),n("span",[t._v("Wir schauen uns gemeinsam an, welche Ziele und Wünsche du erreichen willst und wie deine aktuelle, finanzielle Situation ist.")])]),n("div",{staticClass:"col-12 col-lg-3 stepper-container"},[n("div",{staticClass:"stepper"},[t._v("Schritt 2")]),n("span",[t._v("Wir recherchieren und prüfen unternehmensunabhängig und branchenübergreifend aus mehr als 300 ausgewählten Unternehmen.")])]),n("div",{staticClass:"col-12 col-lg-3 stepper-container"},[n("div",{staticClass:"stepper"},[t._v("Schritt 3")]),n("span",[t._v("Du erhälst einen konkreten Plan, wie du Schritt für Schritt deine Ziele und Wünsche erreichen und mögliche Hindernisse umgehenkannst.")])])]),n("h2",{staticClass:"mt-md-5"},[t._v("Auch danach sind wir weiterhin begleitend für dich da")]),n("pbtn",{staticClass:"mt-5 mb-md-5 mb-xxl-0 mr-auto ml-auto",attrs:{to:"appointment",text:"Kostenlosen Termin vereinbaren"}})],1)]},proxy:!0}])})],1),n("div",{staticClass:"position-relative"},[n("jumbotron",{attrs:{showImage:!1,bgImage:"cool-plan.webp",overLayColor:"rgba(15, 54, 97, 0.8)",heightClass:"height-modification"},scopedSlots:t._u([{key:"jumbotron-content",fn:function(){return[n("div",{staticClass:"custom-jumbrotron-6"},[n("h2",{staticClass:"headline"},[t._v("Erfolgreich auf Kurs")]),n("p",{staticClass:"description mt-0"},[t._v("Inzwischen bin ich seit 26 Jahren als Berater aktiv und betreue meine Kunden langfristig und nachhaltig. Bei vielen auch schon die Kinder in der 2. Generation.")]),n("div",{staticClass:"references"},[n("div",{staticClass:"row ref-container"},[n("div",{staticClass:"col-12 col-md-2 ref-image"},[n("img",{attrs:{src:"img/reference/jules_lamy.webp",alt:"test"}})]),n("p",{staticClass:"col-12 col-md-10 pl-md-4 text-wrapper"},[n("span",{staticClass:"text"},[t._v("„Ich schätze deine Expertise“ -"),n("span",{staticClass:"people"},[t._v(" Jules Lamy, 35J, Anlagenmechaniker")])])])]),n("div",{staticClass:"row ref-container right"},[n("div",{staticClass:"col-12 col-md-2 ref-image"},[n("img",{attrs:{src:"img/reference/jens_wihsinger.webp",alt:"test"}})]),n("p",{staticClass:"col-12 col-md-10 pl-md-4 text-wrapper"},[n("span",{staticClass:"text"},[t._v("„Top Betreuer, Pech für den, der ihn nicht hat“ -"),n("span",{staticClass:"people"},[t._v(" Jens Wihsinger, 46J, leitender Vertriebsmitarbeiter")])])])]),n("div",{staticClass:"row ref-container"},[n("div",{staticClass:"col-12 col-md-2 ref-image"},[n("img",{attrs:{src:"img/reference/florian_danger.webp",alt:"test"}})]),n("p",{staticClass:"col-12 col-md-10 pl-md-4 text-wrapper"},[n("span",{staticClass:"text"},[t._v("„Schon unser Erstgespräch war total klasse und hat mir die Augen geöffnet“ -"),n("span",{staticClass:"people"},[t._v(" Florian Danger, 22J Fluggerätemechaniker")])])])]),n("div",{staticClass:"row ref-container right"},[n("div",{staticClass:"col-12 col-md-2 ref-image"},[n("img",{attrs:{src:"img/reference/gottsleben.webp",alt:"test"}})]),n("p",{staticClass:"col-12 col-md-10 pl-md-4 text-wrapper"},[n("span",{staticClass:"text"},[t._v("„Sehr ehrliche, freundliche und transparente Beratung“ -"),n("span",{staticClass:"people"},[t._v(" Familie Gottsleben")])])])])]),n("pbtn",{staticClass:"mt-3 mr-auto ml-auto",attrs:{to:"/references",text:"Zu den Referenzen"}})],1)]},proxy:!0}])})],1),n("div",{staticClass:"position-relative"},[n("jumbotron",{attrs:{showImage:!0,bgImage:"segelboot.webp",heightClass:"height-modification"},scopedSlots:t._u([{key:"jumbotron-content",fn:function(){return[n("div",{staticClass:"custom-jumbrotron-4"},[n("h1",[t._v("Wenn du alles lässt wie bisher und nichts änderst, rinnt dir weiterhin das Geld durch die Finger.")]),n("p",{staticClass:"description"},[t._v("Die fehlende Finanzplanung nötigt dir in der Konsequenz Entscheidungen ab, deren Folge du lieber nicht gehabt hättest. Der Zufall trifft dich mit voller Wucht – und zwar dann, wenn es gerade eh nicht passt.")]),n("h2",{staticClass:"mt-5"},[t._v("Motto der Segler:")]),n("p",{staticClass:"description"},[t._v("„Nicht der Wind bestimmt wohin ich segle, sondern wie ich die Segel setze.“")]),n("p",{staticClass:"description"},[t._v("Nimm deine Zukunft in deine Hände!")]),n("p",{staticClass:"description"},[t._v("Du bestimmst, wohin die Reise geht.")]),n("pbtn",{staticClass:"mt-5 mr-auto ml-auto",attrs:{to:"appointment",text:"Meinen Finanzkompass erstellen"}})],1)]},proxy:!0}])})],1),n("page-statement",{scopedSlots:t._u([{key:"page-content",fn:function(){return[n("h2",[t._v("„Jede große Reise beginnt mit einem kleinen Schritt“")]),n("p",[t._v("Konfuzis")])]},proxy:!0}])}),n("div",{staticClass:"position-relative"},[n("jumbotron",{attrs:{showImage:!0,bgImage:"segelboot.webp",heightClass:"height-modification"},scopedSlots:t._u([{key:"jumbotron-content",fn:function(){return[n("div",{staticClass:"custom-jumbrotron-5"},[n("img",{staticClass:"custom-jumbrotron-5-img",attrs:{src:"img/axel-beta.webp"}}),n("h1",{staticClass:"mt-5"},[t._v("Axel Beta")]),n("p",[t._v("Auch ich hatte keine finanzielle Bildung in der Schule, habe mir durch diverse Nebenjobs Geld hinzuverdient und musste zeitweise mit sehr wenig Geld auskommen. Frustriert davon entschied ich mich, diesen Zustand zu ändern und mir das fehlende Finanzwissen anzueignen. Heute lebe ich seit 23 Jahren nach einem Finanzkompass.\nPlötzliche  Autoreparaturen oder andere Notfälle werfen mich nicht aus der Bahn. Ich kann entspannt Urlaub machen, meine Freizeit aktiv gestalten und auch große Projekte umsetzen.")]),n("pbtn",{staticClass:"mt-5 mr-auto ml-auto",attrs:{to:"appointment",text:"Jetzt gratis starten"}})],1)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null));e.default=z.exports}}]);