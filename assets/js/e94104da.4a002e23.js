"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5853],{8878:function(e,t,i){var n=i(2799),s=i(7378),l=i(340);t.Z=function(){return s.createElement(n.Z,{spec:l.ZP})}},8088:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return o},default:function(){return f}});var n=i(5773),s=i(808),l=(i(7378),i(5318)),a=i(8878),c=["components"],u={title:"includes ()",module:"list",sidebar_label:"includes",sidebar_class_name:"function",hide_table_of_contents:!0},r=void 0,d={unversionedId:"api/list/includes",id:"api/list/includes",title:"includes ()",description:"",source:"@site/docs/api/list/includes.mdx",sourceDirName:"api/list",slug:"/api/list/includes",permalink:"/api/list/includes",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/includes.mdx",tags:[],version:"current",frontMatter:{title:"includes ()",module:"list",sidebar_label:"includes",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"flat",permalink:"/api/list/flat"},next:{title:"index",permalink:"/api/list/index"}},o=[],p={toc:o};function f(e){var t=e.components,i=(0,s.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.Z,{mdxType:"FieldDetails"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n\n$list: 32 8 65 79 34 8 13 66 18;\n\n// 1. Check if the list includes `79`\n@debug list.includes($list, 79);\n  // true\n\n// 2. Check if the list includes `65` starting at a specific index\n@debug list.includes($list, 65, 4);\n  // false\n")))}f.isMDXComponent=!0}}]);