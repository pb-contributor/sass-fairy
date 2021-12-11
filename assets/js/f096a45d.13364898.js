"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1717],{828:function(e,r,a){a.d(r,{ZP:function(){return p}});var n=a(2685),t=a(1244),i=(a(7378),a(5318)),s=["components"],o={toc:[]};function p(e){var r=e.components,a=(0,t.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Read more on ",(0,i.kt)("a",{parentName:"p",href:"/docs/compare-logic"},"comparison logic")," for a detailed explanation on sorting methods."))}p.isMDXComponent=!0},603:function(e,r,a){a.d(r,{Z:function(){return s}});var n=JSON.parse('{"WL":"Provides extended functionality for processing key/value pairs in Sass maps"}'),t=a(9571),i={"first-pair":{description:"The first key/value pair for the comparison.",type:["*"]},"second-pair":{description:"The second key/value pair for the comparison.",type:["*"]}},s={module:"map",description:n.WL,basePath:"/api/map",functions:{empty:{group:"main",description:"Creates an empty map.",return:{description:"An empty map.",type:["Map"]}},from:{group:"main",description:"Creates a map from the provided key/value pairs.",parameters:{"key-value":{description:"The key/value pairs from which a map will be created.",type:["ArgList"]}},return:{description:"A map with the given keys and values.",type:["Map"]}},"to-string":{group:"main",description:"Returns a string representing the specified map and its key/value pairs.",parameters:{map:{description:"The map from which to generate a string. When is an argument list, keywords will be included.",type:["Map","ArgList"]}},return:{description:"A string representing the given map.",type:["String"]}},"compare-key":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 keys by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in ascending order. All null items are shifted right.",parameters:i},t.Ud),"compare-key-desc":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 keys by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in descending order. All null items are shifted left.",parameters:i},t.Ud),"compare-numeric-value":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values as numbers in ascending order. All non-numeric items are shifted right.",parameters:Object.assign({},i,t.Br)},t.Ud),"compare-numeric-value-desc":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values as numbers in descending order. All non-numeric items are shifted left.",parameters:Object.assign({},i,t.Br)},t.Ud),"compare-value":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in ascending order. All null items are shifted right.",parameters:i},t.Ud),"compare-value-desc":Object.assign({group:"map/reference",description:"Compares two key/value pairs\u2019 values by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in descending order. All null items are shifted left.",parameters:i},t.Ud)}}},4279:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return l},default:function(){return g}});var n=a(2685),t=a(1244),i=(a(7378),a(5318)),s=a(828),o=a(2799),p=a(603),c=["components"],m={title:"compare-key ()",sidebar_label:"compare-key",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},u=void 0,d={unversionedId:"api/map/reference/compare-key",id:"api/map/reference/compare-key",title:"compare-key ()",description:"",source:"@site/docs/api/map/reference/compare-key.mdx",sourceDirName:"api/map/reference",slug:"/api/map/reference/compare-key",permalink:"/api/map/reference/compare-key",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/map/reference/compare-key.mdx",tags:[],version:"current",frontMatter:{title:"compare-key ()",sidebar_label:"compare-key",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},sidebar:"mapSidebar",previous:{title:"to-string",permalink:"/api/map/to-string"},next:{title:"compare-key-desc",permalink:"/api/map/reference/compare-key-desc"}},l=[],f={toc:l};function g(e){var r=e.components,a=(0,t.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{fieldName:"compare-key",fieldType:"function",spec:p.Z,mdxType:"DocPage"},(0,i.kt)(s.ZP,{mdxType:"CompareLogicCallout"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n@use '@sass-fairy/map';\n\n// 1. As a call\n@debug map.compare-key(b 8em, f 10mm);\n  // -4\n\n// 2. As a reference\n$map: (b: 8em, f: 10mm, d: a, a: 3, c: 1cm, e: 2mm);\n\n@debug list.sort($map, map.compare-key());\n  // a 3, b 8em, c 1cm, d a, e 2mm, f 10mm\n")))}g.isMDXComponent=!0}}]);