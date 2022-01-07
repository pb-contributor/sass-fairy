"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4481],{660:function(e,t,i){var n=i(2799),a=i(7378),r=i(2989);t.Z=function(){return a.createElement(n.Z,{spec:r.Z})}},4082:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return x},highlight:function(){return m},default:function(){return h}});var n=i(5773),a=i(808),r=(i(7378),i(5318)),s=i(1327),o=i(2447),p=i(660),d=["components"],c={title:"separator ()",module:"exception",sidebar_label:"separator",sidebar_class_name:"function",hide_table_of_contents:!0},l=void 0,u={unversionedId:"api/exception/separator",id:"api/exception/separator",title:"separator ()",description:"export const highlight = [",source:"@site/docs/api/exception/separator.mdx",sourceDirName:"api/exception",slug:"/api/exception/separator",permalink:"/api/exception/separator",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/exception/separator.mdx",tags:[],version:"current",frontMatter:{title:"separator ()",module:"exception",sidebar_label:"separator",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"exceptionSidebar",previous:{title:"parameter-type",permalink:"/api/exception/parameter-type"},next:{title:"validate-index",permalink:"/api/exception/validate-index"}},x=[],m=[[".is-separator-invalid(",".separator("]],f={toc:x,highlight:m};function h(e){var t=e.components,i=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p.Z,{mdxType:"FieldDetails"}),(0,r.kt)(s.Z,{className:"language-scss",title:"@sass-fairy/list/src/_set-nth.sass",highlightKeywords:m,stripSassDocs:!0,rewriteFairyUses:!0,mdxType:"CodeBlock"},o.Z))}h.isMDXComponent=!0},2447:function(e,t){t.Z="// Copyright (c) roydukkey. All rights reserved.\n// Licensed under the MIT. See LICENSE file in the project root for full license information.\n\n@use 'sass:list'\n@use 'sass:meta'\n@use '@sass-fairy/exception/src/is-separator-invalid'\n@use '@sass-fairy/exception/src/separator'\n@use '@sass-fairy/exception/src/validate-index'\n\n\n///\n/// @throw `#{$index}` is not a number.\n/// @throw List index may not be 0.\n/// @throw Invalid index #{$index} for a list with #{length} elements.\n/// @throw Must be \"space\", \"comma\", \"slash\", or \"auto\".\n///\n/// @access public\n/// @require is-separator-invalid.is-separator-invalid\n/// @require separator.separator\n/// @require validate-index.validate-index\n///\n/// @example for website/docs/api/exception/is-separator-invalid.mdx\n/// @example for website/docs/api/exception/separator.mdx\n/// @example for website/docs/api/exception/validate-index.mdx\n///\n@function set-nth($list, $index, $value, $separator: auto)\n\t$index: validate-index.validate-index('set-nth', 'index', $index, $list)\n\n\t@if meta.type-of($index) != 'number'\n\t\t@error $index\n\n\t@if is-separator-invalid.is-separator-invalid($separator)\n\t\t@error separator.separator('set-nth')\n\n\t@return list.join(list.set-nth($list, $index, $value), (), $separator)\n\n"}}]);