"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[183],{935:function(e,r,t){t.d(r,{Z:function(){return f}});var a=JSON.parse('{"WL":"Provides Sass mixins, functions, and variables for working with breakpoints and aids in responsive development"}'),n=t(7378),i={breakpoint:{description:"The name of the breakpoint at which the generated rule should break.",type:["String"]}},o={"first-breakpoint":{description:"The name of the smaller breakpoint at which the generated rule should break.",type:["String"]}},s={"second-breakpoint":{description:"The name of the larger breakpoint at which the generated rule should break.",type:["String"]}},l={size:{description:"The size at which the generated rule should break.",type:["Number"]}},d={"first-size":{description:"The smaller size at which the generated rule should break.",type:["Number"]}},p={"second-size":{description:"The larger size at which the generated rule should break.",type:["Number"]}},h="A string representation of the media query condition that meets the requirements for the given breakpoint.",u="A string representation of the media query condition that meets the requirements for the given breakpoints.",c="A string representation of the media query condition that meets the requirements for the given size.",m="A string representation of the media query condition that meets the requirements for the given sizes.",g="A string representation of the media query condition that meets the requirements for the given breakpoint and size.",b="A string representation of the media query condition that meets the requirements for the given size and breakpoint.",f={module:"break",description:a.WL,basePath:"/api/break",variables:{"horizontal-sizes":{group:"break/horizontal",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen widths, according to media queries.",defaultValue:"(x-small: 0, small: 576px, medium: 768px, large: 992px, x-large: 1200px, xx-large: 1400px)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1400px)"},"horizontal-names":{group:"break/horizontal",fileName:"names",description:"A list of sorted horizontal breakpoint names.",defaultValue:"(x-small, small, medium, large, x-large, xx-large)"},"horizontal-values":{group:"break/horizontal",fileName:"values",description:"A list of sorted horizontal breakpoint values.",defaultValue:"(0, 576px, 768px, 992px, 1200px, 1400px)"},"vertical-sizes":{group:"break/vertical",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen heights, according to media queries.",defaultValue:"(x-small: 0)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1200px)"},"vertical-names":{group:"break/vertical",fileName:"names",description:"A list of sorted vertical breakpoint names.",defaultValue:"(x-small)"},"vertical-values":{group:"break/vertical",fileName:"values",description:"A list of sorted vertical breakpoint values.",defaultValue:"(0)"}},functions:{in:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and narrower.",parameters:i,return:{description:h,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and narrower.",parameters:l,return:{description:c}}]},"in-between":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoints which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,s),return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},d,p),return:{description:m}},{description:"Generates a media query rule for the given horizontal breakpoint and size which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,p),return:{description:g}},{description:"Generates a media query rule for the given size and horizontal breakpoint which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},d,s),return:{description:b}}]},"in-only":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint.",parameters:i,return:{description:h,type:["String"]}},out:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and wider.",parameters:i,return:{description:h,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and wider.",parameters:l,return:{description:c}}]},down:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and shorter.",parameters:i,return:{description:h,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and shorter.",parameters:l,return:{description:c}}]},"down-between":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoints which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,s),return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},d,p),return:{description:m}},{description:"Generates a media query rule for the given vertical breakpoint and size which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,p),return:{description:g}},{description:"Generates a media query rule for the given size and vertical breakpoint which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},d,s),return:{description:b}}]},"down-only":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint.",parameters:i,return:{description:h,type:["String"]}},up:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and taller.",parameters:i,return:{description:h,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and taller.",parameters:l,return:{description:c}}]},annotate:{group:"break/helpers",description:"Enables a fixed annotation displaying the active breakpoints of the viewport.",parameters:{direction:{description:"The breakpoint categories to annotate.",type:["'horizontal'","'vertical'","'both'"],defaultValue:"'both'"},position:{description:"The location in the viewport where the annotation will be positioned.",type:["'top right'","'top left'","'bottom right'","'bottom left'"],defaultValue:"'bottom right'"},color:{description:"The primary color of the annotation.",type:["Color"],defaultValue:"#f3afe6"},size:{description:"The font size of the annotation.",type:["Number"],defaultValue:"12px"}},output:n.createElement(n.Fragment,null,"Styles a single ",n.createElement("code",null,"::before")," pseudo-element to a fixed position, with ",n.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content",target:"_blank",rel:"nofollow noreferrer noopener"},n.createElement("code",null,"content"))," that describes the active horizontal and/or vertical breakpoints.")}}}},956:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return u},default:function(){return m}});var a=t(5773),n=t(808),i=(t(7378),t(5318)),o=t(8239),s=t(935),l=["components"],d={title:"down-between ()",hide_title:!0,hide_table_of_contents:!0},p=void 0,h={unversionedId:"api/break/vertical/down-between",id:"api/break/vertical/down-between",isDocsHomePage:!1,title:"down-between ()",description:"",source:"@site/docs/api/break/vertical/down-between.mdx",sourceDirName:"api/break/vertical",slug:"/api/break/vertical/down-between",permalink:"/api/break/vertical/down-between",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/break/vertical/down-between.mdx",tags:[],version:"current",frontMatter:{title:"down-between ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"breakSidebar",previous:{title:"down ()",permalink:"/api/break/vertical/down"},next:{title:"down-only ()",permalink:"/api/break/vertical/down-only"}},u=[],c={toc:u};function m(e){var r=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{fieldName:"down-between",fieldType:"function",spec:s.Z,mdxType:"DocPage"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/break' with (\n  $vertical-sizes: $your-sizes\n);\n\n// 1. As a function\n@debug break.down-between('md', 'xl');\n  // '(min-height: 768px) and (max-height: 1199.98px)'\n\n@debug break.down-between(800px, 'xl');\n  // '(min-height: 800px) and (max-height: 1199.98px)'\n\n// 2. As a mixin\nbody {\n  padding: 2rem;\n\n  @include break.down-between('md', 'xl') {\n    padding: 1rem;\n  }\n\n  @include break.down-between(800px, 'xl') {\n    padding: 1rem;\n  }\n}\n  // body { padding: 2rem }\n  // @media (min-height: 768px) and (max-height: 1199.98px) {\n  //   body { padding: 1rem }\n  // }\n  // @media (min-height: 800px) and (max-height: 1199.98px) {\n  //   body { padding: 1rem }\n  // }\n")))}m.isMDXComponent=!0}}]);