"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4848],{3516:function(e,r,t){var a=t(2799),i=t(7378),n=t(8830);r.Z=function(){return i.createElement(a.Z,{spec:n.Z})}},8830:function(e,r,t){t.d(r,{Z:function(){return v}});var a=JSON.parse('{"WL":"Provides Sass mixins, functions, and variables for working with breakpoints and aids in responsive development"}'),i=t(7378),n={breakpoint:{description:"The name of the breakpoint at which the generated rule should break.",type:["String"]}},o={"first-breakpoint":{description:"The name of the smaller breakpoint at which the generated rule should break.",type:["String"]}},s={"second-breakpoint":{description:"The name of the larger breakpoint at which the generated rule should break.",type:["String"]}},l={size:{description:"The size at which the generated rule should break.",type:["Number"]}},d={"first-size":{description:"The smaller size at which the generated rule should break.",type:["Number"]}},p={"second-size":{description:"The larger size at which the generated rule should break.",type:["Number"]}},u="A string representation of the media query condition that meets the requirements for the given breakpoint.",c="A string representation of the media query condition that meets the requirements for the given breakpoints.",h="A string representation of the media query condition that meets the requirements for the given size.",m="A string representation of the media query condition that meets the requirements for the given sizes.",g="A string representation of the media query condition that meets the requirements for the given breakpoint and size.",b="A string representation of the media query condition that meets the requirements for the given size and breakpoint.",v={module:"break",description:a.WL,basePath:"/api/break",variables:{"horizontal-sizes":{group:"break/horizontal",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen widths, according to media queries.",defaultValue:"(x-small: 0, small: 576px, medium: 768px, large: 992px, x-large: 1200px, xx-large: 1400px)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1400px)"},"horizontal-names":{group:"break/horizontal",fileName:"names",description:"A list of sorted horizontal breakpoint names.",defaultValue:"(x-small, small, medium, large, x-large, xx-large)"},"horizontal-values":{group:"break/horizontal",fileName:"values",description:"A list of sorted horizontal breakpoint values.",defaultValue:"(0, 576px, 768px, 992px, 1200px, 1400px)"},"vertical-sizes":{group:"break/vertical",fileName:"sizes",description:"A configurable map defining the dimensions at which layout will change, adapting to different screen heights, according to media queries.",defaultValue:"(x-small: 0)",configurable:"(x-small: 0, medium: 680px, large: 960px, x-large: 1200px)"},"vertical-names":{group:"break/vertical",fileName:"names",description:"A list of sorted vertical breakpoint names.",defaultValue:"(x-small)"},"vertical-values":{group:"break/vertical",fileName:"values",description:"A list of sorted vertical breakpoint values.",defaultValue:"(0)"}},functions:{in:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and narrower.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and narrower.",parameters:l,return:{description:h}}]},"in-between":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoints which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,s),return:{description:c,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},d,p),return:{description:m}},{description:"Generates a media query rule for the given horizontal breakpoint and size which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},o,p),return:{description:g}},{description:"Generates a media query rule for the given size and horizontal breakpoint which is equal and wider than the smaller, and equal and narrower than the larger.",parameters:Object.assign({},d,s),return:{description:b}}]},"in-only":{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint.",parameters:n,return:{description:u,type:["String"]}},out:{group:"break/horizontal",description:"Generates a media query rule for the given horizontal breakpoint and wider.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and wider.",parameters:l,return:{description:h}}]},down:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and shorter.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and shorter.",parameters:l,return:{description:h}}]},"down-between":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoints which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,s),return:{description:c,type:["String"]},overloads:[{description:"Generates a media query rule for the given sizes which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},d,p),return:{description:m}},{description:"Generates a media query rule for the given vertical breakpoint and size which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},o,p),return:{description:g}},{description:"Generates a media query rule for the given size and vertical breakpoint which is equal and taller than the smaller, and equal and shorter than the larger.",parameters:Object.assign({},d,s),return:{description:b}}]},"down-only":{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint.",parameters:n,return:{description:u,type:["String"]}},up:{group:"break/vertical",description:"Generates a media query rule for the given vertical breakpoint and taller.",parameters:n,return:{description:u,type:["String"]},overloads:[{description:"Generates a media query rule for the given size and taller.",parameters:l,return:{description:h}}]},annotate:{group:"break/helpers",description:"Enables a fixed annotation displaying the active breakpoints of the viewport.",parameters:{direction:{description:"The breakpoint categories to annotate.",type:["'horizontal'","'vertical'","'both'"],defaultValue:"'both'"},position:{description:"The location in the viewport where the annotation will be positioned.",type:["'top right'","'top left'","'bottom right'","'bottom left'"],defaultValue:"'bottom right'"},color:{description:"The primary color of the annotation.",type:["Color"],defaultValue:"#f3afe6"},size:{description:"The font size of the annotation.",type:["Number"],defaultValue:"12px"}},output:i.createElement(i.Fragment,null,"Styles a single ",i.createElement("code",null,"::before")," pseudo-element to a fixed position, with ",i.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content",target:"_blank",rel:"nofollow noreferrer noopener"},i.createElement("code",null,"content"))," that describes the active horizontal and/or vertical breakpoints.")}}}},7725:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=t(5773),i=t(808),n=(t(7378),t(5318)),o=t(3516),s=["components"],l={title:"$vertical-sizes",module:"break",sidebar_label:"vertical-sizes",sidebar_class_name:"variable",hide_table_of_contents:!0},d=void 0,p={unversionedId:"api/break/vertical/sizes",id:"api/break/vertical/sizes",title:"$vertical-sizes",description:"There is not currently a useful default value for vertical breakpoint sizes. If you have a suggestion please contribute to the discussion.",source:"@site/docs/api/break/vertical/sizes.mdx",sourceDirName:"api/break/vertical",slug:"/api/break/vertical/sizes",permalink:"/api/break/vertical/sizes",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/break/vertical/sizes.mdx",tags:[],version:"current",frontMatter:{title:"$vertical-sizes",module:"break",sidebar_label:"vertical-sizes",sidebar_class_name:"variable",hide_table_of_contents:!0},sidebar:"breakSidebar",previous:{title:"vertical-names",permalink:"/api/break/vertical/names"},next:{title:"vertical-values",permalink:"/api/break/vertical/values"}},u=[],c={toc:u};function h(e){var r=e.components,t=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"FieldDetails"}),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"There is not currently a useful default value for vertical breakpoint sizes. If you have a suggestion please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/roydukkey/sass-fairy/issues/1"},"contribute to the discussion"),"."))))}h.isMDXComponent=!0}}]);