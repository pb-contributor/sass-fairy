"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2243],{8878:function(t,n,e){var i=e(2799),s=e(7378),a=e(340);n.Z=function(){return s.createElement(i.Z,{spec:a.ZP})}},5247:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return u},default:function(){return p}});var i=e(5773),s=e(808),a=(e(7378),e(5318)),r=e(8878),l=["components"],o={title:"find-nth ()",module:"list",sidebar_label:"find-nth",sidebar_class_name:"function",hide_table_of_contents:!0},d=void 0,f={unversionedId:"api/list/find-nth",id:"api/list/find-nth",title:"find-nth ()",description:"",source:"@site/docs/api/list/find-nth.mdx",sourceDirName:"api/list",slug:"/api/list/find-nth",permalink:"/api/list/find-nth",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/find-nth.mdx",tags:[],version:"current",frontMatter:{title:"find-nth ()",module:"list",sidebar_label:"find-nth",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"find",permalink:"/api/list/find"},next:{title:"flat",permalink:"/api/list/flat"}},u=[],c={toc:u};function p(t){var n=t.components,e=(0,s.Z)(t,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{mdxType:"FieldDetails"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use 'sass:meta';\n@use '@sass-fairy/list';\n\n@function _greater-than-fifty($item, $void...) {\n  @return $item > 50;\n}\n\n$list: 32 8 65 79 34 8 13 66 18;\n\n@debug list.find-nth($list, meta.get-function('_greater-than-fifty'));\n  // 3\n")))}p.isMDXComponent=!0}}]);