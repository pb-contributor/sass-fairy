"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3962],{4237:function(e,t,o){o.d(t,{Z:function(){return a}});var r=JSON.parse('{"WL":"Provides extended functionality for generating new colors from existing colors and building color themes in Sass"}'),n=o(7378),a={module:"color",description:r.WL,basePath:"/api/color",variables:{"contrast-ratios":{group:"main",description:n.createElement(n.Fragment,null,"A map defining the ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG standard contrast ratios"),"."),defaultValue:"(AA: (normal: 4.5, large: 3), AAA: (normal: 7, large: 4.5))"}},functions:{a11y:{group:"main",description:n.createElement(n.Fragment,null,"Finds the nearest accessible color for the given color against another given color according to the specified ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG standard contrast ratio"),"."),parameters:{"a11y-color":{description:"The color that should change when the contrast does not meet the expected contrast ratio.",type:["Color"]},"other-color":{description:"The color that is compare against.",type:["Color"]},size:{description:"The size category of the WCAG standard which should be used to determine compliance.",type:["'normal'","'large'"],defaultValue:"'normal'"},level:{description:"The color that should change when the contrast does not meet the expected contrast ratio.",type:["'AA'","'AAA'"],defaultValue:"'AA'"}},return:{description:"A color that meets the given standards for size and level in contrast to the other color.",type:["Color"]}},contrast:{group:"main",description:n.createElement(n.Fragment,null,"The ",n.createElement("a",{href:"http://www.w3.org/TR/WCAG20/#contrast-ratiodef",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG contrast ratio")," between two colors, from 1 to 21 (commonly written 1:1 to 21:1)."),parameters:{"first-color":{description:"The first color, often the background color.",type:["Color"]},"second-color":{description:"The second color, often the foreground color.",type:["Color"]}},return:{description:"A number representing the contrast ratio between two colors.",type:["Number"]}},"is-dark":{group:"main",description:"Indicates whether a given color is considered dark.",parameters:{color:{description:"The color which may be dark.",type:["Color"]}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the given color is considered dark; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},"is-light":{group:"main",description:"Indicates whether a given color is considered light.",parameters:{color:{description:"The color which may be light.",type:["Color"]}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the given color is considered light; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},luminance:{group:"main",description:n.createElement(n.Fragment,null,"Returns a number indicating the ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#relativeluminancedef",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG relative luminance")," of the given color."),parameters:{color:{description:"The color for which to calculate the relative luminance.",type:["Color"]}},return:{description:"A number representing the relative luminance of the given color.",type:["Number"]}}}}},8887:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=o(5773),n=o(808),a=(o(7378),o(5318)),i=o(8239),c=o(4237),l=["components"],s={title:"$contrast-ratios",sidebar_label:"$contrast-ratios",hide_title:!0,hide_table_of_contents:!0},d=void 0,p={unversionedId:"api/color/contrast-ratios",id:"api/color/contrast-ratios",isDocsHomePage:!1,title:"$contrast-ratios",description:"",source:"@site/docs/api/color/contrast-ratios.mdx",sourceDirName:"api/color",slug:"/api/color/contrast-ratios",permalink:"/api/color/contrast-ratios",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/color/contrast-ratios.mdx",tags:[],version:"current",frontMatter:{title:"$contrast-ratios",sidebar_label:"$contrast-ratios",hide_title:!0,hide_table_of_contents:!0},sidebar:"colorSidebar",previous:{title:"Color API Overview",permalink:"/api/color/"},next:{title:"a11y ()",permalink:"/api/color/a11y"}},u=[],h={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{fieldName:"contrast-ratios",fieldType:"variable",spec:c.Z,mdxType:"DocPage"}))}m.isMDXComponent=!0}}]);