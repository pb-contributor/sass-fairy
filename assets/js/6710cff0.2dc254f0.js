"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3861],{8161:function(e,r,t){t.d(r,{ZP:function(){return l}});var a=t(2685),n=t(1244),i=(t(7378),t(5318)),o=["components"],s={toc:[]};function l(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Don\u2019t see the function you\u2019re looking for? Request a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/roydukkey/sass-fairy/issues/new"},"new feature")," describing a use case."))}l.isMDXComponent=!0},935:function(e,r,t){t.d(r,{Z:function(){return b}});var a=JSON.parse('{"WL":"Provides Sass mixins, functions, and variables for working with breakpoints and aids in responsive development"}'),n=t(7378),i={breakpoint:{description:"The name of the breakpoint at which the generated rule should break.",type:["String"]}},o={"first-breakpoint":{description:"The name of the smaller breakpoint at which the generated rule should break.",type:["String"]}},s={"second-breakpoint":{description:"The name of the larger breakpoint at which the generated rule should break.",type:["String"]}},l={size:{description:"The size at which the generated rule should break.",type:["Number"]}},u={"first-size":{description:"The smaller size at which the generated rule should break.",type:["Number"]}},d={"second-size":{description:"The larger size at which the generated rule should break.",type:["Number"]}},p="A string representation of the media query condition that meets the requirements for the given breakpoint.",c="A string representation of the media query condition that meets the requirements for the given breakpoints.",h="A string representation of the media query condition that meets the requirements for the given size.",m="A string representation of the media query condition that meets the requirements for the given sizes.",g="A string representation of the media query condition that meets the requirements for the given breakpoint and size.",f="A string representation of the media query condition that meets the requirements for the given size and breakpoint.",b={module:"break",description:a.WL,basePath:"/api/break",variables:{"horizontal-sizes":{group:"break/horizontal",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen widths, according to media queries.",defaultValue:"(x-small: 0, small: 576px, medium: 768px, large: 992px, x-large: 1200px, xx-large: 1400px)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1400px)"},"horizontal-names":{group:"break/horizontal",fileName:"names",description:"A list of sorted horizontal breakpoint names.",defaultValue:"(x-small, small, medium, large, x-large, xx-large)"},"horizontal-values":{group:"break/horizontal",fileName:"values",description:"A list of sorted horizontal breakpoint values.",defaultValue:"(0, 576px, 768px, 992px, 1200px, 1400px)"},"vertical-sizes":{group:"break/vertical",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen heights, according to media queries.",defaultValue:"(x-small: 0)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1200px)"},"vertical-names":{group:"break/vertical",fileName:"names",description:"A list of sorted vertical breakpoint names.",defaultValue:"(x-small)"},"vertical-values":{group:"break/vertical",fileName:"values",description:"A list of sorted vertical breakpoint values.",defaultValue:"(0)"}},functions:{in:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and narrower.",parameters:i,return:{description:p,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and narrower.",parameters:l,return:{description:h}}]},"in-between":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoints which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,s),return:{description:c,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},u,d),return:{description:m}},{description:"Generates a media query rule for the given horizontal breakpoint and size which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,d),return:{description:g}},{description:"Generates a media query rule for the given size and horizontal breakpoint which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},u,s),return:{description:f}}]},"in-only":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint.",parameters:i,return:{description:p,type:["String"]}},out:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and wider.",parameters:i,return:{description:p,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and wider.",parameters:l,return:{description:h}}]},down:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and shorter.",parameters:i,return:{description:p,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and shorter.",parameters:l,return:{description:h}}]},"down-between":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoints which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,s),return:{description:c,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},u,d),return:{description:m}},{description:"Generates a media query rule for the given vertical breakpoint and size which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,d),return:{description:g}},{description:"Generates a media query rule for the given size and vertical breakpoint which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},u,s),return:{description:f}}]},"down-only":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint.",parameters:i,return:{description:p,type:["String"]}},up:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and taller.",parameters:i,return:{description:p,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and taller.",parameters:l,return:{description:h}}]},annotate:{group:"break/helpers",description:"Enables a fixed annotation displaying the active breakpoints of the viewport.",parameters:{direction:{description:"The breakpoint categories to annotate.",type:["'horizontal'","'vertical'","'both'"],defaultValue:"'both'"},position:{description:"The location in the viewport where the annotation will be positioned.",type:["'top right'","'top left'","'bottom right'","'bottom left'"],defaultValue:"'bottom right'"},color:{description:"The primary color of the annotation.",type:["Color"],defaultValue:"#f3afe6"},size:{description:"The font size of the annotation.",type:["Number"],defaultValue:"12px"}},output:n.createElement(n.Fragment,null,"Styles a single ",n.createElement("code",null,"::before")," pseudo-element to a fixed position, with ",n.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content",target:"_blank",rel:"nofollow noreferrer noopener"},n.createElement("code",null,"content"))," that describes the active horizontal and/or vertical breakpoints.")}}}},5293:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(1884),n=t(2685),i=t(1244),o=t(7378),s=t(5318),l=["components"],u={toc:[]};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"More information on ",(0,s.kt)("a",{parentName:"p",href:"/docs/compare-logic"},"comparison logic")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference-functions"},"reference functions"),"."))}d.isMDXComponent=!0;var p=t(8337);function c(e){var r=e.spec,t=r.basePath,n=r.functions,i=e.group,s=null==i?void 0:i.split("/")[1];return s&&(t+="/"+s),o.createElement(o.Fragment,null,o.createElement("dl",null,n&&Object.entries(n).filter((function(e){return e[1].group===(null!=i?i:"main")})).map((function(e,r){var n=e[0],i=e[1],s=i.description,l=i.parameters,u=i.overloads;return o.createElement(o.Fragment,{key:r},o.createElement("dt",null,o.createElement(a.Z,{to:t+"/"+n},o.createElement("code",null,o.createElement(p.Z,{fieldName:n,parameters:l})))," ",u&&u.length>0&&o.createElement("small",{className:"spec-overload-count"},"[+",u.length,"\xa0overload",u.length>1&&"s","]")),o.createElement("dd",null,o.createElement("p",null,s)))}))),(null==i?void 0:i.endsWith("/reference"))&&o.createElement(d,null))}},7220:function(e,r,t){t.d(r,{Z:function(){return i}});var a=t(1884),n=t(7378);function i(e){var r=e.spec,t=r.basePath,i=r.variables,o=e.group,s=null==o?void 0:o.split("/")[1];return s&&(t+="/"+s),n.createElement("dl",null,i&&Object.entries(i).filter((function(e){return e[1].group===(null!=o?o:"main")})).map((function(e,r){var i=e[0],o=e[1],s=o.fileName,l=o.description,u=o.configurable;return n.createElement(n.Fragment,{key:r},n.createElement("dt",null,n.createElement(a.Z,{to:t+"/"+(null!=s?s:i)},n.createElement("code",null,"$",i,u&&" !default"))),n.createElement("dd",null,n.createElement("p",null,l)))})))}},3903:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return g},default:function(){return b}});var a=t(2685),n=t(1244),i=(t(7378),t(5318)),o=t(8161),s=t(5293),l=t(4193),u=t(935),d=t(7220),p=["components"],c={title:"Break API Overview",slug:"./"},h="<ModuleDocHeader spec=",m={unversionedId:"api/break/overview",id:"api/break/overview",title:"Break API Overview",description:"Horizontal Breakpoints",source:"@site/docs/api/break/overview.mdx",sourceDirName:"api/break",slug:"/api/break/",permalink:"/api/break/",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/break/overview.mdx",tags:[],version:"current",frontMatter:{title:"Break API Overview",slug:"./"},sidebar:"breakSidebar",next:{title:"annotate",permalink:"/api/break/helpers/annotate"}},g=[{value:"Horizontal Breakpoints",id:"horizontal-breakpoints",children:[{value:"Variables",id:"variables",children:[],level:3},{value:"Mixins / Functions",id:"mixins--functions",children:[],level:3}],level:2},{value:"Vertical Breakpoints",id:"vertical-breakpoints",children:[{value:"Variables",id:"variables-1",children:[],level:3},{value:"Mixins / Functions",id:"mixins--functions-1",children:[],level:3}],level:2},{value:"Helpers",id:"helpers",children:[],level:2}],f={toc:g};function b(e){var r=e.components,t=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-api-overview"},(0,i.kt)(l.Z,{spec:u.Z,link:!1,mdxType:"ModuleDocHeader"})," API Overview"),(0,i.kt)("h2",{id:"horizontal-breakpoints"},"Horizontal Breakpoints"),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)(d.Z,{spec:u.Z,group:"break/horizontal",mdxType:"VariableList"}),(0,i.kt)("h3",{id:"mixins--functions"},"Mixins / Functions"),(0,i.kt)(s.Z,{spec:u.Z,group:"break/horizontal",mdxType:"SignatureList"}),(0,i.kt)(o.ZP,{mdxType:"FeatureRequest"}),(0,i.kt)("h2",{id:"vertical-breakpoints"},"Vertical Breakpoints"),(0,i.kt)("h3",{id:"variables-1"},"Variables"),(0,i.kt)(d.Z,{spec:u.Z,group:"break/vertical",mdxType:"VariableList"}),(0,i.kt)("h3",{id:"mixins--functions-1"},"Mixins / Functions"),(0,i.kt)(s.Z,{spec:u.Z,group:"break/vertical",mdxType:"SignatureList"}),(0,i.kt)("h2",{id:"helpers"},"Helpers"),(0,i.kt)(s.Z,{spec:u.Z,group:"break/helpers",mdxType:"SignatureList"}),(0,i.kt)(o.ZP,{mdxType:"FeatureRequest"}))}b.isMDXComponent=!0}}]);