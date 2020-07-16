/**
 * @typedef {[]Number} Coordinate
 */

/**
 * Get the item at index of array taking into account looping
 * e.g. Arr = [1,2,3]  Arr[-1] = 3
 * @param {Array} arr - Any array
 * @param {Integer} i - Integer to access
 * @param {Boolean} loop = true - Whether to loop array access
 */
const index = (arr, i, loop = true) => arr[loop ? (arr.length + i) % arr.length : i]

/**
 * Calculates the line between two points A & B
 * @param {Coordinate} a - A coordinate
 * @param {Coordinate} b - B coordinate
 * @returns {Object<*>}
 */
const line = ([aX, aY], [bX, bY]) => {
  const lX = bX - aX
  const lY = bY - aY

  return {
    l: Math.sqrt(lX * lX + lY * lY),
    a: Math.atan2(lY, lX)
  }
}

/**
 * Calculate the control point for a point on the path based on its neigbors
 * @param {Coordinate} curr - Coordinate of the current point
 * @param {Coordinate} prev - Coordinate of previous point in path, will use curr if undefined
 * @param {Coordinate} next - Coordinate of next point in path, will use curr if undefined
 * @param {Number} smoothing - The smoothing factor for the curve, i.e. magnitude of control point
 * @param {Boolean} end - Whether or not its an end control point, used for flipping
 */
const cpoint = (curr, prev = curr, next = curr, smoothing = 0.2, end = false) => {
  const { l: oL, a: oA } = line(prev, next)

  /* Rotate angle for end control points */
  const a = oA + (end ? Math.PI : 0)
  const l = oL * smoothing

  const x = curr[0] + Math.cos(a) * l
  const y = curr[1] + Math.sin(a) * l

  return [x, y]
}

// ----------------------------------------------------------------
/**
 * Segment of an SVG path for drawing a curve with bezier smoothing
 * @param {Number} smoothing - the amount of smoothing on the curves
 * @param {Boolean} close - whether to close the path
 * @param {Coordinate} p - The current coordinate
 * @param {Integer} i - The index of the coordinate, p, in the array
 * @param {[]Coordinate} arr - the original array of points
 */
export const bezierPath = (smoothing = 0.2, close = true) => (p, i, arr) => {
  const [pX, pY] = p
  const [cpsX, cpsY] = cpoint(index(arr, i - 1), index(arr, i - 2), p, smoothing, false)
  const [cpeX, cpeY] = cpoint(p, index(arr, i - 1), index(arr, i + 1), smoothing, true)

  return `C${[cpsX, cpsY, cpeX, cpeY, pX, pY].map(i => +i.toFixed(2)).join(',')}`
}

/**
 * Segment of an SVG path for drawing a line to a coordinate
 * @param {Coordinate} points - A tuple of x & y coordinates
 * @returns {String}
 */
export const linePath = ([x, y]) => `L${x},${y}`

/**
 * svgPath will generate a path for a list of points
 *
 * @param {[]Coordinate} points - An array of [x,y] points
 * @param {} cmd -
 * @param {Number} close = true - Whether to close the path
 * @returns {String}
 */
export const svgPath = (points, cmd, close = true) => {
  const d = points.reduce(
    (acc, [x, y], i, arr) => i === 0
      ? `M${x},${y}`
      : `${acc} ${cmd([x, y], i, arr)}`, ''
  )

  return close ? `${d}${cmd(points[0], 0, points)}Z` : d
}
