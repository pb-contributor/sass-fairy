"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8270],{828:function(e,a,r){r.d(a,{ZP:function(){return p}});var n=r(5773),t=r(808),s=(r(7378),r(5318)),i=["components"],o={toc:[]};function p(e){var a=e.components,r=(0,t.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Read more on ",(0,s.kt)("a",{parentName:"p",href:"/docs/compare-logic"},"comparison logic")," for a detailed explanation on sorting methods."))}p.isMDXComponent=!0},603:function(e,a,r){r.d(a,{Z:function(){return i}});var n=JSON.parse('{"WL":"Provides extended functionality for processing key/value pairs in Sass maps"}'),t=r(9571),s={"first-pair":{description:"The first key/value pair for the comparison.",type:["*"]},"second-pair":{description:"The second key/value pair for the comparison.",type:["*"]}},i={module:"map",description:n.WL,basePath:"/api/map",functions:{empty:{group:"main",description:"Creates an empty map.",return:{description:"An empty map.",type:["Map"]}},from:{group:"main",description:"Creates a map from the provided key/value pairs.",parameters:{"key-value":{description:"The key/value pairs from which a map will be created.",type:["ArgList"]}},return:{description:"A map with the given keys and values.",type:["Map"]}},"to-string":{group:"main",description:"Returns a string representing the specified map and its key/value pairs.",parameters:{map:{description:"The map from which to generate a string. When is an argument list, keywords will be included.",type:["Map","ArgList"]}},return:{description:"A string representing the given map.",type:["String"]}},"compare-key":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 keys by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in ascending order. All null items are shifted right.",parameters:s},t.Ud),"compare-key-desc":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 keys by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in descending order. All null items are shifted left.",parameters:s},t.Ud),"compare-numeric-value":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values as numbers in ascending order. All non-numeric items are shifted right.",parameters:Object.assign({},s,t.Br)},t.Ud),"compare-numeric-value-desc":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values as numbers in descending order. All non-numeric items are shifted left.",parameters:Object.assign({},s,t.Br)},t.Ud),"compare-value":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in ascending order. All null items are shifted right.",parameters:s},t.Ud),"compare-value-desc":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in descending order. All null items are shifted left.",parameters:s},t.Ud)}}},8841:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return g}});var n=r(5773),t=r(808),s=(r(7378),r(5318)),i=r(828),o=r(2799),p=r(603),c=["components"],m={title:"compare-value ()",sidebar_label:"compare-value",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},u=void 0,l={unversionedId:"api/map/reference/compare-value",id:"api/map/reference/compare-value",isDocsHomePage:!1,title:"compare-value ()",description:"",source:"@site/docs/api/map/reference/compare-value.mdx",sourceDirName:"api/map/reference",slug:"/api/map/reference/compare-value",permalink:"/api/map/reference/compare-value",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/map/reference/compare-value.mdx",tags:[],version:"current",frontMatter:{title:"compare-value ()",sidebar_label:"compare-value",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},sidebar:"mapSidebar",previous:{title:"compare-numeric-value-desc",permalink:"/api/map/reference/compare-numeric-value-desc"},next:{title:"compare-value-desc",permalink:"/api/map/reference/compare-value-desc"}},d=[],f={toc:d};function g(e){var a=e.components,r=(0,t.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{fieldName:"compare-value",fieldType:"function",spec:p.Z,mdxType:"DocPage"},(0,s.kt)(i.ZP,{mdxType:"CompareLogicCallout"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n@use '@sass-fairy/map';\n\n// 1. As a call\n@debug map.compare-value(b 8em, f 10mm);\n  // 7\n\n// 2. As a reference\n$map: (b: 8em, f: 10mm, d: a, a: 3, c: 1cm, e: 2mm);\n\n@debug list.sort($map, map.compare-value());\n  // f 10mm, c 1cm, e 2mm, a 3, b 8em, d a\n")))}g.isMDXComponent=!0}}]);