<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# One Way ANOVA

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform a one-way analysis of variance.



<section class="usage">

## Usage

```javascript
import anova1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-anova1@deno/mod.js';
```

#### anova1( x, factor\[, opts] )

For an [array][mdn-array] or [typed array][mdn-typed-array] of numeric values `x` and an [array][mdn-array] of classifications `factor`, a one-way analysis of variance is performed. The hypotheses are given as follows:

<!-- <equation class="equation" label="eq:hypotheses" align="center" raw="\begin{align*} H_{0}:& \; \mu_{1} = \mu_{2} = \dots = \mu_{k} \\ H_{a}:& \; \text{at least one} \; \mu_{i} \; \text{not equal to the others} \end{align*}" alt="Hypotheses of ANOVA"> -->

<div class="equation" align="center" data-raw-text="\begin{align*} H_{0}:&amp; \; \mu_{1} = \mu_{2} = \dots = \mu_{k} \\ H_{a}:&amp; \; \text{at least one} \; \mu_{i} \; \text{not equal to the others} \end{align*}" data-equation="eq:hypotheses">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/anova1/docs/img/equation_hypotheses.svg" alt="Hypotheses of ANOVA">
    <br>
</div>

<!-- </equation> -->

The function returns an object containing the treatment and error squared errors, degrees of freedom, mean squared errors, and both the p-value and F score.

```javascript
var out;
var x;
var y;

x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
y = [ 'Treatment A', 'Treatment B', 'Treatment C', 'Control', 'Treatment A', 'Treatment B', 'Treatment C', 'Control', 'Treatment A', 'Treatment B', 'Treatment C', 'Control' ];

out = anova1( x, y );
/* returns
    {
        'treatment': { 'df': 11, 'ss': 15, 'ms': 5 },
        'error': { 'df': 8, 'ss': 128, 'ms': 16 },
        'statistic': 0.3125,
        'pValue': 0.81607947904798,
        'means':
          { 'Treatment A': { 'mean': 5, 'sampleSize': 3, 'SD': 4 },
            'Treatment B': { 'mean': 6, 'sampleSize': 3, 'SD': 4 },
            'Treatment C': { 'mean': 7, 'sampleSize': 3, 'SD': 4 },
            'Control': { 'mean': 8, 'sampleSize': 3, 'SD': 4 } },
        'method': 'One-Way ANOVA'
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

```javascript
var out;
var x;
var y;

x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
y = [ 'Treatment A', 'Treatment B', 'Treatment C', 'Control', 'Treatment A', 'Treatment B', 'Treatment C', 'Control', 'Treatment A', 'Treatment B', 'Treatment C', 'Control' ];

out = anova1( x, y );
console.log( out.print() );
/* =>
    One-Way ANOVA

    Null Hypothesis: All Means Equal
    Alternate Hypothesis: At Least one Mean not Equal

                  df   SS     MS    F Score   P Value
    Treatment     3    15     5     0.3125    0.8161
    Errors        8    128    16

    Fail to Reject Null: 0.8161 >= 0.05
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **decision**: a `boolean` value indicating if function is to return a decision of either _rejection of the null hypothesis_ or _failure to reject the null hypothesis_. Default: `false`

By default, the test is carried out at a significance level of `0.05`. To choose a custom significance level, set the `alpha` option.

```javascript
var x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
var y = [ 'Treatment A', 'Treatment B', 'Treatment C', 'Control', 'Treatment A', 'Treatment B', 'Treatment C', 'Control', 'Treatment A', 'Treatment B', 'Treatment C', 'Control' ];

var out = anova1( x, y );
var table = out.print();
/* e.g., returns
    One-Way ANOVA

    Null Hypothesis: All Means Equal
    Alternate Hypothesis: At Least one Mean not Equal

                  df   SS     MS    F Score   P Value
    Treatment     3    15     5     0.3125    0.8161
    Errors        8    128    16

    Fail to Reject Null: 0.8161 >= 0.05
*/

out = anova1( x, y, {
    'alpha': 0.9
});
table = out.print();
/* e.g., returns
    One-Way ANOVA

    Null Hypothesis: All Means Equal
    Alternate Hypothesis: At Least one Mean not Equal

                  df   SS     MS    F Score   P Value
    Treatment     3    15     5     0.3125    0.8161
    Errors        8    128    16

    Reject Null: 0.8161 <= 0.9
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The calculation for the p value is based on [an F distribution][anova-nist].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import anova1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-anova1@deno/mod.js';

var x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
var f = [ 'control', 'treatA', 'treatB', 'control', 'treatA', 'treatB', 'control', 'treatA', 'treatB', 'control' ];

var out = anova1( x, f, {
    'decision': true
});

console.log( out.print() );

out = anova1( x, f, {
    'alpha': 0.9
});

console.log( out.print() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-anova1.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-anova1

[test-image]: https://github.com/stdlib-js/stats-anova1/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-anova1/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-anova1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-anova1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-anova1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-anova1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-anova1/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-anova1/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-anova1/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-anova1/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-anova1/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[anova-nist]: https://www.itl.nist.gov/div898/handbook/ppc/section2/ppc231.htm

</section>

<!-- /.links -->
