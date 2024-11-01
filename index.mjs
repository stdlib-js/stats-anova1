// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-cdf@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-stdev@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";var c={numeric:!0};function v(t,e){return String(t).localeCompare(String(e),void 0,c)}function u(t){return t<=0?"":f(" ",t)}function b(f,c,b){var w,y,S,x,E,T,V,A,R,z,N,P,F,M,q,D,H,L,O,k,C;if(!e(f)&&!t(f))throw new TypeError(i("0tf8R",f));if(D={alpha:.05},arguments.length>2&&(H=function(t,e){if(!a(e))return new TypeError(i("0tf2V",e));if(n(e,"alpha")){if(t.alpha=e.alpha,!l(t.alpha)||m(t.alpha))return new TypeError(i("0tf8P","alpha",t.alpha));if(t.alpha<0||t.alpha>1)return new RangeError(i("0tf8V","alpha",t.alpha))}return null}(D,b),H))throw H;if((M=f.length)<=1)throw new RangeError(i("0tfA2",f));if(!r(c))throw new TypeError(i("0tf8T",z));if(z=function(t){var e,r,s,n,i;for(e=(r=Array.prototype.slice.call(t)).length,r.sort(v),n=1,i=0;n<e;n++)s=r[n],r[i]!==s&&(r[i+=1]=s);return r.length=i+1,r}(c),(A=z.length)<=1)throw new RangeError(i("0tf8U",z));if(M!==c.length)throw new RangeError(i("0tf1F"));for(x=0,S=0,N=function(t,e,r){var s,n,i,o,a,l,m;for(n=r.length,s={},a=0;a<n;a++)for(i=d(),s[r[a]]={mean:0,sampleSize:0,SD:i},l=0;l<t.length;l++)e[l]===r[a]&&(s[r[a]].SD=i(t[l]));for(l=0;l<t.length;l++)s[e[l]].mean+=t[l],s[e[l]].sampleSize+=1;for(m=0;m<n;m++)o=s[r[m]].mean/s[r[m]].sampleSize,s[r[m]].mean=o;return s}(f,c,z),V=function(t){var e,r,s;for(r=0,e=t.length,s=0;s<e;s++)r+=(t[s]-r)/(s+1);return r}(f),k=0;k<M;k++)x+=O=(f[k]-V)*(f[k]-V);for(T in O=0,N)n(N,T)&&(O=(N[T].mean-V)*(N[T].mean-V),S+=N[T].sampleSize*O);return q=1-o(R=(w=S/(P=A-1))/(y=(E=x-S)/(F=M-A)),P,F),L={},s(T={},"df",P),s(T,"ss",S),s(T,"ms",w),s(L,"treatment",T),s(H={},"df",F),s(H,"ss",E),s(H,"ms",y),s(L,"error",H),s(L,"statistic",R),s(L,"pValue",q),s(L,"means",N),s(L,"method","One-Way ANOVA"),s(L,"alpha",D.alpha),s(L,"rejected",q<=D.alpha),s(L,"print",(C=L,function(t){var e,r,s,o,l,m,d,f,c,v,b,w,y,S;if(y=4,r=!0,arguments.length>0){if(!a(t))throw new TypeError(i("0tf3L",t));if(n(t,"digits")){if(!h(t.digits))throw new TypeError(i("0tf3P","digits",t.digits));y=t.digits}if(n(t,"decision")){if(!j(t.decision))throw new TypeError(i("0tf2o","decision",t.decision));r=t.decision}}return w=-y,S="",S+=C.method,S+="\n\n",S+="Null Hypothesis: All Means Equal",S+="\n",S+="Alternate Hypothesis: At Least one Mean not Equal",S+="\n\n",l=p(C.treatment.ss,w).toString(),b=p(C.error.ss,w).toString(),s=p(C.treatment.ms,w).toString(),c=p(C.error.ms,w).toString(),o=C.treatment.df.toString(),v=C.error.df.toString(),e=p(C.statistic,w).toString(),m=g(g(o.length,v.length),2),d=g(g(l.length,b.length),2),f=g(g(s.length,c.length),3),S+="              ",S+="df",S+=u(1+m),S+="SS",S+=u(2+d),S+="MS",S+=u(1+f),S+="F Score",S+=u(g(7,e.length)-7+2),S+="P Value",S+="\n",S+="Treatment",S+=u(5),S+=C.treatment.df,S+=u(3+m-o.length),S+=l,S+=u(4+d-l.length),S+=s,S+=u(3+f-s.length),S+=e,S+=u(g(7,e.length)-e.length+2),S+=p(C.pValue,w),S+="\n",S+="Errors",S+="        ",S+=C.error.df,S+=u(3+m-v.length),S+=b,S+=u(4+d-b.length),S+=c,r&&(S+="\n\n",C.rejected?(S+="Reject Null: ",S+=p(C.pValue,w),S+=" <= ",S+=C.alpha):(S+="Fail to Reject Null: ",S+=p(C.pValue,w),S+=" >= ",S+=C.alpha)),S})),L}export{b as default};
//# sourceMappingURL=index.mjs.map