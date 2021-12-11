"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1142],{5808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return f}});var r=n(2685),s=n(1244),o=(n(7378),n(5318)),i=["components"],a={hide_table_of_contents:!0},c="Reference Functions",l={unversionedId:"docs/reference-functions",id:"docs/reference-functions",title:"Reference Functions",description:"Some of the functions provided by Sass Fairy return a reference to a function so they may be used as parameters in other function calls. Examples of this are the compare methods from @sass-fairy/list.",source:"@site/docs/docs/reference-functions.mdx",sourceDirName:"docs",slug:"/docs/reference-functions",permalink:"/docs/reference-functions",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/docs/reference-functions.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/docs/install"},next:{title:"Comparison Logic",permalink:"/docs/compare-logic"}},m=[{value:"Implementing in Custom Modules",id:"implementing-in-custom-modules",children:[],level:2}],u={toc:m};function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reference-functions"},"Reference Functions"),(0,o.kt)("p",null,"Some of the functions provided by Sass Fairy return a reference to a function so they may be used as parameters in other function calls. Examples of this are the compare methods from ",(0,o.kt)("a",{parentName:"p",href:"/api/list"},(0,o.kt)("inlineCode",{parentName:"a"},"@sass-fairy/list")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$sorted: list.sort($unsorted, list.compare-numeric())\n")),(0,o.kt)("p",null,"However, these methods will function normally when provided with parameters. This allows other libraries to use these functions directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"$first-item: 5\n$second-item: 3\n$result: list.compare-numeric($first-item, $second-item)\n")),(0,o.kt)("h2",{id:"implementing-in-custom-modules"},"Implementing in Custom Modules"),(0,o.kt)("p",null,"Creating these functions in you own modules is very easy using the ",(0,o.kt)("a",{parentName:"p",href:"/api/meta/call-or-reference"},(0,o.kt)("inlineCode",{parentName:"a"},"meta.call-or-reference()"))," from the ",(0,o.kt)("a",{parentName:"p",href:"/api/meta"},(0,o.kt)("inlineCode",{parentName:"a"},"@sass-fairy/meta"))," package. ",(0,o.kt)("a",{parentName:"p",href:"/api/meta/call-or-reference"},"Read the API")," for more details."))}f.isMDXComponent=!0}}]);