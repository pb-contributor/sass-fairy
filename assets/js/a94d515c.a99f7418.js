"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5180],{9845:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=s(5773),o=s(808),a=(s(7378),s(5318)),r=["components"],i={hide_table_of_contents:!0},c="Advanced Usage",d={unversionedId:"docs/advanced",id:"docs/advanced",title:"Advanced Usage",description:"If you\u2019re packaging your own Sass modules and want to use Sass Fairy in the project. It is best to use direct-path @use rules to the specific features of Sass Fairy that your modules needs.",source:"@site/docs/docs/advanced.mdx",sourceDirName:"docs",slug:"/docs/advanced",permalink:"/docs/advanced",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/docs/advanced.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"List Modifiers",permalink:"/docs/list-modifiers"}},u=[],l={toc:u};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,a.kt)("p",null,"If you\u2019re packaging your own Sass modules and want to use Sass Fairy in the project. It is best to use direct-path ",(0,a.kt)("inlineCode",{parentName:"p"},"@use")," rules to the specific features of Sass Fairy that your modules needs."),(0,a.kt)("p",null,"This ensures the Sass Compiler is loading only the features required by your package. This may slightly improve your modules load time as well."),(0,a.kt)("p",null,"For example, imagine you require the ",(0,a.kt)("inlineCode",{parentName:"p"},"contrast()")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@sass-fairy/color"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"@use")," rule should be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/color/src/contrast';\n\n@function my-function ($fg-color, $bg-color) {\n\n  @if contrast.contrast($fg-color, $bg-color) > 5 {\n    // ...\n  }\n\n  @else {\n    // ...\n  }\n\n  @return $value;\n}\n")))}p.isMDXComponent=!0}}]);