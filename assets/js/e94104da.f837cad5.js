"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5853],{8088:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=i(5773),s=i(808),l=(i(7378),i(5318)),a=i(3458),c=i(764),u=["components"],r={title:"includes ()",hide_title:!0,hide_table_of_contents:!0},d=void 0,o={unversionedId:"api/list/includes",id:"api/list/includes",isDocsHomePage:!1,title:"includes ()",description:"",source:"@site/docs/api/list/includes.mdx",sourceDirName:"api/list",slug:"/api/list/includes",permalink:"/api/list/includes",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/includes.mdx",tags:[],version:"current",frontMatter:{title:"includes ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"flat ()",permalink:"/api/list/flat"},next:{title:"index ()",permalink:"/api/list/index"}},p=[],f={toc:p};function m(e){var t=e.components,i=(0,s.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.Z,{fieldName:"includes",fieldType:"function",spec:c.ZP,mdxType:"DocPage"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n\n$list: 32 8 65 79 34 8 13 66 18;\n\n// 1. Check if the list includes `79`\n@debug list.includes($list, 79);\n  // true\n\n// 2. Check if the list includes `65` starting at a specific index\n@debug list.includes($list, 65, 4);\n  // false\n")))}m.isMDXComponent=!0}}]);