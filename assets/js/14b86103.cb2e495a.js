"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3571],{1593:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return b}});var s=i(5773),n=i(808),l=(i(7378),i(5318)),a=i(8239),c=i(9571),o=["components"],r={title:"slice ()",sidebar_label:"slice",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},u=void 0,d={unversionedId:"api/list/slice",id:"api/list/slice",isDocsHomePage:!1,title:"slice ()",description:"",source:"@site/docs/api/list/slice.mdx",sourceDirName:"api/list",slug:"/api/list/slice",permalink:"/api/list/slice",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/slice.mdx",tags:[],version:"current",frontMatter:{title:"slice ()",sidebar_label:"slice",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"set-nth",permalink:"/api/list/set-nth"},next:{title:"some",permalink:"/api/list/some"}},p=[],m={toc:p};function b(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,s.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.Z,{fieldName:"slice",fieldType:"function",spec:c.ZP,mdxType:"DocPage"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n\n$list: 'ant', 'bison', 'camel', 'bison', 'duck', 'elephant';\n\n@debug list.slice($list, 3);\n  // 'camel', 'bison', 'duck', 'elephant'\n\n@debug list.slice($list, 3, 5);\n  // 'camel', 'bison', 'duck'\n\n@debug list.slice($list, -3);\n  // 'bison', 'duck', 'elephant'\n")))}b.isMDXComponent=!0}}]);