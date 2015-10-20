var Stream = require('stream'),
	Path = require('path'),
	fs = require('fs'),
	Buffer = require('buffer').Buffer;

function gulpConcatJsFromJson() {
	'use strict';

	var stream = new Stream.Transform({objectMode: true});

	stream._transform = function(file, unused, callback) {
		var files = JSON.parse(file.contents),
			contents = '',
			i, len;

		for (i = 0, len = files.length; i < len; i++) {
			contents += fs.readFileSync(file.base + files[i]) + '\n';
		}

		file.contents = new Buffer(contents);

		callback(null, file);
	}

	return stream;
};

module.exports = gulpConcatJsFromJson;
