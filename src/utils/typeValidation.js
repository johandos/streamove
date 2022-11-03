/**
 * Used for custom validations
 * @param stream {String}
 * @param time {String}
 * @param classSlug {String}
 * @constructor
 */
function StreamData (stream, time, classSlug) {
  this.stream = stream
  this.time = time
  this.classSlug = classSlug
}

export {
  StreamData
}
