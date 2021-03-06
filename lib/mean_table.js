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

'use strict';

// MODULES //

var incrstdev = require( '@stdlib/stats-incr-stdev' );


// MAIN //

/**
* Computes the vector of means for each treatment.
*
* @private
* @param {NumericArray} x - measured values
* @param {Array} factor - array of treatments
* @param {Array} treats - unique treatments
* @returns {Object} summary statistics for the categories.
*/
function meanTable( x, factor, treats ) {
	var tableOfMeans;
	var factorCount;
	var accumulator;
	var newMean;
	var j;
	var i;
	var k;

	factorCount = treats.length;
	tableOfMeans = {};
	for ( j = 0; j < factorCount; j++ ) {
		accumulator = incrstdev();
		tableOfMeans[ treats[j] ] = {
			'mean': 0,
			'sampleSize': 0,
			'SD': accumulator
		};
		for ( i = 0; i < x.length; i++ ) {
			if ( factor[i] === treats[j] ) {
				tableOfMeans[ treats[j] ][ 'SD' ] = accumulator( x[i] );
			}
		}
	}
	// Go through, add to meanTable by indexing factor[i]
	// X[i] is the individual continuous
	for ( i = 0; i < x.length; i++ ) {
		tableOfMeans[factor[i]]['mean'] += x[i];
		tableOfMeans[factor[i]]['sampleSize'] += 1;
	}

	// Now make the mean by dividing by the sample size
	// Get the standard deviation through the helper function
	for ( k = 0; k < factorCount; k++ ) {
		newMean = tableOfMeans[treats[k]]['mean'] / tableOfMeans[treats[k]]['sampleSize'];
		tableOfMeans[treats[k]]['mean'] = newMean;
	}
	return tableOfMeans;
}


// EXPORTS //

module.exports = meanTable;
