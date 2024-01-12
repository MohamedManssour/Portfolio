(function(){"use strict";var e={410:function(e,t,r){var a=r(963),o=r(252),n=r(577);const i=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function l(e,t,r,l,s,d){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),u=(0,o.up)("back-to-top"),p=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([s.appTheme,"pt-0.5"])},[(0,o.Wm)(c,{onThemeChanged:d.handleThemeChange,theme:s.appTheme},null,8,["onThemeChanged","theme"]),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:s.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(p)],2)}var s=r(508),d=r.n(s),c=r.p+"assets/img/Manssour-logos_transparent.5ad8eaca.png",m=r.p+"assets/img/Manssour-logos_white.aa8671a0.png";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:c,class:"w-36",alt:"Dark Logo"},f={key:1,src:m,class:"w-36",alt:"Light Logo"},b={class:"sm:hidden"},y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},x={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},k={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},w={class:"hidden md:block"};function j(e,t,r,a,n,i){const l=(0,o.up)("router-link"),s=(0,o.up)("theme-switcher"),d=(0,o.up)("AppHeaderLinks"),c=(0,o.up)("Button"),m=(0,o.up)("HireMeModal");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",p,[(0,o._)("div",g,[(0,o._)("div",null,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>["light"===n.theme?((0,o.wg)(),(0,o.iD)("img",h)):((0,o.wg)(),(0,o.iD)("img",f))])),_:1})]),(0,o.Wm)(s,{theme:n.theme,onThemeChanged:i.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",b,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",y,[n.isOpen?((0,o.wg)(),(0,o.iD)("path",x)):(0,o.kq)("",!0),n.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",v))]))])])]),(0,o.Wm)(d,{showModal:i.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"]),(0,o._)("div",k,[(0,o._)("div",w,[(0,o.Wm)(c,{title:"Hire Me",class:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=e=>i.showModal()),"aria-label":"Hire Me Button"})]),(0,o.Wm)(s,{theme:n.theme,onThemeChanged:i.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),(0,o.Wm)(m,{showModal:i.showModal,modal:n.modal,categories:n.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}const _={key:0,"data-feather":"moon"},M={key:1,"data-feather":"sun"};function C(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.toggleTheme&&l.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",_)):((0,o.wg)(),(0,o.iD)("i",M))])}var T={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("theme-changed",e),console.log("Theme changed to:",e),"dark"===e?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}}},D=r(744);const S=(0,D.Z)(T,[["render",C]]);var P=S;const A=e=>((0,o.dD)("data-v-c78ac706"),e=e(),(0,o.Cn)(),e),I={class:"font-general-regular fixed inset-0 z-30"},W={class:"flex flex-col items-center justify-center h-full w-full"},H={class:"modal-wrapper flex items-center z-30"},O={class:"modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},Z={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},B=A((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," What project are you looking for? ",-1))),E=A((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),F=[E],L={class:"modal-body p-5 w-full h-full"},z={class:"max-w-xl m-4 text-left"},U={class:"mt-6 mb-4"},N=A((()=>(0,o._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:"project"},"Project Type",-1))),q={class:"w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"project",name:"project",type:"text",required:"","aria-label":"Project Category"},G=["value"],$={class:"mt-7 pb-4 sm:pb-1"},K={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function R(e,t,r,i,l,s){const d=(0,o.up)("FormInput"),c=(0,o.up)("FormTextarea"),m=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",I,[(0,o.wy)((0,o._)("div",{onClick:t[0]||(t[0]=e=>r.showModal()),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a.F8,r.modal]]),(0,o._)("main",W,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",H,[(0,o._)("div",O,[(0,o._)("div",Z,[B,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=e=>r.showModal())},F)]),(0,o._)("div",L,[(0,o._)("form",z,[(0,o.Wm)(d,{label:"Full Name",inputIdentifier:"name",class:"mb-2"}),(0,o.Wm)(d,{label:"Email",inputIdentifier:"email",inputType:"email"}),(0,o._)("div",U,[N,(0,o._)("select",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.value},(0,n.zw)(e.name),9,G)))),128))])]),(0,o.Wm)(c,{label:"Details",textareaIdentifier:"details"}),(0,o._)("div",$,[(0,o.Wm)(m,{title:"Send Request",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",type:"submit","aria-label":"Submit Request"})])])]),(0,o._)("div",K,[(0,o.Wm)(m,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",onClick:t[2]||(t[2]=e=>r.showModal()),"aria-label":"Close Modal"})])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}var Y=r(135),V=r(492),X=r(411),J={props:["showModal","modal","categories"],components:{Button:Y.Z,FormInput:V.Z,FormTextarea:X.Z},data(){return{}},mounted(){d().replace()},updated(){d().replace()},methods:{}};const Q=(0,D.Z)(J,[["render",R],["__scopeId","data-v-c78ac706"]]);var ee=Q;const te={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function re(e,t,r,a,i,l){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(s,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1}),(0,o.Wm)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[(0,o.Uk)("About Me")])),_:1}),(0,o.Wm)(s,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1}),(0,o._)("div",te,[(0,o._)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var ae={props:["showModal","isOpen"]};const oe=(0,D.Z)(ae,[["render",re]]);var ne=oe,ie={components:{ThemeSwitcher:P,HireMeModal:ee,AppHeaderLinks:ne,Button:Y.Z},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"mobile",name:"Mobile Application"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Branding & Anim"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const le=(0,D.Z)(ie,[["render",j],["__scopeId","data-v-4d5fe5d6"]]);var se=le;const de={class:"container mx-auto"},ce={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},me={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},ue=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow me ",-1),pe={class:"flex gap-4 sm:gap-8"},ge=["href"],he=["data-feather"];function fe(e,t,r,a,n,i){const l=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",ce,[(0,o._)("div",me,[ue,(0,o._)("ul",pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,he)],8,ge)))),128))])]),(0,o.Wm)(l)])])}const be={class:"flex justify-center items-center text-center"},ye={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},xe={href:"https://github.com/MohamedManssour/Portfolio",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"},ve={target:"__blank",class:"font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function ke(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("div",be,[(0,o._)("div",ye,[(0,o.Uk)(" © "+(0,n.zw)(e.copyrightDate)+". ",1),(0,o._)("a",xe,(0,n.zw)(e.projectName),1),(0,o.Uk)(" . by Mohamed Manssour "),(0,o._)("a",ve,(0,n.zw)(),1)])])}var we={data:()=>({copyrightDate:(new Date).getFullYear(),projectName:"Vue.js & Tailwind CSS Portfolio",author:"MohamedManssour"})};const je=(0,D.Z)(we,[["render",ke]]);var _e=je;const Me=[{id:2,name:"GitHub",icon:"github",url:"https://github.com/MohamedManssour"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/mohamed-manssour"}];var Ce={components:{FooterCopyright:_e},data(){return{socials:Me}},mounted(){d().replace()},updated(){d().replace()}};const Te=(0,D.Z)(Ce,[["render",fe]]);var De=Te,Se={components:{AppHeader:se,AppFooter:De},data(){return{appTheme:localStorage.getItem("theme")||"light"}},mounted(){d().replace(),this.applyTheme()},updated(){d().replace()},methods:{handleThemeChange(e){this.appTheme=e,localStorage.setItem("theme",e),this.applyTheme()},applyTheme(){"dark"===this.appTheme?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}}};const Pe=(0,D.Z)(Se,[["render",l]]);var Ae=Pe,Ie=r(201);const We={class:"container mx-auto"},He={class:"mt-10 sm:mt-20 flex justify-center"};function Oe(e,t,r,a,n,i){const l=(0,o.up)("AppBanner"),s=(0,o.up)("ProjectsGrid"),d=(0,o.up)("Button"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",We,[(0,o.Wm)(l,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(s),(0,o._)("div",He,[(0,o.Wm)(c,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{title:"More Projects"})])),_:1})])])}var Ze=r.p+"assets/img/developer.d30886eb.svg",Be=r.p+"assets/img/developer-dark.cfadf07a.svg";const Ee={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Fe=(0,o.uE)('<div class="w-full md:w-1/3 text-left"><h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"> Hi, I am Mohamed Manssour </h1><p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"> A Full-Stack Developer &amp; Design Enthusiast </p><div class="flex justify-center sm:block"><a download="Manssour_Mohamed-resume.pdf" href="https://mohamedmanssour.github.io/files/Manssour_Mohamed-resume.pdf" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume"><i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i><span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span></a></div></div>',1),Le={class:"w-full md:w-2/3 text-right float-right"},ze={key:0,src:Ze,alt:"Developer"},Ue={key:1,src:Be,alt:"Developer"};function Ne(e,t,r,a,n,i){return(0,o.wg)(),(0,o.iD)("section",Ee,[Fe,(0,o._)("div",Le,["light"===e.theme?((0,o.wg)(),(0,o.iD)("img",ze)):((0,o.wg)(),(0,o.iD)("img",Ue))])])}var qe={name:"Home",data:()=>({theme:""}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){d().replace()},methods:{}};const Ge=(0,D.Z)(qe,[["render",Ne]]);var $e=Ge,Ke=r(197),Re={name:"Home",components:{AppBanner:$e,ProjectsGrid:Ke.Z,Button:Y.Z}};const Ye=(0,D.Z)(Re,[["render",Oe]]);var Ve=Ye;const Xe=[{path:"/",name:"Home",component:Ve,meta:{title:"MohamedManssour - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,552)),meta:{title:"MohamedManssour - About"}},{path:"/projects",name:"Projects",component:()=>r.e(176).then(r.bind(r,773)),meta:{title:"MohamedManssour - Projects"}},{path:"/projects/single-project",name:"Single Project",component:()=>r.e(176).then(r.bind(r,670)),meta:{title:"MohamedManssour - Single Project"}},{path:"/contact",name:"Contact",component:()=>r.e(176).then(r.bind(r,366)),meta:{title:"MohamedManssour - Contact"}}],Je=(0,Ie.p7)({history:(0,Ie.PO)(),routes:Xe,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var Qe=Je;Je.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var et=r(617);const tt=r(508);tt.replace(),(0,a.ri)(Ae).use(Qe).use(et.Z).mount("#app");const rt=localStorage.getItem("theme");"dark"===rt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},197:function(e,t,r){r.d(t,{Z:function(){return E}});var a=r(252),o=r(577),n=r(963);const i={class:"pt-10 sm:pt-14"},l={class:"text-center"},s={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},d={class:"mt-10 sm:mt-10"},c=(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects by title or filter by category ",-1),m={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},u={class:"flex justify-between gap-2"},p=(0,a._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,a._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function h(e,t,r,h,f,b){const y=(0,a.up)("ProjectsFilter"),x=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",l,[(0,a._)("p",s,(0,o.zw)(e.projectsHeading),1)]),(0,a._)("div",d,[c,(0,a._)("div",m,[(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchProject=t),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[n.nr,e.searchProject]])]),(0,a.Wm)(y,{onFilter:t[1]||(t[1]=t=>e.selectedCategory=t)})])]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(x,{key:e.id,project:e},null,8,["project"])))),128))])])}var f=r(508),b=r.n(f);const y=["name","id"],x=(0,a._)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),v=["value"];function k(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[x,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.selectOptions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,o.zw)(e),9,v)))),128))],40,y)}var w={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:()=>["Web Application","Mobile Application","UI/UX Design","Branding & Anim"]}}},j=r(744);const _=(0,j.Z)(w,[["render",k]]);var M=_;const C=["src","alt"],T={class:"text-center px-4 py-6"},D={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},S={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function P(e,t,r,n,i,l){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(s,{to:"/projects/single-project",class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,C)]),(0,a._)("div",T,[(0,a._)("p",D,(0,o.zw)(r.project.title),1),(0,a._)("span",S,(0,o.zw)(r.project.category),1)])])),_:1})}var A={props:["project"]};const I=(0,j.Z)(A,[["render",P]]);var W=I;const H=[{id:1,title:"Google Health Platform",category:"Web Application",img:r(832)},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:r(687)},{id:3,title:"Project Management UI",category:"UI/UX Design",img:r(35)},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:r(34)},{id:5,title:"React Social App",category:"Mobile Application",img:r(725)},{id:6,title:"Apple Design System",category:"Web Application",img:r(600)}];var O=H,Z={components:{ProjectSingle:W,ProjectsFilter:M},data:()=>({projects:O,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){b().replace()}};const B=(0,j.Z)(Z,[["render",h]]);var E=B},135:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(252),o=r(577);function n(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var i={props:["title"],data:()=>({})},l=r(744);const s=(0,l.Z)(i,[["render",n]]);var d=s},492:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(252),o=r(577);const n=["for"],i=["id","name","placeholder","aria-label","value","type"];function l(e,t,r,l,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:r.label},(0,o.zw)(r.label),9,n),(0,a._)("input",(0,a.dG)({class:"w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.inputIdentifier,name:r.inputIdentifier,placeholder:r.label,"aria-label":r.inputIdentifier,value:r.val,type:r.inputType},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),required:""}),null,16,i)])}var s={props:{label:{type:String,default:""},inputIdentifier:{type:String,default:""},val:{type:[String,Number],default:""},inputType:{type:String,default:"text"}}},d=r(744);const c=(0,d.Z)(s,[["render",l]]);var m=c},411:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(252),o=r(577);const n=["for"],i=["id","name","aria-label","placeholder"];function l(e,t,r,l,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:r.textareaIdentifier},(0,o.zw)(r.label),9,n),(0,a._)("textarea",(0,a.dG)({class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.textareaIdentifier,name:r.textareaIdentifier,"aria-label":r.textareaIdentifier,placeholder:r.label},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),cols:"14",rows:"6"}),null,16,i)])}var s={props:{label:{type:String,default:""},textareaIdentifier:{type:String,default:""},val:{type:[String,Number],default:""}}},d=r(744);const c=(0,d.Z)(s,[["render",l]]);var m=c},725:function(e,t,r){e.exports=r.p+"assets/img/mobile-project-1.8b4f9e2f.jpg"},687:function(e,t,r){e.exports=r.p+"assets/img/mobile-project-2.9bd76372.jpg"},35:function(e,t,r){e.exports=r.p+"assets/img/ui-project-1.96e7f21e.jpg"},34:function(e,t,r){e.exports=r.p+"assets/img/ui-project-2.afd87ce7.jpg"},600:function(e,t,r){e.exports=r.p+"assets/img/web-project-1.d1debdf5.jpg"},832:function(e,t,r){e.exports=r.p+"assets/img/web-project-2.b8cb72bd.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"assets/js/"+{176:"projects",443:"about"}[e]+"."+{176:"88749785",443:"1c85ef3c"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"assets/css/projects.4f034e44.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(a,o,n,i){if(e[a])e[a].push(o);else{var l,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+n){l=m;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[o];var u=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),a(s)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],n=o.getAttribute("data-href");if(n===e||n===t)return o}},a=function(a){return new Promise((function(o,n){var i=r.miniCssF(a),l=r.p+i;if(t(i,l))return o();e(a,l,o,n)}))},o={143:0};r.f.miniCss=function(e,t){var r={176:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var i=r.p+r.u(t),l=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],l=a[1],s=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(a);d<i.length;d++)n=i[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(410)}));a=r.O(a)})();
//# sourceMappingURL=app.76069706.js.map