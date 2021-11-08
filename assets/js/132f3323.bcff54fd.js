"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4702],{8132:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=["components"],s={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Don\u2019t see the function you\u2019re looking for? Request a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/roydukkey/sass-fairy/issues/new"},"new feature")," describing a use case."))}c.isMDXComponent=!0},1306:function(e,t,n){n.d(t,{Z:function(){return a}});var a={module:"meta",description:JSON.parse('{"WL":"Provides extended functionality for handling Sass\u2019s inner workings"}').WL,basePath:"/api/meta",functions:{"call-or-reference":{group:"main",description:"Allows a function to return its reference when no parameters are provided, otherwise maintaining its regular behavior.",parameters:{function:{description:"The function to call or reference.",type:["Function"]},args:{description:"The arguments to apply to the invocation of the function.",type:["ArgList"]}},return:{description:"The given function is returned when no arguments are given; otherwise, supplied with the given arguments, the value returned by the invocation of the given function is returned.",type:["Function","*"]}},"get-keyword":{group:"main",description:"Gets the value of the named parameter from the given argument list, otherwise providing a default value.",parameters:{args:{description:"The argument list from which to get the named parameter.",type:["!ArgList"]},name:{description:"The name of the parameter to get.",type:["String"]},default:{description:"The value of the parameter when not contained in the argument list.",type:["*"],defaultValue:"null"}},return:{description:"The value of the named parameter when it exists; otherwise, the given default value.",type:["*"]}},"strip-keywords":{group:"main",description:"Strips all named parameters from the given argument list.",parameters:{args:{description:"The argument list from which to strip all named parameters.",type:["!ArgList"]}},return:{description:"Returns the values of an argument list without named parameters.",type:["List"]}}}}},4056:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(5773),r=n(808),i=n(7378),o=n(5318),s=["components"],c={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"Since ",n.hiddenNativeFields.length>1?"their":"its"," functionality is enhanced by this library, the combined API hides the native ",n.hiddenNativeFields.map((function(e,t,a){var r=a.length;return(0,o.kt)(i.Fragment,{key:t,mdxType:"Fragment"},t>0&&t<r-1&&",",r>1&&t===r-1&&" and"," ",(0,o.kt)("code",null,n.module,".",e,"()"))}))," ",n.hiddenNativeFields.length>1?"functions":"function","."))))}l.isMDXComponent=!0;var u=n(5039);function d(e){var t=e.spec,n=t.module,a=t.hiddenNativeFields;return i.createElement(i.Fragment,null,i.createElement("p",null,"In order to avoid constantly declaring both the native ",i.createElement("code",null,"sass:",n)," module and this library, the combined API has been added which merges the two."),i.createElement(u.Z,{className:"language-scss"},["// Rather than using both modules separately...","@use '@sass-fairy/"+n+"';","@use 'sass:"+n+"';","","// ...this statement will accomplish the same thing.","@use '@sass-fairy/"+n+"/"+n+"';"].join("\n")),a&&i.createElement(l,{module:n,hiddenNativeFields:a}))}},3936:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(1884),r=n(5773),i=n(808),o=n(7378),s=n(5318),c=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,i.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"More information on ",(0,s.kt)("a",{parentName:"p",href:"/docs/compare-logic"},"comparison logic")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference-functions"},"reference functions"),"."))}u.isMDXComponent=!0;var d=n(8337);function m(e){var t=e.spec,n=t.basePath,r=t.functions,i=e.group,s=null==i?void 0:i.split("/")[1];return s&&(n+="/"+s),o.createElement(o.Fragment,null,o.createElement("dl",null,r&&Object.entries(r).filter((function(e){return e[1].group===(null!=i?i:"main")})).map((function(e,t){var r=e[0],i=e[1],s=i.description,c=i.parameters,l=i.overloads;return o.createElement(o.Fragment,{key:t},o.createElement("dt",null,o.createElement(a.Z,{to:n+"/"+r},o.createElement("code",null,o.createElement(d.Z,{fieldName:r,parameters:c})))," ",l&&l.length>0&&o.createElement("small",{className:"spec-overload-count"},"[+",l.length,"\xa0overload",l.length>1&&"s","]")),o.createElement("dd",null,o.createElement("p",null,s)))}))),(null==i?void 0:i.endsWith("/reference"))&&o.createElement(u,null))}},6142:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return v},default:function(){return g}});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=n(4056),s=n(8132),c=n(3936),l=n(4193),u=n(1306),d=["components"],m={title:"Meta API Overview",slug:"./",hide_table_of_contents:!0},p="<ModuleDocHeader spec=",h={unversionedId:"api/meta/overview",id:"api/meta/overview",isDocsHomePage:!1,title:"Meta API Overview",description:"Functions",source:"@site/docs/api/meta/overview.mdx",sourceDirName:"api/meta",slug:"/api/meta/",permalink:"/api/meta/",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/meta/overview.mdx",tags:[],version:"current",frontMatter:{title:"Meta API Overview",slug:"./",hide_table_of_contents:!0},sidebar:"metaSidebar",next:{title:"call-or-reference ()",permalink:"/api/meta/call-or-reference"}},v=[{value:"Functions",id:"functions",children:[],level:2},{value:"Combined API",id:"combined-api",children:[],level:2}],f={toc:v};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-api-overview"},(0,i.kt)(l.Z,{spec:u.Z,link:!1,mdxType:"ModuleDocHeader"})," API Overview"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)(c.Z,{spec:u.Z,mdxType:"SignatureList"}),(0,i.kt)(s.ZP,{mdxType:"FeatureRequest"}),(0,i.kt)("h2",{id:"combined-api"},"Combined API"),(0,i.kt)(o.Z,{spec:u.Z,mdxType:"CombinedApi"}))}g.isMDXComponent=!0}}]);