"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5418],{8878:function(t,e,i){var n=i(2799),r=i(7378),s=i(340);e.Z=function(){return r.createElement(n.Z,{spec:s.ZP})}},1230:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return c},default:function(){return p}});var n=i(5773),r=i(808),s=(i(7378),i(5318)),a=i(8878),l=["components"],o={title:"filter ()",module:"list",sidebar_label:"filter",sidebar_class_name:"function",hide_table_of_contents:!0},u=void 0,f={unversionedId:"api/list/filter",id:"api/list/filter",title:"filter ()",description:"",source:"@site/docs/api/list/filter.mdx",sourceDirName:"api/list",slug:"/api/list/filter",permalink:"/api/list/filter",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/filter.mdx",tags:[],version:"current",frontMatter:{title:"filter ()",module:"list",sidebar_label:"filter",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"every",permalink:"/api/list/every"},next:{title:"find",permalink:"/api/list/find"}},c=[],d={toc:c};function p(t){var e=t.components,i=(0,r.Z)(t,l);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{mdxType:"FieldDetails"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use 'sass:meta';\n@use '@sass-fairy/list';\n\n@function _greater-than-fifty($item, $void...) {\n  @return $item > 50;\n}\n\n$list: 32 8 65 79 34 8 13 66 18;\n\n@debug list.filter($list, meta.get-function('_greater-than-fifty'));\n  // 65 79 66\n")))}p.isMDXComponent=!0}}]);