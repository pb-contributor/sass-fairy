"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8541],{4237:function(e,t,o){o.d(t,{Z:function(){return a}});var r=JSON.parse('{"WL":"Provides extended functionality for generating new colors from existing colors and building color themes in Sass"}'),n=o(7378),a={module:"color",description:r.WL,basePath:"/api/color",variables:{"contrast-ratios":{group:"main",description:n.createElement(n.Fragment,null,"A map defining the ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG standard contrast ratios"),"."),defaultValue:"(AA: (normal: 4.5, large: 3), AAA: (normal: 7, large: 4.5))"}},functions:{a11y:{group:"main",description:n.createElement(n.Fragment,null,"Finds the nearest accessible color for the given color against another given color according to the specified ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG standard contrast ratio"),"."),parameters:{"a11y-color":{description:"The color that should change when the contrast does not meet the expected contrast ratio.",type:["Color"]},"other-color":{description:"The color that is compare against.",type:["Color"]},size:{description:"The size category of the WCAG standard which should be used to determine compliance.",type:["'normal'","'large'"],defaultValue:"'normal'"},level:{description:"The color that should change when the contrast does not meet the expected contrast ratio.",type:["'AA'","'AAA'"],defaultValue:"'AA'"}},return:{description:"A color that meets the given standards for size and level in contrast to the other color.",type:["Color"]}},contrast:{group:"main",description:n.createElement(n.Fragment,null,"The ",n.createElement("a",{href:"http://www.w3.org/TR/WCAG20/#contrast-ratiodef",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG contrast ratio")," between two colors, from 1 to 21 (commonly written 1:1 to 21:1)."),parameters:{"first-color":{description:"The first color, often the background color.",type:["Color"]},"second-color":{description:"The second color, often the foreground color.",type:["Color"]}},return:{description:"A number representing the contrast ratio between two colors.",type:["Number"]}},"is-dark":{group:"main",description:"Indicates whether a given color is considered dark.",parameters:{color:{description:"The color which may be dark.",type:["Color"]}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the given color is considered dark; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},"is-light":{group:"main",description:"Indicates whether a given color is considered light.",parameters:{color:{description:"The color which may be light.",type:["Color"]}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the given color is considered light; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},luminance:{group:"main",description:n.createElement(n.Fragment,null,"Returns a number indicating the ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#relativeluminancedef",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG relative luminance")," of the given color."),parameters:{color:{description:"The color for which to calculate the relative luminance.",type:["Color"]}},return:{description:"A number representing the relative luminance of the given color.",type:["Number"]}}}}},1948:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var r=o(5773),n=o(808),a=(o(7378),o(5318)),i=o(8239),l=o(4237),c=["components"],s={title:"luminance ()",hide_title:!0,hide_table_of_contents:!0},d=void 0,u={unversionedId:"api/color/luminance",id:"api/color/luminance",isDocsHomePage:!1,title:"luminance ()",description:"",source:"@site/docs/api/color/luminance.mdx",sourceDirName:"api/color",slug:"/api/color/luminance",permalink:"/api/color/luminance",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/color/luminance.mdx",tags:[],version:"current",frontMatter:{title:"luminance ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"colorSidebar",previous:{title:"is-light ()",permalink:"/api/color/is-light"}},p=[],m={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{fieldName:"luminance",fieldType:"function",spec:l.Z,mdxType:"DocPage"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/color';\n\n@debug color.luminance(#fff);\n  // 1\n\n@debug color.luminance(#000);\n  // 0\n\n@debug color.luminance(red);\n  // 0.2126\n")))}h.isMDXComponent=!0}}]);