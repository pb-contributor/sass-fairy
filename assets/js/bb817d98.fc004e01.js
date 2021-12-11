"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1351],{1225:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},default:function(){return m}});var n=i(2685),a=i(1244),s=(i(7378),i(5318)),l=i(2799),r=i(9571),o=["components"],d={title:"flat ()",sidebar_label:"flat",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},u=void 0,c={unversionedId:"api/list/flat",id:"api/list/flat",title:"flat ()",description:"",source:"@site/docs/api/list/flat.mdx",sourceDirName:"api/list",slug:"/api/list/flat",permalink:"/api/list/flat",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/flat.mdx",tags:[],version:"current",frontMatter:{title:"flat ()",sidebar_label:"flat",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"find-nth",permalink:"/api/list/find-nth"},next:{title:"includes",permalink:"/api/list/includes"}},f=[],p={toc:f};function m(t){var e=t.components,i=(0,a.Z)(t,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,{fieldName:"flat",fieldType:"function",spec:r.ZP,mdxType:"DocPage"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n\n// 1. Flatten to the default depth\n$list: [0, 1, 2, [3, [4]]];\n\n@debug list.flat($list);\n  // [0, 1, 2, 3, [4]]\n\n// 2. Flatten to a custom depth\n$list: [0, 1, 2, [3, 4]];\n\n@debug list.flat($list, 2);\n  // [0, 1, 2, 3, 4]\n")))}m.isMDXComponent=!0}}]);