"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[501],{891:function(e,t,n){n.d(t,{Z:function(){return r}});var r={module:"math",description:JSON.parse('{"WL":"Provides extended functionality for working with numbers in Sass"}').WL,basePath:"/api/math",functions:{gcd:{group:"math/bounding",description:"Returns the Greatest Common Divisor (GCD) of a set of numbers.",parameters:{numbers:{description:"The numbers for which to calculate the greatest common divisor.",type:["ArgList<Number>"]}},return:{type:["Number"]}},lcm:{group:"math/bounding",description:"Returns the Least Common Multiple (LCM) of a set of numbers.",parameters:{numbers:{description:"The numbers for which to calculate the least common multiple.",type:["ArgList<Number>"]}},return:{type:["Number"]}},exp:{group:"math/exponential",description:"Returns Euler\u2019s number to the specified power.",parameters:{numbers:{description:"The power to which Euler\u2019s number will be raise.",type:["Number"]}},return:{type:["Number"]}},fact:{group:"math/exponential",description:"Returns the factorial of the specified integer.",parameters:{numbers:{description:"The integer to factorialize.",type:["Number"]}},return:{type:["Number"]}},change:{group:"math/unit",description:"Returns the given number with the same units as another specified number.",parameters:{number:{description:"The number whose units will be changed.",type:["Number"]},units:{description:"The number whose units will be inherited.",type:["Number"]}},return:{type:["Number"]}},unitless:{group:"math/unit",description:"Returns the unitless value of the specified number.",parameters:{number:{description:"The number from which to strip units.",type:["Number"]}},return:{type:["Number"]}}}}},502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return l}});var r=n(5773),i=n(808),s=(n(7378),n(5318)),u=n(3458),o=n(891),a=["components"],m={title:"lcm ()",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"api/math/bounding/lcm",id:"api/math/bounding/lcm",isDocsHomePage:!1,title:"lcm ()",description:"",source:"@site/docs/api/math/bounding/lcm.mdx",sourceDirName:"api/math/bounding",slug:"/api/math/bounding/lcm",permalink:"/api/math/bounding/lcm",editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/math/bounding/lcm.mdx",tags:[],version:"current",frontMatter:{title:"lcm ()",hide_title:!0,hide_table_of_contents:!0},sidebar:"mathSidebar",previous:{title:"gcd ()",permalink:"/api/math/bounding/gcd"},next:{title:"exp ()",permalink:"/api/math/exponential/exp"}},d=[],h={toc:d};function l(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u.Z,{fieldName:"lcm",fieldType:"function",spec:o.Z,mdxType:"DocPage"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/math';\n\n@debug math.lcm(12, 15, 10, 75);\n  // 300\n\n@debug math.lcm(12, 15, 52, 75);\n  // 3900\n")))}l.isMDXComponent=!0}}]);