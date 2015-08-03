'use strict';

var words = require( './../lib' );

var len = words.length,
	N = 10,
	idx,
	i;

// Select random words from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( words[ idx ] );
}
