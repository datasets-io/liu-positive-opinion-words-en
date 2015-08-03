Positive Opinion Words
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> A [list](http://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html#lexicon) of positive opinion words.


## Installation

``` bash
$ npm install datasets-liu-positive-opinion-words-en
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var words = require( 'datasets-liu-positive-opinion-words-en' );
```

#### words

A [list](http://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html#lexicon) of positive opinion words.

``` javascript
console.log( words );
/*
	[
		"a+",
		"abound",
		"abounds",
		"abundance",
		"abundant",
		"accessable",
		"accessible",
		"acclaim",
		"acclaimed",
		"acclamation",
		"accolade",
		"accolades",
		...
	]
*/
```


## Notes

*	A word's appearance in a sentence does __not__ necessarily imply a positive or negative opinion. See [Liu (2010)](#liu-2010).
*	The list includes misspelled words. Their presence is intentional, as such misspellings frequently occur in social media content.


## Examples

``` javascript
var words = require( 'datasets-liu-positive-opinion-words-en' );

var len = words.length,
	N = 10,
	idx,
	i;

// Select random words from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( words[ idx ] );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

If you use this [list](http://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html#lexicon), please cite one of the following two papers:

*	Hu, Minqing and Liu, Bing (2004). "Mining and Summarizing Customer Reviews." *Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining* (KDD-2004), Aug 22-25, Seattle, Washington, USA.
* 	Liu, Bing, Hu, Minqing, and Cheng, Junsheng (2005). "Opinion Observer: Analyzing and Comparing Opinions on the Web." *Proceedings of the 14th International World Wide Web Conference* (WWW-2005), May 10-14, Chiba, Japan.

Additional references:

<a name="liu-2010"></a>
*	Liu, Bing (2010). "Sentiment Analysis and Subjectivity." *Handbook of Natural Language Processing, Second Edition*. Ed. Nitin Indurkhya, Ed. Fred J. Damerau. Boca Raton: Chapman and Hall/CRC. 627-66. Print.



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-liu-positive-opinion-words-en.svg
[npm-url]: https://npmjs.org/package/datasets-liu-positive-opinion-words-en

[travis-image]: http://img.shields.io/travis/datasets-io/liu-positive-opinion-words-en/master.svg
[travis-url]: https://travis-ci.org/datasets-io/liu-positive-opinion-words-en

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/liu-positive-opinion-words-en/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/liu-positive-opinion-words-en?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/liu-positive-opinion-words-en.svg
[dependencies-url]: https://david-dm.org/datasets-io/liu-positive-opinion-words-en

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/liu-positive-opinion-words-en.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/liu-positive-opinion-words-en

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/liu-positive-opinion-words-en.svg
[github-issues-url]: https://github.com/datasets-io/liu-positive-opinion-words-en/issues
