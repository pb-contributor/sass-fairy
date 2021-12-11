"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3680],{7507:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return b},metadata:function(){return d},toc:function(){return h},default:function(){return m}});var a=i(2685),n=i(1244),r=(i(7378),i(5318)),o=i(1327),s=i(2799),p=i(3222),c=i(1854),l=["components"],u={title:"variable-type ()",sidebar_label:"variable-type",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},b=void 0,d={unversionedId:"api/exception/variable-type",id:"api/exception/variable-type",title:"variable-type ()",description:"",source:"@site/docs/api/exception/variable-type.mdx",sourceDirName:"api/exception",slug:"/api/exception/variable-type",permalink:"/api/exception/variable-type",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/exception/variable-type.mdx",tags:[],version:"current",frontMatter:{title:"variable-type ()",sidebar_label:"variable-type",sidebar_class_name:"function",hide_title:!0,hide_table_of_contents:!0},sidebar:"exceptionSidebar",previous:{title:"variable",permalink:"/api/exception/variable"}},h=[],f={toc:h};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{fieldName:"variable-type",fieldType:"function",spec:c.Z,mdxType:"DocPage"}),(0,r.kt)(o.Z,{className:"language-scss",highlightLines:"{5-7}",mdxType:"CodeBlock"},p.Z))}m.isMDXComponent=!0},3222:function(e,t){t.Z="@use '@sass-fairy/exception';\n\n$height: 20rem !default;\n\n@if meta.type-of($height) != 'number' {\n  @error exception.variable-type('height', $height, 'number');\n}\n\n@if $height < 0 {\n  @error exception.variable('Value must not be less than zero, but is `#{$height}`', 'height');\n}\n"}}]);