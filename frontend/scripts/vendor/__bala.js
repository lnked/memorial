$=function(e,f,g){function c(a,b,d){d=Object.create(c.fn);a&&d.push.apply(d,a[f]?[a]:""+a===a?/</.test(a)?((b=e.createElement(b||f)).innerHTML=a,b.children):b?(b=c(b)[0])?b[g](a):d:e[g](a):"function"==typeof a?e.readyState[7]?a():e[f]("DOMContentLoaded",a):a);return d}c.fn=[];c.one=function(a,b){return c(a,b)[0]||null};return c}(document,"addEventListener","querySelectorAll");