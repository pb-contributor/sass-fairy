"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5909],{3516:function(e,r,t){var a=t(2799),i=t(7378),n=t(8830);r.Z=function(){return i.createElement(a.Z,{spec:n.Z})}},8830:function(e,r,t){t.d(r,{Z:function(){return f}});var a=JSON.parse('{"WL":"Provides Sass mixins, functions, and variables for working with breakpoints and aids in responsive development"}'),i=t(7378),n={breakpoint:{description:"The name of the breakpoint at which the generated rule should break.",type:["String"]}},o={"first-breakpoint":{description:"The name of the smaller breakpoint at which the generated rule should break.",type:["String"]}},s={"second-breakpoint":{description:"The name of the larger breakpoint at which the generated rule should break.",type:["String"]}},l={size:{description:"The size at which the generated rule should break.",type:["Number"]}},d={"first-size":{description:"The smaller size at which the generated rule should break.",type:["Number"]}},p={"second-size":{description:"The larger size at which the generated rule should break.",type:["Number"]}},u="A string representation of the media query condition that meets the requirements for the given breakpoint.",h="A string representation of the media query condition that meets the requirements for the given breakpoints.",c="A string representation of the media query condition that meets the requirements for the given size.",m="A string representation of the media query condition that meets the requirements for the given sizes.",g="A string representation of the media query condition that meets the requirements for the given breakpoint and size.",b="A string representation of the media query condition that meets the requirements for the given size and breakpoint.",f={module:"break",description:a.WL,basePath:"/api/break",variables:{"horizontal-sizes":{group:"break/horizontal",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen widths, according to media queries.",defaultValue:"(x-small: 0, small: 576px, medium: 768px, large: 992px, x-large: 1200px, xx-large: 1400px)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1400px)"},"horizontal-names":{group:"break/horizontal",fileName:"names",description:"A list of sorted horizontal breakpoint names.",defaultValue:"(x-small, small, medium, large, x-large, xx-large)"},"horizontal-values":{group:"break/horizontal",fileName:"values",description:"A list of sorted horizontal breakpoint values.",defaultValue:"(0, 576px, 768px, 992px, 1200px, 1400px)"},"vertical-sizes":{group:"break/vertical",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen heights, according to media queries.",defaultValue:"(x-small: 0)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1200px)"},"vertical-names":{group:"break/vertical",fileName:"names",description:"A list of sorted vertical breakpoint names.",defaultValue:"(x-small)"},"vertical-values":{group:"break/vertical",fileName:"values",description:"A list of sorted vertical breakpoint values.",defaultValue:"(0)"}},functions:{in:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and narrower.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and narrower.",parameters:l,return:{description:c}}]},"in-between":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoints which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,s),return:{description:h,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},d,p),return:{description:m}},{description:"Generates a media query rule for the given horizontal breakpoint and size which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,p),return:{description:g}},{description:"Generates a media query rule for the given size and horizontal breakpoint which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},d,s),return:{description:b}}]},"in-only":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint.",parameters:n,return:{description:u,type:["String"]}},out:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and wider.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and wider.",parameters:l,return:{description:c}}]},down:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and shorter.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and shorter.",parameters:l,return:{description:c}}]},"down-between":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoints which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,s),return:{description:h,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},d,p),return:{description:m}},{description:"Generates a media query rule for the given vertical breakpoint and size which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,p),return:{description:g}},{description:"Generates a media query rule for the given size and vertical breakpoint which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},d,s),return:{description:b}}]},"down-only":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint.",parameters:n,return:{description:u,type:["String"]}},up:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and taller.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and taller.",parameters:l,return:{description:c}}]},annotate:{group:"break/helpers",description:"Enables a fixed annotation displaying the active breakpoints of the viewport.",parameters:{direction:{description:"The breakpoint categories to annotate.",type:["'horizontal'","'vertical'","'both'"],defaultValue:"'both'"},position:{description:"The location in the viewport where the annotation will be positioned.",type:["'top right'","'top left'","'bottom right'","'bottom left'"],defaultValue:"'bottom right'"},color:{description:"The primary color of the annotation.",type:["Color"],defaultValue:"#f3afe6"},size:{description:"The font size of the annotation.",type:["Number"],defaultValue:"12px"}},output:i.createElement(i.Fragment,null,"Styles a single ",i.createElement("code",null,"::before")," pseudo-element to a fixed position, with ",i.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content",target:"_blank",rel:"nofollow noreferrer noopener"},i.createElement("code",null,"content"))," that describes the active horizontal and/or vertical breakpoints.")}}}},9989:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(5773),i=t(808),n=(t(7378),t(5318)),o=t(3516),s=["components"],l={title:"out ()",module:"break",sidebar_label:"out",sidebar_class_name:"function mixin",hide_table_of_contents:!0},d=void 0,p={unversionedId:"api/break/horizontal/out",id:"api/break/horizontal/out",title:"out ()",description:"",source:"@site/docs/api/break/horizontal/out.mdx",sourceDirName:"api/break/horizontal",slug:"/api/break/horizontal/out",permalink:"/api/break/horizontal/out",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/break/horizontal/out.mdx",tags:[],version:"current",frontMatter:{title:"out ()",module:"break",sidebar_label:"out",sidebar_class_name:"function mixin",hide_table_of_contents:!0},sidebar:"breakSidebar",previous:{title:"in-only",permalink:"/api/break/horizontal/in-only"},next:{title:"vertical-names",permalink:"/api/break/vertical/names"}},u=[],h={toc:u};function c(e){var r=e.components,t=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"FieldDetails"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/break';\n\n// 1. As a function\n@debug break.out('md');\n  // '(min-width: 768px)'\n\n@debug break.out(800px);\n  // '(min-width: 800px)'\n\n// 2. As a mixin\nbody {\n  padding: 2rem;\n\n  @include break.out('md') {\n    padding: 1rem;\n  }\n\n  @include break.out(800px) {\n    padding: 1rem;\n  }\n}\n  // body { padding: 2rem }\n  // @media (min-width: 768px) {\n  //   body { padding: 1rem }\n  // }\n  // @media (min-width: 800px) {\n  //   body { padding: 1rem }\n  // }\n")))}c.isMDXComponent=!0}}]);