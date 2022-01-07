"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1963],{660:function(e,i,t){var n=t(2799),a=t(7378),s=t(2989);i.Z=function(){return a.createElement(n.Z,{spec:s.Z})}},3563:function(e,i,t){t.r(i),t.d(i,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return x},toc:function(){return u},highlight:function(){return f},default:function(){return v}});var n=t(5773),a=t(808),s=(t(7378),t(5318)),r=t(1327),o=t(2447),d=t(660),l=["components"],p={title:"validate-index ()",module:"exception",sidebar_label:"validate-index",sidebar_class_name:"function",hide_table_of_contents:!0},c=void 0,x={unversionedId:"api/exception/validate-index",id:"api/exception/validate-index",title:"validate-index ()",description:"export const highlight = [",source:"@site/docs/api/exception/validate-index.mdx",sourceDirName:"api/exception",slug:"/api/exception/validate-index",permalink:"/api/exception/validate-index",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/exception/validate-index.mdx",tags:[],version:"current",frontMatter:{title:"validate-index ()",module:"exception",sidebar_label:"validate-index",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"exceptionSidebar",previous:{title:"separator",permalink:"/api/exception/separator"},next:{title:"variable",permalink:"/api/exception/variable"}},u=[],f=[[".validate-index(","@error $index"]],m={toc:u,highlight:f};function v(e){var i=e.components,t=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)(d.Z,{mdxType:"FieldDetails"}),(0,s.kt)(r.Z,{className:"language-scss",title:"@sass-fairy/list/src/_set-nth.sass",highlightKeywords:f,stripSassDocs:!0,rewriteFairyUses:!0,mdxType:"CodeBlock"},o.Z))}v.isMDXComponent=!0},2447:function(e,i){i.Z="// Copyright (c) roydukkey. All rights reserved.\n// Licensed under the MIT. See LICENSE file in the project root for full license information.\n\n@use 'sass:list'\n@use 'sass:meta'\n@use '@sass-fairy/exception/src/is-separator-invalid'\n@use '@sass-fairy/exception/src/separator'\n@use '@sass-fairy/exception/src/validate-index'\n\n\n///\n/// @throw `#{$index}` is not a number.\n/// @throw List index may not be 0.\n/// @throw Invalid index #{$index} for a list with #{length} elements.\n/// @throw Must be \"space\", \"comma\", \"slash\", or \"auto\".\n///\n/// @access public\n/// @require is-separator-invalid.is-separator-invalid\n/// @require separator.separator\n/// @require validate-index.validate-index\n///\n/// @example for website/docs/api/exception/is-separator-invalid.mdx\n/// @example for website/docs/api/exception/separator.mdx\n/// @example for website/docs/api/exception/validate-index.mdx\n///\n@function set-nth($list, $index, $value, $separator: auto)\n\t$index: validate-index.validate-index('set-nth', 'index', $index, $list)\n\n\t@if meta.type-of($index) != 'number'\n\t\t@error $index\n\n\t@if is-separator-invalid.is-separator-invalid($separator)\n\t\t@error separator.separator('set-nth')\n\n\t@return list.join(list.set-nth($list, $index, $value), (), $separator)\n\n"}}]);