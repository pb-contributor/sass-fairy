"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4297],{5726:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return l},highlight:function(){return y},metadata:function(){return u},toc:function(){return d}});var o=r(5773),a=r(808),i=(r(7378),r(5318)),n=r(9570),p=r(3458),s=r(8469),c=["components"],l={title:"parameter-type ()",hide_title:!0,hide_table_of_contents:!0},m=void 0,u={unversionedId:"api/exception/parameter-type",id:"api/exception/parameter-type",isDocsHomePage:!1,title:"parameter-type ()",description:"export const highlight = [",source:"@site/docs/api/exception/parameter-type.mdx",sourceDirName:"api/exception",slug:"/api/exception/parameter-type",permalink:"/api/exception/parameter-type",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/exception/parameter-type.mdx",tags:[],version:"current",frontMatter:{title:"parameter-type ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"exceptionSidebar",previous:{title:"parameter ()",permalink:"/api/exception/parameter"},next:{title:"separator ()",permalink:"/api/exception/separator"}},d=[],y=[[".parameter-type("]],f={toc:d,highlight:y};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p.Z,{fieldName:"parameter-type",fieldType:"function",spec:s.Z,mdxType:"DocPage"}),(0,i.kt)(n.Z,{className:"language-scss",title:"@sass-fairy/color/src/_is-dark.sass",highlightKeywords:y,stripSassDocs:!0,rewriteFairyUses:!0,mdxType:"CodeBlock"},"// Copyright (c) roydukkey. All rights reserved.\n// Licensed under the MIT. See LICENSE file in the project root for full license information.\n\n@use 'sass:color'\n@use 'sass:math'\n@use 'sass:meta'\n@use '@sass-fairy/exception/src/parameter-type'\n\n\n///\n/// @throw `#{$color}` is not a color.\n///\n/// @access public\n/// @require parameter-type.parameter-type\n///\n/// @example for website/docs/api/exception/parameter-type.mdx\n///\n@function is-dark($color)\n\n\t@if meta.type-of($color) != 'color'\n\t\t@error parameter-type.parameter-type('is-dark', 'color', $color, 'color')\n\n\t@return math.div(color.red($color) * 299 + color.green($color) * 587 + color.blue($color) * 114, 1000) < 128\n"))}h.isMDXComponent=!0}}]);