/*global OOGL: false */

/**
 * A mutable 2x2 matrix.
 *
 * @class OOGL.Matrix2
 * @constructor
 * @param {Number[]} data A 4-element array of the floating point values to be
 *	put into the matrix.
 *
 * Matrix elements are specified in column-major order.
 *
 * The specified `data` array is duplicated into the matrix, changes to it will
 * not affect the content of the matrix.
 *
 * An exception is thrown if the length of the `data` array is not 4.
 * @example
 *	var matrix = new OOGL.Matrix2([1, 0, 0, 1]); // creates the 2x2 identity matrix
 */
OOGL.Matrix2 = function (data) {
	if (data.length != 4) {
		throw 'A 2x2 matrix must have exactly 4 elements.';
	}

	/**
	 * The element at cell (0, 0) of this matrix.
	 *
	 * @property 0
	 * @type Number
	 * @example
	 *	var a00 = matrix[0];
	 */

	/**
	 * The element at cell (1, 0) of this matrix.
	 *
	 * @property 1
	 * @type Number
	 * @example
	 *	var a10 = matrix[1];
	 */

	/**
	 * The element at cell (0, 1) of this matrix.
	 *
	 * @property 2
	 * @type Number
	 * @example
	 *	var a01 = matrix[2];
	 */

	/**
	 * The element at cell (1, 1) of this matrix.
	 *
	 * @property 3
	 * @type Number
	 * @example
	 *	var a11 = matrix[3];
	 */
	for (var i = 0; i < 4; i++) {
		this[i] = data[i];
	}
};

OOGL.Matrix2.prototype = {
	/**
	 * Returns the element at the specified row and column in the matrix.
	 *
	 * Row and column indices are zero-based. This method is equivalent to
	 * fetching the `j * 2 + i`-th element of the array:
	 *
	 *	matrix.get(i, j) == matrix[j * 2 + i] // true
	 *
	 * @method get
	 * @param {Number} i The row index.
	 * @param {Number} j The column index.
	 * @return {Number} The value at the specified row and column.
	 * @example
	 *	var m = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var determinant = m.get(0, 0) * m.get(1, 1) - m.get(0, 1) * m.get(1, 0); // -5
	 */
	get: function (i, j) {
		return this[j * 2 + i];
	},

	/**
	 * Changes the element at the specified row and column in the matrix.
	 *
	 * Row and column indices are zero-based. This method is equivalent to
	 * setting the `j * 2 + i`-th element of the array:
	 *
	 *	matrix.put(i, j, x);
	 *	matrix[j * 2 + i] = x; // same as previous
	 *
	 * @method put
	 * @param {Number} i The row index.
	 * @param {Number} j The column index.
	 * @param {Number} value The value to put at the specified row and column.
	 * @example
	 *	var matrix = new OOGL.Matrix2([3, 3, 0, 3]);
	 *	matrix.put(0, 1, 3); // now matrix is [3, 3, 3, 3]
	 */
	put: function (i, j, value) {
		this[j * 2 + i] = value;
		return this;
	},

	/**
	 * Transposes this matrix.
	 *
	 * @method transpose
	 * @chainable
	 * @example
	 *	var matrix = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	matrix.transpose(); // matrix is now [1, 3, 2, 4]
	 */
	transpose: function () {
		var newArray = [this[0], this[2], this[1], this[3]];
		for (var i = 0; i < 4; i++) {
			this[i] = newArray[i];
		}
		return this;
	},

	/**
	 * Computes the transposed matrix and returns it as a new `Matrix2` object.
	 * This matrix is not changed.
	 *
	 * @method getTransposed
	 * @return {OOGL.Matrix2} The transposed matrix.
	 * @example
	 *	var m1 = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var m2 = m1.getTransposed(); // m2 is [1, 3, 2, 4], m1 is still [1, 2, 3, 4]
	 */
	getTransposed: function () {
		return new OOGL.Matrix2([this[0], this[2], this[1], this[3]]);
	},

	/**
	 * Adds the specified matrix to this one.
	 *
	 * Each element of the specified matrix is added up to the respective
	 * element in this matrix. The specified `m` matrix is not changed.
	 *
	 * @method add
	 * @param {OOGL.Matrix2} m The matrix to add.
	 * @chainable
	 * @example
	 *	var matrix = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	matrix.add(new OOGL.Matrix2([4, 3, 2, 1])); // matrix is now [5, 5, 5, 5]
	 */
	add: function (m) {
		for (var i = 0; i < 4; i++) {
			this[i] += m[i];
		}
		return this;
	},

	/**
	 * Adds the specified matrix to this one and returns the sum as a new
	 * `Matrix2` object. This matrix is not changed.
	 *
	 * @method plus
	 * @param {OOGL.Matrix2} m The matrix to add.
	 * @return {OOGL.Matrix2} The sum matrix.
	 * @example
	 *	var m1 = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var m2 = new OOGL.Matrix2([4, 3, 2, 1]);
	 *	var m3 = m1.plus(m2); // [5, 5, 5, 5]
	 */
	plus: function (m) {
		var newArray = [];
		for (var i = 0; i < 4; i++) {
			newArray.push(this[i] + m[i]);
		}
		return new OOGL.Matrix2(newArray);
	},

	/**
	 * Subtracts the specified matrix to this one.
	 *
	 * Each element of the specified matrix is subtracted to the respective
	 * element in this matrix. The specified `m` matrix is not changed.
	 *
	 * @method subtract
	 * @param {OOGL.Matrix2} m The matrix to subtract.
	 * @chainable
	 * @example
	 *	var matrix = new OOGL.Matrix2([5, 5, 5, 5]);
	 *	matrix.subtract(new OOGL.Matrix2([4, 3, 2, 1])); // matrix is now [1, 2, 3, 4]
	 */
	subtract: function (m) {
		for (var i = 0; i < 4; i++) {
			this[i] -= m[i];
		}
		return this;
	},

	/**
	 * Subtracts the specified matrix to this one and returns the difference as
	 * a new `Matrix2` object. This matrix is not changed.
	 *
	 * @method minus
	 * @param {OOGL.Matrix2} m The matrix to subtract.
	 * @return {OOGL.Matrix2} The difference matrix.
	 * @example
	 *	var m1 = new OOGL.Matrix2([5, 5, 5, 5]);
	 *	var m2 = new OOGL.Matrix2([4, 3, 2, 1]);
	 *	var m3 = m1.minus(m2); // [1, 2, 3, 4]
	 */
	minus: function (m) {
		var newArray = [];
		for (var i = 0; i < 4; i++) {
			newArray.push(this[i] - m[i]);
		}
		return new OOGL.Matrix2(newArray);
	},

	/**
	 * Multiplies this matrix by the specified constant factor. This method
	 * changes the original matrix.
	 *
	 * @method multiply
	 * @param {Number} x The multiplying factor.
	 * @chainable
	 * @example
	 *	var matrix = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	matrix.multiply(2); // matrix is now [2, 4, 6, 8]
	 */
	multiply: function (x) {
		for (var i = 0; i < 4; i++) {
			this[i] *= x;
		}
		return this;
	},

	/**
	 * Multiplies this matrix by the specified constant factor and returns the
	 * product as a new `Matrix2` object. This matrix is not changed.
	 *
	 * @method by
	 * @param {Number} x The multiplying factor.
	 * @return {OOGL.Matrix2} The product matrix.
	 * @example
	 *	var m1 = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var m2 = m1.by(2); // [2, 4, 6, 8]
	 */

	/**
	 * Left-multiplies this matrix by the specified `Vector2` object and returns
	 * the product as a new `Vector2` object. Neither this matrix nor the
	 * specified vector are changed.
	 *
	 * @method by
	 * @param {OOGL.Vector2} v The vector to multiply.
	 * @return {OOGL.Vector2} The product vector.
	 * @example
	 *	var m = new OOGL.Matrix2([2, 0, 0, 2]);
	 *	var v = new OOGL.Vector2(2, 2);
	 *	var w = m.by(v); // (4, 4)
	 */

	/**
	 * Left-multiplies this matrix by the specified `Matrix2` object and returns
	 * the product as a new `Matrix2` object. Neither this matrix nor the
	 * specified one are changed.
	 *
	 * @method by
	 * @param {OOGL.Matrix2} v The matrix to multiply.
	 * @return {OOGL.Matrix2} The product matrix.
	 * @example
	 *	var m1 = new OOGL.Matrix2([2, 0, 0, 2]);
	 *	var m2 = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var m3 = m1.by(m2); // (2, 4, 6, 8)
	 */
	by: function (x) {
		if (x instanceof OOGL.Vector2) {
			return new OOGL.Vector2(
				this[0] * x.x + this[2] * x.y,
				this[1] * x.x + this[3] * x.y
				);
		} else if (x instanceof OOGL.Matrix2) {
			return new OOGL.Matrix2([
				this[0] * x[0] + this[2] * x[1],
				this[1] * x[0] + this[3] * x[1],
				this[0] * x[2] + this[2] * x[3],
				this[1] * x[2] + this[3] * x[3]
			]);
		} else {
			var newArray = [];
			for (var i = 0; i < 4; i++) {
				newArray.push(this[i] * x);
			}
			return new OOGL.Matrix2(newArray);
		}
	},

	/**
	 * Computes the determinant of this matrix.
	 *
	 * @method determinant
	 * @return {Number} The computed determinant.
	 * @example
	 *	var m = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var d = m.determinant(); // -2
	 */
	determinant: function () {
		return this[0] * this[3] - this[1] * this[2];
	},

	/**
	 * Inverts this matrix.
	 *
	 * @method invert
	 * @chainable
	 * @example
	 *	var matrix = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	matrix.invert(); // matrix is now [-0.5, -1, -1.5, -2]
	 */
	invert: function () {
		var determinant = this[0] * this[3] - this[1] * this[2];
		var newArray = [
			this[3] / determinant,
			this[2] / determinant,
			this[1] / determinant,
			this[0] / determinant
		];
		for (var i = 0; i < 4; i++) {
			this[i] = newArray[i];
		}
		return this;
	},

	/**
	 * Computes the inverse matrix and returns it as a new `Matrix2` object.
	 * This matrix is not changed.
	 *
	 * @method getInverse
	 * @return {OOGL.Matrix2} The inverse matrix.
	 * @example
	 *	var m1 = new OOGL.Matrix2([1, 2, 3, 4]);
	 *	var m2 = m1.getInverse(); // [-0.5, -1, -1.5, -2]
	 */
	getInverse: function () {
		var determinant = this[0] * this[3] - this[1] * this[2];
		return new OOGL.Matrix2([
			this[3] / determinant,
			this[2] / determinant,
			this[1] / determinant,
			this[0] / determinant
		]);
	}
};

/**
 * The 2x2 null matrix.
 *
 * @property OOGL.Matrix2.NULL
 * @static
 * @type OOGL.Matrix2
 */
OOGL.Matrix2.NULL = new OOGL.Matrix2([0, 0, 0, 0]);

/**
 * The 2x2 identity matrix.
 *
 * @property OOGL.Matrix2.IDENTITY
 * @static
 * @type OOGL.Matrix2
 */
OOGL.Matrix2.IDENTITY = new OOGL.Matrix2([1, 0, 0, 1]);

/**
 * Creates a 2D rotation matrix with the specified angle.
 *
 * @class OOGL.RotationMatrix2
 * @extends OOGL.Matrix2
 * @constructor
 * @param {Number} a The (counterclockwise) rotation angle, in radians.
 * @example
 *	var rotation = new OOGL.RotationMatrix2(30 * Math.PI / 180); // 30 degrees rotation
 */
OOGL.RotationMatrix2 = function (a) {
	var s = Math.sin(a);
	var c = Math.cos(a);
	return new OOGL.Matrix2([c, s, -s, c]);
};

/**
 * Creates a 2D scaling matrix with the specified X and Y scaling factors.
 *
 * @class OOGL.ScalingMatrix2
 * @extends OOGL.Matrix2
 * @constructor
 * @param {Number} x The X scaling factor.
 * @param {Number} y The Y scaling factor.
 * @example
 *	var scaling = new OOGL.ScalingMatrix2(0.5, 0.5); // halves the size of anything
 */
OOGL.ScalingMatrix2 = function (x, y) {
	return new OOGL.Matrix2([x, 0, 0, y]);
};
