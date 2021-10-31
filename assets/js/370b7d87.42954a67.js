"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4677],{4018:function(e,t,i){i.d(t,{Z:function(){return o}});var s=JSON.parse('{"WL":"Provides extended functionality for processing strings in Sass, with interfaces similar to ECMA specifications"}'),r=i(764),n={"start-at":{description:"The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:1}},a={"end-at":{description:"The index at which to end the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:-1}},o={module:"string",description:s.WL,basePath:"/api/string",hiddenNativeFields:["index"],functions:{"ends-with":{group:"main",description:"Determines whether a string ends with the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be searched for.",type:["String"]},substring:{description:"The characters to be searched for at the end of the source string.",type:["String"]}},a),return:{type:["Boolean"]}},from:{group:"main",description:"Creates a normalized string from the provided value.",parameters:{value:{description:"The value from which to generate a string.",type:["*"]}},return:{type:["String"]}},includes:{group:"main",description:"Determines whether a string includes the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]}},n),return:{type:["Boolean"]}},index:{group:"main",description:"Returns the first index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present.",parameters:Object.assign({string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]}},n),return:{type:["Number"]}},"last-index":{group:"main",description:"Returns the last index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present. The string is searched forwards, ending at a given index when specified.",parameters:{string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]},"end-at":Object.assign({},a["end-at"],{defaultValue:1})},return:{type:["Number"]}},split:{group:"main",description:"Divides a string into a list of substrings.",parameters:{string:{description:"The source string to divide into a list of substrings.",type:["String"]},delimiter:{description:"The delimiting string which separates each substring to be included in the list.",type:["String","Null"],defaultValue:"null"},limit:{description:"A non-negative integer specifying a limit on the number of substrings to be including in the list.",type:["Number","Null"],defaultValue:"null"},separator:Object.assign({},r.BG,{description:"The type of separator to be used by the returned list."}),bracketed:Object.assign({},r.NP,{description:"Whether the returned list has square brackets or no brackets."})},return:{type:["List"]}},"starts-with":{group:"main",description:"Determines whether a string begins with the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be searched for.",type:["String"]},substring:{description:"The characters to be searched for at the start of the source string.",type:["String"]}},n),return:{type:["Boolean"]}}}}},5555:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return g},default:function(){return l}});var s=i(5773),r=i(808),n=(i(7378),i(5318)),a=i(3458),o=i(4018),c=["components"],u={title:"split ()",hide_title:!0,hide_table_of_contents:!0},p=void 0,d={unversionedId:"api/string/split",id:"api/string/split",isDocsHomePage:!1,title:"split ()",description:"",source:"@site/docs/api/string/split.mdx",sourceDirName:"api/string",slug:"/api/string/split",permalink:"/api/string/split",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/string/split.mdx",tags:[],version:"current",frontMatter:{title:"split ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"stringSidebar",previous:{title:"last-index ()",permalink:"/api/string/last-index"},next:{title:"starts-with ()",permalink:"/api/string/starts-with"}},g=[],h={toc:g};function l(e){var t=e.components,i=(0,r.Z)(e,c);return(0,n.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{fieldName:"split",fieldType:"function",spec:o.Z,mdxType:"DocPage"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/string';\n\n$str: 'The quick brown fox jumps over the lazy dog.';\n\n@debug string.split($str);\n  // 'The quick brown fox jumps over the lazy dog.'\n\n@debug string.split($str, ' ');\n  // 'The' 'quick' 'brown' 'fox' 'jumps' 'over' 'the' 'lazy' 'dog.'\n\n@debug string.split($str, '', 3);\n  // 'T' 'h' 'e'\n\n@debug string.split($str, 'o', $separator: 'comma', $bracketed: true);\n  // ['The quick br', 'wn f', 'x jumps ', 'ver the lazy d', 'g.']\n")))}l.isMDXComponent=!0}}]);