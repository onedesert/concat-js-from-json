Concat JS files from JSON Arrays
========================================

Simple tool to convert a JSON file with an array of JS file names onto a single concatenated JS file.

Multiple JSON files will result in multiple js files.

```
var concatenator = require('concat-js-from-json');

gulp.src('path/to/js/*.json')
	.pipe(concatenator())
	.pipe(gulp.dest('public/js/'));
```

main.json
```
[
	"file1.js",
	"file2.js",
	"file3.js"
]
```

This will generate a main.js file containing the file1.js, file2.js and file3.js content, following the order.

License
----------

gulp-concat-js-from-json is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)