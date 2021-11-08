"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8275],{2968:function(e,t,i){i.d(t,{Z:function(){return c}});var n=JSON.parse('{"WL":"Provides extended functionality for processing strings in Sass, with interfaces similar to ECMA specifications"}'),r=i(7378),s=i(9571),a={"start-at":{description:"The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:1}},o={"end-at":{description:"The index at which to end the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:-1}},c={module:"string",description:n.WL,basePath:"/api/string",hiddenNativeFields:["index"],functions:{"ends-with":{group:"main",description:"Determines whether a string ends with the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be searched for.",type:["String"]},substring:{description:"The characters to be searched for at the end of the source string.",type:["String"]}},o),return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the given characters are found at the end of the string; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},from:{group:"main",description:"Creates a normalized string from the provided value, with unique punctuation differentiating types and characteristics.",parameters:{value:{description:"The value from which to generate a string.",type:["*"]}},return:{description:"The string representation of the given value.",type:["String"]}},includes:{group:"main",description:"Determines whether a string includes the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]}},a),return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the substring is found anywhere within the given string; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},index:{group:"main",description:"Returns the first index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present.",parameters:Object.assign({string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]}},a),return:{description:r.createElement(r.Fragment,null,"The index of the first occurrence of the substring, or ",r.createElement("code",null,"0"),"."),type:["Number"]}},"last-index":{group:"main",description:"Returns the last index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present. The string is searched forwards, ending at a given index when specified.",parameters:{string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]},"end-at":Object.assign({},o["end-at"],{defaultValue:1})},return:{description:r.createElement(r.Fragment,null,"The index of the last occurrence of the substring, or ",r.createElement("code",null,"0"),"."),type:["Number"]}},replace:{group:"main",description:"Replaces all instances of a specified substring from the source string with a given replacement.",parameters:{string:{description:"The source string in which the substring is to be replaced.",type:["String"]},substring:{description:"The substring to replace in the source string.",type:["String"]},replacement:{description:r.createElement(r.Fragment,null,r.createElement("p",null,"The replacement for each instance of the substring."),r.createElement("p",null,"A number of special replacement patterns are supported."),r.createElement("dl",{className:"grid"},r.createElement("dt",null,r.createElement("code",null,"$&")),r.createElement("dd",null,"Inserts the substring."),r.createElement("dt",null,r.createElement("code",null,"$`")),r.createElement("dd",null,"Inserts the portion of the source string that precedes the replaced substring."),r.createElement("dt",null,r.createElement("code",null,"$'")),r.createElement("dd",null,"Inserts the portion of the source string that follows the replaced substring."))),type:["String"]}},return:{description:"A string with all instances of the substring replaced by a replacement.",type:["Number"]}},split:{group:"main",description:"Divides a string into a list of substrings.",parameters:{string:{description:"The source string to divide into a list of substrings.",type:["String"]},delimiter:{description:"The delimiting string which separates each substring to be included in the list.",type:["String","Null"],defaultValue:"null"},limit:{description:"A non-negative integer specifying a limit on the number of substrings to be including in the list.",type:["Number","Null"],defaultValue:"null"},separator:Object.assign({},s.BG,{description:"The type of separator to be used by the returned list."}),bracketed:Object.assign({},s.NP,{description:"Whether the returned list has square brackets or no brackets."})},return:{description:"A list of strings, split at each point where the delimiter occurs in the given string.",type:["List"]}},"starts-with":{group:"main",description:"Determines whether a string begins with the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be searched for.",type:["String"]},substring:{description:"The characters to be searched for at the start of the source string.",type:["String"]}},a),return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the given characters are found at the beginning of the string; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},trim:{group:"main",description:"Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).",parameters:{string:{description:"The source string from which to remove leading and trailing whitespace.",type:["String"]}},return:{description:"A string stripped of whitespace from both its beginning and end. If neither the beginning or end of source string has any whitespace, the string is simply returned, with no exception being thrown.",type:["String"]}},"trim-end":{group:"main",description:"Removes whitespace from the end of a string.",parameters:{string:{description:"The source string from which to remove trailing whitespace.",type:["String"]}},return:{description:"A string stripped of whitespace from its end. If the end of source string has no whitespace, the string is simply returned, with no exception being thrown.",type:["String"]}},"trim-start":{group:"main",description:"Removes whitespace from the beginning of a string.",parameters:{string:{description:"The source string from which to remove leading whitespace.",type:["String"]}},return:{description:"A string stripped of whitespace from its beginning. If the beginning of source string has no whitespace, the string is simply returned, with no exception being thrown.",type:["String"]}}}}},700:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return u},default:function(){return l}});var n=i(5773),r=i(808),s=(i(7378),i(5318)),a=i(8239),o=i(2968),c=["components"],d={title:"trim-end ()",hide_title:!0,hide_table_of_contents:!0},p=void 0,g={unversionedId:"api/string/trim-end",id:"api/string/trim-end",isDocsHomePage:!1,title:"trim-end ()",description:"",source:"@site/docs/api/string/trim-end.mdx",sourceDirName:"api/string",slug:"/api/string/trim-end",permalink:"/api/string/trim-end",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/string/trim-end.mdx",tags:[],version:"current",frontMatter:{title:"trim-end ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"stringSidebar",previous:{title:"trim ()",permalink:"/api/string/trim"},next:{title:"trim-start ()",permalink:"/api/string/trim-start"}},u=[],h={toc:u};function l(e){var t=e.components,i=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{fieldName:"trim-end",fieldType:"function",spec:o.Z,mdxType:"DocPage"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/string';\n\n@debug string.trim-end('     Hey, you guys!   ');\n  // \"     Hey, you guys!\"\n")))}l.isMDXComponent=!0}}]);