"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7756],{4497:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=i(5773),n=i(808),s=(i(7378),i(5318)),c=i(8239),a=i(9571),u=["components"],o={title:"reduce-right ()",hide_title:!0,hide_table_of_contents:!0},d=void 0,l={unversionedId:"api/list/reduce-right",id:"api/list/reduce-right",isDocsHomePage:!1,title:"reduce-right ()",description:"",source:"@site/docs/api/list/reduce-right.mdx",sourceDirName:"api/list",slug:"/api/list/reduce-right",permalink:"/api/list/reduce-right",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/reduce-right.mdx",tags:[],version:"current",frontMatter:{title:"reduce-right ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"reduce ()",permalink:"/api/list/reduce"},next:{title:"remove ()",permalink:"/api/list/remove"}},p=[],m={toc:p};function f(e){var t=e.components,i=(0,n.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c.Z,{fieldName:"reduce-right",fieldType:"function",spec:a.ZP,mdxType:"DocPage"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use 'sass:meta';\n@use '@sass-fairy/list';\n\n@function _concat-right($accumulator, $item, $void...) {\n  @return list.concat($accumulator, $item);\n}\n\n$list: [[0, 1], [2, 3], [4, 5]];\n\n@debug list.reduce($list, meta.get-function('_concat-right'));\n  // [4, 5, 2, 3, 0, 1]\n")))}f.isMDXComponent=!0}}]);