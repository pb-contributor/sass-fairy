"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5442],{8878:function(t,e,i){var n=i(2799),s=i(7378),a=i(340);e.Z=function(){return s.createElement(n.Z,{spec:a.ZP})}},7436:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return u},default:function(){return p}});var n=i(5773),s=i(808),a=(i(7378),i(5318)),r=i(8878),l=["components"],o={title:"find ()",module:"list",sidebar_label:"find",sidebar_class_name:"function",hide_table_of_contents:!0},d=void 0,f={unversionedId:"api/list/find",id:"api/list/find",title:"find ()",description:"",source:"@site/docs/api/list/find.mdx",sourceDirName:"api/list",slug:"/api/list/find",permalink:"/api/list/find",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/find.mdx",tags:[],version:"current",frontMatter:{title:"find ()",module:"list",sidebar_label:"find",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"filter",permalink:"/api/list/filter"},next:{title:"find-nth",permalink:"/api/list/find-nth"}},u=[],c={toc:u};function p(t){var e=t.components,i=(0,s.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{mdxType:"FieldDetails"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use 'sass:meta';\n@use '@sass-fairy/list';\n\n@function _greater-than-fifty($item, $void...) {\n  @return $item > 50;\n}\n\n$list: 32 8 65 79 34 8 13 66 18;\n\n@debug list.find($list, meta.get-function('_greater-than-fifty'));\n  // 65\n")))}p.isMDXComponent=!0}}]);