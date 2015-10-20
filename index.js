var Stream = require('stream'),
	Path = require('path'),
	fs = require('fs'),
	Buffer = require('buffer').Buffer;

function concatJsFromJson() {
	'use strict';

	var stream = new Stream.Transform({objectMode: true});

	function parsePath(path) {
		return Path.basename(path, Path.extname(path)) + '.js';
	}

	stream._transform = function(file, unused, callback) {
		var files = JSON.parse(file.contents),
			contents = '',
			i, len;

		for (i = 0, len = files.length; i < len; i++) {
			contents += fs.readFileSync(file.base + files[i]) + '\n';
		}

		file.contents = new Buffer(contents);

		file.path = Path.join(file.base, parsePath(file.relative));

		callback(null, file);
	}

	return stream;
};

module.exports = concatJsFromJson;
