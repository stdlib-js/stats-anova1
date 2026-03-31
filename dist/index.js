"use strict";var E=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var R=E(function(Er,M){"use strict";function J(){return{alpha:.05}}M.exports=J});var N=E(function(Or,D){"use strict";var K=require("@stdlib/assert-has-own-property"),Q=require("@stdlib/assert-is-plain-object"),U=require("@stdlib/assert-is-number").isPrimitive,A=require("@stdlib/string-format"),X=require("@stdlib/assert-is-nan");function Y(e,n){if(!Q(n))return new TypeError(A("invalid argument. Options argument must be an object. Value: `%s`.",n));if(K(n,"alpha")){if(e.alpha=n.alpha,!U(e.alpha)||X(e.alpha))return new TypeError(A("invalid option. `%s` option must be a number. Option: `%s`.","alpha",e.alpha));if(e.alpha<0||e.alpha>1)return new RangeError(A("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",e.alpha))}return null}D.exports=Y});var k=E(function(Tr,z){"use strict";var Z={numeric:!0};function $(e,n){return String(e).localeCompare(String(n),void 0,Z)}function rr(e){var n,a,t,u,o;for(a=Array.prototype.slice.call(e),n=a.length,a.sort($),u=1,o=0;u<n;u++)t=a[u],a[o]!==t&&(o+=1,a[o]=t);return a.length=o+1,a}z.exports=rr});var H=E(function(Vr,C){"use strict";var er=require("@stdlib/stats-incr-stdev");function ar(e,n,a){var t,u,o,p,l,i,v;for(u=a.length,t={},l=0;l<u;l++)for(o=er(),t[a[l]]={mean:0,sampleSize:0,SD:o},i=0;i<e.length;i++)n[i]===a[l]&&(t[a[l]].SD=o(e[i]));for(i=0;i<e.length;i++)t[n[i]].mean+=e[i],t[n[i]].sampleSize+=1;for(v=0;v<u;v++)p=t[a[v]].mean/t[a[v]].sampleSize,t[a[v]].mean=p;return t}C.exports=ar});var x=E(function(jr,L){"use strict";function nr(e){var n,a,t,u;for(t=0,a=e.length,u=0;u<a;u++)n=e[u]-t,t+=n/(u+1);return t}L.exports=nr});var I=E(function(Pr,G){"use strict";var tr=require("@stdlib/assert-is-positive-integer"),ir=require("@stdlib/assert-is-plain-object"),B=require("@stdlib/assert-has-own-property"),w=require("@stdlib/math-base-special-roundn"),ur=require("@stdlib/string-repeat"),b=require("@stdlib/math-base-special-max"),or=require("@stdlib/assert-is-boolean").isPrimitive,F=require("@stdlib/string-format");function f(e){return e<=0?"":ur(" ",e)}function vr(e){return n;function n(a){var t,u,o,p,l,i,v,c,y,d,g,m,q,r;if(q=4,u=!0,arguments.length>0){if(!ir(a))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",a));if(B(a,"digits")){if(!tr(a.digits))throw new TypeError(F("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",a.digits));q=a.digits}if(B(a,"decision")){if(!or(a.decision))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",a.decision));u=a.decision}}return m=-q,r="",r+=e.method,r+="\n\n",r+="Null Hypothesis: All Means Equal",r+="\n",r+="Alternate Hypothesis: At Least one Mean not Equal",r+="\n\n",l=w(e.treatment.ss,m).toString(),g=w(e.error.ss,m).toString(),o=w(e.treatment.ms,m).toString(),y=w(e.error.ms,m).toString(),p=e.treatment.df.toString(),d=e.error.df.toString(),t=w(e.statistic,m).toString(),i=b(b(p.length,d.length),2),v=b(b(l.length,g.length),2),c=b(b(o.length,y.length),3),r+="              ",r+="df",r+=f(1+i),r+="SS",r+=f(2+v),r+="MS",r+=f(1+c),r+="F Score",r+=f(b(7,t.length)-7+2),r+="P Value",r+="\n",r+="Treatment",r+=f(5),r+=e.treatment.df,r+=f(3+i-p.length),r+=l,r+=f(4+v-l.length),r+=o,r+=f(3+c-o.length),r+=t,r+=f(b(7,t.length)-t.length+2),r+=w(e.pValue,m),r+="\n",r+="Errors",r+="        ",r+=e.error.df,r+=f(3+i-d.length),r+=g,r+=f(4+v-g.length),r+=y,u&&(r+="\n\n",e.rejected?(r+="Reject Null: ",r+=w(e.pValue,m),r+=" <= ",r+=e.alpha):(r+="Fail to Reject Null: ",r+=w(e.pValue,m),r+=" >= ",r+=e.alpha)),r}}G.exports=vr});var _=E(function(Ar,W){"use strict";var lr=require("@stdlib/assert-is-number-array").primitives,sr=require("@stdlib/assert-is-typed-array-like"),mr=require("@stdlib/assert-is-array"),s=require("@stdlib/utils-define-read-only-property"),gr=require("@stdlib/assert-has-own-property"),j=require("@stdlib/string-format"),hr=require("@stdlib/stats-base-dists-f-cdf"),fr=R(),pr=N(),dr=k(),cr=H(),qr=x(),Sr=I();function wr(e,n,a){var t,u,o,p,l,i,v,c,y,d,g,m,q,r,P,V,S,h,O,T;if(!sr(e)&&!lr(e))throw new TypeError(j("invalid argument. First argument must be a numeric array. Value: `%s`.",e));if(V=fr(),arguments.length>2&&(S=pr(V,a),S))throw S;if(r=e.length,r<=1)throw new RangeError(j("invalid argument. First argument must contain at least two elements. Value: `%s`.",e));if(!mr(n))throw new TypeError(j("invalid argument. Second argument must be an array. Value: `%s`.",d));if(d=dr(n),c=d.length,c<=1)throw new RangeError(j("invalid argument. Second argument must contain at least two unique elements. Value: `%s`.",d));if(r!==n.length)throw new RangeError("invalid arguments. First and second arguments must be arrays having the same length.");for(p=0,o=0,g=cr(e,n,d),v=qr(e),T=0;T<r;T++)O=(e[T]-v)*(e[T]-v),p+=O;O=0;for(i in g)gr(g,i)&&(O=(g[i].mean-v)*(g[i].mean-v),o+=g[i].sampleSize*O);return m=c-1,q=r-c,l=p-o,t=o/m,u=l/q,y=t/u,P=1-hr(y,m,q),h={},i={},s(i,"df",m),s(i,"ss",o),s(i,"ms",t),s(h,"treatment",i),S={},s(S,"df",q),s(S,"ss",l),s(S,"ms",u),s(h,"error",S),s(h,"statistic",y),s(h,"pValue",P),s(h,"means",g),s(h,"method","One-Way ANOVA"),s(h,"alpha",V.alpha),s(h,"rejected",P<=V.alpha),s(h,"print",Sr(h)),h}W.exports=wr});var br=_();module.exports=br;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
