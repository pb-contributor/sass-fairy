"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8095],{4068:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return y}});var s=i(5773),n=i(808),a=(i(7378),i(5318)),r=i(8239),l=i(9571),p=["components"],o={title:"empty ()",hide_title:!0,hide_table_of_contents:!0},c=void 0,u={unversionedId:"api/list/empty",id:"api/list/empty",isDocsHomePage:!1,title:"empty ()",description:"",source:"@site/docs/api/list/empty.mdx",sourceDirName:"api/list",slug:"/api/list/empty",permalink:"/api/list/empty",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/empty.mdx",tags:[],version:"current",frontMatter:{title:"empty ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"distinct ()",permalink:"/api/list/distinct"},next:{title:"every ()",permalink:"/api/list/every"}},m=[],d={toc:m};function y(t){var e=t.components,i=(0,n.Z)(t,p);return(0,a.kt)("wrapper",(0,s.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{fieldName:"empty",fieldType:"function",spec:l.ZP,mdxType:"DocPage"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list/list'\n\n// 1. Create default empty list\n$list: list.empty();\n\n@debug list.separator($list);\n  // comma\n@debug list.is-bracketed($result);\n  // false\n\n// 2. Create empty with the same characteristics as source list\n$list: list.empty($list: [1 2 3 4]);\n\n@debug list.separator($list);\n  // space\n@debug not list.is-bracketed($result);\n  // true\n")))}y.isMDXComponent=!0}}]);