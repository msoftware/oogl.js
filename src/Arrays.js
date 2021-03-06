/*global context: false */

/**
 * Creates an array buffer with static draw usage representing a single
 * component vertex attribute array.
 *
 * The attribute array is associated to the specified `index`: the
 * `AttributeArray` constructor enables the `index`-th attribute array calling
 * `gl.enableVertexAttribArray` and the provided `pointer` method invokes
 * `gl.vertexAttribPointer` with the specified `index` and `type`.
 *
 * @class oogl.AttributeArray1
 * @extends oogl.StaticArrayBuffer
 * @constructor
 * @param {Number} index The attribute array index.
 * @param {String} type TODO
 * @param {Array} data TODO
 * @param {Boolean} [normalize=false] TODO
 * @example
 *	var array = new oogl.AttributeArray1(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
 */
context.AttributeArray1 = function (index, type, data, normalize) {
	var types = {
		'byte': {
			glType: context.BYTE,
			size: 1
		},
		'ubyte': {
			glType: context.UNSIGNED_BYTE,
			size: 1
		},
		'short': {
			glType: context.SHORT,
			size: 2
		},
		'ushort': {
			glType: context.UNSIGNED_SHORT,
			size: 2
		},
		'float': {
			glType: context.FLOAT,
			size: 4
		}
	};
	if (!types.hasOwnProperty(type)) {
		throw 'Invalid attribute type, must be one of "byte", "ubyte", "short", "ushort" and "float".';
	}

	var buffer = new context.StaticArrayBuffer(type);
	buffer.bindAndData(data);
	context.enableVertexAttribArray(index);

	/**
	 * Specifies a pointer to this buffer for the `index`-th vertex attribute
	 * array.
	 *
	 * `gl.vertexAttribPointer` equivalent.
	 *
	 * @method pointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	var array = new oogl.AttributeArray(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
	 *	array.bind();
	 *	array.pointer();
	 */
	buffer.pointer = function (stride, offset) {
		context.vertexAttribPointer(index, 1, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	/**
	 * Binds this buffer to its target and then specifies its pointer for the
	 * `index`-th vertex attribute array.
	 *
	 * You may optionally specify `stride` and `offset` parameters.
	 *
	 * Equivalent to calling `bind` and `pointer` subsequently.
	 *
	 * @method bindAndPointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	buffer.bindAndPointer();
	 */
	buffer.bindAndPointer = function (stride, offset) {
		context.bindBuffer(context.ARRAY_BUFFER, buffer);
		context.vertexAttribPointer(index, 1, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	return buffer;
};

/**
 * Creates an array buffer with static draw usage representing a 2-component
 * vertex attribute array.
 *
 * The attribute array is associated to the specified `index`: the
 * `AttributeArray` constructor enables the `index`-th attribute array calling
 * `gl.enableVertexAttribArray` and the provided `pointer` method invokes
 * `gl.vertexAttribPointer` with the specified `index` and `type`.
 *
 * @class oogl.AttributeArray2
 * @extends oogl.StaticArrayBuffer
 * @constructor
 * @param {Number} index The attribute array index.
 * @param {String} type TODO
 * @param {Array} data TODO
 * @param {Boolean} [normalize=false] TODO
 * @example
 *	var array = new oogl.AttributeArray2(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
 */
context.AttributeArray2 = function (index, type, data, normalize) {
	var types = {
		'byte': {
			glType: context.BYTE,
			size: 1
		},
		'ubyte': {
			glType: context.UNSIGNED_BYTE,
			size: 1
		},
		'short': {
			glType: context.SHORT,
			size: 2
		},
		'ushort': {
			glType: context.UNSIGNED_SHORT,
			size: 2
		},
		'float': {
			glType: context.FLOAT,
			size: 4
		}
	};
	if (!types.hasOwnProperty(type)) {
		throw 'Invalid attribute type, must be one of "byte", "ubyte", "short", "ushort" and "float".';
	}

	var buffer = new context.StaticArrayBuffer(type);
	buffer.bindAndData(data);
	context.enableVertexAttribArray(index);

	/**
	 * Specifies a pointer to this buffer for the `index`-th vertex attribute
	 * array.
	 *
	 * `gl.vertexAttribPointer` equivalent.
	 *
	 * @method pointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	var array = new oogl.AttributeArray(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
	 *	array.bind();
	 *	array.pointer();
	 */
	buffer.pointer = function (stride, offset) {
		context.vertexAttribPointer(index, 2, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	/**
	 * Binds this buffer to its target and then specifies its pointer for the
	 * `index`-th vertex attribute array.
	 *
	 * You may optionally specify `stride` and `offset` parameters.
	 *
	 * Equivalent to calling `bind` and `pointer` subsequently.
	 *
	 * @method bindAndPointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	buffer.bindAndPointer();
	 */
	buffer.bindAndPointer = function (stride, offset) {
		context.bindBuffer(context.ARRAY_BUFFER, buffer);
		context.vertexAttribPointer(index, 2, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	return buffer;
};

/**
 * Creates an array buffer with static draw usage representing a 3-component
 * vertex attribute array.
 *
 * The attribute array is associated to the specified `index`: the
 * `AttributeArray` constructor enables the `index`-th attribute array calling
 * `gl.enableVertexAttribArray` and the provided `pointer` method invokes
 * `gl.vertexAttribPointer` with the specified `index` and `type`.
 *
 * @class oogl.AttributeArray3
 * @extends oogl.StaticArrayBuffer
 * @constructor
 * @param {Number} index The attribute array index.
 * @param {String} type TODO
 * @param {Array} data TODO
 * @param {Boolean} [normalize=false] TODO
 * @example
 *	var array = new oogl.AttributeArray(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
 */
context.AttributeArray3 = function (index, type, data, normalize) {
	var types = {
		'byte': {
			glType: context.BYTE,
			size: 1
		},
		'ubyte': {
			glType: context.UNSIGNED_BYTE,
			size: 1
		},
		'short': {
			glType: context.SHORT,
			size: 2
		},
		'ushort': {
			glType: context.UNSIGNED_SHORT,
			size: 2
		},
		'float': {
			glType: context.FLOAT,
			size: 4
		}
	};
	if (!types.hasOwnProperty(type)) {
		throw 'Invalid attribute type, must be one of "byte", "ubyte", "short", "ushort" and "float".';
	}

	var buffer = new context.StaticArrayBuffer(type);
	buffer.bindAndData(data);
	context.enableVertexAttribArray(index);

	/**
	 * Specifies a pointer to this buffer for the `index`-th vertex attribute
	 * array.
	 *
	 * `gl.vertexAttribPointer` equivalent.
	 *
	 * @method pointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	var array = new oogl.AttributeArray3(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
	 *	array.bind();
	 *	array.pointer();
	 */
	buffer.pointer = function (stride, offset) {
		context.vertexAttribPointer(index, 3, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	/**
	 * Binds this buffer to its target and then specifies its pointer for the
	 * `index`-th vertex attribute array.
	 *
	 * You may optionally specify `stride` and `offset` parameters.
	 *
	 * Equivalent to calling `bind` and `pointer` subsequently.
	 *
	 * @method bindAndPointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	buffer.bindAndPointer();
	 */
	buffer.bindAndPointer = function (stride, offset) {
		context.bindBuffer(context.ARRAY_BUFFER, buffer);
		context.vertexAttribPointer(index, 3, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	return buffer;
};

/**
 * Creates an array buffer with static draw usage representing a 4-component
 * vertex attribute array.
 *
 * The attribute array is associated to the specified `index`: the
 * `AttributeArray` constructor enables the `index`-th attribute array calling
 * `gl.enableVertexAttribArray` and the provided `pointer` method invokes
 * `gl.vertexAttribPointer` with the specified `index` and `type`.
 *
 * @class oogl.AttributeArray4
 * @extends oogl.StaticArrayBuffer
 * @constructor
 * @param {Number} index The attribute array index.
 * @param {String} type TODO
 * @param {Array} data TODO
 * @param {Boolean} [normalize=false] TODO
 * @example
 *	var array = new oogl.AttributeArray4(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
 */
context.AttributeArray4 = function (index, type, data, normalize) {
	var types = {
		'byte': {
			glType: context.BYTE,
			size: 1
		},
		'ubyte': {
			glType: context.UNSIGNED_BYTE,
			size: 1
		},
		'short': {
			glType: context.SHORT,
			size: 2
		},
		'ushort': {
			glType: context.UNSIGNED_SHORT,
			size: 2
		},
		'float': {
			glType: context.FLOAT,
			size: 4
		}
	};
	if (!types.hasOwnProperty(type)) {
		throw 'Invalid attribute type, must be one of "byte", "ubyte", "short", "ushort" and "float".';
	}

	var buffer = new context.StaticArrayBuffer(type);
	buffer.bindAndData(data);
	context.enableVertexAttribArray(index);

	/**
	 * Specifies a pointer to this buffer for the `index`-th vertex attribute
	 * array.
	 *
	 * You may optionally specify `stride` and `offset` parameters.
	 *
	 * `gl.vertexAttribPointer` equivalent.
	 *
	 * @method pointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	var array = new oogl.AttributeArray4(0, 'float', [1, 2, 3, 4, 5, 6, 7, 8]);
	 *	array.bind();
	 *	array.pointer();
	 */
	buffer.pointer = function (stride, offset) {
		context.vertexAttribPointer(index, 4, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	/**
	 * Binds this buffer to its target and then specifies its pointer for the
	 * `index`-th vertex attribute array.
	 *
	 * You may optionally specify `stride` and `offset` parameters.
	 *
	 * Equivalent to calling `bind` and `pointer` subsequently.
	 *
	 * @method bindAndPointer
	 * @param {Number} [stride=0] TODO
	 * @param {Number} [offset=0] TODO
	 * @example
	 *	buffer.bindAndPointer();
	 */
	buffer.bindAndPointer = function (stride, offset) {
		context.bindBuffer(context.ARRAY_BUFFER, buffer);
		context.vertexAttribPointer(index, 4, types[type].glType, !!normalize, (stride || 0) * types[type].size, (offset || 0) * types[type].size);
	};

	return buffer;
};

/**
 * Represents a set of vertex attribute arrays; simplifies the management of
 * multiple arrays.
 *
 * @class oogl.AttributeArrays
 * @constructor
 * @param {Number} count The number of vertex attributes each array will
 *	contain.
 * @example
 *	var program = new oogl.AutoProgram(vertexSource, fragmentSource, ['in_Vertex', 'in_Color', 'in_TexCoord']);
 *	var arrays = new oogl.AttributeArrays();
 *	arrays.add3('float', vertices);
 *	arrays.add3('float', colors);
 *	arrays.add2('float', textureCoordinates);
 *	arrays.bindAndPointer();
 *	program.use();
 *	arrays.drawTriangles();
 */
context.AttributeArrays = function (count) {
	var arrays = [];
	return {
		/**
		 * Adds a single component vertex attribute array to the set.
		 *
		 * @method add1
		 * @param {String} type The type of the data in the array. Must be one
		 *	of `byte`, `ubyte`, `short`, `ushort` and `float`.
		 * @param {Number[]} data A standard JavaScript array containing the
		 *	attribute data.
		 * @param {Boolean} [normalize=false] Indicates whether attribute data
		 *	must be normalized by the GL.
		 * @example
		 *	arrays.add1('float', [1, 2, 3, 4, 5, 6, 7, 8]);
		 */
		add1: function (type, data, normalize) {
			arrays.push(new context.AttributeArray1(arrays.length, type, data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add1b
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add1b: function (data, normalize) {
			arrays.push(new context.AttributeArray1(arrays.length, 'byte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add1ub
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add1ub: function (data, normalize) {
			arrays.push(new context.AttributeArray1(arrays.length, 'ubyte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add1s
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add1s: function (data, normalize) {
			arrays.push(new context.AttributeArray1(arrays.length, 'short', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add1us
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add1us: function (data, normalize) {
			arrays.push(new context.AttributeArray1(arrays.length, 'ushort', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add1f
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add1f: function (data, normalize) {
			arrays.push(new context.AttributeArray1(arrays.length, 'float', data, normalize));
		},

		/**
		 * Adds a 2-component vertex attribute array to the set.
		 *
		 * @method add2
		 * @param {String} type The type of the data in the array. Must be one
		 *	of `byte`, `ubyte`, `short`, `ushort` and `float`.
		 * @param {Array} data A standard JavaScript array containing the
		 *	attribute data.
		 * @param {Boolean} [normalize=false] Indicates whether attribute data
		 *	must be normalized by the GL.
		 * @example
		 *	arrays.add2('float', [1, 2, 3, 4, 5, 6, 7, 8]);
		 */
		add2: function (type, data, normalize) {
			arrays.push(new context.AttributeArray2(arrays.length, type, data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add2b
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add2b: function (data, normalize) {
			arrays.push(new context.AttributeArray2(arrays.length, 'byte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add2ub
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add2ub: function (data, normalize) {
			arrays.push(new context.AttributeArray2(arrays.length, 'ubyte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add2s
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add2s: function (data, normalize) {
			arrays.push(new context.AttributeArray2(arrays.length, 'short', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add2us
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add2us: function (data, normalize) {
			arrays.push(new context.AttributeArray2(arrays.length, 'ushort', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add2f
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add2f: function (data, normalize) {
			arrays.push(new context.AttributeArray2(arrays.length, 'float', data, normalize));
		},

		/**
		 * Adds a 3-component vertex attribute array to the set.
		 *
		 * @method add3
		 * @param {String} type The type of the data in the array. Must be one
		 *	of `byte`, `ubyte`, `short`, `ushort` and `float`.
		 * @param {Array} data A standard JavaScript array containing the
		 *	attribute data.
		 * @param {Boolean} [normalize=false] Indicates whether attribute data
		 *	must be normalized by the GL.
		 * @example
		 *	arrays.add3('float', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
		 */
		add3: function (type, data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, type, data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add3b
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add3b: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'byte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add3ub
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add3ub: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'ubyte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add3s
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add3s: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'short', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add3us
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add3us: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'ushort', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add3f
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add3f: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'float', data, normalize));
		},

		/**
		 * Adds a 4-component vertex attribute array to the set.
		 *
		 * @method add4
		 * @param {String} type The type of the data in the array. Must be one
		 *	of `byte`, `ubyte`, `short`, `ushort` and `float`.
		 * @param {Array} data A standard JavaScript array containing the
		 *	attribute data.
		 * @param {Boolean} [normalize=false] Indicates whether attribute data
		 *	must be normalized by the GL.
		 * @example
		 *	arrays.add4('float', [1, 2, 3, 4, 5, 6, 7, 8]);
		 */
		add4: function (type, data, normalize) {
			arrays.push(new context.AttributeArray4(arrays.length, type, data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add4b
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add4b: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'byte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add4ub
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add4ub: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'ubyte', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add4s
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add4s: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'short', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add4us
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add4us: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'ushort', data, normalize));
		},

		/**
		 * TODO
		 *
		 * @method add4f
		 * @param {Number[]} data TODO
		 * @param {Boolean} [normalize=false] TODO
		 * @example
		 *	TODO
		 */
		add4f: function (data, normalize) {
			arrays.push(new context.AttributeArray3(arrays.length, 'float', data, normalize));
		},

		/**
		 * Binds each array in the set to its buffer target (which is always
		 * `gl.ARRAY_BUFFER`) and specifies its pointer for the attribute array
		 * associated to its index. This is typically used to prepare all the
		 * arrays used by a program with just one call.
		 *
		 * You may optionally specify `stride` and `offset` parameters.
		 *
		 * @method bindAndPointer
		 * @param {Number} [stride=0] TODO
		 * @param {Number} [offset=0] TODO
		 * @example
		 *	var program = new oogl.AutoProgram(vertexSource, fragmentSource, ['in_Vertex', 'in_Color', 'in_TexCoord']);
		 *	var arrays = new oogl.AttributeArrays();
		 *	arrays.add3('float', vertices);
		 *	arrays.add3('float', colors);
		 *	arrays.add2('float', textureCoordinates);
		 *	arrays.bindAndPointer();
		 *	program.use();
		 *	arrays.drawTriangles();
		 */
		bindAndPointer: function (stride, offset) {
			for (var i in arrays) {
				arrays[i].bindAndPointer(stride, offset);
			}
		},

		/**
		 * Draws the arrays in `gl.TRIANGLES` mode.
		 *
		 * Equivalent to calling `gl.drawArrays` with `gl.TRIANGLES`.
		 *
		 * You may optionally specify `offset` and `count` parameters.
		 *
		 * @method drawTriangles
		 * @param {Number} [offset=0] The index of the first vertex attribute to
		 *	draw.
		 * @param {Number} [count] The number of vertex attributes to draw. When
		 *	not specified defaults to the `count` parameter passed to the
		 *	`AttributeArrays` constructor.
		 * @example
		 *	arrays.bindAndPointer();
		 *	arrays.drawTriangles();
		 */
		drawTriangles: (function (all) {
			return function (offset, count) {
				if (arguments.length < 2) {
					count = all;
					if (arguments.length < 1) {
						offset = 0;
					}
				}
				context.drawArrays(context.TRIANGLES, offset, count);
			};
		})(count),

		/**
		 * Draws the arrays in `gl.TRIANGLE_FAN` mode.
		 *
		 * Equivalent to calling `gl.drawArrays` with `gl.TRIANGLE_FAN`.
		 *
		 * You may optionally specify `offset` and `count` parameters.
		 *
		 * @method drawTriangles
		 * @param {Number} [offset=0] The index of the first vertex attribute to
		 *	draw.
		 * @param {Number} [count] The number of vertex attributes to draw. When
		 *	not specified defaults to the `count` parameter passed to the
		 *	`AttributeArrays` constructor.
		 * @example
		 *	arrays.bindAndPointer();
		 *	arrays.drawTriangleFan();
		 */
		drawTriangleFan: (function (all) {
			return function (offset, count) {
				if (arguments.length < 2) {
					count = all;
					if (arguments.length < 1) {
						offset = 0;
					}
				}
				context.drawArrays(context.TRIANGLE_FAN, offset, count);
			};
		})(count),

		/**
		 * Draws the arrays in `gl.TRIANGLE_STRIP` mode.
		 *
		 * Equivalent to calling `gl.drawArrays` with `gl.TRIANGLE_STRIP`.
		 *
		 * You may optionally specify `offset` and `count` parameters.
		 *
		 * @method drawTriangles
		 * @param {Number} [offset=0] The index of the first vertex attribute to
		 *	draw.
		 * @param {Number} [count] The number of vertex attributes to draw. When
		 *	not specified defaults to the `count` parameter passed to the
		 *	`AttributeArrays` constructor.
		 * @example
		 *	arrays.bindAndPointer();
		 *	arrays.drawTriangleStrip();
		 */
		drawTriangleStrip: (function (all) {
			return function (offset, count) {
				if (arguments.length < 2) {
					count = all;
					if (arguments.length < 1) {
						offset = 0;
					}
				}
				context.drawArrays(context.TRIANGLE_STRIP, offset, count);
			};
		})(count),

		/**
		 * Deletes all the arrays in the set.
		 *
		 * @method _delete
		 * @example
		 *	arrays._delete();
		 */
		_delete: function () {
			for (var i in arrays) {
				arrays[i]._delete();
			}
		}
	};
};

/**
 * Represents an element array.
 *
 * This class inherits `StaticElementArrayBuffer` and introduces utility
 * methods.
 *
 * @class oogl.ElementArray
 * @extends oogl.StaticElementArrayBuffer
 * @constructor
 * @param {Number[]} indices The element indices.
 * @param {String} [type='ushort'] TODO
 * @example
 *	var program = new oogl.AutoProgram(vertexSource, fragmentSource, ['in_Vertex', 'in_Color', 'in_TexCoord']);
 *	var arrays = new oogl.AttributeArrays();
 *	arrays.add3('float', vertices);
 *	arrays.add3('float', colors);
 *	arrays.add2('float', textureCoordinates);
 *	arrays.bindAndPointer();
 *	var elements = new oogl.ElementArray(indices);
 *	elements.bind();
 *	program.use();
 *	elements.drawTriangles();
 */
context.ElementArray = function (indices, type) {
	var count = indices.length;

	var types = {
		'ubyte': context.UNSIGNED_BYTE,
		'ushort': context.UNSIGNED_SHORT
	};
	if (!types.hasOwnProperty(type || 'ushort')) {
		throw 'Invalid element type, must be either "ubyte" or "ubyte".';
	}

	var buffer = new context.StaticElementArrayBuffer(types[type]);
	buffer.bindAndData(indices);

	/**
	 * Draws the elements in `gl.TRIANGLES` mode.
	 *
	 * Equivalent to calling `gl.drawElements` with `gl.TRIANGLES`.
	 *
	 * @method drawTriangles
	 * @param {Number} [offset=0] The index of the first element to draw.
	 * @param {Number} [count] The number of elements to draw. When not
	 *	specified defaults to the `count` parameter passed to the `ElementArray`
	 *	constructor.
	 * @example
	 */
	buffer.drawTriangles = (function (all) {
		return function (offset, count) {
			if (arguments.length < 2) {
				count = all;
				if (arguments.length < 1) {
					offset = 0;
				}
			}
			context.drawElements(context.TRIANGLES, count, types[type], offset);
		};
	})(count);

	/**
	 * Draws the elements in `gl.TRIANGLE_FAN` mode.
	 *
	 * Equivalent to calling `gl.drawElements` with `gl.TRIANGLE_FAN`.
	 *
	 * @method drawTriangles
	 * @param {Number} [offset=0] The index of the first element to draw.
	 * @param {Number} [count] The number of elements to draw. When not
	 *	specified defaults to the `count` parameter passed to the `ElementArray`
	 *	constructor.
	 * @example
	 */
	buffer.drawTriangleFan = (function (all) {
		return function (offset, count) {
			if (arguments.length < 2) {
				count = all;
				if (arguments.length < 1) {
					offset = 0;
				}
			}
			context.drawElements(context.TRIANGLE_FAN, count, types[type], offset);
		};
	})(count);

	/**
	 * Draws the elements in `gl.TRIANGLE_STRIP` mode.
	 *
	 * Equivalent to calling `gl.drawElements` with `gl.TRIANGLE_STRIP`.
	 *
	 * @method drawTriangleStrip
	 * @param {Number} [offset=0] The index of the first element to draw.
	 * @param {Number} [count] The number of elements to draw. When not
	 *	specified defaults to the `count` parameter passed to the `ElementArray`
	 *	constructor.
	 * @example
	 */
	buffer.drawTriangleStrip = (function (all) {
		return function (offset, count) {
			if (arguments.length < 2) {
				count = all;
				if (arguments.length < 1) {
					offset = 0;
				}
			}
			context.drawElements(context.TRIANGLE_STRIP, count, types[type], offset);
		};
	})(count);

	return buffer;
};
