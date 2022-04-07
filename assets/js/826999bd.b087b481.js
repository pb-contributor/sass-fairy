"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6157],{8161:function(e,t,n){n.d(t,{ZP:function(){return c}});var i=n(5773),r=n(808),s=(n(7378),n(5318)),a=["components"],o={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Don\u2019t see the function you\u2019re looking for? Request a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/roydukkey/sass-fairy/issues/new"},"new feature")," describing a use case."))}c.isMDXComponent=!0},4485:function(e,t,n){n.d(t,{Z:function(){return c}});var i=JSON.parse('{"WL":"Provides extended functionality for processing strings in Sass, with interfaces similar to ECMA specifications"}'),r=n(7378),s=n(340),a={"start-at":{description:"The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:1}},o={"end-at":{description:"The index at which to end the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:-1}},c={module:"string",description:i.WL,basePath:"/api/string",hiddenNativeFields:["index"],functions:{"ends-with":{group:"main",description:"Determines whether a string ends with the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be searched for.",type:["String"]},substring:{description:"The characters to be searched for at the end of the source string.",type:["String"]}},o),return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the given characters are found at the end of the string; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},from:{group:"main",description:"Creates a normalized string from the provided value, with unique punctuation differentiating types and characteristics.",parameters:{value:{description:"The value from which to generate a string.",type:["*"]}},return:{description:"The string representation of the given value.",type:["String"]}},includes:{group:"main",description:"Determines whether a string includes the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]}},a),return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the substring is found anywhere within the given string; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},index:{group:"main",description:"Returns the first index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present.",parameters:Object.assign({string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]}},a),return:{description:r.createElement(r.Fragment,null,"The index of the first occurrence of the substring, or ",r.createElement("code",null,"0"),"."),type:["Number"]}},"is-quoted":{group:"main",description:"Determines whether a string is quoted, returning true or false as appropriate.",parameters:{string:{description:"The string which is being evaluated.",type:["String"]}},return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the string quoted; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},"last-index":{group:"main",description:"Returns the last index at which a specified substring can be found in a string; otherwise, 0 is returned, indicating the substring is not present. The string is searched forwards, ending at a given index when specified.",parameters:{string:{description:"The source string in which the substring is to be located.",type:["String"]},substring:{description:"The substring to locate in the source string.",type:["String"]},"end-at":Object.assign({},o["end-at"],{defaultValue:1})},return:{description:r.createElement(r.Fragment,null,"The index of the last occurrence of the substring, or ",r.createElement("code",null,"0"),"."),type:["Number"]}},replace:{group:"main",description:"Replaces all instances of a specified substring from the source string with a given replacement.",parameters:{string:{description:"The source string in which the substring is to be replaced.",type:["String"]},substring:{description:"The substring to replace in the source string.",type:["String"]},replacement:{description:r.createElement(r.Fragment,null,r.createElement("p",null,"The replacement for each instance of the substring."),r.createElement("p",null,"A number of special replacement patterns are supported."),r.createElement("dl",{className:"grid"},r.createElement("dt",null,r.createElement("code",null,"$&")),r.createElement("dd",null,"Inserts the substring."),r.createElement("dt",null,r.createElement("code",null,"$`")),r.createElement("dd",null,"Inserts the portion of the source string that precedes the replaced substring."),r.createElement("dt",null,r.createElement("code",null,"$'")),r.createElement("dd",null,"Inserts the portion of the source string that follows the replaced substring."))),type:["String"]}},return:{description:"A string with all instances of the substring replaced by a replacement.",type:["Number"]}},split:{group:"main",description:"Divides a string into a list of substrings.",parameters:{string:{description:"The source string to divide into a list of substrings.",type:["String"]},delimiter:{description:"The delimiting string which separates each substring to be included in the list.",type:["String","Null"],defaultValue:"null"},limit:{description:"A non-negative integer specifying a limit on the number of substrings to be including in the list.",type:["Number","Null"],defaultValue:"null"},separator:Object.assign({},s.BG,{description:"The type of separator to be used by the returned list."}),bracketed:Object.assign({},s.NP,{description:"Whether the returned list has square brackets or no brackets."})},return:{description:"A list of strings, split at each point where the delimiter occurs in the given string.",type:["List"]}},"starts-with":{group:"main",description:"Determines whether a string begins with the characters of a specified substring, returning true or false as appropriate.",parameters:Object.assign({string:{description:"The source string in which the substring is to be searched for.",type:["String"]},substring:{description:"The characters to be searched for at the start of the source string.",type:["String"]}},a),return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the given characters are found at the beginning of the string; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},trim:{group:"main",description:"Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).",parameters:{string:{description:"The source string from which to remove leading and trailing whitespace.",type:["String"]}},return:{description:"A string stripped of whitespace from both its beginning and end. If neither the beginning or end of source string has any whitespace, the string is simply returned, with no exception being thrown.",type:["String"]}},"trim-end":{group:"main",description:"Removes whitespace from the end of a string.",parameters:{string:{description:"The source string from which to remove trailing whitespace.",type:["String"]}},return:{description:"A string stripped of whitespace from its end. If the end of source string has no whitespace, the string is simply returned, with no exception being thrown.",type:["String"]}},"trim-start":{group:"main",description:"Removes whitespace from the beginning of a string.",parameters:{string:{description:"The source string from which to remove leading whitespace.",type:["String"]}},return:{description:"A string stripped of whitespace from its beginning. If the beginning of source string has no whitespace, the string is simply returned, with no exception being thrown.",type:["String"]}}}}},7525:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(5773),r=n(808),s=n(7378),a=n(5318),o=["components"],c={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",null,"Since ",n.hiddenNativeFields.length>1?"their":"its"," functionality is enhanced by this library, the combined API hides the native ",n.hiddenNativeFields.map((function(e,t,i){var r=i.length;return(0,a.kt)(s.Fragment,{key:t,mdxType:"Fragment"},t>0&&t<r-1&&",",r>1&&t===r-1&&" and"," ",(0,a.kt)("code",null,n.module,".",e,"()"))}))," ",n.hiddenNativeFields.length>1?"functions":"function","."))))}l.isMDXComponent=!0;var u=n(4522);function d(e){var t=e.spec,n=t.module,i=t.hiddenNativeFields;return s.createElement(s.Fragment,null,s.createElement("p",null,"In order to avoid constantly declaring both the native ",s.createElement("code",null,"sass:",n)," module and this library, the combined API has been added which merges the two."),s.createElement(u.Z,{className:"language-scss"},["// Rather than using both modules separately...","@use '@sass-fairy/"+n+"';","@use 'sass:"+n+"';","","// ...this statement will accomplish the same thing.","@use '@sass-fairy/"+n+"/"+n+"';"].join("\n")),i&&s.createElement(l,{module:n,hiddenNativeFields:i}))}},5293:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(1884),r=n(5773),s=n(808),a=n(7378),o=n(5318),c=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,s.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"More information on ",(0,o.kt)("a",{parentName:"p",href:"/docs/compare-logic"},"comparison logic")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference-functions"},"reference functions"),"."))}u.isMDXComponent=!0;var d=n(8337);function p(e){var t=e.spec,n=t.basePath,r=t.functions,s=e.group,o=null==s?void 0:s.split("/")[1];return o&&(n+="/"+o),a.createElement(a.Fragment,null,a.createElement("dl",null,r&&Object.entries(r).filter((function(e){return e[1].group===(null!=s?s:"main")})).map((function(e,t){var r=e[0],s=e[1],o=s.description,c=s.parameters,l=s.overloads;return a.createElement(a.Fragment,{key:t},a.createElement("dt",null,a.createElement(i.Z,{to:n+"/"+r},a.createElement("code",null,a.createElement(d.Z,{fieldName:r,parameters:c})))," ",l&&l.length>0&&a.createElement("small",{className:"spec-overload-count"},"[+",l.length,"\xa0overload",l.length>1&&"s","]")),a.createElement("dd",null,a.createElement("p",null,o)))}))),(null==s?void 0:s.endsWith("/reference"))&&a.createElement(u,null))}},9406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return m}});var i=n(5773),r=n(808),s=(n(7378),n(5318)),a=n(7525),o=n(8161),c=n(5293),l=n(4485),u=["components"],d={title:"String API Overview",module:"string",slug:"./",hide_title:!0,hide_table_of_contents:!0},p="API Overview",h={unversionedId:"api/string/overview",id:"api/string/overview",title:"String API Overview",description:"Functions",source:"@site/docs/api/string/overview.mdx",sourceDirName:"api/string",slug:"/api/string/",permalink:"/api/string/",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/string/overview.mdx",tags:[],version:"current",frontMatter:{title:"String API Overview",module:"string",slug:"./",hide_title:!0,hide_table_of_contents:!0},sidebar:"stringSidebar",next:{title:"ends-with",permalink:"/api/string/ends-with"}},g={},m=[{value:"Functions",id:"functions",level:2},{value:"Combined API",id:"combined-api",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"api-overview"},"API Overview"),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)(c.Z,{spec:l.Z,mdxType:"SignatureList"}),(0,s.kt)(o.ZP,{mdxType:"FeatureRequest"}),(0,s.kt)("h2",{id:"combined-api"},"Combined API"),(0,s.kt)(a.Z,{spec:l.Z,mdxType:"CombinedApi"}))}b.isMDXComponent=!0}}]);